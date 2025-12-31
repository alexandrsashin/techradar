# Tech Radar Project

## Project Overview

React + TypeScript + Vite application for technology radar visualization with D3.js.

## Tech Stack

- Vite 7.x (with Rolldown)
- React 18.x
- TypeScript 5.x
- D3.js 7.x for visualization
- React Router for navigation
- Tailwind CSS v4 for styling

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
├── main.tsx             # Entry point
└── index.css            # Tailwind CSS imports
```

## Development

```bash
npm run dev        # Start dev server at http://localhost:5173
npm run build      # Build for production
npm run preview    # Preview production build
```

## Features Implemented

✅ Interactive D3.js radar visualization
✅ Responsive design with Tailwind CSS
✅ Filter by rings (Adopt, Trial, Assess, Hold)
✅ Filter by quadrants (Languages, Frameworks, Tools, Platforms)
✅ Toggle between radar and list views
✅ Individual technology detail pages with routing
✅ 20 sample technologies across all quadrants
✅ Clickable blips with navigation
✅ Legend showing movement indicators

## Customization

Edit `src/data/techData.ts` to add or modify technologies.
