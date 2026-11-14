export type RegistrationEvent = {
  id: string;
  name: string;
  clientId: string;
  location: string;
};

export const DEFAULT_EVENT_ID = "jpo-bordeaux-2027";

const registrationEvents: Record<string, RegistrationEvent> = {
  [DEFAULT_EVENT_ID]: {
    id: DEFAULT_EVENT_ID,
    name: "Journée portes ouvertes Bordeaux 2027",
    clientId: "rh-pilote-001",
    location: "Bordeaux",
  },
};

export function getRegistrationEvent(
  eventId: string | string[] | undefined
): RegistrationEvent {
  const requestedId = Array.isArray(eventId) ? eventId[0] : eventId;

  return registrationEvents[requestedId ?? ""] ?? registrationEvents[DEFAULT_EVENT_ID];
}
