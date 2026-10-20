import{r as i}from"./iframe-DH-XNaA6.js";import{L as r}from"./LandingPageStylePanel-C1LsSX2Z.js";import{c as o}from"./landingStoryFixtures-Ci4U3Tg0.js";import"./preload-helper-PPVm8Dsz.js";import"./MpFormField-BzBLjfV3.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./MpFormGrid-CIGBvnp2.js";import"./MpFormSection-BK5pVmwO.js";import"./useLandingPages-CHaCDxNl.js";const v={title:"Product/Marketing/Landing Pages/LandingPageStylePanel",component:r,tags:["autodocs"],parameters:{docs:{description:{component:"\n### Overview\n`LandingPageStylePanel` is the page-level settings panel shown in the landing editor's right\nrail **when no block is selected** — the counterpart to `LandingBlockSettings`. It edits the\nfive `LandingPageStyle` fields that apply across every block: background colour, content width,\nbase font (Inter / Georgia / Monospace), accent colour, and button radius.\n\nUnlike `LandingBlockSettings` (which mutates its `block` prop directly), this panel is\n**controlled**: it never mutates `style`, emitting `update` with a `Partial<LandingPageStyle>`\npatch instead. The parent applies it.\n\n**Use when:** nothing is selected on the canvas — it's the `v-else` branch of the settings rail.\n\n**Don't use when:** editing one block's appearance — that's `LandingBlockSettings`.\n\n### 🟢 Do's\n- **Do** merge the emitted patch into the page style and pass the new object back down.\n\n### 🔴 Don'ts\n- **Don't** mutate the `style` prop in place — the panel expects a controlled value.\n- **Don't** hand-roll another swatch + `v-menu` + `v-color-picker`; this is one of several ad hoc\n  colour pickers awaiting a shared `MpColorPicker` (see the overlay audit).\n\n### A11y\n- **Provides:** each colour swatch is a labelled `<button>` (`aria-label=\"Background color\"`),\n  and the sliders are native Vuetify controls with keyboard support.\n- **Consumer must:** nothing beyond applying the patch.\n        "}}},argTypes:{style:{control:"object",description:"The current LandingPageStyle — background, content width, base font, accent, button radius."},onUpdate:{action:"update",description:"Emitted with a Partial<LandingPageStyle> patch; the parent applies it."}}},e={args:{style:o},render:t=>({components:{LandingPageStylePanel:r},setup:()=>({args:t}),template:'<div style="max-width: 300px"><LandingPageStylePanel v-bind="args" /></div>'})},a={args:{style:{backgroundColor:"#111827",contentWidth:920,baseFont:"Georgia",accentColor:"#7E3AF2",buttonRadius:24}},render:e.render},n={args:{style:o},render:()=>({components:{LandingPageStylePanel:r},setup(){const t=i({...o});return{style:t,apply:s=>{t.value={...t.value,...s}}}},template:`
      <div style="max-width: 300px">
        <LandingPageStylePanel :style="style" @update="apply" />
      </div>
    `})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    style: PAGE_STYLE
  },
  render: args => ({
    components: {
      LandingPageStylePanel
    },
    setup: () => ({
      args
    }),
    template: '<div style="max-width: 300px"><LandingPageStylePanel v-bind="args" /></div>'
  })
}`,...e.parameters?.docs?.source},description:{story:"Default page style, controlled by the parent.",...e.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    style: {
      backgroundColor: '#111827',
      contentWidth: 920,
      baseFont: 'Georgia',
      accentColor: '#7E3AF2',
      buttonRadius: 24
    }
  },
  render: Default.render
}`,...a.parameters?.docs?.source},description:{story:"A dark-background page with a wide content column and a serif base font.",...a.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    style: PAGE_STYLE
  },
  render: () => ({
    components: {
      LandingPageStylePanel
    },
    setup() {
      const style = ref<LandingPageStyle>({
        ...PAGE_STYLE
      });
      const apply = (patch: Partial<LandingPageStyle>) => {
        style.value = {
          ...style.value,
          ...patch
        };
      };
      return {
        style,
        apply
      };
    },
    template: \`
      <div style="max-width: 300px">
        <LandingPageStylePanel :style="style" @update="apply" />
      </div>
    \`
  })
}`,...n.parameters?.docs?.source},description:{story:`Wired up the way the editor does it: the story holds the style and applies each emitted patch,
so the controls actually move.`,...n.parameters?.docs?.description}}};const b=["Default","CustomTheme","Interactive"];export{a as CustomTheme,e as Default,n as Interactive,b as __namedExportsOrder,v as default};
