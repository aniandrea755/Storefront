import{r as d}from"./iframe-DH-XNaA6.js";import{W as a}from"./WidgetWizardDrawer-Bqsaquwb.js";import"./preload-helper-PPVm8Dsz.js";import"./MpFormDrawer-cMf60X6E.js";import"./useFocusTrap-DNOqYf4B.js";import"./useScrollEdges-CBa2dNoC.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./MpConfirmDialog-Brqm1ewS.js";import"./MpDialog-vzXqpvNK.js";import"./metricCatalog-laA4Pjy5.js";import"./useCopilot-wqOYyajU.js";import"./useDashboards-BHTIT6Rb.js";import"./useAccounts-BCL4QMJk.js";import"./widgetSizePresets-CKImfI68.js";import"./WidgetLibraryStep-BhlpUw-Z.js";import"./WidgetEditStep-BVKr74so.js";import"./DashboardWidgetCard-BmjV-M4m.js";import"./chartPalette-BfEQgAlK.js";import"./useAnalytics-DmRrnWWK.js";import"./useCampaigns-DddlU2Kc.js";import"./journeyFlowData-BfF7KkYe.js";import"./useOnboarding-Bm2wJjXK.js";import"./usePlg-Bc4Wejg8.js";import"./useFolders-CIS5jxP4.js";import"./useCommerce-rriUBVdv.js";import"./useContacts-Cjs8oDJ0.js";import"./useMerchandising-Ce5TVmdX.js";import"./useSalesChannels-DWI5c6z4.js";import"./useRetail-C5-y3KHA.js";import"./useTickets-DLzlFmOC.js";import"./dottedChartMath-ByfhYLhZ.js";import"./formatCurrency-BbaxPn65.js";import"./formatNumber-DWsT9dxl.js";import"./useElementSize-BFN2tl5Q.js";import"./useRelativeTime-DyM3a_2d.js";import"./MpSourceCloudChip-ByfVnFKT.js";import"./DvOrbitOrb-Dlz_gu7F.js";import"./DashboardChartWidget-tw2r7p1S.js";import"./useAppTheme-BnoIuyqv.js";import"./DashboardKpiWidget-BLScmWMn.js";import"./DashboardPieWidget--1ninr4S.js";import"./DashboardActivityWidget-pR0ngU2P.js";import"./DashboardAttentionWidget-C1rYb8DH.js";import"./useInitialLoad-Dt2KE4t8.js";import"./DashboardInsightsWidget-B-3PqCs1.js";import"./DashboardTableWidget-BIEL_W1b.js";import"./MpStatusChip-BgtNpj8f.js";import"./DashboardMetricExplorerWidget-DswncVg4.js";import"./DashboardFunnelWidget-CI6GIVx8.js";import"./DashboardDonutWidget-DM8JqTkM.js";import"./DtLegendList-BmDUmuW-.js";import"./DashboardGaugeWidget-CNm0kBHK.js";import"./DtGauge-CY6pl-Dt.js";import"./DashboardBarListWidget-D_aEGGWC.js";import"./DtDottedBar-3LrRz6uc.js";import"./DashboardPaletteWidget-C07GVCFs.js";import"./DashboardStackedBarWidget-BhMEDbOf.js";import"./DashboardBreakdownWidget-Dg8Cj2dO.js";import"./DashboardTabsWidget-CZ7N3Vfb.js";import"./DashboardHeatmapWidget-Cl2u9lvs.js";import"./DashboardWidgetActionMenu-DQu_wH_Q.js";import"./MpMenuItem-D9v8-M9a.js";import"./MpRowActionsMenu-B3n7Nt9u.js";import"./MpSegmentedControl-BADxSX_o.js";import"./MpFormField-BzBLjfV3.js";import"./MpFormGrid-CIGBvnp2.js";import"./MpFormSection-BK5pVmwO.js";const m={rangePreset:"last_30_days",grain:"daily",comparison:"previous_period"},c={dashboardId:"2000290-overview",widgetId:"widget-demo",type:"bar",title:"Revenue by Channel",subtitle:"Compare revenue across sales channels",dataSource:"commerce",metricId:"commerce_revenue_by_channel",chartVariant:"vertical",drilldown:{routeName:"SalesSummary",label:"Open sales summary"}},l={dashboardId:"2000290-overview",type:"timeseries",title:"Campaign Revenue Trend",dataSource:"marketing",metricId:"marketing_total_campaign_revenue",chartVariant:"area",drilldown:{routeName:"CampaignReports",label:"Open campaign reports"},aiProvenance:{prompt:"show me how campaign revenue is trending",summary:"Time series of attributed campaign revenue."}},_e={title:"Product/Dashboards/WidgetWizardDrawer",component:a,tags:["autodocs"],parameters:{docs:{description:{component:"Two-step add/edit widget flow inside an `MpFormDrawer`: pick a widget from the library, then refine title/subtitle/chart type with a live preview. Passing an `initialDraft` with a `widgetId` (or AI provenance) skips straight to the edit step."}}},args:{accountId:"2000290",dashboardId:"2000290-overview",dashboardFilters:m,initialDraft:null},argTypes:{accountId:{control:"text",description:"Account the new widget belongs to."},dashboardId:{control:"text",description:"Dashboard the wizard will add the finished widget to."},dashboardFilters:{control:"object",description:"`DashboardFilterState` inherited from the dashboard, so the wizard preview shows the widget under the filters it will actually run under."},initialDraft:{control:"object",description:"Seed the wizard with an existing draft to edit instead of creating. When it carries a `widgetId` the drawer switches to Edit mode (title, subtitle and the save action all change)."}},render:e=>({components:{WidgetWizardDrawer:a},setup(){const p=d(!0);return{args:e,open:p}},template:`
      <section style="min-height:720px;background:rgb(var(--v-theme-background));padding:24px;">
        <v-btn color="primary" prepend-icon="plus" @click="open = true">Add widget</v-btn>
        <WidgetWizardDrawer v-bind="args" v-model="open" />
      </section>
    `})},o={},s={args:{initialDraft:c}},n={args:{initialDraft:l}},r={render:e=>({components:{WidgetWizardDrawer:a},setup:()=>({args:e}),template:'<WidgetWizardDrawer v-bind="args" />'})},t={render:e=>({components:{WidgetWizardDrawer:a},setup:()=>({args:e}),template:'<WidgetWizardDrawer v-bind="args" />'})},i={render:e=>({components:{WidgetWizardDrawer:a},setup:()=>({args:e}),template:'<WidgetWizardDrawer v-bind="args" />'})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    initialDraft: EDIT_DRAFT
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    initialDraft: DAVINCI_DRAFT
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      WidgetWizardDrawer
    },
    setup: () => ({
      args
    }),
    template: \`<WidgetWizardDrawer v-bind="args" />\`
  })
}`,...r.parameters?.docs?.source},description:{story:"The wizard's two structures are its two steps: **library** (pick a widget type) and **edit**\n(configure the one you picked). Both live in the same `MpFormDrawer` shell, so they share\nits header/body/footer rhythm.",...r.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      WidgetWizardDrawer
    },
    setup: () => ({
      args
    }),
    template: \`<WidgetWizardDrawer v-bind="args" />\`
  })
}`,...t.parameters?.docs?.source},description:{story:"There is no `size` prop. The drawer is wider than the 480 default because the edit step puts\na live preview beside the form; the width is set once on the `MpFormDrawer` it composes.\nBelow 640px it goes full-bleed like every other drawer.",...t.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      WidgetWizardDrawer
    },
    setup: () => ({
      args
    }),
    template: \`<WidgetWizardDrawer v-bind="args" />\`
  })
}`,...i.parameters?.docs?.source},description:{story:`Opening on the library step, opening straight into edit for an existing widget, and the
 Da Vinci draft hand-off where the wizard arrives pre-filled.`,...i.parameters?.docs?.description}}};const Te=["LibraryStep","EditExistingWidget","DaVinciDraft","Variants","Sizes","States"];export{n as DaVinciDraft,s as EditExistingWidget,o as LibraryStep,t as Sizes,i as States,r as Variants,Te as __namedExportsOrder,_e as default};
