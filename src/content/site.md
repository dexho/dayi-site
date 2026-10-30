---
# ---------------------------------------------------------------------------
# Navigation, footer and contact details.
#
# These appear on every page. Field reference: src/content.config.ts
# Editing guide: CONTENT.md
# ---------------------------------------------------------------------------

nav:
  links:
    - { text: Platform, href: /platform }
    - { text: Team, href: /team }
    - { text: Contact, href: /contact }
  # Header buttons. Add e.g. { text: Contact us, href: '/contact', variant: primary }
  actions: []

footer:
  columns:
    - title: Company
      links:
        - { text: Platform, href: /platform }
        - { text: Team, href: /team }
        - { text: Contact, href: /contact }
        - { text: Privacy, href: /privacy }
    - title: Contact
      links:
        - { text: info@dayitx.com, href: 'mailto:info@dayitx.com' }
  # Small print links next to the company name (terms etc.).
  secondaryLinks: []
  socials:
    - { icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/company/dayitx', ariaLabel: LinkedIn }
    - { icon: 'tabler:brand-x', href: 'https://x.com/dayitx', ariaLabel: X }
  note: '© 2026 Dayi Therapeutics. All rights reserved.'

# Used by the contact page and by every "email us" button.
contact:
  email: info@dayitx.com
---
