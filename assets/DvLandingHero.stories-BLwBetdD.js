import{D as o}from"./DvLandingHero-Bgnd8xwM.js";import"./iframe-DH-XNaA6.js";import"./preload-helper-PPVm8Dsz.js";import"./DvOrbitOrb-Dlz_gu7F.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const m={title:"Product/Da Vinci/DvLandingHero",component:o,tags:["autodocs"],argTypes:{name:{control:"text",description:"First name shown in the greeting"},prompt:{control:"text",description:"Gradient second line"},suggestions:{control:"object",description:"Suggestion chips (2-column grid)"},orbSize:{control:{type:"number",min:56,max:160},description:"Identity orb size in px"}},parameters:{docs:{description:{component:`
## Overview
DvLandingHero is the shared Da Vinci front page — the twin-ring Orbit identity
orb with dotted pulse ripples, a two-line greeting ("Hi Ross," + gradient
prompt), a gradient rule, and a 2-column grid of suggestion chips. Used by
both the text-mode landing (MpDaVinciBot) and the voice-mode ready state
(DvOrbitVoiceSurface); only the host footer differs.
`}}}},n={args:{suggestions:["Show open rate trend for last 30 days","Create a revenue by channel widget","Add a recent orders table","Show ticket volume over time"]}},e={render:s=>({components:{DvLandingHero:o},setup:()=>({args:s}),template:'<DvLandingHero v-bind="args" />'})},r={render:()=>({components:{DvLandingHero:o},template:`
      <div class="d-flex flex-column ga-8">
        <div>
          <div class="text-caption text-medium-emphasis mb-2">short headline</div>
          <DvLandingHero />
        </div>
      </div>
    `}),args:{}},t={render:()=>({components:{DvLandingHero:o},template:"<DvLandingHero />"}),args:{}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    suggestions: ['Show open rate trend for last 30 days', 'Create a revenue by channel widget', 'Add a recent orders table', 'Show ticket volume over time']
  }
}`,...n.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      DvLandingHero
    },
    setup: () => ({
      args
    }),
    template: \`<DvLandingHero v-bind="args" />\`
  })
}`,...e.parameters?.docs?.source},description:{story:`The hero has one structure — eyebrow, headline, and an underline rule. What varies
is the copy it carries.`,...e.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DvLandingHero
    },
    template: \`
      <div class="d-flex flex-column ga-8">
        <div>
          <div class="text-caption text-medium-emphasis mb-2">short headline</div>
          <DvLandingHero />
        </div>
      </div>
    \`
  }),
  args: {} as never
}`,...r.parameters?.docs?.source},description:{story:"Short vs long headline — the type scale holds and the rule stays put.",...r.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DvLandingHero
    },
    template: \`<DvLandingHero />\`
  }),
  args: {} as never
}`,...t.parameters?.docs?.source},description:{story:"The hero is static — it has one state.",...t.parameters?.docs?.description}}};const l=["Default","Variants","Sizes","States"];export{n as Default,r as Sizes,t as States,e as Variants,l as __namedExportsOrder,m as default};
