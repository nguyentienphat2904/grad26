# NTP Graduation – Digital Invitation Website

A beautiful, responsive, static digital graduation invitation website crafted for **Nguyen Tien Phat** to celebrate graduation with friends and family.

Built with **React**, **Vite**, **TypeScript**, **CSS Modules**, and **Lucide React**.

---

## 🎓 Visual & Aesthetic Design

- **Color Palette**:
  - Background: `#F5F2EB` (Warm ivory / cream stationery paper)
  - Primary Blue: `#168ED5`
  - Pastel / Light Blue: `#C7E5EF`
  - Dark Blue: `#426D83`
  - Text: `#554D4B`
  - White: `#FFFFFF`
- **Typography**:
  - Headings: *Playfair Display* (Classic, refined serif)
  - Graduate's Name & Signature: *Caveat* & *Great Vibes* (Handwritten script aesthetic)
  - Supporting Information: *Plus Jakarta Sans* (Clean, legible sans-serif)
- **Scrapbook & Personal Touch**:
  - Low-poly geometric crystal facet patterns in pastel blue tints
  - Authentic washi tape strips with serrated edges pinning cards
  - Academic alumni seal and graduation cap vector illustration
  - Interactive celebration confetti (`canvas-confetti`) styled in project colors

---

## 🌐 Multi-language Support (i18n)

The application supports both **Vietnamese** (default) and **English**:

- **Instant Language Switcher**: Tap the `VI / EN` toggle pill in the top navigation bar or mobile menu.
- **URL Parameter Detection**:
  - `?lang=vi` – Forces Vietnamese interface
  - `?lang=en` – Forces English interface
- **Browser & Storage Fallback**: Detects browser language preference and remembers user selection in `localStorage`.
- **Synchronized Attributes**: Automatically updates HTML `<html lang="...">`, page title, and meta description on switch.
- **Localized Calendar & Links**: Google Calendar event links, `.ics` files, and share links adapt their event descriptions according to the chosen language.

---

## 🌟 Key Features

1. **Section 1: Hero – Graduation Announcement**
   - Introductory badge: `YOU ARE INVITED TO`
   - Main title: `CELEBRATE MY GRADUATION`
   - Graduate name: `NGUYEN TIEN PHAT` with handwritten script and academic cap
   - Supporting quote: *&ldquo;A new chapter begins.&rdquo;*
   - Animated scroll indicator smoothly leading into the invitation card.

2. **Section 2: Personal Invitation (Letter Card)**
   - Letter-like printed invitation card with washi tape and corner flourishes.
   - Dynamic guest personalization: pass `?to=Your+Guest+Name` in the URL (e.g., `?to=Nguyen%20Ngoc%20Dieu%20Ha`).
   - Built-in **"Invite a Friend"** modal helper to easily generate and copy customized links for any guest.
   - Interactive **"Toss Confetti"** celebration trigger and interactive academic seal.

3. **Section 3: Event Details**
   - **Date**: Saturday, November 28, 2026
   - **Time**: 12:00 PM (Indochina Time)
   - **Venue**: Building B4, Ho Chi Minh City University of Technology (HCMUT)
   - **Address**: 268 Ly Thuong Kiet Street, Dien Hong Ward, Ho Chi Minh City, Vietnam.
   - **Add to Calendar**: One-click Google Calendar web link & `.ics` file download (Apple Calendar / Outlook).
   - **Copy Address**: Fast clipboard copy with instant visual feedback.
   - Live ceremony countdown timer.

4. **Section 4: Location & Directions**
   - Venue information with gate guidance.
   - Responsive embedded interactive Google Maps map centered on Building B4 at HCMUT.
   - Prominent **"Get Directions"** button opening turn-by-turn directions directly to the destination address in a new tab.

5. **Section 5: Closing Message**
   - Heartfelt closing quote: *&ldquo;Your presence would make this special day even more memorable.&rdquo;*
   - Salutation: *&ldquo;Hope to see you there!&rdquo;*
   - Signature: *With love, Nguyen Tien Phat*
   - Smooth "Back to Top" navigation.

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- `pnpm` (or `npm`)

### Installation & Development

```bash
# Install dependencies
pnpm install

# Start Vite dev server
pnpm run dev

# Build production bundle
pnpm run build

# Preview production build locally
pnpm run preview
```

### Personalized Guest Links & Multi-language URLs

To share a personalized invitation with any guest in their preferred language, append `?to=Guest+Name` and optionally `&lang=vi` (or `&lang=en`):

- **Vietnamese**: `https://your-domain.com/?to=Nguyen%20Ngoc%20Dieu%20Ha&lang=vi`
- **English**: `https://your-domain.com/?to=John%20Doe&lang=en`
- **Family & Mentors**: `https://your-domain.com/?to=Ba%20Mẹ&lang=vi`

If no guest parameter is supplied, it defaults to:
- **Vietnamese**: *"Quý Thầy Cô, Gia Đình & Bạn Bè Thân Quý"*
- **English**: *"Dearest Friends & Family"*

---

## 📁 Project Structure

```
├── index.html                 # Entry HTML with Open Graph & Google Fonts
├── package.json               # Dependencies & scripts
├── tsconfig.json              # TypeScript configuration
├── vite.config.ts             # Vite build configuration
└── src/
    ├── App.tsx                # Main application wrapper with scroll observer
    ├── main.tsx               # React DOM entry
    ├── vite-env.d.ts          # Vite client types
    ├── data/
    │   └── event.ts           # Centralized event & graduate information
    ├── components/
    │   ├── Navbar.tsx         # Translucent floating quick navigation
    │   ├── HeroSection.tsx    # Section 1: Hero announcement
    │   ├── InvitationSection.tsx # Section 2: Personal invitation letter & share modal
    │   ├── EventDetails.tsx   # Section 3: Date, time, venue, calendar actions
    │   ├── LocationSection.tsx # Section 4: Google Maps & directions
    │   ├── ClosingSection.tsx # Section 5: Closing quote, signature & back to top
    │   └── DecorativeElements.tsx # Washi tape, low-poly crystal SVGs, cap illustration, seals
    └── styles/
        └── global.css         # Design tokens, reset, typography & paper grain background
```
