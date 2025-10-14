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

**Step 1: Analyze Foundational Instructions**
* **Persona:** Coder Agent
* **Action:** (Upon approval) Read and fully comprehend your role-specific checklist and the `instructions.md` file.
* **Goal:** Internalize the core architecture and token-efficient best practices.

**Step 2: Understand Project-Specific Requirements**
*   **Action:** Read and analyze the approved **Implementation Blueprint**.
*   **Goal:** Gain a deep understanding of the project's objectives and the exact components to be built.

**Step 2.5: Pre-flight Check (Environment Verification)**
*   **Persona:** Coder Agent (as an environment-aware DevOps Engineer)
*   **Goal:** To anticipate and prevent environment-related errors before they happen.
*   **Action 1: Detect Operating System.**
*   **Action 2: Verify Critical Dependencies.**

**Step 3: Project Scaffolding & Configuration (Dependency-Stable Method)**
*   **Goal:** To establish a reproducible and stable project environment.
*   **Action 1: Create Project.**
*   **Action 2: Stabilize Dependencies** (using `package.template.json`).
*   **Action 3: Install Dependencies.**
*   **Action 4: Configure Project.**

**Step 4: Build Core Layout & Structure**
*   **Action:** Create the standard directory structure and implement the main layout in `App.tsx`.
*   **Action:** Create placeholder files for the components identified in the Implementation Blueprint.
*   **Goal:** Assemble a basic, non-functional skeleton of the main page.
*   **Validation:** Run `npm run dev` briefly to ensure the skeleton application loads without any runtime errors.

**Step 5: Iterative Component Development (JIT Method)**
*   **Action 1: Extract Required Templates.**
    *   Based on the list of required templates from the Implementation Blueprint, parse `framework/templates.md`.
    *   Extract *only* the code for the specified templates (e.g., the content between `<!--- TEMPLATE_START: HeroSection -->` and `<!--- TEMPLATE_END: HeroSection -->`).
*   **Action 2: Develop Components.**
    *   With the small, relevant context of the extracted templates, develop each section component one by one.
    *   If a component is not in the templates, follow the `Protocol for Generating New Components`.
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

**Step 8: Finalization & Handoff**
* **Action:** Present a summary of the completed work.
* **Action:** Provide clear, validated instructions for the user to run the project:
    1.  `npm install`
    2.  `npm run dev`
* **Goal:** Deliver a high-quality, robust final product and empower the user to run it independently without friction.

---

## Part 3: Refactoring Guidelines

(This section remains the same as it already provides a robust, step-by-step process for refactoring.)
