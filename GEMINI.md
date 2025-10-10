# GEMINI.md: Project Context

## Directory Overview

This directory contains the "Gemini CLI as Lovable" project, a structured framework designed to streamline AI-driven development workflows with Google's Gemini. It is not a traditional code project but rather a collection of prompts, templates, and instructional documents that guide the AI in building high-quality, responsive web applications.

The core methodology revolves around a "four-file system" that ensures a consistent, predictable, and high-quality development process from project briefing to final output.

## Key Files

This project's logic is defined by a set of Markdown files that act as instructions and context for the AI.

*   `README.md`: Provides a general overview of the project, its purpose, and how to get started.

*   `framework/masterprompt-eng-us.md` & `framework/masterprompt-pt-br.md`: These are the master prompts that define the AI's persona ("Expert Co-Pilot") and the high-level, phased approach to development. This is the starting point for any interaction.

*   `framework/briefing.md`: A template for the end-user to fill out. It captures all project requirements, including goals, target audience, visual identity ("Look & Feel"), and required content. This file serves as the primary source of truth for project-specific details.

*   `framework/instructions.md`: The technical "Architecture Manual." It dictates the entire tech stack (Vite, React, TypeScript, Tailwind CSS, shadcn/ui, Framer Motion), project setup commands, directory structure, and coding best practices like mobile-first design.

*   `framework/steps.md`: The sequential "Execution Plan." It provides a detailed, step-by-step roadmap for the AI to follow, from project scaffolding and configuration to iterative development and final verification.

*   `framework/templates.md`: The "Approved Component Library." It contains a collection of high-quality, reusable React/TSX code snippets for all standard website sections (e.g., Hero, Features, Footer, CTA), ensuring consistency and quality.

*   `examples/simple-portfolio/briefing.md`: A practical, filled-out example of the briefing document, demonstrating how to define a project within this framework.

## Usage

The intended workflow for using this framework is as follows:

1.  **Briefing:** A user duplicates and fills out the `framework/briefing.md` file to define the requirements for their web project.

2.  **Initiation:** The user starts a session with the Gemini CLI and provides the content of one of the `masterprompt-*.md` files as the initial context. This sets the persona and rules for the AI.

3.  **Execution:** The AI (acting as the "Expert Co-Pilot") then follows the `steps.md` roadmap. It uses `instructions.md` for technical guidance, `templates.md` for code generation, and the user-provided `briefing.md` for all project-specific content and variables.

4.  **Output:** The result is a complete, functional, and high-quality web application project that adheres to the defined architecture and the user's requirements.
