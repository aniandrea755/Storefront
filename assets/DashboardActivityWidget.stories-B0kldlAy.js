import{D as t}from"./DashboardActivityWidget-CQKJceXr.js";import"./iframe-BqHSr5b_.js";import"./preload-helper-PPVm8Dsz.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const o={kind:"activity",items:[{id:"act-1",tag:"email",icon:"mail",eyebrow:"2 min ago",title:"Spring Sale campaign delivered",meta:"12,480 recipients · 24.3% open rate"},{id:"act-2",tag:"order",icon:"shopping-cart",eyebrow:"9 min ago",title:"Order #10482 placed — $214.90",meta:"Online store · 3 items"},{id:"act-3",tag:"audience",icon:"users",eyebrow:"26 min ago",title:'38 new subscribers joined "VIP Customers"',meta:"Segment refresh"},{id:"act-4",tag:"automation",icon:"zap",eyebrow:"1 h ago",title:"Welcome journey enrolled 12 contacts",meta:"Journey: New customer welcome"},{id:"act-5",tag:"email",icon:"mail-open",eyebrow:"2 h ago",title:"Back-in-stock alert opened by 312 contacts",meta:"Triggered email"}]},h={title:"Product/Dashboards/Widgets/DashboardActivityWidget",component:t,tags:["autodocs"],parameters:{docs:{description:{component:"Scrolling live-activity feed body for dashboard widgets. Each item gets a tag-colored icon chip (email / order / audience / automation), a monospace timestamp eyebrow, and optional meta line."}}},args:{data:o},argTypes:{data:{control:"object",description:"`DashboardActivityData` — `{ kind: 'activity', items }`. Each item's `tag` (email / order / audience / automation) selects its tint from the cloud accent tokens; an unknown tag falls back to the email tint rather than rendering untinted."}},render:e=>({components:{DashboardActivityWidget:t},setup:()=>({args:e}),template:`
      <v-card flat border rounded="lg" style="max-width:420px;height:320px;padding:12px 18px;">
        <DashboardActivityWidget v-bind="args" />
      </v-card>
    `})},d={},n={args:{data:{kind:"activity",items:o.items.slice(0,2)}}},a={render:e=>({components:{DashboardActivityWidget:t},setup:()=>({args:e}),template:'<DashboardActivityWidget v-bind="args" />'})},r={render:e=>({components:{DashboardActivityWidget:t},setup:()=>({args:e}),template:`
      <div class="d-flex ga-6 flex-wrap align-start">
        <div style="width: 280px; height: 220px"><v-card flat border rounded="lg" class="h-100 pa-5"><DashboardActivityWidget v-bind="args" /></v-card></div>
        <div style="width: 420px; height: 260px"><v-card flat border rounded="lg" class="h-100 pa-5"><DashboardActivityWidget v-bind="args" /></v-card></div>
        <div style="width: 620px; height: 300px"><v-card flat border rounded="lg" class="h-100 pa-5"><DashboardActivityWidget v-bind="args" /></v-card></div>
      </div>
    `})},i={render:e=>({components:{DashboardActivityWidget:t},setup:()=>({args:e}),template:'<DashboardActivityWidget v-bind="args" />'})},s={render:e=>({components:{DashboardActivityWidget:t},setup:()=>({args:e}),template:`
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: var(--mp-space-16); align-items: stretch">
        <v-card flat border rounded="lg" style="height: 280px" class="pa-5"><DashboardActivityWidget v-bind="args" /></v-card>
        <v-card flat border rounded="lg" style="height: 280px" class="pa-5"><DashboardActivityWidget v-bind="args" /></v-card>
      </div>
    `})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{}",...d.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    data: {
      kind: 'activity',
      items: ACTIVITY.items.slice(0, 2)
    }
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      DashboardActivityWidget
    },
    setup: () => ({
      args
    }),
    template: \`<DashboardActivityWidget v-bind="args" />\`
  })
}`,...a.parameters?.docs?.source},description:{story:"One structure — a reverse-chronological feed of events. Its variants are the event kinds it renders, each with its own glyph.",...a.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      DashboardActivityWidget
    },
    setup: () => ({
      args
    }),
    template: \`
      <div class="d-flex ga-6 flex-wrap align-start">
        <div style="width: 280px; height: 220px"><v-card flat border rounded="lg" class="h-100 pa-5"><DashboardActivityWidget v-bind="args" /></v-card></div>
        <div style="width: 420px; height: 260px"><v-card flat border rounded="lg" class="h-100 pa-5"><DashboardActivityWidget v-bind="args" /></v-card></div>
        <div style="width: 620px; height: 300px"><v-card flat border rounded="lg" class="h-100 pa-5"><DashboardActivityWidget v-bind="args" /></v-card></div>
      </div>
    \`
  })
}`,...r.parameters?.docs?.source},description:{story:"There is no `size` prop — a widget fills the grid cell it is placed in. What Phase 4\n(P4-1) guarantees is that the **inset** does not change with the cell: the distance from\nthe card's border to this widget's content is `component.card.padding` at every size,\ninherited from the card standard set in Phase 3 rather than a second widget-only pair.\n\nRendered below at three cell sizes inside a real `DashboardWidgetCard` — run your eye down\nthe left edges.",...r.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      DashboardActivityWidget
    },
    setup: () => ({
      args
    }),
    template: \`<DashboardActivityWidget v-bind="args" />\`
  })
}`,...i.parameters?.docs?.source},description:{story:"Populated and empty — a quiet account with nothing in the window yet.",...i.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      DashboardActivityWidget
    },
    setup: () => ({
      args
    }),
    template: \`
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: var(--mp-space-16); align-items: stretch">
        <v-card flat border rounded="lg" style="height: 280px" class="pa-5"><DashboardActivityWidget v-bind="args" /></v-card>
        <v-card flat border rounded="lg" style="height: 280px" class="pa-5"><DashboardActivityWidget v-bind="args" /></v-card>
      </div>
    \`
  })
}`,...s.parameters?.docs?.source},description:{story:`**In context.** The widget where it actually lives — inside a \`DashboardWidgetCard\`, in a
dashboard row beside its siblings. This is the composition P4-1 is judged on: the header
band, the body inset and the footer are the card's, and every widget in the family sits on
the same edge.`,...s.parameters?.docs?.description}}};const m=["Default","ShortFeed","Variants","Sizes","States","InContextDashboardRow"];export{d as Default,s as InContextDashboardRow,n as ShortFeed,r as Sizes,i as States,a as Variants,m as __namedExportsOrder,h as default};
