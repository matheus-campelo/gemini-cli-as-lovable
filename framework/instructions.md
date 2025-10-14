# Gemini's Guide to Building Premium Websites (Architecture Hub)

This document serves as a central hub for the framework's technical guidelines. The detailed, step-by-step instructions have been distilled into role-specific checklists for efficiency.

**Core Tech Stack:**
*   **Build Tool:** Vite
*   **Framework:** React
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS
*   **UI Components:** shadcn/ui
*   **Animations:** Framer Motion

---

## Key Architectural Documents

1.  **`framework/masterprompt.md`**
    *   Defines the AI personas (Consultant, Architect, Coder) and the overall workflow.

2.  **`framework/steps.md`**
    *   Outlines the detailed, step-by-step execution plan for the entire project lifecycle.

3.  **`framework/architect_checklist.md`**
    *   A concise checklist for the Architect Agent, focusing on creating a token-efficient Implementation Blueprint.

4.  **`framework/coder_checklist.md`**
    *   A concise checklist for the Coder Agent, detailing the setup, JIT development, and verification process.

5.  **`framework/templates.md`**
    *   The machine-parsable library of approved component templates.

6.  **`framework/package.template.json`**
    *   The source of truth for stable, tested dependency versions.

---

## Core Protocols (To be referenced when needed)

These protocols are detailed here as they are fundamental principles to be used by the Coder Agent when creating new assets.

### State Management Strategy

*   **Local State:** Use `useState` for component-specific state.
*   **Global State:** Use React Context (e.g., the `ThemeProvider` in `templates.md`) for simple shared state like themes or auth status.
*   **External Libraries:** Avoid unless explicitly required by the briefing for complex state.

### Protocol for Generating New Components

When a required component is not in `templates.md`, follow these steps:

1.  **Define Props:** Define the component's API in TypeScript first.
2.  **Use Semantic HTML:** Build the structure with semantic elements (`<section>`, etc.).
3.  **Mobile-First Styling:** Style for small screens first, then use responsive prefixes (`md:`, `lg:`).
4.  **Apply Design System:** Use only the CSS variables from `src/index.css` for all styling.
5.  **Animate Consistently:** Wrap in `AnimatedSection` if it should animate on scroll.
6.  **Ensure Accessibility (A11y):** Use `aria-` attributes and ensure focus states and contrast are correct.

### Manual Configuration Snippets

*If manual setup is required, these are the correct, Vite-compatible contents.*

**`tailwind.config.ts`**
```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {},
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
```

**`postcss.config.js`**
```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```
