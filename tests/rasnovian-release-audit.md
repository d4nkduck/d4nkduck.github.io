# Rasnovian v0.9.0 release audit

This is a usable rule-based prototype, not a completed natural language or an unrestricted translation system. The historic reconstruction track is unchanged.

## Checks
- Previous suite: 521 equality assertions and full noun/history/phrase integrity checks, run using an equivalent JavaScript assert harness.
- New test set: 61 prompts; v0.8.5 returned 25 full forward parses, v0.9.0 returned 55, of which 55 also returned a reverse parse. These are parser-coverage counts, not independent linguistic accuracy scores. The set was used during development; it is not an unseen held-out benchmark.
- Added 53 bidirectional regression cases. The curated phrasebook remains 17 entries; no test sentence was added.
- Dictionary: 794 entries, 801 English alias keys, no duplicate native headwords or audited nominal paradigm collisions. Legacy witan/wit uses w outside the stated alphabet; retained for compatibility.
- Existing noun and history checks pass. JavaScript source validated; full browser deployment and Node CLI execution not independently tested.

## Broader audit results

| English input | Forward output | Reverse output |
|---|---|---|
| The child has a bowl of soup. | Țildul nu șæl av supă hav. | The child has a bowl of soup. |
| What did you talk about, dude? | Um hvat er þu sprek, broþ? | What did you speak about, bro? |
| The movie is almost finished. | Filmul nu endd mæstli es. | The movie is finished almost. |
| The movie is almost over. | Filmul nu endd mæstli es. | The movie is finished almost. |
| I have a friend. | Ik nu priatta hav. | I have a friend. |
| She has a new phone. | Ea nu telfon nev hav. | She has a new phone. |
| We are going to the market. | Vi dur til torgul gan. | We are going to the market. |
| I want to buy a new shirt. | Ik nu șirt nev til bygan vilj. | I want to buy a new shirt. |
| Where is the nearest shop? | Unsupported | — |
| How much does it cost? | Unsupported | — |
| How many books do you have? | Unsupported | — |
| Who lives in the house? | Hva nu in husul lev? | Who lives in the house? |
| What happened yesterday? | Hvat er gistrăn hap? | What happened yesterday? |
| I don't know what you mean. | Unsupported | — |
| I think that she is right. | Ik nu þenk atþe ea nu rișt es. | I think that she is right. |
| Can you tell me your name? | Þu nu namuta þues im kæn tæl li? | Can you tell your name to me? |
| Please give me a cup of tea. | Gif kop av țeai bidde im. | Give a cup of tea please to me. |
| I am looking for my keys. | Ik dur for kleșenle ikes skav. | I am looking for my keys. |
| The red door is open. | Dorul rod nu opăn es. | The red door is open. |
| There is a cat in the garden. | Þær nu mætă in gardul es. | There is a cat in the garden. |
| There are three people outside. | Þær nu þri mænnen utanhus es. | There are three people outside. |
| I am not ready yet. | Ik nu ræd ennnu ne es. | I am not ready yet. |
| We will meet at the station tomorrow. | Vi va bi statul amorgăn met. | We will meet at the station tomorrow. |
| The guard will open the gate for us. | Vaktărul va gatuta for vi opn. | The guard will open the gate for us. |
| My friend asked me to wait. | Unsupported | — |
| The traveller walked through the village. | Farendul er þurh þorpul gang. | The traveller walked through the village. |
| The king's messenger arrived at dawn. | Bodărul țyningules er bi dægberht kum. | The king's messenger came at dawn. |
| After we ate dinner, we went home. | Æfter vi er ævenmet et, vi er heimtil gan. | After we ate dinner, we went home. |
| I have been waiting for an hour. | Ik nu ju dur for orătid bid. | I have been waiting for a hour. |
| She doesn't like the music. | Ea nu muzikuta ne lik. | She does not like the music. |
| I would like some water. | Ik hed sum vætăr lik. | I would like some water. |
| I want you to come with me. | Unsupported | — |
| The children are playing a game. | Țildenle dur spæl pleg. | The children are playing a game. |
| I can't find my bag. | Ik nu punguta ikes ne kæn find. | I can not find my bag. |
| I need to go home. | Ik nu heimtil til ganan þurf. | I need to go home. |
| I am going home now. | Ik dur heimtil nuna gan. | I am going home now. |
| I am feeling better. | Ik dur betăr fel. | I am feeling better. |
| This is my favourite song. | Þes nu sangul liefest ikes es. | This is my favourite song. |
| Thank you for your help. | Þank þuta for helpul þues. | Thank you for your help. |
| No problem. | Nei trud. | No problem. |
| I am learning Rasnovian. | Ik dur rașnovæsk lern. | I am learning Rasnovian. |
| Do you speak English? | Þu nu engliș sprek li? | Do you speak English? |
| The weather is cold today. | Vedrul nu kald hidæi es. | The weather is cold today. |
| It is raining outside. | Hit dur utanhus regn. | It is raining outside. |
| He is taller than his brother. | Han nu hehstiger þan broþărul hanes es. | He is taller than his brother. |
| My sister is reading a book. | Șystărul ikes dur bok ræd. | My sister is reading a book. |
| The shop opens at nine. | Bodul nu bi nigen opn. | The shop opens at nine. |
| I will see you later. | Ik va þuta sæfter se. | I will see you later. |
| Good luck! | Godgeluk! | Good luck! |
| See you tomorrow! | Se þuta amorgăn! | See you tomorrow! |
| Don't worry, my friend. | Ne sorg, priatul ikes. | Do not worry, my friend. |
| The house was built by my father. | Husul er av fædărul ikes ves byld. | The house was built by my father. |
| We had already eaten when she arrived. | Vi er ju ærnu et hven ea er kum. | We had eaten already when she came. |
| The woman who lives here is my friend. | Viful þe nu her lev, nu priatul ikes es. | The woman who lives here is my friend. |
| I have two brothers and a sister. | Ik nu tva broþărenta end șystărta hav. | I have two brothers and a sister. |
| We bought three bottles of water. | Vi er þri flasken av vætăr byg. | We bought three bottles of water. |
| She gave me the keys. | Ea er kleșenla im gif. | She gave the keys to me. |
| I can see the mountains from here. | Ik nu bergenla fra her kæn se. | I can see the mountains from here. |
| The book is on the table. | Bokul nu an bordul es. | The book is on the table. |
| I like this song, but it is too loud. | Ik nu þes sangta lik, ak hit nu ovărli lud es. | I like this song, but it is too loud. |
| The door is closed. | Dorul nu lukd es. | The door is closed. |
| That is not what I said. | Unsupported | — |

## Remaining limitations
Object-control complements (want someone to do something), embedded interrogatives, quantity questions, extended relative clauses, complete discourse handling, word-sense disambiguation, idiomatic English rendering, broader phonology/etymology audit. Parser success is not proof of semantic equivalence. Preserve explicit fallback and unknown-word markers. No generic machine translation quality claim.
