# M Rajkamal – Premium Furniture Store

Next.js 16 marketing and catalogue website for **M Rajkamal**, an authorised Godrej Interio dealer in Dadar West, Mumbai. Includes a MongoDB-backed admin CMS for products and home page content.

## Stack

- Next.js 16 (App Router, React Server Components)
- React 19, TypeScript
- MongoDB + Mongoose
- NextAuth v5 (credentials admin login)
- ImageKit (product/home image uploads)
- Google Places API (customer reviews, optional)

## Getting Started

1. Copy environment variables:

```bash
cp .env.example .env.local
```

2. Fill in required values in `.env.local` (see [Environment Variables](#environment-variables)).

3. Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) for the public site and [http://localhost:3000/admin/login](http://localhost:3000/admin/login) for the admin panel.

## Environment Variables

| Variable | Required | Scope | Purpose |
|----------|----------|-------|---------|
| `MONGODB_URI` | Yes | Server | MongoDB connection string |
| `AUTH_SECRET` | Yes | Server | NextAuth JWT signing secret |
| `ADMIN_EMAIL` | Yes | Server | Admin login email |
| `ADMIN_PASSWORD_HASH` | Yes | Server | bcrypt hash of admin password |
| `IMAGEKIT_PRIVATE_KEY` | Yes* | Server | Image uploads in admin |
| `NEXT_PUBLIC_TINYMCE_API_KEY` | Yes* | Client | Rich text editor in admin |
| `NEXT_PUBLIC_SITE_URL` | Yes | Client | Product sharing URLs |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Yes | Client | WhatsApp inquiry button |
| `GOOGLE_PLACES_API_KEY` | No | Server | Live Google reviews |
| `GOOGLE_PLACE_ID` | No | Server | Business Place ID for reviews |

\*Required for full admin functionality (product/home content editing).

Generate an admin password hash:

```bash
node -e "console.log(require('bcryptjs').hashSync('your-password', 10))"
```

## Routes

| Route | Purpose |
|-------|---------|
| `/` | Home page (CMS-managed hero, categories; DB featured products) |
| `/products` | Product catalogue (`?category=sofa` filter supported) |
| `/products/[slug]` | Product detail |
| `/about` | Store information |
| `/admin/login` | Admin sign-in |
| `/admin/products` | Product management |
| `/admin/home` | Home page CMS |

## Scripts

```bash
npm run dev      # Development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # ESLint
```

## Admin Panel

1. Set `ADMIN_EMAIL` and `ADMIN_PASSWORD_HASH` in `.env.local`.
2. Sign in at `/admin/login`.
3. Manage products at `/admin/products` and home content at `/admin/home`.

Mutations use **Server Actions** (`src/app/actions/`). Image uploads use `/api/admin/upload`.

## Deployment

1. Set all required environment variables on your hosting platform.
2. Run `npm run build` — the app uses dynamic rendering for DB-backed pages.
3. Ensure MongoDB and ImageKit are reachable from the deployment environment.

For Copilot/AI coding guidelines, see [`.github/copilot-instructions.md`](.github/copilot-instructions.md).
