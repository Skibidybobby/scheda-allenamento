"use client";

import { TimerProvider } from "./TimerContext";
import FloatingTimer from "./FloatingTimer";
import WorkoutDay from "./WorkoutDay";
import { type WorkoutDay as WorkoutDayType } from "@/lib/workout-data";

export default function WorkoutApp({ days }: { days: WorkoutDayType[] }) {
  return (
    <TimerProvider>
      <div className="flex flex-col gap-4">
        {days.map((day, index) => (
          <WorkoutDay key={day.id} day={day} defaultOpen={index === 0} />
        ))}
      </div>
      <FloatingTimer />
    </TimerProvider>
  );
}
