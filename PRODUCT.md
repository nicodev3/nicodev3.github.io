# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: a psychologist or psychotherapist in private practice in France who needs a professional website that presents their practice accurately, is findable locally, and stays within the field’s ethical and legal frame. Typical situations: first installation, replacing a weak or DIY site, or wanting better Google / local visibility next to Doctolib.

Neighboring, not core: psychomotor therapists (psychomotriciens), who remain an offered profession on the site but are not the default audience for copy, examples, or design decisions.

Not users of this product: patients seeking therapy from Nicolas, other trades, or a multi-profession agency catalogue. Nicolas’s clinical practice lives on a separate site (`nicolas-devaux-psychologue.fr`).

## Product Purpose

Nicodev is Nicolas Devaux’s activity: create, host, and maintain websites for those professions, then keep the site findable. This repository is the public marketing site (`nicodev.fr`).

Visitor job on this site: decide whether Nicolas is the right person, then ask for a free diagnostic (4 questions, reply within 48 business hours, no commitment). Economic success is a monthly subscription after delivery: Sérénité (29 €/month) or Visibilité & Confiance (49 €/month). Construction is billed at 0 €; hosting, domain, and maintenance are included.

## Positioning

Sites for psychologists, by a practicing psychologist who is also a web developer. A generalist agency or a site builder cannot truthfully copy that double competence, nor the refusal to work for other trades. Texts go online only after the client validates them.

## Operating Context

France, liberal practice: titles, RPPS where relevant, déontologie, RGPD, legal notices, cookies, Google Business Profile, and often Doctolib or another booking tool. Evaluation of this site happens on phone first, then desktop, against real cabinet sites in the portfolio.

Stack already in this repo: Astro, Tailwind, TypeScript, Cloudflare Pages. Analytics: self-hosted Umami. Contact forms: Brevo. Local dev: `npm run dev` at `http://localhost:4321`.

## Capabilities and Constraints

This site currently offers: home and offer pages, pricing, portfolio and case studies, blog, diagnostic and contact/quote forms, installation guide, and free tools (micro-BNC calculator, viability threshold, visibility checklist, legal-notices generator).

Confirmed commercial frame, to keep as-is unless Nicolas changes it in source:

- 0 € construction, then 29 € or 49 € per month, all included
- Offer reserved to psychologists, psychotherapists (title + RPPS), and psychomotor therapists
- No sites for other professions
- Client validates texts before publication

Do not invent results (filled agendas, rankings, revenue). Do not steer every visitor toward the more expensive formula.

## Brand Commitments

Name: **Nicodev** (activity) / **Nicolas Devaux** (person, EI, SIRET 751 032 699 00033, Sceaux). Voice: sober, precise, professional; no aggressive marketing, no wellness-coach register, no interchangeable “écoute / bienveillance / accompagnement” filler. Slogan in structured data: « Sites de psychologues, par un psychologue et développeur web ». Assets: `src/assets/images/nicodev-logo.png`, portrait `src/assets/images/nicodev.webp`. Public traces: Malt, LinkedIn, GitHub (`nicodev3`), Instagram/WhatsApp `@nicodev92`.

## Evidence on Hand

Real and usable:

- Malt and Google testimonials in `src/data/testimonials.ts` (named where the source names them)
- Portfolio screenshots and live URLs in `src/data/portfolio-projects.ts`
- Case studies with stated metrics and sources in `src/data/case-studies.ts` and `src/pages/etudes-de-cas/`
- Pricing source of truth: `src/data/pricing.ts`
- Blog articles and tools in this repo

Do not fabricate testimonials, clients, press, awards, traffic numbers, or SEO results. If a proof is not in those files, it is absent.

## Product Principles

1. Speak to a psychologist in liberal practice first; neighboring professions may appear, they do not set the default.
2. Prefer a useful diagnostic over a hard sell; the paid formula comes after a real reading of the situation.
3. Keep claims checkable: prices, professions, 0 € construction, text validation.
4. Stay inside the professional frame: sobriety, déontologie, legal pages, no hype about filling the calendar.
5. Use only evidence that already exists in the repo or that Nicolas supplies.
