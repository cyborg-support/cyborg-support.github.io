+++
title = 'Hosting: Hugo + GitHub Pages'
date = '2026-04-21'
draft = false
aliases = ['/how-to/']
+++

```mermaid
flowchart LR
    A[hugo build] --> B[docs/]
    B --> C[git push]
    C --> D[GitHub Pages]
```

A complete guide for publishing a Hugo site to GitHub Pages using a local build and a `docs/` folder — no GitHub Actions required.

---

## Overview

The deploy method:

1. Hugo builds locally into `docs/`
2. `docs/` is committed and pushed to GitHub
3. GitHub Pages serves from the `docs/` folder on `main`

You control when the site publishes. No pipeline, no waiting for CI.

---

## Hugo config

In `hugo.toml`, set the publish directory to `docs` and the correct base URL:

```toml
baseURL = 'https://username.github.io/'
languageCode = 'en-us'
title = 'My Site'
publishDir = 'docs'
```

If you have a custom domain, use that as the base URL instead:

```toml
baseURL = 'https://yourdomain.com/'
```

---

## Build the site

```bash
hugo
```

This writes all output into `docs/`. Commit everything including `docs/`.

```bash
git add docs/
git commit -m "publish"
git push origin main
```

---

## Create the GitHub repo

For a **root site** served at `username.github.io`:

- Repo name must be exactly `username.github.io`
- Example: org `cyborg-support` creates repo `cyborg-support/cyborg-support.github.io`
- Site is live at `https://cyborg-support.github.io/`
- Only one root site per account

For a **project site** served at `username.github.io/reponame`:

- Repo name can be anything
- Set `baseURL = 'https://username.github.io/my-project/'` in `hugo.toml`

---

## Activate GitHub Pages

1. Go to the repo on GitHub
2. Settings > Pages
3. Source: Deploy from a branch
4. Branch: `main` — Folder: `/docs`
5. Save

GitHub Pages will serve from `docs/` on every push to `main`. No workflow file needed.

---

## CNAME

### CNAME file in the repo

Create `static/CNAME` — Hugo copies it to `docs/CNAME` on every build:

```
yourdomain.com
```

Bare domain only, no `https://`.

### Set the custom domain in GitHub Pages settings

1. Settings > Pages > Custom domain
2. Enter `yourdomain.com` and save
3. GitHub verifies DNS and enables HTTPS once it resolves

### DNS records

For an **apex domain** (`yourdomain.com`), add four A records pointing to GitHub Pages:

```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

For `www`, add a CNAME record:

```
www  CNAME  username.github.io
```

---

## Check .gitignore

Make sure `docs/` is not ignored. Hugo's default sometimes adds `public/` — since you renamed it to `docs/`, that should be fine, but verify:

```gitignore
# public/   <- fine, you're using docs/ not public/
```

---

## Deploy

```bash
hugo                    # build into docs/
git add docs/
git commit -m "publish"
git push origin main    # GitHub Pages updates within ~1 min
```

---

## Summary

| Setting | Value |
|---|---|
| `publishDir` | `docs` |
| Pages source | Branch `main`, folder `/docs` |
| Root site repo name | `username.github.io` |
| CNAME file location | `static/CNAME` |
| DNS apex records | 4 x GitHub Pages IPs |
| DNS www | CNAME to `username.github.io` |
| CI required | No |
