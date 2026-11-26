// Bounded, auditable English paraphrase adapter. No learned model, API, or mutable vocabulary.
(function(root){
"use strict";
const escape=s=>s.replace(/[.*+?^$(){}|[\]\\]/g,"\\$&");
const subject="(I|you|he|she|it|we|they)";
const third=s=>/^(he|she|it)$/i.test(s);
const conj=(s,base,sg)=>third(s)?sg:base;
const rules=[
 ["obligation",new RegExp("\\b"+subject+" (?:have|has) (?:got )?to\\b","gi"),"$1 must",1],
 ["obligation",new RegExp("\\b"+subject+" (?:do|does) not (?:have|need) to\\b","gi"),null,1], // no rewrite: not obligatory is not prohibited
 ["intention",new RegExp("\\b"+subject+" (?:am|is|are) going to (?=[a-z]+\\b)","gi"),"$1 will ",2],
 ["necessity",new RegExp("\\b"+subject+" (?:am|is|are) in need of\\b","gi"),(_,s)=>s+" "+conj(s,"need","needs"),1],
 ["preference",new RegExp("\\b"+subject+" (?:am|is|are) fond of\\b","gi"),(_,s)=>s+" "+conj(s,"like","likes"),1],
 ["ability",new RegExp("\\b"+subject+" (?:am|is|are) able to\\b","gi"),"$1 can",2],
 ["ability",/\bwill be able to\b/gi,"will be able to",1],
 ["understanding",/\bfigure(?:d)? out\b/gi,m=>/figured/i.test(m)?"understood":"understand",2],
 ["understanding",/\bfigures out\b/gi,"understands",2],
 ["understanding",/\bfiguring out\b/gi,"understanding",2],
 ["assistance",/\b(?:give|gives|gave|giving) (me|you|him|her|us|them) a hand\b/gi,(m,o)=>({give:"help",gives:"helps",gave:"helped",giving:"helping"}[m.split(" ")[0].toLowerCase()])+" "+o,1],
 ["completion",/\b(?:get|gets|got|getting) (the|my|your|his|her|our|their) ([a-z]+(?: [a-z]+){0,2}) done\b/gi,(m,a,b)=>({get:"finish",gets:"finishes",got:"finished",getting:"finishing"}[m.split(" ")[0].toLowerCase()])+" "+a+" "+b,2],
 ["communication",/\bget in touch with\b/gi,"contact",2],
 ["return",/\b(?:come|comes|came|coming) back\b/gi,m=>({come:"return",comes:"returns",came:"returned",coming:"returning"}[m.split(" ")[0].toLowerCase()]),1],
 ["departure",/\b(?:head|heads|headed|heading) home\b/gi,m=>({head:"go",heads:"goes",headed:"went",heading:"going"}[m.split(" ")[0].toLowerCase()])+" home",1],
 ["delay",/\bput(?:s|ting)? off\b/gi,null,1], // deliberately unsupported without a time/sense constraint
 ["work",/\b(?:get|gets|got|getting) paid\b/gi,m=>({get:"receive",gets:"receives",got:"received",getting:"receiving"}[m.split(" ")[0].toLowerCase()])+" pay",1],
 ["fatigue",new RegExp("\\b"+subject+" (am|is|are|was|were) (?:worn out|exhausted)\\b","gi"),"$1 $2 very tired",1],
 ["quantity",/\b(?:a bunch of|a whole lot of|a ton of|loads of)\b/gi,"a lot of",2],
 ["time",/\b(?:at the moment|right this minute)\b/gi,"now",1],
 ["time",/\b(?:in a little while|before long)\b/gi,"soon",1],
 ["time",/\b(?:once more|one more time)\b/gi,"again",1],
 ["time",/\b(?:on the following day)\b/gi,"the next day",1],
 ["clarity",/\bnot (?:particularly|especially) \b/gi,null,1],
 ["degree",/\b(?:a great deal|a whole lot)\b(?=\s+(?:more|less|fewer)\b)/gi,"far",1],
 ["negation",/\b(?:ain't)\b/gi,null,1]
].filter(r=>r[2]!==null);

const coverageRules=[
 ["negative ability",new RegExp("\\b"+subject+" (?:am|is|are) unable to\\b","gi"),"$1 cannot",1],
 ["negative past ability",new RegExp("\\b"+subject+" (?:was|were) unable to\\b","gi"),"$1 could not",1],
 ["intention",new RegExp("\\b"+subject+" intend(s?) to\\b","gi"),(_,s)=>s+" "+conj(s,"plan","plans")+" to",1],
 ["intention",new RegExp("\\b"+subject+" intend(s?) to\\b","gi"),(_,s)=>s+" "+conj(s,"want","wants")+" to",3],
 ["gratitude",new RegExp("\\b"+subject+" (?:really )?appreciate(s?) (your|his|her|their) (?:help|assistance|aid)\\b","gi"),(_,s,end,owner)=>s+" "+conj(s,"thank","thanks")+" "+({your:"you",his:"him",her:"her",their:"them"}[owner.toLowerCase()])+" for "+owner+" help",2],
 ["gratitude",new RegExp("\\b"+subject+" (?:am|is|are) grateful for (your|his|her|their) help\\b","gi"),(_,s,owner)=>s+" "+conj(s,"thank","thanks")+" "+({your:"you",his:"him",her:"her",their:"them"}[owner.toLowerCase()])+" for "+owner+" help",2],
 ["quantity",new RegExp("\\b"+subject+" (have|has) insufficient\\b","gi"),(_,s)=>s+" "+conj(s,"do","does")+" not have enough",1],
 ["unknown",new RegExp("\\b"+subject+" (?:have|has) no (?:clue|idea)(?=\\s*(?:[.!?]|$))","gi"),(_,s)=>s+" "+conj(s,"do","does")+" not know",1],
 ["certainty",new RegExp("\\b"+subject+" (?:am|is|are) not sure(?=\\s*(?:[.!?]|$))","gi"),(_,s)=>s+" "+conj(s,"do","does")+" not know for sure",2],
 ["search",/\b(?:look|looks|looked|looking) for\b/gi,m=>({look:"search",looks:"searches",looked:"searched",looking:"searching"}[m.split(" ")[0].toLowerCase()])+" for",1],
 ["rest",/\b(?:get|gets|got|getting) some rest\b/gi,m=>({get:"rest",gets:"rests",got:"rested",getting:"resting"}[m.split(" ")[0].toLowerCase()]),1],
 ["rest",/\b(?:take|takes|took|taking) a break\b/gi,m=>({take:"rest",takes:"rests",took:"rested",taking:"resting"}[m.split(" ")[0].toLowerCase()]),2],
 ["progress",/\b(?:manage|manages|managed|managing) to\b/gi,m=>({manage:"succeed in",manages:"succeeds in",managed:"succeeded in",managing:"succeeding in"}[m.split(" ")[0].toLowerCase()]),3],
 ["travel",new RegExp("\\b"+subject+" (am|is|are|was|were) on (?:my|your|his|her|our|their) way home\\b","gi"),"$1 $2 going home",1],
 ["hurry",new RegExp("\\b"+subject+" (am|is|are|was|were) in a hurry\\b","gi"),"$1 $2 hurrying",1],
 ["health",new RegExp("\\b"+subject+" (am|is|are|was|were) not feeling well\\b","gi"),(_,s,aux)=>s+" "+(/was|were/i.test(aux)?"felt":"feel")+" unwell",2],
 ["degree",new RegExp("\\b"+subject+" (am|is|are|was|were) starving(?=\\s*(?:[.!?]|$))","gi"),"$1 $2 very hungry",2],
 ["possession",new RegExp("\\b"+subject+" (?:have|has) got (?=(?:a|an|the|some|my|your|his|her|our|their)\\b)","gi"),(_,s)=>s+" "+conj(s,"have","has")+" ",1],
 ["politeness",/\bplease let me know(?=\s*(?:[.!?]|$))/gi,"Please tell me",1],
 ["meal",/\b(?:make|makes|made|making) (breakfast|lunch|dinner)\b/gi,(m,meal)=>({make:"prepare",makes:"prepares",made:"prepared",making:"preparing"}[m.split(" ")[0].toLowerCase()])+" "+meal,1],
 ["difficulty",new RegExp("\\b"+subject+" (have|has) difficulty understanding\\b","gi"),(_,s)=>"It is difficult for "+({i:"me",you:"you",he:"him",she:"her",it:"it",we:"us",they:"them"}[s.toLowerCase()])+" to understand",3],
];

const normalize=s=>s.replace(/’/g,"'").replace(/\b(i|you|he|she|we|they|it)'ve\b/gi,"$1 have").replace(/\b(he|she|it)'s (?=(?:got|been)\b)/gi,"$1 has ").replace(/\b(gonna|gotta)\b/gi,m=>m.toLowerCase()==="gonna"?"going to":"got to");

// Selected idioms and obligation constructions can be literal-parser false positives.
// Rewriting them before the direct parse avoids "have to work" becoming possession.
function preferred(pack,input){
 if(input.length>300)return {text:input,steps:[]};
 let text=normalize(input);text=pack.normalizeEnglish?pack.normalizeEnglish(text):text;
 const steps=[];
 const change=(label,re,value)=>{const n=text.replace(re,value);if(n!==text){text=n;steps.push(label);}};
 change("negative obligation",new RegExp("\\b"+subject+" (do|does) not have to\\b","gi"),"$1 $2 not need to");
 change("past obligation",new RegExp("\\b"+subject+" had to\\b","gi"),"$1 needed to");
 change("obligation",new RegExp("\\b"+subject+" (?:have|has) (?:got )?to\\b","gi"),"$1 must");
 change("assistance",/\b(?:give|gives|gave|giving) (me|you|him|her|us|them) a hand(?=\s*(?:[.!?]|$))/gi,(m,o)=>({give:"help",gives:"helps",gave:"helped",giving:"helping"}[m.split(" ")[0].toLowerCase()])+" "+o);
 change("time",/\bat the moment\b/gi,"now");
 return {text,steps};
}
function prefer(pack,input,reverse=false){
 if(reverse||typeof pack.translateClause!=="function")return null;
 const p=preferred(pack,input);if(!p.steps.length)return null;
 const out=pack.translateClause(p.text,false),back=out&&pack.translateClause(out,true);
 if(out&&back&&!/\[[^\]]+\]/.test(out+back))return {text:out,canonical:p.text,back,steps:p.steps};
 return null;
}

function adapt(pack,input,reverse=false){
 if(reverse||typeof pack.translateClause!=="function"||input.length>300||input.split(/\s+/).length>40)return null;
 // All direct parses are preferred. Candidate rewrites are local, bounded and never persisted.
 const source=pack.normalizeEnglish?pack.normalizeEnglish(input):input;
 const pre=preferred(pack,input);const first=pre.steps.length?pre.text:normalize(input);
 const queue=[{text:first,cost:0,steps:pre.steps}],seen=new Set([first.toLowerCase()]);let attempts=0;
 if(first!==input&&first!==source){const r=pack.translateClause(first,false);if(r&&pack.translateClause(r,true))return {text:r,canonical:first,back:pack.translateClause(r,true),steps:pre.steps.length?pre.steps:["English contraction"]};}
 const safe=s=>!/\[[^\]]+\]/.test(s);
 const transformations=[...rules,...coverageRules];
 const families=[["assistance",["assistance","aid"],"help"],["quantity",["sufficient"],"enough"],["quantity",["numerous"],"many"],["quantity",["a bit of","a little bit of"],"some"],["quantity",["a couple of"],"two"],["quantity",["a pair of"],"two"],["time",["currently","at present","right now"],"now"],["time",["shortly","in a short while"],"soon"],["time",["immediately","straight away","right away"],"now"],["emotion",["delighted","thrilled"],"very happy"],["emotion",["pleased","glad"],"happy"],["emotion",["concerned","anxious"],"worried"],["emotion",["terrible","awful"],"very bad"],["degree",["extremely","exceptionally","incredibly"],"very"],["degree",["rather"],"quite"],["language",["clarify"],"explain"],["work",["sort out","resolve"],"solve"],["communication",["notify","inform"],"tell"],["communication",["notify me","inform me","let me know"],"tell me"],["transport",["journey"],"trip"],["work",["undertake"],"do"],["work",["obtain"],"get"],["work",["commence"],"start"],["work",["utilise","utilize"],"use"],["work",["accomplish","attain"],"achieve"],["work",["mend"],"repair"],["work",["fix"],"repair"],["action",["depart"],"leave"],["action",["converse","chat"],"talk"],["action",["conversing","chatting"],"talking"],["action",["reply"],"answer"],["action",["replied"],"answered"],["action",["assist"],"help"],["action",["assisted"],"helped"],["action",["assisting"],"helping"],["action",["require"],"need"],["action",["requires"],"needs"],["action",["required"],"needed"],["action",["intended"],"planned"],["action",["recall"],"remember"],["action",["recalls"],"remembers"],["action",["recalled"],"remembered"]];
 for(const [label,alternatives,target] of families)for(const a of alternatives)transformations.push([label,new RegExp("\\b"+escape(a)+"\\b","gi"),target,2]);
 // Explicitly selected lexical paraphrases, constrained to particular semantic phrases.
 const lex=[
 ["have a look at","look at"],["take a look at","look at"],["take a seat","sit"],["make an effort","try"],["make a decision","decide"],["make a mistake","make an error"],["purchase","buy"],["purchased","bought"],["utilise","use"],["utilize","use"],["commence","start"],["commenced","started"],["conclude","finish"],["concluded","finished"],["reside","live"],["resides","lives"],["resided","lived"],["residing","living"],["in the vicinity of","near"],["prior to","before"],["subsequent to","after"],["in order to","to"],["on account of","because of"],["as a consequence of","because of"]
 ];
 for(const [a,b] of lex)transformations.push(["expression",new RegExp("\\b"+escape(a)+"\\b","gi"),b,2]);
 while(queue.length&&attempts<30){
 queue.sort((a,b)=>a.cost-b.cost||a.steps.length-b.steps.length);const item=queue.shift();
 if(item.steps.length){attempts++;const out=pack.translateClause(item.text,false);if(out&&safe(out)){const back=pack.translateClause(out,true);if(back&&safe(back))return {text:out,canonical:item.text,back,steps:item.steps};}}
 if(item.steps.length>=3)continue;
 for(const [label,re,replacement,cost] of transformations){
  re.lastIndex=0;const next=item.text.replace(re,replacement);if(next===item.text||seen.has(next.toLowerCase())||seen.size>=90)continue;
  // Intention rule may not convert literal travel (going to a place).
  if(label==="intention"){const m=next.match(/\bwill ([a-z]+)\b/i);if(!m||!pack.lookupEnglish?.(m[1]).some(w=>w[2]==="verb"))continue;}
  seen.add(next.toLowerCase());queue.push({text:next,cost:item.cost+cost,steps:[...item.steps,label]});
 }
 }
 return null;
}
const LEXICAL_FAMILIES=[["noun",["assistance","aid"],"help"],["noun",["occupation","profession"],"job"],["noun",["dwelling"],"house"],["noun",["automobile"],"car"],["noun",["photograph","snapshot"],"picture"],["noun",["physician"],"doctor"],["noun",["pupil"],"student"],["noun",["response","reply"],"answer"],["noun",["difficulty"],"problem"],["noun",["wages"],"salary"],["noun",["objective","target"],"goal"],["noun",["accomplishment"],"achievement"],["verb",["assist"],"help"],["verb",["depart"],"leave"],["verb",["mend"],"repair"],["verb",["purchase"],"buy"],["verb",["commence"],"start"],["verb",["reside"],"live"],["verb",["utilise","utilize"],"use"],["verb",["converse","chat"],"talk"],["verb",["recall"],"remember"],["verb",["require"],"need"],["adjective",["delighted","glad","pleased"],"happy"],["adjective",["concerned"],"worried"],["adjective",["exhausted","weary"],"tired"],["adjective",["sufficient"],"enough"],["adverb",["currently","at present"],"now"],["adverb",["shortly"],"soon"],["adverb",["immediately","straight away"],"now"],["quantity",["numerous"],"many"]];

function lexicalAlternatives(pack,input){
 if(typeof pack.lookupEnglish!=="function"||input.length>90)return [];
 const direct=pack.lookupEnglish(input);if(direct.length)return direct;
 const k=input.toLowerCase().trim().replace(/\s+/g," ");
 const alternatives=LEXICAL_FAMILIES.filter(([,ss])=>ss.includes(k));
 const entries=alternatives.flatMap(([pos,,base])=>pack.lookupEnglish(base).filter(w=>w[2]===pos||(pos==="quantity"&&["quantifier","determiner"].includes(w[2]))));
 return [...new Map(entries.map(w=>[w[1]+"|"+w[2],w])).values()];
}

root.linguaLookupEnglish=lexicalAlternatives;
root.linguaParaphrase=adapt;
root.linguaPreferredParaphrase=prefer;
})(typeof window!=="undefined"?window:globalThis);
