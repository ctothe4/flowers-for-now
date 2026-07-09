import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, CheckCircle2, Upload } from "lucide-react";
import { InvitationsNav, InvitationsFooter } from "@/components/site/InvitationsChrome";
import { findTier, loadDraft, type IntakeDraft, type Tier } from "@/lib/invitations";

export const Route = createFileRoute("/invitations/intake")({
  head: () => ({
    meta: [
      { title: "Share your details — Invitation Flowers" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: IntakePage,
});

const OCCASIONS = [
  "Wedding",
  "Memorial",
  "Shower",
  "Birthday",
  "Anniversary",
  "Corporate",
  "Graduation",
  "Retirement",
  "Other",
];

const TEMPLATES = [
  "Editorial — cream & rose",
  "Classic — ivory & serif",
  "Modern — charcoal & minimal",
  "Botanical — soft florals",
  "Memorial — muted & tender",
  "Not sure yet — please suggest",
];

const REGISTRATION = ["Open — anyone with the link", "Closed — guest list only"];

function IntakePage() {
  const navigate = useNavigate();
  const [draft, setDraft] = useState<IntakeDraft | null>(null);
  const [tier, setTier] = useState<Tier | null>(null);

  useEffect(() => {
    const d = loadDraft();
    if (!d) {
      navigate({ to: "/invitations" });
      return;
    }
    setDraft(d);
    setTier(findTier(d.tierId) ?? null);
  }, [navigate]);

  const [occasion, setOccasion] = useState("Wedding");
  const [customOccasion, setCustomOccasion] = useState("");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("");
  const [template, setTemplate] = useState(TEMPLATES[0]);
  const [registration, setRegistration] = useState(REGISTRATION[0]);
  const [notes, setNotes] = useState("");
  const [videoName, setVideoName] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  if (!draft || !tier) {
    return (
      <main className="bg-background text-foreground min-h-screen">
        <InvitationsNav />
        <section className="container-narrow py-32 text-center">
          <p className="text-muted-foreground">Loading…</p>
        </section>
        <InvitationsFooter />
      </main>
    );
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    // Simulated intake submission — a real backend would receive this payload.
    await new Promise((r) => setTimeout(r, 900));
    navigate({ to: "/invitations/confirmed" });
  }

  return (
    <main className="bg-background text-foreground">
      <InvitationsNav />

      <section className="grain-bg">
        <div className="container-narrow pt-14 pb-10">
          <div className="soft-card p-5 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 mt-0.5 shrink-0" style={{ color: "var(--rose)" }} />
            <div>
              <p className="text-sm text-foreground">
                Thank you, {draft.name.split(" ")[0]} — payment received for the{" "}
                <span className="font-display">{tier.name}</span> package.
              </p>
              <p className="text-xs text-muted-foreground mt-1">Reference {draft.paymentRef}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-narrow pb-24">
        <p className="label-eyebrow">Step 2 of 3 — Share your details</p>
        <h1 className="font-display text-4xl lg:text-5xl mt-4 leading-tight max-w-2xl">
          Tell us about the moment.
        </h1>
        <p className="mt-4 text-foreground/75 max-w-xl leading-relaxed">
          A short brief — the more you share, the more we can shape the invitation around the tone
          you want.
        </p>

        <form onSubmit={onSubmit} className="mt-10 grid lg:grid-cols-2 gap-6">
          <div className="soft-card p-7 lg:p-8">
            <p className="label-eyebrow">Occasion</p>
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-2">
              {OCCASIONS.map((o) => (
                <button
                  key={o}
                  type="button"
                  onClick={() => setOccasion(o)}
                  className="rounded-md px-3 py-2 text-sm transition"
                  style={{
                    background: occasion === o ? "var(--ink)" : "transparent",
                    color: occasion === o ? "var(--ivory)" : "var(--ink)",
                    border:
                      "1px solid " +
                      (occasion === o
                        ? "var(--ink)"
                        : "color-mix(in oklab, var(--ink) 18%, transparent)"),
                  }}
                >
                  {o}
                </button>
              ))}
            </div>
            {occasion === "Other" && (
              <input
                value={customOccasion}
                onChange={(e) => setCustomOccasion(e.target.value)}
                placeholder="Describe the occasion"
                className={inputCls + " mt-4"}
              />
            )}
          </div>

          <div className="soft-card p-7 lg:p-8">
            <p className="label-eyebrow">Event / service date</p>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className={inputCls + " mt-4"}
              required
            />
            <p className="label-eyebrow mt-8">Approximate guest count</p>
            <input
              value={guests}
              onChange={(e) => setGuests(e.target.value.replace(/\D/g, ""))}
              placeholder="e.g. 120"
              className={inputCls + " mt-4"}
              inputMode="numeric"
              required
            />
          </div>

          <div className="soft-card p-7 lg:p-8 lg:col-span-2">
            <p className="label-eyebrow">Template preference</p>
            <div className="mt-4 grid sm:grid-cols-2 gap-2">
              {TEMPLATES.map((t) => (
                <label
                  key={t}
                  className="flex items-start gap-3 rounded-md px-3 py-2.5 text-sm cursor-pointer transition border"
                  style={{
                    background: template === t ? "color-mix(in oklab, var(--blush) 50%, var(--ivory))" : "transparent",
                    borderColor:
                      template === t
                        ? "color-mix(in oklab, var(--rose) 60%, transparent)"
                        : "color-mix(in oklab, var(--ink) 12%, transparent)",
                  }}
                >
                  <input
                    type="radio"
                    name="template"
                    checked={template === t}
                    onChange={() => setTemplate(t)}
                    className="mt-1"
                  />
                  <span className="text-foreground/85">{t}</span>
                </label>
              ))}
            </div>
            <Link
              to="/invitations/templates"
              className="mt-4 inline-block text-sm nav-link"
              target="_blank"
            >
              Browse the full template gallery →
            </Link>
          </div>

          <div className="soft-card p-7 lg:p-8 lg:col-span-2">
            <p className="label-eyebrow">Guest registration</p>
            <div className="mt-4 grid sm:grid-cols-2 gap-3">
              {REGISTRATION.map((r) => (
                <label
                  key={r}
                  className="flex items-start gap-3 rounded-md px-4 py-3 text-sm cursor-pointer border"
                  style={{
                    background:
                      registration === r
                        ? "color-mix(in oklab, var(--blush) 50%, var(--ivory))"
                        : "transparent",
                    borderColor:
                      registration === r
                        ? "color-mix(in oklab, var(--rose) 60%, transparent)"
                        : "color-mix(in oklab, var(--ink) 12%, transparent)",
                  }}
                >
                  <input
                    type="radio"
                    name="reg"
                    checked={registration === r}
                    onChange={() => setRegistration(r)}
                    className="mt-1"
                  />
                  <span className="text-foreground/85">{r}</span>
                </label>
              ))}
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              You can still approve or deny individual RSVPs from your dashboard.
            </p>
          </div>

          {tier.requiresVideo && (
            <div className="soft-card p-7 lg:p-8 lg:col-span-2">
              <p className="label-eyebrow">Host video message (optional now)</p>
              <p className="mt-2 text-sm text-muted-foreground">
                You can upload now, or send it to us on WhatsApp later. Phone quality is fine — we
                edit it.
              </p>
              <label className="mt-4 flex items-center gap-3 cursor-pointer">
                <span className="btn-ghost">
                  <Upload className="w-4 h-4" /> {videoName ? "Change file" : "Upload video"}
                </span>
                <input
                  type="file"
                  accept="video/*"
                  className="hidden"
                  onChange={(e) => setVideoName(e.target.files?.[0]?.name ?? null)}
                />
                {videoName && (
                  <span className="text-sm text-foreground/80 truncate">{videoName}</span>
                )}
              </label>
            </div>
          )}

          <div className="soft-card p-7 lg:p-8 lg:col-span-2">
            <p className="label-eyebrow">Anything else we should know?</p>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={4}
              className={inputCls + " mt-4 resize-y"}
              placeholder="Venue, dress code, tone, colours, family notes…"
            />
          </div>

          <div className="lg:col-span-2 flex flex-wrap items-center gap-3">
            <button type="submit" disabled={submitting} className="btn-primary">
              {submitting ? "Sending…" : "Send details"}{" "}
              {!submitting && <ArrowRight className="w-4 h-4" />}
            </button>
            <p className="text-xs text-muted-foreground">
              We'll have your invitation ready within {tier.turnaroundHours} hours, and reach out on
              WhatsApp if we need anything else.
            </p>
          </div>
        </form>
      </section>

      <InvitationsFooter />
    </main>
  );
}

const inputCls =
  "w-full rounded-md border border-border bg-background px-3.5 py-2.5 text-sm text-foreground outline-none focus:border-foreground/40 transition";
