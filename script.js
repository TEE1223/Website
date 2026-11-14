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
  { name: "Neo", world: "The Matrix", role: "The One who bends the rules of reality", emoji: "🕶️", category: ["scifi"], title: "Neo (The Matrix)", wiki: "https://en.wikipedia.org/wiki/Neo_(The_Matrix)", imageUrl: "https://upload.wikimedia.org/wikipedia/en/c/c6/NeoTheMatrix.jpg" },
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
  { name: "The Dark Urge", world: "Baldur's Gate 3", role: "A Bhaalspawn resisting a murderous urge", emoji: "🗡️", category: ["games"], title: "The Dark Urge", wiki: "https://bg3.wiki/wiki/The_Dark_Urge" },
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

function makePairScene(first, second, battleDescription, battleFirst, battleSecond, hangoutDescription, hangoutFirst, hangoutSecond) {
  const key = [first, second].sort().join("|");
  return [key, {
    dialogueOrder: [first, second],
    battle: { description: battleDescription, lines: { [first]: battleFirst, [second]: battleSecond } },
    hangout: { description: hangoutDescription, lines: { [first]: hangoutFirst, [second]: hangoutSecond } }
  }];
}

const pairSceneStories = new Map([
  makePairScene("Harry Potter", "Momo (Avatar)",
    "In Hogwarts' courtyard, Harry's shield charm catches Momo's stolen whistle midair. Momo lands on it; the courtyard game pauses for negotiations.",
    "That whistle has been stolen three times today. I'm starting to think it likes you better.",
    "A triumphant chirp, followed by one very deliberate whistle.",
    "In the Hogwarts kitchens, Harry tries a levitation charm to retrieve the biscuits. Momo is already airborne with the tin, looking deeply unimpressed by the spell.",
    "I was going to share. I just wanted to see if you could levitate the tin first.",
    "A happy chirp from inside the biscuit tin."),
  makePairScene("Harry Potter", "Jon Snow",
    "At Castle Black's gate, Jon holds the line with Longclaw while Harry's shield charm turns the first strike aside. Neither trusts the other's winter-related reputation.",
    "You can stop guarding the gate; this is only practice.",
    "I know. I still don't like things coming out of the dark.",
    "In the Gryffindor common room, Harry offers Jon a seat by the fire. Jon checks the window for snow; Harry checks the teapot for a curse.",
    "The tea's safe. I checked for curses.",
    "Good. I checked for poison. Between us, it might be drinkable."),
  makePairScene("Harry Potter", "Gandalf",
    "On a moving staircase at Hogwarts, Harry raises a shield charm; Gandalf tests it with his staff, then declares the defense sound enough to pass. Harry asks whether that counts as a grade.",
    "That shield held. How do you know when a spell is strong enough?",
    "When it protects someone besides yourself.",
    "In the Hogwarts staff room, Gandalf's tea service becomes a minor fireworks display when Harry tries to help with a charm. They both insist the smoke was intentional.",
    "The kettle isn't supposed to whistle in four-part harmony.",
    "Then I fear it has more musical talent than either of us."),
  makePairScene("Harry Potter", "Percy Jackson",
    "A museum fountain surges when Percy sends a wave at Harry; Harry shields the curator instead of himself. Percy calls that a tactical error. Harry calls it basic decency.",
    "I was trying to keep the curator dry.",
    "Right. You rescued the one person who could kick us out. I respect that.",
    "At Camp Half-Blood's dining pavilion, Harry tries to refill Percy's glass with a charm. Percy quietly makes the water rise from the pitcher anyway; neither admits whose method was neater.",
    "Okay, your water trick is smoother than my charm.",
    "I can teach you, but first: don't duel the pitcher."),
  makePairScene("Harry Potter", "Geralt of Rivia",
    "In a cramped inn room, Geralt asks whether Harry's wand is a weapon, a monster lure, or both. Harry disarms him with a spell before the inspection is over.",
    "You can put the sword down. The wand isn't a monster.",
    "I've heard that before. Usually from the monster.",
    "At a potion shop near Diagon Alley, Geralt scrutinizes the menu for curses. Harry spots a suspiciously moving teapot and decides neither of them is ordering tea.",
    "The teapot just tried to bite me.",
    "Finally, a monster I can identify without a contract."),
  makePairScene("Momo (Avatar)", "Jon Snow",
    "During Jon's night watch at the Wall, Momo flies over his post, steals the gate key, and returns it only after Jon asks politely.",
    "A chirp, then Momo points at the key as if it were an invitation.",
    "You could have asked before taking the gate key.",
    "Jon shares his bread with Momo. Momo takes the whole loaf and leaves a single crumb beside Jon's map as a tip.",
    "A contented chirp; Momo leaves Jon the crust.",
    "I said we could split the bread."),
  makePairScene("Momo (Avatar)", "Gandalf",
    "In the tower library, Gandalf raises his staff to block Momo's swoop. Momo loops around it, steals the hat, and perches above the bookshelves.",
    "A delighted chirp from under the pointy hat.",
    "I can see the hat is comfortable. May I have it back now?",
    "Gandalf offers Momo a pastry. Momo accepts the plate too, then watches Gandalf explain at length why this is not technically theft.",
    "A bright chirp; the plate remains firmly in Momo's paws.",
    "I offered you one pastry, not the whole plate."),
  makePairScene("Momo (Avatar)", "Percy Jackson",
    "At the lake dock, Percy sends a ribbon of water under Momo's paws. Momo surfs it, steals Percy's cap, and leaves him to explain the new event rules.",
    "A proud chirp from the referee's cap; Momo takes a victory lap.",
    "That was my cap, not the finish-line flag.",
    "On the Camp Half-Blood canoe dock, Percy makes a tiny water slide from the pitcher to Momo's cup. Momo rides it instead of drinking, then demands another lap.",
    "An eager chirp, then another lap.",
    "You're supposed to ride the water, not the cup."),
  makePairScene("Momo (Avatar)", "Geralt of Rivia",
    "At a roadside inn, Geralt reaches for his sword when Momo dives at his medallion. It vibrates; Momo decides it is a toy and refuses to let go.",
    "A questioning chirp; Momo gives the medallion one more shake.",
    "Careful, little thief. That medallion bites back.",
    "Geralt puts his snacks on the high shelf. Momo reaches them in seconds; Geralt silently revises his estimate of the room's security.",
    "A triumphant chirp from the top shelf, beside the empty bag.",
    "You found the snacks. I should have known the ceiling wasn't high enough."),
  makePairScene("Jon Snow", "Gandalf",
    "On the narrow bridge to the Wall, Jon expects a charge; Gandalf plants his staff and tells him to pass. Jon takes the instruction literally and circles him.",
    "When you said 'pass,' I thought you meant the bridge.",
    "I did. The bridge was perfectly clear.",
    "By the fire, Gandalf spins a long tale. Jon listens with the alert patience of someone expecting it to turn into a battle.",
    "Does every story of yours end with a battle?",
    "Only when the listener keeps asking for one."),
  makePairScene("Jon Snow", "Percy Jackson",
    "On a storm-battered ferry, Jon braces the rail while Percy turns the incoming wave aside. Jon keeps his footing; Percy admits the plan did not include a second wave.",
    "I can hold the rail. You handle the wave.",
    "That's the plan. If there's a third wave, I'm calling it your problem.",
    "In the camp's crowded mess hall, Percy asks Jon for directions to the nearest warm place. Jon points north, then catches himself and points toward the fireplace.",
    "I meant the fireplace. Pointing north is a habit.",
    "Good to know. I'll ask the next person."),
  makePairScene("Jon Snow", "Geralt of Rivia",
    "On a dark forest trail, Geralt checks the tracks for monsters; Jon checks the treeline for ambushes. They agree the only threat is the suspiciously loud owl.",
    "We came for tracks, not trouble. Let's leave the owl alone.",
    "Agreed. It looks mean, but the paperwork would be worse.",
    "They sit in silence over two mugs of ale. Geralt calls it pleasant; Jon asks if that means the conversation is over.",
    "It's nice not having to fill every silence.",
    "Then don't. The ale's doing fine."),
  makePairScene("Gandalf", "Percy Jackson",
    "On a harbor pier, Gandalf blocks Percy's wave with his staff. Percy redirects the splash around him and soaks only Gandalf's hat.",
    "I was trying to keep the pier dry.",
    "I was aiming for the hat. The pier was an accident.",
    "At a harbor lighthouse, Gandalf tells Percy a story that began before the lighthouse was built and somehow ends with another cup of tea.",
    "I've outlasted this lighthouse, I suspect.",
    "That's not a number, but I'll take the tea."),
  makePairScene("Gandalf", "Geralt of Rivia",
    "In a haunted inn, Geralt draws steel at a scraping sound; Gandalf's staff stops the blade. The noise turns out to be a chair, but neither relaxes.",
    "It's a chair. You can put the sword away.",
    "I will, if you stop aiming it at furniture.",
    "Geralt orders stew. Gandalf orders tea. The waiter asks if they are sure; both look at him until he stops asking.",
    "How's the stew?",
    "I've had worse. The tea smells better."),
  makePairScene("Percy Jackson", "Geralt of Rivia",
    "On a muddy forest path, Percy sends a wave across Geralt's route. Geralt drinks from it instead of dodging; Percy pauses to reconsider his strategy.",
    "You drank the wave.",
    "It was cleaner than the inn's water. Barely.",
    "At a roadside inn, Geralt checks the well water for poison. Percy checks it for naiads. They both order bottled drinks and distrust the bottle.",
    "I checked for naiads. You're checking for poison. It's just water, right?",
    "That is what I hope to establish."),
  makePairScene("Spider-Man", "Iron Man",
    "On a Queens rooftop, Tony's suit predicts every dodge; Peter's spider-sense warns him the prediction is about to update. They try to out-anticipate the software.",
    "Your suit knows where I'm going before I do.",
    "And you're still determined to prove it wrong.",
    "In Tony's workshop, Tony offers to upgrade Peter's web-shooters. Peter agrees, then asks whether the upgrade comes with a student discount and no press release.",
    "I'll take the student discount. You can keep the press release.",
    "Deal. But I reserve the right to put it in the fine print."),
  makePairScene("Spider-Man", "Thor",
    "Above a Manhattan street, Thor throws Mjolnir in a wide arc. Peter webs its path by instinct, then gets pulled in a circle around a water tower.",
    "A heads-up before the next throw would be great.",
    "I gave one. It was the sound of the hammer returning.",
    "In Asgard's great hall, Thor tells Peter the full story of one Asgardian lunch. Peter listens, makes three jokes, and still misses the part where the food arrived.",
    "You said lunch. I didn't know it came with the royal family history.",
    "A proper lunch deserves context."),
  makePairScene("Spider-Man", "Loki",
    "In a crowded subway station, Loki creates three Spider-Men. Peter identifies the real Loki by the one illusion smirking at a lost tourist.",
    "You can copy my face, but you can't fake worrying about rent.",
    "I have faked royal insolvency for centuries.",
    "At a Manhattan food cart, Loki disguises the bill as a royal decree. Peter spots the tip line and asks if the god of mischief is seriously trying to dodge twenty percent.",
    "Your friendly neighborhood Spider-Man says the tip line is still due.",
    "The decree says twenty percent. I checked."),
  makePairScene("Spider-Man", "Batman",
    "In a dim alley, Batman studies Peter's stance; Peter's spider-sense keeps going off because Batman has prepared for every possible angle, including the fire escape.",
    "Do you have a plan that doesn't involve a fire escape?",
    "Only when there isn't one.",
    "In the Batcave, Peter tries to fill the silence with jokes. Batman silently slides him a list of the cave's safety violations; Peter starts fixing them with webbing.",
    "You made a checklist for coffee?",
    "You webbed the fire exit shut."),
  makePairScene("Spider-Man", "Deadpool",
    "On a film set, Deadpool asks for a stunt double. Peter webs his mouth shut, then gets distracted catching a falling studio light.",
    "Could you save the commentary until we're off the set?",
    "I could. The footage would be unusable.",
    "At a studio canteen, Peter attempts normal small talk. Deadpool narrates their lunch like a behind-the-scenes feature until the waiter asks him to stop interviewing the soup.",
    "Can we eat without turning lunch into a director's commentary?",
    "I can try. No promises if the soup has a subplot."),
  makePairScene("Iron Man", "Thor",
    "In Stark's workshop, the suit flags Mjolnir as an incoming object. Thor catches it, asks whether the suit is frightened, and the display quietly updates its threat label.",
    "It's not fear. It's reacting to a hammer flying at my head.",
    "And yet I caught it before your suit finished complaining.",
    "Tony orders coffee by temperature and extraction time. Thor orders the largest drink on the menu and asks if the cup is worthy.",
    "The cup isn't worthy. It's just the largest size.",
    "Then refill it. It has passed the test."),
  makePairScene("Iron Man", "Loki",
    "At a charity gala, Tony's scanners find four Lokis; Loki's illusions find six Iron Men. The event staff call a timeout while both blame the other.",
    "Which one of you is real?",
    "The one who hasn't asked you to pay for the drinks.",
    "At the Avengers Tower reception, Loki requests a royal table. Tony projects a hologram of one and sends the actual bill to Loki's phone.",
    "You gave me a hologram instead of a table.",
    "And you gave me a real bill. I'd call that fair."),
  makePairScene("Iron Man", "Batman",
    "In an abandoned warehouse, Tony's suit scans Batman's gear; Batman has already planted a signal jammer. The lights go out, and both claim the other made the first move.",
    "You jammed my suit before we even started.",
    "You scanned me before we even started.",
    "In the Avengers Tower penthouse, they spend lunch comparing contingency plans. The waiter asks if either wants dessert; both have already modeled the risk of ordering it.",
    "I ran a scan. The pie is probably safe.",
    "You checked the kitchen, not the pie."),
  makePairScene("Iron Man", "Deadpool",
    "At a weapons demo, Tony's targeting system locks onto Deadpool, who keeps waving at the livestream camera instead of staying in frame. The suit requests a new assignment.",
    "Stand still for two seconds. The scanner can't find you.",
    "Tell it to follow the dramatic music.",
    "At a tech expo booth, Tony tries to pitch Deadpool a wearable. Deadpool asks if it comes with a writer's credit; Tony closes the presentation.",
    "You want equity in the wearable?",
    "I want a warranty and my name on the box. Start there."),
  makePairScene("Thor", "Loki",
    "At an Asgardian feast, Thor charges; Loki makes five copies of himself. Mjolnir returns carrying the one Loki who forgot the hammer could find him.",
    "Could you stop multiplying and fight me yourself?",
    "I am myself. All five of me, technically.",
    "On a balcony overlooking Asgard, Thor recounts a childhood prank. Loki corrects the details, adds three more pranks, and somehow makes Thor apologize for one of them.",
    "You hid my boots for a week.",
    "And you learned to walk in borrowed sandals. You're welcome."),
  makePairScene("Thor", "Batman",
    "On a Gotham rooftop, Batman's smoke pellet hides the ledge. Thor swings at a sound; Batman has already marked the hammer's return path and moved the bystanders.",
    "You brought no weapon?",
    "I brought one. I don't need to swing it.",
    "Thor invites Batman to tell a story. Batman replies with a crime-scene timeline; Thor asks if the villain at least had a dramatic entrance.",
    "No dramatic entrance?",
    "He came through a window. It was sufficient."),
  makePairScene("Thor", "Deadpool",
    "At a comic convention, Deadpool asks Thor to hold a pose for a cover photo. Thor obliges; Deadpool sneaks behind him and gets caught by the returning hammer.",
    "I knew you were going to try something. The hammer helped.",
    "You knew it was coming? You could've warned me.",
    "At a convention food court, Thor orders enough food for a feast. Deadpool asks for the menu's stunt coordinator, then eats the side dish before the main course arrives.",
    "That was for the table.",
    "I thought you meant whoever got here first."),
  makePairScene("Loki", "Batman",
    "In a museum after closing, Loki fills the gallery with illusions. Batman ignores every copy and follows the one shadow that falls in the wrong direction.",
    "How did you see through that?",
    "Your shadow didn't.",
    "In a museum's private dining room, Loki claims the waiter is an impostor. Batman checks the receipt, the kitchen, and the exit before concluding the waiter is merely annoyed.",
    "You had to inspect the waiter?",
    "You said he was an impostor. He just wants us to leave."),
  makePairScene("Loki", "Deadpool",
    "In a theater lobby, Loki creates a decoy Deadpool. The real Deadpool asks the decoy for an autograph; Loki abandons the illusion in disgust.",
    "You knew it was an illusion?",
    "No. I wanted an autograph. The illusion seemed approachable.",
    "Backstage at a theater, Loki pretends to be the owner to get a free meal. Deadpool exposes him, then asks Loki to pretend to be the waiter instead.",
    "You exposed my disguise just to get lunch?",
    "You were already dressed for the part. I thought you'd enjoy it."),
  makePairScene("Batman", "Deadpool",
    "In a Gotham parking garage, Batman sets a silent trap. Deadpool spots it, points at the security camera, and steps around it. Batman looks more offended by the commentary than the escape.",
    "You saw the trap and walked around it.",
    "I saw the camera. That trap looked expensive.",
    "At a late-night diner, Batman silently studies Deadpool's order. Deadpool keeps adding sides until Batman slides over a spreadsheet titled 'Dietary Threat Assessment.'",
    "Six kinds of bacon is excessive.",
    "You made a spreadsheet to tell me that?"),
  makePairScene("Darth Vader", "Neo",
    "In a Death Star corridor, Vader reaches out with the Force; Neo bends away from the pull as if gravity has changed its mind. The stormtroopers quietly pretend not to have seen it.",
    "Your tricks will not save them.",
    "I'm not trying to save myself. Get them out while I keep you busy.",
    "Neo notices green code crawling through Vader's datapad. Vader closes it, then asks why the café's payment terminal keeps saying 'There is no receipt.'",
    "I find the printer's lack of a receipt disturbing.",
    "Try restarting it. The terminal's not the Sith Lord."),
  makePairScene("Darth Vader", "Yoda",
    "In the Dagobah swamp, Vader lifts a fallen tree with the Force. Yoda lifts the path beneath Vader's boots; both insist the other changed the rules.",
    "The path is behind you. You could have asked.",
    "Ask, I did. Listening, you were not.",
    "Yoda lets Vader pour tea. The cup floats; so does the kettle; neither of them mentions the small scorch mark on the table.",
    "The kettle is boiling. It isn't a threat.",
    "That is what the kettle wants you to think."),
  makePairScene("Darth Vader", "Spock",
    "On the Enterprise bridge, Vader's breathing sets off Spock's medical monitor. Spock asks him to stand still; Vader asks the monitor to stop making suggestions.",
    "The suit has been like this for years. The monitor is not helping.",
    "That does not make the condition medically advisable.",
    "In the Enterprise crew lounge, Spock proposes a silent meal to reduce conversational inefficiency. Vader agrees, then uses the Force to pass the salt without breaking the silence.",
    "I presumed you wanted the salt.",
    "Correct. Do not expect praise."),
  makePairScene("Darth Vader", "Wall-E",
    "In a junkyard, WALL-E sorts a pile of scrap while Vader searches for his dropped control panel. WALL-E returns it polished and neatly categorized.",
    "You sorted all of this?",
    "The mess was getting worse.",
    "WALL-E gives Vader a tiny plant in a dented cup. Vader holds it very carefully and tells the droid not to mention this to anyone.",
    "I am not keeping a plant.",
    "A hopeful beep, followed by WALL-E setting the plant beside Vader's chair."),
  makePairScene("Darth Vader", "Demogorgon",
    "During a power failure on the Death Star, the Demogorgon lunges from the dark. Vader freezes it at the doorway; it answers with a growl that makes the alarms seem polite.",
    "Stay there. I am not going to hurt you.",
    "A low, suspicious growl; it does not come any closer.",
    "The Demogorgon appears in the hangar beside Vader's shuttle. Vader offers it a ration bar; it sniffs the wrapper and retreats into the shadows.",
    "That ration bar is for you.",
    "A low growl from the shadows; the wrapper rustles."),
  makePairScene("Neo", "Yoda",
    "Inside the Matrix, Neo stops a rain of bullets. Yoda stops the rain itself; the agents pause to file a complaint about competing physics.",
    "You bent the rules.",
    "Rules made by machines. I only moved them.",
    "Neo sees the café menu rendered in green code. Yoda reads it upside down, orders the soup, and tells Neo the spoon is real.",
    "The menu is still glitching.",
    "Then soup it is. Easier to trust."),
  makePairScene("Neo", "Spock",
    "On a starship holodeck, Neo dodges a simulated phaser beam. Spock pauses the program and asks whether the dodge was instinctive or statistically unnecessary.",
    "It was instinctive. The statistics just agree with me.",
    "That is a more satisfying answer.",
    "Neo finds a glitch in Spock's chess program. Spock calls it a deliberate variable; Neo waits while he fixes it.",
    "That bug wasn't intentional.",
    "It is now a teaching example."),
  makePairScene("Neo", "Wall-E",
    "In a recycling plant, Neo dodges a tumbling conveyor belt of scrap. WALL-E ignores the spectacle and rescues one bent spoon from the moving pile.",
    "You saw the whole conveyor belt coming at you.",
    "The spoon needed help.",
    "In a quiet museum gallery, Neo tries to explain the Matrix with a screen full of code. WALL-E presents a rusty little boot; they agree the boot is easier to understand.",
    "I could explain the code, but this boot makes more sense.",
    "A happy beep; WALL-E offers the boot for inspection."),
  makePairScene("Neo", "Demogorgon",
    "In a flickering Hawkins lab, Neo dodges the Demogorgon's lunge in slow motion. The creature crashes into a bank of monitors displaying the same green code.",
    "Stay down. I'm trying not to hurt you.",
    "A warning growl, but the Demogorgon stays where it fell.",
    "Neo offers the Demogorgon a chair in the café. It chooses the ceiling; Neo checks the menu and decides not to ask why.",
    "The chair is for sitting.",
    "A low growl from the ceiling; the chair remains empty."),
  makePairScene("Yoda", "Spock",
    "On the Enterprise holodeck, Spock sets a precise obstacle course. Yoda lifts the finish line to the start; Spock notes this is technically efficient, but contrary to the objective.",
    "The finish line is here now. Why go farther?",
    "The objective was to reach it, not relocate it.",
    "In the starship's observation lounge, Spock measures steeping time to the second. Yoda drinks the tea early, then watches Spock recalculate the optimal temperature.",
    "Cold, it was getting.",
    "It had steeped for twelve seconds."),
  makePairScene("Yoda", "Wall-E",
    "In a mountain of abandoned machinery, WALL-E spots a loose bolt. Yoda lifts the entire pile to help; WALL-E retrieves the bolt and leaves the rest exactly as it was.",
    "I lifted the whole pile. Was that not helpful?",
    "I only needed the bolt.",
    "Yoda and WALL-E tend a small plant on a windowsill. Yoda gives advice; WALL-E has already watered it, turned it toward the light, and named it.",
    "The plant has already grown toward the light.",
    "A cheerful beep; WALL-E turns the pot a little anyway."),
  makePairScene("Yoda", "Demogorgon",
    "In Dagobah's mist, the Demogorgon stalks toward Yoda. Yoda moves the stepping stones beneath it until the monster ends up exactly where it started.",
    "You're lost, not trapped. There's a path behind you.",
    "A wary growl; the Demogorgon looks back at the stones.",
    "Yoda leaves a bowl of fruit outside the swamp hut. The Demogorgon takes the bowl too; Yoda decides this is progress.",
    "You may keep the bowl. The fruit, however, is to share.",
    "A careful growl from the reeds; the bowl stays put."),
  makePairScene("Spock", "Wall-E",
    "On the Enterprise cargo deck, Spock gives WALL-E a precise route to the recycling bay. WALL-E takes a shorter path that includes one rescued bolt and a detour to help a crew member.",
    "You deviated from the route I gave you.",
    "Someone needed help.",
    "At a starship reclamation bay, Spock sorts the recycling by material. WALL-E sorts it by what can be repaired; the pile gets smaller and Spock revises his categories.",
    "Sorting by repairability reduced the waste by thirty percent.",
    "And we saved the good bolts."),
  makePairScene("Wall-E", "Demogorgon",
    "In a darkened cargo bay, WALL-E's headlamp catches the Demogorgon between stacks of scrap. WALL-E offers it a bent spoon; the creature backs away, then returns to inspect it.",
    "Careful. There's broken glass behind you.",
    "A cautious growl; the Demogorgon steps around the glass.",
    "WALL-E leaves a tiny plant outside the Demogorgon's hiding place. By morning, the plant is gone and a perfectly arranged pile of bottle caps is left in its place.",
    "I think it wants to keep the plant.",
    "A quiet growl from the shadows; the bottle caps stay in place."),
  makePairScene("Spock", "Demogorgon",
    "In a research lab, Spock approaches the Demogorgon with a scanner. The creature roars; Spock records the sound, then calmly steps behind a reinforced door.",
    "That is enough data for today. I'm leaving now.",
    "A loud, unimpressed growl from the other side of the door.",
    "Spock places a tray of food outside the Demogorgon's observation room. It takes the tray without touching the handle; Spock adds that to the report.",
    "You returned the tray untouched.",
    "A low growl, followed by the tray sliding back."),
  makePairScene("Trevor Philips", "Link",
    "Trevor tries to hot-wire a getaway cart in Hyrule. Link silently points to the key in the ignition; Trevor calls this an ambush by basic maintenance.",
    "You could've mentioned the key before I started breaking the cart.",
    "Link points at the key, then at Trevor's tools.",
    "Trevor tells Link a story about a quiet drive. Link listens, then draws a map showing the route, the detour, and the place Trevor drove through a fence.",
    "That fence was already damaged.",
    "Link draws the fence on the map, then points at Trevor."),
  makePairScene("Trevor Philips", "Mario",
    "Trevor borrows Mario's kart for a 'quick test.' Mario catches him taking a shortcut through a pipe and arrives at the finish line before Trevor finds the road again.",
    "How is there a pipe shortcut on a dirt track?",
    "Mamma mia! Even this road has plumbing!",
    "Mario serves pasta at a roadside diner. Trevor insists he can cook; Mario lets him help, then quietly moves the fire extinguisher closer.",
    "You don't trust me near a stove?",
    "I trust you. I don't trust the stove."),
  makePairScene("Trevor Philips", "Joel Miller",
    "At a border checkpoint, Trevor proposes a loud plan for crossing the guarded street. Joel points out the quiet alley; Trevor takes it, complaining about the lack of explosions.",
    "You call that a plan? We skipped the fun part.",
    "The fun part is getting out alive.",
    "At a roadside motel, Joel checks the locks while Trevor checks the minibar for anything worth stealing. They both leave the room more suspicious than they found it.",
    "That minibar's a scam.",
    "You're in a motel where the ice machine has a warning label."),
  makePairScene("Trevor Philips", "The Dark Urge",
    "At an abandoned airstrip, Trevor dares the Dark Urge to turn their standoff into a real fight. The Dark Urge lowers their weapon instead; Trevor laughs, then quietly lowers his too.",
    "You had the chance to hit me. Why didn't you?",
    "I'm trying not to let the worst part of me make every choice.",
    "In a roadside motel room, Trevor starts telling a story about the worst thing he's ever done. The Dark Urge asks whether he regrets it; for once, Trevor doesn't have a joke ready.",
    "I usually make a joke here.",
    "This isn't funny."),
  makePairScene("Trevor Philips", "Kratos",
    "Trevor revs a dirt bike beside Kratos. Kratos lifts the bike out of the way; Trevor declares the road closed and asks who authorized the detour.",
    "Put the bike down. I can move it myself.",
    "Then do so.",
    "In Trevor's cluttered garage, he explains a complicated plan for fixing the truck. Kratos listens, tightens one bolt, and fixes it before the plan reaches step two.",
    "I was going to check the fuel line.",
    "You were explaining it."),
  makePairScene("Link", "Mario",
    "Mario races through Hyrule Castle while Link points out every open gate. Mario takes a warp pipe instead and arrives first, carrying Link's missing shield.",
    "Link points to the shield, then to the finish line.",
    "It was in the way!",
    "Link silently offers Mario a mushroom from his pack. Mario offers a power-up in return; they trade until neither remembers which one belonged to whom.",
    "Link offers a mushroom and points to Mario's power-up.",
    "Fair trade!"),
  makePairScene("Link", "Joel Miller",
    "In an overgrown city street, Joel covers the doorway while Link cuts a path through the infected vines. They move without speaking and meet at the same exit.",
    "Link nods, then points toward the exit.",
    "You always this quiet?",
    "At a fire lookout, Joel repairs a radio while Link lays out a map. Link points to a safer route; Joel adds the places where the map is already out of date.",
    "Link points to the safer route.",
    "That path wasn't on my map."),
  makePairScene("Link", "The Dark Urge",
    "In a ruined temple, Link blocks the Dark Urge's strike and lowers his shield instead of retaliating. The Dark Urge takes the opening to step back.",
    "Link lowers his shield and waits.",
    "You had the chance to finish that.",
    "At a campfire meal, Link silently slides the knife away from the Dark Urge's plate and offers a bowl of soup instead. The Dark Urge accepts the soup without making a joke.",
    "Link nods toward the soup.",
    "Thank you."),
  makePairScene("Link", "Kratos",
    "On a mountain pass, Link uses his shield to turn aside a falling boulder. Kratos catches the next one; they clear the trail without debating who had the better technique.",
    "Link points ahead, then checks the trail.",
    "Good. Now keep moving.",
    "Kratos sharpens the Leviathan Axe while Link repairs a torn shield strap. They exchange tools in silence and finish each other's repairs.",
    "Link hands Kratos the repaired strap.",
    "It will hold."),
  makePairScene("Mario", "Joel Miller",
    "Joel tries to sneak through a supply store. Mario bounces off a shelf, catches the falling cans, and somehow leaves the aisle quieter than before.",
    "I caught the cans!",
    "You broke one.",
    "At a roadside bakery, Joel offers Mario a simple sandwich. Mario adds mushrooms, cheese, and enough sauce to make Joel ask whether it still counts as a sandwich.",
    "I made it a little bigger.",
    "It stopped being a sandwich three toppings ago."),
  makePairScene("Mario", "The Dark Urge",
    "The Dark Urge begins a tense duel; Mario jumps over the first strike, lands beside them, and offers a rematch with a finish-line flag instead.",
    "If you finish the race, the fight is over!",
    "So you're trying to make me win?",
    "Mario shares a plate of pasta with the Dark Urge. They focus on dinner, and the Dark Urge keeps both hands occupied with a fork.",
    "Want more pasta?",
    "Keeping my hands busy does help."),
  makePairScene("Mario", "Kratos",
    "Mario bounces across a collapsing bridge. Kratos holds the last section in place; Mario reaches the other side and waves as if this were part of the course.",
    "It's still standing!",
    "For now. Do not bounce on it.",
    "Kratos cooks a simple meal over the fire. Mario adds seasoning, then more seasoning; Kratos tastes it and silently reaches for water.",
    "It needs more seasoning.",
    "It needs to be edible."),
  makePairScene("Joel Miller", "The Dark Urge",
    "In an abandoned house, Joel spots the Dark Urge's hand tightening around a weapon and calmly asks them to step outside. They do; the fight never starts.",
    "I saw your hand move. Put it down.",
    "You saw that coming?",
    "Joel sits with the Dark Urge on the porch and talks about surviving the next hour, not fixing everything. The silence does more work than the advice.",
    "You don't have to solve it all tonight. Just get through tonight.",
    "I don't know if I can keep doing this."),
  makePairScene("Joel Miller", "Kratos",
    "Joel takes cover behind a concrete barrier; Kratos moves it aside to clear the path. Joel changes positions without comment, and Kratos stops moving the scenery.",
    "I said leave the cover where it is.",
    "I thought it was blocking the path.",
    "In a mountain workshop, Joel checks the truck while Kratos checks the axe. They find the same problem from opposite ends and fix it without discussing whose method was faster.",
    "The truck should hold.",
    "Then we leave before something else breaks."),
  makePairScene("The Dark Urge", "Kratos",
    "At the entrance to a ruined temple, the Dark Urge feels the urge to strike; Kratos lowers the Leviathan Axe and waits. The pause is deliberate, and the Dark Urge chooses restraint.",
    "You aren't going to stop me?",
    "I will stop you. But you can still choose.",
    "By a cabin hearth, Kratos teaches the Dark Urge to sharpen a blade slowly and carefully. They finish the chore without turning it into a test of strength.",
    "I thought control meant never wanting it.",
    "Wanting is not choosing. Your actions are yours.")
]);

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

function createCharacterPortrait(character) {
  const palettes = {
    fantasy: ["#332456", "#d4ff70", "#a68cff"],
    comics: ["#501d38", "#ffcb70", "#ff7890"],
    scifi: ["#153a4a", "#75e9d8", "#9aa9ff"],
    games: ["#4a2d20", "#ffce72", "#a9e77d"]
  };
  const [backgroundColor, accentColor, secondaryColor] = palettes[character.category[0]];
  const name = escapeSvg(character.name);
  const emoji = escapeSvg(character.emoji);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="500" height="500" viewBox="0 0 500 500" role="img">
    <defs>
      <linearGradient id="portrait-bg" x1="0" x2="1" y1="0" y2="1"><stop stop-color="${backgroundColor}"/><stop offset="1" stop-color="#15161d"/></linearGradient>
      <radialGradient id="portrait-glow"><stop stop-color="${accentColor}" stop-opacity=".36"/><stop offset="1" stop-color="${accentColor}" stop-opacity="0"/></radialGradient>
    </defs>
    <rect width="500" height="500" fill="url(#portrait-bg)"/>
    <circle cx="250" cy="248" r="205" fill="url(#portrait-glow)"/>
    <circle cx="250" cy="248" r="173" fill="none" stroke="${accentColor}" stroke-opacity=".72" stroke-width="2"/>
    <circle cx="250" cy="248" r="145" fill="none" stroke="${secondaryColor}" stroke-opacity=".5" stroke-width="1.5" stroke-dasharray="3 12"/>
    <path d="M75 366 142 300m216-216 67-67M86 119l61 20m206 222 61 20" fill="none" stroke="#fff" stroke-opacity=".2" stroke-width="3" stroke-linecap="round"/>
    <path d="m250 63 8 24 25-8-16 20 21 15-26-2-2 26-11-24-24 11 15-22-21-15 26 3z" fill="${accentColor}" fill-opacity=".72"/>
    <text x="250" y="286" text-anchor="middle" dominant-baseline="middle" font-family="Arial,sans-serif" font-size="154">${emoji}</text>
    <rect x="36" y="420" width="428" height="46" rx="23" fill="#111216" fill-opacity=".78" stroke="${accentColor}" stroke-opacity=".7"/>
    <text x="250" y="449" text-anchor="middle" fill="#fff" font-family="Arial,sans-serif" font-size="17" font-weight="700" letter-spacing="1">${name}</text>
  </svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

const characterImageFiles = {
  "Harry Potter": "harry potter.png",
  "Momo (Avatar)": "momo.webp",
  "Jon Snow": "jon snow.jpeg",
  Gandalf: "gandalf.jpg",
  "Percy Jackson": "percy.jpeg",
  "Geralt of Rivia": "geralt.jpeg",
  "Spider-Man": "spiderman.jpeg",
  "Iron Man": "ironman.jpeg",
  Thor: "thor.jpeg",
  Loki: "loki.jpeg",
  Batman: "batman.jpeg",
  Deadpool: "deadpool.jpeg",
  "Darth Vader": "darth vader.jpeg",
  Neo: "neo.jpeg",
  Yoda: "yoda.jpeg",
  Spock: "spock.jpeg",
  "Wall-E": "wall e.jpeg",
  Demogorgon: "demigorgon.jpeg",
  "Trevor Philips": "trevor.jpeg",
  Link: "link.jpeg",
  Mario: "mario.jpeg",
  "Joel Miller": "joel.jpeg",
  "The Dark Urge": "dark urge.jpeg",
  Kratos: "kratos.jpeg"
};

function loadCharacterPhotos(pair) {
  const photoRequest = ++state.photoRequest;
  document.querySelector("#image-note").textContent = "Character pictures are included with the site; no external image servers are needed.";
  pair.forEach((character, index) => {
    const portrait = elements.portraits[index];
    const portraitPhoto = elements.portraitPhotos[index];
    const scenePhoto = elements.scenePhotos[index];
    const fallback = createCharacterPortrait(character);
    const source = `pics/${encodeURIComponent(characterImageFiles[character.name])}`;
    portraitPhoto.alt = `${character.name} character picture`;
    scenePhoto.alt = `${character.name} in the crossover scene`;
    portraitPhoto.classList.remove("has-image");
    portraitPhoto.onload = () => {
      if (photoRequest === state.photoRequest) portrait.classList.add("has-image");
    };
    portraitPhoto.onerror = () => {
      if (photoRequest !== state.photoRequest) return;
      portraitPhoto.onerror = null;
      portraitPhoto.src = fallback;
      console.error(`The local picture for ${character.name} could not be displayed; using the original illustration.`);
    };
    scenePhoto.onerror = () => {
      if (photoRequest !== state.photoRequest) return;
      scenePhoto.onerror = null;
      scenePhoto.src = fallback;
      console.error(`The local scene picture for ${character.name} could not be displayed; using the original illustration.`);
    };
    portraitPhoto.src = source;
    scenePhoto.src = source;
    portraitPhoto.hidden = false;
    scenePhoto.hidden = false;
  });
}

function setStory() {
  const isSurprise = state.scene === "surprise";
  const scene = isSurprise ? (Math.random() < 0.5 ? "battle" : "hangout") : state.scene;
  state.currentScene = scene;
  const pairKey = [state.first.name, state.second.name].sort().join("|");
  const pairEntry = pairSceneStories.get(pairKey);
  const pairStory = pairEntry?.[scene];
  if (!pairStory) throw new Error(`Missing ${scene} scene for ${pairKey}.`);
  const story = {
    icon: scene === "battle" ? "⚔️" : "☕",
    title: scene === "battle" ? "A PERSONAL SHOWDOWN" : "AN UNLIKELY HANGOUT"
  };
  document.querySelector("#scene-kicker").textContent = scene === "battle" ? "THE ULTIMATE SHOWDOWN" : "A MOST UNEXPECTED HANGOUT";
  document.querySelector("#story-icon").textContent = story.icon;
  document.querySelector("#story-type").textContent = story.title;
  document.querySelector("#story-text").textContent = pairStory.description;
  const storyLines = document.querySelector("#story-lines");
  const dialogueCharacters = pairEntry.dialogueOrder.map((name) => {
    const character = [state.first, state.second].find((candidate) => candidate.name === name);
    if (!character) throw new Error(`Missing dialogue character ${name} for ${pairKey}.`);
    return character;
  });
  storyLines.replaceChildren(...dialogueCharacters.map((character) => {
    let line = pairStory.lines[character.name];
    if (!line && character.communication === "silent") line = "Remains silent; no words to translate.";
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
