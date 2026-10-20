import{M as r}from"./MpComingSoonTiles-BwIYWxxk.js";import"./iframe-DH-XNaA6.js";import"./preload-helper-PPVm8Dsz.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const l=[{icon:"credit-card",title:"Payment terminals",desc:"Stripe Reader M2, S700, Tap to Pay on iPhone & Android."},{icon:"printer",title:"Receipt printers",desc:"Star Micronics mC-Print3, Epson TM-m30III, ESC/POS over Wi-Fi."},{icon:"scan-barcode",title:"Barcode scanners",desc:"Built-in camera or Bluetooth HID scanners."},{icon:"archive",title:"Cash drawers",desc:"Printer-driven over RJ12 — auto-trigger on cash sales."}],d=[{icon:"cloud-off",title:"Offline mode",desc:"Per-store offline limits, sync cadence, and reconciliation defaults."},{icon:"shield",title:"Security",desc:"Inactivity lock window, PIN policy, manager-override approvals."},{icon:"tag",title:"Tax & rounding",desc:"Per-region tax tables, rounding rules, surcharging."},{icon:"flag",title:"Market settings",desc:"Enable Retail per country (US / CA / AU / NZ)."}],g={title:"Molecules/MpComingSoonTiles",component:r,tags:["autodocs"],parameters:{docs:{description:{component:`
### Overview
\`MpComingSoonTiles\` is the "not built yet, but here's what's planned" panel: a centered icon
badge, headline, and blurb above a grid of feature tiles. It replaces the scaffold that was
copy-pasted between \`Retail/RetailSettings.vue\` and \`Retail/Hardware.vue\` (86% identical).

**Use when:** a route exists in the IA but its functionality is still ahead — and you can say
something concrete about what's coming.

**Don't use when:** the surface is built but currently has no data — that's \`MpEmptyState\`.
Empty means "nothing to show yet"; coming-soon means "this doesn't exist yet".

### Usage
\`\`\`html
<MpComingSoonTiles
  icon="printer"
  title="Hardware management coming soon"
  description="Hardware pairing lives on the POS device today."
  :tiles="categories"
/>
\`\`\`

### 🟢 Do's
- **Do** make each tile's \`desc\` specific — naming real capabilities is what makes the panel
  informative rather than an apology.
- **Do** set \`headingLevel\` to fit the page outline; it sits under the \`MpPageHeader\` h1, so
  the default \`h3\` is right when there's an intervening section heading, \`h2\` when there isn't.

### 🔴 Don'ts
- **Don't** promise dates in the copy.
- **Don't** make tiles look interactive — they're previews, not links.

### A11y
- **Provides:** the headline renders as a real heading element via \`headingLevel\`, keeping the
  page outline intact; tiles are static text, correctly not focusable.
- **Consumer must:** pick a \`headingLevel\` that doesn't skip a level from the page's h1.
        `}}},argTypes:{icon:{control:"text",description:"Lucide icon for the centered badge."},title:{control:"text",description:'Headline, e.g. "Hardware management coming soon".'},description:{control:"text",description:"Supporting paragraph under the headline. Clamped to a 460px measure."},tiles:{control:"object",description:"ComingSoonTile[] — { icon, title, desc } previewing planned capabilities."},smCols:{control:"number",description:"Tile column width at the sm breakpoint. Default 6 (two up)."},mdCols:{control:"number",description:"Tile column width at the md breakpoint. Omit to keep the sm width."},headingLevel:{control:"select",options:["h2","h3","h4"],description:"Heading element for the headline. Default h3."}},render:c=>({components:{MpComingSoonTiles:r},setup:()=>({args:c}),template:'<div style="max-width: 900px"><MpComingSoonTiles v-bind="args" /></div>'})},e={args:{icon:"printer",title:"Hardware management coming soon",description:"Hardware pairing lives on the POS device itself today. This panel will surface paired devices, firmware versions, and troubleshooting tools for your fleet.",tiles:l}},t={render:()=>({components:{MpComingSoonTiles:r},setup:()=>({tiles:[{icon:"store",title:"Store locator",desc:"Let shoppers find your nearest location."},{icon:"gift",title:"Loyalty tiers",desc:"Reward repeat buyers automatically."}]}),template:`
      <div class="d-flex flex-column ga-8">
        <div>
          <div class="text-caption text-medium-emphasis mb-2">with description</div>
          <MpComingSoonTiles icon="sparkles" title="Retail is on the way" description="These surfaces are planned for the next release." :tiles="tiles" />
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">title only</div>
          <MpComingSoonTiles icon="sparkles" title="Retail is on the way" :tiles="tiles" />
        </div>
      </div>
    `}),args:{}},i={render:()=>({components:{MpComingSoonTiles:r},setup:()=>({tiles:[{icon:"store",title:"Store locator",desc:"Find your nearest location."},{icon:"gift",title:"Loyalty tiers",desc:"Reward repeat buyers."},{icon:"scan-barcode",title:"In-store scan",desc:"Scan to look up stock."},{icon:"receipt",title:"Digital receipts",desc:"Email at the register."}]}),template:`
      <div class="d-flex flex-column ga-8">
        <div>
          <div class="text-caption text-medium-emphasis mb-2">mdCols=6 — two across</div>
          <MpComingSoonTiles icon="sparkles" title="Two across" :tiles="tiles" :md-cols="6" />
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">mdCols=3 — four across</div>
          <MpComingSoonTiles icon="sparkles" title="Four across" :tiles="tiles" :md-cols="3" />
        </div>
      </div>
    `}),args:{}},s={render:()=>({components:{MpComingSoonTiles:r},setup:()=>({tiles:[{icon:"store",title:"Store locator",desc:"Planned for the next release."}]}),template:'<MpComingSoonTiles icon="sparkles" title="Retail is on the way" description="These surfaces are planned." :tiles="tiles" />'}),args:{}},o={args:{icon:"settings",title:"Retail settings coming soon",description:"The MVP exposes the following configuration surfaces. Interactive setup will land in Phase 1.",tiles:d,mdCols:4}},a={args:{icon:"wrench",title:"Diagnostics coming soon",tiles:l.slice(0,2)}},n={args:{...e.args},globals:{viewport:{value:"mobile375",isRotated:!1}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'printer',
    title: 'Hardware management coming soon',
    description: 'Hardware pairing lives on the POS device itself today. This panel will surface paired devices, firmware versions, and troubleshooting tools for your fleet.',
    tiles: HARDWARE
  }
}`,...e.parameters?.docs?.source},description:{story:"The Hardware page's panel — two tiles per row from the sm breakpoint up.",...e.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      MpComingSoonTiles
    },
    setup: () => ({
      tiles: [{
        icon: 'store',
        title: 'Store locator',
        desc: 'Let shoppers find your nearest location.'
      }, {
        icon: 'gift',
        title: 'Loyalty tiers',
        desc: 'Reward repeat buyers automatically.'
      }]
    }),
    template: \`
      <div class="d-flex flex-column ga-8">
        <div>
          <div class="text-caption text-medium-emphasis mb-2">with description</div>
          <MpComingSoonTiles icon="sparkles" title="Retail is on the way" description="These surfaces are planned for the next release." :tiles="tiles" />
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">title only</div>
          <MpComingSoonTiles icon="sparkles" title="Retail is on the way" :tiles="tiles" />
        </div>
      </div>
    \`
  }),
  args: {} as never
}`,...t.parameters?.docs?.source},description:{story:"With and without the supporting description line.",...t.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      MpComingSoonTiles
    },
    setup: () => ({
      tiles: [{
        icon: 'store',
        title: 'Store locator',
        desc: 'Find your nearest location.'
      }, {
        icon: 'gift',
        title: 'Loyalty tiers',
        desc: 'Reward repeat buyers.'
      }, {
        icon: 'scan-barcode',
        title: 'In-store scan',
        desc: 'Scan to look up stock.'
      }, {
        icon: 'receipt',
        title: 'Digital receipts',
        desc: 'Email at the register.'
      }]
    }),
    template: \`
      <div class="d-flex flex-column ga-8">
        <div>
          <div class="text-caption text-medium-emphasis mb-2">mdCols=6 — two across</div>
          <MpComingSoonTiles icon="sparkles" title="Two across" :tiles="tiles" :md-cols="6" />
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">mdCols=3 — four across</div>
          <MpComingSoonTiles icon="sparkles" title="Four across" :tiles="tiles" :md-cols="3" />
        </div>
      </div>
    \`
  }),
  args: {} as never
}`,...i.parameters?.docs?.source},description:{story:"The column ramp — `smCols` / `mdCols` control how tiles wrap.",...i.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      MpComingSoonTiles
    },
    setup: () => ({
      tiles: [{
        icon: 'store',
        title: 'Store locator',
        desc: 'Planned for the next release.'
      }]
    }),
    template: \`<MpComingSoonTiles icon="sparkles" title="Retail is on the way" description="These surfaces are planned." :tiles="tiles" />\`
  }),
  args: {} as never
}`,...s.parameters?.docs?.source},description:{story:'This component has one state — "planned, not built yet". If the surface exists but has\nno data, that is `MpEmptyState`; if it failed to load, that is `MpErrorState`.',...s.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'settings',
    title: 'Retail settings coming soon',
    description: 'The MVP exposes the following configuration surfaces. Interactive setup will land in Phase 1.',
    tiles: SETTINGS,
    mdCols: 4
  }
}`,...o.parameters?.docs?.source},description:{story:"The Retail Settings panel — `mdCols: 4` gives three tiles per row on desktop.",...o.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'wrench',
    title: 'Diagnostics coming soon',
    tiles: HARDWARE.slice(0, 2)
  }
}`,...a.parameters?.docs?.source},description:{story:"Headline only — `description` is optional and its paragraph is skipped entirely.",...a.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  globals: {
    viewport: {
      value: 'mobile375',
      isRotated: false
    }
  }
}`,...n.parameters?.docs?.source},description:{story:"At 375px the tiles stack to a single column.",...n.parameters?.docs?.description}}};const v=["Default","Variants","Sizes","States","ThreeColumn","NoDescription","Mobile375"];export{e as Default,n as Mobile375,a as NoDescription,i as Sizes,s as States,o as ThreeColumn,t as Variants,v as __namedExportsOrder,g as default};
