import{L as r}from"./LandingBlockSettings-gJj2wCP1.js";import{d as i}from"./useLandingPages-Lr-k1mKS.js";import"./iframe-BqHSr5b_.js";import"./preload-helper-PPVm8Dsz.js";import"./MpAlert-DU_CxSiJ.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./MpFormField-eWrsvwna.js";import"./MpFormGrid-D0pxdSe6.js";import"./MpFormSection-CmGpUCf7.js";import"./MpSegmentedControl-O78n2lBW.js";function a(e=""){return{...i("title"),id:"lpb-story-title",text:"Spring into savings",colorOverride:e}}const k={title:"Product/Marketing/Landing Pages/LandingBlockSettings",component:r,tags:["autodocs"],parameters:{docs:{description:{component:'\n### Overview\n`LandingBlockSettings` is the right-hand settings panel in the landing page editor\n(`LandingPageEditor.vue`). It renders exactly one `v-if` branch keyed on `block.type`\n(title, paragraph/text, button, image/video, list, form, social, icons, menu, html, spacer,\ndivider) — each with its own type-specific fields — plus a shared alignment control for\ntext-ish/interactive types, and a "Delete block" action at the bottom. It holds no internal\nstate: every field is a `v-model` straight against the `block` prop, matching this project\'s\nflat-block convention (`useLandingPages`) where every field exists on every block but only the\nrelevant ones are surfaced per type. The `title` branch is the only one with a color override:\nan inline swatch button opens a `v-menu` containing a hex-only `v-color-picker` — one of several\nad hoc color pickers (ChatbotBuilder, FormBuilder, LandingPageStylePanel) pending a shared\n`MpColorPicker` treatment per the overlay audit.\n\n**Use when:** rendering the settings panel for whichever `LandingPageBlock` is currently\nselected in the landing page editor.\n\n**Don\'t use when:** showing a read-only summary of a block\'s config (that\'s the block renderer /\npalette preview), or editing more than one block at a time — there\'s no bulk-edit mode.\n\n### Usage\n```html\n<template v-if="selected">\n  <LandingBlockSettings :block="selected" @remove="removeBlock" />\n</template>\n<LandingPageStylePanel v-else :style="pageStyle" @update="updatePageStyle" />\n```\n\n### 🟢 Do\'s\n- **Do** pass the same reactive block instance from the page\'s `blocks` array — the panel edits\n  fields via direct `v-model` mutation, not emitted update events.\n- **Do** build fixtures with `defaultLandingBlock`/`cloneLandingBlock` from `useLandingPages` so\n  every field the template reads unconditionally is actually defined.\n- **Do** rely on the swatch\'s own "Default color" label and "Reset" affordance to communicate an\n  unset override, rather than pre-filling a "real" hex as the default.\n\n### 🔴 Don\'ts\n- **Don\'t** expect an `update`/`change` event — the only emit is `remove`; every other edit\n  mutates the passed-in `block` object directly.\n- **Don\'t** hand-roll another inline swatch + `v-menu` + `v-color-picker` elsewhere — this is one\n  of a few ad hoc instances awaiting the shared `MpColorPicker` pattern; reuse this one\'s markup\n  if a new color override is needed on another block type.\n\n### A11y\n- **Provides:** the color swatch trigger carries `aria-label="Text color override"`; Vuetify\'s\n  `v-menu` closes on Escape or outside click and returns focus to the trigger; alignment and\n  style toggles use `v-btn-toggle` with icon buttons that carry their own `aria-label`s\n  (Align left/center/right); per-row remove buttons in the list/menu branches are icon-only\n  `v-btn`s with `aria-label="Remove item"` / `"Remove link"`.\n- **Consumer must:** pass a fully-populated `block` (via `defaultLandingBlock`/`cloneLandingBlock`,\n  never a partial object) — fields are read unconditionally per `block.type`, so a missing field\n  renders blank instead of falling back gracefully.\n- **Gaps:** the `v-color-picker`\'s internal hue/alpha controls rely on Vuetify\'s default labeling,\n  unaudited here; `:modes="[\'hex\']"` fixes the picker to hex-only input with no prop to change it.\n        '}}},argTypes:{block:{control:"object",description:"The selected `LandingPageBlock` being edited — build with `defaultLandingBlock`/`cloneLandingBlock` so every field the panel reads is defined."},remove:{control:!1,description:'Event — emitted with `block.id` when "Delete block" is clicked. The owning view removes the block from its `blocks` array.',table:{category:"events"}}},render:e=>({components:{LandingBlockSettings:r},setup(){return{args:e}},template:`
      <aside style="width:320px;border-left:1px solid rgba(var(--v-theme-on-surface), 0.10);background:rgb(var(--v-theme-surface));padding:16px;">
        <LandingBlockSettings v-bind="args" />
      </aside>
    `})},t={args:{block:a()}},o={args:{block:a("#7E3AF2")},render:e=>({components:{LandingBlockSettings:r},setup(){return{args:e}},template:`
      <aside style="width:320px;min-height:520px;border-left:1px solid rgba(var(--v-theme-on-surface), 0.10);background:rgb(var(--v-theme-surface));padding:16px;">
        <LandingBlockSettings v-bind="args" />
      </aside>
    `}),play:async({canvasElement:e})=>{await new Promise(n=>setTimeout(n,300)),e.querySelector('[aria-label="Text color override"]')?.click()}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    block: titleBlock()
  }
}`,...t.parameters?.docs?.source},description:{story:'The `title` block\'s settings panel, color override unset ("Default color").',...t.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    block: titleBlock('#7E3AF2')
  },
  render: args => ({
    components: {
      LandingBlockSettings
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <aside style="width:320px;min-height:520px;border-left:1px solid rgba(var(--v-theme-on-surface), 0.10);background:rgb(var(--v-theme-surface));padding:16px;">
        <LandingBlockSettings v-bind="args" />
      </aside>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    await new Promise(resolve => setTimeout(resolve, 300));
    const trigger = canvasElement.querySelector<HTMLElement>('[aria-label="Text color override"]');
    trigger?.click();
  }
}`,...o.parameters?.docs?.source},description:{story:"The swatch button opens a `v-menu` with a hex-only `v-color-picker` for the text color override.",...o.parameters?.docs?.description}}};const f=["Default","ColorPickerOpen"];export{o as ColorPickerOpen,t as Default,f as __namedExportsOrder,k as default};
