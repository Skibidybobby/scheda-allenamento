"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
  useCallback,
  type ReactNode,
} from "react";

export interface TimerState {
  exerciseName: string;
  duration: number;
  remaining: number;
  isRunning: boolean;
  isVisible: boolean;
}

interface TimerContextValue {
  timer: TimerState | null;
  startTimer: (exerciseName: string, seconds: number) => void;
  pauseTimer: () => void;
  resumeTimer: () => void;
  cancelTimer: () => void;
}

const TimerContext = createContext<TimerContextValue | null>(null);

export function useTimer() {
  const ctx = useContext(TimerContext);
  if (!ctx) throw new Error("useTimer must be used within TimerProvider");
  return ctx;
}

function playBeep() {
  try {
    const ctx = new AudioContext();
    const gains = [0, 0.1, 0.3, 0.6, 0.8, 0.6, 0.3, 0.0];
    const freqs = [880, 880, 1100];
    freqs.forEach((freq, fi) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.type = "sine";
      osc.frequency.value = freq;
      const start = ctx.currentTime + fi * 0.18;
      gain.gain.setValueAtTime(0, start);
      gain.gain.linearRampToValueAtTime(0.4, start + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, start + 0.15);
      osc.start(start);
      osc.stop(start + 0.16);
    });
    setTimeout(() => ctx.close(), 1500);
  } catch {
    // AudioContext may be unavailable
  }
}

function vibrate() {
  try {
    if ("vibrate" in navigator) {
      navigator.vibrate([200, 100, 200]);
    }
  } catch {
    // ignore
  }
}

export function TimerProvider({ children }: { children: ReactNode }) {
  const [timer, setTimer] = useState<TimerState | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const clearTick = useCallback(() => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const startTick = useCallback(() => {
    clearTick();
    intervalRef.current = setInterval(() => {
      setTimer((prev) => {
        if (!prev || !prev.isRunning) return prev;
        const next = prev.remaining - 1;
        if (next <= 0) {
          clearTick();
          playBeep();
          vibrate();
          return { ...prev, remaining: 0, isRunning: false };
        }
        return { ...prev, remaining: next };
      });
    }, 1000);
  }, [clearTick]);

  const startTimer = useCallback(
    (exerciseName: string, seconds: number) => {
      clearTick();
      setTimer({
        exerciseName,
        duration: seconds,
        remaining: seconds,
        isRunning: true,
        isVisible: true,
      });
      // Start tick on next tick to ensure state is set
      setTimeout(startTick, 0);
    },
    [clearTick, startTick]
  );

  const pauseTimer = useCallback(() => {
    clearTick();
    setTimer((prev) => (prev ? { ...prev, isRunning: false } : null));
  }, [clearTick]);

  const resumeTimer = useCallback(() => {
    setTimer((prev) => {
      if (!prev || prev.remaining <= 0) return prev;
      return { ...prev, isRunning: true };
    });
    startTick();
  }, [startTick]);

  const cancelTimer = useCallback(() => {
    clearTick();
    setTimer(null);
  }, [clearTick]);

  // Clean up on unmount
  useEffect(() => clearTick, [clearTick]);

  return (
    <TimerContext.Provider value={{ timer, startTimer, pauseTimer, resumeTimer, cancelTimer }}>
      {children}
    </TimerContext.Provider>
  );
}
