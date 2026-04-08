import { Dumbbell, Leaf } from "lucide-react";

export default function Header() {
  return (
    <header className="relative overflow-hidden border-b border-border/50">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-primary/8 blur-3xl rounded-full pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 py-8 sm:py-12">
        <div className="flex items-center gap-4">
          {/* Logo mark */}
          <div className="relative flex-shrink-0">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-primary/15 border border-primary/30 flex items-center justify-center">
              <Leaf className="w-7 h-7 sm:w-8 sm:h-8 text-primary" strokeWidth={1.5} />
            </div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-lg bg-primary flex items-center justify-center">
              <Dumbbell className="w-3.5 h-3.5 text-primary-foreground" strokeWidth={2} />
            </div>
          </div>

          {/* Text */}
          <div>
            <div className="flex items-center gap-2 mb-0.5">
              <span className="text-xs font-medium tracking-widest uppercase text-primary/80">
                Green Theory Gym
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Scheda Massa
            </h1>
            <p className="text-sm text-muted-foreground mt-0.5">
              Programma ipertrofia · 5 giorni
            </p>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-6 flex flex-wrap gap-3">
          {[
            { label: "Giorni", value: "5" },
            { label: "Esercizi tot.", value: "33" },
            { label: "Focus", value: "Massa" },
            { label: "Livello", value: "Intermedio" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-secondary/60 border border-border/50"
            >
              <span className="text-xs text-muted-foreground">{stat.label}</span>
              <span className="text-xs font-semibold text-foreground">{stat.value}</span>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
