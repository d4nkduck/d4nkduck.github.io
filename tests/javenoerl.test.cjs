const assert=require("node:assert/strict");
global.window={languagePacks:[]};
require("../languages/javenoerl.js");
const p=window.languagePacks[0];
const cases=[
  [
    "work",
    "The task is complete.",
    "Stat le tásk férti.",
    "The task is complete."
  ],
  [
    "everyday",
    "The task is complete.",
    "Le tásk es férti.",
    "The task is complete."
  ],
  [
    "personal",
    "You are kind.",
    "Tei es gentil.",
    "You are kind."
  ],
  [
    "work",
    "Check the system!",
    "Prüfé le sistém!",
    "Check the system!"
  ],
  [
    "personal",
    "Please close the door.",
    "Pli ferm le tür.",
    "Please close the door."
  ],
  [
    "personal",
    "I trust you.",
    "Je vertraué tei.",
    "I trust you."
  ],
  [
    "everyday",
    "We will build a new house.",
    "Nus va baué un neu haus.",
    "We will build a new house."
  ],
  [
    "everyday",
    "The worker repaired the machine.",
    "Le werkant pré réparé le maschin.",
    "The worker repaired the machine."
  ],
  [
    "everyday",
    "She is reading a book.",
    "El dur lis un buch.",
    "She is reading a book."
  ],
  [
    "everyday",
    "Do you need help?",
    "Est vu brauché hilf?",
    "Do you need help?"
  ],
  [
    "everyday",
    "I want to learn.",
    "Je voulé zu lerné.",
    "I want to learn."
  ],
  [
    "personal",
    "We love spending time together.",
    "Nus aimé en passé zeit ensam.",
    "We love spending time together."
  ],
  [
    "everyday",
    "I have finished the task.",
    "Je ja ferté le tásk.",
    "I have finished the task."
  ],
  [
    "everyday",
    "We are not ready.",
    "Nus ne es prêt.",
    "We are not ready."
  ],
  [
    "personal",
    "You will return home.",
    "Tei va retourn heim.",
    "You will return home."
  ],
  [
    "work",
    "The team completed the project.",
    "Le ékip pré ferté le projekt.",
    "The team finished the project."
  ],
  [
    "everyday",
    "Where do you work?",
    "Où vu werké?",
    "Where do you work?"
  ],
  [
    "personal",
    "Your family is here.",
    "Tein famél es ici.",
    "Your family is here."
  ],
  [
    "everyday",
    "The children are happy.",
    "Les enfants es heureux.",
    "The children are happy."
  ],
  [
    "work",
    "You must check the machine.",
    "Vu mus prüfé le maschin.",
    "You must check the machine."
  ],
  [
    "everyday",
    "I can help.",
    "Je kan hilfé.",
    "I can help."
  ],
  [
    "everyday",
    "She should rest.",
    "El sol ruhé.",
    "She should rest."
  ],
  [
    "personal",
    "We would return home.",
    "Nus würd retourn heim.",
    "We would return home."
  ],
  [
    "work",
    "The machines are ready.",
    "Stat les maschins prêt.",
    "The machines are ready."
  ],
  [
    "work",
    "Do not open the door!",
    "Ne ouvr le tür!",
    "Do not open the door!"
  ],
  [
    "everyday",
    "They bought three books.",
    "Els pré kaufé drei buchs.",
    "They bought three books."
  ],
  [
    "personal",
    "I will help your friend.",
    "Je va hilfé tein amien.",
    "I will help your friend."
  ],
  [
    "everyday",
    "The engineer is diligent.",
    "Le ingeniœr es fléissig.",
    "The engineer is diligent."
  ],
  [
    "work",
    "Verify the results!",
    "Prüfé les résults!",
    "Check the results!"
  ],
  [
    "everyday",
    "We came from the city.",
    "Nus pré vien aus le ville.",
    "We came from the city."
  ]
];
for(const [register,en,ja,back] of cases){p.register=register;assert.equal(p.translateClause(en,false),ja,en);assert.equal(p.translateClause(ja,true),back,ja);assert.ok(!p.phrases.some(x=>x[0]===en));}
assert.equal(new Set(p.words.map(x=>x[1])).size,p.words.length);
for(const w of p.words)for(const ch of w[1])if(/\p{L}/u.test(ch))assert.ok(p.alphabet.includes(ch.toUpperCase()),w[1]);
assert.equal(p.translateClause("flibble zork glorb",false),null);
p.register="personal";assert.equal(p.lookupEnglish("you")[0][1],"tei");
p.register="everyday";assert.equal(p.lookupEnglish("you")[0][1],"vu");
console.log(cases.length+" bidirectional cases passed.");

const expansionCases=[
  [
    "everyday",
    "I love my job.",
    "Je aimé mon beruf.",
    "I love my job."
  ],
  [
    "everyday",
    "She loves her profession.",
    "El aimé sen beruf.",
    "She loves her job."
  ],
  [
    "everyday",
    "I like this movie.",
    "Je plais dies film.",
    "I like this movie."
  ],
  [
    "everyday",
    "He is watching the film.",
    "Il dur regard le film.",
    "He is looking the movie."
  ],
  [
    "everyday",
    "The food tastes delicious.",
    "Le nahr schmeck lecker.",
    "The food tastes delicious."
  ],
  [
    "everyday",
    "I have a new phone.",
    "Je hav un neu téléfon.",
    "I have a new phone."
  ],
  [
    "everyday",
    "We bought some apples.",
    "Nus pré kaufé etwas apfels.",
    "We bought some apples."
  ],
  [
    "everyday",
    "We will travel tomorrow.",
    "Nus va reisé morgen.",
    "We will travel tomorrow."
  ],
  [
    "everyday",
    "I really enjoy my work.",
    "Je geniess mon werk très.",
    "I enjoy my work very."
  ],
  [
    "everyday",
    "The engineer repaired the broken device.",
    "Le ingeniœr pré réparé le kaputt gerät.",
    "The engineer repaired the broken device."
  ],
  [
    "everyday",
    "I need a cup of coffee.",
    "Je brauché un tass de kafé.",
    "I need a cup of coffee."
  ],
  [
    "everyday",
    "The child is playing a game.",
    "Le enfant dur joué un spiel.",
    "The child is playing a game."
  ],
  [
    "everyday",
    "They are happy but we are tired.",
    "Els es heureux mais nus es müde.",
    "They are happy but we are tired."
  ],
  [
    "everyday",
    "I want to visit my family.",
    "Je voulé zu besuché mon famél.",
    "I want to visit my family."
  ],
  [
    "everyday",
    "She is talking about her job.",
    "El dur parlé über sen beruf.",
    "She is speaking about her job."
  ],
  [
    "everyday",
    "He found his keys.",
    "Il pré findé son schlüssels.",
    "He found his keys."
  ],
  [
    "everyday",
    "The weather is cold today.",
    "Le wetter es kalt heut.",
    "The weather is cold today."
  ],
  [
    "everyday",
    "The dog is sleeping.",
    "Le hund dur dorm.",
    "The dog is sleeping."
  ],
  [
    "everyday",
    "We can improve the system.",
    "Nus kan verbesser le sistém.",
    "We can improve the system."
  ],
  [
    "everyday",
    "She gave me a book.",
    "El pré gebé un buch zu me.",
    "She gave a book to me."
  ],
  [
    "everyday",
    "Please check the report.",
    "Pli prüfé le raport.",
    "Please check the report."
  ],
  [
    "everyday",
    "I am bored.",
    "Je es gelangweilt.",
    "I am bored."
  ],
  [
    "everyday",
    "My friend seems worried.",
    "Mon amien schein besorgt.",
    "My friend seems worried."
  ],
  [
    "everyday",
    "They bought a mobile phone.",
    "Els pré kaufé un téléfon.",
    "They bought a phone."
  ],
  [
    "everyday",
    "I am learning English.",
    "Je dur lerné englisch.",
    "I am learning English."
  ],
  [
    "everyday",
    "She honestly likes her job.",
    "El plais sen beruf franchement.",
    "She likes her job honestly."
  ],
  [
    "everyday",
    "We must protect the environment.",
    "Nus mus schützé le umwelt.",
    "We must protect the environment."
  ],
  [
    "everyday",
    "This is my favourite song.",
    "Dies es mon favori lied.",
    "This is my favourite song."
  ],
  [
    "everyday",
    "Do you know the answer?",
    "Est vu wiss le antwort?",
    "Do you know the answer?"
  ],
  [
    "everyday",
    "I want more tea.",
    "Je voulé mehr té.",
    "I want more tea."
  ]
];
for(const [register,en,ja,back] of expansionCases){p.register=register;assert.equal(p.translateClause(en,false),ja,en);assert.equal(p.translateClause(ja,true),back,ja);assert.ok(!p.phrases.some(x=>x[0]===en));}
