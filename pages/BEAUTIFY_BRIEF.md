# ThetaNote TNA — Beautify Brief

**For:** an AI design tool, to elevate the craft of 12 mobile app screens.
**Attached:** 12 standalone HTML files (`01-…` → `12-…`) + brand assets (`logo-lockup-light.svg`, `logo-icon.svg`).
**The one-line ask:** make these screens *beautiful and premium* — spacing, depth, hierarchy, motion, polish — **without changing what anything clinically means, the colour system, the information architecture, or the copy's plain language.**

These are not generic app screens. They hold a vulnerable person's clinical record. Read the constraints before touching anything.

---

## What this is

ThetaNote is a **clinical data-capture app for NDIS (disability) support workers**, used on a phone, one-handed, often mid-shift, often tired, often in direct sunlight. The worker captures what happened with the person they support (by voice, text, or tap); the app structures it into an audit-ready clinical record and produces a paste-able shift note.

**Who uses it:** support workers, range from no formal training to allied-health. Cautious about being surveilled. The screens must feel like a *trusted clinical colleague*, not a manager watching them.

**Capture is retrospective** (logged 2 min – 1 hr after an event), so "event time" is distinct from "log time" — never collapse them.

---

## Brand personality (weighted)

1. **Quietly authoritative (30%)** — earns trust through restraint and craft, not loudness. No exclamation marks, no urgent-red-by-default, no "GREAT JOB!" celebration.
2. **Worker-first (25%)** — anti-surveillance. No metrics that score the worker. No streaks, no gamification, no "you missed an event."
3. **Considered (20%)** — every element justified. Information density that earns trust through hierarchy, not bureaucratic box-stacking.
4. **Warm (15%)** — care-tone over alarm-tone. Plain language. The tool knows the work is hard.
5. **Distinctive (10%)** — one signature move: the **provenance pill** system (below). Not generic.

**Anti-references — do NOT drift toward any of these:**
- Consumer wellness apps (Calm / Headspace / Daylio) — performative-cheerful, pastel-gradient, gamified. Wrong tone; this record is grave.
- Developer-tool dark SaaS (Linear / generic 2023 dashboard) — too cool-grey-and-accent, too detached.
- Bureaucratic NDIS/care portals — form-stacking, clinician-jargon-as-worker-language.

---

## The colour system — USE THESE EXACT VALUES

### Decided brand palette (the surface you beautify)
| Role | Hex | Use |
|---|---|---|
| Surface (warm-white) | `#FAFAF7` | page background |
| Raised surface | `#FFFFFF` | cards, sheets |
| Muted surface | `#EFEFE9` | chips, inset zones |
| Ink (warm-navy) | `#0F1A2E` | primary text, headings, authority buttons |
| Ink secondary | `#3A4564` | secondary text |
| Ink muted | `#6B7186` | meta, captions |
| Border | `#E4E3DC` | hairlines, card edges |
| **Peach accent** | `#E8A87C` | THE accent: capture button, avatar, active-tab indicator, badges, type-dots |
| Peach (legible-as-text) | `#A8482A` | accent used as text/links on light surfaces |
| Peach ink (text on peach) | `#0F1A2E` | text/icons sitting on a peach fill |

**Accent rule:** peach is the *single* warm accent. Navy is ink + authority (e.g. the "Confirm and save" / "Copy" buttons are navy). Do not add a second brand colour. Do not introduce gradients on the accent.

### RESERVED CLINICAL SIGNIFIERS — DO NOT CHANGE, REPURPOSE, OR "HARMONISE"
These hexes carry **clinical meaning**. They are not decoration and not yours to restyle. Keep each visually distinct, keep AA contrast, never swap them for the brand peach:
| Meaning | Hex |
|---|---|
| Risk tier 2 (warning) | `#D6A52F` (amber) |
| Risk tier 3 (urgent) | `#D86A3F` (orange) |
| Reportable (statutory) | `#C24A4A` (red) |
| Extreme / unauthorised RP | `#8E1D1D` (oxblood) |
| Worker-confirmed ("fact") | `#5A9476` (green) |
| Awaiting clinician (pending) | `#C9B560` (gold) |
| Audit-amended / AI-inferred | `#6E7AB0` (slate-purple) |
| Voice-listening (mic active) | `#2F8F9E` (teal) |

> Known tension to respect, not fix: the brand peach `#E8A87C` is close to the reserved **welfare** care-tone. We are relocating welfare to a rose; **do not** restyle the clinical reds/oranges to "match" the brand. Severity colours must stay unmistakably severity.

---

## Typography

- **DM Sans** — all UI display + body (400 / 500 / 600 / 700). Headlines are DM Sans 700, tight tracking.
- **DM Mono** — clinical metadata only: timestamps, initials, codes, provenance labels, eyebrows (uppercase, letter-spaced).
- **Fraunces** — appears ONLY inside the brand logo asset (`logo-lockup-light.svg`). Never typeset UI text in Fraunces, and never retype "ThetaNote" as text — always use the supplied logo asset.
- **Banned:** Inter, Roboto, Arial, Helvetica, Open Sans for body. No pure `#000` / `#fff` (tint neutrals toward the warm-navy).

---

## The signature move — keep it, elevate it

**Provenance pills.** Every captured item shows where its content came from, as a small DM-Mono uppercase pill: `VOICE`, `TYPED`, `AI` (slate-purple = candidate), `CONFIRMED` (green, subtly embossed = verified fact). This is the most distinctive thing in the product — no competitor surfaces per-field provenance. Beautify the craft of these pills (the emboss/"fact" treatment on confirmed especially), but keep them **quiet** (small, calm) — they must never read as worker surveillance.

---

## Hard constraints — beautify must PRESERVE all of these

- **Mobile, one-thumb.** 44px minimum tap targets. No hover-only interactions. Readable without zoom, in direct sunlight.
- **Accessibility floor:** WCAG 2.2 AA contrast on every text/background pair, in this light palette.
- **Event time ≠ log time.** The "When did this happen?" affordance stays first-class.
- **Draft-then-confirm.** Nothing is "saved" until the worker confirms; the capture screens say so.
- **Plain language, always.** "Behaviour" not "topography", "Before" not "antecedent", "Why" not "function". Do not make copy more clinical or more cheerful.
- **No surveillance / gamification.** No counts-as-scores, streaks, leaderboards, "you missed X". (We borrow visual warmth from journal apps, never their streak mechanics.)
- **Care-tone, not alarm-tone**, for worker-facing notices. Severity colour is reserved for genuine clinical severity only.

---

## What "beautify" SHOULD do

- Refine **spacing rhythm** and vertical hierarchy (vary spacing for rhythm; generous whitespace; the participant/event matters more than chrome).
- Add **depth with intent:** tinted (warm-navy) shadows instead of flat black; subtle raised-card treatment; restrained.
- Sharpen **typographic hierarchy** (scale + weight contrast) within the type system above.
- **Purposeful motion / micro-interactions** (ease-out curves, no bounce): button press, chip toggle, the provenance pill confirming, page transitions. Respect `prefers-reduced-motion`.
- Consistent, distinctive **iconography** (Phosphor/Heroicons family, ~1.5 stroke; the mic + provenance icons are bespoke). No emoji.
- Considered **empty states, edge states, and focus states**.
- Optional: a very subtle warm paper texture (opacity ≤ 0.04) — must not reduce legibility.

## What "beautify" must NOT do

- Change any reserved clinical signifier colour, or harmonise severity colours into the brand palette.
- Change the information architecture, the flow, or the copy's plain-language labels.
- Add decorative gradients, glassmorphism, gradient-text, or a second accent colour.
- Make it feel consumer-cheerful, wellness-pastel, or dark-dev-tool.
- Introduce banned fonts, pure black/white, or typeset the wordmark.

---

## The 12 screens (in flow order)

1. **01-signin** — sign in (brand lockup, email/password, peach Sign-in).
2. **02-accept-invite** — teammate enters an invite code to join a team-pool.
3. **03-onboarding** — "How ThetaNote works" (3 steps).
4. **04-add-to-home-screen** — PWA install walkthrough (iOS Safari steps).
5. **05-people** — participant switcher (who is this shift for) + add / invite.
6. **06-add-participant** — initials, disability-context chips, free-text, goals rows, medication rows.
7. **07-invite** — generate a team invite code to share.
8. **08-home** — shift home / feed: participant context, event cards with provenance pills, the raised peach "New note" capture button, bottom nav.
9. **09-capture** — capture a moment: voice-framing prompt, "when did this happen" time chips, optional tags, type/dictate/Speak composer.
10. **10-review-finalise** — end-of-shift: the assembled NDIS shift note in an editable area, copy-to-clipboard, AI-assisted marker.
11. **11-handover** — short 2:1 mid-shift handover note for the next worker.
12. **12-voice** — hands-free voice-conversation capture mode (orb + status).

---

## Practical notes

- Each file is **fully self-contained** (shared CSS inline; **DM Sans + DM Mono are base64-embedded as `@font-face`**, so the real typography renders with no internet/CDN — there is nothing to "substitute"). Pinned to one screen. Target width ~**390px** (mobile); they will stretch on desktop — design for the phone.
- **Fraunces** is needed ONLY for the logo, which is supplied as a vector SVG (`logo-lockup-light.svg`) — no Fraunces font file is required. Do not set UI text in Fraunces.
- All colour/spacing/type values live as CSS custom properties at the top of each file's `<style>` (`--surface-base`, `--ink`, `--peach`, etc.). Prefer editing those tokens + component CSS over hard-coding hexes.
- The brand assets (`logo-lockup-light.svg`, `logo-icon.svg`) are included alongside; reference them, don't recreate them.
- If you return code, keep the same structure + token names so it drops back into the app cleanly.
