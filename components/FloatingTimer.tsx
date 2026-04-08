"use client";

import { useTimer } from "./TimerContext";
import { cn } from "@/lib/utils";
import { Pause, Play, X } from "lucide-react";

const RADIUS = 54;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

function formatTime(seconds: number) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export default function FloatingTimer() {
  const { timer, pauseTimer, resumeTimer, cancelTimer } = useTimer();

  if (!timer) return null;

  const progress = timer.duration > 0 ? timer.remaining / timer.duration : 0;
  const dashOffset = CIRCUMFERENCE * (1 - progress);
  const isDone = timer.remaining === 0;
  const isUrgent = timer.remaining <= 10 && timer.remaining > 0;

  return (
    <div
      className={cn(
        "fixed bottom-4 left-1/2 -translate-x-1/2 z-50",
        "w-full max-w-sm px-4",
        "transition-all duration-300 ease-out",
        "animate-in slide-in-from-bottom-8 fade-in"
      )}
    >
      <div
        className={cn(
          "relative rounded-2xl border shadow-2xl",
          "bg-card/95 backdrop-blur-md",
          isDone
            ? "border-primary shadow-primary/20"
            : isUrgent
            ? "border-orange-500/40 shadow-orange-500/10"
            : "border-border/60 shadow-black/40"
        )}
      >
        {/* Glow line at top */}
        <div
          className={cn(
            "absolute top-0 left-4 right-4 h-px rounded-full transition-colors duration-500",
            isDone ? "bg-primary/80" : isUrgent ? "bg-orange-400/60" : "bg-primary/30"
          )}
        />

        <div className="flex items-center gap-4 p-4">
          {/* Circular progress ring */}
          <div className="relative flex-shrink-0 w-[72px] h-[72px]">
            <svg
              className="w-full h-full -rotate-90"
              viewBox="0 0 120 120"
            >
              {/* Track */}
              <circle
                cx="60"
                cy="60"
                r={RADIUS}
                fill="none"
                strokeWidth="8"
                className="stroke-border/30"
              />
              {/* Progress */}
              <circle
                cx="60"
                cy="60"
                r={RADIUS}
                fill="none"
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={CIRCUMFERENCE}
                strokeDashoffset={dashOffset}
                className={cn(
                  "transition-[stroke-dashoffset] duration-1000 ease-linear",
                  isDone
                    ? "stroke-primary"
                    : isUrgent
                    ? "stroke-orange-400"
                    : "stroke-primary"
                )}
                style={{ strokeDashoffset: dashOffset }}
              />
            </svg>
            {/* Time in center */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span
                className={cn(
                  "text-base font-bold font-mono leading-none transition-colors",
                  isDone ? "text-primary" : isUrgent ? "text-orange-400" : "text-foreground"
                )}
              >
                {isDone ? "✓" : formatTime(timer.remaining)}
              </span>
            </div>
          </div>

          {/* Exercise info */}
          <div className="flex-1 min-w-0">
            <p className="text-[10px] font-medium tracking-widest uppercase text-muted-foreground mb-0.5">
              {isDone ? "Recupero completato!" : "Recupero"}
            </p>
            <p className="text-sm font-semibold text-foreground truncate leading-tight">
              {timer.exerciseName}
            </p>
            <p className="text-xs text-muted-foreground mt-0.5">
              {isDone ? "Pronto per la prossima serie!" : `${timer.duration}s totali`}
            </p>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2 flex-shrink-0">
            {!isDone && (
              <button
                onClick={timer.isRunning ? pauseTimer : resumeTimer}
                className={cn(
                  "w-9 h-9 rounded-xl flex items-center justify-center",
                  "bg-primary/15 hover:bg-primary/25 border border-primary/30",
                  "transition-all duration-150 active:scale-95"
                )}
                aria-label={timer.isRunning ? "Pausa" : "Riprendi"}
              >
                {timer.isRunning ? (
                  <Pause className="w-4 h-4 text-primary" />
                ) : (
                  <Play className="w-4 h-4 text-primary" />
                )}
              </button>
            )}
            <button
              onClick={cancelTimer}
              className={cn(
                "w-9 h-9 rounded-xl flex items-center justify-center",
                "bg-muted/60 hover:bg-muted border border-border/50",
                "transition-all duration-150 active:scale-95"
              )}
              aria-label="Annulla timer"
            >
              <X className="w-4 h-4 text-muted-foreground" />
            </button>
          </div>
        </div>

        {/* Progress bar at bottom */}
        <div className="mx-4 mb-3 h-1 rounded-full bg-border/20 overflow-hidden">
          <div
            className={cn(
              "h-full rounded-full transition-all duration-1000 ease-linear",
              isDone ? "bg-primary" : isUrgent ? "bg-orange-400" : "bg-primary/70"
            )}
            style={{ width: `${progress * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}
