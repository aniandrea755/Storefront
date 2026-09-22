import{P as o}from"./PlgTrialChip-C1I0pLGc.js";import{u as n}from"./usePlg-ML6QTG6m.js";import"./iframe-BqHSr5b_.js";import"./preload-helper-PPVm8Dsz.js";import"./useAccounts-BNKGYLRf.js";import"./PlgTalkToSalesDialog-Uyjcz-oU.js";import"./MpDialog-F4WZRRS8.js";import"./useScrollEdges-B2McRpMX.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./MpFormGrid-D0pxdSe6.js";import"./useToast-D0O_SpbR.js";import"./useToastStackTimers-CbTd3XmR.js";const S={title:"Product/PLG/PlgTrialChip",component:o,tags:["autodocs"],parameters:{docs:{story:{inline:!1,height:"440px"},description:{component:`
### Overview
\`PlgTrialChip\` is the AppBar's trial-status pill — a self-contained popover that reads
\`usePlgStore\` directly and renders nothing outside an active free trial (paid and cancelled
accounts get nothing back). The pill's color and label escalate with urgency — steady primary
while there's time left, amber "Expiring soon" inside the last 3 days, red "Trial ended" once it
lapses — and opening it shows the trial progress bar, Da Vinci AI token usage, the plan's trial
limits, and "Upgrade now" / "Talk to sales" actions (the latter opens \`PlgTalkToSalesDialog\`).

**Use when:** mounted once in \`AppBar\`, alongside the other utility icons — it's the one place
in the shell that surfaces trial urgency.

**Don't use when:** the account is on a paid plan — it already renders nothing itself, so don't
wrap it in your own \`v-if\`; don't duplicate it elsewhere per page.

### Usage
\`\`\`html
<PlgTrialChip />
\`\`\`

### 🟢 Do's
- **Do** mount it once, in the AppBar — it derives everything from \`usePlgStore().active\`.
- **Do** drive demo/story states through \`usePlgStore().applyDemoPreset(...)\` rather than
  editing \`states\` directly.
- **Do** let "Talk to sales" open \`PlgTalkToSalesDialog\` — don't build a second entry point.

### 🔴 Don'ts
- **Don't** pass props — it takes none; every value comes from the active account's PLG state.
- **Don't** gate its visibility yourself — \`v-if="plg.isTrial"\` is already built in.

### A11y
- **Provides:** the pill is a real \`<button>\` with \`aria-label="Trial status"\`,
  \`aria-haspopup="menu"\`, and \`aria-expanded\` bound to the popover state; Vuetify's \`v-menu\`
  traps focus, closes on Escape, and restores focus to the pill on close; urgency is conveyed by
  the label text ("Expiring soon", "Trial ended"), not color alone.
- **Consumer must:** nothing beyond mounting it — the component is fully self-contained.
        

### Controls
This chip takes **no props** — the Controls panel is empty by design. It reads
\`usePlgStore()\` and \`useAccountsStore()\`, so the way to change what it shows is to change the
PLG demo state (the user-menu switcher, or the \`?plg=\` param).
`}}}};function i(a){return{render:()=>({components:{PlgTrialChip:o},setup(){return n().applyDemoPreset(a),{}},template:`
        <div style="min-height: 100px; padding: 24px; display: flex; align-items: center;">
          <PlgTrialChip />
        </div>
      `})}}const e=i("trial-d3"),t=i("trial-d12"),r=i("trial-expired"),s={render:()=>({components:{PlgTrialChip:o},setup(){return n().applyDemoPreset("trial-d12"),{}},template:`
      <div style="min-height: 420px; padding: 24px; display: flex; justify-content: flex-end;">
        <PlgTrialChip />
      </div>
    `}),play:async({canvasElement:a})=>{await new Promise(p=>setTimeout(p,300)),a.querySelector('[aria-label="Trial status"]')?.click()}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"presetStory('trial-d3')",...e.parameters?.docs?.source},description:{story:'Steady mid-trial state — primary pill, "Trial · Nd".',...e.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"presetStory('trial-d12')",...t.parameters?.docs?.source},description:{story:'Inside the last 3 days — the pill escalates to warning color, "Expiring soon".',...t.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"presetStory('trial-expired')",...r.parameters?.docs?.source},description:{story:'Trial over — the pill turns error/red, "Trial ended"; the popover still offers the same actions.',...r.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      PlgTrialChip
    },
    setup() {
      const plg = usePlgStore();
      plg.applyDemoPreset('trial-d12');
      return {};
    },
    template: \`
      <div style="min-height: 420px; padding: 24px; display: flex; justify-content: flex-end;">
        <PlgTrialChip />
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    await new Promise(resolve => setTimeout(resolve, 300));
    const trigger = canvasElement.querySelector<HTMLElement>('[aria-label="Trial status"]');
    trigger?.click();
  }
}`,...s.parameters?.docs?.source},description:{story:`The popover opened automatically (expiring-soon preset): progress bar, Da Vinci AI token
meter, trial limits, and the Upgrade now / Talk to sales actions.`,...s.parameters?.docs?.description}}};const w=["Default","ExpiringSoon","Expired","OpenPopover"];export{e as Default,r as Expired,t as ExpiringSoon,s as OpenPopover,w as __namedExportsOrder,S as default};
