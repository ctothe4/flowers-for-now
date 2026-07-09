export const WHATSAPP_URL =
  "https://wa.me/?text=" +
  encodeURIComponent(
    "Hi Receive Your Flowers — I'd like to get started with an Invitation Flowers package."
  );

export type TierId = "basic" | "standard" | "video" | "together";

export type Tier = {
  id: TierId;
  name: string;
  price: string;
  priceNumeric: number;
  blurb: string;
  features: string[];
  turnaroundHours: number;
  popular?: boolean;
  longDescription: string;
  includes: string[];
  bestFor: string;
  requiresVideo?: boolean;
};

export const TIERS: Tier[] = [
  {
    id: "basic",
    name: "Basic",
    price: "K400",
    priceNumeric: 400,
    blurb: "A quiet, elegant invitation — beautifully made.",
    features: ["Single-page digital invite", "1 template", "WhatsApp RSVP tracking"],
    turnaroundHours: 48,
    longDescription:
      "The Basic invitation is a single-page digital invite — restrained, typographic, and warm. Ideal when you want the tone to feel intimate rather than produced.",
    includes: [
      "Single-page digital invitation",
      "Choice of 1 template from our curated library",
      "WhatsApp RSVP tracking",
      "Open or closed guest registration",
      "Host approval of individual RSVPs",
    ],
    bestFor: "Small gatherings, intimate services, private ceremonies.",
  },
  {
    id: "standard",
    name: "Standard",
    price: "K700",
    priceNumeric: 700,
    blurb: "Custom design with a live RSVP dashboard.",
    features: [
      "Custom design",
      "Full template gallery",
      "Branded RSVP dashboard",
      "Guest reminders",
    ],
    turnaroundHours: 72,
    longDescription:
      "The Standard invitation adds a custom design pass and a live RSVP dashboard, so you can see who's coming in real time and send gentle reminders as the day approaches.",
    includes: [
      "Custom-designed invitation page",
      "Access to the full template gallery",
      "Branded, real-time RSVP dashboard",
      "Automated guest reminders",
      "Open or closed guest registration",
      "Host approval of individual RSVPs",
    ],
    bestFor: "Weddings, showers, milestone birthdays, corporate gatherings.",
  },
  {
    id: "video",
    name: "Video Invitation",
    price: "K1,300",
    priceNumeric: 1300,
    blurb: "Add your voice and face to the invitation.",
    features: [
      "Everything in Standard",
      "Host video message embedded in the invite",
      "Professional trim and edit",
    ],
    turnaroundHours: 96,
    requiresVideo: true,
    longDescription:
      "The Video Invitation embeds a short video from the host inside the invitation page itself — something static invitation tools can't do. Guests hear your voice before they even open the map.",
    includes: [
      "Everything in Standard",
      "Host video message embedded directly in the invite",
      "Professional trim, colour, and audio pass",
      "Auto-play or tap-to-play options",
      "Open or closed guest registration",
      "Host approval of individual RSVPs",
    ],
    bestFor: "Weddings, memorial services, milestone celebrations where tone matters.",
  },
  {
    id: "together",
    name: "Together",
    price: "K2,000",
    priceNumeric: 2000,
    blurb: "Invite them. Then let them celebrate you back.",
    features: [
      "Video Invitation package",
      "Receive Your Flowers video tribute bouquet campaign",
      "For the same occasion",
    ],
    turnaroundHours: 96,
    requiresVideo: true,
    popular: true,
    longDescription:
      "Together pairs the Video Invitation with a Receive Your Flowers video tribute bouquet campaign for the same occasion — so the invitation opens the moment, and the tribute closes it. Guests aren't just invited; they're invited to celebrate you back.",
    includes: [
      "Video Invitation package in full",
      "Receive Your Flowers video tribute bouquet campaign",
      "Guest video submissions collected automatically",
      "Curated tribute film after the event",
      "Open or closed guest registration",
      "Host approval of individual RSVPs",
    ],
    bestFor: "Once-in-a-lifetime occasions — weddings, anniversaries, retirements, tributes.",
  },
];

export function findTier(id: string | undefined): Tier | undefined {
  return TIERS.find((t) => t.id === id);
}

export type IntakeDraft = {
  tierId: TierId;
  paidAt: string;
  paymentRef: string;
  name: string;
  email: string;
};

const KEY = "ryf_invitation_intake";

export function saveDraft(d: IntakeDraft) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(KEY, JSON.stringify(d));
}

export function loadDraft(): IntakeDraft | null {
  if (typeof window === "undefined") return null;
  const raw = window.localStorage.getItem(KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as IntakeDraft;
  } catch {
    return null;
  }
}

export function clearDraft() {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(KEY);
}
