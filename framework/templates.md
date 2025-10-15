# Component & Template Manifest

This document serves as a manifest of all available components and page-level templates within the framework. It provides a high-level overview for the AI agents to understand what building blocks are at their disposal.

--- 

## 1. Core Providers

These components provide application-wide context.

### `ThemeProvider`
- **File:** `framework/contexts/ThemeProvider.tsx`
- **Description:** Manages the application's theme (light/dark) and persists the setting to `localStorage`.
- **Usage:** Wrap the main `App` component with this provider.

--- 

## 2. UI Components (Atoms & Molecules)

These are the base UI elements, primarily derived from `shadcn/ui`. They are located in `framework/components/ui/`.

- **`Accordion.tsx`**: A vertically stacked set of interactive headings that each reveal a section of content.
- **`Avatar.tsx`**: An image element with a fallback for representing a user.
- **`Button.tsx`**: A flexible button component with multiple visual styles.
- **`Card.tsx`**: A versatile container for content with header, content, and footer sections.
- **`Carousel.tsx`**: A carousel component for cycling through elements.
- **`Input.tsx`**: A standard text input field.
- **`Label.tsx`**: A label for form elements.
- **`Sheet.tsx`**: A side panel that can be used for navigation or other content.
- **`Tooltip.tsx`**: A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.

--- 

## 3. Section Components (Organisms)

These are larger, pre-built sections of a page, located in `framework/components/sections/`.

- **`Header.tsx`**: The main navigation bar for the website.
- **`Footer.tsx`**: The footer section of the website.
- **`HeroSection.tsx`**: A large, prominent section at the top of a page.
- **`FeaturesSection.tsx`**: A section for highlighting product features.
- **`TestimonialsSection.tsx`**: A section for displaying customer testimonials.
- **`CtaSection.tsx`**: A call-to-action section.
- **`SocialProofLogos.tsx`**: A section for displaying logos of customers or partners.
- **`AuthoritySection.tsx`**: A section for displaying badges or awards from authorities.
- **`FaqSection.tsx`**: A section for frequently asked questions.
- **`IllustratedFeatures.tsx`**: A section to showcase features with prominent illustrations or graphics instead of small icons. Ideal for "How it Works" or "Our Values" sections.
- **`AnimatedHeroSection.tsx`**: A hero section with an animated headline.

---

## 4. Animation Components

These components are used to add animations to the application.

### `AnimatedSection`
- **File:** `framework/components/AnimatedSection.tsx`
- **Description:** A wrapper component that applies a fade-in animation to its children when they scroll into view.
- **Usage:** Wrap a section of the page with this component to apply the animation.

---

## 5. Page Templates

These are full-page templates that can be used as a starting point for creating new pages.

### `AppLayout`
- **File:** `framework/components/App.tsx` (This should be moved to `framework/page-templates/` in the future)
- **Description:** The main layout for the application, including the header, footer, and a main content area.
- **Usage:** Use this as the root component for the application.