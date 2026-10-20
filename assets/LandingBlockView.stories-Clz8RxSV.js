import{L as s}from"./LandingBlockView-BvMefcSo.js";import{P as c,a as d,b as l}from"./landingStoryFixtures-Ci4U3Tg0.js";import"./iframe-DH-XNaA6.js";import"./preload-helper-PPVm8Dsz.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useLandingPages-CHaCDxNl.js";const y={title:"Product/Marketing/Landing Pages/LandingBlockView",component:s,tags:["autodocs"],parameters:{docs:{description:{component:`
### Overview
\`LandingBlockView\` renders a single \`LandingPageBlock\` on the landing page canvas. It has two
faces: a plain **preview** (\`editable: false\`) used by the published/preview renderer, and the
**editor** face (\`editable: true\`) which layers on a type chip, hover controls (duplicate,
remove), a drag grip that seeds \`application/x-lp-reorder-id\` for reordering, and a selection
ring. \`showStructure\` adds the structural outline used by the editor's "show structure" toggle.
Heading level tracks \`block.titleSize\` (S→h4, M→h3, L→h2, XL→h1), so the rendered page keeps a
sane document outline.

**Use when:** rendering blocks inside the landing page canvas, in either mode.

**Don't use when:** rendering a block *summary* — the layers panel does that.

### 🟢 Do's
- **Do** pass \`palette\` in editable mode so the type chip shows the human label and icon rather
  than the raw type string.
- **Do** choose \`titleSize\` for semantic level, not visual size alone.

### 🔴 Don'ts
- **Don't** emit \`select\` yourself — the root click handler already does it when \`editable\`.

### A11y
- **Provides:** heading tags follow \`titleSize\`, and images render their \`alt\`.
- **Consumer must:** the editor controls appear on hover/selection; keep the layers panel as the
  keyboard-reachable equivalent for duplicate/remove/reorder.

> **Story note:** drag-to-reorder can't be exercised statically, so the grip is shown but not
> simulated. Use the Selected and ShowStructure stories to inspect the editor chrome.
        `}}},argTypes:{block:{control:"object",description:"The LandingPageBlock to render."},editable:{control:"boolean",description:"Editor face — adds type chip, hover controls, drag grip, selection ring."},selected:{control:"boolean",description:"Draws the selection ring (editor face only)."},showStructure:{control:"boolean",description:"Adds the structural outline used by the editor toggle."},palette:{control:"object",description:"PaletteItem[] — supplies the type chip label/icon in editor mode."},onSelect:{action:"select",description:"Emitted on click when editable."},onDuplicate:{action:"duplicate",description:"Emitted from the duplicate control."},onRemove:{action:"remove",description:"Emitted from the remove control."}}},u=t=>({components:{LandingBlockView:s},template:`<div style="max-width: 720px; margin: 0 auto">${t}</div>`}),e={args:{block:l("title",{text:"Spring into savings",titleSize:"XL",align:"center"})},render:t=>({...u('<LandingBlockView v-bind="args" />'),setup:()=>({args:t})})},r={args:{...e.args,editable:!0,palette:c},render:e.render},o={args:{...e.args,editable:!0,selected:!0,palette:c},render:e.render},n={args:{...e.args,editable:!0,showStructure:!0,palette:c},render:e.render},a={args:{block:d[0]},render:()=>({components:{LandingBlockView:s},setup:()=>({blocks:d,palette:c}),template:`
      <div style="max-width: 720px; margin: 0 auto">
        <LandingBlockView v-for="b in blocks" :key="b.id" :block="b" :palette="palette" />
      </div>
    `})},i={args:{block:l("title",{text:"Heading"})},render:()=>({components:{LandingBlockView:s},setup:()=>({blocks:["S","M","L","XL"].map((t,p)=>l("title",{text:`Title size ${t}`,titleSize:t},`lpb-story-title-${p}`))}),template:`
      <div style="max-width: 720px; margin: 0 auto">
        <LandingBlockView v-for="b in blocks" :key="b.id" :block="b" />
      </div>
    `})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    block: block('title', {
      text: 'Spring into savings',
      titleSize: 'XL',
      align: 'center'
    })
  },
  render: args => ({
    ...wrap('<LandingBlockView v-bind="args" />'),
    setup: () => ({
      args
    })
  })
}`,...e.parameters?.docs?.source},description:{story:"Preview face — how a block renders on the published page.",...e.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    editable: true,
    palette: PALETTE
  },
  render: Default.render
}`,...r.parameters?.docs?.source},description:{story:"Editor face — type chip and hover controls, not yet selected.",...r.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    editable: true,
    selected: true,
    palette: PALETTE
  },
  render: Default.render
}`,...o.parameters?.docs?.source},description:{story:"Selected in the editor — the selection ring is drawn.",...o.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    editable: true,
    showStructure: true,
    palette: PALETTE
  },
  render: Default.render
}`,...n.parameters?.docs?.source},description:{story:`The editor's "show structure" toggle, which outlines each block's bounds.`,...n.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    block: PAGE_BLOCKS[0]!
  },
  render: () => ({
    components: {
      LandingBlockView
    },
    setup: () => ({
      blocks: PAGE_BLOCKS,
      palette: PALETTE
    }),
    template: \`
      <div style="max-width: 720px; margin: 0 auto">
        <LandingBlockView v-for="b in blocks" :key="b.id" :block="b" :palette="palette" />
      </div>
    \`
  })
}`,...a.parameters?.docs?.source},description:{story:"Every block type in the fixture page, rendered in preview mode.",...a.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    block: block('title', {
      text: 'Heading'
    })
  },
  render: () => ({
    components: {
      LandingBlockView
    },
    setup: () => ({
      blocks: (['S', 'M', 'L', 'XL'] as const).map((size, i) => block('title', {
        text: \`Title size \${size}\`,
        titleSize: size
      }, \`lpb-story-title-\${i}\`))
    }),
    template: \`
      <div style="max-width: 720px; margin: 0 auto">
        <LandingBlockView v-for="b in blocks" :key="b.id" :block="b" />
      </div>
    \`
  })
}`,...i.parameters?.docs?.source},description:{story:"Heading levels: titleSize S→h4, M→h3, L→h2, XL→h1.",...i.parameters?.docs?.description}}};const v=["Default","Editable","Selected","ShowStructure","BlockTypeMatrix","TitleSizes"];export{a as BlockTypeMatrix,e as Default,r as Editable,o as Selected,n as ShowStructure,i as TitleSizes,v as __namedExportsOrder,y as default};
