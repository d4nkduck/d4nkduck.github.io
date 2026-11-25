# Lingua Atlas

Static website: open `index.html` with `languages/` alongside it. No API keys or backend required. GitHub Pages can serve the branch after merging into its configured publishing source.

## Adding a language

Copy `languages/rasnovian.js` to a new file and register a pack in `window.languagePacks`. Set a unique `id`, `name`, `native`, `version`, `origins` (name and percent), `alphabet`, `sounds` (symbol and pronunciation), `words` (English lemma, native lemma, part of speech), `phrases` (English and native), and `grammar` (heading and text). Include the new script before the main application script in `index.html`. Supply at least five phrases and enough unambiguous vocabulary for quizzes. Implement an optional `translateClause(input, reverse)` returning a translated string or null when unsupported. Keep each language's rules independent.

## Javenœrl v0.1.0

The Javes speak Javenœrl, with a French 40%, technical English 30%, German 30% design target. The independent pack provides work (Werk), everyday (Jour), and personal (Cœur) modes. Work status reports use `stat`, personal singular address uses `tei/tein`. The spelling Javenœrl is retained even when its final œrl is silent. Select Javenœrl from the language menu or use `?lang=javenoerl`. Run `node tests/javenoerl.test.cjs` for grammar regression cases. The language is an initial prototype; vocabulary ancestry and full translation coverage are not audited.

## Current scope

Rasnovian v0.9.0 is a usable but incomplete constructed language and a rule-based translation prototype. Origins are fictional design targets, not measured ancestry. Translation checks recorded phrases and direct dictionary matches, then full grammar with local synonym alternatives, partial grammar and labelled word-by-word fallback. Unknown words appear in brackets. Reverse output may choose canonical English synonyms. No unrestricted translation, speech synthesis or accounts. Quiz progress is stored locally per language. The historical reconstruction baseline remains separate.

## Regression and release audit

Run `node tests/rasnovian.test.cjs` from the repository root. See [release audit](tests/rasnovian-release-audit.md) for coverage, examples and limitations. Test sentences must not become curated phrasebook entries.

## Manual smoke tests

- I see the house. → Ik nu husuta se.
- We drink water. → Vi nu vætăr drink.
- Vi nu vætăr drink. → We drink water.
- I will eat. → Ik va et.
- Verify version v0.9.0, search a synonym in the dictionary, answer a vocabulary question and refresh to check progress, inspect the alphabet and grammar sections.

When updating a pack, update its script cache identifier in index.html. Do not claim deployment until the public page has been checked.
