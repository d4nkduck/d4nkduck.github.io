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
    "Ik nu hundulta se."
  ],
  [
    "The dogs see me.",
    "Hundenle nu ikta se."
  ],
  [
    "She gives the red apple to him.",
    "Ea nu æpelulta rod til han gif."
  ],
  [
    "We did not walk to the river yesterday.",
    "Vi er til rænul gistrăn ne gang."
  ],
  [
    "Will you eat the bread tomorrow?",
    "Þu va brædulta amorgăn et li?"
  ],
  [
    "Why is the black bird singing?",
    "Hvi dur fuglul svart sing?"
  ],
  [
    "My brother's sword is sharper than yours.",
    "Sverdul av broþerul ikes nu skærer þan þuesul es."
  ],
  [
    "They must hide inside the old fortress before night.",
    "Dei nu innan stænhusul ald foran nișt skul hyd."
  ],
  [
    "The woman who lives in the mountains knows our names.",
    "Viful þe nu in bergenle lev, nu namăenleta vies wit."
  ],
  [
    "If it rains, the road will become mud.",
    "Gif hit nu regn, drumul va slud verd."
  ],
  [
    "Five wolves are hunting three deer in the dark forest.",
    "Fim vulfen dur þri heortenta in vældul deork hent."
  ],
  [
    "Blood and iron built this city, not gold.",
    "Blod end isern er þes grodta byld, ne gold."
  ],
  [
    "Can she read the book?",
    "Ea nu bokulta kæn ræd li?"
  ],
  [
    "We will travel to the city tomorrow.",
    "Vi va til grodul amorgăn far."
  ],
  [
    "They should not close the window.",
    "Dei nu vindagulta ne bur luk."
  ],
  [
    "Three children see two dogs.",
    "Þri kilden nu tva hundenta se."
  ],
  [
    "Where are you going?",
    "Hvar dur þu gan?"
  ],
  [
    "I read the book.",
    "Ik nu bokulta ræd."
  ],
  [
    "She bought a red apple.",
    "Ea er æpelta rod byg."
  ],
  [
    "The house was cold.",
    "Husul er kald es."
  ],
  [
    "They will open our door.",
    "Dei va dorulta vies opn."
  ],
  [
    "Do you know me?",
    "Þu nu ikta wit li?"
  ],
  [
    "I am reading my book.",
    "Ik dur bokulta ikes ræd."
  ],
  [
    "My mother's house is bigger than ours.",
    "Husul av moderul ikes nu storer þan viesul es."
  ],
  [
    "The teacher who reads the book knows me.",
    "Lærerul þe nu bokulta ræd, nu ikta wit."
  ],
  [
    "If you come, we will eat bread.",
    "Gif þu nu kum, vi va brædta et."
  ],
  [
    "The father and the mother see the children.",
    "Fæderul end moderul nu kildenleta se."
  ],
  [
    "The dog is smaller than the horse.",
    "Hundul nu liter þan horsul es."
  ]
];
for(const [en,ra] of cases){
 assert.equal(pack.translateClause(en,false),ra,en);
 assert.equal(pack.translateClause(ra,true),en,ra);
 assert.ok(!pack.phrases.some(p=>p[0]===en),"Regression case leaked into phrasebook: "+en);
}
assert.equal(pack.translateClause("The glorb flimbles.",false),null);
console.log(cases.length+" bidirectional regression cases passed.");
