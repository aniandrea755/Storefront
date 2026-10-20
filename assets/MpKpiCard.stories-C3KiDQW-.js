import{M as e}from"./MpKpiCard-ILafHk2b.js";import{f as h}from"./formatMoneyParts-Bs3J8upm.js";import"./iframe-DH-XNaA6.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const S={title:"Molecules/MpKpiCard",component:e,tags:["autodocs"],parameters:{docs:{description:{component:'\n### Overview\n`MpKpiCard` (Key Performance Indicator) is used primarily on dashboards to show high-level metrics, numbers, and their recent trends at a glance.\n\n**Use when:** surfacing a single headline metric with optional trend, period, and sparkline — dashboard stat rows, report summaries, module overviews.\n\n**Don\'t use when:** the content needs a chart, table, or interaction — use a dashboard widget card instead. There is **no built-in loading state**: while data loads, render a skeleton placeholder (e.g. `v-skeleton-loader`) and swap in the card once the value resolves.\n\n### Usage\n```html\n<v-col cols="12" sm="6" md="3">\n  <MpKpiCard\n    label="Total Revenue"\n    value="$12,430"\n    icon="dollar-sign"\n    color="success"\n    trend="+12.5%"\n    :trend-positive="true"\n    sub-stat="vs last month"\n  />\n</v-col>\n```\n\n### 🟢 Do\'s\n- **Do** arrange KPI cards in responsive `v-row` grids (usually 3 or 4 across on desktop).\n- **Do** use semantic colors for the `color` prop based on the metric type (e.g., `success` for Revenue, `primary` for neutral stats like Total Users).\n- **Do** provide a `trend` (e.g., "+12%") and an accompanying `subStat` context (e.g., "vs last week") to make the number actionable.\n\n### 🔴 Don\'ts\n- **Don\'t** use complex charts inside a KPI Card. It should strictly contain the single top-level metric.\n- **Don\'t** stretch KPI cards too wide. If you have only 2 metrics, don\'t make them 50% width on a huge screen; constrain their max-width.\n- **Don\'t** forget to set `trendPositive="true/false"`. A dropping number isn\'t always bad (e.g., Bounce Rate dropping is good, Revenue dropping is bad). Control the color explicitly.\n\n### 💡 Best Practices\n- **Icons:** Pick an `icon` that cleanly represents the metric; it renders in a tonal rounded tile tinted by `color`.\n- **Typography:** The main value handles very large numbers automatically, but it\'s best practice to format your inputs cleanly (e.g., "1.2M" instead of "1,200,000" if space is tight).\n- **Tones:** `color` accepts semantic theme tones and the six source-cloud accents (`retail`, `marketing`, `contacts`, `analytics`, `commerce`, `service`); unknown values fall back to `primary`.\n\n### A11y\n- **Provides:** all content is real text (label, value, trend, sub-stat) read in a sensible order; trend direction is conveyed by the +/- sign in the text and an arrow icon, never by color alone; value uses tabular numerals to avoid layout shift.\n- **Consumer must:** pre-format `value`/`trend` into human-readable strings, and keep the `label` meaningful on its own (it is the only name the metric gets).\n- **Gaps:** the card is a non-interactive surface — don\'t wrap it in a click handler without adding button semantics; trend icons are decorative (Vuetify marks `v-icon` `aria-hidden`), which is correct here since the sign carries the meaning.\n        '}}},argTypes:{label:{control:"text",description:"Metric name, rendered as an uppercase eyebrow."},value:{control:"text",description:'The headline stat (string or number). Pre-format it ("$12.4k", "24.3%").'},icon:{control:"text",description:"Lucide icon name shown in the tonal icon tile. Omit to hide the tile."},color:{control:"select",options:["primary","success","info","warning","secondary","error","default","retail","marketing","contacts","analytics","commerce","service"],description:"Icon-tile tone: semantic theme colors or source-cloud accents. Unknown values fall back to primary."},trend:{control:"text",description:'Delta text next to the trend arrow ("+12.5%"). Omit for metrics with no movement.'},trendPositive:{control:"boolean",description:"Whether the movement is good news (green, up arrow) or bad (red, down arrow). Defaults to positive."},subStat:{control:"text",description:'Small context line under the value ("vs last month").'},period:{control:"text",description:'Time window shown under the label ("Today", "Last 30 days").'},emphasis:{control:"inline-radio",options:["default","hero"],description:"Value scale: `default` (32px/700) or `hero` (48px/800) for a single headline metric."},updatedAt:{control:"text",description:`Optional last-updated meta line ("Updated 2h ago"), rendered as the smallest, most-muted caption at the card's bottom edge.`},sparkline:{control:!1,description:"Slot — 96px-wide mini chart aligned with the value. A `#value` slot also exists to replace the default value rendering (e.g. demoted-cents money).",table:{category:"slots"}},default:{control:!1,description:"Slot — extra content below the stat block.",table:{category:"slots"}}}},l={args:{label:"Total Revenue",value:"$12,430",icon:"dollar-sign",color:"success",trend:"+12.5%",trendPositive:!0,subStat:"vs last month"}},t={render:()=>({components:{MpKpiCard:e},template:`
      <div class="d-flex flex-column ga-8">
        <div>
          <div class="text-caption text-medium-emphasis mb-2">default</div>
          <div style="max-width: 320px;">
            <MpKpiCard label="Total Revenue" value="$12,430" icon="dollar-sign" color="success" trend="+12.5%" trend-positive period="vs last month" />
          </div>
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">hero — one headline metric at display scale</div>
          <div style="max-width: 320px;">
            <MpKpiCard variant="hero" label="Total Revenue" value="$12,430" icon="dollar-sign" color="success" trend="+12.5%" trend-positive period="vs last month" />
          </div>
        </div>
      </div>
    `}),args:{}},a={render:()=>({components:{MpKpiCard:e},template:`
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: var(--mp-space-16);">
        <MpKpiCard label="Revenue" value="$12,430" icon="dollar-sign" color="success" trend="+12.5%" trend-positive period="vs last month" />
        <MpKpiCard label="Refunds" value="$1,204" icon="corner-down-left" color="error" trend="-8.1%" period="vs last month" />
        <MpKpiCard label="Sessions" value="48,120" icon="activity" color="primary" period="vs last month" />
        <MpKpiCard label="Open rate" value="—" icon="mail-open" color="primary" />
      </div>
    `}),args:{}},c={args:{label:"Bounce Rate",value:"4.2%",icon:"mail-warning",color:"error",trend:"-2.1%",trendPositive:!1,subStat:"vs last week"}},d={args:{label:"Active Campaigns",value:"8",icon:"megaphone",color:"primary"}},p={args:{label:"Net Sales",value:"$8,214",icon:"dollar-sign",color:"success",trend:"+4.8%",trendPositive:!0,period:"Today"}},o={args:{label:"Total Revenue",value:"$12,430",icon:"dollar-sign",color:"success",trend:"+12.5%",trendPositive:!0,subStat:"vs last month",updatedAt:"Updated 2h ago"}},m={render:()=>({components:{MpKpiCard:e},template:`
      <div style="max-width: 320px;">
        <MpKpiCard label="Revenue" value="$13,420" icon="dollar-sign" color="success" trend="+12.5%" :trendPositive="true" period="Last 30 days">
          <template #sparkline>
            <svg viewBox="0 0 96 36" width="96" height="36" fill="none">
              <path d="M0 30 L12 26 L24 28 L36 20 L48 22 L60 14 L72 16 L84 8 L96 10" stroke="rgb(var(--v-theme-primary))" stroke-width="2" stroke-linecap="round" />
            </svg>
          </template>
        </MpKpiCard>
      </div>
    `}),args:{}},r={render:()=>({components:{MpKpiCard:e},template:`
      <v-row style="max-width: 960px;">
        <v-col cols="12" sm="4">
          <MpKpiCard label="Revenue" value="$12,430" icon="trending-up" color="success" trend="+12.5%" :trendPositive="true" subStat="vs last month" />
        </v-col>
        <v-col cols="12" sm="4">
          <MpKpiCard label="Open Rate" value="24.3%" icon="mail-open" color="warning" trend="-1.2%" :trendPositive="false" subStat="vs last month" />
        </v-col>
        <v-col cols="12" sm="4">
          <MpKpiCard label="Active Campaigns" value="8" icon="megaphone" color="primary" subStat="No change" />
        </v-col>
      </v-row>
    `}),args:{}},n={render:()=>({components:{MpKpiCard:e},setup(){return{semantic:["primary","success","info","warning","secondary","error","default"],clouds:["retail","marketing","contacts","analytics","commerce","service"]}},template:`
      <div>
        <h4 class="text-subtitle-2 mb-2">Semantic tones</h4>
        <v-row class="mb-4" dense>
          <v-col v-for="tone in semantic" :key="tone" cols="6" sm="3">
            <MpKpiCard :label="tone" value="1,024" icon="activity" :color="tone" />
          </v-col>
        </v-row>
        <h4 class="text-subtitle-2 mb-2">Source-cloud accents</h4>
        <v-row dense>
          <v-col v-for="tone in clouds" :key="tone" cols="6" sm="3">
            <MpKpiCard :label="tone" value="1,024" icon="activity" :color="tone" />
          </v-col>
        </v-row>
      </div>
    `}),args:{}},s={args:{label:"Total Revenue",value:"$128,940",icon:"dollar-sign",color:"success",trend:"+18.2%",trendPositive:!0,subStat:"vs last quarter",emphasis:"prominent"}},i={render:()=>({components:{MpKpiCard:e},setup(){return{money:h(84213.5)}},template:`
      <div style="max-width: 320px;">
        <MpKpiCard label="Net Sales" icon="dollar-sign" color="commerce" trend="+6.4%" :trendPositive="true" subStat="vs last month" value="">
          <template #value>
            <span class="mp-kpi-value mp-money">{{ money.symbol }}{{ money.integer }}<span class="mp-money__cents">.{{ money.cents }}</span></span>
          </template>
        </MpKpiCard>
      </div>
    `}),args:{}},v={render:()=>({components:{MpKpiCard:e},template:`
      <v-row>
        <v-col cols="12" sm="6" md="3">
          <MpKpiCard label="Total Revenue" value="$12,430" icon="dollar-sign" color="success" trend="+12.5%" :trendPositive="true" subStat="vs last month" />
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <MpKpiCard label="Orders Today" value="47" icon="package" color="primary" trend="+8" :trendPositive="true" subStat="vs yesterday" />
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <MpKpiCard label="Active Campaigns" value="8" icon="megaphone" color="secondary" />
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <MpKpiCard label="Open Rate" value="24.3%" icon="mail-open" color="warning" trend="-1.2%" :trendPositive="false" subStat="vs avg" />
        </v-col>
      </v-row>
    `}),args:{}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Total Revenue',
    value: '$12,430',
    icon: 'dollar-sign',
    color: 'success',
    trend: '+12.5%',
    trendPositive: true,
    subStat: 'vs last month'
  }
}`,...l.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      MpKpiCard
    },
    template: \`
      <div class="d-flex flex-column ga-8">
        <div>
          <div class="text-caption text-medium-emphasis mb-2">default</div>
          <div style="max-width: 320px;">
            <MpKpiCard label="Total Revenue" value="$12,430" icon="dollar-sign" color="success" trend="+12.5%" trend-positive period="vs last month" />
          </div>
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">hero — one headline metric at display scale</div>
          <div style="max-width: 320px;">
            <MpKpiCard variant="hero" label="Total Revenue" value="$12,430" icon="dollar-sign" color="success" trend="+12.5%" trend-positive period="vs last month" />
          </div>
        </div>
      </div>
    \`
  }),
  args: {} as never
}`,...t.parameters?.docs?.source},description:{story:"The two emphasis levels. `hero` puts a single headline metric at display scale.",...t.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      MpKpiCard
    },
    template: \`
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: var(--mp-space-16);">
        <MpKpiCard label="Revenue" value="$12,430" icon="dollar-sign" color="success" trend="+12.5%" trend-positive period="vs last month" />
        <MpKpiCard label="Refunds" value="$1,204" icon="corner-down-left" color="error" trend="-8.1%" period="vs last month" />
        <MpKpiCard label="Sessions" value="48,120" icon="activity" color="primary" period="vs last month" />
        <MpKpiCard label="Open rate" value="—" icon="mail-open" color="primary" />
      </div>
    \`
  }),
  args: {} as never
}`,...a.parameters?.docs?.source},description:{story:"Every state a KPI can be in: rising, falling, flat, and with no comparison at all.",...a.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Bounce Rate',
    value: '4.2%',
    icon: 'mail-warning',
    color: 'error',
    trend: '-2.1%',
    trendPositive: false,
    subStat: 'vs last week'
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Active Campaigns',
    value: '8',
    icon: 'megaphone',
    color: 'primary'
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Net Sales',
    value: '$8,214',
    icon: 'dollar-sign',
    color: 'success',
    trend: '+4.8%',
    trendPositive: true,
    period: 'Today'
  }
}`,...p.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Total Revenue',
    value: '$12,430',
    icon: 'dollar-sign',
    color: 'success',
    trend: '+12.5%',
    trendPositive: true,
    subStat: 'vs last month',
    updatedAt: 'Updated 2h ago'
  }
}`,...o.parameters?.docs?.source},description:{story:"`updatedAt` renders as the smallest, most-muted caption at the card's bottom edge.",...o.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      MpKpiCard
    },
    template: \`
      <div style="max-width: 320px;">
        <MpKpiCard label="Revenue" value="$13,420" icon="dollar-sign" color="success" trend="+12.5%" :trendPositive="true" period="Last 30 days">
          <template #sparkline>
            <svg viewBox="0 0 96 36" width="96" height="36" fill="none">
              <path d="M0 30 L12 26 L24 28 L36 20 L48 22 L60 14 L72 16 L84 8 L96 10" stroke="rgb(var(--v-theme-primary))" stroke-width="2" stroke-linecap="round" />
            </svg>
          </template>
        </MpKpiCard>
      </div>
    \`
  }),
  args: {} as any // Fixes TS strict mode error
}`,...m.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      MpKpiCard
    },
    template: \`
      <v-row style="max-width: 960px;">
        <v-col cols="12" sm="4">
          <MpKpiCard label="Revenue" value="$12,430" icon="trending-up" color="success" trend="+12.5%" :trendPositive="true" subStat="vs last month" />
        </v-col>
        <v-col cols="12" sm="4">
          <MpKpiCard label="Open Rate" value="24.3%" icon="mail-open" color="warning" trend="-1.2%" :trendPositive="false" subStat="vs last month" />
        </v-col>
        <v-col cols="12" sm="4">
          <MpKpiCard label="Active Campaigns" value="8" icon="megaphone" color="primary" subStat="No change" />
        </v-col>
      </v-row>
    \`
  }),
  args: {} as any // Fixes TS strict mode error
}`,...r.parameters?.docs?.source},description:{story:"Trend state matrix: up (green), down (red), and flat (no trend row, optional sub-stat).",...r.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      MpKpiCard
    },
    setup() {
      const semantic = ['primary', 'success', 'info', 'warning', 'secondary', 'error', 'default'];
      const clouds = ['retail', 'marketing', 'contacts', 'analytics', 'commerce', 'service'];
      return {
        semantic,
        clouds
      };
    },
    template: \`
      <div>
        <h4 class="text-subtitle-2 mb-2">Semantic tones</h4>
        <v-row class="mb-4" dense>
          <v-col v-for="tone in semantic" :key="tone" cols="6" sm="3">
            <MpKpiCard :label="tone" value="1,024" icon="activity" :color="tone" />
          </v-col>
        </v-row>
        <h4 class="text-subtitle-2 mb-2">Source-cloud accents</h4>
        <v-row dense>
          <v-col v-for="tone in clouds" :key="tone" cols="6" sm="3">
            <MpKpiCard :label="tone" value="1,024" icon="activity" :color="tone" />
          </v-col>
        </v-row>
      </div>
    \`
  }),
  args: {} as any // Fixes TS strict mode error
}`,...n.parameters?.docs?.source},description:{story:"Every icon-tile tone: semantic theme colors plus the six source-cloud accents.",...n.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Total Revenue',
    value: '$128,940',
    icon: 'dollar-sign',
    color: 'success',
    trend: '+18.2%',
    trendPositive: true,
    subStat: 'vs last quarter',
    emphasis: 'prominent'
  }
}`,...s.parameters?.docs?.source},description:{story:'`emphasis="prominent"` renders the value at display scale (48px/800) for a single headline metric.',...s.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      MpKpiCard
    },
    setup() {
      const money = formatMoneyParts(84213.5);
      return {
        money
      };
    },
    template: \`
      <div style="max-width: 320px;">
        <MpKpiCard label="Net Sales" icon="dollar-sign" color="commerce" trend="+6.4%" :trendPositive="true" subStat="vs last month" value="">
          <template #value>
            <span class="mp-kpi-value mp-money">{{ money.symbol }}{{ money.integer }}<span class="mp-money__cents">.{{ money.cents }}</span></span>
          </template>
        </MpKpiCard>
      </div>
    \`
  }),
  args: {} as any // Fixes TS strict mode error
}`,...i.parameters?.docs?.source},description:{story:"Demoted-cents composition via the `#value` slot + `formatMoneyParts()` — cents shrink and fade.",...i.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      MpKpiCard
    },
    template: \`
      <v-row>
        <v-col cols="12" sm="6" md="3">
          <MpKpiCard label="Total Revenue" value="$12,430" icon="dollar-sign" color="success" trend="+12.5%" :trendPositive="true" subStat="vs last month" />
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <MpKpiCard label="Orders Today" value="47" icon="package" color="primary" trend="+8" :trendPositive="true" subStat="vs yesterday" />
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <MpKpiCard label="Active Campaigns" value="8" icon="megaphone" color="secondary" />
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <MpKpiCard label="Open Rate" value="24.3%" icon="mail-open" color="warning" trend="-1.2%" :trendPositive="false" subStat="vs avg" />
        </v-col>
      </v-row>
    \`
  }),
  args: {} as any // Fixes TS strict mode error
}`,...v.parameters?.docs?.source}}};const C=["Default","Variants","States","NegativeTrend","NoTrend","WithPeriod","WithUpdatedAt","WithSparkline","TrendStates","IconTones","Hero","DemotedCents","DashboardRow"];export{v as DashboardRow,l as Default,i as DemotedCents,s as Hero,n as IconTones,c as NegativeTrend,d as NoTrend,a as States,r as TrendStates,t as Variants,p as WithPeriod,m as WithSparkline,o as WithUpdatedAt,C as __namedExportsOrder,S as default};
