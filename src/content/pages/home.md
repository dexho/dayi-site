---
# ---------------------------------------------------------------------------
# Landing page (/)
#
# Field reference: src/content.config.ts · Editing guide: CONTENT.md
# Every [PLACEHOLDER] below is meant to be replaced.
# Any text field accepts markdown: **bold**, *italic*, [links](/platform).
# ---------------------------------------------------------------------------

title: 'Dayi Therapeutics'
description: '[Search-engine description, roughly 155 characters: what the company does, for which diseases, at what stage.]'

hero:
  # badge: '[Preclinical stage]'
  title: 'Breakthrough therapies <br> with RNA science'
  subtitle: 'Selective, reversible, and personalized:<br>A new type of medicine to transform the lives of people with genetic disorders.'
  # Button near the bottom of the hero that scrolls down to the next section.
  scrollCue: 'Our platform'
  # Optional hero image. Drop a file in src/assets/images/ and uncomment:
  # image: { src: '~/assets/images/hero.jpg', alt: '[Describe the image]' }

  # Full-bleed illustration behind this section, sitting on its bottom edge.
  # Any wide landscape image works — roughly 3:1 reads best, and the exact
  # resolution doesn't matter. After swapping the file, match `--hero-sand`
  # in src/pages/index.astro to the new artwork's sky colour.
  backdrop: { src: '~/assets/images/AdobeStock_562963511 [Converted].png', alt: '' }

# Mission statement, centred in its own band right below the hero.
mission:
  tagline: 'Our mission'
  text: 'We develop therapies for genetic diseases that carry a lifelong burden and have no effective treatment options today.'

approach:
  # tagline: '[Our approach]'
  title: 'Cutting-edge Genomics & AI '
  content: 'Our AI-powered platform combines human genomics with computational modeling to discover and validate therapeutic targets that conventional approaches miss.'
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

