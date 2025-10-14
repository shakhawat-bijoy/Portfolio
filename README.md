# Shakhawat Bijoy - Portfolio

A modern, performant portfolio website built with Next.js 14, featuring stunning animations, 3D effects, and a beautiful dark theme design.

## ✨ Features

- **Modern Tech Stack**: Built with Next.js 14, React, TypeScript, and Tailwind CSS
- **Stunning Animations**: Smooth animations and transitions using Framer Motion
- **3D Graphics**: Interactive 3D elements powered by Three.js
- **Performance Optimized**: Lazy loading, code splitting, and optimized rendering
- **Responsive Design**: Fully responsive across all devices
- **Dark Theme**: Beautiful dark mode design with custom color schemes
- **Smooth Scrolling**: Enhanced user experience with smooth scroll behavior
- **Dynamic Components**: 
  - Floating Navigation Bar
  - Hero Section with animated elements
  - Interactive Grid Layout
  - Project Showcase
  - Work Experience Timeline
  - Development Approach Section
  - Contact Footer

## 🚀 Quick Start

Follow these steps to set up the project locally on your machine.

### Prerequisites

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) (Node Package Manager)

### Installation

1. **Clone the Repository**

```bash
git clone https://github.com/shakhawat-bijoy/Portfolio.git
cd portfolio
```

2. **Install Dependencies**

```bash
npm install
```

3. **Run the Development Server**

```bash
npm run dev
```

4. **Open Your Browser**

Navigate to [http://localhost:3000](http://localhost:3000) to view the project.

## 🛠️ Built With

- **Framework**: [Next.js 14](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **3D Graphics**: [Three.js](https://threejs.org/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **UI Components**: Custom components with shadcn/ui patterns

## 📁 Project Structure

```
portfolio/
├── app/                      # Next.js app directory
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   ├── loading.tsx          # Loading state
│   ├── not-found.tsx        # 404 page
│   └── global-error.jsx     # Global error handler
├── components/              # React components
│   ├── ui/                  # UI components
│   ├── Hero.tsx            # Hero section
│   ├── Grid.tsx            # Grid layout
│   ├── RecentProjects.tsx  # Projects showcase
│   ├── Experience.tsx      # Work experience
│   ├── Approach.tsx        # Development approach
│   ├── Footer.tsx          # Footer section
│   ├── Loading.tsx         # Loading component
│   └── Error.tsx           # Error component
├── data/                    # Data configuration
│   └── index.ts            # Content data
├── public/                  # Static assets
└── tailwind.config.ts      # Tailwind configuration
```

## 🎨 Customization

### Update Content

Edit the `data/index.ts` file to customize:
- Navigation items
- Grid items
- Projects
- Testimonials
- Work experience
- Social media links

### Modify Styles

- Global styles: `app/globals.css`
- Tailwind config: `tailwind.config.ts`
- Custom color schemes and animations are defined in the Tailwind config

### Add New Sections

Create new components in the `components/` directory and import them in `app/page.tsx`.

## 🚀 Performance Features

- **Lazy Loading**: Components are lazy-loaded for optimal performance
- **Code Splitting**: Automatic code splitting with Next.js
- **Optimized Images**: Next.js Image component for automatic optimization
- **Smooth Scrolling**: Native smooth scroll with custom scrollbar styling
- **Client-Side Rendering**: Optimized client-side rendering with Suspense

## 📦 Build for Production

```bash
npm run build
```

This creates an optimized production build in the `.next` folder.

## 🚀 Deployment

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository on Vercel
3. Vercel will automatically detect Next.js and deploy

Alternative deployment options:
- [Netlify](https://www.netlify.com/)
- [Railway](https://railway.app/)
- [AWS Amplify](https://aws.amazon.com/amplify/)

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/shakhawat-bijoy/Portfolio/issues).

## 👤 Author

**Shakhawat Bijoy**
- Portfolio: [shakhawat-bijoy.vercel.app](https://shakhawat-bijoy.vercel.app)
- GitHub: [@shakhawat-bijoy](https://github.com/shakhawat-bijoy)
- LinkedIn: [Shakhawat Bijoy](https://www.linkedin.com/in/shakhawat-bijoy/)

## 🌟 Show Your Support

Give a ⭐️ if you like this project!

---

Made by **Shakhawat Bijoy**