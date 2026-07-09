import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import { InvitationsNav, InvitationsFooter } from "@/components/site/InvitationsChrome";

export const Route = createFileRoute("/invitations/templates")({
  head: () => ({
    meta: [
      { title: "Template Gallery — Invitation Flowers" },
      {
        name: "description",
        content:
          "Sample invitation designs for weddings, memorials, showers, corporate events, and birthdays.",
      },
    ],
  }),
  component: TemplatesPage,
});

type Occasion = "All" | "Weddings" | "Memorials" | "Showers" | "Corporate" | "Birthdays";

type Template = {
  id: string;
  name: string;
  occasion: Exclude<Occasion, "All">;
  palette: string[];
  tone: string;
};

const TEMPLATES: Template[] = [
  { id: "ivory-vow", name: "Ivory Vow", occasion: "Weddings", palette: ["#FAF6EF", "#F1D8D2", "#C97C72", "#2B2523"], tone: "Editorial serif on warm ivory, soft rose accent." },
  { id: "botanical-bloom", name: "Botanical Bloom", occasion: "Weddings", palette: ["#F6F2EC", "#E8D8B8", "#C97C72", "#8A6E5A"], tone: "Hand-drawn florals with a champagne wash." },
  { id: "midnight-vow", name: "Midnight Vow", occasion: "Weddings", palette: ["#2B2523", "#F1D8D2", "#E8D8B8", "#FAF6EF"], tone: "Charcoal ground with ivory serif — for evening ceremonies." },
  { id: "still-water", name: "Still Water", occasion: "Memorials", palette: ["#F6F2EC", "#E8D8B8", "#8A6E5A", "#2B2523"], tone: "Quiet, restrained, generous whitespace." },
  { id: "in-memoriam", name: "In Memoriam", occasion: "Memorials", palette: ["#FAF6EF", "#D8CFC4", "#8A6E5A", "#2B2523"], tone: "Classic obituary typography, tender and dignified." },
  { id: "first-bloom", name: "First Bloom", occasion: "Showers", palette: ["#F1D8D2", "#FAF6EF", "#C97C72", "#8A6E5A"], tone: "Blush-forward, playful serif — baby and bridal." },
  { id: "little-garden", name: "Little Garden", occasion: "Showers", palette: ["#E8D8B8", "#F1D8D2", "#A8B89A", "#2B2523"], tone: "Soft botanical accents, sage detail." },
  { id: "boardroom", name: "Boardroom", occasion: "Corporate", palette: ["#FAF6EF", "#2B2523", "#8A6E5A", "#C97C72"], tone: "Minimal, typographic — for launches and galas." },
  { id: "annual-gala", name: "Annual Gala", occasion: "Corporate", palette: ["#2B2523", "#E8D8B8", "#FAF6EF", "#C97C72"], tone: "Dark ground with champagne — awards and dinners." },
  { id: "candles-cake", name: "Candles & Cake", occasion: "Birthdays", palette: ["#F1D8D2", "#C97C72", "#FAF6EF", "#2B2523"], tone: "Warm blush celebration, joyful serif." },
  { id: "milestone", name: "Milestone", occasion: "Birthdays", palette: ["#E8D8B8", "#2B2523", "#FAF6EF", "#C97C72"], tone: "Numeric-forward, editorial — 40, 50, 60, 70." },
  { id: "quiet-year", name: "Quiet Year", occasion: "Birthdays", palette: ["#FAF6EF", "#D8CFC4", "#8A6E5A", "#2B2523"], tone: "Restrained, adult — for intimate dinners." },
];

const FILTERS: Occasion[] = ["All", "Weddings", "Memorials", "Showers", "Corporate", "Birthdays"];

function TemplatesPage() {
  const [filter, setFilter] = useState<Occasion>("All");
  const visible = useMemo(
    () => (filter === "All" ? TEMPLATES : TEMPLATES.filter((t) => t.occasion === filter)),
    [filter]
  );

  return (
    <main className="bg-background text-foreground">
      <InvitationsNav />

      <section className="grain-bg">
        <div className="container-narrow pt-16 sm:pt-20 pb-12">
          <Link to="/invitations" className="nav-link text-sm">
            ← Back to Invitations
          </Link>
          <p className="label-eyebrow mt-6">Template Gallery</p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl mt-4 leading-[1.05] max-w-3xl">
            Sample designs, sorted by{" "}
            <span className="italic" style={{ color: "var(--rose)" }}>
              occasion.
            </span>
          </h1>
          <p className="mt-5 text-foreground/75 max-w-xl leading-relaxed">
            Every invitation is customised, but these give you a feel for the tones and palettes we
            work in. Mention any of them when you share your details.
          </p>
        </div>
      </section>

      <section className="container-narrow py-14">
        <div className="flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className="rounded-full px-4 py-2 text-sm transition"
              style={{
                background: filter === f ? "var(--ink)" : "transparent",
                color: filter === f ? "var(--ivory)" : "var(--ink)",
                border:
                  "1px solid " +
                  (filter === f
                    ? "var(--ink)"
                    : "color-mix(in oklab, var(--ink) 18%, transparent)"),
              }}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((t) => (
            <div key={t.id} className="soft-card overflow-hidden flex flex-col">
              <div
                className="aspect-[4/5] relative"
                style={{
                  background: `linear-gradient(160deg, ${t.palette[0]} 0%, ${t.palette[1]} 45%, ${t.palette[2]} 100%)`,
                }}
              >
                <div className="absolute inset-6 rounded-md flex flex-col items-center justify-center text-center"
                  style={{
                    background: "color-mix(in oklab, " + t.palette[0] + " 82%, transparent)",
                    border: "1px solid color-mix(in oklab, " + t.palette[3] + " 12%, transparent)",
                    color: t.palette[3],
                  }}
                >
                  <p className="text-[10px] tracking-[0.28em] uppercase opacity-70">
                    You are invited
                  </p>
                  <p className="font-display text-2xl mt-3 leading-tight">{t.name}</p>
                  <div className="mt-4 h-px w-10" style={{ background: t.palette[2] }} />
                  <p className="mt-4 text-[11px] uppercase tracking-[0.22em] opacity-70">
                    {t.occasion}
                  </p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-display text-xl">{t.name}</h3>
                  <div className="flex gap-1">
                    {t.palette.map((c) => (
                      <span
                        key={c}
                        className="w-3.5 h-3.5 rounded-full border border-border"
                        style={{ background: c }}
                        aria-hidden
                      />
                    ))}
                  </div>
                </div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{t.tone}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        className="py-16 lg:py-20"
        style={{ background: "color-mix(in oklab, var(--blush) 18%, var(--ivory))" }}
      >
        <div className="container-narrow flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="label-eyebrow">Ready when you are</p>
            <h2 className="font-display text-3xl mt-3">Choose a package to begin.</h2>
          </div>
          <Link to="/invitations" className="btn-primary">
            See packages <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <InvitationsFooter />
    </main>
  );
}
