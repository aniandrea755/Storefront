import{T as l}from"./TrialVerifyForm-B_tTUiFp.js";import{c}from"./decorators-DmUOp7kZ.js";import"./iframe-BqHSr5b_.js";import"./preload-helper-PPVm8Dsz.js";import"./MpFormField-eWrsvwna.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useRelativeTime-BAck8X0K.js";import"./trialLabData-Bky5uwx1.js";function d(r,i,s={}){const o=s.columns??"repeat(auto-fit, minmax(260px, 1fr))",n=Object.keys(r)[0];return m=>({components:r,setup:()=>({args:m,specimens:i}),template:`
      <div class="sb-grid" style="display: grid; grid-template-columns: ${o}; gap: var(--mp-space-24);">
        <div v-for="s in specimens" :key="s.label" class="sb-grid__item" style="min-width: 0;">
          <div class="sb-grid__label" style="
            margin-bottom: var(--mp-space-8);
            font-size: var(--mp-fontSize-11);
            font-weight: var(--mp-fontWeight-semibold);
            letter-spacing: 0.06em;
            text-transform: uppercase;
            color: var(--text-muted);
          ">{{ s.label }}</div>
          <${n} v-bind="{ ...args, ...s.args }" ${s.itemClass?`class="${s.itemClass}"`:""}>
            <template v-if="s.slot" #default><span v-html="s.slot" /></template>
          </${n}>
        </div>
      </div>
    `})}const e={title:"Product/Trial Lab/TrialVerifyForm",component:l,tags:["autodocs"],decorators:[c("compact")],parameters:{docs:{description:{component:`
### Overview
The one email-verification surface in the Trial Lab. It appears full-size on the verify screen and
inside the dialog that gated actions open, so both places accept the same 6-digit code, offer the
same resend / change-email recovery and speak the same error copy. The parent owns the challenge
state and the last result; this component owns only the typed code.

**Behaviour:** auto-submits at six digits (paste-safe), clears after a rejected code, disables
resend for a short cooldown after each send, and lets the user correct the address inline.
        `}}},args:{email:"alex.rivera@northwind.example",challengeState:"pending",lastResult:null,sentAt:new Date(Date.now()-2e4).toISOString(),now:Date.now(),submitting:!1}},a={},t={render:d(l,[{label:"Pending",args:{...e.args}},{label:"Delayed email",args:{...e.args,challengeState:"delayed"}},{label:"Wrong code",args:{...e.args,lastResult:"wrong"}},{label:"Expired",args:{...e.args,challengeState:"expired",lastResult:"expired"}},{label:"Submitting",args:{...e.args,submitting:!0}}],{columns:1})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: grid(TrialVerifyForm, [{
    label: 'Pending',
    args: {
      ...meta.args
    }
  }, {
    label: 'Delayed email',
    args: {
      ...meta.args,
      challengeState: 'delayed'
    }
  }, {
    label: 'Wrong code',
    args: {
      ...meta.args,
      lastResult: 'wrong'
    }
  }, {
    label: 'Expired',
    args: {
      ...meta.args,
      challengeState: 'expired',
      lastResult: 'expired'
    }
  }, {
    label: 'Submitting',
    args: {
      ...meta.args,
      submitting: true
    }
  }], {
    columns: 1
  })
}`,...t.parameters?.docs?.source}}};const x=["Default","States"];export{a as Default,t as States,x as __namedExportsOrder,e as default};
