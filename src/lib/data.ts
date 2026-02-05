// Sample data for MyDailyEpic prototype

export interface Story {
  id: string;
  title: string;
  canon: boolean;
  genre: string;
  preview: string;
  words: number;
  date: string;
  theme: string;
  tags: string[];
  color: string;
}

export interface CollectiveNarrative {
  id: string;
  title: string;
  description: string;
  participants: number;
  endDate: string;
  status: "active" | "planning" | "completed";
}

export interface Archetype {
  name: string;
  description: string;
  key: string;
}

export interface JourneyStage {
  name: string;
  status: "Active" | "Emphasized";
}

export interface Genre {
  name: string;
  icon: string;
}

export interface TherapeuticPrinciple {
  name: string;
  key: string;
}

export interface ThemeDistribution {
  name: string;
  percent: number;
  color: string;
}

export interface GenreStat {
  genre: string;
  count: number;
  color: string;
}

export interface EchoStory {
  id: string;
  title: string;
  preview: string;
  genre: string;
  theme: string;
  tradition: string;
  region: string;
  resonanceCount: number;
  color: string;
}

// Hero View Data
export const genres: Genre[] = [
  { name: "Adventure", icon: "🏔️" },
  { name: "Mystery", icon: "🔍" },
  { name: "Epic", icon: "⚔️" },
  { name: "Fantasy", icon: "✨" },
];

export const stories: Story[] = [
  {
    id: "1",
    title: "The Morning Trial",
    canon: true,
    genre: "Adventure",
    preview: "When the iron beast failed to arrive, our hero discovered hidden paths...",
    words: 342,
    date: "Today",
    theme: "Resilience",
    tags: ["First Steps", "Adaptability"],
    color: "bg-rose-100",
  },
  {
    id: "2",
    title: "The Social Labyrinth",
    canon: true,
    genre: "Mystery",
    preview: "In the realm of awkward silences, our protagonist faced their greatest fear...",
    words: 298,
    date: "Yesterday",
    theme: "Courage",
    tags: ["Social Warrior", "Inner Voice"],
    color: "bg-blue-100",
  },
  {
    id: "3",
    title: "The Deadline Dragon",
    canon: true,
    genre: "Epic",
    preview: "Time itself became the enemy as our hero battled...",
    words: 275,
    date: "2 days ago",
    theme: "Determination",
    tags: ["Time Master", "Under Pressure"],
    color: "bg-amber-100",
  },
  {
    id: "4",
    title: "The Inbox Avalanche",
    canon: true,
    genre: "Adventure",
    preview: "A mountain of messages threatened to bury the hero beneath endless notifications...",
    words: 256,
    date: "3 days ago",
    theme: "Focus",
    tags: ["Digital Warrior", "Priority Master"],
    color: "bg-emerald-100",
  },
  {
    id: "5",
    title: "The Coffee Quest",
    canon: false,
    genre: "Comedy",
    preview: "In search of the sacred elixir, our weary traveler faced trials untold...",
    words: 189,
    date: "4 days ago",
    theme: "Patience",
    tags: ["Patience Grasshopper"],
    color: "bg-orange-100",
  },
  {
    id: "6",
    title: "The Meeting Maze",
    canon: false,
    genre: "Survival",
    preview: "Trapped in the endless chamber of discourse, escape seemed impossible...",
    words: 337,
    date: "5 days ago",
    theme: "Endurance",
    tags: ["Creative Problem Solver"],
    color: "bg-violet-100",
  },
];

export const achievements: string[] = [
  "First Steps",
  "Adaptability",
  "Social Warrior",
  "Inner Voice",
  "Time Master",
  "Under Pressure",
  "Creative Problem Solver",
  "Patience Grasshopper",
  "Digital Warrior",
  "Priority Master",
];

export const genreStats: GenreStat[] = [
  { genre: "Adventure", count: 3, color: "bg-violet-400" },
  { genre: "Mystery", count: 1, color: "bg-violet-400" },
  { genre: "Epic", count: 1, color: "bg-violet-400" },
  { genre: "Comedy", count: 1, color: "bg-violet-400" },
  { genre: "Survival", count: 1, color: "bg-blue-400" },
];

// Admin View Data
export const collectiveNarratives: CollectiveNarrative[] = [
  {
    id: "1",
    title: "The Winter of Resilience",
    description: "A season-long narrative focusing on inner strength during difficult times",
    participants: 1247,
    endDate: "March 20, 2024",
    status: "active",
  },
  {
    id: "2",
    title: "The Quest for Authentic Voice",
    description: "Helping users find and express their true selves",
    participants: 892,
    endDate: "February 14, 2024",
    status: "active",
  },
  {
    id: "3",
    title: "The Relationship Labyrinth",
    description: "Navigating complex interpersonal dynamics",
    participants: 634,
    endDate: "April 1, 2024",
    status: "planning",
  },
];

export const therapeuticPrinciples: TherapeuticPrinciple[] = [
  { name: "Solution-Focused Brief Therapy", key: "sfbt" },
  { name: "Cognitive Behavioral Therapy", key: "cbt" },
  { name: "Narrative Therapy", key: "narrative" },
  { name: "Positive Psychology", key: "positive" },
  { name: "Acceptance & Commitment", key: "act" },
  { name: "Mindfulness-Based", key: "mindfulness" },
];

export const archetypes: Archetype[] = [
  { name: "The Innocent", description: "Seeks happiness and harmony", key: "innocent" },
  { name: "The Explorer", description: "Seeks freedom and authenticity", key: "explorer" },
  { name: "The Sage", description: "Seeks truth and understanding", key: "sage" },
  { name: "The Hero", description: "Seeks to prove worth through courage", key: "hero" },
  { name: "The Outlaw", description: "Seeks revolution and change", key: "outlaw" },
  { name: "The Magician", description: "Seeks transformation", key: "magician" },
];

export const journeyStages: JourneyStage[] = [
  { name: "Call to Adventure", status: "Active" },
  { name: "Meeting the Mentor", status: "Active" },
  { name: "Crossing the Threshold", status: "Emphasized" },
  { name: "Tests & Trials", status: "Active" },
  { name: "Transformation", status: "Active" },
  { name: "Return with Wisdom", status: "Active" },
];

export const themeDistribution: ThemeDistribution[] = [
  { name: "Overcoming Obstacles", percent: 65, color: "bg-blue-500" },
  { name: "Relationship Challenges", percent: 45, color: "bg-purple-500" },
  { name: "Career & Purpose", percent: 38, color: "bg-emerald-500" },
  { name: "Self-Discovery", percent: 52, color: "bg-amber-500" },
];

export const culturalTraditions = [
  { name: "Greek/Campbellian", key: "greek", enabled: true },
  { name: "Norse", key: "norse", enabled: true },
  { name: "West African (Anansi)", key: "westAfrican", enabled: false },
  { name: "Mesoamerican", key: "mesoamerican", enabled: false },
  { name: "Japanese (Shinto)", key: "japanese", enabled: true },
  { name: "Hindu", key: "hindu", enabled: false },
  { name: "Celtic", key: "celtic", enabled: true },
  { name: "Indigenous American", key: "indigenous", enabled: false },
];

// Echoes (Social Discovery) Data
export const echoStories: EchoStory[] = [
  {
    id: "e1",
    title: "The Subway Odyssey",
    preview: "When the underground serpent delayed its arrival, a stranger's kindness lit the way...",
    genre: "Adventure",
    theme: "Connection",
    tradition: "Greek",
    region: "Northeast US",
    resonanceCount: 47,
    color: "bg-violet-100",
  },
  {
    id: "e2",
    title: "The Silent Battle",
    preview: "In the open-plan arena, the warrior chose words wisely against the tide of chaos...",
    genre: "Epic",
    theme: "Boundaries",
    tradition: "Norse",
    region: "Europe",
    resonanceCount: 89,
    color: "bg-blue-100",
  },
  {
    id: "e3",
    title: "The Spider's Lesson",
    preview: "What seemed like a tangled mess revealed itself to be an intricate design...",
    genre: "Mystery",
    theme: "Patience",
    tradition: "West African",
    region: "West Africa",
    resonanceCount: 156,
    color: "bg-amber-100",
  },
  {
    id: "e4",
    title: "The Mountain Within",
    preview: "Each step up the stairwell became a meditation on inner strength...",
    genre: "Fantasy",
    theme: "Perseverance",
    tradition: "Japanese",
    region: "East Asia",
    resonanceCount: 203,
    color: "bg-emerald-100",
  },
];

// Default therapeutic prompts
export const solutionFocusedQuestions = `- What would be different if this challenge was resolved?
- When have you successfully handled something similar before?
- What small step could you take today that would make a difference?
- Who in your life would notice positive changes first?`;

export const reframingPrompts = `- How might this obstacle be preparing you for something greater?
- What hidden strengths is this situation revealing in you?
- If this were a chapter in your hero's journey, what would it be called?
- What would your wisest self say about this challenge?`;

export const defaultFocusAreas = `This week, focus on helping users recognize their inner strength during times of uncertainty. Emphasize themes of:
- Finding opportunity within obstacles
- The power of small daily choices
- Building resilience through community
- Transforming fear into curiosity

Use metaphors of winter giving way to spring, seeds growing in darkness, and heroes discovering hidden abilities.`;

export const metaphorBank = `Current metaphors for transformation:
- Caterpillar to butterfly (personal growth)
- Phoenix rising from ashes (overcoming trauma)
- Seed breaking through soil (new beginnings)
- Diamond formed under pressure (strength through adversity)
- River carving through stone (persistence)
- Dawn breaking after darkest hour (hope after despair)

Seasonal metaphors:
- Winter: introspection, rest, preparation
- Spring: new growth, fresh starts, awakening
- Summer: full expression, abundance, confidence
- Autumn: harvest, wisdom, letting go`;

// Analytics
export const heroStats = {
  activeHeroes: 2847,
  storiesCreated: 12394,
  avgResilienceGrowth: 4.8,
};
