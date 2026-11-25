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
