export interface Puzzle {
    emojis: string;
    answer: string;
    hints: [string, string, string];
}

export const PUZZLES: Puzzle[] = [

    // ── EASY (everyone's seen these, but the emojis aren't a giveaway) ──

    {
        emojis: "🪣🩸🎀👸😱",
        answer: "Carrie",
        hints: ["Horror film", "High school setting", "Stephen King adaptation"],
    },
    {
        emojis: "🍝🐀👨‍🍳⭐🗼",
        answer: "Ratatouille",
        hints: ["Animated film", "Set in France", "An unlikely chef"],
    },
    {
        emojis: "🪁🌊🤿👦🐢",
        answer: "Finding Nemo",
        hints: ["Animated film", "Set in the ocean", "A parent searching for their child"],
    },
    {
        emojis: "💿🕺🩰🚗🌃",
        answer: "Saturday Night Fever",
        hints: ["Drama", "1970s New York", "Defined a generation of dancing"],
    },
    {
        emojis: "🌋☁️🧙🧝‍♀️🗡️",
        answer: "The Lord of the Rings",
        hints: ["Fantasy epic", "Three-film saga", "A ring must be destroyed"],
    },
    {
        emojis: "🔦🌲🗺️😰🎒",
        answer: "The Blair Witch Project",
        hints: ["Horror film", "Late 1990s", "Shot to look like found footage"],
    },
    {
        emojis: "🧤⛸️📺📰😤",
        answer: "I, Tonya",
        hints: ["Biographical drama", "True story", "Involves an attack on a competitor"],
    },
    {
        emojis: "🪆🎻🏰❄️👑",
        answer: "Anastasia",
        hints: ["Animated musical", "Based on historical mystery", "Russian royalty"],
    },
    {
        emojis: "🎂🕯️🏠👻😂",
        answer: "Beetlejuice",
        hints: ["Comedy horror", "1980s", "A ghost who causes chaos"],
    },
    {
        emojis: "🧦👞🍫🏃‍♂️🌿",
        answer: "Forrest Gump",
        hints: ["Drama", "Spans decades of American history", "Narrated from a bench"],
    },

    // ── MEDIUM ──

    {
        emojis: "📷🪟🧑‍🦽🌃🔍",
        answer: "Rear Window",
        hints: ["Thriller", "Almost entirely one location", "Directed by Hitchcock"],
    },
    {
        emojis: "🛁🔪🚿🔑🏚️",
        answer: "Psycho",
        hints: ["Horror thriller", "1960s", "A motel with a disturbing owner"],
    },
    {
        emojis: "🌊🏄‍♂️💵🎭🔫",
        answer: "Point Break",
        hints: ["Action thriller", "Undercover FBI agent", "Bank robbers with a twist"],
    },
    {
        emojis: "🐚🌅🎠🧘‍♀️🕊️",
        answer: "Amélie",
        hints: ["Romantic comedy", "French language film", "A shy woman meddles in others' lives"],
    },
    {
        emojis: "🃏🎲🥃🌃🔫",
        answer: "Casino",
        hints: ["Crime drama", "Las Vegas setting", "Scorsese directed"],
    },
    {
        emojis: "📦❓🌧️🔦😶",
        answer: "Se7en",
        hints: ["Crime thriller", "Rainy unnamed city", "Seven deadly sins"],
    },
    {
        emojis: "🕰️🔄📸💊🌀",
        answer: "Memento",
        hints: ["Neo-noir thriller", "Story told in reverse", "The protagonist can't form new memories"],
    },
    {
        emojis: "🌿🤰🏙️🏢😈",
        answer: "Rosemary's Baby",
        hints: ["Psychological horror", "New York apartment setting", "Roman Polanski directed"],
    },
    {
        emojis: "🎻😤🏛️🇦🇹🕯️",
        answer: "Amadeus",
        hints: ["Period drama", "18th century Vienna", "A rivalry between composers"],
    },
    {
        emojis: "🚂💣⏱️🌾🪖",
        answer: "The Bridge on the River Kwai",
        hints: ["War film", "World War II", "POW camp engineering"],
    },
    {
        emojis: "🏔️🌀🚁🎶🔥",
        answer: "Apocalypse Now",
        hints: ["War epic", "Vietnam War", "Based loosely on a Conrad novel"],
    },
    {
        emojis: "🎳🥛🕶️🏠💸",
        answer: "The Big Lebowski",
        hints: ["Crime comedy", "Los Angeles setting", "A case of mistaken identity"],
    },
    {
        emojis: "🦋📼🌀😵🧠",
        answer: "Eternal Sunshine of the Spotless Mind",
        hints: ["Sci-fi romance", "Memory erasure technology", "Michel Gondry directed"],
    },
    {
        emojis: "🌻🌾🇩🇰🍴🕯️",
        answer: "Babette's Feast",
        hints: ["Drama", "Danish language film", "A lavish meal changes a community"],
    },
    {
        emojis: "🤖🪟💡🔒🌲",
        answer: "Ex Machina",
        hints: ["Sci-fi thriller", "Isolated location", "A Turing test with consequences"],
    },
    {
        emojis: "🎤📺🤘🎸📏",
        answer: "This Is Spinal Tap",
        hints: ["Comedy", "Mockumentary format", "A fictional rock band on tour"],
    },
    {
        emojis: "🧬🌿🏃‍♀️🔦🐻",
        answer: "Annihilation",
        hints: ["Sci-fi horror", "A team enters an anomalous zone", "Natalie Portman leads"],
    },
    {
        emojis: "🐄🌵🔫💼🪙",
        answer: "No Country for Old Men",
        hints: ["Neo-western thriller", "Texas setting", "Coen Brothers directed"],
    },
    {
        emojis: "🚬🌂🐀👮🏙️",
        answer: "The Departed",
        hints: ["Crime thriller", "Boston setting", "Moles on both sides of the law"],
    },
    {
        emojis: "🏹🌽🔥🎺🏟️",
        answer: "The Hunger Games",
        hints: ["Dystopian action", "Young adult adaptation", "Annual televised death match"],
    },

    // ── HARD ──

    {
        emojis: "🌅🎥🔁🏖️🎭",
        answer: "The Truman Show",
        hints: ["Satirical drama", "1990s", "A man who doesn't know he's on TV"],
    },
    {
        emojis: "🎬🌴💄🛣️🔵",
        answer: "Mulholland Drive",
        hints: ["Surrealist neo-noir", "Hollywood setting", "David Lynch directed"],
    },
    {
        emojis: "🌙🕵️‍♂️🐟🏜️🤫",
        answer: "Chinatown",
        hints: ["Neo-noir mystery", "1930s Los Angeles", "Water rights conspiracy"],
    },
    {
        emojis: "🌸🌄🕺🌞🪓",
        answer: "Midsommar",
        hints: ["Folk horror", "Set in Sweden", "A grieving woman joins a summer festival"],
    },
    {
        emojis: "🐐🌲🧺🕯️🐍",
        answer: "The Witch",
        hints: ["Period horror", "Puritan New England", "A family exiled to the forest"],
    },
    {
        emojis: "📸🏔️🧗🎿😱",
        answer: "The Thing",
        hints: ["Sci-fi horror", "Antarctic research station", "John Carpenter directed"],
    },
    {
        emojis: "🏫💊🌵🐕🚁",
        answer: "Sicario",
        hints: ["Crime thriller", "US-Mexico border", "A FBI agent joins a shadowy task force"],
    },
    {
        emojis: "🎩🩸🥧✂️🎶",
        answer: "Sweeney Todd",
        hints: ["Musical horror", "Victorian London", "A barber with a vendetta"],
    },
    {
        emojis: "🌾👦🚲🌙🙏",
        answer: "Children of Heaven",
        hints: ["Drama", "Iranian language film", "Two siblings share one pair of shoes"],
    },
    {
        emojis: "🍓🚗👴🌅🕊️",
        answer: "Wild Strawberries",
        hints: ["Drama", "Swedish language film", "An elderly professor reflects on his life"],
    },
    {
        emojis: "🪞👯‍♀️✂️🩰🖤",
        answer: "Black Swan",
        hints: ["Psychological thriller", "Ballet world", "Perfection becomes obsession"],
    },
    {
        emojis: "⌚🌀💥🪖🔁",
        answer: "Edge of Tomorrow",
        hints: ["Sci-fi action", "Alien invasion", "The protagonist relives the same battle"],
    },
    {
        emojis: "🌃🗼💼🧨👔",
        answer: "Heat",
        hints: ["Crime thriller", "Los Angeles", "A detective and a thief mirror each other"],
    },
    {
        emojis: "🎭😷👁️🪑🔔",
        answer: "Hereditary",
        hints: ["Supernatural horror", "A grieving family unravels", "Ari Aster directed"],
    },
    {
        emojis: "🐇🎩✂️🌾🪞",
        answer: "Us",
        hints: ["Horror thriller", "Doppelgangers", "Jordan Peele directed"],
    },
];