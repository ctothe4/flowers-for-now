import { createFileRoute, Link } from "@tanstack/react-router";
import monogram from "@/assets/ryf-monogram.png";

export const Route = createFileRoute("/welcome")({
  head: () => ({
    meta: [
      { title: "Welcome to the Founding Circle — Receive Your Flowers" },
      { name: "description", content: "Your bouquets are reserved. Welcome to the Founding Circle." },
    ],
  }),
  component: WelcomePage,
});

function WelcomePage() {
  return (
    <main style={{ background: "#F6F2EC", minHeight: "100vh", color: "#2B2B2B" }}>
      <div className="container-narrow flex flex-col items-center justify-center text-center min-h-screen py-16">
        <img src={monogram} alt="RYF" className="w-14 h-14 rounded-md object-cover mb-8 opacity-90" />

        <p
          style={{
            color: "#D8A5A1",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            fontFamily: "Inter, sans-serif",
            fontSize: "0.72rem",
            fontWeight: 500,
          }}
        >
          The Founding Circle
        </p>

        <h1
          className="mt-5 text-4xl sm:text-5xl md:text-6xl"
          style={{
            fontFamily: '"Playfair Display", Georgia, serif',
            color: "#2B2B2B",
            letterSpacing: "-0.02em",
            lineHeight: 1.05,
          }}
        >
          Welcome to the Founding Circle
        </h1>

        <p
          className="mt-6 max-w-xl text-base sm:text-lg"
          style={{ fontFamily: "Inter, sans-serif", color: "#2B2B2B", opacity: 0.78, lineHeight: 1.65 }}
        >
          Your bouquets are reserved. We'll be in touch by email with everything you
          need to begin — including how to send your first video bouquet and how to
          gift bouquets to the people you love.
        </p>

        <div
          className="mt-10 w-24 h-px"
          style={{ background: "linear-gradient(90deg, transparent, #D8A5A1, transparent)" }}
        />

        <p
          className="mt-6 italic text-sm"
          style={{ fontFamily: '"Playfair Display", Georgia, serif', color: "#2B2B2B", opacity: 0.6 }}
        >
          Living Tributes. Lasting Love.
        </p>

        <Link
          to="/"
          className="mt-10 text-sm underline"
          style={{ color: "#2B2B2B", opacity: 0.65, fontFamily: "Inter, sans-serif" }}
        >
          Return home
        </Link>
      </div>
    </main>
  );
}
