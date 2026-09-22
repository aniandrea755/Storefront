import{D as a}from"./DashboardPieWidget-B8Ny9-Hd.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-BqHSr5b_.js";import"./chartPalette-Bznt7cdU.js";import"./formatNumber-DWsT9dxl.js";import"./formatCurrency-BbaxPn65.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const o={kind:"series",unit:"currency",labels:["Online Store","Retail POS","Marketplace","Wholesale"],series:[{name:"Revenue",data:[45200,28100,15400,9800]}]},c={kind:"series",unit:"count",labels:["Email","Chat","Phone","Social"],series:[{name:"Tickets",data:[142,96,54,23]}]},u={title:"Product/Dashboards/Widgets/DashboardPieWidget",component:a,tags:["autodocs"],parameters:{docs:{description:{component:"Donut chart body for pie-type dashboard widgets. Renders the first series of a `DashboardSeriesData` payload with percentage data labels and a bottom legend; tooltips format by the data unit."}}},args:{data:o,height:260},argTypes:{data:{control:"object",description:"`DashboardSeriesData` — segment labels and values. Colours are assigned by index from the chart palette."},height:{control:{type:"number",min:140,max:480,step:20},description:"Explicit plot height in px; 0 (the default) lets the card size it. Chart canvas geometry, deliberately off the spacing scale."}},render:e=>({components:{DashboardPieWidget:a},setup:()=>({args:e}),template:`
      <v-card flat border rounded="lg" style="max-width:420px;height:300px;padding:12px 18px;">
        <DashboardPieWidget v-bind="args" />
      </v-card>
    `})},i={},n={args:{data:c}},t={render:e=>({components:{DashboardPieWidget:a},setup:()=>({args:e}),template:'<DashboardPieWidget v-bind="args" />'})},r={render:e=>({components:{DashboardPieWidget:a},setup:()=>({args:e}),template:`
      <div class="d-flex ga-6 flex-wrap align-start">
        <div style="width: 280px; height: 220px"><v-card flat border rounded="lg" class="h-100 pa-5"><DashboardPieWidget v-bind="args" /></v-card></div>
        <div style="width: 420px; height: 260px"><v-card flat border rounded="lg" class="h-100 pa-5"><DashboardPieWidget v-bind="args" /></v-card></div>
        <div style="width: 620px; height: 300px"><v-card flat border rounded="lg" class="h-100 pa-5"><DashboardPieWidget v-bind="args" /></v-card></div>
      </div>
    `})},s={render:e=>({components:{DashboardPieWidget:a},setup:()=>({args:e}),template:'<DashboardPieWidget v-bind="args" />'})},d={render:e=>({components:{DashboardPieWidget:a},setup:()=>({args:e}),template:`
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: var(--mp-space-16); align-items: stretch">
        <v-card flat border rounded="lg" style="height: 280px" class="pa-5"><DashboardPieWidget v-bind="args" /></v-card>
        <v-card flat border rounded="lg" style="height: 280px" class="pa-5"><DashboardPieWidget v-bind="args" /></v-card>
      </div>
    `})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    data: TICKETS_BY_CHANNEL
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      DashboardPieWidget
    },
    setup: () => ({
      args
    }),
    template: \`<DashboardPieWidget v-bind="args" />\`
  })
}`,...t.parameters?.docs?.source},description:{story:"One structure — a pie with a legend. Its variants are the legend positions.",...t.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      DashboardPieWidget
    },
    setup: () => ({
      args
    }),
    template: \`
      <div class="d-flex ga-6 flex-wrap align-start">
        <div style="width: 280px; height: 220px"><v-card flat border rounded="lg" class="h-100 pa-5"><DashboardPieWidget v-bind="args" /></v-card></div>
        <div style="width: 420px; height: 260px"><v-card flat border rounded="lg" class="h-100 pa-5"><DashboardPieWidget v-bind="args" /></v-card></div>
        <div style="width: 620px; height: 300px"><v-card flat border rounded="lg" class="h-100 pa-5"><DashboardPieWidget v-bind="args" /></v-card></div>
      </div>
    \`
  })
}`,...r.parameters?.docs?.source},description:{story:"There is no `size` prop — a widget fills the grid cell it is placed in. What Phase 4\n(P4-1) guarantees is that the **inset** does not change with the cell: the distance from\nthe card's border to this widget's content is `component.card.padding` at every size,\ninherited from the card standard set in Phase 3 rather than a second widget-only pair.\n\nRendered below at three cell sizes inside a real `DashboardWidgetCard` — run your eye down\nthe left edges.",...r.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      DashboardPieWidget
    },
    setup: () => ({
      args
    }),
    template: \`<DashboardPieWidget v-bind="args" />\`
  })
}`,...s.parameters?.docs?.source},description:{story:"Populated, one dominant slice, and empty.",...s.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      DashboardPieWidget
    },
    setup: () => ({
      args
    }),
    template: \`
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: var(--mp-space-16); align-items: stretch">
        <v-card flat border rounded="lg" style="height: 280px" class="pa-5"><DashboardPieWidget v-bind="args" /></v-card>
        <v-card flat border rounded="lg" style="height: 280px" class="pa-5"><DashboardPieWidget v-bind="args" /></v-card>
      </div>
    \`
  })
}`,...d.parameters?.docs?.source},description:{story:`**In context.** The widget where it actually lives — inside a \`DashboardWidgetCard\`, in a
dashboard row beside its siblings. This is the composition P4-1 is judged on: the header
band, the body inset and the footer are the card's, and every widget in the family sits on
the same edge.`,...d.parameters?.docs?.description}}};const y=["RevenueShare","TicketsByChannel","Variants","Sizes","States","InContextDashboardRow"];export{d as InContextDashboardRow,i as RevenueShare,r as Sizes,s as States,n as TicketsByChannel,t as Variants,y as __namedExportsOrder,u as default};
