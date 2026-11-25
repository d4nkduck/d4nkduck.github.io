# Rașnovæsk Reconstruction Project — R0.1
Status: experimental research track, not the modern translator specification. Frozen baseline: v0.8, language blob 57f406eb8dd3909e29c7b62ffeb8a0fcf38f616c (559 dictionary entries). Existing site and regression tests remain authoritative for v0.8.

## Scope and method
The goal is a fictional descendant of an Old English-speaking community with sustained Romanian and later Russian/East Slavic contact. 60/30/10 is a **target for independent lexical roots**, classified by immediate donor or inherited source, not a result or a measure of grammar. Compounds, productive derivations, inflected forms and multiple senses must not inflate the denominator. Separate other, mixed and uncertain origins. Russian is a specific donor, not a synonym for all Slavic. Never allocate uncertain words to hit a quota.

The first inventory covers all 559 existing entries, with 11 source-form checks, 162 proposed comparisons, 18 disputed entries, 28 experiential compounds and 340 unreviewed entries. These are entry-level screening counts, not root ancestry proportions. Source-form checked means a corresponding donor form is attested, not that the fictional historical pathway is proven. See lexicon-audit.csv. No legacy word has been changed.

## Fictional historical setting
Use relative years; no claim of a documented historical migration. Settlement in a fictional Carpathian/Danubian river valley. Founder group speaks a late Old English dialect; limited Scandinavian contact can explain a separately marked minority layer. The fictional divergence begins at year 0, after Old English palatalisation. Actual Old English phonological chronology must be checked independently; don't derive a historical pronunciation from modern English spelling.

| Period | Social setting | Proposed linguistic consequences |
|---|---|---|
| 0–250 Forrașnovæsk | Stable family settlements, inherited language at home, bilingual market towns | Retain core lexicon and familiar Germanic verb and noun morphology. Distinguish inherited velars from existing palatal consonants. |
| 250–550 Aldrașnovæsk | Intermarriage and shared schools, trade, local administration with Romance-speaking neighbours | Widespread bilingualism; article placement and discourse calques develop; household and administrative loans increase. |
| 550–900 Midrașnovæsk | Multilingual towns and later eastern trade networks | East Slavic contact and Russian-specific later loans are separately tracked; phonological contrasts and lexical meanings diffuse. |
| 900+ Nevrașnovæsk | Regional speech, written standard, literacy and schooling | Analogy and levelling, fossilized plural classes, standard versus regional reductions. Modern written norm is not identical to conversational speech. |

Contact can affect morphology and syntax, but these social mechanisms are hypotheses, not proof. Source: Cambridge Handbook of Romance Linguistics, Contact and Borrowing, https://www.cambridge.org/core/books/abs/cambridge-handbook-of-romance-linguistics/contact-and-borrowing/CB55B0DBE8FFA18BDB3DE0EE2F5C6127.

## Proposed modern sound inventory
27 letters: 8 vowels (a ă æ e i o u y) and 19 consonants. IPA:
a /a/, ă /ə/, æ /æ/, e /e/, i /i/, o /o/, u /u/, y /ɨ/.
b /b/, d /d/, f /f/, g /g/, h /h/, j /ʒ/, k /k/, l /l/, m /m/, n /n/, p /p/, r /r/, s /s/, ș /ʃ/, t /t/, ț /ts/, þ /θ/, v /v/, z /z/.
Existing w in witan and other forms is an orthographic inconsistency; mark legacy exceptions instead of silently changing them. Diphthongs ai, ei, au and eu are provisional; hiatus remains possible across morphemes. Length is not contrastive in the proposed modern standard. [ŋ] is a predictable realization of /n/ before /k,g/; [x] is a proposed allophone of /h/ in coda, not a separate grapheme. No automatic e/æ or a/ə merger. A possible historical loss of /w/ into /v/ must be applied consistently after auditing source pronunciation.

## Phonotactics and stress — draft rules to be tested against the full lexicon
- Syllable (C)(C)(C)V(C)(C)(C); diphthongs count as a single nucleus.
- Single consonant onsets are unrestricted; initial clusters are principally obstruent+liquid, sibilant+stop, or sibilant+stop+liquid (str-, skr-, spr-). Initial consonant clusters in inherited words and loans outside this list are audit flags, not automatically illegal.
- Medial clusters are split into coda + maximal licensed onset. Across morpheme boundaries preserve clusters where intelligible; compare actual spoken forms before introducing repairs. Final clusters up to three consonants may occur when syllabifiable (e.g. -rst, -nd, -ld, -nt).
- Root stress defaults to the first full vowel of inherited Germanic roots; loans retain source stress provisionally until a standard adaptation rule is established. Compounds stress the first root primarily, second root secondarily. Productive case and article suffixes are unstressed. This replaces the contradictory penultimate-default description only on the research track.
- Schwa /ə/ is normally unstressed. Existing schwa deletion at vowel-initial suffixes survives with documented exceptions; medial syncope is a future sound-law candidate, not an unconditional edit. In rapid speech investigate cluster repairs and vowel reductions separately from standard orthography.
- Next deliverable: syllabify every lexical item, record stress explicitly, and generate a list of unresolved phonotactic exceptions. Current draft is not a validated phonotactic engine.

## Ordered historical sound-law hypotheses
Initial source inputs are phonological, not raw Old English letters. Distinguish source /k/ and palatal /tʃ/; cild and cyning must not be treated as the same historical onset. See Old English phonology: https://en.wikipedia.org/wiki/Old_English_phonology and Bosworth–Toller https://bosworthtoller.com/.
1. Existing palatal affricates /tʃ/ > /ts/ in the early contact period (test cild). Not a claim about actual Old English.
2. Later /k/ > /ts/ before /i, y/ (where ancestral /y/ remains a front rounded vowel at that stage); test cyning and inherited exceptions. Subsequent /y/ > /ɨ/ is a separate hypothesis. Don't conflate letters and sounds.
3. Inherited /w/ > /v/; separately review surviving written w and loan chronology.
4. Inherited initial /hl/ > /l/; inherited /s/ > /z/ intervocalically; inherited /s/ > /ʃ/ before high front vowels. Order the voicing and palatalisation tests before assigning their exceptions.
5. Vowel length neutralization and selected diphthong mergers; preserve contrast where evidence requires it.
6. Weak final vowel reduction to /ə/ and selected unstressed syllable loss; then productive morphology and analogy. No indiscriminate deletion.

Do not call these complete or exceptionless until an ancestral cohort is transcribed and tested against the laws. Every exception needs a reason: earlier sound history, lexical borrowing date, analogy, dialect, or unresolved mismatch.

## Grammatical historical hypotheses
Keep the modern system during research. Derive the article from postposed demonstrative constructions through bilingual calquing and cliticization; document intermediate forms and number-specific origins before deciding whether -ul/-le are defensible. Noun cases may be innovations rather than retained Old English paradigms. Demonstrate how earlier agreeing verbs and tense forms can be replaced by invariant stems with discourse adverbs/auxiliaries that grammaticalize into TAM particles; no assumption that noun and verb morphology must erode together. SOV is a marked design decision requiring a plausible path from variable inherited verb placement; compare subordinate verb-final patterns, topic continuity and contact. This is a research agenda, not a proven derivation.

## Semantic design: first proposed distinctions (not yet in dictionary)
| Existing form | Proposed semantic field | Independent contrast |
|---|---|---|
| witan | know a fact, know how, be aware | familiarity with persons/places requires a distinct verb; candidate Romanian cunoaște-derived root after sound audit |
| rinnan | move quickly on foot; flow of liquids | managing an organization uses a governance verb, not rinnan |
| heim | place of belonging and return | hus is physical building; not interchangeable |
| friþ | peace as protected social order | stil is absence of disturbance; vældfriþ is experiential peace |
| drum | route, travelled road, itinerary | distinguish a built street stræt and a journey fær |
| nadă | hopeful expectation | distinguish intention, certainty and wish; source still disputed |
| sægă | narrated account, oral story | factual statement vs inherited story to be separately developed |
| værþ | esteem, worth, social standing | respect as behavior distinct from rank or value |

Do not add tests to the phrasebook. Later lexical work must include definitions, sense boundaries, examples, valency, source citations, periods and derivation. A new standard should be versioned independently, tested on unseen conversation and narrative, and released only when it is coherent.

## Next checkpoints
R0.2: root-level audit, donor bibliography, phonological input transcriptions and testable chronological sound rules. R0.3: stress and phonotactic implementation, exceptions. R0.4: documented grammatical evolution. R0.5: semantic fields and new loans. R1: candidate modern standard, migration guide, regression comparisons and review before replacing v0.8.
