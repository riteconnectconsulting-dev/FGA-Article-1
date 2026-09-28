---
id: reference-env-vars-ping-message-is-server-only-read-in-api-ping-vite
type: reference
scope: project
title: Env vars: PING_MESSAGE is server-only (read in /api/ping); VITE_PUBLIC_BUILDER_KEY is client-exposed but unused; the project has no auth
triggers: ["env","variables","auth","autenticacion","secretos","secrets","builder"]
anchors: [{"path":"server/index.ts","symbol":"PING_MESSAGE"}]
asserted: 2026-09-28
invalidated: null
superseded_by: null
confidence: medium
pin: false
source: init
---
Verified: .env holds VITE_PUBLIC_BUILDER_KEY (client-exposed Vite prefix) and PING_MESSAGE (server only, read in server/index.ts /api/ping). vite.config.ts dev server denies serving .env and server/**. Neither is used elsewhere in client code. No auth exists in this project.
