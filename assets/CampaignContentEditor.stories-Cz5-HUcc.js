import{r as n}from"./iframe-DH-XNaA6.js";import{C as t}from"./CampaignContentEditor-DPJuqsNC.js";import"./preload-helper-PPVm8Dsz.js";import"./MpDialog-vzXqpvNK.js";import"./useScrollEdges-CBa2dNoC.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./MpSectionHeader-DxAEqCSn.js";import"./CampaignEmailPreview-BfBWf_1A.js";const l={title:"Product/Marketing/Campaigns/CampaignContentEditor",component:t,tags:["autodocs"],parameters:{docs:{description:{component:`
### Overview
\`CampaignContentEditor\` is the sandbox stand-in for the platform's embedded third-party
drag-and-drop email builder ("Edit Content — Editor Type: DnD"), reached from the campaign
wizard's Content step. It is a **visual mock** (see \`docs/rebuild/new-campaign/GAPS.md\`):
the block palette and canvas do not edit, and **Device previews → Generate previews** simulates
the third-party inbox-preview service with desktop / tablet / mobile / dark-mode frames.

Composes \`MpDialog\` (fullscreen, flush) and \`CampaignEmailPreview\`.
        `}}}},e={render:()=>({components:{CampaignContentEditor:t},setup(){return{open:n(!1)}},template:`
      <div>
        <v-btn color="primary" class="text-none" @click="open = true">Open content editor</v-btn>
        <CampaignContentEditor v-model="open" content-name="Email Content for abandoned_cart" />
      </div>
    `})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CampaignContentEditor
    },
    setup() {
      const open = ref(false);
      return {
        open
      };
    },
    template: \`
      <div>
        <v-btn color="primary" class="text-none" @click="open = true">Open content editor</v-btn>
        <CampaignContentEditor v-model="open" content-name="Email Content for abandoned_cart" />
      </div>
    \`
  })
}`,...e.parameters?.docs?.source}}};const u=["Default"];export{e as Default,u as __namedExportsOrder,l as default};
