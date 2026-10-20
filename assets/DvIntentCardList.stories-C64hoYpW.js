import{D as a}from"./DvIntentCardList-B8f9Y8Rv.js";import"./iframe-DH-XNaA6.js";import"./preload-helper-PPVm8Dsz.js";import"./DvCampaignCard-Ct8CiP8R.js";import"./MpStatusChip-BgtNpj8f.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./DvContentCard-lkLdoBVr.js";import"./DvKpiRow-qIHmXWxu.js";import"./DvChartCard-B8NCsMzW.js";import"./chartPalette-BfEQgAlK.js";import"./DvSegmentCard-Bl76KV52.js";import"./MpFormSection-BK5pVmwO.js";import"./DvInsightCard-p2zCiH3J.js";const C={title:"Product/Da Vinci/Voice/DvIntentCardList",component:a,tags:["autodocs"],parameters:{docs:{description:{component:`
## Overview
DvIntentCardList renders the typed card descriptors produced by the unified Da Vinci
intent layer (\`useDaVinciIntents\`) onto the existing Dv* card components. It is the
shared renderer for both the copilot drawer and the full-screen AI experience, and
re-emits all card actions as a single \`action\` event.
`}}},argTypes:{cards:{control:"object",description:"DvCardDescriptor[] from `useDaVinciIntents`. Each descriptor is a `{ type, props }` pair; `type` selects which Dv* card component renders it, and `props` is spread onto that component."},onAction:{action:"action",description:"Single re-emitted event for every card action, as `{ card, action }` — `card` is the originating descriptor and `action` is the child card's action name (e.g. `review-draft`, `change-brief`)."}}},s=[{type:"campaign",props:{name:"Weekend Flash Sale",subject:"Weekend Flash Sale — picked for you",audience:"VIP customers",audienceSize:3120,sendTime:"Not scheduled",channel:"Email",status:"Draft",draftId:26,remaining:["Email content","Send time"]}}],n=[{type:"kpis",props:{kpis:[{label:"Revenue",value:"$128,420",trend:"+12.4%",trendUp:!0,icon:"dollar-sign"},{label:"Orders",value:"1,284",trend:"+8.1%",trendUp:!0,icon:"shopping-cart"},{label:"Avg order value",value:"$99.86",trend:"+3.9%",trendUp:!0,icon:"receipt"}]}},{type:"chart",props:{title:"Revenue · last 7 days",subtitle:"$128.4k total · +12.4% vs prior week",bars:[[14.2],[16.8],[12.4],[18.1],[20.6],[17.9],[28.4]],labels:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],seriesNames:["Revenue ($k)"]}}],i=[{type:"segment",props:{name:"VIP Customers",rules:["Lifetime spend > $500","Ordered in the last 90 days","Email engagement: high"],estimatedSize:3120}},{type:"content",props:{type:"product",title:"Aurora Trail Jacket",content:"Built for shoulder-season hikes, the Aurora Trail Jacket pairs a windproof ripstop shell with a brushed-mesh lining that breathes when the pace picks up."}},{type:"insight",props:{headline:"Try a Da Vinci command",description:`Ask things like "Run a campaign to VIP customers" or "How's revenue this week?"`,severity:"info",icon:"sparkles"}}],e={args:{cards:s}},r={args:{cards:n}},t={args:{cards:i}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    cards: campaignCards
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    cards: revenueCards
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    cards: mixedCards
  }
}`,...t.parameters?.docs?.source}}};const D=["CampaignResult","RevenueResult","MixedCards"];export{e as CampaignResult,t as MixedCards,r as RevenueResult,D as __namedExportsOrder,C as default};
