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
  {
    emojis: "🧙‍♂️⚡🏰📚🐍",
    answer: "Harry Potter and the Sorcerer’s Stone",
    hints: ["Wizarding world", "Hogwarts", "The boy who lived"],
  },
  {
    emojis: "🚢💎🧊❤️🌊",
    answer: "Titanic",
    hints: ["Romantic disaster film", "1912 voyage", "Jack and Rose"],
  },
  {
    emojis: "🦖🏝️🚙⚠️🧬",
    answer: "Jurassic Park",
    hints: ["Dinosaurs return", "Theme park gone wrong", "1993 blockbuster"],
  },
  {
    emojis: "👻🚫🚗🏙️🔫",
    answer: "Ghostbusters",
    hints: ["Supernatural comedy", "Who you gonna call?", "1984 film"],
  },
  {
    emojis: "🦈🌊🚤😱🎣",
    answer: "Jaws",
    hints: ["Shark thriller", "Beach town terror", "Spielberg classic"],
  },
  {
    emojis: "🕷️🧑‍🎓🏙️🕸️🦹",
    answer: "Spider-Man",
    hints: ["Superhero origin", "Peter Parker", "Friendly neighborhood hero"],
  },
  {
    emojis: "👑🦁🗡️❄️🛡️",
    answer: "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
    hints: ["Fantasy adventure", "Magical wardrobe", "Aslan"],
  },
  {
    emojis: "🧠🕵️‍♂️🗺️🍕🐀",
    answer: "Teenage Mutant Ninja Turtles",
    hints: ["Pizza-loving heroes", "Sewer team", "Leonardo and friends"],
  },
  {
    emojis: "🎬🦍🏙️🚁💥",
    answer: "King Kong",
    hints: ["Giant ape", "Skull Island", "Climbs a skyscraper"],
  },
  {
    emojis: "🪄🧹🧙‍♀️🌪️👠",
    answer: "The Wizard of Oz",
    hints: ["1939 classic", "Yellow Brick Road", "There's no place like home"],
  },
  {
    emojis: "🟢👹🫏🏰👸",
    answer: "Shrek",
    hints: ["DreamWorks animated film", "Swamp ogre", "Fairy tale parody"],
  },
  {
    emojis: "🦁🦓🦒🛳️🏙️",
    answer: "Madagascar",
    hints: ["Animated comedy", "Zoo animals escape", "Move it move it"],
  },
  {
    emojis: "🐼🥋🍜🏯🐉",
    answer: "Kung Fu Panda",
    hints: ["DreamWorks film", "Dragon Warrior", "Po"],
  },
  {
    emojis: "🟡👓🍌🦹‍♂️🚀",
    answer: "Despicable Me",
    hints: ["Animated comedy", "Former supervillain", "Minions debut"],
  },
  {
    emojis: "🟡🍌🌴🧪🕶️",
    answer: "Minions",
    hints: ["Spin-off film", "Banana-loving helpers", "Villain hunt"],
  },
  {
    emojis: "🐉🛡️🧑‍🦱🌊🔥",
    answer: "How to Train Your Dragon",
    hints: ["DreamWorks film", "Viking village", "Toothless"],
  },
  {
    emojis: "🧠🦸‍♂️🏙️🔵🤖",
    answer: "Megamind",
    hints: ["Animated superhero parody", "Blue-headed villain", "Metro City"],
  },
  {
    emojis: "🧱👮‍♂️🌆😂🚧",
    answer: "The Lego Movie",
    hints: ["Animated adventure", "Everything is awesome", "Master Builders"],
  },
  {
    emojis: "🎮🧱🏁🍬🦹",
    answer: "Wreck-It Ralph",
    hints: ["Disney animated film", "Arcade game world", "Villain wants to be good"],
  },
  {
    emojis: "🤖❤️🏙️🦸‍♂️🏥",
    answer: "Big Hero 6",
    hints: ["Disney animated film", "Inflatable robot", "San Fransokyo"],
  },
  {
    emojis: "🐟🔎🌊🐙🏄",
    answer: "Finding Dory",
    hints: ["Pixar sequel", "Memory loss", "Marine life adventure"],
  },
  {
    emojis: "🧝‍♂️🗺️✨👦🗡️",
    answer: "Onward",
    hints: ["Pixar fantasy", "Two elf brothers", "Quest for magic"],
  },
  {
    emojis: "🎷👻🌃🧠❤️",
    answer: "Soul",
    hints: ["Pixar film", "Jazz musician", "Life purpose theme"],
  },
  {
    emojis: "🔥💧🏙️❤️🌈",
    answer: "Elemental",
    hints: ["Pixar film", "Fire and water", "Element City"],
  },
  {
    emojis: "🏴‍☠️⚓🦜🧭💀",
    answer: "Pirates of the Caribbean: The Curse of the Black Pearl",
    hints: ["Swashbuckling adventure", "Captain Jack Sparrow", "Cursed treasure"],
  },
  {
    emojis: "🦇🌃🃏💥🏍️",
    answer: "The Dark Knight",
    hints: ["Batman film", "Heath Ledger Joker", "Christopher Nolan"],
  },
  {
    emojis: "🛡️❄️🦸‍♂️💥🕵️",
    answer: "Captain America: The Winter Soldier",
    hints: ["Marvel film", "Hydra conspiracy", "S.H.I.E.L.D. fallout"],
  },
  {
    emojis: "🧤⚡🪐🦸‍♂️💥",
    answer: "Avengers: Infinity War",
    hints: ["Marvel crossover", "Thanos", "Infinity Stones"],
  },
  {
    emojis: "⏳🦸‍♂️💍💜🌍",
    answer: "Avengers: Endgame",
    hints: ["Marvel finale", "Time heist", "Battle for the universe"],
  },
  {
    emojis: "🛠️❤️🦾💥🧲",
    answer: "Iron Man",
    hints: ["Marvel origin", "Tony Stark", "Arc reactor"],
  },
  {
    emojis: "👑🐾⚫🦸‍♂️🌍",
    answer: "Black Panther",
    hints: ["Marvel film", "Wakanda", "Vibranium suit"],
  },
  {
    emojis: "🦝🌌🌳🎵🚀",
    answer: "Guardians of the Galaxy",
    hints: ["Marvel space team", "Awesome Mix", "Star-Lord"],
  },
  {
    emojis: "🥊🏛️⚔️👑🩸",
    answer: "Gladiator",
    hints: ["Historical epic", "Roman arena", "Are you not entertained?"],
  },
  {
    emojis: "🏠🎄👦🪤🕵️",
    answer: "Home Alone",
    hints: ["Holiday comedy", "Kid left behind", "Booby-trapped house"],
  },
  {
    emojis: "💖📓🌧️🛶🕰️",
    answer: "The Notebook",
    hints: ["Romantic drama", "Nicholas Sparks adaptation", "Summer love story"],
  },
  {
    emojis: "💅🎓⚖️🐶💖",
    answer: "Legally Blonde",
    hints: ["Comedy", "Harvard Law", "Elle Woods"],
  },
  {
    emojis: "👧📓👑💄🚌",
    answer: "Mean Girls",
    hints: ["Teen comedy", "High school cliques", "On Wednesdays we wear pink"],
  },
  {
    emojis: "🚗🏜️💀🎸🔥",
    answer: "Mad Max: Fury Road",
    hints: ["Post-apocalyptic action", "Desert chase", "2015 film"],
  },
  {
    emojis: "🌍🧑‍🚀💙🪐🌳",
    answer: "Avatar",
    hints: ["Sci-fi epic", "Pandora", "James Cameron film"],
  },
  {
    emojis: "❄️⛓️🌹😱👩‍👦",
    answer: "Misery",
    hints: ["Psychological thriller", "Stephen King adaptation", "Obsessed fan"],
  },
  {
    emojis: "🚲🌕👦👽🌲",
    answer: "E.T. the Extra-Terrestrial",
    hints: ["1982 sci-fi classic", "Alien friend", "Phone home"],
  },
  {
    emojis: "🗺️💀🏴‍☠️👦⚓",
    answer: "The Goonies",
    hints: ["1985 adventure", "Treasure hunt", "Kids on a quest"],
  },
  {
    emojis: "🤖🔫🕶️🔥⏳",
    answer: "The Terminator",
    hints: ["1984 sci-fi action", "Time-travel assassin", "I'll be back"],
  },
  {
    emojis: "🤖🧒🏍️💥⛓️",
    answer: "Terminator 2: Judgment Day",
    hints: ["1991 sequel", "Liquid metal villain", "Protect John Connor"],
  },
  {
    emojis: "👽🚀🪖🔥😱",
    answer: "Aliens",
    hints: ["1986 sci-fi action", "Ripley returns", "Xenomorph swarm"],
  },
  {
    emojis: "🌴🪖👽🎯💀",
    answer: "Predator",
    hints: ["1987 action sci-fi", "Jungle mission", "Invisible hunter"],
  },
  {
    emojis: "🚔🎤🌴😎💰",
    answer: "Beverly Hills Cop",
    hints: ["1984 action comedy", "Eddie Murphy", "Detroit cop in LA"],
  },
  {
    emojis: "🚓👮‍♂️💣🧨🤝",
    answer: "Lethal Weapon",
    hints: ["1987 buddy cop film", "Riggs and Murtaugh", "Action-comedy classic"],
  },
  {
    emojis: "✈️👨‍⚕️🧳🧠🏆",
    answer: "Rain Man",
    hints: ["1988 drama", "Road trip brothers", "Dustin Hoffman Oscar role"],
  },
  {
    emojis: "📚🏫🍎🧑‍🏫🕊️",
    answer: "Dead Poets Society",
    hints: ["1989 drama", "Prep school", "Carpe diem"],
  },
  {
    emojis: "💃🕺🏕️❤️🎵",
    answer: "Dirty Dancing",
    hints: ["1987 romance", "Summer resort", "Nobody puts Baby in a corner"],
  },
  {
    emojis: "💄🏨❤️🧑‍💼🌹",
    answer: "Pretty Woman",
    hints: ["1990 romantic comedy", "Hollywood Boulevard", "Julia Roberts"],
  },
  {
    emojis: "👨‍👧🎭🏠😂🧹",
    answer: "Mrs. Doubtfire",
    hints: ["1993 family comedy", "Robin Williams", "Disguise as nanny"],
  },
  {
    emojis: "🎭💚🐶💼🤣",
    answer: "The Mask",
    hints: ["1994 comedy", "Jim Carrey", "Mischievous green face"],
  },
  {
    emojis: "🔪📞👻🏫😱",
    answer: "Scream",
    hints: ["1996 slasher", "Ghostface", "Meta horror film"],
  },
  {
    emojis: "👦👻🚪🗣️😨",
    answer: "The Sixth Sense",
    hints: ["1999 thriller", "M. Night Shyamalan", "I see dead people"],
  },
  {
    emojis: "🕵️‍♂️🗂️🩸🔍🗣️",
    answer: "The Silence of the Lambs",
    hints: ["1991 thriller", "Clarice Starling", "Hannibal Lecter"],
  },
  {
    emojis: "👔💵📈🍝🔫",
    answer: "Goodfellas",
    hints: ["1990 crime drama", "Martin Scorsese", "Mob life story"],
  },
  {
    emojis: "💼💉🍔🔫🎬",
    answer: "Pulp Fiction",
    hints: ["1994 crime film", "Quentin Tarantino", "Nonlinear story"],
  },
  {
    emojis: "🕵️‍♂️🧢🚢💬👹",
    answer: "The Usual Suspects",
    hints: ["1995 crime mystery", "Heist gone wrong", "Keyser Soze"],
  },
  {
    emojis: "🪖🌊🇫🇷🎖️💥",
    answer: "Saving Private Ryan",
    hints: ["1998 war film", "WWII mission", "Spielberg directed"],
  },
  {
    emojis: "📚🔒⛓️✨🟢",
    answer: "The Green Mile",
    hints: ["1999 prison drama", "Stephen King adaptation", "Death row miracle"],
  },
  {
    emojis: "🧟‍♂️🏺🏜️🐪⚔️",
    answer: "The Mummy",
    hints: ["1999 adventure", "Ancient Egypt", "Brendan Fraser"],
  },
  {
    emojis: "🌪️🚚🌾📡⚠️",
    answer: "Twister",
    hints: ["1996 disaster film", "Storm chasers", "Tornado research"],
  },
  {
    emojis: "🚆👨‍⚕️🔫🏃‍♂️🕵️",
    answer: "The Fugitive",
    hints: ["1993 thriller", "Wrongly accused doctor", "One-armed man clue"],
  },
];