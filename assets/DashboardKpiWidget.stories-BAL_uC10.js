import{D as a}from"./DashboardKpiWidget-BhUredq1.js";import"./iframe-BqHSr5b_.js";import"./preload-helper-PPVm8Dsz.js";import"./chartPalette-Bznt7cdU.js";import"./formatNumber-DWsT9dxl.js";import"./formatCurrency-BbaxPn65.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const u={kind:"kpi",unit:"currency",value:48210,formattedValue:"$48,210",delta:12.4,deltaLabel:"+12.4%",helperText:"Gross revenue in the selected period"},b={kind:"kpi",unit:"percent",value:21.8,formattedValue:"21.8%",delta:-2.3,deltaLabel:"-2.3 pp",helperText:"Average campaign open rate"};function g(e){return new Date(Date.now()-e*6e4).toISOString()}const W={title:"Product/Dashboards/Widgets/DashboardKpiWidget",component:a,tags:["autodocs"],parameters:{docs:{description:{component:"KPI body for dashboard widgets: metric icon chip, big value, trend pill with comparison label, side sparkline, and a source-cloud footer. `compact` tightens the layout for short grid cells; container queries hide the sparkline when narrow."}}},args:{data:u,title:"Revenue",subtitle:"Last 30 days",comparisonLabel:"vs prev 30d",icon:"dollar-sign",dataSource:"commerce",lastRefreshedAt:g(24),compact:!1,aiGenerated:!1,showViewReport:!1},argTypes:{data:{control:"object",description:"`DashboardKpiData` — the value, delta and comparison the tile displays."},title:{control:"text",description:"Overrides the metric's own label. Leave empty to use what `data` carries."},subtitle:{control:"text",description:"Supporting line under the title, e.g. the metric definition."},comparisonLabel:{control:"text",description:'Wording for the comparison period, e.g. \\"vs previous 30 days\\". Shown beside the delta.'},icon:{control:"text",description:"Lucide icon name (kebab-case) for the tile. Empty renders no icon."},dataSource:{control:"select",options:["commerce","marketing","analytics","contacts","service","retail"],description:"`DashboardDataSource` — which cloud the metric comes from. Renders an `MpSourceCloudChip`, so a KPI always says where its number came from."},compact:{control:"boolean",description:"The dense tier. Takes a uniform `component.card.paddingCompact` (12) instead of the standard 20 — this is the one widget that is deliberately denser than the rest of the family."},aiGenerated:{control:"boolean",description:"Marks the tile as Da Vinci-generated with the shared chip from `component.chip.*` — the same ramp `DashboardWidgetCard` uses, so the two copies cannot drift."},showViewReport:{control:"boolean",description:"Adds a View report action that emits `viewReport`. Off by default; only turn it on where a report actually exists to open."}},render:e=>({components:{DashboardKpiWidget:a},setup:()=>({args:e}),template:`
      <v-card flat border rounded="lg" style="max-width:360px;height:190px;">
        <DashboardKpiWidget v-bind="args" />
      </v-card>
    `})},o={},i={args:{data:b,title:"Open Rate",icon:"mail-open",dataSource:"marketing"}},d={args:{compact:!0}},c={args:{aiGenerated:!0}},p={args:{dataSource:"commerce",lastRefreshedAt:g(840)},render:e=>({components:{DashboardKpiWidget:a},setup:()=>({args:e}),template:`
      <v-card flat border rounded="lg" style="width:200px;height:190px;">
        <DashboardKpiWidget v-bind="args" />
      </v-card>
    `})},l={args:{data:{kind:"kpi",unit:"count",value:15,formattedValue:"15",delta:-7.4,deltaLabel:"-7.4%",helperText:"Open tickets requiring action",secondaryStat:"18 unresolved · oldest 3d"},title:"Support health",subtitle:"Last 30 days",comparisonLabel:"vs prev 30d",icon:"heart-pulse",dataSource:"service"}},h={args:{data:{kind:"kpi",unit:"currency",value:8214,formattedValue:"$8,214",delta:4.8,deltaLabel:"+4.8%",helperText:"Point-of-sale revenue today",location:"Melbourne Flagship"},title:"Retail Revenue",subtitle:"Today",comparisonLabel:"vs yesterday",icon:"shopping-bag",dataSource:"retail",showViewReport:!0}},m={args:{data:{...u,sparkline:[820,940,610,1180,890,1320,760,1450,1210,980,1610,1340,1120,1780]}},parameters:{docs:{description:{story:"Shopify stat-card style: real windowed values from `sparkline` are smoothed (moving average + downsample) and drawn as a soft bezier area curve — a stylized read of the trend, not a precise chart. Without data, the delta-shaped wobble fallback renders."}}}},t={render:e=>({components:{DashboardKpiWidget:a},setup:()=>({args:e}),template:'<DashboardKpiWidget v-bind="args" />'})},r={render:e=>({components:{DashboardKpiWidget:a},setup:()=>({args:e}),template:`
      <div class="d-flex ga-6 flex-wrap align-start">
        <div style="width: 280px; height: 220px"><v-card flat border rounded="lg" class="h-100 pa-5"><DashboardKpiWidget v-bind="args" /></v-card></div>
        <div style="width: 420px; height: 260px"><v-card flat border rounded="lg" class="h-100 pa-5"><DashboardKpiWidget v-bind="args" /></v-card></div>
        <div style="width: 620px; height: 300px"><v-card flat border rounded="lg" class="h-100 pa-5"><DashboardKpiWidget v-bind="args" /></v-card></div>
      </div>
    `})},s={render:e=>({components:{DashboardKpiWidget:a},setup:()=>({args:e}),template:'<DashboardKpiWidget v-bind="args" />'})},n={render:e=>({components:{DashboardKpiWidget:a},setup:()=>({args:e}),template:`
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: var(--mp-space-16); align-items: stretch">
        <v-card flat border rounded="lg" style="height: 280px" class="pa-5"><DashboardKpiWidget v-bind="args" /></v-card>
        <v-card flat border rounded="lg" style="height: 280px" class="pa-5"><DashboardKpiWidget v-bind="args" /></v-card>
      </div>
    `})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    data: OPEN_RATE_KPI,
    title: 'Open Rate',
    icon: 'mail-open',
    dataSource: 'marketing'
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    compact: true
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    aiGenerated: true
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    dataSource: 'commerce',
    lastRefreshedAt: minutesAgo(14 * 60)
  },
  render: args => ({
    components: {
      DashboardKpiWidget
    },
    setup: () => ({
      args
    }),
    template: \`
      <v-card flat border rounded="lg" style="width:200px;height:190px;">
        <DashboardKpiWidget v-bind="args" />
      </v-card>
    \`
  })
}`,...p.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    data: {
      kind: 'kpi',
      unit: 'count',
      value: 15,
      formattedValue: '15',
      delta: -7.4,
      deltaLabel: '-7.4%',
      helperText: 'Open tickets requiring action',
      secondaryStat: '18 unresolved · oldest 3d'
    },
    title: 'Support health',
    subtitle: 'Last 30 days',
    comparisonLabel: 'vs prev 30d',
    icon: 'heart-pulse',
    dataSource: 'service'
  }
}`,...l.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    data: {
      kind: 'kpi',
      unit: 'currency',
      value: 8214,
      formattedValue: '$8,214',
      delta: 4.8,
      deltaLabel: '+4.8%',
      helperText: 'Point-of-sale revenue today',
      location: 'Melbourne Flagship'
    },
    title: 'Retail Revenue',
    subtitle: 'Today',
    comparisonLabel: 'vs yesterday',
    icon: 'shopping-bag',
    dataSource: 'retail',
    showViewReport: true
  }
}`,...h.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    data: {
      ...REVENUE_KPI,
      sparkline: [820, 940, 610, 1180, 890, 1320, 760, 1450, 1210, 980, 1610, 1340, 1120, 1780]
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Shopify stat-card style: real windowed values from \`sparkline\` are smoothed (moving average + downsample) and drawn as a soft bezier area curve — a stylized read of the trend, not a precise chart. Without data, the delta-shaped wobble fallback renders.'
      }
    }
  }
}`,...m.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      DashboardKpiWidget
    },
    setup: () => ({
      args
    }),
    template: \`<DashboardKpiWidget v-bind="args" />\`
  })
}`,...t.parameters?.docs?.source},description:{story:"One structure — a hero number with a trend and an optional sparkline. Its variants are whether the sparkline and the secondary stat are present.",...t.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      DashboardKpiWidget
    },
    setup: () => ({
      args
    }),
    template: \`
      <div class="d-flex ga-6 flex-wrap align-start">
        <div style="width: 280px; height: 220px"><v-card flat border rounded="lg" class="h-100 pa-5"><DashboardKpiWidget v-bind="args" /></v-card></div>
        <div style="width: 420px; height: 260px"><v-card flat border rounded="lg" class="h-100 pa-5"><DashboardKpiWidget v-bind="args" /></v-card></div>
        <div style="width: 620px; height: 300px"><v-card flat border rounded="lg" class="h-100 pa-5"><DashboardKpiWidget v-bind="args" /></v-card></div>
      </div>
    \`
  })
}`,...r.parameters?.docs?.source},description:{story:`There is no \`size\` prop — a widget fills the grid cell it is placed in. The KPI card is the
deliberately **dense** member of the family: Phase 4 (P4-1) gave it one uniform inset from
the scale's compact tier (\`component.card.paddingCompact\`, 12) rather than the 20 the rest
take. Denser than a card, but from the scale — it used to be an ad-hoc \`14px 16px 12px\`,
three different values on one box.

Rendered below at three cell sizes, including the narrow container where the sparkline drops
below the value.`,...r.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      DashboardKpiWidget
    },
    setup: () => ({
      args
    }),
    template: \`<DashboardKpiWidget v-bind="args" />\`
  })
}`,...s.parameters?.docs?.source},description:{story:"Positive trend, negative trend, no trend, and a narrow container where the spark drops below the value.",...s.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      DashboardKpiWidget
    },
    setup: () => ({
      args
    }),
    template: \`
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: var(--mp-space-16); align-items: stretch">
        <v-card flat border rounded="lg" style="height: 280px" class="pa-5"><DashboardKpiWidget v-bind="args" /></v-card>
        <v-card flat border rounded="lg" style="height: 280px" class="pa-5"><DashboardKpiWidget v-bind="args" /></v-card>
      </div>
    \`
  })
}`,...n.parameters?.docs?.source},description:{story:`**In context.** The widget where it actually lives — inside a \`DashboardWidgetCard\`, in a
dashboard row beside its siblings. This is the composition P4-1 is judged on: the header
band, the body inset and the footer are the card's, and every widget in the family sits on
the same edge.`,...n.parameters?.docs?.description}}};const k=["Default","NegativeTrend","Compact","DaVinciGenerated","NarrowContainer","WithSecondaryStat","RetailWithViewReport","WithSparklineData","Variants","Sizes","States","InContextDashboardRow"];export{d as Compact,c as DaVinciGenerated,o as Default,n as InContextDashboardRow,p as NarrowContainer,i as NegativeTrend,h as RetailWithViewReport,r as Sizes,s as States,t as Variants,l as WithSecondaryStat,m as WithSparklineData,k as __namedExportsOrder,W as default};
