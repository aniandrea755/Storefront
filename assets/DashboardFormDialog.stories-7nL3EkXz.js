import{r as c}from"./iframe-DH-XNaA6.js";import{_ as e}from"./DashboardFormDialog-CFTJElgI.js";import{M as m}from"./MpEmptyState-BasWsDO3.js";import"./preload-helper-PPVm8Dsz.js";import"./MpDialog-vzXqpvNK.js";import"./useScrollEdges-CBa2dNoC.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./MpFormGrid-CIGBvnp2.js";import"./useDashboards-BHTIT6Rb.js";import"./useAccounts-BCL4QMJk.js";import"./metricCatalog-laA4Pjy5.js";import"./widgetSizePresets-CKImfI68.js";import"./MpIllustration-C2XUoC6J.js";function l(i={}){return{id:"2000290-lifecycle",accountId:"2000290",kind:"custom",name:"Lifecycle Health",description:"Tracks engagement and retention across the customer lifecycle.",icon:"line-chart",accent:"secondary",isDefault:!1,favorite:!1,widgets:[],filters:{rangePreset:"last_30_days",grain:"daily",comparison:"previous_period"},createdAt:"2026-05-02T09:00:00.000Z",updatedAt:"2026-07-01T14:30:00.000Z",...i}}const E={title:"Product/Dashboards/DashboardFormDialog",component:e,tags:["autodocs"],parameters:{docs:{description:{component:"Create/edit modal for custom dashboards. With no `dashboard` prop it creates a new dashboard; with a `dashboard` it edits that one. Validates name (required, ≤60 chars) and description (≤240 chars), persists via the dashboards store, and emits `saved` with the dashboard id."}}},args:{accountId:"2000290",dashboard:null},argTypes:{accountId:{control:"text",description:"Account the dashboard belongs to"},dashboard:{control:"object",description:"Dashboard to edit; omit or null for create mode"}},render:i=>({components:{DashboardFormDialog:e},setup(){const p=c(!0),h=c("");return{args:i,open:p,savedId:h}},template:`
      <section style="min-height:640px;background:rgb(var(--v-theme-background));padding:24px;">
        <v-btn color="primary" prepend-icon="plus" @click="open = true">Open dialog</v-btn>
        <div v-if="savedId" class="text-body-2 text-medium-emphasis mt-3">Saved dashboard: {{ savedId }}</div>
        <DashboardFormDialog v-bind="args" v-model="open" @saved="savedId = $event" />
      </section>
    `})},n={},d={args:{dashboard:l()}},s={args:{dashboard:l({id:"2000290-holiday",name:"Holiday Trading Command Center — BFCM & December Peak",description:"A very long description that pushes the character counter close to its limit. Covers storefront revenue, campaign attribution, fulfillment backlog, support ticket load, and the retail POS lanes across all locations during the holiday peak trading window.",icon:"rocket",accent:"warning"})}},a={render:()=>({components:{DashboardFormDialog:e},data:()=>({which:"create"}),template:`
      <div class="d-flex ga-2 flex-wrap">
        <v-btn variant="outlined" class="text-none" @click="which = 'create'">Create</v-btn>
        <v-btn variant="outlined" class="text-none" @click="which = 'edit'">Edit</v-btn>

        <DashboardFormDialog :model-value="which === 'create'" account-id="2000290" @update:model-value="which = ''" />
        <DashboardFormDialog
          :model-value="which === 'edit'"
          account-id="2000290"
          :dashboard="{ id: 'd1', name: 'Lifecycle Health', description: 'Retention and winback at a glance.', accent: 'violet', icon: 'activity' } as never"
          @update:model-value="which = ''"
        />
      </div>
    `}),args:{}},t={render:()=>({components:{DashboardFormDialog:e},data:()=>({open:!0}),template:`
      <div>
        <v-btn variant="outlined" class="text-none" @click="open = true">New dashboard</v-btn>
        <DashboardFormDialog v-model="open" account-id="2000290" />
      </div>
    `}),args:{}},o={render:()=>({components:{DashboardFormDialog:e},data:()=>({which:""}),template:`
      <div class="d-flex ga-2 flex-wrap">
        <v-btn variant="outlined" class="text-none" @click="which = 'empty'">Empty — submit disabled</v-btn>
        <v-btn variant="outlined" class="text-none" @click="which = 'filled'">Filled</v-btn>

        <DashboardFormDialog :model-value="which === 'empty'" account-id="2000290" @update:model-value="which = ''" />
        <DashboardFormDialog
          :model-value="which === 'filled'"
          account-id="2000290"
          :dashboard="{ id: 'd2', name: 'Revenue Watch', description: 'Daily revenue, channel mix and refunds.', accent: 'emerald', icon: 'dollar-sign' } as never"
          @update:model-value="which = ''"
        />
      </div>
    `}),args:{}},r={render:()=>({components:{DashboardFormDialog:e,MpEmptyState:m},data:()=>({open:!1}),template:`
      <v-card flat border rounded="lg">
        <MpEmptyState
          title="No dashboards yet"
          icon="layout-dashboard"
          description="A dashboard is a saved layout of widgets. Start with a blank one and add widgets as you go."
          action-label="New dashboard"
          action-icon="plus"
          @action="open = true"
        />
        <DashboardFormDialog v-model="open" account-id="2000290" />
      </v-card>
    `}),args:{}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    dashboard: makeDashboard()
  }
}`,...d.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    dashboard: makeDashboard({
      id: '2000290-holiday',
      name: 'Holiday Trading Command Center — BFCM & December Peak',
      description: 'A very long description that pushes the character counter close to its limit. Covers storefront revenue, campaign attribution, fulfillment backlog, support ticket load, and the retail POS lanes across all locations during the holiday peak trading window.',
      icon: 'rocket',
      accent: 'warning'
    })
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DashboardFormDialog
    },
    data: () => ({
      which: 'create' as string
    }),
    template: \`
      <div class="d-flex ga-2 flex-wrap">
        <v-btn variant="outlined" class="text-none" @click="which = 'create'">Create</v-btn>
        <v-btn variant="outlined" class="text-none" @click="which = 'edit'">Edit</v-btn>

        <DashboardFormDialog :model-value="which === 'create'" account-id="2000290" @update:model-value="which = ''" />
        <DashboardFormDialog
          :model-value="which === 'edit'"
          account-id="2000290"
          :dashboard="{ id: 'd1', name: 'Lifecycle Health', description: 'Retention and winback at a glance.', accent: 'violet', icon: 'activity' } as never"
          @update:model-value="which = ''"
        />
      </div>
    \`
  }),
  args: {} as never
}`,...a.parameters?.docs?.source},description:{story:"Two structures, driven by whether a `dashboard` is passed: **create** and **edit**. The\nmode label rides on `MpDialog`'s `eyebrow` and the live name on its `title`, so the header\nnarrates what is about to happen without a second heading.",...a.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DashboardFormDialog
    },
    data: () => ({
      open: true
    }),
    template: \`
      <div>
        <v-btn variant="outlined" class="text-none" @click="open = true">New dashboard</v-btn>
        <DashboardFormDialog v-model="open" account-id="2000290" />
      </div>
    \`
  }),
  args: {} as never
}`,...t.parameters?.docs?.source},description:{story:"There is no `size` prop — this is `MpDialog`'s `sm` (440px). Two fields do not need a wide\nmeasure, and a name field stretched to 880px reads worse, not better. Phase 4 replaced this\ncomponent's own `max-width=\"560\"` plus `pa-5 / pa-5 / pa-4` bands with the shell's ramp and\nits one 20px inset.",...t.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DashboardFormDialog
    },
    data: () => ({
      which: '' as string
    }),
    template: \`
      <div class="d-flex ga-2 flex-wrap">
        <v-btn variant="outlined" class="text-none" @click="which = 'empty'">Empty — submit disabled</v-btn>
        <v-btn variant="outlined" class="text-none" @click="which = 'filled'">Filled</v-btn>

        <DashboardFormDialog :model-value="which === 'empty'" account-id="2000290" @update:model-value="which = ''" />
        <DashboardFormDialog
          :model-value="which === 'filled'"
          account-id="2000290"
          :dashboard="{ id: 'd2', name: 'Revenue Watch', description: 'Daily revenue, channel mix and refunds.', accent: 'emerald', icon: 'dollar-sign' } as never"
          @update:model-value="which = ''"
        />
      </div>
    \`
  }),
  args: {} as never
}`,...o.parameters?.docs?.source},description:{story:"Empty (submit disabled), typed, and the counter/validation states on both fields. The\ndialog is `persistent`, so the scrim and Esc will not discard a half-typed name.",...o.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DashboardFormDialog,
      MpEmptyState
    },
    data: () => ({
      open: false
    }),
    template: \`
      <v-card flat border rounded="lg">
        <MpEmptyState
          title="No dashboards yet"
          icon="layout-dashboard"
          description="A dashboard is a saved layout of widgets. Start with a blank one and add widgets as you go."
          action-label="New dashboard"
          action-icon="plus"
          @action="open = true"
        />
        <DashboardFormDialog v-model="open" account-id="2000290" />
      </v-card>
    \`
  }),
  args: {} as never
}`,...r.parameters?.docs?.source},description:{story:`**In context.** The dialog opening from a dashboard switcher, the way it does in the product
— an empty-state card whose primary action is "New dashboard".`,...r.parameters?.docs?.description}}};const T=["Create","Edit","EditLongContent","Variants","Sizes","States","InContextNewDashboard"];export{n as Create,d as Edit,s as EditLongContent,r as InContextNewDashboard,t as Sizes,o as States,a as Variants,T as __namedExportsOrder,E as default};
