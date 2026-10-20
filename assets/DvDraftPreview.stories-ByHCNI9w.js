import{D as l}from"./DvDraftPreview-D7UL2Kcx.js";import"./iframe-DH-XNaA6.js";import"./preload-helper-PPVm8Dsz.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";function e(v){return{dashboardId:"2000290-home",type:"timeseries",title:"Open Rate Trend",dataSource:"marketing",metricId:"marketing_open_rate_over_time",drilldown:{routeName:"CampaignReports",label:"Open campaign reports"},...v}}const h={title:"Product/Da Vinci/DvDraftPreview",component:l,tags:["autodocs"],args:{draft:e({}),density:"comfortable"},argTypes:{draft:{control:"object",description:"`DashboardWidgetDraft` — the widget Da Vinci proposed. `draft.type` selects the preview shape (KPI, bar, line/area, pie, table, funnel, scatter); the chart canvas geometry is deliberately off the spacing scale because it is plotting area, not padding."},density:{control:"select",options:["compact","comfortable","expanded"],description:"compact = refine-dialog preview · comfortable = draft card · expanded = full-size dialog"}},parameters:{docs:{description:{component:"\n## Overview\nDvDraftPreview renders a static, deterministic mock visualisation for a\n`DashboardWidgetDraft` — the preview inside `DvWidgetDraftCard`,\n`DvRefineDialog` (compact), and `DvExpandDialog` (expanded). The preview kind\nfollows `draft.type` (+ `chartVariant` for line/area); mock numbers are picked\nfrom presets keyed off `metricId`/`dimension` hints, so no store or API is involved.\n"}}},render:v=>({components:{DvDraftPreview:l},setup:()=>({args:v}),template:`
      <div :style="{ maxWidth: args.density === 'expanded' ? '640px' : '360px' }">
        <DvDraftPreview v-bind="args" />
      </div>
    `})},u={args:{draft:e({type:"timeseries",title:"Open Rate Trend"})}},t={render:()=>({components:{DvDraftPreview:l},setup:()=>({kinds:[{label:"kpi",d:e({type:"kpi",title:"Revenue",dataSource:"commerce",metricId:"commerce_revenue"})},{label:"bar",d:e({type:"bar",title:"Revenue by Channel",dataSource:"commerce",metricId:"commerce_revenue_by_channel",dimension:"channel"})},{label:"timeseries",d:e({type:"timeseries",title:"Open Rate Trend"})},{label:"donut",d:e({type:"donut",title:"Orders by Status",dataSource:"commerce",metricId:"commerce_orders_by_status",dimension:"status"})},{label:"table",d:e({type:"table",title:"Top Products",dataSource:"commerce",metricId:"commerce_top_products"})}]}),template:`
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: var(--mp-space-24);">
        <div v-for="k in kinds" :key="k.label">
          <div class="text-caption text-medium-emphasis mb-2">{{ k.label }}</div>
          <DvDraftPreview :draft="k.d" />
        </div>
      </div>
    `}),args:{}},r={render:()=>({components:{DvDraftPreview:l},setup:()=>({d:e({type:"kpi",title:"Revenue",dataSource:"commerce",metricId:"commerce_revenue"})}),template:`
      <div class="d-flex flex-column ga-8">
        <div v-for="den in ['compact', 'comfortable', 'expanded']" :key="den">
          <div class="text-caption text-medium-emphasis mb-2">density="{{ den }}"</div>
          <DvDraftPreview :draft="d" :density="den" />
        </div>
      </div>
    `}),args:{}},a={render:()=>({components:{DvDraftPreview:l},setup:()=>({d:e({type:"kpi",title:"Revenue",dataSource:"commerce",metricId:"commerce_revenue"}),t:e({type:"timeseries",title:"Open Rate Trend"})}),template:`
      <div class="d-flex flex-column ga-8">
        <div>
          <div class="text-caption text-medium-emphasis mb-2">KPI quad — up / down / flat deltas in one preset</div>
          <DvDraftPreview :draft="d" />
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">timeseries — deterministic mock series</div>
          <DvDraftPreview :draft="t" />
        </div>
      </div>
    `}),args:{}},i={args:{draft:e({type:"kpi",title:"Revenue",dataSource:"commerce",metricId:"commerce_revenue"})}},s={args:{draft:e({type:"bar",title:"Revenue by Channel",dataSource:"commerce",metricId:"commerce_revenue_by_channel",dimension:"channel"})}},d={args:{draft:e({chartVariant:"line"})}},n={args:{draft:e({chartVariant:"area"})}},c={args:{draft:e({type:"pie",title:"Tickets by Channel",dataSource:"service",metricId:"service_tickets_by_channel"})}},o={args:{draft:e({type:"table",title:"Top Campaigns",metricId:"marketing_top_campaigns"})}},m={args:{draft:e({type:"activity",title:"Live Activity",metricId:"marketing_live_activity"})}},p={args:{density:"expanded",draft:e({type:"kpi",title:"Revenue",dataSource:"commerce",metricId:"commerce_revenue"})}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    draft: draft({
      type: 'timeseries',
      title: 'Open Rate Trend'
    })
  }
}`,...u.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DvDraftPreview
    },
    setup: () => ({
      kinds: [{
        label: 'kpi',
        d: draft({
          type: 'kpi',
          title: 'Revenue',
          dataSource: 'commerce',
          metricId: 'commerce_revenue'
        })
      }, {
        label: 'bar',
        d: draft({
          type: 'bar',
          title: 'Revenue by Channel',
          dataSource: 'commerce',
          metricId: 'commerce_revenue_by_channel',
          dimension: 'channel'
        })
      }, {
        label: 'timeseries',
        d: draft({
          type: 'timeseries',
          title: 'Open Rate Trend'
        })
      }, {
        label: 'donut',
        d: draft({
          type: 'donut',
          title: 'Orders by Status',
          dataSource: 'commerce',
          metricId: 'commerce_orders_by_status',
          dimension: 'status'
        })
      }, {
        label: 'table',
        d: draft({
          type: 'table',
          title: 'Top Products',
          dataSource: 'commerce',
          metricId: 'commerce_top_products'
        })
      }]
    }),
    template: \`
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: var(--mp-space-24);">
        <div v-for="k in kinds" :key="k.label">
          <div class="text-caption text-medium-emphasis mb-2">{{ k.label }}</div>
          <DvDraftPreview :draft="k.d" />
        </div>
      </div>
    \`
  }),
  args: {} as never
}`,...t.parameters?.docs?.source},description:{story:"Every preview kind the component can render, from the draft's `type`.",...t.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DvDraftPreview
    },
    setup: () => ({
      d: draft({
        type: 'kpi',
        title: 'Revenue',
        dataSource: 'commerce',
        metricId: 'commerce_revenue'
      })
    }),
    template: \`
      <div class="d-flex flex-column ga-8">
        <div v-for="den in ['compact', 'comfortable', 'expanded']" :key="den">
          <div class="text-caption text-medium-emphasis mb-2">density="{{ den }}"</div>
          <DvDraftPreview :draft="d" :density="den" />
        </div>
      </div>
    \`
  }),
  args: {} as never
}`,...r.parameters?.docs?.source},description:{story:"`density` is the size axis — the same draft at the three sizes it is rendered at:\nthe refine dialog, the draft card, and the full-size expand dialog.",...r.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DvDraftPreview
    },
    setup: () => ({
      d: draft({
        type: 'kpi',
        title: 'Revenue',
        dataSource: 'commerce',
        metricId: 'commerce_revenue'
      }),
      t: draft({
        type: 'timeseries',
        title: 'Open Rate Trend'
      })
    }),
    template: \`
      <div class="d-flex flex-column ga-8">
        <div>
          <div class="text-caption text-medium-emphasis mb-2">KPI quad — up / down / flat deltas in one preset</div>
          <DvDraftPreview :draft="d" />
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">timeseries — deterministic mock series</div>
          <DvDraftPreview :draft="t" />
        </div>
      </div>
    \`
  }),
  args: {} as never
}`,...a.parameters?.docs?.source},description:{story:"The delta states a KPI preview can show — up, down, and flat.",...a.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    draft: draft({
      type: 'kpi',
      title: 'Revenue',
      dataSource: 'commerce',
      metricId: 'commerce_revenue'
    })
  }
}`,...i.parameters?.docs?.source},description:{story:"2×2 KPI quad with trend deltas (preset picked from the metric id).",...i.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    draft: draft({
      type: 'bar',
      title: 'Revenue by Channel',
      dataSource: 'commerce',
      metricId: 'commerce_revenue_by_channel',
      dimension: 'channel'
    })
  }
}`,...s.parameters?.docs?.source},description:{story:"Vertical bars with legend — channel labels inferred from the dimension hint.",...s.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    draft: draft({
      chartVariant: 'line'
    })
  }
}`,...d.parameters?.docs?.source},description:{story:"Line trend with point markers.",...d.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    draft: draft({
      chartVariant: 'area'
    })
  }
}`,...n.parameters?.docs?.source},description:{story:"Area variant of the same trend (gradient fill under the line).",...n.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    draft: draft({
      type: 'pie',
      title: 'Tickets by Channel',
      dataSource: 'service',
      metricId: 'service_tickets_by_channel'
    })
  }
}`,...c.parameters?.docs?.source},description:{story:"Donut with four primary-tinted slices and legend.",...c.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    draft: draft({
      type: 'table',
      title: 'Top Campaigns',
      metricId: 'marketing_top_campaigns'
    })
  }
}`,...o.parameters?.docs?.source},description:{story:"Mini table — campaign columns inferred from the metric id.",...o.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    draft: draft({
      type: 'activity',
      title: 'Live Activity',
      metricId: 'marketing_live_activity'
    })
  }
}`,...m.parameters?.docs?.source},description:{story:"Activity feed rows (fallback preview kind).",...m.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    density: 'expanded',
    draft: draft({
      type: 'kpi',
      title: 'Revenue',
      dataSource: 'commerce',
      metricId: 'commerce_revenue'
    })
  }
}`,...p.parameters?.docs?.source},description:{story:"Expanded density — the full-size treatment used inside DvExpandDialog.",...p.parameters?.docs?.description}}};const D=["Default","Variants","Sizes","States","KpiQuad","BarChart","LineTrend","AreaTrend","Donut","MiniTable","ActivityFeed","ExpandedDensity"];export{m as ActivityFeed,n as AreaTrend,s as BarChart,u as Default,c as Donut,p as ExpandedDensity,i as KpiQuad,d as LineTrend,o as MiniTable,r as Sizes,a as States,t as Variants,D as __namedExportsOrder,h as default};
