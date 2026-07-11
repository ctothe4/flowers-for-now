import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Menu, X, Mail } from "lucide-react";
import monogram from "@/assets/ryf-monogram.png";
import { InstitutionalDialog } from "@/components/site/InstitutionalDialog";
import { useEnterprisePricing, whatsappUrl } from "@/lib/pricing";

export const Route = createFileRoute("/enterprise")({
  head: () => ({
    meta: [
      { title: "Enterprise — Receive Your Flowers" },
      { name: "description", content: "Receive Your Flowers helps organizations create meaningful appreciation, recognition, and human connection at scale." },
      { property: "og:title", content: "Enterprise — Receive Your Flowers" },
      { property: "og:description", content: "Appreciation, recognition, and human connection experiences for modern organizations." },
    ],
  }),
  component: EnterprisePage,
});

const NAV = [
  { label: "How It Works", href: "/#how" },
  { label: "Occasions", href: "/#occasions" },
  { label: "Packages", href: "/#packages" },
  { label: "Enterprise", href: "/enterprise" },
  { label: "FAQ", href: "/#faq" },
];

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md"
      style={{ background: "color-mix(in oklab, var(--ivory) 82%, transparent)",
               borderBottom: "1px solid color-mix(in oklab, var(--ink) 8%, transparent)" }}>
      <div className="container-narrow flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2.5 font-display text-lg sm:text-xl tracking-tight text-foreground">
          <img src={monogram} alt="RYF monogram" width={36} height={36}
            className="w-7 h-7 sm:w-9 sm:h-9 rounded-md object-cover" />
          <span>Receive Your Flowers</span>
        </Link>
        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="nav-link">{n.label}</a>
          ))}
        </nav>
        <div className="hidden lg:block">
          <InstitutionalDialog
            trigger={<button className="btn-primary text-sm py-2.5 px-5">Book a Consultation</button>}
          />
        </div>
        <button className="lg:hidden p-2" aria-label="Menu" onClick={() => setOpen(v => !v)}>
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container-narrow py-4 flex flex-col gap-4">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)}
                className="nav-link text-base">{n.label}</a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ background: "#0E0B0A", color: "var(--ivory)" }}>
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute -top-32 -right-20 w-[500px] h-[500px] rounded-full blur-3xl"
          style={{ background: "color-mix(in oklab, var(--rose) 55%, transparent)" }} />
        <div className="absolute -bottom-40 -left-24 w-[560px] h-[560px] rounded-full blur-3xl"
          style={{ background: "color-mix(in oklab, var(--champagne) 40%, transparent)" }} />
      </div>
      <div className="container-narrow relative pt-24 pb-28 lg:pt-32 lg:pb-40">
        <div className="max-w-4xl reveal">
          <p className="label-eyebrow" style={{ color: "color-mix(in oklab, var(--ivory) 65%, transparent)" }}>
            Enterprise
          </p>
          <h1 className="font-display text-[2.6rem] sm:text-6xl lg:text-[5rem] leading-[1.02] mt-6"
            style={{ color: "var(--ivory)" }}>
            For teams &amp; <span className="italic" style={{ color: "var(--blush)" }}>organizations.</span>
          </h1>
          <p className="mt-8 text-xl leading-relaxed max-w-2xl"
            style={{ color: "color-mix(in oklab, var(--ivory) 80%, transparent)" }}>
            Receive Your Flowers helps organizations create meaningful appreciation, recognition, and human connection at scale.
          </p>
        </div>
      </div>
    </section>
  );
}

function Intro() {
  return (
    <section className="container-narrow py-24 lg:py-32">
      <div className="grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <p className="label-eyebrow">A modern appreciation platform</p>
          <h2 className="font-display text-4xl lg:text-5xl mt-4 leading-[1.05] text-foreground">
            Modern organizations run on people.
          </h2>
        </div>
        <div className="lg:col-span-7 lg:pt-2 space-y-5 text-lg text-foreground/80 leading-relaxed max-w-xl">
          <p>Receive Your Flowers works with companies, institutions, hospitality groups, sports organizations, executive offices, and modern teams to create emotionally intelligent appreciation experiences.</p>
          <p>From employee recognition and executive appreciation to client relationship experiences and human-centered feedback systems, we help organizations strengthen emotional connection with the people they serve.</p>
        </div>
      </div>
    </section>
  );
}

const STEPS = [
  { n: "01", t: "Nominate", d: "Select the people you'd like to recognize and tell us why they matter." },
  { n: "02", t: "Share", d: "Provide photos, stories, milestones, memories, and supporting materials through our guided intake process." },
  { n: "03", t: "Create", d: "Our team produces personalized recognition experiences tailored to each recipient." },
  { n: "04", t: "Deliver", d: "Completed tributes are delivered within 48 hours and can be shared privately or publicly." },
];

function HowItWorks() {
  return (
    <section className="py-24 lg:py-32 border-t border-border" style={{ background: "var(--ivory)" }}>
      <div className="container-narrow">
        <div className="max-w-3xl">
          <p className="label-eyebrow">How It Works</p>
          <h2 className="font-display text-4xl lg:text-5xl mt-4 leading-[1.05] text-foreground">
            Simple for your organization.{" "}
            <span className="italic" style={{ color: "color-mix(in oklab, var(--rose) 75%, var(--ink))" }}>
              Meaningful for your people.
            </span>
          </h2>
          <div className="mt-8 space-y-4 text-lg text-foreground/80 leading-relaxed max-w-2xl">
            <p>Receive Your Flowers makes recognition effortless.</p>
            <p>Whether you're celebrating employees, clients, partners, volunteers, alumni, or community leaders, our process is designed to be thoughtful, simple, and beautifully executed.</p>
          </div>
        </div>
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((s) => (
            <div key={s.n} className="relative">
              <p className="font-display text-5xl" style={{ color: "color-mix(in oklab, var(--rose) 55%, transparent)" }}>
                {s.n}
              </p>
              <div className="mt-4 editorial-rule" />
              <h3 className="font-display text-2xl mt-5 text-foreground">{s.t}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
        <p className="mt-16 max-w-2xl text-sm italic text-muted-foreground leading-relaxed">
          Every recognition experience is reviewed by a human before delivery to ensure quality, accuracy, and emotional impact.
        </p>
      </div>
    </section>
  );
}

const OFFERINGS = [
  { t: "Employee Appreciation", d: "Recognition experiences that feel earned, personal, and remembered." },
  { t: "Executive Recognition", d: "Tributes for leaders, founders, and the people who built the room." },
  { t: "Client Appreciation", d: "Relationship-deepening experiences for the people you serve." },
  { t: "Relationship Campaigns", d: "Ongoing appreciation programs across the year." },
  { t: "Video Tribute Experiences", d: "Cinematic bouquets for milestones, farewells, and transitions." },
  { t: "Memorial Acknowledgements", d: "Quietly held remembrances for teams and communities." },
  { t: "Scheduled Appreciation", d: "Thoughtful, rhythm-based recognition built into your year." },
  { t: "White-Glove Coordination", d: "A partner who handles every detail, with care." },
  { t: "Custom Branded Experiences", d: "Tailored to your organization's voice and visual identity." },
];

const PROGRAMS = [
  {
    t: "Starter Recognition Program",
    priceKey: "starter" as const,
    count: "10 Recipients",
    d: "Ideal for leadership teams, pilot departments, and organizations introducing a culture of intentional recognition.",
    perfect: ["Executive teams", "Small departments", "Founding employees", "Pilot programs", "Special milestones"],
    cta: "Request Proposal",
  },
  {
    t: "Standard Recognition Program",
    priceKey: "standard" as const,
    count: "25 Recipients",
    d: "Designed for organizations seeking meaningful recognition across teams, clients, stakeholders, or community members.",
    perfect: ["Team recognition initiatives", "Client appreciation programs", "Volunteer recognition", "Community engagement programs", "Internal culture initiatives"],
    cta: "Request Proposal",
  },
  {
    t: "Signature Recognition Program",
    priceKey: "signature" as const,
    count: "50 Recipients",
    d: "A larger-scale appreciation initiative designed to strengthen culture, celebrate contribution, and recognize impact at scale.",
    perfect: ["Annual recognition programs", "Employee appreciation campaigns", "Organizational milestones", "Company anniversaries", "National recognition initiatives"],
    cta: "Request Proposal",
  },
  {
    t: "Enterprise Recognition Program",
    priceKey: null,
    count: "100+ Recipients",
    d: "Custom-designed recognition experiences for organizations committed to appreciation, culture, belonging, and legacy. Each engagement is tailored to the unique goals of the organization.",
    perfect: ["Enterprise organizations", "Government institutions", "Universities", "Healthcare systems", "Associations", "National campaigns"],
    cta: "Schedule Consultation",
  },
];

function FoundingPartner() {
  const pricing = useEnterprisePricing();
  const isZM = pricing.country === "ZM";
  return (
    <section className="py-24 lg:py-32" style={{ background: "var(--ivory)" }}>
      <div className="container-narrow">
        <div className="max-w-3xl">
          <p className="label-eyebrow">Corporate Recognition Programs</p>
          <h2 className="font-display text-4xl lg:text-5xl mt-4 leading-[1.05] text-foreground">
            Recognition that people{" "}
            <span className="italic" style={{ color: "color-mix(in oklab, var(--rose) 75%, var(--ink))" }}>
              never forget.
            </span>
          </h2>
          <div className="mt-8 space-y-4 text-lg text-foreground/80 leading-relaxed max-w-2xl">
            <p>Most organizations reward performance. The best organizations celebrate people.</p>
            <p>Receive Your Flowers helps companies create meaningful recognition experiences that preserve gratitude, appreciation, and impact in a way that lasts forever.</p>
            <p>Whether recognizing employees, clients, partners, volunteers, donors, or leadership teams, every tribute becomes a permanent record of appreciation.</p>
          </div>
          <div className="mt-10 space-y-4 text-base text-muted-foreground leading-relaxed max-w-2xl">
            <p>Recognition should be more than a gift card, plaque, or generic email. The people who help build organizations deserve to hear the stories, gratitude, and appreciation that often go unsaid.</p>
            <p>Receive Your Flowers transforms recognition into a lasting experience through curated video tributes, personal messages, photographs, and stories collected from the people who matter most.</p>
          </div>
        </div>
        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {PROGRAMS.map((p) => {
            const priceLabel = p.priceKey
              ? `${pricing.symbol}${pricing[p.priceKey]}`
              : "Custom Quote";
            return (
            <div key={p.t} className="soft-card p-10 flex flex-col">
              <p className="label-eyebrow">{p.t}</p>
              <p className="font-display text-4xl mt-4 text-foreground">{p.count}</p>
              <p className="font-display text-3xl mt-2" style={{ color: "color-mix(in oklab, var(--rose) 75%, var(--ink))" }}>
                {priceLabel}
              </p>
              <div className="mt-5 editorial-rule" />
              <p className="mt-5 text-foreground/80 leading-relaxed">{p.d}</p>
              <p className="label-eyebrow mt-8">Perfect for</p>
              <ul className="mt-3 space-y-1.5 text-muted-foreground leading-relaxed">
                {p.perfect.map((x) => (
                  <li key={x}>— {x}</li>
                ))}
              </ul>
              <div className="mt-8">
                {isZM ? (
                  <a
                    href={whatsappUrl(`Hi Receive Your Flowers — I'd like to enquire about the ${p.t} (${priceLabel}).`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost inline-flex"
                  >
                    Enquire via WhatsApp <ArrowRight className="w-4 h-4" />
                  </a>
                ) : (
                  <InstitutionalDialog
                    trigger={
                      <button className="btn-ghost">
                        {p.cta} <ArrowRight className="w-4 h-4" />
                      </button>
                    }
                  />
                )}
              </div>
            </div>
            );
          })}
        </div>
        <p className="mt-12 max-w-2xl text-sm italic text-muted-foreground leading-relaxed">
          Each program includes white-glove coordination, personalized production, and dedicated support. Founding Partner enrollment is intentionally limited while we scale our production capacity and maintain the quality, care, and attention each recognition experience deserves.
        </p>
      </div>
    </section>
  );
}

const INCLUDED = [
  "Personalized recipient recognition pages",
  "Curated video tribute experiences",
  "Collection of messages from peers, leaders, friends, or family",
  "Digital keepsake archives",
  "Mobile-friendly viewing experience",
  "Dedicated project coordination",
  "Secure delivery and hosting",
];

const ENHANCEMENTS = [
  "Professional video editing",
  "Event presentations",
  "Printed keepsakes",
  "Recognition campaigns",
  "Executive interviews",
  "Custom storytelling packages",
];

function Included() {
  return (
    <section className="py-24 lg:py-32 border-t border-border" style={{ background: "color-mix(in oklab, var(--champagne) 12%, var(--ivory))" }}>
      <div className="container-narrow">
        <div className="max-w-3xl">
          <p className="label-eyebrow">What Is Included</p>
          <h2 className="font-display text-4xl lg:text-5xl mt-4 leading-[1.05] text-foreground">
            Every detail, quietly considered.
          </h2>
        </div>
        <div className="mt-16 grid md:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <p className="label-eyebrow">Every recognition engagement includes</p>
            <ul className="mt-6 space-y-4 text-lg text-foreground/80 leading-relaxed">
              {INCLUDED.map((x) => (
                <li key={x} className="flex gap-4">
                  <span className="text-muted-foreground">—</span>
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="label-eyebrow">Optional enhancements</p>
            <ul className="mt-6 space-y-4 text-lg text-foreground/80 leading-relaxed">
              {ENHANCEMENTS.map((x) => (
                <li key={x} className="flex gap-4">
                  <span className="text-muted-foreground">—</span>
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Infrastructure() {
  return (
    <section className="py-24 lg:py-32 border-t border-border" style={{ background: "var(--ivory)" }}>
      <div className="container-narrow max-w-3xl">
        <p className="label-eyebrow">Why Recognition Matters</p>
        <h2 className="font-display text-4xl lg:text-5xl mt-4 leading-[1.05] text-foreground">
          People rarely forget how they were made{" "}
          <span className="italic" style={{ color: "color-mix(in oklab, var(--rose) 75%, var(--ink))" }}>
            to feel.
          </span>
        </h2>
        <div className="mt-8 space-y-4 text-lg text-foreground/80 leading-relaxed">
          <p>Recognition strengthens connection. Connection strengthens culture. Culture strengthens organizations.</p>
          <p>The organizations that thrive over the long term are those that intentionally celebrate the people who make their success possible.</p>
          <p>Receive Your Flowers exists to help make that appreciation visible.</p>
        </div>
      </div>
    </section>
  );
}

const BEYOND = [
  "Employees", "Clients", "Partners", "Donors", "Volunteers", "Teachers",
  "Healthcare workers", "Alumni", "Board members", "Community leaders",
  "Retiring executives", "Lifetime achievement recipients",
];

function Beyond() {
  return (
    <section className="py-24 lg:py-32 border-t border-border" style={{ background: "color-mix(in oklab, var(--champagne) 18%, var(--ivory))" }}>
      <div className="container-narrow">
        <div className="max-w-3xl">
          <p className="label-eyebrow">Beyond Employee Recognition</p>
          <h2 className="font-display text-4xl lg:text-5xl mt-4 leading-[1.05] text-foreground">
            For everyone who has made a{" "}
            <span className="italic" style={{ color: "color-mix(in oklab, var(--rose) 75%, var(--ink))" }}>
              difference.
            </span>
          </h2>
          <p className="mt-8 text-lg text-foreground/80 leading-relaxed max-w-2xl">
            Receive Your Flowers is used to celebrate:
          </p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-4">
          {BEYOND.map((x) => (
            <div key={x} className="flex items-baseline gap-4 border-b border-border pb-3">
              <span className="text-muted-foreground text-sm">—</span>
              <span className="font-display text-xl text-foreground">{x}</span>
            </div>
          ))}
        </div>
        <p className="mt-16 font-display italic text-2xl text-foreground/80 max-w-2xl">
          If someone has made a difference, they deserve their flowers.
        </p>
      </div>
    </section>
  );
}

function Offerings() {
  return (
    <section className="py-24 lg:py-32" style={{ background: "color-mix(in oklab, var(--champagne) 18%, var(--ivory))" }}>
      <div className="container-narrow">
        <div className="max-w-2xl">
          <p className="label-eyebrow">Offerings</p>
          <h2 className="font-display text-4xl lg:text-5xl mt-4 leading-[1.05] text-foreground">
            Quietly considered. Beautifully delivered.
          </h2>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {OFFERINGS.map((o) => (
            <div key={o.t} className="soft-card p-8">
              <h3 className="font-display text-2xl text-foreground">{o.t}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{o.d}</p>
              <div className="mt-6 editorial-rule" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="relative overflow-hidden" style={{ background: "var(--ink)", color: "var(--ivory)" }}>
      <div className="absolute inset-0 opacity-25 pointer-events-none">
        <div className="absolute -top-32 -left-20 w-[460px] h-[460px] rounded-full blur-3xl"
          style={{ background: "color-mix(in oklab, var(--rose) 55%, transparent)" }} />
        <div className="absolute -bottom-40 -right-24 w-[520px] h-[520px] rounded-full blur-3xl"
          style={{ background: "color-mix(in oklab, var(--champagne) 45%, transparent)" }} />
      </div>
      <div className="container-narrow relative py-28 lg:py-36 text-center">
        <p className="label-eyebrow" style={{ color: "color-mix(in oklab, var(--ivory) 70%, transparent)" }}>
          Partnership
        </p>
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl mt-5 leading-[1.04] max-w-3xl mx-auto"
          style={{ color: "var(--ivory)" }}>
          Build a culture of <span className="italic" style={{ color: "var(--blush)" }}>appreciation.</span>
        </h2>
        <p className="mt-8 text-lg max-w-2xl mx-auto leading-relaxed"
          style={{ color: "color-mix(in oklab, var(--ivory) 80%, transparent)" }}>
          The most valuable people in your organization should never have to wonder whether their contributions mattered. Create a recognition experience they'll remember forever.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <InstitutionalDialog
            trigger={
              <button className="btn-primary" style={{ background: "var(--ivory)", color: "var(--ink)" }}>
                Request Proposal <ArrowRight className="w-4 h-4" />
              </button>
            }
          />
          <InstitutionalDialog
            trigger={
              <button className="btn-ghost"
                style={{ borderColor: "color-mix(in oklab, var(--ivory) 35%, transparent)",
                         color: "var(--ivory)" }}>
                Schedule Consultation
              </button>
            }
          />
        </div>
        <p className="mt-16 font-display italic text-xl"
          style={{ color: "color-mix(in oklab, var(--ivory) 80%, transparent)" }}>
          Some flowers are more than flowers.
        </p>

      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-narrow py-12 flex flex-col sm:flex-row gap-6 items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={monogram} alt="RYF monogram" width={36} height={36}
            className="w-9 h-9 rounded-md object-cover" />
          <p className="font-display text-xl text-foreground">Receive Your Flowers</p>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Mail className="w-4 h-4" />
          <a href="mailto:enterprise@receiveyourflowers.com" className="hover:text-foreground transition">
            enterprise@receiveyourflowers.com
          </a>
        </div>
      </div>
    </footer>
  );
}

function EnterprisePage() {
  return (
    <main className="bg-background text-foreground">
      <Nav />
      <Hero />
      <Intro />
      <HowItWorks />
      <Offerings />
      <FoundingPartner />
      <Included />
      <Infrastructure />
      <Beyond />

      <CTA />
      <Footer />
    </main>
  );
}
