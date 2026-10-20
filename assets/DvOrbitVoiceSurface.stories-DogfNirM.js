import{D as m}from"./DvOrbitVoiceSurface-BEg83xV2.js";import{u as b}from"./useDashboards-BHTIT6Rb.js";import"./iframe-DH-XNaA6.js";import"./DvOrbitOrb-Dlz_gu7F.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./DvOrbitStatusPill-CJ2DI7KL.js";import"./DvOrbitWaveBars-C-ZhL1gi.js";import"./DvOrbitMicBar-BokCywT2.js";import"./DvWidgetDraftCard-NdoIMi2K.js";import"./DvDraftPreview-D7UL2Kcx.js";import"./DvRefineDialog-C_WDue3u.js";import"./MpDialog-vzXqpvNK.js";import"./useScrollEdges-CBa2dNoC.js";import"./MpFormField-BzBLjfV3.js";import"./MpFormGrid-CIGBvnp2.js";import"./MpFormSection-BK5pVmwO.js";import"./DvExpandDialog-IW0G3q6Q.js";import"./DvLandingHero-Bgnd8xwM.js";import"./useAccounts-BCL4QMJk.js";import"./metricCatalog-laA4Pjy5.js";import"./widgetSizePresets-CKImfI68.js";import"./preload-helper-PPVm8Dsz.js";const u="2000290",l="2000290-home",f=["Show open rate trend for last 30 days","Create a revenue by channel widget","Add a recent orders table","Show ticket volume over time"],g={dashboardId:l,type:"bar",title:"Revenue by Channel",dataSource:"commerce",metricId:"commerce_revenue_by_channel",dimension:"channel",drilldown:{routeName:"SalesSummary",label:"Open sales summary"},aiProvenance:{prompt:"create a revenue by channel widget",summary:"Da Vinci mapped your prompt to Revenue by Channel as a bar widget."}},U={title:"Product/Da Vinci/Voice/DvOrbitVoiceSurface",component:m,tags:["autodocs"],args:{state:"ready",suggestions:f,accountId:u,dashboardId:l},argTypes:{accountId:{control:"text",description:"Account the inline draft card would add its widget to."},dashboardId:{control:"text",description:"Target dashboard for the inline draft cards add action."},filters:{control:"object",description:"`DashboardFilterState` passed to the inline draft preview, so it renders under the filters it would actually run under."},draftKey:{control:"number",description:"Remount key for the draft card. Bump it to force a fresh render — what Undo does."},state:{control:"select",options:["ready","listening","thinking","responding","added","error","paused"],description:"`OrbitState` — the one prop that drives the whole surface. Each state selects which region renders (hero + suggestion chips, live transcript, thinking echo, response strip, draft card, error)."},transcript:{control:"text",description:"Live interim transcript, shown while `state` is listening. Expected to update on every recognition tick."},lastRequest:{control:"text",description:"Echo of the submitted request, shown while thinking, so the user can see what was heard after the transcript clears."},caption:{control:"text",description:"Assistant caption for the ambient strip in the responding and added states."},speaking:{control:"boolean",description:"True only while TTS is actually producing audio. Drives the strip waveform — it is not the same as `state === 'responding'`, which stays true after speech ends."},suggestions:{control:"object",description:"Up to four suggestion chips shown on the ready hero. More than four will overflow the row."},chips:{control:"object",description:"Follow-up ghost chips offered after a response, distinct from `suggestions` (which are the cold-start prompts)."},draft:{control:"object",description:"`DashboardWidgetDraft` to render inline via `DvWidgetDraftCard`, or `null` for none."},addedTo:{control:"text",description:"Dashboard name shown in the success strip once a draft has been added."},errorMessage:{control:"text",description:"Message shown in the error state. Set it together with the matching `state`; on its own it renders nothing."}},parameters:{docs:{description:{component:`
## Overview
DvOrbitVoiceSurface is the Da Vinci drawer's entire body + footer while in voice
mode — a purely presentational 7-state machine (\`OrbitState\`): ready · listening ·
thinking · responding · added · error · paused. The host (MpDaVinciBot) owns the
state; everything here is driven by props, with the mic bar mapped per state.
Stories render inside a 420×640 drawer-shaped frame; the responding/added states
host a live \`DvWidgetDraftCard\` (dashboards store seeded with account 2000290).
`}}},render:e=>({components:{DvOrbitVoiceSurface:m},setup(){return b().ensureAccountDashboards(u),{args:e}},template:`
      <div style="width: 420px; height: 640px; display: flex; flex-direction: column; border: 1px solid rgb(var(--v-theme-outline-variant)); border-radius: 16px; overflow: hidden; background: rgb(var(--v-theme-surface));">
        <DvOrbitVoiceSurface v-bind="args" />
      </div>
    `})},r={},t={args:{state:"listening",transcript:"Show revenue by channel for the last 30 days"}},s={args:{state:"thinking",lastRequest:"Create a revenue by channel widget"}},a={args:{state:"responding",caption:"Here’s a bar chart of revenue by channel for the last 30 days. Want me to add it?",speaking:!0,draft:g}},o={args:{state:"added",addedTo:"Overview",draft:g}},n={args:{state:"error"}},i={args:{state:"error",errorMessage:"Microphone access is blocked. Allow it in browser settings, or continue by typing."}},c={args:{state:"paused"}},d={render:e=>({components:{DvOrbitVoiceSurface:m},setup:()=>({args:e}),template:'<DvOrbitVoiceSurface v-bind="args" />'})},p={render:e=>({components:{DvOrbitVoiceSurface:m},setup:()=>({args:e}),template:'<DvOrbitVoiceSurface v-bind="args" />'})},h={render:e=>({components:{DvOrbitVoiceSurface:m},setup:()=>({args:e}),template:'<DvOrbitVoiceSurface v-bind="args" />'})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source},description:{story:"Ready — DvLandingHero greeting + suggestion chips, ripple mic.",...r.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    state: 'listening',
    transcript: 'Show revenue by channel for the last 30 days'
  }
}`,...t.parameters?.docs?.source},description:{story:"Listening — fast orb, live interim transcript with caret, cancel ghost.",...t.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    state: 'thinking',
    lastRequest: 'Create a revenue by channel widget'
  }
}`,...s.parameters?.docs?.source},description:{story:"Thinking — arc orb, request echo, shimmering skeleton card.",...s.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    state: 'responding',
    caption: 'Here’s a bar chart of revenue by channel for the last 30 days. Want me to add it?',
    speaking: true,
    draft: BAR_DRAFT
  }
}`,...a.parameters?.docs?.source},description:{story:"Responding — ambient strip (speaking waveform) + live widget draft card + follow-up chips.",...a.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    state: 'added',
    addedTo: 'Overview',
    draft: BAR_DRAFT
  }
}`,...o.parameters?.docs?.source},description:{story:"Added — success strip with Undo, plus Open dashboard / Add another chips.",...o.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    state: 'error'
  }
}`,...n.parameters?.docs?.source},description:{story:`Error — dimmed orb, "Didn't catch that" pill, Try again / Type instead chips.`,...n.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    state: 'error',
    errorMessage: 'Microphone access is blocked. Allow it in browser settings, or continue by typing.'
  }
}`,...i.parameters?.docs?.source},description:{story:"Permission denied — specific recovery copy with the persistent Type instead path.",...i.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    state: 'paused'
  }
}`,...c.parameters?.docs?.source},description:{story:"Paused — dim slow orb, muted mic with slash.",...c.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      DvOrbitVoiceSurface
    },
    setup: () => ({
      args
    }),
    template: \`<DvOrbitVoiceSurface v-bind="args" />\`
  })
}`,...d.parameters?.docs?.source},description:{story:"One structure — the voice surface — in each of the orb's conversational modes. The modes are states rather than structures; see `States`.",...d.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      DvOrbitVoiceSurface
    },
    setup: () => ({
      args
    }),
    template: \`<DvOrbitVoiceSurface v-bind="args" />\`
  })
}`,...p.parameters?.docs?.source},description:{story:"There is no `size` prop — the surface fills the copilot panel. Its layout insets, gaps and type are tokens; the **orb geometry itself** (wave-bar widths, the 2.5px stroke, the glyph baseline nudges) is canvas geometry and stays deliberately off the spacing scale, the same exemption the chart canvases carry.",...p.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      DvOrbitVoiceSurface
    },
    setup: () => ({
      args
    }),
    template: \`<DvOrbitVoiceSurface v-bind="args" />\`
  })
}`,...h.parameters?.docs?.source},description:{story:"The full conversational cycle — ready, listening, thinking, responding — plus the two failure states (error, permission denied) and paused.",...h.parameters?.docs?.description}}};const W=["Ready","Listening","Thinking","Responding","Added","ErrorState","PermissionDenied","Paused","Variants","Sizes","States"];export{o as Added,n as ErrorState,t as Listening,c as Paused,i as PermissionDenied,r as Ready,a as Responding,p as Sizes,h as States,s as Thinking,d as Variants,W as __namedExportsOrder,U as default};
