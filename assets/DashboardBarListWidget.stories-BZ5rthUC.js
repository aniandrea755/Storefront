import{D as d}from"./DashboardBarListWidget-DoPvfrIA.js";import"./iframe-BqHSr5b_.js";import"./preload-helper-PPVm8Dsz.js";import"./DtDottedBar-DA114-i3.js";import"./dottedChartMath-B73keMRT.js";import"./chartPalette-Bznt7cdU.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const o={kind:"bar_list",rows:[{label:"Trail Runner XT",value:"$6,480",pct:100,meta:"54 units · 4 left in stock"},{label:"Alpine Shell Jacket",value:"$4,180",pct:65,meta:"19 units · 96 in stock"},{label:"Canvas Tote",value:"$2,240",pct:35,meta:"56 units · 7 left in stock"},{label:"Merino crew socks, 3-pack",value:"$1,104",pct:17,meta:"46 units · 210 in stock"}]},l={kind:"bar_list",headline:{value:"$620",delta:"+9.4%",deltaPositive:!0},rows:[{label:"Melbourne CBD",value:"$236",pct:38},{label:"Chadstone",value:"$180",pct:29},{label:"Click & collect",value:"$120",pct:19},{label:"Brisbane",value:"$84",pct:14}]},u={title:"Product/Dashboards/Widgets/DashboardBarListWidget",component:d,tags:["autodocs"],parameters:{docs:{description:{component:"Progress-bar list from the Overview v2 design: label/value rows over gradient pills, with optional per-row meta and an optional big-number headline (used by Retail today)."}}},argTypes:{data:{control:"object",description:"`DashboardBarListData` — `{ kind: 'bar_list', headline?, rows }`. Each row is `{ label, value, pct, meta? }` where `pct` (0–100) drives the bar width. The optional `headline` renders a value + delta above the list."}}},i={args:{data:o}},n={args:{data:l}},a={render:e=>({components:{DashboardBarListWidget:d},setup:()=>({args:e}),template:'<DashboardBarListWidget v-bind="args" />'})},r={render:e=>({components:{DashboardBarListWidget:d},setup:()=>({args:e}),template:`
      <div class="d-flex ga-6 flex-wrap align-start">
        <div style="width: 280px; height: 220px"><v-card flat border rounded="lg" class="h-100 pa-5"><DashboardBarListWidget v-bind="args" /></v-card></div>
        <div style="width: 420px; height: 260px"><v-card flat border rounded="lg" class="h-100 pa-5"><DashboardBarListWidget v-bind="args" /></v-card></div>
        <div style="width: 620px; height: 300px"><v-card flat border rounded="lg" class="h-100 pa-5"><DashboardBarListWidget v-bind="args" /></v-card></div>
      </div>
    `})},t={render:e=>({components:{DashboardBarListWidget:d},setup:()=>({args:e}),template:'<DashboardBarListWidget v-bind="args" />'})},s={render:e=>({components:{DashboardBarListWidget:d},setup:()=>({args:e}),template:`
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: var(--mp-space-16); align-items: stretch">
        <v-card flat border rounded="lg" style="height: 280px" class="pa-5"><DashboardBarListWidget v-bind="args" /></v-card>
        <v-card flat border rounded="lg" style="height: 280px" class="pa-5"><DashboardBarListWidget v-bind="args" /></v-card>
      </div>
    `})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    data: BEST_SELLERS
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    data: RETAIL
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      DashboardBarListWidget
    },
    setup: () => ({
      args
    }),
    template: \`<DashboardBarListWidget v-bind="args" />\`
  })
}`,...a.parameters?.docs?.source},description:{story:"One structure — a ranked list with an inline meter per row. Its variants are the metrics it ranks by.",...a.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      DashboardBarListWidget
    },
    setup: () => ({
      args
    }),
    template: \`
      <div class="d-flex ga-6 flex-wrap align-start">
        <div style="width: 280px; height: 220px"><v-card flat border rounded="lg" class="h-100 pa-5"><DashboardBarListWidget v-bind="args" /></v-card></div>
        <div style="width: 420px; height: 260px"><v-card flat border rounded="lg" class="h-100 pa-5"><DashboardBarListWidget v-bind="args" /></v-card></div>
        <div style="width: 620px; height: 300px"><v-card flat border rounded="lg" class="h-100 pa-5"><DashboardBarListWidget v-bind="args" /></v-card></div>
      </div>
    \`
  })
}`,...r.parameters?.docs?.source},description:{story:"There is no `size` prop — a widget fills the grid cell it is placed in. What Phase 4\n(P4-1) guarantees is that the **inset** does not change with the cell: the distance from\nthe card's border to this widget's content is `component.card.padding` at every size,\ninherited from the card standard set in Phase 3 rather than a second widget-only pair.\n\nRendered below at three cell sizes inside a real `DashboardWidgetCard` — run your eye down\nthe left edges.",...r.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      DashboardBarListWidget
    },
    setup: () => ({
      args
    }),
    template: \`<DashboardBarListWidget v-bind="args" />\`
  })
}`,...t.parameters?.docs?.source},description:{story:"Populated, a single dominant row, and empty.",...t.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      DashboardBarListWidget
    },
    setup: () => ({
      args
    }),
    template: \`
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: var(--mp-space-16); align-items: stretch">
        <v-card flat border rounded="lg" style="height: 280px" class="pa-5"><DashboardBarListWidget v-bind="args" /></v-card>
        <v-card flat border rounded="lg" style="height: 280px" class="pa-5"><DashboardBarListWidget v-bind="args" /></v-card>
      </div>
    \`
  })
}`,...s.parameters?.docs?.source},description:{story:`**In context.** The widget where it actually lives — inside a \`DashboardWidgetCard\`, in a
dashboard row beside its siblings. This is the composition P4-1 is judged on: the header
band, the body inset and the footer are the card's, and every widget in the family sits on
the same edge.`,...s.parameters?.docs?.description}}};const w=["BestSellers","WithHeadline","Variants","Sizes","States","InContextDashboardRow"];export{i as BestSellers,s as InContextDashboardRow,r as Sizes,t as States,a as Variants,n as WithHeadline,w as __namedExportsOrder,u as default};
