import{r as n}from"./iframe-DH-XNaA6.js";import{D as d}from"./DvExpandDialog-IW0G3q6Q.js";import"./preload-helper-PPVm8Dsz.js";import"./MpDialog-vzXqpvNK.js";import"./useScrollEdges-CBa2dNoC.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./DvDraftPreview-D7UL2Kcx.js";const p={dashboardId:"2000290-home",type:"bar",title:"Revenue by Channel",subtitle:"last 30 days",dataSource:"commerce",metricId:"commerce_revenue_by_channel",dimension:"channel",drilldown:{routeName:"SalesSummary",label:"Open sales summary"}},b={title:"Product/Da Vinci/DvExpandDialog",component:d,tags:["autodocs"],args:{modelValue:!0,draft:p,typeLabel:"Bar chart",isAdded:!1},argTypes:{modelValue:{control:"boolean",description:"Open state. `v-model` — the dialog emits `update:modelValue` and never closes itself."},draft:{control:"object",description:"`DashboardWidgetDraft` being previewed at full size. The dialog renders it through `DvDraftPreview`, so it shows exactly what the card showed."},typeLabel:{control:"text",description:'Human-readable widget type shown in the subtitle, e.g. \\"Bar chart\\". Joined with the draft subtitle as `typeLabel - subtitle`.'},isAdded:{control:"boolean",description:"True once the draft has been added to a dashboard — swaps the primary action from Add to a confirmed state so the same draft cannot be added twice."}},parameters:{docs:{description:{component:`
## Overview
DvExpandDialog is the full-size preview of a Da Vinci widget draft (opened from
the maximize action on \`DvWidgetDraftCard\`). It renders \`DvDraftPreview\` at
expanded density on a background panel, with Close / "Add to dashboard" actions.
In this story, clicking Add flips the footer button into its disabled "Added" state.
`}}},render:e=>({components:{DvExpandDialog:d},setup(){const i=n(!0),c=n(e.isAdded);return{args:e,open:i,added:c}},template:`
      <section style="min-height: 720px;">
        <v-btn color="primary" class="text-none" prepend-icon="maximize-2" @click="open = true">
          Preview at full size
        </v-btn>
        <DvExpandDialog v-bind="args" v-model="open" :is-added="added" @add="added = true" />
      </section>
    `})},a={},t={args:{isAdded:!0}},r={render:e=>({components:{DvExpandDialog:d},setup:()=>({args:e}),template:'<DvExpandDialog v-bind="args" />'})},s={render:e=>({components:{DvExpandDialog:d},setup:()=>({args:e}),template:'<DvExpandDialog v-bind="args" />'})},o={render:e=>({components:{DvExpandDialog:d},setup:()=>({args:e}),template:'<DvExpandDialog v-bind="args" />'})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source},description:{story:"Open dialog with the enlarged preview and an active Add action.",...a.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isAdded: true
  }
}`,...t.parameters?.docs?.source},description:{story:"Draft already committed — Add action disabled with a check.",...t.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      DvExpandDialog
    },
    setup: () => ({
      args
    }),
    template: \`<DvExpandDialog v-bind="args" />\`
  })
}`,...r.parameters?.docs?.source},description:{story:"One structure — a Da Vinci draft enlarged for a proper look. Its variants are the draft types it can hold (KPI, chart, table); the frame around them never changes.",...r.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      DvExpandDialog
    },
    setup: () => ({
      args
    }),
    template: \`<DvExpandDialog v-bind="args" />\`
  })
}`,...s.parameters?.docs?.source},description:{story:"There is no `size` prop — this is `MpDialog`'s `lg` (880px), the widest step, because a chart needs a real plotting area to be judged. Phase 4 replaced this component's own `max-width=\"880\"` and its hand-drawn head/body/foot at `16×20 / 20 / 12×16` with the shell's ramp and its one 20px inset.",...s.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      DvExpandDialog
    },
    setup: () => ({
      args
    }),
    template: \`<DvExpandDialog v-bind="args" />\`
  })
}`,...o.parameters?.docs?.source},description:{story:'The two states that matter: not yet added (primary action live) and already added (action disabled, label switches to "Added").',...o.parameters?.docs?.description}}};const f=["Default","AlreadyAdded","Variants","Sizes","States"];export{t as AlreadyAdded,a as Default,s as Sizes,o as States,r as Variants,f as __namedExportsOrder,b as default};
