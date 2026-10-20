import{D as d}from"./DashboardHeatmapWidget-Cl2u9lvs.js";import"./iframe-DH-XNaA6.js";import"./preload-helper-PPVm8Dsz.js";import"./chartPalette-BfEQgAlK.js";import"./formatNumber-DWsT9dxl.js";import"./formatCurrency-BbaxPn65.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const l=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],p=["6a","9a","12p","3p","6p","9p"],c={kind:"heatmap",unit:"count",rows:l,columns:p,cells:[[120,480,610,540,890,340],[140,520,660,580,940,360],[155,545,700,615,1010,385],[148,530,685,600,980,372],[130,470,590,505,820,300],[60,210,290,260,410,180],[45,180,240,215,350,150]],rowAxisLabel:"Day of week",columnAxisLabel:"Send hour"},w={title:"Product/Dashboards/Widgets/DashboardHeatmapWidget",component:d,tags:["autodocs"],parameters:{docs:{description:{component:`
### Overview
\`DashboardHeatmapWidget\` renders a rows × columns matrix where cell colour carries the value.
It's built in CSS grid rather than ApexCharts' heatmap because that renderer has no cell-gap
control and no per-cell labels. The ramp anchors on the active chart theme's lead series colour
and uses perceptual easing (\`ratio ^ 0.6\`) so a single outlier doesn't flatten the matrix.

### Use when
- Comparing one metric across two categorical dimensions (day × hour, channel × segment).

### Don't use when
- Either dimension is continuous, or there's only one dimension — use a bar or line widget.

### Behaviour notes
- **Zero cells** render as a faint wash with no printed "0" — the reference matrix drowned in zeroes.
- **Narrow cards** (\`@container (max-width: 420px)\`) drop the in-cell numbers; colour still carries
  the read and the hover readout gives the exact figure.
- \`total\` overrides the share denominator in the hover readout; it defaults to the matrix sum.

### A11y
- **Provides:** the grid is \`role="img"\` with a summary \`aria-label\`; every cell is a focusable
  \`<button>\` labelled \`"{row}, {column}: {value}"\`, and focus drives the same readout as hover.
- **Consumer:** give the containing widget card an accessible name describing the metric.
        `}}},argTypes:{data:{control:"object",description:"DashboardHeatmapData — rows, columns, cells[rowIndex][columnIndex], unit, optional total and axis labels."}}},i={args:{data:c}},a={args:{data:{...c,total:2e4,rowAxisLabel:void 0,columnAxisLabel:void 0}}},r={args:{data:{kind:"heatmap",unit:"currency",rows:["Online store","POS","Marketplace","Wholesale"],columns:["Q1","Q2","Q3","Q4"],cells:[[0,0,1200,48200],[0,340,0,2100],[0,0,0,890],[0,0,0,0]],rowAxisLabel:"Channel",columnAxisLabel:"Quarter"}}},t={render:e=>({components:{DashboardHeatmapWidget:d},setup:()=>({args:e}),template:'<DashboardHeatmapWidget v-bind="args" />'})},s={render:e=>({components:{DashboardHeatmapWidget:d},setup:()=>({args:e}),template:`
      <div class="d-flex ga-6 flex-wrap align-start">
        <div style="width: 280px; height: 220px"><v-card flat border rounded="lg" class="h-100 pa-5"><DashboardHeatmapWidget v-bind="args" /></v-card></div>
        <div style="width: 420px; height: 260px"><v-card flat border rounded="lg" class="h-100 pa-5"><DashboardHeatmapWidget v-bind="args" /></v-card></div>
        <div style="width: 620px; height: 300px"><v-card flat border rounded="lg" class="h-100 pa-5"><DashboardHeatmapWidget v-bind="args" /></v-card></div>
      </div>
    `})},n={render:e=>({components:{DashboardHeatmapWidget:d},setup:()=>({args:e}),template:'<DashboardHeatmapWidget v-bind="args" />'})},o={render:e=>({components:{DashboardHeatmapWidget:d},setup:()=>({args:e}),template:`
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: var(--mp-space-16); align-items: stretch">
        <v-card flat border rounded="lg" style="height: 280px" class="pa-5"><DashboardHeatmapWidget v-bind="args" /></v-card>
        <v-card flat border rounded="lg" style="height: 280px" class="pa-5"><DashboardHeatmapWidget v-bind="args" /></v-card>
      </div>
    `})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    data: DATA
  }
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    data: {
      ...DATA,
      total: 20000,
      rowAxisLabel: undefined,
      columnAxisLabel: undefined
    }
  }
}`,...a.parameters?.docs?.source},description:{story:"Axis labels omitted and an explicit `total` — the share line divides by that instead of the matrix sum.",...a.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    data: {
      kind: 'heatmap',
      unit: 'currency',
      rows: ['Online store', 'POS', 'Marketplace', 'Wholesale'],
      columns: ['Q1', 'Q2', 'Q3', 'Q4'],
      cells: [[0, 0, 1200, 48200], [0, 340, 0, 2100], [0, 0, 0, 890], [0, 0, 0, 0]],
      rowAxisLabel: 'Channel',
      columnAxisLabel: 'Quarter'
    }
  }
}`,...r.parameters?.docs?.source},description:{story:"Currency unit with a sparse matrix — most cells zero, one hot cell setting the ramp ceiling.",...r.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      DashboardHeatmapWidget
    },
    setup: () => ({
      args
    }),
    template: \`<DashboardHeatmapWidget v-bind="args" />\`
  })
}`,...t.parameters?.docs?.source},description:{story:"One structure — a day/hour grid. Its variants are the scales it colours against.",...t.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      DashboardHeatmapWidget
    },
    setup: () => ({
      args
    }),
    template: \`
      <div class="d-flex ga-6 flex-wrap align-start">
        <div style="width: 280px; height: 220px"><v-card flat border rounded="lg" class="h-100 pa-5"><DashboardHeatmapWidget v-bind="args" /></v-card></div>
        <div style="width: 420px; height: 260px"><v-card flat border rounded="lg" class="h-100 pa-5"><DashboardHeatmapWidget v-bind="args" /></v-card></div>
        <div style="width: 620px; height: 300px"><v-card flat border rounded="lg" class="h-100 pa-5"><DashboardHeatmapWidget v-bind="args" /></v-card></div>
      </div>
    \`
  })
}`,...s.parameters?.docs?.source},description:{story:"There is no `size` prop — a widget fills the grid cell it is placed in. What Phase 4\n(P4-1) guarantees is that the **inset** does not change with the cell: the distance from\nthe card's border to this widget's content is `component.card.padding` at every size,\ninherited from the card standard set in Phase 3 rather than a second widget-only pair.\n\nRendered below at three cell sizes inside a real `DashboardWidgetCard` — run your eye down\nthe left edges.",...s.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      DashboardHeatmapWidget
    },
    setup: () => ({
      args
    }),
    template: \`<DashboardHeatmapWidget v-bind="args" />\`
  })
}`,...n.parameters?.docs?.source},description:{story:"Populated, sparse, and empty.",...n.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      DashboardHeatmapWidget
    },
    setup: () => ({
      args
    }),
    template: \`
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: var(--mp-space-16); align-items: stretch">
        <v-card flat border rounded="lg" style="height: 280px" class="pa-5"><DashboardHeatmapWidget v-bind="args" /></v-card>
        <v-card flat border rounded="lg" style="height: 280px" class="pa-5"><DashboardHeatmapWidget v-bind="args" /></v-card>
      </div>
    \`
  })
}`,...o.parameters?.docs?.source},description:{story:`**In context.** The widget where it actually lives — inside a \`DashboardWidgetCard\`, in a
dashboard row beside its siblings. This is the composition P4-1 is judged on: the header
band, the body inset and the footer are the card's, and every widget in the family sits on
the same edge.`,...o.parameters?.docs?.description}}};const y=["Default","ExplicitTotal","SparseMatrix","Variants","Sizes","States","InContextDashboardRow"];export{i as Default,a as ExplicitTotal,o as InContextDashboardRow,s as Sizes,r as SparseMatrix,n as States,t as Variants,y as __namedExportsOrder,w as default};
