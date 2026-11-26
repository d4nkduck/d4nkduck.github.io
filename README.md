# Lingua Atlas

**A fictional language archive, translator and learning tool.**

Explore constructed languages with independent grammars, cultural histories, searchable dictionaries and vocabulary quizzes. Lingua Atlas is a static website: translation runs in your browser, with no API key or backend.

[Open Lingua Atlas](https://d4nkduck.github.io/) · [Language development guide](LANGUAGES.md) · [Changelog](CHANGELOG.md)

## Languages

| Language | Current standard | Dictionary entries | Design |
| --- | --- | ---: | --- |
| [Rașnovæsk (Rasnovian)](https://d4nkduck.github.io/?lang=rasnovian) | 0.9.1 | 810 | Germanic-inspired verb-final grammar, Romance and Slavic contact, agricultural and communal culture |
| [Javenœrl](https://d4nkduck.github.io/?lang=javenoerl) | 0.4.0 | 1,118 | Franco-Germanic analytical grammar, professional compression and personal registers |

Ancestry percentages in the archive are fictional design targets, not measured etymological results. The languages are works in progress.

## What you can do

- Translate English into either language and back.
- Explore grammar, pronunciation, historical notes and cultural vocabulary.
- Switch Javenœrl between Werk (working), Jour (everyday) and Cœur (personal) registers.
- Search the dictionary, practise vocabulary and browse curated phrases.
- See when the translator has used a paraphrase, partial parse or literal fallback.

The shared English paraphrase adapter recognizes selected expressions and synonyms before resorting to literal lookup. This is a rule-based prototype, not a neural translation service. It can miss constructions, choose an inappropriate sense or simplify nuances; unknown words remain visible in brackets.

## Run locally

Open `index.html` in a modern browser, keeping the `languages/` directory alongside it. No build step is required.

For development checks, use Node.js 22 or newer:

```sh
npm test
```

No package installation or third-party JavaScript dependencies are required. The test command runs the language, shared-adapter and site-integration regression suites.

## Repository map

```text
index.html                   Browser interface and translation pipeline
languages/
  rasnovian.js               Rasnovian grammar and vocabulary
  javenoerl.js               Javenœrl grammar, vocabulary and registers
  paraphrase.js              Shared English input adapter
tests/                       Regression fixtures and development audits
reconstruction/              Separate historical Rasnovian research track
LANGUAGES.md                 Pack contract and maintenance guide
CHANGELOG.md                 Selected release history
package.json                 Local test command
.github/workflows/           Automated regression checks
```

## Research and development

- [Rasnovian release audit (v0.9.0)](tests/rasnovian-release-audit.md)
- [Shared English coverage audit](tests/shared-coverage-audit.md)
- [Historical reconstruction project](reconstruction/README.md)
- [Lexicon research inventory](reconstruction/lexicon-audit.csv)

These audits describe earlier development snapshots, not current independent accuracy benchmarks. New linguistic rules should be tested compositionally; regression sentences must not become public phrasebook entries.
