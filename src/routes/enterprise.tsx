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
  { t: "Starter Recognition Program", count: "10 Recipients", d: "Ideal for leadership teams, pilot departments, and first-time implementation." },
  { t: "Standard Recognition Program", count: "25 Recipients", d: "Designed for organizations seeking meaningful recognition across teams, clients, or stakeholders." },
  { t: "Signature Recognition Program", count: "50 Recipients", d: "A larger-scale recognition initiative for organizations committed to appreciation at scale." },
];

function FoundingPartner() {
  return (
    <section className="py-24 lg:py-32" style={{ background: "var(--ivory)" }}>
      <div className="container-narrow">
        <div className="max-w-3xl">
          <p className="label-eyebrow">Founding Institutional Partner Program</p>
          <h2 className="font-display text-4xl lg:text-5xl mt-4 leading-[1.05] text-foreground">
            Recognition shouldn't be reserved for{" "}
            <span className="italic" style={{ color: "color-mix(in oklab, var(--rose) 75%, var(--ink))" }}>
              retirement speeches.
            </span>
          </h2>
          <div className="mt-8 space-y-4 text-lg text-foreground/80 leading-relaxed max-w-2xl">
            <p>Receive Your Flowers is currently onboarding a limited number of organizations interested in piloting modern recognition experiences for employees, clients, partners, stakeholders, volunteers, and community leaders.</p>
            <p>We are looking for a small group of founding institutional partners who want to build a culture of appreciation and recognition into the rhythm of their organization.</p>
          </div>
          <p className="mt-6 text-base text-muted-foreground leading-relaxed max-w-2xl">
            Founding Partner enrollment is intentionally limited while we scale our production capacity and maintain the quality, care, and attention each recognition experience deserves.
          </p>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {PROGRAMS.map((p) => (
            <div key={p.t} className="soft-card p-8 flex flex-col">
              <p className="label-eyebrow">{p.t}</p>
              <p className="font-display text-4xl mt-4 text-foreground">{p.count}</p>
              <div className="mt-5 editorial-rule" />
              <p className="mt-5 text-muted-foreground leading-relaxed">{p.d}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 max-w-2xl text-sm italic text-muted-foreground leading-relaxed">
          Each program includes white-glove coordination, personalized production, and dedicated support.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <InstitutionalDialog
            trigger={<button className="btn-primary">Book an Enterprise Consultation <ArrowRight className="w-4 h-4" /></button>}
          />
          <InstitutionalDialog
            trigger={<button className="btn-ghost">Discuss Partnership Opportunities</button>}
          />
        </div>
      </div>
    </section>
  );
}

function Infrastructure() {
  return (
    <section className="py-24 lg:py-32 border-t border-border" style={{ background: "var(--ivory)" }}>
      <div className="container-narrow max-w-3xl">
        <p className="label-eyebrow">Recognition Infrastructure</p>
        <h2 className="font-display text-3xl lg:text-4xl mt-4 leading-[1.1] text-foreground">
          The strongest organizations don't leave appreciation to{" "}
          <span className="italic" style={{ color: "color-mix(in oklab, var(--rose) 75%, var(--ink))" }}>
            chance.
          </span>
        </h2>
        <div className="mt-8 space-y-4 text-lg text-foreground/80 leading-relaxed">
          <p>Recognition is not an event. It is a system.</p>
          <p>The most admired organizations understand that appreciation, acknowledgment, and human connection are essential parts of culture.</p>
          <p>Receive Your Flowers helps institutions build recognition into the rhythm of how they operate.</p>
        </div>
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
      <HowItWorks />
      <Offerings />
      <FoundingPartner />
      <Infrastructure />
      <CTA />
      <Footer />
    </main>
  );
}
