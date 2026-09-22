import{eL as C,eW as N,eM as L,eR as m,d0 as x,fj as _,eX as u,fe as U,r as v,c as h,f4 as y,f5 as T,ed as A,eV as b}from"./iframe-BqHSr5b_.js";import{M as I}from"./MpBanner-BeDG7Xn_.js";import{u as P}from"./usePlg-ML6QTG6m.js";import{u as G}from"./useAccounts-BNKGYLRf.js";import{P as O}from"./PlgTalkToSalesDialog-Uyjcz-oU.js";import"./preload-helper-PPVm8Dsz.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./MpDialog-F4WZRRS8.js";import"./useScrollEdges-B2McRpMX.js";import"./MpFormGrid-D0pxdSe6.js";import"./useToast-D0O_SpbR.js";import"./useToastStackTimers-CbTd3XmR.js";const n=C({__name:"PlgTrialBanner",setup(g){const p=v(!1),e=P(),S=G(),w=A(),c=v(!1),E=h(()=>e.isTrial&&(e.isExpiring&&!p.value||e.isExpired)),B=h(()=>e.isExpired?"circle-alert":"clock-alert"),k=h(()=>e.isExpired?"Your trial has ended. Your data is retained — upgrade to pick up where you left off.":`Your free trial ends in ${e.daysLeft} days — keep your momentum going.`);function D(){w.push({name:"Plans",params:{accountId:S.activeId}})}function V(){p.value=!0}return(M,s)=>(b(),N(U,null,[E.value?(b(),L(I,{key:0,tone:x(e).isExpired?"error":"warning",icon:B.value,message:k.value,dismissible:x(e).isExpiring,"dismiss-label":"Dismiss for this session",onDismiss:V},{actions:m(()=>[u(T,{size:"small",color:"primary",variant:"flat",class:"text-none",onClick:D},{default:m(()=>[...s[2]||(s[2]=[y(" Upgrade ",-1)])]),_:1}),u(T,{size:"small",variant:"text",class:"text-none",onClick:s[0]||(s[0]=f=>c.value=!0)},{default:m(()=>[...s[3]||(s[3]=[y(" Talk to sales ",-1)])]),_:1})]),_:1},8,["tone","icon","message","dismissible"])):_("",!0),u(O,{modelValue:c.value,"onUpdate:modelValue":s[1]||(s[1]=f=>c.value=f)},null,8,["modelValue"])],64))}});n.__docgenInfo={exportName:"default",displayName:"PlgTrialBanner",description:"",tags:{},sourceFiles:["/home/runner/work/Storefront/Storefront/src/components/plg/PlgTrialBanner.vue"]};const Q={title:"Product/PLG/PlgTrialBanner",component:n,tags:["autodocs"],parameters:{docs:{story:{inline:!1,height:"160px"},description:{component:`
### Overview
\`PlgTrialBanner\` is the full-width shell banner that appears above the content area when a free
trial is nearly over or has lapsed. Like \`PlgTrialChip\` it takes no props and reads
\`usePlgStore\` directly, rendering nothing unless
\`isTrial && ((isExpiring && !dismissed) || isExpired)\`. Amber while expiring (last 3 days), red
once expired. "Talk to sales" opens \`PlgTalkToSalesDialog\`; "Upgrade" routes to the Plans page.

**Use when:** mounted once in the app shell, above the router view — it's the high-urgency
counterpart to the AppBar's \`PlgTrialChip\`.

**Don't use when:** the account is steady mid-trial or paid — it already renders nothing itself,
so don't wrap it in your own \`v-if\`.

### Usage
\`\`\`html
<PlgTrialBanner />
\`\`\`

### 🟢 Do's
- **Do** mount it once, in the shell — it derives everything from \`usePlgStore().active\`.
- **Do** drive demo/story states through \`usePlgStore().applyDemoPreset(...)\`.

### 🔴 Don'ts
- **Don't** pass props — it takes none.
- **Don't** expect the dismissal to persist across a reload: \`dismissedThisSession\` is a
  module-scoped ref, so it survives unmount/remount within the shell but resets on page load.
  Only the *expiring* state is dismissible — an expired trial always shows.

### A11y
- **Provides:** the dismiss control is a real \`<button>\` with
  \`aria-label="Dismiss for this session"\` and a visible \`:focus-visible\` state; urgency is
  carried by the message text, not color alone.
- **Consumer must:** nothing beyond mounting it.

### Controls
This banner takes **no props** — the Controls panel is empty by design. It reads \`usePlgStore()\` and \`useAccountsStore()\`, so the way to change what it shows is to change the PLG demo state (the user-menu switcher, or the \`?plg=\` param).
`}}}},l=d("trial-d12");function d(g){return{render:()=>({components:{PlgTrialBanner:n},setup(){return P().applyDemoPreset(g),{}},template:`
        <div style="min-height: 80px;">
          <PlgTrialBanner />
        </div>
      `})}}const t={render:()=>({components:{PlgTrialBanner:n},template:`
      <div class="d-flex flex-column ga-4">
        <div class="text-caption text-medium-emphasis">
          The banner recolours itself from the trial state rather than from a prop. The
          ExpiringSoon / Expired stories seed different trial dates — see States.
        </div>
        <PlgTrialBanner />
      </div>
    `})},r={render:()=>({components:{PlgTrialBanner:n},template:`
      <div class="d-flex flex-column ga-4">
        <div class="text-caption text-medium-emphasis">
          Each state seeds the PLG store with a different trial date, so they cannot share
          one canvas — switch between ExpiringSoon, Expired and NotVisible below.
        </div>
        <PlgTrialBanner />
      </div>
    `})},a=d("trial-d12"),i=d("trial-expired"),o=d("trial-d3");l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"presetStory('trial-d12')",...l.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      PlgTrialBanner
    },
    template: \`
      <div class="d-flex flex-column ga-4">
        <div class="text-caption text-medium-emphasis">
          The banner recolours itself from the trial state rather than from a prop. The
          ExpiringSoon / Expired stories seed different trial dates — see States.
        </div>
        <PlgTrialBanner />
      </div>
    \`
  })
}`,...t.parameters?.docs?.source},description:{story:"The banner has one structure; urgency is what varies, driven by days remaining.",...t.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      PlgTrialBanner
    },
    template: \`
      <div class="d-flex flex-column ga-4">
        <div class="text-caption text-medium-emphasis">
          Each state seeds the PLG store with a different trial date, so they cannot share
          one canvas — switch between ExpiringSoon, Expired and NotVisible below.
        </div>
        <PlgTrialBanner />
      </div>
    \`
  })
}`,...r.parameters?.docs?.source},description:{story:"Visible while a trial is running, hidden once the account converts.",...r.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"presetStory('trial-d12')",...a.parameters?.docs?.source},description:{story:"Inside the last 3 days — amber banner, day countdown, dismissible.",...a.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"presetStory('trial-expired')",...i.parameters?.docs?.source},description:{story:"Trial lapsed — red banner, data-retention message, and no dismiss control.",...i.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"presetStory('trial-d3')",...o.parameters?.docs?.source},description:{story:"Steady mid-trial (day 3 of the window): `isExpiring` is false, so the banner renders nothing.\nThe same is true for every paid preset — this is the component's default state in the shell.",...o.parameters?.docs?.description}}};const Z=["Default","Variants","States","ExpiringSoon","Expired","NotVisible"];export{l as Default,i as Expired,a as ExpiringSoon,o as NotVisible,r as States,t as Variants,Z as __namedExportsOrder,Q as default};
