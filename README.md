# Tech Radar

Modern technology radar visualization built with React, TypeScript, Vite, and D3.js.

## Features

- 🎯 Interactive radar visualization using D3.js
- 📱 Responsive design with CSS
- 🔍 Filter by rings (Adopt, Trial, Assess, Hold)
- 📊 Filter by quadrants (Languages, Frameworks, Tools, Platforms)
- 📋 Toggle between radar and list views
- 🔗 Individual technology detail pages
- ⚡ Fast development with Vite

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **D3.js** - Data visualization
- **React Router** - Client-side routing
- **CSS** - Component styling

## Getting Started

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/          # React components
│   ├── TechRadarVisualization.tsx  # D3 radar visualization
│   ├── TechCard.tsx                 # Technology card component
│   └── TechDetail.tsx               # Technology detail page
├── data/
│   └── techData.ts      # Technology entries data
├── pages/
│   └── RadarPage.tsx    # Main radar page
├── types/
│   └── radar.ts         # TypeScript types
├── App.tsx              # App router
└── main.tsx             # Entry point
```

## Customization

### Adding Technologies

Edit `src/data/techData.ts` to add or modify technologies:

```typescript
{
  id: 'unique-id',
  name: 'Technology Name',
  ring: 'adopt' | 'trial' | 'assess' | 'hold',
  quadrant: 'languages' | 'frameworks' | 'tools' | 'platforms',
  isNew: boolean,
  description: 'Technology description',
  moved: 1 | -1 | 0  // 1=up, -1=down, 0=no change
}
```

### Customizing Rings

Rings represent adoption levels:

- **Adopt** - Use by default for new projects
- **Trial** - Worth pursuing with controlled risk
- **Assess** - Explore and understand benefits
- **Hold** - Proceed with caution

### Customizing Quadrants

Quadrants categorize technologies:

- **Languages** - Programming languages
- **Frameworks** - Application frameworks
- **Tools** - Development and deployment tools
- **Platforms** - Infrastructure and services

## License

MIT
