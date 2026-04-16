# Web Resume

An interactive web resume built with React and TypeScript. Visitors can filter sections by keyword search, highlight buzz words with a toggle, reorder sections via drag and drop, and navigate different perspectives (All, IT, Engineering, Web).

## Tech Stack

- **React 19** with TypeScript
- **Vite** for build tooling
- **@dnd-kit** for drag-and-drop section reordering
- **Vitest** + **React Testing Library** for testing
- **Express** for production static serving
- **Heroku** for deployment

## Getting Started

### Prerequisites

- Node.js >= 18

### Install

```bash
npm install
```

### Development

```bash
npm run dev
```

Opens at [http://localhost:5173](http://localhost:5173).

### Build

```bash
npm run build
```

### Run Production Server

```bash
npm run build
npm start
```

Serves the built app on port 4567 (or `$PORT`).

### Test

```bash
npm test
```

## Features

- **Search filtering** - Filter all resume sections by keyword
- **Perspective navigation** - View resume from All, IT, Engineering, or Web perspectives
- **Buzz word highlighting** - Toggle keyword highlighting to scan for skills
- **Drag-and-drop reordering** - Reorder resume sections via the sidebar
- **Responsive layout** - Sidebar collapses to mobile menu on small screens
- **Welcome modal** - Introductory guide on first visit

## Deployment

Deployed to Heroku via the `Procfile` which runs `node server.js` to serve the Vite-built static files.

```bash
npm run build
git push heroku master
```

## License

MIT
