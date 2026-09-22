import{D as s}from"./DtLegendList-Bo3rUgjb.js";import{D as e}from"./dottedChartMath-B73keMRT.js";import"./iframe-BqHSr5b_.js";import"./preload-helper-PPVm8Dsz.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./chartPalette-Bznt7cdU.js";const r=[{label:"Online store",value:"$18,410",color:e[0]},{label:"POS",value:"$9,180",color:e[1]},{label:"Marketplaces",value:"$4,320",color:e[2]},{label:"Wholesale",value:"$1,270",color:e[3]}],i=[{label:"Online store",value:"$18,410",color:e[0],delta:"↗ 5%",deltaPositive:!0},{label:"POS",value:"$9,180",color:e[1],delta:"↗ 12%",deltaPositive:!0},{label:"Marketplaces",value:"$4,320",color:e[2],delta:"↘ 3%",deltaPositive:!1},{label:"Wholesale",value:"$1,270",color:e[3],delta:"↘ 8%",deltaPositive:!1}],u={title:"Product/Dashboards/Dotted/DtLegendList",component:s,tags:["autodocs"],parameters:{docs:{description:{component:"\n### Overview\n`DtLegendList` renders the swatch + label + value legend rows next to the dotted donut/pie\nwidgets (`DashboardDonutWidget`). Rows can carry an optional period-over-period `delta`\nrendered in `--pos`/`--neg` tints via `deltaPositive`. It exports the `DtLegendRow` type\nconsumed by the widget data shapes.\n\n### Use when\n- Listing the series behind a donut/pie mark, with values and optional change indicators.\n\n### Don't use when\n- The legend needs interaction (hover-highlight, toggling series) — the dotted family is static.\n        "}}},argTypes:{rows:{control:"object",description:"DtLegendRow[] — label, value, swatch color, optional delta + deltaPositive."},gap:{control:{type:"range",min:4,max:20,step:1},description:"Vertical gap between rows in px (default 9)."}}},a={args:{rows:r}},t={args:{rows:i}},o={args:{rows:r,gap:16}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    rows: ROWS
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    rows: ROWS_WITH_DELTAS
  }
}`,...t.parameters?.docs?.source},description:{story:"Rows with period-over-period deltas — positive tinted `--pos`, negative `--neg`.",...t.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    rows: ROWS,
    gap: 16
  }
}`,...o.parameters?.docs?.source},description:{story:"Wider row spacing for taller card layouts.",...o.parameters?.docs?.description}}};const m=["Default","WithDeltas","LooseSpacing"];export{a as Default,o as LooseSpacing,t as WithDeltas,m as __namedExportsOrder,u as default};
