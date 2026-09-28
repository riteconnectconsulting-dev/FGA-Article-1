---
id: reference-express-app-is-created-once-in-server-index-ts-createserver
type: reference
scope: project
title: Express app is created once in server/index.ts createServer() and reused by Vite dev plugin, Netlify function and node-build; only /api/ping and /api/demo exist and no client code calls them
triggers: ["api","servidor","server","endpoint","netlify","ruta","route"]
anchors: [{"path":"server/index.ts","symbol":"createServer"}]
asserted: 2026-09-28
invalidated: null
superseded_by: null
confidence: medium
pin: false
source: init
---
Verified: server/index.ts createServer() is the single Express app; it is mounted into the Vite dev server (expressPlugin in vite.config.ts, dev only, port 8080) and wrapped by serverless-http in netlify/functions/api.ts. netlify.toml builds only the client (npm run build:client), publishes dist/spa, and redirects /api/* to /.netlify/functions/api/:splat. New routes are registered in createServer() and work in all three. Only /api/ping and /api/demo exist, and the client never calls them.
