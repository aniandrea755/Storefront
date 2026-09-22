import{D as i}from"./DvOrbitMicBar-IgGvE_Ru.js";import"./iframe-BqHSr5b_.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const d={title:"Product/Da Vinci/Voice/DvOrbitMicBar",component:i,tags:["autodocs"],args:{micSize:56,ripple:!1,muted:!1,ghost:"keyboard",micLabel:"Tap to talk"},argTypes:{micSize:{control:"select",options:[50,56],description:"56 in hero states, 50 in stacked states"},ripple:{control:"boolean",description:"Twin violet/cyan ripple rings (ready/listening/responding)"},muted:{control:"boolean",description:"Gray mic with white slash (paused)"},ghost:{control:"select",options:["keyboard","cancel","none"],description:"Right-side 40px ghost action"},micLabel:{control:"text",description:`Caption under the mic button. It is also the button's accessible name, so it must describe the action, not the state — \\"Tap to talk\\", not \\"Listening\\".`}},parameters:{docs:{description:{component:`
## Overview
DvOrbitMicBar is the fixed footer of the Orbit voice surface: the gradient mic
button (with optional twin ripple rings) plus a right-aligned ghost action —
keyboard (switch to typing) or ✕ (cancel listening). Sizes and flags per state are
mapped by \`DvOrbitVoiceSurface\`; stories below mirror those combinations. The
drawer is 420px wide, so stories render inside a fixed-width host.
`}}},render:o=>({components:{DvOrbitMicBar:i},setup:()=>({args:o}),template:`
      <div style="width: 420px; background: rgb(var(--v-theme-surface)); border: 1px solid rgb(var(--v-theme-outline-variant)); border-radius: 16px; padding-top: 20px;">
        <DvOrbitMicBar v-bind="args" />
      </div>
    `})},e={args:{ripple:!0}},t={args:{ripple:!0,ghost:"cancel",micLabel:"Tap to stop"}},r={args:{micSize:50,ghost:"none"}},s={args:{muted:!0,micLabel:"Tap to resume"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    ripple: true
  }
}`,...e.parameters?.docs?.source},description:{story:"Ready — 56px mic, ripple on, keyboard ghost.",...e.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    ripple: true,
    ghost: 'cancel',
    micLabel: 'Tap to stop'
  }
}`,...t.parameters?.docs?.source},description:{story:"Listening — ripple on, ghost becomes cancel ✕.",...t.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    micSize: 50,
    ghost: 'none'
  }
}`,...r.parameters?.docs?.source},description:{story:"Thinking — 50px mic, no ripple, ghost hidden.",...r.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    muted: true,
    micLabel: 'Tap to resume'
  }
}`,...s.parameters?.docs?.source},description:{story:"Paused — muted gray mic with slash.",...s.parameters?.docs?.description}}};const m=["Ready","Listening","Thinking","Paused"];export{t as Listening,s as Paused,e as Ready,r as Thinking,m as __namedExportsOrder,d as default};
