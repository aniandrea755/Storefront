import{D as r}from"./DashboardSetupGuide-CQDiI95_.js";import"./iframe-BqHSr5b_.js";import"./preload-helper-PPVm8Dsz.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const d=[{title:"Add your first product",description:"Create a product so your store has something to sell.",icon:"package",status:"complete",complete:!0,route:{name:"ProductsList"}},{title:"Connect a payment provider",description:"Accept card payments at checkout.",icon:"credit-card",status:"complete",complete:!0,route:{name:"StoreSetup"}},{title:"Set up shipping rates",description:"Define zones and rates for order fulfillment.",icon:"truck",status:"pending",complete:!1,route:{name:"StoreSetup"}},{title:"Import your contacts",description:"Bring your audience into the platform.",icon:"users",status:"pending",complete:!1,route:{name:"AllContacts"}},{title:"Send your first campaign",description:"Launch an email campaign to your audience.",icon:"megaphone",status:"pending",complete:!1,route:{name:"EmailCampaigns"}}],m={title:"Product/Dashboards/DashboardSetupGuide",component:r,tags:["autodocs"],parameters:{docs:{description:{component:"Collapsible onboarding checklist rendered as a dashboard widget. Shows task completion progress and emits `selectTask` when a task row is clicked. `draggable` reveals the hover drag grip used in grid context."}}},args:{tasks:d,completedCount:2,progress:40,draggable:!1},argTypes:{totalCount:{control:"number",description:"Overall task total when `tasks` is a subset (e.g. the next 5 of 16). Defaults to `tasks.length`."},guideRoute:{control:"object",description:"`RouteLocationRaw`. When set, a View full guide link renders under the list."},tasks:{control:"object",description:"`SetupGuideTask[]` to render. May be a subset (e.g. the next 5 of 16) — set `totalCount` when it is."},completedCount:{control:{type:"number",min:0,max:5},description:"How many tasks are done, shown as the numerator in the progress line."},progress:{control:{type:"range",min:0,max:100},description:"Completion percentage (0-100) driving the progress bar. Passed rather than derived so a subset of `tasks` still reports overall progress honestly."},draggable:{control:"boolean",description:"Grid context only: reveals the drag grip on hover. Layout is always directly editable; this just shows the affordance."}},render:e=>({components:{DashboardSetupGuide:r},setup:()=>({args:e}),template:`
      <div style="max-width:380px;height:440px;">
        <DashboardSetupGuide v-bind="args" />
      </div>
    `})},o={},n={args:{tasks:d.map(e=>({...e,complete:!0,status:"complete"})),completedCount:5,progress:100}},i={args:{draggable:!0}},t={render:e=>({components:{DashboardSetupGuide:r},setup:()=>({args:e}),template:'<DashboardSetupGuide v-bind="args" />'})},s={render:e=>({components:{DashboardSetupGuide:r},setup:()=>({args:e}),template:`
      <div class="d-flex flex-column ga-6">
        <div style="max-width: 420px"><DashboardSetupGuide v-bind="args" /></div>
        <div><DashboardSetupGuide v-bind="args" /></div>
      </div>
    `})},a={render:e=>({components:{DashboardSetupGuide:r},setup:()=>({args:e}),template:'<DashboardSetupGuide v-bind="args" />'})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    tasks: TASKS.map(task => ({
      ...task,
      complete: true,
      status: 'complete'
    })),
    completedCount: 5,
    progress: 100
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    draggable: true
  }
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      DashboardSetupGuide
    },
    setup: () => ({
      args
    }),
    template: \`<DashboardSetupGuide v-bind="args" />\`
  })
}`,...t.parameters?.docs?.source},description:{story:"One structure — a checklist card. What varies is progress, which is a state rather than a\nvariant; see `States` below. Kept as its own story so the template reads consistently\nacross every Phase 4 component.",...t.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      DashboardSetupGuide
    },
    setup: () => ({
      args
    }),
    template: \`
      <div class="d-flex flex-column ga-6">
        <div style="max-width: 420px"><DashboardSetupGuide v-bind="args" /></div>
        <div><DashboardSetupGuide v-bind="args" /></div>
      </div>
    \`
  })
}`,...s.parameters?.docs?.source},description:{story:"There is no `size` prop — the guide spans its container. Its inset is `component.card.*`,\nthe same standard the widget family took in P4-1, so the guide and the widgets beside it on\na dashboard share one edge.",...s.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      DashboardSetupGuide
    },
    setup: () => ({
      args
    }),
    template: \`<DashboardSetupGuide v-bind="args" />\`
  })
}`,...a.parameters?.docs?.source},description:{story:"Fresh, partly done, and complete — the three states a checklist actually has.",...a.parameters?.docs?.description}}};const g=["Default","AllComplete","Draggable","Variants","Sizes","States"];export{n as AllComplete,o as Default,i as Draggable,s as Sizes,a as States,t as Variants,g as __namedExportsOrder,m as default};
