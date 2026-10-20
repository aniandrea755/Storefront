import{r as s}from"./iframe-DH-XNaA6.js";import{t as r}from"./journeyFlowData-BfF7KkYe.js";import{J as o}from"./JourneyTemplateDialog-CIowZcBh.js";import"./preload-helper-PPVm8Dsz.js";import"./MpDialog-vzXqpvNK.js";import"./useScrollEdges-CBa2dNoC.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./JourneyMiniPreview-lCxnYyDK.js";import"./useFlowTree-3VPeKGZt.js";import"./flowTheme-luQBUdZG.js";import"./journeyTemplateSetup-_-TxNawk.js";const w={title:"Product/Marketing/Journeys/JourneyTemplateDialog",component:o,tags:["autodocs"],parameters:{docs:{description:{component:"\n### Overview\nThe template detail dialog of Journey Selection (`/journeys/new`): the template's live flow\npreview (`JourneyMiniPreview` replaces production's static PNG), its long description from\n`journeyTemplateSetup.ts`, and **Create**, which hands the template id to the wizard. Composes\n`MpDialog size=\"lg\"`.\n        "}}},argTypes:{template:{control:"select",options:["welcome","abandoned-cart","nurture","advocacy","re-engagement","lapsed-buyer"],mapping:r}},args:{template:r.welcome},render:a=>({components:{JourneyTemplateDialog:o},setup(){const p=s(!0);return{args:a,open:p}},template:`
      <div>
        <v-btn color="primary" variant="flat" class="text-none" @click="open = true">Open template dialog</v-btn>
        <JourneyTemplateDialog v-model="open" :template="args.template" @create="open = false" />
      </div>
    `})},e={},t={args:{template:r["lapsed-buyer"]}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    template: templateById['lapsed-buyer']
  }
}`,...t.parameters?.docs?.source}}};const h=["Welcome","LapsedBuyer"];export{t as LapsedBuyer,e as Welcome,h as __namedExportsOrder,w as default};
