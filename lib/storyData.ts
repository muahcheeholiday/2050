export type SceneChoice = {
  text: string;
  nextId: string;
};

export type Scene = {
  id: string;
  year: string;
  title: string;
  imageUrl: string;
  narrative: string;
  choices: SceneChoice[];
  ending?: "positive" | "neutral" | "negative";
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
      "You've spent years standing outside the halls of power, demanding they listen. Today, for the first time, they've invited you in. The World Economic Forum has offered you a seat at the table — a chance to advise a coalition of the planet's most powerful leaders and financiers on the next 25 years of climate policy. Your choices here will echo into 2050.",
    choices: [
      { text: "Enter the negotiation room", nextId: "meeting1" },
    ],
  },

  meeting1: {
    id: "meeting1",
    year: "2025",
    title: "The Opening Move",
    imageUrl: "/images/scene-negotiation.jpg",
    narrative:
      "The finance ministers want growth. The energy executives want certainty. You have five minutes to set the tone for everything that follows. What do you push for first?",
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
      "The carbon tax reshaped global industry. Renewable energy investment tripled. Millions of jobs shifted from extraction to engineering. It wasn't painless — entire regions had to be retrained and rebuilt — but the trajectory changed.",
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
