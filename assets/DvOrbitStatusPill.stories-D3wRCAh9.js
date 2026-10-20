import{D as o}from"./DvOrbitStatusPill-CJ2DI7KL.js";import"./iframe-DH-XNaA6.js";import"./DvOrbitWaveBars-C-ZhL1gi.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const m={title:"Product/Da Vinci/Voice/DvOrbitStatusPill",component:o,tags:["autodocs"],args:{state:"ready"},argTypes:{state:{control:"select",options:["ready","listening","thinking","error","paused","responding","added"],description:"Orbit state — responding/added render no pill (those states use strips instead)"}},parameters:{docs:{description:{component:`
## Overview
DvOrbitStatusPill is the uppercase status capsule shown under the orb in the Orbit
voice surface: READY (pulsing gradient dot), LISTENING (mini waveform), THINKING
(three pulsing dots), DIDN'T CATCH THAT (warn tint), and MIC PAUSED (muted tint).
The \`responding\` and \`added\` states intentionally render nothing — those states
use the ambient/success strips in \`DvOrbitVoiceSurface\` instead.
`}}}},e={},r={args:{state:"listening"}},s={args:{state:"thinking"}},t={args:{state:"error"}},a={args:{state:"paused"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source},description:{story:"READY — pulsing gradient dot.",...e.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    state: 'listening'
  }
}`,...r.parameters?.docs?.source},description:{story:"LISTENING — mini 3-bar waveform on the strip gradient.",...r.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    state: 'thinking'
  }
}`,...s.parameters?.docs?.source},description:{story:"THINKING — three staggered pulsing dots.",...s.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    state: 'error'
  }
}`,...t.parameters?.docs?.source},description:{story:"DIDN'T CATCH THAT — warn tint.",...t.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    state: 'paused'
  }
}`,...a.parameters?.docs?.source},description:{story:"MIC PAUSED — muted slate tint.",...a.parameters?.docs?.description}}};const u=["Ready","Listening","Thinking","Error","Paused"];export{t as Error,r as Listening,a as Paused,e as Ready,s as Thinking,u as __namedExportsOrder,m as default};
