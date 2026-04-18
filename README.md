# ![Calcite](public/icon-title.svg) Calcite

A web-based calculator interface for [Numbat](https://numbat.dev/), a statically-typed calculator language supporting units, currencies, and mathematical functions.

> The source code for this repository has mostly been generated using [Claude Code](https://claude.com/product/claude-code).

## Development

```bash
# Fetch required dependencies and build icon files
npm run prebuild

# Install test dependencies
npm run test:install

# Run clean build
npm run clean && npm run build

# Run development preview server (does not live reload)
npm run dev

# Run tests (requires preview server to be running)
npm run test

# Deploy build to GitHub Pages
npm run clean && npm run build && npm run deploy
```
