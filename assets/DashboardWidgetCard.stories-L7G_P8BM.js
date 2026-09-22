import{b as t}from"./widgetSizePresets-CKImfI68.js";import{D as i}from"./DashboardWidgetCard-DaXby3tE.js";import"./iframe-BqHSr5b_.js";import"./preload-helper-PPVm8Dsz.js";import"./chartPalette-Bznt7cdU.js";import"./useAnalytics-CLoG1RFa.js";import"./useCampaigns-BnWYHyNm.js";import"./journeyFlowData-BfF7KkYe.js";import"./useOnboarding-rnLK_TX1.js";import"./useAccounts-BNKGYLRf.js";import"./usePlg-ML6QTG6m.js";import"./useFolders-Bmdz7Ozg.js";import"./useCommerce-CNvvpQph.js";import"./useContacts-U56gUWGD.js";import"./useMerchandising-Bm9oyc8k.js";import"./useSalesChannels-C-UC6oeI.js";import"./useRetail-e8HtNslC.js";import"./useTickets-bvq8mPgS.js";import"./dottedChartMath-B73keMRT.js";import"./formatCurrency-BbaxPn65.js";import"./formatNumber-DWsT9dxl.js";import"./useElementSize-DtWwGEtN.js";import"./useRelativeTime-BAck8X0K.js";import"./metricCatalog-laA4Pjy5.js";import"./MpSourceCloudChip-Cf2Bi_s5.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./DvOrbitOrb-CursqOcX.js";import"./DashboardChartWidget-CfVsbL1c.js";import"./useAppTheme-d8BR_Qbt.js";import"./DashboardKpiWidget-BhUredq1.js";import"./DashboardPieWidget-B8Ny9-Hd.js";import"./DashboardActivityWidget-CQKJceXr.js";import"./DashboardAttentionWidget-DmoClvZ7.js";import"./useInitialLoad-DE1GB-8y.js";import"./DashboardInsightsWidget-Cn1xLAnT.js";import"./DashboardTableWidget-C0z6zIDn.js";import"./MpStatusChip-Cvm9kx4z.js";import"./DashboardMetricExplorerWidget-C7cwNO37.js";import"./DashboardFunnelWidget-DYplxqaW.js";import"./DashboardDonutWidget-Jjt4Tzp7.js";import"./DtLegendList-Bo3rUgjb.js";import"./DashboardGaugeWidget-Bh2w5dFl.js";import"./DtGauge-Bqcr3iRc.js";import"./DashboardBarListWidget-DoPvfrIA.js";import"./DtDottedBar-DA114-i3.js";import"./DashboardPaletteWidget-D0thZD2A.js";import"./DashboardStackedBarWidget-C9q0IL8K.js";import"./DashboardBreakdownWidget-CfzO1TRw.js";import"./DashboardTabsWidget-JO2LBr3o.js";import"./DashboardHeatmapWidget-CR4TJLsk.js";import"./DashboardWidgetActionMenu-D6Ql_uPY.js";import"./MpMenuItem-C7bGP4dE.js";import"./MpRowActionsMenu-DfQDq_iX.js";import"./MpSegmentedControl-O78n2lBW.js";const x={rangePreset:"last_30_days",grain:"daily",comparison:"previous_period"};function a(e){return new Date(Date.now()-e*6e4).toISOString()}const b={id:"story-kpi",type:"kpi",title:"Revenue",dataSource:"commerce",metricId:"commerce_revenue",layout:t("kpi","M",{x:0,y:0}),drilldown:{routeName:"SalesOrders",label:"Open sales orders"},lastRefreshedAt:a(24)},u={id:"story-timeseries",type:"timeseries",title:"Revenue Over Time",dataSource:"commerce",metricId:"commerce_revenue_over_time",chartVariant:"area",layout:t("timeseries","M",{x:0,y:0}),drilldown:{routeName:"OrdersReport",label:"Open orders report"},lastRefreshedAt:a(51)},w={id:"story-bar",type:"bar",title:"Revenue by Channel",dataSource:"commerce",metricId:"commerce_revenue_by_channel",chartVariant:"vertical",layout:t("bar","M",{x:0,y:0}),drilldown:{routeName:"SalesSummary",label:"Open sales summary"},lastRefreshedAt:a(8)},y={id:"story-table",type:"table",title:"Top Campaigns",dataSource:"marketing",metricId:"marketing_top_campaigns",layout:t("table","M",{x:0,y:0}),drilldown:{routeName:"CampaignReports",label:"Open campaign reports"},lastRefreshedAt:a(95)},f={id:"story-activity",type:"activity",title:"Live activity",dataSource:"marketing",metricId:"marketing_live_activity",layout:t("activity","M",{x:0,y:0}),drilldown:{routeName:"CampaignReports",label:"Open campaign reports"},lastRefreshedAt:a(2)},D={id:"story-tabs",type:"tabs",title:"Recent activity",dataSource:"commerce",metricId:"overview_tabs",layout:t("table","M",{x:0,y:0}),lastRefreshedAt:a(6)},W={id:"story-attention",type:"attention",title:"Needs attention",dataSource:"commerce",metricId:"overview_attention",layout:t("table","M",{x:0,y:0}),lastRefreshedAt:a(11)},C={...u,id:"story-ai",title:"Campaign Revenue Trend",aiProvenance:{prompt:"show me how campaign revenue is trending this month",summary:"Time series of attributed campaign revenue."}},Ie={title:"Product/Dashboards/DashboardWidgetCard",component:i,tags:["autodocs"],parameters:{docs:{description:{component:"Frame for every dashboard widget: title/subtitle header, unified action menu (Expand, Edit, View report, Size presets, Remove), data body (KPI, chart, pie, table, or activity — resolved from the widget `metricId` via `useWidgetData` mock stores), and a source-cloud footer. `draggable` reveals the hover drag grip in grid context; `preview` renders the dashed wizard-preview style."}}},args:{accountId:"2000290",widget:u,filters:x,draggable:!1,preview:!1,showActions:!0},argTypes:{accountId:{control:"text",description:"Account the widget belongs to, used by the widget body to resolve its data."},widget:{control:"object",description:"`DashboardWidget` — its `type` selects which of the 17 widget bodies renders inside the card shell."},filters:{control:"object",description:"`DashboardFilterState` passed down to the widget body. Normally the dashboard-level filters, unchanged."},draggable:{control:"boolean",description:"Grid context only: reveals the drag grip on hover."},preview:{control:"boolean",description:"Renders the card as a non-interactive preview — used by the widget wizard and the copilot draft flow, where the card is a specimen rather than a live widget."},showActions:{control:"boolean",description:"Shows the floating action overlay (expand / edit / refresh / remove). Its geometry comes from `component.widget.actionSize|actionGap|actionInset`, and the card's header clearance is calc()ed from those, so hiding it does not leave a hole."}},render:e=>({components:{DashboardWidgetCard:i},setup:()=>({args:e}),template:`
      <div :style="{ height: args.widget.type === 'kpi' ? '200px' : '340px', maxWidth: args.widget.type === 'kpi' ? '340px' : '560px' }">
        <DashboardWidgetCard v-bind="args" />
      </div>
    `})},n={},p={args:{widget:b}},c={args:{widget:w}},g={args:{widget:y}},m={args:{widget:f}},h={args:{widget:C}},l={args:{draggable:!0}},v={args:{preview:!0,showActions:!1}},r={render:e=>({components:{DashboardWidgetCard:i},setup:()=>({args:e,kpi:b,tabs:D,attention:W}),template:`
      <div class="d-flex flex-column ga-8">
        <div>
          <div class="text-caption text-medium-emphasis mb-2">standard — card header (20/20/8) + card body (0/20/20)</div>
          <div style="height: 300px; max-width: 560px"><DashboardWidgetCard v-bind="args" /></div>
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">kpi — card body inset 0, widget draws its own compact 12</div>
          <div style="height: 200px; max-width: 340px"><DashboardWidgetCard v-bind="args" :widget="kpi" /></div>
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">bespoke header — widget draws both edges; note the clearance around the floating actions</div>
          <div style="height: 320px; max-width: 560px"><DashboardWidgetCard v-bind="args" :widget="tabs" draggable /></div>
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">bespoke header (attention) — the shorter toggle row, re-centred against the overlay</div>
          <div style="height: 220px; max-width: 560px"><DashboardWidgetCard v-bind="args" :widget="attention" draggable /></div>
        </div>
      </div>
    `})},d={render:e=>({components:{DashboardWidgetCard:i},setup:()=>({args:e}),template:`
      <div class="d-flex ga-6 flex-wrap align-start">
        <div style="width: 280px; height: 200px"><DashboardWidgetCard v-bind="args" /></div>
        <div style="width: 420px; height: 260px"><DashboardWidgetCard v-bind="args" /></div>
        <div style="width: 640px; height: 320px"><DashboardWidgetCard v-bind="args" /></div>
      </div>
    `})},s={render:e=>({components:{DashboardWidgetCard:i},setup:()=>({args:e}),template:`
      <div class="d-flex ga-6 flex-wrap align-start">
        <div>
          <div class="text-caption text-medium-emphasis mb-2">resting / hover</div>
          <div style="width: 340px; height: 240px"><DashboardWidgetCard v-bind="args" /></div>
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">draggable — grip appears on hover</div>
          <div style="width: 340px; height: 240px"><DashboardWidgetCard v-bind="args" draggable /></div>
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">preview — dashed, no actions</div>
          <div style="width: 340px; height: 240px"><DashboardWidgetCard v-bind="args" preview /></div>
        </div>
      </div>
    `})},o={render:e=>({components:{DashboardWidgetCard:i},setup:()=>({args:e,kpi:b,bar:w,table:y}),template:`
      <div class="d-flex flex-column ga-4">
        <div style="display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: var(--mp-space-16)">
          <div style="height: 180px"><DashboardWidgetCard v-bind="args" :widget="kpi" /></div>
          <div style="height: 180px"><DashboardWidgetCard v-bind="args" :widget="kpi" /></div>
          <div style="height: 180px"><DashboardWidgetCard v-bind="args" :widget="kpi" /></div>
          <div style="height: 180px"><DashboardWidgetCard v-bind="args" :widget="kpi" /></div>
        </div>
        <div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: var(--mp-space-16)">
          <div style="height: 300px"><DashboardWidgetCard v-bind="args" /></div>
          <div style="height: 300px"><DashboardWidgetCard v-bind="args" :widget="bar" /></div>
        </div>
        <div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: var(--mp-space-16)">
          <div style="height: 300px"><DashboardWidgetCard v-bind="args" :widget="table" /></div>
          <div style="height: 300px"><DashboardWidgetCard v-bind="args" /></div>
        </div>
      </div>
    `})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    widget: KPI_WIDGET
  }
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    widget: BAR_WIDGET
  }
}`,...c.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    widget: TABLE_WIDGET
  }
}`,...g.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    widget: ACTIVITY_WIDGET
  }
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    widget: AI_WIDGET
  }
}`,...h.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    draggable: true
  }
}`,...l.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    preview: true,
    showActions: false
  }
}`,...v.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      DashboardWidgetCard
    },
    setup: () => ({
      args,
      kpi: KPI_WIDGET,
      tabs: TABS_WIDGET,
      attention: ATTENTION_WIDGET
    }),
    template: \`
      <div class="d-flex flex-column ga-8">
        <div>
          <div class="text-caption text-medium-emphasis mb-2">standard — card header (20/20/8) + card body (0/20/20)</div>
          <div style="height: 300px; max-width: 560px"><DashboardWidgetCard v-bind="args" /></div>
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">kpi — card body inset 0, widget draws its own compact 12</div>
          <div style="height: 200px; max-width: 340px"><DashboardWidgetCard v-bind="args" :widget="kpi" /></div>
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">bespoke header — widget draws both edges; note the clearance around the floating actions</div>
          <div style="height: 320px; max-width: 560px"><DashboardWidgetCard v-bind="args" :widget="tabs" draggable /></div>
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">bespoke header (attention) — the shorter toggle row, re-centred against the overlay</div>
          <div style="height: 220px; max-width: 560px"><DashboardWidgetCard v-bind="args" :widget="attention" draggable /></div>
        </div>
      </div>
    \`
  })
}`,...r.parameters?.docs?.source},description:{story:`The three inset cases in the family, side by side. **Standard** widgets sit inside the
card's own header/body bands; **KPI** widgets take the body inset to zero and draw their
own denser one; **bespoke-header** widgets (tabs, attention, metric explorer) replace the
header entirely and draw both edges themselves.

Phase 4 (P4-1) gave the whole 17-widget family one inset. It comes from \`component.card.*\`
— the standard Phase 3 set at 20px precisely because this family already used it — not from
a second widget-only pair. Header is \`card.padding card.padding card.gapCompact\`; body is
\`0 card.padding card.padding\`. A bespoke widget states the same role token directly.

The bespoke card is also the **P4-2** case: its own top-right controls are held clear of the
floating drag/kebab overlay by a clearance that is now \`calc()\`ed from the overlay's three
\`component.widget.action*\` tokens. It used to be two hand-computed magic numbers — and the
pair case (76) was in fact 2px short of the 78px the overlay actually occupies.`,...r.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      DashboardWidgetCard
    },
    setup: () => ({
      args
    }),
    template: \`
      <div class="d-flex ga-6 flex-wrap align-start">
        <div style="width: 280px; height: 200px"><DashboardWidgetCard v-bind="args" /></div>
        <div style="width: 420px; height: 260px"><DashboardWidgetCard v-bind="args" /></div>
        <div style="width: 640px; height: 320px"><DashboardWidgetCard v-bind="args" /></div>
      </div>
    \`
  })
}`,...d.parameters?.docs?.source},description:{story:`There is no \`size\` prop — a widget fills its grid cell, and the grid decides the cell.
What the card guarantees is that the inset never changes with the cell: a 1×1 KPI and a
4×3 chart have the same distance from their border to their content.

The one responsive step is below 768px, where the inset drops to the \`16\` primitive.
There is no 16 role stop, and adding one would be the second inset scale P4-1 exists to
avoid — so it is deliberately a primitive there.`,...d.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      DashboardWidgetCard
    },
    setup: () => ({
      args
    }),
    template: \`
      <div class="d-flex ga-6 flex-wrap align-start">
        <div>
          <div class="text-caption text-medium-emphasis mb-2">resting / hover</div>
          <div style="width: 340px; height: 240px"><DashboardWidgetCard v-bind="args" /></div>
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">draggable — grip appears on hover</div>
          <div style="width: 340px; height: 240px"><DashboardWidgetCard v-bind="args" draggable /></div>
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">preview — dashed, no actions</div>
          <div style="width: 340px; height: 240px"><DashboardWidgetCard v-bind="args" preview /></div>
        </div>
      </div>
    \`
  })
}`,...s.parameters?.docs?.source},description:{story:"Resting, hover (a soft lift, no border change), draggable (grip fades in on hover),\npreview (dashed border, no actions), and the empty state a widget shows when its query\nreturns nothing.\n\nThe floating action overlay is the P4-2 case: its clearance for a bespoke header used to\nbe two hand-computed magic numbers (`76px` / `60px`) and is now `calc()`ed from the\noverlay's own `component.widget.action*` tokens, so it cannot drift from the buttons again.",...s.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      DashboardWidgetCard
    },
    setup: () => ({
      args,
      kpi: KPI_WIDGET,
      bar: BAR_WIDGET,
      table: TABLE_WIDGET
    }),
    template: \`
      <div class="d-flex flex-column ga-4">
        <div style="display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: var(--mp-space-16)">
          <div style="height: 180px"><DashboardWidgetCard v-bind="args" :widget="kpi" /></div>
          <div style="height: 180px"><DashboardWidgetCard v-bind="args" :widget="kpi" /></div>
          <div style="height: 180px"><DashboardWidgetCard v-bind="args" :widget="kpi" /></div>
          <div style="height: 180px"><DashboardWidgetCard v-bind="args" :widget="kpi" /></div>
        </div>
        <div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: var(--mp-space-16)">
          <div style="height: 300px"><DashboardWidgetCard v-bind="args" /></div>
          <div style="height: 300px"><DashboardWidgetCard v-bind="args" :widget="bar" /></div>
        </div>
        <div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: var(--mp-space-16)">
          <div style="height: 300px"><DashboardWidgetCard v-bind="args" :widget="table" /></div>
          <div style="height: 300px"><DashboardWidgetCard v-bind="args" /></div>
        </div>
      </div>
    \`
  })
}`,...o.parameters?.docs?.source},description:{story:`**In context.** A real dashboard row — a KPI, a chart and a table beside each other at the
sizes the grid actually gives them. This is the composition P4-1 is judged on: run your eye
down the left edge of the three cards and the content should start at the same distance from
the border in every one, whatever the widget inside is doing.`,...o.parameters?.docs?.description}}};const Te=["Chart","Kpi","BarChart","Table","Activity","DaVinciGenerated","Draggable","WizardPreview","Variants","Sizes","States","InContextDashboardRow"];export{m as Activity,c as BarChart,n as Chart,h as DaVinciGenerated,l as Draggable,o as InContextDashboardRow,p as Kpi,d as Sizes,s as States,g as Table,r as Variants,v as WizardPreview,Te as __namedExportsOrder,Ie as default};
