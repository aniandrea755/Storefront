import{D as d}from"./DashboardGaugeWidget-CNm0kBHK.js";import"./iframe-DH-XNaA6.js";import"./preload-helper-PPVm8Dsz.js";import"./DtGauge-CY6pl-Dt.js";import"./chartPalette-BfEQgAlK.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const i={kind:"gauge",pct:68,centerValue:"68%",centerCaption:"of $30,000",footerStats:[{label:"Pace per day",value:"$678"},{label:"Needed per day",value:"$2,418"}]},m={title:"Product/Dashboards/Widgets/DashboardGaugeWidget",component:d,tags:["autodocs"],parameters:{docs:{description:{component:"Rolling revenue-goal gauge from the Overview v2 design: a round-capped progress ring on a soft track, centered percentage, and pace/needed footer stats."}}},argTypes:{data:{control:"object",description:"`DashboardGaugeData` — `{ kind: 'gauge', pct, centerValue, centerCaption, arc?, footerStats? }`. `arc` selects the full circle or `three-quarter` (a 270° arc opening at the bottom). `pct` drives the sweep; `centerValue` is rendered verbatim, so formatting stays with the caller."}}},n={args:{data:i}},o={args:{data:{kind:"gauge",pct:100,centerValue:"10 / 10",centerCaption:"score",arc:"three-quarter"}},parameters:{docs:{description:{story:"shadcn radial variant (`arc: 'three-quarter'`): a 270° arc whose gap opens at the bottom — used by the Deliverability score on the Overview."}}}},a={render:e=>({components:{DashboardGaugeWidget:d},setup:()=>({args:e}),template:'<DashboardGaugeWidget v-bind="args" />'})},r={render:e=>({components:{DashboardGaugeWidget:d},setup:()=>({args:e}),template:`
      <div class="d-flex ga-6 flex-wrap align-start">
        <div style="width: 280px; height: 220px"><v-card flat border rounded="lg" class="h-100 pa-5"><DashboardGaugeWidget v-bind="args" /></v-card></div>
        <div style="width: 420px; height: 260px"><v-card flat border rounded="lg" class="h-100 pa-5"><DashboardGaugeWidget v-bind="args" /></v-card></div>
        <div style="width: 620px; height: 300px"><v-card flat border rounded="lg" class="h-100 pa-5"><DashboardGaugeWidget v-bind="args" /></v-card></div>
      </div>
    `})},t={render:e=>({components:{DashboardGaugeWidget:d},setup:()=>({args:e}),template:'<DashboardGaugeWidget v-bind="args" />'})},s={render:e=>({components:{DashboardGaugeWidget:d},setup:()=>({args:e}),template:`
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: var(--mp-space-16); align-items: stretch">
        <v-card flat border rounded="lg" style="height: 280px" class="pa-5"><DashboardGaugeWidget v-bind="args" /></v-card>
        <v-card flat border rounded="lg" style="height: 280px" class="pa-5"><DashboardGaugeWidget v-bind="args" /></v-card>
      </div>
    `})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    data: DATA
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    data: {
      kind: 'gauge',
      pct: 100,
      centerValue: '10 / 10',
      centerCaption: 'score',
      arc: 'three-quarter'
    }
  },
  parameters: {
    docs: {
      description: {
        story: "shadcn radial variant (\`arc: 'three-quarter'\`): a 270° arc whose gap opens at the bottom — used by the Deliverability score on the Overview."
      }
    }
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      DashboardGaugeWidget
    },
    setup: () => ({
      args
    }),
    template: \`<DashboardGaugeWidget v-bind="args" />\`
  })
}`,...a.parameters?.docs?.source},description:{story:"One structure — a single value against a target. Its variants are where the value falls relative to that target.",...a.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      DashboardGaugeWidget
    },
    setup: () => ({
      args
    }),
    template: \`
      <div class="d-flex ga-6 flex-wrap align-start">
        <div style="width: 280px; height: 220px"><v-card flat border rounded="lg" class="h-100 pa-5"><DashboardGaugeWidget v-bind="args" /></v-card></div>
        <div style="width: 420px; height: 260px"><v-card flat border rounded="lg" class="h-100 pa-5"><DashboardGaugeWidget v-bind="args" /></v-card></div>
        <div style="width: 620px; height: 300px"><v-card flat border rounded="lg" class="h-100 pa-5"><DashboardGaugeWidget v-bind="args" /></v-card></div>
      </div>
    \`
  })
}`,...r.parameters?.docs?.source},description:{story:"There is no `size` prop — a widget fills the grid cell it is placed in. What Phase 4\n(P4-1) guarantees is that the **inset** does not change with the cell: the distance from\nthe card's border to this widget's content is `component.card.padding` at every size,\ninherited from the card standard set in Phase 3 rather than a second widget-only pair.\n\nRendered below at three cell sizes inside a real `DashboardWidgetCard` — run your eye down\nthe left edges.",...r.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      DashboardGaugeWidget
    },
    setup: () => ({
      args
    }),
    template: \`<DashboardGaugeWidget v-bind="args" />\`
  })
}`,...t.parameters?.docs?.source},description:{story:"Under target, on target, and over.",...t.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      DashboardGaugeWidget
    },
    setup: () => ({
      args
    }),
    template: \`
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: var(--mp-space-16); align-items: stretch">
        <v-card flat border rounded="lg" style="height: 280px" class="pa-5"><DashboardGaugeWidget v-bind="args" /></v-card>
        <v-card flat border rounded="lg" style="height: 280px" class="pa-5"><DashboardGaugeWidget v-bind="args" /></v-card>
      </div>
    \`
  })
}`,...s.parameters?.docs?.source},description:{story:`**In context.** The widget where it actually lives — inside a \`DashboardWidgetCard\`, in a
dashboard row beside its siblings. This is the composition P4-1 is judged on: the header
band, the body inset and the footer are the card's, and every widget in the family sits on
the same edge.`,...s.parameters?.docs?.description}}};const v=["Default","ThreeQuarterArc","Variants","Sizes","States","InContextDashboardRow"];export{n as Default,s as InContextDashboardRow,r as Sizes,t as States,o as ThreeQuarterArc,a as Variants,v as __namedExportsOrder,m as default};
