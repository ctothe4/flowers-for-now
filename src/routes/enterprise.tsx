import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Menu, X, Mail } from "lucide-react";
import monogram from "@/assets/ryf-monogram.png";
import { InstitutionalDialog } from "@/components/site/InstitutionalDialog";

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

function BeyondSurveys() {
  return (
    <section className="relative overflow-hidden" style={{ background: "#0E0B0A", color: "var(--ivory)" }}>
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-3xl"
          style={{ background: "color-mix(in oklab, var(--rose) 40%, transparent)" }} />
      </div>
      <div className="container-narrow relative py-28 lg:py-40">
        <div className="max-w-3xl mx-auto text-center">
          <p className="label-eyebrow" style={{ color: "color-mix(in oklab, var(--ivory) 65%, transparent)" }}>
            Beyond Surveys
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl mt-5 leading-[1.04]"
            style={{ color: "var(--ivory)" }}>
            Most feedback systems feel <span className="italic" style={{ color: "var(--blush)" }}>transactional.</span>
          </h2>
          <div className="mt-10 space-y-5 text-lg leading-relaxed"
            style={{ color: "color-mix(in oklab, var(--ivory) 78%, transparent)" }}>
            <p>We're exploring more human ways for organizations to listen, respond, and build emotional connection through authentic video responses and appreciation-driven experiences.</p>
            <p className="font-display italic text-2xl pt-6"
              style={{ color: "color-mix(in oklab, var(--ivory) 90%, transparent)" }}>
              No cold forms. No generic ratings. No robotic surveys.
            </p>
            <p className="font-display italic text-2xl"
              style={{ color: "var(--blush)" }}>
              Just real people, real stories, and real emotion.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const OFFERINGS = [
  { t: "Employee Appreciation", d: "Recognition experiences that feel earned, personal, and remembered." },
  { t: "Executive Recognition", d: "Tributes for leaders, founders, and the people who built the room." },
  { t: "Client Appreciation", d: "Relationship-deepening experiences for the people you serve." },
  { t: "Human-Centered Feedback", d: "Video responses that reveal what surveys never could." },
  { t: "Relationship Campaigns", d: "Ongoing appreciation programs across the year." },
  { t: "Video Tribute Experiences", d: "Cinematic bouquets for milestones, farewells, and transitions." },
  { t: "Memorial Acknowledgements", d: "Quietly held remembrances for teams and communities." },
  { t: "Scheduled Appreciation", d: "Thoughtful, rhythm-based recognition built into your year." },
  { t: "White-Glove Coordination", d: "A partner who handles every detail, with care." },
  { t: "Custom Branded Experiences", d: "Tailored to your organization's voice and visual identity." },
];

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
          Recognition that feels <span className="italic" style={{ color: "var(--blush)" }}>human.</span>
        </h2>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <InstitutionalDialog
            trigger={
              <button className="btn-primary" style={{ background: "var(--ivory)", color: "var(--ink)" }}>
                Book an Enterprise Consultation <ArrowRight className="w-4 h-4" />
              </button>
            }
          />
          <InstitutionalDialog
            trigger={
              <button className="btn-ghost"
                style={{ borderColor: "color-mix(in oklab, var(--ivory) 35%, transparent)",
                         color: "var(--ivory)" }}>
                Explore Partnership Opportunities
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
      <BeyondSurveys />
      <Offerings />
      <CTA />
      <Footer />
    </main>
  );
}
