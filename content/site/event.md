+++
title = 'Event Frontmatter Spec'
date = '2026-04-22'
draft = false
tags = ['event']
event_start = '2026-05-06T14:00:00-03:00'
event_end   = '2026-05-06T15:00:00-03:00'
event_location = 'https://zoom.us/j/cyborg-support'
event_organizer = 'Cyborg Support'
+++

Any post on this site can become a calendar event by adding `tags = ['event']` and the required frontmatter below.

## Results

- **Event partial** — rendered at the top of the page with "Download event" and "Subscribe to calendar" buttons; location is linked if a URL
- **Per-event `.ics`** — generated at build time, downloadable at `/{page-path}/event.ics`
- **Main calendar feed** — `https://cyborg.support/event.ics` aggregates all events; subscribe once in Apple Calendar, Google Calendar, or any iCal client and get all future events automatically

## Required

These fields are needed to generate a valid `.ics` entry.

| Field | Type | Example |
|---|---|---|
| `event_start` | RFC 3339 datetime | `2026-05-10T14:00:00-03:00` |
| `event_end` | RFC 3339 datetime | `2026-05-10T15:30:00-03:00` |

## Optional

| Field | Type | Notes |
|---|---|---|
| `event_location` | string | URL or physical address — if a URL, the event partial renders it as a link |
| `event_image` | string | Absolute URL — used by Apple Calendar |
| `event_rrule` | string | iCal RRULE, e.g. `FREQ=WEEKLY;BYDAY=TU` |
| `event_organizer` | string | Display name of the organizer |

For virtual events, use a full URL in `event_location`:

```toml
event_location = 'https://zoom.us/j/example'
```

The partial detects URLs (starts with `http`) and wraps the location in an `<a>` tag automatically. Physical addresses are rendered as plain text.

## Auto-derived

Hugo fills these automatically — no need to declare them.

| iCal field | Source |
|---|---|
| `SUMMARY` | `.Title` |
| `DESCRIPTION` | `.Summary` (first paragraph) |
| `URL` | `.Permalink` |
| `UID` | `.Permalink` |
| `DTSTAMP` | build time |

## Example

```toml
+++
title = 'Office Hours — May 10'
date = '2026-05-01'
tags = ['event', 'office-hours']
event_start = '2026-05-10T14:00:00-03:00'
event_end   = '2026-05-10T15:30:00-03:00'
event_location = 'https://zoom.us/j/example'
event_image    = 'https://cyborg.support/images/office-hours.jpg'
+++
```
