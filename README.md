# KBFarma – Vaccination Services Website

Next.js 14 (App Router) + TypeScript + Tailwind CSS. UI design mockup (`desktop.png` / `small_devices.png`) k mutabiq 100% match banaya gaya hai — colors, spacing, cards, sab kuch component-wise.

## Setup

```bash
npm install
npm run dev
```

Browser mn `http://localhost:3000` khol lein.

Production build:

```bash
npm run build
npm start
```

## Fonts (self-hosted, no internet needed)

Pehle `next/font/google` use ho raha tha jo build/dev k waqt Google se fonts fetch karta tha — agar internet slow/blocked ho to `npm run dev` atak jata tha ya fallback font laga deta tha. Ab `@fontsource/*` packages k zariye fonts project k andar hi bundled hain, koi external request nahi jaati. `npm install` k baad seedha `npm run dev` chalayein, kuch bhi download nahi hoga.

## Image masking

Hero aur About section ki images ab organic "blob" shape mask k sath hain (plain rounded rectangle ki jagah), sath ek halka gradient blob background bhi hai depth k liye — `app/globals.css` mn `.blob-mask` / `.blob-mask-alt` classes dekh lein agar shape adjust karni ho.

## Zaroori step: Real images daalain

Aap ny jo images attach ki thin (hero photo, about photo, gallery photos), unko exact inn naamon k sath `public/images/` folder mn daal dein (abhi placeholder images hain, unko replace kr dein):

```
public/images/hero.png       -> hero section wali chick vaccination photo
public/images/about.png      -> about section wali photo (specialist chick check kr rha)
public/images/gallery-1.png  -> gallery photo 1
public/images/gallery-2.png  -> gallery photo 2
public/images/gallery-3.png  -> gallery photo 3
public/images/gallery-4.png  -> gallery photo 4
public/images/gallery-5.png  -> gallery photo 5
```

Bas file names same rakhne hain, code khud pick kr lay ga — koi aur change nai krna.

## Structure

```
app/
  layout.tsx        -> fonts (Poppins, Inter, Caveat), metadata
  page.tsx           -> sections ko order mn call krta h
  globals.css        -> smooth scroll, reusable button/card classes
components/
  TopBar.tsx         -> top dark green utility bar
  Header.tsx         -> logo, nav, mobile menu, request service + call
  Hero.tsx           -> hero heading, stats, image
  FeaturesStrip.tsx  -> 4 trust points (overlapping card)
  About.tsx          -> about + stats grid
  Services.tsx       -> 5 services cards
  ProcessSection.tsx -> "How We Work" steps + testimonials
  Gallery.tsx        -> gallery grid
  CTA.tsx            -> bottom green CTA banner
  Footer.tsx          -> footer links + contact + bottom bar
  icons/IconMap.tsx        -> lucide-react icon lookup by string key
  icons/SocialIcons.tsx    -> inline SVG social icons (fb/insta/whatsapp/yt)
data/
  site-data.ts       -> saara content (nav links, services, testimonials, etc.) ek jaga se edit ho jaye
```

## Notes

- Colors, fonts (script accent font `Caveat`), aur layout **mockup k mutabiq** set kiye gaye hain (`tailwind.config.ts` mn brand/gold tokens dekh lein).
- Sab hover animations, smooth scroll (`scroll-behavior: smooth`), aur `prefers-reduced-motion` respect kia gaya hai.
- Mobile menu, responsive grid — sab `small_devices.png` k mutabiq match krta hai.
- Content (phone numbers, address, testimonials text) `data/site-data.ts` mn hai — sirf wahan edit krein, poore app mn dhoondhna nai paray ga.
