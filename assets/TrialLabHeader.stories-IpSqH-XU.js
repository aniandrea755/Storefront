import{T as s}from"./TrialLabHeader-DJFup6E0.js";import"./iframe-DH-XNaA6.js";import"./preload-helper-PPVm8Dsz.js";import"./MpMenuItem-D9v8-M9a.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const p={title:"Product/Trial Lab/TrialLabHeader",component:s,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:`
### Overview
The Trial Lab's own top bar for a brand-new trial user. It renders only what the prototype store
supplies — a workspace switcher, the trial status chip, a reviewer toggle and a profile menu — so
the demo identity hard-coded into the real \`AppBar\` can never appear inside a flow that is meant
to start from nothing.

**Fallback rules it demonstrates:** an unnamed workspace shows **"Trial workspace"** with its stable
ID beneath; an unnamed user shows their **email** and a neutral icon. Nothing is ever inferred from
the address or its domain.

### Usage
\`\`\`html
<TrialLabHeader
  :workspaces="[{ id: 'ws_k2j1', label: 'Trial workspace', caption: 'ws_k2j1' }]"
  active-id="ws_k2j1"
  trial-label="Preview · Trial not started"
  :trial-started="false"
  email="you@company.com"
  :person-name="null"
  :reviewer-open="false"
  @rename-workspace="…" @add-name="…" @switch="…" @toggle-reviewer="…"
/>
\`\`\`
        `}}},args:{workspaces:[{id:"ws_k2j1x",label:"Trial workspace",caption:"ws_k2j1x"}],activeId:"ws_k2j1x",trialLabel:"Preview · Trial not started",trialStarted:!1,email:"alex.rivera@northwind.example",personName:null,reviewerOpen:!1}},e={},a={args:{workspaces:[{id:"ws_k2j1x",label:"Northwind Trading"}],trialLabel:"Trial · 12 days left",trialStarted:!0,personName:"Alex"}},r={args:{workspaces:[{id:"ws_k2j1x",label:"Trial workspace",caption:"ws_k2j1x"},{id:"ws_k2j9q",label:"Trial workspace",caption:"ws_k2j9q"}],activeId:"ws_k2j9q",reviewerOpen:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source},description:{story:"Fresh signup: nothing named, trial not started.",...e.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    workspaces: [{
      id: 'ws_k2j1x',
      label: 'Northwind Trading'
    }],
    trialLabel: 'Trial · 12 days left',
    trialStarted: true,
    personName: 'Alex'
  }
}`,...a.parameters?.docs?.source},description:{story:"Both names supplied and the clock running.",...a.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    workspaces: [{
      id: 'ws_k2j1x',
      label: 'Trial workspace',
      caption: 'ws_k2j1x'
    }, {
      id: 'ws_k2j9q',
      label: 'Trial workspace',
      caption: 'ws_k2j9q'
    }],
    activeId: 'ws_k2j9q',
    reviewerOpen: true
  }
}`,...r.parameters?.docs?.source},description:{story:"Two unnamed workspaces — the IDs are what tells them apart in the switcher.",...r.parameters?.docs?.description}}};const d=["Default","Named","MultiWorkspaceUnnamed"];export{e as Default,r as MultiWorkspaceUnnamed,a as Named,d as __namedExportsOrder,p as default};
