# IzzyLenz — Photography Portfolio

A cinematic, dark-themed photography portfolio website built to showcase work, attract clients, and convert bookings.

## ✨ Features

- **Cinematic Hero Section** — Full-bleed imagery with elegant typography and smooth animations
- **Curated Gallery** — Visual showcase of photography work with a refined layout
- **Spotlight Section** — Highlighted work or featured collections
- **Testimonials Carousel** — Client reviews displayed in an infinite-scroll carousel
- **Call-to-Action** — Conversion-focused section to drive session bookings
- **Portfolio Page** — Dedicated space for the full body of work
- **Responsive Design** — Optimized for all screen sizes

## 🛠 Tech Stack

| Layer       | Technology                              |
| ----------- | --------------------------------------- |
| Framework   | [Next.js 16](https://nextjs.org)        |
| Language    | TypeScript                              |
| Styling     | Tailwind CSS v4                         |
| Animations  | Framer Motion                           |
| Icons       | Lucide React, React Icons              |
| Fonts       | Noto Serif, JetBrains Mono, Raleway     |

## 📂 Project Structure

```
app/
├── components/
│   ├── landingPageSections/
│   │   ├── HeroSection.tsx
│   │   ├── GallerySection.tsx
│   │   ├── SpotlightSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   └── CTASection.tsx
│   ├── Footer.tsx
│   ├── InfiniteCarousel.tsx
│   └── TestiminialCarousel.tsx
├── portfolio/
│   └── page.tsx
├── themes/
│   └── colors.css
├── layout.tsx
├── page.tsx
└── globals.css
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/Afolabi-bit/izzy-lenz.git
cd izzy-lenz

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Production Build

```bash
npm run build
npm start
```

## 📄 License

This project is private.
