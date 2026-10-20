import o from"./DvOrbCanvas-Bi357BqK.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-DH-XNaA6.js";import"./useElementSize-BFN2tl5Q.js";import"./useAppTheme-BnoIuyqv.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";function c(){const e=performance.now()/1e3;return{micActive:!0,micLevel:.45+.3*Math.abs(Math.sin(e*2.1)),bands:Float32Array.from({length:16},(d,n)=>.3+.5*Math.abs(Math.sin(e*1.7+n*.6))),speakEnergy:0}}function p(){const e=performance.now()/1e3;return{micActive:!1,micLevel:0,bands:new Float32Array(16),speakEnergy:.5+.45*Math.sin(e*5)}}const f={title:"Product/Da Vinci/Voice/DvOrbCanvas",component:o,tags:["autodocs"],args:{state:"idle",audioSource:null,paused:!1,maxPixelRatio:2,opacity:2.7},argTypes:{state:{control:"select",options:["idle","listening","thinking","speaking"],description:"Engine animation state"},audioSource:{control:!1,description:"Pull-based OrbAudioFrame source (stories inject synthetic frames)"},paused:{control:"boolean",description:"Freezes the animation loop. Use it when the orb is off-screen or the surface is hidden — the canvas keeps its last frame instead of burning a rAF loop."},maxPixelRatio:{control:{type:"number",min:1,max:3},description:"Upper bound on `devicePixelRatio` when sizing the backing canvas. Caps the cost on 3x displays; 2 is the default and is visually indistinguishable from 3 at this size."},opacity:{control:{type:"number",min:.5,max:4,step:.1},description:"Shader opacity multiplier for the orb material (not a CSS opacity). Values above 1 deepen the colour; 2.7 is the tuned default."}},parameters:{docs:{description:{component:`
## Overview
DvOrbCanvas hosts the WebGL Da Vinci particle orb (three.js + the shared engine
fetched at runtime from \`public/dv-orb/dv-orb-engine.js\`). It renders live on an
animation frame loop, reacts to an optional pull-based audio source, and resolves
its palette from the \`--dv-*\` theme tokens.

**Storybook notes:** stories pin a fixed-size dark surface so the additive glow
reads clearly. If the runtime engine script cannot be served (e.g. a static
Storybook build without the app's \`public/\` dir), the component's built-in CSS
placeholder orb renders instead — that graceful fallback is part of the component.
Listening/Speaking stories feed synthetic audio frames in place of
\`useDaVinciVoice().getVoiceFrame\`.
`}}},render:e=>({components:{DvOrbCanvas:o},setup:()=>({args:e}),template:`
      <v-theme-provider theme="maropostDark" with-background class="rounded-lg" style="display: inline-block;">
        <div style="width: 380px; height: 380px;">
          <DvOrbCanvas v-bind="args" />
        </div>
      </v-theme-provider>
    `})},t={},s={args:{state:"listening",audioSource:c}},a={args:{state:"thinking"}},r={args:{state:"speaking",audioSource:p}},i={args:{paused:!0}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source},description:{story:"Resting orb — slow ambient drift.",...t.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    state: 'listening',
    audioSource: syntheticMicFrame
  }
}`,...s.parameters?.docs?.source},description:{story:"Listening with a synthetic mic level + 16 frequency bands driving the surface.",...s.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    state: 'thinking'
  }
}`,...a.parameters?.docs?.source},description:{story:"Thinking — the engine's processing churn (no audio input).",...a.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    state: 'speaking',
    audioSource: syntheticSpeakFrame
  }
}`,...r.parameters?.docs?.source},description:{story:"Speaking pulse driven by a synthetic TTS energy envelope.",...r.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    paused: true
  }
}`,...i.parameters?.docs?.source},description:{story:"Paused — the frame loop is suspended mid-state.",...i.parameters?.docs?.description}}};const v=["Idle","Listening","Thinking","Speaking","Paused"];export{t as Idle,s as Listening,i as Paused,r as Speaking,a as Thinking,v as __namedExportsOrder,f as default};
