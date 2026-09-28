---
id: reference-routing-lives-in-client-app-tsx-under-a-layout-route-the
type: reference
scope: project
title: Routing lives in client/App.tsx under a Layout route; the site is a single landing page (Index.tsx) whose nav uses hash anchors matching section ids, not routes
triggers: ["pagina","page","router","navegacion","nav","header","landing","ruta"]
anchors: [{"path":"client/App.tsx","symbol":"Layout"}]
asserted: 2026-09-28
invalidated: null
superseded_by: null
confidence: medium
pin: false
source: init
---
Verified: client/App.tsx defines a Layout route (Header + Outlet + Footer in client/components/site/) wrapping / and the * NotFound. The only page is client/pages/Index.tsx (Federal Government Advisors marketing landing). Header nav links use in-page hash anchors (#services, #about, #client-success, #contact) matching section ids in Index.tsx, not router routes. Logo is a remote cdn.builder.io URL hardcoded in Header.tsx. New pages go inside the Layout route above the catch-all.
