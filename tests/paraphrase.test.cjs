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
    "I must help you.",
    "Je mus hilfé vu.",
    "I must help you."
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
for(const en of ["I am going to the shop.","The machine is worn out.","I am not fond of this movie."]){assert.equal(window.linguaParaphrase(p,en),null,en);}
assert.equal(window.linguaParaphrase(p,"Je werké.",true),null);
assert.equal(p.words.length,1101);
console.log(cases.length+" paraphrase cases passed.");

const preferredCases=[
  [
    "She has to work tomorrow.",
    "She must work tomorrow.",
    "El mus werké morgen.",
    "She must work tomorrow."
  ],
  [
    "I do not have to work.",
    "I do not need to work.",
    "Je ne brauché zu werk.",
    "I do not need to work."
  ],
  [
    "She does not have to work tomorrow.",
    "She does not need to work tomorrow.",
    "El ne brauché zu werk morgen.",
    "She does not need to work tomorrow."
  ],
  [
    "Can you give me a hand?",
    "Can you help me?",
    "Est vu kan hilfé me?",
    "Can you help me?"
  ],
  [
    "He gave me a hand.",
    "He helped me.",
    "Il pré hilfé me.",
    "He helped me."
  ],
  [
    "She did not give me a hand.",
    "She did not help me.",
    "El pré ne hilfé me.",
    "She did not help me."
  ],
  [
    "I am working at the moment.",
    "I am working now.",
    "Je dur werké jetzt.",
    "I am working now."
  ],
  [
    "We had to repair the machine.",
    "We needed to repair the machine.",
    "Nus pré brauché zu réparé le mashin.",
    "We needed to repair the machine."
  ],
  [
    "I have to give you a hand.",
    "I must help you.",
    "Je mus hilfé vu.",
    "I must help you."
  ]
];
for(const [en,canonical,ja,back] of preferredCases){const r=window.linguaPreferredParaphrase(p,en);assert.equal(r.canonical,canonical,en);assert.equal(r.text,ja,en);assert.equal(r.back,back,en);}
assert.equal(window.linguaPreferredParaphrase(p,"I am going to the shop."),null);
assert.equal(window.linguaPreferredParaphrase(p,"I gave her a hand-written letter."),null);

// Shared adapter integration: Rasnovian uses the identical precedence as the browser.
require("../languages/rasnovian.js");
const ras=window.languagePacks.find(p=>p.id==="rasnovian");
const rasCases=[
  [
    "She has to work tomorrow.",
    "She must work tomorrow.",
    "Ea nu amorgăn skul verk.",
    "She must work tomorrow."
  ],
  [
    "I do not have to work.",
    "I do not need to work.",
    "Ik nu til verk ne þurf.",
    "I do not need to work."
  ],
  [
    "Can you give me a hand?",
    "Can you help me?",
    "Þu nu ikta kæn help li?",
    "Can you help me?"
  ],
  [
    "He gave me a hand.",
    "He helped me.",
    "Han er ikta help.",
    "He helped me."
  ],
  [
    "I am working at the moment.",
    "I am working now.",
    "Ik dur nuna verk.",
    "I am working now."
  ],
  [
    "I have to give you a hand.",
    "I must help you.",
    "Ik nu þuta skul help.",
    "I must help you."
  ],
  [
    "I am in need of help.",
    "I need help.",
    "Ik nu help þurf.",
    "I need help."
  ],
  [
    "She is fond of music.",
    "She likes music.",
    "Ea nu muzik lik.",
    "She likes music."
  ],
  [
    "I cannot figure out the problem.",
    "I cannot understand the problem.",
    "Ik nu truduta ne kæn understand.",
    "I can not understand the problem."
  ],
  [
    "We bought loads of books.",
    "We bought a lot of books.",
    "Vi er mang boken byg.",
    "We bought many books."
  ],
  [
    "I will return before long.",
    "I will return soon.",
    "Ik va snat vend.",
    "I will return soon."
  ],
  [
    "I reside in a small house.",
    "I live in a small house.",
    "Ik nu in hus lit lev.",
    "I live in a small house."
  ],
  [
    "We have to go home right this minute.",
    "We must go home now.",
    "Vi nu heimtil nuna skul gan.",
    "We must go home now."
  ],
  [
    "She did not give me a hand.",
    "She did not help me.",
    "Ea er ikta ne help.",
    "She did not help me."
  ],
  [
    "We are going to eat dinner.",
    "We will eat dinner.",
    "Vi va ævenmet et.",
    "We will eat dinner."
  ]
];
function sharedTranslation(pack,en){const preferred=window.linguaPreferredParaphrase(pack,en);if(preferred)return preferred;const direct=pack.translateClause(en,false);if(direct)return {text:direct,canonical:en,back:pack.translateClause(direct,true)};return window.linguaParaphrase(pack,en);}
for(const [en,canonical,ja,back] of rasCases){const result=sharedTranslation(ras,en);assert.ok(result,en);assert.equal(result.canonical,canonical,en);assert.equal(result.text,ja,en);assert.equal(result.back,back,en);assert.ok(!ras.phrases.some(x=>x[0]===en));}
for(const en of ["I am going to the shop.","I am going to work."]){const result=sharedTranslation(ras,en);assert.equal(result.canonical,en,en);assert.equal(result.text,ras.translateClause(en),en);}
for(const en of ["The machine is worn out.","I gave her a hand-written letter."]){assert.equal(window.linguaPreferredParaphrase(ras,en),null,en);assert.equal(window.linguaParaphrase(ras,en),null,en);}
assert.equal(window.linguaPreferredParaphrase({}, "I have to work."),null);
assert.equal(window.linguaPreferredParaphrase(ras,"Ik nu verk.",true),null);
assert.equal(window.linguaParaphrase(ras,"Ik nu verk.",true),null);
assert.equal(ras.words.length,794);
console.log(rasCases.length+" Rasnovian shared adapter cases passed.");

const coverageCases=[
  [
    "rasnovian",
    "I appreciate your assistance.",
    "I thank you for your help.",
    "Ik nu þuta for helpul þues þank.",
    "I thank you for your help."
  ],
  [
    "rasnovian",
    "I really appreciate your help.",
    "I thank you for your help.",
    "Ik nu þuta for helpul þues þank.",
    "I thank you for your help."
  ],
  [
    "rasnovian",
    "I have sufficient time.",
    "I have enough time.",
    "Ik nu nog tid hav.",
    "I have enough time."
  ],
  [
    "rasnovian",
    "I have insufficient money.",
    "I do not have enough money.",
    "Ik nu nog gelt ne hav.",
    "I do not have enough money."
  ],
  [
    "rasnovian",
    "I have no clue.",
    "I do not know.",
    "Ik nu ne wit.",
    "I do not know."
  ],
  [
    "rasnovian",
    "I am in a hurry.",
    "I am hurrying.",
    "Ik dur snell.",
    "I am hurrying."
  ],
  [
    "rasnovian",
    "I need a bit of help.",
    "I need some help.",
    "Ik nu sum help þurf.",
    "I need some help."
  ],
  [
    "rasnovian",
    "I have a couple of books.",
    "I have two books.",
    "Ik nu tva boken hav.",
    "I have two books."
  ],
  [
    "rasnovian",
    "I enjoy chatting with my friends.",
    "I enjoy talking with my friends.",
    "Ik nu miþ priatenle ikes sprekan lik.",
    "I like speaking with my friends."
  ],
  [
    "rasnovian",
    "Please let me know.",
    "Please tell me.",
    "Tæl bidde im.",
    "Tell please to me."
  ],
  [
    "rasnovian",
    "I am on my way home.",
    "I am going home.",
    "Ik dur heimtil gan.",
    "I am going home."
  ],
  [
    "rasnovian",
    "I am taking a break.",
    "I am resting.",
    "Ik dur ræst.",
    "I am resting."
  ],
  [
    "rasnovian",
    "I bought a pair of shoes.",
    "I bought two shoes.",
    "Ik er tva skoen byg.",
    "I bought two shoes."
  ],
  [
    "rasnovian",
    "I am grateful for your help.",
    "I thank you for your help.",
    "Ik nu þuta for helpul þues þank.",
    "I thank you for your help."
  ],
  [
    "javenoerl",
    "I appreciate your assistance.",
    "I thank you for your help.",
    "Je mercié vu für von hilf.",
    "I thank you for your help."
  ],
  [
    "javenoerl",
    "I am starving.",
    "I am very hungry.",
    "Je es très hungrig.",
    "I am very hungry."
  ],
  [
    "javenoerl",
    "I really appreciate your help.",
    "I thank you for your help.",
    "Je mercié vu für von hilf.",
    "I thank you for your help."
  ],
  [
    "javenoerl",
    "I was unable to sleep.",
    "I could not sleep.",
    "Je ne kön dorm.",
    "I could not sleep."
  ],
  [
    "javenoerl",
    "I am pleased with the result.",
    "I am happy with the result.",
    "Je es heureux mit le résult.",
    "I am happy with the result."
  ],
  [
    "javenoerl",
    "I have sufficient time.",
    "I have enough time.",
    "Je hav genugé zeit.",
    "I have enough time."
  ],
  [
    "javenoerl",
    "I have insufficient money.",
    "I do not have enough money.",
    "Je ne hav genugé geld.",
    "I do not have enough money."
  ],
  [
    "javenoerl",
    "I have no clue.",
    "I do not know.",
    "Je ne wiss.",
    "I do not know."
  ],
  [
    "javenoerl",
    "I will get some rest.",
    "I will rest.",
    "Je va ruhé.",
    "I will rest."
  ],
  [
    "javenoerl",
    "I am in a hurry.",
    "I am hurrying.",
    "Je dur eilé.",
    "I am hurrying."
  ],
  [
    "javenoerl",
    "I feel terrible.",
    "I feel very bad.",
    "Je fühl très mal.",
    "I feel very bad."
  ],
  [
    "javenoerl",
    "I need a bit of help.",
    "I need some help.",
    "Je brauché etwas hilf.",
    "I need some help."
  ],
  [
    "javenoerl",
    "I have a couple of books.",
    "I have two books.",
    "Je hav deux buchs.",
    "I have two books."
  ],
  [
    "javenoerl",
    "I am extremely busy.",
    "I am very busy.",
    "Je es très occupé.",
    "I am very busy."
  ],
  [
    "javenoerl",
    "I enjoy chatting with my friends.",
    "I enjoy talking with my friends.",
    "Je geniess en parlé mit mon amiens.",
    "I enjoy speaking with my friends."
  ],
  [
    "javenoerl",
    "Please let me know.",
    "Please tell me.",
    "Pli erzéhl me.",
    "Please tell me."
  ],
  [
    "javenoerl",
    "I will be there shortly.",
    "I will be there soon.",
    "Je va es dort bald.",
    "I will be there soon."
  ],
  [
    "javenoerl",
    "I bought a pair of shoes.",
    "I bought two shoes.",
    "Je pré kaufé deux shuhs.",
    "I bought two shoes."
  ],
  [
    "javenoerl",
    "I am grateful for your help.",
    "I thank you for your help.",
    "Je mercié vu für von hilf.",
    "I thank you for your help."
  ]
];
for(const [id,en,canonical,ja,back] of coverageCases){const pack=window.languagePacks.find(x=>x.id===id);const a=sharedTranslation(pack,en);assert.ok(a,en);assert.equal(a.canonical,canonical,en);assert.equal(a.text,ja,en);assert.equal(a.back,back,en);assert.ok(!pack.phrases.some(x=>x[0]===en));}
assert.equal(ras.words.length,794);assert.equal(p.words.length,1101);
