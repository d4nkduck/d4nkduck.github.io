# Lingua Atlas

Static website: open `index.html` with `languages/` alongside it. No API keys or backend required. GitHub Pages can serve the branch after merging into its configured publishing source.

## Adding a language

Copy `languages/rasnovian.js` to a new file and register a pack in `window.languagePacks`. Set a unique `id`, `name`, `native`, `version`, `origins` (name and percent), `alphabet`, `sounds` (symbol and pronunciation), `words` (English lemma, native lemma, part of speech), `phrases` (English and native), and `grammar` (heading and text). Include the new script before the main application script in `index.html`. Supply at least five phrases and enough unambiguous vocabulary for quizzes. Implement an optional `translateClause(input, reverse)` returning a translated string or null when unsupported. Keep each language's rules independent.

## Current scope

Rasnovian v0.1 is a provisional constructed language. Origins are fictional design proportions. Translation prioritises recorded phrases, then a limited regular clause parser, then a labelled word-by-word fallback. Unknown words appear in brackets; fallback is not grammatical translation. No unrestricted English translation, speech synthesis or accounts. Quiz progress is stored locally per language. The original README is intentionally preserved.

## Manual smoke tests

- I see the house. → Ik nu husulta se.
- We drink water. → Vi nu væterta drink.
- Vi nu væterta drink. → We drink water.
- I will eat. → Ik va et.
- Search `house` in the dictionary; answer a vocabulary question and refresh to check progress; inspect the alphabet and grammar sections.
