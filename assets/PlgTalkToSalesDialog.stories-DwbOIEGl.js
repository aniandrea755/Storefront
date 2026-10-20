import{r as d}from"./iframe-DH-XNaA6.js";import{P as i}from"./PlgTalkToSalesDialog-EcUxrSf1.js";import"./preload-helper-PPVm8Dsz.js";import"./MpDialog-vzXqpvNK.js";import"./useScrollEdges-CBa2dNoC.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./MpFormGrid-CIGBvnp2.js";import"./useToast-DW17gNFD.js";import"./useToastStackTimers-CbTd3XmR.js";const T={title:"Product/PLG/PlgTalkToSalesDialog",component:i,tags:["autodocs"],parameters:{docs:{description:{component:`
### Overview
\`PlgTalkToSalesDialog\` is the lightweight lead-capture form behind every "Talk to sales" link
in the PLG flows (the trial popover, the Plans page). It asks what the shopper is interested in
and an optional free-text note, then on submit closes itself, emits \`submitted\`, and fires a
confirmation toast — there's no real backend, so "interest" and "notes" aren't persisted
anywhere.

**Use when:** a PLG surface needs a low-friction way to request a sales callback without
leaving the page.

**Don't use when:** the request needs to route to a specific rep or capture more structured
detail (that needs a real form flow, not this demo dialog), or the decision is a yes/no gate
(use \`MpConfirmDialog\`).

### Usage
\`\`\`html
<PlgTalkToSalesDialog v-model="salesDialogOpen" />
\`\`\`

### 🟢 Do's
- **Do** open it from a text/tonal button labelled "Talk to sales" — never as the page's
  primary CTA.
- **Do** let it manage its own submit/close/toast — don't duplicate that confirmation elsewhere.
- **Do** keep the mailto fallback visible for shoppers who'd rather not wait for a callback.

### 🔴 Don'ts
- **Don't** treat \`submitted\` as delivery confirmation — this demo has no backend; the toast is
  the only feedback the shopper gets.
- **Don't** require the interest dropdown — it's optional context, not a form gate.

### A11y
- **Provides:** the dialog surface is wired to its title via \`aria-labelledby\`; Vuetify's
  \`v-dialog\` traps focus, closes on Escape/backdrop click, and restores focus on close; the
  select and textarea are standard labelled Vuetify fields.
- **Consumer must:** nothing beyond mounting it with a \`v-model\`.
        `}}},args:{modelValue:!0},argTypes:{modelValue:{control:"boolean",description:"v-model — dialog visibility. Submitting or cancelling resets the form and closes it."},submitted:{control:!1,description:'Event — emitted after "Request a call" is clicked (the dialog closes and a confirmation toast fires first).',table:{category:"events"}}},render:e=>({components:{PlgTalkToSalesDialog:i},setup(){const c=d(!0);return{args:e,open:c}},template:`
      <section style="min-height:460px;background:rgb(var(--v-theme-background));padding:24px;">
        <v-btn variant="outlined" prepend-icon="messages-square" @click="open = true">Talk to sales</v-btn>
        <PlgTalkToSalesDialog v-bind="args" v-model="open" />
      </section>
    `})},o={},a={play:async()=>{await new Promise(t=>setTimeout(t,400)),document.querySelector(".v-select")?.click(),await new Promise(t=>setTimeout(t,200)),Array.from(document.querySelectorAll(".v-list-item")).find(t=>t.textContent?.includes("Enterprise pricing"))?.click();const l=document.querySelector("textarea");l&&(Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype,"value")?.set?.call(l,"We're evaluating a move from Marketing Cloud + a legacy help desk — want to understand migration effort."),l.dispatchEvent(new Event("input",{bubbles:!0})))}},s={render:e=>({components:{PlgTalkToSalesDialog:i},setup:()=>({args:e}),template:'<PlgTalkToSalesDialog v-bind="args" />'})},r={render:e=>({components:{PlgTalkToSalesDialog:i},setup:()=>({args:e}),template:'<PlgTalkToSalesDialog v-bind="args" />'})},n={render:e=>({components:{PlgTalkToSalesDialog:i},setup:()=>({args:e}),template:'<PlgTalkToSalesDialog v-bind="args" />'})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source},description:{story:"Dialog open, empty form.",...o.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  play: async () => {
    // Dialog content teleports to <body> via v-dialog/v-overlay, so it's queried from
    // \`document\` rather than canvasElement. Give the open transition a beat to settle.
    await new Promise(resolve => setTimeout(resolve, 400));
    const select = document.querySelector<HTMLElement>('.v-select');
    select?.click();
    await new Promise(resolve => setTimeout(resolve, 200));
    const option = Array.from(document.querySelectorAll<HTMLElement>('.v-list-item')).find(item => item.textContent?.includes('Enterprise pricing'));
    option?.click();
    const textarea = document.querySelector<HTMLTextAreaElement>('textarea');
    if (textarea) {
      const setter = Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype, 'value')?.set;
      setter?.call(textarea, 'We\\'re evaluating a move from Marketing Cloud + a legacy help desk — want to understand migration effort.');
      textarea.dispatchEvent(new Event('input', {
        bubbles: true
      }));
    }
  }
}`,...a.parameters?.docs?.source},description:{story:`Play-driven: opens the "interested in" dropdown, picks "Enterprise pricing", and types a note,
showing the dialog ready to submit.`,...a.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      PlgTalkToSalesDialog
    },
    setup: () => ({
      args
    }),
    template: \`<PlgTalkToSalesDialog v-bind="args" />\`
  })
}`,...s.parameters?.docs?.source},description:{story:"One structure — a short contact form. Nothing about it varies by prop.",...s.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      PlgTalkToSalesDialog
    },
    setup: () => ({
      args
    }),
    template: \`<PlgTalkToSalesDialog v-bind="args" />\`
  })
}`,...r.parameters?.docs?.source},description:{story:"There is no `size` prop — this is `MpDialog`'s `sm` (440px). Phase 4 replaced this file's\n`pa-1` card, Vuetify's default card insets and the `gap-2` / `gap-4` global shims with the\nshell: one 20px inset, and a body whose field rhythm is `component.dialog.gap`.",...r.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      PlgTalkToSalesDialog
    },
    setup: () => ({
      args
    }),
    template: \`<PlgTalkToSalesDialog v-bind="args" />\`
  })
}`,...n.parameters?.docs?.source},description:{story:"Empty and filled in — submitting closes the dialog and raises a toast.",...n.parameters?.docs?.description}}};const k=["Default","FilledIn","Variants","Sizes","States"];export{o as Default,a as FilledIn,r as Sizes,n as States,s as Variants,k as __namedExportsOrder,T as default};
