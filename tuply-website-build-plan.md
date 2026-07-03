# tuply. Website — Build Plan
### Using Cursor IDE, Cursor CLI, and Kiro CLI (formerly Amazon Q Developer CLI)

This is a working plan, not a marketing document. It's meant to stay open in a tab while you build. Every command is copy-pasteable, every prompt is something you can paste straight into a terminal, and every design decision is tied back to a line in your brand brief so the two AI agents you're using stay consistent with each other.

---

## 0. Read this first: "Amazon Q CLI" is now Kiro CLI

Before anything else — the tool you know as **Amazon Q Developer CLI** isn't called that anymore, and this changes what you should actually install today.

- On **November 17, 2025**, AWS rebranded the Q Developer CLI into **Kiro CLI**. If you had auto-update on, your `q` install silently became Kiro CLI on November 24, 2025.
- Kiro CLI is **backward-compatible** — the old `q` and `q chat` commands still work — but the active product going forward, with the newest models and features, is Kiro CLI (`kiro-cli` / `kiro-cli chat`).
- As of **May 15, 2026**, AWS blocked *new* Amazon Q Developer Free Tier sign-ups and new Pro subscriptions entirely. If you don't already have a Q Developer account, you can't create one — you'd install Kiro CLI directly.
- Full end-of-support for the old Q Developer IDE plugin/CLI subscription is **April 30, 2027**.
- Kiro is bigger than a rename: it's AWS's agentic dev tool built around "spec-driven development" — Specs, Hooks, Steering files, custom agents — layered on top of what Q Developer used to do.

**What this means for you:** everywhere in this plan where you'd expect "Amazon Q," the actual tool to install and run is **Kiro CLI**. It runs perfectly well from an ordinary terminal — including the integrated terminal inside Cursor IDE — so your original plan (both agents, both via CLI, both inside Cursor) still works exactly as you imagined it. Nothing here requires the separate Kiro IDE.

---

## 1. What we're building, in plain language

tuply. is positioning itself as a technology and growth partner — not a web agency — for three industries: **skincare brands, real estate & construction, and medical clinics**. The website's job is to make a founder, CEO, or clinic owner believe that within the first few seconds, using a design language borrowed from Apple, Stripe, Linear, Vercel, Notion, and Framer: minimal, high-contrast, mostly black and white, confident typography, no clutter, no gradients unless very subtle, and copy that never leans on words like "revolutionary" or "best in the industry."

Everything below — the stack, the sitemap, the prompts — is built to serve that one goal.

---

## 2. The dot: how "tuply." actually behaves in code

You flagged this explicitly, so it gets its own section instead of getting lost in a design system table.

| Context | Form to use | Example |
|---|---|---|
| Written brand name anywhere in UI copy, code comments, commit messages | `tuply.` (lowercase t, trailing period) | "tuply. builds AI systems for..." |
| Start of a sentence (brief says never capitalize unless grammar forces it) | Prefer rewriting the sentence so `tuply.` isn't first. If unavoidable, keep it lowercase — don't invent a capital "Tuply." | "Businesses hire tuply. because..." not "Tuply. helps..." |
| Spoken / screen-reader / aria-label | `tuply` (no period read aloud) | `<span aria-label="tuply">tuply.</span>` on the logo mark |
| Any username, handle, @mention, or profile slug | `tuplydot` | `@tuplydot`, `github.com/tuplydot` |
| `<title>` tag | `tuply.` on its own or `tuply. — [page purpose]` | `tuply. — AI, web, and growth for skincare, real estate, and healthcare brands` |
| `og:site_name`, JSON-LD `name` | `tuply.` | see schema example in §12 |
| JSON-LD `sameAs` array | full URLs using `tuplydot` handles | `https://instagram.com/tuplydot` |
| Footer copyright | `© 2026 tuply. All rights reserved.` | — |
| Favicon / browser tab | A standalone dot-mark works well here — see the signature-element idea in §4 | — |

One practical accessibility note worth raising with whoever reviews the site: screen readers pronounce a trailing period as a full pause, so `tuply.` at the end of a heading can read like "tuply, period, [next sentence starts]." An `aria-label="tuply"` on the logo/wordmark component (visually still showing `tuply.`) avoids that without changing anything a sighted visitor sees. Have Cursor CLI implement this once, in the logo component, rather than repeating it everywhere.

**Domain candidates to check availability for** (not verified here — you'll need to check a registrar): `tuply.co`, `tuply.io`, `gettuply.com`, `tuplydot.com`. This plan uses `tuply.co` as a placeholder in examples — swap it for whatever you actually register.

---

## 3. The design reference: what's actually at that link

I fetched both the homepage and the services page at the URL you shared. Worth being direct about what it is: it's the live demo of **"Xmoze — SaaS Multipurpose Landing Template,"** an Envato Elements template (that's what the `?storefront=envato-elements` parameter refers to) built around a crypto wallet / fintech app — Bitcoin and Ethereum price cards, app-store download buttons, a "trusted by millions" testimonial carousel, the works.

Visually, it's the opposite of your brand brief — colorful, consumer-app styling, generic stock-photo hero mockups. So we're not borrowing its skin. What's genuinely useful is its **section anatomy** — the proven rhythm a modern SaaS/services landing page moves through — which we can restyle completely in tuply.'s monochrome language and re-populate with your actual content.

| Reference section | What it does there | tuply. equivalent |
|---|---|---|
| Sticky nav: logo, links, login, primary CTA | Wayfinding + conversion | Same pattern: `tuply.` logo, Services / Industries / About / Contact, one primary CTA ("Start a project" or "Book a call") |
| Hero: headline + subtext + dual CTA + product mockup | First-impression pitch | Headline stating the value prop, one primary + one secondary CTA, no app-store buttons (not relevant), optional abstract geometric visual instead of a product screenshot |
| 3-column icon feature grid | "Why us" | Reused almost directly for a Services overview grid (6 cards: AI Development, Website Development, Mobile Apps, UI/UX, Digital Marketing, Business Development) |
| Alternating image/text split promo block | Deeper explanation of one feature | Reused for "How we work" or a philosophy statement block |
| Horizontal scrollable data-row cards (crypto prices) | Browsable comparison | **Repurposed for your 3 target industries** — Skincare / Real Estate & Construction / Medical Clinics, each as a card with icon, short description, and a "See what we build" link. This is a strong structural fit since you have exactly three industries. |
| 3-step process | Explains onboarding | Reused as "How we work" (e.g., Discover → Build → Grow) |
| Testimonial carousel | Social proof | Replace with a "Trusted by" logo strip once you have clients; use a placeholder or omit entirely at launch rather than faking testimonials |
| FAQ accordion | Objection handling | Kept — genuinely useful for a B2B services site |
| Pricing table (3 tiers) | Self-serve pricing | **Optional, and worth a deliberate decision.** Agencies selling custom AI/web/marketing work often do discovery calls instead of listing prices. If you want a pricing section, reframe it as "engagement models" (e.g., Project-based / Retainer / Partnership) rather than SaaS seat pricing. |
| Blog/news card grid | SEO + authority | Reused as "Insights" — good for the SEO keyword list in your brief, but fine to launch without and add in Phase 2 |
| Final CTA band | Last conversion chance | Kept |
| Footer: logo, tagline, 3 link columns, copyright | Navigation + trust | Kept, with Company / Services / Industries columns |

That gives us a full sitemap's worth of proven structure without inheriting a single pixel of the crypto-app visual style.

---

## 4. Design system starting point

A translation of the brief's "minimalist, high-contrast, mostly black and white" direction into values an AI agent can actually build against. Two things to deliberately avoid, because they're the default an AI coding agent reaches for if you just say "clean and modern": a warm cream background with a terracotta accent, and a black background with a single neon-green or vermilion accent. Both are recognizable AI-generated-website tells at this point, and neither is what your brief is asking for anyway — your brief asks for genuine black/white/gray, not "dark mode with a pop of color."

**Color** — kept deliberately close to true grayscale, because restraint *is* the brand signal here:

| Token | Value | Use |
|---|---|---|
| `ink` | `#0A0A0A` | Primary text on light, primary background on dark sections |
| `paper` | `#FAFAFA` | Primary background |
| `graphite` | `#4A4A4A` | Secondary text |
| `hairline` | `#E4E4E2` | Borders, dividers (1px, never a shadow) |
| `signal` | `#0A0A0A` (i.e., no separate accent color) | Links/focus states use weight + underline, not color |

If you want a single accent later (a lot of Vercel/Linear-style brands eventually add one small one), the natural candidate — given the brand already has a built-in visual motif — is to give the **dot in the logo** its own accent color and keep literally everything else grayscale. That way "color" and "brand mark" are the same decision, and you're not introducing color as decoration.

**Typography** — since Vercel is explicitly in your inspiration list and you're likely deploying there anyway (see §5), their open-source typeface **Geist** (display + text) and **Geist Mono** (for eyebrows, labels, stats) is a well-justified, non-generic pairing rather than a default Inter/Helvetica choice. Fallback stack: `Geist, "Inter", -apple-system, sans-serif`.

**Layout principles:**
- 12-column grid, max content width ~1280px, generous side padding that increases at each breakpoint rather than staying fixed.
- Large, deliberate jumps in the type scale (not a gradual 14/16/18px creep) — headlines should feel oversized relative to body text.
- Flat hairline dividers between sections instead of drop-shadow cards — matches "no unnecessary decorations."
- Motion: fast (150–250ms), used only for state changes and scroll reveals, never decorative looping animation. Respect `prefers-reduced-motion` everywhere.

**Signature element:** the period. It's already the one truly distinctive thing about this brand's name — a detail worth turning into a recurring visual device rather than leaving as a punctuation mark. A few concrete ways to use it, pick one or two rather than all of them:
- A blinking cursor-style dot at the end of the hero headline (subtle, stops after a few seconds — ties to "technology partner" without being a gimmick).
- The dot as a small live-status indicator in the nav ("● Currently taking on 3 new clients this quarter").
- The dot as the favicon itself — a single square or circle on a transparent field.
- The dot as a section-break marker instead of a horizontal rule.

---

## 5. Tech stack

| Layer | Choice | Why |
|---|---|---|
| Frontend | **React + TypeScript + Vite** | Fast dev server, lightweight, full control over routing and rendering; pairs cleanly with a separate backend |
| Styling | **Tailwind CSS + shadcn/ui** (Radix primitives underneath) | Fast to iterate on with an AI agent, accessible defaults out of the box, easy to keep strictly to your token system instead of drifting |
| Motion | **Framer Motion**, used sparingly per §4 | Handles scroll reveals and hover states without hand-rolled CSS animation |
| Routing | **React Router v6** | Client-side routing for the multi-page sitemap in §6 |
| Content | Typed TypeScript data files (`/src/content/services.ts`, `/src/content/industries.ts`) to start | No CMS overhead for a site this size at launch; swap for a headless CMS (Sanity/Contentful) in Phase 2 |
| Backend | **FastAPI (Python)** | Handles the contact form endpoint, email dispatch via Resend, and any future API routes (AI demos, lead capture); clean async support, auto-generated OpenAPI docs |
| Forms | React form posting to `POST /api/contact` on the FastAPI backend, validated with Pydantic on the server | Keeps the contact form off third-party embeds that clash with the visual design |
| Fonts | Google Fonts or self-hosted Geist / Geist Mono loaded via CSS `@font-face` | Zero layout shift with `font-display: swap` |
| Hosting | **Vercel** (frontend) + **Railway / Render** (FastAPI backend) | Vercel is in your design-inspiration list and handles the React build; Railway/Render gives a simple always-on Python service with zero DevOps overhead |
| Analytics | Plausible or Vercel Analytics (script tag) | Privacy-respecting, no cookie-consent banner needed, fits a "no clutter" homepage |

---

## 6. Sitemap

| Page | Path | Priority | Purpose |
|---|---|---|---|
| Home | `/` | Phase 1 | Full pitch — see §7 |
| Services | `/services` | Phase 1 | Overview of the 6 core services |
| Industries | `/industries` | Phase 1 | Overview of the 3 target industries |
| — Skincare | `/industries/skincare` | Phase 2 | Industry-specific detail page |
| — Real Estate & Construction | `/industries/real-estate-construction` | Phase 2 | Industry-specific detail page |
| — Medical Clinics | `/industries/medical-clinics` | Phase 2 | Industry-specific detail page |
| About | `/about` | Phase 1 | Vision, mission, values, positioning |
| Work | `/work` | Phase 2 | Case studies (placeholder until real ones exist) |
| Insights | `/insights` | Phase 3 | SEO content, optional at launch |
| Contact | `/contact` | Phase 1 | Form + calendar link |
| Privacy / Terms | `/legal/privacy`, `/legal/terms` | Phase 1 | Minimal, required |

---

## 7. Home page, section by section

The one page worth planning in full detail, since it carries the most weight:

1. **Nav** — `tuply.` wordmark (dot as signature element), Services / Industries / About / Contact, one primary CTA button.
2. **Hero** — headline built from the brief's core question ("How does this help you make more money, save more time, or improve customer experience?"), one sentence of subtext, primary CTA ("Start a project") + secondary ("See our work" or "How we work"). No stock photography — an abstract geometric visual or the animated-dot treatment from §4 instead.
3. **Trust/positioning strip** — one line reinforcing "technology and growth partner," not "web agency." Optional client-logo row once available.
4. **Services grid** — 6 cards (AI Development, Website Development, Mobile App Development, UI/UX Design, Digital Marketing, Business Development), icon + 1-sentence description + link to `/services`.
5. **Industries strip** — 3 cards (Skincare / Real Estate & Construction / Medical Clinics), directly adapted from the reference site's horizontal data-row pattern.
6. **How we work** — 3-step process (e.g., Discover → Build → Grow), reused from the reference site's process-steps pattern.
7. **Philosophy block** — a short pull-quote-style section built from the brief's "We build systems that help businesses grow" line.
8. **FAQ** — 4–6 questions addressing common objections (timeline, cost model, who you work with, what makes tuply. different from "just an agency").
9. **Final CTA band.**
10. **Footer** — wordmark, short tagline, Company / Services / Industries link columns, social row using `tuplydot` handles, copyright.

**Services, Industries, and About pages** follow the same visual system with more depth per item; Contact is a single form (name, company, industry dropdown, budget range, message) plus a calendar-booking embed if you use one (Cal.com fits the aesthetic better than Calendly's default styling).

---

## 8. Who does what: Cursor IDE vs. Cursor CLI vs. Kiro CLI

You don't need a rigid rule for this, but a default division of labor keeps the two agents from stepping on each other:

| Surface | Best for | Why |
|---|---|---|
| **Cursor IDE itself** (Tab completion, Cmd+L chat, diff review) | Line-by-line review, small tweaks, reading what either agent produced | This is where a human actually looks at code before it ships |
| **Cursor CLI** (`cursor-agent`, run in Cursor's integrated terminal) | The primary builder — scaffolding, most feature and page work, iterative multi-file changes | Shares the same rules, MCP config, and model access as the IDE itself; has a `Plan` mode for thinking through a feature before touching files |
| **Kiro CLI** (`kiro-cli chat`, run in the same terminal) | A second, independent pass: code review, accessibility/security audit, structured output (JSON-LD, sitemap.xml, robots.txt), and — if you ever add AWS-backed infrastructure (e.g. a Bedrock-powered chat demo for the "AI assistants" service line) — the AWS-native side of that work | A different model looking at the same code catches different things than the tool that wrote it; genuinely useful as a fresh pair of eyes, not just redundant |

Practical rule of thumb: **build with Cursor CLI, review with Kiro CLI.** After a phase of work, run Kiro CLI over the same directory and ask it specifically to critique — not extend — what's there.

---

## 9. Environment setup

Run these in Cursor's integrated terminal (`` Ctrl+` `` / `` Cmd+` ``, or View → Terminal).

**Cursor CLI:**
```bash
curl https://cursor.com/install -fsS | bash
cursor-agent --version
cursor-agent
```
Running `cursor-agent` for the first time prompts you to sign in with your Cursor account in the browser — no separate login command needed.

**Kiro CLI:**
```bash
curl -fsSL https://cli.kiro.dev/install | bash
# Add the install location to your PATH if the installer asks you to:
export PATH="$HOME/.local/bin:$PATH"
kiro-cli --version
kiro-cli
```
First launch walks you through browser-based sign-in — a free **AWS Builder ID** (no AWS account required) unless your team already has an AWS Identity Center / Q Developer Pro seat, which Kiro CLI will also accept.

**Project scaffold:**
```bash
# Frontend
npm create vite@latest tuply-website -- --template react-ts
cd tuply-website
npm install
npm install -D tailwindcss postcss autoprefixer && npx tailwindcss init -p
npm install framer-motion react-router-dom
npx shadcn@latest init

# Backend
cd ..
mkdir tuply-api && cd tuply-api
python -m venv .venv && source .venv/bin/activate  # Windows: .venv\Scripts\activate
pip install fastapi uvicorn[standard] pydantic resend python-dotenv
# create main.py as the FastAPI entry point

git init && git add -A && git commit -m "chore: scaffold"
```

Open the resulting folder in Cursor IDE, then run `cursor-agent` and `kiro-cli chat` from its integrated terminal for everything that follows.

---

## 10. Bake the brand brief into both agents once — not into every prompt

This is the highest-leverage setup step in this whole plan. Instead of re-explaining "don't say revolutionary" and "the dot is silent but part of the name" in every single prompt, put it in a rules file each tool reads automatically.

**Cursor** — create `.cursor/rules/brand.mdc`:
```markdown
---
description: tuply. brand and writing rules
alwaysApply: true
---

# tuply. brand rules

- Write the company name as "tuply." (lowercase t, trailing period) in all UI
  copy, comments, and commit messages. Never "Tuply" or "TUPLY". Avoid starting
  a sentence with it; rewrite instead of capitalizing the T.
- Any handle, @mention, or profile URL uses "tuplydot", never "tuply".
- Voice: professional, clear, confident, no buzzwords. Never use
  "revolutionary", "world-class", "game-changing", or "best in the industry".
  State the real value instead.
- Position tuply. as a technology and growth partner, never as "just a web
  agency" or "just a website company".
- Visual language: minimalist, high-contrast, black/white/gray only. No
  gradients unless extremely subtle. No decoration without a functional
  purpose. Typography carries the hierarchy, not color.
- Copy is written for founders, CEOs, and clinic/practice owners — not
  consumers. It should read like it came from an experienced consultant.
- Every component must work at 375px width and respect
  prefers-reduced-motion.
```

**Kiro** — create the three foundation files it looks for by default in `.kiro/steering/`:

`product.md`:
```markdown
---
inclusion: always
---
# tuply. — product context

tuply. is a technology and growth partner for businesses, combining AI
development, web/mobile development, UI/UX design, and digital marketing.
Initial target industries: skincare brands, real estate & construction, and
medical clinics. Audience is business decision-makers, not consumers.
Positioning: never "just a web agency" — every feature should tie back to
making the client more money, saving time, or improving customer experience.
```

`tech.md`:
```markdown
---
inclusion: always
---
# tuply. — stack
Frontend: React + TypeScript + Vite, Tailwind CSS, shadcn/ui, Framer Motion
(sparingly), React Router v6. Fonts loaded via CSS @font-face (Geist/Geist Mono).
Content lives in typed TS files under /src/content/, not a database, at this stage.
Backend: FastAPI (Python), Pydantic validation, Resend for email, uvicorn server.
Frontend hosted on Vercel; backend hosted on Railway or Render.
```

`brand.md`:
```markdown
---
inclusion: always
---
# tuply. — brand & naming
Company name is written "tuply." (lowercase, trailing period) everywhere
in UI, never capitalized unless a sentence truly forces it — prefer
rewriting. All social handles and usernames are "tuplydot". Voice: no
buzzwords, no "revolutionary"/"world-class"/"game-changing"/"best in the
industry" — explain real value. Visual system is monochrome (see
design-tokens if present) — flag any gradient, bright accent color, or
decorative element that isn't functional.
```

Commit both `.cursor/rules/` and `.kiro/steering/` to the repo — that way the guardrails travel with the project instead of living only on your machine.

---

## 11. Phased build workflow, with prompts

Each phase names a primary tool. Prompts are written the way you'd actually paste them in — adjust freely.

### Phase 0 — Foundation
*Primary: Cursor CLI*
```
Set up the base layout for a React + Vite project: configure Tailwind with
the design tokens in .cursor/rules/brand.mdc, set up React Router with a
root layout component wrapping Header and Footer, load Geist and Geist Mono
via CSS @font-face, and add a placeholder favicon using a single dot shape.
Also scaffold the FastAPI backend: a main.py with a health-check route and
a /api/contact POST route stub. No page content yet — just the shell.
```
Done when: every future page can extend one shared layout, tokens exist in one place, and the FastAPI server runs locally with `uvicorn main:app --reload`.

### Phase 1 — Home page
*Primary: Cursor CLI, reviewed with Kiro CLI*
```
Build the home page at src/pages/Home.tsx using the ten sections described in
tuply's home-page plan: nav, hero with the animated-dot signature, trust
strip, 6-card services grid, 3-card industries strip, 3-step process,
philosophy pull-quote, FAQ accordion, final CTA band, footer. Use the
existing layout/token components. Keep copy tight — one sentence per card
description, no filler.
```
Then, in Kiro CLI:
```
Review src/pages/Home.tsx and its components for accessibility (labelled
landmarks, focus order, color contrast against design-tokens), and flag
anywhere copy uses a banned word from .kiro/steering/brand.md.
```

### Phase 2 — Services, Industries, About, Contact
*Primary: Cursor CLI*
Repeat the same pattern per page, pointing at the sitemap in §6 and the relevant brief section (Core Services / Target Industries / Vision-Mission-Values) as source content. For Contact specifically:
```
Build the contact page: a React form (name, company, industry select, budget
range, message) posting to POST /api/contact on the FastAPI backend. Validate
on the server with Pydantic; send via Resend. Show a confirmation state that
matches the site's monochrome design, not a generic browser alert.
```

### Phase 3 — Content & SEO
*Primary: Kiro CLI (structured output is its strength), finished in Cursor CLI*
```
Generate metadata exports (title, description, Open Graph, Twitter card)
for every page in app/, using the keyword list and tone rules in
.kiro/steering/product.md and brand.md. Also generate a JSON-LD Organization
schema for the root layout, sitemap.xml, and robots.txt.
```
See §12 for what "good" looks like here.

### Phase 4 — QA pass
*Primary: Kiro CLI as second reviewer*
```
Do a full pass over the site for: responsive behavior at 375/768/1280px,
keyboard-only navigation, visible focus states, prefers-reduced-motion
handling, and any remaining gradient/bright-color/decorative element that
violates the monochrome rule in .kiro/steering/brand.md. List findings
before making changes.
```
Fix findings back in Cursor CLI; ask it to explain each fix in the commit message.

### Phase 5 — Deploy
*Primary: you, via Cursor CLI for any last config*
See §13.

### Phase 6 — Later (not at launch)
Blog/Insights section, individual industry sub-pages, case studies once real client work exists, a live AI-chat-assistant demo on the site itself (a natural showcase for the "AI Development" service line, and a good candidate for Kiro CLI specifically if it's Bedrock-backed).

---

## 12. SEO & structured data

- Use the brief's keyword list (AI Development, Business Automation, Web Applications, Digital Transformation, etc.) naturally in headings and body copy — never stuffed, one or two per page is enough.
- Every page needs a unique `<title>` and meta description; don't let Next.js fall back to a generic default on interior pages.
- Organization schema for the root layout (adjust the domain and handles once confirmed):
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "tuply.",
  "url": "https://tuply.co",
  "logo": "https://tuply.co/logo.svg",
  "description": "Technology and growth partner combining AI development, web and mobile development, UI/UX design, and digital marketing for skincare, real estate & construction, and medical clinic businesses.",
  "sameAs": [
    "https://instagram.com/tuplydot",
    "https://twitter.com/tuplydot",
    "https://linkedin.com/company/tuplydot",
    "https://github.com/tuplydot"
  ]
}
```
- `sitemap.xml` and `robots.txt` — have Kiro CLI generate both from the actual route list rather than hand-writing them, so they never drift out of sync as pages get added.
- Every image needs real alt text describing content, not "tuply. image 1" — worth calling out explicitly in a prompt since agents default to lazy alt text otherwise.

---

## 13. Deployment checklist

- [ ] Push the repo to GitHub (private is fine to start)
- [ ] Connect the frontend repo in Vercel; set the build command to `npm run build` and output directory to `dist`
- [ ] Deploy the FastAPI backend to Railway or Render; set the start command to `uvicorn main:app --host 0.0.0.0 --port $PORT`
- [ ] Set environment variables (email API key, analytics ID) in Vercel's dashboard, not committed to the repo
- [ ] Point your registered domain's DNS at Vercel
- [ ] Verify every page in §6 that's in Phase 1 is live and linked from the nav/footer
- [ ] Submit the sitemap to Google Search Console
- [ ] Run a Lighthouse pass (aim for 90+ on Performance and Accessibility given the "fast, premium" brief requirement) — this is a good final job for Kiro CLI to interpret and fix findings from

---

## Quick reference

**Commands**
```bash
cursor-agent                       # interactive agent session
cursor-agent -p "..." --output-format json   # scripted/non-interactive
/plan                              # plan before building, inside a Cursor CLI session
/model                             # switch models, inside a Cursor CLI session

kiro-cli chat                      # interactive agent session
kiro-cli translate "..."           # natural language → shell command
/model                             # switch models, inside a Kiro CLI session
/context show --expand             # see what Kiro currently has loaded
```

**The one rule that matters most:** build with Cursor CLI, review with Kiro CLI, and let `.cursor/rules/` and `.kiro/steering/` carry the brand brief so neither agent has to be reminded twice.
