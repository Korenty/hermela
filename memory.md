# memory.md

## Client Identity
- Name: Hermela Ashenafi Assefa
- Age: 23
- Roles: Computer Science graduate, project manager, model, digital creator
- Pageantry: Miss Ethiopia 2026 (4th runner-up), Miss Tourism Ethiopia (Aug 2026), representing Ethiopia at Miss Tourism Africa in Nigeria (Sep 2026)

## Core Archetype
- Primary Archetype: Intellectual Alchemist
- Narrative Tension: technical precision + fluid high-fashion elegance
- Psychological direction: Humanistic Visionary + Strategic Innovation

## Emotional Intent
- First 3-second shift: Intrigue & Depth with Inspiration & Vitality
- Story mode: slow-burn, layered, cinematic, deliberate, purposeful

## Copywriting Source Constraints
- Use direct language themes from survey:
  - "empower others, challenge perspectives, and create meaningful change"
  - beauty is not a fixed standard
  - technology should reflect human values and real human needs
  - fascination with philosophy, psychology, neuroscience, neuroplasticity
  - communication as healing, connection, empowerment
- Referenced influence figures for philosophy page continuity:
  - Maya Angelou
  - Cleopatra
  - Carl Jung

## Visual System (v1)
- Base palette:
  - Obsidian: #0B0B0B
  - Graphite: #1A1A1A
  - Mineral Slate: #23252B
  - Optical White: #F5F5F4
  - Alabaster: #EDEAE3
  - Accent Gold: #BFA46F
- Tone strategy:
  - High-shadow cinematic base with controlled white/alabaster typography highlights
  - Editorial contrast with restrained metallic accent

## Typography (v1)
- Display / Wordmark: Fraunces (variable serif)
- Sans UI / body: Inter (variable sans)
- Kerning and tracking:
  - Display: tracking-[0.04em] to tracking-[0.08em]
  - Nav/meta labels: tracking-[0.16em] uppercase

## Motion System (v1)
- Libraries:
  - Lenis for momentum scrolling
  - GSAP + ScrollTrigger for interaction choreography
- Easing presets:
  - power3.out
  - expo.out
- Effects required across ecosystem:
  - film grain SVG turbulence overlay (4-6% opacity)
  - depth parallax planes (3 layers)
  - split-text reveal stagger (0.03s/char)
  - magnetic buttons
  - scroll velocity skew on media
  - pinned horizontal gallery (for gallery/pageantry pages)
  - odometer counters (pageantry stats)
- Accessibility:
  - strict prefers-reduced-motion support with no-animation fallback per effect

## Structural Architecture for Next.js Migration
- Component boundaries in HTML via semantic sections + IDs + comments
- No inline event handlers
- State and behavior flags via data-* attributes
- Shared JS architecture should map cleanly to future hooks/components

## Asset Policy
- Current phase: curated Unsplash placeholders (editorial portraiture, architecture, conceptual dark aesthetics)
- Future swap: config-driven replacement via /assets or external URLs
