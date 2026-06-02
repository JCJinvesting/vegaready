// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
	site: "https://vegaready.com",
	integrations: [
		react(),
		mdx(),
		sitemap(),
	],
	adapter: cloudflare({
		// v13: keep build-time image handling (previous default) so no Cloudflare Images
		// binding is required. The v13 default changed to 'cloudflare-binding'.
		imageService: "compile",
	}),
});
