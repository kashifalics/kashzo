# Kashzo Solutions Ltd Website

Production marketing website for Kashzo Solutions Ltd, an AI and software engineering company. The site presents verified services, project work, industries, company information and project enquiry flows.

## Stack

- Next.js 16 App Router
- React 19 and TypeScript
- Tailwind CSS 4
- CSS Modules for scoped visual systems
- Framer Motion for viewport reveals and count-up animation
- EmailJS for optional contact-form delivery
- Optional FastAPI backend integration for Kashzo AI

## Local development

Install dependencies and copy the environment template:

```bash
npm install
copy .env.example .env.local
npm run dev
```

Open `http://localhost:3000`. If port 3000 is unavailable, use:

```bash
npm run dev -- --port 3100
```

## Environment variables

Configure only the services in use. Never commit `.env.local`.

- `NEXT_PUBLIC_SITE_URL`: canonical production URL
- `NEXT_PUBLIC_EMAILJS_SERVICE_ID`: EmailJS service identifier
- `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`: EmailJS template identifier
- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`: EmailJS browser public key
- `NEXT_PUBLIC_RAG_API_URL`: public URL of the separately deployed RAG backend
- `NEXT_PUBLIC_CHATBOT_ENABLED`: chatbot feature flag

`NEXT_PUBLIC_RAG_API_URL=http://localhost:8000` is for local development only. In Vercel, set it to the deployed HTTPS backend URL. Secrets such as LLM keys and Supabase service-role keys must remain server-side.

## Project structure

```text
src/app/                 App Router pages, metadata and API routes
src/components/layout/   Shared header and footer
src/components/motion/   Centralized animation primitives
src/components/ui/       Reusable interface primitives
src/lib/config/          Services, industries, technologies and site configuration
src/lib/data/            Verified projects and FAQs
backend/                 Optional FastAPI chatbot backend scaffold
public/                  Static public assets
```

The homepage has its own scoped visual system in `src/app/home.module.css`. Secondary marketing pages share `src/app/inner-pages.module.css` so the brand can be adjusted consistently without changing page logic.

## Quality checks

Run before every deployment:

```bash
npm run lint
npx tsc --noEmit
npm run build
```

There is currently no automated `npm test` script.

## Vercel deployment

The GitHub repository is connected to Vercel. A push to the configured production branch (`main`) normally triggers a production deployment.

1. Add production environment variables in Vercel Project Settings.
2. Ensure `NEXT_PUBLIC_SITE_URL` matches the canonical public domain.
3. Do not use localhost URLs in production variables.
4. Push the validated commit to `main`.
5. Confirm the matching commit appears under Vercel Deployments and reaches **Ready**.

`vercel.json` intentionally keeps the standard Next.js framework configuration. Tailwind CSS 4 uses `@tailwindcss/postcss` and the global `@import "tailwindcss"`; preserve this arrangement.
