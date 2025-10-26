# AdzyJS Documentation 🎮

Official documentation site for **AdzyJS** - The easiest way to render animated, custom-skinned Minecraft 3D models in React applications.

## About AdzyJS

AdzyJS is a powerful React component library that abstracts away the complexity of 3D model loading, material creation, and skin integration. Built for developers and designers who want to focus on creativity rather than technical complexity.

### Key Features
- 🎯 **Single Component API** - Just use `<Player />` and you're done
- 🎨 **Dynamic Skin Loading** - Load any Minecraft skin from a URL
- ⚡ **Automatic Material Configuration** - Pixel-perfect Minecraft aesthetics
- 🔧 **Built-in Optimizations** - Transparency fixes and performance tuning
- 📱 **Responsive Design** - Works across all devices

## Development

### Prerequisites
- Node.js 18+ 
- npm, pnpm, or yarn

### Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd adzyjs-docs
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm run start
```

## Project Structure

```
adzyjs-docs/
├── app/                    # Next.js app directory
│   ├── (home)/            # Landing page
│   ├── docs/              # Documentation pages
│   └── api/search/        # Search API endpoint
├── content/docs/          # MDX documentation files
├── components/            # React components
├── lib/                   # Utilities and configurations
├── public/                # Static assets
└── source.config.ts       # Fumadocs configuration
```

## Documentation Content

The documentation covers:
- **About AdzyJS** - Overview and core concepts
- **Installation** - Setup and integration guide
- **Custom Skin Model Guide** - Advanced usage patterns
- **API Reference** - Component props and methods

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Documentation**: [Fumadocs](https://fumadocs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Language**: TypeScript
- **Content**: MDX

## Contributing

Contributions are welcome! Please feel free to submit issues and pull requests.

## License

This documentation is part of the AdzyJS project.
