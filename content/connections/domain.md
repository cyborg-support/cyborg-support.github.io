---
title: "Domain — cyborg.support"
date: 2026-04-20
---

## Registrar

Dreamhost — [panel.dreamhost.com](https://panel.dreamhost.com)

## DNS Records

| Record | Type | Value | Notes |
|--------|------|-------|-------|
| cyborg.support | A | 185.199.108.153 | GitHub Pages |
| cyborg.support | A | 185.199.109.153 | GitHub Pages |
| cyborg.support | A | 185.199.110.153 | GitHub Pages |
| cyborg.support | A | 185.199.111.153 | GitHub Pages |
| cyborg.support | A | 69.163.178.104 | Old host (not_editable — managed by Dreamhost) |
| www.cyborg.support | A | 69.163.178.104 | Old host (not_editable — CNAME blocked) |
| ftp.cyborg.support | A | 69.163.178.104 | Dreamhost managed |
| ssh.cyborg.support | A | 69.163.178.104 | Dreamhost managed |

## GitHub Pages

Repo: [cyborg-support/cyborg-support.github.io](https://github.com/cyborg-support/cyborg-support.github.io)

Custom domain target: `cyborg.support`

## Known Issues

- `www.cyborg.support` still points to old host — Dreamhost API returns `not_editable`, must be changed via panel manually
- Old `cyborg.support` A record `69.163.178.104` also not_editable via API
