import { useEffect, useRef, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { X, Check } from "lucide-react";

const STORAGE_KEY = "ryf_founding_circle_seen";

const BENEFITS = [
  "Up to 4× the bouquets — pay for one, get up to four",
  "Founding Member status — a permanent badge on your account",
  "18-month redeemable credits — use them anytime, or gift them to anyone",
  "Founders perks at higher tiers — your name on the Founders Wall + first invite to our pop-up event",
];

export function FoundingCircleModal() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const navigate = useNavigate();
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      if (window.localStorage.getItem(STORAGE_KEY)) return;
    } catch {}
    const t = window.setTimeout(() => {
      setMounted(true);
      requestAnimationFrame(() => setOpen(true));
      try { window.localStorage.setItem(STORAGE_KEY, "1"); } catch {}
    }, 1500);
    return () => window.clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
      if (e.key === "Tab" && dialogRef.current) {
        const focusables = dialogRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault(); last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault(); first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  const handleClose = () => {
    setOpen(false);
    window.setTimeout(() => setMounted(false), 250);
  };

  const handleClaim = () => {
    handleClose();
    navigate({ to: "/founding-circle" });
  };

  if (!mounted) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="fc-title"
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      onClick={(e) => { if (e.target === e.currentTarget) handleClose(); }}
      style={{
        background: "color-mix(in oklab, #2B2B2B 55%, transparent)",
        opacity: open ? 1 : 0,
        transition: "opacity 250ms ease",
      }}
    >
      <div
        ref={dialogRef}
        className="relative w-full max-w-lg rounded-3xl p-8 sm:p-10 shadow-2xl"
        style={{
          background: "#F6F2EC",
          color: "#2B2B2B",
          transform: open ? "scale(1)" : "scale(0.96)",
          transition: "transform 300ms cubic-bezier(.2,.7,.2,1)",
          boxShadow: "0 30px 80px -20px rgba(43,43,43,0.35)",
        }}
      >
        <button
          ref={closeBtnRef}
          onClick={handleClose}
          aria-label="Close"
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-black/5 transition"
        >
          <X className="w-4 h-4" style={{ color: "#2B2B2B" }} />
        </button>

        <p
          className="text-[0.72rem] font-medium mb-4"
          style={{
            color: "#D8A5A1",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            fontFamily: "Inter, sans-serif",
          }}
        >
          The Founding Circle
        </p>

        <h2
          id="fc-title"
          className="text-3xl sm:text-4xl leading-tight mb-3"
          style={{ fontFamily: '"Playfair Display", Georgia, serif', color: "#2B2B2B", letterSpacing: "-0.01em" }}
        >
          Join the Founding Circle
        </h2>

        <p
          className="text-base mb-6"
          style={{ fontFamily: "Inter, sans-serif", color: "#2B2B2B", opacity: 0.78, lineHeight: 1.55 }}
        >
          Be among the first to send a video bouquet — and lock in founding pricing
          you'll never see again.
        </p>

        <ul className="space-y-3 mb-8" style={{ fontFamily: "Inter, sans-serif" }}>
          {BENEFITS.map((b) => (
            <li key={b} className="flex items-start gap-3 text-sm leading-relaxed" style={{ color: "#2B2B2B" }}>
              <span
                className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                style={{ background: "#F2E6E3" }}
              >
                <Check className="w-3 h-3" style={{ color: "#D8A5A1" }} strokeWidth={3} />
              </span>
              <span style={{ opacity: 0.88 }}>{b}</span>
            </li>
          ))}
        </ul>

        <button
          onClick={handleClaim}
          className="w-full py-3.5 rounded-full font-medium transition-all hover:-translate-y-px"
          style={{
            background: "#D8A5A1",
            color: "#FFFFFF",
            fontFamily: "Inter, sans-serif",
            letterSpacing: "0.01em",
            boxShadow: "0 10px 30px -12px rgba(216,165,161,0.6)",
          }}
        >
          Claim my founding spot
        </button>

        <button
          onClick={handleClose}
          className="block mx-auto mt-4 text-sm hover:underline"
          style={{ color: "#2B2B2B", opacity: 0.6, fontFamily: "Inter, sans-serif" }}
        >
          Maybe later
        </button>
      </div>
    </div>
  );
}
