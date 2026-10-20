import{D as i}from"./DvWidgetDraftCard-NdoIMi2K.js";import{u as v}from"./useDashboards-BHTIT6Rb.js";import"./iframe-DH-XNaA6.js";import"./preload-helper-PPVm8Dsz.js";import"./DvDraftPreview-D7UL2Kcx.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./DvRefineDialog-C_WDue3u.js";import"./MpDialog-vzXqpvNK.js";import"./useScrollEdges-CBa2dNoC.js";import"./MpFormField-BzBLjfV3.js";import"./MpFormGrid-CIGBvnp2.js";import"./MpFormSection-BK5pVmwO.js";import"./DvExpandDialog-IW0G3q6Q.js";import"./useAccounts-BCL4QMJk.js";import"./metricCatalog-laA4Pjy5.js";import"./widgetSizePresets-CKImfI68.js";const c="2000290",o="2000290-home",n={dashboardId:o,type:"timeseries",title:"Open Rate Trend",dataSource:"marketing",metricId:"marketing_open_rate_over_time",chartVariant:"line",drilldown:{routeName:"CampaignReports",label:"Open campaign reports"},aiProvenance:{prompt:"show open rate trend for last 30 days",summary:"Da Vinci mapped your prompt to Open Rate Trend as a timeseries widget."}},p={dashboardId:o,type:"kpi",title:"Revenue",dataSource:"commerce",metricId:"commerce_revenue",drilldown:{routeName:"SalesOrders",label:"Open sales orders"},aiProvenance:{prompt:"add a revenue kpi summary",summary:"Da Vinci mapped your prompt to Revenue as a kpi widget."}},m={dashboardId:o,type:"table",title:"Top Campaigns",dataSource:"marketing",metricId:"marketing_top_campaigns",drilldown:{routeName:"CampaignReports",label:"Open campaign reports"},aiProvenance:{prompt:"show a table of top campaigns",summary:"Da Vinci mapped your prompt to Top Campaigns as a table widget."}},W={title:"Product/Da Vinci/DvWidgetDraftCard",component:i,tags:["autodocs"],args:{accountId:c,dashboardId:o,draft:n,selected:!1},argTypes:{filters:{control:"object",description:"`DashboardFilterState` the preview renders under. Defaults to last 30 days / daily / previous period, so the card shows something sensible without one."},accountId:{control:"text",description:"Account the widget would be added to. Passed straight through to the dashboards store when the draft is accepted."},dashboardId:{control:"text",description:"Target dashboard id for the add action."},draft:{control:"object",description:"`DashboardWidgetDraft` this card represents — the title, type and data the preview renders."},selected:{control:"boolean",description:"Marks this card as the chosen draft in a multi-draft set. Selection is presentational; the host owns which id is selected."}},parameters:{docs:{description:{component:`
## Overview
DvWidgetDraftCard is the AI widget draft proposed by Da Vinci inside the copilot
drawer: type eyebrow + Draft badge, title block, a live \`DvDraftPreview\`, and an
"Add widget" action. Adding opens \`DvRefineDialog\` (rename / switch visualisation),
then commits the widget to the target dashboard via the dashboards store; the
maximize action opens \`DvExpandDialog\`. The full flow is interactive in this story —
after adding, the card dims into its "Added" state.
`}}},render:l=>({components:{DvWidgetDraftCard:i},setup(){return v().ensureAccountDashboards(c),{args:l}},template:`
      <div style="max-width: 360px;">
        <DvWidgetDraftCard v-bind="args" />
      </div>
    `})},e={},t={render:()=>({components:{DvWidgetDraftCard:i},setup:()=>({ts:n,kpi:p,tbl:m}),template:`
      <div class="d-flex flex-column ga-6">
        <div>
          <div class="text-caption text-medium-emphasis mb-2">timeseries</div>
          <DvWidgetDraftCard :draft="ts" />
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">kpi</div>
          <DvWidgetDraftCard :draft="kpi" />
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">table</div>
          <DvWidgetDraftCard :draft="tbl" />
        </div>
      </div>
    `}),args:{}},a={render:()=>({components:{DvWidgetDraftCard:i},setup:()=>({d:n}),template:`
      <div class="d-flex flex-column ga-6">
        <div>
          <div class="text-caption text-medium-emphasis mb-2">unselected</div>
          <DvWidgetDraftCard :draft="d" />
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">selected</div>
          <DvWidgetDraftCard :draft="d" selected />
        </div>
      </div>
    `}),args:{}},r={args:{draft:p}},d={args:{draft:m}},s={args:{selected:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source},description:{story:"Line-chart draft — the most common Da Vinci proposal.",...e.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DvWidgetDraftCard
    },
    setup: () => ({
      ts: TIMESERIES_DRAFT,
      kpi: KPI_DRAFT,
      tbl: TABLE_DRAFT
    }),
    template: \`
      <div class="d-flex flex-column ga-6">
        <div>
          <div class="text-caption text-medium-emphasis mb-2">timeseries</div>
          <DvWidgetDraftCard :draft="ts" />
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">kpi</div>
          <DvWidgetDraftCard :draft="kpi" />
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">table</div>
          <DvWidgetDraftCard :draft="tbl" />
        </div>
      </div>
    \`
  }),
  args: {} as never
}`,...t.parameters?.docs?.source},description:{story:`KPI quad draft.
Every draft type the card can preview.`,...t.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DvWidgetDraftCard
    },
    setup: () => ({
      d: TIMESERIES_DRAFT
    }),
    template: \`
      <div class="d-flex flex-column ga-6">
        <div>
          <div class="text-caption text-medium-emphasis mb-2">unselected</div>
          <DvWidgetDraftCard :draft="d" />
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">selected</div>
          <DvWidgetDraftCard :draft="d" selected />
        </div>
      </div>
    \`
  }),
  args: {} as never
}`,...a.parameters?.docs?.source},description:{story:"Selected vs unselected. Tab to the card to see the focus ring.",...a.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    draft: KPI_DRAFT
  }
}`,...r.parameters?.docs?.source},description:{story:"Mini-table draft.",...r.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    draft: TABLE_DRAFT
  }
}`,...d.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    selected: true
  }
}`,...s.parameters?.docs?.source},description:{story:"Selected ring — shown while Da Vinci is talking about this draft.",...s.parameters?.docs?.description}}};const k=["Default","Variants","States","KpiDraft","TableDraft","Selected"];export{e as Default,r as KpiDraft,s as Selected,a as States,d as TableDraft,t as Variants,k as __namedExportsOrder,W as default};
