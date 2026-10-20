import{D as t}from"./DvDocsAssistant-QvkSN0FK.js";import"./iframe-DH-XNaA6.js";import"./preload-helper-PPVm8Dsz.js";import"./MpChatBubble-c0TbrPz9.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./geminiClient-CDLR38JX.js";const c={title:"Product/Da Vinci/DvDocsAssistant",component:t,tags:["autodocs"],parameters:{docs:{description:{component:`
## Overview
DvDocsAssistant is the design-system Da Vinci: a self-contained Q&A surface embedded on the
in-app design-system docs page. It answers questions grounded in the design-system markdown
docs (FAQ crib sheet, operating model, audit, component inventory, handover) by retrieving the
most relevant excerpts per question and calling \`/api/gemini\` in \`design-system\` mode.

Unlike MpDaVinciBot it keeps a **local** conversation (the copilot store is a global
singleton) and skips the e-commerce intent classifier — so questions containing words like
"product" or "revenue" are answered from the docs, not hijacked into canned commerce intents.

## Offline behavior
Without a \`GEMINI_API_KEY\` (including here in Storybook, where \`/api/gemini\` does not
exist), the assistant degrades to the best-matching written FAQ answer, labeled "From the
FAQ" — try a starter chip to see it.

## Do's
- Embed on documentation/knowledge surfaces where answers must come from written docs
- Keep it beside the rendered docs so answers are verifiable one tab away

## Don'ts
- Don't use it for product/commerce questions — that is MpDaVinciBot's job
- Don't wire it to the global copilot store — its isolation is the point

### Controls
This component takes **no props** — the Controls panel is empty by design. Its answers come from the \`useDesignSystemKnowledge()\` composable (\`retrieve\`, \`bestFaqMatch\`, \`starterChips\`), so what it can answer is changed there, not here.
`}}}},e={render:()=>({components:{DvDocsAssistant:t},template:'<div style="max-width: 420px; height: 560px; display: flex;"><DvDocsAssistant /></div>'})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DvDocsAssistant
    },
    template: '<div style="max-width: 420px; height: 560px; display: flex;"><DvDocsAssistant /></div>'
  })
}`,...e.parameters?.docs?.source}}};const d=["Default"];export{e as Default,d as __namedExportsOrder,c as default};
