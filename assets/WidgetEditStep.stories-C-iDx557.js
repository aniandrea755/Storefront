import{r as d,w as m}from"./iframe-DH-XNaA6.js";import{W as a}from"./WidgetEditStep-BVKr74so.js";import"./preload-helper-PPVm8Dsz.js";import"./DashboardWidgetCard-BmjV-M4m.js";import"./chartPalette-BfEQgAlK.js";import"./useAnalytics-DmRrnWWK.js";import"./useCampaigns-DddlU2Kc.js";import"./journeyFlowData-BfF7KkYe.js";import"./useOnboarding-Bm2wJjXK.js";import"./useAccounts-BCL4QMJk.js";import"./usePlg-Bc4Wejg8.js";import"./useFolders-CIS5jxP4.js";import"./useCommerce-rriUBVdv.js";import"./useContacts-Cjs8oDJ0.js";import"./useMerchandising-Ce5TVmdX.js";import"./useSalesChannels-DWI5c6z4.js";import"./useRetail-C5-y3KHA.js";import"./useTickets-DLzlFmOC.js";import"./dottedChartMath-ByfhYLhZ.js";import"./formatCurrency-BbaxPn65.js";import"./formatNumber-DWsT9dxl.js";import"./useElementSize-BFN2tl5Q.js";import"./useRelativeTime-DyM3a_2d.js";import"./metricCatalog-laA4Pjy5.js";import"./MpSourceCloudChip-ByfVnFKT.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./DvOrbitOrb-Dlz_gu7F.js";import"./widgetSizePresets-CKImfI68.js";import"./DashboardChartWidget-tw2r7p1S.js";import"./useAppTheme-BnoIuyqv.js";import"./DashboardKpiWidget-BLScmWMn.js";import"./DashboardPieWidget--1ninr4S.js";import"./DashboardActivityWidget-pR0ngU2P.js";import"./DashboardAttentionWidget-C1rYb8DH.js";import"./useInitialLoad-Dt2KE4t8.js";import"./DashboardInsightsWidget-B-3PqCs1.js";import"./DashboardTableWidget-BIEL_W1b.js";import"./MpStatusChip-BgtNpj8f.js";import"./DashboardMetricExplorerWidget-DswncVg4.js";import"./DashboardFunnelWidget-CI6GIVx8.js";import"./DashboardDonutWidget-DM8JqTkM.js";import"./DtLegendList-BmDUmuW-.js";import"./DashboardGaugeWidget-CNm0kBHK.js";import"./DtGauge-CY6pl-Dt.js";import"./DashboardBarListWidget-D_aEGGWC.js";import"./DtDottedBar-3LrRz6uc.js";import"./DashboardPaletteWidget-C07GVCFs.js";import"./DashboardStackedBarWidget-BhMEDbOf.js";import"./DashboardBreakdownWidget-Dg8Cj2dO.js";import"./DashboardTabsWidget-CZ7N3Vfb.js";import"./DashboardHeatmapWidget-Cl2u9lvs.js";import"./DashboardWidgetActionMenu-DQu_wH_Q.js";import"./MpMenuItem-D9v8-M9a.js";import"./MpRowActionsMenu-B3n7Nt9u.js";import"./MpSegmentedControl-BADxSX_o.js";import"./MpFormField-BzBLjfV3.js";import"./MpFormGrid-CIGBvnp2.js";import"./MpFormSection-BK5pVmwO.js";const c={rangePreset:"last_30_days",grain:"daily",comparison:"previous_period"},l={dashboardId:"2000290-overview",type:"bar",title:"Revenue by Channel",subtitle:"Compare revenue across sales channels",dataSource:"commerce",metricId:"commerce_revenue_by_channel",chartVariant:"vertical",drilldown:{routeName:"SalesSummary",label:"Open sales summary"}},u={dashboardId:"2000290-overview",type:"kpi",title:"Revenue",dataSource:"commerce",metricId:"commerce_revenue",drilldown:{routeName:"SalesOrders",label:"Open sales orders"}},Se={title:"Product/Dashboards/Wizard/WidgetEditStep",component:a,tags:["autodocs"],parameters:{docs:{description:{component:"Step 2 of the widget wizard: edit title/subtitle, switch chart type (bar / column / area / pie — only for chart-capable drafts), and watch a live `DashboardWidgetCard` preview built from the draft. Emits `update:draft` on every change."}}},args:{accountId:"2000290",draft:l,filters:c},argTypes:{accountId:{control:"text",description:"Account the widget belongs to, used to resolve the live preview data."},draft:{control:"object",description:"`DashboardWidgetDraft` under edit. The step emits `update:draft` on every change, so the host owns the value."},filters:{control:"object",description:"`DashboardFilterState` used to render the live preview, so what you configure is what the dashboard will show."}},render:e=>({components:{WidgetEditStep:a},setup(){const p=d({...e.draft});return m(()=>e.draft,n=>{p.value={...n}}),{args:e,draft:p}},template:`
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
