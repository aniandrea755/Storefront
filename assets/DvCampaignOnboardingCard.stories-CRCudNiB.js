import{D as i}from"./DvCampaignOnboardingCard-C66pYyXz.js";import"./iframe-DH-XNaA6.js";import"./preload-helper-PPVm8Dsz.js";import"./DvOnboardingCardShell-CsRFHDhD.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const l={title:"Product/Da Vinci/DvCampaignOnboardingCard",component:i,tags:["autodocs"],parameters:{docs:{description:{component:`
### Overview
\`DvCampaignOnboardingCard\` is the campaign-readiness chat card Da Vinci renders before a first
send. It shows a step progress bar, a checklist of readiness items each carrying a status
(\`ready\` / \`needs-setup\` / \`unknown\`), and up to two actions. The card surfaces the **next
blocker** — the first item that isn't \`ready\` — so the merchant always has one obvious next move.

**Use when:** the assistant is walking a merchant through campaign prerequisites (sending
domain, list, content).

**Don't use when:** the flow is generic guided setup rather than campaign readiness — use
\`DvSetupOnboardingCard\`, its structural counterpart.

### 🟢 Do's
- **Do** give every item a \`routeName\` + \`actionLabel\` when it can be fixed, so the card links
  straight to the fix.
- **Do** keep \`description\` to one sentence — the checklist carries the detail.

### 🔴 Don'ts
- **Don't** use \`unknown\` as a default status; it reads as "can't verify" and should be rare.

### A11y
- **Provides:** status is conveyed by icon + text label ("Ready", "Needs setup"), never color
  alone; the progress bar is a Vuetify progress-linear with the correct role.
- **Consumer must:** handle the emitted \`action\` string — the card is presentational.
        `}}},args:{title:"Your campaign setup",description:"Da Vinci checked the three things needed for a safe first send.",step:3,totalSteps:4,items:[{id:"domain",label:"Sending domain",description:"Your sending identity is authenticated.",status:"ready",routeName:"SettingsDnsSetup",actionLabel:"Set up domain"},{id:"audience",label:"Audience",description:"Choose at least one list or segment.",status:"needs-setup",routeName:"ContactLists",actionLabel:"Create an audience"},{id:"content",label:"Email content",description:"Templates are available to use in the builder.",status:"ready",routeName:"EmailContent",actionLabel:"Browse templates"}],primaryAction:{label:"Continue with a draft",action:"continue-draft",icon:"file-pen-line"},secondaryAction:{label:"Change brief",action:"change-brief",icon:"refresh-cw"}},argTypes:{title:{control:"text",description:"Card heading — the thing being set up."},description:{control:"text",description:"Supporting line under the title. Defaults to empty."},items:{control:"object",description:"`CampaignReadinessItem[]` — each with a `status` of `ready`, `needs-setup` or `unknown`, which selects its icon, label and colour. The first item that is not `ready` becomes the highlighted next blocker."},primaryAction:{control:"object",description:"`CampaignOnboardingAction` for the main button. Emits `action` with its key when pressed."},secondaryAction:{control:"object",description:"Optional second action, rendered at lower emphasis. Emits `action` the same way."},step:{control:{type:"number",min:1,max:4},description:"Current step, 1-based. Drives the progress bar and the `Campaign setup - Step N of M` eyebrow."},totalSteps:{control:{type:"number",min:1,max:6},description:"Total steps in the flow. Used as the progress denominator, so it must be the real total, not the count of items shown."}}},e={},t={args:{title:"Everything is ready for a draft",description:"Your sending domain, audience, and content library are available.",items:[{id:"domain",label:"Sending domain",description:"Your sending identity is authenticated.",status:"ready",routeName:"SettingsDnsSetup",actionLabel:"Review domain"},{id:"audience",label:"Audience",description:"VIP Customer Circle has 312 contacts.",status:"ready",routeName:"ContactLists",actionLabel:"Review audience"},{id:"content",label:"Email content",description:"Templates are available to use in the builder.",status:"ready",routeName:"EmailContent",actionLabel:"Browse templates"}]}},n={args:{title:"One item needs a closer look",description:"Da Vinci will not claim readiness when the prototype cannot verify it.",items:[{id:"domain",label:"Sending domain",description:"Open DNS setup to confirm the current status.",status:"unknown",routeName:"SettingsDnsSetup",actionLabel:"Check DNS setup"}]}},a={args:{title:"Draft opened in the campaign builder",description:"Da Vinci prepared the details and audience. The merchant still controls content, timing, and send.",step:4,totalSteps:4,items:[],primaryAction:void 0,secondaryAction:void 0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Everything is ready for a draft',
    description: 'Your sending domain, audience, and content library are available.',
    items: [{
      id: 'domain',
      label: 'Sending domain',
      description: 'Your sending identity is authenticated.',
      status: 'ready',
      routeName: 'SettingsDnsSetup',
      actionLabel: 'Review domain'
    }, {
      id: 'audience',
      label: 'Audience',
      description: 'VIP Customer Circle has 312 contacts.',
      status: 'ready',
      routeName: 'ContactLists',
      actionLabel: 'Review audience'
    }, {
      id: 'content',
      label: 'Email content',
      description: 'Templates are available to use in the builder.',
      status: 'ready',
      routeName: 'EmailContent',
      actionLabel: 'Browse templates'
    }]
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'One item needs a closer look',
    description: 'Da Vinci will not claim readiness when the prototype cannot verify it.',
    items: [{
      id: 'domain',
      label: 'Sending domain',
      description: 'Open DNS setup to confirm the current status.',
      status: 'unknown',
      routeName: 'SettingsDnsSetup',
      actionLabel: 'Check DNS setup'
    }]
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Draft opened in the campaign builder',
    description: 'Da Vinci prepared the details and audience. The merchant still controls content, timing, and send.',
    step: 4,
    totalSteps: 4,
    items: [],
    primaryAction: undefined,
    secondaryAction: undefined
  }
}`,...a.parameters?.docs?.source}}};const p=["NeedsSetup","Ready","CannotVerify","Complete"];export{n as CannotVerify,a as Complete,e as NeedsSetup,t as Ready,p as __namedExportsOrder,l as default};
