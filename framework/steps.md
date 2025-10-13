# Project Development & Refactoring Roadmap

This document outlines the step-by-step process for building and refactoring web applications, ensuring alignment with technical standards and project-specific requirements.

---

## Part 1: UX Architecture & Design Phase

**Step 0: Generate the Design Blueprint**
*   **Persona:** UX Architect
*   **Action:** Read and apply the principles from `.gemini/persona.md` to the user-provided `briefing.md`.
*   **Goal:** To produce a comprehensive design and layout proposal. This document should:
    *   Translate the "Look & Feel" from the briefing into a concrete design system (colors, typography, etc.).
    *   Propose creative layout options for key sections.
    *   Suggest specific conversion-focused elements (Social Proof, CTAs) to be included.
*   **Output:** A detailed design blueprint that will guide the development process.

---

## Part 2: New Project Development Roadmap

**Step 1: Analyze Foundational Instructions**
*   **Persona:** Expert Co-Pilot
*   **Action:** Read and fully comprehend the `instructions.md` file.
*   **Goal:** Internalize the core architecture, technology stack (Vite, React, TS, Tailwind, shadcn/ui), and best practices for structure, design, and responsiveness.

**Step 2: Understand Project-Specific Requirements**
*   **Action:** Read and analyze the completed `briefing.md` and the **Design Blueprint** from Part 1.
*   **Goal:** Gain a deep understanding of the project's objectives, features, and the specific UI/UX to be implemented.
*   **Sub-step:** If any requirements are unclear or conflicting, ask for clarification before proceeding.

**Step 3: Project Scaffolding & Configuration**
*   **Action:** Create a new project directory and initialize a Vite project with the `react-ts` template.
*   **Action:** Install all necessary dependencies (e.g., `tailwindcss`, `framer-motion`, `lucide-react`, `shadcn/ui`).
*   **Action:** Configure the project by setting up `tailwind.config.ts`, `postcss.config.js`, `tsconfig.json` (with path aliases), and `vite.config.ts`.
*   **Goal:** Establish a clean, configured, and ready-to-develop project environment.

**Step 4: Build Core Layout & Structure**
*   **Action:** Create the standard directory structure (`src/pages`, `src/components`, `src/hooks`, `src/lib`, `src/assets`).
*   **Action:** Implement the main layout in `App.tsx`, including global providers, a header, a main content area, and a footer, based on the Design Blueprint.
*   **Action:** Create placeholder components for each major section identified in the briefing (e.g., `HeroSection.tsx`, `AboutSection.tsx`, `ContactSection.tsx`).
*   **Goal:** Assemble a basic, non-functional skeleton of the main page to validate the overall structure.

**Step 5: Iterative Component Development**
*   **Action:** Develop each section component one by one, from top to bottom, strictly following the Design Blueprint.
*   **Process for each component:**
    1.  Build the UI using `shadcn/ui` components and Tailwind CSS, following a mobile-first approach.
    2.  Implement animations and transitions using `framer-motion`.
    3.  Add necessary interactivity and state management (`useState`, custom hooks).
*   **Goal:** Incrementally build and polish the full user interface in a structured manner.

**Step 5.5: Visual Quality Self-Assessment**
* **Persona:** Expert Co-Pilot
* **Action:** Before proceeding to functionality, pause and visually review all components developed so far. Compare the result with the **Design Blueprint** from Phase 1.
* **Verification Checklist:**
    * Do the applied colors exactly match the defined palette?
    * Is the typography (size, weight, font) consistent and aligned with the design?
    * Is the spacing (margins, paddings, grids) harmonious and consistent?
    * Does the site look like a polished final product, not a prototype?
* **Goal:** To ensure the project's visual foundation is flawless before adding functional logic. If any checklist item fails, correct it immediately before proceeding.

**Step 6: Implement Core Functionality**
*   **Action:** Develop and integrate key features, such as the contact form (with validation using `react-hook-form` and `zod`).
*   **Action:** Connect to any required third-party services or APIs (e.g., EmailJS for forms, Google Analytics).
*   **Goal:** Bring the static UI to life with full functionality.

**Step 7: Verification & Quality Assurance**
* **Action:** Run the linter (`npm run lint`) to enforce code quality and catch syntax errors.
* **Action:** Execute the production build (`npm run build`) to ensure the application compiles successfully without any errors or dependency issues.
* **Goal:** Ensure the project is technically robust, error-free, and ready for deployment. This step serves as the final technical validation from the AI.

**Step 8: Finalization & Handoff**
* **Action:** Present a summary of the completed work, listing the sections and features that were built according to the design blueprint.
* **Action:** Provide clear instructions for the user on how to run the project locally on their own machine. The instructions should be:
    1.  `npm install` to install all dependencies.
    2.  `npm run dev` to start the local development server and view the website.
* **Goal:** Deliver a high-quality final product and empower the user to run it independently.

---

## Part 3: Refactoring Guidelines for a Mobile-First World

This section outlines a systematic process for refactoring components with a primary focus on creating a responsive, mobile-first user experience.

### **The Mobile-First Mindset**

Instead of designing for a large screen and then scaling down, we build for the small screen first and then adapt the layout for larger viewports. This results in cleaner CSS, better performance on mobile devices, and a more resilient design.

**Core Principle:** Start with a simple, single-column layout and progressively enhance it with responsive prefixes (`sm:`, `md:`, `lg:`).

### **Step-by-Step Refactoring Process**

#### **Phase 1: Analysis & Planning**

1.  **Identify the Refactoring Goal:**
    *   Clearly define what needs to be improved. Is it a specific component's layout on mobile? Is the CSS overly complex? Is there horizontal overflow on small screens?

2.  **Analyze the Existing Code:**
    *   Read the target component(s) and any associated styling.
    *   Understand its current layout structure, props, and state management.

3.  **Check for a Test Safety Net:**
    *   Look for existing unit, integration, or end-to-end (e.g., Playwright) tests that cover the component's functionality.
    *   If no tests exist, consider adding a few basic assertions to prevent regressions before starting the refactor.

4.  **Formulate a Mobile-First Plan:**
    *   **Visualize the Mobile State:** How should this component look on a narrow screen? The simplest answer is usually a single vertical column.
    *   **Identify Breakpoints:** Determine at which screen widths (`sm`, `md`, `lg`, `xl`) the layout should adapt. For example, a 3-column grid on desktop might become a 2-column grid on tablets and a 1-column stack on mobile.

#### **Phase 2: Execution**

5.  **Reset to a Mobile Baseline:**
    *   Temporarily remove or comment out existing complex layout classes (e.g., `grid-cols-3`, `flex-row`, `lg:w-1/2`).
    *   Apply the simplest, mobile-first styles. This usually means using `flex flex-col` or `grid grid-cols-1`.

6.  **Build Up from Mobile:**
    *   Ensure the component looks and functions perfectly on a narrow viewport. There should be no horizontal scrolling.
    *   Incrementally add responsive prefixes to adapt the layout for larger screens. Start with `sm:`, then `md:`, and so on.
    *   **Example:** A list that is vertical on mobile and horizontal on desktop would use `flex-col lg:flex-row`.

7.  **Refactor Responsively:**
    *   Apply responsive prefixes not just to layouts but also to spacing (`p-4 lg:p-8`), typography (`text-base md:text-lg`), and element visibility (`hidden md:flex`).

8.  **Simplify and Componentize:**
    *   While refactoring the styles, look for opportunities to simplify the component's logic.
    *   If a part of the UI is complex or repeated, extract it into its own smaller, reusable component.

#### **Phase 3: Verification**

9.  **Manual Viewport Testing:**
    *   Use browser developer tools to test the component across a wide range of screen sizes, from the smallest mobile devices (e.g., 320px width) up to large desktops.
    *   Ensure the layout adapts gracefully at each breakpoint without visual bugs or content overflow.

10. **Run Automated Tests:**
    *   Execute the entire test suite (if available) to confirm that the refactoring did not break any existing functionality.

11. **Code Quality & Linting:**
    *   Run the linter (`npm run lint`) to ensure the new code adheres to the project's style guide.
    *   Review the code for clarity and maintainability. The mobile-first classes should make the responsive logic easy to read.

12. **Final Build:**
    *   Run the production build command (`npm run build`) as a final check to catch any potential compilation errors.