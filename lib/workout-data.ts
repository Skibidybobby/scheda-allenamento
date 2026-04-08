export type Equipment = "Panatta" | "Diamond" | "Manubri" | "Bilanciere" | "Corpo libero";

export interface Exercise {
  name: string;
  sets: number;
  reps: string;
  equipment?: Equipment[];
  restSeconds: number;
  imageUrl: string;
  articleUrl: string;
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
      {
        name: "Panca piana",
        sets: 4, reps: "8-10", equipment: ["Panatta"],
        restSeconds: 120,
        imageUrl: "https://www.panattasport.com/en/fit-evo/flat-bench/",
        articleUrl: "https://exrx.net/WeightExercises/PectoralSternal/BBBenchPress",
      },
      {
        name: "Panca inclinata manubri (30°)",
        sets: 4, reps: "10", equipment: ["Manubri"],
        restSeconds: 90,
        imageUrl: "https://exrx.net/WeightExercises/PectoralClavicular/DBInclineBenchPress",
        articleUrl: "https://exrx.net/WeightExercises/PectoralClavicular/DBInclineBenchPress",
      },
      {
        name: "Chest press",
        sets: 3, reps: "12", equipment: ["Panatta"],
        restSeconds: 90,
        imageUrl: "https://www.panattasport.com/en/sec/vertical-chest-convergent/",
        articleUrl: "https://exrx.net/WeightExercises/PectoralSternal/LVChestPressS",
      },
      {
        name: "Croci ai cavi",
        sets: 3, reps: "15", equipment: ["Diamond"],
        restSeconds: 60,
        imageUrl: "https://www.diamondfitness.it/prodotto/crossover/",
        articleUrl: "https://exrx.net/WeightExercises/PectoralSternal/CBStandingFly",
      },
      {
        name: "French press bilanciere EZ",
        sets: 3, reps: "10", equipment: ["Bilanciere"],
        restSeconds: 60,
        imageUrl: "https://exrx.net/WeightExercises/Triceps/BBLyingTriExt",
        articleUrl: "https://exrx.net/WeightExercises/Triceps/BBLyingTriExt",
      },
      {
        name: "Pushdown cavo",
        sets: 3, reps: "12", equipment: ["Diamond"],
        restSeconds: 60,
        imageUrl: "https://www.diamondfitness.it/prodotto/dual-pulley/",
        articleUrl: "https://exrx.net/WeightExercises/Triceps/CBPushdown",
      },
      {
        name: "Dip machine",
        sets: 3, reps: "10", equipment: ["Panatta"],
        restSeconds: 60,
        imageUrl: "https://www.panattasport.com/en/free-weight-special/dips-press-dual-system/",
        articleUrl: "https://exrx.net/WeightExercises/Triceps/LVTriDipH",
      },
    ],
  },
  {
    id: 2,
    day: "Giorno 2",
    title: "Schiena + Bicipiti",
    muscles: ["Schiena", "Bicipiti"],
    color: "from-teal-500/20 to-cyan-600/10",
    exercises: [
      {
        name: "Trazioni lat machine",
        sets: 4, reps: "10", equipment: ["Panatta"],
        restSeconds: 90,
        imageUrl: "https://www.panattasport.com/en/fit-evo/lat-pulldown-convergent/",
        articleUrl: "https://exrx.net/WeightExercises/LatissimusDorsi/CBFrontPulldown",
      },
      {
        name: "Rematore bilanciere",
        sets: 4, reps: "8", equipment: ["Bilanciere"],
        restSeconds: 120,
        imageUrl: "https://exrx.net/WeightExercises/BackGeneral/BBBentOverRow",
        articleUrl: "https://exrx.net/WeightExercises/BackGeneral/BBBentOverRow",
      },
      {
        name: "Pulley basso",
        sets: 3, reps: "12", equipment: ["Diamond"],
        restSeconds: 90,
        imageUrl: "https://www.diamondfitness.it/prodotto/lat-machine-pulley/",
        articleUrl: "https://exrx.net/WeightExercises/BackGeneral/CBSeatedRow",
      },
      {
        name: "Pull-down cavo dritto",
        sets: 3, reps: "15", equipment: ["Diamond"],
        restSeconds: 60,
        imageUrl: "https://www.diamondfitness.it/prodotto/dual-pulley/",
        articleUrl: "https://exrx.net/WeightExercises/LatissimusDorsi/CBSeatedStraightArmPullover",
      },
      {
        name: "Curl bilanciere EZ",
        sets: 3, reps: "10", equipment: ["Bilanciere"],
        restSeconds: 60,
        imageUrl: "https://exrx.net/WeightExercises/Biceps/BBCurl",
        articleUrl: "https://exrx.net/WeightExercises/Biceps/BBCurl",
      },
      {
        name: "Curl manubri alternati",
        sets: 3, reps: "12", equipment: ["Manubri"],
        restSeconds: 60,
        imageUrl: "https://exrx.net/WeightExercises/Biceps/DBCurl",
        articleUrl: "https://exrx.net/WeightExercises/Biceps/DBCurl",
      },
      {
        name: "Curl concentrato",
        sets: 3, reps: "10", equipment: ["Manubri"],
        restSeconds: 60,
        imageUrl: "https://exrx.net/WeightExercises/Brachialis/DBConcentrationCurl",
        articleUrl: "https://exrx.net/WeightExercises/Brachialis/DBConcentrationCurl",
      },
    ],
  },
  {
    id: 3,
    day: "Giorno 3",
    title: "Gambe + Polpacci",
    muscles: ["Quadricipiti", "Femorali", "Polpacci"],
    color: "from-lime-500/20 to-green-700/10",
    exercises: [
      {
        name: "Squat multipower",
        sets: 4, reps: "8", equipment: ["Panatta"],
        restSeconds: 120,
        imageUrl: "https://www.panattasport.com/en/sec/smith-machine-selectorized/",
        articleUrl: "https://exrx.net/WeightExercises/Quadriceps/SMSquat",
      },
      {
        name: "Leg press",
        sets: 4, reps: "10", equipment: ["Panatta"],
        restSeconds: 120,
        imageUrl: "https://www.panattasport.com/en/sec/horizontal-leg-press-3/",
        articleUrl: "https://exrx.net/WeightExercises/Quadriceps/LVSeatedLegPress",
      },
      {
        name: "Leg extension",
        sets: 3, reps: "12", equipment: ["Panatta"],
        restSeconds: 60,
        imageUrl: "https://www.panattasport.com/en/fit-evo/leg-extension/",
        articleUrl: "https://exrx.net/WeightExercises/Quadriceps/LVLegExtension",
      },
      {
        name: "Leg curl sdraiato",
        sets: 3, reps: "12", equipment: ["Panatta"],
        restSeconds: 60,
        imageUrl: "https://www.panattasport.com/en/fit-evo/lying-leg-curl/",
        articleUrl: "https://exrx.net/WeightExercises/Hamstrings/LVLyingLegCurl",
      },
      {
        name: "Affondi con manubri",
        sets: 3, reps: "10 per gamba", equipment: ["Manubri"],
        restSeconds: 90,
        imageUrl: "https://exrx.net/WeightExercises/Quadriceps/DBLunge",
        articleUrl: "https://exrx.net/WeightExercises/Quadriceps/DBLunge",
      },
      {
        name: "Calf raise in piedi",
        sets: 4, reps: "15", equipment: ["Diamond"],
        restSeconds: 45,
        imageUrl: "https://www.diamondfitness.it/prodotto/calf-verticale/",
        articleUrl: "https://exrx.net/WeightExercises/Gastrocnemius/LVStandingCalfRaise",
      },
      {
        name: "Calf seduto",
        sets: 3, reps: "20", equipment: ["Panatta"],
        restSeconds: 45,
        imageUrl: "https://www.panattasport.com/en/freeweight-hp/seated-calf/",
        articleUrl: "https://exrx.net/WeightExercises/Soleus/LVSeatedCalfRaise",
      },
    ],
  },
  {
    id: 4,
    day: "Giorno 4",
    title: "Spalle + Core",
    muscles: ["Spalle", "Core", "Trapezi"],
    color: "from-green-400/20 to-emerald-700/10",
    exercises: [
      {
        name: "Military press manubri",
        sets: 4, reps: "8", equipment: ["Manubri"],
        restSeconds: 120,
        imageUrl: "https://exrx.net/WeightExercises/DeltoidAnterior/DBShoulderPress",
        articleUrl: "https://exrx.net/WeightExercises/DeltoidAnterior/DBShoulderPress",
      },
      {
        name: "Alzate laterali",
        sets: 4, reps: "12", equipment: ["Diamond"],
        restSeconds: 60,
        imageUrl: "https://www.diamondfitness.it/prodotto/alzate-laterali/",
        articleUrl: "https://exrx.net/WeightExercises/DeltoidLateral/CBLateralRaise",
      },
      {
        name: "Alzate frontali manubri",
        sets: 3, reps: "12", equipment: ["Manubri"],
        restSeconds: 60,
        imageUrl: "https://exrx.net/WeightExercises/DeltoidAnterior/DBFrontRaise",
        articleUrl: "https://exrx.net/WeightExercises/DeltoidAnterior/DBFrontRaise",
      },
      {
        name: "Face pull",
        sets: 3, reps: "15", equipment: ["Diamond"],
        restSeconds: 60,
        imageUrl: "https://www.diamondfitness.it/prodotto/crossover/",
        articleUrl: "https://exrx.net/WeightExercises/DeltoidPosterior/CBStandingRearDeltRowRope",
      },
      {
        name: "Shrug manubri",
        sets: 3, reps: "12", equipment: ["Manubri"],
        restSeconds: 60,
        imageUrl: "https://exrx.net/WeightExercises/TrapeziusUpper/DBShrug",
        articleUrl: "https://exrx.net/WeightExercises/TrapeziusUpper/DBShrug",
      },
      {
        name: "Crunch machine",
        sets: 3, reps: "15", equipment: ["Panatta"],
        restSeconds: 60,
        imageUrl: "https://www.panattasport.com/en/fit-evo/abdominal-crunch/",
        articleUrl: "https://exrx.net/WeightExercises/RectusAbdominis/LVSeatedCrunch",
      },
      {
        name: "Plank",
        sets: 3, reps: "45 sec", equipment: ["Corpo libero"],
        restSeconds: 60,
        imageUrl: "https://exrx.net/WeightExercises/RectusAbdominis/BWFrontPlank",
        articleUrl: "https://exrx.net/WeightExercises/RectusAbdominis/BWFrontPlank",
      },
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
      {
        name: "Panca piana manubri",
        sets: 3, reps: "10", equipment: ["Manubri"],
        restSeconds: 90,
        imageUrl: "https://exrx.net/WeightExercises/PectoralSternal/DBBenchPress",
        articleUrl: "https://exrx.net/WeightExercises/PectoralSternal/DBBenchPress",
      },
      {
        name: "Trazioni presa stretta",
        sets: 3, reps: "8", equipment: ["Corpo libero"],
        restSeconds: 90,
        imageUrl: "https://exrx.net/WeightExercises/LatissimusDorsi/BWUnderhandChinup",
        articleUrl: "https://exrx.net/WeightExercises/LatissimusDorsi/BWUnderhandChinup",
      },
      {
        name: "Shoulder press machine",
        sets: 3, reps: "10", equipment: ["Panatta"],
        restSeconds: 90,
        imageUrl: "https://www.panattasport.com/en/freeweight-one/deltoid-press/",
        articleUrl: "https://exrx.net/WeightExercises/DeltoidAnterior/LVShoulderPress",
      },
      {
        name: "Curl martello",
        sets: 3, reps: "12", equipment: ["Manubri"],
        restSeconds: 60,
        imageUrl: "https://exrx.net/WeightExercises/Brachioradialis/DBHammerCurl",
        articleUrl: "https://exrx.net/WeightExercises/Brachioradialis/DBHammerCurl",
      },
      {
        name: "Tricipiti kickback",
        sets: 3, reps: "12", equipment: ["Manubri"],
        restSeconds: 60,
        imageUrl: "https://exrx.net/WeightExercises/Triceps/DBKickback",
        articleUrl: "https://exrx.net/WeightExercises/Triceps/DBKickback",
      },
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
