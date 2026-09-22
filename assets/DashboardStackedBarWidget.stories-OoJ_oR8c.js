import{D as n}from"./DashboardStackedBarWidget-C9q0IL8K.js";import"./iframe-BqHSr5b_.js";import"./preload-helper-PPVm8Dsz.js";import"./chartPalette-Bznt7cdU.js";import"./dottedChartMath-B73keMRT.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const a=(e,i,c,l)=>({label:e,segments:[{key:"online",value:i,formattedValue:`$${i.toLocaleString("en-US")}`},{key:"marketplace",value:c,formattedValue:`$${c.toLocaleString("en-US")}`},{key:"instore",value:l,formattedValue:`$${l.toLocaleString("en-US")}`}]}),p={kind:"stacked_bar",buckets:[a("Jun 29",2480,940,720),a("Jul 6",3310,1180,380),a("Jul 13",2260,720,540),a("Jul 20",3640,1420,860),a("Jul 27",2140,830,410),a("Aug 3",3980,1260,680)],legend:[{key:"online",label:"Online store",total:"$17,810",pct:63},{key:"marketplace",label:"Marketplace",total:"$6,350",pct:24},{key:"instore",label:"In store",total:"$3,590",pct:13}]},k={title:"Product/Dashboards/Widgets/DashboardStackedBarWidget",component:n,tags:["autodocs"],parameters:{docs:{description:{component:`Stacked bar chart from the Overview v2 design, after shadcn's "Bar Chart - Stacked + Legend": rounded two-segment stacks in the trend blues (light at the bottom, dark on top) with a centered swatch legend. Native title tooltips carry the per-segment values.`}}},argTypes:{data:{control:"object",description:"`DashboardStackedBarData` — `{ kind: 'stacked_bar', buckets, legend, variant? }`. `variant` is `columns` (default — one vertical stack per bucket) or `bar` (a single full-width horizontal bar with the legend above it). **Legend order must match segment order**, bottom of the stack first."}}},o={args:{data:p}},t={render:e=>({components:{DashboardStackedBarWidget:n},setup:()=>({args:e}),template:'<DashboardStackedBarWidget v-bind="args" />'})},r={render:e=>({components:{DashboardStackedBarWidget:n},setup:()=>({args:e}),template:`
      <div class="d-flex ga-6 flex-wrap align-start">
        <div style="width: 280px; height: 220px"><v-card flat border rounded="lg" class="h-100 pa-5"><DashboardStackedBarWidget v-bind="args" /></v-card></div>
        <div style="width: 420px; height: 260px"><v-card flat border rounded="lg" class="h-100 pa-5"><DashboardStackedBarWidget v-bind="args" /></v-card></div>
        <div style="width: 620px; height: 300px"><v-card flat border rounded="lg" class="h-100 pa-5"><DashboardStackedBarWidget v-bind="args" /></v-card></div>
      </div>
    `})},s={render:e=>({components:{DashboardStackedBarWidget:n},setup:()=>({args:e}),template:'<DashboardStackedBarWidget v-bind="args" />'})},d={render:e=>({components:{DashboardStackedBarWidget:n},setup:()=>({args:e}),template:`
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: var(--mp-space-16); align-items: stretch">
        <v-card flat border rounded="lg" style="height: 280px" class="pa-5"><DashboardStackedBarWidget v-bind="args" /></v-card>
        <v-card flat border rounded="lg" style="height: 280px" class="pa-5"><DashboardStackedBarWidget v-bind="args" /></v-card>
      </div>
    `})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    data: WEEKLY_CHANNELS
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      DashboardStackedBarWidget
    },
    setup: () => ({
      args
    }),
    template: \`<DashboardStackedBarWidget v-bind="args" />\`
  })
}`,...t.parameters?.docs?.source},description:{story:"One structure — stacked series per category. Its variants are the series counts.",...t.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      DashboardStackedBarWidget
    },
    setup: () => ({
      args
    }),
    template: \`
      <div class="d-flex ga-6 flex-wrap align-start">
        <div style="width: 280px; height: 220px"><v-card flat border rounded="lg" class="h-100 pa-5"><DashboardStackedBarWidget v-bind="args" /></v-card></div>
        <div style="width: 420px; height: 260px"><v-card flat border rounded="lg" class="h-100 pa-5"><DashboardStackedBarWidget v-bind="args" /></v-card></div>
        <div style="width: 620px; height: 300px"><v-card flat border rounded="lg" class="h-100 pa-5"><DashboardStackedBarWidget v-bind="args" /></v-card></div>
      </div>
    \`
  })
}`,...r.parameters?.docs?.source},description:{story:"There is no `size` prop — a widget fills the grid cell it is placed in. What Phase 4\n(P4-1) guarantees is that the **inset** does not change with the cell: the distance from\nthe card's border to this widget's content is `component.card.padding` at every size,\ninherited from the card standard set in Phase 3 rather than a second widget-only pair.\n\nRendered below at three cell sizes inside a real `DashboardWidgetCard` — run your eye down\nthe left edges.",...r.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      DashboardStackedBarWidget
    },
    setup: () => ({
      args
    }),
    template: \`<DashboardStackedBarWidget v-bind="args" />\`
  })
}`,...s.parameters?.docs?.source},description:{story:"Populated, a single series, and empty.",...s.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      DashboardStackedBarWidget
    },
    setup: () => ({
      args
    }),
    template: \`
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: var(--mp-space-16); align-items: stretch">
        <v-card flat border rounded="lg" style="height: 280px" class="pa-5"><DashboardStackedBarWidget v-bind="args" /></v-card>
        <v-card flat border rounded="lg" style="height: 280px" class="pa-5"><DashboardStackedBarWidget v-bind="args" /></v-card>
      </div>
    \`
  })
}`,...d.parameters?.docs?.source},description:{story:`**In context.** The widget where it actually lives — inside a \`DashboardWidgetCard\`, in a
dashboard row beside its siblings. This is the composition P4-1 is judged on: the header
band, the body inset and the footer are the card's, and every widget in the family sits on
the same edge.`,...d.parameters?.docs?.description}}};const S=["WeeklyChannels","Variants","Sizes","States","InContextDashboardRow"];export{d as InContextDashboardRow,r as Sizes,s as States,t as Variants,o as WeeklyChannels,S as __namedExportsOrder,k as default};
