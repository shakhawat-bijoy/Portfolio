## Portfolio CMS

The public portfolio reads its content from MongoDB through `/api/content`. Copy `.env.example` to `.env.local`, set `MONGODB_URI`, `MONGODB_DB`, and a strong `ADMIN_PASSWORD`, then run `npm run dev`. Open `/admin` to edit and publish portfolio content. The values in `data/index.ts` are only used as first-run fallback/seed content when MongoDB has no document yet.

### Vercel deployment

1. Push this repository to GitHub. `.env.local`, `.next`, and `node_modules` are ignored by Git.
2. Import the repository into Vercel. The detected framework should be Next.js, with the default build command `npm run build`.
3. Add `MONGODB_URI`, `MONGODB_DB`, and `ADMIN_PASSWORD` in Vercel Project Settings > Environment Variables for Production (and Preview if needed).
4. In MongoDB Atlas, add access for Vercel deployments (the simplest option is `0.0.0.0/0` with a strong database user password), then redeploy.
5. Open `https://your-domain.vercel.app/admin` to manage the portfolio.

Never commit `.env.local` or real credentials in `.env.example`.

<div align="center">
  <h1>✨ Shakhawat Bijoy Portfolio ✨</h1>
  <p><strong>A cutting-edge portfolio showcasing modern web development with Next.js 14</strong></p>
  
  <p>
    <a href="https://shakhawat-bijoy.vercel.app">🌐 Live Demo</a> •
    <a href="#-features">Features</a> •
    <a href="#-installation">Installation</a> •
    <a href="#-tech-stack">Tech Stack</a>
  </p>
</div>

---

## 🎯 Overview

An immersive, high-performance portfolio website that pushes the boundaries of web design. Built with the latest technologies, it features mesmerizing animations, interactive 3D elements, and a sleek dark aesthetic that captivates visitors from the first scroll.

## ✨ Features

### 🎨 **Visual Excellence**

- **Stunning Animations** - Fluid, eye-catching transitions powered by Framer Motion
- **3D Interactive Elements** - Immersive Three.js graphics that respond to user interaction
- **Modern Dark Theme** - Carefully crafted color palette optimized for visual appeal
- **Smooth Scrolling** - Buttery-smooth navigation experience throughout

### 🚀 **Performance & Technology**

- **Blazing Fast** - Optimized with code splitting, lazy loading, and Next.js 14 features
- **Fully Responsive** - Seamless experience across desktop, tablet, and mobile devices
- **Type-Safe** - Built with TypeScript for reliability and developer experience
- **SEO Optimized** - Server-side rendering and metadata optimization

### 🎭 **Interactive Components**

- Dynamic Floating Navigation Bar
- Animated Hero Section with Parallax Effects
- Interactive 3D Globe Visualization
- Bento Grid Layout with Hover Effects
- Project Showcase with Modal Previews
- Animated Timeline for Work Experience
- Approach Section with Canvas Reveal
- Social Media Integrated Footer

## 📋 Prerequisites

Ensure you have the following installed:

- **Node.js** (v18.0.0 or higher) - [Download](https://nodejs.org/)
- **npm** or **yarn** - Comes with Node.js
- **Git** - [Download](https://git-scm.com/)

## 🔧 Installation

Get started in three simple steps:

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/shakhawat-bijoy/Portfolio.git
cd Portfolio
```

### 2️⃣ Install Dependencies

```bash
npm install
# or
yarn install
```

### 3️⃣ Launch Development Server

```bash
npm run dev
# or
yarn dev
```

🎉 Open [http://localhost:3000](http://localhost:3000) in your browser to see the magic!

## 🛠️ Tech Stack

<div align="center">

| Category        | Technologies                                                                                                            |
| --------------- | ----------------------------------------------------------------------------------------------------------------------- |
| **Framework**   | ![Next.js](https://img.shields.io/badge/Next.js%2014-000000?style=for-the-badge&logo=next.js&logoColor=white)           |
| **Language**    | ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)       |
| **Styling**     | ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white) |
| **Animation**   | ![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)     |
| **3D Graphics** | ![Three.js](https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=three.js&logoColor=white)             |
| **UI Library**  | ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)                      |
| **Icons**       | ![Lucide](https://img.shields.io/badge/Lucide-F56565?style=for-the-badge)                                               |

</div>

### Core Dependencies

- `next` - React framework for production
- `react` & `react-dom` - UI library
- `typescript` - Type-safe JavaScript
- `tailwindcss` - Utility-first CSS framework
- `framer-motion` - Animation library
- `three` & `@react-three/fiber` - 3D graphics
- `styled-components` - CSS-in-JS styling
- `react-lottie` - Lottie animation player
- `clsx` & `tailwind-merge` - Utility functions

## � Project Structure

```
Portfolio/
│
├── 📁 app/                       # Next.js App Router
│   ├── globals.css              # Global styles & CSS variables
│   ├── layout.tsx               # Root layout with providers
│   ├── page.tsx                 # Main landing page
│   ├── loading.tsx              # Loading UI state
│   ├── not-found.tsx            # Custom 404 page
│   ├── global-error.jsx         # Error boundary
│   └── provider.tsx             # Client-side providers
│
├── 📁 components/               # React Components
│   ├── 📁 ui/                   # Reusable UI components
│   │   ├── FloatingNavbar.tsx  # Sticky navigation
│   │   ├── BentoGrid.tsx       # Grid layout system
│   │   ├── Globe.tsx           # 3D globe component
│   │   ├── Spotlight.tsx       # Spotlight effect
│   │   ├── MovingBorders.tsx   # Animated borders
│   │   ├── CanvasRevealEffect.tsx
│   │   └── ...more
│   │
│   ├── Hero.tsx                 # Hero section
│   ├── Grid.tsx                 # About section grid
│   ├── RecentProjects.tsx       # Projects showcase
│   ├── Experience.tsx           # Work timeline
│   ├── Approach.tsx             # Development process
│   ├── Footer.tsx               # Footer with social links
│   ├── Loading.tsx              # Custom loader
│   └── Error.tsx                # Error display
│
├── 📁 data/                     # Static Data
│   ├── index.ts                 # Content configuration
│   ├── confetti.json            # Lottie animation
│   └── globe.json               # Globe data
│
├── 📁 lib/                      # Utilities
│   └── utils.ts                 # Helper functions
│
├── 📁 public/                   # Static Assets
│   └── (images, icons, etc.)
│
├── next.config.mjs              # Next.js configuration
├── tailwind.config.ts           # Tailwind customization
├── tsconfig.json                # TypeScript config
└── package.json                 # Dependencies
```

## 🎨 Customization Guide

### 📝 Content Management

**Update Personal Information**

Edit `data/index.ts` to customize:

```typescript
export const navItems = [...]        // Navigation menu items
export const gridItems = [...]       // About section content
export const projects = [...]        // Your projects
export const testimonials = [...]    // Client testimonials
export const workExperience = [...]  // Career timeline
export const socialMedia = [...]     // Social links
```

### 🎨 Styling Customization

**1. Global Styles** - `app/globals.css`

```css
/* Modify CSS variables for colors */
:root {
  --background: ... --foreground: ...;
}
```

**2. Tailwind Configuration** - `tailwind.config.ts`

```typescript
// Customize theme, colors, animations
extend: {
  colors: { /* your colors */ },
  animation: { /* your animations */ }
}
```

**3. Component Styles**

- Each component in `components/` can be individually styled
- Use Tailwind utility classes for quick adjustments
- Custom styled-components for complex styling

### 🧩 Adding New Sections

1. Create a new component in `components/`
2. Import it in `app/page.tsx`
3. Add corresponding data in `data/index.ts`

```tsx
// Example: app/page.tsx
import NewSection from "@/components/NewSection";

export default function Home() {
  return <main>{/* ... existing sections */}</main>;
}
```

## ⚡ Performance Optimizations

This portfolio is built with performance as a top priority:

- ⚡ **Lazy Loading** - Components load on-demand for faster initial page load
- 📦 **Code Splitting** - Automatic route-based code splitting with Next.js
- 🖼️ **Image Optimization** - Next.js Image component with automatic WebP conversion
- 🎯 **Tree Shaking** - Unused code is eliminated during build
- 🔄 **Suspense Boundaries** - Streaming SSR for improved perceived performance
- 🎨 **CSS Optimization** - Tailwind CSS purges unused styles in production
- 📊 **Bundle Analysis** - Optimized bundle sizes for faster downloads
- 🚀 **Edge Functions** - Deployed on edge network for minimal latency

### Lighthouse Scores

- 🟢 Performance: 95+
- 🟢 Accessibility: 100
- 🟢 Best Practices: 100
- 🟢 SEO: 100

## 📦 Build & Deploy

### Development

```bash
npm run dev       # Start dev server at localhost:3000
npm run lint      # Run ESLint to check code quality
```

### Production Build

```bash
npm run build     # Create optimized production build
npm start         # Start production server
```

The build output will be in the `.next` directory, optimized and ready for deployment.

## 🚀 Deployment Options

### Recommended: Vercel (Zero Config)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/shakhawat-bijoy/Portfolio)

1. Push your code to GitHub
2. Visit [vercel.com/new](https://vercel.com/new)
3. Import your repository
4. Deploy! ✨ (Vercel auto-detects Next.js)

### Alternative Platforms

<details>
<summary><strong>Netlify</strong></summary>

```toml
# netlify.toml
[build]
  command = "npm run build"
  publish = ".next"
```

</details>

<details>
<summary><strong>Railway</strong></summary>

```toml
# railway.toml
[build]
  builder = "nixpacks"
[deploy]
  startCommand = "npm start"
```

</details>

<details>
<summary><strong>Docker</strong></summary>

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

</details>

## 🤝 Contributing

Contributions are welcome and appreciated! Here's how you can help:

1. 🍴 **Fork the Repository**
2. 🌿 **Create a Feature Branch** (`git checkout -b feature/AmazingFeature`)
3. 💾 **Commit Your Changes** (`git commit -m 'Add some AmazingFeature'`)
4. 📤 **Push to the Branch** (`git push origin feature/AmazingFeature`)
5. 🔀 **Open a Pull Request**

### Areas for Contribution

- 🐛 Bug fixes
- ✨ New features
- 📚 Documentation improvements
- 🎨 Design enhancements
- ⚡ Performance optimizations

Feel free to check the [issues page](https://github.com/shakhawat-bijoy/Portfolio/issues) for open issues or create a new one!

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

<div align="center">
  <img src="https://github.com/shakhawat-bijoy.png" width="100" style="border-radius: 50%;" alt="Shakhawat Bijoy"/>
  
  <h3>Shakhawat Bijoy</h3>
  <p><em>Frontend Developer</em></p>
  
  <p>
    <a href="https://shakhawat-bijoy.vercel.app">
      <img src="https://img.shields.io/badge/Portfolio-FF5722?style=for-the-badge&logo=google-chrome&logoColor=white" alt="Portfolio"/>
    </a>
    <a href="https://github.com/shakhawat-bijoy">
      <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub"/>
    </a>
    <a href="https://www.linkedin.com/in/shakhawat-bijoy/">
      <img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn"/>
    </a>
  </p>
</div>

## 🌟 Show Your Support

If this project helped you or you found it interesting, please consider:

- ⭐ **Starring the repository**
- 🔄 **Sharing with others**
- 🐛 **Reporting issues**
- 💡 **Suggesting improvements**

<div align="center">
  <h3>⭐️ Star this repo if you like it! ⭐️</h3>
</div>

---

<div align="center">
  <p><strong>Shakhawat Bijoy</strong></p>
  <p>
    <a href="https://github.com/shakhawat-bijoy/Portfolio/stargazers">
      <img src="https://img.shields.io/github/stars/shakhawat-bijoy/Portfolio?style=social" alt="GitHub Stars"/>
    </a>
    <a href="https://github.com/shakhawat-bijoy/Portfolio/network/members">
      <img src="https://img.shields.io/github/forks/shakhawat-bijoy/Portfolio?style=social" alt="GitHub Forks"/>
    </a>
  </p>
  <p><em>© 2025 Shakhawat Bijoy. All rights reserved.</em></p>
</div>
