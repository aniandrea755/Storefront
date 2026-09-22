import{D as d}from"./DashboardDonutWidget-Jjt4Tzp7.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-BqHSr5b_.js";import"./DtLegendList-Bo3rUgjb.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./chartPalette-Bznt7cdU.js";const i={kind:"donut",variant:"ring",segments:[{label:"Direct",value:6300,formattedValue:"$6,300 · 31%"},{label:"Email",value:4450,formattedValue:"$4,450 · 21.9%"},{label:"Paid search",value:3450,formattedValue:"$3,450 · 17%"},{label:"Social",value:2440,formattedValue:"$2,440 · 12%"},{label:"Organic",value:2040,formattedValue:"$2,040 · 10%"},{label:"Referral",value:1650,formattedValue:"$1,650 · 8.1%"}],centerValue:"$20,330",centerCaption:"attributed",footerStats:[{label:"Email open rate",value:"54.6%"},{label:"Total contacts",value:"12,604"}]},l={kind:"donut",variant:"pie",segments:[{label:"Online store",value:25,formattedValue:"25"},{label:"POS retail",value:12,formattedValue:"12"},{label:"Marketplace",value:7,formattedValue:"7"},{label:"Social shop",value:3,formattedValue:"3"}],footerStats:[{label:"Fastest growing",value:"Marketplace"},{label:"Average order value",value:"$433"}]},v={title:"Product/Dashboards/Widgets/DashboardDonutWidget",component:d,tags:["autodocs"],parameters:{docs:{description:{component:"Donut widget from the Overview v2 design. The ring variant is a stroked-circle donut with a centered figure and legend below; the pie variant is a solid wedge pie with the legend beside it. Segment colors come from the chart blues palette by index."}}},argTypes:{data:{control:"object",description:"`DashboardDonutData` — `{ kind: 'donut', variant, segments, centerValue?, centerCaption?, footerStats? }`. `variant` picks `ring` (hollow, with a centre readout) or `pie` (solid). Segment colours are assigned **by index** from the dotted blues palette, so segment order is a visual decision, not just a data one."}}},n={args:{data:i}},o={args:{data:l}},a={render:e=>({components:{DashboardDonutWidget:d},setup:()=>({args:e}),template:'<DashboardDonutWidget v-bind="args" />'})},t={render:e=>({components:{DashboardDonutWidget:d},setup:()=>({args:e}),template:`
      <div class="d-flex ga-6 flex-wrap align-start">
        <div style="width: 280px; height: 220px"><v-card flat border rounded="lg" class="h-100 pa-5"><DashboardDonutWidget v-bind="args" /></v-card></div>
        <div style="width: 420px; height: 260px"><v-card flat border rounded="lg" class="h-100 pa-5"><DashboardDonutWidget v-bind="args" /></v-card></div>
        <div style="width: 620px; height: 300px"><v-card flat border rounded="lg" class="h-100 pa-5"><DashboardDonutWidget v-bind="args" /></v-card></div>
      </div>
    `})},r={render:e=>({components:{DashboardDonutWidget:d},setup:()=>({args:e}),template:'<DashboardDonutWidget v-bind="args" />'})},s={render:e=>({components:{DashboardDonutWidget:d},setup:()=>({args:e}),template:`
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: var(--mp-space-16); align-items: stretch">
        <v-card flat border rounded="lg" style="height: 280px" class="pa-5"><DashboardDonutWidget v-bind="args" /></v-card>
        <v-card flat border rounded="lg" style="height: 280px" class="pa-5"><DashboardDonutWidget v-bind="args" /></v-card>
      </div>
    `})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    data: RING
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    data: PIE
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      DashboardDonutWidget
    },
    setup: () => ({
      args
    }),
    template: \`<DashboardDonutWidget v-bind="args" />\`
  })
}`,...a.parameters?.docs?.source},description:{story:"One structure — a donut with a legend. Its variants are the legend positions the container query picks between as the card narrows.",...a.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      DashboardDonutWidget
    },
    setup: () => ({
      args
    }),
    template: \`
      <div class="d-flex ga-6 flex-wrap align-start">
        <div style="width: 280px; height: 220px"><v-card flat border rounded="lg" class="h-100 pa-5"><DashboardDonutWidget v-bind="args" /></v-card></div>
        <div style="width: 420px; height: 260px"><v-card flat border rounded="lg" class="h-100 pa-5"><DashboardDonutWidget v-bind="args" /></v-card></div>
        <div style="width: 620px; height: 300px"><v-card flat border rounded="lg" class="h-100 pa-5"><DashboardDonutWidget v-bind="args" /></v-card></div>
      </div>
    \`
  })
}`,...t.parameters?.docs?.source},description:{story:"There is no `size` prop — a widget fills the grid cell it is placed in. What Phase 4\n(P4-1) guarantees is that the **inset** does not change with the cell: the distance from\nthe card's border to this widget's content is `component.card.padding` at every size,\ninherited from the card standard set in Phase 3 rather than a second widget-only pair.\n\nRendered below at three cell sizes inside a real `DashboardWidgetCard` — run your eye down\nthe left edges.",...t.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      DashboardDonutWidget
    },
    setup: () => ({
      args
    }),
    template: \`<DashboardDonutWidget v-bind="args" />\`
  })
}`,...r.parameters?.docs?.source},description:{story:"Populated, one dominant slice, and empty.",...r.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      DashboardDonutWidget
    },
    setup: () => ({
      args
    }),
    template: \`
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: var(--mp-space-16); align-items: stretch">
        <v-card flat border rounded="lg" style="height: 280px" class="pa-5"><DashboardDonutWidget v-bind="args" /></v-card>
        <v-card flat border rounded="lg" style="height: 280px" class="pa-5"><DashboardDonutWidget v-bind="args" /></v-card>
      </div>
    \`
  })
}`,...s.parameters?.docs?.source},description:{story:`**In context.** The widget where it actually lives — inside a \`DashboardWidgetCard\`, in a
dashboard row beside its siblings. This is the composition P4-1 is judged on: the header
band, the body inset and the footer are the card's, and every widget in the family sits on
the same edge.`,...s.parameters?.docs?.description}}};const b=["Ring","Pie","Variants","Sizes","States","InContextDashboardRow"];export{s as InContextDashboardRow,o as Pie,n as Ring,t as Sizes,r as States,a as Variants,b as __namedExportsOrder,v as default};
