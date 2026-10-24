// @ts-check
import { defineConfig } from "astro/config";

// facedown.io: a static site (landing page + privacy policy). No CSS framework, only src/styles/global.css.
export default defineConfig({
	site: "https://facedown.io",
	build: { format: "directory" },
});
