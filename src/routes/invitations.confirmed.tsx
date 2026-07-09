import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { CheckCircle2, MessageCircle } from "lucide-react";
import { InvitationsNav, InvitationsFooter } from "@/components/site/InvitationsChrome";
import { clearDraft, findTier, loadDraft, WHATSAPP_URL, type Tier } from "@/lib/invitations";

export const Route = createFileRoute("/invitations/confirmed")({
  head: () => ({
    meta: [
      { title: "You're all set — Invitation Flowers" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: ConfirmedPage,
});

function ConfirmedPage() {
  const [tier, setTier] = useState<Tier | null>(null);
  const [name, setName] = useState<string>("");
  const [ref, setRef] = useState<string>("");

  useEffect(() => {
    const d = loadDraft();
    if (d) {
      setTier(findTier(d.tierId) ?? null);
      setName(d.name.split(" ")[0] ?? "");
      setRef(d.paymentRef);
    }
    // Draft has served its purpose — clear it once shown.
    return () => clearDraft();
  }, []);

  const hours = tier?.turnaroundHours ?? 72;

  return (
    <main className="bg-background text-foreground">
      <InvitationsNav />

      <section className="grain-bg">
        <div className="container-narrow pt-20 pb-16 max-w-2xl">
          <p className="label-eyebrow">Step 3 of 3 — All set</p>
          <div className="mt-6 flex items-center gap-3">
            <CheckCircle2 className="w-6 h-6" style={{ color: "var(--rose)" }} />
            <h1 className="font-display text-4xl lg:text-5xl leading-tight">
              {name ? `Thank you, ${name}.` : "Thank you."}
            </h1>
          </div>
          <p className="mt-5 text-lg text-foreground/80 leading-relaxed">
            Your details are with our team. We'll have your invitation ready within{" "}
            <span className="font-display">{hours} hours</span>, and reach out on WhatsApp if we
            need anything else.
          </p>
        </div>
      </section>

      <section className="container-narrow py-16 lg:py-20 max-w-2xl">
        <div className="soft-card p-7 lg:p-9">
          <p className="label-eyebrow">What happens next</p>
          <ol className="mt-6 space-y-6">
            {[
              {
                t: "We build your invitation",
                d: "Our team designs your page against the template you chose and the tone of the occasion.",
              },
              {
                t: "You receive your link on WhatsApp",
                d: "We send you the shareable invitation link and your host dashboard access — usually within " +
                  hours +
                  " hours.",
              },
              {
                t: "You send. Guests RSVP.",
                d: "Share the link however you like. Guests RSVP in the invitation; you approve or deny from the dashboard.",
              },
            ].map((s, i) => (
              <li key={s.t} className="flex gap-4">
                <span
                  className="font-display text-2xl leading-none"
                  style={{ color: "var(--rose)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="font-display text-xl">{s.t}</p>
                  <p className="mt-1 text-muted-foreground leading-relaxed">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>

          {ref && (
            <p className="mt-8 text-xs text-muted-foreground">
              Reference {ref} — keep this for your records.
            </p>
          )}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <MessageCircle className="w-4 h-4" /> Open WhatsApp
          </a>
          <Link to="/invitations" className="btn-ghost">
            Back to Invitations
          </Link>
        </div>
      </section>

      <InvitationsFooter />
    </main>
  );
}
