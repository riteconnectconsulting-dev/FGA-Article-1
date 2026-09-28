---
id: convention-tailwind-is-v4-postcss-plugin-but-still-configured-via
type: convention
scope: project
title: Tailwind is v4 (postcss plugin) but still configured via tailwind.config.ts loaded with @config in client/global.css; AGENTS.md saying v3 is stale
triggers: ["tailwind","estilos","theme","tema","tailwind config","colores","colors"]
anchors: [{"path":"client/global.css","symbol":"@config"}]
asserted: 2026-09-28
invalidated: null
superseded_by: null
confidence: medium
pin: false
source: init
---
Verified: client/global.css uses @import "tailwindcss" (v4) and postcss.config.js uses @tailwindcss/postcss; package.json has tailwindcss ^4.3.3. Theme/content/plugins still live in tailwind.config.ts, loaded through @config "../tailwind.config.ts" in global.css. AGENTS.md's 'TailwindCSS 3' is stale.
