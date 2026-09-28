---
id: gotcha-server-node-build-ts-uses-app-get-which-is-invalid-in
type: gotcha
scope: project
title: Express 5 rejects bare "*" routes; SPA fallback in server/node-build.ts must use "/{*splat}" (fixed and verified 2026-09-28)
triggers: ["pnpm start","produccion","production","wildcard","express5","spa fallback"]
anchors: [{"path":"server/node-build.ts","symbol":"app.get"}]
asserted: 2026-09-28
invalidated: null
superseded_by: null
confidence: high
pin: false
source: init
---
Verified at runtime: app.get("*") crashed pnpm start with a path-to-regexp PathError under Express ^5.2.1. Changed to app.get("/{*splat}"); after rebuild, /, /foo/bar and /api/ping return 200 and /api/nope returns 404. Use the named-wildcard syntax for any catch-all route.
