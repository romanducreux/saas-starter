"use client";

import { useActionState } from "react";
import { updatePasswordAction, type AuthState } from "@/app/actions/auth";
import Icon from "@/components/workspace/Icon";

export default function ResetPasswordForm({ configured }: { configured: boolean }) {
  const [state, formAction, pending] = useActionState<AuthState, FormData>(updatePasswordAction, {});
  const fieldClass = "mt-2 h-12 w-full rounded-2xl border border-[#D7DAE2] bg-white px-4 text-sm outline-none transition focus:border-[#8B8CFF] focus:ring-4 focus:ring-[#5B5CF0]/10";

  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#5B5CF0]">Sécuriser votre compte</p>
      <h1 className="mt-3 text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">Choisissez un nouveau mot de passe</h1>
      <p className="mt-3 text-sm leading-6 text-[#667085]">Utilisez un mot de passe unique que vous n’employez sur aucun autre service.</p>

      {state.message ? <div role="alert" className="mt-5 rounded-2xl border border-[#FECDCA] bg-[#FEF3F2] px-4 py-3 text-sm text-[#B42318]">{state.message}</div> : null}

      <form action={formAction} className="mt-7 space-y-4">
        <label className="block text-sm font-medium text-[#344054]">Nouveau mot de passe
          <input name="password" type="password" autoComplete="new-password" minLength={10} required className={fieldClass} />
          {state.fieldErrors?.password ? <span className="mt-1.5 block text-xs font-medium text-[#D92D20]">{state.fieldErrors.password}</span> : <span className="mt-1.5 block text-xs text-[#98A2B3]">Au moins 10 caractères, une lettre et un chiffre.</span>}
        </label>
        <label className="block text-sm font-medium text-[#344054]">Confirmer le mot de passe
          <input name="passwordConfirmation" type="password" autoComplete="new-password" minLength={10} required className={fieldClass} />
          {state.fieldErrors?.passwordConfirmation ? <span className="mt-1.5 block text-xs font-medium text-[#D92D20]">{state.fieldErrors.passwordConfirmation}</span> : null}
        </label>
        <button type="submit" disabled={pending || !configured} className="flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#5B5CF0] to-[#7C3AED] px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_32px_rgba(91,92,240,0.25)] transition hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-[#5B5CF0]/20 disabled:cursor-not-allowed disabled:opacity-55">
          {pending ? <Icon name="refresh" className="h-4 w-4 animate-spin" /> : null}
          {pending ? "Enregistrement…" : "Enregistrer le mot de passe"}
        </button>
      </form>
    </div>
  );
}
