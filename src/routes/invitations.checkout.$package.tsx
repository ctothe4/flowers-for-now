import { createFileRoute, Link, notFound, useNavigate, useParams } from "@tanstack/react-router";
import { useState } from "react";
import { CreditCard, Smartphone, Lock, ArrowRight } from "lucide-react";
import { InvitationsNav, InvitationsFooter } from "@/components/site/InvitationsChrome";
import { findTier, saveDraft } from "@/lib/invitations";

export const Route = createFileRoute("/invitations/checkout/$package")({
  loader: ({ params }) => {
    const tier = findTier(params.package);
    if (!tier) throw notFound();
    return { tier };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `Checkout — ${loaderData?.tier.name ?? ""} Invitation` },
      { name: "robots", content: "noindex" },
    ],
  }),
  notFoundComponent: () => (
    <main className="bg-background text-foreground min-h-screen">
      <InvitationsNav />
      <section className="container-narrow py-32 text-center">
        <h1 className="font-display text-4xl">Package not found.</h1>
        <Link to="/invitations" className="btn-primary mt-8 inline-flex">
          Back to packages
        </Link>
      </section>
      <InvitationsFooter />
    </main>
  ),
  component: CheckoutPage,
});

type Method = "card" | "mobile";

function CheckoutPage() {
  const { package: id } = useParams({ from: "/invitations/checkout/$package" });
  const tier = findTier(id)!;
  const navigate = useNavigate();

  const [method, setMethod] = useState<Method>("card");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [card, setCard] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [phone, setPhone] = useState("");
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (!name.trim() || !email.trim()) {
      setError("Please enter your name and email.");
      return;
    }
    if (method === "card" && (card.replace(/\s/g, "").length < 12 || !expiry || cvc.length < 3)) {
      setError("Please enter valid card details.");
      return;
    }
    if (method === "mobile" && phone.replace(/\D/g, "").length < 9) {
      setError("Please enter a valid mobile money number.");
      return;
    }
    setProcessing(true);
    // Placeholder payment processor — real Stripe/Flutterwave integration can be wired in here.
    await new Promise((r) => setTimeout(r, 1400));
    saveDraft({
      tierId: tier.id,
      paidAt: new Date().toISOString(),
      paymentRef: "RYF-" + Math.random().toString(36).slice(2, 10).toUpperCase(),
      name: name.trim(),
      email: email.trim(),
    });
    navigate({ to: "/invitations/intake" });
  }

  return (
    <main className="bg-background text-foreground">
      <InvitationsNav />
      <section className="container-narrow pt-14 pb-24">
        <Link
          to="/invitations/$package"
          params={{ package: tier.id }}
          className="nav-link text-sm"
        >
          ← Back to {tier.name}
        </Link>

        <div className="mt-6 grid lg:grid-cols-[1.3fr_1fr] gap-10 items-start">
          <div>
            <p className="label-eyebrow">Step 1 of 3 — Payment</p>
            <h1 className="font-display text-4xl lg:text-5xl mt-4 leading-tight">
              Reserve your build.
            </h1>
            <p className="mt-4 text-foreground/75 leading-relaxed max-w-lg">
              Payment first, then you'll share your event details. This keeps our queue small
              and our care high.
            </p>

            <form onSubmit={onSubmit} className="mt-10 soft-card p-7 lg:p-9">
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Full name">
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={inputCls}
                    autoComplete="name"
                    required
                  />
                </Field>
                <Field label="Email">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={inputCls}
                    autoComplete="email"
                    required
                  />
                </Field>
              </div>

              <div className="mt-8">
                <p className="label-eyebrow">Payment method</p>
                <div className="mt-3 grid grid-cols-2 gap-3">
                  <MethodChip
                    active={method === "card"}
                    onClick={() => setMethod("card")}
                    icon={<CreditCard className="w-4 h-4" />}
                    label="Card"
                  />
                  <MethodChip
                    active={method === "mobile"}
                    onClick={() => setMethod("mobile")}
                    icon={<Smartphone className="w-4 h-4" />}
                    label="Mobile money"
                  />
                </div>
              </div>

              {method === "card" ? (
                <div className="mt-6 space-y-4">
                  <Field label="Card number">
                    <input
                      value={card}
                      onChange={(e) => setCard(formatCard(e.target.value))}
                      placeholder="1234 5678 9012 3456"
                      inputMode="numeric"
                      className={inputCls}
                      maxLength={23}
                    />
                  </Field>
                  <div className="grid grid-cols-2 gap-4">
                    <Field label="Expiry">
                      <input
                        value={expiry}
                        onChange={(e) => setExpiry(formatExpiry(e.target.value))}
                        placeholder="MM / YY"
                        className={inputCls}
                        maxLength={7}
                      />
                    </Field>
                    <Field label="CVC">
                      <input
                        value={cvc}
                        onChange={(e) => setCvc(e.target.value.replace(/\D/g, ""))}
                        placeholder="123"
                        className={inputCls}
                        maxLength={4}
                        inputMode="numeric"
                      />
                    </Field>
                  </div>
                </div>
              ) : (
                <div className="mt-6">
                  <Field label="Mobile money number">
                    <input
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+260 …"
                      className={inputCls}
                      inputMode="tel"
                    />
                  </Field>
                  <p className="mt-2 text-xs text-muted-foreground">
                    You'll receive a prompt on your phone to approve the payment.
                  </p>
                </div>
              )}

              {error && (
                <p className="mt-5 text-sm" style={{ color: "var(--rose)" }}>
                  {error}
                </p>
              )}

              <button type="submit" disabled={processing} className="btn-primary w-full mt-8">
                {processing ? "Processing…" : `Pay ${tier.price}`}{" "}
                {!processing && <ArrowRight className="w-4 h-4" />}
              </button>

              <p className="mt-4 text-xs text-muted-foreground flex items-center gap-1.5 justify-center">
                <Lock className="w-3 h-3" /> Secure checkout. Details never leave your session.
              </p>
            </form>
          </div>

          <aside className="soft-card p-8 lg:sticky lg:top-24">
            <p className="label-eyebrow">Order summary</p>
            <h2 className="font-display text-2xl mt-3">{tier.name} Invitation</h2>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{tier.blurb}</p>
            <div className="my-6 border-t border-border" />
            <div className="flex items-baseline justify-between">
              <span className="text-sm text-muted-foreground">Total</span>
              <span className="font-display text-4xl">{tier.price}</span>
            </div>
            <ul className="mt-6 space-y-2 text-sm text-foreground/80">
              {tier.features.map((f) => (
                <li key={f}>· {f}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>
      <InvitationsFooter />
    </main>
  );
}

const inputCls =
  "w-full rounded-md border border-border bg-background px-3.5 py-2.5 text-sm text-foreground outline-none focus:border-foreground/40 transition";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{label}</span>
      <div className="mt-1.5">{children}</div>
    </label>
  );
}

function MethodChip({
  active,
  onClick,
  icon,
  label,
}: {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center justify-center gap-2 rounded-md py-3 text-sm transition"
      style={{
        background: active ? "var(--ink)" : "transparent",
        color: active ? "var(--ivory)" : "var(--ink)",
        border: "1px solid " + (active ? "var(--ink)" : "color-mix(in oklab, var(--ink) 18%, transparent)"),
      }}
    >
      {icon} {label}
    </button>
  );
}

function formatCard(v: string) {
  return v
    .replace(/\D/g, "")
    .slice(0, 19)
    .replace(/(.{4})/g, "$1 ")
    .trim();
}
function formatExpiry(v: string) {
  const d = v.replace(/\D/g, "").slice(0, 4);
  if (d.length < 3) return d;
  return d.slice(0, 2) + " / " + d.slice(2);
}
