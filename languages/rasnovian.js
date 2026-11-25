// Each language pack registers its own vocabulary, documentation and grammar adapter.
window.languagePacks = window.languagePacks || [];
window.languagePacks.push({
 id:"rasnovian", name:"Rasnovian", native:"Rașnovæsk", version:"0.8.5",
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
 aliases:{"hound":["dog"],"hounds":["dogs"],"pooch":["dog"],"pooches":["dogs"],"kid":["child"],"kids":["children"],"youngster":["child"],"youngsters":["children"],"individual":["person"],"individuals":["people"],"pal":["friend"],"pals":["friends"],"mate":["friend"],"mates":["friends"],"companion":["friend"],"companions":["friends"],"store":["shop"],"stores":["shops"],"streetway":["street"],"streetways":["streets"],"roadway":["road"],"roadways":["roads"],"metropolis":["city"],"metropolises":["cities"],"hamlet":["village"],"hamlets":["villages"],"woods":["forest"],"woodland":["forest"],"woodlands":["forests"],"dwelling":["house"],"dwellings":["houses"],"residence":["house"],"residences":["houses"],"chamber":["room"],"chambers":["rooms"],"sack":["bag"],"sacks":["bags"],"clothes":["clothing"],"apparel":["clothing"],"cash":["money"],"provisions":["food"],"repast":["meal"],"repasts":["meals"],"fall":["autumn"],"falls":["autumns"],"harbor":["harbour"],"harbors":["harbours"],"neighbor":["neighbour"],"neighbors":["neighbours"],"trip":["journey"],"trips":["journeys"],"voyage":["journey"],"voyages":["journeys"],"sickness":["illness"],"ailment":["illness"],"ailments":["illnesses"],"happiness":["joy"],"delight":["joy"],"delights":["joys"],"sorrow":["sadness"],"sorrows":["sadness"],"unhappiness":["sadness"],"unhappinesses":["sadness"],"rage":["anger"],"dread":["fear"],"assistance":["help"],"aid":["help"],"tale":["story"],"tales":["stories"],"notion":["idea"],"notions":["ideas"],"concept":["idea"],"concepts":["ideas"],"option":["choice"],"options":["choices"],"boundary":["border"],"boundaries":["borders"],"frontier":["border"],"frontiers":["borders"],"administration":["government"],"administrations":["governments"],"realm":["kingdom"],"realms":["kingdoms"],"chief":["leader"],"chiefs":["leaders"],"chieftain":["leader"],"chieftains":["leaders"],"stronghold":["fortress"],"strongholds":["fortresses"],"fort":["fortress"],"forts":["fortresses"],"gateway":["gate"],"gateways":["gates"],"sentry":["guard"],"sentries":["guards"],"watchman":["guard"],"watchmans":["guards"],"lookout":["guard"],"lookouts":["guards"],"robber":["bandit"],"robbers":["bandits"],"brigand":["bandit"],"brigands":["bandits"],"trail":["path","follow"],"trails":["paths","follows"],"footpath":["path"],"footpaths":["paths"],"remnant":["ruin"],"remnants":["ruins"],"tavern":["inn"],"taverns":["inns"],"traveler":["traveller"],"travelers":["travellers"],"wayfarer":["traveller"],"wayfarers":["travellers"],"turret":["tower"],"turrets":["towers"],"quietness":["silence"],"stillness":["silence"],"supporter":["ally"],"supporters":["allies"],"foe":["enemy"],"foes":["enemies"],"adversary":["enemy"],"adversaries":["enemies"],"large":["big"],"huge":["big"],"little":["small"],"tiny":["small"],"quick":["fast"],"rapid":["fast"],"swift":["fast"],"sluggish":["slow"],"pretty":["beautiful"],"lovely":["beautiful"],"gorgeous":["beautiful"],"fine":["good"],"excellent":["good"],"nice":["good"],"awful":["bad"],"terrible":["bad"],"ancient":["old"],"aged":["old"],"recent":["new"],"brand new":["new"],"chilly":["cold"],"mild":["warm"],"glad":["happy"],"cheerful":["happy"],"pleased":["happy"],"unhappy":["sad"],"miserable":["sad"],"mad":["angry"],"furious":["angry"],"scared":["afraid"],"frightened":["afraid","scared"],"terrified":["afraid"],"weary":["tired"],"exhausted":["tired"],"silent":["quiet"],"hushed":["quiet"],"noisy":["loud"],"odd":["strange"],"weird":["strange"],"unusual":["strange"],"simple":["easy"],"hard":["difficult"],"challenging":["difficult"],"correct":["right"],"incorrect":["wrong"],"secure":["safe"],"significant":["important"],"crucial":["important"],"distinct":["different"],"identical":["same"],"unrestricted":["free"],"filthy":["dirty"],"spotless":["clean"],"powerful":["strong"],"feeble":["weak"],"gray":["grey"],"starving":["hungry"],"parched":["thirsty"],"shift":["move"],"shifts":["moves"],"shifted":["moved"],"shifting":["moving"],"relocate":["move"],"relocates":["moves"],"relocated":["moved"],"relocating":["moving"],"stride":["step"],"strides":["steps"],"strode":["stepped"],"striding":["stepping"],"stridden":["stepped"],"tread":["step"],"treads":["steps"],"trod":["stepped"],"treading":["stepping"],"trodden":["stepped"],"stroll":["walk"],"strolls":["walks"],"strolled":["walked"],"strolling":["walking"],"amble":["walk"],"ambles":["walks"],"ambled":["walked"],"ambling":["walking"],"head":["go"],"heads":["goes"],"headed":["went","gone"],"heading":["going"],"arrive":["come"],"arrives":["comes"],"arrived":["came","come"],"arriving":["coming"],"depart":["leave"],"departs":["leaves"],"departed":["left"],"departing":["leaving"],"exit":["leave"],"exits":["leaves"],"exited":["left"],"exiting":["leaving"],"get out of":["leave"],"gets out of":["leaves"],"got out of":["left"],"getting out of":["leaving"],"come back":["return","returned"],"comes back":["returns"],"came back":["returned"],"coming back":["returning"],"go back":["return"],"goes back":["returns"],"went back":["returned"],"going back":["returning"],"gone back":["returned"],"journey":["travel"],"journeys":["travels"],"journeyed":["traveled"],"journeying":["traveling"],"notice":["see"],"notices":["sees"],"noticed":["saw","seen"],"noticing":["seeing"],"spot":["see"],"spots":["sees"],"spotted":["saw","seen"],"spotting":["seeing"],"look at":["look"],"looks at":["looks"],"looked at":["looked"],"looking at":["looking"],"overhear":["hear"],"overhears":["hears"],"overheard":["heard"],"overhearing":["hearing"],"listen to":["listen"],"listens to":["listens"],"listened to":["listened"],"listening to":["listening"],"utter":["say"],"utters":["says"],"uttered":["said"],"uttering":["saying"],"talk":["speak"],"talks":["speaks"],"talked":["spoke","spoken"],"talking":["speaking"],"inform":["tell"],"informs":["tells"],"informed":["told"],"informing":["telling"],"inquire":["ask"],"inquires":["asks"],"inquired":["asked"],"inquiring":["asking"],"enquire":["ask"],"enquires":["asks"],"enquired":["asked"],"enquiring":["asking"],"reply":["answer"],"replies":["answers"],"replied":["answered"],"replying":["answering"],"respond":["answer"],"responds":["answers"],"responded":["answered"],"responding":["answering"],"create":["make"],"creates":["makes"],"created":["made"],"creating":["making"],"construct":["build"],"constructs":["builds"],"constructed":["built"],"constructing":["building"],"obtain":["get"],"obtains":["gets"],"obtained":["got"],"obtaining":["getting"],"acquire":["get"],"acquires":["gets"],"acquired":["got"],"acquiring":["getting"],"hand over":["give"],"hands over":["gives"],"handed over":["gave","given"],"handing over":["giving"],"provide":["give"],"provides":["gives"],"provided":["gave","given"],"providing":["giving"],"pick up":["take"],"picks up":["takes"],"picked up":["took","taken"],"picking up":["taking"],"discover":["find"],"discovers":["finds"],"discovered":["found"],"discovering":["finding"],"locate":["find"],"locates":["finds"],"located":["found"],"locating":["finding"],"misplace":["lose"],"misplaces":["loses"],"misplaced":["lost"],"misplacing":["losing"],"purchase":["buy"],"purchases":["buys"],"purchased":["bought"],"purchasing":["buying"],"vend":["sell"],"vends":["sells"],"vended":["sold"],"vending":["selling"],"begin":["start"],"begins":["starts"],"began":["started"],"beginning":["starting"],"begun":["started"],"commence":["start"],"commences":["starts"],"commenced":["started"],"commencing":["starting"],"complete":["finish"],"completes":["finishes"],"completed":["finished"],"completing":["finishing"],"conclude":["finish"],"concludes":["finishes"],"concluded":["finished"],"concluding":["finishing"],"halt":["stop"],"halts":["stops"],"halted":["stopped"],"halting":["stopping"],"cease":["stop"],"ceases":["stops"],"ceased":["stopped"],"ceasing":["stopping"],"shut":["close","closed"],"shuts":["closes"],"shutting":["closing"],"assist":["help"],"assists":["helps"],"assisted":["helped"],"assisting":["helping"],"aids":["helps"],"aided":["helped"],"aiding":["helping"],"require":["need"],"requires":["needs"],"required":["needed"],"requiring":["needing"],"desire":["want"],"desires":["wants"],"desired":["wanted"],"desiring":["wanting"],"wish for":["want"],"wishes for":["wants"],"wished for":["wanted"],"wishing for":["wanting"],"enjoy":["like"],"enjoys":["likes"],"enjoyed":["liked"],"enjoying":["liking"],"ponder":["think"],"ponders":["thinks"],"pondered":["thought"],"pondering":["thinking"],"consider":["think"],"considers":["thinks"],"considered":["thought"],"considering":["thinking"],"recall":["remember"],"recalls":["remembers"],"recalled":["remembered"],"recalling":["remembering"],"comprehend":["understand"],"comprehends":["understands"],"comprehended":["understood"],"comprehending":["understanding"],"select":["choose"],"selects":["chooses"],"selected":["chose","chosen"],"selecting":["choosing"],"pick":["choose"],"picks":["chooses"],"picked":["chose","chosen"],"picking":["choosing"],"attempt":["try"],"attempts":["tries"],"attempted":["tried"],"attempting":["trying"],"occur":["happen"],"occurs":["happens"],"occurred":["happened"],"occurring":["happening"],"take place":["happen"],"takes place":["happens"],"took place":["happened"],"taking place":["happening"],"taken place":["happened"],"slumber":["sleep"],"slumbers":["sleeps"],"slumbered":["slept"],"slumbering":["sleeping"],"relax":["rest"],"relaxes":["rests"],"relaxed":["rested"],"relaxing":["resting"],"remain":["stay"],"remains":["stays"],"remained":["stayed"],"remaining":["staying"],"encounter":["meet"],"encounters":["meets"],"encountered":["met"],"encountering":["meeting"],"alter":["change"],"alters":["changes"],"altered":["changed"],"altering":["changing"],"modify":["change"],"modifies":["changes"],"modified":["changed"],"modifying":["changing"],"rinse":["wash"],"rinses":["washes"],"rinsed":["washed"],"rinsing":["washing"],"tidy":["clean"],"tidies":["cleans"],"tidied":["cleaned"],"tidying":["cleaning"],"transport":["carry"],"transports":["carries"],"transported":["carried"],"transporting":["carrying"],"dispatch":["send"],"dispatches":["sends"],"dispatched":["sent"],"dispatching":["sending"],"conceal":["hide"],"conceals":["hides"],"concealed":["hid","hidden"],"concealing":["hiding"],"develop":["grow"],"develops":["grows"],"developed":["grew","grown"],"developing":["growing"],"drop":["fall"],"drops":["falls"],"dropped":["fell","fallen"],"dropping":["falling"],"jog":["run"],"jogs":["runs"],"jogged":["ran","run"],"jogging":["running"],"present":["offer"],"presents":["offers"],"presented":["offered"],"presenting":["offering"],"safeguard":["protect"],"safeguards":["protects"],"safeguarded":["protected"],"safeguarding":["protecting"],"defend":["protect"],"defends":["protects"],"defended":["protected"],"defending":["protecting"],"permit":["allow"],"permits":["allows"],"permitted":["allowed"],"permitting":["allowing"],"let":["allow","allowed"],"lets":["allows"],"letting":["allowing"],"bring down":["lower"],"brings down":["lowers"],"bringed down":["lowered"],"bringing down":["lowering"],"trailed":["followed"],"trailing":["following"],"traverse":["cross"],"traverses":["crosses"],"traversed":["crossed"],"traversing":["crossing"],"right now":["now"],"at once":["now"],"immediately":["now"],"shortly":["soon"],"frequently":["often"],"occasionally":["sometimes"],"continually":["always"],"not ever":["never"],"once more":["again"],"merely":["only"],"just":["only"],"really":["very"],"extremely":["very"],"close to":["near"],"nearby":["near"],"next to":["near"],"beneath":["under"],"below":["under"],"above":["over"],"within":["inside"],"prior to":["before"],"following":["after"],"along with":["with"],"though":["although"],"even though":["although"],"yet":["but"],"have to":["must"],"need to":["must"],"ought to":["should"],"be able to":["can"],"travelled":["traveled"],"travelling":["traveling"],"learnt":["learned"],"whilst":["while"],"all right":["good"],"impolite":["rude"],"disrespectful":["rude"],"merciless":["cruel"],"heartless":["cruel"],"deceitful":["dishonest"],"courageous":["brave"],"valiant":["brave"],"truthful":["honest"],"note":["message"],"go into":["enter"],"come into":["enter"],"caution":["warn"],"cautions":["warns"],"cautioned":["warned"],"cautioning":["warning"],"decline":["refuse"],"declines":["refuses"],"declined":["refused"],"declining":["refusing"],"dude":["bro"],"bruv":["bro"],"buddy":["bro"],"foolish":["stupid"],"idiotic":["stupid"],"dumb":["stupid"],"honestly":["genuinely"],"truthfully":["genuinely"],"sincerely":["genuinely"],"in fact":["actually"],"so much as":["even"],"perhaps":["maybe"],"anyhow":["anyway"],"puzzled":["confused"],"bewildered":["confused"],"irritating":["annoying"],"damned":["damn"],"bloody":["damn"],"fucking":["damn"],"ok":["okay"],"alright":["okay"],"concerning":["about","worrying"],"fellow":["comrade"],"fellows":["comrades"],"associate":["comrade"],"associates":["comrades"],"film":["movie"],"films":["movies"],"motion picture":["movie"],"maneuver":["move"],"maneuvers":["moves"],"manoeuvre":["move"],"manoeuvres":["moves"],"match":["game"],"matches":["games"],"tune":["song"],"tunes":["songs"],"image":["picture"],"images":["pictures"],"photo":["picture"],"photoes":["pictures"],"photograph":["picture"],"photographs":["pictures"],"display":["screen"],"displays":["screens"],"actress":["actor"],"actresses":["actors"],"performer":["actor"],"performers":["actors"],"persona":["character"],"personas":["characters"],"programme":["show"],"programmes":["shows"],"program":["show"],"programs":["shows"],"spectators":["audience"],"spectatorses":["audiences"],"noise":["sound"],"noises":["sounds"],"jest":["joke"],"jests":["jokes"],"amusement":["fun"],"amusements":["funs"],"focus":["attention"],"focuses":["attentions"],"enthusiasm":["excitement"],"enthusiasms":["excitements"],"issue":["problem"],"issues":["problems"],"cause":["reason"],"causes":["reasons"],"error":["mistake"],"errors":["mistakes"],"query":["question"],"queries":["questions"],"chat":["conversation"],"chats":["conversations"],"discussion":["conversation"],"discussions":["conversations"],"viewpoint":["opinion"],"viewpoints":["opinions"],"opportunity":["chance"],"opportunities":["chances"],"outcome":["result"],"outcomes":["results"],"occasion":["event"],"occasions":["events"],"instant":["moment"],"instants":["moments"],"material":["stuff"],"materials":["stuffs"],"uninterested":["bored"],"tedious":["boring"],"dull":["boring"],"intriguing":["interesting"],"fascinating":["interesting"],"enthusiastic":["excited"],"thrilled":["excited"],"thrilling":["exciting"],"irritated":["annoyed"],"astonished":["surprised"],"amazed":["surprised"],"unexpected":["surprising"],"concerned":["worried"],"anxious":["worried"],"comfy":["comfortable"],"occupied":["busy"],"feasible":["possible"],"ordinary":["normal"],"usual":["normal"],"flawless":["perfect"],"sufficiently":["enough"],"nearly":["almost"],"particularly":["especially"],"view":["watch"],"views":["watches"],"viewed":["watched"],"viewing":["watching"],"intrigue":["interest"],"intrigues":["interests"],"intrigued":["interested"],"thrill":["excite"],"thrills":["excites"],"irritate":["annoy"],"irritates":["annoys"],"bother":["annoy"],"bothers":["annoys"],"bothered":["annoyed"],"bothering":["annoying"],"astonish":["surprise"],"astonishes":["surprises"],"astonishing":["surprising"],"amaze":["surprise"],"amazes":["surprises"],"amazing":["surprising"],"concern":["worry"],"concerns":["worries"],"frighten":["scare"],"frightens":["scares"],"frightening":["scaring"],"exhaust":["tire"],"exhausts":["tires"],"exhausting":["tiring"],"envision":["imagine"],"envisions":["imagines"],"envisioned":["imagined"],"envisioning":["imagining"],"anticipate":["expect"],"anticipates":["expects"],"anticipated":["expected"],"anticipating":["expecting"],"clarify":["explain"],"clarifies":["explains"],"clarified":["explained"],"clarifying":["explaining"],"determine":["decide"],"determines":["decides"],"determined":["decided"],"determining":["deciding"],"recommend":["suggest"],"recommends":["suggests"],"recommended":["suggested"],"recommending":["suggesting"],"rush":["hurry"],"rushes":["hurries"],"rushed":["hurried"],"rushing":["hurrying"],"demonstrate":["show"],"demonstrates":["shows"],"demonstrated":["showed"],"demonstrating":["showing"],"quantity":["amount"],"quantities":["amounts"],"chunk":["piece"],"chunks":["pieces"],"fragment":["piece"],"fragments":["pieces"],"serving":["portion"],"servings":["portions"],"type":["kind"],"types":["kinds"],"variety":["kind"],"varieties":["kinds"],"pack":["packet"],"packs":["packets"],"kilo":["kilogram"],"kiloes":["kilograms"],"liter":["litre"],"liters":["litres"],"cheddar":["cheddar cheese"],"cookie":["biscuit"],"cookies":["biscuits"],"flavour":["taste"],"flavours":["tastes"],"flavor":["taste"],"flavors":["tastes"],"scent":["smell"],"scents":["smells"],"tasty":["delicious"],"ingest":["consume"],"ingests":["consumes"],"ingested":["consumed"],"ingesting":["consuming"],"slice":["cut"],"slices":["cuts"],"sliced":["cut"],"slicing":["cutting"],"chop":["cut"],"chops":["cuts"],"choped":["cut"],"choping":["cutting"],"blend":["mix"],"blends":["mixes"],"blended":["mixed"],"blending":["mixing"],"vast":["enormous"],"immense":["enormous"],"massive":["enormous"],"a lot of":["much","many"],"lots of":["much","many"],"plenty of":["much","many"]},
 synonymGroups:[["noun","dog",["hound","pooch"]],["noun","child",["kid","youngster"]],["noun","person",["individual"]],["noun","friend",["pal","mate","companion"]],["noun","shop",["store"]],["noun","street",["streetway"]],["noun","road",["roadway"]],["noun","city",["metropolis"]],["noun","village",["hamlet"]],["noun","forest",["woods","woodland"]],["noun","house",["dwelling","residence"]],["noun","room",["chamber"]],["noun","bag",["sack"]],["noun","clothing",["clothes","apparel"]],["noun","money",["cash"]],["noun","food",["provisions"]],["noun","meal",["repast"]],["noun","autumn",["fall"]],["noun","harbour",["harbor"]],["noun","neighbour",["neighbor"]],["noun","journey",["trip","voyage"]],["noun","illness",["sickness","ailment"]],["noun","joy",["happiness","delight"]],["noun","sadness",["sorrow","unhappiness"]],["noun","anger",["rage"]],["noun","fear",["dread"]],["noun","help",["assistance","aid"]],["noun","story",["tale"]],["noun","idea",["notion","concept"]],["noun","choice",["option"]],["noun","border",["boundary","frontier"]],["noun","government",["administration"]],["noun","kingdom",["realm"]],["noun","leader",["chief","chieftain"]],["noun","fortress",["stronghold","fort"]],["noun","gate",["gateway"]],["noun","guard",["sentry","watchman","lookout"]],["noun","bandit",["robber","brigand"]],["noun","path",["trail","footpath"]],["noun","ruin",["remnant"]],["noun","inn",["tavern"]],["noun","traveller",["traveler","wayfarer"]],["noun","tower",["turret"]],["noun","silence",["quietness","stillness"]],["noun","ally",["supporter"]],["noun","enemy",["foe","adversary"]],["adjective","big",["large","huge"]],["adjective","small",["little","tiny"]],["adjective","fast",["quick","rapid","swift"]],["adjective","slow",["sluggish"]],["adjective","beautiful",["pretty","lovely","gorgeous"]],["adjective","good",["fine","excellent","nice"]],["adjective","bad",["awful","terrible"]],["adjective","old",["ancient","aged"]],["adjective","new",["recent","brand new"]],["adjective","cold",["chilly"]],["adjective","warm",["mild"]],["adjective","happy",["glad","cheerful","pleased"]],["adjective","sad",["unhappy","miserable"]],["adjective","angry",["mad","furious"]],["adjective","afraid",["scared","frightened","terrified"]],["adjective","tired",["weary","exhausted"]],["adjective","quiet",["silent","hushed"]],["adjective","loud",["noisy"]],["adjective","strange",["odd","weird","unusual"]],["adjective","easy",["simple"]],["adjective","difficult",["hard","challenging"]],["adjective","right",["correct"]],["adjective","wrong",["incorrect"]],["adjective","safe",["secure"]],["adjective","important",["significant","crucial"]],["adjective","different",["distinct"]],["adjective","same",["identical"]],["adjective","free",["unrestricted"]],["adjective","dirty",["filthy"]],["adjective","clean",["spotless"]],["adjective","strong",["powerful"]],["adjective","weak",["feeble"]],["adjective","grey",["gray"]],["adjective","hungry",["starving"]],["adjective","thirsty",["parched"]],["verb","move",["shift","relocate"]],["verb","step",["stride","tread"]],["verb","walk",["stroll","amble"]],["verb","go",["head"]],["verb","come",["arrive"]],["verb","leave",["depart","exit","get out of"]],["verb","return",["come back","go back"]],["verb","travel",["journey"]],["verb","see",["notice","spot"]],["verb","look",["look at"]],["verb","hear",["overhear"]],["verb","listen",["listen to"]],["verb","say",["utter"]],["verb","speak",["talk"]],["verb","tell",["inform"]],["verb","ask",["inquire","enquire"]],["verb","answer",["reply","respond"]],["verb","make",["create"]],["verb","build",["construct"]],["verb","get",["obtain","acquire"]],["verb","give",["hand over","provide"]],["verb","take",["pick up"]],["verb","find",["discover","locate"]],["verb","lose",["misplace"]],["verb","buy",["purchase"]],["verb","sell",["vend"]],["verb","start",["begin","commence"]],["verb","finish",["complete","conclude"]],["verb","stop",["halt","cease"]],["verb","close",["shut"]],["verb","help",["assist","aid"]],["verb","need",["require"]],["verb","want",["desire","wish for"]],["verb","like",["enjoy"]],["verb","think",["ponder","consider"]],["verb","remember",["recall"]],["verb","understand",["comprehend"]],["verb","choose",["select","pick"]],["verb","try",["attempt"]],["verb","happen",["occur","take place"]],["verb","sleep",["slumber"]],["verb","rest",["relax"]],["verb","stay",["remain"]],["verb","meet",["encounter"]],["verb","change",["alter","modify"]],["verb","wash",["rinse"]],["verb","clean",["tidy"]],["verb","carry",["transport"]],["verb","send",["dispatch"]],["verb","hide",["conceal"]],["verb","grow",["develop"]],["verb","fall",["drop"]],["verb","run",["jog"]],["verb","offer",["present"]],["verb","protect",["safeguard","defend"]],["verb","allow",["permit","let"]],["verb","lower",["bring down"]],["verb","follow",["trail"]],["verb","cross",["traverse"]],["adverb","now",["right now","at once","immediately"]],["adverb","soon",["shortly"]],["adverb","often",["frequently"]],["adverb","sometimes",["occasionally"]],["adverb","always",["continually"]],["adverb","never",["not ever"]],["adverb","again",["once more"]],["adverb","only",["merely","just"]],["adverb","very",["really","extremely"]],["preposition","near",["close to","nearby","next to"]],["preposition","under",["beneath","below"]],["preposition","over",["above"]],["preposition","inside",["within"]],["preposition","before",["prior to"]],["preposition","after",["following"]],["preposition","with",["along with"]],["conjunction","although",["though","even though"]],["conjunction","but",["yet"]],["conjunction","because",[]],["modal","must",["have to","need to"]],["modal","should",["ought to"]],["modal","can",["be able to"]],["adjective","rude",["impolite","disrespectful"]],["adjective","cruel",["merciless","heartless"]],["adjective","dishonest",["deceitful"]],["adjective","brave",["courageous","valiant"]],["adjective","honest",["truthful"]],["noun","message",["note"]],["verb","enter",["go into","come into"]],["verb","warn",["caution"]],["verb","refuse",["decline"]],["noun","bro",["dude","bruv","buddy"]],["adjective","stupid",["foolish","idiotic","dumb"]],["adverb","genuinely",["honestly","truthfully","sincerely"]],["adverb","actually",["in fact"]],["adverb","even",["so much as"]],["adverb","maybe",["perhaps"]],["adverb","anyway",["anyhow"]],["adjective","confused",["puzzled","bewildered"]],["adjective","annoying",["irritating"]],["adverb","damn",["damned","bloody","fucking"]],["expression","okay",["ok","alright"]],["noun","comrade",["fellow","associate"]],["noun","movie",["film","motion picture"]],["noun","move",["maneuver","manoeuvre"]],["noun","game",["match"]],["noun","song",["tune"]],["noun","picture",["image","photo","photograph"]],["noun","screen",["display"]],["noun","actor",["actress","performer"]],["noun","character",["persona"]],["noun","show",["programme","program"]],["noun","audience",["spectators"]],["noun","sound",["noise"]],["noun","joke",["jest"]],["noun","fun",["amusement"]],["noun","attention",["focus"]],["noun","excitement",["enthusiasm"]],["noun","problem",["issue"]],["noun","reason",["cause"]],["noun","mistake",["error"]],["noun","question",["query"]],["noun","conversation",["chat","discussion"]],["noun","opinion",["viewpoint"]],["noun","chance",["opportunity"]],["noun","result",["outcome"]],["noun","event",["occasion"]],["noun","moment",["instant"]],["noun","stuff",["material"]],["adjective","bored",["uninterested"]],["adjective","boring",["tedious","dull"]],["adjective","interesting",["intriguing","fascinating"]],["adjective","excited",["enthusiastic","thrilled"]],["adjective","exciting",["thrilling"]],["adjective","annoyed",["irritated"]],["adjective","surprised",["astonished","amazed"]],["adjective","surprising",["unexpected"]],["adjective","worried",["concerned","anxious"]],["adjective","comfortable",["comfy"]],["adjective","busy",["occupied"]],["adjective","possible",["feasible"]],["adjective","normal",["ordinary","usual"]],["adjective","perfect",["flawless"]],["adverb","enough",["sufficiently"]],["adverb","almost",["nearly"]],["adverb","especially",["particularly"]],["verb","watch",["view"]],["verb","interest",["intrigue"]],["verb","excite",["thrill"]],["verb","annoy",["irritate","bother"]],["verb","surprise",["astonish","amaze"]],["verb","worry",["concern"]],["verb","scare",["frighten"]],["verb","tire",["exhaust"]],["verb","imagine",["envision"]],["verb","expect",["anticipate"]],["verb","explain",["clarify"]],["verb","decide",["determine"]],["verb","suggest",["recommend"]],["verb","hurry",["rush"]],["verb","show",["demonstrate"]],["noun","amount",["quantity"]],["noun","piece",["chunk","fragment"]],["noun","portion",["serving"]],["noun","kind",["type","variety"]],["noun","packet",["pack"]],["noun","kilogram",["kilo"]],["noun","litre",["liter"]],["noun","cheddar cheese",["cheddar"]],["noun","biscuit",["cookie"]],["noun","taste",["flavour","flavor"]],["noun","smell",["scent"]],["adjective","delicious",["tasty"]],["verb","consume",["ingest"]],["verb","cut",["slice","chop"]],["verb","mix",["blend"]],["adjective","enormous",["vast","immense","massive"]]],
 words:[
 ["amount","mængd","noun","Food, quantities & preparation"],
 ["piece","styk","noun","Food, quantities & preparation"],
 ["slice","șivă","noun","Food, quantities & preparation"],
 ["portion","delă","noun","Food, quantities & preparation"],
 ["kind","sortă","noun","Food, quantities & preparation"],
 ["group","flok","noun","Food, quantities & preparation"],
 ["bottle","flaskă","noun","Food, quantities & preparation"],
 ["glass","glas","noun","Food, quantities & preparation"],
 ["basket","korb","noun","Food, quantities & preparation"],
 ["packet","paket","noun","Food, quantities & preparation"],
 ["kilogram","kilogram","noun","Food, quantities & preparation"],
 ["gram","gramm","noun","Food, quantities & preparation"],
 ["litre","litră","noun","Food, quantities & preparation"],
 ["cheddar cheese","țedărkes","noun","Food, quantities & preparation"],
 ["mozzarella","motzarelă","noun","Food, quantities & preparation"],
 ["rice","ris","noun","Food, quantities & preparation"],
 ["pasta","pastă","noun","Food, quantities & preparation"],
 ["noodles","nudelen","noun","Food, quantities & preparation"],
 ["chicken","honă","noun","Food, quantities & preparation"],
 ["beef","kuflæș","noun","Food, quantities & preparation"],
 ["pork","svinflæș","noun","Food, quantities & preparation"],
 ["tomato","tomată","noun","Food, quantities & preparation"],
 ["cucumber","gurkă","noun","Food, quantities & preparation"],
 ["lettuce","salată","noun","Food, quantities & preparation"],
 ["cabbage","varză","noun","Food, quantities & preparation"],
 ["pepper","pipăr","noun","Food, quantities & preparation"],
 ["garlic","hvitluk","noun","Food, quantities & preparation"],
 ["oil","olă","noun","Food, quantities & preparation"],
 ["flour","mel","noun","Food, quantities & preparation"],
 ["honey","hunig","noun","Food, quantities & preparation"],
 ["chocolate","șokoladă","noun","Food, quantities & preparation"],
 ["cake","kakă","noun","Food, quantities & preparation"],
 ["biscuit","biskit","noun","Food, quantities & preparation"],
 ["sandwich","brædstyk","noun","Food, quantities & preparation"],
 ["snack","litmet","noun","Food, quantities & preparation"],
 ["dessert","sotmet","noun","Food, quantities & preparation"],
 ["recipe","metrad","noun","Food, quantities & preparation"],
 ["ingredient","metdel","noun","Food, quantities & preparation"],
 ["taste","smæk","noun","Food, quantities & preparation"],
 ["smell","duft","noun","Food, quantities & preparation"],
 ["delicious","smækig","adjective","Food, quantities & preparation"],
 ["spicy","pipărig","adjective","Food, quantities & preparation"],
 ["salty","sæltig","adjective","Food, quantities & preparation"],
 ["hot","hat","adjective","Food, quantities & preparation"],
 ["ripe","rip","adjective","Food, quantities & preparation"],
 ["raw","ra","adjective","Food, quantities & preparation"],
 ["cooked","kokd","adjective","Food, quantities & preparation"],
 ["consume","forbrukan","verb","Food, quantities & preparation"],
 ["taste","smækan","verb","Food, quantities & preparation"],
 ["smell","duftan","verb","Food, quantities & preparation"],
 ["cut","snidan","verb","Food, quantities & preparation"],
 ["mix","mengdan","verb","Food, quantities & preparation"],
 ["add","tillegan","verb","Food, quantities & preparation"],
 ["pour","gitan","verb","Food, quantities & preparation"],
 ["share","delan","verb","Food, quantities & preparation"],
 ["serve","dælan","verb","Food, quantities & preparation"],
 ["prepare","forrædan","verb","Food, quantities & preparation"],
 ["enormous","ormærlig","adjective","Food, quantities & preparation"],
 ["numerous","mænig","adjective","Food, quantities & preparation"],
 ["many","mang","quantifier","Grammar & quantities"],
 ["much","mik","quantifier","Grammar & quantities"],
 ["some","sum","quantifier","Grammar & quantities"],
 ["few","fa","quantifier","Grammar & quantities"],
 ["several","fler","quantifier","Grammar & quantities"],
 ["all","al","quantifier","Grammar & quantities"],
 ["enough","nog","quantifier","Grammar & quantities"],
 ["more","mer","quantifier","Grammar & quantities"],
 ["less","min","quantifier","Grammar & quantities"],
 ["fewer","far","quantifier","Grammar & quantities"],
 ["most","mest","quantifier","Grammar & quantities"],
 ["comrade","samfer","noun","Entertainment & everyday reactions"],
 ["movie","film","noun","Entertainment & everyday reactions"],
 ["move","mov","noun","Entertainment & everyday reactions"],
 ["game","spæl","noun","Entertainment & everyday reactions"],
 ["music","muzik","noun","Entertainment & everyday reactions"],
 ["song","sang","noun","Entertainment & everyday reactions"],
 ["picture","bild","noun","Entertainment & everyday reactions"],
 ["screen","șerm","noun","Entertainment & everyday reactions"],
 ["actor","leikăr","noun","Entertainment & everyday reactions"],
 ["character","figura","noun","Entertainment & everyday reactions"],
 ["scene","șenă","noun","Entertainment & everyday reactions"],
 ["show","șau","noun","Entertainment & everyday reactions"],
 ["audience","herend","noun","Entertainment & everyday reactions"],
 ["sound","ludă","noun","Entertainment & everyday reactions"],
 ["joke","skemt","noun","Entertainment & everyday reactions"],
 ["fun","gamăn","noun","Entertainment & everyday reactions"],
 ["boredom","ledom","noun","Entertainment & everyday reactions"],
 ["interest","hugvil","noun","Entertainment & everyday reactions"],
 ["attention","mærkvil","noun","Entertainment & everyday reactions"],
 ["excitement","gladfyr","noun","Entertainment & everyday reactions"],
 ["problem","trud","noun","Entertainment & everyday reactions"],
 ["reason","grund","noun","Entertainment & everyday reactions"],
 ["mistake","misstep","noun","Entertainment & everyday reactions"],
 ["question","fræg","noun","Entertainment & everyday reactions"],
 ["conversation","samsprek","noun","Entertainment & everyday reactions"],
 ["opinion","mening","noun","Entertainment & everyday reactions"],
 ["decision","țyrord","noun","Entertainment & everyday reactions"],
 ["chance","șans","noun","Entertainment & everyday reactions"],
 ["result","utkum","noun","Entertainment & everyday reactions"],
 ["event","happing","noun","Entertainment & everyday reactions"],
 ["moment","stund","noun","Entertainment & everyday reactions"],
 ["stuff","stof","noun","Entertainment & everyday reactions"],
 ["bored","ledig","adjective","Entertainment & everyday reactions"],
 ["boring","ledsam","adjective","Entertainment & everyday reactions"],
 ["interesting","hugvilig","adjective","Entertainment & everyday reactions"],
 ["excited","fyrblid","adjective","Entertainment & everyday reactions"],
 ["exciting","fyrblidig","adjective","Entertainment & everyday reactions"],
 ["annoyed","ergd","adjective","Entertainment & everyday reactions"],
 ["surprised","mird","adjective","Entertainment & everyday reactions"],
 ["surprising","mirig","adjective","Entertainment & everyday reactions"],
 ["worried","sorgig","adjective","Entertainment & everyday reactions"],
 ["disappointed","nadlos","adjective","Entertainment & everyday reactions"],
 ["comfortable","mildsam","adjective","Entertainment & everyday reactions"],
 ["uncomfortable","onmild","adjective","Entertainment & everyday reactions"],
 ["busy","bisig","adjective","Entertainment & everyday reactions"],
 ["possible","motig","adjective","Entertainment & everyday reactions"],
 ["impossible","onmotig","adjective","Entertainment & everyday reactions"],
 ["normal","vanlig","adjective","Entertainment & everyday reactions"],
 ["serious","ernst","adjective","Entertainment & everyday reactions"],
 ["perfect","fulgod","adjective","Entertainment & everyday reactions"],
 ["enough","genog","adverb","Entertainment & everyday reactions"],
 ["still","enn","adverb","Entertainment & everyday reactions"],
 ["yet","ennnu","adverb","Entertainment & everyday reactions"],
 ["almost","mæstli","adverb","Entertainment & everyday reactions"],
 ["especially","særmest","adverb","Entertainment & everyday reactions"],
 ["bore","ledan","verb","Entertainment & everyday reactions"],
 ["watch","vakansean","verb","Entertainment & everyday reactions"],
 ["interest","hugvilan","verb","Entertainment & everyday reactions"],
 ["excite","fyrblidan","verb","Entertainment & everyday reactions"],
 ["annoy","ergan","verb","Entertainment & everyday reactions"],
 ["surprise","miran","verb","Entertainment & everyday reactions"],
 ["worry","sorgan","verb","Entertainment & everyday reactions"],
 ["disappoint","nadlosan","verb","Entertainment & everyday reactions"],
 ["scare","fyrhtan","verb","Entertainment & everyday reactions"],
 ["tire","mædan","verb","Entertainment & everyday reactions"],
 ["imagine","bildan","verb","Entertainment & everyday reactions"],
 ["expect","venan","verb","Entertainment & everyday reactions"],
 ["explain","șæran","verb","Entertainment & everyday reactions"],
 ["decide","țyrordan","verb","Entertainment & everyday reactions"],
 ["discuss","samsprekan","verb","Entertainment & everyday reactions"],
 ["suggest","radan","verb","Entertainment & everyday reactions"],
 ["hurry","snellan","verb","Entertainment & everyday reactions"],
 ["show","șavan","verb","Entertainment & everyday reactions"],
 ["plan","ætlan","noun","Conversation"],
 ["answer","svar","noun","Conversation"],
 ["bro","broþ","noun","Conversation"],
 ["stupid","dolig","adjective","Conversation"],
 ["genuinely","soþli","adverb","Conversation"],
 ["actually","verli","adverb","Conversation"],
 ["even","jafnli","adverb","Conversation"],
 ["about","um","preposition","Conversation"],
 ["sound","ludan","verb","Conversation"],
 ["seem","șinan","verb","Conversation"],
 ["lie","lygan","verb","Conversation"],
 ["mean","menan","verb","Conversation"],
 ["sorry","sarig","adjective","Conversation"],
 ["confused","vildig","adjective","Conversation"],
 ["annoying","ergig","adjective","Conversation"],
 ["funny","læhlig","adjective","Conversation"],
 ["okay","væla","expression","Conversation"],
 ["damn","verdomli","adverb","Conversation"],
 ["seriously","ernstli","adverb","Conversation"],
 ["whatever","hvatæfre","expression","Conversation"],
 ["anyway","andærlei","adverb","Conversation"],
 ["maybe","motsva","adverb","Conversation"],
 ["fine","vælig","adjective","Conversation"],
 ["probably","venli","adverb","Conversation"],
 ["exactly","riștli","adverb","Conversation"],
 ["rude","grof","adjective","World & dialogue"],
 ["cruel","grym","adjective","World & dialogue"],
 ["dishonest","onsoþig","adjective","World & dialogue"],
 ["brave","dærig","adjective","World & dialogue"],
 ["patient","þolig","adjective","World & dialogue"],
 ["honest","soþfast","adjective","World & dialogue"],
 ["suspicious","mistrolig","adjective","World & dialogue"],
 ["lantern","lehtkop","noun","World & dialogue"],
 ["message","bodord","noun","World & dialogue"],
 ["warn","varnan","verb","World & dialogue"],
 ["invite","laþan","verb","World & dialogue"],
 ["enter","ingangan","verb","World & dialogue"],
 ["promise","belovan","verb","World & dialogue"],
 ["refuse","neitan","verb","World & dialogue"],
 ["agree","samþan","verb","World & dialogue"],
 ["lecherous","lustig","adjective","World & dialogue"],
 ["kill","slean","verb","World & dialogue"],
 ["step","fotmovan","verb","World & dialogue"],
 ["look","skavan","verb","World & dialogue"],
 ["offer","bodenan","verb","World & dialogue"],
 ["protect","vaktan","verb","World & dialogue"],
 ["allow","latenan","verb","World & dialogue"],
 ["lower","sænkan","verb","World & dialogue"],
 ["follow","folgan","verb","World & dialogue"],
 ["cross","þveran","verb","World & dialogue"],
 ["food","met","noun","World & dialogue"],
 ["gate","gat","noun","World & dialogue"],
 ["guard","vaktăr","noun","World & dialogue"],
 ["bandit","rovăr","noun","World & dialogue"],
 ["path","sti","noun","World & dialogue"],
 ["ruin","ruină","noun","World & dialogue"],
 ["inn","vertshus","noun","World & dialogue"],
 ["traveller","farend","noun","World & dialogue"],
 ["tower","turn","noun","World & dialogue"],
 ["silence","stilhet","noun","World & dialogue"],
 ["ally","sampriat","noun","World & dialogue"],
 ["enemy","feond","noun","World & dialogue"],
 ["away","avæg","adverb","World & dialogue"],
 ["out","ut","adverb","World & dialogue"],
 ["back","bak","adverb","World & dialogue"],
 ["forward","fram","adverb","World & dialogue"],
 ["up","up","adverb","World & dialogue"],
 ["down","ned","adverb","World & dialogue"],
 ["please","bidde","adverb","World & dialogue"],
 ["anterior aspect","ju","particle","Grammar"],
 ["passive voice","ves","particle","Grammar"],
 ["reflexive self","sek","pronoun-reflexive","Grammar"],
 ["one's own","sines","possessive-reflexive","Grammar"],
 ["each other","samsek","pronoun-reciprocal","Grammar"],
 ["while","medan","conjunction","Connectors & time"],
 ["although","þoh","conjunction","Connectors & time"],
 ["therefore","forþi","conjunction","Connectors & time"],
 ["soon","snat","adverb","Connectors & time"],
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
 ["Quantities and food (v0.8.5)","Quantity and container nouns support a productive of construction with av and an unmarked substance phrase, e.g. a cup of milk. Quantifiers distinguish count and mass nouns. Love permits a same-subject verb complement. Food names, preparation verbs and synonyms are ordinary lexical entries, not recorded sentences."],
 ["Everyday reactions (v0.8.4)","Adds distinct nouns for movie/film and move, entertainment and discussion vocabulary, and productive emotion verbs (bore, annoy, interest, excite, worry, surprise). Demonstratives may stand independently as subjects or objects. Direct address may precede or follow a clause. Boring as an adjective differs from boring as a progressive verb; the grammar chooses based on the surrounding words."],
 ["Conversational register (v0.8.3)","Broþ is an informal address; dolig means foolish or stupid. Soþli expresses sincerity, verli factual emphasis, jafnli scalar even. Verdomli is a coarse intensifier, not a literal translation of sexual vocabulary. Sound and seem take unmarked predicative adjectives; feel accepts adjectives and noun complements. What/who questions use the existing fronted interrogative pattern; stranded English prepositions are placed before the interrogative. Contractions and comma-separated clauses are parsed individually where possible."],
 ["Clause-aware translation (v0.8.2)","Full grammar is tried first. Independent clauses and direct address can be parsed separately. When an unknown noun or adjective occupies a recognisable slot, temporary placeholders retain the English word in brackets while the rest of the grammar is generated. Ambiguous cases are not guessed. The temporary vocabulary is never stored. Contractions are expanded before parsing; fallback remains explicitly labelled."],
 ["Flexible English input (v0.8.1)","English synonyms, spelling variants and inflected paraphrases are input aliases, not new native roots. The engine tries the original clause first, then bounded local alternatives validated by the grammar. Reverse translation uses canonical English meanings; nuances may be lost. Foot movement uses fotmovan (step), general movement movan, and directional adverbs ut, avæg, bak, fram, up, ned. The new World & dialogue vocabulary supports fictional settings. This is still a rule-based translator, not a neural translation service."],
 ["Tense, aspect and mood (v0.8)","Fixed order: tense/mood (nu, er, va, hed), optional anterior ju, optional progressive dur. Nu dur contracts to dur. Ju marks completion relative to reference time. Finite verbs remain bare stems: er ju = past perfect; va ju = future perfect; er ju dur = past perfect progressive. English adverbs may normalize to clause-final position."],
 ["Passive voice","Ves precedes the finite stem after negation. Simple past, present, future and conditional passives are parsed; an optional agent follows av. Compound passives are deferred."],
 ["Reflexives and reciprocity","Sek is invariant across persons; sines marks subject-owned possession; samsek is reciprocal. Pronoun-subject reflexives are implemented; noun-subject and nested reference resolution is deferred."],
 ["Independent possessives","Singular independent possessives take -ul as subject or predicate and -uta as object. English does not identify the omitted noun's number, so the parser defaults to singular."],
 ["Imperatives","A bare verb is fronted in commands without a subject or tense particle; ne precedes negative commands. Double-object commands normalize to English to-recipient form."],
 ["Subordination","Þoh although, medan while and foran before introduce comma-delimited initial clauses. Gif conditionals can combine er ju and hed ju for past counterfactuals. Embedded object clauses and broader subordination are deferred."],
 ["Non-finite forms","Infinitives end in -an; finite verbs remove -an, including after modals. A lexical strong/weak participle system and non-finite clauses are planned but not implemented. Perfect and passive finite clauses do not require participles."],
 ["Modern noun morphology","v0.7 introduces conditioned erosion: final ă disappears before vowel-initial -en/-ul/-uta unless it distinguishes two lexical roots (exceptions: kartă, hertă). Definite accusatives fuse -ul-ta → -uta and -en-le-ta → -en-la. Indefinite accusative -ta survives for animate nouns; definite, demonstrative and possessive objects are marked even when inanimate. Generic indefinite inanimate objects are unmarked. Pronouns retain distinct accusatives."],
 ["Inherited plural classes","The old front-vowel plural ending produced fossilised stem mutation in a small class: hund → hinden, hors → hersen, fot → feten, toþ → teþen, mann → mænnen. Other nouns retain regular -en. Mutations apply before article and case endings; this is a historical class, not a universal sound rule."],
 ["Adjective agreement","Attributive adjectives follow the noun and agree in number: singular rod, plural rode; final ă becomes e, final e remains unchanged. Predicative and comparative adjectives remain uninflected. No gender agreement is required."],
 ["Genitive possession","Nominal possessors follow the possessed phrase with genitive -es on the head: sverdul broþărules ikes (my brother's sword). Definite plurals take -enles; English singular 's and plural s' are parsed. Av introduces passive agents; material/source uses are planned. It is not the modern default for nominal possession."],
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
 ["Negation and questions","Place ne immediately before the verb. A yes/no question ends with li."],
 ["Dialect concepts","Aldrașnovæsk (ancient), Nordrașnovæsk (northern), Sudrașnovæsk (southern), Hohrașnovæsk (formal), Folkrașnovæsk (colloquial). These are not yet separately implemented."]
 ],
 inflectNoun(n,pl=false,def=false,caseName="nom",demo=false){
  const morphology=this.morphology;
  let r=pl?(morphology.mutating[n[1]]||n[1]):n[1];
  const marked=caseName==="acc"&&(def||demo||(morphology.animate.includes(n[0])||["guard","bandit","traveller","ally","enemy","bro","comrade","actor","character"].includes(n[0])));
  let suffix=pl?(def?(marked?"enla":"enle"):(marked?"enta":"en")):def?(marked?"uta":"ul"):(marked?"ta":"");
  if(caseName==="gen")suffix=pl&&def?"enles":suffix+"es";
  if(r.endsWith("ă")&&/^[eu]/.test(suffix)&&!morphology.elisionExceptions.includes(n[1]))r=r.slice(0,-1);
  return r+suffix;
 },
 // Grammar adapter: deliberately limited to supported regular clauses. Return null for unsupported syntax.
 // Synonyms are English input alternatives, not additional native headwords.
 lookupEnglish(input){
  const k=input.normalize("NFC").toLowerCase().trim().replace(/\s+/g," ");
  const direct=this.words.filter(w=>w[0].toLowerCase()===k);
  const canonical=new Set(this.aliases[k]||[]);
  for(const [pos,base,synonyms] of this.synonymGroups)if(synonyms.includes(k))canonical.add(base);
  const found=this.words.filter(w=>canonical.has(w[0]));
  return [...direct,...found.filter(w=>!direct.includes(w))];
 },
 normalizeEnglish(input){
  return input.replace(/’/g,"'").replace(/\b(i|you|he|she|we|they|it)'ll\b/gi,"$1 will").replace(/\b(i|you|we|they)'ve\b/gi,"$1 have").replace(/\b(i|you|he|she|we|they|it)'d\b/gi,"$1 would").replace(/\bi'm\b/gi,"I am").replace(/\b(we|you|they)'re\b/gi,"$1 are").replace(/\bwon't\b/gi,"will not").replace(/\bcan't\b/gi,"can not").replace(/\bshan't\b/gi,"will not").replace(/n['’]t\b/gi," not");
 },
 translateClause(input,reverse){
  let s=reverse?input:this.normalizeEnglish(input);
  if(!reverse){
   s=s.replace(/\b([\p{L}\p{M}]+)\s+as\s+(?:fuck|hell)\b/giu,(m,a)=>this.lookupEnglish(a).some(w=>w[2]==="adjective")?"damn "+a:m);
   s=s.replace(/\b(shall)\b/gi,"will");
  }
  // Preposition-fronted interrogatives: preserve the stranded English preposition rather than drop it.
  if(!reverse){
   const m=s.match(/^(what|who|whom)\s+(.+?)\s+(about|with|from|to|for|at)\s*\?$/i);
   if(m){const pp=this.words.find(w=>w[0]===m[3].toLowerCase()&&w[2]==="preposition");const inner=this.translateSimple((m[1].toLowerCase()==="whom"?"who":m[1])+" "+m[2]+"?",false);
    if(pp&&inner)return pp[1][0].toUpperCase()+pp[1].slice(1)+" "+inner[0].toLowerCase()+inner.slice(1);}
  }else{
   const m=s.match(/^([^\s]+)\s+(hvat|hva)\s+(.+?)\?$/i);
   if(m){const pp=this.words.find(w=>w[1]===m[1].toLowerCase()&&w[2]==="preposition");const inner=this.translateSimple(m[2]+" "+m[3]+"?",true);
    if(pp&&inner)return inner.replace(/\?$/,"")+" "+pp[0]+"?";}
  }
  const direct=this.translateSimple(s,reverse);if(direct)return direct;
  const cap=x=>x?x[0].toUpperCase()+x.slice(1):x;
  const lower=x=>/^I\b/.test(x)?x:x[0].toLowerCase()+x.slice(1);
  for(const [en,ra] of [["but","ak"],["and","end"],["because","þarfor"],["where","hvar"]]){
   const word=reverse?ra:en,re=new RegExp("(,?\\s+"+word+"\\s+)","gi");let m;
   while((m=re.exec(s))){
    const l=s.slice(0,m.index).trim(),r=s.slice(m.index+m[0].length).trim();
    if(!l||!r)continue;
    const a=this.translateSimple(l,reverse),b=this.translateClause(r,reverse);
    if(a&&b)return a+(m[0].trim().startsWith(",")?", ":" ")+(reverse?en:ra)+" "+lower(b);
   }
  }
  const firstComma=s.indexOf(",");
  if(firstComma>0){
   const left=s.slice(0,firstComma).trim(),right=s.slice(firstComma+1).trim();
   const address=this.translateCore(left,reverse,"vocative");
   if(address&&right){const body=this.translateClause(right,reverse);if(body)return cap(address)+", "+lower(body);}
  }
  const comma=s.lastIndexOf(",");
  if(comma>0){
   const tail=s.slice(comma+1).trim(),punct=tail.match(/[.!?]$/)?.[0]||"";
   const left=s.slice(0,comma).trim(),a=this.translateClause(left+(punct==="?"&&!/[.!?]$/.test(left)?"?":""),reverse);
   const b=this.translateCore(tail.replace(/[.!?]$/,""),reverse,"vocative");
   if(a&&b)return a.replace(/[.!?]$/,"")+", "+b+punct;
   // Informal comma-separated independent clauses, without inventing a conjunction.
   const first=this.translateSimple(left,reverse),second=this.translateClause(tail,reverse);
   if(first&&second)return first+", "+lower(second);
  }
  if(!reverse){
   const m=s.match(/^(.+?)\s+(bro|bruv|dude|buddy)([.!?])?$/i);
   if(m){const lead=m[1].trim();if(!/\b(?:a|an|the|my|your|his|her|our|their|this|that|these|those|to|with|for)\s*$/i.test(lead)){
    const a=this.translateClause(lead+(m[3]==="?"?"?":""),false);if(a)return a.replace(/[.!?]$/,"")+", broþ"+(m[3]||"");
   }}
  }
  const atom=s.trim().replace(/[.!?]$/,"").toLowerCase();
  const entry=this.words.find(w=>w[reverse?1:0].toLowerCase()===atom&&["adverb","expression"].includes(w[2]));
  if(entry)return cap(entry[reverse?0:1])+(s.trim().match(/[.!?]$/)?.[0]||"");
  return null;
 },
 translatePartial(input,reverse=false){
  if(reverse)return null;
  const s=this.normalizeEnglish(input);
  const tokens=s.match(/[\p{L}\p{M}]+(?:'[\p{L}\p{M}]+)?/gu)||[];
  if(tokens.length>40)return null;
  const grammar=new Set("a an the i you he she it we they me him her us them my your his its our their mine yours hers ours theirs this that these those am is are was were be been being do does did done have has had will would can could may might must should shall not no yes to of by for from in on at with without and or but if when where who which why how what than while although before after because own myself yourself himself herself itself ourselves themselves each other".split(" "));
  const known=new Set([...grammar,...Object.keys(this.aliases)]);
  for(const [en,,pos] of this.words){
   const k=en.toLowerCase();for(const token of k.split(" "))known.add(token);
   if(pos==="noun"||pos==="verb"){for(const x of [k+"s",k+"es",k+"ed",k+"ing",k+"d",k.replace(/e$/,"")+"ing",k.replace(/y$/,"ies"),k.replace(/y$/,"ied")])known.add(x);}
  }
  for(const x of "people children men women feet teeth wolves deer sheep fish went gone came saw seen ate eaten drank drunk wrote written read gave given took taken stood slept ran found bought sold made said told knew known lost left got gotten kept began begun sang sung thought felt heard brought sent chose chosen".split(" "))known.add(x);
  const unknown=[...new Set(tokens.map(x=>x.toLowerCase()).filter(x=>!known.has(x)&&!x.endsWith("'s")))];
  if(!unknown.length||unknown.length>2)return null;
  const possibilities=unknown.map(x=>{
   const i=tokens.findIndex(t=>t.toLowerCase()===x),prev=tokens[i-1]?.toLowerCase(),next=tokens[i+1]?.toLowerCase();
   const nounNext=this.words.some(w=>w[2]==="noun"&&(w[0]===next||w[0]+"s"===next));
   if(nounNext)return ["adjective"];
   if(["a","an","the","my","your","his","her","our","their","this","that","these","those"].includes(prev)||this.words.some(w=>w[2]==="adjective"&&w[0]===prev))return ["noun","adjective"];
   return [];
  });
  if(possibilities.some(x=>!x.length))return null;
  let choices=[[]];for(const opts of possibilities)choices=choices.flatMap(a=>opts.map(b=>[...a,b]));
  const outputs=new Set();
  for(const roles of choices){
   const entries=unknown.map((x,i)=>[x,"zzq"+i+"qzz",roles[i],"Temporary"]);
   const temp=Object.create(this);temp.words=[...this.words,...entries];
   const translated=temp.translateClause(s,false);
   if(!translated||!entries.every(e=>translated.toLowerCase().includes(e[1])))continue;
   let result=translated;for(const [en,marker] of entries)result=result.replace(new RegExp(marker,"gi"),"["+en+"]");
   outputs.add(result);
  }
  if(outputs.size!==1)return null;
  return {text:[...outputs][0],unknown};
 },
 translateSimple(input,reverse){
  if(reverse)return this.translateCore(input,true);
  const prepared=input.replace(/[’]/g,"'").replace(/\b(i|you|he|she|we|they|it)'ll\b/gi,"$1 will").replace(/\b(i|you|we|they)'ve\b/gi,"$1 have").replace(/\b(i|you|he|she|we|they|it)'d\b/gi,"$1 would").replace(/\bwon't\b/gi,"will not").replace(/\bcan't\b/gi,"can not");
  const direct=this.translateCore(prepared,false);if(direct)return direct;
  // Beam over local lexical alternatives, longest phrase first; never rewrite a whole test sentence.
  const pieces=prepared.match(/[\p{L}\p{M}]+(?:'[\p{L}\p{M}]+)?|[^\p{L}\p{M}]+/gu)||[];
  const states=[{i:0,out:"",cost:0}];const seen=new Set();let attempts=0;
  while(states.length&&attempts<64){
   states.sort((a,b)=>a.cost-b.cost||b.i-a.i);
   const s=states.shift();
   if(s.i>=pieces.length){
    if(!s.cost||seen.has(s.out))continue;seen.add(s.out);attempts++;
    const result=this.translateCore(s.out,false);if(result)return result;continue;
   }
   states.push({i:s.i+1,out:s.out+pieces[s.i],cost:s.cost});
   if(!/^[\p{L}\p{M}]/u.test(pieces[s.i]))continue;
   for(let n=Math.min(7,pieces.length-s.i);n>=1;n--){
    const key=pieces.slice(s.i,s.i+n).join("").toLowerCase().replace(/\s+/g," ");
    for(const v of this.aliases[key]||[])states.push({i:s.i+n,out:s.out+v,cost:s.cost+1});
   }
   if(states.length>256){states.sort((a,b)=>a.cost-b.cost||b.i-a.i);states.length=256;}
  }
  return null;
 },
 translateCore(input,reverse,mode){
 const norm=s=>s.normalize("NFC").toLowerCase().trim(), cap=s=>s[0].toUpperCase()+s.slice(1), split=s=>s.split(/\s+/);
 const punct=input.trim().match(/[.!?]$/)?.[0]||"";
 // Sentence-level constructions are parsed recursively; not stored as phrase translations.
 const raw=input.trim();
 for(const [en,ra] of [["although","þoh"],["while","medan"],["before","foran"]]){
  const m=raw.match(new RegExp("^"+(reverse?ra:en)+"\\s+(.+?),\\s*(.+)$","i"));
  if(m){const x=this.translateClause(m[1],reverse),y=this.translateClause(m[2],reverse);const lower=s=>s.startsWith("I ")?s:s[0].toLowerCase()+s.slice(1);return x&&y?cap((reverse?en:ra)+" "+lower(x)+", "+lower(y)):null;}
 }
 const low=norm(raw);
 const decap=s=>s[0]==="I"&&(s.length===1||s[1]===" ")?s:s[0].toLowerCase()+s.slice(1);
 const cond=reverse?/^gif\s+(.+?),\s*(.+)$/i:/^if\s+(.+?),\s*(?:then\s+)?(.+)$/i;
 const cm=raw.match(cond);
 if(cm){const first=this.translateClause(cm[1],reverse), second=this.translateClause(cm[2],reverse);if(first&&second)return (reverse?"If ":"Gif ")+decap(first)+", "+decap(second);return null;}
 const contrast=raw.match(reverse?/^(.+),\s*ne\s+(.+?)([.!?])?$/i:/^(.+),\s*not\s+(.+?)([.!?])?$/i);
 if(contrast){const main=this.translateClause(contrast[1],reverse);const item=this.words.find(w=>["noun","concept","pronoun"].includes(w[2])&&norm(w[reverse?1:0])===norm(contrast[2]));if(main&&item)return main+", "+(reverse?"not ":"ne ")+item[reverse?0:1]+(contrast[3]||"");return null;}
 const tokens=split(norm(input).replace(/[.!?]$/,"").replace(/\bcannot\b/g,"can not").replace(/\bcan[’\x27]t\b/g,"can not").replace(/n['’]t\b/g," not").replace(/\bwo not\b/g,"will not").replace(/\bi['’]m\b/g,"i am").replace(/\b(he|she|it)['’]s\b/g,"$1 is").replace(/\b(we|you|they)['’]re\b/g,"$1 are"));
 const words=this.words, nouns=words.filter(w=>["noun","concept"].includes(w[2])), forms={"go":["goes","went","going"],"come":["comes","came","coming"],"have":["has","had","having"],"make":["makes","made","making"],"do":["does","did","doing"],"get":["gets","got","getting"],"give":["gives","gave","giving"],"take":["takes","took","taking"],"find":["finds","found","finding"],"lose":["loses","lost","losing"],"hear":["hears","heard","hearing"],"listen":["listens","listened","listening"],"say":["says","said","saying"],"tell":["tells","told","telling"],"ask":["asks","asked","asking"],"answer":["answers","answered","answering"],"read":["reads","read","reading"],"write":["writes","wrote","writing"],"learn":["learns","learned","learning"],"teach":["teaches","taught","teaching"],"understand":["understands","understood","understanding"],"think":["thinks","thought","thinking"],"remember":["remembers","remembered","remembering"],"forget":["forgets","forgot","forgetting"],"believe":["believes","believed","believing"],"want":["wants","wanted","wanting"],"need":["needs","needed","needing"],"like":["likes","liked","liking"],"hate":["hates","hated","hating"],"help":["helps","helped","helping"],"wait":["waits","waited","waiting"],"start":["starts","started","starting"],"finish":["finishes","finished","finishing"],"stop":["stops","stopped","stopping"],"open":["opens","opened","opening"],"close":["closes","closed","closing"],"buy":["buys","bought","buying"],"sell":["sells","sold","selling"],"pay":["pays","paid","paying"],"cook":["cooks","cooked","cooking"],"bake":["bakes","baked","baking"],"wash":["washes","washed","washing"],"clean":["cleans","cleaned","cleaning"],"build":["builds","built","building"],"carry":["carries","carried","carrying"],"bring":["brings","brought","bringing"],"send":["sends","sent","sending"],"walk":["walks","walked","walking"],"run":["runs","ran","running"],"sit":["sits","sat","sitting"],"stand":["stands","stood","standing"],"sleep":["sleeps","slept","sleeping"],"wake":["wakes","woke","waking"],"rest":["rests","rested","resting"],"laugh":["laughs","laughed","laughing"],"smile":["smiles","smiled","smiling"],"cry":["cries","cried","crying"],"sing":["sings","sang","singing"],"play":["plays","played","playing"],"work":["works","worked","working"],"stay":["stays","stayed","staying"],"leave":["leaves","left","leaving"],"return":["returns","returned","returning"],"meet":["meets","met","meeting"],"choose":["chooses","chose","choosing"],"change":["changes","changed","changing"],"feel":["feels","felt","feeling"],"hope":["hopes","hoped","hoping"],"try":["tries","tried","trying"],"happen":["happens","happened","happening"],"fall":["falls","fell","falling"],"grow":["grows","grew","growing"],"move":["moves","moved","moving"],"report":["reports","reported","reporting"],"mess up":["messes up","messed up","messing up"],"see":["sees","saw","seeing"],"eat":["eats","ate","eating"],"drink":["drinks","drank","drinking"],"love":["loves","loved","loving"],"travel":["travels","traveled","traveling"],"speak":["speaks","spoke","speaking"],"live":["lives","lived","living"],"know":["knows","knew","knowing"]};
 Object.assign(forms,{"bore":["bores","bored","boring"],"watch":["watches","watched","watching"],"interest":["interests","interested","interesting"],"excite":["excites","excited","exciting"],"annoy":["annoys","annoyed","annoying"],"surprise":["surprises","surprised","surprising"],"worry":["worries","worried","worrying"],"disappoint":["disappoints","disappointed","disappointing"],"scare":["scares","scared","scaring"],"tire":["tires","tired","tiring"],"imagine":["imagines","imagined","imagining"],"expect":["expects","expected","expecting"],"explain":["explains","explained","explaining"],"decide":["decides","decided","deciding"],"discuss":["discusses","discussed","discussing"],"suggest":["suggests","suggested","suggesting"],"hurry":["hurries","hurried","hurrying"],"show":["shows","showed","showing"]});
 Object.assign(forms,{"consume":["consumes","consumed","consuming"],"taste":["tastes","tasted","tasting"],"smell":["smells","smelled","smelling"],"cut":["cuts","cut","cutting"],"mix":["mixes","mixed","mixing"],"add":["adds","added","adding"],"pour":["pours","poured","pouring"],"share":["shares","shared","sharing"],"serve":["serves","served","serving"],"prepare":["prepares","prepared","preparing"]});
 Object.assign(forms,{"sound":["sounds","sounded","sounding"],"seem":["seems","seemed","seeming"],"lie":["lies","lied","lying"],"mean":["means","meant","meaning"],"warn":["warns","warned","warning"],"invite":["invites","invited","inviting"],"enter":["enters","entered","entering"],"promise":["promises","promised","promising"],"refuse":["refuses","refused","refusing"],"agree":["agrees","agreed","agreeing"],"kill":["kills","killed","killing"],"step":["steps","stepped","stepping"],"move":["moves","moved","moving"],"look":["looks","looked","looking"],"offer":["offers","offered","offering"],"protect":["protects","protected","protecting"],"allow":["allows","allowed","allowing"],"lower":["lowers","lowered","lowering"],"follow":["follows","followed","following"],"cross":["crosses","crossed","crossing"],"rain":["rains","rained","raining"],"become":["becomes","became","becoming"],"hide":["hides","hid","hiding"],"hunt":["hunts","hunted","hunting"]});
 const irregularPart={"cut":"cut","show":"shown","mean":"meant","go":"gone","come":"come","do":"done","get":"got","give":"given","take":"taken","find":"found","lose":"lost","hear":"heard","say":"said","tell":"told","read":"read","write":"written","teach":"taught","understand":"understood","think":"thought","forget":"forgotten","buy":"bought","sell":"sold","pay":"paid","build":"built","bring":"brought","send":"sent","run":"run","sit":"sat","stand":"stood","sleep":"slept","wake":"woken","sing":"sung","leave":"left","meet":"met","choose":"chosen","feel":"felt","fall":"fallen","grow":"grown","see":"seen","eat":"eaten","drink":"drunk","speak":"spoken","know":"known","become":"become","hide":"hidden"};
 const enPart=k=>irregularPart[k]||forms[k][1];
 const linking=new Set(["become","sound","seem","feel","taste","smell"]);
 const complementVerbs=new Set(["love","expect","decide","promise","refuse","agree","start","finish","stop","try","want","need","like","hate","learn"]);
 const transitive=new Set("consume taste smell cut mix add pour share serve prepare bore watch interest excite annoy surprise worry disappoint scare tire imagine expect explain decide discuss suggest hurry show warn invite enter promise refuse kill offer protect allow lower follow cross look move give take find lose hear say tell read write teach understand remember forget believe like love help open close buy sell pay cook bake wash clean build carry bring send choose change feel see eat drink speak know hide hunt make do report mess up".split(" "));
 const find=(s,pos,rev=false)=>words.find(w=>norm(w[rev?1:0])===s&&w[2]===pos);
 const pron=words.filter(w=>w[2]==="pronoun"), poss=words.filter(w=>w[2]==="possessive");
 const num=words.filter(w=>w[2]==="number");
 const verbs=words.filter(w=>w[2]==="verb"&&forms[w[0]]);
 const demo={this:"þes",that:"þat",these:"þesne",those:"þa"}, ob={me:"ikta",you:"þuta",him:"hanta",her:"eata",it:"hitta",us:"vita",them:"deita"};
 const irreg={person:"people",child:"children",man:"men",woman:"women",tooth:"teeth",foot:"feet",sheep:"sheep",fish:"fish",life:"lives",leaf:"leaves",knife:"knives",wolf:"wolves",deer:"deer"};
 const plural=s=>irreg[s]||(/[^aeiou]y$/.test(s)?s.slice(0,-1)+"ies":/(s|x|z|ch|sh)$/.test(s)?s+"es":s+"s");
 const mass=new Set("cheddar cheese mozzarella rice pasta beef pork lettuce cabbage pepper garlic oil flour honey chocolate music fun boredom interest attention excitement stuff water food clothing silence help joy sadness anger fear respect hunger thirst sleep snow fire peace freedom life love hope rain milk bread cheese butter meat salt sugar coffee tea juice money clothing grass sand soil fog ice health pain work time sleep rest truth darkness sunlight mud blood iron gold".split(" "));
 for(const k of ["cheddar cheese","breakfast","lunch","dinner","chicken","noodles"])mass.add(k);
 const morphology=this.morphology;
 const animate=new Set([...morphology.animate,"comrade","actor","character","audience","bro","guard","bandit","traveller","ally","enemy"]);
 const dative={me:"im",you:"þem",him:"ham",her:"eam",it:"him",us:"vim",them:"dem"};
 const recipientVerbs=new Set(["give","send","bring","tell","sell","lend","offer"]);
 const adjForm=(r,pl)=>pl?(r.endsWith("e")?r:r.endsWith("ă")?r.slice(0,-1)+"e":r+"e"):r;
 const nounForm=this.inflectNoun.bind(this);
 const independent={mine:"ikes",yours:"þues",his:"hanes",hers:"eaes",ours:"vies",theirs:"deies"};
 const selfFor=s=>({I:"myself",you:"yourself",he:"himself",she:"herself",it:"itself",we:"ourselves",they:"themselves"}[s]);
 const ownerFor=s=>({I:"my",you:"your",he:"his",she:"her",it:"its",we:"our",they:"their"}[s]);
 let subjectRef="";
 const subjectEnglish=(s,rev)=>rev?s.text:pron.find(w=>w[1]===s.text)?.[0]||"";
 function np(a,obj=false,rev=false,genitive=false){
  if(!a.length)return null;
  // Productive quantity and container phrases: av joins the measured substance to its head.
  // Limit "of" to this noun class to avoid stealing possessive and passive constructions.
  const measureHeads=new Set(["amount","piece","slice","portion","kind","group","bottle","glass","basket","packet","kilogram","gram","litre","cup","bowl"]);
  const of=a.indexOf(rev?"av":"of");
  if(of>0&&of<a.length-1){
   const head=np(a.slice(0,of),obj,rev,genitive),sub=np(a.slice(of+1),false,rev);
   if(head&&sub&&measureHeads.has(nouns.find(w=>w[1]===head.nativeRoot)?.[0]))return {...head,text:head.text+(rev?" of ":" av ")+sub.text};
  }
  const quantifiers=[["many","mang","count"],["much","mik","mass"],["some","sum","both"],["few","fa","count"],["several","fler","count"],["all","al","both"],["enough","nog","both"],["more","mer","both"],["less","min","mass"],["fewer","far","count"],["most","mest","both"]];
  const quant=quantifiers.find(x=>x[rev?1:0]===a[0]);
  if(quant&&a.length>1&&!genitive){
   const body=np(a.slice(1),obj,rev);
   const name=nouns.find(w=>w[1]===body?.nativeRoot)?.[0];
   if(body&&name&&((quant[2]==="count"&&body.plural)||(quant[2]==="mass"&&!body.plural&&mass.has(name))||(quant[2]==="both"&&(body.plural||mass.has(name))))){
    return {...body,text:quant[rev?0:1]+" "+body.text};
   }
  }

  const joint=a.indexOf(rev?"end":"and");if(joint>0&&joint<a.length-1){const l=np(a.slice(0,joint),obj,rev,genitive),r=np(a.slice(joint+1),obj,rev,genitive);if(l&&r)return {text:l.text+(rev?" and ":" end ")+r.text,third:false};}
  if(obj&&!genitive&&!rev&&a.join(" ")==="each other")return {text:"samsek",third:false};
  if(a.length===1&&!genitive){
   const demonstrative=rev?Object.keys(demo).find(k=>demo[k]===a[0]):demo[a[0]];if(demonstrative)return {text:demonstrative,third:rev?!["these","those"].includes(demonstrative):!["these","those"].includes(a[0]),plural:rev?["these","those"].includes(demonstrative):["these","those"].includes(a[0])};
   if(obj){if(!rev&&selfFor(subjectRef)===a[0])return {text:"sek",third:false};if(rev&&a[0]==="sek"&&selfFor(subjectRef))return {text:selfFor(subjectRef),third:false};if(rev&&a[0]==="samsek")return {text:"each other",third:false};}
   const ind=rev?Object.keys(independent).find(k=>independent[k]+(obj?"uta":"ul")===a[0]):independent[a[0]];
   if(ind)return {text:rev?ind:ind+(obj?"uta":"ul"),third:true};
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
   if(b.length>2&&b[1]==="own"&&ownerFor(subjectRef)===b[0]){ps="sines";b.splice(0,2);}else if(["the","a","an"].includes(b[0]))d=b.shift();else if(demo[b[0]])dm=b.shift();else{const p=poss.find(w=>norm(w[0])===b[0]);if(p){ps=p[1];b.shift();}}
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
  const p=poss.find(w=>w[1]===b[b.length-1]);if(b[b.length-1]==="sines"){const owner=ownerFor(subjectRef);if(!owner)return null;ps=owner+" own";b.pop();}else if(p){ps=p[0];b.pop();}
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
 if(mode==="vocative"){const result=reverse?np(tokens,false,true):np(tokens,false,false)||np(["a",...tokens],false,false);return result?(reverse?result.text.replace(/^(a|an) /,""):result.text):null;}
 function pred(a,rev,obj=true,recipient=false,passive=false){
  if(!a.length)return {text:""};
  const preps=words.filter(w=>w[2]==="preposition"&&!["than","of"].includes(w[0]));if(passive)preps.push(["by","av","preposition"]);
  const times=words.filter(w=>w[2]==="adverb"&&["yesterday","today","tomorrow","now","always","never","often","sometimes","already","soon","again","together","apart","then","here","there","away","out","back","forward","up","down","please","genuinely","actually","even","seriously","anyway","maybe","probably","exactly","enough","still","yet","almost","especially"].includes(w[0]));
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
    const ad=find(b[b.length-1],"adjective",rev);
    if(ad&&b.length===2){const mod=words.find(w=>w[2]==="adverb"&&["genuinely","actually","seriously","almost","especially"].includes(w[0])&&w[side]===b[0]);if(mod)return {text:mod[other]+" "+ad[other]};}
    const deg=rev?{sva:"so",særli:"very",verdomli:"damn"}:{so:"sva",very:"særli",damn:"verdomli"};if(ad&&(b.length===1||b.length===2&&deg[b[0]]))return {text:[b.length===2?deg[b[0]]:"",ad[other]].filter(Boolean).join(" ")};}
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
 const whs={why:"hvi",where:"hvar",when:"hven",how:"hu",what:"hvat",who:"hva"};
 if(!reverse){
  let a=tokens.slice(),q=false,aux="",wh="";if(whs[a[0]])wh=a.shift();
  const auxes=["do","does","did","will","would","am","is","are","was","were","have","has","had",...Object.keys(modals)];
  if(auxes.includes(a[0])){aux=a.shift();q=true;}else if(wh)return null;
  function out(s,t,o,neg,stem,modal=""){return cap([...(wh?[whs[wh],t,s.text]:[s.text,t]),o.text,neg?"ne":"",modal,stem,q&&!wh?"li":""].filter(Boolean).join(" "))+(q?"?":punct);}
  for(let i=1;i<a.length;i++){
   let s=np(a.slice(0,i));
   if(!s){const subject=a.slice(0,i);const ri=subject.findIndex(x=>["who","which","that"].includes(x));if(ri>0&&ri<subject.length-1){const head=np(subject.slice(0,ri));if(head){const rel=this.translateClause((head.third?"he":"they")+" "+subject.slice(ri+1).join(" "),false);if(rel){const body=rel.replace(/^(Han|Dei)\s+/i,"");s={...head,text:head.text+" þe "+body+","};}}}}
   if(!s)continue;
   subjectRef=subjectEnglish(s,false);
   let b=a.slice(i),ax=aux;const early=[];while(["genuinely","actually","even","seriously","anyway","maybe","probably","exactly","still","yet","almost","especially"].includes(b[0]))early.push(b.shift());if(!ax&&auxes.includes(b[0]))ax=b.shift();
   let neg=b[0]==="not";if(neg)b.shift();
   const tense=ax==="will"?"va":ax==="would"?"hed":["did","was","were","had"].includes(ax)?"er":"nu";
   const be=["am","is","are","was","were"].includes(ax);
   let perfect=["have","has","had"].includes(ax),progress=false;
   if(["will","would"].includes(ax)&&b[0]==="have"){perfect=true;b.shift();}
   const leading=early.slice();
   while(["already","never","often","always","sometimes","soon","genuinely","actually","even","seriously","anyway","maybe","probably","exactly","still","yet","almost","especially"].includes(b[0]))leading.push(b.shift());
   if(perfect&&b[0]==="been"){progress=true;b.shift();}
   else if(["will","would"].includes(ax)&&b[0]==="be"){progress=true;b.shift();}
   else if(be)progress=true;
   // Have as possession is distinct from the perfect auxiliary. Try a complete noun phrase first.
   if(["have","has","had"].includes(ax)&&perfect&&!progress){
    const possession=pred([...b,...leading],false,true);
    if(possession?.text)return out(s,tense,possession,neg,"hav");
   }
   const marker=(pr=progress)=>[tense,perfect?"ju":"",pr?"dur":""].filter(Boolean).join(" ").replace(/^nu dur$/,"dur");
   if((be||progress)&&!perfect){const o=pred([...b,...leading],false,false);if(o?.text)return out(s,tense,o,neg,"es");}
   for(const v of verbs){
    const [en,ra]=v,[third,past,ing]=forms[en];
    let variants=perfect&&progress?[[ing,marker()]]:perfect?[[enPart(en),marker(false)]]:progress?[[ing,marker()]]:ax?[[en,tense]]:[[s.third?third:en,"nu"],[past,"er"]];
    if(progress&&!perfect&&transitive.has(en))variants.push([enPart(en),tense,"ves"]);
    for(const [form,tm,voice] of variants){
     const vt=split(form);if(b.slice(0,vt.length).join(" ")!==form)continue;
     let tail=b.slice(vt.length);
     if(!voice&&recipientVerbs.has(en)&&dative[tail[0]]&&tail.length>1&&!["to","for","in","on","at","from"].includes(tail[1]))tail=[...tail.slice(1),"to",tail[0]];
     let o=pred([...tail,...leading],false,voice?false:!linking.has(en),recipientVerbs.has(en)&&!voice,!!voice);
     if(!o&&!voice&&["feel","taste","smell"].includes(en))o=pred([...tail,...leading],false,true);
     if(!o&&!voice&&complementVerbs.has(en)){
      const rest=b.slice(vt.length),to=rest[0]==="to";
      for(const sub of verbs){
       const subForm=to?sub[0]:forms[sub[0]][2],st=split(subForm),offset=to?1:0;
       if(rest.slice(offset,offset+st.length).join(" ")!==subForm)continue;
       const inner=pred([...rest.slice(offset+st.length),...leading],false,!linking.has(sub[0]),recipientVerbs.has(sub[0]));
       if(inner){o={text:[inner.text,to?"til":"",sub[1]].filter(Boolean).join(" ")};break;}
      }
     }
     if(o)return out(s,tm,o,neg,voice?voice+" "+ra.slice(0,-2):ra.slice(0,-2),modals[ax]);
    }
   }
  }
  if(!wh&&(!q||tokens.slice(0,2).join(" ")==="do not"&&punct!=="?")){
   let b=tokens.slice(),neg=false;if(b.slice(0,2).join(" ")==="do not"){neg=true;b=b.slice(2);}
   subjectRef="you";
   const polite=b[0]==="please";if(polite)b.shift();
   for(const v of verbs){const vt=split(v[0]);if(b.slice(0,vt.length).join(" ")!==v[0])continue;let rest=b.slice(vt.length);if(polite)rest.push("please");if(recipientVerbs.has(v[0])&&dative[rest[0]]&&rest.length>1)rest=[...rest.slice(1),"to",rest[0]];const o=pred(rest,false,true,recipientVerbs.has(v[0]));if(o)return cap([neg?"ne":"",v[1].slice(0,-2),o.text].filter(Boolean).join(" "))+punct;}
  }return null;
 }
 let a=tokens.slice(),q=a[a.length-1]==="li";if(q)a.pop();
 const wh=Object.keys(whs).find(k=>whs[k]===a[0]);if(wh){const tense=a[1];if(!particles.includes(tense))return null;let k=2;while(["ju","dur"].includes(a[k]))k++;for(let j=a.length-1;j>k;j--){if(!np(a.slice(k,j),false,true))continue;const translated=this.translateClause([...a.slice(k,j),...a.slice(1,k),...a.slice(j),"li"].join(" ")+"?",true);if(translated)return cap(wh+" "+translated[0].toLowerCase()+translated.slice(1));}return null;}
 let i=a.findIndex(x=>particles.includes(x)),s=null;
 const ri=a.indexOf("þe");
 if(ri>0){const boundary=a.findIndex((x,j)=>j>ri&&x.endsWith(","));if(boundary<0||!particles.includes(a[boundary+1]))return null;const head=np(a.slice(0,ri),false,true);if(!head)return null;const relTokens=a.slice(ri+1,boundary+1);relTokens[relTokens.length-1]=relTokens[relTokens.length-1].slice(0,-1);const rel=this.translateClause([head.third?"han":"dei",...relTokens].join(" "),true);if(!rel)return null;const body=rel.replace(/^(He|They)\s+/i,"");if(body===rel)return null;const nounHead=a[ri-1];const human=head.human||false;s={...head,text:head.text+" "+(human?"who":"which")+" "+body};i=boundary+1;}
 else if(i>0)s=np(a.slice(0,i),false,true);
 if(i<1||!s){
  if(!q&&i<0){const b=a.slice();const neg=b[0]==="ne";if(neg)b.shift();const v=verbs.find(w=>w[1].slice(0,-2)===b[0]);if(v){subjectRef="you";const o=pred(b.slice(1),true,true,recipientVerbs.has(v[0]));if(o)return cap([neg?"do not":"",v[0],o.text].filter(Boolean).join(" "))+punct;}}return null;
 }
 subjectRef=subjectEnglish(s,true);
 let t=a[i];a=a.slice(i+1);const perfect=a[0]==="ju";if(perfect)a.shift();const progress=t==="dur"||a[0]==="dur";if(a[0]==="dur")a.shift();if(t==="dur")t="nu";
 const stem=a.pop();const passive=a[a.length-1]==="ves";if(passive)a.pop();
 const modal=Object.keys(modals).find(k=>modals[k]===a[a.length-1]);if(modal)a.pop();const neg=a[a.length-1]==="ne";if(neg)a.pop();
 const cop=stem==="es",v=verbs.find(w=>w[1].slice(0,-2)===stem);if(!cop&&!v)return null;
 let o=pred(a,true,!cop&&!passive&&!linking.has(v?.[0]),recipientVerbs.has(v?.[0])&&!passive,passive);
 if(!o&&!passive&&["feel","taste","smell"].includes(v?.[0]))o=pred(a,true,true);
 if(!o&&!passive&&complementVerbs.has(v?.[0])){
  const sub=verbs.find(w=>w[1]===a[a.length-1]),to=a[a.length-2]==="til";
  if(sub){const inner=pred(a.slice(0,to?-2:-1),true,!linking.has(sub[0]),recipientVerbs.has(sub[0]));if(inner)o={text:[to?"to":"",to?sub[0]:forms[sub[0]][2],inner.text].filter(Boolean).join(" ")};}
 }
 if(!o||cop&&!o.text)return null;
 const be=s.first?"am":s.third?"is":"are",pastBe=s.first||s.third?"was":"were";let aux="",vv="";
 if(cop){if(perfect||progress||passive||modal)return null;if(t==="va"||t==="hed"){aux=t==="va"?"will":"would";vv="be";}else aux=t==="er"?pastBe:be;}
 else{const en=v[0],[third,past,ing]=forms[en];vv=en;
 if(modal){if(t!=="nu"||perfect||progress||passive)return null;aux=modal;}
 else if(perfect){if(passive)return null;aux=t==="va"?"will":t==="hed"?"would":t==="er"?"had":s.third?"has":"have";vv=[t==="va"||t==="hed"?"have":"",progress?"been":"",progress?ing:enPart(en)].filter(Boolean).join(" ");}
 else if(passive){if(progress||!transitive.has(en))return null;aux=t==="va"?"will":t==="hed"?"would":t==="er"?pastBe:be;vv=[t==="va"||t==="hed"?"be":"",enPart(en)].filter(Boolean).join(" ");}
 else if(progress){aux=t==="va"?"will":t==="hed"?"would":t==="er"?pastBe:be;vv=[t==="va"||t==="hed"?"be":"",ing].filter(Boolean).join(" ");}
 else if(t==="va"||t==="hed")aux=t==="va"?"will":"would";else if(q||neg)aux=t==="er"?"did":s.third?"does":"do";else vv=t==="er"?past:s.third?third:en;}
 const emphasis=[];
 let body=o.text;
 while(/(?:^|\s)(genuinely|actually|even|seriously|anyway|maybe|probably|exactly)$/.test(body)){
  const match=body.match(/(?:^|\s)(genuinely|actually|even|seriously|anyway|maybe|probably|exactly)$/);
  emphasis.unshift(match[1]);body=body.slice(0,match.index).trim();
 }
 const prefix=emphasis.filter(x=>x!=="even").join(" "),scalar=emphasis.includes("even")?"even":"";
 return cap((q?[aux,s.text,prefix,neg?"not":"",scalar,vv,body]:[s.text,prefix,aux,neg?"not":"",scalar,vv,body]).filter(Boolean).join(" "))+(q?"?":punct);
}
});
