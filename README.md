Here is the complete `README.md` file containing everything we built and discussed for your quantitative portfolio:

```markdown
# Quantitative Research & Systems Portfolio

A private notebook of models, market microstructure, and high-performance engineering decisions designed to analyze risk and signal generation. Built with a high-end, cyberpunk-inspired quantitative aesthetic.

---

## 🚀 Features & Architecture

* **Dynamic Data Pipeline:** Markdown-to-HTML portfolio rendering pipeline. Adding or updating projects requires zero TypeScript or React code—just drop a new `.md` file into `content/projects/`.
* **Real-Time Market Simulator:** A continuous stochastic simulation chart mimicking real price action and implied volatility clustering (Brownian bridge mechanics).
* **Interactive Terminal Block:** A command-prompt terminal section showcasing your role, education, and research background.
* **Physics & Motion Effects:** Built with **Framer Motion** for smooth scroll-triggered slide-ins, pendulum hover cards, and a reactive mouse-following particle field (`Σ`, `α`, `β`, `Δ`, `μ`, `σ`, etc.).
* **Glassmorphic UI:** Styled using Tailwind CSS v4 with custom neon accents, spotlight hover highlights, and backdrop blurring.
* **Smooth Navigation Bar:** Fixed header with section anchoring (`INDEX`, `WORK`, `CONTACT`) and a pulsing live indicator.

---

## 🛠️ Tech Stack

* **Framework:** [Next.js](https://nextjs.org/) (App Router, Turbopack)
* **Styling:** Tailwind CSS
* **Animations:** Framer Motion
* **Icons:** Lucide React
* **Content:** Markdown parsing via `gray-matter` and `remark`

---

## 📂 Project Structure

```text
portfolio-website/
├── app/                  # Next.js app router pages & layouts
├── components/           # UI components (Navbar, DynamicChart, MathBackground, etc.)
├── content/
│   └── projects/         # Markdown (.md) project files
├── lib/                  # Data fetching and markdown rendering utilities
├── public/               # Static assets
└── package.json          # Dependencies and scripts

```

---

## 🏃‍♂️ Getting Started Locally

1. **Clone the repository:**
```bash
git clone [https://github.com/yourusername/portfolio-website.git](https://github.com/yourusername/portfolio-website.git)
cd portfolio-website

```


2. **Install dependencies:**
```bash
npm install

```


3. **Run the development server:**
```bash
npm run dev

```


4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## ➕ Adding a New Project

1. Navigate to the `content/projects/` directory.
2. Create a new Markdown file (e.g., `options-pricing-engine.md`).
3. Use the following frontmatter template at the top of your file:
```markdown
---
title: "Options Pricing Engine"
description: "A high-performance Monte Carlo simulation pricing library."
tech:
  - "Python"
  - "C++"
  - "NumPy"
github: "[https://github.com/yourusername/repo](https://github.com/yourusername/repo)"
live: "[https://example.com](https://example.com)"
date: "2026-03-01"
---

### Overview
Your project details and technical breakdown here...

```


4. Save the file. The homepage card and dedicated route will generate automatically.

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

```

```