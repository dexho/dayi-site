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
  title: 'RNA Regulatory Biology <br> for Precision Medicine'
  subtitle: "Selective, reversible, and personalized:<br>A new story for genetic disorders."
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

# Headline above the mission and platform statements.
headline: 'Target Endogenous Gene Expression and Transform RNA Regulatory Biology into Medicines'

# Mission and platform statements, right below the hero, under a grid of
# circles. One per screen as you scroll. **Bold** marks the key words;
# <br> starts a new line.
mission:
  tagline: 'Our Mission'
  text: 'Many disorders are caused by **insufficient gene expression**, yet the therapeutic landscape of **RNA regulation** remains **underexplored**.<br><br>We aim to bring RNA regulatory biology into a **scalable engine** for **drug discovery** to deliver **safer**, more **precise**, and broadly applicable treatments for **unmet medical needs**.'

# Shown under the mission. The button sits centred below the text and fades in last.
platform:
  tagline: 'Our Science'
  text: 'We are developing medicines that **increase endogenous gene expression**: turning up a **patient’s own genes** to restore what the body is lacking, <i>without</i> the need for gene editing. <br><br>Our **AI&#8209;driven platform** systematically identifies **RNA processing mechanisms** that control gene expression, and targets them with **clinically validated** therapeutic modalities.'
  action: { text: Learn more, href: /platform }

# Third section of the scroll story, with an envelope graphic: `title`
# is the small heading, `subtitle` the text below it, `actions` the button.
cta:
  title: "Work with us"
  subtitle: "Rooted at **Columbia University** and led by **experts in RNA biology**, Dayi is redefining what is treatable."
  actions:
    - { text: Get in touch, href: /contact }
---

