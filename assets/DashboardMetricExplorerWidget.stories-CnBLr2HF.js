import{D as d}from"./DashboardMetricExplorerWidget-C7cwNO37.js";import{s as g}from"./decorators-DmUOp7kZ.js";import"./iframe-BqHSr5b_.js";import"./preload-helper-PPVm8Dsz.js";import"./dottedChartMath-B73keMRT.js";import"./chartPalette-Bznt7cdU.js";import"./formatNumber-DWsT9dxl.js";import"./formatCurrency-BbaxPn65.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const o=[420,510,380,640,720,560,480,900,760,540,610,830,470,520,690,1150,880,620,540,700,460,590,810,760,520,640,980,720,830,1100],i=[390,420,350,500,560,470,410,620,580,460,500,610,400,430,520,700,640,520,470,560,410,480,590,560,450,510,660,540,600,700],h=o.map((e,p)=>new Date(2026,6,3+p).toLocaleDateString("en-US",{month:"short",day:"numeric"})),c={kind:"metric_explorer",vsLabel:"vs prev 30 days",vsLabelLong:"compared with the previous 30 days",xLabels:["Jul 3","Jul 10","Jul 17","Jul 24","Aug 1"],pointLabels:h,metrics:[{key:"revenue",label:"Revenue",sub:"Daily net revenue",unit:"currency",value:20330,formattedValue:"$20,330",delta:"+30.2%",deltaPositive:!0,cur:o,prev:i,zeroBased:!0},{key:"orders",label:"Orders",sub:"Orders placed per day",unit:"count",value:47,formattedValue:"47",delta:"+14.6%",deltaPositive:!0,cur:o.map(e=>e/430),prev:i.map(e=>e/380),zeroBased:!0},{key:"aov",label:"Average order value",sub:"Average order value per day",unit:"currency",value:433,formattedValue:"$433",delta:"+13.6%",deltaPositive:!0,cur:o.map(e=>300+e/4),prev:i.map(e=>280+e/4),zeroBased:!1},{key:"conv",label:"Conversion rate",sub:"Visit-to-order conversion",unit:"percent",value:2.6,formattedValue:"2.6%",delta:"+0.4 pp",deltaPositive:!0,cur:o.map(e=>2+e/900),prev:i.map(e=>1.8+e/900),zeroBased:!1}]},W={title:"Product/Dashboards/Widgets/DashboardMetricExplorerWidget",component:d,tags:["autodocs"],parameters:{docs:{description:{component:"Composite metric explorer from the dotted Overview v2 design: a joined 4-cell KPI selector strip (Revenue / Orders / AOV / Conversion) driving an embedded shadcn-style gradient area chart (0.8 → 0.1 vertical ramp, solid stroke, horizontal-only grid, no y-axis) with a hover tooltip and active dots. The Compare toggle overlays the previous period as a second, paler gradient area. Metric selection is widget-local; the data window follows the dashboard filters."}}},decorators:[g({height:"560px"})],argTypes:{data:{control:"object",description:"`DashboardMetricExplorerData` — `{ kind: 'metric_explorer', vsLabel, vsLabelLong, xLabels, pointLabels, metrics }`. `xLabels` must be exactly the 5 evenly spaced axis ticks; `pointLabels` is one label per data point for the hover tooltip. Each metric supplies `cur` and `prev` series **of equal length**, plus `zeroBased` to say whether its y-axis starts at zero."}}},n={args:{data:c}},l={args:{data:{...c,vsLabel:"",vsLabelLong:"no comparison",metrics:c.metrics.map(e=>({...e,delta:"",prev:[]}))}}},r={render:e=>({components:{DashboardMetricExplorerWidget:d},setup:()=>({args:e}),template:'<DashboardMetricExplorerWidget v-bind="args" />'})},a={render:e=>({components:{DashboardMetricExplorerWidget:d},setup:()=>({args:e}),template:`
      <div class="d-flex ga-6 flex-wrap align-start">
        <div style="width: 280px; height: 220px"><v-card flat border rounded="lg" class="h-100 pa-5"><DashboardMetricExplorerWidget v-bind="args" /></v-card></div>
        <div style="width: 420px; height: 260px"><v-card flat border rounded="lg" class="h-100 pa-5"><DashboardMetricExplorerWidget v-bind="args" /></v-card></div>
        <div style="width: 620px; height: 300px"><v-card flat border rounded="lg" class="h-100 pa-5"><DashboardMetricExplorerWidget v-bind="args" /></v-card></div>
      </div>
    `})},t={render:e=>({components:{DashboardMetricExplorerWidget:d},setup:()=>({args:e}),template:'<DashboardMetricExplorerWidget v-bind="args" />'})},s={render:e=>({components:{DashboardMetricExplorerWidget:d},setup:()=>({args:e}),template:`
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: var(--mp-space-16); align-items: stretch">
        <v-card flat border rounded="lg" style="height: 280px" class="pa-5"><DashboardMetricExplorerWidget v-bind="args" /></v-card>
        <v-card flat border rounded="lg" style="height: 280px" class="pa-5"><DashboardMetricExplorerWidget v-bind="args" /></v-card>
      </div>
    `})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    data: DATA
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    data: {
      ...DATA,
      vsLabel: '',
      vsLabelLong: 'no comparison',
      metrics: DATA.metrics.map(m => ({
        ...m,
        delta: '',
        prev: []
      }))
    }
  }
}`,...l.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      DashboardMetricExplorerWidget
    },
    setup: () => ({
      args
    }),
    template: \`<DashboardMetricExplorerWidget v-bind="args" />\`
  })
}`,...r.parameters?.docs?.source},description:{story:"One structure — a row of selectable metric cells above a chart of the selected one. Its variants are the metric sets it is given.",...r.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      DashboardMetricExplorerWidget
    },
    setup: () => ({
      args
    }),
    template: \`
      <div class="d-flex ga-6 flex-wrap align-start">
        <div style="width: 280px; height: 220px"><v-card flat border rounded="lg" class="h-100 pa-5"><DashboardMetricExplorerWidget v-bind="args" /></v-card></div>
        <div style="width: 420px; height: 260px"><v-card flat border rounded="lg" class="h-100 pa-5"><DashboardMetricExplorerWidget v-bind="args" /></v-card></div>
        <div style="width: 620px; height: 300px"><v-card flat border rounded="lg" class="h-100 pa-5"><DashboardMetricExplorerWidget v-bind="args" /></v-card></div>
      </div>
    \`
  })
}`,...a.parameters?.docs?.source},description:{story:"There is no `size` prop — a widget fills the grid cell it is placed in. This is one of the\nthree **bespoke-header** widgets: `DashboardWidgetCard` zeroes its body inset for these, so\nthe widget draws its own edges. Phase 4 (P4-1) made it state that inset as\n`component.card.padding` — the role token, not the `20` primitive — so a change to the\nstandard moves it with the rest of the family.\n\nRendered below at three cell sizes; the left edges should match the standard widgets'.",...a.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      DashboardMetricExplorerWidget
    },
    setup: () => ({
      args
    }),
    template: \`<DashboardMetricExplorerWidget v-bind="args" />\`
  })
}`,...t.parameters?.docs?.source},description:{story:"Populated, one cell selected, and the narrow layout.",...t.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      DashboardMetricExplorerWidget
    },
    setup: () => ({
      args
    }),
    template: \`
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: var(--mp-space-16); align-items: stretch">
        <v-card flat border rounded="lg" style="height: 280px" class="pa-5"><DashboardMetricExplorerWidget v-bind="args" /></v-card>
        <v-card flat border rounded="lg" style="height: 280px" class="pa-5"><DashboardMetricExplorerWidget v-bind="args" /></v-card>
      </div>
    \`
  })
}`,...s.parameters?.docs?.source},description:{story:`**In context.** The widget where it actually lives — inside a \`DashboardWidgetCard\`, in a
dashboard row beside its siblings. This is the composition P4-1 is judged on: the header
band, the body inset and the footer are the card's, and every widget in the family sits on
the same edge.`,...s.parameters?.docs?.description}}};const M=["Default","NoComparison","Variants","Sizes","States","InContextDashboardRow"];export{n as Default,s as InContextDashboardRow,l as NoComparison,a as Sizes,t as States,r as Variants,M as __namedExportsOrder,W as default};
