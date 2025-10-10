# Changelog

## [Unreleased]

### Added
- New section templates to `framework/templates.md`:
  - `SocialProofLogos`: For displaying client or partner logos.
  - `AuthoritySection`: For showcasing media mentions and awards.
  - `FaqSection`: For frequently asked questions.
  - `AnimatedHeroSection`: A hero section with an animated title.
- New `FormField` component template for building forms consistently.

### Changed
- Improved `HeroSection` and `CtaSection` in `framework/templates.md` to include an optional `ctaAnxietyReducer` prop for supportive microcopy below the call-to-action button.
- **Refactored the core framework to be design-led.** Updated `masterprompt-eng-us.md`, `masterprompt-pt-br.md`, and `steps.md` to introduce a dual-persona system. The process now starts with a **UX Architect** persona (defined in `.gemini/persona.md`) to create a design blueprint before the **Expert Co-Pilot** persona begins development.
