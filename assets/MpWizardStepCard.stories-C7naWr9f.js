import{M as a}from"./MpWizardStepCard-BowSPRzP.js";import"./iframe-BqHSr5b_.js";import"./preload-helper-PPVm8Dsz.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const e=`
  <div class="d-flex flex-column ga-4">
    <v-text-field label="Campaign name *" placeholder="e.g. Black Friday 2026 — VIP Early Access" />
    <v-text-field label="Subject *" placeholder="e.g. 40% off sitewide — today only" />
  </div>
`,l={title:"Molecules/MpWizardStepCard",component:a,tags:["autodocs"],parameters:{docs:{description:{component:`
### Overview
The step-content card inside \`MpWizardShell\`'s measure: a semantic heading
(the step's section heading under the page h1), a one-line description, a
divider, then the fields. Insets on \`component.card.paddingSpacious\` (32),
matching the canonical wizard cards it replaces.

Not \`MpFormSection\` — that is the 13px in-form overline for groups *within*
a form. Galleries and canvas steps skip the card and render bare in the
shell's measure.
`}}},argTypes:{title:{control:"text",description:"The step's heading."},description:{control:"text",description:"One line under the heading. Omitting it tightens the preamble."},headingLevel:{control:"select",options:[2,3],description:"h2 by default — the step title sits directly under the page h1. Use 3 for a second card on the same step."},divider:{control:"boolean",description:"Divider between preamble and content (default true). Skip for dense gallery cards."}}},i={args:{title:"Campaign details",description:"Name your campaign and write the subject line recipients will see."},render:r=>({components:{MpWizardStepCard:a},setup:()=>({args:r}),template:`<div style="max-width:780px"><MpWizardStepCard v-bind="args">${e}</MpWizardStepCard></div>`})},t={args:{title:""},render:()=>({components:{MpWizardStepCard:a},template:`
      <div class="d-flex flex-column ga-6" style="max-width:780px">
        <MpWizardStepCard title="With description" description="The canonical preamble — heading, one line, divider.">${e}</MpWizardStepCard>
        <MpWizardStepCard title="No description">${e}</MpWizardStepCard>
        <MpWizardStepCard title="No divider" description="Dense gallery cards skip the rule." :divider="false">${e}</MpWizardStepCard>
        <MpWizardStepCard title="Title append" description="A chip rides beside the heading.">
          <template #title-append><v-chip size="small" variant="tonal" color="success" class="font-weight-medium">Optional</v-chip></template>
          ${e}
        </MpWizardStepCard>
        <MpWizardStepCard title="Second card on a step" description="headingLevel 3 keeps the outline honest." :heading-level="3">${e}</MpWizardStepCard>
      </div>
    `})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Campaign details',
    description: 'Name your campaign and write the subject line recipients will see.'
  },
  render: args => ({
    components: {
      MpWizardStepCard
    },
    setup: () => ({
      args
    }),
    template: \`<div style="max-width:780px"><MpWizardStepCard v-bind="args">\${fields}</MpWizardStepCard></div>\`
  })
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    title: ''
  },
  render: () => ({
    components: {
      MpWizardStepCard
    },
    template: \`
      <div class="d-flex flex-column ga-6" style="max-width:780px">
        <MpWizardStepCard title="With description" description="The canonical preamble — heading, one line, divider.">\${fields}</MpWizardStepCard>
        <MpWizardStepCard title="No description">\${fields}</MpWizardStepCard>
        <MpWizardStepCard title="No divider" description="Dense gallery cards skip the rule." :divider="false">\${fields}</MpWizardStepCard>
        <MpWizardStepCard title="Title append" description="A chip rides beside the heading.">
          <template #title-append><v-chip size="small" variant="tonal" color="success" class="font-weight-medium">Optional</v-chip></template>
          \${fields}
        </MpWizardStepCard>
        <MpWizardStepCard title="Second card on a step" description="headingLevel 3 keeps the outline honest." :heading-level="3">\${fields}</MpWizardStepCard>
      </div>
    \`
  })
}`,...t.parameters?.docs?.source},description:{story:"Preamble variants: with/without description, without divider, title-append chip, h3 for a second card.",...t.parameters?.docs?.description}}};const o=["Default","Variants"];export{i as Default,t as Variants,o as __namedExportsOrder,l as default};
