import{r as t}from"./iframe-DH-XNaA6.js";import{_ as a}from"./JourneySettingsForm-CKwvOerO.js";import"./preload-helper-PPVm8Dsz.js";import"./MpFormGrid-CIGBvnp2.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./journeyTemplateSetup-_-TxNawk.js";const p={title:"Product/Marketing/Journeys/JourneySettingsForm",component:a,tags:["autodocs"],parameters:{docs:{description:{component:`
### Overview
The "Journey settings" form shared by the from-scratch page (\`CreateJourneyScratch\`) and step 1
of the template wizard (\`JourneyTemplateWizard\`), mirroring production's \`NewJourneyScratch\`:
journey name (required, no emoji, unique), optional end date + 15-minute end-time slots (past
slots disabled for today; picking one half fills the other), and the Enable / Retrigger switches.

Validity streams out through \`update:valid\`; \`validate()\` forces the messages on an untouched
form. Duplicate names error inline instead of production's vanishing toast.
        `}}},render:r=>({components:{JourneySettingsForm:a},setup(){const s=t({name:"",endDate:"",endTime:"",enabled:!1,retrigger:!1}),o=t(!1);return{args:r,value:s,valid:o}},template:`
      <div style="max-width: 640px;">
        <JourneySettingsForm v-model="value" :existing-names="args.existingNames" @update:valid="valid = $event" />
        <p class="text-caption text-medium-emphasis mt-4">valid: {{ valid }}</p>
      </div>
    `})},e={args:{existingNames:["Welcome Series","Win-Back"]}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    existingNames: ['Welcome Series', 'Win-Back']
  }
}`,...e.parameters?.docs?.source}}};const u=["Default"];export{e as Default,u as __namedExportsOrder,p as default};
