---
# ---------------------------------------------------------------------------
# Landing page (/)
#
# Field reference: src/content.config.ts · Editing guide: CONTENT.md
# Every [PLACEHOLDER] below is meant to be replaced.
# Any text field accepts markdown: **bold**, *italic*, [links](/platform).
# ---------------------------------------------------------------------------

title: '[Company Name] — [one-line positioning, e.g. "Programmable medicines for hard-to-treat disease"]'
description: '[Search-engine description, roughly 155 characters: what the company does, for which diseases, at what stage.]'

hero:
  # badge: '[Preclinical stage]'
  title: 'Transforming RNA Science into Breakthrough Therapies'
  subtitle: '[Two sentences of support. What the platform does, what it makes possible, and who it is for. Avoid jargon a non-specialist could not follow.]'
  actions:
    - { text: Explore the platform, href: /platform, variant: primary, icon: 'tabler:arrow-right' }
    - { text: Get in touch, href: '/careers#contact' }
  # Optional hero image. Drop a file in src/assets/images/ and uncomment:
  # image: { src: '~/assets/images/hero.jpg', alt: '[Describe the image]' }

highlights:
  tagline: '[Why it matters]'
  title: '[The three things that make this different]'
  items:
    - title: '[First differentiator]'
      description: '[One or two sentences. Concrete beats sweeping — a modality, a target class, a measured result.]'
      icon: 'tabler:dna-2'
    - title: '[Second differentiator]'
      description: '[One or two sentences.]'
      icon: 'tabler:microscope'
    - title: '[Third differentiator]'
      description: '[One or two sentences.]'
      icon: 'tabler:chart-dots'

approach:
  tagline: '[Our approach]'
  title: '[How the science works, in plain language]'
  content: '[A short paragraph setting up the checklist below. This is the place to say what problem the field has been stuck on and what the company does about it.]'
  items:
    - title: '[Step or principle]'
      description: '[What it means in practice.]'
    - title: '[Step or principle]'
      description: '[What it means in practice.]'
    - title: '[Step or principle]'
      description: '[What it means in practice.]'
  # Optional image beside the text:
  # image: { src: '~/assets/images/lab.jpg', alt: '[Describe the image]' }

# Numbers strip. Delete this whole `stats:` block to remove the section.
stats:
  items:
    - { amount: '[N]', title: '[Programs in development]' }
    - { amount: '[N]', title: '[Peer-reviewed papers]' }
    - { amount: '[$N M]', title: '[Raised to date]' }
    - { amount: '[N]', title: '[Team members]' }

cta:
  title: '[Closing invitation — e.g. "Interested in working together?"]'
  subtitle: '[One line on who should reach out: partners, investors, scientists.]'
  actions:
    - { text: Contact us, href: '/careers#contact', variant: primary }
---

[Optional closing prose. Anything written here appears above the final call to
action as ordinary text — good for a short note on the company's stage, its
funding, or a recent publication. Delete this paragraph to leave the section out.]
