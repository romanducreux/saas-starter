import { redirect } from "next/navigation";
import { DEFAULT_EVENT_ID } from "@/lib/registration-events";

export const metadata = {
  title: "Redirection vers l'inscription",
  robots: { index: false, follow: false },
};

type LegacyFormPageProps = {
  searchParams: Promise<{ event?: string | string[] }>;
};

export default async function LegacyFormPage({
  searchParams,
}: LegacyFormPageProps) {
  const params = await searchParams;
  const requestedEvent = Array.isArray(params.event)
    ? params.event[0]
    : params.event;
  const eventId = requestedEvent?.trim().slice(0, 80) || DEFAULT_EVENT_ID;

  redirect(`/inscription?event=${encodeURIComponent(eventId)}`);
}
