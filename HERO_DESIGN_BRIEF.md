# RIAL ELECTRÓNICA — Navigation & Hero Art Direction Brief

> **Status:** Design exploration brief, not an approved final layout. This is an independent, unofficial redesign concept. Do not imply endorsement or authorization by Rial Electrónica.

## Role and objective

Act as a senior digital art director and e-commerce product designer. Create an exceptional **navigation bar and above-the-fold hero** for a premium Argentine consumer-electronics storefront. The result must be distinctive, editorial, commercially credible, accessible, and implementable—not a generic AI-generated landing page.

**Primary business outcome:** initiate a customer conversation through WhatsApp, **not** complete an online checkout. Consult [USER_FLOWS.md](./USER_FLOWS.md) for the canonical user journeys.

## Authority and constraints

1. Respect [DESIGN.md](./DESIGN.md) for brand direction, tokens, typography, layout and component rules.
2. Respect [AGENTS.md](./AGENTS.md) for agent behavior, technical standards and validation.
3. Respect [USER_FLOWS.md](./USER_FLOWS.md) for WhatsApp conversion behavior.
4. UI UX Pro Max may inform UX patterns before implementation; Impeccable may help critique and refine afterward. Neither may override the design system.
5. Do **not** invent prices, discounts, stock, warranties, shipping promises, customer reviews, USDT exchange rates, or company endorsements.
6. Use authentic, licensed or explicitly approved product photography and logo assets for publication. Concept imagery must be identified as such.

## Visual thesis: Editorial Tech Commerce

Think Swiss editorial typography, premium consumer-electronics campaign photography, architectural composition, deliberate asymmetry, rigorous alignment, restrained color, and purposeful negative space.

Aim for a design that feels art-directed rather than assembled from reusable templates. Create visual impact through **composition, scale, cropping, material realism and typographic rhythm**, not decorative effects.

## Navigation

- Desktop reference canvas: **1440 px**, header height approximately **80 px**; mobile reference width **390 px**.
- Left: Rial Electrónica brand mark (approved/authorized asset only).
- Navigation: **Catálogo**, **Cómo comprar**, **Envíos**, **Contacto**.
- Product search, consultation-list icon/count, light/dark/system theme control, and a refined WhatsApp action.
- Use spacing, subtle rules, typographic weight and placement for hierarchy. Avoid heavy shadows and floating SaaS-style containers.
- Account for intermediate desktop widths, mobile menu behavior, keyboard navigation, visible focus, and accessible tap targets.
- WhatsApp should be prominent without turning every CTA bright green.

## Hero composition

- Build a **single memorable visual idea**, not a collage of trendy effects.
- Feature **one** compelling technology product with believable lighting, materials, shadow and scale.
- Consider oversized typography with deliberate photographic cropping, an asymmetric image that crosses the grid, or a strong print-advertising-style composition.
- Keep the text legible, the product recognizable, and the first action obvious.
- **Do not** default to a standard left headline + right floating gadget layout.
- **No automatic hero carousel.**
- Avoid decorative UI labels and technical annotations unless they convey real, useful information.

### Suggested Spanish copy (editable, not approved brand copy)

**Headline:** La tecnología que buscás. Más cerca.

**Support:** Explorá nuestro catálogo y consultanos directamente por WhatsApp.

**Primary CTA:** Consultar por WhatsApp.

**Secondary CTA:** Explorar catálogo.

The CTA opens a prefilled WhatsApp conversation for the customer to review and send. The phone number supplied for this demo is **11 3156-8131**, normalized as **5491131568131** for `wa.me`. Verify that this is an authorized business contact **before public launch**. Keep the number in centralized configuration rather than hard-coding it in components.

## Required visual system

**Typography:** Geist Sans. Expressiveness comes from size, weight, spacing and alignment, not arbitrary font mixing.

**Dark:** background `#0B0F14`, surface `#151B23`, primary text `#F5F7FA`, secondary text `#A7B2C0`, blue accent `#1684F8`.

**Light:** background `#F7F8FA`, primary text `#131B26`, secondary text `#586575`, blue accent `#086CD9`.

Use the complete semantic token definitions from DESIGN.md. Do not generate a replacement palette.

## Responsive compositions to design

1. Desktop, 1440 px, dark.
2. Desktop, 1440 px, light.
3. Mobile, 390 px, dark.
4. Mobile, 390 px, light.

**Recompose** for mobile; do not simply scale the desktop screenshot. Preserve headline hierarchy, focal product, CTA clarity, navigation usability and natural text wrapping. Check intermediate breakpoints before implementation.

## Strict anti-patterns

Do not use:
- Purple/pink/blue decorative gradient backdrops or glowing orbs.
- Floating glass cards, ornamental bento grids, fake dashboards or random widgets.
- Generic “NEXT GENERATION” badges, invented social proof or fabricated metrics.
- Excessive rounded corners, icon-in-a-square decorations, dotted textures or gratuitous animation.
- Multiple competing CTA colors or cluttered product montages.
- Unlicensed generic stock imagery presented as actual inventory.
- Standard AI SaaS hero templates or an auto-rotating carousel.

Remove any element that does not improve brand recognition, hierarchy, usability or the WhatsApp conversion goal.

## Deliverables and workflow

**Phase A — Design exploration (no code):**
1. Present **three genuinely distinct art-direction concepts** with a short name, compositional idea, reason for differentiation and conversion rationale.
2. Recommend the strongest concept, explicitly identifying trade-offs.
3. Produce high-fidelity desktop/mobile, light/dark compositions for the selected concept.
4. Explain key decisions, accessibility considerations, responsive behavior and any assets requiring licensing or approval.
5. Ask for visual approval before treating the concept as final.

**Phase B — Implementation (only after approval):**
1. Initialize or use the agreed Next.js / TypeScript / Tailwind foundation.
2. Implement semantic tokens and the approved header + hero.
3. Verify mobile, intermediate and desktop layouts; keyboard and focus states; contrast and reduced motion.
4. Run a visual critique/refinement pass using available skills, without silently changing the approved direction.
5. Distinguish actual tests from recommendations or unexecuted checks.

**Quality bar:** a memorable, realistic technology storefront where a visitor immediately understands the brand, can browse products, and can contact the business via WhatsApp. **Art direction without conversion friction.**
