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

## Deployment and Git LFS (video not showing)

The video `public/assets/pill.webm` is tracked with **Git LFS**. If the video doesn’t display after deploy, the build likely has only the LFS pointer, not the real file.

- **Vercel:** Install the [Git LFS](https://github.com/marketplace/actions/git-lfs) action, or in Project Settings → General → Git set “Include Git LFS objects” (if available), or add a build step that runs `git lfs pull` before `npm run build`.
- **Netlify:** Enable [Git LFS support](https://docs.netlify.com/configure-builds/file-conversions/#git-lfs) or run `git lfs pull` in a build command, e.g. `git lfs pull && npm run build`.
- **Other CI:** Before `npm run build`, run `git lfs install` and `git lfs pull` so the real file is in `public/assets/` when the site is built.

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
