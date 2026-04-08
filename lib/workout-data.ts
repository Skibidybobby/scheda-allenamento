export type Equipment = "Panatta" | "Diamond" | "Manubri" | "Bilanciere" | "Corpo libero";

export interface Exercise {
  name: string;
  sets: number;
  reps: string;
  equipment?: Equipment[];
}

export interface WorkoutDay {
  id: number;
  day: string;
  title: string;
  muscles: string[];
  color: string;
  exercises: Exercise[];
  optional?: boolean;
}

export const workoutData: WorkoutDay[] = [
  {
    id: 1,
    day: "Giorno 1",
    title: "Petto + Tricipiti",
    muscles: ["Petto", "Tricipiti"],
    color: "from-emerald-500/20 to-green-600/10",
    exercises: [
      { name: "Panca piana", sets: 4, reps: "8-10", equipment: ["Panatta"] },
      { name: "Panca inclinata manubri (30°)", sets: 4, reps: "10", equipment: ["Manubri"] },
      { name: "Chest press", sets: 3, reps: "12", equipment: ["Panatta"] },
      { name: "Croci ai cavi", sets: 3, reps: "15", equipment: ["Diamond"] },
      { name: "French press bilanciere EZ", sets: 3, reps: "10", equipment: ["Bilanciere"] },
      { name: "Pushdown cavo", sets: 3, reps: "12", equipment: ["Diamond"] },
      { name: "Dip machine", sets: 3, reps: "10", equipment: ["Panatta"] },
    ],
  },
  {
    id: 2,
    day: "Giorno 2",
    title: "Schiena + Bicipiti",
    muscles: ["Schiena", "Bicipiti"],
    color: "from-teal-500/20 to-cyan-600/10",
    exercises: [
      { name: "Trazioni lat machine", sets: 4, reps: "10", equipment: ["Panatta"] },
      { name: "Rematore bilanciere", sets: 4, reps: "8", equipment: ["Bilanciere"] },
      { name: "Pulley basso", sets: 3, reps: "12", equipment: ["Diamond"] },
      { name: "Pull-down cavo dritto", sets: 3, reps: "15", equipment: ["Diamond"] },
      { name: "Curl bilanciere EZ", sets: 3, reps: "10", equipment: ["Bilanciere"] },
      { name: "Curl manubri alternati", sets: 3, reps: "12", equipment: ["Manubri"] },
      { name: "Curl concentrato", sets: 3, reps: "10", equipment: ["Manubri"] },
    ],
  },
  {
    id: 3,
    day: "Giorno 3",
    title: "Gambe + Polpacci",
    muscles: ["Quadricipiti", "Femorali", "Polpacci"],
    color: "from-lime-500/20 to-green-700/10",
    exercises: [
      { name: "Squat multipower", sets: 4, reps: "8", equipment: ["Panatta"] },
      { name: "Leg press", sets: 4, reps: "10", equipment: ["Panatta"] },
      { name: "Leg extension", sets: 3, reps: "12", equipment: ["Panatta"] },
      { name: "Leg curl sdraiato", sets: 3, reps: "12", equipment: ["Panatta"] },
      { name: "Affondi con manubri", sets: 3, reps: "10 per gamba", equipment: ["Manubri"] },
      { name: "Calf raise in piedi", sets: 4, reps: "15", equipment: ["Diamond"] },
      { name: "Calf seduto", sets: 3, reps: "20", equipment: ["Panatta"] },
    ],
  },
  {
    id: 4,
    day: "Giorno 4",
    title: "Spalle + Core",
    muscles: ["Spalle", "Core", "Trapezi"],
    color: "from-green-400/20 to-emerald-700/10",
    exercises: [
      { name: "Military press manubri", sets: 4, reps: "8", equipment: ["Manubri"] },
      { name: "Alzate laterali", sets: 4, reps: "12", equipment: ["Diamond"] },
      { name: "Alzate frontali manubri", sets: 3, reps: "12", equipment: ["Manubri"] },
      { name: "Face pull", sets: 3, reps: "15", equipment: ["Diamond"] },
      { name: "Shrug manubri", sets: 3, reps: "12", equipment: ["Manubri"] },
      { name: "Crunch machine", sets: 3, reps: "15", equipment: ["Panatta"] },
      { name: "Plank", sets: 3, reps: "45 sec", equipment: ["Corpo libero"] },
    ],
  },
  {
    id: 5,
    day: "Giorno 5",
    title: "Upper Body",
    muscles: ["Petto", "Schiena", "Spalle", "Braccia"],
    color: "from-emerald-600/20 to-teal-700/10",
    optional: true,
    exercises: [
      { name: "Panca piana manubri", sets: 3, reps: "10", equipment: ["Manubri"] },
      { name: "Trazioni presa stretta", sets: 3, reps: "8", equipment: ["Corpo libero"] },
      { name: "Shoulder press machine", sets: 3, reps: "10", equipment: ["Panatta"] },
      { name: "Curl martello", sets: 3, reps: "12", equipment: ["Manubri"] },
      { name: "Tricipiti kickback", sets: 3, reps: "12", equipment: ["Manubri"] },
    ],
  },
];

export const equipmentColors: Record<Equipment, string> = {
  Panatta: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  Diamond: "bg-violet-500/15 text-violet-400 border-violet-500/30",
  Manubri: "bg-blue-500/15 text-blue-400 border-blue-500/30",
  Bilanciere: "bg-orange-500/15 text-orange-400 border-orange-500/30",
  "Corpo libero": "bg-slate-500/15 text-slate-400 border-slate-500/30",
};
