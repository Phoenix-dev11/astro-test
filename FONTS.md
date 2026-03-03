# Font Setup (Adobe Fonts Kit: xtg2fqq)

## Current Setup

- **Adobe Fonts** (kit xtg2fqq) – primary, loaded via CSS link
- **Google Fonts** – fallback so the page works even if Adobe Fonts is blocked

## Fonts

| Tailwind Class | Adobe Fonts | Google Fallback |
|----------------|-------------|-----------------|
| `font-zcool` | ZCOOL QingKe HuangYou | ZCOOL QingKe HuangYou |
| `font-avant` | ITC Avant Garde Gothic Pro | Chakra Petch |
| `font-chakra` | Chakra Petch | Chakra Petch |
| `font-patrick` / `font-gochi` | Patrick Hand SC | Patrick Hand SC |

## Test Page

Run `npm run dev` and open **http://localhost:4321/fonts-test** to verify each font.

## If Adobe Fonts Don't Load

1. **Add domains** – [fonts.adobe.com](https://fonts.adobe.com) → My Fonts → kit xtg2fqq → **Settings** → **Domains**. Add:
   - `localhost` (for dev)
   - `127.0.0.1`
   - Your production domain (e.g. `yourdomain.com`)

2. **Check kit status** – Kit must be **Published** (not draft).

3. **Network tab** – `https://use.typekit.net/xtg2fqq.css` should return **200**. If 403, the domain is not allowed.

4. **Ad blockers** – Try disabling; some block Typekit.

5. **Try a new kit** – Create a new kit at fonts.adobe.com, add the same fonts, and replace `xtg2fqq` with the new kit ID in `index.astro` and `fonts-test.astro`.
