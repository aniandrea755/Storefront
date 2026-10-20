import{D as s}from"./DashboardGrid-TRUEMPXe.js";import"./iframe-DH-XNaA6.js";import"./preload-helper-PPVm8Dsz.js";import"./chartPalette-BfEQgAlK.js";import"./MpEmptyState-BasWsDO3.js";import"./MpIllustration-C2XUoC6J.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./widgetSizePresets-CKImfI68.js";import"./DashboardWidgetCard-BmjV-M4m.js";import"./useAnalytics-DmRrnWWK.js";import"./useCampaigns-DddlU2Kc.js";import"./journeyFlowData-BfF7KkYe.js";import"./useOnboarding-Bm2wJjXK.js";import"./useAccounts-BCL4QMJk.js";import"./usePlg-Bc4Wejg8.js";import"./useFolders-CIS5jxP4.js";import"./useCommerce-rriUBVdv.js";import"./useContacts-Cjs8oDJ0.js";import"./useMerchandising-Ce5TVmdX.js";import"./useSalesChannels-DWI5c6z4.js";import"./useRetail-C5-y3KHA.js";import"./useTickets-DLzlFmOC.js";import"./dottedChartMath-ByfhYLhZ.js";import"./formatCurrency-BbaxPn65.js";import"./formatNumber-DWsT9dxl.js";import"./useElementSize-BFN2tl5Q.js";import"./useRelativeTime-DyM3a_2d.js";import"./metricCatalog-laA4Pjy5.js";import"./MpSourceCloudChip-ByfVnFKT.js";import"./DvOrbitOrb-Dlz_gu7F.js";import"./DashboardChartWidget-tw2r7p1S.js";import"./useAppTheme-BnoIuyqv.js";import"./DashboardKpiWidget-BLScmWMn.js";import"./DashboardPieWidget--1ninr4S.js";import"./DashboardActivityWidget-pR0ngU2P.js";import"./DashboardAttentionWidget-C1rYb8DH.js";import"./useInitialLoad-Dt2KE4t8.js";import"./DashboardInsightsWidget-B-3PqCs1.js";import"./DashboardTableWidget-BIEL_W1b.js";import"./MpStatusChip-BgtNpj8f.js";import"./DashboardMetricExplorerWidget-DswncVg4.js";import"./DashboardFunnelWidget-CI6GIVx8.js";import"./DashboardDonutWidget-DM8JqTkM.js";import"./DtLegendList-BmDUmuW-.js";import"./DashboardGaugeWidget-CNm0kBHK.js";import"./DtGauge-CY6pl-Dt.js";import"./DashboardBarListWidget-D_aEGGWC.js";import"./DtDottedBar-3LrRz6uc.js";import"./DashboardPaletteWidget-C07GVCFs.js";import"./DashboardStackedBarWidget-BhMEDbOf.js";import"./DashboardBreakdownWidget-Dg8Cj2dO.js";import"./DashboardTabsWidget-CZ7N3Vfb.js";import"./DashboardHeatmapWidget-Cl2u9lvs.js";import"./DashboardWidgetActionMenu-DQu_wH_Q.js";import"./MpMenuItem-D9v8-M9a.js";import"./MpRowActionsMenu-B3n7Nt9u.js";import"./MpSegmentedControl-BADxSX_o.js";import"./DashboardSetupGuide-qovM6WCW.js";import"./_commonjsHelpers-CqkleIqs.js";const d={rangePreset:"last_30_days",grain:"daily",comparison:"previous_period"};function r(e){return new Date(Date.now()-e*6e4).toISOString()}const p=[{id:"grid-kpi-revenue",type:"kpi",title:"Revenue",dataSource:"commerce",metricId:"commerce_revenue",layout:{x:0,y:0,w:4,h:4,minW:2,minH:2},drilldown:{routeName:"SalesOrders",label:"Open sales orders"},lastRefreshedAt:r(12)},{id:"grid-kpi-orders",type:"kpi",title:"Orders",dataSource:"commerce",metricId:"commerce_orders",layout:{x:4,y:0,w:4,h:4,minW:2,minH:2},drilldown:{routeName:"SalesOrders",label:"Open sales orders"},lastRefreshedAt:r(30)},{id:"grid-kpi-aov",type:"kpi",title:"Average Order Value",dataSource:"commerce",metricId:"commerce_aov",layout:{x:8,y:0,w:4,h:4,minW:2,minH:2},drilldown:{routeName:"SalesOrders",label:"Open sales orders"},lastRefreshedAt:r(65)},{id:"grid-timeseries",type:"timeseries",title:"Revenue Over Time",dataSource:"commerce",metricId:"commerce_revenue_over_time",chartVariant:"area",layout:{x:0,y:4,w:7,h:7,minW:2,minH:3},drilldown:{routeName:"OrdersReport",label:"Open orders report"},lastRefreshedAt:r(18)},{id:"grid-table",type:"table",title:"Top Campaigns",dataSource:"marketing",metricId:"marketing_top_campaigns",layout:{x:7,y:4,w:5,h:7,minW:2,minH:3},drilldown:{routeName:"CampaignReports",label:"Open campaign reports"},lastRefreshedAt:r(41)}],he={title:"Product/Dashboards/DashboardGrid",component:s,tags:["autodocs"],parameters:{docs:{description:{component:"12-column drag-and-drop widget grid (grid-layout-plus). Renders a `DashboardWidgetCard` (or setup guide) per widget, an empty state when there are no widgets, and switches to a stacked list below the md breakpoint. Layout is always directly editable on desktop — drag by the card header/handle, resize from the corner; column guides appear only during an interaction."}}},args:{accountId:"2000290",dashboardId:"2000290-overview",widgets:p,filters:d},argTypes:{accountId:{control:"text",description:"Account the dashboard belongs to. Passed down to every widget."},dashboardId:{control:"text",description:"Id of the dashboard being rendered."},setupTasks:{control:"object",description:"`SetupGuideTask[]`. When present, the setup guide renders as the first grid item; omit it once setup is done."},setupCompleted:{control:"number",description:"How many setup tasks are done — the numerator in the guides progress line."},setupProgress:{control:"number",description:"Setup completion percentage (0-100) for the guides progress bar."},setupTotal:{control:"number",description:"Overall setup task count when `setupTasks` is a subset (e.g. the next 5 of 16)."},setupGuideRoute:{control:"object",description:"`RouteLocationRaw` for the guides View full guide link. Omit it and the link is not rendered."},widgets:{control:"object",description:"`DashboardWidget[]` — each carries its own `layout` (`x`, `y`, `w`, `h`, `minW`, `minH`) in grid units, so the array is both the content and the layout. Reordering it does not move anything; changing `layout` does."},filters:{control:"object",description:"`DashboardFilterState` — `{ rangePreset, grain, comparison }`, applied to every widget in the grid. One filter state for the whole dashboard, not per widget."}},render:e=>({components:{DashboardGrid:s},setup:()=>({args:e}),template:`
      <div style="max-width:1180px;">
        <DashboardGrid v-bind="args" />
      </div>
    `})},i={},n={args:{widgets:[]}},t={render:e=>({components:{DashboardGrid:s},setup:()=>({args:e}),template:'<DashboardGrid v-bind="args" />'}),parameters:{canvas:"full"}},o={render:e=>({components:{DashboardGrid:s},setup:()=>({args:e}),template:'<DashboardGrid v-bind="args" />'}),parameters:{canvas:"full"}},a={render:e=>({components:{DashboardGrid:s},setup:()=>({args:e}),template:'<DashboardGrid v-bind="args" />'}),parameters:{canvas:"full"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    widgets: []
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      DashboardGrid
    },
    setup: () => ({
      args
    }),
    template: \`<DashboardGrid v-bind="args" />\`
  }),
  parameters: {
    canvas: 'full'
  }
}`,...t.parameters?.docs?.source},description:{story:"Two structures: a populated grid, and the empty grid that invites the first widget. The grid\nitself only places cards — every inset you see inside them belongs to `DashboardWidgetCard`\nand the `component.card.*` standard (P4-1).",...t.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      DashboardGrid
    },
    setup: () => ({
      args
    }),
    template: \`<DashboardGrid v-bind="args" />\`
  }),
  parameters: {
    canvas: 'full'
  }
}`,...o.parameters?.docs?.source},description:{story:"There is no `size` prop. Widget sizes are per-widget (`widgetSizePresets.ts`) and the grid\nreflows them; the gap between cells is `component.card.gap` (16), the same token that spaces\na card's own sections, so the rhythm inside a card and the rhythm between cards agree.",...o.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      DashboardGrid
    },
    setup: () => ({
      args
    }),
    template: \`<DashboardGrid v-bind="args" />\`
  }),
  parameters: {
    canvas: 'full'
  }
}`,...a.parameters?.docs?.source},description:{story:"Populated, empty, and edit mode where every card grows a drag grip.",...a.parameters?.docs?.description}}};const be=["Populated","Empty","Variants","Sizes","States"];export{n as Empty,i as Populated,o as Sizes,a as States,t as Variants,be as __namedExportsOrder,he as default};
