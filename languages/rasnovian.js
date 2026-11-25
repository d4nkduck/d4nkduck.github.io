// Each language pack registers its own vocabulary, documentation and grammar adapter.
window.languagePacks = window.languagePacks || [];
window.languagePacks.push({
 id:"rasnovian", name:"Rasnovian", native:"Rașnovæsk", version:"0.2",
 origins:[["Anglo-Saxon",60],["Romanian",30],["Russian",10]],
 alphabet:"A Ă Æ B D E F G H I J K L M N O P R S Ș T Ț Þ U V Y Z".split(" "),
 sounds:[["Ă","unstressed uh"],["Æ","a in cat"],["Ș","sh"],["Ț","ts"],["Þ","th in think"],["Y","Russian ы"],["J","zh in vision"],["R","rolled r"],["V","v"]],
 // [English lemma, Rasnovian lemma, part of speech]
 words:[
 ["idiot","dol","noun"],
 ["bakery","bakhus","noun"],
 ["order","ordr","noun"],
 ["parliament","þing","noun"],
 ["mess up","forspillan","verb"],
 ["report","meldan","verb"],
 ["curse","verdom","expression"],
 ["so","sva","adverb"],
 ["just as well","jafn","adverb"],
 ["those","þa","demonstrative"],
 ["at","bi","preposition"],
 ["to","til","preposition"],
 ["our","vies","possessive"],
 ["but","ak","conjunction"],
 ["man!","mann!","expression"],
 ["hello","hæl","expression"],["goodbye","farvæl","expression"],["yes","ja","expression"],["no","nei","expression"],["thanks","þank","expression"],
 ["person","mann","noun"],["friend","priat","noun"],["family","kină","noun"],["home","heim","noun"],["country","landă","noun"],["kingdom","kyningdom","noun"],["city","grod","noun"],["road","drum","noun"],["world","lume","noun"],["fire","fyr","noun"],["water","væter","noun"],["snow","snæg","noun"],["forest","væld","noun"],["mountain","berg","noun"],["sun","sunnă","noun"],["moon","monă","noun"],["sky","hebăn","noun"],["peace","friþ","noun"],["freedom","freidom","noun"],["life","levă","noun"],["love","luvă","noun"],["hope","nadă","noun"],["house","hus","noun"],["stone","stæn","noun"],["night","nișt","noun"],["day","dæi","noun"],["child","kild","noun"],["king","kyning","noun"],["earth","erþă","noun"],["father","fæder","noun"],
 ["good","god","adjective"],["bad","yvel","adjective"],["beautiful","frumos","adjective"],["cold","kald","adjective"],["warm","varm","adjective"],["old","ald","adjective"],["new","nev","adjective"],["green","gren","adjective"],
 ["see","sean","verb"],["travel","faran","verb"],["eat","etan","verb"],["drink","drinkan","verb"],["love","luvan","verb"],["speak","sprekan","verb"],["live","levan","verb"],["know","witan","verb"],["be","esan","verb"],
 ["I","ik","pronoun"],["you","þu","pronoun"],["he","han","pronoun"],["she","ea","pronoun"],["it","hit","pronoun"],["we","vi","pronoun"],["you (plural)","gi","pronoun"],["they","dei","pronoun"],
 ["and","ak","conjunction"],["well","væl","adverb"],["tomorrow","amorgăn","adverb"],
 ["darkness","niștvald","noun"],["sunlight","sunnăfyr","noun"],["humanity","erþăkin","noun"],["homesickness","heimdor","noun"],["fortress","stænhus","noun"],["sanctuary","friþland","noun"]
 ],
 phrases:[
 ["Man, fuck those idiots over at the bakery. They messed up our order, it is so bad we might as well report this to the parliament HAH!","Mann, þa dolenta bi bakhusul verdom! Dei er ordrulta vies forspill. Hit nu sva yvel es; vi hed jafn hitta til þingul meld. HAH!"],
 ["Man, fuck those idiots over at the bakery.","Mann, þa dolenta bi bakhusul verdom!"],
 ["They messed up our order.","Dei er ordrulta vies forspill."],
 ["It is so bad; we might as well report this to the parliament.","Hit nu sva yvel es; vi hed jafn hitta til þingul meld."],
 ["Fuck those idiots!","Þa dolenta verdom!"],
 ["They messed up our order, it is so bad we might as well report this to the parliament HAH!","Dei er ordrulta vies forspill. Hit nu sva yvel es; vi hed jafn hitta til þingul meld. HAH!"],
 ["Hello!","Hæl!"],["Goodbye!","Farvæl!"],["How are you?","Hu nu þu es?"],["I am well, thanks.","Ik nu væl es, þank."],["I see the house.","Ik nu husulta se."],["I do not see the house.","Ik nu husulta ne se."],["Do you see the house?","Þu nu husulta se li?"],["I ate.","Ik er et."],["I will eat.","Ik va et."],["I am eating.","Ik dur et."],["I would eat.","Ik hed et."],["The night is cold.","Niștul nu kald es."],["The cold house","Husul kald"],["Yes, my friend.","Ja, priat ikes."],["Shall we go home?","Vi va til heim far li?"]
 ],
 grammar:[
 ["Colloquial speech","Mann! is an interjection. Verdom is a strong curse used as a verb-final imperative without a tense particle. Þa marks plural demonstratives, replacing the definite article: þa dolenta = those idiots (object). Possessives can follow the noun: ordrulta vies = our order (object). Jafn with hed conveys 'might as well'; direct-object hit may take -ta: hitta. Bi = at, til = to."],
 ["Sentence order","The default is subject–object–verb. Put the tense particle after the first major element. Objects can move to the front for emphasis."],
 ["Tense and aspect","nu = present; er = past; va = future; dur = ongoing; hed = conditional. Remove -an from an infinitive to obtain the verb stem."],
 ["Nouns","Add -en for plural, -ul for definite singular, -le after a plural for definite plural, -ta for direct objects, and -es for possession. Example: hus → husul → husulta."],
 ["Adjectives","Adjectives normally follow the noun: husul kald = the cold house."],
 ["Negation and questions","Place ne immediately before the verb. A yes/no question ends with li."],
 ["Sound history","Illustrative fictional sound shifts: Old English wæter → væter, stān → stæn, niht → nișt, hūs → hus. Stress usually falls on the penultimate syllable."],
 ["Dialect concepts","Aldrașnovæsk (ancient), Nordrașnovæsk (northern), Sudrașnovæsk (southern), Hohrașnovæsk (formal), Folkrașnovæsk (colloquial). These are not yet separately implemented."]
 ],
 // Grammar adapter: deliberately limited to supported regular clauses. Return null for unsupported syntax.
 translateClause(input, reverse){
 const norm=s=>s.toLowerCase().normalize("NFC").trim();
 const words=this.words;
 const find=(s,pos,side=0)=>words.find(w=>norm(w[side])===s&&w[2]===pos);
 const punc=input.match(/[.!?]$/)?.[0]||"";
 const t=norm(input).replace(/[.!?]$/,"").split(/\s+/);
 const cap=s=>s.charAt(0).toUpperCase()+s.slice(1);
 const forms={see:["sees","saw","seeing"],eat:["eats","ate","eating"],drink:["drinks","drank","drinking"],love:["loves","loved","loving"],travel:["travels","traveled","traveling"],speak:["speaks","spoke","speaking"],live:["lives","lived","living"],know:["knows","knew","knowing"]};
 const particles={nu:0,er:1,va:2,dur:3,hed:4};
 const nounForms=(noun)=>[[noun,false,false],[noun+"ul",false,true],[noun+"en",true,false],[noun+"enle",true,true]];
 const plurals={person:"people",child:"children",family:"families",country:"countries",city:"cities",life:"lives"};
 const plural=s=>plurals[s]||(s.endsWith("s")?s+"es":s+"s");
 if(!reverse){
 let a=t.slice(),question=false,neg=false,tense="nu";
 if(["do","does","did","will","would"].includes(a[0])){const aux=a.shift();question=true;tense={did:"er",will:"va",would:"hed"}[aux]||"nu";}
 const subject=find(a.shift(),"pronoun"); if(!subject)return null;
 if(["will","would","do","does","did","am","is","are","was","were"].includes(a[0])){
 const aux=a.shift(); if(aux==="will")tense="va";else if(aux==="would")tense="hed";else if(aux==="did")tense="er";else if(["am","is","are"].includes(aux))tense="dur";else if(["was","were"].includes(aux))return null;
 }
 if(a[0]==="not"){a.shift();neg=true;}
 const v=a.shift();let verb=Object.keys(forms).find(k=>k===v||forms[k].includes(v));
 if(!verb)return null;
 if(forms[verb][1]===v)tense="er";if(forms[verb][2]===v)tense="dur";
 const stem=find(verb,"verb")[1].slice(0,-2);
 let obj="";
 if(a.length){
 let definite=a[0]==="the";let indefinite=["a","an"].includes(a[0]);if(definite||indefinite)a.shift();
 let adjective="";if(a.length===2){const adj=find(a.shift(),"adjective");if(!adj)return null;adjective=" "+adj[1];}
 if(a.length!==1)return null;
 const noun=words.find(w=>w[2]==="noun"&&(w[0]===a[0]||plural(w[0])===a[0]));if(!noun)return null;
 const pl=noun[0]!==a[0];if(pl&&indefinite)return null;
 obj=noun[1]+(pl?"en":"")+(definite?(pl?"le":"ul"):"")+"ta"+adjective;
 }
 return cap([subject[1],tense,obj,neg?"ne":"",stem,question?"li":""].filter(Boolean).join(" "))+(question?"?":punc);
 }else{
 let a=t.slice(),question=a[a.length-1]==="li";if(question)a.pop();
 const subject=find(a.shift(),"pronoun",1);const tense=a.shift();if(!subject||!(tense in particles))return null;
 const stem=a.pop();const verb=words.find(w=>w[2]==="verb"&&w[1].slice(0,-2)===stem);if(!verb||!forms[verb[0]])return null;
 let neg=a[a.length-1]==="ne";if(neg)a.pop();
 let obj="";
 if(a.length){
 const marked=a.shift();let match;
 for(const n of words.filter(w=>w[2]==="noun"))for(const [f,pl,def] of nounForms(n[1]))if(f+"ta"===marked)match=[n,pl,def];
 if(!match)return null;
 let adj="";if(a.length){const ad=find(a.shift(),"adjective",1);if(!ad||a.length)return null;adj=ad[0]+" ";}
 const [n,pl,def]=match;const phrase=adj+(pl?plural(n[0]):n[0]);
 obj=(def?"the ":pl||["water","snow","fire","peace","freedom","life","love","hope"].includes(n[0])?"":/^[aeiou]/i.test(phrase)?"an ":"a ")+phrase;
 }
 const s=subject[0]==="you (plural)"?"you":subject[0];const third=["he","she","it"].includes(s);
 const base=verb[0],f=forms[base],be=s==="I"?"am":third?"is":"are";
 let aux="",vv=base;
 if(tense==="va")aux="will";else if(tense==="hed")aux="would";else if(tense==="dur"){aux=be;vv=f[2];}
 else if(question||neg)aux=tense==="er"?"did":third?"does":"do";else vv=tense==="er"?f[1]:third?f[0]:base;
 return cap((question?[aux,s,neg?"not":"",vv,obj]:[s,aux,neg?"not":"",vv,obj]).filter(Boolean).join(" "))+(question?"?":punc);
 }
 }
});
