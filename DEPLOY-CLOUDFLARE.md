# Deploy to Cloudflare Pages

This is a static React + Vite application.

## Build settings

- Framework preset: **Vite**
- Build command: `npm run build`
- Output directory: `dist`
- Node.js: use a version supported by your chosen Vite release

## Local checks

```bash
npm install
npm run build
npm run preview
```

## Release process

Deploy only after reviewing the proposed changes and merging the pull request into the branch configured for production in Cloudflare Pages. If Cloudflare Pages previews are enabled, inspect the preview build before merging.

**Privacy:** do not publish credentials, guest details, customer data, or payment records.
