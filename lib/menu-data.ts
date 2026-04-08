export interface Pasto {
  tipo: string;
  emoji: string;
  titolo: string;
  note: string;
  tags: string[];
}

export interface Giorno {
  tag: string;
  nome: string;
  pasti: Pasto[];
}

export const macroTargets = {
  kcal: 3100,
  proteine: 165,
  carboidrati: 390,
  grassi: 85,
};

export const giorni: Giorno[] = [
  {
    tag: "Lun", nome: "Lunedì",
    pasti: [
      { tipo: "Colazione", emoji: "🌅", titolo: "Avena (80g) + latte intero + banana + burro d'arachidi (25g)", note: "~680 kcal · P 28g · C 95g · G 20g", tags: ["rapido"] },
      { tipo: "Spuntino", emoji: "🥛", titolo: "Yogurt greco 200g + 25g granola + miele", note: "~310 kcal · P 22g · C 38g · G 6g", tags: [] },
      { tipo: "Pranzo", emoji: "🍚", titolo: "Riso basmati (150g secco) + 220g petto di pollo al forno + zucchine grigliate", note: "~810 kcal · P 60g · C 115g · G 8g — usa il pollo del batch domenicale", tags: ["batch", "forno"] },
      { tipo: "Pre-workout", emoji: "⚡", titolo: "2 fette pane integrale + 80g tonno al naturale + pomodoro", note: "~340 kcal · P 30g · C 40g · G 4g", tags: ["rapido"] },
      { tipo: "Cena", emoji: "🌙", titolo: "200g salmone in padella + 280g patate al forno + insalata mista", note: "~870 kcal · P 45g · C 72g · G 32g", tags: ["forno"] },
    ],
  },
  {
    tag: "Mar", nome: "Martedì",
    pasti: [
      { tipo: "Colazione", emoji: "🌅", titolo: "3 uova strapazzate + 2 fette pane integrale + pomodoro fresco", note: "~620 kcal · P 32g · C 56g · G 22g", tags: ["rapido"] },
      { tipo: "Spuntino", emoji: "🥜", titolo: "30g mandorle + 1 banana", note: "~290 kcal · P 8g · C 36g · G 16g", tags: ["rapido"] },
      { tipo: "Pranzo", emoji: "🍝", titolo: "150g pasta integrale + 100g tonno + pomodorini + olio EVO + capperi", note: "~820 kcal · P 52g · C 115g · G 14g", tags: ["rapido"] },
      { tipo: "Pre-workout", emoji: "⚡", titolo: "Yogurt greco 200g + 1 banana + 15g miele", note: "~330 kcal · P 22g · C 55g · G 2g", tags: ["rapido"] },
      { tipo: "Cena", emoji: "🌙", titolo: "200g merluzzo al forno + 100g riso + broccoli al vapore", note: "~870 kcal · P 58g · C 80g · G 20g", tags: ["forno"] },
    ],
  },
  {
    tag: "Mer", nome: "Mercoledì",
    pasti: [
      { tipo: "Colazione", emoji: "🌅", titolo: "Porridge (80g avena) + latte + frutti di bosco + 20g noci", note: "~650 kcal · P 22g · C 88g · G 20g", tags: ["rapido"] },
      { tipo: "Spuntino", emoji: "🥛", titolo: "200g ricotta + miele + 2 gallette di riso", note: "~340 kcal · P 24g · C 32g · G 10g", tags: ["rapido"] },
      { tipo: "Pranzo", emoji: "🥗", titolo: "Bowl: riso (150g secco) + pollo batch + avocado + pomodorini + limone", note: "~850 kcal · P 58g · C 100g · G 22g — assemblaggio 5 min", tags: ["batch", "rapido"] },
      { tipo: "Pre-workout", emoji: "⚡", titolo: "2 uova sode + 2 fette pane integrale + philadelphia light", note: "~340 kcal · P 22g · C 38g · G 10g", tags: ["rapido"] },
      { tipo: "Cena", emoji: "🌙", titolo: "Orata/branzino al cartoccio (250g) + verdure + fetta pane", note: "~820 kcal · P 52g · C 58g · G 22g", tags: ["forno"] },
    ],
  },
  {
    tag: "Gio", nome: "Giovedì",
    pasti: [
      { tipo: "Colazione", emoji: "🌅", titolo: "4 uova strapazzate + 2 fette pane integrale + 2 fette prosciutto cotto", note: "~700 kcal · P 46g · C 52g · G 26g", tags: ["rapido"] },
      { tipo: "Spuntino", emoji: "🥣", titolo: "Yogurt greco 200g + 25g granola", note: "~280 kcal · P 20g · C 30g · G 6g", tags: ["rapido"] },
      { tipo: "Pranzo", emoji: "🌯", titolo: "Wrap integrale grande + pollo batch + lattuga + 30g hummus + senape", note: "~790 kcal · P 55g · C 88g · G 16g — portabile, 5 min", tags: ["batch", "rapido"] },
      { tipo: "Pre-workout", emoji: "⚡", titolo: "Riso soffiato (30g) + cioccolato fondente (20g) + 1 banana", note: "~330 kcal · P 5g · C 65g · G 8g", tags: ["rapido"] },
      { tipo: "Cena", emoji: "🌙", titolo: "150g bistecca di manzo + insalata verde + pane di semola (80g)", note: "~830 kcal · P 46g · C 72g · G 30g", tags: [] },
    ],
  },
  {
    tag: "Ven", nome: "Venerdì",
    pasti: [
      { tipo: "Colazione", emoji: "🌅", titolo: "Porridge (80g avena) + banana + 25g burro d'arachidi", note: "~680 kcal · P 22g · C 92g · G 20g", tags: ["rapido"] },
      { tipo: "Spuntino", emoji: "🥚", titolo: "2 uova sode + 1 mela", note: "~240 kcal · P 14g · C 28g · G 10g", tags: ["rapido"] },
      { tipo: "Pranzo", emoji: "🍤", titolo: "Riso basmati (150g secco) + 200g gamberetti saltati + zucchine + aglio", note: "~800 kcal · P 58g · C 108g · G 12g", tags: ["rapido"] },
      { tipo: "Pre-workout", emoji: "⚡", titolo: "Yogurt greco 200g + miele + 20g granola", note: "~310 kcal · P 22g · C 40g · G 4g", tags: ["rapido"] },
      { tipo: "Cena", emoji: "🌙", titolo: "Trota/persico al forno (220g) + fagiolini + patate piccole (200g)", note: "~860 kcal · P 52g · C 78g · G 28g", tags: ["forno"] },
    ],
  },
  {
    tag: "Sab", nome: "Sabato",
    pasti: [
      { tipo: "Colazione", emoji: "🌅", titolo: "Pancakes proteici (80g avena + 3 uova + latte) + frutti di bosco", note: "~720 kcal · P 38g · C 84g · G 20g", tags: ["forno"] },
      { tipo: "Spuntino", emoji: "🥛", titolo: "Yogurt greco 200g + granola + miele", note: "~310 kcal · P 22g · C 38g · G 6g", tags: ["rapido"] },
      { tipo: "Pranzo", emoji: "🍝", titolo: "Pasta (150g) al ragù di tacchino (150g) + parmigiano", note: "~890 kcal · P 58g · C 116g · G 18g", tags: [] },
      { tipo: "Spuntino", emoji: "🍫", titolo: "2 fette pane integrale + burro d'arachidi + banana", note: "~380 kcal · P 12g · C 56g · G 14g", tags: ["rapido"] },
      { tipo: "Cena", emoji: "🌙", titolo: "Pollo arrosto (250g) + riso (100g secco) + verdure miste al forno", note: "~800 kcal · P 62g · C 82g · G 16g", tags: ["batch", "forno"] },
    ],
  },
  {
    tag: "Dom", nome: "Domenica — BATCH DAY",
    pasti: [
      { tipo: "Colazione", emoji: "🌅", titolo: "Frittata 4 uova + verdure + pane integrale (3 fette)", note: "~680 kcal · P 36g · C 58g · G 26g", tags: [] },
      { tipo: "Spuntino", emoji: "🥛", titolo: "200g ricotta + miele + frutta di stagione", note: "~340 kcal · P 24g · C 38g · G 10g", tags: ["rapido"] },
      { tipo: "Pranzo", emoji: "🍚", titolo: "Risotto con asparagi e gamberetti (porzione generosa)", note: "~860 kcal · P 42g · C 118g · G 18g — il pranzo della domenica", tags: [] },
      { tipo: "Batch cook", emoji: "♻️", titolo: "Cuoci 8-10 petti di pollo in forno/sous vide → frigo per la settimana", note: "63°C / 2h sottovuoto oppure 180°C / 25 min in forno col cartoccio", tags: ["batch", "forno"] },
      { tipo: "Cena", emoji: "🌙", titolo: "Zuppa di lenticchie + 2 uova sode + crostini integrali + olio EVO", note: "~840 kcal · P 52g · C 98g · G 20g", tags: [] },
    ],
  },
];

export const tagConfig: Record<string, { label: string; icon: string; className: string }> = {
  batch: { label: "batch", icon: "♻", className: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30" },
  forno: { label: "forno", icon: "🔥", className: "bg-amber-500/15 text-amber-400 border-amber-500/30" },
  rapido: { label: "rapido", icon: "⚡", className: "bg-teal-500/15 text-teal-400 border-teal-500/30" },
};
