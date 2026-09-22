import{D as s}from"./DvKpiRow-BGarQwMx.js";import"./iframe-BqHSr5b_.js";import"./preload-helper-PPVm8Dsz.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const p={title:"Product/Da Vinci/DvKpiRow",component:s,tags:["autodocs"],argTypes:{kpis:{description:"Array of KPI objects with label, value, trend, trendUp, and icon",control:!1}},parameters:{docs:{description:{component:`
## Overview
DvKpiRow displays a horizontal row of key performance indicators with values, trends, and icons. Perfect for dashboard headers and quick metric overviews in the copilot interface.

## Do's
- Use for displaying 3-4 related metrics
- Show trend indicators with clear up/down direction
- Include relevant icons to reinforce metrics
- Use for quick snapshot of performance
- Always include meaningful trend data

## Don'ts
- Don't display more than 4 KPIs in a single row (use multiple rows)
- Don't use inconsistent formatting across KPIs
- Don't hide trend information
- Don't use icons that contradict the metric

## Best Practices
- Group related metrics (revenue, AOV, conversion for commerce)
- Use green for positive trends, red for negative
- Format large numbers with abbreviations (e.g., $1.2M, 45.3K)
- Include percentage changes in trend (e.g., "+12% vs last month")
- Use consistent icon sizing and positioning
        `}}}},t={args:{kpis:[{label:"Total Revenue",value:"$287,450",trend:"+18% vs Last Month",trendUp:!0,icon:"banknote"},{label:"Orders",value:"1,284",trend:"+6% vs Last Month",trendUp:!0,icon:"shopping-cart"},{label:"Average Order Value",value:"$58.40",trend:"-2% vs Last Month",trendUp:!1,icon:"receipt"}]}},e={render:()=>({components:{DvKpiRow:s},setup:()=>({two:[{label:"Total Revenue",value:"$287,450",trend:"+18% vs Last Month",trendUp:!0,icon:"banknote"},{label:"Orders",value:"1,284",trend:"+6% vs Last Month",trendUp:!0,icon:"shopping-cart"}],four:[{label:"Total Revenue",value:"$287,450",trend:"+18%",trendUp:!0,icon:"banknote"},{label:"Orders",value:"1,284",trend:"+6%",trendUp:!0,icon:"shopping-cart"},{label:"AOV",value:"$58.40",trend:"-2%",trendUp:!1,icon:"receipt"},{label:"Conversion",value:"3.1%",trend:"+0.4%",trendUp:!0,icon:"target"}]}),template:`
      <div class="d-flex flex-column ga-8">
        <div>
          <div class="text-caption text-medium-emphasis mb-2">two KPIs</div>
          <DvKpiRow :kpis="two" />
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">four KPIs — wraps at narrow widths</div>
          <DvKpiRow :kpis="four" />
        </div>
      </div>
    `}),args:{}},n={render:()=>({components:{DvKpiRow:s},setup:()=>({kpis:[{label:"Revenue",value:"$287,450",trend:"+18% vs Last Month",trendUp:!0,icon:"banknote"},{label:"Refunds",value:"$4,120",trend:"-8% vs Last Month",trendUp:!1,icon:"corner-down-left"},{label:"Sessions",value:"48,120",icon:"activity"}]}),template:'<DvKpiRow :kpis="kpis" />'}),args:{}},r={args:{kpis:[{label:"Total Revenue",value:"$287,450",trend:"+18% vs Last Month",trendUp:!0,icon:"banknote"},{label:"Average Order Value",value:"$127.50",trend:"+5.2% vs Last Month",trendUp:!0,icon:"shopping-cart"},{label:"Conversion Rate",value:"4.23%",trend:"-0.5% vs Last Month",trendUp:!1,icon:"percent"},{label:"Customer Count",value:"2,254",trend:"+342 New Customers",trendUp:!0,icon:"users"}]}},a={args:{kpis:[{label:"Email Open Rate",value:"28.4%",trend:"+4.2% vs Last Campaign",trendUp:!0,icon:"mail-open"},{label:"Click-Through Rate",value:"6.8%",trend:"+1.1% vs Last Campaign",trendUp:!0,icon:"mouse-pointer-click"},{label:"Campaign Reach",value:"145.2K",trend:"+23K Contacts",trendUp:!0,icon:"megaphone"},{label:"Subscriber Growth",value:"8,342",trend:"+356 this month",trendUp:!0,icon:"user-plus"}]}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    kpis: [{
      label: 'Total Revenue',
      value: '$287,450',
      trend: '+18% vs Last Month',
      trendUp: true,
      icon: 'banknote'
    }, {
      label: 'Orders',
      value: '1,284',
      trend: '+6% vs Last Month',
      trendUp: true,
      icon: 'shopping-cart'
    }, {
      label: 'Average Order Value',
      value: '$58.40',
      trend: '-2% vs Last Month',
      trendUp: false,
      icon: 'receipt'
    }]
  }
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DvKpiRow
    },
    setup: () => ({
      two: [{
        label: 'Total Revenue',
        value: '$287,450',
        trend: '+18% vs Last Month',
        trendUp: true,
        icon: 'banknote'
      }, {
        label: 'Orders',
        value: '1,284',
        trend: '+6% vs Last Month',
        trendUp: true,
        icon: 'shopping-cart'
      }],
      four: [{
        label: 'Total Revenue',
        value: '$287,450',
        trend: '+18%',
        trendUp: true,
        icon: 'banknote'
      }, {
        label: 'Orders',
        value: '1,284',
        trend: '+6%',
        trendUp: true,
        icon: 'shopping-cart'
      }, {
        label: 'AOV',
        value: '$58.40',
        trend: '-2%',
        trendUp: false,
        icon: 'receipt'
      }, {
        label: 'Conversion',
        value: '3.1%',
        trend: '+0.4%',
        trendUp: true,
        icon: 'target'
      }]
    }),
    template: \`
      <div class="d-flex flex-column ga-8">
        <div>
          <div class="text-caption text-medium-emphasis mb-2">two KPIs</div>
          <DvKpiRow :kpis="two" />
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">four KPIs — wraps at narrow widths</div>
          <DvKpiRow :kpis="four" />
        </div>
      </div>
    \`
  }),
  args: {} as never
}`,...e.parameters?.docs?.source},description:{story:"KPI count is the structural axis — the row wraps rather than shrinking cells past legibility.",...e.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DvKpiRow
    },
    setup: () => ({
      kpis: [{
        label: 'Revenue',
        value: '$287,450',
        trend: '+18% vs Last Month',
        trendUp: true,
        icon: 'banknote'
      }, {
        label: 'Refunds',
        value: '$4,120',
        trend: '-8% vs Last Month',
        trendUp: false,
        icon: 'corner-down-left'
      }, {
        label: 'Sessions',
        value: '48,120',
        icon: 'activity'
      }]
    }),
    template: \`<DvKpiRow :kpis="kpis" />\`
  }),
  args: {} as never
}`,...n.parameters?.docs?.source},description:{story:"Rising, falling, and no-trend cells side by side.",...n.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    kpis: [{
      label: 'Total Revenue',
      value: '$287,450',
      trend: '+18% vs Last Month',
      trendUp: true,
      icon: 'banknote'
    }, {
      label: 'Average Order Value',
      value: '$127.50',
      trend: '+5.2% vs Last Month',
      trendUp: true,
      icon: 'shopping-cart'
    }, {
      label: 'Conversion Rate',
      value: '4.23%',
      trend: '-0.5% vs Last Month',
      trendUp: false,
      icon: 'percent'
    }, {
      label: 'Customer Count',
      value: '2,254',
      trend: '+342 New Customers',
      trendUp: true,
      icon: 'users'
    }]
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    kpis: [{
      label: 'Email Open Rate',
      value: '28.4%',
      trend: '+4.2% vs Last Campaign',
      trendUp: true,
      icon: 'mail-open'
    }, {
      label: 'Click-Through Rate',
      value: '6.8%',
      trend: '+1.1% vs Last Campaign',
      trendUp: true,
      icon: 'mouse-pointer-click'
    }, {
      label: 'Campaign Reach',
      value: '145.2K',
      trend: '+23K Contacts',
      trendUp: true,
      icon: 'megaphone'
    }, {
      label: 'Subscriber Growth',
      value: '8,342',
      trend: '+356 this month',
      trendUp: true,
      icon: 'user-plus'
    }]
  }
}`,...a.parameters?.docs?.source}}};const c=["Default","Variants","States","RevenueKpis","MarketingKpis"];export{t as Default,a as MarketingKpis,r as RevenueKpis,n as States,e as Variants,c as __namedExportsOrder,p as default};
