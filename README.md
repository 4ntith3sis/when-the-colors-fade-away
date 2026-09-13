# When the Colors Fade Away 🌑✨

An interactive, cinematic scroll-driven storytelling web experience exploring memory, distance, connection, and impermanence.

---

## 📖 Story & Concept

*When the Colors Fade Away* is an editorial visual novel where the narrative unfolds dynamically as the user scrolls. Through smooth parallax animation, hand-crafted SVG character vector art, ambient soundscapes, and subtle environmental metaphors, the experience transitions from warmth and connection to distance, search, and monochrome quietness.

---

## ✨ Features

- **Scroll-Driven Narrative**: Smooth, continuous story pacing controlled entirely by natural scrolling (mouse wheel, trackpad, touch gesture).
- **Smooth Inertia Scrolling**: Powered by **Lenis Smooth Scroll** and **GSAP ScrollTrigger**.
- **Hand-Crafted Character Silhouettes**: Scalable SVG character art with custom editorial filters.
- **Dynamic Monochromatic Transition**: Programmatic grayscale shift as the story progresses into later chapters.
- **Web Audio Atmospheric Soundscape**: Generative dual-oscillator ambient soundscape with dynamic pitch shifting based on scene tone.
- **Fully Responsive**: Adapts seamlessly to Ultrawide displays, Laptops, Tablets, Mobile Portrait, and Mobile Landscape screens.
- **Minimal Clean UI**: Custom scroll gesture indicator and top progress bar.

---

## 🛠️ Technology Stack

- **Framework**: [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Animation & Scroll Integration**: [GSAP 3](https://gsap.com/) (ScrollTrigger) & [Lenis](https://lenis.darkroom.engineering/)
- **Audio Engine**: Native Web Audio API
- **Icons**: [Lucide React](https://lucide.dev/)
- **Styling**: Modern Vanilla CSS with HSL color tokens and custom CSS Grid / Flexbox layout

---

## 🚀 Getting Started

### Prerequisites

Ensure you have **Node.js** (v18 or higher) installed on your system.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/4ntith3sis/when-the-colors-fade-away.git
   cd when-the-colors-fade-away
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. Open your browser at `http://localhost:3000` (or the port indicated in terminal).

---

## 📦 Build for Production

To generate an optimized production bundle:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

## 📁 Project Structure

```
when-the-colors-fade-away/
├── public/
│   └── fonts/             # Custom typography assets
├── src/
│   ├── components/
│   │   ├── environments/  # Scene background SVG vector environments
│   │   ├── symbols/       # Symbolic motifs (candles, branches, flowers)
│   │   ├── UI/            # Ambient audio button, scroll indicator, progress bar
│   │   ├── CharacterMan.jsx
│   │   ├── CharacterWoman.jsx
│   │   ├── NarrativeOverlay.jsx
│   │   └── StoryStage.jsx
│   ├── data/
│   │   └── storyScenes.js # Scene timeline configuration & text
│   ├── App.jsx
│   ├── index.css          # Design system & responsive layout styles
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

---

## 📄 License

[MIT](LICENSE) © [Daffa Abdul Fatah](https://github.com/4ntith3sis)
