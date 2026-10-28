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

# hero:
#   title: '[The people building it]'
#   subtitle: '[One or two sentences on the mix of expertise — the disciplines, where people came from, how the team works.]'

groups:
  - title: 'Leadership'
    columns: 4
    members:
      - name: 'Zuo Zhang'
        # role: 'VP & Head of Biology'
        # bio: '[Two sentences: the relevant experience, and what they do here. Prior institutions and companies belong in the first sentence.]'
        # image: { src: '~/assets/images/team/full-name.jpg', alt: '[Full Name]' }
        links:
          - { icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/in/example', ariaLabel: '[Full Name] on LinkedIn' }
      - name: 'Francesco Lotti'
        # role: 'CSO & Head of Biology'
        # bio: '[Two sentences.]'
        links:
          - { icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/in/example', ariaLabel: '[Full Name] on LinkedIn' }
          - { icon: 'tabler:school', href: 'https://scholar.google.com/citations?user=example', ariaLabel: '[Full Name] on Google Scholar' }
      - name: 'Chaolin Zhang'
        role: 'Scientific advisor'
        # bio: '[One sentence on their field.]'
        links: []
      - name: 'Wendy Chung'
        role: 'Scientific advisor'
        # bio: '[One sentence.]'
        links: []

---
