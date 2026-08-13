# CONTRIBUTING.md

# Contributing to A.B.I.R | Beyond Ordinary

First of all, thank you for taking the time to contribute to **A.B.I.R | Beyond Ordinary**! 🚀

Whether you're fixing a bug, improving the UI, suggesting an idea, improving documentation, or building something new, your contribution is welcome.

This guide explains how to contribute effectively while keeping the project clean, consistent, and easy to maintain.

---

## 📋 Table of Contents

* [Before You Start](#before-you-start)
* [Getting Started](#getting-started)
* [Project Structure](#project-structure)
* [Making Changes](#making-changes)
* [Code Style](#code-style)
* [Commit Guidelines](#commit-guidelines)
* [Pull Requests](#pull-requests)
* [Reporting Bugs](#reporting-bugs)
* [Suggesting Features](#suggesting-features)
* [Design Contributions](#design-contributions)
* [Community Guidelines](#community-guidelines)
* [License](#license)

---

## Before You Start

Before contributing, please:

1. Read the project's `README.md`.
2. Read the `CODE_OF_CONDUCT.md`.
3. Check existing issues and pull requests.
4. Make sure your contribution does not already exist.
5. Keep your changes focused and relevant to the project.

For larger changes, it is recommended to open an issue first so the idea can be discussed before significant development begins.

---

## Getting Started

### 1. Fork the Repository

Create your own fork of the repository on GitHub.

### 2. Clone Your Fork

```bash
git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
```

Then move into the project directory:

```bash
cd YOUR-REPOSITORY
```

### 3. Create a Branch

Create a separate branch for your contribution:

```bash
git checkout -b feature/your-feature
```

Examples:

```text
feature/new-project-card
fix/mobile-navigation
docs/update-readme
style/improve-footer
```

Avoid making changes directly on the `main` branch.

---

## Project Structure

The project follows a component-based structure to keep the code organized.

```text
/
├── assets/
│   ├── images/
│   └── icons/
│
├── components/
│   ├── header.html
│   ├── topbar.html
│   └── footer.html
│
├── css/
│   └── global.css
│
├── data/
│   └── ...
│
├── js/
│   ├── component.js
│   └── script.js
│
├── pages/
│   └── ...
│
├── index.html
├── README.md
├── CONTRIBUTING.md
└── CODE_OF_CONDUCT.md
```

Please follow the existing structure when adding new files.

Do not create duplicate stylesheets, scripts, or components when an existing file is intended to handle that functionality.

---

## Making Changes

When working on the project:

* Keep changes focused on one purpose.
* Avoid unnecessary modifications to unrelated files.
* Reuse existing components and styles whenever possible.
* Make sure new functionality works on both desktop and mobile.
* Test your changes before submitting them.
* Remove unused code, files, and debugging statements.
* Do not commit personal configuration files, credentials, API keys, or sensitive information.

If you add a new dependency, explain why it is necessary in the pull request.

---

## Code Style

### HTML

Use semantic HTML where possible.

Prefer:

```html
<section>
    <h2>About Me</h2>
    <p>...</p>
</section>
```

instead of creating unnecessary `<div>` elements.

Keep indentation consistent with the existing project.

### CSS

Use the project's existing CSS variables and design system whenever possible.

For example:

```css
color: var(--accent-color);
```

instead of introducing a new hard-coded color unnecessarily.

Keep selectors readable and avoid overly specific selectors.

### JavaScript

Use clear variable and function names.

Prefer:

```javascript
const projectContainer = document.querySelector(".projects");
```

over unclear names such as:

```javascript
const x = document.querySelector(".projects");
```

Keep JavaScript modular and avoid duplicating functionality.

---

## Commit Guidelines

Write clear and meaningful commit messages.

Recommended format:

```text
type: short description
```

Examples:

```text
feat: add project filtering
fix: repair mobile navigation
style: improve project card hover
docs: update contributing guide
refactor: simplify component loader
```

Common types include:

| Type       | Purpose                      |
| ---------- | ---------------------------- |
| `feat`     | New functionality            |
| `fix`      | Bug fix                      |
| `style`    | Visual or formatting changes |
| `docs`     | Documentation                |
| `refactor` | Code restructuring           |
| `perf`     | Performance improvement      |
| `chore`    | Maintenance                  |

Keep commit messages short, descriptive, and related to the actual change.

---

## Pull Requests

Before opening a pull request:

* Make sure your branch is up to date.
* Test the changes locally.
* Check the browser console for errors.
* Test responsive layouts.
* Review your own changes before submitting.
* Remove unnecessary files and debugging code.

Your pull request should include:

### What Changed?

Briefly describe what you changed.

### Why?

Explain the reason for the change.

### Testing

Explain how you tested it.

### Screenshots

For visual or UI changes, include screenshots or recordings when useful.

---

## Pull Request Checklist

Before submitting a pull request:

* [ ] I tested my changes locally.
* [ ] My changes work on desktop.
* [ ] My changes work on mobile.
* [ ] I checked for console errors.
* [ ] I followed the existing project structure.
* [ ] I followed the existing design language.
* [ ] I removed unnecessary code and files.
* [ ] I did not include passwords, API keys, or other secrets.
* [ ] My commit messages are clear.
* [ ] I have reviewed my own changes.
* [ ] I have read the `CODE_OF_CONDUCT.md`.

---

## Reporting Bugs

Found something broken?

Please search existing issues before creating a new one.

When reporting a bug, provide:

* A clear title.
* A description of the problem.
* Steps to reproduce it.
* Expected behavior.
* Actual behavior.
* Browser and operating system information when relevant.
* Screenshots or recordings when helpful.

A good bug report makes it much easier to reproduce and fix the problem.

---

## Suggesting Features

Have an idea for the project?

Feature suggestions are welcome.

Please explain:

* What you would like to add.
* Why it would be useful.
* How you imagine it working.
* Whether it affects the existing design or functionality.

For major features, please open an issue before implementing the feature so the approach can be discussed first.

---

## Design Contributions

A.B.I.R | Beyond Ordinary follows a futuristic, clean, developer-focused visual identity.

When contributing UI or visual changes:

* Preserve the overall visual language.
* Maintain accessibility and readability.
* Avoid introducing unrelated design systems.
* Keep animations purposeful and smooth.
* Make sure interactive elements have clear hover and active states.
* Test the design at different screen sizes.

New visual ideas are encouraged, but they should complement the project's existing identity rather than completely replacing it without discussion.

---

## Community Guidelines

Please keep contributions respectful and constructive.

We encourage:

* Collaboration.
* Constructive criticism.
* Questions.
* Experimentation.
* Learning.
* Creative ideas.
* Respectful disagreement.

Please avoid:

* Personal attacks.
* Harassment.
* Spam.
* Unnecessary arguments.
* Deliberately breaking the project.
* Submitting malicious or harmful code.
* Sharing private information.

For more information, see `CODE_OF_CONDUCT.md`.

---

## License

By contributing to this project, you agree that your contributions may be distributed as part of the project under its applicable license.

Please review the repository's `LICENSE` file for the complete licensing terms.

---

## Thank You ❤️

Every contribution matters.

Whether you submit a complete feature, fix a tiny visual bug, improve documentation, or simply report something that is broken, you're helping make **A.B.I.R | Beyond Ordinary** better.

**Build. Learn. Experiment. Go beyond ordinary.**
