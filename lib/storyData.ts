export type SceneChoice = {
  text: string;
  nextId: string;
};

export type Stat = {
  value: string;
  label: string;
  source: string;
};

export type NewsFlash = {
  headline: string;
  dateline: string;
  stats: { value: string; label: string }[];
  body: string;
  source: string;
};

export type Scene = {
  id: string;
  year: string;
  title: string;
  imageUrl: string;
  narrative: string;
  choices: SceneChoice[];
  ending?: "positive" | "neutral" | "negative";
  stat?: Stat;
  newsFlash?: NewsFlash;
};

export type Gender = "male" | "female";

export function pronoun(gender: Gender, form: "subject" | "object" | "possessive"): string {
  const table = {
    male: { subject: "he", object: "him", possessive: "his" },
    female: { subject: "she", object: "her", possessive: "her" },
  };
  return table[gender][form];
}

export const START_SCENE_ID = "start";

export const scenes: Record<string, Scene> = {
start: {
  id: "start",
  year: "2025",
  title: "The Summons",
  imageUrl: "/images/scene-summit-hall.jpg",
  narrative:
    "You've spent years standing outside the halls of power, demanding they listen. Today, for the first time, they've invited you in. A coalition of the world's most powerful finance ministers, energy executives, and negotiators has offered you a seat at the table — a chance to shape the next 25 years of climate policy. Your choices here will echo into 2050.",
  choices: [{ text: "Enter the negotiation room", nextId: "singapore_dilemma" }],
},

singapore_dilemma: {
  id: "singapore_dilemma",
  year: "2026",
  title: "A Forest in the City",
  imageUrl: "/images/scene-maju-forest.jpg",
  narrative:
    "Before the big global questions, a delegate hands you a local one. In land-scarce Singapore, the Housing Board has proposed clearing 15 of Maju Forest's 23 hectares in Clementi to build public housing, keeping the rest as a wildlife refuge. The forest is home to critically endangered species, including the Sunda pangolin and the straw-headed bulbul — but thousands of families are waiting for affordable homes in a nation with almost no undeveloped land left. Petitioners want you to weigh in.",
  stat: {
    value: "15 of 23 ha",
    label: "Portion of Maju Forest, home to over 280 plant and 110 animal species, proposed for clearing for public housing in Clementi, Singapore",
    source: "Singapore Housing & Development Board (HDB), announcement of July 10, 2026",
  },
  choices: [
    { text: "Back the petitioners — push HDB to explore every alternative site first", nextId: "singapore_preserve" },
    { text: "Support the housing plan — homes for families come first", nextId: "singapore_develop" },
    { text: "Propose a compromise — smaller housing footprint, larger refuge", nextId: "singapore_compromise" },
  ],
},

singapore_preserve: {
  id: "singapore_preserve",
  year: "2026",
  title: "Standing With the Forest",
  imageUrl: "/images/scene-forest-protest.jpg",
  narrative:
    "Your intervention adds international weight to a local fight. Nearly 25,000 residents had already signed a petition to save the forest. Housing advocates warn the delay could push back badly-needed public flats for years in a city where Build-To-Order launches are already heavily oversubscribed. It's a preview of the tension you'll face at every scale: whose today gets sacrificed for whose tomorrow?",
  choices: [{ text: "Enter the negotiation room", nextId: "meeting1" }],
},
singapore_develop: {
  id: "singapore_develop",
  year: "2026",
  title: "Homes First",
  imageUrl: "/images/scene-housing-construction.jpg",
  narrative:
    "You back the housing plan. Families move up the waitlist. But conservationists note that mature secondary forests like Maju — which absorb carbon, cool neighborhoods, and buffer storm runoff — take decades to regenerate, if they ever fully do. The trade-off you just endorsed is one cities worldwide will keep facing as populations grow and green space shrinks.",
  choices: [{ text: "Enter the negotiation room", nextId: "meeting1" }],
},
singapore_compromise: {
  id: "singapore_compromise",
  year: "2026",
  title: "The Narrow Middle",
  imageUrl: "/images/scene-forest-edge.jpg",
  narrative:
    "You push for a redesign — a smaller housing footprint, a larger and better-connected wildlife refuge that keeps the freshwater stream and old railway corridor intact. It satisfies no one completely. Planners grumble about lost density; conservationists warn a narrower refuge still fragments habitat. But it's a template for the harder negotiations ahead: progress measured in compromises, not clean victories.",
  choices: [{ text: "Enter the negotiation room", nextId: "meeting1" }],
},
  
  meeting1: {
    id: "meeting1",
    year: "2025",
    title: "The Opening Move",
    imageUrl: "/images/scene-negotiation.jpg",
    narrative:
      "The finance ministers want growth. The energy executives want certainty. You have five minutes to set the tone for everything that follows. What do you push for first?",
    stat: {
      value: "$7 trillion",
      label: "Global fossil fuel subsidies in 2022 — over 7% of world GDP, more than governments spent on education worldwide",
      source: "IMF, Fossil Fuel Subsidies Data: 2023 Update",
    },
    choices: [
      { text: "Demand an immediate end to fossil fuel subsidies", nextId: "path_bold" },
      { text: "Propose a gradual, incentive-based transition", nextId: "path_moderate" },
      { text: "Prioritize economic growth, delay climate action", nextId: "path_delay" },
    ],
  },

  // BOLD PATH
  path_bold: {
    id: "path_bold",
    year: "2030",
    title: "Backlash and Breakthrough",
    imageUrl: "/images/scene-protest.jpg",
    narrative:
      "Your demand triggered fierce resistance from oil-producing nations, but it also galvanized a coalition of island states and youth movements worldwide. Subsidies are being phased out faster than any prior agreement. Markets are volatile. The public is divided.",
    stat: {
      value: "43%",
      label: "Potential cut to global CO2 emissions by 2030 if fossil fuel subsidies were eliminated and replaced with corrective carbon pricing",
      source: "IMF, Fossil Fuel Subsidies Data: 2023 Update",
    },
    choices: [
      { text: "Push for a global carbon tax to stabilize the transition", nextId: "bold_carbon_tax" },
      { text: "Ease off — let markets adjust naturally", nextId: "bold_ease_off" },
    ],
  },
  bold_carbon_tax: {
    id: "bold_carbon_tax",
    year: "2040",
    title: "The Great Rewiring",
    imageUrl: "/images/scene-solar-farm.jpg",
    narrative:
      "The carbon tax reshaped global industry. Clean energy investment — already outpacing fossil fuels two-to-one by the mid-2020s — accelerated further. Millions of jobs shifted from extraction to engineering. It wasn't painless — entire regions had to be retrained and rebuilt — but the trajectory changed.",
    stat: {
      value: "2-to-1",
      label: "Ratio of global clean energy investment to fossil fuel investment in 2024 ($2 trillion vs. ~$1 trillion) — up from an even 1-to-1 split just six years earlier",
      source: "International Energy Agency, World Energy Investment 2024",
    },
    choices: [{ text: "Continue to 2050", nextId: "ending_thriving" }],
  },
  bold_ease_off: {
    id: "bold_ease_off",
    year: "2040",
    title: "Momentum Lost",
    imageUrl: "/images/scene-empty-factory.jpg",
    narrative:
      "Without sustained pressure, old interests crept back in. Subsidies quietly returned in new forms. The early progress stalled, and emissions began climbing again by the mid-2030s.",
    choices: [{ text: "Continue to 2050", nextId: "ending_partial" }],
  },

  // MODERATE PATH
  path_moderate: {
    id: "path_moderate",
    year: "2030",
    title: "The Slow Turn",
    imageUrl: "/images/scene-city-transition.jpg",
    narrative:
      "Your incentive-based approach won broad support — tax credits, green bonds, phased targets. Progress is real but uneven. Wealthy nations decarbonize steadily; developing economies struggle to access the capital they were promised.",
    stat: {
      value: "15%",
      label: "Share of global clean energy investment reaching emerging and developing economies — home to two-thirds of the world's population",
      source: "International Energy Agency, World Energy Investment 2024",
    },
    choices: [
      { text: "Fight to redirect climate finance to the Global South", nextId: "moderate_finance" },
      { text: "Focus resources on wealthy nations first", nextId: "moderate_focus_rich" },
    ],
  },
  moderate_finance: {
    id: "moderate_finance",
    year: "2040",
    title: "Closing the Gap",
    imageUrl: "/images/scene-solar-village.jpg",
    narrative:
      "Billions in climate finance finally reached the communities most affected by a crisis they didn't cause. Solar microgrids power villages that never had reliable electricity. Global emissions curves begin to bend.",
    stat: {
      value: "$1.3 trillion",
      label: "Annual climate finance target for developing nations by 2035, agreed at COP29 — though analysts and Global South delegates called the deal's core $300bn commitment 'a joke' compared to actual need",
      source: "UNFCCC, COP29 Outcomes, Nov 2024",
    },
    choices: [{ text: "Continue to 2050", nextId: "ending_positive_moderate" }],
  },
  moderate_focus_rich: {
    id: "moderate_focus_rich",
    year: "2040",
    title: "A Divided World",
    imageUrl: "/images/scene-flooded-city.jpg",
    narrative:
      "Wealthy nations hit their targets. But without support, industrializing economies leaned harder on coal to keep pace. Global emissions plateaued instead of falling. Coastal cities in the Global South face worsening floods with no funds to adapt.",
    choices: [{ text: "Continue to 2050", nextId: "ending_partial" }],
  },

  // DELAY PATH
  path_delay: {
    id: "path_delay",
    year: "2030",
    title: "Borrowed Time",
    imageUrl: "/images/scene-oil-rig.jpg",
    narrative:
      "Growth targets were met. Fossil fuel production continued largely unchecked. Records for global temperature are broken almost every year now. Extreme weather events are no longer rare exceptions — they're the new normal.",
    stat: {
      value: "~5-6 years",
      label: "Time remaining, at current global emission rates, before the carbon budget for a 50% chance of staying under 1.5°C of warming is exhausted",
      source: "Nature Climate Change, 'Assessing the size and uncertainty of remaining carbon budgets,' 2023",
    },
    choices: [
      { text: "Finally push for emergency climate action", nextId: "delay_emergency" },
      { text: "Continue prioritizing short-term economic stability", nextId: "delay_continue" },
    ],
  },
  delay_emergency: {
    id: "delay_emergency",
    year: "2040",
    title: "Too Little, Too Late?",
    imageUrl: "/images/scene-storm-city.jpg",
    narrative:
      "A decade lost cannot be fully regained. Emergency measures slow the damage, but the world is now adapting to a hotter, harsher climate rather than preventing it. Coastal defenses and heat shelters become as important as clean energy.",
    choices: [{ text: "Continue to 2050", nextId: "ending_partial" }],
  },
  delay_continue: {
    id: "delay_continue",
    year: "2040",
    title: "The Reckoning",
    imageUrl: "/images/scene-drought.jpg",
    narrative:
      "The warnings you once shouted from outside the halls of power went unheeded from within them too. Droughts, floods, and mass displacement accelerate. The systems built for a stable climate are buckling under one that no longer exists.",
    choices: [{ text: "Continue to 2050", nextId: "ending_catastrophe" }],
  },

  // ENDINGS
  ending_thriving: {
    id: "ending_thriving",
    year: "2050",
    title: "A World Rewired",
    imageUrl: "/images/ending-green-city.jpg",
    narrative:
      "2050. Cities run on clean power. Forests once cleared for grazing are regrowing. It wasn't easy, and it wasn't fast enough for everyone who suffered along the way — but the world you helped build is one where your grandchildren can imagine a future.",
    choices: [],
    ending: "positive",
  },
  ending_positive_moderate: {
    id: "ending_positive_moderate",
    year: "2050",
    title: "A Fairer Transition",
    imageUrl: "/images/ending-solar-world.jpg",
    narrative:
      "2050. The transition took longer than the boldest activists wanted, but it reached further than the cautious ever expected. Clean energy powers both the wealthiest capitals and the villages that were once left behind. Progress, hard-won and shared.",
    choices: [],
    ending: "positive",
  },
  ending_partial: {
    id: "ending_partial",
    year: "2050",
    title: "An Uneasy Balance",
    imageUrl: "/images/ending-mixed-world.jpg",
    narrative:
      "2050. The worst outcomes were avoided, but the best ones slipped away too. The world adapted rather than transformed. Some regions thrive; others remain locked in cycles of disaster and recovery. The story isn't over.",
    choices: [],
    ending: "neutral",
  },
  ending_catastrophe: {
    id: "ending_catastrophe",
    year: "2050",
    title: "The World We Warned About",
    imageUrl: "/images/ending-crisis-world.jpg",
    narrative:
      "2050. The warnings became reality. Displacement, resource conflict, and extreme weather define daily life for hundreds of millions. It didn't have to be this way — and somewhere, in rooms like the one you once sat in, it still isn't too late to change course.",
    choices: [],
    ending: "negative",
  },
};
