import{r as d,w as m}from"./iframe-BqHSr5b_.js";import{W as a}from"./WidgetEditStep-BpeVdfzJ.js";import"./preload-helper-PPVm8Dsz.js";import"./DashboardWidgetCard-DaXby3tE.js";import"./chartPalette-Bznt7cdU.js";import"./useAnalytics-CLoG1RFa.js";import"./useCampaigns-BnWYHyNm.js";import"./journeyFlowData-BfF7KkYe.js";import"./useOnboarding-rnLK_TX1.js";import"./useAccounts-BNKGYLRf.js";import"./usePlg-ML6QTG6m.js";import"./useFolders-Bmdz7Ozg.js";import"./useCommerce-CNvvpQph.js";import"./useContacts-U56gUWGD.js";import"./useMerchandising-Bm9oyc8k.js";import"./useSalesChannels-C-UC6oeI.js";import"./useRetail-e8HtNslC.js";import"./useTickets-bvq8mPgS.js";import"./dottedChartMath-B73keMRT.js";import"./formatCurrency-BbaxPn65.js";import"./formatNumber-DWsT9dxl.js";import"./useElementSize-DtWwGEtN.js";import"./useRelativeTime-BAck8X0K.js";import"./metricCatalog-laA4Pjy5.js";import"./MpSourceCloudChip-Cf2Bi_s5.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./DvOrbitOrb-CursqOcX.js";import"./widgetSizePresets-CKImfI68.js";import"./DashboardChartWidget-CfVsbL1c.js";import"./useAppTheme-d8BR_Qbt.js";import"./DashboardKpiWidget-BhUredq1.js";import"./DashboardPieWidget-B8Ny9-Hd.js";import"./DashboardActivityWidget-CQKJceXr.js";import"./DashboardAttentionWidget-DmoClvZ7.js";import"./useInitialLoad-DE1GB-8y.js";import"./DashboardInsightsWidget-Cn1xLAnT.js";import"./DashboardTableWidget-C0z6zIDn.js";import"./MpStatusChip-Cvm9kx4z.js";import"./DashboardMetricExplorerWidget-C7cwNO37.js";import"./DashboardFunnelWidget-DYplxqaW.js";import"./DashboardDonutWidget-Jjt4Tzp7.js";import"./DtLegendList-Bo3rUgjb.js";import"./DashboardGaugeWidget-Bh2w5dFl.js";import"./DtGauge-Bqcr3iRc.js";import"./DashboardBarListWidget-DoPvfrIA.js";import"./DtDottedBar-DA114-i3.js";import"./DashboardPaletteWidget-D0thZD2A.js";import"./DashboardStackedBarWidget-C9q0IL8K.js";import"./DashboardBreakdownWidget-CfzO1TRw.js";import"./DashboardTabsWidget-JO2LBr3o.js";import"./DashboardHeatmapWidget-CR4TJLsk.js";import"./DashboardWidgetActionMenu-D6Ql_uPY.js";import"./MpMenuItem-C7bGP4dE.js";import"./MpRowActionsMenu-DfQDq_iX.js";import"./MpSegmentedControl-O78n2lBW.js";import"./MpFormField-eWrsvwna.js";import"./MpFormGrid-D0pxdSe6.js";import"./MpFormSection-CmGpUCf7.js";const c={rangePreset:"last_30_days",grain:"daily",comparison:"previous_period"},l={dashboardId:"2000290-overview",type:"bar",title:"Revenue by Channel",subtitle:"Compare revenue across sales channels",dataSource:"commerce",metricId:"commerce_revenue_by_channel",chartVariant:"vertical",drilldown:{routeName:"SalesSummary",label:"Open sales summary"}},u={dashboardId:"2000290-overview",type:"kpi",title:"Revenue",dataSource:"commerce",metricId:"commerce_revenue",drilldown:{routeName:"SalesOrders",label:"Open sales orders"}},Se={title:"Product/Dashboards/Wizard/WidgetEditStep",component:a,tags:["autodocs"],parameters:{docs:{description:{component:"Step 2 of the widget wizard: edit title/subtitle, switch chart type (bar / column / area / pie — only for chart-capable drafts), and watch a live `DashboardWidgetCard` preview built from the draft. Emits `update:draft` on every change."}}},args:{accountId:"2000290",draft:l,filters:c},argTypes:{accountId:{control:"text",description:"Account the widget belongs to, used to resolve the live preview data."},draft:{control:"object",description:"`DashboardWidgetDraft` under edit. The step emits `update:draft` on every change, so the host owns the value."},filters:{control:"object",description:"`DashboardFilterState` used to render the live preview, so what you configure is what the dashboard will show."}},render:e=>({components:{WidgetEditStep:a},setup(){const p=d({...e.draft});return m(()=>e.draft,n=>{p.value={...n}}),{args:e,draft:p}},template:`
      <div style="max-width:560px;">
        <WidgetEditStep
          :account-id="args.accountId"
          :draft="draft"
          :filters="args.filters"
          @update:draft="draft = $event"
        />
      </div>
    `})},i={},s={args:{draft:u}},t={render:e=>({components:{WidgetEditStep:a},setup:()=>({args:e}),template:'<WidgetEditStep v-bind="args" />'})},r={render:e=>({components:{WidgetEditStep:a},setup:()=>({args:e}),template:'<WidgetEditStep v-bind="args" />'})},o={render:e=>({components:{WidgetEditStep:a},setup:()=>({args:e}),template:'<WidgetEditStep v-bind="args" />'})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    draft: KPI_DRAFT
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      WidgetEditStep
    },
    setup: () => ({
      args
    }),
    template: \`<WidgetEditStep v-bind="args" />\`
  })
}`,...t.parameters?.docs?.source},description:{story:`The step renders a different form per widget type — chart, KPI, table — against the same
 live preview. Those are its variants.`,...t.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      WidgetEditStep
    },
    setup: () => ({
      args
    }),
    template: \`<WidgetEditStep v-bind="args" />\`
  })
}`,...r.parameters?.docs?.source},description:{story:"There is no `size` prop — the step fills the wizard drawer's body and inherits its inset.\n Its field rhythm comes from `component.field.groupGap`, the same one settings pages use.",...r.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      WidgetEditStep
    },
    setup: () => ({
      args
    }),
    template: \`<WidgetEditStep v-bind="args" />\`
  })
}`,...o.parameters?.docs?.source},description:{story:"Editing a chart and editing a KPI — the preview re-renders as the form changes.",...o.parameters?.docs?.description}}};const be=["ChartWidget","KpiWidget","Variants","Sizes","States"];export{i as ChartWidget,s as KpiWidget,r as Sizes,o as States,t as Variants,be as __namedExportsOrder,Se as default};
