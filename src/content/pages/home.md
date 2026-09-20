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
  title: 'Breakthrough therapies <br> with RNA science'
  subtitle: 'Selective, reversible, and personalized:<br>A new type of medicine to transform the lives of people with genetic disorders.<br><br>'
  actions:
    - { text: Our platform, href: /platform, variant: primary, icon: 'tabler:arrow-right' }
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
  # tagline: '[Our approach]'
  title: 'Cutting-edge Genomics & AI '
  content: '[A short paragraph setting up the checklist below. This is the place to say what problem the field has been stuck on and what the company does about it.]'
  items:
    - title: '[Step or principle]'
      description: '[What it means in practice.]'
    - title: '[Step or principle]'
      description: '[What it means in practice.]'
    - title: '[Step or principle]'
      description: '[What it means in practice.]'
  # Optional image beside the text:
  image: { src: '~/assets/images/stock-image.jpg', alt: 'Stock photo' }

cta:
  title: 'Interested in working together?'
  subtitle: 'Get in touch to explore partnership opportunities with us.'
  actions:
    - { text: Contact us, href: '/careers#contact', variant: primary }
---

[Optional closing prose. Anything written here appears above the final call to
action as ordinary text — good for a short note on the company's stage, its
funding, or a recent publication. Delete this paragraph to leave the section out.]
