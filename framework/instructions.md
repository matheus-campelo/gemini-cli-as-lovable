# Gemini's Guide to Building Premium Websites

This guide outlines a structured approach for building modern, responsive, and well-architected web applications.

**Core Tech Stack:**
*   **Build Tool:** Vite
*   **Framework:** React
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS
*   **UI Components:** shadcn/ui
*   **Animations:** Framer Motion

---

## Phase 1: Project Setup & Foundation

The goal of this phase is to establish a robust and scalable project foundation.

1.  **Initialize Project:**
    *   Start a new project using Vite with the React + TypeScript template:
        ```bash
        npm create vite@latest my-premium-app -- --template react-ts
        ```

2.  **Install Core Dependencies:**
    *   Navigate into the project directory and install the essential libraries.
        ```bash
        npm install tailwindcss postcss autoprefixer framer-motion lucide-react @radix-ui/react-slot clsx tailwind-merge
        ```

3.  **Configure Tailwind CSS:**
    *   Initialize Tailwind: `npx tailwindcss init -p`.
    *   Configure `tailwind.config.ts` to include all source files in the `content` array.
    *   Set up the `src/index.css` file with Tailwind's `@layer` directives.

4.  **Integrate shadcn/ui:**
    *   Run the `shadcn/ui` init command: `npx shadcn-ui@latest init`.
    *   When prompted, confirm the use of TypeScript, the color variables, and the path alias (`@/*`). This will create the `components.json` file and the `lib/utils.ts` helper.
    *   Configure path aliases in `tsconfig.json` and `vite.config.ts` to ensure `@/*` resolves to `src/*`.

5.  **Establish Theming (`src/index.css`):**
    *   Define the entire design system using CSS variables within the `:root` layer. This includes colors (for both light and dark modes), fonts, border radii, and custom shadows.
    *   This centralized approach, inspired by the reference projects, makes the UI consistent and easy to maintain.

---

## Phase 2: Architecture & Structure

A clean structure is key to a maintainable project.

1.  **Create Directory Structure:**
    *   Organize the `src/` directory logically:
        *   `assets/`: For static files like images and SVGs.
        *   `components/`: For reusable React components.
            *   `ui/`: For `shadcn/ui` components.
            *   `sections/`: For larger, page-specific sections (e.g., `HeroSection.tsx`).
            *   `icons/`: For custom SVG icon components.
        *   `hooks/`: For custom React hooks (e.g., `useIntersectionAnimation.tsx`).
        *   `lib/`: For utility functions.
        *   `pages/`: For top-level page components.

2.  **Set Up App Entry Point:**
    *   `src/main.tsx`: Keep it clean. Its only job is to render the main `App` component.
    *   `src/App.tsx`: This component should act as the root of the application layout. It's the ideal place to set up global context providers (`TooltipProvider`, `QueryClientProvider`, etc.) and render the main layout structure (e.g., Header, Footer).

3.  **Adopt a Component-First Mentality:**
    *   Break down every part of the UI into a component.
    *   Start with the smallest elements (atoms) and compose them into larger components (molecules/organisms), following the principles of Atomic Design.

---

## Phase 3: Design, Animation & Responsiveness

This phase focuses on creating a polished and visually appealing user experience that works on all devices.

1.  **Implement Mobile-First:**
    *   Design and style for mobile screens first. Use Tailwind's responsive prefixes (`sm:`, `md:`, `lg:`) to scale up the design for larger viewports. This ensures a solid baseline experience on all devices.
    *   Pay close attention to touch targets, font sizes, and vertical spacing on mobile.

2.  **Use Layout Primitives:**
    *   Rely on Flexbox and Grid for all layout needs. Avoid absolute positioning for primary layout structures, as it can lead to responsiveness issues.
    *   Use `flex-col` for vertical stacking on mobile and switch to `lg:flex-row` for horizontal layouts on larger screens.

3.  **Animate with Purpose:**
    *   Use `framer-motion` to add subtle, meaningful animations that enhance the user experience without being distracting.
    *   Create a reusable `AnimatedSection` component that uses the `useInView` hook to trigger animations as the user scrolls. This is effective for fade-in and slide-up effects.
    *   Apply micro-interactions to buttons and interactive elements to provide visual feedback.

4.  **Centralize Content:**
    *   For larger sites, extract all user-facing text (titles, descriptions, etc.) into a central file (e.g., `src/data/content.ts`). This makes it easy to update copy without digging through component files.

---

## Phase 4: Finalization & Verification

Before concluding, ensure the project is robust and error-free.

1.  **Code Quality:**
    *   Run the linter (`npm run lint`) to catch any inconsistencies or potential errors in the code.

2.  **Build Verification:**
    *   Execute the production build command (`npm run build`) to ensure the application compiles successfully without any errors.

3.  **Manual Review:**
    *   Thoroughly test the application on different browsers and screen sizes (desktop, tablet, and mobile).
    *   Verify that all interactive elements work as expected and that the design remains consistent and unbroken across all viewports.
