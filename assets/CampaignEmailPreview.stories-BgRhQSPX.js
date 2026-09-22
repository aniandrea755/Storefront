import{C as n}from"./CampaignEmailPreview-6Bo3UfsB.js";import"./iframe-BqHSr5b_.js";import"./preload-helper-PPVm8Dsz.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const p={title:"Product/Marketing/Campaigns/CampaignEmailPreview",component:n,tags:["autodocs"],parameters:{docs:{description:{component:`
### Overview
\`CampaignEmailPreview\` is the mock rendering of a campaign's email content, standing in for
the HTML the real platform renders from the selected Email Content record. Merge tags are shown
verbatim (\`{{contact.first_name}}\`, \`{{campaign.unsubscribe_link}}\`, …) exactly as UAT's
inline campaign preview does.

Used by the Create Campaign wizard (Content and Review steps) and by
\`CampaignContentEditor\`'s device-preview frames.
        `}}},args:{contentName:"Email Content for abandoned_cart",showPreviewLink:!1,dark:!1}},e={},a={args:{showPreviewLink:!0}},r={name:"Dark (device preview frame)",args:{dark:!0},render:i=>({components:{CampaignEmailPreview:n},setup:()=>({args:i}),template:`
      <div style="background: var(--ink-panel-bg); padding: var(--mp-space-24); border-radius: var(--mp-radius-12);">
        <CampaignEmailPreview v-bind="args" />
      </div>
    `})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    showPreviewLink: true
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Dark (device preview frame)',
  args: {
    dark: true
  },
  render: args => ({
    components: {
      CampaignEmailPreview
    },
    setup: () => ({
      args
    }),
    template: \`
      <div style="background: var(--ink-panel-bg); padding: var(--mp-space-24); border-radius: var(--mp-radius-12);">
        <CampaignEmailPreview v-bind="args" />
      </div>
    \`
  })
}`,...r.parameters?.docs?.source}}};const d=["Default","WithPreviewLink","DarkEmail"];export{r as DarkEmail,e as Default,a as WithPreviewLink,d as __namedExportsOrder,p as default};
