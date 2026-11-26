const assert=require("node:assert/strict");
global.window={languagePacks:[]};
require("../languages/javenoerl.js");
require("../languages/paraphrase.js");
const p=window.languagePacks[0];
const cases=[
  [
    "I have to repair the machine.",
    "I must repair the machine.",
    "Je mus réparé le mashin.",
    "I must repair the machine."
  ],
  [
    "We have got to finish the task.",
    "We must finish the task.",
    "Nus mus ferté le tásk.",
    "We must finish the task."
  ],
  [
    "I am going to visit my family.",
    "I will visit my family.",
    "Je va besuché mon famél.",
    "I will visit my family."
  ],
  [
    "He is going to buy a new phone.",
    "He will buy a new phone.",
    "Il va kaufé un neu téléfon.",
    "He will buy a new phone."
  ],
  [
    "I am in need of help.",
    "I need help.",
    "Je brauché hilf.",
    "I need help."
  ],
  [
    "She is fond of music.",
    "She likes music.",
    "El plais musike.",
    "She likes music."
  ],
  [
    "I cannot figure out the problem.",
    "I cannot understand the problem.",
    "Je ne kan compré le problém.",
    "I can not understand the problem."
  ],
  [
    "She figured out the answer.",
    "She understood the answer.",
    "El pré compré le antwort.",
    "She understood the answer."
  ],
  [
    "I headed home.",
    "I went home.",
    "Je pré geh heim.",
    "I went home."
  ],
  [
    "I am exhausted.",
    "I am very tired.",
    "Je es très müde.",
    "I am very tired."
  ],
  [
    "We bought loads of books.",
    "We bought a lot of books.",
    "Nus pré kaufé abondé buchs.",
    "We bought a lot of books."
  ],
  [
    "I will return before long.",
    "I will return soon.",
    "Je va return bald.",
    "I will return soon."
  ],
  [
    "I have to give you a hand.",
    "I must give you a hand.",
    "Je mus gebé un main zu vu.",
    "I must give a hand to you."
  ],
  [
    "I am going to take a look at the machine.",
    "I will look at the machine.",
    "Je va regard an le mashin.",
    "I will look at the machine."
  ],
  [
    "I reside in a small house.",
    "I live in a small house.",
    "Je viv in un petit haus.",
    "I live in a small house."
  ],
  [
    "They resided in the village.",
    "They lived in the village.",
    "Els pré viv in le dorf.",
    "They lived in the village."
  ],
  [
    "We have to go home right this minute.",
    "We must go home now.",
    "Nus mus geh heim jetzt.",
    "We must go home now."
  ]
];
for(const [en,canonical,ja,back] of cases){assert.equal(p.translateClause(en),null,en);const r=window.linguaParaphrase(p,en);assert.equal(r.canonical,canonical,en);assert.equal(r.text,ja,en);assert.equal(r.back,back,en);assert.ok(!p.phrases.some(x=>x[0]===en));}
for(const en of ["I do not have to work.","I am going to the shop.","The machine is worn out.","I am not fond of this movie."]){assert.equal(window.linguaParaphrase(p,en),null,en);}
assert.equal(window.linguaParaphrase(p,"Je werké.",true),null);
assert.equal(p.words.length,1101);
console.log(cases.length+" paraphrase cases passed.");
