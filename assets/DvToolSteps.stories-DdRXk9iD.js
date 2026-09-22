import{D as l}from"./DvToolSteps-CM2zj2ir.js";import"./iframe-BqHSr5b_.js";import"./preload-helper-PPVm8Dsz.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const m={title:"Product/Da Vinci/DvToolSteps",component:l,tags:["autodocs"],argTypes:{steps:{control:"object",description:"Named tool steps with optional icon and pending/running/done status"},defaultOpen:{control:"boolean",description:"Start expanded (live generation) instead of collapsed (finished reply)"}},parameters:{docs:{description:{component:`
## Overview
DvToolSteps is the copilot's agent-transparency disclosure: a collapsible "N steps" row that names the tool steps Da Vinci ran (or is running) to produce a reply. Collapsed by default on finished replies; expanded with live pending → running → done statuses during generation.

## Do's
- Attach to assistant replies that did visible work (queried data, drafted something)
- Use short verb-first labels ("Query revenue · last 7 days", "Draft widget")
- Show it expanded while generating, collapsed once the reply lands

## Don'ts
- Don't list more than ~4 steps — group instead
- Don't use it for plain conversational replies with no work behind them
        `}}}},a={args:{steps:[{label:"Check store setup",status:"done"},{label:"Suggest next steps",status:"done"}],defaultOpen:!1}},e={render:()=>({components:{DvToolSteps:l},setup:()=>({steps:[{label:"Query revenue · last 7 days",status:"done"},{label:"Compare vs prior week",status:"done"}]}),template:`
      <div class="d-flex flex-column ga-6">
        <div>
          <div class="text-caption text-medium-emphasis mb-2">collapsed</div>
          <DvToolSteps :steps="steps" :default-open="false" />
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">expanded</div>
          <DvToolSteps :steps="steps" :default-open="true" />
        </div>
      </div>
    `}),args:{}},s={render:()=>({components:{DvToolSteps:l},template:`
      <div class="d-flex flex-column ga-6">
        <div>
          <div class="text-caption text-medium-emphasis mb-2">one step</div>
          <DvToolSteps :steps="[{ label: 'Check store setup', status: 'done' }]" :default-open="true" />
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">four steps</div>
          <DvToolSteps
            :steps="[
              { label: 'Check store setup', status: 'done' },
              { label: 'Query revenue · last 7 days', status: 'done' },
              { label: 'Compare vs prior week', status: 'done' },
              { label: 'Draft a summary', status: 'running' },
            ]"
            :default-open="true"
          />
        </div>
      </div>
    `}),args:{}},t={render:()=>({components:{DvToolSteps:l},template:`
      <div class="d-flex flex-column ga-6">
        <div>
          <div class="text-caption text-medium-emphasis mb-2">all done</div>
          <DvToolSteps :steps="[{ label: 'Query revenue', status: 'done' }, { label: 'Summarise', status: 'done' }]" :default-open="true" />
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">running — mid-flight</div>
          <DvToolSteps :steps="[{ label: 'Query revenue', status: 'done' }, { label: 'Summarise', status: 'running' }]" :default-open="true" />
        </div>
      </div>
    `}),args:{}},n={args:{steps:[{label:"Check store setup",status:"done"},{label:"Suggest next steps",status:"done"}],defaultOpen:!1}},o={args:{steps:[{label:"Query revenue · last 7 days",status:"done"},{label:"Compare vs prior week",status:"done"}],defaultOpen:!0}},r={args:{steps:[{label:"Check Home dashboard widgets",status:"done"},{label:"Pull revenue · last 30 days",status:"running"},{label:"Draft widget",status:"pending",icon:"wrench"}],defaultOpen:!0}},d={args:{steps:[{label:"Consult Da Vinci brain",status:"done"}],defaultOpen:!1}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    steps: [{
      label: 'Check store setup',
      status: 'done'
    }, {
      label: 'Suggest next steps',
      status: 'done'
    }],
    defaultOpen: false
  }
}`,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DvToolSteps
    },
    setup: () => ({
      steps: [{
        label: 'Query revenue · last 7 days',
        status: 'done'
      }, {
        label: 'Compare vs prior week',
        status: 'done'
      }]
    }),
    template: \`
      <div class="d-flex flex-column ga-6">
        <div>
          <div class="text-caption text-medium-emphasis mb-2">collapsed</div>
          <DvToolSteps :steps="steps" :default-open="false" />
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">expanded</div>
          <DvToolSteps :steps="steps" :default-open="true" />
        </div>
      </div>
    \`
  }),
  args: {} as never
}`,...e.parameters?.docs?.source},description:{story:"Collapsed vs expanded — the structural axis, set by `defaultOpen`.",...e.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DvToolSteps
    },
    template: \`
      <div class="d-flex flex-column ga-6">
        <div>
          <div class="text-caption text-medium-emphasis mb-2">one step</div>
          <DvToolSteps :steps="[{ label: 'Check store setup', status: 'done' }]" :default-open="true" />
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">four steps</div>
          <DvToolSteps
            :steps="[
              { label: 'Check store setup', status: 'done' },
              { label: 'Query revenue · last 7 days', status: 'done' },
              { label: 'Compare vs prior week', status: 'done' },
              { label: 'Draft a summary', status: 'running' },
            ]"
            :default-open="true"
          />
        </div>
      </div>
    \`
  }),
  args: {} as never
}`,...s.parameters?.docs?.source},description:{story:"Step-count is the size axis.",...s.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DvToolSteps
    },
    template: \`
      <div class="d-flex flex-column ga-6">
        <div>
          <div class="text-caption text-medium-emphasis mb-2">all done</div>
          <DvToolSteps :steps="[{ label: 'Query revenue', status: 'done' }, { label: 'Summarise', status: 'done' }]" :default-open="true" />
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">running — mid-flight</div>
          <DvToolSteps :steps="[{ label: 'Query revenue', status: 'done' }, { label: 'Summarise', status: 'running' }]" :default-open="true" />
        </div>
      </div>
    \`
  }),
  args: {} as never
}`,...t.parameters?.docs?.source},description:{story:"Every step status: done, running, and a mixed run in progress.",...t.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    steps: [{
      label: 'Check store setup',
      status: 'done'
    }, {
      label: 'Suggest next steps',
      status: 'done'
    }],
    defaultOpen: false
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    steps: [{
      label: 'Query revenue · last 7 days',
      status: 'done'
    }, {
      label: 'Compare vs prior week',
      status: 'done'
    }],
    defaultOpen: true
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    steps: [{
      label: 'Check Home dashboard widgets',
      status: 'done'
    }, {
      label: 'Pull revenue · last 30 days',
      status: 'running'
    }, {
      label: 'Draft widget',
      status: 'pending',
      icon: 'wrench'
    }],
    defaultOpen: true
  }
}`,...r.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    steps: [{
      label: 'Consult Da Vinci brain',
      status: 'done'
    }],
    defaultOpen: false
  }
}`,...d.parameters?.docs?.source}}};const v=["Default","Variants","Sizes","States","CollapsedDone","ExpandedDone","Running","SingleStep"];export{n as CollapsedDone,a as Default,o as ExpandedDone,r as Running,d as SingleStep,s as Sizes,t as States,e as Variants,v as __namedExportsOrder,m as default};
