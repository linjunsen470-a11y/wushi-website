# Design System Document: The Kinetic Tradition

## 1. Overview & Creative North Star: "The Kinetic Pulse"
The Creative North Star for this design system is **"The Kinetic Pulse."** 

Unlike traditional Lion Dance branding that often feels stuck in a static, archival past or leans into "lucky red" wedding tropes, this system captures the raw, percussive energy of a live performance through a high-end editorial lens. We are moving away from the "template" look by utilizing intentional asymmetry, expansive negative space, and a tension between heavy, calligraphic anchors and hyper-modern typography. 

The experience should feel like a premium fashion editorial—authoritative, rhythmic, and visceral. We break the grid to mimic the "awakening" of the lion: sudden, sharp movements grounded by deep-rooted stability.

## 2. Colors: Tonal Depth & The Imperial Palette
Our palette moves beyond flat color. We use Material Design logic to create a layered, "ink on silk" depth.

### Core Roles
*   **Primary (`#8f000d` / `primary`):** Not a bright firecracker red, but a "Deep Imperial Red." Use this for focal points and primary actions.
*   **Secondary (`#735c00` / `secondary`):** "Champagne Gold." Use this for sophisticated accents and high-level highlights.
*   **Surface Hierarchy (`surface-container-lowest` to `highest`):** Our "Warm White" (`#FDF5E6`) isn't a flat background; it is a living canvas.

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders to define sections. Boundaries must be defined through background color shifts. For example, a `surface-container-low` section should sit directly on a `surface` background. The transition of tone creates the "edge."

### Surface Nesting
Treat the UI as physical layers. An informational card should be `surface-container-lowest` placed upon a `surface-container-low` background. This creates a soft, "stacked paper" effect that feels premium and intentional.

### Signature Textures: The "Ink & Silk" Gradient
To move beyond "out-of-the-box" UI, use a subtle radial gradient for hero sections: `primary` (#8f000d) transitioning into `primary-container` (#b22222) at the edges. This mimics the natural variation of dyed silk.

## 3. Typography: The Editorial Tension
The typography system relies on the contrast between the technical precision of **Epilogue** and the rhythmic flow of **Manrope**.

*   **Display (`display-lg`, `display-md`):** Uses **Epilogue**. These are your "shouting" moments. Pair these with absolute-positioned Chinese calligraphy characters (acting as watermarks or background textures) to create a high-contrast, modern-meets-ancient aesthetic.
*   **Headlines (`headline-lg` to `sm`):** Bold, tight tracking. These should feel like the beat of a drum—percussive and unavoidable.
*   **Body & Titles (`body-lg`, `title-md`):** Uses **Manrope**. This provides the "trustworthy" and "professional" counterweight to the high-energy displays. 

**Calligraphy Usage Note:** Calligraphy is never "content"; it is "texture." Use it behind text or partially cropped off-screen to imply energy that cannot be contained by the browser window.

## 4. Elevation & Depth: Tonal Layering
We avoid the "cheap" look of heavy drop shadows. Depth is an atmosphere, not a decoration.

*   **The Layering Principle:** Stack `surface-container` tiers to create lift. A `surface-container-highest` element on a `surface-dim` background creates a natural, soft highlight.
*   **Ambient Shadows:** If a floating element (like a Booking FAB) is required, use a shadow with a 24px blur, 4% opacity, using the `on-surface` color. It should feel like a soft glow of light, not a shadow.
*   **Glassmorphism & Depth:** For navigation bars or mobile overlays, use `surface` at 80% opacity with a `backdrop-filter: blur(20px)`. This "frosted glass" effect allows the vibrant reds of the Lion costumes to bleed through, keeping the energy present even when menus are open.
*   **Ghost Borders:** If a boundary is legally or functionally required, use `outline-variant` at 15% opacity. Never use 100% opaque lines.

## 5. Components

### Buttons: The Percussive Action
*   **Primary:** `primary` background with `on-primary` text. No border. Use `md` (0.375rem) roundedness to keep it feeling architectural.
*   **Secondary:** `secondary` background with `on-secondary` text. Use for "Inquiry" or "Gallery" actions.
*   **The "Energy" State:** On hover, primary buttons should scale 2% and transition to `primary-container` to mimic a "ready to pounce" tension.

### Cards: The Gallery Layout
*   **Rule:** Forbid divider lines.
*   **Styling:** Use `surface-container-low` with generous padding (Spacing Scale 24px+). 
*   **Imagery:** Photos should be "Full Bleed" on at least one side, breaking the container to create an asymmetrical, editorial feel.

### Input Fields: Sophisticated Inquiry
*   **Style:** Minimalist. Only a bottom-weighted "Ghost Border" (`outline-variant` at 20%). On focus, the label should shift to `secondary` (Gold).

### Signature Component: The "Rhythm Scroll"
Use a horizontal marquee of `display-sm` typography mixed with calligraphic glyphs that moves slowly in the background of "Professional Performance" sections to maintain high-energy "Live Event" vibes without cluttering the UI.

## 6. Do’s and Don’ts

### Do:
*   **Do** use extreme white space. A high-end brand "breathes."
*   **Do** overlap elements. Let a photo of a Lion's head overlap a headline to create 3D depth.
*   **Do** use "Warm White" (`#FDF5E6`) as your primary canvas to avoid the clinical "museum" feel of pure white.

### Don’t:
*   **Don't** use standard red/yellow color pairings (this looks like a fast-food menu or a cheap wedding). Stick to Red/Gold/Ink Black.
*   **Don't** use 1px borders or grid lines. They kill the fluid energy of the "Lion Awakening."
*   **Don't** center-align everything. Use strong left-aligned typography contrasted with right-aligned imagery to create a sophisticated, asymmetrical balance.