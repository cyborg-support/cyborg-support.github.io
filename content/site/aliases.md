+++
title = 'Hugo Aliases'
date = '2026-04-21'
draft = false
+++

Aliases create redirect pages at alternative URLs that point to the current page. Hugo generates a static HTML file with a `<meta http-equiv="refresh">` tag at each alias path.

## Usage

Add `aliases` to the frontmatter of any content file:

```toml
+++
title = 'My Page'
aliases = ['/old-path/', '/another-old-path/']
+++
```

Hugo generates `old-path/index.html` and `another-old-path/index.html`, each containing a redirect to the canonical URL of this page.

## Absolute vs relative paths

Always use absolute paths (starting with `/`).

```toml
# Correct — generates /how-to/index.html at the root
aliases = ['/how-to/']

# Wrong — generates /site/how-to/index.html (relative to content path)
aliases = ['how-to/']
```

A relative alias is resolved relative to the page's own URL, not the site root. For a page at `/site/hosting/`, the alias `how-to/` becomes `/site/how-to/` — not `/how-to/`.

## How the redirect works

The generated file contains:

```html
<meta http-equiv="refresh" content="0; url=https://cyborg.support/site/hosting/">
<link rel="canonical" href="https://cyborg.support/site/hosting/">
```

The redirect target uses `baseURL` from `hugo.toml`. This means aliases do not work on `localhost` when `baseURL` is set to the production domain — the redirect sends you to the live site instead.

## Verifying

After building, confirm the alias file was generated:

```bash
hugo --destination docs
ls docs/how-to/
# index.html
```
