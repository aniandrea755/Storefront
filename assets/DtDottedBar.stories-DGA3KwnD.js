import{D as a}from"./DtDottedBar-DA114-i3.js";import{B as s,a as o}from"./dottedChartMath-B73keMRT.js";import"./iframe-BqHSr5b_.js";import"./preload-helper-PPVm8Dsz.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./chartPalette-Bznt7cdU.js";const l={title:"Product/Dashboards/Dotted/DtDottedBar",component:a,tags:["autodocs"],parameters:{docs:{description:{component:`
### Overview
\`DtDottedBar\` is the 6px gradient progress pill used inside the dotted dashboard widgets
(\`DashboardBarListWidget\`, \`DashboardBreakdownWidget\`, \`DashboardTabsWidget\`). It renders a
rounded track on \`--surface-secondary\` with a gradient fill clamped to 0–100%.

### Use when
- Rendering per-row progress/share inside a dotted-style widget list.

### Don't use when
- You need a labelled, standalone metric — compose it inside a widget row instead.
        `}}},argTypes:{pct:{control:{type:"range",min:0,max:120,step:1},description:"Fill percentage. Values outside 0–100 are clamped."},gradient:{control:"text",description:"CSS background-image for the fill. Defaults to the shared BAR_GRADIENT blue ramp."}}},r={args:{pct:62}},e={args:{pct:78,gradient:o}},t={render:()=>({components:{DtDottedBar:a},setup:()=>({BAR_GRADIENT:s}),template:`
      <div class="d-flex flex-column ga-3" style="max-width: 360px">
        <DtDottedBar :pct="0" />
        <DtDottedBar :pct="100" />
        <DtDottedBar :pct="118" :gradient="BAR_GRADIENT" />
      </div>
    `})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    pct: 62
  }
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    pct: 78,
    gradient: BAR_GRADIENT_GREEN
  }
}`,...e.parameters?.docs?.source},description:{story:"The shared green ramp (used for positive/goal rows).",...e.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DtDottedBar
    },
    setup: () => ({
      BAR_GRADIENT
    }),
    template: \`
      <div class="d-flex flex-column ga-3" style="max-width: 360px">
        <DtDottedBar :pct="0" />
        <DtDottedBar :pct="100" />
        <DtDottedBar :pct="118" :gradient="BAR_GRADIENT" />
      </div>
    \`
  })
}`,...t.parameters?.docs?.source},description:{story:"Values outside 0–100 are clamped, so an over-target row never overflows its track.",...t.parameters?.docs?.description}}};const D=["Default","GreenGradient","ClampedEdges"];export{t as ClampedEdges,r as Default,e as GreenGradient,D as __namedExportsOrder,l as default};
