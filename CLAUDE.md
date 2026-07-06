# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## Standard Operational Commands

- Initialize project dependencies: `npm install`
- Run local framework development server: `npm run dev`
- Compile production distribution assets: `npm run build`
- Validate code linting patterns: `npm run lint`

## Code Architecture

### Project Structure
- **Framework**: React 19 with Vite
- **Entry Point**: `anigift/src/main.jsx`
- **App Component**: `anigift/src/App.jsx`
- **Styling**: CSS modules (`App.css`, `index.css`)

### Components
Located in `anigift/src/components/`:
- `AuthPage.jsx` - Authentication flows
- `Home.jsx` - Landing page
- `Navbar.jsx` - Navigation
- `ProductCard.jsx` - Product display
- `Footer.jsx` - Page footer
- `ParticleBackground.jsx` - Visual effects

### Data
- `anigift/src/data/products.js` - Product catalog data

### Build Configuration
- `anigift/vite.config.js` - Vite configuration
- `anigift/.oxlintrc.json` - Oxlint rules
- Output: `anigift/dist/` (do not edit)

## Project Memory Blueprint: anigift E-Commerce App

### E-Commerce Domain & Workspace Policies
- **File System Separation**: Core data interfaces, product payloads, and forms must be defined within `src/types/`. Global shopping workflows belong in `src/context/`.
- **Protected Paths**: Never manually edit or alter items nested inside the compiled output path (`dist/`).
- **Mathematical Safety**: Enforce absolute integer math or explicit rounding utilities across pricing and cart totals. Reject loose floating-point math for currencies.
- **State Mutation Bounds**: Product catalog adjustments and cart operations must utilize immutable arrays or explicit state updates to prevent framework race conditions.

### Automated Pull Request (PR) Review Guardrails
- **Continuous Auditing**: Every PR must undergo a headless evaluation by invoking the `.claude/skills/ecom-review/SKILL.md` rule framework.
- **Contract Adherence**: API adjustments require matching schema signatures or type updates inside `src/types/ecom.ts`.
- **Error Telemetry**: Asynchronous actions, cart mutations, and checkout handlers must be enclosed in explicit error catch blocks to provide transparent debug logging.