"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronDown, RotateCcw, CheckCircle2, BookOpen, ImageIcon, Timer } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { type WorkoutDay as WorkoutDayType, machineColors } from "@/lib/workout-data";
import { useTimer } from "./TimerContext";

interface WorkoutDayProps {
  day: WorkoutDayType;
  defaultOpen?: boolean;
}

function MachineBadge({ machine }: { machine: string }) {
  const cls = machineColors[machine] ?? "bg-muted/50 text-muted-foreground border-border/50";
  return (
    <span className={cn("inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium border", cls)}>
      {machine}
    </span>
  );
}

function IconLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      onClick={(e) => e.stopPropagation()}
      className={cn(
        "inline-flex items-center justify-center w-6 h-6 rounded-md flex-shrink-0",
        "text-muted-foreground/60 hover:text-primary hover:bg-primary/10",
        "transition-all duration-150 active:scale-90"
      )}
    >
      {children}
    </a>
  );
}

function formatRest(s: number) {
  return s >= 60 ? `${Math.floor(s / 60)}min${s % 60 ? ` ${s % 60}s` : ""}` : `${s}s`;
}

export default function WorkoutDay({ day, defaultOpen = false }: WorkoutDayProps) {
  const storageKey = `scheda-day-${day.id}`;
  const [open, setOpen] = useState(defaultOpen);
  const [checked, setChecked] = useState<boolean[]>(() => new Array(day.exercises.length).fill(false));
  const [mounted, setMounted] = useState(false);
  const { startTimer } = useTimer();

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
    } catch { /* ignore */ }
  }, [storageKey, day.exercises.length]);

  const toggleExercise = useCallback((index: number) => {
    setChecked((prev) => {
      const next = prev.map((v, i) => (i === index ? !v : v));
      try { localStorage.setItem(storageKey, JSON.stringify(next)); } catch { /* ignore */ }
      if (!prev[index]) {
        startTimer(day.exercises[index].name, day.exercises[index].restSeconds);
      }
      return next;
    });
  }, [storageKey, day.exercises, startTimer]);

  const resetDay = useCallback(() => {
    setChecked(new Array(day.exercises.length).fill(false));
    try { localStorage.removeItem(storageKey); } catch { /* ignore */ }
  }, [storageKey, day.exercises.length]);

  const completedCount = checked.filter(Boolean).length;
  const totalCount = day.exercises.length;
  const allDone = completedCount === totalCount;
  const progressPct = totalCount > 0 ? (completedCount / totalCount) * 100 : 0;

  // Derive a subtle RGBA gradient from the day's hex color
  const headerBg = `linear-gradient(135deg, ${day.color}2e 0%, ${day.color}0d 100%)`;
  const accentBar = day.color;

  return (
    <div
      className={cn(
        "rounded-xl border overflow-hidden transition-all duration-200 bg-card",
        allDone && mounted ? "border-opacity-60" : "border-border/60 hover:border-border/90"
      )}
      style={allDone && mounted ? { borderColor: `${day.color}66` } : undefined}
    >
      {/* Header button */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-t-xl"
        aria-expanded={open}
      >
        <div className="relative p-4 sm:p-5" style={{ background: headerBg }}>
          {/* Left accent bar */}
          <div
            className="absolute left-0 top-3 bottom-3 w-0.5 rounded-full"
            style={{ backgroundColor: day.color }}
          />

          {/* Progress bar at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-border/20">
            <div
              className="h-full transition-all duration-500 ease-out"
              style={{
                width: mounted ? `${progressPct}%` : "0%",
                backgroundColor: accentBar,
                opacity: 0.7,
              }}
            />
          </div>

          <div className="flex items-start justify-between gap-3 pl-3">
            <div className="flex-1 min-w-0">
              {/* Top labels row */}
              <div className="flex items-center gap-2 flex-wrap mb-1">
                <span
                  className="text-xs font-bold tracking-widest uppercase"
                  style={{ color: day.color }}
                >
                  {day.label}
                </span>
                <span className="text-xs font-semibold text-muted-foreground/60 tracking-wider">
                  · {day.day} · {day.fullDay}
                </span>
                {day.badge && (
                  <span
                    className="text-[10px] px-1.5 py-0.5 rounded font-bold tracking-wider"
                    style={{
                      backgroundColor: `${day.color}22`,
                      color: day.color,
                      border: `1px solid ${day.color}44`,
                    }}
                  >
                    {day.badge}
                  </span>
                )}
                {allDone && mounted && (
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: day.color }} />
                )}
              </div>

              {/* Muscle group title */}
              <h2 className="text-lg sm:text-xl font-extrabold text-foreground leading-tight tracking-tight">
                {day.muscles}
              </h2>
            </div>

            {/* Progress count + chevron */}
            <div className="flex items-center gap-3 flex-shrink-0 pt-0.5">
              <div className="text-right">
                <div className="text-lg font-bold text-foreground leading-none">
                  {mounted ? completedCount : 0}
                  <span className="text-sm font-normal text-muted-foreground">/{totalCount}</span>
                </div>
                <div className="text-[10px] text-muted-foreground mt-0.5">esercizi</div>
              </div>
              <ChevronDown
                className={cn("w-5 h-5 text-muted-foreground transition-transform duration-200", open && "rotate-180")}
              />
            </div>
          </div>
        </div>
      </button>

      {/* Exercise list */}
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
              <div
                key={idx}
                className={cn(
                  "flex items-start gap-3 px-4 sm:px-5 py-3.5 transition-all duration-150 hover:bg-accent/30",
                  isChecked && "opacity-50"
                )}
              >
                <Checkbox
                  id={`ex-${day.id}-${idx}`}
                  checked={isChecked}
                  onCheckedChange={() => toggleExercise(idx)}
                  className="mt-0.5 flex-shrink-0"
                  style={isChecked ? { backgroundColor: day.color, borderColor: day.color } : { borderColor: `${day.color}66` }}
                />

                <div className="flex-1 min-w-0">
                  {/* Exercise name + sets×reps */}
                  <div className="flex items-start justify-between gap-2">
                    <label
                      htmlFor={`ex-${day.id}-${idx}`}
                      className={cn(
                        "text-sm font-semibold text-foreground leading-snug cursor-pointer transition-all",
                        isChecked && "line-through text-muted-foreground"
                      )}
                    >
                      {exercise.name}
                    </label>
                    <span
                      className="flex-shrink-0 text-xs font-mono font-bold px-2 py-0.5 rounded-md whitespace-nowrap border"
                      style={{
                        backgroundColor: `${day.color}15`,
                        color: day.color,
                        borderColor: `${day.color}30`,
                      }}
                    >
                      {exercise.sets}×{exercise.reps}
                    </span>
                  </div>

                  {/* Note */}
                  {exercise.note && (
                    <p className="text-[11px] text-muted-foreground/70 mt-1 leading-relaxed italic">
                      {exercise.note}
                    </p>
                  )}

                  {/* Bottom row: machine badge, rest, icons */}
                  <div className="flex items-center flex-wrap gap-x-2 gap-y-1.5 mt-2">
                    <MachineBadge machine={exercise.machine} />

                    <span className="flex items-center gap-1 text-[10px] text-muted-foreground/60">
                      <Timer className="w-3 h-3" />
                      {formatRest(exercise.restSeconds)}
                    </span>

                    <span className="flex-1" />

                    {/* Action icons */}
                    <div className="flex items-center gap-1">
                      <IconLink href={exercise.imageUrl} label={`Foto: ${exercise.name}`}>
                        <ImageIcon className="w-3.5 h-3.5" />
                      </IconLink>
                      <IconLink href={exercise.articleUrl} label={`Tutorial: ${exercise.name}`}>
                        <BookOpen className="w-3.5 h-3.5" />
                      </IconLink>
                      <button
                        onClick={() => startTimer(exercise.name, exercise.restSeconds)}
                        aria-label={`Avvia recupero ${exercise.restSeconds}s`}
                        className={cn(
                          "inline-flex items-center gap-1 px-2 py-0.5 rounded-md border",
                          "text-[10px] font-semibold transition-all duration-150 active:scale-95 flex-shrink-0"
                        )}
                        style={{
                          color: day.color,
                          borderColor: `${day.color}30`,
                          backgroundColor: `${day.color}0d`,
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = `${day.color}22`; }}
                        onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = `${day.color}0d`; }}
                      >
                        <Timer className="w-3 h-3" />
                        Start
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        {mounted && completedCount > 0 && (
          <div className="px-4 sm:px-5 py-3 border-t border-border/40 bg-muted/20 flex items-center justify-between">
            <span className="text-xs" style={{ color: allDone ? day.color : undefined }}>
              {allDone ? "✓ Allenamento completato!" : `${completedCount} di ${totalCount} completati`}
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
