import { Play, Download, Share2, Heart } from "lucide-react";
import handsImg from "@/assets/hands-flowers.jpg";
import monogram from "@/assets/ryf-monogram.png";

export function BouquetMockup() {
  return (
    <div className="relative">
      {/* Soft floating petals */}
      <div className="absolute -top-8 -left-6 w-24 h-24 rounded-full blur-3xl opacity-60"
        style={{ background: "var(--blush)" }} />
      <div className="absolute -bottom-10 -right-8 w-40 h-40 rounded-full blur-3xl opacity-50"
        style={{ background: "var(--champagne)" }} />

      <div className="relative soft-card overflow-hidden float-soft" style={{ borderRadius: "1.75rem" }}>
        {/* Browser chrome */}
        <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border/60"
          style={{ background: "color-mix(in oklab, var(--ivory) 70%, white)" }}>
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#E8B4AE" }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#E8D8B8" }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#A7B59E" }} />
          <p className="ml-auto text-[10px] tracking-widest uppercase text-muted-foreground">
            receiveyourflowers.com / for-maya
          </p>
        </div>

        <div className="p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="label-eyebrow">A Video Bouquet</p>
              <h3 className="font-display text-3xl sm:text-4xl mt-2 text-foreground">For Maya</h3>
            </div>
            <img src={monogram} alt="" aria-hidden="true" width={28} height={28}
              className="w-7 h-7 rounded-md object-cover opacity-80 shrink-0" />
          </div>
          <p className="text-muted-foreground mt-1.5 text-sm">You've received your flowers.</p>

          {/* Main video */}
          <div className="mt-6 relative rounded-2xl overflow-hidden aspect-[16/10]">
            <img src={handsImg} alt="A pair of hands cradling a small bouquet of pink roses by a window"
              className="w-full h-full object-cover" loading="lazy" width={1280} height={1600} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-transparent" />
            <button className="absolute inset-0 flex items-center justify-center group" aria-label="Play tribute">
              <span className="w-14 h-14 rounded-full bg-white/90 backdrop-blur flex items-center justify-center
                shadow-lg group-hover:scale-105 transition">
                <Play className="w-5 h-5 ml-0.5" fill="currentColor" />
              </span>
            </button>
            <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white/95 text-xs">
              <span className="font-medium">From your daughter, Lila</span>
              <span>02:14</span>
            </div>
          </div>

          {/* Contributor cards */}
          <div className="mt-5 grid grid-cols-4 gap-2.5">
            {[
              { n: "Eli", c: "var(--blush)" },
              { n: "Aunt Nia", c: "var(--champagne)" },
              { n: "Marcus", c: "var(--sage)" },
              { n: "+18", c: "color-mix(in oklab, var(--ink) 8%, var(--ivory))" },
            ].map((p) => (
              <div key={p.n} className="rounded-xl aspect-square flex flex-col items-center justify-end p-2 relative overflow-hidden"
                style={{ background: p.c }}>
                <span className="text-[10px] font-medium text-foreground/80">{p.n}</span>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="mt-5 flex items-center justify-between text-xs text-muted-foreground">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5"><Heart className="w-3.5 h-3.5" /> 21 messages</span>
            </div>
            <div className="flex items-center gap-2">
              <button className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border border-border hover:bg-muted transition">
                <Download className="w-3.5 h-3.5" /> Save
              </button>
              <button className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border border-border hover:bg-muted transition">
                <Share2 className="w-3.5 h-3.5" /> Share
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
