---
# ---------------------------------------------------------------------------
# Navigation, footer and contact details.
#
# These appear on every page. Field reference: src/content.config.ts
# Editing guide: CONTENT.md
#
# Everything marked [PLACEHOLDER] or pointing at example.com needs replacing.
# ---------------------------------------------------------------------------

nav:
  links:
    - { text: Platform, href: /platform }
    - { text: Team, href: /team }
    - { text: Careers, href: /careers }
  # Header buttons. Add e.g. { text: Contact us, href: '/careers#contact', variant: primary }
  actions: []

footer:
  columns:
    - title: Company
      links:
        - { text: Platform, href: /platform }
        - { text: Team, href: /team }
        - { text: Careers, href: /careers }
    - title: Contact
      links:
        - { text: general@example.com, href: 'mailto:general@example.com' }
        - { text: careers@example.com, href: 'mailto:careers@example.com' }
  # Small print links (privacy policy, terms). Empty until those pages exist.
  secondaryLinks: []
  socials:
    - { icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/company/example', ariaLabel: LinkedIn }
    - { icon: 'tabler:brand-x', href: 'https://x.com/example', ariaLabel: X }
  note: '© 2026 Dayi Therapeutics. All rights reserved.'

# Used by the contact block on the careers page and by every "email us" button.
contact:
  email: general@example.com
  jobsEmail: careers@example.com
  phone: '[+1 (555) 000-0000]'
  address: |
    [Building / Suite]
    [Street address]
    [City, State ZIP]
---
