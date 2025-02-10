// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://commerceweavers.github.io',
  base: '/CommerceDev25Website',
  vite: {
    plugins: [tailwindcss()],
  },
});
