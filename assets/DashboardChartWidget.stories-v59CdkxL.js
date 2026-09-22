import{D as a}from"./DashboardChartWidget-CfVsbL1c.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-BqHSr5b_.js";import"./chartPalette-Bznt7cdU.js";import"./useAppTheme-d8BR_Qbt.js";import"./useElementSize-DtWwGEtN.js";import"./formatNumber-DWsT9dxl.js";import"./formatCurrency-BbaxPn65.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const g={kind:"series",unit:"currency",labels:["06-01","06-04","06-07","06-10","06-13","06-16","06-19","06-22","06-25","06-28","07-01","07-04"],series:[{name:"Revenue",data:[4200,5100,4800,6400,5900,7200,6800,8100,7600,8900,9400,10200]}]},l={kind:"series",unit:"currency",labels:["Online Store","Retail POS","Marketplace","Wholesale","Social"],series:[{name:"Revenue",data:[45200,28100,15400,9800,6200]}]},m={kind:"series",unit:"currency",labels:["Jan","Feb","Mar","Apr","May"],series:[{name:"Paid Search",data:[1200,1400,1600,1800,2e3]},{name:"Organic Search",data:[900,1100,1e3,1300,1250]},{name:"Email Marketing",data:[700,650,800,900,950]}]},W={title:"Product/Dashboards/Widgets/DashboardChartWidget",component:a,tags:["autodocs"],parameters:{docs:{description:{component:"ApexCharts body for timeseries and bar widgets. Multi-series charts use dashed secondary strokes and explicit legend marker colours. Single-series bar charts distribute palette colors across categories. Shows a skeleton until the chart lazily mounts."}}},args:{data:g,widgetType:"timeseries",chartVariant:"area",height:260},argTypes:{data:{control:"object",description:"`DashboardSeriesData` — the series to plot, with its own labels and units."},widgetType:{control:"select",options:["timeseries","bar"],description:"`timeseries` or `bar`. Selects the base chart family; `chartVariant` then refines it."},chartVariant:{control:"select",options:["area","line","vertical","horizontal"],description:"Refines the family — e.g. area vs line for a timeseries, grouped vs stacked for bars. Leave undefined to take the widget type's default."},height:{control:{type:"number",min:120,max:480,step:20},description:"Explicit plot height in px; 0 (the default) lets the card size it. Chart canvas geometry, deliberately off the spacing scale."}},render:e=>({components:{DashboardChartWidget:a},setup:()=>({args:e}),template:`
      <v-card flat border rounded="lg" style="max-width:560px;height:300px;padding:12px 18px;">
        <DashboardChartWidget v-bind="args" />
      </v-card>
    `})},n={},d={args:{chartVariant:"line"}},o={args:{data:l,widgetType:"bar",chartVariant:"vertical"}},c={args:{data:l,widgetType:"bar",chartVariant:"horizontal"}},u={kind:"series",unit:"currency",labels:["06-01","06-04","06-07","06-10","06-13","06-16","06-19","06-22","06-25","06-28","07-01","07-04"],series:[{name:"Revenue",data:[4200,5100,4800,6400,5900,7200,6800,8100,7600,8900,9400,10200]},{name:"Previous period",data:[3800,4300,4600,5200,5500,6100,6300,6900,7100,7400,7900,8300],isComparison:!0}]},p={args:{data:u,widgetType:"timeseries"},parameters:{docs:{description:{story:"Shopify-style period comparison: a series flagged `isComparison` renders as a dashed line in the theme's comparison colour with no area fill, next to the solid current-period line."}}}},h={args:{data:m,widgetType:"timeseries",chartVariant:"line",height:260},render:e=>({components:{DashboardChartWidget:a},setup:()=>({args:e}),template:`
      <v-card flat border rounded="lg" style="width:200px;height:260px;padding:12px 10px;">
        <DashboardChartWidget v-bind="args" />
      </v-card>
    `})},r={render:e=>({components:{DashboardChartWidget:a},setup:()=>({args:e}),template:'<DashboardChartWidget v-bind="args" />'})},t={render:e=>({components:{DashboardChartWidget:a},setup:()=>({args:e}),template:`
      <div class="d-flex ga-6 flex-wrap align-start">
        <div style="width: 280px; height: 220px"><v-card flat border rounded="lg" class="h-100 pa-5"><DashboardChartWidget v-bind="args" /></v-card></div>
        <div style="width: 420px; height: 260px"><v-card flat border rounded="lg" class="h-100 pa-5"><DashboardChartWidget v-bind="args" /></v-card></div>
        <div style="width: 620px; height: 300px"><v-card flat border rounded="lg" class="h-100 pa-5"><DashboardChartWidget v-bind="args" /></v-card></div>
      </div>
    `})},s={render:e=>({components:{DashboardChartWidget:a},setup:()=>({args:e}),template:'<DashboardChartWidget v-bind="args" />'})},i={render:e=>({components:{DashboardChartWidget:a},setup:()=>({args:e}),template:`
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: var(--mp-space-16); align-items: stretch">
        <v-card flat border rounded="lg" style="height: 280px" class="pa-5"><DashboardChartWidget v-bind="args" /></v-card>
        <v-card flat border rounded="lg" style="height: 280px" class="pa-5"><DashboardChartWidget v-bind="args" /></v-card>
      </div>
    `})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    chartVariant: 'line'
  }
}`,...d.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    data: CHANNEL_SERIES,
    widgetType: 'bar',
    chartVariant: 'vertical'
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    data: CHANNEL_SERIES,
    widgetType: 'bar',
    chartVariant: 'horizontal'
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    data: COMPARISON_SERIES,
    widgetType: 'timeseries'
  },
  parameters: {
    docs: {
      description: {
        story: 'Shopify-style period comparison: a series flagged \`isComparison\` renders as a dashed line in the theme\\'s comparison colour with no area fill, next to the solid current-period line.'
      }
    }
  }
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    data: CHANNEL_MULTI_SERIES,
    widgetType: 'timeseries',
    chartVariant: 'line',
    height: 260
  },
  render: args => ({
    components: {
      DashboardChartWidget
    },
    setup: () => ({
      args
    }),
    template: \`
      <v-card flat border rounded="lg" style="width:200px;height:260px;padding:12px 10px;">
        <DashboardChartWidget v-bind="args" />
      </v-card>
    \`
  })
}`,...h.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      DashboardChartWidget
    },
    setup: () => ({
      args
    }),
    template: \`<DashboardChartWidget v-bind="args" />\`
  })
}`,...r.parameters?.docs?.source},description:{story:"The chart variants — line, area, bar — over the same series, plus the legend and tooltip that come with them.",...r.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      DashboardChartWidget
    },
    setup: () => ({
      args
    }),
    template: \`
      <div class="d-flex ga-6 flex-wrap align-start">
        <div style="width: 280px; height: 220px"><v-card flat border rounded="lg" class="h-100 pa-5"><DashboardChartWidget v-bind="args" /></v-card></div>
        <div style="width: 420px; height: 260px"><v-card flat border rounded="lg" class="h-100 pa-5"><DashboardChartWidget v-bind="args" /></v-card></div>
        <div style="width: 620px; height: 300px"><v-card flat border rounded="lg" class="h-100 pa-5"><DashboardChartWidget v-bind="args" /></v-card></div>
      </div>
    \`
  })
}`,...t.parameters?.docs?.source},description:{story:"There is no `size` prop — a widget fills the grid cell it is placed in. What Phase 4\n(P4-1) guarantees is that the **inset** does not change with the cell: the distance from\nthe card's border to this widget's content is `component.card.padding` at every size,\ninherited from the card standard set in Phase 3 rather than a second widget-only pair.\n\nRendered below at three cell sizes inside a real `DashboardWidgetCard` — run your eye down\nthe left edges.",...t.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      DashboardChartWidget
    },
    setup: () => ({
      args
    }),
    template: \`<DashboardChartWidget v-bind="args" />\`
  })
}`,...s.parameters?.docs?.source},description:{story:"Populated, single-series, and empty.",...s.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      DashboardChartWidget
    },
    setup: () => ({
      args
    }),
    template: \`
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: var(--mp-space-16); align-items: stretch">
        <v-card flat border rounded="lg" style="height: 280px" class="pa-5"><DashboardChartWidget v-bind="args" /></v-card>
        <v-card flat border rounded="lg" style="height: 280px" class="pa-5"><DashboardChartWidget v-bind="args" /></v-card>
      </div>
    \`
  })
}`,...i.parameters?.docs?.source},description:{story:`**In context.** The widget where it actually lives — inside a \`DashboardWidgetCard\`, in a
dashboard row beside its siblings. This is the composition P4-1 is judged on: the header
band, the body inset and the footer are the card's, and every widget in the family sits on
the same edge.`,...i.parameters?.docs?.description}}};const E=["TimeseriesArea","TimeseriesLine","ColumnChart","HorizontalBarChart","WithComparisonSeries","NarrowContainer","Variants","Sizes","States","InContextDashboardRow"];export{o as ColumnChart,c as HorizontalBarChart,i as InContextDashboardRow,h as NarrowContainer,t as Sizes,s as States,n as TimeseriesArea,d as TimeseriesLine,r as Variants,p as WithComparisonSeries,E as __namedExportsOrder,W as default};
