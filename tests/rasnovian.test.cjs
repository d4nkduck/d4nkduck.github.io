// Run: node tests/rasnovian.test.cjs
// These fixtures are not loaded by the website or consulted by the translator.
const {readFileSync}=require("node:fs");
const {resolve}=require("node:path");
const vm=require("node:vm");
const assert=require("node:assert/strict");
const context={window:{}};
vm.runInNewContext(readFileSync(resolve(__dirname,"../languages/rasnovian.js"),"utf8"),context);
const pack=context.window.languagePacks[0];
const cases=[
  [
    "I see the dog.",
    "Ik nu hunduta se."
  ],
  [
    "The dogs see me.",
    "Hindenle nu ikta se."
  ],
  [
    "She gives the red apple to him.",
    "Ea nu æpeluta rod ham gif."
  ],
  [
    "We did not walk to the river yesterday.",
    "Vi er til rænul gistrăn ne gang."
  ],
  [
    "Will you eat the bread tomorrow?",
    "Þu va bræduta amorgăn et li?"
  ],
  [
    "Why is the black bird singing?",
    "Hvi dur fuglul svart șing?"
  ],
  [
    "My brother's sword is sharper than yours.",
    "Sverdul broþărules ikes nu șærer þan þuesul es."
  ],
  [
    "They must hide inside the old fortress before night.",
    "Dei nu innan stænhusul ald foran nișt skul hyd."
  ],
  [
    "The woman who lives in the mountains knows our names.",
    "Viful þe nu in bergenle lev, nu namenla vies wit."
  ],
  [
    "If it rains, the road will become mud.",
    "Gif hit nu regn, drumul va slud verd."
  ],
  [
    "Five wolves are hunting three deer in the dark forest.",
    "Fim vulfen dur þri hertenta in vældul derk hent."
  ],
  [
    "Blood and iron built this city, not gold.",
    "Blod end izern er þes grodta byld, ne gold."
  ],
  [
    "Can she read the book?",
    "Ea nu bokuta kæn ræd li?"
  ],
  [
    "We will travel to the city tomorrow.",
    "Vi va til grodul amorgăn far."
  ],
  [
    "They should not close the window.",
    "Dei nu vindaguta ne bur luk."
  ],
  [
    "Three children see two dogs.",
    "Þri țilden nu tva hindenta se."
  ],
  [
    "Where are you going?",
    "Hvar dur þu gan?"
  ],
  [
    "I read the book.",
    "Ik nu bokuta ræd."
  ],
  [
    "She bought a red apple.",
    "Ea er æpel rod byg."
  ],
  [
    "The house was cold.",
    "Husul er kald es."
  ],
  [
    "They will open our door.",
    "Dei va doruta vies opn."
  ],
  [
    "Do you know me?",
    "Þu nu ikta wit li?"
  ],
  [
    "I am reading my book.",
    "Ik dur bokuta ikes ræd."
  ],
  [
    "My mother's house is bigger than ours.",
    "Husul modărules ikes nu storer þan viesul es."
  ],
  [
    "The teacher who reads the book knows me.",
    "Lærărul þe nu bokuta ræd, nu ikta wit."
  ],
  [
    "If you come, we will eat bread.",
    "Gif þu nu kum, vi va bræd et."
  ],
  [
    "The father and the mother see the children.",
    "Fædărul end modărul nu țildenla se."
  ],
  [
    "The dog is smaller than the horse.",
    "Hundul nu liter þan horsul es."
  ],
  [
    "My father drinks water.",
    "Fædărul ikes nu vætăr drink."
  ],
  [
    "The king sees the children.",
    "Țyningul nu țildenla se."
  ],
  [
    "She is singing.",
    "Ea dur șing."
  ],
  [
    "The iron is sharp.",
    "Izernul nu șær es."
  ],
  [
    "The mother knows my brother.",
    "Modărul nu broþăruta ikes wit."
  ],
  [
    "The deer sees the heart.",
    "Hertul nu hertăuta se."
  ],
  [
    "My sister does not remember those strange stories.",
    "Șystărul ikes nu þa sægenta fremdige ne mynd."
  ],
  [
    "The old kings see the thirsty horses.",
    "Țyningenle alde nu hersenla þyrstige se."
  ],
  [
    "The old kings' books are red.",
    "Bokenle țyningenles alde nu rod es."
  ],
  [
    "She gives the bread to him.",
    "Ea nu bræduta ham gif."
  ],
  [
    "He gives water to her.",
    "Han nu vætăr eam gif."
  ],
  [
    "I see a dog.",
    "Ik nu hundta se."
  ],
  [
    "I see a book.",
    "Ik nu bok se."
  ],
  [
    "I see the book.",
    "Ik nu bokuta se."
  ],
  [
    "The people know our names.",
    "Mænnenle nu namenla vies wit."
  ],
  [
    "We see the feet.",
    "Vi nu fetenla se."
  ],
  [
    "The hearts are strong.",
    "Hertăenle nu strang es."
  ],
  [
    "She sends the letters to them.",
    "Ea nu brevenla dem send."
  ],
  [
    "The children see the red apples.",
    "Țildenle nu æpelenla rode se."
  ],
  [
    "I have read the book.",
    "Ik nu ju bokuta ræd."
  ],
  [
    "She had eaten bread already.",
    "Ea er ju bræd ærnu et."
  ],
  [
    "We will have written the letters.",
    "Vi va ju brevenla rit."
  ],
  [
    "They had been working.",
    "Dei er ju dur verk."
  ],
  [
    "I was reading the book.",
    "Ik er dur bokuta ræd."
  ],
  [
    "She will be singing.",
    "Ea va dur șing."
  ],
  [
    "The book was written.",
    "Bokul er ves rit."
  ],
  [
    "The house will be built.",
    "Husul va ves byld."
  ],
  [
    "The bread is not eaten.",
    "Brædul nu ne ves et."
  ],
  [
    "He washes himself.",
    "Han nu sek vaș."
  ],
  [
    "She reads her own book.",
    "Ea nu bokuta sines ræd."
  ],
  [
    "We help each other.",
    "Vi nu samsek help."
  ],
  [
    "I see hers.",
    "Ik nu eaesuta se."
  ],
  [
    "Open the door!",
    "Opn doruta!"
  ],
  [
    "Do not close the window!",
    "Ne luk vindaguta!"
  ],
  [
    "Give the bread to him!",
    "Gif bræduta ham!"
  ],
  [
    "Although it rained, we worked.",
    "Þoh hit er regn, vi er verk."
  ],
  [
    "If I had known, I would have come.",
    "Gif ik er ju wit, ik hed ju kum."
  ],
  [
    "While she was singing, we slept.",
    "Medan ea er dur șing, vi er slæp."
  ],
  [
    "The book was written by her father.",
    "Bokul er av fædărul eaes ves rit."
  ],
  [
    "The bread was baked by the baker.",
    "Brædul er av bakkărul ves bak."
  ],
  [
    "An old woman lived in a small village.",
    "Vif ald er in þorp lit lev."
  ],
  [
    "She had lost her book.",
    "Ea er ju bokuta eaes loz."
  ],
  [
    "While she was walking in the forest, a child saw her.",
    "Medan ea er dur in vældul gang, țild er eata se."
  ],
  [
    "The child found the book near a river.",
    "Țildul er bokuta neh ræn find."
  ],
  [
    "The child gave the book to her.",
    "Țildul er bokuta eam gif."
  ],
  [
    "She opened her own book.",
    "Ea er bokuta sines opn."
  ],
  [
    "She remembered her father.",
    "Ea er fædăruta eaes mynd."
  ],
  [
    "Although the night was cold, they were happy.",
    "Þoh niștul er kald es, dei er blid es."
  ]
];
for(const [en,ra] of cases){
 assert.equal(pack.translateClause(en,false),ra,en);
 assert.equal(pack.translateClause(ra,true),en,ra);
 assert.ok(!pack.phrases.some(p=>p[0]===en),"Regression case leaked into phrasebook: "+en);
}
assert.equal(pack.translateClause("The glorb flimbles.",false),null);
assert.equal(pack.history.changes.length,40);
for (const x of pack.history.changes) assert.ok(pack.words.some(w=>w[0]===x.english&&w[1]===x.modern&&w[2]===x.pos));
console.log(cases.length+" bidirectional regression cases passed.");

 // Replay the ordered laws on explicitly audited historical root components.
 function evolve(root) {
   let s=root, rules=[];
   const laws=[
     ["S1",x=>x.replace(/^sk(?=[æeiy])/,"ș").replace(/^k(?=[iy])/,"ț").replace(/^s(?=[iy])/,"ș")],
     ["S2",x=>x.replace(/^hl/,"l")],
     ["S3",x=>x.replace(/([aăæeiouy])s(?=[aăæeiouy])/g,"$1z")],
     ["S4",x=>x.replace(/eo/g,"e")],
     ["S5",x=>(x.match(/[aăæeiouy]+/g)||[]).length>1?x.replace(/er$/,"ăr"):x]
   ];
   for(const [id,apply] of laws){const next=apply(s);if(next!==s){rules.push(id);s=next;}}
   return {s,rules};
 }
 for(const entry of pack.history.changes){
   assert.equal(entry.components.join(""),entry.earlier);
   const parts=entry.components.map(evolve);
   assert.equal(parts.map(p=>p.s).join(""),entry.modern);
   assert.equal(JSON.stringify([...new Set(parts.flatMap(p=>p.rules))]),JSON.stringify(entry.rules));
 }
 assert.equal(new Set(pack.words.map(w=>w[1])).size,pack.words.length,"Native spelling collision");

 // Audit all noun forms by case; nominative and accusative may intentionally
 // share a form, but distinct nouns must not collide within the same case.
 for(const kase of ["nom","acc","gen"]){
   const seen=new Map();
   for(const noun of pack.words.filter(w=>["noun","concept"].includes(w[2])))
     for(const plural of [false,true])for(const definite of [false,true]){
       const form=pack.inflectNoun(noun,plural,definite,kase);
       assert.ok(!seen.has(form),"Collision in "+kase+": "+form);
       seen.set(form,noun[0]);
     }
 }
 const dog=pack.words.find(w=>w[0]==="dog");
 assert.equal(pack.inflectNoun(dog,true,true,"acc"),"hindenla");
 console.log("Historical replay and noun paradigm audit passed.");

assert.equal(pack.translateClause("She had already eaten bread.",false),"Ea er ju bræd ærnu et.");

// Synonyms normalize to a canonical English reading, so reverse need not preserve the original wording.
const aliasCases=[
  [
    "The large hounds see the tiny cat.",
    "Hindenle store nu mætuta lit se.",
    "The big dogs see the small cat."
  ],
  [
    "I purchased the book.",
    "Ik er bokuta byg.",
    "I bought the book."
  ],
  [
    "She is strolling in the woods.",
    "Ea dur in vældul gang.",
    "She is walking in the forest."
  ],
  [
    "Step away from the gate!",
    "Fotmov avæg fra gatul!",
    "Step away from the gate!"
  ],
  [
    "Move away from the gate!",
    "Mov avæg fra gatul!",
    "Move away from the gate!"
  ],
  [
    "Stride forward!",
    "Fotmov fram!",
    "Step forward!"
  ],
  [
    "Get out of the room!",
    "Læv rumuta!",
    "Leave the room!"
  ],
  [
    "I'll return tomorrow.",
    "Ik va amorgăn vend.",
    "I will return tomorrow."
  ],
  [
    "Please shut the door!",
    "Luk doruta bidde!",
    "Close the door please!"
  ],
  [
    "The sentry sees the traveller.",
    "Vaktărul nu farenduta se.",
    "The guard sees the traveller."
  ],
  [
    "The guard offered the book to him.",
    "Vaktărul er bokuta ham boden.",
    "The guard offered the book to him."
  ],
  [
    "The huge fortress is ancient.",
    "Stænhusul stor nu ald es.",
    "The big fortress is old."
  ],
  [
    "They have to leave now.",
    "Dei nu nuna skul læv.",
    "They must leave now."
  ],
  [
    "She is really tired.",
    "Ea nu særli mæd es.",
    "She is very tired."
  ],
  [
    "I am looking at the tower.",
    "Ik dur bi turnul skav.",
    "I am looking at the tower."
  ],
  [
    "We should go back.",
    "Vi nu bak bur gan.",
    "We should go back."
  ],
  [
    "The guard protects the village.",
    "Vaktărul nu þorputa vakt.",
    "The guard protects the village."
  ],
  [
    "The gray cat is silent.",
    "Mætul græ nu stil es.",
    "The grey cat is quiet."
  ],
  [
    "He has begun working.",
    "Han nu ju verkan beginn.",
    "He has started working."
  ],
  [
    "I need assistance.",
    "Ik nu help þurf.",
    "I need help."
  ],
  [
    "They walked close to the tower.",
    "Dei er neh turnul gang.",
    "They walked near the tower."
  ],
  [
    "The kids are frightened.",
    "Țildenle nu fyrhtig es.",
    "The children are afraid."
  ],
  [
    "I have obtained the key.",
    "Ik nu ju kleșuta get.",
    "I have got the key."
  ],
  [
    "The guard stepped back.",
    "Vaktărul er bak fotmov.",
    "The guard stepped back."
  ],
  [
    "She gave him the book.",
    "Ea er bokuta ham gif.",
    "She gave the book to him."
  ]
];
for(const [en,ra,canonical] of aliasCases){assert.equal(pack.translateClause(en,false),ra,en);assert.equal(pack.translateClause(ra,true),canonical,ra);assert.ok(!pack.phrases.some(p=>p[0]===en));}
assert.equal(pack.lookupEnglish("hound")[0][1],"hund");
assert.equal(pack.lookupEnglish("purchase")[0][1],"bygan");
console.log(aliasCases.length+" flexible-input cases passed.");

// Clause-aware parsing; unknown words never become permanent dictionary entries.
const clauseCases=[
  [
    "I will see the guard, but she will wait.",
    "Ik va vaktăruta se, ak ea va bid."
  ],
  [
    "Open the door, brave traveller!",
    "Opn doruta, farend dærig!"
  ],
  [
    "I'll wait where you stand.",
    "Ik va bid hvar þu nu stand."
  ],
  [
    "Now!",
    "Nuna!"
  ],
  [
    "She warned the guard.",
    "Ea er vaktăruta varn."
  ],
  [
    "The merchant promised to return.",
    "Marșantul er til vendan belov."
  ],
  [
    "The guard is honest.",
    "Vaktărul nu soþfast es."
  ]
];
for(const [en,ra] of clauseCases){assert.equal(pack.translateClause(en,false),ra,en);assert.ok(!pack.phrases.some(p=>p[0]===en));}
const partialCases=[
  [
    "I see the glorb.",
    "Ik nu [glorb]uta se."
  ],
  [
    "She reads the luminous book.",
    "Ea nu bokuta [luminous] ræd."
  ],
  [
    "We will open the zindle.",
    "Vi va [zindle]uta opn."
  ],
  [
    "The glorb sees the dog.",
    "[glorb]ul nu hunduta se."
  ],
  [
    "I see a glorb and she reads the book.",
    "Ik nu [glorb] se end ea nu bokuta ræd."
  ],
  [
    "I see the glorb and the zindle.",
    "Ik nu [glorb]uta end [zindle]uta se."
  ]
];
for(const [en,ra] of partialCases){assert.equal(pack.translatePartial(en,false)?.text,ra,en);}
assert.equal(pack.translatePartial("I will flibble the door.",false),null);
assert.equal(pack.lookupEnglish("glorb").length,0);

// Conversational rules and register: no whole utterance phrasebook entries.
const conversationCases=[
  [
    "What are you talking about, bro?",
    "Um hvat dur þu sprek, broþ?",
    "What are you speaking about, bro?"
  ],
  [
    "You genuinely sound stupid as fuck right now, I can not even lie bro",
    "Þu nu verdomli dolig nuna soþli lud, ik nu jafnli ne kæn lyg, broþ",
    "You genuinely sound damn stupid now, I can not even lie, bro"
  ],
  [
    "You genuinely sound stupid as fuck right now.",
    "Þu nu verdomli dolig nuna soþli lud.",
    "You genuinely sound damn stupid now."
  ],
  [
    "I cannot even lie, bro.",
    "Ik nu jafnli ne kæn lyg, broþ.",
    "I can not even lie, bro."
  ],
  [
    "What did you read?",
    "Hvat er þu ræd?",
    "What did you read?"
  ],
  [
    "Who did she see?",
    "Hva er ea se?",
    "Who did she see?"
  ],
  [
    "What are they thinking about?",
    "Um hvat dur dei þenk?",
    "What are they thinking about?"
  ],
  [
    "The plan sounds good.",
    "Ætlanul nu god lud.",
    "The plan sounds good."
  ],
  [
    "She seems confused.",
    "Ea nu vildig șin.",
    "She seems confused."
  ],
  [
    "He feels tired.",
    "Han nu mæd fel.",
    "He feels tired."
  ],
  [
    "I honestly cannot remember.",
    "Ik nu soþli ne kæn mynd.",
    "I genuinely can not remember."
  ],
  [
    "They actually know the answer.",
    "Dei nu svaruta verli wit.",
    "They actually know the answer."
  ],
  [
    "You sound damn tired.",
    "Þu nu verdomli mæd lud.",
    "You sound damn tired."
  ],
  [
    "Maybe.",
    "Motsva.",
    "Maybe."
  ],
  [
    "Okay!",
    "Væla!",
    "Okay!"
  ],
  [
    "I am sorry.",
    "Ik nu sarig es.",
    "I am sorry."
  ],
  [
    "I can't even remember.",
    "Ik nu jafnli ne kæn mynd.",
    "I can not even remember."
  ],
  [
    "I can not even lie bro",
    "Ik nu jafnli ne kæn lyg, broþ",
    "I can not even lie, bro"
  ],
  [
    "I genuinely like the book.",
    "Ik nu bokuta soþli lik.",
    "I genuinely like the book."
  ],
  [
    "I feel pain.",
    "Ik nu sær fel.",
    "I feel pain."
  ],
  [
    "You sound stupid right now, I cannot even lie, bro.",
    "Þu nu dolig nuna lud, ik nu jafnli ne kæn lyg, broþ.",
    "You sound stupid now, I can not even lie, bro."
  ],
  [
    "They are honestly tired.",
    "Dei nu mæd soþli es.",
    "They genuinely are tired."
  ],
  [
    "What will you buy?",
    "Hvat va þu byg?",
    "What will you buy?"
  ],
  [
    "I probably will come tomorrow.",
    "Ik va amorgăn venli kum.",
    "I probably will come tomorrow."
  ]
];
for(const [en,ra,back] of conversationCases){assert.equal(pack.translateClause(en,false),ra,en);assert.equal(pack.translateClause(ra,true),back,ra);assert.ok(!pack.phrases.some(p=>p[0]===en));}
assert.equal(pack.lookupEnglish("bruv")[0][1],"broþ");
assert.equal(pack.lookupEnglish("dumb")[0][1],"dolig");

// Productive everyday reactions, entertainment and independent demonstratives.
const everydayCases=[
  [
    "Comrade, this movie is boring me.",
    "Samfer, þes film dur ikta led.",
    "Comrade, this movie is boring me."
  ],
  [
    "Comrade, this move is boring me.",
    "Samfer, þes mov dur ikta led.",
    "Comrade, this move is boring me."
  ],
  [
    "This film is boring.",
    "Þes film nu ledsam es.",
    "This movie is boring."
  ],
  [
    "I am bored.",
    "Ik nu ledig es.",
    "I am bored."
  ],
  [
    "The film bored me.",
    "Filmul er ikta led.",
    "The movie bored me."
  ],
  [
    "The game is exciting.",
    "Spælul nu fyrblidig es.",
    "The game is exciting."
  ],
  [
    "The game excites the children.",
    "Spælul nu țildenla fyrblid.",
    "The game excites the children."
  ],
  [
    "The music annoys her.",
    "Muzikul nu eata erg.",
    "The music annoys her."
  ],
  [
    "The picture surprised me.",
    "Bildul er ikta mir.",
    "The picture surprised me."
  ],
  [
    "This is interesting.",
    "Þes nu hugvilig es.",
    "This is interesting."
  ],
  [
    "I like that.",
    "Ik nu þat lik.",
    "I like that."
  ],
  [
    "These are funny.",
    "Þesne nu læhlig es.",
    "These are funny."
  ],
  [
    "The actor is watching the movie.",
    "Leikărul dur filmuta vakanse.",
    "The actor is watching the movie."
  ],
  [
    "I watched the film yesterday.",
    "Ik er filmuta gistrăn vakanse.",
    "I watched the movie yesterday."
  ],
  [
    "The show is not interesting.",
    "Șauul nu hugvilig ne es.",
    "The show is not interesting."
  ],
  [
    "The game worries him.",
    "Spælul nu hanta sorg.",
    "The game worries him."
  ],
  [
    "This is a problem.",
    "Þes nu trud es.",
    "This is a problem."
  ],
  [
    "The audience is excited.",
    "Herendul nu fyrblid es.",
    "The audience is excited."
  ],
  [
    "I will explain the problem.",
    "Ik va truduta șær.",
    "I will explain the problem."
  ],
  [
    "She decided to watch the film.",
    "Ea er filmuta til vakansean țyrord.",
    "She decided to watch the movie."
  ],
  [
    "He is still watching the movie.",
    "Han dur filmuta enn vakanse.",
    "He is watching the movie still."
  ],
  [
    "The idea sounds genuinely good.",
    "Ideul nu soþli god lud.",
    "The idea sounds genuinely good."
  ],
  [
    "Comrade, are you ready?",
    "Samfer, þu nu ræd es li?",
    "Comrade, are you ready?"
  ],
  [
    "The comrade sees the picture.",
    "Samferul nu bilduta se.",
    "The comrade sees the picture."
  ],
  [
    "The comrades are watching the screen.",
    "Samferenle dur șermuta vakanse.",
    "The comrades are watching the screen."
  ],
  [
    "What did you watch?",
    "Hvat er þu vakanse?",
    "What did you watch?"
  ],
  [
    "That annoys me.",
    "Þat nu ikta erg.",
    "That annoys me."
  ],
  [
    "I am worried about the game.",
    "Ik nu sorgig um spælul es.",
    "I am worried about the game."
  ],
  [
    "The movie was shown.",
    "Filmul er ves șav.",
    "The movie was shown."
  ],
  [
    "The child asks the question.",
    "Țildul nu fræguta æsk.",
    "The child asks the question."
  ],
  [
    "I understand the reason.",
    "Ik nu grunduta understand.",
    "I understand the reason."
  ],
  [
    "We discussed the problem.",
    "Vi er truduta samsprek.",
    "We discussed the problem."
  ],
  [
    "I am disappointed.",
    "Ik nu nadlos es.",
    "I am disappointed."
  ]
];
for(const [en,ra,back] of everydayCases){assert.equal(pack.translateClause(en,false),ra,en);assert.equal(pack.translateClause(ra,true),back,ra);assert.ok(!pack.phrases.some(p=>p[0]===en));}
assert.equal(pack.lookupEnglish("film")[0][1],"film");
assert.ok(pack.lookupEnglish("move").some(w=>w[2]==="noun")&&pack.lookupEnglish("move").some(w=>w[2]==="verb"));
