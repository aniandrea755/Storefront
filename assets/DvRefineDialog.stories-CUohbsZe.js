import{r as p}from"./iframe-BqHSr5b_.js";import{D as i}from"./DvRefineDialog-BoaXm9lf.js";import"./preload-helper-PPVm8Dsz.js";import"./MpDialog-F4WZRRS8.js";import"./useScrollEdges-B2McRpMX.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./MpFormField-eWrsvwna.js";import"./MpFormGrid-D0pxdSe6.js";import"./MpFormSection-CmGpUCf7.js";import"./DvDraftPreview-DHkU6IJV.js";const d={dashboardId:"2000290-home",type:"timeseries",title:"Open Rate Trend",dataSource:"marketing",metricId:"marketing_open_rate_over_time",chartVariant:"line",drilldown:{routeName:"CampaignReports",label:"Open campaign reports"}},c={dashboardId:"2000290-home",type:"table",title:"Top Campaigns",dataSource:"marketing",metricId:"marketing_top_campaigns",drilldown:{routeName:"CampaignReports",label:"Open campaign reports"}},R={title:"Product/Da Vinci/DvRefineDialog",component:i,tags:["autodocs"],args:{modelValue:!0,draft:d,sourceLabel:"Marketing → Email Campaigns · Last 30 days"},argTypes:{modelValue:{control:"boolean",description:"Open state. `v-model` — the dialog emits `update:modelValue` and never closes itself."},draft:{control:"object",description:"`DashboardWidgetDraft` being refined. The dialog seeds its title field and chart-type tiles from this and emits `apply` with the changed subset."},sourceLabel:{control:"text",description:"Where the draft came from, shown as context in the header, e.g. the originating prompt or dashboard."}},parameters:{docs:{description:{component:'\n## Overview\nDvRefineDialog is the confirm/refine step between "Add widget" on\n`DvWidgetDraftCard` and the actual commit: rename the widget, switch the\nvisualisation tile (KPI / Bar / Line / Area / Donut / Table / Scatter / Funnel),\nand watch the compact `DvDraftPreview` update live behind a brief loading veil.\nApplying emits the mapped `DashboardWidgetType` + `chartVariant` back to the host.\n'}}},render:e=>({components:{DvRefineDialog:i},setup(){const o=p(!0);return{args:e,open:o}},template:`
      <section style="min-height: 640px;">
        <v-btn color="primary" class="text-none" prepend-icon="plus" @click="open = true">
          Add widget
        </v-btn>
        <DvRefineDialog v-bind="args" v-model="open" @apply="open = false" />
      </section>
    `})},t={},r={args:{draft:c}},a={render:e=>({components:{DvRefineDialog:i},setup:()=>({args:e}),template:'<DvRefineDialog v-bind="args" />'})},s={render:e=>({components:{DvRefineDialog:i},setup:()=>({args:e}),template:'<DvRefineDialog v-bind="args" />'})},n={render:e=>({components:{DvRefineDialog:i},setup:()=>({args:e}),template:'<DvRefineDialog v-bind="args" />'})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source},description:{story:"Line-trend draft — switch tiles to see the live preview swap.",...t.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    draft: TABLE_DRAFT
  }
}`,...r.parameters?.docs?.source},description:{story:"Table draft — the Table tile starts selected.",...r.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      DvRefineDialog
    },
    setup: () => ({
      args
    }),
    template: \`<DvRefineDialog v-bind="args" />\`
  })
}`,...a.parameters?.docs?.source},description:{story:"One structure — a two-column refine panel: the form on the left, a live preview on the right. Its variants are the visualisation tiles, which re-render the preview in place.",...a.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      DvRefineDialog
    },
    setup: () => ({
      args
    }),
    template: \`<DvRefineDialog v-bind="args" />\`
  })
}`,...s.parameters?.docs?.source},description:{story:'There is no `size` prop — this is `MpDialog`\'s `md` (640px). Phase 4 replaced its own `max-width="720"` and its `16×20 / 20 / 12×16` bands with the shell; the only inset this file still owns is the gap between its two columns.',...s.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      DvRefineDialog
    },
    setup: () => ({
      args
    }),
    template: \`<DvRefineDialog v-bind="args" />\`
  })
}`,...n.parameters?.docs?.source},description:{story:"Resting, mid-refresh (the preview shows a spinner while it re-renders), and a table draft where the preview is a grid rather than a chart.",...n.parameters?.docs?.description}}};const y=["Default","TableDraft","Variants","Sizes","States"];export{t as Default,s as Sizes,n as States,r as TableDraft,a as Variants,y as __namedExportsOrder,R as default};
