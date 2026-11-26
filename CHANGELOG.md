# Changelog

Selected project milestones. Earlier versions are preserved in Git history. Language-pack versions describe the fictional standards and their implementations, not the maturity of the entire website.

## Repository maintenance — 2026-11-26

- Replaced the unrelated legacy README with Lingua Atlas documentation.
- Added a unified dependency-free test command, site integration checks and GitHub Actions regression workflow.
- Clarified the pack interface, release checklist and historical-audit limitations.
- No changes to native vocabulary, grammar, phrasebooks or live-site interface.

## Rasnovian 0.9.1 / Javenœrl 0.4.0

- Distinct run, business management and liquid-flow senses in both packs.
- Rasnovian: 810 dictionary entries; targeted agricultural vocabulary.
- Javenœrl: 1,118 entries; selected subordinate clauses, reflexives, reciprocals, passive, perfect progressive, quantity-subject questions and restricted productive morphology.
- Repeated targeted 40-sentence development audit: Rasnovian 25 → 29 full forward/reverse parses; Javenœrl 16 → 31. These counts are not translation-accuracy measurements.

## Shared paraphrase adapter v4

- Common English expression and synonym recognition for both packs; no native vocabulary expansion.
- Preferred idiomatic interpretations and bounded fallback search.
- [71-sentence development audit](tests/shared-coverage-audit.md): Rasnovian 21 → 35 and Javenœrl 22 → 41 forward/reverse parses at that earlier snapshot.

## Earlier standards

- Javenœrl 0.3.0–0.3.3: spelling conventions, word formation, Werk/Cœur morphology, everyday vocabulary, comparisons and ability constructions.
- [Rasnovian 0.9.0 release audit](tests/rasnovian-release-audit.md): 794 entries, expanded clause grammar and everyday language.
- [Rasnovian reconstruction R0.1](reconstruction/README.md): separate experimental historical research, not a replacement for the modern standard.
