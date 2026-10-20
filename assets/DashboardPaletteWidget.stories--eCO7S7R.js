import{D as d}from"./DashboardPaletteWidget-C07GVCFs.js";import{T as i,b as o,S as c,c as l,D as p,F as h}from"./dottedChartMath-ByfhYLhZ.js";import"./iframe-DH-XNaA6.js";import"./preload-helper-PPVm8Dsz.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./chartPalette-BfEQgAlK.js";const g={kind:"palette",groups:[{title:"Trend lines",caption:"Store performance — current / previous",shades:[i,o]},{title:"Stacked bars",caption:"Revenue by channel",shades:[...c]},{title:"Ring & donut ramp",caption:"Revenue attribution",shades:[...l]},{title:"Pie ramp",caption:"Orders by sales channel",shades:[...p]},{title:"Funnel gradient",caption:"Campaign to purchase",shades:h.map(e=>e.color)}],footnote:"20 shades across 5 chart families"},P={title:"Product/Dashboards/Widgets/DashboardPaletteWidget",component:d,tags:["autodocs"],parameters:{docs:{description:{component:"Palette-review widget from the Overview v2 design: one segmented bar per chart family showing every shade in ramp order with hex labels, so stakeholders can review the dashboard chart colors in one card. The dashboard instance reads the live ramps from dottedChartMath, so it never drifts from what the charts actually render."}}},argTypes:{data:{control:"object",description:"`DashboardPaletteData` — `{ kind: 'palette', groups, footnote? }`. Each group is a named ramp: `title`, a `caption` naming which charts consume it, and `shades` — ordered hex values rendered as a segmented bar with hex labels. This widget documents the chart palette rather than plotting data."}}},n={args:{data:g}},a={render:e=>({components:{DashboardPaletteWidget:d},setup:()=>({args:e}),template:'<DashboardPaletteWidget v-bind="args" />'})},t={render:e=>({components:{DashboardPaletteWidget:d},setup:()=>({args:e}),template:`
      <div class="d-flex ga-6 flex-wrap align-start">
        <div style="width: 280px; height: 220px"><v-card flat border rounded="lg" class="h-100 pa-5"><DashboardPaletteWidget v-bind="args" /></v-card></div>
        <div style="width: 420px; height: 260px"><v-card flat border rounded="lg" class="h-100 pa-5"><DashboardPaletteWidget v-bind="args" /></v-card></div>
        <div style="width: 620px; height: 300px"><v-card flat border rounded="lg" class="h-100 pa-5"><DashboardPaletteWidget v-bind="args" /></v-card></div>
      </div>
    `})},r={render:e=>({components:{DashboardPaletteWidget:d},setup:()=>({args:e}),template:'<DashboardPaletteWidget v-bind="args" />'})},s={render:e=>({components:{DashboardPaletteWidget:d},setup:()=>({args:e}),template:`
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: var(--mp-space-16); align-items: stretch">
        <v-card flat border rounded="lg" style="height: 280px" class="pa-5"><DashboardPaletteWidget v-bind="args" /></v-card>
        <v-card flat border rounded="lg" style="height: 280px" class="pa-5"><DashboardPaletteWidget v-bind="args" /></v-card>
      </div>
    `})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    data: LIVE_PALETTE
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      DashboardPaletteWidget
    },
    setup: () => ({
      args
    }),
    template: \`<DashboardPaletteWidget v-bind="args" />\`
  })
}`,...a.parameters?.docs?.source},description:{story:"One structure — the chart palette specimen used to check a theme.",...a.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      DashboardPaletteWidget
    },
    setup: () => ({
      args
    }),
    template: \`
      <div class="d-flex ga-6 flex-wrap align-start">
        <div style="width: 280px; height: 220px"><v-card flat border rounded="lg" class="h-100 pa-5"><DashboardPaletteWidget v-bind="args" /></v-card></div>
        <div style="width: 420px; height: 260px"><v-card flat border rounded="lg" class="h-100 pa-5"><DashboardPaletteWidget v-bind="args" /></v-card></div>
        <div style="width: 620px; height: 300px"><v-card flat border rounded="lg" class="h-100 pa-5"><DashboardPaletteWidget v-bind="args" /></v-card></div>
      </div>
    \`
  })
}`,...t.parameters?.docs?.source},description:{story:"There is no `size` prop — a widget fills the grid cell it is placed in. What Phase 4\n(P4-1) guarantees is that the **inset** does not change with the cell: the distance from\nthe card's border to this widget's content is `component.card.padding` at every size,\ninherited from the card standard set in Phase 3 rather than a second widget-only pair.\n\nRendered below at three cell sizes inside a real `DashboardWidgetCard` — run your eye down\nthe left edges.",...t.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      DashboardPaletteWidget
    },
    setup: () => ({
      args
    }),
    template: \`<DashboardPaletteWidget v-bind="args" />\`
  })
}`,...r.parameters?.docs?.source},description:{story:"Each palette in the theme.",...r.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      DashboardPaletteWidget
    },
    setup: () => ({
      args
    }),
    template: \`
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: var(--mp-space-16); align-items: stretch">
        <v-card flat border rounded="lg" style="height: 280px" class="pa-5"><DashboardPaletteWidget v-bind="args" /></v-card>
        <v-card flat border rounded="lg" style="height: 280px" class="pa-5"><DashboardPaletteWidget v-bind="args" /></v-card>
      </div>
    \`
  })
}`,...s.parameters?.docs?.source},description:{story:`**In context.** The widget where it actually lives — inside a \`DashboardWidgetCard\`, in a
dashboard row beside its siblings. This is the composition P4-1 is judged on: the header
band, the body inset and the footer are the card's, and every widget in the family sits on
the same edge.`,...s.parameters?.docs?.description}}};const x=["LivePalette","Variants","Sizes","States","InContextDashboardRow"];export{s as InContextDashboardRow,n as LivePalette,t as Sizes,r as States,a as Variants,x as __namedExportsOrder,P as default};
