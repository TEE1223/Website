const characterCatalog = [
  { name: "Harry Potter", world: "Wizarding World", role: "The chosen wizard", emoji: "🪄", category: ["fantasy"], title: "Harry Potter", wiki: "https://harrypotter.fandom.com/wiki/Harry_Potter" },
  { name: "Momo (Avatar)", world: "Avatar: The Last Airbender", role: "A flying lemur & loyal companion", emoji: "🐒", category: ["fantasy"], title: "Momo", wiki: "https://avatar.fandom.com/wiki/Momo", communication: "chirps" },
  { name: "Hermione Granger", world: "Wizarding World", role: "The brightest witch", emoji: "📚", category: ["fantasy"], title: "Hermione Granger", wiki: "https://harrypotter.fandom.com/wiki/Hermione_Granger" },
  { name: "Dumbledore", world: "Wizarding World", role: "Headmaster & wise wizard", emoji: "🧙🏻‍♂️", category: ["fantasy"], title: "Albus Dumbledore", wiki: "https://harrypotter.fandom.com/wiki/Albus_Dumbledore" },
  { name: "Frodo Baggins", world: "Middle-earth", role: "Ring-bearer on a big walk", emoji: "🧝", category: ["fantasy"], title: "Frodo Baggins", wiki: "https://lotr.fandom.com/wiki/Frodo_Baggins" },
  { name: "Gandalf", world: "Middle-earth", role: "Wizard & punctual-ish guide", emoji: "🧙🏻", category: ["fantasy"], title: "Gandalf", wiki: "https://lotr.fandom.com/wiki/Gandalf" },
  { name: "Legolas", world: "Middle-earth", role: "Elf with an excellent aim", emoji: "🏹", category: ["fantasy"], title: "Legolas", wiki: "https://lotr.fandom.com/wiki/Legolas" },
  { name: "Aragorn", world: "Middle-earth", role: "Ranger & rightful king", emoji: "👑", category: ["fantasy"], title: "Aragorn", wiki: "https://lotr.fandom.com/wiki/Aragorn_II_Elessar" },
  { name: "Daenerys Targaryen", world: "Westeros", role: "Queen with dragon energy", emoji: "🐉", category: ["fantasy"], title: "Daenerys Targaryen", wiki: "https://awoiaf.westeros.org/index.php/Daenerys_Targaryen" },
  { name: "Jon Snow", world: "Westeros", role: "Knows a thing or two", emoji: "🐺", category: ["fantasy"], title: "Jon Snow (character)", wiki: "https://awoiaf.westeros.org/index.php/Jon_Snow" },
  { name: "Wednesday Addams", world: "The Addams Family", role: "Never met a sunny day", emoji: "🕷️", category: ["fantasy"], title: "Wednesday Addams", wiki: "https://addamsfamily.fandom.com/wiki/Wednesday_Addams" },
  { name: "Geralt of Rivia", world: "The Witcher", role: "Monster hunter for hire", emoji: "⚔️", category: ["fantasy"], title: "Geralt of Rivia", wiki: "https://witcher.fandom.com/wiki/Geralt_of_Rivia" },
  { name: "Yennefer", world: "The Witcher", role: "Sorceress with a plan", emoji: "🔮", category: ["fantasy"], title: "Yennefer of Vengerberg", wiki: "https://witcher.fandom.com/wiki/Yennefer_of_Vengerberg" },
  { name: "Sherlock Holmes", world: "221B Baker Street", role: "World's most observant detective", emoji: "🕵️", category: ["fantasy"], title: "Sherlock Holmes", wiki: "https://en.wikipedia.org/wiki/Sherlock_Holmes" },
  { name: "Alice", world: "Wonderland", role: "Curiosity led her here", emoji: "🐇", category: ["fantasy"], title: "Alice (Alice's Adventures in Wonderland)", wiki: "https://en.wikipedia.org/wiki/Alice_(Alice%27s_Adventures_in_Wonderland)" },
  { name: "Bilbo Baggins", world: "Middle-earth", role: "Unexpected adventurer", emoji: "💍", category: ["fantasy"], title: "Bilbo Baggins", wiki: "https://lotr.fandom.com/wiki/Bilbo_Baggins" },
  { name: "Katniss Everdeen", world: "Panem", role: "The girl on fire", emoji: "🏹", category: ["fantasy"], title: "Katniss Everdeen", wiki: "https://thehungergames.fandom.com/wiki/Katniss_Everdeen" },
  { name: "Percy Jackson", world: "Camp Half-Blood", role: "Demigod with sea legs", emoji: "🔱", category: ["fantasy"], title: "Percy Jackson", wiki: "https://riordan.fandom.com/wiki/Percy_Jackson" },
  { name: "Shera", world: "Etheria", role: "Princess of power", emoji: "✨", category: ["fantasy"], title: "She-Ra", wiki: "https://she-raandtheprincessesofpower.fandom.com/wiki/She-Ra" },
  { name: "Spider-Man", world: "Marvel", role: "Friendly neighborhood hero", emoji: "🕸️", category: ["comics"], title: "Spider-Man", wiki: "https://marvel.fandom.com/wiki/Peter_Parker_(Earth-616)" },
  { name: "Iron Man", world: "Marvel", role: "Genius in a metal suit", emoji: "🤖", category: ["comics"], title: "Iron Man", wiki: "https://marvel.fandom.com/wiki/Anthony_Stark_(Earth-616)" },
  { name: "Black Panther", world: "Marvel", role: "King & guardian of Wakanda", emoji: "🐈‍⬛", category: ["comics"], title: "Black Panther", wiki: "https://marvel.fandom.com/wiki/T%27Challa_(Earth-616)" },
  { name: "Captain America", world: "Marvel", role: "Super-soldier & shield expert", emoji: "🛡️", category: ["comics"], title: "Captain America", wiki: "https://marvel.fandom.com/wiki/Steven_Rogers_(Earth-616)" },
  { name: "Thor", world: "Marvel", role: "God of thunder", emoji: "⚡", category: ["comics"], title: "Thor", wiki: "https://marvel.fandom.com/wiki/Thor_Odinson_(Earth-616)" },
  { name: "Loki", world: "Marvel", role: "God of mischief", emoji: "🐍", category: ["comics"], title: "Loki", wiki: "https://marvel.fandom.com/wiki/Loki_Laufeyson_(Earth-616)" },
  { name: "Wolverine", world: "Marvel", role: "Small talk isn't his thing", emoji: "🐺", category: ["comics"], title: "Wolverine", wiki: "https://marvel.fandom.com/wiki/James_Howlett_(Earth-616)" },
  { name: "Deadpool", world: "Marvel", role: "This guy knows it's a story", emoji: "🔴", category: ["comics"], title: "Deadpool", wiki: "https://marvel.fandom.com/wiki/Wade_Wilson_(Earth-616)" },
  { name: "Storm", world: "Marvel", role: "Weather control, no umbrella", emoji: "🌩️", category: ["comics"], title: "Storm (Marvel Comics)", wiki: "https://marvel.fandom.com/wiki/Ororo_Munroe_(Earth-616)" },
  { name: "Batman", world: "DC", role: "Gotham's nighttime detective", emoji: "🦇", category: ["comics"], title: "Batman", wiki: "https://dc.fandom.com/wiki/Bruce_Wayne_(Prime_Earth)" },
  { name: "Wonder Woman", world: "DC", role: "Amazon warrior & diplomat", emoji: "⚔️", category: ["comics"], title: "Wonder Woman", wiki: "https://dc.fandom.com/wiki/Diana_of_Themyscira_(Prime_Earth)" },
  { name: "Superman", world: "DC", role: "The Man of Steel", emoji: "🦸", category: ["comics"], title: "Superman", wiki: "https://dc.fandom.com/wiki/Kal-El_(Prime_Earth)" },
  { name: "Harley Quinn", world: "DC", role: "Gotham's most chaotic clown", emoji: "🃏", category: ["comics"], title: "Harley Quinn", wiki: "https://dc.fandom.com/wiki/Harley_Quinn_(Prime_Earth)" },
  { name: "The Joker", world: "DC", role: "Agent of chaos", emoji: "🤡", category: ["comics"], title: "Joker", wiki: "https://dc.fandom.com/wiki/Joker_(Prime_Earth)" },
  { name: "The Flash", world: "DC", role: "Fastest person in the room", emoji: "💨", category: ["comics"], title: "Flash", wiki: "https://dc.fandom.com/wiki/Barry_Allen_(Prime_Earth)" },
  { name: "Shrek", world: "Far Far Away", role: "Ogre with layers", emoji: "🧅", category: ["fantasy"], title: "Shrek", wiki: "https://shrek.fandom.com/wiki/Shrek_(character)" },
  { name: "Darth Vader", world: "Star Wars", role: "Sith Lord & dad", emoji: "🌑", category: ["scifi"], title: "Darth Vader", wiki: "https://starwars.fandom.com/wiki/Anakin_Skywalker" },
  { name: "Luke Skywalker", world: "Star Wars", role: "Farm kid turned Jedi", emoji: "✨", category: ["scifi"], title: "Luke Skywalker", wiki: "https://starwars.fandom.com/wiki/Luke_Skywalker" },
  { name: "Neo", world: "The Matrix", role: "The One who bends the rules of reality", emoji: "🕶️", category: ["scifi"], title: "Neo (The Matrix)", wiki: "https://en.wikipedia.org/wiki/Neo_(The_Matrix)" },
  { name: "Grogu", world: "Star Wars", role: "Tiny Jedi, huge appetite", emoji: "👽", category: ["scifi"], title: "Grogu", wiki: "https://starwars.fandom.com/wiki/Grogu" },
  { name: "Din Djarin", world: "Star Wars", role: "A dad with a beskar helmet", emoji: "🛡️", category: ["scifi"], title: "Din Djarin", wiki: "https://starwars.fandom.com/wiki/Din_Djarin" },
  { name: "Yoda", world: "Star Wars", role: "Small size, big wisdom", emoji: "🧘", category: ["scifi"], title: "Yoda", wiki: "https://starwars.fandom.com/wiki/Yoda" },
  { name: "Trevor Philips", world: "Grand Theft Auto V", role: "Unpredictable outlaw & heist partner", emoji: "🧨", category: ["games"], title: "Trevor Philips", wiki: "https://gta.fandom.com/wiki/Trevor_Philips" },
  { name: "Link", world: "Hyrule", role: "A quiet hero who speaks through action", emoji: "🗡️", category: ["games"], title: "Link", wiki: "https://zelda.fandom.com/wiki/Link", communication: "gestures" },
  { name: "Mario", world: "Mushroom Kingdom", role: "Plumber, racer, all-rounder", emoji: "🍄", category: ["games"], title: "Mario", wiki: "https://www.mariowiki.com/Mario" },
  { name: "Luigi", world: "Mushroom Kingdom", role: "Brave-ish ghost hunter", emoji: "👻", category: ["games"], title: "Luigi", wiki: "https://www.mariowiki.com/Luigi" },
  { name: "Princess Peach", world: "Mushroom Kingdom", role: "The princess who takes charge", emoji: "🍑", category: ["games"], title: "Princess Peach", wiki: "https://www.mariowiki.com/Princess_Peach" },
  { name: "Sonic the Hedgehog", world: "Sonic the Hedgehog", role: "Fastest blue blur around", emoji: "💨", category: ["games"], title: "Sonic the Hedgehog", wiki: "https://sonic.fandom.com/wiki/Sonic_the_Hedgehog" },
  { name: "Pikachu", world: "Pokémon", role: "Tiny lightning powerhouse", emoji: "⚡", category: ["games"], title: "Pikachu", wiki: "https://bulbapedia.bulbagarden.net/wiki/Pikachu_(Pok%C3%A9mon)" },
  { name: "Lara Croft", world: "Tomb Raider", role: "Archaeologist & adventurer", emoji: "🧭", category: ["games"], title: "Lara Croft", wiki: "https://tombraider.fandom.com/wiki/Lara_Croft" },
  { name: "Master Chief", world: "Halo", role: "The galaxy's armored savior", emoji: "🪖", category: ["games", "scifi"], title: "Master Chief", wiki: "https://halo.fandom.com/wiki/John-117" },
  { name: "Kratos", world: "God of War", role: "God who needs a vacation", emoji: "🪓", category: ["games"], title: "Kratos", wiki: "https://godofwar.fandom.com/wiki/Kratos" },
  { name: "Kirby", world: "Dream Land", role: "Pink puff with a big appetite", emoji: "🌸", category: ["games"], title: "Kirby", wiki: "https://kirby.fandom.com/wiki/Kirby" },
  { name: "Steve", world: "Minecraft", role: "Block builder & diamond digger", emoji: "⛏️", category: ["games"], title: "Steve (Minecraft)", wiki: "https://minecraft.wiki/w/Steve" },
  { name: "Pac-Man", world: "Pac-Man", role: "Professional snack enthusiast", emoji: "🟡", category: ["games"], title: "Pac-Man", wiki: "https://pacman.fandom.com/wiki/Pac-Man" },
  { name: "Ellie", world: "The Last of Us", role: "Survivor with a sharp wit", emoji: "🍃", category: ["games"], title: "Ellie (The Last of Us)", wiki: "https://thelastofus.fandom.com/wiki/Ellie_Williams" },
  { name: "Joel Miller", world: "The Last of Us", role: "A hardened survivor and smuggler", emoji: "🧭", category: ["games"], title: "Joel Miller", wiki: "https://thelastofus.fandom.com/wiki/Joel_Miller" },
  { name: "The Dark Urge", world: "Baldur's Gate 3", role: "A Bhaalspawn resisting a murderous urge", emoji: "🗡️", category: ["games"], title: "The Dark Urge", wiki: "https://bg3.wiki/wiki/The_Dark_Urge", imageUrl: "https://bg3.wiki/w/images/b/b9/Dark_Urge_Headshot.webp" },
  { name: "Aloy", world: "Horizon", role: "Machine-hunting trailblazer", emoji: "🏹", category: ["games", "scifi"], title: "Aloy", wiki: "https://horizon.fandom.com/wiki/Aloy" },
  { name: "Arthur Morgan", world: "Red Dead Redemption", role: "Outlaw with a complicated heart", emoji: "🤠", category: ["games"], title: "Arthur Morgan", wiki: "https://reddead.fandom.com/wiki/Arthur_Morgan" },
  { name: "Cortana", world: "Halo", role: "The galaxy's cleverest AI", emoji: "💠", category: ["games", "scifi"], title: "Cortana", wiki: "https://halo.fandom.com/wiki/Cortana" },
  { name: "Samus Aran", world: "Metroid", role: "Bounty hunter in power armor", emoji: "🚀", category: ["games", "scifi"], title: "Samus Aran", wiki: "https://metroid.fandom.com/wiki/Samus_Aran" },
  { name: "Ellen Ripley", world: "Alien", role: "The ultimate space survivor", emoji: "🚀", category: ["scifi"], title: "Ellen Ripley", wiki: "https://avp.fandom.com/wiki/Ellen_Ripley" },
  { name: "Spock", world: "Star Trek", role: "Logic first, feelings later", emoji: "🖖", category: ["scifi"], title: "Spock", wiki: "https://memory-alpha.fandom.com/wiki/Spock" },
  { name: "The Doctor", world: "Doctor Who", role: "Time traveler with a blue box", emoji: "⌛", category: ["scifi"], title: "The Doctor", wiki: "https://tardis.fandom.com/wiki/The_Doctor" },
  { name: "E.T.", world: "E.T. the Extra-Terrestrial", role: "Homesick visitor from space", emoji: "👽", category: ["scifi"], title: "E.T. the Extra-Terrestrial", wiki: "https://en.wikipedia.org/wiki/E.T._the_Extra-Terrestrial" },
  { name: "Wall-E", world: "Pixar", role: "Little robot, big heart", emoji: "🤖", category: ["scifi"], title: "WALL-E", wiki: "https://pixar.fandom.com/wiki/WALL-E", communication: "beeps" },
  { name: "Optimus Prime", world: "Transformers", role: "Leader of the Autobots", emoji: "🚛", category: ["scifi"], title: "Optimus Prime", wiki: "https://tfwiki.net/wiki/Optimus_Prime_(G1)" },
  { name: "Eleven", world: "Stranger Things", role: "Telekinetic waffle fan", emoji: "🧇", category: ["scifi"], title: "Eleven (Stranger Things)", wiki: "https://strangerthings.fandom.com/wiki/Eleven" },
  { name: "Demogorgon", world: "Stranger Things", role: "Predator from the Upside Down", emoji: "👹", category: ["scifi"], title: "Demogorgon", wiki: "https://strangerthings.fandom.com/wiki/Demogorgon", communication: "growls" },
  { name: "The Mandalorian", world: "Star Wars", role: "A helmet, a ship, and a kid", emoji: "🪐", category: ["scifi"], title: "The Mandalorian", wiki: "https://starwars.fandom.com/wiki/Din_Djarin" }
];

const featuredCharacterNames = new Set([
  "Harry Potter", "Momo (Avatar)", "Jon Snow", "Gandalf", "Percy Jackson", "Geralt of Rivia",
  "Spider-Man", "Iron Man", "Thor", "Loki", "Batman", "Deadpool",
  "Darth Vader", "Neo", "Yoda", "Spock", "Wall-E", "Demogorgon",
  "Trevor Philips", "Link", "Mario", "Joel Miller", "The Dark Urge", "Kratos"
]);
const characters = characterCatalog.filter(({ name }) => featuredCharacterNames.has(name));

const stories = {
  battle: [
    {
      icon: "⚡",
      title: "THE SHOWDOWN",
      description: (first, second) => `${first.name} and ${second.name} test each other's defenses. The referee points to the rules; both pause to inspect them, then resume before the whistle.`,
      dialogue: (first, second) => [[first.name, "Are we keeping score?"], [second.name, "Let's find out."]]
    },
    {
      icon: "💥",
      title: "THE SHOWDOWN",
      description: (first, second) => `${first.name} uses a move from ${first.world}; ${second.name} answers with one from ${second.world}. The referee calls it a draw, unable to decide how either move should score.`,
      dialogue: (first, second) => [[first.name, "That was clearly a point."], [second.name, "You can't award yourself points."]]
    },
    {
      icon: "🛡️",
      title: "THE SHOWDOWN",
      description: (first, second) => `${first.name} and ${second.name} trade moves until the scoreboard freezes. The referee replaces it with a handwritten version; both inspect it closely.`,
      dialogue: (first, second) => [[first.name, "It says I won."], [second.name, "You wrote that on there."]]
    },
    {
      icon: "🥊",
      title: "THE SHOWDOWN",
      description: (first, second) => `${first.name} and ${second.name} take their places. The announcer gets both introductions wrong. One points to the name card; the other holds up the correct one. The correction takes longer than the match.`,
      dialogue: (first, second) => [[first.name, "You left out the important part."], [second.name, "There are several important parts."]]
    }
  ],
  hangout: [
    {
      icon: "☕",
      title: "THE HANGOUT",
      description: (first, second) => `${first.name} and ${second.name} spread maps from ${first.world} and ${second.world} across the table. Both maps have more urgent marks than tourist attractions.`,
      dialogue: (first, second) => [[first.name, "Does it ever stop?"], [second.name, "Not in my experience."]]
    },
    {
      icon: "🍕",
      title: "THE HANGOUT",
      description: (first, second) => `${first.name} and ${second.name} each choose a snack from their own world. A plate gets nudged across the table; neither asks what is in the sauce.`,
      dialogue: (first, second) => [[first.name, "What did you order?"], [second.name, "I'm not entirely sure."]]
    },
    {
      icon: "🎮",
      title: "THE HANGOUT",
      description: (first, second) => `${first.name} and ${second.name} start a board game. One studies the rulebook; the other has already moved a piece. The café is closing before anyone agrees on whose turn it is.`,
      dialogue: (first, second) => [[first.name, "It says the game takes twenty minutes."], [second.name, "That estimate seems optimistic."]]
    },
    {
      icon: "🧋",
      title: "THE HANGOUT",
      description: (first, second) => `${first.name} lays out a travel map from ${first.world}; ${second.name} adds one from ${second.world}. The route is different, but both maps have the same number of emergency detours.`,
      dialogue: (first, second) => [[first.name, "Does it ever get easier?"], [second.name, "You do get better at packing."]]
    }
  ]
};

const characterTraitCatalog = {
  "Harry Potter": ["magic", "warrior"],
  "Momo (Avatar)": ["tiny", "curious"],
  "Trevor Philips": ["trickster", "warrior"],
  "Hermione Granger": ["magic", "scientist"],
  Dumbledore: ["magic", "royalty"],
  "Frodo Baggins": ["tiny", "warrior"],
  Gandalf: ["magic", "warrior"],
  Legolas: ["archer", "warrior"],
  Aragorn: ["royalty", "warrior"],
  "Daenerys Targaryen": ["royalty", "magic"],
  "Jon Snow": ["warrior", "commander"],
  "Wednesday Addams": ["detective", "trickster"],
  "Geralt of Rivia": ["monsterHunter", "warrior"],
  Yennefer: ["magic", "royalty"],
  "Sherlock Holmes": ["detective", "scientist"],
  Alice: ["curious"],
  "Bilbo Baggins": ["tiny", "foodie"],
  "Katniss Everdeen": ["archer", "warrior"],
  "Percy Jackson": ["warrior", "magic"],
  Shera: ["royalty", "warrior"],
  "Spider-Man": ["warrior", "trickster"],
  "Iron Man": ["tech", "scientist"],
  "Black Panther": ["warrior", "royalty", "tech"],
  "Captain America": ["warrior", "commander"],
  Thor: ["warrior", "royalty", "magic"],
  Loki: ["trickster", "magic"],
  Wolverine: ["warrior"],
  Deadpool: ["trickster", "warrior"],
  Storm: ["magic", "royalty"],
  Batman: ["detective", "tech", "warrior"],
  "Wonder Woman": ["warrior", "royalty"],
  Superman: ["warrior", "commander"],
  "Harley Quinn": ["trickster"],
  "The Joker": ["trickster"],
  "The Flash": ["speedster", "trickster"],
  Shrek: ["foodie", "warrior"],
  "Darth Vader": ["tech", "warrior", "commander"],
  "Luke Skywalker": ["magic", "warrior"],
  "Princess Leia": ["royalty", "commander"],
  Grogu: ["tiny", "magic", "foodie"],
  "Din Djarin": ["warrior", "tech", "commander"],
  Yoda: ["tiny", "magic"],
  "Princess Zelda": ["royalty", "magic"],
  Link: ["warrior", "curious"],
  Mario: ["warrior", "foodie"],
  Luigi: ["trickster"],
  "Princess Peach": ["royalty"],
  "Sonic the Hedgehog": ["speedster", "trickster"],
  Pikachu: ["tiny", "speedster"],
  "Lara Croft": ["archer", "detective", "warrior"],
  "Master Chief": ["tech", "warrior", "commander"],
  Kratos: ["warrior"],
  Kirby: ["tiny", "foodie"],
  Steve: ["tech", "scientist"],
  "Pac-Man": ["foodie", "speedster"],
  Ellie: ["warrior", "trickster"],
  Aloy: ["archer", "tech", "warrior"],
  "Arthur Morgan": ["warrior"],
  Cortana: ["tech", "scientist"],
  "Samus Aran": ["tech", "warrior"],
  "Ellen Ripley": ["warrior", "commander"],
  Spock: ["scientist", "commander"],
  "The Doctor": ["scientist", "trickster"],
  "E.T.": ["tiny", "scientist"],
  "Wall-E": ["robot", "tech"],
  Demogorgon: ["warrior"],
  "Joel Miller": ["warrior", "survivor"],
  "The Dark Urge": ["warrior", "magic"],
  "Optimus Prime": ["robot", "warrior", "commander"],
  Eleven: ["magic", "warrior"],
  "The Mandalorian": ["warrior", "tech", "commander"]
};

const characterTraits = Object.fromEntries(
  [...featuredCharacterNames].map((name) => [name, characterTraitCatalog[name]])
);

const pairStories = [
  {
    scene: "battle", traits: ["magic", "tech"], icon: "🪄", title: "MAGIC VS. TECHNOLOGY",
    description: (first, second) => `${first.name} uses magic; ${second.name} runs a scan. The result is inconclusive. Both lower their guard before the referee has to call another timeout.`,
    dialogue: (first, second) => [[second.name, "I can't get a reliable reading."], [first.name, "Good. I don't know what it means."]]
  },
  {
    scene: "battle", traits: ["detective", "trickster"], icon: "🕵️", title: "A DISTRACTION",
    description: (first, second) => `${second.name} tries to distract ${first.name}. It works for exactly three seconds. ${first.name} notices the missing trophy; ${second.name} notices that nobody was guarding it.`,
    dialogue: (first, second) => [[first.name, "You took the trophy."], [second.name, "You left it unattended."]]
  },
  {
    scene: "battle", traits: ["speedster", "archer"], icon: "🏹", title: "A MOVING TARGET",
    description: (first, second) => `${first.name} moves faster than ${second.name} can aim. ${second.name} waits for a clear shot; eventually ${first.name} doubles back and stops at the starting line.`,
    dialogue: (first, second) => [[first.name, "You could have taken the shot."], [second.name, "I wanted a clear one."]]
  },
  {
    scene: "battle", traits: ["foodie", "warrior"], icon: "🍕", title: "THE PRIZE",
    description: (first, second) => `${first.name} and ${second.name} face off for the last slice of pizza. Both keep glancing at the prize instead of each other.`,
    dialogue: (first, second) => [[first.name, "You can have it."], [second.name, "I know. That's the problem."]]
  },
  {
    scene: "battle", traits: ["royalty", "trickster"], icon: "👑", title: "A FORMAL CHALLENGE",
    description: (first, second) => `${second.name} steps into a duel, then tries to change the rules mid-match. ${first.name} points to the signed entry form. The challenge is withdrawn.`,
    dialogue: (first, second) => [[first.name, "You signed it."], [second.name, "I was signing the guest book."]]
  },
  {
    scene: "battle", traits: ["monsterHunter", "robot"], icon: "🤖", title: "CLASSIFICATION ERROR",
    description: (first, second) => `${first.name} checks the contract. ${second.name} is not listed as a monster, machine, or eligible target. The fight pauses while they decide which department to call.`,
    dialogue: (first, second) => [[first.name, "You're not on my list."], [second.name, "Good. I dislike paperwork."]]
  },
  {
    scene: "battle", traits: ["warrior", "scientist"], icon: "🔬", title: "CONTROLLED CONDITIONS",
    description: (first, second) => `${first.name} prepares to charge. ${second.name} puts a clipboard between them and marks out a test area. The first round is spent moving the boundary lines.`,
    dialogue: (first, second) => [[first.name, "Is this a fight or a study?"], [second.name, "The distinction is important."]]
  },
  {
    scene: "battle", traits: ["speedster", "trickster"], icon: "💨", title: "THE SHORTCUT",
    description: (first, second) => `${first.name} sprints ahead. ${second.name} quietly moves the finish line. The judges spend an hour reviewing the footage; ${first.name} waits nearby, confident the result will be appealed.`,
    dialogue: (first, second) => [[first.name, "You moved the line."], [second.name, "Can you prove that?"]]
  },
  {
    scene: "battle", traits: ["archer", "detective"], icon: "🏹", title: "THE EVIDENCE",
    description: (first, second) => `${first.name} hits the target. ${second.name} checks the angle and distance, then lays out the evidence. The target remains unconvinced.`,
    dialogue: (first, second) => [[second.name, "The angle was correct."], [first.name, "It was a target, not a mystery."]]
  },
  {
    scene: "battle", traits: ["magic", "warrior"], icon: "⚔️", title: "A SMALL ENCHANTMENT",
    description: (first, second) => `${first.name} adds a spell to the duel. ${second.name} pauses to check the rulebook. It does not change the rules, but now both weapons glow and the referee needs sunglasses.`,
    dialogue: (first, second) => [[first.name, "Does the spell count as a move?"], [second.name, "It counts as a distraction."]]
  },
  {
    scene: "battle", traits: ["foodie", "foodie"], icon: "🍰", title: "THE LAST PASTRY",
    description: (first, second) => `${first.name} and ${second.name} reach for the last pastry at the same time. Each pushes it toward the other; the waiter removes it before either can change their mind.`,
    dialogue: (first, second) => [[first.name, "You go ahead."], [second.name, "No, you."]]
  },
  {
    scene: "hangout", traits: ["magic", "tech"], icon: "🪄", title: "MAGIC MEETS TECH SUPPORT",
    description: (first, second) => `${first.name} demonstrates a spell. ${second.name} looks for a manual; there isn't one. The spell ends with a small puff of smoke and no further testing.`,
    dialogue: (first, second) => [[second.name, "What happens if it goes wrong?"], [first.name, "We improvise."]]
  },
  {
    scene: "hangout", traits: ["detective", "trickster"], icon: "🧩", title: "A QUESTIONABLE ALIBI",
    description: (first, second) => `${second.name} tells ${first.name} a story that is almost believable. ${first.name} spots the flaw before the coffee arrives. The conversation improves once they stop pretending.`,
    dialogue: (first, second) => [[first.name, "You left out an important detail."], [second.name, "I was waiting to see if you'd notice."]]
  },
  {
    scene: "hangout", traits: ["speedster", "archer"], icon: "🏹", title: "LUNCH BREAK",
    description: (first, second) => `${first.name} offers to get lunch. ${second.name} gives very specific directions. ${first.name} is back before the explanation is finished, with the wrong order.`,
    dialogue: (first, second) => [[first.name, "You said the place across the street."], [second.name, "I said the place across the river."]]
  },
  {
    scene: "hangout", traits: ["foodie", "warrior"], icon: "🍰", title: "THE LAST SLICE",
    description: (first, second) => `${first.name} and ${second.name} share a meal after a long day. They split everything evenly until the last slice arrives. Negotiations become noticeably less friendly.`,
    dialogue: (first, second) => [[first.name, "You said you were full."], [second.name, "I changed my mind."]]
  },
  {
    scene: "hangout", traits: ["royalty", "royalty"], icon: "👑", title: "PROTOCOL",
    description: (first, second) => `${first.name} and ${second.name} meet for tea. They spend the first few minutes trying to establish who outranks whom, then agree to let the waiter decide.`,
    dialogue: (first, second) => [[first.name, "The waiter has left."], [second.name, "A wise decision."]]
  },
  {
    scene: "hangout", traits: ["monsterHunter", "robot"], icon: "🤖", title: "A PROFESSIONAL CONSULTATION",
    description: (first, second) => `${first.name} asks what kind of maintenance ${second.name} needs. ${second.name} asks what kind of monsters ${first.name} usually deals with. Both realize the answer is “it depends.”`,
    dialogue: (first, second) => [[first.name, "That makes the estimate difficult."], [second.name, "I was going to say the same."]]
  },
  {
    scene: "hangout", traits: ["warrior", "scientist"], icon: "🔬", title: "POST-MISSION DEBRIEF",
    description: (first, second) => `${first.name} marks the route they took. ${second.name} traces a safer path on the map that would have saved everyone several hours.`,
    dialogue: (first, second) => [[first.name, "We got there eventually."], [second.name, "I noticed."]]
  },
  {
    scene: "hangout", traits: ["royalty", "trickster"], icon: "👑", title: "A DIPLOMATIC DINNER",
    description: (first, second) => `${first.name} invites ${second.name} to a formal dinner. ${second.name} ignores the seating plan and sits beside the kitchen door. It turns out to be the only quiet table.`,
    dialogue: (first, second) => [[first.name, "That seat wasn't assigned."], [second.name, "That's why it's good."]]
  },
  {
    scene: "hangout", traits: ["robot", "foodie"], icon: "🍪", title: "A PRACTICAL QUESTION",
    description: (first, second) => `${first.name} asks ${second.name} to recommend a snack. ${second.name} requests more information about portion size, nutritional value, and urgency. ${first.name} points to the empty plate.`,
    dialogue: (first, second) => [[first.name, "The evidence is right there."], [second.name, "I was hoping for a second opinion."]]
  },
  {
    scene: "hangout", traits: ["detective", "detective"], icon: "🔎", title: "A SMALL MYSTERY",
    description: (first, second) => `${first.name} and ${second.name} spend lunch comparing methods. They solve the café's missing-menu mystery in under a minute, then disagree about who noticed it first.`,
    dialogue: (first, second) => [[first.name, "I saw it behind the counter."], [second.name, "After I pointed it out."]]
  },
  {
    scene: "hangout", traits: ["speedster", "trickster"], icon: "💨", title: "A QUICK ERRAND",
    description: (first, second) => `${first.name} goes to get coffee. ${second.name} adds one last item to the order just as they leave. They return quickly; the order is still wrong.`,
    dialogue: (first, second) => [[first.name, "You changed it while I was gone."], [second.name, "I thought you'd be back sooner."]]
  },
  {
    scene: "hangout", traits: ["scientist", "scientist"], icon: "🧪", title: "A SIMPLE QUESTION",
    description: (first, second) => `${first.name} and ${second.name} try to settle a straightforward question over lunch. They settle on a method, keep adding to the sample, and leave without an answer.`,
    dialogue: (first, second) => [[first.name, "We should run it again."], [second.name, "After lunch."]]
  },
  {
    scene: "hangout", traits: ["foodie", "foodie"], icon: "🍕", title: "LUNCH",
    description: (first, second) => `${first.name} and ${second.name} order lunch. They agree on everything until dessert, when each insists the other chose the larger portion.`,
    dialogue: (first, second) => [[first.name, "You picked the bigger one."], [second.name, "You said you didn't mind."]]
  },
  {
    scene: "hangout", traits: ["magic", "foodie"], icon: "🍲", title: "A USEFUL SPELL",
    description: (first, second) => `${first.name} uses magic to warm the food. ${second.name} asks if the same spell works on leftovers. They spend the rest of the meal planning a much more practical menu.`,
    dialogue: (first, second) => [[first.name, "You could use magic for bigger things."], [second.name, "I am using it for the right thing."]]
  },
  {
    scene: "hangout", traits: ["tiny", "foodie"], icon: "🍪", title: "A REASONABLE SNACK",
    description: (first, second) => `${first.name} and ${second.name} order a snack to share. It disappears quickly. They check the menu again; this time they order two.`,
    dialogue: (first, second) => [[first.name, "That went fast."], [second.name, "We can plan better next time."]]
  }
];

const characterSceneStories = {
  "Momo (Avatar)": {
    battle: {
      icon: "🐒", title: "THE REFEREE'S WHISTLE",
      description: (character, other) => `Momo swoops down and grabs the referee's whistle before the match begins. ${other.name} waits for the start signal while the referee tries to retrieve it.`,
      dialogue: (character, other) => [[character.name, "Found it first."], [other.name, "That wasn't the prize."]]
    },
    hangout: {
      icon: "🍪", title: "TABLE TAX",
      description: (character, other) => `Momo takes the highest seat and samples the snacks on ${other.name}'s plate. By the time the food arrives, ${other.name} has learned to guard their drink instead.`,
      dialogue: (character, other) => [[character.name, "This one is mine."], [other.name, "You already have one."]]
    }
  },
  "Wall-E": {
    battle: {
      icon: "🔩", title: "PRIORITIES",
      description: (character, other) => `WALL-E spots a discarded bolt in the arena and abandons the duel to retrieve it. ${other.name} waits; the referee calls a timeout before WALL-E returns.`,
      dialogue: (character, other) => [[character.name, "Directive unclear."], [other.name, "We can wait."]]
    },
    hangout: {
      icon: "🤖", title: "A TREASURED FIND",
      description: (character, other) => `WALL-E proudly presents ${other.name} with a bent bottle cap from under the table. It is the nicest thing anyone has brought to the café all day.`,
      dialogue: (character, other) => [[character.name, "For you."], [other.name, "I'll keep it."]]
    }
  },
  Link: {
    battle: {
      icon: "🗡️", title: "A SIDE QUEST",
      description: (character, other) => `Link spots a treasure chest beside the arena and pauses the duel to open it. ${other.name} waits through the item animation; the referee adds the detour to the official match time.`,
      dialogue: (character, other) => [[character.name, "A brief gesture toward the chest."], [other.name, "Go ahead."]]
    },
    hangout: {
      icon: "🗺️", title: "THE SHORT ROUTE",
      description: (character, other) => `Link silently traces a route on the café's map. ${other.name} follows the line to a back door, a shortcut, and one clearly marked monster den.`,
      dialogue: (character, other) => [[character.name, "A nod toward the shortcut."], [other.name, "We are not taking that last turn."]]
    }
  },
  Demogorgon: {
    battle: {
      icon: "🌑", title: "THE LIGHTS GO OUT",
      description: (character, other) => `The arena lights fail. The Demogorgon lunges from the dark; ${other.name} gets clear before the referee, already behind a barrier, ends the round.`,
      dialogue: (character, other) => [[character.name, "A low growl."]]
    },
    hangout: {
      icon: "🚪", title: "A VERY SHORT VISIT",
      description: (character, other) => `The café goes quiet when the Demogorgon appears in the doorway. ${other.name} keeps the exit clear and a table between them; the waiter quietly leaves two untouched menus.`,
      dialogue: (character, other) => [[other.name, "I'm going to leave the door open."]]
    }
  }
};

function makeSceneProfile(battleAction, battleLine, hangoutAction, hangoutLine) {
  const fillName = (text, other) => text.replaceAll("{other}", other.name);
  return {
    battle: { action: battleAction, line: battleLine },
    hangout: { action: hangoutAction, line: hangoutLine },
    render(scene, other) {
      return {
        action: fillName(this[scene].action, other),
        line: fillName(this[scene].line, other)
      };
    }
  };
}

const characterSceneProfiles = {
  "Harry Potter": makeSceneProfile(
    "{other} opens with a heavy attack; Harry blocks it with a shield charm.",
    "Protego. Try that again.",
    "Harry tries to charm the café teapot. It pours tea into {other}'s cup, then keeps going until someone takes the wand away.",
    "I may have overdone the charm."
  ),
  "Momo (Avatar)": makeSceneProfile(
    "Momo swoops past {other} and steals the referee's whistle. The match cannot start until he gives it back.",
    "A triumphant chirp.",
    "Momo lands on {other}'s shoulder, then helps himself to the snacks. He leaves the vegetables untouched.",
    "An eager chirp."
  ),
  "Jon Snow": makeSceneProfile(
    "Jon keeps Longclaw between {other} and the arena gate, fighting defensively instead of chasing a risky opening.",
    "Hold the line.",
    "Jon checks the weather report for {other}'s journey. It predicts cold, bad roads, and absolutely no useful surprises.",
    "I've seen worse forecasts."
  ),
  Gandalf: makeSceneProfile(
    "Gandalf blocks {other}'s charge with his staff, then draws Glamdring. The referee asks him to stop using the arena as a passageway.",
    "You shall not pass.",
    "Gandalf orders tea for {other}, then turns a small spill into a much larger smoke effect with a flick of his staff.",
    "This was meant to be a small trick."
  ),
  "Percy Jackson": makeSceneProfile(
    "Percy pulls water from the arena fountain and sends a wave across {other}'s path. It knocks over the scoreboard, not his opponent.",
    "That counts as a splash.",
    "Percy refills {other}'s glass with a wave from the pitcher. He does not mention that the water briefly moved on its own.",
    "See? Table service."
  ),
  "Geralt of Rivia": makeSceneProfile(
    "Geralt checks {other} for claws, fangs, and a contract number before drawing his sword. The referee confirms this is a spar, not a hunt.",
    "No contract. No kill.",
    "Geralt studies the tavern menu as if it might be cursed. He orders for {other} only after checking that the stew is actually stew.",
    "I've eaten worse."
  ),
  "Katniss Everdeen": makeSceneProfile(
    "Katniss takes a clean shot at the target beside {other}, not at {other}. The referee appreciates the distinction; the target does not.",
    "I don't miss the target.",
    "Katniss quietly picks the seat with a view of both exits. {other} notices and stops asking why.",
    "Habit. Pick a seat."
  ),
  "Spider-Man": makeSceneProfile(
    "Spider-Man's spider-sense warns him before {other} moves. He dodges, webs the loose gear to the wall, and apologizes to the referee for the mess.",
    "I was hoping we'd skip the punching.",
    "Spider-Man catches a falling tray before it hits {other}. He makes a joke about the tip, then remembers he is supposed to be off duty.",
    "Friendly neighborhood waiter. Apparently."
  ),
  "Iron Man": makeSceneProfile(
    "Iron Man's suit scans {other}, announces three threat levels, then recommends a software update. Tony ignores the update and dodges.",
    "I'll let the suit take that personally.",
    "Tony offers to upgrade {other}'s phone. The demonstration ends with a holographic menu and a bill for the table.",
    "The upgrade was the free part."
  ),
  Thor: makeSceneProfile(
    "Thor throws Mjolnir past {other}; it loops around and lands back in his hand. The referee awards a point for the theatrical entrance.",
    "A worthy dodge!",
    "Thor tells {other} a long story about Asgard. The coffee goes cold halfway through, but he continues without noticing.",
    "And then the bridge shook!"
  ),
  Loki: makeSceneProfile(
    "Loki creates three illusions of himself around {other}. The referee counts all of them, so Loki disputes the rules he just exploited.",
    "Surely one of me deserves a point.",
    "Loki disguises the dessert menu as a royal decree for {other}. The waiter recognizes the handwriting and charges him anyway.",
    "A remarkably observant waiter."
  ),
  Batman: makeSceneProfile(
    "Batman studies {other}'s stance, throws a smoke pellet, and is suddenly behind them. The referee asks him to stop investigating the scorekeeper.",
    "I had a contingency for this.",
    "Batman sits facing the door while {other} orders. He has already identified the broken lock, the fake menu, and the suspicious waiter.",
    "The waiter is not suspicious. Yet."
  ),
  Deadpool: makeSceneProfile(
    "Deadpool pauses the fight to complain about the narration, then tries to sneak a dramatic entrance past {other}. It does not work.",
    "Can we get better choreography?",
    "Deadpool asks {other} whether the café is a set. The waiter asks him to stop checking behind the scenery.",
    "I knew that wall looked temporary."
  ),
  "Darth Vader": makeSceneProfile(
    "Vader pulls {other}'s dropped weapon across the arena with the Force, then returns it. The referee orders both of them to keep their gear.",
    "You are unwise to lower your guard.",
    "Vader uses the Force to slide {other}'s cup across the table without touching it. The café owner asks him to pay for the saucer he cracked.",
    "I find your lack of a receipt disturbing."
  ),
  Neo: makeSceneProfile(
    "Neo watches {other}'s attack arrive in slow motion, leans back to dodge it, then ends the round by stopping the next strike in midair.",
    "I know kung fu.",
    "Neo stares at the green code reflected in {other}'s coffee. He asks for a clean cup; the code stays.",
    "There is no spoon. There is, however, a bill."
  ),
  Yoda: makeSceneProfile(
    "Yoda lifts {other}'s dropped weapon with the Force and sets it just out of reach. The referee tells him that is not a legal move.",
    "A point, that was not.",
    "Yoda takes one sip of {other}'s tea and declares it too hot. He waits several minutes before taking another.",
    "Patience, the tea requires."
  ),
  Spock: makeSceneProfile(
    "Spock calculates {other}'s next move and blocks it with the minimum required effort. The referee confirms that efficiency is not a separate scoring category.",
    "Your opening was statistically generous.",
    "Spock works out the shortest route for {other} to get home. It involves three transfers and no scenic stops.",
    "The route is optimal, not enjoyable."
  ),
  "Wall-E": makeSceneProfile(
    "WALL-E spots a discarded bolt in the arena and abandons the duel to retrieve it. {other} waits while the referee calls a timeout.",
    "Directive unclear.",
    "WALL-E proudly presents {other} with a bent bottle cap from under the table. It is the nicest thing anyone has brought to the café all day.",
    "For you."
  ),
  Demogorgon: makeSceneProfile(
    "The arena lights fail. The Demogorgon lunges from the dark; {other} gets clear before the referee, already behind a barrier, ends the round.",
    "A low growl.",
    "The café goes quiet when the Demogorgon appears in the doorway. {other} keeps the exit clear and a table between them.",
    "A low growl."
  ),
  "Trevor Philips": makeSceneProfile(
    "Trevor turns {other}'s neat sparring match into a chaotic feint, then complains that the referee is taking it too seriously.",
    "Relax. It was almost a plan.",
    "Trevor tells {other} a story about a simple job that somehow involved a stolen vehicle, three arguments, and no lunch.",
    "It was a very straightforward day."
  ),
  Link: makeSceneProfile(
    "Link blocks {other}'s strike with his shield, then spots a treasure chest beside the arena and opens it before the referee can object.",
    "A brief gesture toward the chest.",
    "Link silently points out a shortcut on the café map. It passes a back door, a stable, and a suspiciously familiar treasure chest.",
    "A nod toward the shortcut."
  ),
  Mario: makeSceneProfile(
    "Mario jumps over {other}'s attack, lands with a stomp beside them, and celebrates as if a flagpole just appeared.",
    "Let's-a go!",
    "Mario offers {other} a plate of pasta, then orders another for himself before the first one arrives.",
    "Mamma mia, good choice."
  ),
  "Joel Miller": makeSceneProfile(
    "Joel uses the arena's cover and waits for {other} to make the first move. He ends the round as soon as the referee calls time.",
    "We're done here.",
    "Joel checks the café's exits and keeps his back to the wall. He lets {other} choose the table, but takes the seat facing the door.",
    "Old habit."
  ),
  "The Dark Urge": makeSceneProfile(
    "The Dark Urge pauses as the urge to turn the spar into something worse rises. They choose to disarm {other} and step back instead.",
    "Not this time.",
    "The Dark Urge studies the knife beside {other}'s plate, then pushes it safely away and changes the subject to the menu.",
    "Let's order something."
  ),
  Kratos: makeSceneProfile(
    "Kratos catches {other}'s strike on the Leviathan Axe and ends the exchange with one controlled shove. The arena wall survives by a narrow margin.",
    "Control. Not rage.",
    "Kratos shows {other} how to sharpen a blade. The café owner asks them to please use the patio.",
    "It was already blunt."
  )
};

const state = { filter: "fantasy", scene: "surprise", currentScene: "battle", first: null, second: null, round: 0, saved: [], lastPair: "", photoRequest: 0 };
const characterPhotoCache = new Map();
const elements = {
  names: [document.querySelector("#name-one"), document.querySelector("#name-two")],
  roles: [document.querySelector("#role-one"), document.querySelector("#role-two")],
  worlds: [document.querySelector("#universe-one"), document.querySelector("#universe-two")],
  emojis: [document.querySelector("#emoji-one"), document.querySelector("#emoji-two")],
  portraits: [document.querySelector("#portrait-one"), document.querySelector("#portrait-two")],
  portraitPhotos: [document.querySelector("#portrait-photo-one"), document.querySelector("#portrait-photo-two")],
  scenePhotos: [document.querySelector("#scene-photo-one"), document.querySelector("#scene-photo-two")],
  wikis: [document.querySelector("#wiki-one"), document.querySelector("#wiki-two")]
};

function choosePair() {
  const pool = characters.filter((character) => character.category.includes(state.filter));
  if (pool.length < 2) {
    document.querySelector("#image-note").textContent = "There aren't enough characters in that category yet.";
    return;
  }
  let first;
  let second;
  let attempts = 0;
  do {
    first = pool[Math.floor(Math.random() * pool.length)];
    const otherCharacters = pool.filter((character) => character !== first);
    second = otherCharacters[Math.floor(Math.random() * otherCharacters.length)];
    attempts += 1;
  } while (`${first.name}|${second.name}` === state.lastPair && attempts < 8);

  state.first = first;
  state.second = second;
  state.lastPair = `${first.name}|${second.name}`;
  state.round += 1;
  renderPair();
}

function renderPair() {
  [state.first, state.second].forEach((character, index) => {
    elements.names[index].textContent = character.name;
    elements.roles[index].textContent = character.role;
    elements.worlds[index].textContent = character.world;
    elements.emojis[index].textContent = character.emoji;
    elements.wikis[index].href = character.wiki;
    elements.portraits[index].classList.remove("has-image");
    elements.portraitPhotos[index].hidden = true;
    elements.scenePhotos[index].hidden = true;
  });
  document.querySelector("#round-count").textContent = `PAIRING ${String(state.round).padStart(2, "0")}`;
  setStory();
  updateSaveButton();
  loadCharacterPhotos([state.first, state.second]);
}

function escapeSvg(value) {
  return value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  })[character]);
}

function renderCrossoverArtwork(first, second, scene) {
  const isBattle = scene === "battle";
  const firstName = escapeSvg(first.name);
  const secondName = escapeSvg(second.name);
  const firstEmoji = escapeSvg(first.emoji);
  const secondEmoji = escapeSvg(second.emoji);
  const background = isBattle
    ? `<defs>
        <linearGradient id="backdrop" x1="0" x2="1" y1="0" y2="1"><stop stop-color="#542b4d"/><stop offset=".52" stop-color="#27233e"/><stop offset="1" stop-color="#166474"/></linearGradient>
        <radialGradient id="burst"><stop stop-color="#fffad5"/><stop offset=".16" stop-color="#ffc968"/><stop offset=".52" stop-color="#ff745e"/><stop offset="1" stop-color="#ff745e" stop-opacity="0"/></radialGradient>
        <pattern id="dots" width="13" height="13" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.25" fill="#fff" opacity=".17"/></pattern>
      </defs>
      <rect width="960" height="340" fill="url(#backdrop)"/>
      <path d="M0 0h430L0 210zM960 0H530l430 210z" fill="#fff" opacity=".035"/>
      <rect width="960" height="340" fill="url(#dots)"/>
      <path d="m477 161 18-56 20 52 50-24-27 49 51 18-55 12 9 56-41-40-37 44-1-57-57 2 44-36-35-45z" fill="url(#burst)"/>
      <path d="M130 32l85 38m640-39-85 39M74 125l112 16m698-16-112 16M197 272l59-56m448 0 59 56" stroke="#fff" stroke-opacity=".27" stroke-width="4" stroke-linecap="round"/>
      <path d="M0 301q240-30 480 0t480 0v39H0z" fill="#151520" opacity=".6"/>`
    : `<defs>
        <linearGradient id="backdrop" x1="0" x2="1" y1="0" y2="1"><stop stop-color="#503642"/><stop offset=".52" stop-color="#553c48"/><stop offset="1" stop-color="#354c4b"/></linearGradient>
        <linearGradient id="awning"><stop stop-color="#f4928f"/><stop offset=".5" stop-color="#f7cf91"/><stop offset="1" stop-color="#d8a8ca"/></linearGradient>
        <pattern id="dots" width="16" height="16" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#fff" opacity=".12"/></pattern>
      </defs>
      <rect width="960" height="340" fill="url(#backdrop)"/>
      <rect width="960" height="340" fill="url(#dots)"/>
      <circle cx="790" cy="64" r="38" fill="#ffe5a0" opacity=".2"/>
      <path d="M80 194V99q0-12 12-12h776q12 0 12 12v95" fill="#24232c" stroke="#edc0ae" stroke-opacity=".6" stroke-width="3"/>
      <path d="M93 105h774l-26 40H119z" fill="url(#awning)"/>
      <path d="M260 108v34m124-34v34m124-34v34m124-34v34m124-34v34" stroke="#fff" stroke-opacity=".45" stroke-width="4"/>
      <path d="M0 281q240-24 480 0t480 0v59H0z" fill="#171c24" opacity=".66"/>
      <path d="M277 246h406l-33 42H308z" fill="#d79e78"/><path d="M339 286v32m281-32v32" stroke="#b37c61" stroke-width="8" stroke-linecap="round"/>
      <path d="M465 224h24v18h-24z" fill="#f3e7d2"/><path d="M489 228h7q9 0 9 8t-9 8h-7" fill="none" stroke="#f3e7d2" stroke-width="4"/><path d="M470 219q5-10 0-17m11 17q5-10 0-17" fill="none" stroke="#f4d0a8" stroke-width="3" stroke-linecap="round"/>`;
  const title = isBattle ? "UNLIKELY RIVALS" : "CROSSOVER COFFEE DATE";
  const subtitle = isBattle ? "ROUND ONE · WHO BROUGHT THE SNACKS?" : "TWO UNIVERSES · ONE VERY GOOD TABLE";
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="960" height="340" viewBox="0 0 960 340" role="img">
    ${background}
    <text x="480" y="46" text-anchor="middle" fill="#fff" font-family="Arial,sans-serif" font-size="12" font-weight="700" letter-spacing="3" opacity=".8">${title}</text>
    <text x="480" y="66" text-anchor="middle" fill="#fff" font-family="Arial,sans-serif" font-size="9" font-weight="700" letter-spacing="2" opacity=".54">${subtitle}</text>
    <g transform="${isBattle ? "rotate(-11 290 173)" : ""}">
      <circle cx="266" cy="180" r="71" fill="#dbfc68" fill-opacity=".12" stroke="#dbfc68" stroke-opacity=".8" stroke-width="2"/>
      <circle cx="266" cy="180" r="60" fill="#171821" fill-opacity=".68"/>
      <text x="266" y="205" text-anchor="middle" font-family="Arial,sans-serif" font-size="77">${firstEmoji}</text>
    </g>
    <g transform="${isBattle ? "rotate(11 694 173)" : ""}">
      <circle cx="694" cy="180" r="71" fill="#b9a2ff" fill-opacity=".15" stroke="#b9a2ff" stroke-opacity=".9" stroke-width="2"/>
      <circle cx="694" cy="180" r="60" fill="#171821" fill-opacity=".68"/>
      <text x="694" y="205" text-anchor="middle" font-family="Arial,sans-serif" font-size="77">${secondEmoji}</text>
    </g>
    ${isBattle
      ? `<g transform="rotate(-8 481 169)"><path d="m480 116 11 35 36-16-21 32 35 10-37 11 17 34-32-22-17 33-4-38-38 8 27-27-28-25 38 7z" fill="#ffe17b" stroke="#fff5ce" stroke-width="3"/><text x="480" y="177" text-anchor="middle" fill="#382541" font-family="Arial,sans-serif" font-size="25" font-weight="900">POW!</text></g>
       <path d="m368 186 45-12m180 12-45-12M359 217l54-21m187 21-54-21" stroke="#fff" stroke-opacity=".65" stroke-width="4" stroke-linecap="round"/>`
      : `<g fill="#fff2dc" opacity=".9"><path d="m391 106 5 13 14 1-11 8 4 14-12-8-12 8 4-14-11-8 14-1z"/><path d="m573 83 4 11 12 1-9 7 3 12-10-7-10 7 3-12-9-7 12-1z" fill="#eee7ff"/></g>
       <path d="M458 180h12v10h-12z" fill="#fff" opacity=".8"/><path d="M470 183h5q5 0 5 5t-5 5h-5" fill="none" stroke="#fff" stroke-opacity=".8" stroke-width="2"/>`}
    <g><rect x="141" y="273" width="250" height="31" rx="15.5" fill="#101117" fill-opacity=".75" stroke="#dbfc68" stroke-opacity=".6"/><text x="266" y="293" text-anchor="middle" fill="#fff" font-family="Arial,sans-serif" font-size="13" font-weight="700">${firstName}</text></g>
    <g><rect x="569" y="273" width="250" height="31" rx="15.5" fill="#101117" fill-opacity=".75" stroke="#b9a2ff" stroke-opacity=".75"/><text x="694" y="293" text-anchor="middle" fill="#fff" font-family="Arial,sans-serif" font-size="13" font-weight="700">${secondName}</text></g>
  </svg>`;
  const artwork = document.querySelector("#crossover-artwork");
  artwork.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
  artwork.alt = `${first.name} and ${second.name} ${isBattle ? "in a playful crossover showdown" : "sharing a crossover hangout"} — an original illustration made by the website.`;
}

async function getCharacterPhoto(character) {
  if (character.imageUrl) return character.imageUrl;
  const wikiUrl = new URL(character.wiki);
  const articleTitle = decodeURIComponent(wikiUrl.pathname.split("/").pop()).replaceAll("_", " ");
  const search = new URLSearchParams({
    action: "query",
    format: "json",
    origin: "*",
    prop: "pageimages",
    piprop: "thumbnail",
    pithumbsize: "640",
    redirects: "1",
    titles: articleTitle
  });
  const apiPath = ["bg3.wiki", "bulbapedia.bulbagarden.net"].includes(wikiUrl.hostname) ? "/w/api.php" : "/api.php";
  const apiUrl = new URL(apiPath, wikiUrl.origin);
  apiUrl.search = search;
  const response = await fetch(apiUrl);
  if (!response.ok) throw new Error(`The character wiki returned ${response.status}`);
  const data = await response.json();
  const page = Object.values(data.query?.pages || {})[0];
  return page?.thumbnail?.source || null;
}

async function loadCharacterPhotos(pair) {
  const photoRequest = ++state.photoRequest;
  document.querySelector("#image-note").textContent = "Finding real character pictures on their story wikis…";
  const photos = await Promise.all(pair.map(async (character) => {
    try {
      if (!characterPhotoCache.has(character.wiki)) {
        characterPhotoCache.set(character.wiki, await getCharacterPhoto(character));
      }
      return characterPhotoCache.get(character.wiki);
    } catch (error) {
      console.error(`Could not load a wiki picture for ${character.name}.`, error);
      return null;
    }
  }));
  if (photoRequest !== state.photoRequest) return;

  let missingPhoto = false;
  photos.forEach((source, index) => {
    if (!source) {
      missingPhoto = true;
      return;
    }
    const character = pair[index];
    const portrait = elements.portraits[index];
    const portraitPhoto = elements.portraitPhotos[index];
    const scenePhoto = elements.scenePhotos[index];
    portraitPhoto.alt = `${character.name} character picture`;
    scenePhoto.alt = `${character.name} in the crossover scene`;
    portraitPhoto.onload = () => {
      if (photoRequest === state.photoRequest) portrait.classList.add("has-image");
    };
    portraitPhoto.onerror = () => {
      if (photoRequest !== state.photoRequest) return;
      portraitPhoto.hidden = true;
      portrait.classList.remove("has-image");
      document.querySelector("#image-note").textContent = "One of the character pictures could not load; an illustrated avatar is shown instead.";
      console.error(`The wiki picture for ${character.name} could not be displayed.`);
    };
    scenePhoto.onerror = () => {
      if (photoRequest !== state.photoRequest) return;
      scenePhoto.hidden = true;
      document.querySelector("#image-note").textContent = "One of the character pictures could not load; an illustrated avatar is shown instead.";
      console.error(`The scene picture for ${character.name} could not be displayed.`);
    };
    portraitPhoto.src = source;
    scenePhoto.src = source;
    portraitPhoto.hidden = false;
    scenePhoto.hidden = false;
    if (portraitPhoto.complete && portraitPhoto.naturalWidth > 0) portrait.classList.add("has-image");
  });

  if (missingPhoto) {
    document.querySelector("#image-note").textContent = "A character wiki has no portrait for this pairing; an illustrated avatar is shown instead.";
  } else {
    document.querySelector("#image-note").textContent = "Real character pictures from their story wikis are in the scene. The Showdown and Hangout buttons change the setting.";
  }
}

function setStory() {
  const isSurprise = state.scene === "surprise";
  const scene = isSurprise ? (Math.random() < 0.5 ? "battle" : "hangout") : state.scene;
  state.currentScene = scene;
  const firstProfile = characterSceneProfiles[state.first.name];
  const secondProfile = characterSceneProfiles[state.second.name];
  const firstScene = firstProfile.render(scene, state.second);
  const secondScene = secondProfile.render(scene, state.first);
  const story = {
    icon: scene === "battle" ? "⚔️" : "☕",
    title: scene === "battle" ? "A PERSONAL SHOWDOWN" : "AN UNLIKELY HANGOUT"
  };
  document.querySelector("#scene-kicker").textContent = scene === "battle" ? "THE ULTIMATE SHOWDOWN" : "A MOST UNEXPECTED HANGOUT";
  document.querySelector("#story-icon").textContent = story.icon;
  document.querySelector("#story-type").textContent = story.title;
  document.querySelector("#story-text").textContent = `${firstScene.action} ${secondScene.action}`;
  const storyLines = document.querySelector("#story-lines");
  storyLines.replaceChildren(...[[state.first, firstScene], [state.second, secondScene]].map(([character, sceneContent]) => {
    let line = sceneContent.line;
    if (character.communication === "silent") line = "Remains silent; no words to translate.";
    if (character.communication === "growls") line = "A low growl. No words.";
    const paragraph = document.createElement("p");
    paragraph.className = "story-line";
    const name = document.createElement("strong");
    const communicationLabel = {
      beeps: " (translated beeps)",
      chirps: " (translated chirps)",
      gestures: " (interpreted gestures)"
    }[character?.communication] || "";
    name.textContent = `${character.name}${communicationLabel}: `;
    paragraph.append(name, document.createTextNode(line));
    return paragraph;
  }));
  if (state.first) renderCrossoverArtwork(state.first, state.second, scene);
}

function updateSaveButton() {
  const isSaved = state.saved.some((pair) => pair.key === state.lastPair);
  const button = document.querySelector("#save-button");
  button.classList.toggle("is-saved", isSaved);
  button.setAttribute("aria-pressed", String(isSaved));
  document.querySelector("#save-label").textContent = isSaved ? "Duo saved" : "Save this duo";
}

function toggleSavedPair() {
  const existingIndex = state.saved.findIndex((pair) => pair.key === state.lastPair);
  if (existingIndex >= 0) state.saved.splice(existingIndex, 1);
  else state.saved.unshift({ key: state.lastPair, first: state.first.name, second: state.second.name });
  renderSaved();
  updateSaveButton();
}

function renderSaved() {
  const section = document.querySelector("#saved-section");
  section.hidden = state.saved.length === 0;
  document.querySelector("#saved-count").textContent = `${state.saved.length} saved`;
  const list = document.querySelector("#saved-list");
  list.replaceChildren(...state.saved.map((pair) => {
    const item = document.createElement("span");
    item.className = "saved-duo";
    item.textContent = `${pair.first} ✦ ${pair.second}`;
    return item;
  }));
}

document.querySelectorAll(".filter-chip").forEach((button) => {
  button.addEventListener("click", () => {
    state.filter = button.dataset.filter;
    document.querySelectorAll(".filter-chip").forEach((chip) => {
      const selected = chip === button;
      chip.classList.toggle("is-selected", selected);
      chip.setAttribute("aria-pressed", String(selected));
    });
    choosePair();
  });
});

document.querySelectorAll(".scene-chip").forEach((button) => {
  button.addEventListener("click", () => {
    state.scene = button.dataset.scene;
    document.querySelectorAll(".scene-chip").forEach((chip) => {
      const selected = chip === button;
      chip.classList.toggle("is-selected", selected);
      chip.setAttribute("aria-pressed", String(selected));
    });
    if (state.first) setStory();
  });
});

document.querySelector("#generate-button").addEventListener("click", choosePair);
document.querySelector("#save-button").addEventListener("click", toggleSavedPair);

choosePair();
