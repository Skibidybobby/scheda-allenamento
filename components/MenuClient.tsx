"use client";

import { useState } from "react";
import { Flame, Beef, Wheat, Droplets, Utensils } from "lucide-react";
import { cn } from "@/lib/utils";
import { giorni, macroTargets, tagConfig } from "@/lib/menu-data";

// ─── Macro pill ────────────────────────────────────────────────────────────
function MacroPill({
  icon: Icon,
  label,
  value,
  unit,
  colorClass,
  borderClass,
  textClass,
}: {
  icon: React.ElementType;
  label: string;
  value: number;
  unit: string;
  colorClass: string;
  borderClass: string;
  textClass: string;
}) {
  return (
    <div className={cn("flex items-center gap-2.5 px-3 py-2.5 rounded-xl border", colorClass, borderClass)}>
      <div className={cn("w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0", colorClass)}>
        <Icon className={cn("w-3.5 h-3.5", textClass)} />
      </div>
      <div className="min-w-0">
        <div className={cn("text-base font-extrabold leading-none font-mono", textClass)}>
          {value.toLocaleString("it-IT")}
          <span className="text-[10px] font-semibold ml-0.5 opacity-80">{unit}</span>
        </div>
        <div className="text-[10px] text-muted-foreground mt-0.5 font-medium">{label}</div>
      </div>
    </div>
  );
}

// ─── Tag badge ─────────────────────────────────────────────────────────────
function TagBadge({ tag }: { tag: string }) {
  const cfg = tagConfig[tag];
  if (!cfg) return null;
  return (
    <span className={cn("inline-flex items-center gap-1 px-1.5 py-0.5 rounded border text-[10px] font-semibold", cfg.className)}>
      <span>{cfg.icon}</span>
      {cfg.label}
    </span>
  );
}

// ─── Meal card ─────────────────────────────────────────────────────────────
function MealCard({ tipo, emoji, titolo, note, tags }: {
  tipo: string;
  emoji: string;
  titolo: string;
  note: string;
  tags: string[];
}) {
  const isBatch = tipo === "Batch cook";

  return (
    <div className={cn(
      "rounded-xl border border-border/60 bg-card p-4 flex gap-3 transition-colors hover:border-border/90",
      isBatch && "border-emerald-500/30 bg-emerald-500/5"
    )}>
      {/* Emoji icon */}
      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-muted/60 flex items-center justify-center text-xl">
        {emoji}
      </div>

      <div className="flex-1 min-w-0">
        {/* Type label */}
        <p className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground/70 mb-0.5">
          {tipo}
        </p>

        {/* Title */}
        <p className="text-sm font-semibold text-foreground leading-snug">
          {titolo}
        </p>

        {/* Macro note */}
        <p className="text-[11px] text-muted-foreground/70 mt-1.5 font-mono leading-relaxed">
          {note}
        </p>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-2">
            {tags.map((t) => <TagBadge key={t} tag={t} />)}
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Main component ────────────────────────────────────────────────────────
export default function MenuClient() {
  const [selectedDay, setSelectedDay] = useState(0);
  const giorno = giorni[selectedDay];

  return (
    <div className="min-h-screen bg-background">
      {/* Page header */}
      <div className="relative overflow-hidden border-b border-border/50">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-24 bg-primary/6 blur-3xl rounded-full pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-4 py-6 sm:py-8">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center flex-shrink-0">
              <Utensils className="w-5 h-5 text-primary" strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-[10px] font-bold tracking-widest uppercase text-primary/80">Green Theory Gym</p>
              <h1 className="text-xl sm:text-2xl font-extrabold text-foreground leading-tight">Menù Settimanale</h1>
            </div>
          </div>

          {/* Macro targets */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            <MacroPill icon={Flame} label="Calorie" value={macroTargets.kcal} unit="kcal"
              colorClass="bg-blue-500/10" borderClass="border-blue-500/25" textClass="text-blue-400" />
            <MacroPill icon={Beef} label="Proteine" value={macroTargets.proteine} unit="g"
              colorClass="bg-emerald-500/10" borderClass="border-emerald-500/25" textClass="text-emerald-400" />
            <MacroPill icon={Wheat} label="Carboidrati" value={macroTargets.carboidrati} unit="g"
              colorClass="bg-amber-500/10" borderClass="border-amber-500/25" textClass="text-amber-400" />
            <MacroPill icon={Droplets} label="Grassi" value={macroTargets.grassi} unit="g"
              colorClass="bg-red-500/10" borderClass="border-red-500/25" textClass="text-red-400" />
          </div>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-4 py-6 pb-20">
        {/* Day selector */}
        <div className="flex gap-1.5 overflow-x-auto pb-2 mb-6 scrollbar-none">
          {giorni.map((g, i) => {
            const active = i === selectedDay;
            const isBatchDay = g.tag === "Dom";
            return (
              <button
                key={g.tag}
                onClick={() => setSelectedDay(i)}
                className={cn(
                  "flex-shrink-0 flex flex-col items-center px-3.5 py-2.5 rounded-xl border text-xs font-bold transition-all duration-150 relative",
                  active
                    ? "bg-primary/15 border-primary/40 text-primary"
                    : "border-border/50 text-muted-foreground hover:border-border/80 hover:text-foreground bg-card"
                )}
              >
                <span className="text-[11px] font-extrabold tracking-wide">{g.tag}</span>
                {isBatchDay && (
                  <span className="text-[8px] font-bold text-emerald-400 mt-0.5">BATCH</span>
                )}
              </button>
            );
          })}
        </div>

        {/* Selected day header */}
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-extrabold text-foreground tracking-tight">{giorno.nome}</h2>
            <p className="text-xs text-muted-foreground mt-0.5">
              {giorno.pasti.length} pasti · obiettivo {macroTargets.kcal.toLocaleString("it-IT")} kcal
            </p>
          </div>
          {giorno.tag === "Dom" && (
            <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
              ♻ Batch Day
            </span>
          )}
        </div>

        {/* Meal cards */}
        <div className="flex flex-col gap-3">
          {giorno.pasti.map((pasto, idx) => (
            <MealCard key={idx} {...pasto} />
          ))}
        </div>

        {/* Legend */}
        <div className="mt-8 rounded-xl border border-border/40 bg-card/60 p-4">
          <p className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground/60 mb-3">Legenda</p>
          <div className="flex flex-wrap gap-2">
            {Object.entries(tagConfig).map(([key, cfg]) => (
              <span key={key} className={cn("inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border text-[11px] font-semibold", cfg.className)}>
                <span>{cfg.icon}</span>
                <span className="font-bold">{cfg.label}</span>
                <span className="opacity-60">—</span>
                <span className="font-normal opacity-80">
                  {key === "batch" ? "preparato il Dom." : key === "forno" ? "cottura in forno" : "< 10 min"}
                </span>
              </span>
            ))}
          </div>
        </div>

        <footer className="mt-10 text-center text-xs text-muted-foreground/40">
          Green Theory Gym · Menù Massa 2025
        </footer>
      </main>
    </div>
  );
}
