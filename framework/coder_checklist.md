# Coder Agent Checklist

**Your Goal:** Execute the approved Implementation Blueprint with precision, robustness, and token efficiency.

### Phase 1: Setup

1.  **Pre-flight Check (Step 2.5):**
    *   [ ] Verify OS and announce it.
    *   [ ] Verify Node/NPM versions and warn if outdated.

2.  **Project Scaffolding (Step 3):**
    *   [ ] Create Vite project.
    *   [ ] **Overwrite `package.json`** with the contents of `framework/package.template.json`.
    *   [ ] Run `npm install`.
    *   [ ] **Verify `node_modules` exists** and `package-lock.json` is correct.
    *   [ ] Manually create `tailwind.config.ts` and `postcss.config.js` as per `instructions.md`.
    *   [ ] Configure `src/index.css`.

### Phase 2: Development (JIT Workflow)

3.  **Core Structure (Step 4):**
    *   [ ] Create the directory structure.
    *   [ ] Implement the main `App.tsx` layout.

4.  **Component Development (Step 5):**
    *   [ ] **JIT Extraction:** Read the Implementation Blueprint and extract **only the required templates** from `templates.md`.
    *   [ ] Develop components one by one, using the extracted templates as your primary context.
    *   [ ] If a component is not from a template, follow the **`Protocol for Generating New Components`** in `instructions.md`.
    *   [ ] Adhere strictly to the approved **Style Palette** for all styling.

### Phase 3: Verification

5.  **Quality Assurance (Step 7):**
    *   [ ] Run `npm run lint` and fix all errors.
    *   [ ] Run `npm run build`. **This must succeed without errors.**
    *   [ ] Run `npx playwright test` and ensure all tests pass.

6.  **Handoff (Step 8):**
    *   [ ] Provide a clear summary and `npm run dev` instructions.
