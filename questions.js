/* ============================================================
   THE STORY BEHIND — question bank
   Each question: { category, difficulty, question, options[], answer (index), story }
   Stories support **highlighted phrases**. Every fact double-checked.
   ============================================================ */
window.QUESTIONS = [

  /* ===================== TECHNOLOGY ===================== */
  {
    category: "Technology", difficulty: "medium",
    question: "The QWERTY keyboard layout was designed primarily to do what?",
    options: [
      "Slow typists down so they'd make fewer mistakes",
      "Keep neighbouring typebars from clashing and jamming",
      "Group the most common letters under the strongest fingers",
      "Match the layout of the telegraph alphabet"
    ],
    answer: 1,
    story: "The popular myth is that QWERTY was built to slow you down. The truth is more mechanical: Christopher Latham Sholes' 1870s typewriters jammed whenever neighbouring **typebars** struck in quick succession. Scattering frequently-paired letters kept their metal arms from colliding. When electric and digital keyboards made jamming impossible, we kept QWERTY anyway — out of pure habit."
  },
  {
    category: "Technology", difficulty: "easy",
    question: "The term 'computer bug' was cemented in 1947 when engineers found what inside the Harvard Mark II?",
    options: ["A moth", "A mouse", "A beetle", "A loose screw"],
    answer: 0,
    story: "Operators traced a glitch to an actual **moth** stuck in a relay. Grace Hopper's team taped it into the logbook with the note 'First actual case of bug being found.' Engineers had used 'bug' for faults before (even Edison did), but the taped moth made it legendary — and gave us the word 'debugging.' The logbook, moth still attached, lives in the Smithsonian."
  },
  {
    category: "Technology", difficulty: "medium",
    question: "Bluetooth is named after Harald 'Bluetooth' Gormsson, a 10th-century king of where?",
    options: ["Denmark", "England", "Germany", "Norway only"],
    answer: 0,
    story: "Intel, Ericsson and Nokia needed a name to unify competing wireless standards. An engineer reading a Viking novel suggested Harald 'Bluetooth,' the king who **united Danish tribes** — just as the tech would unite devices. The placeholder name stuck. Even the logo is a bind rune fusing Harald's initials ᚼ (H) and ᛒ (B)."
  },
  {
    category: "Technology", difficulty: "medium",
    question: "What does the name 'Wi-Fi' actually stand for?",
    options: [
      "Wireless Fidelity",
      "Nothing — it's an invented brand name",
      "Wireless Frequency",
      "Wide-band Fidelity"
    ],
    answer: 1,
    story: "Everyone assumes it means 'Wireless Fidelity,' but officially **it stands for nothing**. A branding firm coined 'Wi-Fi' in 1999 simply because it sounded catchy and echoed 'hi-fi.' A trade group briefly slapped on the tagline 'The Standard for Wireless Fidelity,' then dropped it. The real name is the far less friendly 'IEEE 802.11b.'"
  },
  {
    category: "Technology", difficulty: "medium",
    question: "The world's first webcam, set up at Cambridge in 1991, was pointed at what?",
    options: ["A coffee pot", "A fish tank", "The building's front door", "A parking lot"],
    answer: 0,
    story: "Researchers were tired of walking to the break room only to find the shared **coffee pot** empty. So they aimed a camera at it and piped a live image to their computers. In 1993 it was hooked to the young Web, becoming the first webcam — watched by millions worldwide until it was switched off in 2001. The pot itself sold on eBay for over £3,000."
  },
  {
    category: "Technology", difficulty: "hard",
    question: "The famous Konami Code (↑↑↓↓←→←→ B A) exists because a developer...",
    options: [
      "Found his own game too hard to test",
      "Wanted to reward loyal fans",
      "Was hiding an Easter egg from his boss",
      "Needed a copy-protection trigger"
    ],
    answer: 0,
    story: "Porting the shooter Gradius to the NES, developer Kazuhisa Hashimoto found it **brutally hard to playtest**. So he coded a shortcut granting a full arsenal of power-ups, meaning to delete it before release — but forgot. Players found it, and the sequence reappeared in Contra and hundreds of other games, becoming the most famous cheat in gaming."
  },
  {
    category: "Technology", difficulty: "hard",
    question: "The classic Nokia ringtone is lifted from a piece written around 1902 by...",
    options: [
      "A Spanish classical guitarist",
      "Nokia's own founder",
      "A Finnish folk choir",
      "An advertising jingle house"
    ],
    answer: 0,
    story: "The 'Nokia Tune' is a snippet of 'Gran Vals,' a solo guitar work by Spaniard **Francisco Tárrega** — composed before telephones existed. When Nokia adopted it in 1994 it became perhaps the most-played melody in history, chiming an estimated 1.8 billion times a day at its peak. Tárrega died in 1909, never knowing his notes would ring across the planet."
  },
  {
    category: "Technology", difficulty: "medium",
    question: "When Ray Tomlinson sent the first networked email in 1971, why did he pick the '@' symbol?",
    options: [
      "It meant 'at' and was almost never used in names",
      "It looked like a tiny globe",
      "His manager insisted on it",
      "It was the only symbol both computers shared"
    ],
    answer: 0,
    story: "Tomlinson needed a character that would never appear in someone's name, to split the user from their host computer. Glancing at his Teletype, he chose **'@'** — it meant 'at' and was otherwise almost useless. He later admitted his first test messages were forgettable, 'something like QWERTYUIOP.' That throwaway choice now anchors every email address on Earth."
  },
  {
    category: "Technology", difficulty: "easy",
    question: "Why do we 'boot up' a computer?",
    options: [
      "From 'bootstrapping' — a program that pulls itself up by its own bootstraps",
      "Early consoles were boot-shaped",
      "You once had to kick the machine to start it",
      "It's named after the Boot brothers who built the first PC"
    ],
    answer: 0,
    story: "Early computers faced a paradox: to load their software, they needed software already running. The fix was a tiny program that loads a bigger one that loads the whole system — like the impossible image of **pulling yourself up by your own bootstraps**, from an old tall tale. Shortened to 'booting,' it survives in the 'boot' sector and in 'rebooting.'"
  },
  {
    category: "Technology", difficulty: "medium",
    question: "Web 'cookies' — the little files that remember your login — got their name from...",
    options: [
      "'Magic cookies,' an old term for a token passed between programs",
      "The programmer's favourite snack",
      "An acronym: Client Object Ordered Key",
      "Their cookie-shaped icon"
    ],
    answer: 0,
    story: "Netscape engineer Lou Montulli needed a way for sites to remember you between visits. He borrowed an old computing term, **'magic cookie'** — a small token of data passed along to identify a session. The homely name stuck, and today those tiny text files quietly track logins, carts and — less charmingly — ads across the entire web."
  },
  {
    category: "Technology", difficulty: "hard",
    question: "Tetris was created in 1984 by Alexey Pajitnov while he was working for...",
    options: [
      "The Soviet Academy of Sciences",
      "Nintendo of Japan",
      "Atari",
      "A university in Finland"
    ],
    answer: 0,
    story: "Pajitnov built Tetris on an Elektronika 60 at a **Soviet** computer centre in Moscow, inspired by wooden pentomino puzzles. Because he was a state employee, the USSR owned the rights — so he earned nothing for years as it became a global craze, especially bundled with the Game Boy. He only started collecting royalties in 1996 after co-founding The Tetris Company."
  },
  {
    category: "Technology", difficulty: "medium",
    question: "Douglas Engelbart's first computer mouse (1968) was made of...",
    options: [
      "A hand-carved wooden shell with two metal wheels",
      "Plastic with a rolling rubber ball",
      "A repurposed military trackball",
      "Machined aluminium"
    ],
    answer: 0,
    story: "In 'The Mother of All Demos,' Engelbart unveiled the mouse, on-screen windows, hypertext and video calls — decades early. His first mouse was a carved **wooden block with two perpendicular wheels**; he called it a 'mouse' because the cord trailed out like a tail. He never earned a cent in royalties — his patent expired before the mouse went mainstream."
  },

  /* ===================== BIOLOGY ===================== */
  {
    category: "Biology", difficulty: "easy",
    question: "The first 'immortal' human cell line, still used in labs worldwide, came from a woman named...",
    options: ["Henrietta Lacks", "Rosalind Franklin", "Marie Curie", "Ada Lovelace"],
    answer: 0,
    story: "In 1951, doctors at Johns Hopkins took a sample of **Henrietta Lacks'** cervical cancer without her knowledge. Unlike normal cells, hers divided forever — the first immortal human line, 'HeLa.' They've since been grown by the ton, flown to space, and used to develop the polio vaccine and map the genome. Lacks died months later; her family learned of it only decades on."
  },
  {
    category: "Biology", difficulty: "hard",
    question: "Whales have thousands of times more cells than we do, yet rarely get cancer. This puzzle is called...",
    options: ["Peto's paradox", "Simpson's paradox", "The Fermi paradox", "Fitch's problem"],
    answer: 0,
    story: "More cells over a longer life should mean more chances to turn cancerous — so a blue whale ought to be riddled with tumours. It isn't. Big animals evolved better defences: elephants carry 20 copies of the tumour-suppressing gene **p53** (we have one), and whales have extra DNA-repair tricks. Cancer researchers now study these giants hoping to borrow their protection."
  },
  {
    category: "Biology", difficulty: "medium",
    question: "The mitochondria powering your cells were, over a billion years ago, most likely...",
    options: [
      "Free-living bacteria that got swallowed and kept",
      "Ancient viruses",
      "Naturally forming crystals",
      "Always part of the original cell"
    ],
    answer: 0,
    story: "Mitochondria have their own DNA, their own membranes, and divide on their own schedule — because they were once **independent bacteria**. The theory (championed by Lynn Margulis, long ridiculed) is that a larger cell engulfed one and, instead of digesting it, kept it as a power plant. That single merger made complex life possible — and it's why you inherit mitochondria only from your mother."
  },
  {
    category: "Biology", difficulty: "medium",
    question: "The 'immortal jellyfish' (Turritopsis dohrnii) cheats death by...",
    options: [
      "Reverting its adult cells back to an earlier life stage",
      "Freezing itself solid",
      "Endlessly cloning identical copies",
      "Simply never ageing at all"
    ],
    answer: 0,
    story: "Facing starvation or injury, this tiny jellyfish can transform its adult cells back into an immature polyp — like a butterfly melting back into a caterpillar — then grow up all over again, potentially forever. The trick is called **transdifferentiation**. It can still be eaten or fall ill, so it isn't unkillable — but it need never die of old age."
  },
  {
    category: "Biology", difficulty: "hard",
    question: "In a giraffe, the recurrent laryngeal nerve reaches the voice box by way of...",
    options: [
      "A detour of several metres down the neck and back up",
      "The most direct possible route",
      "A path through the tongue",
      "The spinal cord"
    ],
    answer: 0,
    story: "This nerve loops down around a major artery near the heart before returning up to the larynx — a layout inherited from fish, where it once made sense. In a giraffe that **detour runs several metres** to connect two points inches apart. It's a favourite proof of evolution's lack of foresight: selection can only tinker with what already exists."
  },
  {
    category: "Biology", difficulty: "medium",
    question: "Horseshoe crab blood is bright blue and prized by medicine because it...",
    options: [
      "Instantly detects bacterial contamination",
      "Carries far more oxygen than ours",
      "Never clots",
      "Glows in the dark"
    ],
    answer: 0,
    story: "Their copper-based blood (blue, not iron-red) contains cells that clot around bacterial toxins. Pharma companies harvest it to make **'LAL,'** a test that screens vaccines, IV drugs and implants for contamination — including COVID vaccines. The crabs are returned to the sea, though many don't survive. A synthetic substitute now exists and is slowly easing the demand."
  },
  {
    category: "Biology", difficulty: "medium",
    question: "The gene-editing tool CRISPR was discovered by studying...",
    options: [
      "A bacterial immune system",
      "Human cancer cells",
      "Fruit-fly embryos",
      "Glowing jellyfish"
    ],
    answer: 0,
    story: "Long before it edited genes, CRISPR was **bacteria's defence system**: microbes snip out chunks of an attacking virus's DNA and file them away as mugshots, so they can recognise and shred that virus next time. Scientists realised this 'search-and-cut' machinery could be reprogrammed to edit any DNA — winning Doudna and Charpentier the 2020 Nobel Prize in Chemistry."
  },
  {
    category: "Biology", difficulty: "medium",
    question: "Carrying a single copy of the sickle-cell gene, common in parts of Africa, provides...",
    options: [
      "Resistance to malaria",
      "Immunity to cold",
      "Unusually fast healing",
      "Sharper night vision"
    ],
    answer: 0,
    story: "Two copies cause painful sickle-cell disease. But one copy subtly deforms red blood cells in a way the **malaria** parasite struggles to survive in — a real survival edge where malaria is rife. So evolution kept the gene despite its cost: a textbook case of a dangerous mutation persisting because it also protects."
  },
  {
    category: "Biology", difficulty: "medium",
    question: "Tardigrades ('water bears') survive being frozen, boiled and even blasted into open space by...",
    options: [
      "Drying into a near-lifeless 'tun' state",
      "Growing a protective shell",
      "Photosynthesising for energy",
      "Slowing their heartbeat"
    ],
    answer: 0,
    story: "When conditions turn deadly, a tardigrade expels its water, curls into a dehydrated ball called a **'tun,'** and nearly halts its metabolism — replacing lost water with a glass-like sugar that shields its cells. In this state it has survived the vacuum and radiation of space, crushing deep-sea pressures, and temperatures near absolute zero. Add water and it walks away."
  },
  {
    category: "Biology", difficulty: "hard",
    question: "The protein nicknamed 'the guardian of the genome,' disabled in about half of all cancers, is...",
    options: ["p53", "Hemoglobin", "Insulin", "Collagen"],
    answer: 0,
    story: "**p53** patrols your cells for DNA damage. Find some, and it pauses the cell for repairs — or, if the damage is too severe, orders the cell to self-destruct before it can turn cancerous. It's so central to our defences that it's knocked out in roughly half of all human cancers. Elephants carry extra copies, which may be why they so rarely get the disease."
  },
  {
    category: "Biology", difficulty: "easy",
    question: "Goosebumps are a leftover reflex that, in our furry ancestors, served to...",
    options: [
      "Puff up fur for warmth or to look bigger",
      "Cool the skin by sweating",
      "Repel biting insects",
      "Signal illness to the group"
    ],
    answer: 0,
    story: "The tiny muscles that raise your hairs are doing exactly what they do in a startled cat: **fluffing the coat** to trap warm air or look more threatening. On our nearly bare skin the gesture is useless — we just get bumps. It's a vestigial reflex, an evolutionary hand-me-down still triggered by cold, fear, or a stirring piece of music."
  },
  {
    category: "Biology", difficulty: "medium",
    question: "Each time a cell divides, the protective caps on its chromosomes — telomeres — get...",
    options: ["Shorter", "Longer", "Thicker", "Randomly rearranged"],
    answer: 0,
    story: "Telomeres are like the plastic tips on shoelaces, stopping chromosome ends from fraying. But they **shrink with every division**, and once too short the cell stops dividing or dies — a built-in countdown linked to ageing. Cancer cells cheat this clock by switching on telomerase, an enzyme that rebuilds the caps, making them effectively immortal."
  },
  {
    category: "Biology", difficulty: "medium",
    question: "If you uncoiled all the DNA in a single human cell, it would stretch about...",
    options: ["2 metres", "2 centimetres", "2 millimetres", "200 metres"],
    answer: 0,
    story: "Packed into a nucleus a hundredth of a millimetre wide, your DNA is spooled so tightly that one cell holds about **2 metres** of it. Multiply across your ~37 trillion cells and the total would reach the Sun and back hundreds of times. The packing is so extreme that, scaled up to spaghetti, the cell would be about the size of a small town."
  },

  /* ===================== LOGIC & PUZZLES ===================== */
  {
    category: "Logic & Puzzles", difficulty: "medium",
    question: "You pick one of three doors (one hides a car). The host, who knows, opens another to reveal a goat, then offers a switch. You should...",
    options: [
      "Switch — it raises your odds to 2/3",
      "Stay — switching makes no difference",
      "It's now a coin flip either way",
      "Switch, but it barely helps"
    ],
    answer: 0,
    story: "This 'Monty Hall problem' fooled thousands, including maths PhDs who angrily wrote to columnist Marilyn vos Savant. She was right. Your first pick wins 1/3 of the time, so the car is behind the other two doors **2/3** of the time. The host revealing a goat concentrates that 2/3 onto the single remaining door. Switching wins twice as often."
  },
  {
    category: "Logic & Puzzles", difficulty: "medium",
    question: "In a room of just 23 people, the chance that two share a birthday is roughly...",
    options: ["50%", "6%", "23%", "Less than 1%"],
    answer: 0,
    story: "It feels far too low — 23 people, 365 days. But you're not matching one specific birthday; you're comparing **every possible pair**, and 23 people form 253 pairs. With that many comparisons a collision becomes likely fast. By 70 people the odds top 99.9%. It's the classic lesson in how badly intuition handles compounding probability."
  },
  {
    category: "Logic & Puzzles", difficulty: "medium",
    question: "If every plank of a ship is gradually replaced until none of the original remains, is it the same ship? This puzzle is the...",
    options: ["Ship of Theseus", "Zeno's paradox", "Russell's paradox", "Occam's razor"],
    answer: 0,
    story: "Retold by Plutarch in antiquity, it asks what makes a thing itself: its matter, or its form and continuity? Thomas Hobbes added a twist — if someone hoards the old planks and rebuilds the original, which is the 'real' ship? There's no settled answer, which is the point. Your own atoms turn over constantly too, yet you still feel like **you**."
  },
  {
    category: "Logic & Puzzles", difficulty: "medium",
    question: "In Zeno's paradox, swift Achilles can never overtake a tortoise with a head start because...",
    options: [
      "Each time he reaches where it was, it has crept a little further",
      "The tortoise is secretly faster",
      "He grows tired",
      "Distance can't be measured"
    ],
    answer: 0,
    story: "To catch the tortoise, Achilles must first reach its starting point — by which time it's moved ahead. Reach that, and it's moved again, through infinitely many gaps. Zeno concluded motion was an illusion. The fix took two millennia: an **infinite series** of ever-smaller intervals can add up to a finite distance and time. Calculus tamed it, but it still stings the intuition."
  },
  {
    category: "Logic & Puzzles", difficulty: "hard",
    question: "A trend that shows up in several groups can vanish or reverse when the groups are merged. This is...",
    options: ["Simpson's paradox", "The base-rate fallacy", "The gambler's fallacy", "Bayes' theorem"],
    answer: 0,
    story: "A famous real case: UC Berkeley seemed to admit men at a higher rate than women, hinting at bias. Yet **department by department**, women were admitted at equal or higher rates — they'd simply applied more to the toughest departments. Merging the data flipped the story. It's a warning that statistics can mislead depending entirely on how you slice them."
  },
  {
    category: "Logic & Puzzles", difficulty: "easy",
    question: "A roulette wheel lands on red 10 times in a row. Believing black is now 'due' is called...",
    options: ["The gambler's fallacy", "Regression to the mean", "The law of averages", "The Monte Carlo method"],
    answer: 0,
    story: "The wheel has no memory: each spin is independent, so black is no likelier than before. The fallacy got its nickname at a **Monte Carlo** casino in 1913, when black came up 26 times straight. Gamblers piled onto red, sure it was overdue — and lost millions as black kept winning. Independent events simply don't 'balance out' in the short run."
  },
  {
    category: "Logic & Puzzles", difficulty: "medium",
    question: "You have 9 identical coins; one is slightly heavier. Using a balance scale, the fewest weighings guaranteed to find it is...",
    options: ["2", "3", "4", "1"],
    answer: 0,
    story: "Split them into three groups of three. Weigh two groups: if they balance, the heavy coin is in the third; if not, it's in the heavier pan — either way you've narrowed it to three coins in **one** weighing. Weigh one of those three against another and you've found it. The key is that each weighing has three outcomes, so it cuts the field by thirds, not halves."
  },
  {
    category: "Logic & Puzzles", difficulty: "hard",
    question: "Remove one grain from a heap of sand and it's still a heap; keep going and eventually it isn't. When did it stop? This is the...",
    options: ["Sorites (heap) paradox", "Ship of Theseus", "Zeno's paradox", "Liar paradox"],
    answer: 0,
    story: "No single grain seems to mark the line between 'heap' and 'not a heap,' yet a thousand grains clearly differ from one. The **Sorites** paradox exposes how vague everyday words — 'heap,' 'bald,' 'tall' — resist sharp boundaries. It's not mere wordplay: it drives real debates in logic and law about drawing lines that reality leaves blurry."
  },
  {
    category: "Logic & Puzzles", difficulty: "medium",
    question: "In any city of a million people, at least two must have the exact same number of head hairs. This certainty comes from...",
    options: ["The pigeonhole principle", "The law of large numbers", "Pure coincidence", "Regression to the mean"],
    answer: 0,
    story: "A human head holds at most a few hundred thousand hairs — far fewer than a million people. If you have more 'pigeons' (people) than 'holes' (possible hair counts), at least two pigeons must share a hole. The **pigeonhole principle** sounds trivial, yet this simple counting idea proves surprisingly deep results across maths and computer science."
  },

  /* ===================== POP CULTURE ===================== */
  {
    category: "Pop Culture", difficulty: "medium",
    question: "The 'Wilhelm scream,' a stock sound effect film buffs love to spot, was first recorded for a scene involving...",
    options: [
      "A man dragged underwater by an alligator",
      "A rollercoaster",
      "A haunted house",
      "A car crash"
    ],
    answer: 0,
    story: "The yelp debuted in the 1951 Western 'Distant Drums,' used as a soldier is pulled under by an **alligator**, and was later named for a character called Private Wilhelm. Sound designer Ben Burtt rediscovered it and slipped it into Star Wars, Indiana Jones, Toy Story and hundreds more. Once you know it, you'll hear it everywhere — a decades-long inside joke among sound editors."
  },
  {
    category: "Pop Culture", difficulty: "hard",
    question: "The code 'A113' hidden in nearly every Pixar film refers to...",
    options: [
      "A classroom at the California Institute of the Arts",
      "Pixar's original office suite",
      "A film-reel serial number",
      "John Lasseter's birthday"
    ],
    answer: 0,
    story: "A113 was the first-year animation **classroom at CalArts**, where many Pixar and Disney animators trained. As an affectionate signature they tuck it into Toy Story, WALL·E, Ratatouille and beyond — on licence plates, camera models, door numbers. It even turns up in The Simpsons and other films made by CalArts alumni."
  },
  {
    category: "Pop Culture", difficulty: "hard",
    question: "The 'Amen break,' a 6-second drum solo from a 1969 B-side, became the backbone of...",
    options: [
      "Hip-hop, jungle and drum & bass",
      "Disco",
      "Grunge",
      "Reggaeton"
    ],
    answer: 0,
    story: "Drummer Gregory Coleman played the break on The Winstons' 'Amen, Brother.' Sampled endlessly from the 1980s on, it underpins countless **hip-hop, jungle and drum-and-bass** tracks, plus TV ads and games. The Winstons never earned royalties for it, and Coleman reportedly died homeless in 2006 — unaware his few seconds of drumming had reshaped modern music."
  },
  {
    category: "Pop Culture", difficulty: "medium",
    question: "In January 2024, the earliest version of which character entered the public domain?",
    options: [
      "Mickey Mouse (the 1928 'Steamboat Willie' version)",
      "Superman",
      "Bugs Bunny",
      "Batman"
    ],
    answer: 0,
    story: "Copyright on the 1928 short 'Steamboat Willie' finally expired, freeing that specific early **Mickey**. It was a milestone: fear of losing Mickey had helped drive decades of U.S. copyright extensions (critics nicknamed one the 'Mickey Mouse Protection Act'). Only the 1928 design is free — modern Mickey and the trademark still belong to Disney. Within days, horror films starring the vintage mouse were announced."
  },
  {
    category: "Pop Culture", difficulty: "medium",
    question: "Until 2016, the song 'Happy Birthday to You' was...",
    options: [
      "Under copyright, earning about $2 million a year",
      "Banned from television",
      "Written by Paul McCartney",
      "Only legal to sing in the US"
    ],
    answer: 0,
    story: "The melody dates to an 1893 kindergarten song, 'Good Morning to All.' A publisher claimed the copyright and raked in roughly **$2 million a year** — which is why chain restaurants invented their own goofy birthday songs. In 2015–16 a filmmaker challenged it; a judge ruled the copyright invalid, and the world's most-sung song was finally set free."
  },
  {
    category: "Pop Culture", difficulty: "medium",
    question: "The Mona Lisa became the world's most famous painting largely because it...",
    options: [
      "Was stolen from the Louvre in 1911",
      "Was Napoleon's personal favourite",
      "Won a public vote in the 1800s",
      "Was the first oil painting ever made"
    ],
    answer: 0,
    story: "For centuries it was admired but not iconic. Then in 1911 a Louvre handyman, Vincenzo Peruggia, walked out with it under his coat. The **two-year manhunt** made global headlines; crowds queued just to see the empty space on the wall. When Peruggia was caught trying to sell it in Italy, the painting returned a superstar. The theft, as much as the smile, made it priceless."
  },
  {
    category: "Pop Culture", difficulty: "hard",
    question: "John Cage's 1952 composition '4′33″' consists of...",
    options: [
      "Four minutes 33 seconds in which the performers play nothing",
      "A single note held for 4 minutes",
      "Only percussion",
      "Recorded whale song"
    ],
    answer: 0,
    story: "Performers sit at their instruments and **play nothing** for four minutes and 33 seconds. The 'music' is whatever ambient sound fills the room — coughs, rustling, traffic, your own heartbeat. Cage wanted to show there's no such thing as true silence, and that all sound can be music. It remains one of modern art's most debated works."
  },
  {
    category: "Pop Culture", difficulty: "medium",
    question: "The famous 'HOLLYWOOD' sign originally read...",
    options: ["HOLLYWOODLAND", "HOLLYWOOD USA", "WELCOME", "STARLAND"],
    answer: 0,
    story: "Erected in 1923, the sign was a giant advert for a housing development called **'Hollywoodland,'** meant to stand just 18 months. Instead it became a landmark; the 'LAND' was dropped in 1949. By the 1970s it had rotted so badly that donors — including Hugh Hefner and rocker Alice Cooper — paid to rebuild it letter by letter."
  },
  {
    category: "Pop Culture", difficulty: "medium",
    question: "In 2014, the video 'Gangnam Style' forced YouTube to upgrade its systems because it...",
    options: [
      "Blew past the maximum view count its counter could store",
      "Crashed the video servers",
      "Was flagged by every copyright bot",
      "Was too long to load"
    ],
    answer: 0,
    story: "YouTube stored view counts as a 32-bit number, capping near **2.1 billion** — a limit nobody imagined a video reaching, until Psy's hit blew past it. YouTube announced, tongue in cheek, that it had upgraded to 64-bit counters, good for over 9 quintillion views. It's a rare case of a pop song literally breaking the internet's maths."
  },
  {
    category: "Pop Culture", difficulty: "easy",
    question: "One of cinema's most misquoted lines, from 'The Empire Strikes Back,' is actually...",
    options: [
      "'No, I am your father' (not 'Luke, I am your father')",
      "'Play it again, Sam'",
      "'Beam me up, Scotty'",
      "'Elementary, my dear Watson'"
    ],
    answer: 0,
    story: "Almost everyone 'remembers' Darth Vader saying 'Luke, I am your father.' The real line is **'No, I am your father.'** It joins a hall of fame of misquotes — Bogart never said 'Play it again, Sam,' and Kirk never said 'Beam me up, Scotty.' These shared false memories are so common they've earned a name: the 'Mandela effect.'"
  },

  /* ===================== CHEMISTRY ===================== */
  {
    category: "Chemistry", difficulty: "medium",
    question: "Helium is the only element first discovered somewhere other than Earth. Where?",
    options: ["The Sun", "The Moon", "A meteorite", "Jupiter"],
    answer: 0,
    story: "During an 1868 solar eclipse, astronomers spotted a mystery yellow line in the **Sun's** spectrum matching no known element. They named it 'helium,' after Helios, the Greek sun god. Only in 1895 was it found on Earth, seeping from uranium ore. It's the sole element named for the celestial body where it was detected before anyone isolated it here."
  },
  {
    category: "Chemistry", difficulty: "medium",
    question: "The claim that old cathedral windows are thicker at the bottom because glass slowly flows is...",
    options: [
      "A myth — glass is an amorphous solid",
      "True for all glass",
      "True only for medieval glass",
      "True but takes millions of years"
    ],
    answer: 0,
    story: "You'll often hear glass is a very slow liquid, 'proven' by antique panes being thicker at the base. Not so — glass is an **amorphous solid** and doesn't measurably flow over centuries. Old windows are uneven because early glassmakers couldn't cast them uniformly, and installers usually set the heavier edge at the bottom. The romantic myth just won't flow away."
  },
  {
    category: "Chemistry", difficulty: "medium",
    question: "Gallium is a metal famous for...",
    options: [
      "Melting in your hand (it liquefies around 30°C)",
      "Glowing bright green",
      "Exploding on contact with air",
      "Being the heaviest known metal"
    ],
    answer: 0,
    story: "Solid at room temperature but melting at just 30°C, a chunk of gallium turns to silvery liquid in your **palm**. Chemists love the 'disappearing spoon' prank: cast gallium into a teaspoon, offer it with hot tea, and watch it melt away as the guest stirs. Unlike mercury it's relatively harmless to touch, which is why it stars in so many demos."
  },
  {
    category: "Chemistry", difficulty: "hard",
    question: "Chemist Fritz Haber has a stark dual legacy: his process to pull fertiliser from air feeds billions, but he also...",
    options: [
      "Personally pioneered poison-gas warfare in WWI",
      "Invented dynamite",
      "Falsified the periodic table",
      "Discovered radioactivity"
    ],
    answer: 0,
    story: "Haber's ammonia synthesis lets us make fertiliser from thin air — roughly **half the nitrogen in your body** has passed through it, and it may sustain 4 billion people. Yet Haber also directed Germany's WWI chlorine-gas attacks, earning the title 'father of chemical warfare.' His research later fed the pesticide that became Zyklon B. Few lives capture science's double edge so sharply."
  },
  {
    category: "Chemistry", difficulty: "medium",
    question: "In the 1920s, the 'Radium Girls' who painted glowing watch dials were told the paint was safe and instructed to...",
    options: [
      "Lick their brushes to a fine point",
      "Never wash their hands",
      "Drink a radium tonic each morning",
      "Work in total darkness"
    ],
    answer: 0,
    story: "To paint crisp numbers, workers **'lip-pointed'** their brushes — swallowing radium with every stroke. Told it was harmless, some even painted their nails and teeth for fun. Radium mimics calcium and lodged in their bones, causing horrific decay and cancers. Their landmark lawsuit helped establish workers' right to sue over occupational disease."
  },
  {
    category: "Chemistry", difficulty: "hard",
    question: "During WWII, chemist George de Hevesy hid two Nobel Prize gold medals from the Nazis by...",
    options: [
      "Dissolving them in acid on an open shelf",
      "Burying them in a garden",
      "Melting them into ordinary coins",
      "Posting them abroad"
    ],
    answer: 0,
    story: "To stop the Nazis seizing (and tracing) the medals of two German physicists, de Hevesy **dissolved them in aqua regia** — a mix of acids that eats gold — leaving an unremarkable orange liquid on a shelf that sat untouched through the occupation. Afterward the gold was chemically recovered and the Nobel Foundation recast the medals. Chemistry as quiet resistance."
  },
  {
    category: "Chemistry", difficulty: "hard",
    question: "Gold has a warm colour while most metals are silvery-grey. The reason is...",
    options: [
      "Einstein's relativity acting on its fast inner electrons",
      "Traces of copper impurity",
      "Its cubic crystal shape",
      "A thin layer of rust"
    ],
    answer: 0,
    story: "In heavy atoms like gold, inner electrons orbit at a large fraction of light-speed. **Relativity** makes them behave as if heavier, shifting energy levels so gold absorbs blue light and reflects yellow-red — its signature glow. The same effect helps explain why mercury is liquid. It's one of the few places you can literally see Einstein's physics."
  },
  {
    category: "Chemistry", difficulty: "medium",
    question: "That earthy smell after rain, called 'petrichor,' comes largely from...",
    options: [
      "A compound (geosmin) made by soil bacteria",
      "Ozone from lightning",
      "Pollen bursting open",
      "Wet concrete"
    ],
    answer: 0,
    story: "Much of the scent is **geosmin**, produced by soil bacteria and flung into the air when raindrops hit the ground. Our noses are astonishingly sensitive to it — we can detect a few parts per trillion, better than a shark smells blood. The word 'petrichor' was coined in 1964 from Greek for 'stone' and the 'ichor' said to flow in the gods' veins."
  },
  {
    category: "Chemistry", difficulty: "easy",
    question: "A diamond and the graphite in a pencil are both made of pure...",
    options: ["Carbon", "Silicon", "Boron", "Calcium"],
    answer: 0,
    story: "Same element, wildly different results. In diamond, each **carbon** atom bonds to four others in a rigid 3-D lattice — the hardest natural material. In graphite, carbons form flat sheets that slide past each other, soft enough to mark paper. Only the arrangement differs. Oddly, at room temperature graphite is the more stable form, so your diamond is very, very slowly trying to become pencil lead."
  },
  {
    category: "Chemistry", difficulty: "medium",
    question: "The phrase 'mad as a hatter' most likely comes from...",
    options: [
      "Mercury poisoning among felt hat-makers",
      "A real hat-shop owner named Mad",
      "Lewis Carroll inventing it whole",
      "The heat of hat-drying ovens"
    ],
    answer: 0,
    story: "Felt hatmakers once used **mercury** compounds to mat animal fur into felt. Chronic exposure to the fumes attacked their nervous systems — tremors, slurred speech, irritability, hallucinations — the 'hatter's shakes.' The condition was well known before Lewis Carroll's Mad Hatter (whom he never actually calls 'mad'). Mercury felting wasn't banned in the US until 1941."
  },
  {
    category: "Chemistry", difficulty: "medium",
    question: "Teflon, the non-stick coating, was discovered...",
    options: [
      "By accident, when a canister of gas mysteriously 'vanished'",
      "In a deliberate search for better cookware",
      "In wartime armour research",
      "Aboard a NASA mission"
    ],
    answer: 0,
    story: "In 1938, DuPont chemist Roy Plunkett opened a canister of refrigerant gas expecting a whoosh — but nothing came out, though it still weighed full. The gas had **spontaneously turned to a waxy solid** so slippery almost nothing stuck to it. First used in the Manhattan Project to handle corrosive uranium compounds, Teflon only reached frying pans years later."
  },
  {
    category: "Chemistry", difficulty: "easy",
    question: "The air you're breathing right now is mostly...",
    options: ["Nitrogen (~78%)", "Oxygen (~78%)", "Carbon dioxide", "Water vapour"],
    answer: 0,
    story: "Oxygen gets all the glory, but it's only about 21% of the air. Nearly four-fifths is **nitrogen** — so unreactive that plants and animals can't use it straight from the atmosphere despite being bathed in it. Locking that inert nitrogen into usable fertiliser is a big reason Earth can feed 8 billion people. (The third most common gas is argon, not CO₂.)"
  },

  /* ===================== HISTORY ===================== */
  {
    category: "History", difficulty: "hard",
    question: "Cleopatra lived closer in time to which of these?",
    options: [
      "The Moon landing (1969)",
      "The building of the Great Pyramid",
      "She was exactly halfway between them",
      "The founding of Rome"
    ],
    answer: 0,
    story: "The Great Pyramid was built around 2560 BC. Cleopatra ruled around 30 BC — some 2,500 years later. The Moon landing was 1969, about 2,000 years after her. So Cleopatra lived nearer to **the Apollo landing than to the pyramids**, which were already ancient wonders in her own day. It's a jolt in how carelessly we flatten thousands of years into 'ancient.'"
  },
  {
    category: "History", difficulty: "medium",
    question: "The shortest war in recorded history — the Anglo-Zanzibar War of 1896 — lasted about...",
    options: ["38 minutes", "3 days", "6 hours", "2 weeks"],
    answer: 0,
    story: "When a pro-British sultan of Zanzibar died, a rival seized the palace. Britain issued an ultimatum; when it expired, Royal Navy ships opened fire at 9:02 am. By roughly 9:40 the palace was in ruins, the flag was down, and it was over — about **38 minutes**. The would-be sultan fled, and Britain even billed Zanzibar for the shells it had fired."
  },
  {
    category: "History", difficulty: "medium",
    question: "In 1932, the Australian military deployed soldiers with machine guns and effectively lost a campaign against...",
    options: ["Emus", "Kangaroos", "Rabbits", "Feral camels"],
    answer: 0,
    story: "After WWI, some 20,000 **emus** were trampling wheat crops in Western Australia. Soldiers with two Lewis guns were sent to cull them — but the birds scattered, sprinted at up to 50 km/h, and shrugged off bullets. After thousands of rounds killed only a fraction, the 'Emu War' was quietly called off. The press mocked it; the emus, in effect, won."
  },
  {
    category: "History", difficulty: "hard",
    question: "In Strasbourg in 1518, dozens of people uncontrollably did what for days — some until they collapsed or died?",
    options: ["Danced", "Laughed", "Wept", "Sang"],
    answer: 0,
    story: "It began when a woman called Frau Troffea started **dancing** in the street and couldn't stop. Within a month hundreds had joined, dancing for days without rest; some reportedly died of exhaustion. Baffled officials, thinking more dancing was the cure, even hired musicians. Historians still debate the cause — mass hysteria, extreme stress, or possibly ergot, a hallucinogenic mould on rye."
  },
  {
    category: "History", difficulty: "hard",
    question: "Tsutomu Yamaguchi holds a grim distinction as an officially recognised survivor of...",
    options: [
      "Both atomic bombs — Hiroshima and Nagasaki",
      "The Titanic and the Lusitania",
      "Two separate volcanic eruptions",
      "Both World Wars' front lines"
    ],
    answer: 0,
    story: "On business in Hiroshima on 6 August 1945, Yamaguchi survived the **first** atomic bomb from about 3 km away, badly burned. He travelled home — to Nagasaki — and was back at work on 9 August describing the blast when the **second** bomb detonated. He survived that too, living to age 93. Japan formally recognised him as a double survivor in 2009."
  },
  {
    category: "History", difficulty: "medium",
    question: "In 1807, Napoleon's hunting party was famously routed by a charging swarm of...",
    options: ["Tame rabbits", "Angry bees", "Wild geese", "Field mice"],
    answer: 0,
    story: "To celebrate a treaty, Napoleon's chief of staff arranged a grand rabbit hunt and rounded up hundreds of **rabbits** — but bought them tame, not wild. Released, they mistook the emperor for the farmer who fed them and charged the party looking for food, reportedly swarming up Napoleon's legs. The conqueror of Europe retreated to his carriage. Even bunnies, it seems, could rout him."
  },
  {
    category: "History", difficulty: "medium",
    question: "In 1919, 21 people in Boston were killed by a sudden flood of...",
    options: ["Molasses", "Beer", "Crude oil", "Milk"],
    answer: 0,
    story: "A storage tank holding 2.3 million gallons of **molasses** burst, sending a 25-foot wave of syrup through the North End at an estimated 35 mph. It flattened buildings, buckled an elevated railway, and killed 21 people. Locals swore that for decades afterward, on hot summer days, the neighbourhood still smelled faintly of molasses."
  },
  {
    category: "History", difficulty: "easy",
    question: "The claim that the Great Wall of China is the only human-made object visible from space with the naked eye is...",
    options: [
      "A myth — you can't pick it out from orbit",
      "True from low orbit",
      "True only from the Moon",
      "True at night"
    ],
    answer: 0,
    story: "The Wall is long but only a few metres wide, and roughly the same colour as its surroundings. Astronauts have repeatedly confirmed you **can't** single it out with the naked eye from orbit, let alone the Moon. Ironically, city lights, runways and greenhouses are far easier to spot. The myth even predates human spaceflight — it was in print by the 1930s."
  },
  {
    category: "History", difficulty: "medium",
    question: "Which is older: the University of Oxford, or the Aztec Empire?",
    options: ["Oxford", "The Aztec Empire", "Exactly the same age", "Neither existed before 1500"],
    answer: 0,
    story: "Teaching at **Oxford** dates back to at least 1096 and was well established by 1200. The Aztec capital Tenochtitlan wasn't founded until 1325. So when the Aztecs laid their first stones, Oxford had already granted degrees for over a century — a reminder that 'Old World' and 'New World' timelines rarely line up the way we picture them."
  },
  {
    category: "History", difficulty: "hard",
    question: "The event that helped ignite the Thirty Years' War (1618) is literally named for the act of...",
    options: [
      "Throwing officials out of a window",
      "Poisoning a king",
      "Burning a peace treaty",
      "Storming a cathedral"
    ],
    answer: 0,
    story: "Protestant nobles, furious with Catholic regents, **hurled two royal officials out of a third-storey window** of Prague Castle — a 'defenestration.' Remarkably, all three survived the ~70-foot fall; Catholics credited angels, Protestants noted they landed in a large dung heap. The insult helped touch off the Thirty Years' War, one of history's deadliest conflicts."
  },
  {
    category: "History", difficulty: "medium",
    question: "Genetic studies suggest roughly 1 in 200 men alive today may descend from the male line of...",
    options: ["Genghis Khan", "Julius Caesar", "King Tutankhamun", "Alexander the Great"],
    answer: 0,
    story: "A 2003 study found a Y-chromosome lineage carried by about 8% of men across the former Mongol Empire — some 16 million men. The pattern points to roughly **Genghis Khan's** era and homeland. Through conquest and a great many descendants, the Mongol ruler and his sons may have spread their genes more widely than almost anyone in history."
  },
  {
    category: "History", difficulty: "hard",
    question: "In 897 AD, Pope Stephen VI put on trial and convicted...",
    options: [
      "The exhumed corpse of a previous pope",
      "A living rival bishop",
      "A stone statue",
      "A heretical book"
    ],
    answer: 0,
    story: "In the macabre 'Cadaver Synod,' Stephen VI had the **rotting body of his predecessor Formosus** dug up, dressed in papal robes, propped on a throne, and tried for various offences. Found guilty, the corpse had its blessing fingers hacked off and was thrown in the Tiber. The spectacle so revolted Rome that Stephen was soon imprisoned and strangled."
  },

  /* ===================== INTERNET ===================== */
  {
    category: "Internet", difficulty: "medium",
    question: "The first message ever sent over ARPANET (1969), the internet's ancestor, was...",
    options: [
      "'LO' — the system crashed mid-word while typing 'LOGIN'",
      "'HELLO WORLD'",
      "'TEST'",
      "The '@' symbol"
    ],
    answer: 0,
    story: "On 29 October 1969, a student at UCLA tried to log in to a computer at Stanford by typing 'LOGIN.' The system **crashed after the first two letters** — so the very first thing transmitted across the network that became the internet was simply 'LO.' As programmer Charley Kline noted, it made an accidental but fitting 'Lo!' — as in 'lo and behold.'"
  },
  {
    category: "Internet", difficulty: "medium",
    question: "The first item ever sold on eBay (1995) was...",
    options: ["A broken laser pointer", "A Beanie Baby", "A used car", "A comic book"],
    answer: 0,
    story: "Founder Pierre Omidyar listed a **broken laser pointer** as a test and was stunned when it sold for $14.83. He emailed the buyer to be sure he understood it was broken. The reply: 'I'm a collector of broken laser pointers.' That bizarre exchange convinced Omidyar there was a market for nearly anything — and eBay was born."
  },
  {
    category: "Internet", difficulty: "easy",
    question: "The very first YouTube video, uploaded in 2005, is an 18-second clip titled...",
    options: ["'Me at the zoo'", "'Charlie bit my finger'", "'Evolution of Dance'", "'Numa Numa'"],
    answer: 0,
    story: "Co-founder Jawed Karim filmed himself before the elephants at the San Diego Zoo, observing that 'the cool thing about these guys is that they have really, really, really long trunks.' It's hardly riveting — but **'Me at the zoo'** launched the platform that reshaped video. The clip is still online, with hundreds of millions of views."
  },
  {
    category: "Internet", difficulty: "medium",
    question: "Unwanted bulk email is called 'spam' because of...",
    options: [
      "A Monty Python sketch",
      "The canned meat's inventor",
      "An acronym for 'Stupid Pointless Annoying Messages'",
      "A 1990s computer virus"
    ],
    answer: 0,
    story: "In a 1970 **Monty Python** sketch, a café serves Spam with everything while a chorus of Vikings drowns out talk by chanting 'Spam, Spam, Spam!' The image of something unwanted and endlessly repeated, crowding out all else, stuck with early netizens. By the 1990s, 'spam' was the word for junk flooding inboxes and forums."
  },
  {
    category: "Internet", difficulty: "hard",
    question: "The '404 Not Found' web error is often (wrongly) said to be named after...",
    options: [
      "Room 404 at CERN",
      "A 1970s IBM mainframe",
      "The 404th line of the first web code",
      "The Atlanta area code"
    ],
    answer: 0,
    story: "A popular legend says the web's founders worked in **'Room 404' at CERN**, and errors were named for the room housing the central database. It's charming but false — 404 is just an HTTP status code, where the leading '4' flags a client-side error. Still, the myth is so beloved it gets repeated far more often than the dull truth."
  },
  {
    category: "Internet", difficulty: "medium",
    question: "The first-ever tweet, posted by Jack Dorsey in 2006, read...",
    options: [
      "'just setting up my twttr'",
      "'hello world'",
      "'Twitter is now live!'",
      "'the bird is the word'"
    ],
    answer: 0,
    story: "Dorsey sent it on 21 March 2006 — note the vowel-less **'twttr,'** the service's original name, riding the fad for dropping vowels (like Flickr). In 2021 he auctioned that first tweet as an NFT for $2.9 million; when the buyer tried to resell a year later, top bids were around $280 — a tidy parable of the whole NFT bubble."
  },
  {
    category: "Internet", difficulty: "easy",
    question: "'Rickrolling' tricks someone into clicking a link to which 1987 music video?",
    options: [
      "Rick Astley — 'Never Gonna Give You Up'",
      "Toto — 'Africa'",
      "a-ha — 'Take On Me'",
      "Eurythmics — 'Sweet Dreams'"
    ],
    answer: 0,
    story: "The prank grew from a 2007 4chan bait-and-switch that linked, unexpectedly, to Rick Astley's earnest 1987 hit **'Never Gonna Give You Up.'** It became one of the internet's most enduring gags — used on YouTube, in Congress, even by the White House. Astley, once bemused, has embraced it, even Rickrolling a live crowd himself."
  },
  {
    category: "Internet", difficulty: "medium",
    question: "The world's first website, built by Tim Berners-Lee in 1991, was about...",
    options: [
      "The World Wide Web project itself",
      "CERN's cafeteria menu",
      "A list of physics equations",
      "His personal diary"
    ],
    answer: 0,
    story: "Fittingly, the first website explained **what the Web was** and how to use it — a web page about the web. Berners-Lee built it at CERN on a NeXT computer wearing a handwritten label: 'This machine is a server. DO NOT POWER IT DOWN.' CERN has since restored the original page at its first address, still viewable today."
  },
  {
    category: "Internet", difficulty: "hard",
    question: "The first documented emoticon, :-) posted in 1982, was proposed by Scott Fahlman to...",
    options: [
      "Mark jokes so they wouldn't be misread",
      "Save keystrokes",
      "Test a new font",
      "Encode moods in binary"
    ],
    answer: 0,
    story: "On a Carnegie Mellon message board, misread sarcasm kept causing confusion. Fahlman suggested **:-) to flag jokes** and :-( for serious posts. The sideways smiley spread across early networks and, decades later, seeded the emoji we now send billions of times a day. The original 1982 post was eventually recovered from old backup tapes."
  },
  {
    category: "Internet", difficulty: "easy",
    question: "The name 'Google' comes from...",
    options: [
      "A misspelling of 'googol' (10^100)",
      "A founder's childhood nickname",
      "An acronym for a search algorithm",
      "A building at Stanford"
    ],
    answer: 0,
    story: "Founders Larry Page and Sergey Brin wanted a name evoking vast quantities of data, so they reached for **'googol'** — a 1 followed by 100 zeros. While checking the domain, someone reportedly misspelled it 'google.' They liked it and kept it. That typo now fields billions of searches a day."
  },
  {
    category: "Internet", difficulty: "medium",
    question: "One of the first viral internet sensations, in 1996, was a 3D-animated...",
    options: ["Dancing baby", "Singing hamster", "Frog in a blender", "Talking cat"],
    answer: 0,
    story: "A rendered 3D **baby doing a cha-cha**, made to demo animation software, spread by email chains across the young web and even guest-starred on the TV show Ally McBeal. Long before 'going viral' was a phrase, the 'Dancing Baby' showed how fast a strange little clip could leap from inbox to inbox around the world."
  },

  /* ===================== ANCIENT HISTORY ===================== */
  {
    category: "Ancient History", difficulty: "hard",
    question: "Göbekli Tepe in Turkey, with its massive carved stone pillars, is roughly 11,000 years old — meaning it predates...",
    options: [
      "Farming, pottery, the wheel and writing — all of them",
      "Only the pyramids",
      "Only Stonehenge",
      "Nothing; it came after farming"
    ],
    answer: 0,
    story: "Built by hunter-gatherers around 9500 BC, Göbekli Tepe is older than **agriculture, pottery, metal tools, the wheel and writing** — and predates Stonehenge and the pyramids by millennia. Its T-shaped megaliths, some weighing tons, hint that organised religion may have come *before* settled farming, upending the old story that farms came first and temples followed."
  },
  {
    category: "Ancient History", difficulty: "medium",
    question: "The Antikythera mechanism, recovered from a ~2,000-year-old Greek shipwreck, functioned as a...",
    options: [
      "Hand-cranked astronomical computer",
      "Water clock",
      "Navigation compass",
      "Musical automaton"
    ],
    answer: 0,
    story: "Divers found the corroded bronze lump in 1901. Decades of imaging revealed at least 30 interlocking gears modelling the Sun, Moon and planets, predicting eclipses, and even tracking the four-year Olympic cycle. Nothing of comparable complexity appears again for **over a thousand years** — earning it the title of the world's first known analog computer."
  },
  {
    category: "Ancient History", difficulty: "medium",
    question: "Ancient Roman concrete has outlasted much modern concrete partly because it can...",
    options: [
      "Self-heal its own cracks",
      "Bend like rubber",
      "Absorb sunlight for strength",
      "Float on water"
    ],
    answer: 0,
    story: "The Pantheon's unreinforced dome has stood for nearly 1,900 years while modern concrete crumbles in decades. Recent research found tiny lumps of lime that, when cracks form and water seeps in, dissolve and **recrystallise to seal the gap**. Seawater even made Roman marine concrete stronger over time. Engineers are now racing to reverse-engineer the recipe."
  },
  {
    category: "Ancient History", difficulty: "medium",
    question: "The oldest known written customer complaint, on a ~3,800-year-old Babylonian tablet, is about...",
    options: [
      "A merchant delivering low-grade copper",
      "Unpaid taxes",
      "A broken chariot",
      "Spoiled grain"
    ],
    answer: 0,
    story: "A customer named Nanni inscribed a furious complaint to a copper dealer, **Ea-nasir**, about sub-standard metal and rude treatment. The tablet, now in the British Museum, has made Ea-nasir perhaps history's most infamous bad businessman — roasted in internet memes nearly four millennia later. Other complaint tablets found in his house suggest he had a pattern."
  },
  {
    category: "Ancient History", difficulty: "medium",
    question: "The Great Pyramid of Giza held the record as the tallest human-made structure on Earth for about...",
    options: ["3,800 years", "500 years", "200 years", "1,000 years"],
    answer: 0,
    story: "Completed around 2560 BC at about 146 metres, the Great Pyramid remained the tallest thing humans had ever built until Lincoln Cathedral's spire edged past it around 1311 AD — a staggering **3,800-year reign**. It was also aligned to true north with an accuracy not bettered until modern times. No engineering record has come close to lasting so long."
  },
  {
    category: "Ancient History", difficulty: "hard",
    question: "The Library of Alexandria's loss of knowledge is best described as...",
    options: [
      "A slow decline over centuries, not one great fire",
      "A single night's blaze",
      "Destroyed by an earthquake in a day",
      "Never actually lost"
    ],
    answer: 0,
    story: "Popular imagination pictures the ancient world's knowledge vanishing in one apocalyptic blaze. Historians suspect the reality was slower and sadder: budget cuts, expelled scholars, **several partial fires** (including one Julius Caesar accidentally started), and centuries of neglect. The 'burning of the library' is less an event than a symbol for the fragile, cumulative loss of knowledge."
  },
  {
    category: "Ancient History", difficulty: "medium",
    question: "Ötzi the Iceman, a 5,300-year-old mummy found melting from an Alpine glacier in 1991, died from...",
    options: [
      "An arrowhead in the shoulder — he was murdered",
      "Freezing in his sleep",
      "A fall from a cliff",
      "Old age"
    ],
    answer: 0,
    story: "Two hikers found Ötzi's astonishingly preserved body. Scientists have read his life in detail — his last meals, his 61 tattoos, his tools, even his risk of heart disease. A CT scan revealed an **arrowhead lodged in his shoulder**: he was shot from behind and bled out, making him one of history's oldest known murder victims."
  },
  {
    category: "Ancient History", difficulty: "hard",
    question: "The ~2,000-year-old 'Baghdad Battery,' a clay jar with a copper cylinder and iron rod, is debated because it might have been...",
    options: [
      "A simple electric cell",
      "A cooking pot",
      "A child's toy",
      "A sundial base"
    ],
    answer: 0,
    story: "Filled with an acid like vinegar, the jar can produce about **one volt**, leading some to wonder if ancient people generated electricity, perhaps for electroplating. Most archaeologists are sceptical, suspecting it merely held sacred scrolls that dissolved away. Battery or storage jar, it remains one of archaeology's most tantalising question marks."
  },
  {
    category: "Ancient History", difficulty: "medium",
    question: "The writing system of the ancient Indus Valley Civilisation is remarkable because it...",
    options: [
      "Remains undeciphered to this day",
      "Was the world's first alphabet",
      "Was written entirely in gold",
      "Used only numbers"
    ],
    answer: 0,
    story: "The Indus people built sophisticated cities with grid streets and plumbing over 4,000 years ago and left thousands of short seal inscriptions. Yet **no one has cracked their script** — there's no Rosetta Stone, the texts are tiny (often five signs), and we don't even know what language they spoke. It's one of the great unread scripts of the ancient world."
  },
  {
    category: "Ancient History", difficulty: "medium",
    question: "The Rosetta Stone unlocked Egyptian hieroglyphs because it carried the same decree in...",
    options: [
      "Three scripts, one of them ancient Greek",
      "Pure gold lettering",
      "A secret priestly code",
      "Pictures with no text"
    ],
    answer: 0,
    story: "Carved in 196 BC, the stone repeats one royal decree in hieroglyphic, demotic and **ancient Greek**. Since scholars could still read Greek, it gave them a crib to crack the long-silent hieroglyphs. After a fierce rivalry, Jean-François Champollion deciphered them in 1822, reopening 3,000 years of Egyptian writing. Napoleon's soldiers had found the stone while digging a fort."
  },
  {
    category: "Ancient History", difficulty: "medium",
    question: "The world's oldest known recipe, from ancient Sumer, gives instructions for making...",
    options: ["Beer", "Bread", "Stew", "Wine"],
    answer: 0,
    story: "A 3,900-year-old clay tablet holds a hymn to Ninkasi, the Sumerian goddess of **beer** — which doubles as a brewing recipe using bread and dates. Beer was central to Mesopotamian life, safer than river water and even used to pay workers building temples. Modern brewers have recreated it, producing a tangy, date-sweet ancient ale."
  },

  /* ===================== SPACE ===================== */
  {
    category: "Space", difficulty: "medium",
    question: "On Venus, a single day is...",
    options: [
      "Longer than its entire year",
      "Exactly 24 hours",
      "About one Earth week",
      "The same length as Earth's"
    ],
    answer: 0,
    story: "Venus spins so slowly that one rotation takes about **243 Earth days** — while it orbits the Sun in only 225. So a Venusian 'day' outlasts its 'year.' Stranger still, Venus rotates backward compared with most planets, so from its surface the Sun would rise in the west and set in the east."
  },
  {
    category: "Space", difficulty: "medium",
    question: "Deep inside Neptune and Uranus, scientists believe it may literally rain...",
    options: ["Diamonds", "Liquid iron", "Molten glass", "Ammonia snow"],
    answer: 0,
    story: "Crushing heat and pressure squeeze methane deep in these ice giants, breaking off carbon that compresses into **diamonds**, which may then 'hail' down toward the core. Lab experiments firing lasers at plastic have actually produced tiny diamonds under such conditions, lending real support to the idea of diamond rain on the outer planets."
  },
  {
    category: "Space", difficulty: "hard",
    question: "A single teaspoon of neutron-star material would weigh about...",
    options: ["A billion tons", "A few kilograms", "One ton", "A thousand tons"],
    answer: 0,
    story: "When a massive star's core collapses, protons and electrons are crushed into neutrons, packing the mass of the Sun into a city-sized ball. A sugar-cube-sized piece would weigh roughly a **billion tons** on Earth — about as much as a mountain. These stellar corpses can also spin hundreds of times per second."
  },
  {
    category: "Space", difficulty: "medium",
    question: "Given a big enough ocean, the planet Saturn would...",
    options: ["Float", "Sink instantly", "Dissolve", "Boil the water away"],
    answer: 0,
    story: "Saturn is a gas giant, mostly hydrogen and helium, with an average density **lower than water's**. In principle, dropped into a large enough sea it would bob like a cork — the only planet in our solar system that would. (It has no solid surface and would make a spectacular mess, but the density fact holds.)"
  },
  {
    category: "Space", difficulty: "medium",
    question: "Astronauts returning from spacewalks report that space smells like...",
    options: ["Seared steak or spent gunpowder", "Fresh roses", "Nothing at all", "The sea"],
    answer: 0,
    story: "You can't smell the vacuum directly, but a distinct odour clings to suits and airlocks after a spacewalk — often described as **seared steak, hot metal, or gunpowder**. It's thought to come from high-energy compounds drifting in space. Apollo astronauts said moon dust, tracked into the lander, smelled like spent gunpowder too."
  },
  {
    category: "Space", difficulty: "easy",
    question: "The astronauts' footprints on the Moon will likely last...",
    options: ["Millions of years", "A few decades", "Until the next lunar sunrise", "About a century"],
    answer: 0,
    story: "The Moon has no atmosphere, so there's no wind or rain to erase them. The Apollo footprints will stay crisp for **millions of years**, worn only slowly by micrometeorite dust and solar wind. Neil Armstrong's first step is, in effect, one of the longest-lasting marks humanity has ever made."
  },
  {
    category: "Space", difficulty: "hard",
    question: "In 1977, astronomer Jerry Ehman circled a strong, unexplained radio signal on a printout and wrote what beside it?",
    options: ["'Wow!'", "'Aliens?'", "'Error'", "'Ignore'"],
    answer: 0,
    story: "While scanning for extraterrestrial signals, Ohio State's Big Ear telescope caught a 72-second burst so strong, and so like a predicted alien transmission, that Ehman circled it and scrawled **'Wow!'** in the margin. Despite decades of searching, it has never repeated, and its source is still unknown — the most tantalising possible 'hello' SETI has ever logged."
  },
  {
    category: "Space", difficulty: "medium",
    question: "Olympus Mons on Mars, the tallest known volcano in the solar system, is about...",
    options: [
      "Two and a half times the height of Mount Everest",
      "The same height as Everest",
      "Half the height of Everest",
      "Ten times the height of Everest"
    ],
    answer: 0,
    story: "Olympus Mons rises about 22 km — nearly **three times Everest** — and sprawls across an area the size of Poland. With no shifting tectonic plates, a single Martian volcano could sit over a hot spot and grow for eons. Its slopes are so gentle and its base so wide that, standing on it, you couldn't even see the summit over the horizon."
  },
  {
    category: "Space", difficulty: "easy",
    question: "Laika, the first animal to orbit Earth (1957), was a...",
    options: ["Stray dog from Moscow", "Trained chimpanzee", "Laboratory mouse", "House cat"],
    answer: 0,
    story: "The Soviets chose Laika, a **Moscow stray**, reasoning a street dog would already be hardened to cold and hunger. She launched aboard Sputnik 2 with no way home — a one-way mission. Officials long obscured her fate; it later emerged she died within hours from overheating. Laika proved a living creature could survive launch and weightlessness."
  },
  {
    category: "Space", difficulty: "hard",
    question: "A little of the 'snow' (static) on old analog TVs between channels came from...",
    options: [
      "The cosmic microwave background — the Big Bang's afterglow",
      "Sunspots",
      "Nearby radio towers",
      "The TV's own circuits only"
    ],
    answer: 0,
    story: "Tune an old analog TV to a dead channel and a small share of that fuzz came from the **cosmic microwave background** — faint radiation from about 380,000 years after the Big Bang, now stretched to microwaves that fill all of space. You were, in a real sense, watching the leftover glow of the universe's birth in your living room."
  },
  {
    category: "Space", difficulty: "medium",
    question: "The Voyager probes, now in interstellar space, each carry a golden record containing...",
    options: [
      "Sounds and images of Earth for any finder",
      "The probe's own blueprints",
      "Solid gold bullion",
      "A map to Earth's defences"
    ],
    answer: 0,
    story: "Curated by a team led by Carl Sagan, the record holds greetings in 55 languages, music from Bach to Chuck Berry, Earth sounds, and encoded images — plus a map of our location drawn using pulsars as landmarks. **Voyager 1** is now the most distant human-made object, over 24 billion km away, carrying its message in a bottle for perhaps a billion years."
  },
  {
    category: "Space", difficulty: "hard",
    question: "The red supergiant star Betelgeuse is so far away that if it exploded as a supernova...",
    options: [
      "It may already have done so and we wouldn't know yet",
      "Earth would be destroyed",
      "We'd feel it the same instant",
      "It would simply vanish silently"
    ],
    answer: 0,
    story: "Betelgeuse lies about 550 light-years away, so we see it as it was 550 years ago. It's near the end of its life and will one day go supernova — perhaps tonight, perhaps in 100,000 years. If it **just** exploded, the light might already be racing toward us. When it comes, it'll shine bright enough to see in daylight, but it's far too distant to harm us."
  },
  {
    category: "Space", difficulty: "medium",
    question: "The Sun makes up roughly what share of all the mass in our solar system?",
    options: ["About 99.8%", "About 75%", "About 50%", "About 90%"],
    answer: 0,
    story: "The Sun holds about **99.8%** of the solar system's mass. Everything else — all eight planets, every moon, asteroid and comet — is essentially rounding error in the leftover 0.2%, most of which is Jupiter. It's less that the planets orbit the Sun and more that they're minor debris circling a star that kept almost everything for itself."
  },
  {
    category: "Space", difficulty: "hard",
    question: "The exoplanet 55 Cancri e is nicknamed the 'diamond planet' because it may be rich in...",
    options: [
      "Carbon (possibly crystallised into diamond)",
      "Solid gold",
      "Pure water ice",
      "Uranium"
    ],
    answer: 0,
    story: "Early studies suggested this scorching super-Earth might be **carbon-rich** enough that much of its interior could be graphite and diamond. Later data muddied the picture, but 55 Cancri e stays bizarre: so close to its star that a year lasts just 18 hours, with a surface that may be a churning ocean of lava."
  },

  /* ===================== FINANCE ===================== */
  {
    category: "Finance", difficulty: "medium",
    question: "At the peak of 1630s Dutch 'Tulip mania,' a single prized tulip bulb could briefly cost as much as...",
    options: ["A grand canal house", "A loaf of bread", "A pair of shoes", "A week's groceries"],
    answer: 0,
    story: "In early 1637, some rare bulbs reportedly traded for more than a craftsman earned in a decade — enough, it was said, to buy a fine **canal house**. Then prices collapsed almost overnight as buyers vanished. Often called history's first speculative bubble, tulip mania became the classic warning about markets detached from real value — though historians still debate how widespread the ruin truly was."
  },
  {
    category: "Finance", difficulty: "hard",
    question: "The world's first company to sell shares of stock to the general public was the...",
    options: [
      "Dutch East India Company (VOC)",
      "Bank of England",
      "British East India Company",
      "Medici Bank"
    ],
    answer: 0,
    story: "Founded in 1602, the **Dutch East India Company** sold shares to ordinary citizens to fund risky spice voyages, and the Amsterdam exchange grew up to trade them — the birth of the modern stock market. The VOC grew so mighty it could wage war and mint coins. Adjusted for inflation, some estimates rank it the most valuable company in all of history."
  },
  {
    category: "Finance", difficulty: "medium",
    question: "New York's Wall Street is named after...",
    options: [
      "An actual defensive wall built by Dutch settlers",
      "A banker named Walter Wall",
      "A wall of early stock tickers",
      "The Great Wall, as a nod to trade with China"
    ],
    answer: 0,
    story: "In the 1600s, Dutch colonists in New Amsterdam built a wooden **defensive wall** along the settlement's northern edge. The street beside it became 'Wall Street.' The wall was later torn down, but the name endured — and the street grew into the heart of global finance, its origin as a literal fortification long forgotten."
  },
  {
    category: "Finance", difficulty: "hard",
    question: "The worst hyperinflation ever recorded happened in 1946 in...",
    options: ["Hungary", "Weimar Germany", "Zimbabwe", "Venezuela"],
    answer: 0,
    story: "After WWII, **Hungary's** pengő inflated so catastrophically that prices doubled roughly every 15 hours. The government printed a note worth 100 quintillion pengő, and still it was nearly worthless. People hauled cash in wheelbarrows. It remains the fastest hyperinflation ever measured — outstripping even Weimar Germany and modern Zimbabwe."
  },
  {
    category: "Finance", difficulty: "easy",
    question: "On 'Bitcoin Pizza Day,' a programmer in 2010 famously paid 10,000 bitcoins for...",
    options: ["Two pizzas", "A used car", "A laptop", "A vacation"],
    answer: 0,
    story: "Laszlo Hanyecz paid 10,000 BTC for **two Papa John's pizzas** — the first known purchase of a physical good with Bitcoin, worth about $41 at the time. At Bitcoin's later peaks those coins were worth hundreds of millions of dollars, arguably the priciest fast-food order in history. Enthusiasts still toast 22 May as 'Bitcoin Pizza Day.'"
  },
  {
    category: "Finance", difficulty: "medium",
    question: "The '$' dollar sign most likely evolved from...",
    options: [
      "The Spanish peso ('pieces of eight')",
      "The letters U and S overlaid",
      "A serpent on a staff",
      "The British pound symbol"
    ],
    answer: 0,
    story: "The leading theory traces '$' to the Spanish **peso**, which circulated widely in early America. Clerks abbreviated pesos as 'Ps,' and over time the P and s merged into a single stroked mark. So the American dollar sign is really a ghost of Spanish colonial silver — the tidy 'U over S' story is a charming myth."
  },
  {
    category: "Finance", difficulty: "hard",
    question: "A persistent (mostly false) legend says Nathan Rothschild made a fortune in 1815 by...",
    options: [
      "Getting early word of Napoleon's defeat at Waterloo",
      "Printing counterfeit banknotes",
      "Robbing the Bank of England",
      "Betting on the weather"
    ],
    answer: 0,
    story: "The tale claims Rothschild learned of **Waterloo** first, tricked traders into selling, then bought cheap and cleaned up. Historians find scant evidence he profited hugely, and the story was later embellished by antisemitic propaganda. It survives as finance's most famous 'information is money' myth — fiction wrapped around the kernel of a real courier network."
  },
  {
    category: "Finance", difficulty: "hard",
    question: "In the 1963 'Salad Oil Scandal,' banks were fooled into lending millions against tanks that were mostly full of...",
    options: ["Seawater", "Sand", "Air", "Cheap wine"],
    answer: 0,
    story: "Trader Tino De Angelis knew oil floats on water, so he filled tanks mostly with **seawater** topped by a thin layer of soybean oil to fool inspectors, then borrowed against the phantom stockpile. Its collapse rocked Wall Street and battered American Express — whose beaten-down shares a young Warren Buffett then scooped up, making one of his early fortunes."
  },
  {
    category: "Finance", difficulty: "medium",
    question: "The stock-market terms 'bull' and 'bear' may come from the way each animal...",
    options: [
      "Attacks — a bull thrusts its horns up, a bear swipes down",
      "Runs — bulls are fast, bears slow",
      "Sleeps through winter",
      "Was traded at old fairs"
    ],
    answer: 0,
    story: "One popular explanation: a bull strikes by thrusting its horns **upward** (a rising market), while a bear swipes its paws **downward** (a falling one). 'Bear' likely came first, from a proverb about selling 'the bearskin before catching the bear' — i.e., selling shares you don't yet own, betting prices will drop. Bulls were paired on as the natural opposite."
  },
  {
    category: "Finance", difficulty: "hard",
    question: "In 1980, the Hunt brothers of Texas nearly cornered the global market in...",
    options: ["Silver", "Gold", "Oil", "Wheat"],
    answer: 0,
    story: "Oil heirs Nelson and William Hunt bought staggering amounts of **silver**, driving the price from about $6 to nearly $50 an ounce and controlling a huge slice of world supply. When exchanges changed the rules to curb speculation, silver crashed on 'Silver Thursday,' vaporising over a billion dollars of the brothers' wealth and rattling Wall Street — a legendary cornering gone wrong."
  },
  {
    category: "Finance", difficulty: "medium",
    question: "The story that Manhattan was 'bought' in 1626 for about $24 in goods is most often used to illustrate...",
    options: [
      "The power of compound interest",
      "Colonial property law",
      "Currency exchange rates",
      "Housing bubbles"
    ],
    answer: 0,
    story: "Dutch official Peter Minuit reportedly acquired Manhattan for trade goods later mythologised as '$24.' Economists love noting that invested at a modest **compound interest** rate for ~400 years, that sum would now exceed the value of all Manhattan's real estate — a vivid lesson in how relentlessly compounding grows. (The real deal was murkier, and the local tribe may not have claimed to 'own' the land at all.)"
  },

  /* ===================== POLITICS ===================== */
  {
    category: "Politics", difficulty: "medium",
    question: "The word 'gerrymandering' combines a governor's name with...",
    options: [
      "A salamander (the shape of a rigged district)",
      "A mythical lizard",
      "A river that split a state",
      "A type of sea monster"
    ],
    answer: 0,
    story: "In 1812, Massachusetts Governor Elbridge Gerry signed off on a wildly contorted electoral district drawn to favour his party. A cartoonist thought it looked like a **salamander** and dubbed it a 'Gerry-mander.' The word stuck for rigging districts. Gerry reportedly found the map distasteful but signed anyway — and earned a permanent place in the political dictionary."
  },
  {
    category: "Politics", difficulty: "medium",
    question: "The political terms 'left' and 'right' originally came from...",
    options: [
      "Where factions sat in France's revolutionary assembly",
      "Which hand people wrote with",
      "Ancient Roman military ranks",
      "The wings of a famous parliament building"
    ],
    answer: 0,
    story: "In the National Assembly of 1789, supporters of the king sat on the president's **right**, while revolutionaries wanting change sat on the **left**. That seating chart became shorthand for ideology and spread worldwide — a whole global vocabulary of politics born from who happened to sit where in one French room."
  },
  {
    category: "Politics", difficulty: "hard",
    question: "The 27th Amendment to the US Constitution set a record for taking how long to be ratified?",
    options: ["202 years", "10 years", "50 years", "2 years"],
    answer: 0,
    story: "Proposed in 1789, this amendment (blocking Congress from giving itself an immediate pay raise) sat unratified for two centuries. In 1982 a University of Texas student, Gregory Watson, argued in a paper that it could still be ratified — and got a **C**. Annoyed, he launched a national campaign; it was ratified in 1992. His grade was eventually changed to an A."
  },
  {
    category: "Politics", difficulty: "medium",
    question: "Until 2024, the only US president to serve two non-consecutive terms was...",
    options: ["Grover Cleveland", "Theodore Roosevelt", "Andrew Jackson", "Martin Van Buren"],
    answer: 0,
    story: "**Cleveland** won in 1884, lost re-election in 1888 (despite winning the popular vote), then won again in 1892 — becoming both the 22nd and 24th president. For 132 years he was the sole president with a gap in his tenure. That changed in 2024, when Donald Trump repeated the feat as the 45th and 47th president."
  },
  {
    category: "Politics", difficulty: "hard",
    question: "The 1928 Kellogg-Briand Pact, signed by dozens of nations, tried to...",
    options: [
      "Outlaw war itself",
      "Ban all chemical weapons",
      "Create the United Nations",
      "Set global tariffs"
    ],
    answer: 0,
    story: "In post-WWI idealism, 60-plus countries — including Germany, Japan and Italy — signed a treaty formally **renouncing war** as policy. It obviously didn't prevent WWII. But it wasn't toothless: the principle that aggressive war is illegal underpinned the prosecution of Nazi leaders at Nuremberg, and it's part of why nations now wage 'conflicts' rather than declaring 'war.'"
  },
  {
    category: "Politics", difficulty: "easy",
    question: "In a 2016 UK public poll to name a £200m polar research ship, the runaway winner was...",
    options: ["Boaty McBoatface", "HMS Britannia", "RRS Endeavour", "Iceberg Dodger"],
    answer: 0,
    story: "When Britain's science agency crowdsourced a name, the internet delivered: **'Boaty McBoatface'** won in a landslide. Officials overruled it, naming the ship RRS Sir David Attenborough — but, as a consolation, christened one of its little yellow research submarines 'Boaty McBoatface.' It's now the cautionary tale for every organisation tempted to let the internet vote."
  },
  {
    category: "Politics", difficulty: "hard",
    question: "To set the record for the longest solo Senate speech (over 24 hours in 1957), Strom Thurmond reportedly prepared by...",
    options: [
      "Taking steam baths to dehydrate himself",
      "Memorising the phone book",
      "Sleeping for two days straight",
      "Drinking gallons of coffee"
    ],
    answer: 0,
    story: "Thurmond spoke for 24 hours 18 minutes to filibuster a civil-rights bill. To avoid a speech-ending bathroom break, he'd reportedly taken **steam baths beforehand to dehydrate**, so his body would soak up fluids rather than pass them. An aide stood by with a bucket, just in case. It remains the longest one-person filibuster in Senate history."
  },
  {
    category: "Politics", difficulty: "medium",
    question: "The world's oldest still-functioning parliament, founded around 930 AD, is in...",
    options: ["Iceland", "England", "Greece", "San Marino"],
    answer: 0,
    story: "Vikings established the **Althing** around 930 at Þingvellir, an open-air site where free men gathered to make laws and settle disputes — long before most modern legislatures existed. It has met, in various forms, for nearly 1,100 years. Þingvellir also lies in a rift valley where the North American and Eurasian tectonic plates are visibly pulling apart."
  },
  {
    category: "Politics", difficulty: "hard",
    question: "In 1967, Australian Prime Minister Harold Holt vanished — and was never found — while...",
    options: ["Swimming in rough surf", "Piloting a small plane", "Hiking alone", "Sailing solo"],
    answer: 0,
    story: "Holt, a keen swimmer, waded into heavy surf near Melbourne and was never seen again. A huge search recovered nothing, fuelling wild theories (a Chinese submarine, a faked death). In a darkly ironic footnote, Melbourne later named a public **swimming centre** after him — the Harold Holt Memorial Swim Centre."
  },
  {
    category: "Politics", difficulty: "hard",
    question: "Switzerland, a model democracy, only granted women the vote in federal elections in...",
    options: ["1971", "1918", "1945", "1848"],
    answer: 0,
    story: "Famed for direct democracy, Switzerland was strikingly late: women couldn't vote federally until **1971**, because the all-male electorate had to approve it by referendum (and rejected it in 1959). One tiny canton, Appenzell Innerrhoden, held out until 1990 — when the federal court finally forced it to let women vote locally."
  },

  /* ===================== GENERAL KNOWLEDGE ===================== */
  {
    category: "General Knowledge", difficulty: "easy",
    question: "Archaeologists have found pots of honey in ancient Egyptian tombs that were still...",
    options: ["Perfectly edible after 3,000+ years", "Turned to solid stone", "Toxic", "Completely evaporated"],
    answer: 0,
    story: "Honey's low moisture, high acidity and trace hydrogen peroxide make it hostile to the microbes that spoil food, so sealed honey essentially **never goes off**. Explorers of Egyptian tombs have reportedly found 3,000-year-old honey still good to eat. Stored properly, it may be the only food that lasts effectively forever."
  },
  {
    category: "General Knowledge", difficulty: "easy",
    question: "How many hearts does an octopus have?",
    options: ["Three", "One", "Two", "Five"],
    answer: 0,
    story: "Two hearts pump blood through the gills; the **third** sends it round the body. That main heart stops when the octopus swims, which is one reason they often prefer crawling — swimming literally tires them out. Their blood is blue, using copper-based hemocyanin instead of iron to grab oxygen from cold, low-oxygen water."
  },
  {
    category: "General Knowledge", difficulty: "medium",
    question: "Botanically speaking, which of these is a true berry?",
    options: ["A banana", "A strawberry", "A raspberry", "A blackberry"],
    answer: 0,
    story: "To a botanist a 'berry' comes from one flower with a single ovary, seeds embedded in the flesh — which makes **bananas**, grapes, tomatoes and even watermelons berries. Strawberries and raspberries aren't: a strawberry's 'seeds' are its true fruits, dotted on the outside. Everyday names and botanical ones simply don't match up."
  },
  {
    category: "General Knowledge", difficulty: "medium",
    question: "The Eiffel Tower can stand about 15 cm taller in summer than in winter because...",
    options: [
      "Its iron expands in the heat",
      "Crowds of tourists stretch it",
      "It's repainted each spring",
      "Summer winds lift the top"
    ],
    answer: 0,
    story: "Metal expands when heated, and the tower's 10,000 tons of iron are no exception. On a hot day it can grow roughly **15 cm** taller, and the sun-facing side expands more, tilting the top slightly away from the sun. It's essentially a giant, slow-motion thermometer, breathing with the seasons."
  },
  {
    category: "General Knowledge", difficulty: "hard",
    question: "Under the right conditions, hot water can freeze faster than cold water. This is the...",
    options: ["Mpemba effect", "Leidenfrost effect", "Joule effect", "Coriolis effect"],
    answer: 0,
    story: "It's named after Tanzanian schoolboy Erasto **Mpemba**, who noticed in 1963 that his hot ice-cream mix froze faster than a cold one — and was mocked until a visiting physicist took him seriously. Scientists still argue over why (evaporation, convection, dissolved gases and supercooling are all suspects), and it doesn't happen every time. Even Aristotle noted it."
  },
  {
    category: "General Knowledge", difficulty: "medium",
    question: "Which appeared on Earth first?",
    options: ["Sharks", "Trees", "They arose together", "Sharks came after the dinosaurs"],
    answer: 0,
    story: "**Sharks** have patrolled the oceans for over 400 million years — before the first true trees took root (around 385 million years ago), before the dinosaurs, before the rings of Saturn, even before Mount Everest existed. They've survived all five mass extinctions, a body plan so successful it's barely needed changing."
  },
  {
    category: "General Knowledge", difficulty: "medium",
    question: "Wombats are the only animals known to produce droppings shaped like...",
    options: ["Cubes", "Stars", "Spirals", "Perfect spheres"],
    answer: 0,
    story: "Wombats deposit distinctly **cube-shaped** poop — 80 to 100 pellets a night. Their intestines have regions of differing stiffness that mould the cubes near the gut's end. Why cubes? Flat sides resist rolling, so wombats can stack their scat on rocks and logs to mark territory. The discovery won an Ig Nobel Prize in 2019."
  },
  {
    category: "General Knowledge", difficulty: "hard",
    question: "The little dot on top of a lowercase 'i' or 'j' is called a...",
    options: ["Tittle", "Jot", "Pip", "Serif"],
    answer: 0,
    story: "That dot is a **tittle**, from the same Latin root as 'title' — a small stroke or mark. It gives us the phrase 'to a T' (originally 'to a tittle'), meaning with exact precision. Scribes added it in medieval manuscripts to tell an 'i' apart from neighbouring pen-strokes in cramped handwriting."
  },
  {
    category: "General Knowledge", difficulty: "easy",
    question: "Flamingos are born grey and turn pink because of...",
    options: [
      "Pigments in the shrimp and algae they eat",
      "Exposure to sunlight",
      "Their age",
      "The mineral content of the water"
    ],
    answer: 0,
    story: "Flamingos get their pink from **carotenoid pigments** in the algae and brine shrimp they eat — the same family of compounds that colours carrots. On a poor diet they fade to white or grey, so zoos supplement their food to keep them rosy. You really are what you eat."
  },
  {
    category: "General Knowledge", difficulty: "medium",
    question: "A group of flamingos is delightfully called a...",
    options: ["Flamboyance", "Flush", "Pod", "Murder"],
    answer: 0,
    story: "English collective nouns get wonderfully strange: flamingos form a **'flamboyance,'** crows a 'murder,' owls a 'parliament,' and jellyfish a 'smack.' Many trace to a 15th-century list in the Book of St Albans, where nobles seemingly competed to coin the most poetic — and sometimes the most tongue-in-cheek — group names."
  },
  {
    category: "General Knowledge", difficulty: "hard",
    question: "The human body actually emits a faint visible glow, but we never see it because...",
    options: [
      "It's about 1,000 times too dim for our eyes",
      "It's pure infrared",
      "It only happens during sleep",
      "It's just a myth"
    ],
    answer: 0,
    story: "Our bodies genuinely give off a tiny amount of visible light — a by-product of metabolic reactions involving free radicals. Japanese researchers confirmed it in 2009 with ultra-sensitive cameras, but the glow is about **1,000 times weaker** than our eyes can detect. It rises and falls through the day, peaking in late afternoon, and is brightest around the cheeks and forehead."
  },

  /* ===================== TRANSPORTATION ===================== */
  {
    category: "Transportation", difficulty: "medium",
    question: "Airplane windows are rounded rather than square because of...",
    options: [
      "Deadly 1950s crashes caused by square windows",
      "Simple manufacturing cost",
      "Passenger preference",
      "Better views"
    ],
    answer: 0,
    story: "The de Havilland Comet, the first jetliner, had square windows. In 1954 two Comets tore apart in mid-air. Investigators found the **sharp corners concentrated stress** from repeated cabin pressurisation, cracking the metal until the fuselage ripped open. Curved windows spread the stress evenly. Every airliner since has rounded windows — a direct legacy of those disasters."
  },
  {
    category: "Transportation", difficulty: "easy",
    question: "An aircraft 'black box' flight recorder is actually painted...",
    options: ["Bright orange", "Matte black", "Silver", "Red"],
    answer: 0,
    story: "Despite the name, recorders are painted bright **orange** so they're easier to spot in wreckage. The 'black box' nickname's origin is murky — perhaps the charring after crashes, perhaps old electronics slang. They're built to survive massive impact, fire and deep-sea pressure, and ping a locator beacon underwater for about 30 days."
  },
  {
    category: "Transportation", difficulty: "hard",
    question: "The word 'jaywalking' was popularised in the 1920s largely by...",
    options: [
      "The auto industry, to blame pedestrians for crashes",
      "Traffic police unions",
      "A popular comic strip",
      "City planners"
    ],
    answer: 0,
    story: "As cars flooded cities and killed pedestrians, public fury threatened to restrict automobiles. The **auto industry** fought back with a PR push to shift blame onto walkers, popularising 'jaywalker' — 'jay' being 1920s slang for a clueless bumpkin. They recast the street as belonging to cars, and crossing 'wrong' as foolish. It worked: jaywalking became a crime."
  },
  {
    category: "Transportation", difficulty: "hard",
    question: "Britain's 1865 'Red Flag Act' required early motor vehicles to...",
    options: [
      "Have a person walk ahead waving a red flag",
      "Be painted bright red",
      "Only drive after dark",
      "Carry a loud warning bell at all times"
    ],
    answer: 0,
    story: "Early 'road locomotives' so alarmed the public that the law required a **crew of three** — including a man walking 60 yards ahead with a red flag (or a lantern at night) to warn horses and pedestrians. Speed was capped at 4 mph in the country, 2 mph in town. The act throttled British car development until it was repealed in 1896."
  },
  {
    category: "Transportation", difficulty: "medium",
    question: "The standard railway track width (4 ft 8½ in) is often traced, half-jokingly, back to...",
    options: [
      "The wheel-ruts worn by Roman chariots",
      "A king's exact foot length",
      "A surveyor's random error",
      "The width of the first steam boiler"
    ],
    answer: 0,
    story: "The much-repeated tale runs: standard gauge came from British tramways, which reused tooling from horse-wagons, whose axle width fit old rutted roads — ruts supposedly worn by **Roman chariots** sized to two horses' rears. It's fun and partly true, though historians caution it's oversimplified (George Stephenson standardised the gauge from local wagonways). Still, it's the classic parable of arbitrary choices locked in forever."
  },
  {
    category: "Transportation", difficulty: "medium",
    question: "Ships measure speed in 'knots' because sailors once gauged it by...",
    options: [
      "Counting knots on a rope trailed behind the ship",
      "The thickness of the ship's ropes",
      "Tying a knot each hour of travel",
      "A knotted signal flag"
    ],
    answer: 0,
    story: "Sailors used a 'chip log' — a wooden panel on a rope with **knots tied at regular intervals**. They tossed it overboard and counted how many knots ran out in a fixed time (measured by a small hourglass). More knots meant more speed. One knot came to mean one nautical mile per hour, and the word outlived the rope-and-log itself."
  },
  {
    category: "Transportation", difficulty: "medium",
    question: "The world's first speeding ticket (England, 1896) was issued to a driver going...",
    options: [
      "About 8 mph (in a 2 mph zone)",
      "Around 60 mph",
      "About 30 mph",
      "Over 100 mph"
    ],
    answer: 0,
    story: "Walter Arnold was caught doing roughly **8 mph** where the limit was 2 mph — and chased down by a policeman on a bicycle. He was fined a shilling. Comically slow by today's standards, but four times the legal limit then. Arnold earned the dubious honour of history's first speeding fine, an early chapter in humanity's long, doomed effort to make drivers slow down."
  },
  {
    category: "Transportation", difficulty: "hard",
    question: "The Boeing 747's distinctive upstairs 'hump' exists because the plane was designed to easily become a...",
    options: [
      "Cargo freighter with a nose that swings open",
      "Double-decker cruise liner",
      "Military bomber",
      "Flying hotel"
    ],
    answer: 0,
    story: "In the 1960s, many assumed supersonic jets would soon replace big subsonic planes for passengers. So Boeing designed the 747 to convert to **cargo hauling**, lifting the cockpit onto a hump so the whole nose could hinge open to load freight. Supersonic travel never took over — but the hump, originally a hedge against obsolescence, became the 747's iconic silhouette."
  },
  {
    category: "Transportation", difficulty: "hard",
    question: "The shift to driving on the right (in places like the US) was pushed largely by...",
    options: [
      "Teamsters riding the left-rear horse of big freight wagons",
      "A decree from Napoleon alone",
      "Early railroad companies",
      "Bicycle manufacturers"
    ],
    answer: 0,
    story: "People once kept **left** (sword arm toward strangers). But American and French teamsters drove big wagons while sitting on the **left-rear horse**, to keep the right whip-hand free — and preferred keeping right so they could judge clearance with oncoming wagons. Henry Ford sealed it by putting the Model T's wheel on the left. Britain and many former colonies stayed left."
  },
  {
    category: "Transportation", difficulty: "hard",
    question: "The Titanic actually carried more lifeboats than the law required, because regulations were based on...",
    options: [
      "A ship's tonnage, not its passenger count",
      "The number of decks",
      "The ship's top speed",
      "The length of the voyage"
    ],
    answer: 0,
    story: "Titanic had lifeboat room for about 1,178 people but carried over 2,200 — and still **exceeded** the legal minimum. British rules set lifeboat capacity by a ship's **tonnage**, using a table that maxed out at 10,000 tons; Titanic was over 46,000. The rules hadn't kept up with ballooning ship sizes. The disaster forced an overhaul requiring a seat for every soul aboard."
  },
  {
    category: "Transportation", difficulty: "medium",
    question: "The 1950s invention that quietly powered globalisation more than any trade treaty was...",
    options: [
      "The standardised shipping container",
      "The jet engine",
      "The barcode",
      "The oil supertanker"
    ],
    answer: 0,
    story: "Trucking entrepreneur Malcolm McLean, tired of watching dockers unload loose cargo piece by piece, shipped goods in **standard steel boxes** that moved seamlessly from ship to truck to train. It cut loading costs by over 90% and made modern global supply chains possible. The humble container arguably reshaped the world economy more than any single policy."
  },

  /* ===================== LANGUAGE ===================== */
  {
    category: "Language", difficulty: "medium",
    question: "The word 'OK' most likely began life as...",
    options: [
      "A jokey 1830s abbreviation of 'oll korrect'",
      "A Native American word",
      "A Civil War tally of '0 killed'",
      "A shipping-crate stamp"
    ],
    answer: 0,
    story: "In 1830s Boston, newspapers had a craze for comically misspelled abbreviations. 'OK' came from **'oll korrect.'** It might have faded, but the 1840 campaign of Martin Van Buren — nicknamed 'Old Kinderhook' — adopted 'OK' as a slogan, cementing it. It's now among the most widely understood words on Earth, its silly origin long forgotten."
  },
  {
    category: "Language", difficulty: "medium",
    question: "The word 'quarantine' comes from the Italian for 'forty' because...",
    options: [
      "Plague-era ships had to wait 40 days before landing",
      "Forty was a sacred number",
      "There were 40 known plagues",
      "Ports lay 40 miles apart"
    ],
    answer: 0,
    story: "During the Black Death, Venetian-controlled ports made suspect ships sit at anchor in isolation for **'quaranta giorni' — 40 days** — before anyone could land. The 14th-century practice gave us 'quarantine.' The 40-day span may have carried religious weight, but it also conveniently outlasted the incubation period of several diseases."
  },
  {
    category: "Language", difficulty: "medium",
    question: "The word 'salary' is tied to 'salt' because...",
    options: [
      "Roman soldiers were paid an allowance connected to salt",
      "Salt tasted salty, like sweat from work",
      "Salt mines paid the first wages",
      "It's pure coincidence"
    ],
    answer: 0,
    story: "'Salary' comes from the Latin 'salarium,' rooted in 'sal' (**salt**). The traditional story is that Roman soldiers received an allowance to buy salt — precious for preserving food — also said to be the root of being 'worth his salt.' Details are debated, but salt was genuinely a form of wealth across many ancient cultures."
  },
  {
    category: "Language", difficulty: "medium",
    question: "The word 'sinister' originally simply meant...",
    options: ["'Left' (as in the left side)", "'Evil'", "'Hidden'", "'Dark'"],
    answer: 0,
    story: "In Latin, **'sinister' meant 'left'** (and 'dexter' meant 'right'). The left side was long viewed with suspicion — linked to bad omens and clumsiness — so 'sinister' drifted toward 'evil.' The bias lingers in English: 'dexterous' (right-handed, skilful) flatters, while 'sinister' does the opposite."
  },
  {
    category: "Language", difficulty: "hard",
    question: "The '-mare' in 'nightmare' originally referred to...",
    options: [
      "A demon believed to sit on sleepers' chests",
      "A female horse",
      "The open sea",
      "The darkness itself"
    ],
    answer: 0,
    story: "In Germanic folklore a 'mare' was an evil spirit that **perched on a sleeper's chest**, causing a crushing, suffocating dread — likely a folk account of sleep paralysis. So a 'night-mare' was this night-demon, not a bad dream in general; only later did the meaning broaden. The horse 'mare' is an unrelated coincidence."
  },
  {
    category: "Language", difficulty: "medium",
    question: "The everyday word 'goodbye' is a worn-down contraction of...",
    options: ["'God be with ye'", "'Good day to you'", "'Good voyage'", "'Going away'"],
    answer: 0,
    story: "'Goodbye' began as **'God be with ye,'** squeezed over centuries of casual speech into 'godbwye' and then 'goodbye.' The 'good' crept in by analogy with 'good day' and 'good night,' quietly replacing 'God.' A farewell we toss off without thinking is really a smoothed-down blessing, centuries in the making."
  },
  {
    category: "Language", difficulty: "hard",
    question: "The word 'avocado' comes from an Aztec (Nahuatl) word that also meant...",
    options: ["Testicle", "Alligator", "Butter", "Green stone"],
    answer: 0,
    story: "The Nahuatl 'ahuacatl' meant both the fruit and **'testicle'** — likely for its shape and the way it hangs in pairs. Spanish colonists reshaped it to 'aguacate,' which English turned into 'avocado.' 'Guacamole' comes from 'ahuacamolli' — literally 'avocado sauce.' (And botanically, the avocado is a berry.)"
  },
  {
    category: "Language", difficulty: "medium",
    question: "The word 'robot,' coined in a 1920 play, comes from a Czech word meaning...",
    options: ["Forced labour / drudgery", "Metal man", "Loyal servant", "Thinking machine"],
    answer: 0,
    story: "Playwright Karel Čapek introduced 'robot' in R.U.R., borrowing the Czech **'robota'** — the drudgery or forced labour of a serf (his brother Josef suggested the word). The play's robots are actually artificial biological beings, not metal machines — and, fittingly for a story about exploited labour, they rise up and overthrow humanity."
  },

  /* ===================== MATHEMATICS ===================== */
  {
    category: "Mathematics", difficulty: "medium",
    question: "The number 'googol' (a 1 followed by 100 zeros) was named in the 1930s by...",
    options: [
      "A mathematician's 9-year-old nephew",
      "The founders of Google",
      "An ancient Greek scholar",
      "A committee of physicists"
    ],
    answer: 0,
    story: "Mathematician Edward Kasner asked his young nephew **Milton Sirotta** to name a huge number; the boy said 'googol.' Kasner also coined 'googolplex' (1 followed by a googol of zeros) — so vast it can't be written out, as there isn't room in the observable universe for the digits. Decades later, a misspelling of 'googol' became the name 'Google.'"
  },
  {
    category: "Mathematics", difficulty: "medium",
    question: "Which number took humans surprisingly long to accept as a genuine 'number'?",
    options: ["Zero", "One", "Pi", "Two"],
    answer: 0,
    story: "For millennia many cultures had no symbol for **zero** — how do you write 'nothing'? It began as a placeholder in Babylon, but treating it as a number you can compute with was pioneered in India around the 7th century by scholars like Brahmagupta. Europe resisted for centuries. Yet modern maths, physics and every computer (built on 0s and 1s) would be impossible without it."
  },
  {
    category: "Mathematics", difficulty: "hard",
    question: "In the 1870s, Georg Cantor proved the mind-bending fact that...",
    options: [
      "Some infinities are larger than others",
      "All infinities are equal",
      "Infinity isn't real",
      "The largest number is a googolplex"
    ],
    answer: 0,
    story: "Cantor showed infinity comes in **different sizes**: the infinity of whole numbers is smaller than the infinity of all decimals between them, because you can't pair them one-to-one. The ideas were so radical that some peers called them a 'disease,' and Cantor faced fierce opposition and deep depression. Today his work sits at the foundation of modern mathematics."
  },
  {
    category: "Mathematics", difficulty: "hard",
    question: "The ancient mathematician Pythagoras led a secretive cult whose strange rules reportedly included...",
    options: [
      "Never eating (or touching) beans",
      "Never speaking above a whisper",
      "Sleeping only three hours a night",
      "Never looking at the Moon"
    ],
    answer: 0,
    story: "The Pythagoreans treated mathematics as nearly mystical and followed odd taboos — the most famous a ban on **beans**. Theories range from beans resembling human organs to the belief they held souls. Legend even says Pythagoras met his death refusing to flee across a bean field. True or not, it captures how maths was once tangled up with mysticism."
  },
  {
    category: "Mathematics", difficulty: "medium",
    question: "A Möbius strip is a loop remarkable for having...",
    options: [
      "Only one side and one edge",
      "Two separate sides",
      "No edges at all",
      "Infinite length"
    ],
    answer: 0,
    story: "Give a paper strip a half-twist and tape the ends: the result has just **one side and one edge**. Trace the middle and you'll return to your start having covered the 'whole' surface without lifting your pen. Cut it down the centre and, surprisingly, it doesn't split in two — it becomes one longer loop. It's a cornerstone of topology, and appears in belts designed to wear evenly."
  },
  {
    category: "Mathematics", difficulty: "hard",
    question: "In many real datasets, the first digit is a '1' about 30% of the time — far more than a '9'. This is...",
    options: ["Benford's Law", "The law of averages", "Zipf's Law", "The Pareto principle"],
    answer: 0,
    story: "You'd expect each leading digit to appear equally, but in naturally occurring numbers **1 leads about 30%** of the time and 9 under 5%. This pattern, Benford's Law, comes from how numbers grow across scales. It's more than a curiosity: forensic accountants use it to sniff out fraud, since faked figures often fail to match the expected digit spread."
  },

  /* ===================== FOOD & DRINK ===================== */
  {
    category: "Food & Drink", difficulty: "medium",
    question: "Carrots were originally purple and white; the familiar orange carrot was likely popularised by...",
    options: [
      "Dutch growers (possibly honouring the House of Orange)",
      "The ancient Romans",
      "The British Royal Navy",
      "French monks"
    ],
    answer: 0,
    story: "Early cultivated carrots were mostly purple, yellow and white. Orange ones came to dominate in the **Netherlands** around the 16th–17th centuries. A popular (if debated) tale says Dutch growers favoured orange as a tribute to William of Orange. Whatever the reason, orange carrots — sweeter and rich in beta-carotene — won out and became the global default."
  },
  {
    category: "Food & Drink", difficulty: "medium",
    question: "The Caesar salad is named after...",
    options: [
      "An Italian restaurateur in Tijuana, Mexico",
      "Julius Caesar",
      "The Caesars Palace casino",
      "An Italian town"
    ],
    answer: 0,
    story: "It has nothing to do with the Roman emperor. It was reportedly invented in 1924 by **Caesar Cardini**, an Italian immigrant running a restaurant in Tijuana. As the story goes, on a busy Fourth of July with supplies low, he improvised it tableside. American tourists — many crossing the border to dodge Prohibition — loved it, and it spread north into a global staple."
  },
  {
    category: "Food & Drink", difficulty: "hard",
    question: "In the 1830s, tomato ketchup was briefly sold in the US as...",
    options: ["A medicine for indigestion", "A wall paint", "A furniture polish", "A dessert topping"],
    answer: 0,
    story: "An Ohio doctor claimed tomatoes cured ailments like indigestion, and by the 1830s tomato 'ketchup' was pressed into **pills and sold as patent medicine** — until imitators peddling fakes collapsed the fad. Ketchup itself predates tomatoes: the word traces to an Asian fermented fish sauce ('ke-tsiap'), and early Western versions were made from mushrooms, walnuts or oysters."
  },
  {
    category: "Food & Drink", difficulty: "medium",
    question: "Studies of retail theft repeatedly crown which the world's most stolen food?",
    options: ["Cheese", "Chocolate", "Wine", "Chewing gum"],
    answer: 0,
    story: "**Cheese** tops the list — with an estimated 4% of all cheese vanishing from shops. Much isn't hungry shoplifters but organised theft: stolen cheese is resold to markets and restaurants, or traded for drugs. Its high value, easy concealment and lack of security tags make it a surprisingly hot black-market commodity."
  },
  {
    category: "Food & Drink", difficulty: "hard",
    question: "In 18th-century Europe, a single pineapple was such a status symbol that people would...",
    options: [
      "Rent one to display at a party",
      "Wear it as a hat",
      "Use it as legal currency",
      "Bury it with the dead"
    ],
    answer: 0,
    story: "Pineapples were fiendishly hard to grow in cold Europe and had to be imported at huge cost — a single fruit could cost the equivalent of thousands of dollars. Rather than eat them, the wealthy displayed them as centrepieces, and those who couldn't afford one could **rent** a pineapple for the evening, the same fruit passed around from party to party until it finally rotted."
  },
  {
    category: "Food & Drink", difficulty: "hard",
    question: "In 1667, the Dutch traded their claim on Manhattan to England partly in exchange for a tiny island prized for its...",
    options: ["Nutmeg", "Gold", "Sugar", "Tobacco"],
    answer: 0,
    story: "In the Treaty of Breda, the Dutch gave up New Amsterdam (Manhattan) and took the tiny Indonesian island of Run — a source of **nutmeg**, then worth more than gold and believed to ward off plague. Swapping a swampy trading post for a spice island looked shrewd at the time. History, of course, had other plans for Manhattan."
  },
  {
    category: "Food & Drink", difficulty: "medium",
    question: "The Aztecs valued cacao beans so highly that they used them as...",
    options: ["Money", "Weapons", "Building material", "Jewellery only"],
    answer: 0,
    story: "For the Aztecs and Maya, cacao beans were literal **currency** — a turkey might cost around 100 beans, a tamale one. Chocolate itself was a bitter, spiced drink reserved mostly for nobles and warriors and used in rituals; sweet, solid chocolate came much later in Europe. Counterfeiters even faked cacao beans out of painted clay."
  },

  /* ===================== PSYCHOLOGY ===================== */
  {
    category: "Psychology", difficulty: "medium",
    question: "The tendency for the least-skilled people to most overestimate their ability is the...",
    options: ["Dunning-Kruger effect", "Halo effect", "Imposter syndrome", "Confirmation bias"],
    answer: 0,
    story: "Psychologists Dunning and Kruger showed in 1999 that people worst at a task often rate themselves above average — because the skills needed to do well are the same ones needed to *see* you're doing badly. Their study was partly inspired by a bank robber who rubbed **lemon juice** on his face, sure it would make him invisible to cameras (as invisible ink is invisible on paper). It did not."
  },
  {
    category: "Psychology", difficulty: "medium",
    question: "The 'bystander effect' describes how people are less likely to help someone in trouble when...",
    options: [
      "More other people are present",
      "It's late at night",
      "They're in a hurry",
      "The victim is a stranger"
    ],
    answer: 0,
    story: "The **more witnesses** to an emergency, the less likely any single one steps in — each assumes someone else will, diffusing responsibility. The idea was spurred by the 1964 murder of Kitty Genovese, sensationally (and inaccurately) reported as 38 neighbours doing nothing. The original story was exaggerated, but decades of experiments confirmed the underlying effect is real."
  },
  {
    category: "Psychology", difficulty: "medium",
    question: "The famous Stanford 'marshmallow test' measured children's ability to...",
    options: [
      "Delay gratification for a bigger reward",
      "Share food fairly",
      "Resist peer pressure",
      "Recognise their own reflection"
    ],
    answer: 0,
    story: "Kids were offered one marshmallow now or two if they could wait ~15 minutes alone with the treat. Early follow-ups suggested the 'waiters' fared better in life, making it famous. But recent, larger studies found the link is **much weaker** and heavily tied to a child's background — kids from unstable homes rationally grab the sure thing. A cautionary tale about over-hyped psychology."
  },
  {
    category: "Psychology", difficulty: "hard",
    question: "Pavlov's famous dogs were actually conditioned to salivate at...",
    options: [
      "Neutral signals like metronomes and buzzers (the 'bell' is largely a myth)",
      "Only the sight of food",
      "Their trainer's footsteps",
      "A ringing bell, exactly as the story goes"
    ],
    answer: 0,
    story: "Pavlov showed dogs could learn to link a neutral signal with food and salivate at the signal alone — the basis of **classical conditioning**. Pop culture insists it was a bell, but his lab more often used metronomes, buzzers and lights; the 'bell' may be a mistranslation. His work began as a study of digestion and accidentally launched behavioural psychology."
  },
  {
    category: "Psychology", difficulty: "medium",
    question: "The 'cocktail party effect' is your brain's knack for...",
    options: [
      "Focusing on one conversation amid many",
      "Remembering names better when tipsy",
      "Detecting when someone is lying",
      "Unconsciously copying others' accents"
    ],
    answer: 0,
    story: "In a room full of overlapping chatter you can lock onto **one conversation** and filter out the rest — yet still snap to attention if someone across the room says your name. That shows your brain is quietly scanning the 'ignored' background for important signals. It's a feat voice assistants and noise-cancelling systems still can't fully match."
  },
  {
    category: "Psychology", difficulty: "hard",
    question: "Learning a new word and then suddenly noticing it everywhere is called the...",
    options: [
      "Baader-Meinhof phenomenon (the frequency illusion)",
      "Mandela effect",
      "Déjà vu",
      "Placebo effect"
    ],
    answer: 0,
    story: "You learn a new word or name — and suddenly it's everywhere. This **frequency illusion** is nicknamed the Baader-Meinhof phenomenon, after someone who coincidentally heard that obscure name twice in a day. Nothing in the world has changed; your brain, having just tagged the thing as notable, now notices and remembers each appearance — selective attention and confirmation bias working together."
  },

  /* ===================== INDIAN HISTORY ===================== */
  {
    category: "Indian History", difficulty: "medium",
    question: "The towering Brihadeeswarar 'Big Temple' at Thanjavur, built around 1010 CE, was commissioned by which Chola emperor?",
    options: ["Rajaraja Chola I", "Krishnadevaraya", "Ashoka", "Narasimhavarman"],
    answer: 0,
    story: "**Rajaraja Chola I** raised this granite masterpiece in Tamil Nadu in roughly five years. Its 66-metre vimana was among the tallest of its age, and its crowning stone reportedly weighs some 80 tons — yet there's no granite quarry for miles, so every block was hauled in. A thousand years on it still stands, a UNESCO 'Great Living Chola Temple' and an active place of worship."
  },
  {
    category: "Indian History", difficulty: "hard",
    question: "Which medieval Tamil dynasty built a navy powerful enough to raid the Srivijaya empire across the Bay of Bengal (in today's Indonesia and Malaysia)?",
    options: ["The Cholas", "The Pallavas", "The Mughals", "The Guptas"],
    answer: 0,
    story: "Around 1025 CE **Rajendra Chola I** sent a fleet across the sea to strike Srivijaya — a rare case of pre-modern Indian power projected overseas. He also marched north all the way to the Ganges, taking the title 'Gangaikonda' (he who brought the Ganges) and building a new capital, Gangaikonda Cholapuram. Chola trade links reached as far as China."
  },
  {
    category: "Indian History", difficulty: "medium",
    question: "The exquisite Chola bronzes — like the dancing Shiva (Nataraja) — were cast using which technique?",
    options: [
      "Lost-wax casting (the mould is destroyed to free each piece)",
      "Iron forging",
      "Stone carving",
      "Gold electroplating"
    ],
    answer: 0,
    story: "Each Chola bronze was made by **lost-wax casting**: a wax model is coated in clay, the wax melted out, molten bronze poured in, and the mould broken — so every statue is unique. The Nataraja, Shiva dancing the universe into being within a ring of fire, is so iconic that CERN, the particle-physics lab, keeps a giant statue of it as a symbol of the cosmic dance of matter."
  },
  {
    category: "Indian History", difficulty: "medium",
    question: "In 2004, Tamil became the first language officially declared a 'Classical Language' of India, recognised for...",
    options: [
      "A continuous literary tradition spanning over two thousand years",
      "Having the world's oldest alphabet",
      "Being India's most spoken language",
      "Being the language of the royal court"
    ],
    answer: 0,
    story: "Tamil's literature stretches back more than two millennia, to the **Sangam** poems (~300 BCE–300 CE) and the grammar Tolkappiyam. What makes it remarkable is that, unlike Latin or classical Sanskrit, it's still spoken every day — by some 80 million people — making it one of the world's longest-surviving *living* classical languages."
  },
  {
    category: "Indian History", difficulty: "medium",
    question: "Sangam literature, the oldest body of Tamil writing, is named after legendary academies of poets traditionally based in which city?",
    options: ["Madurai", "Chennai", "Delhi", "Kanchipuram"],
    answer: 0,
    story: "The 'Sangams' were assemblies of poets said to have gathered under Pandya kings at **Madurai**. They left behind thousands of astonishingly humane poems, sorted into 'akam' (love, the inner world) and 'puram' (war, the public world) — vivid, secular verse about longing, battle and everyday life, written when much of the world was barely putting pen to leaf."
  },
  {
    category: "Indian History", difficulty: "medium",
    question: "The shore temple and giant rock-cut monuments at Mahabalipuram (Mamallapuram) were created by which dynasty?",
    options: ["The Pallavas", "The Cholas", "The Cheras", "The British"],
    answer: 0,
    story: "The **Pallavas** carved them in the 7th–8th centuries under Narasimhavarman I 'Mamalla.' The Pancha Rathas are each cut from a single boulder, and 'Arjuna's Penance' is one of the largest open-air rock reliefs on Earth. When the 2004 tsunami briefly pulled back the sea, it revealed more submerged structures — hints of the 'Seven Pagodas' of local legend."
  },
  {
    category: "Indian History", difficulty: "hard",
    question: "In the Tamil epic Silappatikaram, the wronged heroine Kannagi takes revenge on the city of Madurai by...",
    options: [
      "Burning it down after her husband is wrongly executed",
      "Raising an army against its king",
      "Flooding it with the sea",
      "Turning its people to stone"
    ],
    answer: 0,
    story: "Her husband Kovalan is falsely accused of stealing a queen's anklet and executed. Kannagi storms the court and **shatters her own anklet** — revealing rubies inside, where the queen's held pearls, proving his innocence. In grief and fury she curses Madurai, which bursts into flames. She's revered as a goddess of chastity; her statue stands on Chennai's Marina Beach."
  },
  {
    category: "Indian History", difficulty: "medium",
    question: "Madurai's Meenakshi Amman Temple is world-famous for its...",
    options: [
      "Towering gateway towers covered in thousands of colourful sculptures",
      "Single solid-gold dome",
      "Underground river",
      "Giant reclining Buddha"
    ],
    answer: 0,
    story: "Its 14 **gopurams** (gateway towers) blaze with an estimated 33,000 brightly painted figures of gods, demons and beasts. Largely rebuilt under the Nayak rulers in the 16th–17th centuries, the complex also holds a 'thousand-pillar' hall and stone pillars that ring with musical notes when struck. It remains one of the most visited temples in India."
  },
  {
    category: "Indian History", difficulty: "hard",
    question: "Recent excavations at Keeladi, near Madurai, have uncovered evidence of...",
    options: [
      "An ancient urban Tamil civilisation on the Vaigai river",
      "A buried Roman fort",
      "A lost diamond mine",
      "Dinosaur fossils"
    ],
    answer: 0,
    story: "Digs at **Keeladi** have revealed brick buildings, drainage, fine pottery and — crucially — many potsherds scratched with Tamil-Brahmi letters, hinting at widespread literacy. The finds point to a sophisticated Sangam-age settlement, and some samples dated to around the 6th century BCE have fuelled a lively debate that Tamil urban culture is far older than once assumed."
  },
  {
    category: "Indian History", difficulty: "hard",
    question: "Hoards of ancient Roman gold coins keep turning up in Tamil Nadu because...",
    options: [
      "Rome traded heavily for South Indian pepper, spices and gems",
      "The Romans once ruled the region",
      "They are modern forgeries",
      "A Roman fleet was shipwrecked there"
    ],
    answer: 0,
    story: "Two thousand years ago, Tamil ports like **Arikamedu** hummed with trade. Rome craved South Indian pepper so badly that the writer Pliny the Elder grumbled that India was draining the empire of its gold. Sangam poems even describe 'Yavana' (Greek/Roman) merchants arriving with wine — an ancient globalisation, paid for in Roman coin."
  },
  {
    category: "Indian History", difficulty: "hard",
    question: "The rock edicts of Emperor Ashoka (3rd century BCE) mention the Cholas and Pandyas of the far south as...",
    options: [
      "Independent kingdoms lying beyond his empire",
      "Provinces he directly governed",
      "Mythical lands",
      "Enemies he had destroyed"
    ],
    answer: 0,
    story: "Ashoka ruled most of the subcontinent — but not the deep south. His edicts name the **Cholas, Pandyas, Cheras and others as neighbours** reached by his welfare works, not subjects. These are among the earliest firmly datable references to the Tamil dynasties, confirming they were already well established while the Mauryas ruled the north."
  },
  {
    category: "Indian History", difficulty: "medium",
    question: "E.V. Ramasamy, revered across Tamil Nadu as 'Periyar,' is best known for founding...",
    options: [
      "The Self-Respect Movement for social equality and rationalism",
      "The first Tamil newspaper",
      "A dynasty of temple builders",
      "India's first cricket league"
    ],
    answer: 0,
    story: "**Periyar** ('the great one') campaigned fiercely against caste discrimination and religious orthodoxy, and for the dignity of the oppressed and the rights of women. His Self-Respect Movement powered the wider Dravidian movement that reshaped Tamil Nadu's politics and culture — its influence still visible in the state's parties and public life today."
  },
  {
    category: "Indian History", difficulty: "medium",
    question: "Madras State was renamed 'Tamil Nadu' in 1969, after years of agitation sparked partly by...",
    options: [
      "The attempt to impose Hindi as the sole national language",
      "A dispute over the capital city",
      "A new currency",
      "A boundary war"
    ],
    answer: 0,
    story: "Fierce **anti-Hindi agitations**, especially in 1965 when Hindi was set to become the only official language, swept Tamil Nadu — including protests and self-immolations. They helped keep English as a link language and propelled the Dravidian parties to power. In 1969 the state took the name Tamil Nadu, 'the Tamil country.'"
  },
  {
    category: "Indian History", difficulty: "medium",
    question: "India's national emblem — the four-lion capital — is adapted from a pillar erected by which ancient emperor?",
    options: ["Ashoka", "Akbar", "Shah Jahan", "Chandragupta II"],
    answer: 0,
    story: "After the horrific bloodshed of the Kalinga war (~261 BCE), Emperor **Ashoka** renounced violence, embraced Buddhism, and inscribed messages of tolerance on pillars across his realm. The Lion Capital from Sarnath became independent India's state emblem, and the wheel on it — the Ashoka Chakra — sits at the centre of the national flag."
  },
  {
    category: "Indian History", difficulty: "medium",
    question: "The modern game of chess evolved from an ancient Indian game called...",
    options: ["Chaturanga", "Pachisi", "Senet", "Carrom"],
    answer: 0,
    story: "**Chaturanga** ('four divisions') appeared in Gupta-era India around the 6th century, its pieces modelling an army: infantry, cavalry, elephants and chariots — our pawn, knight, bishop and rook. It spread to Persia as 'shatranj'; the phrase 'checkmate' comes from the Persian 'shah mat,' loosely 'the king is helpless.'"
  },
  {
    category: "Indian History", difficulty: "medium",
    question: "The board game Snakes and Ladders began in India as...",
    options: [
      "A game teaching morality — virtues lift you up, vices drag you down",
      "A gambling game for merchants",
      "A military training exercise",
      "A royal counting toy"
    ],
    answer: 0,
    story: "Known as Moksha Patam, it was a teaching tool: **ladders were virtues** carrying you toward liberation (moksha), **snakes were vices** dropping you back down. It encoded Hindu and Jain ethics into a roll of the dice. British colonials carried it home, quietly stripped out the morality, and it became the children's game — 'Chutes and Ladders' in America."
  },
  {
    category: "Indian History", difficulty: "hard",
    question: "The ancient Indian physician Sushruta (~600 BCE) is often called the 'father of surgery' for describing...",
    options: [
      "Reconstructive surgery, including rebuilding a nose",
      "The circulation of blood",
      "General anaesthesia gas",
      "The germ theory of disease"
    ],
    answer: 0,
    story: "The Sushruta Samhita catalogues hundreds of operations and instruments — including **rhinoplasty**, rebuilding a severed nose with a flap of the patient's own forehead skin. Centuries later, British surgeons who saw the technique still in use in India adapted it, and versions of Sushruta's 'Indian flap' are taught in plastic surgery to this day."
  },
  {
    category: "Indian History", difficulty: "medium",
    question: "Nalanda, one of the world's earliest great universities, drew thousands of scholars from across Asia. It stood in present-day...",
    options: ["Bihar", "Tamil Nadu", "Punjab", "Gujarat"],
    answer: 0,
    story: "Founded around the 5th century in **Bihar**, Nalanda was a vast residential Buddhist university with students from China, Korea and beyond and a multi-storey library so enormous that, when invaders sacked it around 1193, the collection is said to have burned for months. A modern Nalanda University has since been revived nearby."
  },
  {
    category: "Indian History", difficulty: "hard",
    question: "The 1757 Battle of Plassey, which let a trading company begin ruling much of India, was won by the British mainly through...",
    options: [
      "Bribery and betrayal — a key commander switched sides",
      "Overwhelming numbers",
      "Superior naval firepower",
      "A surprise night attack"
    ],
    answer: 0,
    story: "Robert Clive of the English East India Company was badly outnumbered by the Nawab of Bengal — so he won not by fighting but by **bribing the Nawab's commander, Mir Jafar, to defect**. The victory handed the Company the riches of Bengal and is widely seen as the first step toward British rule over India."
  },
  {
    category: "Indian History", difficulty: "hard",
    question: "At its peak in the early 1800s, the British East India Company — a private business — kept a private army of roughly...",
    options: [
      "260,000 men, about twice the size of Britain's own army",
      "5,000 men",
      "25,000 men",
      "Over a million men"
    ],
    answer: 0,
    story: "A single **corporation** fielded an army around **260,000 strong** — roughly double the British state's own — and used it to rule tens of millions. Only after the great rebellion of 1857 did the British Crown seize direct control, beginning the Raj. It remains history's starkest example of a company conquering a subcontinent."
  },
  {
    category: "Indian History", difficulty: "medium",
    question: "The popular legend that Shah Jahan chopped off the hands of the Taj Mahal's builders is...",
    options: [
      "A myth with no historical evidence",
      "Well documented in court records",
      "True, but only for the chief architect",
      "A story invented by the British"
    ],
    answer: 0,
    story: "There's **no historical record** of any hand-chopping (or blinding) — it's folklore. The Taj, completed around 1653, was a tomb for Shah Jahan's wife Mumtaz Mahal, who died in childbirth; some 20,000 workers built it. One real marvel needs no myth: its white marble seems to shift colour — pinkish at dawn, white by day, golden under the moon."
  },
  {
    category: "Indian History", difficulty: "medium",
    question: "The Koh-i-Noor diamond in the British Crown Jewels was originally mined in...",
    options: ["India (the Golconda region)", "South Africa", "Brazil", "Russia"],
    answer: 0,
    story: "It likely came from the **Golconda** mines of southern India. It passed through Mughal, Persian, Afghan and Sikh hands — the Persian conqueror Nadir Shah is said to have named it 'Koh-i-Noor,' 'Mountain of Light' — before the British took it in 1849 after annexing Punjab. India, Pakistan, Iran and Afghanistan have all since asked for it back."
  },
  {
    category: "Indian History", difficulty: "medium",
    question: "The Constitution of India holds the record as...",
    options: [
      "The longest written constitution of any country",
      "The shortest national constitution",
      "The world's oldest constitution",
      "The only entirely unwritten constitution"
    ],
    answer: 0,
    story: "Drafted by a committee chaired by **B.R. Ambedkar** and adopted in 1949, it began with around 395 articles. The original wasn't printed but **hand-written** in flowing calligraphy in Hindi and English, its pages decorated with artwork depicting scenes from Indian history. Those signed originals are preserved in helium-filled cases in Parliament."
  },
  {
    category: "Indian History", difficulty: "hard",
    question: "The ruins of Hampi (in Karnataka) were the capital of the Vijayanagara Empire, which in the 1500s was...",
    options: [
      "One of the largest and richest cities in the world",
      "A tiny fishing village",
      "A remote Mughal fort",
      "A British trading post"
    ],
    answer: 0,
    story: "Persian and Portuguese visitors were stunned by **Vijayanagara** — markets heaped with gems, possibly the second-largest city on Earth at the time. It was sacked in 1565 and abandoned. Today Hampi's boulder-strewn ruins — the famous stone chariot, and pillars at the Vittala temple that chime like instruments — form a UNESCO World Heritage Site."
  },
  {
    category: "Indian History", difficulty: "medium",
    question: "In 1930, Gandhi led the famous 386-km Salt March to the sea to protest against...",
    options: [
      "The British salt tax and monopoly",
      "An income tax",
      "Textile imports",
      "The partition of Bengal"
    ],
    answer: 0,
    story: "It was illegal for Indians to make their own **salt**; they had to buy taxed British salt. Gandhi walked 386 km over 24 days to the coast at Dandi and simply picked up a lump of natural sea salt — an act of quiet defiance that ignited mass civil disobedience across India and drew the world's attention to the independence movement."
  },

  /* ===================== TECHNOLOGY (more) ===================== */
  {
    category: "Technology", difficulty: "medium",
    question: "The person often credited as the world's first computer programmer, in the 1840s, was...",
    options: ["Ada Lovelace", "Alan Turing", "Charles Babbage", "Grace Hopper"],
    answer: 0,
    story: "Working on Charles Babbage's never-built Analytical Engine, **Ada Lovelace** wrote what's regarded as the first algorithm meant for a machine — to compute Bernoulli numbers. More strikingly, she foresaw that such machines could go beyond arithmetic to manipulate any symbols, even compose music — a vision of general-purpose computing a full century early. The Ada programming language is named for her."
  },
  {
    category: "Technology", difficulty: "medium",
    question: "IBM engineer David Bradley created the 'Ctrl+Alt+Delete' key combo originally...",
    options: [
      "As a quick reboot for programmers, never meant for users",
      "As a security login feature",
      "Completely by accident",
      "For an early video game"
    ],
    answer: 0,
    story: "Bradley made the three-key salute so developers could **reboot a PC fast** without a full power cycle, and deliberately placed the keys far apart so no one would hit it by accident. It was never meant for everyday users. At a 2001 event with Bill Gates on stage, Bradley quipped, 'I may have invented it, but Bill made it famous' — since Windows made users press it to log in."
  },
  {
    category: "Technology", difficulty: "easy",
    question: "The world's first text message (SMS), sent in 1992, simply read...",
    options: ["'Merry Christmas'", "'Hello world'", "'Test 1 2 3'", "'Can you hear me?'"],
    answer: 0,
    story: "Engineer Neil Papworth typed **'Merry Christmas'** from a computer to a colleague's phone at a work party — and got no reply, because phones back then could receive texts but not send them. The famous 160-character limit was chosen because engineers reckoned it was enough for most short notes. That first message later sold as an NFT for over €100,000."
  },
  {
    category: "Technology", difficulty: "medium",
    question: "IBM's first commercial hard drive (1956) stored about 5 megabytes and was the size of...",
    options: [
      "Two refrigerators — and weighed over a ton",
      "A shoebox",
      "A paperback book",
      "A wristwatch"
    ],
    answer: 0,
    story: "The IBM RAMAC 305's disk unit was a beast: 50 spinning platters two feet across, weighing over a **ton**, holding about 5 MB — less than a single phone photo today. It was too big to buy outright, so firms rented it for thousands of dollars a month and shipped it by cargo plane. A fingernail-sized card now holds hundreds of thousands of times more."
  },
  {
    category: "Technology", difficulty: "hard",
    question: "Telephone keypads and calculator keypads arrange their digits...",
    options: [
      "Upside-down from each other",
      "In exactly the same order",
      "In a random scramble",
      "In a circle"
    ],
    answer: 0,
    story: "Look closely: a calculator puts **789 on top and 123 at the bottom**, while a phone does the reverse. Calculators inherited their layout from mechanical adding machines. When Bell Labs designed the phone keypad in the early 1960s, their research favoured putting the low numbers on top for fewer dialling errors. The two conventions were never reconciled — so your fingers must switch habits between them."
  },

  /* ===================== BIOLOGY (more) ===================== */
  {
    category: "Biology", difficulty: "hard",
    question: "Roughly what fraction of the human genome is made of ancient viral DNA?",
    options: ["About 8%", "Exactly 0%", "About 50%", "About 90%"],
    answer: 0,
    story: "Around **8%** of your DNA comes from viruses that infected our ancestors and got permanently stitched into the genome. Far from useless, some have been repurposed: a gene borrowed from a virus, syncytin, is essential for building the **placenta**. In a real sense, mammals may owe live birth to a viral infection hundreds of millions of years ago."
  },
  {
    category: "Biology", difficulty: "medium",
    question: "Naked mole-rats fascinate cancer researchers because they...",
    options: [
      "Almost never get cancer and can live over 30 years",
      "Glow in ultraviolet light",
      "Have no DNA in their cells",
      "Never need to sleep"
    ],
    answer: 0,
    story: "These wrinkly, nearly blind rodents live 30+ years — astonishing for their size — and **almost never develop cancer**. Their cells stop dividing when crowded, and they make a gluey form of a molecule (hyaluronan) that seems to block tumours. They also barely feel certain pain and can survive about 18 minutes with no oxygen at all. Biologists mine them for the secrets of long, healthy life."
  },
  {
    category: "Biology", difficulty: "medium",
    question: "Many forest trees quietly share water, nutrients and even warning signals through...",
    options: [
      "Underground fungal networks linking their roots",
      "The wind carrying scents",
      "Physical contact between branches",
      "Birds moving between them"
    ],
    answer: 0,
    story: "Beneath the forest floor, fungi weave threads that connect tree roots into a web nicknamed the **'wood wide web.'** Through these links trees trade sugars and nutrients, big 'mother trees' can feed their seedlings, and some even pass chemical alarms about insect attacks. The fungi take a cut of sugar in return. A forest behaves less like lone individuals than a connected community."
  },
  {
    category: "Biology", difficulty: "easy",
    question: "A blue whale's heart is roughly the size of...",
    options: ["A small car", "A basketball", "A human fist", "A grain of rice"],
    answer: 0,
    story: "The blue whale is the largest animal known to have ever lived — bigger than any dinosaur — and its heart weighs around 180 kg, about the size of a **small car**. When it dives, that heart can slow to just a couple of beats a minute; its main blood vessels are wide enough to compare to drainpipes. A nursing calf guzzles enough milk to gain about 90 kg a day."
  },
  {
    category: "Biology", difficulty: "hard",
    question: "After a pregnancy, a mother often carries living cells from her child...",
    options: [
      "In her body for decades — sometimes even in her brain",
      "For only a few days",
      "Never — cells can't cross the placenta",
      "Only within the womb lining"
    ],
    answer: 0,
    story: "During pregnancy, fetal cells slip across the placenta and can linger in the mother for **decades** — a phenomenon called microchimerism. They've been found in mothers' blood, healed wounds, and even their brains, where some evidence hints they may help repair tissue. Many mothers are, quite literally, part their children at the cellular level, long after birth."
  },

  /* ===================== LOGIC & PUZZLES (more) ===================== */
  {
    category: "Logic & Puzzles", difficulty: "medium",
    question: "In the 'prisoner's dilemma,' each of two partners does best by betraying the other — yet if both betray...",
    options: [
      "They both end up worse off than if they'd stayed silent",
      "They both go free",
      "Nothing changes",
      "Exactly one of them wins"
    ],
    answer: 0,
    story: "Betraying looks like the smart move whatever your partner does — so both betray, and both get heavier sentences than if they'd cooperated and kept quiet. This is the founding puzzle of **game theory**, and it echoes everywhere: arms races, price wars, climate deals. It shows how everyone acting 'rationally' in self-interest can leave everyone worse off."
  },
  {
    category: "Logic & Puzzles", difficulty: "hard",
    question: "Braess's paradox is the counterintuitive fact that adding a new road to a congested network can...",
    options: [
      "Make everyone's journey slower",
      "Instantly clear all traffic",
      "Only ever help",
      "Reduce the number of cars"
    ],
    answer: 0,
    story: "Because each driver selfishly grabs the fastest route, a tempting new shortcut can funnel everyone onto the same roads and gum up the whole system. The reverse has happened for real: **closing** a major road in Seoul (and in New York) actually improved traffic flow. It's a humbling reminder that in complex systems, more capacity doesn't always mean more speed."
  },
  {
    category: "Logic & Puzzles", difficulty: "hard",
    question: "A test for a rare disease is '99% accurate.' You test positive. The chance you truly have the disease might be...",
    options: [
      "Surprisingly low — often well under 50%",
      "Exactly 99%",
      "A certain 100%",
      "Exactly half"
    ],
    answer: 0,
    story: "If only 1 in 10,000 people has the disease, then in any large group the **false positives massively outnumber the true ones** — so your positive result might mean well under a 1% chance you're actually sick. Ignoring how rare something is (the 'base rate') fools even doctors. That's why positive screens for rare conditions are confirmed with a second, different test."
  },
  {
    category: "Logic & Puzzles", difficulty: "hard",
    question: "A judge says a prisoner will hang at noon one weekday next week, and the day will be a total 'surprise.' The prisoner reasons he can't be hanged — yet...",
    options: [
      "He's hanged Wednesday, genuinely surprised",
      "He's set free on a technicality",
      "The judge admits he was bluffing",
      "He escapes during the confusion"
    ],
    answer: 0,
    story: "The prisoner argues it can't be Friday (by Thursday night it'd be no surprise), so not Thursday, and so on back through the week — 'proving' no surprise hanging is possible. Reassured, he's stunned when the guards come **Wednesday**. The judge was right all along. Philosophers still can't fully agree where the prisoner's airtight-seeming logic actually breaks."
  },

  /* ===================== POP CULTURE (more) ===================== */
  {
    category: "Pop Culture", difficulty: "hard",
    question: "The tune of the US national anthem 'The Star-Spangled Banner' began life as...",
    options: [
      "A British gentlemen's-club drinking song",
      "A church hymn",
      "A military bugle call",
      "A slave spiritual"
    ],
    answer: 0,
    story: "The melody comes from 'To Anacreon in Heaven,' the song of an 18th-century London music-and-**drinking** club named after a Greek poet of wine and love. Francis Scott Key set his 1814 poem about the flag over Fort McHenry to that well-known tune. So America's famously hard-to-sing anthem started as a boozy English club song."
  },
  {
    category: "Pop Culture", difficulty: "medium",
    question: "In the shower scene of Hitchcock's black-and-white 'Psycho' (1960), the blood was actually...",
    options: ["Chocolate syrup", "Red poster paint", "Real animal blood", "Tomato ketchup"],
    answer: 0,
    story: "Since the film was black-and-white, the 'blood' only had to look right in grey — and **Bosco chocolate syrup** had the perfect dark, glossy flow down the drain. The roughly 45-second scene took about a week to shoot with dozens of camera setups. Hitchcock was so protective of the twist that he reportedly bought up copies of the source novel to hide its ending."
  },
  {
    category: "Pop Culture", difficulty: "medium",
    question: "The classic line 'You're gonna need a bigger boat' from Jaws was...",
    options: [
      "Improvised by the actor on set",
      "Carefully written into the script",
      "Added later in editing",
      "A blooper left in by mistake"
    ],
    answer: 0,
    story: "Roy Scheider **ad-libbed** it, reportedly riffing on a running crew joke about the too-small support boat — needed because the mechanical shark, nicknamed 'Bruce,' kept breaking down. It wasn't scripted, but it fit so perfectly it became the film's signature line and one of the most beloved improvised moments in movie history."
  },
  {
    category: "Pop Culture", difficulty: "medium",
    question: "In 1962, Decca Records rejected the Beatles, reportedly telling their manager that...",
    options: [
      "'Guitar groups are on the way out'",
      "'They simply can't sing'",
      "'Come back in ten years'",
      "'Rock and roll is finished'"
    ],
    answer: 0,
    story: "After an audition, Decca passed on the Beatles — allegedly saying **'guitar groups are on the way out'** and that the band had 'no future in show business' — and signed another act instead. The Beatles became the best-selling band in history. It's the music industry's most legendary 'one that got away,' and a caution against betting against the future."
  },
  {
    category: "Pop Culture", difficulty: "hard",
    question: "The popular story that Netflix was founded over a $40 late fee for renting 'Apollo 13' is...",
    options: [
      "A tidy myth its co-founder says isn't really true",
      "Fully documented fact",
      "A scene from a movie",
      "Completely made up by journalists"
    ],
    answer: 0,
    story: "Reed Hastings often told the late-fee tale to explain Netflix's no-late-fee model. But co-founder Marc Randolph has said it's largely a **convenient myth** — a neat origin story polished after the fact. Netflix actually began by selling and renting DVDs by mail, and only launched its famous subscription model later. Founding legends are often tidied up for the retelling."
  },

  /* ===================== CHEMISTRY (more) ===================== */
  {
    category: "Chemistry", difficulty: "medium",
    question: "When Dmitri Mendeleev published his periodic table in 1869, its great triumph was that it...",
    options: [
      "Predicted the properties of elements not yet discovered",
      "Listed every element then known",
      "Was simply the first such table",
      "Won him a Nobel Prize"
    ],
    answer: 0,
    story: "Mendeleev left **gaps** for undiscovered elements and boldly predicted their properties — even densities and melting points. When gallium, scandium and germanium turned up and matched his forecasts almost exactly, chemists were astonished, and the table was vindicated. Legend says the layout came to him in a dream, though he'd wrestled with it for years."
  },
  {
    category: "Chemistry", difficulty: "hard",
    question: "The element phosphorus was discovered in 1669 by an alchemist boiling down large quantities of...",
    options: [
      "Human urine (while hunting for gold)",
      "Seawater",
      "Coal tar",
      "Fresh blood"
    ],
    answer: 0,
    story: "German alchemist Hennig Brand, sure the golden colour of **urine** hinted at hidden gold, boiled and distilled vat after vat of it. He found no gold — but a waxy substance that glowed in the dark and burst into flame: phosphorus, the first element discovered by a named person. Its name means 'light-bearer,' and chemists sourced it from urine for over a century."
  },
  {
    category: "Chemistry", difficulty: "medium",
    question: "At ordinary room temperature, only two chemical elements are liquid: mercury and...",
    options: ["Bromine", "Helium", "Chlorine", "Sodium"],
    answer: 0,
    story: "Mercury (a metal) and **bromine** (a reddish-brown nonmetal) are the only two elements liquid at a standard room temperature. Bromine gives off a choking vapour — its name comes from the Greek for 'stench.' A few others, like gallium and caesium, will melt in your hand or on a hot day, but they're solid at normal room temperature."
  },
  {
    category: "Chemistry", difficulty: "easy",
    question: "Water is unusual because, unlike almost every other substance, it...",
    options: [
      "Expands when it freezes, so its solid form floats",
      "Contracts sharply when frozen",
      "Cannot be frozen at all",
      "Has no solid state"
    ],
    answer: 0,
    story: "Most liquids grow denser as they solidify, so the solid sinks. Water does the opposite: freezing locks its molecules into an open lattice that takes up **more** space, so ice floats. This quirk helps life survive winter — ponds and lakes freeze from the top down, forming an insulating lid that keeps the water below liquid for the fish."
  },
  {
    category: "Chemistry", difficulty: "hard",
    question: "Vantablack, one of the darkest substances ever made (absorbing over 99.9% of light), sparked an art feud because...",
    options: [
      "One artist secured exclusive rights to use it",
      "It turned out to be highly toxic",
      "A sample was famously stolen",
      "It faded to grey within days"
    ],
    answer: 0,
    story: "Vantablack is a forest of microscopic carbon nanotubes so absorbent that a 3D object coated in it looks like a flat black void. When artist Anish Kapoor obtained **exclusive artistic rights**, other artists were furious. In protest, Stuart Semple created the 'world's pinkest pink' and banned Kapoor from buying it — kicking off a gleeful, spiteful pigment war."
  },

  /* ===================== HISTORY (more) ===================== */
  {
    category: "History", difficulty: "medium",
    question: "Mansa Musa of Mali, often called the richest person in history, disrupted whole economies on his 1324 pilgrimage by...",
    options: [
      "Giving away so much gold that he crashed its value in Egypt",
      "Buying up every ship on the Nile",
      "Hoarding the region's entire salt supply",
      "Printing vast amounts of money"
    ],
    answer: 0,
    story: "On his hajj to Mecca, Mansa Musa travelled with an enormous entourage and so much **gold** that his gifts and spending in Cairo flooded the market, reportedly depressing gold's value there for around a decade. His fortune, built on Mali's gold and salt trade, was so vast it defies real calculation — and it put the empire of Mali on European maps."
  },
  {
    category: "History", difficulty: "hard",
    question: "In October 1582, ten calendar dates simply never happened across Catholic Europe because of...",
    options: [
      "The switch from the Julian to the Gregorian calendar",
      "A massive clerical error",
      "A war that halted record-keeping",
      "An outbreak of plague"
    ],
    answer: 0,
    story: "The old Julian calendar had drifted about 10 days out of step with the seasons. To fix it, Pope Gregory XIII decreed that **Thursday 4 October 1582 would be followed by Friday 15 October** — erasing ten days. Countries switched at different times (Britain waited until 1752, deleting 11 days), causing confusion in dating history and, by legend, protests from people who felt cheated of days."
  },
  {
    category: "History", difficulty: "medium",
    question: "The 1815 eruption of Mount Tambora made 1816 'the Year Without a Summer' — which indirectly gave the world...",
    options: [
      "The novel Frankenstein",
      "The first umbrella",
      "The French Revolution",
      "The steam engine"
    ],
    answer: 0,
    story: "Tambora hurled so much ash skyward that global temperatures fell, bringing crop failures, summer snow and eerie skies. Stuck indoors by the gloom on a Swiss holiday, a young Mary Shelley and friends held a ghost-story contest — and she wrote **Frankenstein**. The strange, lurid sunsets of those years may also have coloured the vivid skies in Turner's paintings."
  },
  {
    category: "History", difficulty: "medium",
    question: "The mighty Swedish warship Vasa sank in 1628...",
    options: [
      "Less than a mile into its very first voyage",
      "In a fierce sea battle",
      "After 50 years of service",
      "While anchored in a storm"
    ],
    answer: 0,
    story: "Built tall and heavy with two gun decks to show off royal might, the Vasa was dangerously top-heavy. A gust of wind on its **maiden voyage** tipped it, water poured through the open gun ports, and it sank in Stockholm harbour after sailing barely 1,300 metres, in front of horrified crowds. The cold Baltic preserved it, and it was raised nearly intact in 1961 — now a spectacular museum ship."
  },
  {
    category: "History", difficulty: "hard",
    question: "China's first emperor, Qin Shi Huang — buried with the Terracotta Army — is thought to have died from...",
    options: [
      "Mercury pills he took hoping to become immortal",
      "A wound from battle",
      "Poison slipped by rivals",
      "Simple old age"
    ],
    answer: 0,
    story: "Obsessed with eternal life, the emperor reportedly swallowed **mercury** pills believed to grant immortality — which may have poisoned him. Fittingly, ancient texts claim his vast tomb holds rivers of liquid mercury mimicking China's waterways, and soil around the still-unexcavated mound shows unusually high mercury levels. His 8,000 terracotta soldiers were meant to guard him forever."
  },

  /* ===================== INTERNET (more) ===================== */
  {
    category: "Internet", difficulty: "hard",
    question: "The first-ever registered '.com' domain name, back in 1985, was...",
    options: ["symbolics.com", "google.com", "apple.com", "ibm.com"],
    answer: 0,
    story: "**Symbolics**, a now-defunct computer maker, registered symbolics.com on 15 March 1985 — the first .com in existence, at a time when the Web didn't even exist and barely anyone wanted a domain. Only a handful of .com names were registered that entire year. The domain was later sold to a collector in 2009. Today there are well over 150 million."
  },
  {
    category: "Internet", difficulty: "hard",
    question: "The first web banner ad (1994) achieved a click-through rate of roughly...",
    options: ["44%", "4%", "0.4%", "90%"],
    answer: 0,
    story: "AT&T's banner on HotWired, reading 'Have you ever clicked your mouse right HERE? You will,' reportedly got about **44%** of viewers to click — a figure unthinkable now, when banners average well under 0.1%. It launched the online-advertising industry that funds much of the web. The novelty faded fast as 'banner blindness' set in."
  },
  {
    category: "Internet", difficulty: "medium",
    question: "The first widely used set of emoji was designed in 1999 by Shigetaka Kurita for...",
    options: [
      "A Japanese mobile phone network",
      "Apple's first iPhone",
      "A Nintendo game",
      "A greeting-card company"
    ],
    answer: 0,
    story: "Kurita drew **176 tiny 12×12-pixel icons** for the Japanese carrier DoCoMo, inspired by weather symbols, manga and Chinese characters, to add feeling to short messages. 'Emoji' comes from Japanese 'e' (picture) + 'moji' (character) — its likeness to 'emotion' is pure coincidence. That original set now lives in New York's Museum of Modern Art."
  },
  {
    category: "Internet", difficulty: "medium",
    question: "In 2005, a British student paid his university tuition by selling...",
    options: [
      "A million pixels of webpage ad space at $1 each",
      "A single viral video",
      "Custom ringtones",
      "Handmade NFTs"
    ],
    answer: 0,
    story: "21-year-old Alex Tew built 'The Million Dollar Homepage' — a grid of 1,000,000 pixels sold at **$1 apiece** to advertisers, who placed tiny clickable logos. The gimmick went viral and earned him about $1,000,000 in months. Many linked sites have since died, leaving the page a frozen time-capsule of the mid-2000s internet."
  },
  {
    category: "Internet", difficulty: "medium",
    question: "Wikipedia (launched 2001) began as a fast side-project feeding a slow, expert-written encyclopedia called...",
    options: ["Nupedia", "Encarta", "Britannica Online", "Everipedia"],
    answer: 0,
    story: "**Nupedia** used a rigorous seven-stage expert review — and was painfully slow, managing only a couple of dozen articles in a year. Founders Jimmy Wales and Larry Sanger bolted on a 'wiki' anyone could edit to draft articles faster. The wiki exploded, swiftly dwarfing its parent, and Nupedia was shut down. Wikipedia now spans millions of articles in hundreds of languages."
  },

  /* ===================== ANCIENT HISTORY (more) ===================== */
  {
    category: "Ancient History", difficulty: "medium",
    question: "In ancient Rome, a 'vomitorium' was actually...",
    options: [
      "A passage for crowds to stream out of an arena",
      "A room where feasters purged to keep eating",
      "A public toilet",
      "A wine cellar"
    ],
    answer: 0,
    story: "Despite the vivid myth of Romans purging between courses, a **vomitorium** was architecture: the passage through which crowds 'spewed out' of an amphitheatre like the Colosseum. It shares a root with 'vomit' (to disgorge), but referred to the fast flow of *people*, not food. The gorge-and-purge legend was invented much later."
  },
  {
    category: "Ancient History", difficulty: "medium",
    question: "The workers who built the Egyptian pyramids were...",
    options: [
      "Paid labourers, often fed bread and beer",
      "Foreign slaves driven by whips",
      "Convicted criminals",
      "Prisoners of war only"
    ],
    answer: 0,
    story: "The whip-driven-slave image is wrong. Archaeology — a workers' village with bakeries and breweries, and honoured builders' tombs beside the pyramids — shows they were skilled, **paid** crews, fed rations including bread and beer, some seasonal farmers working during the Nile flood. They were buried with dignity near the pharaohs they served."
  },
  {
    category: "Ancient History", difficulty: "hard",
    question: "The first labour strike recorded in history took place in Egypt around 1150 BCE, when...",
    options: [
      "Royal tomb-builders downed tools over late food rations",
      "Farmers refused to plant crops",
      "Soldiers mutinied over pay",
      "Scribes stopped writing"
    ],
    answer: 0,
    story: "Under Pharaoh Ramesses III, the skilled artisans building royal tombs at **Deir el-Medina** didn't receive their grain rations on time — so they stopped work and staged sit-ins at temples. It's the first documented strike in history, recorded on surviving papyrus. Even 3,000 years ago, workers understood the power of withholding their labour."
  },
  {
    category: "Ancient History", difficulty: "medium",
    question: "The ~3,750-year-old Code of Hammurabi is best known for establishing the principle of...",
    options: [
      "'An eye for an eye' (proportional retaliation)",
      "Trial by a jury of peers",
      "Innocent until proven guilty",
      "The right to remain silent"
    ],
    answer: 0,
    story: "Babylonian king Hammurabi had 282 laws carved on a tall stone stele, topped by a scene of him receiving authority from a god. Many impose proportional payback — **'if a man puts out another's eye, his eye shall be put out'** — though punishments varied by social class. It's among the earliest and most complete written legal codes, predating many others by over a millennium."
  },
  {
    category: "Ancient History", difficulty: "hard",
    question: "The oldest known written melody, preserved on a clay tablet, is about 3,400 years old and comes from...",
    options: [
      "The ancient city of Ugarit (in modern Syria)",
      "Classical Athens",
      "Old Kingdom Egypt",
      "Imperial Rome"
    ],
    answer: 0,
    story: "The 'Hurrian Hymn No. 6,' from **Ugarit**, is a religious song written in cuneiform with instructions for a lyre — the oldest substantially complete piece of notated music ever found. Scholars disagree on exactly how to read it, so modern reconstructions vary, but any version lets you hear a tune written down over three thousand years ago."
  },

  /* ===================== SPACE (more) ===================== */
  {
    category: "Space", difficulty: "medium",
    question: "The number of stars in the observable universe is estimated to be...",
    options: [
      "Greater than all the grains of sand on Earth",
      "About equal to Earth's grains of sand",
      "Far fewer than Earth's sand grains",
      "Exactly one trillion"
    ],
    answer: 0,
    story: "The sand grains on all Earth's beaches and deserts number around 7.5 quintillion (7.5 × 10¹⁸). But the observable universe holds perhaps 100 billion galaxies, each with tens or hundreds of billions of stars — so **far more stars than sand grains**. Stranger still, there may be more water molecules in a single glass than there are stars in the sky."
  },
  {
    category: "Space", difficulty: "medium",
    question: "The Moon is slowly moving away from Earth at about...",
    options: [
      "3.8 cm a year — roughly how fast fingernails grow",
      "3.8 metres a year",
      "It isn't moving; it's fixed",
      "It's actually getting closer"
    ],
    answer: 0,
    story: "Tides transfer Earth's spin energy to the Moon, nudging it outward about **3.8 cm a year** — measured by bouncing lasers off reflectors Apollo astronauts left behind. As a knock-on effect, Earth's days are slowly lengthening; hundreds of millions of years ago a day was only about 22 hours. Eventually the Moon will look too small to ever fully cover the Sun, ending total eclipses."
  },
  {
    category: "Space", difficulty: "medium",
    question: "Since its discovery in 1930, the dwarf planet Pluto has...",
    options: [
      "Not yet completed a single orbit of the Sun",
      "Orbited the Sun three times",
      "Drifted out of the solar system",
      "Stopped moving entirely"
    ],
    answer: 0,
    story: "Pluto takes about **248 Earth years** to loop the Sun once. Discovered in 1930, it won't finish the orbit it was on when found until the year 2178 — no human has ever seen a full 'Pluto year.' Reclassified a dwarf planet in 2006, it revealed a huge heart-shaped plain of frozen nitrogen when New Horizons flew past in 2015."
  },
  {
    category: "Space", difficulty: "easy",
    question: "Astronauts on the International Space Station see roughly how many sunrises each day?",
    options: ["16", "1", "4", "100"],
    answer: 0,
    story: "The ISS circles Earth about every 90 minutes at some 28,000 km/h, so its crew sees around **16 sunrises and 16 sunsets** every 24 hours. That havoc on the body clock means they keep a fixed 'day' with scheduled lighting. It also poses a puzzle for religious astronauts: how to time daily prayers or a fast when the sun rises sixteen times?"
  },
  {
    category: "Space", difficulty: "medium",
    question: "Uranus is unusual among the planets because it...",
    options: [
      "Spins almost completely on its side (tilted ~98°)",
      "Has no moons at all",
      "Doesn't spin",
      "Orbits the Sun backwards"
    ],
    answer: 0,
    story: "Most planets spin roughly upright like tops; Uranus is tipped nearly **98°**, essentially rolling around the Sun on its side — probably knocked over by a giant ancient collision. This gives each pole about 42 years of nonstop sunlight, then 42 years of darkness. Oddly, it also has the coldest atmosphere in the solar system — colder even than Neptune, which lies farther out."
  },

  /* ===================== FINANCE (more) ===================== */
  {
    category: "Finance", difficulty: "hard",
    question: "After losing a fortune in the 1720 South Sea Bubble, Isaac Newton reportedly lamented that he could...",
    options: [
      "'Calculate the motions of the heavenly bodies, but not the madness of people'",
      "'Never trust a banker again'",
      "'See the future written in the stars'",
      "'Not even add up his own losses'"
    ],
    answer: 0,
    story: "Newton invested in the South Sea Company, sold early at a neat profit — then, watching the stock keep soaring, piled back in near the peak. When the bubble burst he lost around £20,000, a fortune then. He's said to have remarked he could **calculate the heavens but not the madness of people**. Even a genius fell for the mania."
  },
  {
    category: "Finance", difficulty: "medium",
    question: "The word 'bankrupt' comes from an Italian phrase meaning...",
    options: ["'Broken bench'", "'Empty purse'", "'No more gold'", "'Closed shop'"],
    answer: 0,
    story: "Medieval Italian traders and moneylenders did business on benches ('banca') in the marketplace — the same root as 'bank.' When one couldn't pay his debts, his bench was reportedly smashed — **'banca rotta,' broken bench** — leaving him with nowhere to trade. The broken bench became the very word for financial ruin."
  },
  {
    category: "Finance", difficulty: "medium",
    question: "The world's first cash machine (1967, London) reportedly took its inspiration from...",
    options: [
      "A chocolate-bar vending machine",
      "A bank robbery",
      "An early computer game",
      "A jammed safe"
    ],
    answer: 0,
    story: "Inventor John Shepherd-Barron said the idea struck after he missed his bank's closing time: a **vending machine, but for cash**. His first ATM at Barclays used special vouchers rather than plastic cards. He also devised the PIN — and wanted six digits, but his wife said she could only remember four, which is why most PINs are four digits to this day."
  },
  {
    category: "Finance", difficulty: "hard",
    question: "On 'Black Wednesday' in 1992, investor George Soros made around $1 billion by betting against...",
    options: ["The British pound", "The US dollar", "Gold", "Japanese stocks"],
    answer: 0,
    story: "Convinced the **pound** was propped up too high within Europe's exchange-rate system, Soros's fund bet enormously against it. When Britain couldn't hold the line and was forced to pull out, the pound plunged and Soros pocketed a reported $1 billion in a day — earning the title 'the man who broke the Bank of England.' It's the textbook speculative currency attack."
  },
  {
    category: "Finance", difficulty: "medium",
    question: "The first widely used charge card, Diners Club (1950), was supposedly inspired when its founder...",
    options: [
      "Forgot his wallet at a restaurant",
      "Won a large bet",
      "Lost his cash gambling",
      "Was refused a bank loan"
    ],
    answer: 0,
    story: "Businessman Frank McNamara, embarrassed to find he'd left his wallet at a New York restaurant, imagined a card that could settle bills at many places, billed monthly. The **Diners Club** card launched in 1950 — first as cardboard, accepted at a handful of restaurants — and kick-started the cashless age. The 'forgotten wallet' tale may be a marketing polish, but the card was real enough."
  },

  /* ===================== POLITICS (more) ===================== */
  {
    category: "Politics", difficulty: "medium",
    question: "The 'Hundred Years' War' between England and France actually lasted...",
    options: ["116 years", "Exactly 100 years", "About 50 years", "Over 200 years"],
    answer: 0,
    story: "The on-and-off conflict ran from 1337 to 1453 — about **116 years** — across five English and five French kings. It wasn't constant fighting but a chain of wars, truces and uneasy peaces, featuring Joan of Arc and the longbow's triumph at Agincourt. The tidy name was coined by historians long afterward; by the end, England had lost almost all its French lands."
  },
  {
    category: "Politics", difficulty: "medium",
    question: "William Henry Harrison holds the record for the shortest US presidency at about...",
    options: ["31 days", "Four years", "Two years", "100 days"],
    answer: 0,
    story: "At his 1841 inauguration the 68-year-old Harrison gave the **longest inaugural speech ever** — nearly two hours — in cold, wet weather. He fell ill and died about a month later. For generations the tale blamed pneumonia from the speech, though modern researchers suspect typhoid from contaminated water. Either way, he served just 31 days."
  },
  {
    category: "Politics", difficulty: "medium",
    question: "Nepal is the only country in the world whose national flag is...",
    options: [
      "Not a rectangle — it's two stacked pennants",
      "All a single colour",
      "Perfectly circular",
      "A perfect square"
    ],
    answer: 0,
    story: "Every other nation flies a four-sided flag; **Nepal's** is a unique double-pennon of two stacked triangles, bearing a moon and a sun to express the hope the nation lasts as long as they do. Its exact geometry is even spelled out in construction instructions written into Nepal's constitution — precise as well as one of a kind."
  },
  {
    category: "Politics", difficulty: "hard",
    question: "Between 2010 and 2011, Belgium set a world record by going how long without an elected government?",
    options: ["589 days", "30 days", "100 days", "Five years"],
    answer: 0,
    story: "Divisions between Belgium's Dutch- and French-speaking regions left parties unable to form a coalition, so a caretaker government ran the country for a record **589 days**. Daily life carried on fine — prompting jokes about whether governments are strictly necessary — and citizens staged cheerful protests, including handing out free fries."
  },
  {
    category: "Politics", difficulty: "hard",
    question: "The tiny Pacific nation of Nauru was briefly among the richest countries per person thanks to...",
    options: [
      "Phosphate rock formed largely from bird droppings",
      "Offshore oil",
      "Luxury tourism",
      "Gold deposits"
    ],
    answer: 0,
    story: "Nauru sat atop rich **phosphate** — built up over ages largely from seabird droppings — a prized fertiliser. Mining made citizens extravagantly wealthy in the 1970s–80s. But it gutted the island's interior into a barren moonscape, the fortune was lost on bad investments, and Nauru collapsed economically: a stark warning about depending on one finite resource."
  },

  /* ===================== GENERAL KNOWLEDGE (more) ===================== */
  {
    category: "General Knowledge", difficulty: "medium",
    question: "Bubble wrap was originally invented in 1957 to be sold as...",
    options: ["Textured 3D wallpaper", "Packing material", "A pool float", "Greenhouse glass"],
    answer: 0,
    story: "Two engineers sealed two shower curtains together, trapping air bubbles, hoping to sell trendy **3D wallpaper**. It flopped. Their next pitch — greenhouse insulation — flopped too. Only when IBM needed to protect a new computer in transit did bubble wrap find its true calling as packaging. Popping it, of course, became a bonus feature."
  },
  {
    category: "General Knowledge", difficulty: "medium",
    question: "Play-Doh was originally sold as a...",
    options: ["Wallpaper cleaner", "Breakfast food", "Craft glue", "Bath soap"],
    answer: 0,
    story: "In the 1930s–40s the pliable putty was sold to rub soot and grime off wallpaper heated by coal. When coal heating faded and washable wallpaper arrived, sales collapsed. A relative who taught nursery school noticed kids loved moulding it — so it was rebranded as a **children's toy** in the 1950s. One of history's great accidental pivots."
  },
  {
    category: "General Knowledge", difficulty: "hard",
    question: "In English the word 'orange' named the fruit before the colour. Earlier, that colour was often called...",
    options: ["'Yellow-red' (geoluread)", "'Gold'", "'Amber'", "It simply had no name"],
    answer: 0,
    story: "The fruit and its name reached Europe before there was a dedicated word for the hue, so earlier English speakers called it **'geoluread' — literally 'yellow-red.'** Only once the fruit grew familiar did 'orange' get borrowed for the colour. It's why we still say 'redhead' for orange hair and call a robin a 'redbreast' — those names predate the colour word."
  },
  {
    category: "General Knowledge", difficulty: "easy",
    question: "The popular claim that humans use only 10% of their brains is...",
    options: [
      "A complete myth — we use virtually all of it",
      "Roughly accurate",
      "True only while we sleep",
      "True for most adults"
    ],
    answer: 0,
    story: "Brain scans show we use **virtually all** of the brain, just not all at once — even simple tasks light up many regions, and there are no vast idle zones. Damage almost anywhere causes problems, which couldn't happen if 90% were spare. The myth endures because it's a seductive promise: that we're all hiding untapped superpowers."
  },
  {
    category: "General Knowledge", difficulty: "hard",
    question: "Over the long term, a single day on Earth is very gradually...",
    options: [
      "Getting longer, as the planet's spin slows",
      "Getting shorter",
      "Staying exactly 24 hours forever",
      "Reversing direction"
    ],
    answer: 0,
    story: "The Moon's tidal pull is slowly braking Earth's rotation, stretching the day by roughly **1.7 milliseconds per century**. Growth bands in ancient fossil corals confirm it: hundreds of millions of years ago, a year held around 400 shorter days. It's also why timekeepers occasionally insert a 'leap second' to keep clocks matched to the wobbling Earth."
  },

  /* ===================== TRANSPORTATION (more) ===================== */
  {
    category: "Transportation", difficulty: "medium",
    question: "Around the year 1900, electric cars...",
    options: [
      "Were popular and briefly rivalled or outsold petrol cars",
      "Did not yet exist",
      "Were banned in cities",
      "Were only children's toys"
    ],
    answer: 0,
    story: "At the dawn of the automobile, electric cars were clean, quiet and easy to start (no hand-crank), and around 1900 they were **among the best-selling cars in America**, loved for city driving. Cheap oil, the electric starter and Ford's affordable, long-range Model T pushed them aside. Over a century later, EVs are finally staging a comeback — having nearly been the default the first time around."
  },
  {
    category: "Transportation", difficulty: "medium",
    question: "Airline food often tastes bland largely because...",
    options: [
      "Cabin pressure and dry air dull your senses of taste and smell",
      "Airlines always use frozen ingredients",
      "Radiation at altitude affects food",
      "It's cooked days in advance"
    ],
    answer: 0,
    story: "At cruising altitude, low pressure, bone-dry air and constant noise blunt your perception of sweet and salty by up to about **30%**. That's why airlines over-season meals, and why savoury tomato juice — whose 'umami' taste holds up better aloft — is oddly popular on flights. Your taste buds aren't broken; the cabin just numbs them."
  },
  {
    category: "Transportation", difficulty: "medium",
    question: "Planes dim the cabin lights for night takeoffs and landings mainly to...",
    options: [
      "Pre-adjust passengers' eyes in case of an emergency evacuation",
      "Save fuel",
      "Help passengers fall asleep",
      "Reduce glare for the pilots"
    ],
    answer: 0,
    story: "Takeoff and landing are the riskiest phases of flight. If you had to evacuate into darkness in seconds, eyes adjusting from bright light would cost precious time — so crews **dim the cabin beforehand** to pre-adapt your vision. It's the same reason window shades go up: so the crew (and you) can see conditions outside."
  },
  {
    category: "Transportation", difficulty: "hard",
    question: "The world's first traffic light, installed near London's Parliament in 1868, failed because it...",
    options: [
      "Exploded, reportedly injuring the policeman operating it",
      "Was too tall for drivers to see",
      "Caused a massive traffic jam",
      "Was stolen within a week"
    ],
    answer: 0,
    story: "Decades before cars, London erected a gas-lit signal with semaphore arms to manage horse traffic. It worked briefly — until a gas leak made the lamp **explode**, reportedly injuring its operator. The idea was dropped for nearly 50 years, until electric traffic lights emerged in the US in the 1910s–20s. The very first attempt literally blew up."
  },

  /* ===================== LANGUAGE (more) ===================== */
  {
    category: "Language", difficulty: "medium",
    question: "The word 'nice' originally meant...",
    options: ["Foolish or ignorant", "Kind and generous", "Wealthy", "Brave"],
    answer: 0,
    story: "From the Latin 'nescius' (ignorant), **'nice' first meant foolish or silly**. Over centuries it drifted through 'fussy,' then 'precise' (we still say 'a nice distinction'), then 'agreeable' — landing on today's vague compliment. Few words have wandered so far. The reverse happened to 'silly,' which once meant 'blessed' and 'innocent.'"
  },
  {
    category: "Language", difficulty: "medium",
    question: "The word 'clue' comes from 'clew,' which originally meant...",
    options: ["A ball of thread", "A footprint", "A whisper", "A torn map"],
    answer: 0,
    story: "A 'clew' was a **ball of yarn** — evoking the Greek myth in which Theseus unwound thread through the labyrinth so he could retrace his way out after killing the Minotaur. To 'follow a clew' meant tracing that thread toward a solution. The spelling softened to 'clue,' and it came to mean any hint that guides you through a mystery."
  },
  {
    category: "Language", difficulty: "medium",
    question: "The word 'boycott' comes from...",
    options: [
      "The name of a hated land agent, Captain Boycott",
      "An old French verb for 'refuse'",
      "A medieval trade law",
      "A famous merchant ship"
    ],
    answer: 0,
    story: "In 1880s Ireland, land agent Captain Charles **Boycott** evicted struggling tenant farmers. In protest the community shunned him utterly — labourers wouldn't work his fields, shops wouldn't serve him, even his post was disrupted. The campaign was so effective and so widely reported that his own name became the word for organised collective shunning."
  },
  {
    category: "Language", difficulty: "hard",
    question: "The word 'disaster' literally comes from roots meaning...",
    options: ["'Bad star'", "'Great fall'", "'Broken ground'", "'Dark day'"],
    answer: 0,
    story: "'Disaster' traces to the Italian 'disastro' — **'dis' (bad) + 'astro' (star)** — from the old belief that catastrophes were caused by an unfavourable alignment of the stars: to be 'ill-starred.' Many words fossilise that idea: to be 'jovial' is to be under Jupiter's sway, and 'influenza' meant the 'influence' of the stars on our health."
  },

  /* ===================== MATHEMATICS (more) ===================== */
  {
    category: "Mathematics", difficulty: "hard",
    question: "Around 1637, Pierre de Fermat scribbled that he had a marvellous proof of a theorem, but that...",
    options: [
      "The margin was too small to contain it",
      "He had forgotten the details",
      "He would publish it the next year",
      "Only God could understand it"
    ],
    answer: 0,
    story: "Fermat claimed no three positive integers satisfy aⁿ + bⁿ = cⁿ for any n above 2, noting he had 'a marvellous proof which this margin is too narrow to contain' — then never wrote it down. The teasing note tormented mathematicians for **358 years**, until Andrew Wiles proved it in 1994 using tools Fermat couldn't have had. Whether Fermat truly had a proof remains a delicious mystery."
  },
  {
    category: "Mathematics", difficulty: "medium",
    question: "In mathematics, the number 0.9999… (repeating forever) is...",
    options: ["Exactly equal to 1", "Just a tiny bit less than 1", "Undefined", "Not a real number"],
    answer: 0,
    story: "It feels impossible, but 0.999… equals **exactly 1** — not nearly, precisely. One quick argument: 1/3 = 0.333…, so 3 × (1/3) = 0.999…, which must equal 3 × 1/3 = 1. There's no number you can fit between them, so they're the same value written two ways. It's a favourite classroom brawl that shows how infinity quietly bends our intuition."
  },
  {
    category: "Mathematics", difficulty: "hard",
    question: "The Four Color Theorem (any map needs only four colours) was historic in 1976 for being...",
    options: [
      "The first major theorem proved with the help of a computer",
      "Proven unprovable",
      "Solved by a schoolchild",
      "Disproven after 100 years"
    ],
    answer: 0,
    story: "The claim is simple — four colours always suffice so no two bordering regions match — but the proof required checking an enormous number of cases, so many that Appel and Haken used a **computer** to grind through them. It was the first celebrated theorem whose proof no human could fully check by hand, sparking a lasting debate: if nobody can verify every step, is it truly proved?"
  },
  {
    category: "Mathematics", difficulty: "hard",
    question: "Take any 4-digit number (not all digits equal), repeatedly subtract its digits sorted low from high, and you always reach...",
    options: ["6174", "1000", "9999", "1234"],
    answer: 0,
    story: "This is **Kaprekar's constant**. Try 3524: 5432 − 2345 = 3087; repeat, and within at most seven steps you always land on 6174 — after which it loops on itself (7641 − 1467 = 6174). Discovered by the Indian mathematician D.R. Kaprekar in 1949, it's a small piece of magic hiding inside ordinary arithmetic."
  },

  /* ===================== FOOD & DRINK (more) ===================== */
  {
    category: "Food & Drink", difficulty: "medium",
    question: "When Coca-Cola first went on sale in the 1880s, it contained...",
    options: [
      "A small amount of cocaine, from coca-leaf extract",
      "Pure caffeine and nothing else",
      "A splash of alcohol",
      "Morphine"
    ],
    answer: 0,
    story: "Invented by pharmacist John Pemberton as a 'medicinal' tonic, early Coca-Cola drew a trace of **cocaine** from coca leaves, plus caffeine from the kola nut — hence the name. The amount was small but real. Amid growing concern, the active cocaine was removed by around 1903; the company still uses specially processed, cocaine-free coca leaves for flavour today."
  },
  {
    category: "Food & Drink", difficulty: "medium",
    question: "The croissant, an icon of French bakeries, actually originated in...",
    options: ["Austria (as the 'kipferl')", "Italy", "Turkey", "Ancient Egypt"],
    answer: 0,
    story: "The crescent-shaped **'kipferl'** was eaten in Austria for centuries before an Austrian entrepreneur brought Viennese baking to Paris in the 1800s. The French reworked it with buttery, laminated puff-style dough to create the flaky croissant we love. A famous legend ties the crescent to a victory over the Ottomans — probably invented — but the Austrian roots are real."
  },
  {
    category: "Food & Drink", difficulty: "hard",
    question: "Worcestershire sauce was reportedly discovered when its makers...",
    options: [
      "Left a 'failed,' too-strong batch to age in a barrel for months",
      "Accidentally spilled two sauces together",
      "Burned a pot of stew",
      "Imported it and relabelled it"
    ],
    answer: 0,
    story: "The tale goes that chemists Lea and Perrins mixed a batch in the 1830s, found it unbearably harsh, and abandoned the barrels in a cellar. Rediscovering them much later, they tasted the **aged** sauce and found it had mellowed into something wonderful. Descended from Roman and Indian fish sauces, the anchovy-laced condiment went global — its recipe still partly secret."
  },
  {
    category: "Food & Drink", difficulty: "hard",
    question: "Vanilla is among the priciest spices largely because each flower must be...",
    options: [
      "Hand-pollinated — a method devised by a 12-year-old",
      "Aged underground for 50 years",
      "Harvested only at midnight",
      "Grown at high altitude"
    ],
    answer: 0,
    story: "Vanilla comes from an orchid whose blooms last less than a day and, outside its native Mexico, has no natural pollinator. In 1841, a 12-year-old enslaved boy named Edmond Albius on Réunion Island invented a quick **hand-pollination** trick with a sliver of bamboo — still used worldwide. His method made global vanilla farming possible, though he died poor and largely uncredited."
  },

  /* ===================== PSYCHOLOGY (more) ===================== */
  {
    category: "Psychology", difficulty: "medium",
    question: "In Stanley Milgram's famous 1961 experiment, ordinary people proved willing to...",
    options: [
      "Deliver what they believed were dangerous shocks to a stranger, when ordered to",
      "Cheat on a simple test",
      "Steal small sums of money",
      "Walk past someone in distress"
    ],
    answer: 0,
    story: "Told by a calm experimenter to give ever-stronger 'shocks' to a person (actually an actor) for wrong answers, about **65% of participants went all the way to a potentially lethal 450 volts** despite hearing screams — simply because an authority urged them on. Staged after the Nazi trials, it probed how ordinary people commit atrocities under orders. Its ethics are debated, but the core finding unsettles to this day."
  },
  {
    category: "Psychology", difficulty: "medium",
    question: "The 'nocebo effect' is the placebo's dark twin, in which...",
    options: [
      "Expecting harm can trigger real physical symptoms",
      "A sugar pill cures any disease",
      "Patients feel nothing at all",
      "Only doctors are affected"
    ],
    answer: 0,
    story: "A placebo can genuinely make you feel better because you expect it to. The **nocebo** effect runs the other way: expect side effects or harm, and you can develop real, measurable symptoms from a totally inert substance. In drug trials, patients on sugar pills sometimes report the exact side effects listed for the real drug. Belief alone can heal — or hurt."
  },
  {
    category: "Psychology", difficulty: "hard",
    question: "The 'Zeigarnik effect' is our tendency to...",
    options: [
      "Remember unfinished tasks better than completed ones",
      "Forget names the instant we hear them",
      "Recall our very earliest memory vividly",
      "Unconsciously copy others' posture"
    ],
    answer: 0,
    story: "A psychologist noticed waiters could recall complex unpaid orders in detail — then forgot them the moment the bill was settled. Experiments confirmed it: the mind clings to **incomplete tasks**, holding a low-level tension that only releases once we finish. It's why cliffhangers hook you, why open to-do loops nag, and why just *starting* a task makes it easier to return to."
  },
  {
    category: "Psychology", difficulty: "hard",
    question: "The 'McGurk effect' demonstrates that what you see can override what you...",
    options: ["Hear", "Smell", "Taste", "Feel"],
    answer: 0,
    story: "Watch a video of lips mouthing 'ga' while the audio actually plays 'ba,' and most people hear a third sound — 'da' — as the brain fuses the clashing cues. Astonishingly, the illusion holds even when you know the trick. It reveals that hearing isn't passive: your brain constantly blends sight and sound to decide what was said, which is partly why speech is harder to follow when you can't see the speaker's face."
  },

  /* __END__ */
];
