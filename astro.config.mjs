// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [
    tailwind(),           // ← this wires Tailwind (and PostCSS) into Astro
  ],
});
