import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ArrowRight, Check, Lock, Mail, Sparkles } from "lucide-react";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { StartBouquetDialog } from "@/components/site/StartBouquetDialog";
import { InstitutionalDialog } from "@/components/site/InstitutionalDialog";
import { BouquetMockup } from "@/components/site/BouquetMockup";
import gatheringImg from "@/assets/gathering.png";
import monogram from "@/assets/ryf-monogram.png";

export const Route = createFileRoute("/")({
  component: HomePage,
});

const NAV = [
  { label: "How It Works", href: "#how" },
  { label: "Occasions", href: "#occasions" },
  { label: "Packages", href: "#packages" },
  { label: "For Teams", href: "#teams" },
  { label: "FAQ", href: "#faq" },
];

function HomePage() {
  return (
    <main className="bg-background text-foreground">
      <Nav />
      <Hero />
      <Problem />
      <Product />
      <HowItWorks />
      <Prompts />
      <Occasions />
      <Packages />
      <Teams />
      <Experience />
      <Privacy />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}

/* ---------------- NAV ---------------- */
function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md"
      style={{ background: "color-mix(in oklab, var(--ivory) 82%, transparent)",
               borderBottom: "1px solid color-mix(in oklab, var(--ink) 8%, transparent)" }}>
      <div className="container-narrow flex items-center justify-between h-16">
        <a href="#top" className="flex items-center gap-2.5 font-display text-lg sm:text-xl tracking-tight text-foreground">
          <img src={monogram} alt="RYF monogram" width={36} height={36}
            className="w-7 h-7 sm:w-9 sm:h-9 rounded-md object-cover" />
          <span>Receive Your Flowers</span>
        </a>
        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="nav-link">{n.label}</a>
          ))}
        </nav>
        <div className="hidden lg:block">
          <StartBouquetDialog
            trigger={<button className="btn-primary text-sm py-2.5 px-5">Start a Bouquet</button>}
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
            <StartBouquetDialog
              trigger={<button className="btn-primary w-full mt-2">Start a Bouquet</button>}
            />
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section id="top" className="relative grain-bg overflow-hidden">
      <div className="container-narrow pt-16 sm:pt-24 lg:pt-28 pb-20 lg:pb-28 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-6 reveal">
          <div className="flex items-center gap-3">
            <img src={monogram} alt="" aria-hidden="true" width={28} height={28}
              className="w-7 h-7 rounded-md object-cover opacity-90" />
            <p className="label-eyebrow">A living tribute platform</p>
          </div>
          <h1 className="font-display text-[2.6rem] sm:text-6xl lg:text-[4.4rem] leading-[1.02] mt-5 text-foreground">
            Give them their<br />
            <span className="italic" style={{ color: "var(--rose)" }}>flowers</span> while<br />they're here.
          </h1>
          <p className="mt-7 text-lg text-foreground/80 max-w-xl leading-relaxed">
            Create a private video bouquet filled with love, memories, gratitude, and
            appreciation from the people who matter most.
          </p>
          <p className="mt-4 text-sm text-muted-foreground max-w-md leading-relaxed">
            Because the most meaningful words should not be saved for the day someone
            can no longer hear them.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <StartBouquetDialog
              trigger={<button className="btn-primary">Start a Bouquet <ArrowRight className="w-4 h-4" /></button>}
            />
            <a href="#how" className="btn-ghost">See How It Works</a>
          </div>
          <div className="mt-12 flex items-center gap-6 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-2"><Lock className="w-3.5 h-3.5" /> Private by default</span>
            <span className="hidden sm:inline-flex items-center gap-2"><Sparkles className="w-3.5 h-3.5" /> Editor-assembled</span>
          </div>
        </div>
        <div className="lg:col-span-6 reveal reveal-delay-2">
          <BouquetMockup />
        </div>
      </div>
    </section>
  );
}

/* ---------------- PROBLEM ---------------- */
function Problem() {
  const cards = [
    "Thank you for raising me.",
    "You changed the direction of my life.",
    "I don't think you know how much you mean to us.",
  ];
  return (
    <section className="container-narrow py-24 lg:py-32">
      <div className="grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <p className="label-eyebrow">The Problem</p>
          <h2 className="font-display text-4xl lg:text-5xl mt-4 leading-[1.05] text-foreground">
            We wait too long to say the things that matter.
          </h2>
        </div>
        <div className="lg:col-span-7 lg:pt-2">
          <p className="text-lg text-foreground/80 leading-relaxed max-w-xl">
            At funerals, farewell parties, hospital beds, and memorial services, people
            finally say the beautiful things they always felt. But too often, the person
            at the center of those words never gets to hear them.
          </p>
          <p className="mt-5 text-lg text-foreground/80 leading-relaxed max-w-xl">
            Receive Your Flowers was created for the words that should arrive earlier.
          </p>
        </div>
      </div>

      <div className="mt-16 grid md:grid-cols-3 gap-5">
        {cards.map((c, i) => (
          <figure key={i} className="soft-card p-8 lg:p-10">
            <span className="font-display text-5xl leading-none" style={{ color: "var(--rose)" }}>"</span>
            <blockquote className="font-display text-2xl lg:text-[1.65rem] leading-snug mt-2 text-foreground">
              {c}
            </blockquote>
          </figure>
        ))}
      </div>
    </section>
  );
}

/* ---------------- PRODUCT ---------------- */
function Product() {
  const features = [
    "Collect short video messages",
    "Invite contributors with one link",
    "Choose a delivery date",
    "Receive a private tribute page",
    "Download and keep the final video",
    "Share selected moments if you choose",
  ];
  return (
    <section className="py-24 lg:py-32" style={{ background: "color-mix(in oklab, var(--blush) 24%, var(--ivory))" }}>
      <div className="container-narrow">
        <div className="max-w-2xl">
          <p className="label-eyebrow">The Product</p>
          <h2 className="font-display text-4xl lg:text-5xl mt-4 leading-[1.05] text-foreground">
            A video bouquet is a <em className="not-italic" style={{ fontStyle: "italic", color: "var(--rose)" }}>living tribute.</em>
          </h2>
          <p className="mt-6 text-lg text-foreground/80 leading-relaxed">
            A video bouquet is a collection of short heartfelt videos from friends,
            family, colleagues, and loved ones, beautifully assembled and delivered as
            a private digital keepsake.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <div key={f} className="soft-card p-7 flex items-start gap-4">
              <span className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center font-display text-sm"
                style={{ background: "var(--ivory)", color: "var(--ink)",
                         border: "1px solid color-mix(in oklab, var(--ink) 12%, transparent)" }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-base text-foreground leading-snug pt-1.5">{f}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- HOW IT WORKS ---------------- */
function HowItWorks() {
  const steps = [
    { t: "Start the bouquet", d: "Choose the recipient, occasion, delivery date, and package." },
    { t: "Invite their people", d: "Send a private link to friends, family, colleagues, teammates, or community members." },
    { t: "Collect the videos", d: "Contributors record short messages guided by thoughtful prompts." },
    { t: "Deliver the flowers", d: "The recipient receives a beautiful private page with their video bouquet." },
  ];
  return (
    <section id="how" className="container-narrow py-24 lg:py-32">
      <div className="text-center max-w-2xl mx-auto">
        <p className="label-eyebrow">How It Works</p>
        <h2 className="font-display text-4xl lg:text-5xl mt-4 leading-[1.05] text-foreground">
          Four simple steps. One unforgettable gift.
        </h2>
      </div>

      <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
        {steps.map((s, i) => (
          <div key={s.t} className="relative">
            <div className="soft-card p-7 h-full">
              <div className="font-display text-5xl" style={{ color: "var(--rose)" }}>
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="font-display text-2xl mt-4 text-foreground">{s.t}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{s.d}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-14 text-center">
        <StartBouquetDialog
          trigger={<button className="btn-primary">Start a Bouquet <ArrowRight className="w-4 h-4" /></button>}
        />
      </div>
    </section>
  );
}

/* ---------------- PROMPTS ---------------- */
function Prompts() {
  const prompts = [
    "What is one memory with this person you will never forget?",
    "How did they change your life?",
    "What do you admire most about them?",
    "What have you always wanted to thank them for?",
    "What do you hope they understand about their impact?",
    "What would you say if this was your only chance to say it?",
  ];
  return (
    <section className="py-24 lg:py-32" style={{ background: "color-mix(in oklab, var(--champagne) 22%, var(--ivory))" }}>
      <div className="container-narrow grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <p className="label-eyebrow">What People Say</p>
          <h2 className="font-display text-4xl lg:text-5xl mt-4 leading-[1.05] text-foreground">
            We help people find the words.
          </h2>
          <p className="mt-6 text-lg text-foreground/80 leading-relaxed max-w-md">
            Contributors are not given a script. They are given gentle prompts that
            help them speak from the heart.
          </p>
        </div>
        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
          {prompts.map((p) => (
            <div key={p} className="soft-card p-6">
              <p className="font-display text-lg leading-snug text-foreground">{p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- OCCASIONS ---------------- */
function Occasions() {
  const items: { t: string; d: string }[] = [
    { t: "Birthdays", d: "More meaningful than another gift card." },
    { t: "Mother's Day", d: "Send her every voice she raised." },
    { t: "Father's Day", d: "Tell him what his presence meant." },
    { t: "Retirement", d: "A farewell gift they will actually keep." },
    { t: "Graduation", d: "A chorus of people who watched them grow." },
    { t: "Recovery", d: "Encouragement, gathered in one place." },
    { t: "Anniversaries", d: "The years, told back to them." },
    { t: "Farewells", d: "Goodbye, said softly and well." },
    { t: "Community Leaders", d: "Honor the room they built." },
    { t: "Coaches & Mentors", d: "The lives they shaped, in their own words." },
    { t: "Teachers & Pastors", d: "For the ones who carried us." },
    { t: "Just Because", d: "No tragedy required. No milestone needed." },
  ];
  return (
    <section id="occasions" className="container-narrow py-24 lg:py-32">
      <div className="max-w-3xl">
        <p className="label-eyebrow">Occasions</p>
        <h2 className="font-display text-4xl lg:text-5xl mt-4 leading-[1.05] text-foreground">
          For birthdays, farewells, milestones, and moments that should not pass quietly.
        </h2>
      </div>
      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((it) => (
          <div key={it.t} className="soft-card p-7 group">
            <h3 className="font-display text-2xl text-foreground">{it.t}</h3>
            <p className="mt-2 text-muted-foreground leading-relaxed">{it.d}</p>
            <div className="mt-5 editorial-rule" />
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- PACKAGES ---------------- */
const PACKAGES = [
  {
    name: "Video Flower",
    price: "$9.99",
    blurb: "One heartfelt video message, beautifully packaged and delivered as a private keepsake.",
    features: [
      "1 private video message",
      "Simple branded opening and closing cards",
      "Private delivery link",
      "Downloadable MP4 keepsake",
      "Delivered digitally",
    ],
    cta: "Send a Video Flower",
    popular: false,
    key: "Video Flower" as const,
  },
  {
    name: "Mini Bouquet",
    price: "$49",
    blurb: "For intimate messages from a small circle.",
    features: ["Up to 10 video submissions", "Private bouquet page", "Simple automated compilation", "Delivery by email"],
    cta: "Start Mini Bouquet",
    popular: false,
    key: "Mini Bouquet" as const,
  },
  {
    name: "Classic Bouquet",
    price: "$149",
    blurb: "For birthdays, parents, mentors, and meaningful milestones.",
    features: ["Up to 30 video submissions", "Edited video bouquet", "Private tribute page", "Captions", "Downloadable final video", "Contributor reminder emails"],
    cta: "Start Classic Bouquet",
    popular: true,
    key: "Classic Bouquet" as const,
  },
  {
    name: "Legacy Bouquet",
    price: "$299",
    blurb: "For elders, founders, major milestones, and once-in-a-lifetime celebrations.",
    features: ["Up to 75 video submissions", "Premium edited tribute", "Highlight reel", "Written quote wall", "Downloadable archive", "Optional shareable clips"],
    cta: "Start Legacy Bouquet",
    popular: false,
    key: "Legacy Bouquet" as const,
  },
];

function Packages() {
  return (
    <section id="packages" className="py-24 lg:py-32"
      style={{ background: "color-mix(in oklab, var(--blush) 18%, var(--ivory))" }}>
      <div className="container-narrow">
        <div className="text-center max-w-2xl mx-auto">
          <p className="label-eyebrow">Packages</p>
          <h2 className="font-display text-4xl lg:text-5xl mt-4 leading-[1.05] text-foreground">
            Choose the bouquet that fits the moment.
          </h2>
        </div>

        <p className="mt-6 text-center text-sm text-muted-foreground max-w-2xl mx-auto">
          A bouquet is made of flowers. A video bouquet is made of video flowers.
        </p>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {PACKAGES.map((p) => (
            <div key={p.name}
              className={`soft-card p-8 lg:p-9 flex flex-col relative ${p.popular ? "lg:-translate-y-3" : ""}`}
              style={p.popular ? {
                background: "var(--ink)",
                color: "var(--ivory)",
                borderColor: "transparent",
              } : undefined}
            >
              {p.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.22em] uppercase
                  px-3 py-1.5 rounded-full font-medium"
                  style={{ background: "var(--rose)", color: "var(--ivory)" }}>
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
                    <Check className={`w-4 h-4 mt-0.5 shrink-0`}
                      style={{ color: p.popular ? "var(--blush)" : "var(--rose)" }} />
                    <span className={p.popular ? "text-ivory/90" : "text-foreground/90"}>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                {p.key === "Video Flower" ? (
                  <a href="/start-video-flower" className="btn-ghost w-full inline-flex">
                    {p.cta}
                  </a>
                ) : (
                  <StartBouquetDialog
                    defaultPackage={p.key}
                    trigger={
                      <button
                        className={p.popular
                          ? "btn-primary w-full"
                          : "btn-ghost w-full"}
                        style={p.popular ? { background: "var(--ivory)", color: "var(--ink)" } : undefined}
                      >
                        {p.cta}
                      </button>
                    }
                  />
                )}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground max-w-2xl mx-auto">
          Need a bouquet for a company, church, school, team, or public figure?
          Explore institutional bouquets below.
        </p>
      </div>
    </section>
  );
}

/* ---------------- TEAMS ---------------- */
function Teams() {
  const useCases = [
    "Employee retirements", "Founder appreciation", "Pastor or church leader appreciation",
    "Teacher appreciation", "Coach appreciation", "Team farewells",
    "Community leader tributes", "Newsroom and media tributes", "Alumni tributes",
  ];
  return (
    <section id="teams" className="container-narrow py-24 lg:py-32">
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 order-2 lg:order-1">
          <div className="relative rounded-3xl overflow-hidden soft-card">
            <img src={gatheringImg} alt="A small group of people of mixed ages laughing together at a dinner table"
              className="w-full h-full object-cover aspect-[4/5]" loading="lazy" width={1600} height={1100} />
          </div>
        </div>
        <div className="lg:col-span-7 order-1 lg:order-2">
          <p className="label-eyebrow">For Teams & Communities</p>
          <h2 className="font-display text-4xl lg:text-5xl mt-4 leading-[1.05] text-foreground">
            A better way to honor the people who shaped the room.
          </h2>
          <p className="mt-6 text-lg text-foreground/80 leading-relaxed">
            Receive Your Flowers can be used by companies, newsrooms, churches, schools,
            sports teams, nonprofits, and community organizations to celebrate the people
            who have made a lasting impact.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
            {useCases.map((u) => (
              <div key={u} className="flex items-center gap-3 text-foreground/85">
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--rose)" }} />
                <span>{u}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <InstitutionalDialog
              trigger={<button className="btn-primary">Plan an Institutional Bouquet</button>}
            />
            <p className="text-sm text-muted-foreground">Institutional bouquets start at $499.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- EXPERIENCE ---------------- */
function Experience() {
  return (
    <section className="py-24 lg:py-32"
      style={{ background: "color-mix(in oklab, var(--sage) 14%, var(--ivory))" }}>
      <div className="container-narrow grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6">
          <p className="label-eyebrow">The Experience</p>
          <h2 className="font-display text-4xl lg:text-5xl mt-4 leading-[1.05] text-foreground">
            They open it. They hear the voices. They finally know.
          </h2>
          <p className="mt-6 text-lg text-foreground/80 leading-relaxed max-w-lg">
            Every bouquet is delivered as a private digital keepsake. The recipient can
            watch the full tribute, revisit individual messages, save the final video,
            and keep the words forever.
          </p>
          <ul className="mt-8 space-y-3.5 text-foreground/85">
            {[
              ["Main video player", "A cinematic compilation of every message."],
              ["Contributor gallery", "Each voice, each face, in their own moment."],
              ["Written messages & quote wall", "For the lines that should be read, not heard."],
              ["Download & share controls", "Keep it forever. Share what you choose."],
            ].map(([t, d]) => (
              <li key={t} className="flex gap-4">
                <span className="mt-2 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "var(--rose)" }} />
                <div>
                  <p className="font-medium text-foreground">{t}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{d}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-6">
          <BouquetMockup />
        </div>
      </div>
    </section>
  );
}

/* ---------------- PRIVACY ---------------- */
function Privacy() {
  const points = [
    "Private invitation links",
    "Organizer approval before delivery",
    "Contributor reminders",
    "Downloadable keepsakes",
    "Optional public sharing",
    "Recipient-first privacy settings",
  ];
  return (
    <section className="container-narrow py-24 lg:py-32">
      <div className="grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <p className="label-eyebrow">Private by Default</p>
          <h2 className="font-display text-4xl lg:text-5xl mt-4 leading-[1.05] text-foreground">
            Some words are too personal for the open internet.
          </h2>
        </div>
        <div className="lg:col-span-7">
          <p className="text-lg text-foreground/80 leading-relaxed max-w-xl">
            Every bouquet is private by default. Organizers control who can contribute,
            when the bouquet is delivered, and whether any part of it can be shared.
          </p>
          <div className="mt-10 grid sm:grid-cols-2 gap-x-8 gap-y-4">
            {points.map((p) => (
              <div key={p} className="flex items-start gap-3 py-3 border-b border-border/70">
                <Lock className="w-4 h-4 mt-1 shrink-0" style={{ color: "var(--rose)" }} />
                <span className="text-foreground/90">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
function FAQ() {
  const items = [
    ["Is this for people who are sick or dying?",
      "It can be, but that is not the main purpose. Receive Your Flowers is for anyone who deserves to hear how much they matter while they are still here."],
    ["Is this like a memorial video?",
      "No. This is a living tribute. It is designed for birthdays, milestones, appreciation, encouragement, retirement, and just-because moments."],
    ["Do contributors need an account?",
      "No. Contributors receive a private link and can submit their video through a simple upload page."],
    ["Can I review the videos before they are delivered?",
      "Yes. The organizer can review submissions before the final bouquet is delivered."],
    ["Can the recipient share the bouquet?",
      "Yes, if sharing is enabled. Bouquets are private by default, but selected clips or the full bouquet can be made shareable."],
    ["Can this be used by companies or institutions?",
      "Yes. Companies, churches, schools, sports teams, nonprofits, and community organizations can create institutional bouquets for retirements, farewells, appreciation events, and major milestones."],
    ["What if someone misses the submission deadline?",
      "The organizer can extend the deadline or allow late submissions, depending on the package."],
    ["Can we download the final video?",
      "Yes. Classic and Legacy bouquets include downloadable final videos."],
  ];
  return (
    <section id="faq" className="py-24 lg:py-32" style={{ background: "color-mix(in oklab, var(--champagne) 18%, var(--ivory))" }}>
      <div className="container-narrow grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <p className="label-eyebrow">FAQ</p>
          <h2 className="font-display text-4xl lg:text-5xl mt-4 leading-[1.05] text-foreground">
            Questions, gently answered.
          </h2>
        </div>
        <div className="lg:col-span-8">
          <Accordion type="single" collapsible className="w-full">
            {items.map(([q, a], i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b border-border/80">
                <AccordionTrigger className="font-display text-lg lg:text-xl text-left text-foreground hover:no-underline py-6">
                  {q}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 leading-relaxed text-base pb-6">
                  {a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FINAL CTA ---------------- */
function FinalCTA() {
  return (
    <section className="relative overflow-hidden" style={{ background: "var(--ink)", color: "var(--ivory)" }}>
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute -top-32 -right-20 w-[460px] h-[460px] rounded-full blur-3xl"
          style={{ background: "color-mix(in oklab, var(--rose) 60%, transparent)" }} />
        <div className="absolute -bottom-40 -left-24 w-[520px] h-[520px] rounded-full blur-3xl"
          style={{ background: "color-mix(in oklab, var(--champagne) 50%, transparent)" }} />
      </div>
      <div className="container-narrow relative py-28 lg:py-36 text-center">
        <p className="label-eyebrow" style={{ color: "color-mix(in oklab, var(--ivory) 70%, transparent)" }}>
          A Final Word
        </p>
        <h2 className="font-display text-4xl sm:text-5xl lg:text-7xl mt-5 leading-[1.04] max-w-4xl mx-auto"
          style={{ color: "var(--ivory)" }}>
          Don't wait for the worst day to say the
          <span className="italic" style={{ color: "var(--blush)" }}> best words.</span>
        </h2>
        <p className="mt-7 text-lg max-w-xl mx-auto leading-relaxed"
          style={{ color: "color-mix(in oklab, var(--ivory) 75%, transparent)" }}>
          Start a video bouquet for someone who deserves to know what they mean.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <StartBouquetDialog
            trigger={
              <button className="btn-primary"
                style={{ background: "var(--ivory)", color: "var(--ink)" }}>
                Start a Bouquet <ArrowRight className="w-4 h-4" />
              </button>
            }
          />
          <InstitutionalDialog
            trigger={
              <button className="btn-ghost"
                style={{ borderColor: "color-mix(in oklab, var(--ivory) 35%, transparent)",
                         color: "var(--ivory)" }}>
                Plan an Institutional Bouquet
              </button>
            }
          />
        </div>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  const cols = [
    { h: "Product", links: ["How It Works", "Occasions", "Packages", "For Teams", "FAQ"] },
    { h: "Company", links: ["Privacy", "Contact"] },
    { h: "Social", links: ["Instagram", "TikTok", "LinkedIn"] },
  ];
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-narrow py-16 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <img src={monogram} alt="RYF monogram" width={40} height={40}
              className="w-10 h-10 rounded-md object-cover" />
            <p className="font-display text-2xl text-foreground">Receive Your Flowers</p>
          </div>
          <p className="mt-3 text-muted-foreground italic max-w-sm">
            Give them their flowers while they're here.
          </p>
          <div className="mt-6 flex items-center gap-3 text-sm text-muted-foreground">
            <Mail className="w-4 h-4" />
            <a href="mailto:hello@receiveyourflowers.com" className="hover:text-foreground transition">
              hello@receiveyourflowers.com
            </a>
          </div>
        </div>
        {cols.map((c) => (
          <div key={c.h} className="md:col-span-2 lg:col-span-2">
            <p className="label-eyebrow">{c.h}</p>
            <ul className="mt-4 space-y-2.5">
              {c.links.map((l) => (
                <li key={l}>
                  <a href={l === "How It Works" ? "#how"
                    : l === "Occasions" ? "#occasions"
                    : l === "Packages" ? "#packages"
                    : l === "For Teams" ? "#teams"
                    : l === "FAQ" ? "#faq" : "#"}
                    className="text-foreground/80 hover:text-foreground transition text-sm">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border">
        <div className="container-narrow py-6 flex flex-col sm:flex-row gap-3 items-center justify-between text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Receive Your Flowers. All rights reserved.</p>
          <p className="italic">Some words should arrive while someone can still receive them.</p>
        </div>
      </div>
    </footer>
  );
}
