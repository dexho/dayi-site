---
# ---------------------------------------------------------------------------
# Team page (/team)
#
# To add a person: copy one `- name:` block and fill it in. Order in this file
# is the order on the page.
#
# Headshots: put square images in src/assets/images/team/ and reference them as
# `~/assets/images/team/filename.jpg`. A person without an image shows their
# initials in a circle instead, so the page looks right before photos arrive.
#
# Field reference: src/content.config.ts · Editing guide: CONTENT.md
# ---------------------------------------------------------------------------

title: Team
description: '[Search-engine description: who is behind the company, roughly 155 characters.]'

hero:
  title: '[The people building it]'
  subtitle: '[One or two sentences on the mix of expertise — the disciplines, where people came from, how the team works.]'

groups:
  - title: '[Leadership]'
    columns: 3
    members:
      - name: '[Full Name]'
        role: '[Chief Executive Officer]'
        bio: '[Two sentences: the relevant experience, and what they do here. Prior institutions and companies belong in the first sentence.]'
        # image: { src: '~/assets/images/team/full-name.jpg', alt: '[Full Name]' }
        links:
          - { icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/in/example', ariaLabel: '[Full Name] on LinkedIn' }
      - name: '[Full Name]'
        role: '[Chief Scientific Officer]'
        bio: '[Two sentences.]'
        links:
          - { icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/in/example', ariaLabel: '[Full Name] on LinkedIn' }
          - { icon: 'tabler:school', href: 'https://scholar.google.com/citations?user=example', ariaLabel: '[Full Name] on Google Scholar' }
      - name: '[Full Name]'
        role: '[Head of Platform]'
        bio: '[Two sentences.]'
        links: []

  - title: '[Scientific advisors]'
    subtitle: '[One line on the advisory board’s role.]'
    columns: 4
    members:
      - name: '[Full Name, PhD]'
        role: '[Affiliation or chair]'
        bio: '[One sentence on their field.]'
        links: []
      - name: '[Full Name, MD]'
        role: '[Affiliation]'
        bio: '[One sentence.]'
        links: []
      - name: '[Full Name, PhD]'
        role: '[Affiliation]'
        bio: '[One sentence.]'
        links: []
      - name: '[Full Name, PhD]'
        role: '[Affiliation]'
        bio: '[One sentence.]'
        links: []

cta:
  title: '[We are hiring]'
  subtitle: '[One line pointing scientists and engineers at the open roles.]'
  actions:
    - { text: See open roles, href: /careers, variant: primary }
---

[Optional intro prose, shown above the people. Useful for a paragraph on how
the team is organised, the advisory relationships, or the hiring philosophy.
Delete this paragraph to leave the section out.]
