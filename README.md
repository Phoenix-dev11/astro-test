# Astro + React + Tailwind + TypeScript

A minimal Astro project with React, Tailwind CSS, and TypeScript.

## 🚀 Project Structure

```text
/
├── public/
├── src/
│   ├── components/     # React & Astro components
│   │   └── Card.tsx
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name. React components in `src/components/` can be used in Astro pages. Tailwind utilities are available globally.

Any static assets, like images, can be placed in the `public/` directory.

## Deploying to Vercel with Git LFS (video not showing)

Large assets (e.g. `public/assets/*.webm`) are tracked with **Git LFS**. If the video doesn’t display on Vercel, the build had only the LFS pointer file, not the real video.

### Enable Git LFS in Vercel

1. Open your project on [Vercel](https://vercel.com) → **Settings** → **Git**.
2. Turn **on** the option **“Include Git LFS objects”** (or “Git LFS support”).
3. **Redeploy** the project (Deployments → ⋮ → Redeploy).

Vercel will fetch LFS objects during the clone step. Do **not** use `git lfs pull` in the build command—it fails on Vercel with “missing protocol” because the LFS endpoint is not available in that environment.

See [Vercel’s Git LFS support](https://vercel.com/changelog/git-lfs-support) and [Git settings](https://vercel.com/docs/project-configuration/git-settings).

### If the video still doesn’t show

Host the video elsewhere (e.g. [Vercel Blob](https://vercel.com/docs/storage/vercel-blob), Cloudinary, or a CDN), put the direct file URL in an env var (e.g. `PUBLIC_PILL_VIDEO_URL`), and use that as the `<video src>` in your page.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
