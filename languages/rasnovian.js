// Each language pack registers its own vocabulary, documentation and grammar adapter.
window.languagePacks = window.languagePacks || [];
window.languagePacks.push({
 id:"rasnovian", name:"Rasnovian", native:"Rașnovæsk", version:"0.7",
 origins:[["Anglo-Saxon",60],["Romanian",30],["Russian",10]],
 alphabet:"A Ă Æ B D E F G H I J K L M N O P R S Ș T Ț Þ U V Y Z".split(" "),
 sounds:[["Ă","unstressed uh"],["Æ","a in cat"],["Ș","sh"],["Ț","ts"],["Þ","th in think"],["Y","Russian ы"],["J","zh in vision"],["R","rolled r"],["V","v"]],
 // [English lemma, Rasnovian lemma, part of speech]
 history:{
 "stages": [
  [
   "Forrașnovæsk",
   "Ancestral settlement speech",
   "Years 0–250 (relative chronology). Germanic-speaking settlers establish communities along a river corridor. The inherited core supplies basic verbs, kinship and natural vocabulary."
  ],
  [
   "Aldrașnovæsk",
   "Old Rasnovian",
   "Years 250–550. Bilingual Romance communities introduce postposed definite articles, vowel ă and household/civic loans. Existing Germanic compounds remain productive."
  ],
  [
   "Midrașnovæsk",
   "Middle Rasnovian",
   "Years 550–900. Eastern Slavic trade and bilingual towns encourage palatalisation, particles and loanwords; older sound changes spread through inherited vocabulary."
  ],
  [
   "Nevrașnovæsk",
   "Modern Rasnovian",
   "Years 900 onward. Monophthongisation and weak-vowel reduction stabilise; a written standard preserves some conservative forms. Later loans and regional varieties remain distinct."
  ]
 ],
 "laws": [
  {
   "id": "S1",
   "stage": "Old → Middle",
   "name": "Front-vowel palatalisation",
   "description": "Inherited root-initial k before i or y becomes ț; s before i or y becomes ș; sk before æ, e, i or y becomes ș. Later loans can retain original clusters.",
   "examples": [
    "kild → țild",
    "singan → șingan",
    "skær → șær"
   ]
  },
  {
   "id": "S2",
   "stage": "Old → Middle",
   "name": "Initial hl-cluster simplification",
   "description": "Inherited initial hl simplifies to l. This affects lexical roots, not every written h.",
   "examples": [
    "hlud → lud",
    "hlystan → lystan",
    "hlæhan → læhan"
   ]
  },
  {
   "id": "S3",
   "stage": "Middle",
   "name": "Intervocalic voicing",
   "description": "Single s between vowels becomes z in inherited lexical roots; the high-frequency copula esan retains conservative s.",
   "examples": [
    "isern → izern",
    "losan → lozan"
   ]
  },
  {
   "id": "S4",
   "stage": "Middle → Modern",
   "name": "Monophthongisation",
   "description": "Inherited eo becomes e in the stressed root. The spelling represents a merged mid-front vowel, not a deletion in arbitrary modern words.",
   "examples": [
    "heort → hert",
    "deork → derk",
    "feor → fer"
   ]
  },
  {
   "id": "S5",
   "stage": "Middle → Modern",
   "name": "Unstressed vowel reduction",
   "description": "Unstressed e in the final -er syllable of inherited polysyllabic stems becomes ă. Monosyllables such as ber stay unchanged; later learned agent formations may retain -er.",
   "examples": [
    "broþer → broþăr",
    "fæder → fædăr",
    "væter → vætăr"
   ]
  }
 ],
 "changes": [
  {
   "english": "sharp",
   "pos": "adjective",
   "earlier": "skær",
   "modern": "șær",
   "rules": [
    "S1"
   ],
   "components": [
    "skær"
   ]
  },
  {
   "english": "deer",
   "pos": "noun",
   "earlier": "heort",
   "modern": "hert",
   "rules": [
    "S4"
   ],
   "components": [
    "heort"
   ]
  },
  {
   "english": "iron",
   "pos": "noun",
   "earlier": "isern",
   "modern": "izern",
   "rules": [
    "S3"
   ],
   "components": [
    "isern"
   ]
  },
  {
   "english": "mother",
   "pos": "noun",
   "earlier": "moder",
   "modern": "modăr",
   "rules": [
    "S5"
   ],
   "components": [
    "moder"
   ]
  },
  {
   "english": "brother",
   "pos": "noun",
   "earlier": "broþer",
   "modern": "broþăr",
   "rules": [
    "S5"
   ],
   "components": [
    "broþer"
   ]
  },
  {
   "english": "sister",
   "pos": "noun",
   "earlier": "syster",
   "modern": "șystăr",
   "rules": [
    "S1",
    "S5"
   ],
   "components": [
    "syster"
   ]
  },
  {
   "english": "daughter",
   "pos": "noun",
   "earlier": "dohter",
   "modern": "dohtăr",
   "rules": [
    "S5"
   ],
   "components": [
    "dohter"
   ]
  },
  {
   "english": "grandmother",
   "pos": "noun",
   "earlier": "aldmoder",
   "modern": "aldmodăr",
   "rules": [
    "S5"
   ],
   "components": [
    "ald",
    "moder"
   ]
  },
  {
   "english": "grandfather",
   "pos": "noun",
   "earlier": "aldfæder",
   "modern": "aldfædăr",
   "rules": [
    "S5"
   ],
   "components": [
    "ald",
    "fæder"
   ]
  },
  {
   "english": "teacher",
   "pos": "noun",
   "earlier": "lærer",
   "modern": "lærăr",
   "rules": [
    "S5"
   ],
   "components": [
    "lærer"
   ]
  },
  {
   "english": "doctor",
   "pos": "noun",
   "earlier": "læker",
   "modern": "lækăr",
   "rules": [
    "S5"
   ],
   "components": [
    "læker"
   ]
  },
  {
   "english": "baker",
   "pos": "noun",
   "earlier": "bakker",
   "modern": "bakkăr",
   "rules": [
    "S5"
   ],
   "components": [
    "bakker"
   ]
  },
  {
   "english": "leader",
   "pos": "noun",
   "earlier": "forer",
   "modern": "forăr",
   "rules": [
    "S5"
   ],
   "components": [
    "forer"
   ]
  },
  {
   "english": "butter",
   "pos": "noun",
   "earlier": "buter",
   "modern": "butăr",
   "rules": [
    "S5"
   ],
   "components": [
    "buter"
   ]
  },
  {
   "english": "bowl",
   "pos": "noun",
   "earlier": "skæl",
   "modern": "șæl",
   "rules": [
    "S1"
   ],
   "components": [
    "skæl"
   ]
  },
  {
   "english": "winter",
   "pos": "noun",
   "earlier": "vinter",
   "modern": "vintăr",
   "rules": [
    "S5"
   ],
   "components": [
    "vinter"
   ]
  },
  {
   "english": "heart",
   "pos": "noun",
   "earlier": "heortă",
   "modern": "hertă",
   "rules": [
    "S4"
   ],
   "components": [
    "heort",
    "ă"
   ]
  },
  {
   "english": "choice",
   "pos": "noun",
   "earlier": "kyr",
   "modern": "țyr",
   "rules": [
    "S1"
   ],
   "components": [
    "kyr"
   ]
  },
  {
   "english": "judge",
   "pos": "noun",
   "earlier": "domer",
   "modern": "domăr",
   "rules": [
    "S5"
   ],
   "components": [
    "domer"
   ]
  },
  {
   "english": "nation",
   "pos": "noun",
   "earlier": "þeod",
   "modern": "þed",
   "rules": [
    "S4"
   ],
   "components": [
    "þeod"
   ]
  },
  {
   "english": "dark",
   "pos": "adjective",
   "earlier": "deork",
   "modern": "derk",
   "rules": [
    "S4"
   ],
   "components": [
    "deork"
   ]
  },
  {
   "english": "loud",
   "pos": "adjective",
   "earlier": "hlud",
   "modern": "lud",
   "rules": [
    "S2"
   ],
   "components": [
    "hlud"
   ]
  },
  {
   "english": "different",
   "pos": "adjective",
   "earlier": "ander",
   "modern": "andăr",
   "rules": [
    "S5"
   ],
   "components": [
    "ander"
   ]
  },
  {
   "english": "four",
   "pos": "number",
   "earlier": "feor",
   "modern": "fer",
   "rules": [
    "S4"
   ],
   "components": [
    "feor"
   ]
  },
  {
   "english": "forty",
   "pos": "number",
   "earlier": "feortig",
   "modern": "fertig",
   "rules": [
    "S4"
   ],
   "components": [
    "feor",
    "tig"
   ]
  },
  {
   "english": "lose",
   "pos": "verb",
   "earlier": "losan",
   "modern": "lozan",
   "rules": [
    "S3"
   ],
   "components": [
    "losan"
   ]
  },
  {
   "english": "listen",
   "pos": "verb",
   "earlier": "hlystan",
   "modern": "lystan",
   "rules": [
    "S2"
   ],
   "components": [
    "hlyst",
    "an"
   ]
  },
  {
   "english": "sit",
   "pos": "verb",
   "earlier": "sittan",
   "modern": "șittan",
   "rules": [
    "S1"
   ],
   "components": [
    "sitt",
    "an"
   ]
  },
  {
   "english": "laugh",
   "pos": "verb",
   "earlier": "hlæhan",
   "modern": "læhan",
   "rules": [
    "S2"
   ],
   "components": [
    "hlæh",
    "an"
   ]
  },
  {
   "english": "sing",
   "pos": "verb",
   "earlier": "singan",
   "modern": "șingan",
   "rules": [
    "S1"
   ],
   "components": [
    "sing",
    "an"
   ]
  },
  {
   "english": "choose",
   "pos": "verb",
   "earlier": "kyran",
   "modern": "țyran",
   "rules": [
    "S1"
   ],
   "components": [
    "kyr",
    "an"
   ]
  },
  {
   "english": "the comfort of watching rain from indoors",
   "pos": "concept",
   "earlier": "væterheim",
   "modern": "vætărheim",
   "rules": [
    "S5"
   ],
   "components": [
    "væter",
    "heim"
   ]
  },
  {
   "english": "the warmth of belonging among friends",
   "pos": "concept",
   "earlier": "kinfyr",
   "modern": "ținfyr",
   "rules": [
    "S1"
   ],
   "components": [
    "kin",
    "fyr"
   ]
  },
  {
   "english": "family",
   "pos": "noun",
   "earlier": "kină",
   "modern": "țină",
   "rules": [
    "S1"
   ],
   "components": [
    "kină"
   ]
  },
  {
   "english": "kingdom",
   "pos": "noun",
   "earlier": "kyningdom",
   "modern": "țyningdom",
   "rules": [
    "S1"
   ],
   "components": [
    "kyning",
    "dom"
   ]
  },
  {
   "english": "water",
   "pos": "noun",
   "earlier": "væter",
   "modern": "vætăr",
   "rules": [
    "S5"
   ],
   "components": [
    "væter"
   ]
  },
  {
   "english": "child",
   "pos": "noun",
   "earlier": "kild",
   "modern": "țild",
   "rules": [
    "S1"
   ],
   "components": [
    "kild"
   ]
  },
  {
   "english": "king",
   "pos": "noun",
   "earlier": "kyning",
   "modern": "țyning",
   "rules": [
    "S1"
   ],
   "components": [
    "kyning"
   ]
  },
  {
   "english": "father",
   "pos": "noun",
   "earlier": "fæder",
   "modern": "fædăr",
   "rules": [
    "S5"
   ],
   "components": [
    "fæder"
   ]
  },
  {
   "english": "humanity",
   "pos": "noun",
   "earlier": "erþăkin",
   "modern": "erþățin",
   "rules": [
    "S1"
   ],
   "components": [
    "erþă",
    "kin"
   ]
  }
 ],
 "notice": "Earlier forms are reconstructed in-world literary forms and prior project spellings, not authenticated Old English words. This is a first audited inherited-root cohort; unchanged entries are not automatically proven late loans."
},
 morphology:{"mutating":{"hund":"hind","hors":"hers","fot":"fet","toþ":"teþ","mann":"mænn"},"datives":{"ik":"im","þu":"þem","han":"ham","ea":"eam","hit":"him","vi":"vim","gi":"gim","dei":"dem"},"animate":["person","friend","child","king","mother","father","brother","sister","son","daughter","parent","grandmother","grandfather","woman","man","baby","neighbour","guest","stranger","teacher","student","worker","doctor","farmer","baker","merchant","leader","citizen","judge","idiot","animal","bird","dog","cat","horse","cow","sheep","wolf","bear","fox","bee","insect","fish","deer"],"description":"Plural stem mutation is lexical, inherited from a lost earlier front-vowel plural ending; it is not applied to every back-vowel root.","elisionExceptions":["kartă","hertă"]},
 words:[
 ["strange","fremdig","adjective","Qualities"],
 ["your (plural)","gies","possessive","Foundation"],
 ["sword","sverd","noun","Society & travel"],
 ["sharp","șær","adjective","Qualities"],
 ["mud","slud","noun","Nature & weather"],
 ["deer","hert","noun","Nature & weather"],
 ["blood","blod","noun","Body & mind"],
 ["iron","izern","noun","Home & daily life"],
 ["gold","gold","noun","Home & daily life"],
 ["rain","regnan","verb","Actions"],
 ["become","verdan","verb","Actions"],
 ["hide","hydan","verb","Actions"],
 ["hunt","hentan","verb","Actions"],
 ["must","skul","modal","Foundation"],
 ["can","kæn","modal","Foundation"],
 ["may","mot","modal","Foundation"],
 ["should","bur","modal","Foundation"],
 ["than","þan","preposition","Foundation"],
 ["of","av","preposition","Foundation"],
 ["then","þæn","adverb","Connectors & time"],
 ["relative who/which/that","þe","particle","Foundation"],
 ["fresh","fersk","adjective","Qualities"],
 ["help","help","noun","Foundation"],
 ["for","for","preposition","Connectors & time"],
 ["its","hites","possessive","Connectors & time"],
 ["clothing","væþ","noun","Home & daily life"],
 ["lake","lak","noun","Nature & weather"],
 ["tired","mæd","adjective","Qualities"],
 ["very","særli","adverb","Connectors & time"],
 ["mother","modăr","noun","People & family"],
 ["brother","broþăr","noun","People & family"],
 ["sister","șystăr","noun","People & family"],
 ["son","sună","noun","People & family"],
 ["daughter","dohtăr","noun","People & family"],
 ["parent","eldren","noun","People & family"],
 ["grandmother","aldmodăr","noun","People & family"],
 ["grandfather","aldfædăr","noun","People & family"],
 ["woman","vif","noun","People & family"],
 ["man","ver","noun","People & family"],
 ["baby","bærn","noun","People & family"],
 ["neighbour","nehbor","noun","People & family"],
 ["guest","gæst","noun","People & family"],
 ["stranger","fremd","noun","People & family"],
 ["teacher","lærăr","noun","People & family"],
 ["student","lernend","noun","People & family"],
 ["worker","verkend","noun","People & family"],
 ["doctor","lækăr","noun","People & family"],
 ["farmer","feldmann","noun","People & family"],
 ["baker","bakkăr","noun","People & family"],
 ["merchant","marșant","noun","People & family"],
 ["leader","forăr","noun","People & family"],
 ["citizen","borgmann","noun","People & family"],
 ["name","namă","noun","People & family"],
 ["voice","stefn","noun","People & family"],
 ["language","tungă","noun","People & family"],
 ["word","ord","noun","People & family"],
 ["story","sægă","noun","People & family"],
 ["room","rum","noun","Home & daily life"],
 ["door","dor","noun","Home & daily life"],
 ["window","vindag","noun","Home & daily life"],
 ["wall","veg","noun","Home & daily life"],
 ["roof","þak","noun","Home & daily life"],
 ["floor","flor","noun","Home & daily life"],
 ["bed","bæd","noun","Home & daily life"],
 ["chair","stol","noun","Home & daily life"],
 ["table","bord","noun","Home & daily life"],
 ["key","kleșă","noun","Home & daily life"],
 ["lock","lok","noun","Home & daily life"],
 ["bag","pungă","noun","Home & daily life"],
 ["box","kistă","noun","Home & daily life"],
 ["book","bok","noun","Home & daily life"],
 ["letter","brev","noun","Home & daily life"],
 ["paper","hartă","noun","Home & daily life"],
 ["pen","penă","noun","Home & daily life"],
 ["shirt","șirt","noun","Home & daily life"],
 ["shoe","sko","noun","Home & daily life"],
 ["coat","mantă","noun","Home & daily life"],
 ["blanket","dekă","noun","Home & daily life"],
 ["lamp","lambă","noun","Home & daily life"],
 ["mirror","oglindă","noun","Home & daily life"],
 ["clock","klok","noun","Home & daily life"],
 ["money","gelt","noun","Home & daily life"],
 ["price","preț","noun","Home & daily life"],
 ["market","torg","noun","Home & daily life"],
 ["shop","bod","noun","Home & daily life"],
 ["work","verk","noun","Home & daily life"],
 ["school","skol","noun","Home & daily life"],
 ["hospital","lækhus","noun","Home & daily life"],
 ["bridge","brig","noun","Home & daily life"],
 ["garden","gard","noun","Home & daily life"],
 ["street","stræt","noun","Home & daily life"],
 ["village","þorp","noun","Home & daily life"],
 ["station","stată","noun","Home & daily life"],
 ["bread","bræd","noun","Food & drink"],
 ["milk","melk","noun","Food & drink"],
 ["cheese","kes","noun","Food & drink"],
 ["butter","butăr","noun","Food & drink"],
 ["egg","æg","noun","Food & drink"],
 ["meat","flæș","noun","Food & drink"],
 ["fish","fisk","noun","Food & drink"],
 ["salt","sælt","noun","Food & drink"],
 ["sugar","zahar","noun","Food & drink"],
 ["apple","æpel","noun","Food & drink"],
 ["pear","peră","noun","Food & drink"],
 ["plum","prună","noun","Food & drink"],
 ["potato","kartă","noun","Food & drink"],
 ["onion","luk","noun","Food & drink"],
 ["carrot","morkov","noun","Food & drink"],
 ["vegetable","grenmet","noun","Food & drink"],
 ["fruit","frukt","noun","Food & drink"],
 ["soup","supă","noun","Food & drink"],
 ["meal","mæl","noun","Food & drink"],
 ["breakfast","morgmet","noun","Food & drink"],
 ["lunch","midmet","noun","Food & drink"],
 ["dinner","ævenmet","noun","Food & drink"],
 ["tea","țeai","noun","Food & drink"],
 ["coffee","kafă","noun","Food & drink"],
 ["juice","sok","noun","Food & drink"],
 ["hunger","hungăr","noun","Food & drink"],
 ["thirst","þyrst","noun","Food & drink"],
 ["cup","kop","noun","Food & drink"],
 ["plate","teler","noun","Food & drink"],
 ["spoon","spel","noun","Food & drink"],
 ["knife","knif","noun","Food & drink"],
 ["bowl","șæl","noun","Food & drink"],
 ["morning","morgăn","noun","Nature & weather"],
 ["evening","æven","noun","Nature & weather"],
 ["breeze","vaș","noun","Nature & weather"],
 ["wind","vind","noun","Nature & weather"],
 ["rain","regn","noun","Nature & weather"],
 ["cloud","volk","noun","Nature & weather"],
 ["storm","sturm","noun","Nature & weather"],
 ["thunder","þunăr","noun","Nature & weather"],
 ["lightning","lehtfyr","noun","Nature & weather"],
 ["ice","is","noun","Nature & weather"],
 ["fog","mist","noun","Nature & weather"],
 ["river","ræn","noun","Nature & weather"],
 ["sea","sæ","noun","Nature & weather"],
 ["ocean","grandsæ","noun","Nature & weather"],
 ["hill","hyll","noun","Nature & weather"],
 ["valley","dal","noun","Nature & weather"],
 ["field","feld","noun","Nature & weather"],
 ["tree","trov","noun","Nature & weather"],
 ["leaf","læf","noun","Nature & weather"],
 ["flower","blom","noun","Nature & weather"],
 ["grass","græs","noun","Nature & weather"],
 ["root","rot","noun","Nature & weather"],
 ["branch","grenă","noun","Nature & weather"],
 ["sand","sænd","noun","Nature & weather"],
 ["soil","mol","noun","Nature & weather"],
 ["island","eyland","noun","Nature & weather"],
 ["coast","strond","noun","Nature & weather"],
 ["animal","der","noun","Nature & weather"],
 ["bird","fugl","noun","Nature & weather"],
 ["dog","hund","noun","Nature & weather"],
 ["cat","mætă","noun","Nature & weather"],
 ["horse","hors","noun","Nature & weather"],
 ["cow","ku","noun","Nature & weather"],
 ["sheep","șep","noun","Nature & weather"],
 ["wolf","vulf","noun","Nature & weather"],
 ["bear","ber","noun","Nature & weather"],
 ["fox","foks","noun","Nature & weather"],
 ["bee","biă","noun","Nature & weather"],
 ["insect","bugă","noun","Nature & weather"],
 ["spring","vornă","noun","Nature & weather"],
 ["summer","sumăr","noun","Nature & weather"],
 ["autumn","hærvest","noun","Nature & weather"],
 ["winter","vintăr","noun","Nature & weather"],
 ["head","hevd","noun","Body & mind"],
 ["hair","hær","noun","Body & mind"],
 ["eye","egă","noun","Body & mind"],
 ["ear","oră","noun","Body & mind"],
 ["nose","nos","noun","Body & mind"],
 ["mouth","muþ","noun","Body & mind"],
 ["tooth","toþ","noun","Body & mind"],
 ["hand","hand","noun","Body & mind"],
 ["arm","arm","noun","Body & mind"],
 ["leg","leg","noun","Body & mind"],
 ["foot","fot","noun","Body & mind"],
 ["heart","hertă","noun","Body & mind"],
 ["mind","mod","noun","Body & mind"],
 ["thought","þoht","noun","Body & mind"],
 ["memory","mynd","noun","Body & mind"],
 ["dream","dræm","noun","Body & mind"],
 ["joy","blis","noun","Body & mind"],
 ["sadness","sorvă","noun","Body & mind"],
 ["anger","gramă","noun","Body & mind"],
 ["fear","fyrht","noun","Body & mind"],
 ["surprise","miră","noun","Body & mind"],
 ["shame","skam","noun","Body & mind"],
 ["trust","truă","noun","Body & mind"],
 ["respect","værþ","noun","Body & mind"],
 ["truth","soþ","noun","Body & mind"],
 ["lie","lyg","noun","Body & mind"],
 ["health","hælu","noun","Body & mind"],
 ["illness","bolă","noun","Body & mind"],
 ["pain","sær","noun","Body & mind"],
 ["strength","kraft","noun","Body & mind"],
 ["rest","ræst","noun","Body & mind"],
 ["sleep","slæp","noun","Body & mind"],
 ["choice","țyr","noun","Body & mind"],
 ["idea","ideă","noun","Body & mind"],
 ["law","lag","noun","Society & travel"],
 ["government","landvald","noun","Society & travel"],
 ["council","rad","noun","Society & travel"],
 ["judge","domăr","noun","Society & travel"],
 ["court","domhus","noun","Society & travel"],
 ["tax","daz","noun","Society & travel"],
 ["vote","stemmă","noun","Society & travel"],
 ["election","stemmval","noun","Society & travel"],
 ["border","mærk","noun","Society & travel"],
 ["nation","þed","noun","Society & travel"],
 ["flag","fænă","noun","Society & travel"],
 ["capital","hovedgrod","noun","Society & travel"],
 ["history","aldsægă","noun","Society & travel"],
 ["future","framtid","noun","Society & travel"],
 ["past","fortid","noun","Society & travel"],
 ["present","nutid","noun","Society & travel"],
 ["year","ger","noun","Society & travel"],
 ["month","monaþ","noun","Society & travel"],
 ["week","væk","noun","Society & travel"],
 ["hour","orătid","noun","Society & travel"],
 ["minute","minut","noun","Society & travel"],
 ["time","tid","noun","Society & travel"],
 ["place","sted","noun","Society & travel"],
 ["map","kart","noun","Society & travel"],
 ["journey","fær","noun","Society & travel"],
 ["boat","bat","noun","Society & travel"],
 ["ship","șip","noun","Society & travel"],
 ["train","tren","noun","Society & travel"],
 ["bus","bus","noun","Society & travel"],
 ["car","vagn","noun","Society & travel"],
 ["ticket","bilet","noun","Society & travel"],
 ["harbour","havăn","noun","Society & travel"],
 ["airport","luftport","noun","Society & travel"],
 ["distance","færþ","noun","Society & travel"],
 ["direction","leid","noun","Society & travel"],
 ["north","norþ","noun","Society & travel"],
 ["south","suþ","noun","Society & travel"],
 ["east","est","noun","Society & travel"],
 ["west","vest","noun","Society & travel"],
 ["big","stor","adjective","Qualities"],
 ["small","lit","adjective","Qualities"],
 ["long","lang","adjective","Qualities"],
 ["short","kort","adjective","Qualities"],
 ["high","heh","adjective","Qualities"],
 ["low","lagă","adjective","Qualities"],
 ["fast","snell","adjective","Qualities"],
 ["slow","træg","adjective","Qualities"],
 ["heavy","tung","adjective","Qualities"],
 ["light","leht","adjective","Qualities"],
 ["dark","derk","adjective","Qualities"],
 ["bright","berht","adjective","Qualities"],
 ["clean","ren","adjective","Qualities"],
 ["dirty","snav","adjective","Qualities"],
 ["dry","dræg","adjective","Qualities"],
 ["wet","væt","adjective","Qualities"],
 ["full","ful","adjective","Qualities"],
 ["empty","tom","adjective","Qualities"],
 ["open","opăn","adjective","Qualities"],
 ["closed","lukd","adjective","Qualities"],
 ["happy","blid","adjective","Qualities"],
 ["sad","sorg","adjective","Qualities"],
 ["angry","gram","adjective","Qualities"],
 ["afraid","fyrhtig","adjective","Qualities"],
 ["hungry","hungrig","adjective","Qualities"],
 ["thirsty","þyrstig","adjective","Qualities"],
 ["easy","eș","adjective","Qualities"],
 ["difficult","hard","adjective","Qualities"],
 ["true","soþig","adjective","Qualities"],
 ["false","falș","adjective","Qualities"],
 ["right","rișt","adjective","Qualities"],
 ["wrong","vrang","adjective","Qualities"],
 ["quiet","stil","adjective","Qualities"],
 ["loud","lud","adjective","Qualities"],
 ["rich","rik","adjective","Qualities"],
 ["poor","armă","adjective","Qualities"],
 ["young","jung","adjective","Qualities"],
 ["free","frei","adjective","Qualities"],
 ["safe","sæf","adjective","Qualities"],
 ["ready","ræd","adjective","Qualities"],
 ["important","mærlig","adjective","Qualities"],
 ["different","andăr","adjective","Qualities"],
 ["same","sam","adjective","Qualities"],
 ["red","rod","adjective","Qualities"],
 ["blue","blav","adjective","Qualities"],
 ["white","hvit","adjective","Qualities"],
 ["black","svart","adjective","Qualities"],
 ["yellow","gelv","adjective","Qualities"],
 ["brown","brun","adjective","Qualities"],
 ["grey","græ","adjective","Qualities"],
 ["sweet","sot","adjective","Qualities"],
 ["sour","sur","adjective","Qualities"],
 ["bitter","bităr","adjective","Qualities"],
 ["soft","mild","adjective","Qualities"],
 ["strong","strang","adjective","Qualities"],
 ["weak","vækă","adjective","Qualities"],
 ["here","her","adverb","Connectors & time"],
 ["there","þær","adverb","Connectors & time"],
 ["now","nuna","adverb","Connectors & time"],
 ["yesterday","gistrăn","adverb","Connectors & time"],
 ["today","hidæi","adverb","Connectors & time"],
 ["always","æfre","adverb","Connectors & time"],
 ["never","næfre","adverb","Connectors & time"],
 ["often","oft","adverb","Connectors & time"],
 ["sometimes","sumtid","adverb","Connectors & time"],
 ["already","ærnu","adverb","Connectors & time"],
 ["again","eft","adverb","Connectors & time"],
 ["too","ovăr","adverb","Connectors & time"],
 ["only","anli","adverb","Connectors & time"],
 ["together","samăn","adverb","Connectors & time"],
 ["apart","sund","adverb","Connectors & time"],
 ["inside","innan","preposition","Connectors & time"],
 ["outside","utan","preposition","Connectors & time"],
 ["before","foran","preposition","Connectors & time"],
 ["after","æfter","preposition","Connectors & time"],
 ["because","þarfor","conjunction","Connectors & time"],
 ["or","oþer","conjunction","Connectors & time"],
 ["if","gif","conjunction","Connectors & time"],
 ["with","miþ","preposition","Connectors & time"],
 ["without","butan","preposition","Connectors & time"],
 ["from","fra","preposition","Connectors & time"],
 ["in","in","preposition","Connectors & time"],
 ["on","an","preposition","Connectors & time"],
 ["under","under","preposition","Connectors & time"],
 ["over","ufer","preposition","Connectors & time"],
 ["near","neh","preposition","Connectors & time"],
 ["between","betven","preposition","Connectors & time"],
 ["who","hva","interrogative","Connectors & time"],
 ["what","hvat","interrogative","Connectors & time"],
 ["where","hvar","interrogative","Connectors & time"],
 ["when","hven","interrogative","Connectors & time"],
 ["why","hvi","interrogative","Connectors & time"],
 ["how","hu","interrogative","Connectors & time"],
 ["this","þes","demonstrative","Connectors & time"],
 ["that","þat","demonstrative","Connectors & time"],
 ["these","þesne","demonstrative","Connectors & time"],
 ["my","ikes","possessive","Connectors & time"],
 ["your","þues","possessive","Connectors & time"],
 ["his","hanes","possessive","Connectors & time"],
 ["her","eaes","possessive","Connectors & time"],
 ["their","deies","possessive","Connectors & time"],
 ["zero","nul","number","Numbers"],
 ["one","ană","number","Numbers"],
 ["two","tva","number","Numbers"],
 ["three","þri","number","Numbers"],
 ["four","fer","number","Numbers"],
 ["five","fim","number","Numbers"],
 ["six","seks","number","Numbers"],
 ["seven","sefen","number","Numbers"],
 ["eight","aht","number","Numbers"],
 ["nine","nigen","number","Numbers"],
 ["ten","ten","number","Numbers"],
 ["eleven","enlef","number","Numbers"],
 ["twelve","tvalef","number","Numbers"],
 ["twenty","tvatig","number","Numbers"],
 ["thirty","þritig","number","Numbers"],
 ["forty","fertig","number","Numbers"],
 ["fifty","fimtig","number","Numbers"],
 ["sixty","sekstig","number","Numbers"],
 ["seventy","sefentig","number","Numbers"],
 ["eighty","ahttig","number","Numbers"],
 ["ninety","nigentig","number","Numbers"],
 ["hundred","hundred","number","Numbers"],
 ["thousand","þusend","number","Numbers"],
 ["the comfort of a familiar voice in a crowded place","stefnheim","concept","Sælord"],
 ["the feeling of being the last awake in a sleeping house","husvakt","concept","Sælord"],
 ["the relief of finally being understood","ordfriþ","concept","Sælord"],
 ["the moment the first spring sunlight feels warm","vornleht","concept","Sælord"],
 ["the pleasure of walking without a destination","leidfriþ","concept","Sælord"],
 ["the bittersweet pride of watching someone leave home","heimværþ","concept","Sælord"],
 ["the feeling that a familiar street has changed without you","strætdor","concept","Sælord"],
 ["a shared silence that needs no explanation","samstil","concept","Sælord"],
 ["the unspoken debt of a kindness","mildskuld","concept","Sælord"],
 ["a small joy that makes a difficult day worthwhile","dæiblis","concept","Sælord"],
 ["the calm just before a storm","sturmstil","concept","Sælord"],
 ["the anticipation of a long-awaited reunion","gæstnadă","concept","Sælord"],
 ["go","ganan","verb","Actions"],
 ["come","kuman","verb","Actions"],
 ["have","havan","verb","Actions"],
 ["make","makan","verb","Actions"],
 ["do","donan","verb","Actions"],
 ["get","getan","verb","Actions"],
 ["give","gifan","verb","Actions"],
 ["take","takan","verb","Actions"],
 ["find","findan","verb","Actions"],
 ["lose","lozan","verb","Actions"],
 ["hear","heran","verb","Actions"],
 ["listen","lystan","verb","Actions"],
 ["say","sægan","verb","Actions"],
 ["tell","tælan","verb","Actions"],
 ["ask","æskan","verb","Actions"],
 ["answer","andsvaran","verb","Actions"],
 ["read","rædan","verb","Actions"],
 ["write","ritan","verb","Actions"],
 ["learn","lernan","verb","Actions"],
 ["teach","læran","verb","Actions"],
 ["understand","understandan","verb","Actions"],
 ["think","þenkan","verb","Actions"],
 ["remember","myndan","verb","Actions"],
 ["forget","forgitan","verb","Actions"],
 ["believe","truan","verb","Actions"],
 ["want","viljan","verb","Actions"],
 ["need","þurfan","verb","Actions"],
 ["like","likan","verb","Actions"],
 ["hate","hatan","verb","Actions"],
 ["help","helpan","verb","Actions"],
 ["wait","bidan","verb","Actions"],
 ["start","beginnan","verb","Actions"],
 ["finish","endan","verb","Actions"],
 ["stop","stoppan","verb","Actions"],
 ["open","opnan","verb","Actions"],
 ["close","lukan","verb","Actions"],
 ["buy","bygan","verb","Actions"],
 ["sell","sellan","verb","Actions"],
 ["pay","geldan","verb","Actions"],
 ["cook","kokan","verb","Actions"],
 ["bake","bakan","verb","Actions"],
 ["wash","vașan","verb","Actions"],
 ["clean","renan","verb","Actions"],
 ["build","byldan","verb","Actions"],
 ["carry","beran","verb","Actions"],
 ["bring","bringan","verb","Actions"],
 ["send","sendan","verb","Actions"],
 ["walk","gangan","verb","Actions"],
 ["run","rinnan","verb","Actions"],
 ["sit","șittan","verb","Actions"],
 ["stand","standan","verb","Actions"],
 ["sleep","slæpan","verb","Actions"],
 ["wake","vakan","verb","Actions"],
 ["rest","ræstan","verb","Actions"],
 ["laugh","læhan","verb","Actions"],
 ["smile","smilan","verb","Actions"],
 ["cry","grætan","verb","Actions"],
 ["sing","șingan","verb","Actions"],
 ["play","plegan","verb","Actions"],
 ["work","verkan","verb","Actions"],
 ["stay","blivan","verb","Actions"],
 ["leave","lævan","verb","Actions"],
 ["return","vendan","verb","Actions"],
 ["meet","metan","verb","Actions"],
 ["choose","țyran","verb","Actions"],
 ["change","șiftan","verb","Actions"],
 ["feel","felan","verb","Actions"],
 ["hope","nadan","verb","Actions"],
 ["try","pruvan","verb","Actions"],
 ["happen","hapan","verb","Actions"],
 ["fall","fallan","verb","Actions"],
 ["grow","grovan","verb","Actions"],
 ["move","movan","verb","Actions"],
 ["the feeling of a warm morning breeze","morgănvaș","concept"],
 ["peace felt deep in a forest","vældfriþ","concept"],
 ["the hope of returning home","heimnadă","concept"],
 ["the hush of the world at night","niștstil","concept"],
 ["longing for a day that can never return","dæidor","concept"],
 ["the comfort of watching rain from indoors","vætărheim","concept"],
 ["pleasant drowsiness in sunlight","sunnăslæp","concept"],
 ["the warmth of belonging among friends","ținfyr","concept"],
 ["quiet determination despite hardship","stænvil","concept"],
 ["the distant hum of a city","grodþrum","concept"],
 ["the silence after fresh snowfall","snægstil","concept"],
 ["thinking of the perfect reply too late","ordsmæl","concept"],
 ["absurdity caused by bureaucracy","þingdol","concept"],
 ["guilt felt while resting","friþskuld","concept"],
 ["hope for an uncertain future","framnadă","concept"],
 ["a strange familiarity in an unfamiliar place","nevheim","concept"],
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
 ["hello","hæl","expression"],
 ["goodbye","farvæl","expression"],
 ["yes","ja","expression"],
 ["no","nei","expression"],
 ["thanks","þank","expression"],
 ["person","mann","noun"],
 ["friend","priat","noun"],
 ["family","țină","noun"],
 ["home","heim","noun"],
 ["country","landă","noun"],
 ["kingdom","țyningdom","noun"],
 ["city","grod","noun"],
 ["road","drum","noun"],
 ["world","lume","noun"],
 ["fire","fyr","noun"],
 ["water","vætăr","noun"],
 ["snow","snæg","noun"],
 ["forest","væld","noun"],
 ["mountain","berg","noun"],
 ["sun","sunnă","noun"],
 ["moon","monă","noun"],
 ["sky","hebăn","noun"],
 ["peace","friþ","noun"],
 ["freedom","freidom","noun"],
 ["life","levă","noun"],
 ["love","luvă","noun"],
 ["hope","nadă","noun"],
 ["house","hus","noun"],
 ["stone","stæn","noun"],
 ["night","nișt","noun"],
 ["day","dæi","noun"],
 ["child","țild","noun"],
 ["king","țyning","noun"],
 ["earth","erþă","noun"],
 ["father","fædăr","noun"],
 ["good","god","adjective"],
 ["bad","yvel","adjective"],
 ["beautiful","frumos","adjective"],
 ["cold","kald","adjective"],
 ["warm","varm","adjective"],
 ["old","ald","adjective"],
 ["new","nev","adjective"],
 ["green","gren","adjective"],
 ["see","sean","verb"],
 ["travel","faran","verb"],
 ["eat","etan","verb"],
 ["drink","drinkan","verb"],
 ["love","luvan","verb"],
 ["speak","sprekan","verb"],
 ["live","levan","verb"],
 ["know","witan","verb"],
 ["be","esan","verb"],
 ["I","ik","pronoun"],
 ["you","þu","pronoun"],
 ["he","han","pronoun"],
 ["she","ea","pronoun"],
 ["it","hit","pronoun"],
 ["we","vi","pronoun"],
 ["you (plural)","gi","pronoun"],
 ["they","dei","pronoun"],
 ["and","end","conjunction"],
 ["well","væl","adverb"],
 ["tomorrow","amorgăn","adverb"],
 ["darkness","niștvald","noun"],
 ["sunlight","sunnăfyr","noun"],
 ["humanity","erþățin","noun"],
 ["homesickness","heimdor","noun"],
 ["fortress","stænhus","noun"],
 ["sanctuary","friþland","noun"]
 ],
 phrases:[
 ["The stone remembers the hand.","Stænul nu handuta mynd."],
 ["A quiet word is strong.","Ord stil nu strang es."],
 ["The home remembers its guests.","Heimul nu gæstenla hites mynd."],
 ["Good morning!","Morgăn god!"],
 ["Good night!","Nișt god!"],
 ["Thank you for your help.","Þank þu for helpul þues."],
 ["Where is the market?","Hvar nu torgul es?"],
 ["What is your name?","Hvat nu namul þues es?"],
 ["My name is...","Namăul ikes nu ... es."],
 ["I speak Rasnovian.","Ik nu Rașnovæsk sprek."],
 ["See you tomorrow!","Amorgăn þuta se!"],
 ["Hello!","Hæl!"],
 ["Goodbye!","Farvæl!"],
 ["How are you?","Hu nu þu es?"],
 ["I am well, thanks.","Ik nu væl es, þank."],
 ["Yes, my friend.","Ja, priatul ikes."],
 ["Shall we go home?","Vi va til heim far li?"]
 ],
 grammar:[
 ["Modern noun morphology","v0.7 introduces conditioned erosion: final ă disappears before vowel-initial -en/-ul/-uta unless it distinguishes two lexical roots (exceptions: kartă, hertă). Definite accusatives fuse -ul-ta → -uta and -en-le-ta → -en-la. Indefinite accusative -ta survives for animate nouns; definite, demonstrative and possessive objects are marked even when inanimate. Generic indefinite inanimate objects are unmarked. Pronouns retain distinct accusatives."],
 ["Inherited plural classes","The old front-vowel plural ending produced fossilised stem mutation in a small class: hund → hinden, hors → hersen, fot → feten, toþ → teþen, mann → mænnen. Other nouns retain regular -en. Mutations apply before article and case endings; this is a historical class, not a universal sound rule."],
 ["Adjective agreement","Attributive adjectives follow the noun and agree in number: singular rod, plural rode; final ă becomes e, final e remains unchanged. Predicative and comparative adjectives remain uninflected. No gender agreement is required."],
 ["Genitive possession","Nominal possessors follow the possessed phrase with genitive -es on the head: sverdul broþărules ikes (my brother's sword). Definite plurals take -enles; English singular 's and plural s' are parsed. Av remains a lexical preposition for material/source, although those constructions are not yet parsed; it is not the modern default for nominal possession."],
 ["Dative pronouns","Nominative / accusative / dative / genitive: ik / ikta / im / ikes; þu / þuta / þem / þues; han / hanta / ham / hanes; ea / eata / eam / eaes; hit / hitta / him / hites; vi / vita / vim / vies; gi / gita / gim / gies; dei / deita / dem / deies. Transfer verbs use bare dative recipients after the direct object; English to him becomes ham. Other prepositions retain base pronouns. Noun recipients still use til."],
 ["Object marking limits","This is a grammaticalized differential object-marking system. It does not yet parse indefinite specificity, topicalization or free argument order. English number/second-person ambiguities can normalize on reverse translation."],
 ["Comparatives","Comparative adjectives take -er and introduce a standard with þan. Standalone possessives take -ul, e.g. ikesul mine, þuesul yours."],
 ["Prepositions and time","Objects precede prepositional and time adjuncts. Non-recipient prepositions govern unmarked noun phrases and base pronouns. Time adverbs precede the verb."],
 ["Possessives and demonstratives","Possessed nouns carry the definite article, and personal possessors follow any adjective. Demonstratives precede nouns and suppress the definite article."],
 ["Historical development","See the historical sound laws and word histories below. The five laws apply to an audited inherited-root cohort, including compounds. Later loans, analogical forms and conservative grammar are not blindly transformed. The relative chronology is fictional and does not assign real-world dates."],
 ["Stress and vowel reduction","Historical stress fell on the first syllable of inherited roots; weak final -er became -ăr in selected inherited stems. Modern lexical stress defaults to the penultimate syllable unless historical stress is specified. Loanword stress and exceptions remain to be documented."],
 ["Relative subjects","Þe introduces a subject relative clause; the head noun is not repeated inside it. A comma closes the relative clause before the main tense particle. The engine supports simple subject-relative clauses and normalizes who/which by the head noun."],
 ["Conditional and coordinated structures","Gif introduces a condition, followed by a comma and an independent result clause. End coordinates noun phrases. Contrastive ne may follow a complete clause after a comma. Verdan (become) selects an unmarked nominal or adjective complement."],
 ["Wh-questions","Hvi (why), hvar (where), hven (when), hu (how) precede the tense particle, then the subject and verb-final predicate. They do not take li. Object and subject wh-questions are not yet parsed."],
 ["Modals","Skul must, kæn can, mot may, bur should precede the bare verb stem; ne precedes the modal. Present modal clauses are currently implemented."],
 ["Quantified nouns","Cardinal numbers precede the noun and any article remains suffixed. Quantity one uses singular; other cardinals use plural -en. The parser accepts individual recorded numerals, not all composed number phrases."],
 ["Proverbs and idioms","Stænul nu handuta mynd (the stone remembers the hand) means that work bears the mark of its maker, even when the maker is forgotten. Ord stil nu strang es (a quiet word is strong) values restraint and influence over loudness. Heimul nu gæstenla hites mynd (the home remembers its guests) expresses the belief that hospitality leaves lasting traces. These are cultural sayings, not literal translation rules."],
 ["Everyday register","Greetings often take the form noun + adjective, e.g. morgăn god (good morning) and nișt god (good night). Short farewell formulas may omit a subject and tense particle, e.g. amorgăn þuta se (see you tomorrow)."],
 ["Copular clauses","Adjectives and nominal predicates come before es without object marking: han nu blid es = he is happy. Særli means very."],
 ["Translation ambiguity","English read and other identical present/past forms default to present unless an auxiliary disambiguates. The engine supports a restricted compositional grammar; ambiguous or unsupported structures may need clarification. It does not claim general translation coverage."],
 ["Canonical conjunctions","Standard Rasnovian v0.4 distinguishes end (and) from ak (but). Older v0.1 examples used ak for both; this is a deliberate revision."],
 ["Word-building","Compounds are modifier-first and head-last: bak-hus (bake-house), land-vald (country-rule), and læk-hus (healing-house). Productive suffixes are -end for an active participant, -er for a habitual agent, and -ig for a quality. Not every imaginable compound is automatically canonical."],
 ["Numbers","ană to ten are basic numerals; eleven and twelve have distinct forms. Multiples of ten end in -tig. Compound numerals put the tens first, then the unit joined by end: tvatig end þri (23)."],
 ["Vocabulary register","The standard lexicon is intentionally curated rather than a letter substitution. Germanic roots dominate everyday actions and compounding; Romance and Slavic-inspired loans contribute civic, household and cultural vocabulary. Ancestry proportions remain design goals rather than audited counts."],
 ["Pronunciation revision","Every canonical native spelling uses the 27-letter alphabet. Unstressed ă is /ə/, æ is /æ/, ș is /ʃ/, ț is /ts/, þ is /θ/, y is /ɨ/, j is /ʒ/. Other vowels are generally pure; g and k stay hard. Diphthongs ai/ei are pronounced as a single syllable."],
 ["Basic clauses","The engine supports simple noun or pronoun subjects, direct objects, prepositional and time adjuncts, copular predicates, modals, comparatives, and restricted conditionals and relative subjects. Other subordinate clauses and free word order are not yet supported."],
 ["Experiential vocabulary (Sælord)","Sælord is a proposed cultural term for words that name whole experiences rather than simple objects. These are lexicalised compounds, with meaning extending beyond the component roots. Morgănvaș evokes warm morning air felt against the skin (morgăn, morning; vaș, soft brush or breeze). Vældfriþ combines forest and peace; ținfyr combines family and fire; þingdol combines assembly and foolishness, specifically institutional absurdity. New roots used in this collection are provisional: stil (stillness), slæp (sleep), vil (will), þrum (hum), ord (word), smæl (a sharp remark), skuld (obligation or guilt), fram (forward). Concepts function as nouns and can take regular noun endings."],
 ["Colloquial speech","Mann! is an interjection. Verdom is a strong curse used as a verb-final imperative without a tense particle. Þa marks plural demonstratives, replacing the definite article: þa dolenta = those idiots (object). Possessives can follow the noun: ordruta vies = our order (object). Jafn with hed conveys 'might as well'; direct-object hit takes -ta: hitta. Bi = at, til = to."],
 ["Sentence order","The default is subject–object–verb. Put the tense particle after the first major element. Objects can move to the front for emphasis."],
 ["Tense and aspect","nu = present; er = past; va = future; dur = ongoing; hed = conditional. Remove -an from an infinitive to obtain the verb stem."],
 ["Negation and questions","Place ne immediately before the verb. A yes/no question ends with li."],
 ["Dialect concepts","Aldrașnovæsk (ancient), Nordrașnovæsk (northern), Sudrașnovæsk (southern), Hohrașnovæsk (formal), Folkrașnovæsk (colloquial). These are not yet separately implemented."]
 ],
 inflectNoun(n,pl=false,def=false,caseName="nom",demo=false){
  const morphology=this.morphology;
  let r=pl?(morphology.mutating[n[1]]||n[1]):n[1];
  const marked=caseName==="acc"&&(def||demo||morphology.animate.includes(n[0]));
  let suffix=pl?(def?(marked?"enla":"enle"):(marked?"enta":"en")):def?(marked?"uta":"ul"):(marked?"ta":"");
  if(caseName==="gen")suffix=pl&&def?"enles":suffix+"es";
  if(r.endsWith("ă")&&/^[eu]/.test(suffix)&&!morphology.elisionExceptions.includes(n[1]))r=r.slice(0,-1);
  return r+suffix;
 },
 // Grammar adapter: deliberately limited to supported regular clauses. Return null for unsupported syntax.
 translateClause(input,reverse){
 const norm=s=>s.normalize("NFC").toLowerCase().trim(), cap=s=>s[0].toUpperCase()+s.slice(1), split=s=>s.split(/\s+/);
 const punct=input.trim().match(/[.!?]$/)?.[0]||"";
 // Sentence-level constructions are parsed recursively; not stored as phrase translations.
 const raw=input.trim();
 const low=norm(raw);
 const decap=s=>s[0]==="I"&&(s.length===1||s[1]===" ")?s:s[0].toLowerCase()+s.slice(1);
 const cond=reverse?/^gif\s+(.+?),\s*(.+)$/i:/^if\s+(.+?),\s*(?:then\s+)?(.+)$/i;
 const cm=raw.match(cond);
 if(cm){const first=this.translateClause(cm[1],reverse), second=this.translateClause(cm[2],reverse);if(first&&second)return (reverse?"If ":"Gif ")+decap(first)+", "+decap(second);return null;}
 const contrast=raw.match(reverse?/^(.+),\s*ne\s+(.+?)([.!?])?$/i:/^(.+),\s*not\s+(.+?)([.!?])?$/i);
 if(contrast){const main=this.translateClause(contrast[1],reverse);const item=this.words.find(w=>["noun","concept","pronoun"].includes(w[2])&&norm(w[reverse?1:0])===norm(contrast[2]));if(main&&item)return main+", "+(reverse?"not ":"ne ")+item[reverse?0:1]+(contrast[3]||"");return null;}
 const tokens=split(norm(input).replace(/[.!?]$/,"").replace(/n['’]t\b/g," not").replace(/\bwo not\b/g,"will not").replace(/\bi['’]m\b/g,"i am").replace(/\b(he|she|it)['’]s\b/g,"$1 is").replace(/\b(we|you|they)['’]re\b/g,"$1 are"));
 const words=this.words, nouns=words.filter(w=>["noun","concept"].includes(w[2])), forms={"go":["goes","went","going"],"come":["comes","came","coming"],"have":["has","had","having"],"make":["makes","made","making"],"do":["does","did","doing"],"get":["gets","got","getting"],"give":["gives","gave","giving"],"take":["takes","took","taking"],"find":["finds","found","finding"],"lose":["loses","lost","losing"],"hear":["hears","heard","hearing"],"listen":["listens","listened","listening"],"say":["says","said","saying"],"tell":["tells","told","telling"],"ask":["asks","asked","asking"],"answer":["answers","answered","answering"],"read":["reads","read","reading"],"write":["writes","wrote","writing"],"learn":["learns","learned","learning"],"teach":["teaches","taught","teaching"],"understand":["understands","understood","understanding"],"think":["thinks","thought","thinking"],"remember":["remembers","remembered","remembering"],"forget":["forgets","forgot","forgetting"],"believe":["believes","believed","believing"],"want":["wants","wanted","wanting"],"need":["needs","needed","needing"],"like":["likes","liked","liking"],"hate":["hates","hated","hating"],"help":["helps","helped","helping"],"wait":["waits","waited","waiting"],"start":["starts","started","starting"],"finish":["finishes","finished","finishing"],"stop":["stops","stopped","stopping"],"open":["opens","opened","opening"],"close":["closes","closed","closing"],"buy":["buys","bought","buying"],"sell":["sells","sold","selling"],"pay":["pays","paid","paying"],"cook":["cooks","cooked","cooking"],"bake":["bakes","baked","baking"],"wash":["washes","washed","washing"],"clean":["cleans","cleaned","cleaning"],"build":["builds","built","building"],"carry":["carries","carried","carrying"],"bring":["brings","brought","bringing"],"send":["sends","sent","sending"],"walk":["walks","walked","walking"],"run":["runs","ran","running"],"sit":["sits","sat","sitting"],"stand":["stands","stood","standing"],"sleep":["sleeps","slept","sleeping"],"wake":["wakes","woke","waking"],"rest":["rests","rested","resting"],"laugh":["laughs","laughed","laughing"],"smile":["smiles","smiled","smiling"],"cry":["cries","cried","crying"],"sing":["sings","sang","singing"],"play":["plays","played","playing"],"work":["works","worked","working"],"stay":["stays","stayed","staying"],"leave":["leaves","left","leaving"],"return":["returns","returned","returning"],"meet":["meets","met","meeting"],"choose":["chooses","chose","choosing"],"change":["changes","changed","changing"],"feel":["feels","felt","feeling"],"hope":["hopes","hoped","hoping"],"try":["tries","tried","trying"],"happen":["happens","happened","happening"],"fall":["falls","fell","falling"],"grow":["grows","grew","growing"],"move":["moves","moved","moving"],"report":["reports","reported","reporting"],"mess up":["messes up","messed up","messing up"],"see":["sees","saw","seeing"],"eat":["eats","ate","eating"],"drink":["drinks","drank","drinking"],"love":["loves","loved","loving"],"travel":["travels","traveled","traveling"],"speak":["speaks","spoke","speaking"],"live":["lives","lived","living"],"know":["knows","knew","knowing"]};
 Object.assign(forms,{"rain":["rains","rained","raining"],"become":["becomes","became","becoming"],"hide":["hides","hid","hiding"],"hunt":["hunts","hunted","hunting"]});
 const find=(s,pos,rev=false)=>words.find(w=>norm(w[rev?1:0])===s&&w[2]===pos);
 const pron=words.filter(w=>w[2]==="pronoun"), poss=words.filter(w=>w[2]==="possessive");
 const num=words.filter(w=>w[2]==="number");
 const verbs=words.filter(w=>w[2]==="verb"&&forms[w[0]]);
 const demo={this:"þes",that:"þat",these:"þesne",those:"þa"}, ob={me:"ikta",you:"þuta",him:"hanta",her:"eata",it:"hitta",us:"vita",them:"deita"};
 const irreg={person:"people",child:"children",man:"men",woman:"women",tooth:"teeth",foot:"feet",sheep:"sheep",fish:"fish",life:"lives",leaf:"leaves",knife:"knives",wolf:"wolves",deer:"deer"};
 const plural=s=>irreg[s]||(/[^aeiou]y$/.test(s)?s.slice(0,-1)+"ies":/(s|x|z|ch|sh)$/.test(s)?s+"es":s+"s");
 const mass=new Set("water snow fire peace freedom life love hope rain milk bread cheese butter meat salt sugar coffee tea juice money clothing grass sand soil fog ice health pain work time sleep rest truth darkness sunlight mud blood iron gold".split(" "));
 const morphology=this.morphology;
 const animate=new Set(morphology.animate);
 const dative={me:"im",you:"þem",him:"ham",her:"eam",it:"him",us:"vim",them:"dem"};
 const recipientVerbs=new Set(["give","send","bring","tell","sell","lend","offer"]);
 const adjForm=(r,pl)=>pl?(r.endsWith("e")?r:r.endsWith("ă")?r.slice(0,-1)+"e":r+"e"):r;
 const nounForm=this.inflectNoun.bind(this);
 function np(a,obj=false,rev=false,genitive=false){
  if(!a.length)return null;
  const joint=a.indexOf(rev?"end":"and");if(joint>0&&joint<a.length-1){const l=np(a.slice(0,joint),obj,rev,genitive),r=np(a.slice(joint+1),obj,rev,genitive);if(l&&r)return {text:l.text+(rev?" and ":" end ")+r.text,third:false};}
  if(a.length===1&&!genitive){
   if(obj){const o=rev?Object.keys(ob).find(k=>ob[k]===a[0]):ob[a[0]];if(o)return {text:o,third:false};if(rev&&a[0]==="gita")return {text:"you",third:false};}
   else {const p=pron.find(w=>norm(w[rev?1:0])===a[0]);if(p)return {text:rev?(p[0]==="you (plural)"?"you":p[0]):p[1],third:["he","she","it"].includes(p[0]),first:p[0]==="I"};}
  }
  // Genitive owner follows the possessed noun; the owner itself bears -es.
  if(!genitive){
   if(!rev){
    const gen=a.findIndex(x=>/['’]s$|s['’]$/.test(x));
    if(gen>=0&&gen<a.length-1){
     const root=a[gen].replace(/['’]s$|['’]$/,"");
     const owner=np([...a.slice(0,gen),root],false,false,true);
     const owned=np(["the",...a.slice(gen+1)],obj,false);
     if(owner&&owned)return {...owned,text:owned.text+" "+owner.text};
    }
   }else{
    for(let i=1;i<a.length;i++){
     const owner=np(a.slice(i),false,true,true);
     if(!owner)continue;
     const owned=np(a.slice(0,i),obj,true);
     if(owned&&owned.text.startsWith("the "))return {...owned,text:owner.text+(owner.plural&&owner.text.endsWith("s")?"'":"'s")+" "+owned.text.slice(4)};
    }
   }
  }
  if(!rev){
   let b=a.slice(),d="",ps="",dm="",quantity=null;
   if(["the","a","an"].includes(b[0]))d=b.shift();else if(demo[b[0]])dm=b.shift();else{const p=poss.find(w=>norm(w[0])===b[0]);if(p){ps=p[1];b.shift();}}
   quantity=num.find(w=>w[0]===b[0]);if(quantity)b.shift();
   for(const n of nouns)for(const pl of [false,true]){
    if(quantity&&pl===(quantity[0]==="one"))continue;
    const en=split(norm(pl?plural(n[0]):n[0]));if(b.length<en.length||b.slice(-en.length).join(" ")!==en.join(" "))continue;
    if(pl&&["a","an","this","that"].includes(d||dm)||!pl&&["these","those"].includes(dm))continue;
    const ad=b.slice(0,b.length-en.length).map(x=>find(x,"adjective"));if(ad.some(x=>!x))continue;
    if(!d&&!ps&&!dm&&!quantity&&!pl&&!mass.has(n[0])&&n[2]!=="concept")continue;
    const def=d==="the"||!!ps;
    return {text:[demo[dm],quantity?.[1],nounForm(n,pl,def,genitive?"gen":obj?"acc":"nom",!!dm),...ad.map(x=>adjForm(x[1],pl)),ps].filter(Boolean).join(" "),third:!pl,plural:pl,nativeRoot:n[1]};
   }
   return null;
  }
  let b=a.slice(),dm="",ps="",quantity=null;
  const d=Object.keys(demo).find(k=>demo[k]===b[0]);if(d){dm=d;b.shift();}
  quantity=num.find(w=>w[1]===b[0]);if(quantity)b.shift();
  const p=poss.find(w=>w[1]===b[b.length-1]);if(p){ps=p[0];b.pop();}
  const marked=b.shift();
  for(const n of nouns)for(const pl of [false,true])for(const def of [false,true]){
   if(nounForm(n,pl,def,genitive?"gen":obj?"acc":"nom",!!dm)!==marked)continue;
   const ad=b.map(x=>words.find(w=>w[2]==="adjective"&&adjForm(w[1],pl)===x));if(ad.some(x=>!x))continue;
   if(dm&&def||ps&&!def||dm&&["these","those"].includes(dm)!==pl||quantity&&pl===(quantity[0]==="one"))continue;
   const body=[...ad.map(x=>x[0]),pl?plural(n[0]):n[0]].join(" ");
   const prefix=dm||ps||(def?"the":pl||quantity||mass.has(n[0])||n[2]==="concept"?"":/^[aeiou]/.test(body)?"an":"a");
   return {text:[prefix,quantity?.[0],body].filter(Boolean).join(" "),third:!pl,plural:pl,nativeRoot:n[1],human:animate.has(n[0])&&!(["animal","bird","dog","cat","horse","cow","sheep","wolf","bear","fox","bee","insect","fish","deer"].includes(n[0]))};
  }return null;
 }
 function pred(a,rev,obj=true,recipient=false){
  if(!a.length)return {text:""};
  const preps=words.filter(w=>w[2]==="preposition"&&!["than","of"].includes(w[0]));
  const times=words.filter(w=>w[2]==="adverb"&&["yesterday","today","tomorrow","now","always","never","often","sometimes","already","again","together","apart","then","here","there"].includes(w[0]));
  const side=rev?1:0,other=1-side;
  const bare={night:"nișt",home:"heim",morning:"morgăn",evening:"æven",school:"skol",work:"verk"};
  const ppnp=(b)=>{
   if(b.length===1){
    if(rev){const row=pron.find(w=>w[1]===b[0]);if(row){const english=row[0]==="you (plural)"?"you":row[0];return {text:{I:"me",he:"him",she:"her",we:"us",they:"them"}[english]||english};}}
    else{const r=pron.find(w=>w[0]===( {me:"I",him:"he",her:"she",us:"we",them:"they"}[b[0]]||b[0]));if(r)return {text:r[1]};}
    const k=rev?Object.keys(bare).find(k=>bare[k]===b[0]):bare[b[0]];if(k)return {text:k};
   }
   return np(b,false,rev);
  };
  function core(b){
   if(!b.length)return {text:""};
   if(!obj){
    const than=b.indexOf(rev?"þan":"than");
    if(than===1&&b.length>2){
     const comparatives={good:"better",bad:"worse",big:"bigger",small:"smaller",happy:"happier",easy:"easier",hot:"hotter",sad:"sadder",thin:"thinner",heavy:"heavier"};
     const enComp=x=>comparatives[x]||(/[^aeiou]y$/.test(x)?x.slice(0,-1)+"ier":x.endsWith("e")?x+"r":x+"er");
     const raComp=x=>x+"er";
     const row=words.find(w=>w[2]==="adjective"&&(rev?raComp(w[1]):enComp(w[0]))===b[0]);
     const possessivePron={mine:"ikesul",yours:"þuesul",his:"hanesul",hers:"eaesul",ours:"viesul",theirs:"deiesul"};
     const pp=rev?Object.keys(possessivePron).find(k=>possessivePron[k]===b.slice(2).join(" ")):possessivePron[b.slice(2).join(" ")];
     const n=pp?{text:pp}:np(b.slice(2),false,rev);
     if(row&&n)return {text:[rev?enComp(row[0]):raComp(row[1]),rev?"than":"þan",n.text].join(" ")};
    }
    const ad=find(b[b.length-1],"adjective",rev);const deg=rev?{sva:"so",særli:"very"}:{so:"sva",very:"særli"};if(ad&&(b.length===1||b.length===2&&deg[b[0]]))return {text:[b.length===2?deg[b[0]]:"",ad[other]].filter(Boolean).join(" ")};}
   return np(b,obj,rev);
  }
  function extras(b){
   if(!b.length)return [];
   if(recipient){
    if(rev){const who=Object.keys(dative).find(k=>dative[k]===b[0]);if(who){const tail=extras(b.slice(1));if(tail)return ["to "+who,...tail];}if(b[0]==="gim"){const tail=extras(b.slice(1));if(tail)return ["to you",...tail];}}
    else if(b[0]==="to"&&dative[b[1]]){const tail=extras(b.slice(2));if(tail)return [dative[b[1]],...tail];}
   }
   const t=times.find(w=>w[side]===b[0]);if(t){const tail=extras(b.slice(1));if(tail)return [t[other],...tail];}
   const prep=preps.find(w=>w[side]===b[0]);if(!prep)return null;
   for(let i=b.length;i>=2;i--){const n=ppnp(b.slice(1,i));if(!n)continue;const tail=extras(b.slice(i));if(tail)return [prep[other]+" "+n.text,...tail];}
   return null;
  }
  for(let i=a.length;i>=0;i--){const main=core(a.slice(0,i));if(!main)continue;const tail=extras(a.slice(i));if(tail)return {text:[main.text,...tail].filter(Boolean).join(" ")};}
  return null;
 }
 const particles=["nu","er","va","dur","hed"];
 const modals={must:"skul",can:"kæn",may:"mot",should:"bur"};
 const whs={why:"hvi",where:"hvar",when:"hven",how:"hu"};
 if(!reverse){
  let a=tokens.slice(),q=false,aux="",wh="";if(whs[a[0]])wh=a.shift();
  const auxes=["do","does","did","will","would","am","is","are","was","were",...Object.keys(modals)];
  if(auxes.includes(a[0])){aux=a.shift();q=true;}else if(wh)return null;
  function out(s,t,o,neg,stem,modal=""){return cap([...(wh?[whs[wh],t,s.text]:[s.text,t]),o.text,neg?"ne":"",modal,stem,q&&!wh?"li":""].filter(Boolean).join(" "))+(q?"?":punct);}
  for(let i=1;i<a.length;i++){
   let s=np(a.slice(0,i));
   if(!s){const subject=a.slice(0,i);const ri=subject.findIndex(x=>["who","which","that"].includes(x));if(ri>0&&ri<subject.length-1){const head=np(subject.slice(0,ri));if(head){const rel=this.translateClause((head.third?"he":"they")+" "+subject.slice(ri+1).join(" "),false);if(rel){const body=rel.replace(/^(Han|Dei)\s+/i,"");s={...head,text:head.text+" þe "+body+","};}}}}
   if(!s)continue;
   let b=a.slice(i),ax=aux;if(!ax&&auxes.includes(b[0]))ax=b.shift();
   let neg=b[0]==="not";if(neg)b.shift();
   const tense=ax==="will"?"va":ax==="would"?"hed":["did","was","were"].includes(ax)?"er":"nu";
   const be=["am","is","are","was","were"].includes(ax);
   if(be||["will","would"].includes(ax)&&b[0]==="be"){
    const o=pred(be?b:b.slice(1),false,false);if(o?.text)return out(s,tense,o,neg,"es");
    if(["was","were"].includes(ax))continue;
   }
   for(const v of verbs){
    const [en,ra]=v,[third,past,ing]=forms[en];
    const variants=be?[[ing,"dur"]]:ax?[[en,tense]]:[[s.third?third:en,"nu"],[past,"er"]];
    for(const [form,t] of variants){const vt=split(form);if(b.slice(0,vt.length).join(" ")!==form)continue;const o=pred(b.slice(vt.length),false,en!=="become",recipientVerbs.has(en));if(o)return out(s,t,o,neg,ra.slice(0,-2),modals[ax]);}
   }
  }return null;
 }
 let a=tokens.slice(),q=a[a.length-1]==="li";if(q)a.pop();
 const wh=Object.keys(whs).find(k=>whs[k]===a[0]);if(wh){const tense=a[1];if(!particles.includes(tense))return null;for(let j=a.length-1;j>=3;j--){if(!np(a.slice(2,j),false,true))continue;const translated=this.translateClause([...a.slice(2,j),tense,...a.slice(j),"li"].join(" ")+"?",true);if(translated)return cap(wh+" "+translated[0].toLowerCase()+translated.slice(1));}return null;}
 let i=a.findIndex(x=>particles.includes(x)),s=null;
 const ri=a.indexOf("þe");
 if(ri>0){const boundary=a.findIndex((x,j)=>j>ri&&x.endsWith(","));if(boundary<0||!particles.includes(a[boundary+1]))return null;const head=np(a.slice(0,ri),false,true);if(!head)return null;const relTokens=a.slice(ri+1,boundary+1);relTokens[relTokens.length-1]=relTokens[relTokens.length-1].slice(0,-1);const rel=this.translateClause([head.third?"han":"dei",...relTokens].join(" "),true);if(!rel)return null;const body=rel.replace(/^(He|They)\s+/i,"");if(body===rel)return null;const nounHead=a[ri-1];const human=head.human||false;s={...head,text:head.text+" "+(human?"who":"which")+" "+body};i=boundary+1;}
 else if(i>0)s=np(a.slice(0,i),false,true);
 if(i<1||!s)return null;
 const t=a[i];a=a.slice(i+1);const stem=a.pop();const modal=Object.keys(modals).find(k=>modals[k]===a[a.length-1]);if(modal)a.pop();const neg=a[a.length-1]==="ne";if(neg)a.pop();
 const cop=stem==="es",v=verbs.find(w=>w[1].slice(0,-2)===stem);if(!cop&&!v)return null;
 const o=pred(a,true,!cop&&v?.[0]!=="become",recipientVerbs.has(v?.[0]));if(!o||cop&&!o.text)return null;
 const be=s.first?"am":s.third?"is":"are",pastBe=s.first||s.third?"was":"were";let aux="",vv="";
 if(cop){if(t==="dur")return null;if(t==="va"||t==="hed"){aux=t==="va"?"will":"would";vv="be";}else aux=t==="er"?pastBe:be;}
 else{const en=v[0],[third,past,ing]=forms[en];vv=en;if(modal){if(t!=="nu")return null;aux=modal;}else if(t==="va"||t==="hed")aux=t==="va"?"will":"would";else if(t==="dur"){aux=be;vv=ing;}else if(q||neg)aux=t==="er"?"did":s.third?"does":"do";else vv=t==="er"?past:s.third?third:en;}
 return cap((q?[aux,s.text,neg?"not":"",vv,o.text]:[s.text,aux,neg?"not":"",vv,o.text]).filter(Boolean).join(" "))+(q?"?":punct);
}
});
