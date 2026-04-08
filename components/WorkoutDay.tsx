"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronDown, RotateCcw, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import {
  type WorkoutDay as WorkoutDayType,
  type Equipment,
  equipmentColors,
} from "@/lib/workout-data";

interface WorkoutDayProps {
  day: WorkoutDayType;
  defaultOpen?: boolean;
}

function EquipmentBadge({ eq }: { eq: Equipment }) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium border",
        equipmentColors[eq]
      )}
    >
      {eq}
    </span>
  );
}

export default function WorkoutDay({ day, defaultOpen = false }: WorkoutDayProps) {
  const storageKey = `scheda-day-${day.id}`;
  const [open, setOpen] = useState(defaultOpen);
  // Initialize with empty array to avoid hydration mismatch; load from localStorage in effect
  const [checked, setChecked] = useState<boolean[]>(() =>
    new Array(day.exercises.length).fill(false)
  );
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        const parsed: boolean[] = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length === day.exercises.length) {
          setChecked(parsed);
        }
      }
    } catch {
      // ignore parse errors
    }
  }, [storageKey, day.exercises.length]);

  const toggleExercise = useCallback(
    (index: number) => {
      setChecked((prev) => {
        const next = prev.map((v, i) => (i === index ? !v : v));
        try {
          localStorage.setItem(storageKey, JSON.stringify(next));
        } catch {
          // ignore storage errors
        }
        return next;
      });
    },
    [storageKey]
  );

  const resetDay = useCallback(() => {
    const reset = new Array(day.exercises.length).fill(false);
    setChecked(reset);
    try {
      localStorage.removeItem(storageKey);
    } catch {
      // ignore
    }
  }, [storageKey, day.exercises.length]);

  const completedCount = checked.filter(Boolean).length;
  const totalCount = day.exercises.length;
  const progressPct = (completedCount / totalCount) * 100;
  const allDone = completedCount === totalCount;

  return (
    <div
      className={cn(
        "rounded-xl border border-border/60 overflow-hidden transition-all duration-200",
        "bg-card hover:border-border/90",
        allDone && mounted && "border-primary/40"
      )}
    >
      {/* Day header — clickable to expand/collapse */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-t-xl"
        aria-expanded={open}
      >
        <div className={cn("relative p-4 sm:p-5 bg-gradient-to-br", day.color)}>
          {/* Progress bar */}
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-border/30">
            <div
              className={cn(
                "h-full transition-all duration-500 ease-out",
                allDone && mounted ? "bg-primary" : "bg-primary/60"
              )}
              style={{ width: mounted ? `${progressPct}%` : "0%" }}
            />
          </div>

          <div className="flex items-start justify-between gap-3">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap mb-1">
                <span className="text-xs font-semibold tracking-widest uppercase text-primary/80">
                  {day.day}
                </span>
                {day.optional && (
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-muted text-muted-foreground border border-border/50 font-medium tracking-wide">
                    Opzionale
                  </span>
                )}
                {allDone && mounted && (
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                )}
              </div>

              <h2 className="text-lg sm:text-xl font-bold text-foreground leading-tight">
                {day.title}
              </h2>

              <div className="flex flex-wrap gap-1.5 mt-2">
                {day.muscles.map((m) => (
                  <Badge
                    key={m}
                    variant="secondary"
                    className="text-[11px] px-2 py-0.5 bg-secondary/80 font-medium"
                  >
                    {m}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3 flex-shrink-0 pt-0.5">
              {/* Progress count */}
              <div className="text-right">
                <div className="text-lg font-bold text-foreground leading-none">
                  {mounted ? completedCount : 0}
                  <span className="text-sm font-normal text-muted-foreground">
                    /{totalCount}
                  </span>
                </div>
                <div className="text-[10px] text-muted-foreground mt-0.5">esercizi</div>
              </div>

              <ChevronDown
                className={cn(
                  "w-5 h-5 text-muted-foreground transition-transform duration-200",
                  open && "rotate-180"
                )}
              />
            </div>
          </div>
        </div>
      </button>

      {/* Expandable exercise list */}
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          open ? "max-h-[9999px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="divide-y divide-border/40">
          {day.exercises.map((exercise, idx) => {
            const isChecked = mounted ? checked[idx] : false;
            return (
              <label
                key={idx}
                htmlFor={`ex-${day.id}-${idx}`}
                className={cn(
                  "flex items-start gap-3 px-4 sm:px-5 py-3.5 cursor-pointer",
                  "transition-all duration-150 hover:bg-accent/40 group",
                  isChecked && "exercise-row-checked"
                )}
              >
                <Checkbox
                  id={`ex-${day.id}-${idx}`}
                  checked={isChecked}
                  onCheckedChange={() => toggleExercise(idx)}
                  className="mt-0.5 flex-shrink-0 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                />

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <span
                      className={cn(
                        "exercise-name text-sm font-medium text-foreground leading-snug transition-all",
                        isChecked && "line-through text-muted-foreground"
                      )}
                    >
                      {exercise.name}
                    </span>

                    {/* Sets × reps */}
                    <span className="flex-shrink-0 text-xs font-mono font-semibold text-primary bg-primary/10 border border-primary/20 px-2 py-0.5 rounded-md whitespace-nowrap">
                      {exercise.sets}×{exercise.reps}
                    </span>
                  </div>

                  {/* Equipment tags */}
                  {exercise.equipment && exercise.equipment.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-1.5">
                      {exercise.equipment.map((eq) => (
                        <EquipmentBadge key={eq} eq={eq} />
                      ))}
                    </div>
                  )}
                </div>
              </label>
            );
          })}
        </div>

        {/* Footer with reset */}
        {mounted && completedCount > 0 && (
          <div className="px-4 sm:px-5 py-3 border-t border-border/40 bg-muted/20 flex items-center justify-between">
            <span className="text-xs text-muted-foreground">
              {allDone ? "Allenamento completato!" : `${completedCount} di ${totalCount} completati`}
            </span>
            <button
              onClick={resetDay}
              className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              <RotateCcw className="w-3 h-3" />
              Reset
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
