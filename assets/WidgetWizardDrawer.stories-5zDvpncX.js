import{r as d}from"./iframe-BqHSr5b_.js";import{W as a}from"./WidgetWizardDrawer-BItuRhtA.js";import"./preload-helper-PPVm8Dsz.js";import"./MpFormDrawer-NT-xQk6b.js";import"./useFocusTrap-oS9hmom4.js";import"./useScrollEdges-B2McRpMX.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./MpConfirmDialog-g8XCZO_Q.js";import"./MpDialog-F4WZRRS8.js";import"./metricCatalog-laA4Pjy5.js";import"./useCopilot-Dk9L7vKg.js";import"./useDashboards-DShOAHth.js";import"./useAccounts-BNKGYLRf.js";import"./widgetSizePresets-CKImfI68.js";import"./WidgetLibraryStep-CeCsyUyR.js";import"./WidgetEditStep-BpeVdfzJ.js";import"./DashboardWidgetCard-DaXby3tE.js";import"./chartPalette-Bznt7cdU.js";import"./useAnalytics-CLoG1RFa.js";import"./useCampaigns-BnWYHyNm.js";import"./journeyFlowData-BfF7KkYe.js";import"./useOnboarding-rnLK_TX1.js";import"./usePlg-ML6QTG6m.js";import"./useFolders-Bmdz7Ozg.js";import"./useCommerce-CNvvpQph.js";import"./useContacts-U56gUWGD.js";import"./useMerchandising-Bm9oyc8k.js";import"./useSalesChannels-C-UC6oeI.js";import"./useRetail-e8HtNslC.js";import"./useTickets-bvq8mPgS.js";import"./dottedChartMath-B73keMRT.js";import"./formatCurrency-BbaxPn65.js";import"./formatNumber-DWsT9dxl.js";import"./useElementSize-DtWwGEtN.js";import"./useRelativeTime-BAck8X0K.js";import"./MpSourceCloudChip-Cf2Bi_s5.js";import"./DvOrbitOrb-CursqOcX.js";import"./DashboardChartWidget-CfVsbL1c.js";import"./useAppTheme-d8BR_Qbt.js";import"./DashboardKpiWidget-BhUredq1.js";import"./DashboardPieWidget-B8Ny9-Hd.js";import"./DashboardActivityWidget-CQKJceXr.js";import"./DashboardAttentionWidget-DmoClvZ7.js";import"./useInitialLoad-DE1GB-8y.js";import"./DashboardInsightsWidget-Cn1xLAnT.js";import"./DashboardTableWidget-C0z6zIDn.js";import"./MpStatusChip-Cvm9kx4z.js";import"./DashboardMetricExplorerWidget-C7cwNO37.js";import"./DashboardFunnelWidget-DYplxqaW.js";import"./DashboardDonutWidget-Jjt4Tzp7.js";import"./DtLegendList-Bo3rUgjb.js";import"./DashboardGaugeWidget-Bh2w5dFl.js";import"./DtGauge-Bqcr3iRc.js";import"./DashboardBarListWidget-DoPvfrIA.js";import"./DtDottedBar-DA114-i3.js";import"./DashboardPaletteWidget-D0thZD2A.js";import"./DashboardStackedBarWidget-C9q0IL8K.js";import"./DashboardBreakdownWidget-CfzO1TRw.js";import"./DashboardTabsWidget-JO2LBr3o.js";import"./DashboardHeatmapWidget-CR4TJLsk.js";import"./DashboardWidgetActionMenu-D6Ql_uPY.js";import"./MpMenuItem-C7bGP4dE.js";import"./MpRowActionsMenu-DfQDq_iX.js";import"./MpSegmentedControl-O78n2lBW.js";import"./MpFormField-eWrsvwna.js";import"./MpFormGrid-D0pxdSe6.js";import"./MpFormSection-CmGpUCf7.js";const m={rangePreset:"last_30_days",grain:"daily",comparison:"previous_period"},c={dashboardId:"2000290-overview",widgetId:"widget-demo",type:"bar",title:"Revenue by Channel",subtitle:"Compare revenue across sales channels",dataSource:"commerce",metricId:"commerce_revenue_by_channel",chartVariant:"vertical",drilldown:{routeName:"SalesSummary",label:"Open sales summary"}},l={dashboardId:"2000290-overview",type:"timeseries",title:"Campaign Revenue Trend",dataSource:"marketing",metricId:"marketing_total_campaign_revenue",chartVariant:"area",drilldown:{routeName:"CampaignReports",label:"Open campaign reports"},aiProvenance:{prompt:"show me how campaign revenue is trending",summary:"Time series of attributed campaign revenue."}},_e={title:"Product/Dashboards/WidgetWizardDrawer",component:a,tags:["autodocs"],parameters:{docs:{description:{component:"Two-step add/edit widget flow inside an `MpFormDrawer`: pick a widget from the library, then refine title/subtitle/chart type with a live preview. Passing an `initialDraft` with a `widgetId` (or AI provenance) skips straight to the edit step."}}},args:{accountId:"2000290",dashboardId:"2000290-overview",dashboardFilters:m,initialDraft:null},argTypes:{accountId:{control:"text",description:"Account the new widget belongs to."},dashboardId:{control:"text",description:"Dashboard the wizard will add the finished widget to."},dashboardFilters:{control:"object",description:"`DashboardFilterState` inherited from the dashboard, so the wizard preview shows the widget under the filters it will actually run under."},initialDraft:{control:"object",description:"Seed the wizard with an existing draft to edit instead of creating. When it carries a `widgetId` the drawer switches to Edit mode (title, subtitle and the save action all change)."}},render:e=>({components:{WidgetWizardDrawer:a},setup(){const p=d(!0);return{args:e,open:p}},template:`
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
