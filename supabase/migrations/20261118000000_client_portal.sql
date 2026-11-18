-- Kirevo client portal: accounts, organizations, offers and performance data.
-- Run this migration on the Supabase project before enabling production accounts.

create extension if not exists pgcrypto;
create schema if not exists private;

revoke all on schema private from public, anon;
grant usage on schema private to authenticated;

create table public.profiles (
  user_id uuid primary key references auth.users(id) on delete cascade,
  full_name text not null check (char_length(full_name) between 2 and 120),
  avatar_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.organizations (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(name) between 2 and 160),
  slug text not null unique,
  sector text,
  timezone text not null default 'Europe/Paris',
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.organization_members (
  organization_id uuid not null references public.organizations(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  role text not null default 'member' check (role in ('owner', 'admin', 'member')),
  created_at timestamptz not null default now(),
  primary key (organization_id, user_id)
);

create index organization_members_user_id_idx on public.organization_members(user_id);

create table public.offers (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null references public.organizations(id) on delete cascade,
  name text not null,
  description text,
  status text not null default 'draft' check (status in ('draft', 'active', 'paused', 'ended')),
  setup_amount_cents integer not null default 0 check (setup_amount_cents >= 0),
  monthly_amount_cents integer not null default 0 check (monthly_amount_cents >= 0),
  currency text not null default 'EUR' check (currency ~ '^[A-Z]{3}$'),
  starts_at date,
  renews_at date,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index offers_organization_id_idx on public.offers(organization_id);

create table public.offer_modules (
  id uuid primary key default gen_random_uuid(),
  offer_id uuid not null references public.offers(id) on delete cascade,
  module_key text not null,
  title text not null,
  description text,
  setup_amount_cents integer not null default 0 check (setup_amount_cents >= 0),
  monthly_amount_cents integer not null default 0 check (monthly_amount_cents >= 0),
  position smallint not null default 0,
  created_at timestamptz not null default now(),
  unique (offer_id, module_key)
);

create index offer_modules_offer_id_idx on public.offer_modules(offer_id);

create table public.automations (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null references public.organizations(id) on delete cascade,
  created_by uuid references auth.users(id) on delete set null,
  name text not null check (char_length(name) between 2 and 160),
  description text,
  status text not null default 'draft' check (status in ('draft', 'active', 'paused')),
  configuration jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index automations_organization_id_idx on public.automations(organization_id);

create table public.execution_events (
  id bigint generated always as identity primary key,
  organization_id uuid not null references public.organizations(id) on delete cascade,
  automation_id uuid references public.automations(id) on delete set null,
  status text not null check (status in ('success', 'warning', 'error')),
  duration_ms integer check (duration_ms is null or duration_ms >= 0),
  estimated_seconds_saved integer not null default 0 check (estimated_seconds_saved >= 0),
  metadata jsonb not null default '{}'::jsonb,
  executed_at timestamptz not null default now()
);

create index execution_events_organization_date_idx on public.execution_events(organization_id, executed_at desc);
create index execution_events_automation_id_idx on public.execution_events(automation_id);

create table public.activity_events (
  id bigint generated always as identity primary key,
  organization_id uuid not null references public.organizations(id) on delete cascade,
  automation_id uuid references public.automations(id) on delete set null,
  event_type text not null,
  title text not null,
  description text,
  status text not null default 'info' check (status in ('info', 'success', 'warning', 'error')),
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create index activity_events_organization_date_idx on public.activity_events(organization_id, created_at desc);

create table public.integration_connections (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null references public.organizations(id) on delete cascade,
  provider text not null,
  label text not null,
  status text not null default 'available' check (status in ('available', 'connected', 'attention', 'disabled')),
  connected_at timestamptz,
  updated_at timestamptz not null default now(),
  unique (organization_id, provider)
);

create index integration_connections_organization_id_idx on public.integration_connections(organization_id);

create or replace function private.user_organization_ids()
returns setof uuid
language sql
security definer
set search_path = ''
stable
as $$
  select membership.organization_id
  from public.organization_members as membership
  where membership.user_id = (select auth.uid())
$$;

create or replace function private.is_organization_admin(target_organization_id uuid)
returns boolean
language sql
security definer
set search_path = ''
stable
as $$
  select exists (
    select 1
    from public.organization_members as membership
    where membership.organization_id = target_organization_id
      and membership.user_id = (select auth.uid())
      and membership.role in ('owner', 'admin')
  )
$$;

revoke all on function private.user_organization_ids() from public, anon;
revoke all on function private.is_organization_admin(uuid) from public, anon;
grant execute on function private.user_organization_ids() to authenticated;
grant execute on function private.is_organization_admin(uuid) to authenticated;

alter table public.profiles enable row level security;
alter table public.organizations enable row level security;
alter table public.organization_members enable row level security;
alter table public.offers enable row level security;
alter table public.offer_modules enable row level security;
alter table public.automations enable row level security;
alter table public.execution_events enable row level security;
alter table public.activity_events enable row level security;
alter table public.integration_connections enable row level security;

create policy "profiles_select_own" on public.profiles for select to authenticated
using ((select auth.uid()) = user_id);
create policy "profiles_update_own" on public.profiles for update to authenticated
using ((select auth.uid()) = user_id)
with check ((select auth.uid()) = user_id);

create policy "organizations_select_members" on public.organizations for select to authenticated
using (id in (select private.user_organization_ids()));
create policy "organizations_update_admins" on public.organizations for update to authenticated
using ((select private.is_organization_admin(id)))
with check ((select private.is_organization_admin(id)));

create policy "members_select_organization" on public.organization_members for select to authenticated
using (organization_id in (select private.user_organization_ids()));
create policy "members_insert_admins" on public.organization_members for insert to authenticated
with check ((select private.is_organization_admin(organization_id)));
create policy "members_update_admins" on public.organization_members for update to authenticated
using ((select private.is_organization_admin(organization_id)))
with check ((select private.is_organization_admin(organization_id)));
create policy "members_delete_admins" on public.organization_members for delete to authenticated
using ((select private.is_organization_admin(organization_id)));

create policy "offers_select_members" on public.offers for select to authenticated
using (organization_id in (select private.user_organization_ids()));
create policy "offer_modules_select_members" on public.offer_modules for select to authenticated
using (exists (
  select 1 from public.offers
  where public.offers.id = offer_modules.offer_id
    and public.offers.organization_id in (select private.user_organization_ids())
));

create policy "automations_select_members" on public.automations for select to authenticated
using (organization_id in (select private.user_organization_ids()));
create policy "automations_insert_admins" on public.automations for insert to authenticated
with check ((select private.is_organization_admin(organization_id)));
create policy "automations_update_admins" on public.automations for update to authenticated
using ((select private.is_organization_admin(organization_id)))
with check ((select private.is_organization_admin(organization_id)));
create policy "automations_delete_admins" on public.automations for delete to authenticated
using ((select private.is_organization_admin(organization_id)));

create policy "execution_events_select_members" on public.execution_events for select to authenticated
using (organization_id in (select private.user_organization_ids()));
create policy "activity_events_select_members" on public.activity_events for select to authenticated
using (organization_id in (select private.user_organization_ids()));
create policy "integration_connections_select_members" on public.integration_connections for select to authenticated
using (organization_id in (select private.user_organization_ids()));

revoke all on all tables in schema public from anon;
revoke all on public.offers, public.offer_modules, public.execution_events, public.activity_events, public.integration_connections from authenticated;
grant select on public.offers, public.offer_modules, public.execution_events, public.activity_events, public.integration_connections to authenticated;
grant select, update on public.profiles, public.organizations to authenticated;
grant select, insert, update, delete on public.organization_members, public.automations to authenticated;
grant usage, select on all sequences in schema public to authenticated;

create or replace function public.set_updated_at()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger profiles_set_updated_at before update on public.profiles
for each row execute function public.set_updated_at();
create trigger organizations_set_updated_at before update on public.organizations
for each row execute function public.set_updated_at();
create trigger offers_set_updated_at before update on public.offers
for each row execute function public.set_updated_at();
create trigger automations_set_updated_at before update on public.automations
for each row execute function public.set_updated_at();
create trigger integration_connections_set_updated_at before update on public.integration_connections
for each row execute function public.set_updated_at();

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
  organization_id uuid;
  organization_name text;
  profile_name text;
  organization_slug text;
begin
  profile_name := coalesce(nullif(trim(new.raw_user_meta_data ->> 'full_name'), ''), split_part(new.email, '@', 1));
  organization_name := coalesce(nullif(trim(new.raw_user_meta_data ->> 'company_name'), ''), 'Mon entreprise');
  organization_slug := coalesce(
    nullif(trim(both '-' from regexp_replace(lower(organization_name), '[^a-z0-9]+', '-', 'g')), ''),
    'espace'
  ) || '-' || substr(replace(new.id::text, '-', ''), 1, 8);

  insert into public.profiles (user_id, full_name)
  values (new.id, profile_name);

  insert into public.organizations (name, slug, created_by)
  values (organization_name, organization_slug, new.id)
  returning id into organization_id;

  insert into public.organization_members (organization_id, user_id, role)
  values (organization_id, new.id, 'owner');

  return new;
end;
$$;

create trigger on_auth_user_created
after insert on auth.users
for each row execute function public.handle_new_user();
