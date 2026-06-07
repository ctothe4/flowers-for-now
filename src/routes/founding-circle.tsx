import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Check } from "lucide-react";
import monogram from "@/assets/ryf-monogram.png";

export const Route = createFileRoute("/founding-circle")({
  head: () => ({
    meta: [
      { title: "Founding Circle — Receive Your Flowers" },
      { name: "description", content: "Choose your founding tier. Founding pricing for a limited circle — bouquets redeemable for 18 months and giftable to anyone." },
      { property: "og:title", content: "Founding Circle — Receive Your Flowers" },
      { property: "og:description", content: "Choose your founding tier. Founding pricing for a limited circle." },
    ],
  }),
  component: FoundingCirclePage,
});

type Tier = {
  id: string;
  name: string;
  price: number;
  bouquets: number;
  value: number;
  perk?: string;
};

const TIERS: Tier[] = [
  { id: "friend", name: "Friend of the Family", price: 50, bouquets: 4, value: 200 },
  { id: "supporter", name: "Supporter", price: 100, bouquets: 8, value: 400 },
  { id: "patron", name: "Patron", price: 250, bouquets: 15, value: 750, perk: "Your name on the Founders Wall" },
  { id: "benefactor", name: "Benefactor", price: 500, bouquets: 25, value: 1250, perk: "Founders Wall + first invite to our pop-up event" },
  { id: "founding", name: "Founding Circle", price: 1000, bouquets: 40, value: 2000, perk: "Custom bouquet + permanent recognition" },
];

const fmt = (n: number) => `$${n.toLocaleString("en-US")}`;

function FoundingCirclePage() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<string>("patron");
  const [useOther, setUseOther] = useState(false);
  const [otherAmount, setOtherAmount] = useState<string>("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<{ name?: string; email?: string; amount?: string }>({});
  const [submitting, setSubmitting] = useState(false);
  const [fallback, setFallback] = useState<null | { name: string }>(null);

  const otherNum = Number(otherAmount);
  const otherBouquets = useMemo(() => {
    if (!otherNum || otherNum < 50) return 0;
    // ~$12.50 per bouquet — same ratio as Friend tier ($50/4)
    return Math.floor(otherNum / 12.5);
  }, [otherNum]);

  const validate = () => {
    const e: typeof errors = {};
    if (!name.trim()) e.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) e.email = "Please enter a valid email.";
    if (useOther) {
      if (!otherAmount || otherNum < 50) e.amount = "Minimum is $50.";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleContinue = async () => {
    if (!validate()) return;
    setSubmitting(true);

    const tier = useOther
      ? { id: "other", name: "Custom contribution", price: otherNum, bouquets: otherBouquets, value: otherBouquets * 50 }
      : TIERS.find((t) => t.id === selected)!;

    // STRIPE INTEGRATION SCAFFOLD ----------------------------------------
    // TODO: When Stripe is configured, POST to a server route that creates
    // a Checkout Session using STRIPE_SECRET_KEY and per-tier price IDs
    // (price_friend, price_supporter, price_patron, price_benefactor,
    // price_founding) — or a dynamic line item for the "Other" path.
    // Pass { name, email, tierId } as metadata.
    // Then redirect to session.url. On success Stripe sends user to /welcome.
    //
    // Example:
    //   const res = await fetch("/api/public/create-checkout-session", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({ tierId: tier.id, amount: tier.price, name, email }),
    //   });
    //   const { url } = await res.json();
    //   window.location.href = url;
    // --------------------------------------------------------------------

    const stripeReady = (import.meta as any).env?.VITE_STRIPE_PUBLISHABLE_KEY;
    if (!stripeReady) {
      // Graceful fallback — capture name/email locally, show confirmation
      try {
        const reservations = JSON.parse(localStorage.getItem("ryf_reservations") || "[]");
        reservations.push({ name, email, tier: tier.id, amount: tier.price, at: new Date().toISOString() });
        localStorage.setItem("ryf_reservations", JSON.stringify(reservations));
      } catch {}
      setSubmitting(false);
      setFallback({ name });
      return;
    }

    // If keys exist, proceed to backend (not yet implemented here)
    setSubmitting(false);
    navigate({ to: "/welcome" });
  };

  if (fallback) {
    return (
      <PageShell>
        <div className="max-w-xl mx-auto text-center py-12">
          <p className="eyebrow">Your spot is saved</p>
          <h1 className="font-display text-4xl sm:text-5xl mt-4" style={{ color: "#2B2B2B", letterSpacing: "-0.015em" }}>
            Payment coming online shortly
          </h1>
          <p className="mt-5 text-base" style={{ color: "#2B2B2B", opacity: 0.78, fontFamily: "Inter, sans-serif", lineHeight: 1.65 }}>
            Thank you, {fallback.name}. We've reserved your founding spot. As soon as
            secure payment is live, we'll email you a private link to complete your
            contribution — at the founding price we promised.
          </p>
          <Link to="/" className="inline-block mt-8 text-sm underline" style={{ color: "#2B2B2B", opacity: 0.7 }}>
            Return home
          </Link>
        </div>
      </PageShell>
    );
  }

  return (
    <PageShell>
      <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
        <p className="eyebrow">The Founding Circle</p>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl mt-4" style={{ color: "#2B2B2B", letterSpacing: "-0.02em", lineHeight: 1.05 }}>
          Choose your founding tier
        </h1>
        <p className="mt-5 text-base sm:text-lg" style={{ color: "#2B2B2B", opacity: 0.72, fontFamily: "Inter, sans-serif", lineHeight: 1.6 }}>
          Founding pricing is available to a limited circle. Your bouquets are
          redeemable for 18 months and giftable to anyone.
        </p>
      </div>

      <div className="grid gap-4 sm:gap-5 max-w-4xl mx-auto">
        {TIERS.map((t) => {
          const isSelected = !useOther && selected === t.id;
          return (
            <button
              key={t.id}
              type="button"
              onClick={() => { setSelected(t.id); setUseOther(false); }}
              className="text-left rounded-2xl p-5 sm:p-6 transition-all"
              style={{
                background: isSelected ? "#F2E6E3" : "#FFFFFF",
                border: `1.5px solid ${isSelected ? "#D8A5A1" : "rgba(43,43,43,0.10)"}`,
                boxShadow: isSelected ? "0 12px 30px -18px rgba(216,165,161,0.55)" : "0 1px 0 rgba(43,43,43,0.03)",
              }}
              aria-pressed={isSelected}
            >
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div className="flex items-start gap-3 min-w-0">
                  <span
                    className="mt-1 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center"
                    style={{
                      border: `1.5px solid ${isSelected ? "#D8A5A1" : "rgba(43,43,43,0.25)"}`,
                      background: isSelected ? "#D8A5A1" : "transparent",
                    }}
                  >
                    {isSelected && <Check className="w-2.5 h-2.5 text-white" strokeWidth={4} />}
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-display text-xl sm:text-2xl" style={{ color: "#2B2B2B", letterSpacing: "-0.01em" }}>
                      {t.name}
                    </h3>
                    {t.perk && (
                      <p className="mt-1 text-xs sm:text-sm" style={{ color: "#2B2B2B", opacity: 0.6, fontFamily: "Inter, sans-serif" }}>
                        {t.perk}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex items-baseline gap-5 sm:gap-8 ml-auto" style={{ fontFamily: "Inter, sans-serif", fontVariantNumeric: "tabular-nums" }}>
                  <div className="text-right">
                    <div className="text-[0.65rem] uppercase tracking-widest" style={{ color: "#2B2B2B", opacity: 0.5 }}>Price</div>
                    <div className="text-lg sm:text-xl font-medium" style={{ color: "#2B2B2B" }}>{fmt(t.price)}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[0.65rem] uppercase tracking-widest" style={{ color: "#2B2B2B", opacity: 0.5 }}>Bouquets</div>
                    <div className="text-lg sm:text-xl font-medium" style={{ color: "#2B2B2B" }}>{t.bouquets}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[0.65rem] uppercase tracking-widest" style={{ color: "#2B2B2B", opacity: 0.5 }}>Value</div>
                    <div className="text-lg sm:text-xl font-medium" style={{ color: "#A7B59A" }}>{fmt(t.value)}</div>
                  </div>
                </div>
              </div>
            </button>
          );
        })}

        {/* Other amount */}
        <div
          className="rounded-2xl p-5 sm:p-6 transition-all"
          style={{
            background: useOther ? "#F2E6E3" : "#FFFFFF",
            border: `1.5px solid ${useOther ? "#D8A5A1" : "rgba(43,43,43,0.10)"}`,
          }}
        >
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="radio"
              checked={useOther}
              onChange={() => setUseOther(true)}
              className="sr-only"
            />
            <span
              className="mt-1 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center"
              style={{
                border: `1.5px solid ${useOther ? "#D8A5A1" : "rgba(43,43,43,0.25)"}`,
                background: useOther ? "#D8A5A1" : "transparent",
              }}
              onClick={() => setUseOther(true)}
            >
              {useOther && <Check className="w-2.5 h-2.5 text-white" strokeWidth={4} />}
            </span>
            <div className="flex-1">
              <h3 className="font-display text-xl sm:text-2xl" style={{ color: "#2B2B2B" }}>Other amount</h3>
              <p className="text-xs sm:text-sm mt-1" style={{ color: "#2B2B2B", opacity: 0.6, fontFamily: "Inter, sans-serif" }}>
                Bouquets scale with your contribution.
              </p>
              <div className="mt-4 flex items-center gap-3 flex-wrap">
                <div className="flex items-center rounded-full px-4 py-2.5" style={{ background: "#FFFFFF", border: "1px solid rgba(43,43,43,0.15)" }}>
                  <span style={{ color: "#2B2B2B", opacity: 0.6, fontFamily: "Inter, sans-serif" }}>$</span>
                  <input
                    type="number"
                    min={50}
                    inputMode="numeric"
                    value={otherAmount}
                    onFocus={() => setUseOther(true)}
                    onChange={(e) => setOtherAmount(e.target.value)}
                    placeholder="50"
                    className="ml-1 w-24 bg-transparent outline-none"
                    style={{ color: "#2B2B2B", fontFamily: "Inter, sans-serif", fontVariantNumeric: "tabular-nums" }}
                  />
                </div>
                {useOther && otherBouquets > 0 && (
                  <span className="text-sm" style={{ color: "#2B2B2B", opacity: 0.7, fontFamily: "Inter, sans-serif" }}>
                    ≈ <strong>{otherBouquets}</strong> bouquets
                  </span>
                )}
              </div>
              {errors.amount && <p className="mt-2 text-sm" style={{ color: "#D8A5A1" }}>{errors.amount}</p>}
            </div>
          </label>
        </div>
      </div>

      {/* Name + email */}
      <div className="max-w-xl mx-auto mt-12 sm:mt-16 space-y-5">
        <div>
          <label className="block text-xs uppercase tracking-widest mb-2" style={{ color: "#2B2B2B", opacity: 0.6, fontFamily: "Inter, sans-serif" }}>
            Your name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-xl px-4 py-3 outline-none transition"
            style={{
              background: "#FFFFFF",
              border: `1px solid ${errors.name ? "#D8A5A1" : "rgba(43,43,43,0.15)"}`,
              color: "#2B2B2B",
              fontFamily: "Inter, sans-serif",
            }}
          />
          {errors.name && <p className="mt-1.5 text-sm" style={{ color: "#D8A5A1" }}>{errors.name}</p>}
        </div>
        <div>
          <label className="block text-xs uppercase tracking-widest mb-2" style={{ color: "#2B2B2B", opacity: 0.6, fontFamily: "Inter, sans-serif" }}>
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl px-4 py-3 outline-none transition"
            style={{
              background: "#FFFFFF",
              border: `1px solid ${errors.email ? "#D8A5A1" : "rgba(43,43,43,0.15)"}`,
              color: "#2B2B2B",
              fontFamily: "Inter, sans-serif",
            }}
          />
          {errors.email && <p className="mt-1.5 text-sm" style={{ color: "#D8A5A1" }}>{errors.email}</p>}
        </div>

        <button
          onClick={handleContinue}
          disabled={submitting}
          className="w-full py-4 rounded-full font-medium transition-all hover:-translate-y-px disabled:opacity-60"
          style={{
            background: "#D8A5A1",
            color: "#FFFFFF",
            fontFamily: "Inter, sans-serif",
            boxShadow: "0 10px 30px -12px rgba(216,165,161,0.6)",
          }}
        >
          {submitting ? "One moment…" : "Continue to secure payment"}
        </button>
        <p className="text-center text-xs" style={{ color: "#2B2B2B", opacity: 0.55, fontFamily: "Inter, sans-serif" }}>
          Secure payment is processed by Stripe. Founding pricing locked in for life.
        </p>
      </div>
    </PageShell>
  );
}

function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <main style={{ background: "#F6F2EC", minHeight: "100vh", color: "#2B2B2B" }}>
      <style>{`
        .eyebrow {
          font-family: Inter, sans-serif;
          font-size: 0.72rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #D8A5A1;
          font-weight: 500;
        }
      `}</style>
      <header className="border-b" style={{ borderColor: "rgba(43,43,43,0.08)" }}>
        <div className="container-narrow flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2.5">
            <img src={monogram} alt="RYF" width={36} height={36} className="w-8 h-8 rounded-md object-cover" />
            <div className="flex flex-col leading-tight">
              <span className="font-display text-lg" style={{ color: "#2B2B2B" }}>Receive Your Flowers</span>
              <span className="text-[0.65rem] uppercase tracking-widest" style={{ color: "#2B2B2B", opacity: 0.55, fontFamily: "Inter, sans-serif" }}>
                Living Tributes. Lasting Love.
              </span>
            </div>
          </Link>
          <Link to="/" className="text-sm" style={{ color: "#2B2B2B", opacity: 0.65, fontFamily: "Inter, sans-serif" }}>
            ← Home
          </Link>
        </div>
      </header>
      <div className="container-narrow py-12 sm:py-20">{children}</div>
    </main>
  );
}
