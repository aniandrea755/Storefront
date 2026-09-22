import{D as s}from"./DashboardAttentionWidget-DmoClvZ7.js";import"./iframe-BqHSr5b_.js";import"./preload-helper-PPVm8Dsz.js";import"./useInitialLoad-DE1GB-8y.js";import"./useRelativeTime-BAck8X0K.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const d={kind:"attention",items:[{id:"att-payments",severity:"critical",title:"3 payments failed in the last 24h",context:"Retry or contact the customers before the orders auto-cancel.",occurredAt:new Date(Date.now()-7200*1e3).toISOString(),actionLabel:"Review",dataSource:"commerce",routeName:"SalesOrders"},{id:"att-stock",severity:"warning",title:"Low stock: 2 of your top 10 sellers",context:"Trail Runner XT and Canvas Tote are below their reorder point.",occurredAt:new Date(Date.now()-300*60*1e3).toISOString(),actionLabel:"View products",dataSource:"commerce",routeName:"ProductsList"},{id:"att-approval",severity:"info",title:"Campaign ‘Spring Refresh’ pending approval",context:"Scheduled to send tomorrow at 9:00 AM once approved.",occurredAt:new Date(Date.now()-1560*60*1e3).toISOString(),actionLabel:"Approve",dataSource:"marketing",routeName:"EmailCampaigns"},{id:"att-dns",severity:"warning",title:"Sending domain DNS not verified",context:"Unverified DKIM records hurt deliverability on every send.",occurredAt:new Date(Date.now()-4320*60*1e3).toISOString(),actionLabel:"Fix",dataSource:"marketing",routeName:"CampaignReports"}]},u={title:"Product/Dashboards/Widgets/DashboardAttentionWidget",component:s,tags:["autodocs"],parameters:{docs:{description:{component:'Prioritized "Needs your attention" list body for dashboard widgets. Each row carries a severity dot (critical / warning / info), a per-row source-cloud chip (items span clouds, so there is no card-level chip), a relative timestamp, and a right-aligned action button that emits `action`. Shows a pulse-bar skeleton on first load and a "You\'re all caught up" empty state.'}}},argTypes:{data:{control:"object",description:"`DashboardAttentionData` — `{ kind: 'attention', items }`. Each item carries `severity`, `title`, `detail`, `occurredAt`, `actionLabel`, `dataSource`, `routeName` and an optional Lucide `icon` (falls back to a per-severity glyph). Rows compose `MpListRow`, so their geometry is `component.listItem.*`."}}},o={args:{data:d}},i={args:{data:{kind:"attention",items:[]}}},t={render:e=>({components:{DashboardAttentionWidget:s},setup:()=>({args:e}),template:'<DashboardAttentionWidget v-bind="args" />'})},a={render:e=>({components:{DashboardAttentionWidget:s},setup:()=>({args:e}),template:`
      <div class="d-flex ga-6 flex-wrap align-start">
        <div style="width: 280px; height: 220px"><v-card flat border rounded="lg" class="h-100 pa-5"><DashboardAttentionWidget v-bind="args" /></v-card></div>
        <div style="width: 420px; height: 260px"><v-card flat border rounded="lg" class="h-100 pa-5"><DashboardAttentionWidget v-bind="args" /></v-card></div>
        <div style="width: 620px; height: 300px"><v-card flat border rounded="lg" class="h-100 pa-5"><DashboardAttentionWidget v-bind="args" /></v-card></div>
      </div>
    `})},r={render:e=>({components:{DashboardAttentionWidget:s},setup:()=>({args:e}),template:'<DashboardAttentionWidget v-bind="args" />'})},n={render:e=>({components:{DashboardAttentionWidget:s},setup:()=>({args:e}),template:`
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: var(--mp-space-16); align-items: stretch">
        <v-card flat border rounded="lg" style="height: 280px" class="pa-5"><DashboardAttentionWidget v-bind="args" /></v-card>
        <v-card flat border rounded="lg" style="height: 280px" class="pa-5"><DashboardAttentionWidget v-bind="args" /></v-card>
      </div>
    `})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    data: ATTENTION
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    data: {
      kind: 'attention',
      items: []
    }
  }
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      DashboardAttentionWidget
    },
    setup: () => ({
      args
    }),
    template: \`<DashboardAttentionWidget v-bind="args" />\`
  })
}`,...t.parameters?.docs?.source},description:{story:"Two structures: the collapsed banner (a single tight row) and the expanded list of items needing attention.",...t.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      DashboardAttentionWidget
    },
    setup: () => ({
      args
    }),
    template: \`
      <div class="d-flex ga-6 flex-wrap align-start">
        <div style="width: 280px; height: 220px"><v-card flat border rounded="lg" class="h-100 pa-5"><DashboardAttentionWidget v-bind="args" /></v-card></div>
        <div style="width: 420px; height: 260px"><v-card flat border rounded="lg" class="h-100 pa-5"><DashboardAttentionWidget v-bind="args" /></v-card></div>
        <div style="width: 620px; height: 300px"><v-card flat border rounded="lg" class="h-100 pa-5"><DashboardAttentionWidget v-bind="args" /></v-card></div>
      </div>
    \`
  })
}`,...a.parameters?.docs?.source},description:{story:"There is no `size` prop — a widget fills the grid cell it is placed in. This is one of the\nthree **bespoke-header** widgets: `DashboardWidgetCard` zeroes its body inset for these, so\nthe widget draws its own edges. Phase 4 (P4-1) made it state that inset as\n`component.card.padding` — the role token, not the `20` primitive — so a change to the\nstandard moves it with the rest of the family.\n\nRendered below at three cell sizes; the left edges should match the standard widgets'.",...a.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      DashboardAttentionWidget
    },
    setup: () => ({
      args
    }),
    template: \`<DashboardAttentionWidget v-bind="args" />\`
  })
}`,...r.parameters?.docs?.source},description:{story:"Collapsed, expanded, and cleared — nothing currently needs attention.",...r.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      DashboardAttentionWidget
    },
    setup: () => ({
      args
    }),
    template: \`
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: var(--mp-space-16); align-items: stretch">
        <v-card flat border rounded="lg" style="height: 280px" class="pa-5"><DashboardAttentionWidget v-bind="args" /></v-card>
        <v-card flat border rounded="lg" style="height: 280px" class="pa-5"><DashboardAttentionWidget v-bind="args" /></v-card>
      </div>
    \`
  })
}`,...n.parameters?.docs?.source},description:{story:`**In context.** The widget where it actually lives — inside a \`DashboardWidgetCard\`, in a
dashboard row beside its siblings. This is the composition P4-1 is judged on: the header
band, the body inset and the footer are the card's, and every widget in the family sits on
the same edge.`,...n.parameters?.docs?.description}}};const v=["Default","Empty","Variants","Sizes","States","InContextDashboardRow"];export{o as Default,i as Empty,n as InContextDashboardRow,a as Sizes,r as States,t as Variants,v as __namedExportsOrder,u as default};
