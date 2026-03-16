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

export interface Genre {
  name: string;
  icon: string;
  description: string;
  writers: string;
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

// Hero View Data — Row 1: Classic & Familiar
export const genresRow1: Genre[] = [
  { name: "Adventure", icon: "🏔️", description: "High-stakes quests, exploration, and physical challenges overcome through courage and resourcefulness.", writers: "Jules Verne, Robert Louis Stevenson, Clive Cussler" },
  { name: "Epic", icon: "⚔️", description: "Grand-scale heroism with world-changing stakes, legendary heroes facing impossible odds.", writers: "Homer, Tolkien, George R.R. Martin" },
  { name: "Fantasy", icon: "✨", description: "Magic systems, imaginary worlds, quests where the impossible becomes possible.", writers: "J.R.R. Tolkien, Ursula K. Le Guin, Brandon Sanderson" },
  { name: "Mystery", icon: "🔍", description: "Puzzle-solving and investigation, uncovering hidden truths through cleverness and observation.", writers: "Agatha Christie, Arthur Conan Doyle, Tana French" },
  { name: "Sci-Fi", icon: "🚀", description: "Science and technology as both problem and solution, exploring humanity's future possibilities.", writers: "Isaac Asimov, Ursula K. Le Guin, Liu Cixin, Octavia Butler" },
  { name: "Horror", icon: "👁️", description: "Survival against terror, confronting fears and emerging changed — if you emerge at all.", writers: "Stephen King, Shirley Jackson, Carmen Maria Machado" },
  { name: "Thriller", icon: "🔦", description: "High-stakes tension and time pressure, quick thinking under extreme circumstances.", writers: "Lee Child, Gillian Flynn, John le Carré" },
  { name: "Noir", icon: "🌧️", description: "Detective navigating moral gray zones in corrupt systems, cynicism meeting idealism.", writers: "Raymond Chandler, Dashiell Hammett, Walter Mosley" },
  { name: "Western", icon: "🤠", description: "Frontier justice and lone wanderers creating order from chaos through grit and code.", writers: "Cormac McCarthy, Larry McMurtry, Elmore Leonard" },
  { name: "Heist", icon: "💼", description: "Clever planning and underdog teams outsmarting powerful systems through coordination.", writers: "Scott Lynch, Leigh Bardugo, Michael Crichton" },
  { name: "Survival", icon: "🔥", description: "Wilderness, isolation, and resourcefulness against nature's indifference.", writers: "Gary Paulsen, Jack London, Andy Weir" },
  { name: "Space Opera", icon: "🌠", description: "Star Wars-scale heroism with galaxy-spanning conflicts and cosmic stakes.", writers: "Lois McMaster Bujold, Ann Leckie, Iain M. Banks" },
  { name: "Post-Apocalyptic", icon: "🏚️", description: "Survival and rebuilding after civilization's collapse, creating new worlds from ruins.", writers: "Cormac McCarthy, Emily St. John Mandel, N.K. Jemisin" },
  { name: "Steampunk", icon: "🔧", description: "Victorian-era aesthetic meets fantastical technology, invention as heroism.", writers: "China Miéville, Cherie Priest, Gail Carriger" },
  { name: "Urban Fantasy", icon: "🌃", description: "Magic hidden in modern cities, supernatural threats in familiar settings.", writers: "Neil Gaiman, Jim Butcher, Seanan McGuire" },
  { name: "Superhero", icon: "🦸", description: "Literal power fantasy where abilities become responsibility and moral tests.", writers: "V.E. Schwab, Brandon Sanderson, Grant Morrison" },
  { name: "Dark Fantasy", icon: "🖤", description: "Grim, morally complex fantasy where heroes are tarnished and victories cost everything.", writers: "Joe Abercrombie, Glen Cook, Mark Lawrence" },
  { name: "Sword & Sorcery", icon: "🗡️", description: "Conan-style violent magic, individual warriors against sorcerous threats.", writers: "Robert E. Howard, Fritz Leiber, Michael Moorcock" },
  { name: "Fairy Tale", icon: "🏰", description: "Classic story structures with transformation, enchantment, and archetypal journeys.", writers: "Angela Carter, Robin McKinley, Naomi Novik" },
  { name: "Gothic Romance", icon: "🥀", description: "Haunted by the past in atmospheric settings, dark secrets and passionate intensity.", writers: "Daphne du Maurier, Charlotte Brontë, Shirley Jackson" },
  { name: "Mythology", icon: "🏛️", description: "Gods and legendary heroes, cosmic battles and divine intervention in mortal affairs.", writers: "Homer, Edith Hamilton, Madeline Miller, Neil Gaiman" },
  { name: "Folklore", icon: "🌾", description: "Traditional tale structures passed down through generations, archetypal wisdom.", writers: "Brothers Grimm, Zora Neale Hurston, Hans Christian Andersen" },
  { name: "Historical Epic", icon: "📜", description: "Real-world historical heroism reimagined, actual events as legendary narratives.", writers: "Hilary Mantel, Ken Follett, Colson Whitehead" },
  { name: "Wuxia", icon: "🐉", description: "Chinese martial arts with honor codes, internal cultivation and righteous heroism.", writers: "Jin Yong, Gu Long, films by Zhang Yimou" },
  { name: "Swashbuckler", icon: "🏴‍☠️", description: "Pirates, musketeers, and daring escapes with wit, swordplay, and romantic heroism.", writers: "Alexandre Dumas, Rafael Sabatini" },
  { name: "Spy Thriller", icon: "🕵️", description: "Espionage, double agents, and intrigue in shadowy intelligence wars.", writers: "John le Carré, Ian Fleming, Mick Herron" },
  { name: "Cyberpunk", icon: "💻", description: "High-tech dystopia where hackers and rebels fight corporate control through digital warfare.", writers: "William Gibson, Neal Stephenson, Bruce Sterling" },
  { name: "Anime Battle", icon: "🌀", description: "Tournament arcs and power escalation, friendship and training overcome impossible odds.", writers: "Dragon Ball, Naruto, My Hero Academia" },
  { name: "Coming of Age", icon: "🌱", description: "Youth to maturity, bildungsroman where innocence meets experience and identity forms.", writers: "S.E. Hinton, Ursula K. Le Guin, Jason Reynolds" },
  { name: "Redemption Arc", icon: "🌅", description: "Fallen hero rising from mistakes, earning second chances through concrete change.", writers: "Victor Hugo, Brandon Sanderson, Gene Wolfe" },
  { name: "Revenge Quest", icon: "⚖️", description: "Wronged hero seeking justice, fury transformed into focused mission.", writers: "Alexandre Dumas (Count of Monte Cristo), Joe Abercrombie" },
  { name: "Trickster Tale", icon: "🎩", description: "Wit over strength, clever underdogs outsmarting powerful forces through cunning.", writers: "Neil Gaiman (Anansi Boys), Terry Pratchett" },
  { name: "Disaster", icon: "🌪️", description: "Catastrophe response and human resilience when systems collapse.", writers: "Station Eleven, Contagion, Lucifer's Hammer" },
  { name: "Military Fiction", icon: "🎖️", description: "Tactical heroism and brotherhood forged in combat, warrior codes and sacrifice.", writers: "Tom Clancy, Joe Haldeman, Marko Kloos" },
  { name: "Portal Fantasy", icon: "🚪", description: "Ordinary person transported to extraordinary world, fish-out-of-water heroism.", writers: "C.S. Lewis, Lev Grossman, V.E. Schwab" },
];

// Hero View Data — Row 2: Specialty & Transformative
export const genresRow2: Genre[] = [
  { name: "Solarpunk", icon: "☀️", description: "Eco-optimism where community resilience and sustainable futures become heroic achievements.", writers: "Becky Chambers, Kim Stanley Robinson, Cory Doctorow" },
  { name: "Hopepunk", icon: "💛", description: "Radical kindness as rebellion, optimism and compassion as active resistance to darkness.", writers: "Becky Chambers, Mary Robinette Kowal, T.J. Klune" },
  { name: "Afrofuturism", icon: "🌟", description: "Cultural reclamation through speculative fiction, imagining Black futures and alternate histories.", writers: "Octavia Butler, N.K. Jemisin, Nnedi Okorafor" },
  { name: "Weird West", icon: "🦂", description: "Frontier mythology collides with supernatural forces, cowboy meets cosmic horror.", writers: "Stephen King (Dark Tower), Joe R. Lansdale, Emma Bull" },
  { name: "Cosmic Horror", icon: "🌑", description: "Insignificance in vast universe transformed into defiant courage against incomprehensible forces.", writers: "H.P. Lovecraft, Laird Barron, Victor LaValle" },
  { name: "Mythpunk", icon: "🧿", description: "Folklore reimagined and subverted, traditional stories turned inside-out.", writers: "Catherynne M. Valente, Theodora Goss, Nalo Hopkinson" },
  { name: "Silkpunk", icon: "🎋", description: "Asian-inspired tech aesthetics and cultural innovation, non-Western engineering heroism.", writers: "Ken Liu, Fonda Lee, Aliette de Bodard" },
  { name: "Cli-Fi", icon: "🌊", description: "Environmental crisis as heroic crucible, adaptation and activism in a warming world.", writers: "Kim Stanley Robinson, Paolo Bacigalupi, Margaret Atwood" },
  { name: "LitRPG", icon: "🎮", description: "Gamified reality where leveling up through adversity has literal mechanical rewards.", writers: "Dakota Krout, Tao Wong, Shirtaloon" },
  { name: "Dying Earth", icon: "🕯️", description: "Beauty and heroism in entropy and decline, finding meaning as worlds end.", writers: "Jack Vance, Gene Wolfe, M. John Harrison" },
  { name: "Biopunk", icon: "🧬", description: "Genetic engineering and body modification as both weapon and identity, biological revolution.", writers: "Paolo Bacigalupi, Margaret Atwood, Octavia Butler" },
  { name: "Dieselpunk", icon: "⚙️", description: "1920s–50s aesthetic with alternate history, Art Deco meets warfare and noir atmosphere.", writers: "China Miéville, BioShock, Hayao Miyazaki" },
  { name: "Atompunk", icon: "☢️", description: "1950s atomic age optimism and paranoia, raygun gothic and nuclear-powered futures.", writers: "Fallout (game), Philip K. Dick, The Jetsons" },
  { name: "Nanopunk", icon: "🔬", description: "Nanotechnology and microscopic battles, inner-space as new frontier.", writers: "Neal Stephenson, Michael Crichton, Linda Nagata" },
  { name: "Cassette Futurism", icon: "📼", description: "Retro-future aesthetics with analog technology, chunky interfaces and tape-based futures.", writers: "Alien film aesthetic, Cowboy Bebop, The Expanse" },
  { name: "Low Fantasy", icon: "⛺", description: "Minimal magic in grounded worlds, gritty realism with hints of supernatural.", writers: "Guy Gavriel Kay, George R.R. Martin, Robin Hobb" },
  { name: "Bollywood Epic", icon: "🎬", description: "Musical dramatic heroism with elevated emotions, family honor, and spectacular production.", writers: "Sanjay Leela Bhansali, K. Asif, Yash Chopra" },
  { name: "Telenovela", icon: "🌹", description: "Melodramatic stakes where passion and fate collide across class boundaries.", writers: "Isabel Allende, Gabriel García Márquez, Jane the Virgin" },
  { name: "K-Drama", icon: "🌸", description: "Emotional intensity where fate and choice intertwine, trauma and healing through connection.", writers: "Goblin, My Mister, Reply series" },
  { name: "Neurodivergent Hero", icon: "🧠", description: "Autism, ADHD, different processing as strength rather than deficit to overcome.", writers: "Naoki Higashida, Corinne Duyvis, Mark Haddon" },
  { name: "Crip Futurism", icon: "♾️", description: "Disability justice and reimagined access, futures built for disabled bodies and minds.", writers: "Leah Lakshmi Piepzna-Samarasinha, Octavia Butler" },
  { name: "Chronic Illness Quest", icon: "💊", description: "Invisible battles with pacing, advocacy, and redefining heroism beyond physical prowess.", writers: "Laurie Edwards, disability memoirs" },
  { name: "Deaf Gain", icon: "🤟", description: "Sign language worlds where visual communication is primary, deaf culture as richness not lack.", writers: "Sara Nović, Ann Clare LeZotte, Raymond Luczak" },
  { name: "Mad Pride", icon: "🦋", description: "Reclaiming mental health narratives and liberation from medical model pathologizing.", writers: "Elyn Saks, Susanna Kaysen, Sylvia Plath" },
  { name: "Grief Journey", icon: "🕊️", description: "Loss transformation and continuing bonds, death as catalyst for profound change.", writers: "Joan Didion, Chimamanda Ngozi Adichie, Megan Devine" },
  { name: "Survivor's Tale", icon: "💪", description: "Post-trauma identity and reclaiming power from experiences that tried to destroy you.", writers: "Maya Angelou, Roxane Gay, Tara Westover" },
  { name: "Recovery Quest", icon: "🌄", description: "Addiction and relapse as plot points not failure, sobriety as ongoing heroic effort.", writers: "Caroline Knapp, Leslie Jamison, David Sheff" },
  { name: "PTSD Warrior", icon: "🛡️", description: "Triggers as antagonists and coping skills as weapons in ongoing internal war.", writers: "Phil Klay, Kevin Powers, Bessel van der Kolk" },
  { name: "Healing Circle", icon: "🤝", description: "Community support as magic system, collective care as revolutionary act.", writers: "adrienne maree brown, bell hooks, Alice Walker" },
  { name: "Depression as Dark Night", icon: "🌒", description: "Spiritual crisis and emergence, the void as transformative passage not permanent state.", writers: "Andrew Solomon, William Styron, St. John of the Cross" },
  { name: "Anxiety as Oracle", icon: "🪞", description: "Hypervigilance reframed as foresight, pattern recognition as survival superpower.", writers: "Scott Stossel, Sarah Wilson" },
  { name: "Dissociation as Portal", icon: "💫", description: "Multiple selves and fragmented hero journeying between internal worlds.", writers: "Judith Herman, The Haunting of Hill House" },
  { name: "Intrusive Thoughts as Demons", icon: "😈", description: "Externalizing and battling unwanted thoughts as distinct antagonistic forces.", writers: "John Green (Turtles All the Way Down), Fletcher Wortmann" },
  { name: "Manic Episode as Quest", icon: "⚡", description: "Intensity, risk, and consequence in high-energy states, euphoria meeting destruction.", writers: "Kay Redfield Jamison, Carrie Fisher, Marya Hornbacher" },
];

// Combined for backward compatibility
export const genres: Genre[] = [...genresRow1, ...genresRow2];

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
