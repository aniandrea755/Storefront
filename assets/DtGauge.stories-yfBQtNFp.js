import{ec as n}from"./iframe-DH-XNaA6.js";import{D as s}from"./DtGauge-CY6pl-Dt.js";import"./preload-helper-PPVm8Dsz.js";import"./chartPalette-BfEQgAlK.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const m={title:"Product/Dashboards/Dotted/DtGauge",component:s,tags:["autodocs"],parameters:{docs:{description:{component:'\n### Overview\n`DtGauge` is the goal gauge behind `DashboardGaugeWidget`: a round-capped progress arc on a\nsoft track with a centered value + caption. The arc shades from the base colour toward a lighter\ntint along the sweep; `emboss` switches to the lit-crown vertical ramp shared with the bar\nmarks, and `flat` renders a solid arc for Polaris-style themes. SVG gradient ids are scoped per\ninstance via `useId()`, so multiple gauges on one page never collide.\n\n### Use when\n- Rendering a single 0–100 goal metric inside a dashboard widget.\n\n### Don\'t use when\n- Comparing multiple series — use the donut/ring widgets instead.\n\n### A11y\n- The SVG carries `role="img"` with an `aria-label` composed from `centerValue` + `centerCaption`.\n        '}}},argTypes:{pct:{control:{type:"range",min:0,max:100,step:1},description:"Progress 0–100 (clamped)."},centerValue:{control:"text",description:"Large center figure."},centerCaption:{control:"text",description:"Small caption under the center figure."},sweep:{control:{type:"range",min:90,max:360,step:10},description:"Arc sweep in degrees. 270 gives the shadcn radial that opens at the bottom; 360 is a full ring."},color:{control:"color",description:"Arc colour (theme-driven for flat Polaris themes)."},flat:{control:"boolean",description:"Solid arc, no gradient shading."},emboss:{control:"boolean",description:"Lit crown + darkened base lip, matching the embossed bar marks."}}},o={args:{pct:68,centerValue:"68%",centerCaption:"of $30,000"}},e={args:{pct:100,centerValue:"10 / 10",centerCaption:"score",sweep:270}},r={args:{pct:45,centerValue:"45%",centerCaption:"complete",flat:!0,color:n}},t={args:{pct:82,centerValue:"82%",centerCaption:"to goal",emboss:!0}},a={render:()=>({components:{DtGauge:s},template:`
      <div class="d-flex ga-6 flex-wrap">
        <DtGauge :pct="0" center-value="0%" center-caption="no progress" />
        <DtGauge :pct="100" center-value="100%" center-caption="complete" />
      </div>
    `})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    pct: 68,
    centerValue: '68%',
    centerCaption: 'of $30,000'
  }
}`,...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    pct: 100,
    centerValue: '10 / 10',
    centerCaption: 'score',
    sweep: 270
  }
}`,...e.parameters?.docs?.source},description:{story:"270° shadcn radial — the gap centers on the bottom.",...e.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    pct: 45,
    centerValue: '45%',
    centerCaption: 'complete',
    flat: true,
    color: mp_color_light_moduleTile_violet_accent
  }
}`,...r.parameters?.docs?.source},description:{story:"Flat (Polaris) mode: solid arc in the given colour, no gradient.",...r.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    pct: 82,
    centerValue: '82%',
    centerCaption: 'to goal',
    emboss: true
  }
}`,...t.parameters?.docs?.source},description:{story:"Embossed mode: the vertical lit-crown ramp shared with the bar marks.",...t.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DtGauge
    },
    template: \`
      <div class="d-flex ga-6 flex-wrap">
        <DtGauge :pct="0" center-value="0%" center-caption="no progress" />
        <DtGauge :pct="100" center-value="100%" center-caption="complete" />
      </div>
    \`
  })
}`,...a.parameters?.docs?.source},description:{story:"Edge values render without artefacts — 0% leaves the track only, 100% closes the arc.",...a.parameters?.docs?.description}}};const u=["Default","ThreeQuarterSweep","Flat","Embossed","EdgeValues"];export{o as Default,a as EdgeValues,t as Embossed,r as Flat,e as ThreeQuarterSweep,u as __namedExportsOrder,m as default};
