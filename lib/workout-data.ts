export interface Exercise {
  name: string;
  machine: string;
  sets: number;
  reps: string;
  restSeconds: number;
  note: string;
  imageUrl: string;
  articleUrl: string;
}

export interface WorkoutDay {
  id: number;
  day: string;
  fullDay: string;
  label: string;
  muscles: string;
  color: string;
  badge?: string;
  optional?: boolean;
  exercises: Exercise[];
}

export const noteGenerali = [
  "🔄 Sei in rientro dopo 2 anni: le prime 3–4 settimane carica al 60–70% del massimo percepito. Il primo obiettivo è riprendere i pattern motori.",
  "📈 Progressione: aggiungi carico solo quando completi tutte le serie con tecnica pulita. Mai fretta.",
  "💤 Riposo: 7–9 ore di sonno. È lì che cresci.",
  "🥩 Alimentazione: 1.8–2.2g di proteine per kg corporeo al giorno. Crea un leggero surplus calorico (+200–400 kcal).",
  "💧 Idratazione: almeno 2–3L di acqua al giorno.",
  "⚠️ Se senti dolore articolare (non DOMS), fermati e valuta con un professionista.",
];

export const machineColors: Record<string, string> = {
  Panatta: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  "Cavi Panatta": "bg-teal-500/15 text-teal-400 border-teal-500/30",
  "Diamond – Andrea Presti": "bg-violet-500/15 text-violet-400 border-violet-500/30",
  Manubri: "bg-blue-500/15 text-blue-400 border-blue-500/30",
  "Panca + Manubri": "bg-orange-500/15 text-orange-400 border-orange-500/30",
  "Corpo libero": "bg-slate-500/15 text-slate-400 border-slate-500/30",
};

export const workoutData: WorkoutDay[] = [
  {
    id: 1,
    day: "LUN",
    fullDay: "Lunedì",
    label: "GIORNO 1",
    muscles: "PETTO + TRICIPITI",
    color: "#E8474C",
    exercises: [
      {
        name: "Chest Press Inclinata",
        machine: "Panatta",
        sets: 4, reps: "10–12", restSeconds: 90,
        note: "Leve indipendenti, focus sulla parte alta del petto",
        imageUrl: "https://www.panattasport.com/en/sec/inclined-chest-press-3/",
        articleUrl: "https://exrx.net/WeightExercises/PectoralClavicular/LVInclineChestPress",
      },
      {
        name: "Chest Press Verticale",
        machine: "Panatta",
        sets: 4, reps: "10–12", restSeconds: 90,
        note: "Traiettoria convergente, massima contrazione finale",
        imageUrl: "https://www.panattasport.com/en/sec/vertical-chest-convergent/",
        articleUrl: "https://exrx.net/WeightExercises/PectoralSternal/LVChestPressS",
      },
      {
        name: "Pectoral / Butterfly",
        machine: "Panatta",
        sets: 3, reps: "12–15", restSeconds: 60,
        note: "Movimento lento e controllato, stira bene in apertura",
        imageUrl: "https://www.panattasport.com/en/sec/pectoral-machine-3/",
        articleUrl: "https://exrx.net/WeightExercises/PectoralSternal/LVPecFly",
      },
      {
        name: "Croci ai Cavi Bassi",
        machine: "Cavi Panatta",
        sets: 3, reps: "15", restSeconds: 60,
        note: "Incroca le mani in cima per massimizzare il picco",
        imageUrl: "https://www.panattasport.com/en/fit-evo/functional-trainer/",
        articleUrl: "https://exrx.net/WeightExercises/PectoralSternal/CBStandingFly",
      },
      {
        name: "Tricipiti Pushdown",
        machine: "Cavi Panatta",
        sets: 4, reps: "12–15", restSeconds: 60,
        note: "Mantieni i gomiti fermi, estensione completa",
        imageUrl: "https://www.panattasport.com/en/fit-evo/functional-trainer/",
        articleUrl: "https://exrx.net/WeightExercises/Triceps/CBPushdown",
      },
      {
        name: "French Press Manubri",
        machine: "Panca + Manubri",
        sets: 3, reps: "12", restSeconds: 60,
        note: "Ottimo per la testa lunga del tricipite",
        imageUrl: "https://exrx.net/WeightExercises/Triceps/DBLyingTriExt",
        articleUrl: "https://exrx.net/WeightExercises/Triceps/DBLyingTriExt",
      },
    ],
  },
  {
    id: 2,
    day: "MER",
    fullDay: "Mercoledì",
    label: "GIORNO 2",
    muscles: "SCHIENA + BICIPITI",
    color: "#00C2FF",
    badge: "OGGI",
    exercises: [
      {
        name: "Lat Machine Presa Larga",
        machine: "Panatta",
        sets: 4, reps: "10–12", restSeconds: 90,
        note: "Tira verso il petto, gomiti verso i fianchi",
        imageUrl: "https://www.panattasport.com/en/fit-evo/lat-pulldown-convergent/",
        articleUrl: "https://exrx.net/WeightExercises/LatissimusDorsi/CBFrontPulldown",
      },
      {
        name: "Chopper Row",
        machine: "Diamond – Andrea Presti",
        sets: 4, reps: "10–12", restSeconds: 90,
        note: "Chest supported row con maniglie regolabili: massima attivazione dorsale",
        imageUrl: "https://www.instagram.com/prestidiamond/reel/DVg7PG0DGJO/",
        articleUrl: "https://exrx.net/WeightExercises/BackGeneral/LVChestSupportedRow",
      },
      {
        name: "Pulley Basso (Row Seduto)",
        machine: "Panatta",
        sets: 4, reps: "10–12", restSeconds: 90,
        note: "Tieni il busto fermo, tira con i gomiti",
        imageUrl: "https://www.panattasport.com/en/fit-evo/low-pulley/",
        articleUrl: "https://exrx.net/WeightExercises/BackGeneral/CBSeatedRow",
      },
      {
        name: "Lat Machine Presa Stretta",
        machine: "Panatta",
        sets: 3, reps: "12", restSeconds: 60,
        note: "Variante per enfatizzare il gran dorsale inferiore",
        imageUrl: "https://www.panattasport.com/en/fit-evo/lat-pulldown-convergent/",
        articleUrl: "https://exrx.net/WeightExercises/LatissimusDorsi/CBCloseGripPulldown",
      },
      {
        name: "Bicipiti Curl Machine",
        machine: "Panatta",
        sets: 4, reps: "12", restSeconds: 60,
        note: "Seduta regolabile gas-assistita, poggiabraccia ampio",
        imageUrl: "https://www.panattasport.com/en/sec/curling-machine-4",
        articleUrl: "https://exrx.net/WeightExercises/Biceps/LVBicepsCurl",
      },
      {
        name: "Curl Manubri Alternati",
        machine: "Manubri",
        sets: 3, reps: "10 per lato", restSeconds: 60,
        note: "Supina il polso in cima per il picco del bicipite",
        imageUrl: "https://exrx.net/WeightExercises/Biceps/DBCurl",
        articleUrl: "https://exrx.net/WeightExercises/Biceps/DBCurl",
      },
    ],
  },
  {
    id: 3,
    day: "GIO",
    fullDay: "Giovedì",
    label: "GIORNO 3",
    muscles: "GAMBE + POLPACCI",
    color: "#00E676",
    exercises: [
      {
        name: "Leg Press Orizzontale",
        machine: "Panatta",
        sets: 4, reps: "12–15", restSeconds: 120,
        note: "Piedi medi, scendi fino a 90°, non bloccare le ginocchia",
        imageUrl: "https://www.panattasport.com/en/sec/horizontal-leg-press-3/",
        articleUrl: "https://exrx.net/WeightExercises/Quadriceps/LVSeatedLegPress",
      },
      {
        name: "Leg Extension",
        machine: "Panatta",
        sets: 4, reps: "15", restSeconds: 60,
        note: "Isola il quadricipite, mantieni 1s in alto",
        imageUrl: "https://www.panattasport.com/en/fit-evo/leg-extension/",
        articleUrl: "https://exrx.net/WeightExercises/Quadriceps/LVLegExtension",
      },
      {
        name: "Leg Curl Disteso",
        machine: "Panatta",
        sets: 4, reps: "12", restSeconds: 60,
        note: "Contrai bene i femorali, non usare lo slancio",
        imageUrl: "https://www.panattasport.com/en/fit-evo/lying-leg-curl/",
        articleUrl: "https://exrx.net/WeightExercises/Hamstrings/LVLyingLegCurl",
      },
      {
        name: "Hack Squat / Squat Machine",
        machine: "Panatta",
        sets: 3, reps: "10–12", restSeconds: 120,
        note: "Ottima alternativa allo squat libero per rientro",
        imageUrl: "https://www.panattasport.com/en/free-weight-special/super-hack-squat/",
        articleUrl: "https://exrx.net/WeightExercises/Quadriceps/LVHackSquat",
      },
      {
        name: "Adduttori Machine",
        machine: "Panatta",
        sets: 3, reps: "15", restSeconds: 60,
        note: "Chiudi lentamente, resistenza anche in apertura",
        imageUrl: "https://www.panattasport.com/en/sec/adductor-machine-3/",
        articleUrl: "https://exrx.net/WeightExercises/HipAdductors/LVHipAdduction",
      },
      {
        name: "Seated Calf Raise",
        machine: "Panatta",
        sets: 4, reps: "20", restSeconds: 45,
        note: "Usa tutto il ROM, abbassa bene il tallone",
        imageUrl: "https://www.panattasport.com/en/freeweight-hp/seated-calf/",
        articleUrl: "https://exrx.net/WeightExercises/Soleus/LVSeatedCalfRaise",
      },
    ],
  },
  {
    id: 4,
    day: "SAB",
    fullDay: "Sabato",
    label: "GIORNO 4",
    muscles: "SPALLE + CORE",
    color: "#FF9800",
    exercises: [
      {
        name: "Shoulder Press Machine",
        machine: "Panatta",
        sets: 4, reps: "10–12", restSeconds: 90,
        note: "Non bloccare in alto, mantieni tensione costante",
        imageUrl: "https://www.panattasport.com/en/sec/shoulder-press/",
        articleUrl: "https://exrx.net/WeightExercises/DeltoidAnterior/LVShoulderPress",
      },
      {
        name: "Delts Machine (Laterali)",
        machine: "Panatta",
        sets: 4, reps: "15", restSeconds: 60,
        note: "Gomiti leggermente piegati, alza fino all'altezza delle spalle",
        imageUrl: "https://www.panattasport.com/en/fit-evo/lateral-deltoids/",
        articleUrl: "https://exrx.net/WeightExercises/DeltoidLateral/LVLateralRaise",
      },
      {
        name: "Rear Delt / Back Delts",
        machine: "Panatta",
        sets: 4, reps: "15", restSeconds: 60,
        note: "Fondamentale per equilibrio e postura",
        imageUrl: "https://www.panattasport.com/en/free-weight-special/back-deltoids/",
        articleUrl: "https://exrx.net/WeightExercises/DeltoidPosterior/LVRearDeltFly",
      },
      {
        name: "Shrugs Manubri",
        machine: "Manubri",
        sets: 4, reps: "15", restSeconds: 60,
        note: "Carica alta, trattiena 1s in cima",
        imageUrl: "https://exrx.net/WeightExercises/TrapeziusUpper/DBShrug",
        articleUrl: "https://exrx.net/WeightExercises/TrapeziusUpper/DBShrug",
      },
      {
        name: "Plank",
        machine: "Corpo libero",
        sets: 3, reps: "60s", restSeconds: 45,
        note: "Core stabile, respira, non cedere sui fianchi",
        imageUrl: "https://exrx.net/WeightExercises/RectusAbdominis/BWFrontPlank",
        articleUrl: "https://exrx.net/WeightExercises/RectusAbdominis/BWFrontPlank",
      },
      {
        name: "Total Abdominal",
        machine: "Panatta",
        sets: 3, reps: "20", restSeconds: 45,
        note: "Lavora sull'addome completo",
        imageUrl: "https://www.panattasport.com/en/fit-evo/total-abdominal/",
        articleUrl: "https://exrx.net/WeightExercises/RectusAbdominis/LVSeatedCrunch",
      },
    ],
  },
  {
    id: 5,
    day: "DOM",
    fullDay: "Domenica",
    label: "GIORNO 5 ★",
    muscles: "UPPER BODY (opzionale)",
    color: "#B388FF",
    badge: "OPZ.",
    optional: true,
    exercises: [
      {
        name: "Chest Press Orizzontale",
        machine: "Panatta",
        sets: 3, reps: "12", restSeconds: 90,
        note: "Volume aggiuntivo sul petto",
        imageUrl: "https://www.panattasport.com/en/freeweight-hp/horizontal-bench-press/",
        articleUrl: "https://exrx.net/WeightExercises/PectoralSternal/LVChestPressS",
      },
      {
        name: "Pectoral / Butterfly",
        machine: "Panatta",
        sets: 3, reps: "15", restSeconds: 60,
        note: "Focus sulla contrazione finale",
        imageUrl: "https://www.panattasport.com/en/sec/pectoral-machine-3/",
        articleUrl: "https://exrx.net/WeightExercises/PectoralSternal/LVPecFly",
      },
      {
        name: "Lat Machine Presa Media",
        machine: "Panatta",
        sets: 3, reps: "12", restSeconds: 90,
        note: "Tira verso il petto con gomiti larghi",
        imageUrl: "https://www.panattasport.com/en/fit-evo/lat-pulldown-convergent/",
        articleUrl: "https://exrx.net/WeightExercises/LatissimusDorsi/CBFrontPulldown",
      },
      {
        name: "Chopper Row leggero",
        machine: "Diamond – Andrea Presti",
        sets: 3, reps: "15", restSeconds: 60,
        note: "Peso più leggero, focus sulla qualità",
        imageUrl: "https://www.instagram.com/prestidiamond/reel/DVg7PG0DGJO/",
        articleUrl: "https://exrx.net/WeightExercises/BackGeneral/LVChestSupportedRow",
      },
      {
        name: "Curl Cavi",
        machine: "Cavi Panatta",
        sets: 3, reps: "15", restSeconds: 60,
        note: "Tensione costante per tutto il ROM",
        imageUrl: "https://www.panattasport.com/en/fit-evo/functional-trainer/",
        articleUrl: "https://exrx.net/WeightExercises/Biceps/CBCurl",
      },
      {
        name: "Tricipiti Rope Pushdown",
        machine: "Cavi Panatta",
        sets: 3, reps: "15", restSeconds: 60,
        note: "Apri le mani in basso per massima contrazione",
        imageUrl: "https://www.panattasport.com/en/fit-evo/functional-trainer/",
        articleUrl: "https://exrx.net/WeightExercises/Triceps/CBPushdownV",
      },
    ],
  },
];
