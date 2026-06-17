# welikegoodneighbors.com

Website for a New Orleans community coalition opposing the expansion of the 2400 Napoleon Avenue event venue (The Josephine). Built with Hugo and the [dot-org-hugo-theme](https://github.com/cncf/dot-org-hugo-theme).

## Prerequisites

- Hugo
- Node.js

## Setup

```bash
git clone --recurse-submodules git@github.com:joelcarranza/welikegoodneighbors.com.git
cd welikegoodneighbors.com
npm install
```

## Development

```bash
npm run start
```

Opens a local dev server at `http://localhost:1313/` with live reload.

## Content

Content lives in `content/`. The homepage is `content/_index.md`.

## Deployment

Pushing to github publishes via Netlify

## Theme

The theme is installed as a git submodule at `themes/dot-org-hugo-theme`. To update it:

```bash
git submodule update --remote --merge
```
