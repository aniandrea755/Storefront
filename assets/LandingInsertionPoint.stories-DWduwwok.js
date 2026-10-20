import{L as a}from"./LandingInsertionPoint-DL1Ksb-3.js";import{L as i}from"./LandingBlockView-BvMefcSo.js";import{P as o,a as r}from"./landingStoryFixtures-Ci4U3Tg0.js";import"./iframe-DH-XNaA6.js";import"./preload-helper-PPVm8Dsz.js";import"./LandingBlockPalette-M6zAI94P.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useLandingPages-CHaCDxNl.js";const b={title:"Product/Marketing/Landing Pages/LandingInsertionPoint",component:a,tags:["autodocs"],parameters:{docs:{description:{component:`
### Overview
\`LandingInsertionPoint\` is the thin drop zone rendered between every pair of blocks on the
landing canvas. It serves two paths at once:

- **Click** — opens a menu embedding \`LandingBlockPalette\`; picking a tile emits \`insert\`.
- **Drop** — accepts both dataTransfer keys the editor uses: \`application/x-lp-block-type\`
  (a new block dragged from the palette → \`insert\`) and \`application/x-lp-reorder-id\`
  (an existing block dragged by its grip → \`reorder\`).

\`dragOver\` state highlights the zone only when the dragged payload is one it can accept.

**Use when:** between blocks in the editor canvas, and above the first / below the last block.

**Don't use when:** appending is the only option — a plain "Add block" button is clearer.

### 🟢 Do's
- **Do** render one between every block pair so insertion position is unambiguous.

### 🔴 Don'ts
- **Don't** parse the dataTransfer payload yourself — the component discriminates insert vs
  reorder and emits the right event.

### A11y
- **Provides:** the click→menu path is keyboard reachable, giving drag-and-drop a non-pointer
  equivalent for *insertion*.
- **Consumer must:** provide a keyboard path for *reordering* — the layers panel's move actions
  serve that role; the drop zone alone does not.

> **Story note:** HTML5 drag payloads can't be faked meaningfully in a static story, so the drop
> path is documented rather than simulated. Click the zone to exercise the menu.
        `}}},argTypes:{palette:{control:"object",description:"PaletteItem[] — passed through to the embedded palette in the insertion menu."},onInsert:{action:"insert",description:"Emitted with a block type from either the menu or a palette drop."},onReorder:{action:"reorder",description:"Emitted with the dragged block id when an existing block is dropped here."}}},e={args:{palette:o},render:n=>({components:{LandingInsertionPoint:a},setup:()=>({args:n}),template:'<div style="max-width: 720px; margin: 0 auto; padding: 24px 0"><LandingInsertionPoint v-bind="args" /></div>'})},t={args:{palette:o},render:n=>({components:{LandingInsertionPoint:a,LandingBlockView:i},setup:()=>({args:n,blocks:r.slice(0,3),palette:o}),template:`
      <div style="max-width: 720px; margin: 0 auto">
        <template v-for="b in blocks" :key="b.id">
          <LandingInsertionPoint v-bind="args" />
          <LandingBlockView :block="b" editable :palette="palette" />
        </template>
        <LandingInsertionPoint v-bind="args" />
      </div>
    `})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    palette: PALETTE
  },
  render: args => ({
    components: {
      LandingInsertionPoint
    },
    setup: () => ({
      args
    }),
    template: '<div style="max-width: 720px; margin: 0 auto; padding: 24px 0"><LandingInsertionPoint v-bind="args" /></div>'
  })
}`,...e.parameters?.docs?.source},description:{story:"The zone at rest — a thin line until hovered or dragged over.",...e.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    palette: PALETTE
  },
  render: args => ({
    components: {
      LandingInsertionPoint,
      LandingBlockView
    },
    setup: () => ({
      args,
      blocks: PAGE_BLOCKS.slice(0, 3),
      palette: PALETTE
    }),
    template: \`
      <div style="max-width: 720px; margin: 0 auto">
        <template v-for="b in blocks" :key="b.id">
          <LandingInsertionPoint v-bind="args" />
          <LandingBlockView :block="b" editable :palette="palette" />
        </template>
        <LandingInsertionPoint v-bind="args" />
      </div>
    \`
  })
}`,...t.parameters?.docs?.source},description:{story:"In context: insertion points above, between, and below real blocks — how the canvas composes.",...t.parameters?.docs?.description}}};const u=["Default","BetweenBlocks"];export{t as BetweenBlocks,e as Default,u as __namedExportsOrder,b as default};
