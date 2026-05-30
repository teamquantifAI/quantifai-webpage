# quantifAI — Build, Evaluate, and Ship ML Models You Can Trust

> No-code ML builder — the AI writes the code, you bring the understanding. From raw data to a model you can actually explain, with honest evaluation that flags leakage and fake accuracy.

[![Next.js](https://img.shields.io/badge/Next.js-14.0.4-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3.3-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.0-38B2AC)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

## Features

- **Modern Tech Stack**: Built with Next.js 14, TypeScript, and Tailwind CSS
- **Scientific Modern UI**: Warm amber-and-slate palette, glassmorphism, and crisp technical typography
- **Responsive Design**: Mobile-first approach with seamless cross-device compatibility
- **Smooth Animations**: Framer Motion powered interactions and micro-animations
- **Honest Evaluation**: Surfaces leakage warnings, naive-baseline comparisons, and the real signal behind fake accuracy
- **Firebase-backed Lead Capture**: Beta sign-ups written to Firestore
- **Performance Optimized**: Static export, fast loading times, excellent Core Web Vitals

## What is quantifAI?

quantifAI is a no-code ML builder for people who want to trust their models. The AI writes the code; you bring the understanding. The platform walks you through five guided steps:

- **Profile**: Reads your data — rows, columns, missingness
- **Build with AI**: Describe what you want to predict; the AI writes the code
- **Evaluate**: Holdout metrics against a naive baseline, plus leakage checks
- **Explain**: Top feature importances and plain-language drivers
- **Ship**: Export a validated model and predictions you can actually explain

## Quick Start

### Prerequisites

- Node.js 18.0.0 or later
- npm or yarn package manager
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/saivedant169/frontend_quantifAI.git
   cd frontend_quantifAI
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   ```
   http://localhost:3000
   ```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## Project Structure

```
quantifai-webpage/
├── app/                        # Next.js 14 app directory
│   ├── globals.css            # Global styles with Tailwind
│   ├── layout.tsx             # Root layout component  
│   └── page.tsx               # Homepage
├── components/                 # Reusable React components
│   ├── Header.tsx             # Navigation header
│   └── HeroSection.tsx        # Landing page hero
├── lib/                       # Utility functions and helpers
├── public/                    # Static assets
│   └── images/               # Image assets
├── styles/                    # Additional stylesheets
├── next.config.js            # Next.js configuration
├── tailwind.config.js        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Project dependencies
```

## Design System

### Colors ("Scientific Modern")

- **Brand Amber (CTA)**: `#ffbf00` — high-visibility call-to-action
- **Brand Deep**: `#5c4300` — amber text on light surfaces
- **Cream Background**: `#fdfbf7` — warm, editorial base
- **Warm Surfaces**: `#fff8f2` → `#ece1d1` tonal layers
- **Ink / Ink-soft**: `#201b11` / `#4e4637` — text
- **Functional Slate**: `#565e74` — labels and metadata

### Typography

- **Headlines**: Hanken Grotesk (geometric, high-impact)
- **Body**: Inter (legible neutral sans)
- **Technical**: JetBrains Mono (labels, tags, data points)
- All loaded via `next/font/google` with CSS variables

### Components

- **Glass Effect**: Backdrop blur with subtle transparency
- **Gradient Text**: Amber gradient for emphasis
- **Hover States**: Smooth scale and shadow transitions
- **Animations**: Framer Motion with ease-out timing

## Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_APP_NAME=quantifAI
NEXT_PUBLIC_APP_URL=https://quantifai.co
```

### Tailwind CSS

The project uses a custom Tailwind configuration with:
- Extended color palette matching quantifAI branding
- Custom animations and keyframes
- Container utilities with responsive padding
- Typography plugin for rich text content

## Roadmap

- [ ] **In-browser Data Profiling** - Upload a CSV and inspect rows, columns, missingness
- [ ] **AI Model Builder** - Describe a target; the AI writes and runs the model code
- [ ] **Honest Evaluation Engine** - Holdout metrics, naive-baseline comparison, leakage detection
- [ ] **Explainability View** - Feature importances and plain-language drivers
- [ ] **Model Export / Ship** - Download validated models and predictions
- [ ] **Account System** - Secure sign-in and saved projects

## Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

- **Website**: [quantifai.co](https://quantifai.co)
- **Email**: team@quantifai.co
- **GitHub**: [@saivedant169](https://github.com/saivedant169)

## Acknowledgments

- Design inspiration from modern fintech applications
- Framer Motion for smooth animations
- Tailwind CSS for rapid styling
- Next.js team for the amazing framework

---

**Built by the quantifAI team**
