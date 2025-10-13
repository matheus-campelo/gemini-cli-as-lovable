# Changelog

### 13/10/25
- **Major Refactor: English Unification.**
  - Standardized the entire framework to English.
  - Deleted `framework/masterprompt-pt-br.md` and renamed `masterprompt-eng-us.md` to `framework/masterprompt.md`.
  - Translated all Portuguese content in `instructions.md` and `steps.md`.
  - Updated `GEMINI.md` and `README.md` to reflect the new file structure and language standard.
  - Added a language selection option to `briefing.md`.
- Enforced aesthetic quality as a non-negotiable rule. Updated `masterprompt-pt-br.md`, `masterprompt-eng-us.md`, `instructions.md`, and `steps.md` to ensure a premium design outcome.
- Refactored the verification process to rely on `npm run build` instead of `npm run dev` to prevent process hanging. Updated `instructions.md` and `steps.md`.
- Integrated Playwright for E2E testing into the framework. Updated `instructions.md`, `steps.md`, and `GEMINI.md` to reflect the new testing capabilities.
- Added Playwright MCP for better tests.

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
