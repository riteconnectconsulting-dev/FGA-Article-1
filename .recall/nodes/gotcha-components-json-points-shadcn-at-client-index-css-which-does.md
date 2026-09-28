---
id: gotcha-components-json-points-shadcn-at-client-index-css-which-does
type: gotcha
scope: project
title: components.json points shadcn at client/index.css which does not exist; the real stylesheet is client/global.css
triggers: ["shadcn","components.json","agregar componente","add component","css"]
anchors: [{"path":"components.json","symbol":"tailwind"}]
asserted: 2026-09-28
invalidated: null
superseded_by: null
confidence: medium
pin: false
source: init
---
Verified: components.json has tailwind.css = "client/index.css", which does not exist; the real stylesheet is client/global.css (imported in client/App.tsx). Fix the path before running the shadcn CLI to add components.
