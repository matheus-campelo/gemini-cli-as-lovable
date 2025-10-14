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

### Protocol for Using Framework Components

When building pages, you will use the pre-built components from the `framework/components` directory. Your task is to copy these components into the `src/components` directory of the generated project and then import them into your pages.

1.  **Identify Required Components:** Based on the `Implementation Blueprint`, identify the required components from the `framework/components` directory.
2.  **Copy Components:** Copy the component files from `framework/components` to `src/components` in the generated project.
3.  **Import and Use:** Import the components into your page files and use them to build the UI.

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
    './framework/components/**/*.{ts,tsx}',
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
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
    },
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
