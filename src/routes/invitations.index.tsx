import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Mail, PlayCircle, MessageCircle, Check } from "lucide-react";
import monogram from "@/assets/ryf-monogram.png";

export const Route = createFileRoute("/invitations")({
  head: () => ({
    meta: [
      { title: "Invitation Flowers — Receive Your Flowers" },
      { name: "description", content: "Elegant digital invitations with video messages and WhatsApp RSVPs — for weddings, memorials, birthdays, corporate events, and anniversaries." },
      { property: "og:title", content: "Invitation Flowers — Receive Your Flowers" },
      { property: "og:description", content: "Invite them. Then let them celebrate you back. Digital invitations with video and WhatsApp RSVPs." },
    ],
  }),
  component: InvitationsPage,
});

const WHATSAPP_URL =
  "https://wa.me/?text=" +
  encodeURIComponent("Hi Receive Your Flowers — I'd like to get started with an Invitation Flowers package.");

function WhatsAppButton({ variant = "primary", children }: { variant?: "primary" | "ghost"; children: React.ReactNode }) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={variant === "primary" ? "btn-primary" : "btn-ghost"}
    >
      <MessageCircle className="w-4 h-4" /> {children}
    </a>
  );
}

function Nav() {
  const items = [
    { label: "How It Works", href: "/#how" },
    { label: "Occasions", href: "/#occasions" },
    { label: "Packages", href: "/#packages" },
    { label: "Invitations", href: "/invitations" },
    { label: "Enterprise", href: "/enterprise" },
  ];
  return (
    <header
      className="sticky top-0 z-50 backdrop-blur-md"
      style={{
        background: "color-mix(in oklab, var(--ivory) 82%, transparent)",
        borderBottom: "1px solid color-mix(in oklab, var(--ink) 8%, transparent)",
      }}
    >
      <div className="container-narrow flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2.5 font-display text-lg sm:text-xl tracking-tight text-foreground">
          <img src={monogram} alt="RYF monogram" width={36} height={36} className="w-7 h-7 sm:w-9 sm:h-9 rounded-md object-cover" />
          <span>Receive Your Flowers</span>
        </Link>
        <nav className="hidden lg:flex items-center gap-8">
          {items.map((n) => (
            <a key={n.href} href={n.href} className="nav-link">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="hidden lg:block">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm py-2.5 px-5">
            <MessageCircle className="w-4 h-4" /> WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative grain-bg overflow-hidden">
      <div className="container-narrow pt-16 sm:pt-24 lg:pt-28 pb-20 lg:pb-24">
        <div className="max-w-3xl reveal">
          <div className="flex items-center gap-3">
            <img src={monogram} alt="" aria-hidden width={28} height={28} className="w-7 h-7 rounded-md object-cover opacity-90" />
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
            <WhatsAppButton>Get Started on WhatsApp <ArrowRight className="w-4 h-4" /></WhatsAppButton>
            <a href="#pricing" className="btn-ghost">See Packages</a>
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
  ];
  return (
    <section className="container-narrow py-24 lg:py-32">
      <div className="max-w-2xl">
        <p className="label-eyebrow">Why Invitation Flowers</p>
        <h2 className="font-display text-4xl lg:text-5xl mt-4 leading-[1.05] text-foreground">
          A softer, more human way to invite the people you love.
        </h2>
      </div>
      <div className="mt-14 grid md:grid-cols-3 gap-6">
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
    { t: "Share your details", d: "Tell us about your event or service — date, tone, guest list size." },
    { t: "We build your invite", d: "We craft your invitation page from a template matched to your occasion." },
    { t: "Guests receive & RSVP", d: "Invitations go out on WhatsApp. Guests RSVP directly in the same thread." },
    { t: "The circle continues", d: "After the occasion, guests are invited to send a video tribute bouquet through Receive Your Flowers." },
  ];
  return (
    <section
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

const TIERS = [
  {
    name: "Basic",
    price: "K400",
    blurb: "A quiet, elegant invitation — beautifully made.",
    features: ["Single-page digital invite", "1 template", "WhatsApp RSVP tracking"],
    popular: false,
  },
  {
    name: "Standard",
    price: "K700",
    blurb: "Custom design with a live RSVP dashboard.",
    features: ["Custom design", "Full template gallery", "Branded RSVP dashboard", "Guest reminders"],
    popular: false,
  },
  {
    name: "Video Invitation",
    price: "K1,300",
    blurb: "Add your voice and face to the invitation.",
    features: [
      "Everything in Standard",
      "Host video message embedded in the invite",
      "Professional trim and edit",
    ],
    popular: false,
  },
  {
    name: "Together (Bundle)",
    price: "K2,000",
    blurb: "Invite them. Then let them celebrate you back.",
    features: [
      "Video Invitation package",
      "Receive Your Flowers video tribute bouquet campaign",
      "For the same occasion",
    ],
    popular: true,
  },
];

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
          <p className="mt-5 text-sm text-muted-foreground">All packages are quoted in Zambian Kwacha.</p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {TIERS.map((p) => (
            <div
              key={p.name}
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
              <p className={`mt-3 leading-relaxed ${p.popular ? "text-ivory/70" : "text-muted-foreground"}`}>
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
              <div className="mt-8">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={p.popular ? "btn-primary w-full" : "btn-ghost w-full"}
                  style={p.popular ? { background: "var(--ivory)", color: "var(--ink)" } : undefined}
                >
                  <MessageCircle className="w-4 h-4" /> Get Started
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClosingCTA() {
  return (
    <section className="relative overflow-hidden" style={{ background: "var(--ink)", color: "var(--ivory)" }}>
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
          Invite them. Then let them <span className="italic" style={{ color: "var(--blush)" }}>celebrate you back.</span>
        </h2>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ background: "var(--ivory)", color: "var(--ink)" }}
          >
            <MessageCircle className="w-4 h-4" /> Get Started on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-narrow py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
        <span>© {new Date().getFullYear()} Receive Your Flowers</span>
        <div className="flex items-center gap-6">
          <Link to="/" className="hover:text-foreground transition">Home</Link>
          <Link to="/enterprise" className="hover:text-foreground transition">Enterprise</Link>
          <a href="mailto:hello@receiveyourflowers.com" className="hover:text-foreground transition">Contact</a>
        </div>
      </div>
    </footer>
  );
}

function InvitationsPage() {
  return (
    <main className="bg-background text-foreground">
      <Nav />
      <Hero />
      <Why />
      <HowItWorks />
      <Pricing />
      <ClosingCTA />
      <Footer />
    </main>
  );
}
