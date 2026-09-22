import{D as a}from"./DvOrbitOrb-CursqOcX.js";import"./iframe-BqHSr5b_.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const m={title:"Product/Da Vinci/Voice/DvOrbitOrb",component:a,tags:["autodocs"],args:{size:118,speed:1,dim:!1,arc:!1,inverse:!1},argTypes:{size:{control:{type:"number",min:24,max:160},description:"Base size in px (renders at ×1.44)"},speed:{control:{type:"number",min:.1,max:3,step:.1},description:"Spin multiplier — listening 2.4 · thinking 1.6 · strip 1.4 · error 0.6 · paused 0.25"},dim:{control:"boolean",description:"Slate mark, breathe stilled (error/paused)"},arc:{control:"boolean",description:"Conic arc sweep outside the orb (thinking)"},inverse:{control:"boolean",description:"White mark for dark/gradient backgrounds"}},parameters:{docs:{description:{component:`
## Overview
DvOrbitOrb is the "Glow Mist Medium" particle identity mark used across the Orbit
voice surface — a canvas-rendered halo ring + scatter on one slow spin, with brand
spectral glints and a CSS breathe. It renders live on an animation frame loop; ink
colour is inherited from CSS \`currentColor\` (\`--dv-ink\` / dim slate / inverse white).
Stories pin the exact size/speed combinations each Orbit state uses.
`}}},render:n=>({components:{DvOrbitOrb:a},setup:()=>({args:n}),template:`
      <div
        class="d-inline-flex align-center justify-center rounded-lg"
        :style="{
          width: '260px',
          height: '260px',
          background: args.inverse ? 'var(--dv-grad)' : 'rgb(var(--v-theme-surface))',
          border: '1px solid rgb(var(--v-theme-outline-variant))',
        }"
      >
        <DvOrbitOrb v-bind="args" />
      </div>
    `})},e={args:{size:118,speed:2.4}},r={args:{size:96,speed:1.6,arc:!0}},s={args:{size:38,speed:1.4}},i={args:{size:118,speed:.6,dim:!0}},t={args:{size:118,speed:1.4,inverse:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    size: 118,
    speed: 2.4
  }
}`,...e.parameters?.docs?.source},description:{story:"Listening hero — 118px at 2.4× spin.",...e.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    size: 96,
    speed: 1.6,
    arc: true
  }
}`,...r.parameters?.docs?.source},description:{story:"Thinking — 96px at 1.6× with the monochrome arc sweep.",...r.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    size: 38,
    speed: 1.4
  }
}`,...s.parameters?.docs?.source},description:{story:"Ambient strip mark — 38px at 1.4× (responding state).",...s.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    size: 118,
    speed: 0.6,
    dim: true
  }
}`,...i.parameters?.docs?.source},description:{story:"Dimmed slate mark, breathe stilled — error (0.6×) and paused (0.25×) states.",...i.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    size: 118,
    speed: 1.4,
    inverse: true
  }
}`,...t.parameters?.docs?.source},description:{story:"Inverse white mark on the Da Vinci brand gradient.",...t.parameters?.docs?.description}}};const l=["Listening","Thinking","StripMark","Dimmed","Inverse"];export{i as Dimmed,t as Inverse,e as Listening,s as StripMark,r as Thinking,l as __namedExportsOrder,m as default};
