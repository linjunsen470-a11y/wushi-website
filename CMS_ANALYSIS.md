# CMS Platform Analysis for Mainland China

## Recommendation

For this `Next.js 16` project, if the CMS needs to work well in mainland China and should be easy to use with visual editing, the recommended order is:

1. `Strapi 5` self-hosted
2. `Payload CMS` self-hosted
3. `Directus` self-hosted

The main reason is operational practicality in mainland China. Self-hosted CMS platforms are generally a better fit for domestic deployment because network access, response speed, login stability, and compliance control are easier to manage than with overseas SaaS-first platforms.

## Best Fit: Strapi 5

`Strapi 5` is the best default choice if the goal is to launch efficiently and keep the editing experience friendly for non-technical users.

Why it fits:

- It is open source and can be self-hosted on mainland cloud infrastructure.
- It has an official preview workflow.
- It now offers `Live Preview` for in-context editing.
- Its admin panel is relatively approachable for content editors.
- The ecosystem and adoption are mature enough for common website content scenarios.

Tradeoffs:

- Advanced visual editing is not as deep as Sanity's presentation model.
- Some higher-end preview features are tied to commercial plans.
- Complex block-based page builders are possible, but usually need more schema design effort.

Official references:

- [Strapi Live Preview](https://strapi.io/features/live-preview)
- [Introducing Live Preview, Client Library and a smoother content editing experience](https://strapi.io/blog/introducing-live-preview-client-library)
- [Strapi Docs](https://docs.strapi.io/)

## Strong Developer-Oriented Option: Payload CMS

`Payload CMS` is the strongest alternative if developer experience and Next.js integration matter more than editor familiarity.

Why it fits:

- It is open source and self-hostable.
- It supports `Live Preview`.
- It works very naturally with modern Next.js projects.
- Content models are code-defined, which gives strong control and versioning.
- It is well suited to teams that want frontend and CMS behavior closely integrated.

Tradeoffs:

- It is usually more developer-centric than Strapi.
- Non-technical editors may need more onboarding.
- Initial architecture decisions matter more because it gives you more flexibility.

Official references:

- [Payload Live Preview](https://payloadcms.com/docs/live-preview)
- [What is Payload](https://payloadcms.com/docs/getting-started/what-is-payload)
- [Payload Deployment](https://payloadcms.com/docs/production/deployment)

## Acceptable but Not First Choice: Directus

`Directus` is also viable and supports live preview plus self-hosting, but for this project it is not the first recommendation.

Why it may work:

- It is self-hostable.
- It supports preview workflows.
- It is good when content management overlaps heavily with structured operational data.

Why it ranks lower here:

- It often feels more like a data platform than a website-first editorial platform.
- For a marketing or brand website, the editing model is usually less direct than Strapi.
- For a Next.js content site, it is less often the simplest path to a clean editor workflow.

Official references:

- [Directus Live Preview with Next.js](https://docs.directus.io/guides/headless-cms/live-preview/nextjs)
- [Directus Self-Hosted Quickstart](https://docs.directus.io/self-hosted/quickstart)
- [Directus Pricing - Self-Hosted](https://directus.io/pricing/self-hosted)

## Why Sanity and Contentful Are Not the First Recommendation

`Sanity` and `Contentful` both have strong visual editing capabilities. If the only criterion were editing power, they would be serious candidates.

However, for mainland China they are not the best default recommendation because they are more dependent on overseas SaaS infrastructure.

### Sanity

Strengths:

- Excellent visual editing and presentation tooling
- Very strong content modeling
- High-quality developer experience

Main concern for this project:

- The platform depends on Sanity-hosted services such as the Content Lake and related APIs.
- Official system requirements indicate network access to Sanity domains is required.

Official references:

- [Sanity Visual Editing Overview](https://www.sanity.io/docs/visual-editing-reference-overview)
- [Sanity Studio Deployment](https://www.sanity.io/docs/studio/deployment)
- [Sanity Studio System Requirements](https://www.sanity.io/docs/studio/system-requirements)

### Contentful

Strengths:

- Mature enterprise CMS
- Good editorial workflows
- Live preview capabilities

Main concern for this project:

- It is strongly SaaS-oriented.
- Official data residency materials emphasize US and EU regional models rather than mainland China deployment.

Official references:

- [Contentful Live Preview](https://www.contentful.com/help/live-preview/)
- [Contentful EU Data Residency FAQ](https://www.contentful.com/faq/eu-data-residency/)

## Practical Recommendation for This Project

Choose `Strapi 5 self-hosted` if the priority is:

- easier editor onboarding
- smoother mainland China deployment
- good enough visual preview
- faster delivery with lower operational risk

Choose `Payload CMS` if the priority is:

- tighter integration with `Next.js`
- developer-controlled content modeling
- long-term flexibility
- willingness to accept a slightly heavier initial implementation

## Final Recommendation

For this specific project, the best overall choice is:

`Strapi 5 self-hosted`

It is the best balance of:

- mainland China deployment practicality
- ease of use
- visual editing capability
- team adoption risk

If later the project evolves toward a more code-centric, composable, deeply customized content architecture, `Payload CMS` would be the strongest upgrade path.
