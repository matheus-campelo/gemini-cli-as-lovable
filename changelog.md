# Changelog

### 14/10/25
- **Goal:** Major refactoring to improve first-try accuracy and reduce token consumption.
- **Problem:** The framework, while robust, was not fully optimized. It could misinterpret user needs from a static briefing and consumed excessive tokens by loading large, irrelevant context files.
- **Fix:** Implemented a two-pronged strategy for accuracy and efficiency.
    1.  **Improved Accuracy:** The initial design phase was transformed into a **collaborative consultation**. The `masterprompt.md` and `steps.md` now enforce an interactive "Briefing Interview" and a mandatory "Style Palette" approval step, ensuring user alignment on aesthetics *before* major design work.
    2.  **Improved Efficiency:** The context loading mechanism was overhauled. `templates.md` was made machine-parsable, and the workflow now uses a **Just-in-Time (JIT) approach**, where the Coder Agent only extracts the specific templates it needs. Furthermore, the monolithic `instructions.md` was deprecated in favor of lightweight, role-specific checklists (`architect_checklist.md`, `coder_checklist.md`), dramatically reducing the token load for each persona.

### 14/10/25
- **Goal:** Make the framework more "lovable" by proactively addressing common failure points.
- **Problem:** The framework was vulnerable to several issues: 1) Dependency updates breaking the build (`@latest`), 2) Misinterpreting vague user briefings, 3) Lacking a strategy for creating non-template components, and 4) No clear guidance on state management.
- **Fix:** I implemented four major improvements across the framework:
    1.  **Dependency Stabilization:** Created `framework/package.template.json` with fixed, tested dependency versions. The `steps.md` now instructs the AI to use this template to lock down dependencies, ensuring reproducible builds.
    2.  **Collaborative Briefing:** The design phase in `steps.md` and `masterprompt.md` was refactored. The AI is now required to ask clarifying questions about ambiguous terms in the `briefing.md` *before* creating the design blueprint, ensuring alignment with the user's vision.
    3.  **Component Generation Protocol:** Added a formal protocol to `instructions.md` that guides the AI on how to create new, high-quality components from scratch, covering props, semantics, styling, and accessibility. The `masterprompt.md` was updated to empower the AI to use this protocol.
    4.  **State Management Strategy:** Added a new section to `instructions.md` defining a clear strategy (recommending `useState` for local and `React Context` for simple global state). A `ThemeProvider` context template was also added to `templates.md` as a practical example.

### 14/10/25
- **Goal:** Refactor the core framework to be proactive, fault-tolerant, and environment-agnostic.
- **Problem:** The previous framework was reactive. It assumed a perfect user environment (OS, dependencies) and that commands would always succeed, leading to failures when these assumptions were wrong (e.g., PostCSS conflicts, OS-specific command errors).
- **Fix:** I performed a major refactoring of the core instruction and execution files (`masterprompt.md`, `instructions.md`, `steps.md`).
    - In `instructions.md`, I replaced the unstable `npx tailwindcss init -p` command with a proactive, manual creation of `tailwind.config.ts` and `postcss.config.js` using known stable configurations. I also added "Why?" annotations to each step for clarity.
    - In `steps.md`, I introduced a new **Step 2.5: Pre-flight Check** where the AI agent must now detect the user's OS and verify Node/NPM versions *before* running any project setup commands. I also added explicit **Validation Sub-steps** after critical actions like `npm install` and `npm run build` to ensure each command completes successfully before proceeding.
    - In `masterprompt.md`, I added a new golden rule: **"Robustness and Resilience in First Place."** This rule mandates a proactive approach and defines a **Failure Protocol**, instructing the AI to analyze errors, attempt fixes, and report clearly rather than halting. The Coder Agent persona was also evolved into an "environment-aware DevOps Engineer."

### 14/10/25
- **Goal:** Refactor the framework's workflow to a three-stage agentic pipeline: Planner -> Architect -> Coder.
- **Problem:** The previous two-persona system (UX Architect -> Expert Co-Pilot) lacked a formal step for creating and approving a detailed technical plan before coding began. This could lead to a disconnect between the high-level design and the final implementation.
- **Fix:** I modified `framework/masterprompt.md` and `framework/steps.md` to introduce a new, explicit "Architect" phase.
    - In `masterprompt.md`, the process is now defined as `Phase 1: UX Architecture (Planner)`, `Phase 2: Technical Architecture (Architect)`, and `Phase 3: Guided Development (Coder)`. The Architect persona is responsible for creating a detailed "Implementation Blueprint" from the design.
    - In `steps.md`, a new `Step 0.5` was added, which requires the Architect agent to present this blueprint to the user and receive explicit approval before the Coder agent can proceed to `Step 1`.
    - This change establishes a clear, multi-stage pipeline that ensures technical planning is done upfront and validated by the user, improving transparency and alignment.

- **Goal:** Update `framework/instructions.md` to include detailed guidelines on using Playwright MCP for E2E testing.
- **Problem:** The existing instructions lacked a dedicated section for the newly introduced Playwright MCP testing strategy, leaving the AI agent without clear guidance on how to implement advanced E2E tests.
- **Fix:** I replaced the final section of the `instructions.md` file with a comprehensive guide. This new section, titled "End-to-End Testing with Playwright MCP (Multi-Component Pattern)," explains the philosophy behind testing multi-component user flows, provides a structured approach for writing tests (including file location and naming conventions), offers a concrete code example for assertions, and specifies the exact command for test execution. This ensures the AI can effectively write and run robust E2E tests that validate complex user journeys.

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
