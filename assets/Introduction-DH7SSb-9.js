import{j as e,M as i}from"./blocks-CHiQ1vGI.js";import{useMDXComponents as o}from"./index-CLeNxWpF.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BqHSr5b_.js";function r(s){const n={blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Introduction"}),`
`,e.jsx(n.h1,{id:"marobase",children:"Marobase"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Marobase is Maropost's design system"})," — the ",e.jsx(n.code,{children:"Mp*"}),` Vue 3 + Vuetify 3 component library behind the
commerce and marketing platform, built so a merchant-facing screen can be assembled from parts that
already agree with each other. Every spacing, radius, type and colour value in it resolves to a
token in `,e.jsx(n.code,{children:"src/design-tokens/tokens.json"}),`, which is the single source of truth; components consume
those tokens and never hard-code a pixel. This Storybook is the reference for that library: what
exists, what each part is for, and what it looks like in light and dark.`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"the-sidebar",children:"The sidebar"}),`
`,e.jsx(n.p,{children:"Five buckets, in the order you should read them:"}),`
`,e.jsxs(n.p,{children:[`| Bucket | What lives there |
|---|---|
| `,e.jsx(n.strong,{children:"Foundations"}),` | The token scales themselves — colour, type, spacing, radius, icons, and the two stock Vuetify controls (buttons, tooltips) the system styles globally rather than wrapping. |
| `,e.jsx(n.strong,{children:"Atoms"})," | One control or mark, no internal regions: ",e.jsx(n.code,{children:"MpStatusChip"}),", ",e.jsx(n.code,{children:"MpListRow"}),", ",e.jsx(n.code,{children:"MpFilterTabs"}),", ",e.jsx(n.code,{children:"MpTableSkeleton"}),`… |
| `,e.jsx(n.strong,{children:"Molecules"})," | Has internal regions, or composes an atom: ",e.jsx(n.code,{children:"MpDialog"}),", ",e.jsx(n.code,{children:"MpFormDrawer"}),", ",e.jsx(n.code,{children:"MpDataTableToolbar"}),", ",e.jsx(n.code,{children:"MpEmptyState"}),", ",e.jsx(n.code,{children:"MpSectionRail"}),`… |
| `,e.jsx(n.strong,{children:"Patterns"}),` | Reusable multi-component compositions and app shells: the Data Table pattern, Form Fields, Layering, the app bar and sidebar, the builder shell. |
| `,e.jsx(n.strong,{children:"Product"})," | Surfaces specific to one Maropost feature area — Da Vinci, Dashboards, Marketing, Merchandising, PLG, RBAC, Sales Channels. Useful as reference, ",e.jsx(n.strong,{children:"not"})," as a general-purpose API. |"]}),`
`,e.jsxs(n.p,{children:["Use the toolbar ",e.jsx(n.strong,{children:"Theme"})," (light / dark) and ",e.jsx(n.strong,{children:"Accent"}),` (cyan / blue / gray / purple) globals to
check a component across themes. There are no per-story dark twins — that is what the toggle is for.`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"the-token-scale-at-a-glance",children:"The token scale at a glance"}),`
`,e.jsxs(n.p,{children:["Primitives are named by their ",e.jsx(n.strong,{children:"value"}),"; roles are named by their ",e.jsx(n.strong,{children:"job"}),". ",e.jsx(n.code,{children:"--mp-space-12"}),` is 12px;
`,e.jsx(n.code,{children:"--mp-component-card-radius"}),` is whatever a card should be. Reach for a role token where the system
has already made the decision, a primitive otherwise.`]}),`
`,e.jsxs(n.p,{children:[`| Scale | Stops |
|---|---|
| `,e.jsx(n.code,{children:"space.*"}),` | 2 · 4 · 6 · 8 · 10 · 12 · 14 · 16 · 20 · 24 · 28 · 32 · 40 · 48 · 64 · 80 — a 4px grid from 16 up, 2px half-steps below it |
| `,e.jsx(n.code,{children:"radius.*"})," | 4 · 8 · 10 · 12 · 16 · 20 · ",e.jsx(n.code,{children:"full"})," — one concentric language: 16 outer surfaces, 12 nested, 10 controls, 8 chips and menu items, 4 micro-marks, ",e.jsx(n.code,{children:"full"}),` for pills |
| `,e.jsx(n.code,{children:"fontSize.*"})," | 10 · 11 · 12 · 13 · 14 · 15 · 16 · 18 · 20 · 24 · 28 · 32 · 40 · 48. ",e.jsx(n.strong,{children:"Body is 14px."}),` No fractional sizes exist |
| `,e.jsx(n.code,{children:"component.*"})," | Role aliases: ",e.jsx(n.code,{children:"control.height"})," 40 · ",e.jsx(n.code,{children:"card.padding"})," 20 · ",e.jsx(n.code,{children:"dialog.padding"})," 20 · ",e.jsx(n.code,{children:"listItem.minHeight"})," 40 · ",e.jsx(n.code,{children:"table.rowMinHeight"})," 48 · ",e.jsx(n.code,{children:"chip.height"}),` 20/24/32 |
| `,e.jsx(n.code,{children:"layout.*"})," | sidebar 248 · rail 72 · section rail 260 · appbar 60 · drawer 480 · content max 1280 |"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Foundations → Overview"}),` renders all three primitive scales as live specimens; the deeper
Foundations pages break each one down.`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"running-it-locally",children:"Running it locally"}),`
`,e.jsxs(n.p,{children:["Use ",e.jsx(n.strong,{children:"npm"}),", not pnpm — the repo consolidated on npm and the pnpm workspace config was removed."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm install --legacy-peer-deps
npm run tokens:build     # regenerate SCSS/CSS/TS from tokens.json
npm run storybook        # this Storybook, on :6006
npm run dev              # the prototype app, on :5173
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"npm run tokens:watch"})," regenerates on every save to ",e.jsx(n.code,{children:"tokens.json"}),`, which is what you want while
working on Foundations.`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"figma-library",children:"Figma library"}),`
`,e.jsxs(n.p,{children:["📐 ",e.jsxs(n.strong,{children:["Maropost Design Kit — ",e.jsx(n.em,{children:"link to be added"})]})]}),`
`,e.jsxs(n.p,{children:[`The Figma library is not yet linked from this page. When it is, it belongs here, and the variables
in it are generated from the same `,e.jsx(n.code,{children:"tokens.json"})," via ",e.jsx(n.code,{children:"npm run tokens:push-figma"}),"."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["⚠️ That push renames existing Figma variables (",e.jsx(n.code,{children:"spacing.6"})," → ",e.jsx(n.code,{children:"space.24"}),`, and the rest of the
Phase 1 renames) and will orphan the bindings in the current Design Kit file. Treat the first
push as a deliberate re-link session, not a routine sync.`]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"conventions-this-storybook-assumes",children:"Conventions this Storybook assumes"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Icons are Lucide only"})," — kebab-case names (",e.jsx(n.code,{children:"chevron-down"}),`), resolved through the custom Vuetify
icon set. No `,e.jsx(n.code,{children:"mdi-*"})," strings in new code."]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:["Cards are ",e.jsx(n.code,{children:'flat border rounded="lg"'})]})," — depth comes from hairline borders and tint, not shadow."]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:["Never a raw ",e.jsx(n.code,{children:"v-dialog"})]})," — compose ",e.jsx(n.code,{children:"MpDialog"})," (modals) or ",e.jsx(n.code,{children:"MpFormDrawer"}),` (create/edit forms).
Never a hand-rolled rail (`,e.jsx(n.code,{children:"MpSectionRail"}),") or repeating row (",e.jsx(n.code,{children:"MpListRow"}),") either."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"One mechanism per layer"})," — Vuetify utilities in templates (",e.jsx(n.code,{children:"pa-4"}),", ",e.jsx(n.code,{children:"ga-3"}),"), ",e.jsx(n.code,{children:"var(--mp-*)"}),` in
CSS. Never a raw px literal in either, and never both for the same property on one element.`]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:["Global stylesheets go in ",e.jsx(n.code,{children:"src/styles/app-styles.ts"})]}),`, the shared manifest loaded by both the app
and this Storybook. Bypassing it is what makes Storybook and the app drift apart.`]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:["Every table or list has an ",e.jsx(n.code,{children:"MpEmptyState"}),"."]})," Empty means nothing to show; ",e.jsx(n.code,{children:"MpErrorState"}),` means
something failed; `,e.jsx(n.code,{children:"MpComingSoonTiles"}),` means the surface does not exist yet. They are not
interchangeable.`]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"not-wired-up",children:"Not wired up"}),`
`,e.jsxs(n.p,{children:["The Supernova and Figma token-sync scripts in ",e.jsx(n.code,{children:"package.json"}),` need external credentials this repo
does not carry. See the `,e.jsx(n.em,{children:"Deferred integrations"})," section of ",e.jsx(n.code,{children:"ONBOARDING.md"})," before relying on them."]}),`
`,e.jsxs(n.p,{children:["New to the repo? Read ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"ONBOARDING.md"})}),` at the repo root first. Full component API reference:
`,e.jsx(n.code,{children:"CLAUDE.md"})," and ",e.jsx(n.code,{children:"docs/design-system/"}),"."]})]})}function h(s={}){const{wrapper:n}={...o(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{h as default};
