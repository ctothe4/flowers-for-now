import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Mail,
  PlayCircle,
  MessageCircle,
  Check,
  ShieldCheck,
  UserCheck,
} from "lucide-react";
import { useState } from "react";
import monogram from "@/assets/ryf-monogram.png";
import { InvitationsNav, InvitationsFooter } from "@/components/site/InvitationsChrome";
import { TIERS, WHATSAPP_URL } from "@/lib/invitations";

export const Route = createFileRoute("/invitations/")({
  head: () => ({
    meta: [
      { title: "Invitation Flowers — Receive Your Flowers" },
      {
        name: "description",
        content:
          "Elegant digital invitations with video messages and WhatsApp RSVPs — for weddings, memorials, birthdays, corporate events, and anniversaries.",
      },
      { property: "og:title", content: "Invitation Flowers — Receive Your Flowers" },
      {
        property: "og:description",
        content:
          "Invite them. Then let them celebrate you back. Digital invitations with video and WhatsApp RSVPs.",
      },
    ],
  }),
  component: InvitationsPage,
});

function Hero() {
  return (
    <section className="relative grain-bg overflow-hidden">
      <div className="container-narrow pt-16 sm:pt-24 lg:pt-28 pb-20 lg:pb-24">
        <div className="max-w-3xl reveal">
          <div className="flex items-center gap-3">
            <img
              src={monogram}
              alt=""
              aria-hidden
              width={28}
              height={28}
              className="w-7 h-7 rounded-md object-cover opacity-90"
            />
            <p className="label-eyebrow">Invitation Flowers</p>
          </div>
          <h1 className="font-display text-[2.6rem] sm:text-6xl lg:text-[4.2rem] leading-[1.03] mt-5 text-foreground">
            Invitation <span className="italic" style={{ color: "var(--rose)" }}>Flowers.</span>
          </h1>
          <p className="mt-6 text-xl sm:text-2xl text-foreground/85 font-display leading-snug max-w-2xl">
            Invite them. Then let them celebrate you back.
          </p>
          <p className="mt-5 text-lg text-foreground/75 leading-relaxed max-w-xl">
            Beautiful digital invitations for any occasion — weddings, memorials, birthdays,
            corporate events, and anniversaries — with video messages and WhatsApp RSVPs
            built in.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#pricing" className="btn-primary">
              Choose a package <ArrowRight className="w-4 h-4" />
            </a>
            <Link to="/invitations/templates" className="btn-ghost">
              Browse templates
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Why() {
  const items = [
    {
      icon: Mail,
      t: "Any Occasion",
      d: "Digital invitations for weddings, memorials, birthdays, and everything between.",
    },
    {
      icon: PlayCircle,
      t: "Video Invitations",
      d: "Upload or record a short video message that plays inside the invite before guests RSVP — something static invitation tools can't do.",
    },
    {
      icon: MessageCircle,
      t: "Seamless RSVPs",
      d: "Guests confirm attendance over WhatsApp. The host gets a live dashboard.",
    },
    {
      icon: ShieldCheck,
      t: "Open or Closed Registration",
      d: "Choose whether anyone with the link can RSVP, or only guests on a list you provide.",
    },
    {
      icon: UserCheck,
      t: "Host Approval",
      d: "Approve or deny individual RSVPs yourself. Every guest list stays in your control.",
    },
    {
      icon: ArrowRight,
      t: "Simple Flow",
      d: "Choose a package, pay, share your details. We build your invite and hand you the link.",
    },
  ];
  return (
    <section className="container-narrow py-24 lg:py-32">
      <div className="max-w-2xl">
        <p className="label-eyebrow">Why Invitation Flowers</p>
        <h2 className="font-display text-4xl lg:text-5xl mt-4 leading-[1.05] text-foreground">
          A softer, more human way to invite the people you love.
        </h2>
      </div>
      <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map(({ icon: Icon, t, d }) => (
          <div key={t} className="soft-card p-8 lg:p-9">
            <span
              className="inline-flex items-center justify-center w-11 h-11 rounded-full"
              style={{
                background: "var(--ivory)",
                border: "1px solid color-mix(in oklab, var(--ink) 12%, transparent)",
              }}
            >
              <Icon className="w-5 h-5" style={{ color: "var(--rose)" }} />
            </span>
            <h3 className="font-display text-2xl mt-5 text-foreground">{t}</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">{d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      t: "Choose a package",
      d: "Pick the invitation that fits the moment. Pay securely to reserve your build slot.",
    },
    {
      t: "Share your details",
      d: "Tell us the occasion, date, tone, and template preference in a short form.",
    },
    {
      t: "We build your invite",
      d: "We craft your invitation page and RSVP dashboard, usually within 48–96 hours.",
    },
    {
      t: "Send your link",
      d: "We hand you your shareable link and dashboard access over WhatsApp. You send. Guests RSVP.",
    },
  ];
  return (
    <section
      id="how"
      className="py-24 lg:py-32"
      style={{ background: "color-mix(in oklab, var(--champagne) 22%, var(--ivory))" }}
    >
      <div className="container-narrow">
        <div className="text-center max-w-2xl mx-auto">
          <p className="label-eyebrow">How It Works</p>
          <h2 className="font-display text-4xl lg:text-5xl mt-4 leading-[1.05] text-foreground">
            Four steps, from invite to afterglow.
          </h2>
        </div>
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={s.t} className="soft-card p-7 h-full">
              <div className="font-display text-5xl" style={{ color: "var(--rose)" }}>
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="font-display text-2xl mt-4 text-foreground">{s.t}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section
      id="pricing"
      className="py-24 lg:py-32"
      style={{ background: "color-mix(in oklab, var(--blush) 18%, var(--ivory))" }}
    >
      <div className="container-narrow">
        <div className="text-center max-w-2xl mx-auto">
          <p className="label-eyebrow">Packages</p>
          <h2 className="font-display text-4xl lg:text-5xl mt-4 leading-[1.05] text-foreground">
            Choose the invitation that fits the moment.
          </h2>
          <p className="mt-5 text-sm text-muted-foreground">
            All packages are quoted in Zambian Kwacha. Payment is taken before we begin your build.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {TIERS.map((p) => (
            <div
              key={p.id}
              className={`soft-card p-8 lg:p-9 flex flex-col relative ${p.popular ? "lg:-translate-y-3" : ""}`}
              style={
                p.popular
                  ? { background: "var(--ink)", color: "var(--ivory)", borderColor: "transparent" }
                  : undefined
              }
            >
              {p.popular && (
                <span
                  className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.22em] uppercase px-3 py-1.5 rounded-full font-medium"
                  style={{ background: "var(--rose)", color: "var(--ivory)" }}
                >
                  Most Popular
                </span>
              )}
              <h3 className="font-display text-2xl">{p.name}</h3>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="font-display text-5xl">{p.price}</span>
              </div>
              <p
                className={`mt-3 leading-relaxed ${p.popular ? "text-ivory/70" : "text-muted-foreground"}`}
              >
                {p.blurb}
              </p>
              <ul className="mt-7 space-y-3 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check
                      className="w-4 h-4 mt-0.5 shrink-0"
                      style={{ color: p.popular ? "var(--blush)" : "var(--rose)" }}
                    />
                    <span className={p.popular ? "text-ivory/90" : "text-foreground/90"}>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 space-y-2">
                <Link
                  to="/invitations/$package"
                  params={{ package: p.id }}
                  className={p.popular ? "btn-primary w-full" : "btn-ghost w-full"}
                  style={
                    p.popular ? { background: "var(--ivory)", color: "var(--ink)" } : undefined
                  }
                >
                  Find out more <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const FAQ_ITEMS = [
  {
    q: "What occasions do Invitation Flowers work for?",
    a: "Anything worth marking — weddings, memorial services, showers, birthdays, anniversaries, corporate events, retirements, graduations. If it's a moment that gathers people, we can design the invitation for it.",
  },
  {
    q: "How do RSVPs work?",
    a: "Guests RSVP directly inside the invitation, and the host sees every response in a live dashboard. On Standard and above, we send gentle automated reminders as the date approaches. You can choose Open registration (anyone with the link can RSVP) or Closed registration (only guests on a list you provide), and approve or deny individual RSVPs yourself.",
  },
  {
    q: "Can guests RSVP directly, without going through me?",
    a: "Yes. Every guest RSVPs through their own invitation link — no back-and-forth with the host. If you're on Closed registration, only invited guests can respond; on Open, anyone with the link can. Either way, you approve who makes the final list.",
  },
  {
    q: "How does the video message work on Video Invitation and Together?",
    a: "You record a short video (phone quality is fine) or upload one you already have. We trim, colour, and audio-balance it, then embed it directly inside your invitation page so guests hear from you before they RSVP. On Together, guests can then send video tributes back to you through Receive Your Flowers after the occasion.",
  },
  {
    q: "How fast is turnaround?",
    a: "Basic invitations are typically ready within 48 hours of receiving your details. Standard is 72 hours. Video Invitation and Together take up to 96 hours because of the editing pass.",
  },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="container-narrow py-24 lg:py-32">
      <div className="max-w-2xl mx-auto text-center">
        <p className="label-eyebrow">Questions</p>
        <h2 className="font-display text-4xl lg:text-5xl mt-4 leading-[1.05] text-foreground">
          What people ask us first.
        </h2>
      </div>
      <div className="mt-14 max-w-3xl mx-auto space-y-3">
        {FAQ_ITEMS.map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={item.q} className="soft-card overflow-hidden">
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full flex items-start justify-between gap-6 text-left p-6 lg:p-7"
                aria-expanded={isOpen}
              >
                <span className="font-display text-lg lg:text-xl text-foreground">{item.q}</span>
                <span
                  className="shrink-0 mt-1 font-display text-2xl leading-none"
                  style={{ color: "var(--rose)" }}
                  aria-hidden
                >
                  {isOpen ? "–" : "+"}
                </span>
              </button>
              {isOpen && (
                <div className="px-6 lg:px-7 pb-7 -mt-2 text-muted-foreground leading-relaxed">
                  {item.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

function ClosingCTA() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "var(--ink)", color: "var(--ivory)" }}
    >
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div
          className="absolute -top-32 -right-20 w-[460px] h-[460px] rounded-full blur-3xl"
          style={{ background: "color-mix(in oklab, var(--rose) 60%, transparent)" }}
        />
        <div
          className="absolute -bottom-40 -left-24 w-[520px] h-[520px] rounded-full blur-3xl"
          style={{ background: "color-mix(in oklab, var(--champagne) 50%, transparent)" }}
        />
      </div>
      <div className="container-narrow relative py-24 lg:py-32 text-center">
        <p
          className="label-eyebrow"
          style={{ color: "color-mix(in oklab, var(--ivory) 70%, transparent)" }}
        >
          Part of the Receive Your Flowers family
        </p>
        <h2
          className="font-display text-4xl sm:text-5xl lg:text-6xl mt-5 leading-[1.04] max-w-3xl mx-auto"
          style={{ color: "var(--ivory)" }}
        >
          Invite them. Then let them{" "}
          <span className="italic" style={{ color: "var(--blush)" }}>
            celebrate you back.
          </span>
        </h2>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#pricing"
            className="btn-primary"
            style={{ background: "var(--ivory)", color: "var(--ink)" }}
          >
            Choose a package <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
            style={{ color: "var(--ivory)", borderColor: "color-mix(in oklab, var(--ivory) 40%, transparent)" }}
          >
            <MessageCircle className="w-4 h-4" /> Ask us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

function InvitationsPage() {
  return (
    <main className="bg-background text-foreground">
      <InvitationsNav />
      <Hero />
      <Why />
      <HowItWorks />
      <Pricing />
      <FAQ />
      <ClosingCTA />
      <InvitationsFooter />
    </main>
  );
}
