import{D as a}from"./DvOrbitWaveBars-C-ZhL1gi.js";import"./iframe-DH-XNaA6.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const c={title:"Product/Da Vinci/Voice/DvOrbitWaveBars",component:a,tags:["autodocs"],args:{count:4,maxHeight:16,barWidth:3,gap:3},argTypes:{count:{control:{type:"number",min:1,max:24},description:"Number of bars. The component draws exactly this many; it does not wrap or scroll."},maxHeight:{control:{type:"number",min:4,max:48},description:"Peak bar height in px at full amplitude. Canvas geometry, deliberately off the spacing scale."},barWidth:{control:{type:"number",min:1,max:8,step:.5},description:"Width of a single bar in px."},gap:{control:{type:"number",min:1,max:10,step:.5},description:"Gap between bars in px. Total width is `count * barWidth + (count - 1) * gap`, so these four props size the component together."}},parameters:{docs:{description:{component:`
## Overview
DvOrbitWaveBars is the Orbit handoff \`bars()\` waveform primitive — gradient bars
with deterministic resting heights (so static renders match the reference) and a
staggered CSS pulse. Used at 4×16px in the responding strip while TTS is speaking,
and at 3×10px inside \`DvOrbitStatusPill\`'s listening state.
`}}},render:s=>({components:{DvOrbitWaveBars:a},setup:()=>({args:s}),template:`
      <div class="d-inline-flex align-center pa-4 rounded-lg" style="background: rgb(var(--v-theme-surface)); border: 1px solid rgb(var(--v-theme-outline-variant));">
        <DvOrbitWaveBars v-bind="args" />
      </div>
    `})},e={},t={args:{count:3,maxHeight:10,barWidth:2.5,gap:2.5}},r={args:{count:16,maxHeight:28,barWidth:3,gap:4}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source},description:{story:"Responding-strip waveform — 4 bars, 16px tall (shown while TTS speaks).",...e.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    count: 3,
    maxHeight: 10,
    barWidth: 2.5,
    gap: 2.5
  }
}`,...t.parameters?.docs?.source},description:{story:"Status-pill waveform — 3 slim bars, 10px tall (listening pill).",...t.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    count: 16,
    maxHeight: 28,
    barWidth: 3,
    gap: 4
  }
}`,...r.parameters?.docs?.source},description:{story:"Wider meter — shows the deterministic height pattern across many bars.",...r.parameters?.docs?.description}}};const d=["SpeakingStrip","StatusPill","WideMeter"];export{e as SpeakingStrip,t as StatusPill,r as WideMeter,d as __namedExportsOrder,c as default};
