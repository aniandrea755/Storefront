import{j as e,M as p}from"./blocks-CHiQ1vGI.js";import{useMDXComponents as h}from"./index-CLeNxWpF.js";import{t as d}from"./foundationTokens-D_OKuxpL.js";import{er as x,et as m,eh as o,eC as u,ei as g}from"./iframe-BqHSr5b_.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";const i={fontFamily:m,fontSize:x},j=({token:n,name:s,children:r})=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"120px 64px 1fr",alignItems:"center",gap:"var(--mp-space-16)",padding:"var(--mp-space-6) 0"},children:[e.jsx("code",{style:{...i,color:"var(--text-muted)"},title:n,children:s}),e.jsx("code",{style:{...i,color:"var(--text-muted)",textAlign:"right"},children:r.value}),e.jsx("div",{children:r.specimen})]}),y=()=>e.jsx("div",{children:d("mp_space_").map(({token:n,name:s,value:r})=>e.jsx(j,{token:n,name:`space.${s}`,children:{value:r,specimen:e.jsx("div",{style:{width:r,height:"14px",background:o,borderRadius:u}})}},n))}),f=()=>e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(120px, 1fr))",gap:"var(--mp-space-16)"},children:d("mp_radius_").map(({token:n,name:s,value:r})=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--mp-space-8)"},children:[e.jsx("div",{style:{height:"72px",borderRadius:r,border:`2px solid ${o}`,background:`color-mix(in oklch, ${o} 8%, transparent)`}}),e.jsxs("div",{children:[e.jsxs("div",{style:{...i},children:["radius.",s]}),e.jsx("div",{style:{...i,color:"var(--text-muted)"},children:r})]})]},n))}),c=({prefix:n,only:s})=>e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(150px, 1fr))",gap:"var(--mp-space-12)"},children:d(n).filter(({name:r,value:t})=>t.startsWith("#")&&(!s||s.includes(r))).map(({token:r,name:t,value:a})=>e.jsxs("div",{style:{border:"1px solid var(--border-subtle)",borderRadius:g,overflow:"hidden"},children:[e.jsx("div",{style:{height:"52px",background:a}}),e.jsxs("div",{style:{padding:"var(--mp-space-8)"},children:[e.jsx("div",{style:{...i},children:t}),e.jsx("div",{style:{...i,color:"var(--text-muted)"},children:a})]})]},r))});function l(n){const s={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",strong:"strong",...h(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{title:"Foundations/Overview"}),`
`,`
`,`
`,`
`,`
`,`
`,e.jsx(s.h1,{id:"foundations-at-a-glance",children:"Foundations at a glance"}),`
`,e.jsxs(s.p,{children:[`A docs page renders outside the story canvas, so the specimens below are drawn straight from the
token module rather than through Vuetify's theme channels — which is also why the ink stays the
light-theme accent when you flip the toolbar. The `,e.jsx(s.strong,{children:"Colors"})," page shows both palettes properly."]}),`
`,e.jsxs(s.p,{children:["Every specimen on this page is rendered from ",e.jsx(s.code,{children:"src/design-tokens/generated/tokens.ts"}),`, which is
generated from `,e.jsx(s.code,{children:"src/design-tokens/tokens.json"})," by ",e.jsx(s.code,{children:"npm run tokens:build"}),`. A bar's width, a corner's
radius and a swatch's fill `,e.jsx(s.strong,{children:"are"}),` the token values — if something looks wrong here, it is wrong in
`,e.jsx(s.code,{children:"tokens.json"}),", not in this page."]}),`
`,e.jsxs(s.p,{children:[`This is the overview. The deeper pages break each scale down:
`,e.jsx(s.strong,{children:"Colors"})," · ",e.jsx(s.strong,{children:"Typography"})," · ",e.jsx(s.strong,{children:"Spacing"})," · ",e.jsx(s.strong,{children:"Radius & Shadows"})," · ",e.jsx(s.strong,{children:"Icons"})," · ",e.jsx(s.strong,{children:"Buttons"})," · ",e.jsx(s.strong,{children:"Tooltips"}),"."]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"spacing",children:"Spacing"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"space.*"})," is the one spacing scale, and ",e.jsx(s.strong,{children:"the token name is the pixel value"})," — ",e.jsx(s.code,{children:"space.12"})," ",e.jsx(s.em,{children:"is"}),`
12px. A 4px grid from 16px up, with 2px half-steps (2 · 6 · 10 · 14) below it. The sub-grid is a
recorded decision (DESIGN_AUDIT.md P1-5), not drift.`]}),`
`,e.jsxs(s.p,{children:["In templates prefer Vuetify utilities (",e.jsx(s.code,{children:"pa-4"}),", ",e.jsx(s.code,{children:"ga-3"}),`) — the same 4px grid. In CSS use
`,e.jsx(s.code,{children:"var(--mp-space-*)"}),". Never a raw px literal in either."]}),`
`,e.jsx(y,{}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"radius",children:"Radius"}),`
`,e.jsxs(s.p,{children:["One scale, named by pixel value, read as a concentric language: ",e.jsx(s.strong,{children:"16"}),` for outer surfaces (cards,
dialogs, drawers), `,e.jsx(s.strong,{children:"12"})," for anything nested inside one, ",e.jsx(s.strong,{children:"10"})," for controls and inputs, ",e.jsx(s.strong,{children:"8"}),` for
chips and menu items, `,e.jsx(s.strong,{children:"4"})," for micro-marks, ",e.jsx(s.code,{children:"full"})," for pills, buttons and avatars."]}),`
`,e.jsxs(s.p,{children:[`Prefer the role alias where the system has already decided —
`,e.jsx(s.code,{children:"component.{button,chip,input,menu,card,dialog}.radius"}),` alias into this scale and are wired into the
Vuetify global defaults, so a plain `,e.jsx(s.code,{children:"v-btn"})," or ",e.jsx(s.code,{children:"v-card"})," picks the right corner up on its own."]}),`
`,e.jsx(f,{}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"colour",children:"Colour"}),`
`,e.jsxs(s.p,{children:[`The brand and semantic roles below drive light theme. Dark is the same set of roles resolved to
`,e.jsx(s.code,{children:"color.dark.*"})," — flip the toolbar ",e.jsx(s.strong,{children:"Theme"})," to see it, and see ",e.jsx(s.strong,{children:"Foundations → Colors"}),` for the full
ramps, chart series and the light/dark comparison.`]}),`
`,e.jsxs(s.p,{children:["In components, consume colour through the ",e.jsx(s.strong,{children:"Vuetify theme channels"}),`
(`,e.jsx(s.code,{children:"rgb(var(--v-theme-primary))"}),", ",e.jsx(s.code,{children:'color="success"'}),", ",e.jsx(s.code,{children:"bg-surface"}),`) rather than these hex values
directly, so theming stays automatic.`]}),`
`,e.jsx(s.h3,{id:"brand-and-semantic-roles",children:"Brand and semantic roles"}),`
`,e.jsx(c,{prefix:"mp_color_light_",only:["primary","secondary","success","warning","error","info"]}),`
`,e.jsx(s.h3,{id:"surfaces-text-and-borders",children:"Surfaces, text and borders"}),`
`,e.jsx(c,{prefix:"mp_color_light_",only:["background","surface","surfaceVariant","textPrimary","textSecondary","textMuted","border","borderSubtle"]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"type",children:"Type"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Body is 14px"}),` — the one canonical body size. The ramp is named by pixel value
(10 · 11 · 12 · 13 · 14 · 15 · 16 · 18 · 20 · 24 · 28 · 32 · 40 · 48), so there is no
`,e.jsx(s.code,{children:"md"}),`-means-16-or-13 guesswork, and no fractional size exists anywhere in the system. Composite
`,e.jsx(s.code,{children:"text.*"}),` roles (pageTitle, kpiValue, sectionTitle, body, caption, eyebrow) are what product pages
should actually use; `,e.jsx(s.code,{children:"display.*"})," is a separate hero ramp for marketing surfaces only."]}),`
`,e.jsxs(s.p,{children:["Full specimens on ",e.jsx(s.strong,{children:"Foundations → Typography"}),"."]})]})}function S(n={}){const{wrapper:s}={...h(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(l,{...n})}):l(n)}export{f as RadiusSpecimens,j as Row,y as SpacingBars,c as Swatches,S as default,i as mono};
