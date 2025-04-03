// @ts-check
import { defineConfig } from 'astro/config';

import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  integrations: [svelte()],
  site: 'https://andrew-yates.github.io/nutrition-website/dist',
  base: '/nutrition-website/dist',
});