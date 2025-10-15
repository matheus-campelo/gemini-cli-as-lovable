# Changelog

## [1.6.0] - 2025-10-15

### Added

- **Design & Content Quality Gates:** Introduced a robust, three-layered system to prevent the creation of projects without user-approved design and content.
  - **`coder_checklist.md`:** A new mandatory pre-flight checklist (`framework/coder_checklist.md`) was created. The Coder Agent must now verify that the Style Palette, Design Blueprint, and content briefing have been approved by the user before writing any code.
  - **Workflow Enforcement:** The main `framework/steps.md` workflow was updated to integrate this checklist as a hard quality gate at the beginning of the development phase.
  - **"Content is King" Golden Rule:** A new core directive was added to `framework/masterprompt.md` explicitly forbidding the use of placeholder text and mandating that all content be sourced from the user-provided `briefing.md`.

## [1.5.0] - 2025-10-15

### Fixed

- **Improved Scaffolding Reliability:** Replaced the interactive and error-prone `npm create vite@latest` command with a fully manual and reliable scaffolding process in `framework/steps.md`. This new process programmatically creates all necessary files (`package.json`, `vite.config.ts`, `tsconfig.json`, etc.) and pre-configures them, preventing setup failures.
- **Resolved Dependency Failures:** Removed the `@playwright/visual-regression-tracker` package from `framework/package.template.json` after it was identified as a source of `404` installation errors.
- **Prevented Path Resolution Errors:** The new manual scaffolding process now correctly configures Vite and TypeScript path aliases (`@/`) from the very beginning, eliminating module import errors at runtime.
- **Corrected Execution Directory:** Added explicit instructions in `framework/steps.md` to change into the project directory before running `npm install` or other commands, fixing `ENOENT` errors caused by running commands in the wrong location.

## [1.4.0] - 2025-10-15

### Added

- **On-Demand Test Generation:** Introduced a new "QA Engineer" persona and a token-efficient workflow for generating Playwright tests on demand.
  - **QA Engineer Persona:** A new persona in `masterprompt.md` is activated upon user request to handle test generation.
  - **Test-Specific Context (TSC):** Implemented a hyper-efficient context-gathering method where the AI parses a component to create a minimal TSC (Interactable Elements, Props, State) instead of reading the entire source code. This significantly reduces token consumption.
  - **Token-Efficient Workflow:** Added a new multi-step process to `steps.md` (`Part 4`) that guides the AI through receiving a natural language prompt, generating a TSC, writing a Playwright test based *only* on the TSC, and then executing the new test in isolation.
  - **Page Object Model (POM):** All generated tests are required to follow the POM pattern for maintainability and robustness.

## [1.3.0] - 2025-10-14

### Changed

- **Enhanced Framework Personality and Modernity:** Implemented significant improvements across templates and directives to inject more personality, dynamism, and visual richness into generated websites.
  - **Microinteractions and Expressive Animations:** Refactored `FeaturesSection.tsx` to include `framer-motion` for staggered entrance animations and a "magnetic" hover effect on feature cards, making interactions more engaging.
  - **Dynamic and Asymmetric Layouts:** Updated `HeroSection.tsx` to support a split-screen layout with a `visualElement` prop, allowing for more dynamic and visually impactful hero sections.
  - **Richer Typographic and Graphic Options:**
    - Introduced a new `IllustratedFeatures.tsx` component (located in `framework/components/sections/`) to allow for more prominent graphic elements in feature displays, moving beyond generic icons.
    - Updated `templates.md` to include the new `IllustratedFeatures` component.
    - Enhanced `briefing.md` with new questions regarding font style preferences (Sans-Serif, Serif, Display) and graphic illustration styles (minimalist, vibrant, hand-drawn) to better capture brand personality.
    - Modified `masterprompt.md` to instruct the AI to leverage these new components and principles, emphasizing the creation of visually stunning, premium, and personality-rich designs, and encouraging the use of `visualElement` and `IllustratedFeatures` for enhanced visual richness.

## [1.2.0] - 2025-10-14

### Added

- **Component-as-Code Model:** Decoupled components from templates by creating a component library in `framework/components`. This makes the framework more modular, scalable, and less prone to errors.

- **Theme-as-Data Model:** Automated the design system by using CSS variables and a theme template. This ensures that the generated website perfectly matches the user's brand identity.

- **Visual Regression Testing:** Enhanced the final verification with visual testing using Playwright. This ensures that the application's UI has not changed unexpectedly.