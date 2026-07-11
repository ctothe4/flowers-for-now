import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Lock, Heart } from "lucide-react";
import { useConsumerPricing, whatsappUrl } from "@/lib/pricing";

export const Route = createFileRoute("/start-video-flower")({
  component: StartVideoFlowerPage,
});

function StartVideoFlowerPage() {
  const pricing = useConsumerPricing();
  const price = `${pricing.symbol}${pricing.flower}`;
  const isZM = pricing.country === "ZM";
  return (
    <main className="bg-background text-foreground min-h-screen">
      <header className="sticky top-0 z-50 backdrop-blur-md"
        style={{ background: "color-mix(in oklab, var(--ivory) 82%, transparent)",
                 borderBottom: "1px solid color-mix(in oklab, var(--ink) 8%, transparent)" }}>
        <div className="container-narrow flex items-center justify-between h-16">
          <Link to="/" className="font-display text-lg sm:text-xl tracking-tight text-foreground">
            Receive Your Flowers
          </Link>
          <Link to="/" className="nav-link text-sm">Back to home</Link>
        </div>
      </header>

      <section className="container-narrow pt-16 sm:pt-24 lg:pt-32 pb-24 lg:pb-32">
        <div className="max-w-2xl mx-auto text-center">
          <p className="label-eyebrow">Video Flower</p>
          <h1 className="font-display text-[2.6rem] sm:text-5xl lg:text-6xl leading-[1.05] mt-5 text-foreground">
            Send a Video Flower.
          </h1>
          <p className="mt-5 text-xl text-foreground/80 leading-relaxed max-w-lg mx-auto">
            One message. One person. One thing that should not wait.
          </p>
        </div>

        <div className="max-w-xl mx-auto mt-16">
          <div className="soft-card p-8 lg:p-10">
            <p className="text-lg text-foreground/80 leading-relaxed">
              A Video Flower is a single heartfelt video message delivered privately to someone you love, admire, appreciate, or need to say something meaningful to.
            </p>
            <div className="mt-8 space-y-3">
              {[
                "1 private video message",
                "Simple Receive Your Flowers branded opening and closing cards",
                "Private delivery link",
                "Downloadable MP4 keepsake",
                "Delivered digitally",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm">
                  <Heart className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "var(--rose)" }} />
                  <span className="text-foreground/90">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-8 editorial-rule">
              <div className="flex items-baseline justify-between">
                <span className="font-display text-2xl">Video Flower</span>
                <span className="font-display text-4xl">{price}</span>
              </div>
            </div>
            <div className="mt-8">
              {isZM ? (
                <a
                  href={whatsappUrl(`Hi Receive Your Flowers — I'd like to send a Video Flower (${price}).`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full inline-flex"
                >
                  Pay via WhatsApp <ArrowRight className="w-4 h-4" />
                </a>
              ) : (
                <button className="btn-primary w-full">
                  Continue to Payment <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
            <div className="mt-6 flex items-center justify-center gap-2 text-xs text-muted-foreground">
              <Lock className="w-3.5 h-3.5" /> Private delivery. No account required.
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-8">
        <div className="container-narrow flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <span>Receive Your Flowers</span>
          <div className="flex items-center gap-6">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <a href="mailto:hello@receiveyourflowers.com" className="hover:text-foreground transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
