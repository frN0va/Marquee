export interface Puzzle {
  emojis: string;
  answer: string;
  hints: [string, string, string];
}

export const PUZZLES: Puzzle[] = [
  {
    emojis: "🪣🩸🎀👸😱",
    answer: "Carrie",
    hints: ["Horror film", "High school setting", "Stephen King adaptation"],
  },
  {
    emojis: "🍝🐀👨‍🍳⭐🗼",
    answer: "Ratatouille",
    hints: ["Pixar film", "Set in France", "An unlikely chef"],
  },
  {
    emojis: "🪁🌊🤿👦🐢",
    answer: "Finding Nemo",
    hints: [
      "Pixar film",
      "Ocean adventure",
      "A parent searching for their child",
    ],
  },
  {
    emojis: "💿🕺🩰🚗🌃",
    answer: "Saturday Night Fever",
    hints: ["1970s drama", "Disco era", "Brooklyn setting"],
  },
  {
    emojis: "🌋☁️🧙🧝‍♀️🗡️",
    answer: "The Lord of the Rings",
    hints: ["Fantasy epic", "Ring must be destroyed", "Based on Tolkien"],
  },
  {
    emojis: "🔦🌲🗺️😰🎒",
    answer: "The Blair Witch Project",
    hints: ["Found footage horror", "1999 release", "Set in the woods"],
  },
  {
    emojis: "🧤⛸️📺📰😤",
    answer: "I, Tonya",
    hints: ["Biographical drama", "Figure skating scandal", "1990s story"],
  },
  {
    emojis: "🪆🎻🏰❄️👑",
    answer: "Anastasia",
    hints: ["Animated musical", "Russian royalty", "Lost princess story"],
  },
  {
    emojis: "🎂🕯️🏠👻😂",
    answer: "Beetlejuice",
    hints: ["Comedy horror", "Say his name three times", "1980s classic"],
  },
  {
    emojis: "🧦👞🍫🏃‍♂️🌿",
    answer: "Forrest Gump",
    hints: ["Drama", "Spans decades", "Life is like a box of chocolates"],
  },

  {
    emojis: "🦁👑🌅🐗🐒",
    answer: "The Lion King",
    hints: ["Disney animated film", "African savanna", "Hakuna Matata"],
  },
  {
    emojis: "❄️👭⛄🎵👑",
    answer: "Frozen",
    hints: ["Disney film", "Sisters", "Ice powers"],
  },
  {
    emojis: "🧸🤠🚀👦📦",
    answer: "Toy Story",
    hints: ["Pixar film", "Toys come alive", "Woody and Buzz"],
  },
  {
    emojis: "🎈🏠👴🐶🌄",
    answer: "Up",
    hints: ["Pixar film", "Floating house", "Adventure"],
  },
  {
    emojis: "🤖🌍🗑️🚀❤️",
    answer: "WALL-E",
    hints: ["Pixar film", "Lonely robot", "Future Earth"],
  },
  {
    emojis: "🚗🏁🌵⚡🏆",
    answer: "Cars",
    hints: ["Pixar film", "Lightning McQueen", "Race car town"],
  },
  {
    emojis: "🧞‍♂️🕌🪔🐒✨",
    answer: "Aladdin",
    hints: ["Disney classic", "Magic lamp", "Genie"],
  },
  {
    emojis: "👠🕛🎃✨🏰",
    answer: "Cinderella",
    hints: ["Disney classic", "Glass slipper", "Midnight"],
  },
  {
    emojis: "🌹🕯️🫖👹🏰",
    answer: "Beauty and the Beast",
    hints: ["Disney musical", "Enchanted castle", "Rose under glass"],
  },
  {
    emojis: "🐠👑🌊🔱🐚",
    answer: "The Little Mermaid",
    hints: ["Disney film", "Under the sea", "Sea witch"],
  },
  {
    emojis: "🎺💀🌼🎸👦",
    answer: "Coco",
    hints: ["Pixar film", "Day of the Dead", "Music and family"],
  },
  {
    emojis: "👨‍👩‍👧‍👦🏠✨🌈🕯️",
    answer: "Encanto",
    hints: ["Disney film", "Magical family", "Colombia setting"],
  },
  {
    emojis: "🎮🍄👨‍🔧👑🐢",
    answer: "The Super Mario Bros. Movie",
    hints: ["Video game adaptation", "Nintendo", "Bowser"],
  },

  // ───────────── MODERN FAVORITES ─────────────

  {
    emojis: "🔍🩸🏰🕵️‍♂️🔪",
    answer: "Knives Out",
    hints: ["Whodunit mystery", "Benoit Blanc", "Wealthy family"],
  },
  {
    emojis: "📺🌎🎥👨🚪",
    answer: "The Truman Show",
    hints: ["Man unknowingly on TV", "Reality satire", "Jim Carrey"],
  },
  {
    emojis: "🎤🎶👭🏆🎓",
    answer: "Pitch Perfect",
    hints: ["College a cappella", "Singing competition", "The Barden Bellas"],
  },
  {
    emojis: "🎤🍺📺📰🤣",
    answer: "Anchorman",
    hints: ["Comedy", "1970s news team", "Ron Burgundy"],
  },
  {
    emojis: "🧠💤🌀🏙️🔫",
    answer: "Inception",
    hints: ["Dream layers", "Christopher Nolan", "Spinning top"],
  },
  {
    emojis: "🌌🪐🧑‍🚀⏳🌽",
    answer: "Interstellar",
    hints: ["Space epic", "Black holes", "Time dilation"],
  },
  {
    emojis: "💄🎬🌃🎹❤️",
    answer: "La La Land",
    hints: ["Modern musical", "Los Angeles", "Jazz pianist"],
  },
  {
    emojis: "🚀💑🌌💤⏰",
    answer: "Passengers",
    hints: ["Sci-fi romance", "Deep space", "Cryosleep malfunction"],
  },
  {
    emojis: "👽🌎🏛️💥🛸",
    answer: "Independence Day",
    hints: ["Alien invasion", "1996 blockbuster", "July 4th speech"],
  },

  // ───────────── CLASSICS & 80s / 90s ─────────────

  {
    emojis: "✈️🕶️🔥🎓🏆",
    answer: "Top Gun",
    hints: ["Naval aviators", "Maverick", "1986 action film"],
  },
  {
    emojis: "🕰️⚡🚗🛹🎸",
    answer: "Back to the Future",
    hints: ["Time travel", "DeLorean", "88 mph"],
  },
  {
    emojis: "👽🕶️🔫🌎✨",
    answer: "Men in Black",
    hints: ["Secret agents", "Aliens on Earth", "Neuralyzer"],
  },
  {
    emojis: "🏫🎧📓🥪👥",
    answer: "The Breakfast Club",
    hints: ["Saturday detention", "1980s teen film", "Five stereotypes"],
  },
  {
    emojis: "🗿📜🐍🎩🔫",
    answer: "Raiders of the Lost Ark",
    hints: ["Indiana Jones", "Biblical artifact", "Nazis"],
  },
  {
    emojis: "🕹️🌐🏍️💿⚡",
    answer: "Tron",
    hints: ["Digital world", "1982 sci-fi", "Light cycles"],
  },
  {
    emojis: "🚔🏢💥🎄🔫",
    answer: "Die Hard",
    hints: ["Christmas action", "Nakatomi Plaza", "Bruce Willis"],
  },
  {
    emojis: "🌌🚀👾🤡😂",
    answer: "Spaceballs",
    hints: ["Sci-fi parody", "Mel Brooks", "Star Wars spoof"],
  },
  {
    emojis: "🕺🇬🇧🕶️💥🎶",
    answer: "Austin Powers",
    hints: ["Spy parody", "1960s vibe", "Shagadelic"],
  },
  {
    emojis: "🚗🏫🎷🎉😎",
    answer: "Ferris Bueller’s Day Off",
    hints: ["Teen comedy", "Chicago", "Skipping school"],
  },
  {
    emojis: "⛳🍺🤪💰🐿️",
    answer: "Caddyshack",
    hints: ["Golf comedy", "1980 film", "Gopher mascot"],
  },
  {
    emojis: "🚐🤪💼💸🧳",
    answer: "Dumb and Dumber",
    hints: ["Road trip", "Two clueless friends", "Briefcase mix-up"],
  },
  {
    emojis: "👊🧼🏢🗣️🔥",
    answer: "Fight Club",
    hints: ["1999 film", "Underground fights", "First rule"],
  },
  {
    emojis: "🚀🌕🧑‍🚀📡💥",
    answer: "Apollo 13",
    hints: ["NASA mission", "True story", "Houston quote"],
  },
  {
    emojis: "🔒🏢📖🌧️🔑",
    answer: "The Shawshank Redemption",
    hints: ["Prison drama", "Hope theme", "Stephen King story"],
  },
  {
    emojis: "⚔️👰‍♀️🏰🤺❤️",
    answer: "The Princess Bride",
    hints: ["Fantasy adventure", "Inconceivable!", "True love story"],
  },
  {
    emojis: "🕵️‍♂️🕯️🏰🔪🎲",
    answer: "Clue",
    hints: ["Murder mystery", "Board game adaptation", "Multiple endings"],
  },
  {
    emojis: "🚂👦🌲🌊🧭",
    answer: "Stand By Me",
    hints: ["Coming-of-age", "Four boys", "Search for a body"],
  },
  {
    emojis: "✈️🤪💺🍹🎤",
    answer: "Airplane!",
    hints: ["Spoof comedy", "1980 film", "Don't call me Shirley"],
  },

  // ───────────── HARD ─────────────

  {
    emojis: "🔴🔵💊🕶️💻",
    answer: "The Matrix",
    hints: ["Simulation theory", "Red pill", "Neo"],
  },
  {
    emojis: "🛷📰🏰🕵️📜",
    answer: "Citizen Kane",
    hints: ["1941 classic", "Rosebud", "Media tycoon"],
  },
  {
    emojis: "🧍‍♂️🏜️🏛️⚔️🌞",
    answer: "Lawrence of Arabia",
    hints: ["Desert epic", "1962 Best Picture", "British officer"],
  },
  {
    emojis: "🛑🪓❄️🏨🚪",
    answer: "The Shining",
    hints: ["Kubrick horror", "Overlook Hotel", "Here's Johnny"],
  },
  {
    emojis: "🧛‍♂️🏰🌙🩸🦇",
    answer: "Nosferatu",
    hints: ["Silent horror", "1922 film", "Early vampire cinema"],
  },
  {
    emojis: "💣🪖🇬🇧🗺️☎️",
    answer: "Dr. Strangelove",
    hints: ["Cold War satire", "Nuclear crisis", "Kubrick film"],
  },

  // ───────────── MODERN CROWD-PLEASERS ─────────────

  {
    emojis: "👱‍♀️💖👠🏖️🎀",
    answer: "Barbie",
    hints: ["2023 blockbuster", "Greta Gerwig directed", "Pink everywhere"],
  },
  {
    emojis: "💣🧪☢️👨‍🔬⏳",
    answer: "Oppenheimer",
    hints: ["Biographical drama", "Atomic bomb", "Christopher Nolan film"],
  },
  {
    emojis: "🦇🌧️🌃🕵️‍♂️🃏",
    answer: "The Batman",
    hints: ["2022 reboot", "Robert Pattinson", "Dark detective tone"],
  },
  {
    emojis: "🏜️🪱👑⚔️🪐",
    answer: "Dune: Part Two",
    hints: ["Sci-fi epic", "Arrakis", "Paul Atreides rises"],
  },
  {
    emojis: "🫖👨🏾‍🦱👀🏡🔪",
    answer: "Get Out",
    hints: ["Horror satire", "Jordan Peele", "The Sunken Place"],
  },
  {
    emojis: "🤫👂👶👾🌾",
    answer: "A Quiet Place",
    hints: [
      "Silence is survival",
      "Alien creatures",
      "Post-apocalyptic family",
    ],
  },
  {
    emojis: "🎪🎩🎤✨🎶",
    answer: "The Greatest Showman",
    hints: ["Musical", "P.T. Barnum", "This Is Me"],
  },
  {
    emojis: "🥁🎼😤🏫🔥",
    answer: "Whiplash",
    hints: ["Music drama", "Abusive instructor", "Not quite my tempo"],
  },
  {
    emojis: "💻👨‍💼📘💰⚖️",
    answer: "The Social Network",
    hints: ["Facebook origins", "Mark Zuckerberg", "Aaron Sorkin script"],
  },
  {
    emojis: "🏢🌧️🍑🪨💰",
    answer: "Parasite",
    hints: ["Korean thriller", "Class divide", "Oscar winner"],
  },
  {
    emojis: "🌀👩‍👧🪨🥋🌈",
    answer: "Everything Everywhere All At Once",
    hints: ["Multiverse chaos", "Family drama", "Oscar winner"],
  },
  {
    emojis: "💰📈🚤🍾🐺",
    answer: "The Wolf of Wall Street",
    hints: ["Scorsese film", "Stockbroker excess", "Leonardo DiCaprio"],
  },
  {
    emojis: "🪐🌱🚀🥔📡",
    answer: "The Martian",
    hints: ["Stranded astronaut", "Mars survival", "Grow potatoes"],
  },
  {
    emojis: "🃏🤡🌆🩸🎭",
    answer: "Joker",
    hints: ["Origin story", "Gotham City", "Arthur Fleck"],
  },
  {
    emojis: "🏨🎂🔫🚂🎨",
    answer: "The Grand Budapest Hotel",
    hints: ["Wes Anderson film", "Eccentric concierge", "Symmetrical style"],
  },

  // ───────────── DISNEY / PIXAR EXPANSION ─────────────

  {
    emojis: "👹🏢🚪👧💡",
    answer: "Monsters, Inc.",
    hints: ["Pixar film", "Energy from screams", "Sulley and Mike"],
  },
  {
    emojis: "🧠😡😭😂🤢",
    answer: "Inside Out",
    hints: ["Pixar film", "Emotions as characters", "Riley"],
  },
  {
    emojis: "🧠🌪️👧🎓✨",
    answer: "Inside Out 2",
    hints: ["Pixar sequel", "Teen emotions", "New feelings arrive"],
  },
  {
    emojis: "🌊⛵🌺🗿✨",
    answer: "Moana",
    hints: ["Disney film", "Ocean voyage", "Demigod Maui"],
  },
  {
    emojis: "🗼👱‍♀️✨🦎🎨",
    answer: "Tangled",
    hints: ["Disney film", "Long magical hair", "Rapunzel"],
  },
  {
    emojis: "🦊🐰🚓🌆🥕",
    answer: "Zootopia",
    hints: ["Disney film", "Animal city", "Buddy cop story"],
  },
  {
    emojis: "🐼👧🎤🎒❤️",
    answer: "Turning Red",
    hints: ["Pixar film", "Teen emotions", "Red panda transformation"],
  },
  {
    emojis: "🇮🇹🍝🚲🌊👦",
    answer: "Luca",
    hints: ["Pixar film", "Italian seaside", "Sea monster secret"],
  },
  {
    emojis: "🏹👩‍🦰🐻🏰🔥",
    answer: "Brave",
    hints: ["Pixar film", "Scottish princess", "Bear curse"],
  },
  {
    emojis: "🦸‍♂️👨‍👩‍👧‍👦🔥🦹‍♂️🏠",
    answer: "The Incredibles",
    hints: ["Pixar film", "Superhero family", "Syndrome villain"],
  },
  {
    emojis: "🦸‍♀️👶🕶️🏃‍♂️💥",
    answer: "The Incredibles 2",
    hints: ["Pixar sequel", "Elastigirl leads", "Jack-Jack powers"],
  },
  {
    emojis: "💪⚡🏛️🗡️🎶",
    answer: "Hercules",
    hints: ["Disney film", "Greek mythology", "Zero to hero"],
  },
  {
    emojis: "🌴🦍👦🎶🐘",
    answer: "Tarzan",
    hints: ["Disney film", "Raised by gorillas", "Phil Collins soundtrack"],
  },
  {
    emojis: "⚔️👩‍🦰🐉🎎🏮",
    answer: "Mulan",
    hints: ["Disney film", "Disguised soldier", "Chinese legend"],
  },
  {
    emojis: "👑🦙🏔️😂🧪",
    answer: "The Emperor’s New Groove",
    hints: ["Disney comedy", "Turned into a llama", "Buddy road trip"],
  },
];