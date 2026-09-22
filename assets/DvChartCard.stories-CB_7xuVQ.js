import{D as i}from"./DvChartCard-Cpi6IYRa.js";import"./iframe-BqHSr5b_.js";import"./preload-helper-PPVm8Dsz.js";import"./chartPalette-Bznt7cdU.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const m={title:"Product/Da Vinci/DvChartCard",component:i,tags:["autodocs"],argTypes:{title:{control:"text",description:"Main title of the chart"},subtitle:{control:"text",description:"Optional subtitle or time range"},bars:{description:"Array of arrays, each inner array represents values for a data series",control:!1},labels:{description:"X-axis labels for each bar group",control:!1},seriesNames:{description:"Names for each data series (appears in legend if provided)",control:!1}},parameters:{docs:{description:{component:`
## Overview
DvChartCard displays bar chart data with support for single or multi-series visualization. It's designed to show performance metrics, trends, and comparisons in the AI copilot dashboard.

## Do's
- Use for comparing metrics across time periods or categories
- Provide clear, descriptive titles
- Use seriesNames for multi-series data
- Keep data sets reasonably sized for clarity
- Use consistent color schemes

## Don'ts
- Don't use for more than 3-4 series (becomes hard to read)
- Don't use without clear axis labels
- Don't show data with extreme value ranges without scaling
- Don't omit legends for multi-series charts

## Best Practices
- Use for revenue, traffic, conversion trends
- Include time period in subtitle (e.g., "Last 12 Months")
- Sort categories logically (chronological, alphabetical, or by value)
- Provide context about what metrics mean
        `}}}},t={args:{title:"Revenue by Month",subtitle:"Last 12 Months",labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],bars:[[24e3,28e3,32e3,29e3,35e3,41e3,38e3,43e3,47e3,51e3,48e3,56e3]]}},e={render:()=>({components:{DvChartCard:i},template:`
      <div class="d-flex flex-column ga-8">
        <div>
          <div class="text-caption text-medium-emphasis mb-2">single series — no legend</div>
          <DvChartCard
            title="Revenue by Month" subtitle="Last 6 months"
            :labels="['Jan','Feb','Mar','Apr','May','Jun']"
            :bars="[[24000, 28000, 32000, 29000, 35000, 41000]]"
          />
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">multi series — legend appears</div>
          <DvChartCard
            title="Revenue Comparison" subtitle="This year vs last"
            :labels="['Jan','Feb','Mar','Apr','May','Jun']"
            :series-names="['This Year','Last Year']"
            :bars="[[24000, 28000, 32000, 29000, 35000, 41000], [19000, 21000, 26000, 24000, 28000, 33000]]"
          />
        </div>
      </div>
    `}),args:{}},a={render:()=>({components:{DvChartCard:i},template:`
      <div class="d-flex flex-column ga-8">
        <div>
          <div class="text-caption text-medium-emphasis mb-2">6 bars</div>
          <DvChartCard title="Six months" :labels="['Jan','Feb','Mar','Apr','May','Jun']" :bars="[[24,28,32,29,35,41]]" />
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">12 bars</div>
          <DvChartCard
            title="Twelve months"
            :labels="['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']"
            :bars="[[24,28,32,29,35,41,38,43,47,51,48,56]]"
          />
        </div>
      </div>
    `}),args:{}},s={render:()=>({components:{DvChartCard:i},template:`
      <div class="d-flex flex-column ga-8">
        <div>
          <div class="text-caption text-medium-emphasis mb-2">with subtitle</div>
          <DvChartCard title="Revenue" subtitle="Last 6 months" :labels="['Jan','Feb','Mar','Apr','May','Jun']" :bars="[[24,28,32,29,35,41]]" />
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">title only</div>
          <DvChartCard title="Revenue" :labels="['Jan','Feb','Mar','Apr','May','Jun']" :bars="[[24,28,32,29,35,41]]" />
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">flat series — every bar at the max</div>
          <DvChartCard title="Flat" :labels="['Jan','Feb','Mar','Apr','May','Jun']" :bars="[[30,30,30,30,30,30]]" />
        </div>
      </div>
    `}),args:{}},r={args:{title:"Revenue Comparison",subtitle:"This Year vs Last Year",labels:["Jan","Feb","Mar","Apr","May","Jun"],seriesNames:["This Year","Last Year"],bars:[[24e3,28e3,32e3,29e3,35e3,41e3],[18e3,22e3,25e3,23e3,28e3,32e3]]}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Revenue by Month',
    subtitle: 'Last 12 Months',
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    bars: [[24000, 28000, 32000, 29000, 35000, 41000, 38000, 43000, 47000, 51000, 48000, 56000]]
  }
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DvChartCard
    },
    template: \`
      <div class="d-flex flex-column ga-8">
        <div>
          <div class="text-caption text-medium-emphasis mb-2">single series — no legend</div>
          <DvChartCard
            title="Revenue by Month" subtitle="Last 6 months"
            :labels="['Jan','Feb','Mar','Apr','May','Jun']"
            :bars="[[24000, 28000, 32000, 29000, 35000, 41000]]"
          />
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">multi series — legend appears</div>
          <DvChartCard
            title="Revenue Comparison" subtitle="This year vs last"
            :labels="['Jan','Feb','Mar','Apr','May','Jun']"
            :series-names="['This Year','Last Year']"
            :bars="[[24000, 28000, 32000, 29000, 35000, 41000], [19000, 21000, 26000, 24000, 28000, 33000]]"
          />
        </div>
      </div>
    \`
  }),
  args: {} as never
}`,...e.parameters?.docs?.source},description:{story:"Single series vs multi-series with a legend — the structural axis.",...e.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DvChartCard
    },
    template: \`
      <div class="d-flex flex-column ga-8">
        <div>
          <div class="text-caption text-medium-emphasis mb-2">6 bars</div>
          <DvChartCard title="Six months" :labels="['Jan','Feb','Mar','Apr','May','Jun']" :bars="[[24,28,32,29,35,41]]" />
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">12 bars</div>
          <DvChartCard
            title="Twelve months"
            :labels="['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']"
            :bars="[[24,28,32,29,35,41,38,43,47,51,48,56]]"
          />
        </div>
      </div>
    \`
  }),
  args: {} as never
}`,...a.parameters?.docs?.source},description:{story:"Bar-count is the size axis — the plot area is fixed, so bars thin as the series grows.",...a.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DvChartCard
    },
    template: \`
      <div class="d-flex flex-column ga-8">
        <div>
          <div class="text-caption text-medium-emphasis mb-2">with subtitle</div>
          <DvChartCard title="Revenue" subtitle="Last 6 months" :labels="['Jan','Feb','Mar','Apr','May','Jun']" :bars="[[24,28,32,29,35,41]]" />
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">title only</div>
          <DvChartCard title="Revenue" :labels="['Jan','Feb','Mar','Apr','May','Jun']" :bars="[[24,28,32,29,35,41]]" />
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">flat series — every bar at the max</div>
          <DvChartCard title="Flat" :labels="['Jan','Feb','Mar','Apr','May','Jun']" :bars="[[30,30,30,30,30,30]]" />
        </div>
      </div>
    \`
  }),
  args: {} as never
}`,...s.parameters?.docs?.source},description:{story:"With and without a subtitle, and a flat series where every bar is equal.",...s.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Revenue Comparison',
    subtitle: 'This Year vs Last Year',
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    seriesNames: ['This Year', 'Last Year'],
    bars: [[24000, 28000, 32000, 29000, 35000, 41000], [18000, 22000, 25000, 23000, 28000, 32000]]
  }
}`,...r.parameters?.docs?.source}}};const p=["Default","Variants","Sizes","States","WithLegend"];export{t as Default,a as Sizes,s as States,e as Variants,r as WithLegend,p as __namedExportsOrder,m as default};
