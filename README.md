# Professional Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features smooth animations, a contact form, and a clean, professional design.

## 🚀 Features

- **Modern Tech Stack**: React 18, TypeScript, Vite, Tailwind CSS
- **Smooth Animations**: Framer Motion for page transitions and micro-interactions
- **Responsive Design**: Mobile-first approach with breakpoints for all devices
- **Interactive Components**: Hover effects, smooth scrolling, and animated sections
- **Contact Form**: Fully functional contact form with validation
- **Performance Optimized**: Fast loading times and optimized bundle size
- **Accessibility**: ARIA labels, keyboard navigation, and semantic HTML
- **Type Safety**: Full TypeScript implementation with strict type checking

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Package Manager**: npm

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/                 # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Section.tsx
│   │   └── index.ts
│   ├── layout/             # Layout components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── index.ts
│   └── sections/           # Page sections
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Experience.tsx
│       ├── Portfolio.tsx
│       ├── Contact.tsx
│       └── index.ts
├── data/                   # Static data
│   └── portfolio.ts
├── hooks/                  # Custom React hooks
│   ├── useScrollSpy.ts
│   └── index.ts
├── types/                  # TypeScript type definitions
│   └── index.ts
├── utils/                  # Utility functions
│   └── index.ts
├── App.tsx                 # Main application component
├── main.tsx               # Application entry point
└── index.css              # Global styles and Tailwind imports
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the website.

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

### Preview Production Build

```bash
npm run preview
```

## 🎨 Customization

### Personal Information

Edit `src/data/portfolio.ts` to update:
- Personal information (name, title, bio, contact details)
- Work experience
- Projects
- Skills
- Social media links

### Styling

The project uses Tailwind CSS with a custom configuration in `tailwind.config.js`. You can:
- Modify the color palette
- Add custom animations
- Adjust breakpoints
- Add custom utilities

### Components

All components are modular and reusable:
- **UI Components**: Located in `src/components/ui/`
- **Layout Components**: Located in `src/components/layout/`
- **Section Components**: Located in `src/components/sections/`

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: 320px and up
- **Tablet**: 768px and up
- **Desktop**: 1024px and up
- **Large Desktop**: 1280px and up

## ⚡ Performance Features

- **Code Splitting**: Automatic code splitting with Vite
- **Lazy Loading**: Images and components load on demand
- **Optimized Bundle**: Tree shaking and minification
- **Fast Refresh**: Hot module replacement during development

## 🎯 SEO & Accessibility

- Semantic HTML structure
- ARIA labels for screen readers
- Keyboard navigation support
- Proper heading hierarchy
- Alt text for images
- Focus management

## 🚀 Deployment

### Netlify

1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Set up continuous deployment from your Git repository

### Vercel

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect it's a Vite project
3. Deploy with default settings

### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts: `"deploy": "gh-pages -d dist"`
3. Run: `npm run build && npm run deploy`

## 📝 Customization Guide

### Adding New Sections

1. Create a new component in `src/components/sections/`
2. Add the section to `src/components/sections/index.ts`
3. Import and use in `src/App.tsx`
4. Update navigation in `src/components/layout/Navbar.tsx`

### Modifying Colors

Edit `tailwind.config.js` to change the color scheme:

```js
theme: {
  extend: {
    colors: {
      primary: {
        // Your primary color palette
      },
      secondary: {
        // Your secondary color palette
      }
    }
  }
}
```

### Adding New Project Types

1. Update the `Project` interface in `src/types/index.ts`
2. Add new categories to the filter in `src/components/sections/Portfolio.tsx`
3. Update sample data in `src/data/portfolio.ts`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [Lucide React](https://lucide.dev/) - Icons
- [Vite](https://vitejs.dev/) - Build tool

---

**Happy coding!** 🚀
