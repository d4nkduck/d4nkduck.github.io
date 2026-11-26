# Language development guide

[Project overview](README.md) · [Changelog](CHANGELOG.md)

## Architecture

Lingua Atlas is a static, dependency-free browser application. Each language pack registers itself in `window.languagePacks`. The UI reads pack metadata, the dictionary, grammar documentation and curated phrases. Keep language-specific morphology and syntax in the language pack, and general English expression recognition in `languages/paraphrase.js`.

The translation pipeline uses recorded phrases and lexical matches, preferred idiomatic rewrites, full grammar parsing, bounded paraphrase search, partial grammar, then labelled word-by-word fallback. English paraphrases must remain inspectable. A reverse parse is a useful grammar check, not proof of semantic equivalence. Native-to-English translation does not use English paraphrase rules.

## Language pack contract

| Field or method | Purpose |
| --- | --- |
| `id`, `name`, `native`, `version` | Unique identifier and release metadata |
| `origins` | Donor names and fictional design percentages |
| `alphabet`, `sounds`, `grammar` | Reference documentation |
| `words` | Rows: English lemma, native lemma, part of speech, optional category |
| `phrases` | Curated bilingual phrase pairs |
| `lookupEnglish(input)` | Optional synonym and inflection-aware lookup |
| `lookupNative(input)` | Optional native lexical lookup, including legacy spellings |
| `translateClause(input, reverse)` | Full grammatical translation or null |
| `translatePartial(input, reverse)` | Optional partial result: text and unknown words |
| `registers`, `register` | Optional register selection and current register |

Use `languages/rasnovian.js` or `languages/javenoerl.js` as a reference when creating a new independent pack. Add its script before the main application script in `index.html`. Include at least five curated phrases and add pack-specific regression tests. Packs implementing `translateClause` can use the shared adapter automatically.

## Current standards

### Rasnovian 0.9.1

Rașnovæsk uses verb-final clauses, suffixed articles and case marking, differential object marking, postnominal adjectives, invariant finite verb stems and tense/aspect particles. It supports selected subordinate clauses, relatives, reflexives, reciprocals, passives and advanced aspect constructions. The latest audit revision adds agricultural vocabulary and distinct run/manage/flow senses.

The intended Anglo-Saxon/Romanian/Russian split is 60/30/10, not an audited ancestry distribution. Historical reconstruction is kept separate in [reconstruction/](reconstruction/README.md). The inherited `witan/wit` spelling is a documented exception to the alphabet.

### Javenœrl 0.4.0

The Javes value diligence, craftsmanship, rest and close relationships. The intended French/technical English/German split is 40/30/30, not measured ancestry.

Javenœrl uses SVO order, invariant verbs and grammatical particles. Werk uses compressed status reports (`stat/stats/statn`) and fused definite articles (`l-/ls-`); Cœur uses familiar `tei/tein` and expressive morphology (`-lin/-sam`). The deliberate pronunciation of marked `œrl` endings is a spoken choice. Jour is the everyday register.

The current standard includes selected finite complements and subordinate clauses, reflexives, reciprocals, possessors, object-control constructions, passive and perfect-progressive forms, quantity-subject questions, and restricted productive compounds and `-bar` derivatives. The spelling adaptation system accepts older spellings. Full phonology, historical integration, register differentiation and broader question grammar remain incomplete.

## Testing

Run all checks from the repository root:

```sh
npm test
```

Individual suites can be run with `node --test tests/rasnovian.test.cjs`, `node --test tests/javenoerl.test.cjs`, `node --test tests/paraphrase.test.cjs` or `node --test tests/site.test.cjs`. GitHub Actions runs the same command on pushes and pull requests.

Keep separate:
- Linguistic rules and native lexical meanings.
- English aliases and paraphrase rules.
- Curated public phrases.
- Regression fixtures and development audits.

Tests should include contrasting word senses, negative cases and forward/reverse examples. Do not add test sentences to the phrasebook or create a native root just to satisfy an English synonym. A successful parse does not establish meaning accuracy. Historical audit counts must not be silently updated as if they were new measurements.

## Release checklist

1. Run all regression tests.
2. Update the affected pack's version and its script cache identifier in `index.html`.
3. Update the README and changelog if the released standard or vocabulary count changes.
4. Check the public page after deployment: language switch, translation directions, register switch, dictionary search, quiz and documentation.
5. Verify new native roots against the alphabet and document provisional historical or semantic decisions. Keep reconstruction data and earlier audits intact.

Do not claim a successful Pages deployment until the public site has been checked.
