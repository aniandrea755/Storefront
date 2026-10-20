import{D as n}from"./DashboardFunnelWidget-CI6GIVx8.js";import"./iframe-DH-XNaA6.js";import"./preload-helper-PPVm8Dsz.js";import"./dottedChartMath-ByfhYLhZ.js";import"./chartPalette-BfEQgAlK.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const o={kind:"funnel",stages:[{label:"Emails sent",formattedValue:"9,840",share:"100%",pct:1},{label:"Opened",formattedValue:"5,370",share:"54.6%",pct:.546},{label:"Clicked through",formattedValue:"1,150",share:"11.7%",pct:.117},{label:"Store sessions",formattedValue:"870",share:"8.8%",pct:.088},{label:"Added to cart",formattedValue:"248",share:"2.5%",pct:.025},{label:"Orders placed",formattedValue:"10",share:"0.10%",pct:.001,accent:!0}],footerStats:[{label:"Attributed revenue",value:"$4,450"},{label:"Share of store revenue",value:"21.9%"},{label:"Cart to order",value:"4.0%"}],warning:"Biggest drop-off: opened → clicked, 78.6% lost"},u={title:"Product/Dashboards/Widgets/DashboardFunnelWidget",component:n,tags:["autodocs"],parameters:{docs:{description:{component:"Campaign-to-purchase funnel from the dotted Overview v2 design: a 6-column stage header (count + share of first stage), a horizontal-gradient funnel path with perceptual (share^0.42) height scaling, footer stats, and a biggest-drop-off warning chip."}}},argTypes:{data:{control:"object",description:"`DashboardFunnelData` — `{ kind: 'funnel', stages, footerStats, warning? }`. Each stage carries `pct` (0–1, its size **as a fraction of the first stage**) which draws the funnel path; `formattedValue` and `share` are display-only. Set `accent: true` on the stage the widget should emphasise."}}},d={args:{data:o}},a={render:e=>({components:{DashboardFunnelWidget:n},setup:()=>({args:e}),template:'<DashboardFunnelWidget v-bind="args" />'})},t={render:e=>({components:{DashboardFunnelWidget:n},setup:()=>({args:e}),template:`
      <div class="d-flex ga-6 flex-wrap align-start">
        <div style="width: 280px; height: 220px"><v-card flat border rounded="lg" class="h-100 pa-5"><DashboardFunnelWidget v-bind="args" /></v-card></div>
        <div style="width: 420px; height: 260px"><v-card flat border rounded="lg" class="h-100 pa-5"><DashboardFunnelWidget v-bind="args" /></v-card></div>
        <div style="width: 620px; height: 300px"><v-card flat border rounded="lg" class="h-100 pa-5"><DashboardFunnelWidget v-bind="args" /></v-card></div>
      </div>
    `})},r={render:e=>({components:{DashboardFunnelWidget:n},setup:()=>({args:e}),template:'<DashboardFunnelWidget v-bind="args" />'})},s={render:e=>({components:{DashboardFunnelWidget:n},setup:()=>({args:e}),template:`
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: var(--mp-space-16); align-items: stretch">
        <v-card flat border rounded="lg" style="height: 280px" class="pa-5"><DashboardFunnelWidget v-bind="args" /></v-card>
        <v-card flat border rounded="lg" style="height: 280px" class="pa-5"><DashboardFunnelWidget v-bind="args" /></v-card>
      </div>
    `})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    data: DATA
  }
}`,...d.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      DashboardFunnelWidget
    },
    setup: () => ({
      args
    }),
    template: \`<DashboardFunnelWidget v-bind="args" />\`
  })
}`,...a.parameters?.docs?.source},description:{story:"One structure — ordered stages with drop-off between them. Its variants are the stage counts it is given.",...a.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      DashboardFunnelWidget
    },
    setup: () => ({
      args
    }),
    template: \`
      <div class="d-flex ga-6 flex-wrap align-start">
        <div style="width: 280px; height: 220px"><v-card flat border rounded="lg" class="h-100 pa-5"><DashboardFunnelWidget v-bind="args" /></v-card></div>
        <div style="width: 420px; height: 260px"><v-card flat border rounded="lg" class="h-100 pa-5"><DashboardFunnelWidget v-bind="args" /></v-card></div>
        <div style="width: 620px; height: 300px"><v-card flat border rounded="lg" class="h-100 pa-5"><DashboardFunnelWidget v-bind="args" /></v-card></div>
      </div>
    \`
  })
}`,...t.parameters?.docs?.source},description:{story:"There is no `size` prop — a widget fills the grid cell it is placed in. What Phase 4\n(P4-1) guarantees is that the **inset** does not change with the cell: the distance from\nthe card's border to this widget's content is `component.card.padding` at every size,\ninherited from the card standard set in Phase 3 rather than a second widget-only pair.\n\nRendered below at three cell sizes inside a real `DashboardWidgetCard` — run your eye down\nthe left edges.",...t.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      DashboardFunnelWidget
    },
    setup: () => ({
      args
    }),
    template: \`<DashboardFunnelWidget v-bind="args" />\`
  })
}`,...r.parameters?.docs?.source},description:{story:"Populated, a steep drop-off, and empty.",...r.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      DashboardFunnelWidget
    },
    setup: () => ({
      args
    }),
    template: \`
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: var(--mp-space-16); align-items: stretch">
        <v-card flat border rounded="lg" style="height: 280px" class="pa-5"><DashboardFunnelWidget v-bind="args" /></v-card>
        <v-card flat border rounded="lg" style="height: 280px" class="pa-5"><DashboardFunnelWidget v-bind="args" /></v-card>
      </div>
    \`
  })
}`,...s.parameters?.docs?.source},description:{story:`**In context.** The widget where it actually lives — inside a \`DashboardWidgetCard\`, in a
dashboard row beside its siblings. This is the composition P4-1 is judged on: the header
band, the body inset and the footer are the card's, and every widget in the family sits on
the same edge.`,...s.parameters?.docs?.description}}};const m=["Default","Variants","Sizes","States","InContextDashboardRow"];export{d as Default,s as InContextDashboardRow,t as Sizes,r as States,a as Variants,m as __namedExportsOrder,u as default};
