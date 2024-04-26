import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import node from "@astrojs/node";

import simpleStackStream from "simple-stack-stream";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
  outDir: "./dist",
  integrations: [react(), simpleStackStream()],
});
