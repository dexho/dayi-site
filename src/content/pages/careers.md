---
# ---------------------------------------------------------------------------
# Careers + contact page (/careers)
#
# To post a job: copy one `- title:` block under `openings.items` and fill it
# in. To take a job down: delete its block. With no openings left, the page
# shows `emptyMessage` instead of the list.
#
# The email address, phone number and postal address in the contact block come
# from src/content/site.md, so they only need editing in one place.
#
# Field reference: src/content.config.ts · Editing guide: CONTENT.md
# ---------------------------------------------------------------------------

title: Careers & contact
description: '[Search-engine description: who you are hiring and how to reach the company, roughly 155 characters.]'

hero:
  title: '[Come build it with us]'
  subtitle: '[Two sentences on the stage of the company, the size of the team, and what someone joining now would own.]'
  actions:
    - { text: See open roles, href: '#openings', variant: primary }
    - { text: Contact us, href: '#contact' }

benefits:
  tagline: '[Working here]'
  title: '[What we offer]'
  items:
    - title: '[Benefit or working condition]'
      description: '[One or two sentences. Specifics — equity, bench time, publication policy — beat adjectives.]'
      icon: 'tabler:flask-2'
    - title: '[Benefit or working condition]'
      description: '[One or two sentences.]'
      icon: 'tabler:users-group'
    - title: '[Benefit or working condition]'
      description: '[One or two sentences.]'
      icon: 'tabler:heart-handshake'
    - title: '[Benefit or working condition]'
      description: '[One or two sentences.]'
      icon: 'tabler:book'

openings:
  title: '[Open roles]'
  subtitle: '[One line — e.g. "Not seeing your role? Write to us anyway."]'
  emptyMessage: '[We have no open roles right now, but we always read speculative applications — tell us what you would want to work on.]'
  items:
    - title: '[Research Associate, [Discipline]]'
      location: '[City, State]'
      type: '[Full-time · On-site]'
      description: |
        [One paragraph on the role: the project it sits in, who it reports to,
        and what the first six months look like.]

        **What you would do**

        - [Responsibility]
        - [Responsibility]
        - [Responsibility]

        **What we are looking for**

        - [Requirement — degree, technique, years]
        - [Requirement]
        - [Nice to have]

    - title: '[Scientist, [Discipline]]'
      location: '[City, State]'
      type: '[Full-time · Hybrid]'
      # Applications for this role go somewhere else:
      # applyEmail: hiring-manager@example.com
      description: |
        [One paragraph on the role.]

        **What you would do**

        - [Responsibility]
        - [Responsibility]

        **What we are looking for**

        - [Requirement]
        - [Requirement]

contact:
  title: '[Get in touch]'
  subtitle: '[One line on what the company wants to hear about: collaborations, licensing, speculative applications, press.]'
---

[Optional prose, shown above the benefits. A good place for a short paragraph
on what the day-to-day is actually like — the size of the team, how decisions
get made, how much of the week is at the bench. Delete it to leave it out.]
