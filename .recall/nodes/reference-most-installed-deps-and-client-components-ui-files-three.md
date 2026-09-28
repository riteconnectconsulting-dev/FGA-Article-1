---
id: reference-most-installed-deps-and-client-components-ui-files-three
type: reference
scope: project
title: Most installed deps and client/components/ui files (three, recharts, react-query usage, etc.) are unused starter scaffolding; the real site only imports a few UI primitives
triggers: ["dependencias","dependencies","unused","no usado","three","ui components","strict"]
anchors: [{"path":"client/pages/Index.tsx"}]
asserted: 2026-09-28
invalidated: null
superseded_by: null
confidence: medium
pin: false
source: init
---
Verified: all deps except dotenv/express/zod sit in devDependencies (including react, vite, cors, serverless-http). Most of client/components/ui (49 files) and libs like three, @react-three/*, recharts are unused by the site code (only button, toaster, sonner, tooltip are imported by App/Header/Index/Footer; no fetch or react-query use beyond the provider in App.tsx). Do not assume features exist because a dependency is installed. Also tsconfig has strict off.
