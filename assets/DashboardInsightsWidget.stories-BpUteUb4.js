import{D as n}from"./DashboardInsightsWidget-Cn1xLAnT.js";import"./iframe-BqHSr5b_.js";import"./preload-helper-PPVm8Dsz.js";import"./useInitialLoad-DE1GB-8y.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const o={kind:"insights",items:[{id:"ins-carts",observation:"Cart abandonment is up 14% on mobile since Tuesday",stat:"312 carts, $8.4k est. value",actionLabel:"Investigate",routeName:"OrdersReport"},{id:"ins-subject",observation:"Campaigns with question-style subject lines opened 9% more this month",stat:"6 of your last 20 sends, avg 31.2% open rate",actionLabel:"View campaigns",routeName:"CampaignReports"},{id:"ins-vip",observation:"Your VIP repeat buyers segment grew twice as fast as the overall list",stat:"+312 contacts in 30 days",actionLabel:"View segment",routeName:"Segments"}]},m={title:"Product/Dashboards/Widgets/DashboardInsightsWidget",component:n,tags:["autodocs"],parameters:{docs:{description:{component:'Da Vinci insights body for dashboard widgets: 2–3 AI-generated observations, each with a muted supporting stat and a text-button action that emits `action`. Shows 3 shimmer rows on first load, a "No new insights right now." empty/error state, and a permanent "AI-generated, verify before acting" footer caption.'}}},argTypes:{data:{control:"object",description:"`DashboardInsightsData` — `{ kind: 'insights', items }`. Each item is an `observation` plus the `stat` that evidences it, and an `actionLabel`/`routeName` pair for the drill-down. Insights are narrative; use `DashboardAttentionWidget` when the row is something that needs fixing."}}},i={args:{data:o}},d={args:{data:{kind:"insights",items:[]}}},t={render:e=>({components:{DashboardInsightsWidget:n},setup:()=>({args:e}),template:'<DashboardInsightsWidget v-bind="args" />'})},s={render:e=>({components:{DashboardInsightsWidget:n},setup:()=>({args:e}),template:`
      <div class="d-flex ga-6 flex-wrap align-start">
        <div style="width: 280px; height: 220px"><v-card flat border rounded="lg" class="h-100 pa-5"><DashboardInsightsWidget v-bind="args" /></v-card></div>
        <div style="width: 420px; height: 260px"><v-card flat border rounded="lg" class="h-100 pa-5"><DashboardInsightsWidget v-bind="args" /></v-card></div>
        <div style="width: 620px; height: 300px"><v-card flat border rounded="lg" class="h-100 pa-5"><DashboardInsightsWidget v-bind="args" /></v-card></div>
      </div>
    `})},a={render:e=>({components:{DashboardInsightsWidget:n},setup:()=>({args:e}),template:'<DashboardInsightsWidget v-bind="args" />'})},r={render:e=>({components:{DashboardInsightsWidget:n},setup:()=>({args:e}),template:`
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: var(--mp-space-16); align-items: stretch">
        <v-card flat border rounded="lg" style="height: 280px" class="pa-5"><DashboardInsightsWidget v-bind="args" /></v-card>
        <v-card flat border rounded="lg" style="height: 280px" class="pa-5"><DashboardInsightsWidget v-bind="args" /></v-card>
      </div>
    `})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    data: INSIGHTS
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    data: {
      kind: 'insights',
      items: []
    }
  }
}`,...d.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      DashboardInsightsWidget
    },
    setup: () => ({
      args
    }),
    template: \`<DashboardInsightsWidget v-bind="args" />\`
  })
}`,...t.parameters?.docs?.source},description:{story:"One structure — a list of Da Vinci observations. Its variants are the insight tones.",...t.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      DashboardInsightsWidget
    },
    setup: () => ({
      args
    }),
    template: \`
      <div class="d-flex ga-6 flex-wrap align-start">
        <div style="width: 280px; height: 220px"><v-card flat border rounded="lg" class="h-100 pa-5"><DashboardInsightsWidget v-bind="args" /></v-card></div>
        <div style="width: 420px; height: 260px"><v-card flat border rounded="lg" class="h-100 pa-5"><DashboardInsightsWidget v-bind="args" /></v-card></div>
        <div style="width: 620px; height: 300px"><v-card flat border rounded="lg" class="h-100 pa-5"><DashboardInsightsWidget v-bind="args" /></v-card></div>
      </div>
    \`
  })
}`,...s.parameters?.docs?.source},description:{story:"There is no `size` prop — a widget fills the grid cell it is placed in. What Phase 4\n(P4-1) guarantees is that the **inset** does not change with the cell: the distance from\nthe card's border to this widget's content is `component.card.padding` at every size,\ninherited from the card standard set in Phase 3 rather than a second widget-only pair.\n\nRendered below at three cell sizes inside a real `DashboardWidgetCard` — run your eye down\nthe left edges.",...s.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      DashboardInsightsWidget
    },
    setup: () => ({
      args
    }),
    template: \`<DashboardInsightsWidget v-bind="args" />\`
  })
}`,...a.parameters?.docs?.source},description:{story:"Populated and empty — nothing notable in the window.",...a.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      DashboardInsightsWidget
    },
    setup: () => ({
      args
    }),
    template: \`
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: var(--mp-space-16); align-items: stretch">
        <v-card flat border rounded="lg" style="height: 280px" class="pa-5"><DashboardInsightsWidget v-bind="args" /></v-card>
        <v-card flat border rounded="lg" style="height: 280px" class="pa-5"><DashboardInsightsWidget v-bind="args" /></v-card>
      </div>
    \`
  })
}`,...r.parameters?.docs?.source},description:{story:`**In context.** The widget where it actually lives — inside a \`DashboardWidgetCard\`, in a
dashboard row beside its siblings. This is the composition P4-1 is judged on: the header
band, the body inset and the footer are the card's, and every widget in the family sits on
the same edge.`,...r.parameters?.docs?.description}}};const b=["Default","Empty","Variants","Sizes","States","InContextDashboardRow"];export{i as Default,d as Empty,r as InContextDashboardRow,s as Sizes,a as States,t as Variants,b as __namedExportsOrder,m as default};
