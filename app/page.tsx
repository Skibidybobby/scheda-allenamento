import Header from "@/components/Header";
import WorkoutDay from "@/components/WorkoutDay";
import { workoutData } from "@/lib/workout-data";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="max-w-4xl mx-auto px-4 py-6 sm:py-10">
        <div className="flex flex-col gap-4">
          {workoutData.map((day, index) => (
            <WorkoutDay
              key={day.id}
              day={day}
              defaultOpen={index === 0}
            />
          ))}
        </div>

        <footer className="mt-12 pb-6 text-center text-xs text-muted-foreground/50">
          Green Theory Gym · Scheda Massa 2025
        </footer>
      </main>
    </div>
  );
}
