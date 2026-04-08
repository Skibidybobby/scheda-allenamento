"use client";

import { useState } from "react";
import { ChevronDown, Info } from "lucide-react";
import { cn } from "@/lib/utils";
import { noteGenerali } from "@/lib/workout-data";

export default function NoteGenerali() {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-xl border border-border/60 overflow-hidden bg-card mt-4">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full text-left px-4 sm:px-5 py-4 flex items-center justify-between gap-3 hover:bg-accent/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        aria-expanded={open}
      >
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
            <Info className="w-3.5 h-3.5 text-primary" />
          </div>
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-primary/80">Linee Guida</p>
            <p className="text-sm font-semibold text-foreground leading-tight">Note e Consigli Generali</p>
          </div>
        </div>
        <ChevronDown
          className={cn("w-5 h-5 text-muted-foreground transition-transform duration-200 flex-shrink-0", open && "rotate-180")}
        />
      </button>

      <div
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          open ? "max-h-[9999px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-4 sm:px-5 pb-5 pt-1 border-t border-border/40">
          <ul className="space-y-3 mt-3">
            {noteGenerali.map((nota, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed"
              >
                <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-[10px] font-bold text-primary">
                  {idx + 1}
                </span>
                <span>{nota}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
