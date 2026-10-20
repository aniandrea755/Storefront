import{S as t}from"./SmsPhonePreview-fc9zEhlH.js";import"./iframe-DH-XNaA6.js";import"./preload-helper-PPVm8Dsz.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const d={title:"Product/Marketing/Campaigns/SmsPhonePreview",component:t,tags:["autodocs"],parameters:{docs:{description:{component:`
The live phone mock beside the SMS composers (SMS campaign wizard and
Transactional SMS). Shows the message exactly as the customer would receive
it, under the sender number or alphanumeric sender ID.

Its bezel/notch/bubble geometry is a deliberate raw-px exemption (the same
class as PosPreview): it draws a phone, not app chrome.
`}}},argTypes:{sender:{control:"text",description:"The sender line — a phone number or alphanumeric sender ID."},message:{control:"text",description:"The message exactly as received, opt-out line included."}}},s={args:{sender:"+61481074914",message:"Weekend flash sale — 40% off sitewide until Sunday. Shop now: 0.mpt1.co/x7Fh2 Text STOP to opt-out"},render:r=>({components:{SmsPhonePreview:t},setup:()=>({args:r}),template:'<div style="max-width:320px"><SmsPhonePreview v-bind="args" /></div>'})},e={args:{sender:"",message:""},render:()=>({components:{SmsPhonePreview:t},template:`
      <div class="d-flex flex-wrap ga-6">
        <div style="max-width:320px"><SmsPhonePreview sender="MAROPOST" message="Your verification code is 482910. It expires in 10 minutes." /></div>
        <div style="max-width:320px"><SmsPhonePreview sender="+61481074914" message="Good news! Your order #45012 has shipped and is on its way. Track the parcel any time: 0.mpt1.co/x7Fh2 — expected delivery Thursday. Questions? Just reply to this message and our team will help. Text STOP to opt-out" /></div>
      </div>
    `})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    sender: '+61481074914',
    message: 'Weekend flash sale — 40% off sitewide until Sunday. Shop now: 0.mpt1.co/x7Fh2 Text STOP to opt-out'
  },
  render: args => ({
    components: {
      SmsPhonePreview
    },
    setup: () => ({
      args
    }),
    template: \`<div style="max-width:320px"><SmsPhonePreview v-bind="args" /></div>\`
  })
}`,...s.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    sender: '',
    message: ''
  },
  render: () => ({
    components: {
      SmsPhonePreview
    },
    template: \`
      <div class="d-flex flex-wrap ga-6">
        <div style="max-width:320px"><SmsPhonePreview sender="MAROPOST" message="Your verification code is 482910. It expires in 10 minutes." /></div>
        <div style="max-width:320px"><SmsPhonePreview sender="+61481074914" message="Good news! Your order #45012 has shipped and is on its way. Track the parcel any time: 0.mpt1.co/x7Fh2 — expected delivery Thursday. Questions? Just reply to this message and our team will help. Text STOP to opt-out" /></div>
      </div>
    \`
  })
}`,...e.parameters?.docs?.source},description:{story:"Sender ID vs number, and a long multi-segment message wrapping in the bubble.",...e.parameters?.docs?.description}}};const m=["Default","Variants"];export{s as Default,e as Variants,m as __namedExportsOrder,d as default};
