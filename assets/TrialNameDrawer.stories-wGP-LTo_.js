import{r as s}from"./iframe-BqHSr5b_.js";import{_ as t}from"./TrialNameDrawer-DtZv2IMu.js";import"./preload-helper-PPVm8Dsz.js";import"./MpFormDrawer-NT-xQk6b.js";import"./useFocusTrap-oS9hmom4.js";import"./useScrollEdges-B2McRpMX.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./MpFormGrid-D0pxdSe6.js";const k={title:"Product/Trial Lab/TrialNameDrawer",component:t,tags:["autodocs"],parameters:{docs:{description:{component:`
### Overview
The contextual way to supply a name after onboarding — variants B and D never ask up front. One
field, Save / Cancel, no reminder afterwards. Saving an empty field removes the name again and the
display falls back to the neutral label. Composes \`MpFormDrawer\` at \`size="sm"\`.

\`kind="person"\` edits the user's own name; \`kind="workspace"\` edits the workspace label — a
recognisable name for the account switcher, never the legal company name.
        `}}},args:{kind:"workspace",initial:null},render:n=>({components:{TrialNameDrawer:t},setup(){const o=s(!0),i=s(n.initial);return{args:n,open:o,saved:i}},template:`
      <div class="pa-4">
        <v-btn class="text-none" variant="outlined" @click="open = true">Open drawer</v-btn>
        <p class="mt-3 text-body-2">Saved value: <strong>{{ saved ?? '— (fallback label)' }}</strong></p>
        <TrialNameDrawer v-model="open" v-bind="args" @save="saved = $event" />
      </div>
    `})},e={},a={args:{kind:"person"}},r={args:{kind:"workspace",initial:"Northwind Trading"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    kind: 'person'
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    kind: 'workspace',
    initial: 'Northwind Trading'
  }
}`,...r.parameters?.docs?.source}}};const w=["Workspace","Person","EditingExisting"];export{r as EditingExisting,a as Person,e as Workspace,w as __namedExportsOrder,k as default};
