# Project Development & Refactoring Roadmap

This document outlines a step-by-step, proactive process for building and refactoring web applications, ensuring a fault-tolerant development experience.

---

## Part 1: Collaborative UX Architecture & Design Phase

**Step 0: Conduct Briefing Interview**
* **Persona:** UX Architect (as an Interactive Consultant)
* **Goal:** To establish a deep, shared understanding of the project vision through a guided, conversational process.
* **Action:** Instead of passively reading `briefing.md`, initiate a dialogue with the user. Ask the questions from the briefing template one by one, dynamically asking for more detail based on their answers.
* **Crucial:** If the user provides a URL for a reference site, use available tools to analyze its visual elements (colors, fonts, layout) to inform your suggestions.
* **Output:** A rich, validated set of requirements based on a direct conversation with the user.

**Step 0.1: Propose Style Palette & Await Approval**
* **Persona:** UX Architect
* **Goal:** To get early, low-cost buy-in on the core aesthetics before committing to a full design.
* **Action:** Based on the Briefing Interview, create and present a "Style Palette" to the user. This is a concise, textual and visual summary of the proposed design system.
* **Output Format:**
    *   **Colors:** List the primary, secondary, and accent colors with their hex codes.
    *   **Typography:** Name the proposed fonts for headings and body text.
    *   **Component Style:** Describe the style of key elements (e.g., "Buttons will have slightly rounded corners and a subtle gradient," "Cards will have sharp corners and a soft drop-shadow").
*   **Do not proceed until the user explicitly approves the Style Palette.**

**Step 0.2: Generate the Design Blueprint**
* **Persona:** UX Architect
* **Goal:** To produce a comprehensive design and layout proposal based on the validated requirements and the approved Style Palette.
* **Action:** With the approved Style Palette as a guide, apply the principles from `.gemini/persona.md` to create the full Design Blueprint, detailing the layout and structure of each section.
* **Output:** A comprehensive "Design Blueprint" that is highly likely to align with the user's vision.

---

## Part 2: Technical Architecture & Implementation (JIT Workflow)

**Step 0.5: Create Implementation Blueprint & Await Approval**
* **Persona:** Expert Co-Pilot (Architect Agent)
* **Action:** Take the **Design Blueprint** and create a detailed technical implementation plan.
* **Plan Requirements:**
    1.  List every file to be created or modified.
    2.  Summarize the props and structure for each new component.
    3.  **Crucially, list all specific templates from `templates.md` that will be required for the implementation (e.g., `HeroSection`, `FaqSection`).**
* **Action:** Present this plan to the user for approval.
* **Goal:** To provide full transparency, gain user approval, and prepare for a token-efficient development phase. **Do not proceed without explicit user confirmation.**

**Step 1: Pre-Flight Check & Asset Verification**
* **Persona:** Coder Agent
* **Action:** (Upon approval of Implementation Blueprint) Read and strictly adhere to the `framework/coder_checklist.md`.
* **Goal:** To ensure all design and content prerequisites are met before any technical work begins.
* **Validation:** Verify every item on the checklist. Do not proceed if any item is unchecked. Halt and inform the user if assets are missing or unapproved.

**Step 2: Understand Project-Specific Requirements**
*   **Action:** Read and analyze the approved **Implementation Blueprint**.
*   **Goal:** Gain a deep understanding of the project's objectives and the exact components to be built.

**Step 2.5: Pre-flight Check (Environment Verification)**
*   **Persona:** Coder Agent (as an environment-aware DevOps Engineer)
*   **Goal:** To anticipate and prevent environment-related errors before they happen.
*   **Action 1: Detect Operating System.**
*   **Action 2: Verify Critical Dependencies.**

**Step 3: Manual Project Scaffolding & Configuration**
*   **Goal:** To build a project from the ground up, ensuring all configurations are correctly set from the start to prevent common setup errors.
*   **Action 1: Create Project Directory.**
    *   Create a directory for the new project based on the project name from the briefing (e.g., `faz-creative-marketing`).
*   **Action 2: Create Core Configuration Files.**
    *   **`package.json`**: Read `framework/package.template.json`, update the `name` field to the project's name, and write the new content to `[PROJECT_DIR]/package.json`.
    *   **`vite.config.ts`**: Create `[PROJECT_DIR]/vite.config.ts` and add the necessary configuration for Vite, including the `@vitejs/plugin-react` and a `resolve.alias` to map `@` to the `src` directory.
    *   **`tsconfig.json`**: Create `[PROJECT_DIR]/tsconfig.json` with the correct compiler options, including setting `baseUrl` to `.` and `paths` to `{"@/*": ["src/*"]}` to enable TypeScript path alias resolution. Also create the accompanying `tsconfig.node.json`.
    *   **Tailwind CSS Config**: Copy the contents for `tailwind.config.ts` and `postcss.config.js` from `framework/instructions.md` and write them to `[PROJECT_DIR]/tailwind.config.ts` and `[PROJECT_DIR]/postcss.config.js`.
*   **Action 3: Create Initial Application Structure.**
    *   Create the main entry file at `[PROJECT_DIR]/index.html`.
    *   Create the source directory `[PROJECT_DIR]/src`.
    *   Create the main application files `[PROJECT_DIR]/src/main.tsx` and `[PROJECT_DIR]/src/App.tsx`.
*   **Action 4: Install Dependencies.**
    *   **Crucially, change the execution directory to `[PROJECT_DIR]` before running the install command.**
    *   Execute `npm install`.
*   **Validation:** This manual process ensures that path aliases are configured correctly from the beginning and that all commands are run in the proper directory, preventing both resolution and `ENOENT` errors.**

**Step 3.5: Generate Theme**
*   **Action:** Read the `Theme` section from the `briefing.md`.
*   **Action:** Read the `framework/theme.template.css` file.
*   **Action:** Replace the placeholder values in the `theme.template.css` with the values from the `briefing.md`.
*   **Action:** Create a new file `src/theme.css` with the generated content.
*   **Goal:** To create a theme file that matches the user's brand.
*   **Action:** Create the standard directory structure and implement the main layout in `App.tsx`.
*   **Action:** Create placeholder files for the components identified in the Implementation Blueprint.
*   **Goal:** Assemble a basic, non-functional skeleton of the main page.
*   **Validation:** Run `npm run dev` briefly to ensure the skeleton application loads without any runtime errors.

**Step 5: Component Assembly**
*   **Action 1: Copy Required Components.**
    *   Based on the list of required components from the Implementation Blueprint, copy the component files from `framework/components` to `src/components` in the generated project.
*   **Action 2: Assemble Pages.**
    *   Import the components into your page files and use them to build the UI.
*   **Goal:** Incrementally build the full UI in a structured and token-efficient manner.

**Step 5.5: Visual Quality Self-Assessment**
* **Persona:** Expert Co-Pilot
* **Action:** Pause and visually review all developed components against the **Design Blueprint**.
* **Verification Checklist:** Check for exact color matching, consistent typography, harmonious spacing, and a polished final look.
* **Goal:** Ensure visual perfection before adding complex logic. Correct any deviations immediately.

**Step 6: Implement Core Functionality**
*   **Action:** Develop and integrate key features like contact forms, API connections, etc.
*   **Goal:** Bring the static UI to life with full functionality.

**Step 7: Final Verification & Quality Assurance**
* **Action 1: Code Quality Linting.**
    *   Run `npm run lint`.
    *   **Validation:** Ensure the command completes without errors, indicating high code quality.
* **Action 2: Production Build.**
    *   Execute `npm run build`.
    *   **Validation:** This is the most critical check. The command **must** complete with a success message (e.g., "Build successful!") and generate a `dist` directory. This confirms that all code is syntactically correct, types match, and all dependencies are correctly resolved. An error here indicates a critical failure that must be addressed.
* **Action 3: End-to-End Testing.**
    *   Run `npx playwright test`.
    *   **Validation:** All E2E tests must pass, confirming that critical user journeys are functioning as expected from end to end.

**Step 7.5: Visual Regression Testing**
*   **Action:** Copy the `framework/tests/visual.spec.ts.template` file to `tests/visual.spec.ts` in the generated project.
*   **Action:** Run `npx playwright test --update-snapshots` to create the initial snapshots.
*   **Action:** Run `npx playwright test` to compare the current state of the application with the snapshots.
*   **Goal:** To ensure that the application's UI has not changed unexpectedly.
* **Action:** Present a summary of the completed work.
* **Action:** Provide clear, validated instructions for the user to run the project:
    1.  `npm install`
    2.  `npm run dev`
* **Goal:** Deliver a high-quality, robust final product and empower the user to run it independently without friction.

---

## Part 3: Refactoring Guidelines

(This section remains the same as it already provides a robust, step-by-step process for refactoring.)

---

## Part 4: On-Demand Test Generation (Token-Efficient)

**Step 9: Receive Test Prompt**
* **Persona:** QA Engineer
* **Action:** Prompt the user for a testing scenario in natural language (e.g., "Test the contact form with an invalid email").

**Step 10: Generate Test-Specific Context (TSC)**
* **Persona:** QA Engineer
* **Action:** You will not read the entire file. Instead, perform a structural analysis on the target component file (e.g., `src/components/ContactForm.tsx`).
* **Action:** Generate and present a concise TSC summary to the user for context. **Example Output for a Contact Form:**
    ```
    TSC for ContactForm.tsx:
    - PROPS: onSubmit (function)
    - STATE: email (string, initial: ''), message (string, initial: '')
    - ELEMENTS:
      - input: label="Email Address"
      - textarea: label="Message"
      - button: name="Submit Inquiry"
    ```
* **Goal:** To create a minimal, token-cheap context that contains everything needed for the test, and nothing more.

**Step 11: Generate Test Code from TSC**
* **Persona:** QA Engineer
* **Action:** Use the TSC generated in the previous step as the sole context to write the complete Playwright test file (`.spec.ts`).
* **Action:** Present the generated code to the user for approval.

**Step 12: Save and Execute Test**
* **Persona:** Coder Agent (re-invoked)
* **Action:** Upon user approval, save the generated code to the specified file in the `tests/` directory.
* **Action:** Execute only the new test file using the command: `npx playwright test tests/new-test-file.spec.ts`.
* **Action:** Report the results back to the user and ask for the next test scenario.
