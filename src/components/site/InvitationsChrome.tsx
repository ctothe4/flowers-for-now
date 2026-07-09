import { Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import monogram from "@/assets/ryf-monogram.png";
import { WHATSAPP_URL } from "@/lib/invitations";

export function InvitationsNav() {
  const items = [
    { label: "Overview", href: "/invitations" },
    { label: "Templates", href: "/invitations/templates" },
    { label: "Packages", href: "/invitations#pricing" },
    { label: "FAQ", href: "/invitations#faq" },
    { label: "Enterprise", href: "/enterprise" },
  ];
  return (
    <header
      className="sticky top-0 z-50 backdrop-blur-md"
      style={{
        background: "color-mix(in oklab, var(--ivory) 82%, transparent)",
        borderBottom: "1px solid color-mix(in oklab, var(--ink) 8%, transparent)",
      }}
    >
      <div className="container-narrow flex items-center justify-between h-16">
        <Link
          to="/"
          className="flex items-center gap-2.5 font-display text-lg sm:text-xl tracking-tight text-foreground"
        >
          <img
            src={monogram}
            alt="RYF monogram"
            width={36}
            height={36}
            className="w-7 h-7 sm:w-9 sm:h-9 rounded-md object-cover"
          />
          <span>Receive Your Flowers</span>
        </Link>
        <nav className="hidden lg:flex items-center gap-8">
          {items.map((n) => (
            <a key={n.href} href={n.href} className="nav-link">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="hidden lg:block">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm py-2.5 px-5"
          >
            <MessageCircle className="w-4 h-4" /> WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}

export function InvitationsFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-narrow py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
        <span>© {new Date().getFullYear()} Receive Your Flowers</span>
        <div className="flex items-center gap-6">
          <Link to="/" className="hover:text-foreground transition">
            Home
          </Link>
          <Link to="/invitations" className="hover:text-foreground transition">
            Invitations
          </Link>
          <Link to="/enterprise" className="hover:text-foreground transition">
            Enterprise
          </Link>
          <a
            href="mailto:hello@receiveyourflowers.com"
            className="hover:text-foreground transition"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
