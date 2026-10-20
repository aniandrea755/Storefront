import{_ as r}from"./WelcomeDialog-CWTIdF1o.js";import"./iframe-DH-XNaA6.js";import"./preload-helper-PPVm8Dsz.js";import"./MpDialog-vzXqpvNK.js";import"./useScrollEdges-CBa2dNoC.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./MpFormGrid-CIGBvnp2.js";import"./useAccounts-BCL4QMJk.js";import"./useUserProfile-BCSQyh70.js";const o={id:"2000304",name:"Trial workspace",initials:"TR",color:"primary",subscriptions:["commerce","marketing","analytics","service","davinci"],owner:{name:null,email:"maya@harbour-lights.example",role:"Owner",welcomedAt:null}},u={title:"Product/Onboarding/WelcomeDialog",component:r,tags:["autodocs"],parameters:{docs:{description:{component:`
### Overview
The first thing a self-created trial account sees inside the real app, mounted on **Get started**.
Two optional fields — the person's name and a workspace label suggested from the business email's
domain (\`maya@harbour-lights.example\` → "Harbour Lights"). **Continue** writes to the real account
(AppBar identity, account switcher, Da Vinci greeting update immediately); **Skip for now** keeps the
neutral fallbacks. Both mark the account as welcomed, so the dialog never asks twice.

Composes \`MpDialog size="sm" persistent\` — Esc and the scrim do not dismiss it; the two buttons do.
Seed accounts have no \`owner\`, so the dialog never opens for them.
        `}}},args:{account:o}},a={},e={args:{account:{...o,name:"Harbour Lights",initials:"HL",owner:{...o.owner,name:"Maya Chen"}}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    account: {
      ...account,
      name: 'Harbour Lights',
      initials: 'HL',
      owner: {
        ...account.owner!,
        name: 'Maya Chen'
      }
    }
  }
}`,...e.parameters?.docs?.source},description:{story:"The classic signup form already supplied both values — Continue is a one-click confirm.",...e.parameters?.docs?.description}}};const h=["Default","Prefilled"];export{a as Default,e as Prefilled,h as __namedExportsOrder,u as default};
