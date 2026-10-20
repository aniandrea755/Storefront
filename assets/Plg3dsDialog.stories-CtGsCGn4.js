import{r as d}from"./iframe-DH-XNaA6.js";import{P as i}from"./Plg3dsDialog-svjXrAPB.js";import"./preload-helper-PPVm8Dsz.js";import"./MpDialog-vzXqpvNK.js";import"./useScrollEdges-CBa2dNoC.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./MpFormField-BzBLjfV3.js";const b={title:"Product/PLG/Plg3dsDialog",component:i,tags:["autodocs"],parameters:{docs:{description:{component:`
### Overview
\`Plg3dsDialog\` simulates the 3-D Secure challenge a card issuer shows mid-checkout — a
one-time passcode sent to the cardholder that must be entered before a purchase completes. It's
a real, blocking modal by design (per \`docs/overlay-audit/01\`, section 2 — PLG flows): it's
\`persistent\` so Escape and backdrop click can't dismiss it, and it owns its own 6-digit code and
\`verifying\` state internally, resetting both every time it reopens. Approve stays disabled until
all 6 digits are entered, then shows a brief loading state (\`:loading="verifying"\`) before
emitting \`approved\` and closing itself — there's no decline/failure path, so any complete code
approves.

**Use when:** a demo checkout flow needs to simulate the bank's OTP step before a card purchase
finalizes (see \`CheckoutView.vue\`).

**Don't use when:** the flow needs a real payment gateway integration, or a decision needs a
decline path — this dialog always approves after the simulated delay.

### Usage
\`\`\`html
<Plg3dsDialog
  v-model="dialogOpen"
  :amount-label="\`Maropost purchase — \${money(total)}\`"
  @approved="onApproved"
/>
\`\`\`

### 🟢 Do's
- **Do** pass a formatted \`amountLabel\` — it's the only context the shopper sees for what
  they're approving.
- **Do** treat \`@approved\` as the single signal to continue the checkout flow; the dialog
  already closes itself.
- **Do** rely on \`persistent\` — don't layer your own close-on-backdrop behavior around it.

### 🔴 Don'ts
- **Don't** expect a decline/error state — every completed code approves; this is a demo
  simulation, not a real 3DS integration.
- **Don't** reopen it pre-filled — the code and verifying state always reset to empty on open.

### A11y
- **Provides:** \`aria-labelledby\` ties the dialog to its title; \`persistent\` blocks
  Escape/backdrop dismissal, matching a real bank challenge that can't be casually dismissed;
  the OTP field autofocuses on open; Approve stays disabled until the code is complete and shows
  a loading state while verifying.
- **Consumer must:** pass a clear \`amountLabel\` — the dialog has no other way to say what's
  being approved.
        `}}},args:{modelValue:!0,amountLabel:"Maropost purchase — $348.00"},argTypes:{modelValue:{control:"boolean",description:"v-model — dialog visibility. Reopening resets the entered code and clears the verifying state."},amountLabel:{control:"text",description:'Context line under the title, e.g. "Maropost purchase — $348.00".'},approved:{control:!1,description:"Event — emitted once the (always-successful) verification completes; the dialog then closes itself.",table:{category:"events"}}},render:e=>({components:{Plg3dsDialog:i},setup(){const l=d(!0);return{args:e,open:l}},template:`
      <section style="min-height:420px;background:rgb(var(--v-theme-background));padding:24px;">
        <v-btn variant="outlined" prepend-icon="landmark" @click="open = true">Open verification</v-btn>
        <Plg3dsDialog v-bind="args" v-model="open" />
      </section>
    `})},o={},a={play:async()=>{await new Promise(t=>setTimeout(t,400));const e=document.querySelector(".v-otp-input__field");if(e){const t=new Event("paste",{bubbles:!0,cancelable:!0});Object.defineProperty(t,"clipboardData",{value:{getData:()=>"123456"}}),e.dispatchEvent(t)}await new Promise(t=>setTimeout(t,250)),Array.from(document.querySelectorAll("button")).find(t=>t.textContent?.trim()==="Approve")?.click()}},s={render:e=>({components:{Plg3dsDialog:i},setup:()=>({args:e}),template:'<Plg3dsDialog v-bind="args" />'})},n={render:e=>({components:{Plg3dsDialog:i},setup:()=>({args:e}),template:'<Plg3dsDialog v-bind="args" />'})},r={render:e=>({components:{Plg3dsDialog:i},setup:()=>({args:e}),template:'<Plg3dsDialog v-bind="args" />'})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source},description:{story:"Dialog open, empty code — ready for the shopper to enter the 6-digit passcode.",...o.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  play: async () => {
    // Dialog content teleports to <body> via v-dialog/v-overlay, so it's queried from
    // \`document\` rather than canvasElement. Give the open transition a beat to settle.
    await new Promise(resolve => setTimeout(resolve, 400));
    const firstField = document.querySelector<HTMLInputElement>('.v-otp-input__field');
    if (firstField) {
      const paste = new Event('paste', {
        bubbles: true,
        cancelable: true
      });
      Object.defineProperty(paste, 'clipboardData', {
        value: {
          getData: () => '123456'
        }
      });
      firstField.dispatchEvent(paste);
    }
    await new Promise(resolve => setTimeout(resolve, 250));
    const approveBtn = Array.from(document.querySelectorAll<HTMLButtonElement>('button')).find(btn => btn.textContent?.trim() === 'Approve');
    approveBtn?.click();
  }
}`,...a.parameters?.docs?.source},description:{story:`Play-driven: pastes the demo code (123456) into the OTP field and clicks Approve, exercising
the real ~800ms verification delay — the OTP field disables and Approve shows its loading
state before the dialog auto-approves and closes.`,...a.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Plg3dsDialog
    },
    setup: () => ({
      args
    }),
    template: \`<Plg3dsDialog v-bind="args" />\`
  })
}`,...s.parameters?.docs?.source},description:{story:"One structure — a bank verification prompt. It is deliberately the only dialog in the app\nwith no dismissal other than its own footer: `persistent`, so a stray Esc cannot abandon a\npayment mid-authorisation.",...s.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Plg3dsDialog
    },
    setup: () => ({
      args
    }),
    template: \`<Plg3dsDialog v-bind="args" />\`
  })
}`,...n.parameters?.docs?.source},description:{story:"There is no `size` prop — this is `MpDialog`'s `sm` (440px). A six-digit code and one line of\nexplanation do not need more. Phase 4 replaced this file's own `pa-2` card and three `pa-4`\nbands with the shell's single 20px inset.",...n.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Plg3dsDialog
    },
    setup: () => ({
      args
    }),
    template: \`<Plg3dsDialog v-bind="args" />\`
  })
}`,...r.parameters?.docs?.source},description:{story:"Empty (Approve disabled), complete, and verifying (button in its loading state, inputs locked).",...r.parameters?.docs?.description}}};const y=["Default","Verifying","Variants","Sizes","States"];export{o as Default,n as Sizes,r as States,s as Variants,a as Verifying,y as __namedExportsOrder,b as default};
