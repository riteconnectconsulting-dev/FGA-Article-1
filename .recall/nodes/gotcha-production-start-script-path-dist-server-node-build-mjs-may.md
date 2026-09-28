---
id: gotcha-production-start-script-path-dist-server-node-build-mjs-may
type: gotcha
scope: project
title: Production start script path dist/server/node-build.mjs matches the build output (verified 2026-09-28)
triggers: ["build","build:server","start","despliegue","deploy"]
anchors: [{"path":"vite.config.server.ts","symbol":"entryFileNames"}]
asserted: 2026-09-28
invalidated: null
superseded_by: null
confidence: high
pin: false
source: init
---
Verified: pnpm build emits dist/server/node-build.mjs, so package.json start works. The build script uses npm run internally, not pnpm; harmless.
