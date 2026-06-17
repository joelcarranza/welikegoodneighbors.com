# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Hugo static site using the [dot-org-hugo-theme](https://github.com/cncf/dot-org-hugo-theme) (a CNCF theme for organizational websites). The theme is installed as a git submodule at `themes/dot-org-hugo-theme`.

## Commands

```bash
# Start local dev server (with drafts, future posts, fast reload disabled)
npm start

# Build the site
npm run build

# Update the theme submodule
git submodule update --remote --merge
```

## Architecture

**Configuration** lives in `config/` (directory-based, overrides the root `hugo.toml`):
- `config/_default/` — base config applied to all environments (`hugo.yaml`, `params.yaml`, `languages.yaml`)
- `config/development/` — overrides for local dev (sets `baseURL: http://localhost:1313/`)
- `config/production/` — overrides for production (sets `baseURL`, enables robots.txt, Google Analytics)

**Theme customization** follows Hugo's lookup order — files in the project root take precedence over the theme:
- `layouts/` — override or extend theme templates
- `assets/` — override theme SCSS/JS
- `static/` — static files served as-is (logos, images)
- `data/` — structured data consumed by templates

**Content** goes in `content/en/` (multilingual setup with English as default, no `/en/` prefix in URLs). The theme supports blog, FAQ, and general pages.

**Search** uses Pagefind. To build with search index: `npm run dev:start:with-pagefind`.

**Styling** uses SCSS (via sass-embedded) with PostCSS/autoprefixer. The theme's SCSS lives in `themes/dot-org-hugo-theme/assets/scss/`; override by creating matching files in `assets/scss/`.
