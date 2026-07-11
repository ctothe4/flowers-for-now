import { createFileRoute, Link, notFound, useParams } from "@tanstack/react-router";
import { ArrowRight, Check, MessageCircle, Clock } from "lucide-react";
import { InvitationsNav, InvitationsFooter } from "@/components/site/InvitationsChrome";
import { TIERS, findTier, WHATSAPP_URL } from "@/lib/invitations";
import { useInvitationPricing, whatsappUrl } from "@/lib/pricing";

export const Route = createFileRoute("/invitations/$package")({
  loader: ({ params }) => {
    const tier = findTier(params.package);
    if (!tier) throw notFound();
    return { tier };
  },
  head: ({ loaderData }) => {
    const name = loaderData?.tier.name ?? "Package";
    return {
      meta: [
        { title: `${name} — Invitation Flowers` },
        {
          name: "description",
          content: loaderData?.tier.longDescription ?? "Invitation Flowers package details.",
        },
      ],
    };
  },
  notFoundComponent: PackageNotFound,
  component: PackagePage,
});

function PackageNotFound() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <InvitationsNav />
      <section className="container-narrow py-32 text-center">
        <p className="label-eyebrow">Not found</p>
        <h1 className="font-display text-4xl mt-4">We couldn't find that package.</h1>
        <Link to="/invitations" className="btn-primary mt-8 inline-flex">
          Back to packages
        </Link>
      </section>
      <InvitationsFooter />
    </main>
  );
}

function PackagePage() {
  const { package: id } = useParams({ from: "/invitations/$package" });
  const tier = findTier(id)!;
  const others = TIERS.filter((t) => t.id !== tier.id);
  const pricing = useInvitationPricing();
  const price = `${pricing.symbol}${pricing[tier.id]}`;
  const isZM = pricing.country === "ZM";
  const zmHref = whatsappUrl(`Hi Receive Your Flowers — I'd like the ${tier.name} Invitation (${price}). Please share next steps.`);

  return (
    <main className="bg-background text-foreground">
      <InvitationsNav />

      <section className="grain-bg">
        <div className="container-narrow pt-16 sm:pt-20 pb-14">
          <Link to="/invitations" className="nav-link text-sm">
            ← Back to packages
          </Link>
          <div className="mt-6 grid lg:grid-cols-[1.4fr_1fr] gap-12 items-start">
            <div>
              <p className="label-eyebrow">Package</p>
              <h1 className="font-display text-5xl lg:text-6xl mt-4 leading-[1.05] text-foreground">
                {tier.name}{" "}
                <span className="italic" style={{ color: "var(--rose)" }}>
                  Invitation.
                </span>
              </h1>
              <p className="mt-6 text-lg text-foreground/80 leading-relaxed max-w-xl">
                {tier.longDescription}
              </p>
              <p className="mt-6 text-sm text-muted-foreground flex items-center gap-2">
                <Clock className="w-4 h-4" style={{ color: "var(--rose)" }} />
                Typically ready within {tier.turnaroundHours} hours of receiving your details.
              </p>
            </div>
            <div className="soft-card p-8">
              <div className="flex items-baseline gap-2">
                <span className="font-display text-5xl">{price}</span>
                <span className="text-sm text-muted-foreground">one-time</span>
              </div>
              <p className="mt-3 text-muted-foreground leading-relaxed">{tier.blurb}</p>
              {isZM ? (
                <a href={zmHref} target="_blank" rel="noopener noreferrer" className="btn-primary w-full mt-7">
                  Pay via WhatsApp <ArrowRight className="w-4 h-4" />
                </a>
              ) : (
                <Link
                  to="/invitations/checkout/$package"
                  params={{ package: tier.id }}
                  className="btn-primary w-full mt-7"
                >
                  Choose this package <ArrowRight className="w-4 h-4" />
                </Link>
              )}
              <p className="mt-3 text-xs text-muted-foreground text-center">
                Payment first, then share your details.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-narrow py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <p className="label-eyebrow">What's included</p>
            <h2 className="font-display text-3xl lg:text-4xl mt-4 leading-tight">
              Every detail, taken care of.
            </h2>
            <ul className="mt-8 space-y-3">
              {tier.includes.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <Check className="w-5 h-5 mt-0.5 shrink-0" style={{ color: "var(--rose)" }} />
                  <span className="text-foreground/85">{f}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="soft-card p-8 lg:p-9 h-fit">
            <p className="label-eyebrow">RSVP controls</p>
            <p className="mt-4 text-foreground/85 leading-relaxed">
              Every host chooses how open the guest list should feel.
            </p>
            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <span className="font-display text-lg text-foreground">Open registration.</span>
                <p className="mt-1 text-muted-foreground leading-relaxed">
                  Anyone with the link can RSVP — good for wide gatherings and community services.
                </p>
              </li>
              <li>
                <span className="font-display text-lg text-foreground">Closed registration.</span>
                <p className="mt-1 text-muted-foreground leading-relaxed">
                  Only guests on the list you provide can RSVP — good for intimate or invitation-only
                  events.
                </p>
              </li>
              <li>
                <span className="font-display text-lg text-foreground">Host approval.</span>
                <p className="mt-1 text-muted-foreground leading-relaxed">
                  Approve or deny individual RSVPs yourself, from your dashboard.
                </p>
              </li>
            </ul>
            <div className="mt-8">
              <Link to="/invitations/templates" className="btn-ghost w-full">
                Browse the template gallery
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-20 lg:py-24"
        style={{ background: "color-mix(in oklab, var(--champagne) 22%, var(--ivory))" }}
      >
        <div className="container-narrow">
          <p className="label-eyebrow">Best for</p>
          <p className="mt-4 font-display text-2xl lg:text-3xl leading-snug max-w-3xl">
            {tier.bestFor}
          </p>

          <div className="mt-14 flex flex-wrap items-center gap-3">
            {isZM ? (
              <a href={zmHref} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Pay via WhatsApp <ArrowRight className="w-4 h-4" />
              </a>
            ) : (
              <Link
                to="/invitations/checkout/$package"
                params={{ package: tier.id }}
                className="btn-primary"
              >
                Choose this package <ArrowRight className="w-4 h-4" />
              </Link>
            )}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              <MessageCircle className="w-4 h-4" /> Ask a question
            </a>
          </div>
        </div>
      </section>

      <section className="container-narrow py-20 lg:py-24">
        <p className="label-eyebrow">Compare</p>
        <h2 className="font-display text-3xl lg:text-4xl mt-4">Other packages.</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {others.map((o) => (
            <Link
              key={o.id}
              to="/invitations/$package"
              params={{ package: o.id }}
              className="soft-card p-7 block"
            >
              <h3 className="font-display text-2xl">{o.name}</h3>
              <p className="mt-1 font-display text-3xl" style={{ color: "var(--rose)" }}>
                {`${pricing.symbol}${pricing[o.id]}`}
              </p>
              <p className="mt-3 text-muted-foreground leading-relaxed">{o.blurb}</p>
              <p className="mt-6 text-sm inline-flex items-center gap-1 text-foreground/80">
                Find out more <ArrowRight className="w-4 h-4" />
              </p>
            </Link>
          ))}
        </div>
      </section>

      <InvitationsFooter />
    </main>
  );
}
