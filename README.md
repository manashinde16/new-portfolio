# manashinde-portfolio

Personal portfolio of **Manas Shinde** — Full Stack Developer (React · Node.js · MySQL · Redis).

Built with **Next.js 14 (App Router) + TypeScript**, hand-crafted CSS (no UI library), and a set of
custom interaction systems written from scratch:

- **Throughline** — an SVG path that weaves through every section and draws itself as you scroll
- **Custom cursor** — context-aware reticle cursor with magnetic buttons
- **Inertia scrolling**, masked hero text reveal, scroll-synced timeline, 3D flip project cards
- Light/dark theme, `prefers-reduced-motion` support, fully responsive

## Stack

| Layer      | Tech                          |
| ---------- | ----------------------------- |
| Framework  | Next.js 14 (App Router)       |
| Language   | TypeScript                    |
| Styling    | Hand-written CSS (globals)    |
| Fonts      | Archivo · Instrument Sans · Instrument Serif · JetBrains Mono |
| Hosting    | Vercel                        |

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Structure

```
app/            layout, page, not-found (404), globals.css
components/     one component per section + Effects (all interactions)
lib/data.ts     typed content: experience, skills, projects, links
```
