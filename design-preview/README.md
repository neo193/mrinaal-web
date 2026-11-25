# Website redesign: review folder

The redesign is now built into the site on the `redesign` branch (`app/`, `components/`). This folder holds the review material.

- **Layout and components:** taken from the concept video. A dark hero with an illustration, a highlighted "About Us" panel overlapping it, pill labels, dark cards with round photos, a winding stats graphic, an FAQ grid and a dark call-to-action band.
- **Colours:** the existing site's palette. Navy `#0b2447` / `#14366b`, teal accent `#00a6a6` / `#008585`, ink `#16213a`, muted `#5b6579`, light background `#f4f7fb`.
- **Content:** unchanged, from `lib/content.ts`. Any new wording added for the redesign is marked as draft: add `?drafts` to any URL to highlight it in yellow.

## Screenshots of the built site (`site-screens/`)

| Page | Desktop | Mobile |
|---|---|---|
| Home | [home-desktop.jpg](site-screens/home-desktop.jpg) | [home-mobile.jpg](site-screens/home-mobile.jpg) |
| About Us | [about-us-desktop.jpg](site-screens/about-us-desktop.jpg) | |
| Computer Hardware | [computer-hardware-desktop.jpg](site-screens/computer-hardware-desktop.jpg) | |
| Network Solutions | [network-solution-desktop.jpg](site-screens/network-solution-desktop.jpg) | |
| Security Systems | [security-systems-desktop.jpg](site-screens/security-systems-desktop.jpg) | [security-systems-mobile.jpg](site-screens/security-systems-mobile.jpg) |
| Consultation | [consultation-desktop.jpg](site-screens/consultation-desktop.jpg) | |
| Gallery | [gallery-desktop.jpg](site-screens/gallery-desktop.jpg) | |
| Enquiry | [enquiry-desktop.jpg](site-screens/enquiry-desktop.jpg) | [enquiry-mobile.jpg](site-screens/enquiry-mobile.jpg) |
| Contact Us | [contact-us-desktop.jpg](site-screens/contact-us-desktop.jpg) | |

The floating "Call" button is hidden in these screenshots. On the real site it stays in the bottom-right corner.

## Original mockups

`home.html`, `security-systems.html` and `enquiry.html` are the static mockups approved before coding. Their screenshots are in `screens/`, and `screens/video-colours/` holds the first version, which used the concept video's colours.

## Run it locally

```bash
npm install
npm run dev
```

## Before merging into `main`

This folder is for review only and is not part of the site. Delete `design-preview/` before merging `redesign` into `main`, or as part of the merge.
