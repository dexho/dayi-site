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
  subtitle: 'Selective, reversible, and personalized:<br>A new story for genetic disorders.'
  # Wavy arrow near the bottom of the hero scrolls down to the next section;
  # this is its label for screen readers.
  scrollCue: 'Our platform'
  # Optional hero image. Drop a file in src/assets/images/ and uncomment:
  # image: { src: '~/assets/images/hero.jpg', alt: '[Describe the image]' }

  # Full-bleed illustration behind this section, sitting on its bottom edge.
  # Any wide landscape image works — roughly 3:1 reads best, and the exact
  # resolution doesn't matter. After swapping the file, match `--hero-sand`
  # in src/pages/index.astro to the new artwork's sky colour.
  backdrop: { src: '~/assets/images/AdobeStock_562963511 [Converted].png', alt: '' }

# Mission and platform statements, right below the hero, beside a grid of
# circles. They fade in one after the other.
mission:
  tagline: 'Mission'
  text: 'We develop therapies for genetic diseases which carry a lifelong burden and have no effective treatment options today.'

# Shown under the mission. The button sits centred below the text and fades in last.
platform:
  tagline: 'Platform'
  text: 'Cutting-edge genomics + AI modeling reveals therapeutic targets that past approaches have missed.'
  action: { text: Learn more, href: /platform }

cta:
  title: "Let's work together"
  subtitle: 'Get in touch to explore partnership opportunities with us.'
  actions:
    - { text: Contact us, href: '/contact', variant: primary }
---

