import{r as u}from"./iframe-BqHSr5b_.js";import{_ as l}from"./MpStatusToggle-Bgi3uxck.js";import"./preload-helper-PPVm8Dsz.js";const m={title:"Atoms/MpStatusToggle",component:l,tags:["autodocs"],parameters:{docs:{description:{component:`
### Overview
\`MpStatusToggle\` is the status cell used in journey/data-journey tables: an inline switch plus a
colored status label. The switch is on for **Active**, off for **Paused**, and disabled for **Draft**
(drafts are activated from the builder, not the list). The component is stateless — it renders
\`status\` and emits \`toggle\`; the owning view flips the row's status.

**Use when:** a table row's status can be flipped between Active and Paused in place (journeys,
data journeys, automations).

**Don't use when:** the status is read-only (use \`MpStatusChip\`), has more than the three
Active/Paused/Draft states, or the flip needs confirmation first (open \`MpConfirmDialog\`
from the \`@toggle\` handler instead of toggling directly).

### Usage
\`\`\`html
<template #item.status="{ item }">
  <MpStatusToggle
    :status="item.status"
    @toggle="item.status = item.status === 'Active' ? 'Paused' : 'Active'"
  />
</template>
\`\`\`

### 🟢 Do's
- **Do** handle \`@toggle\` in the view and flip the row's status between Active and Paused.
- **Do** use it inside a \`v-data-table\` status column for consistency with Journeys/Data Journeys.
- **Do** keep Draft rows disabled — activation belongs to the builder's publish flow.

### 🔴 Don'ts
- **Don't** use it for statuses outside Active/Paused/Draft — use \`MpStatusChip\` for read-only badges.
- **Don't** mutate status inside the component's parent template without persisting — the switch
  reflects \`status\` on the next render, so a dropped update makes the switch snap back.

### A11y
- **Provides:** the switch carries a dynamic \`aria-label\` ("Pause" when Active, "Activate" when
  Paused) naming the action it performs, and the visible status word is associated with the switch
  input via \`aria-describedby\`, so screen readers hear the current state after the action name
  *(fixed in the Phase 4 a11y pass)*; the Draft state renders the switch \`disabled\`; the status
  word is always visible as text, so color is not the only carrier.
- **Consumer must:** re-render with the new \`status\` promptly after \`@toggle\`, and keep row
  identity clear elsewhere in the row (the aria-label does not say which journey it controls).
- **Gaps:** the disabled Draft switch is skipped by keyboard focus, leaving no focusable element
  that conveys why it cannot be toggled (backlog — would need aria-disabled instead of disabled).
        `}}},argTypes:{status:{control:"select",options:["Active","Paused","Draft"],description:"Current status. Active = switch on, Paused = switch off, Draft = switch disabled."},toggle:{control:!1,description:"Event — emitted when the switch is flipped. The view owns the state change.",table:{category:"events"}}}},i={args:{status:"Active"}},r={args:{status:"Paused"}},s={args:{status:"Draft"}},a={render:()=>({components:{MpStatusToggle:l},template:`
      <div class="d-flex flex-column ga-3">
        <MpStatusToggle status="Active" />
        <MpStatusToggle status="Paused" />
        <MpStatusToggle status="Draft" />
      </div>
    `}),args:{}},o={render:()=>({components:{MpStatusToggle:l},setup(){const t=u(0);function e(){t.value++}return{toggleCount:t,onToggle:e}},template:`
      <div>
        <MpStatusToggle status="Draft" @toggle="onToggle" />
        <div class="text-caption text-medium-emphasis mt-3">Toggle events fired: {{ toggleCount }} (switch is disabled on Draft, so this stays 0)</div>
      </div>
    `}),play:async({canvasElement:t})=>{await new Promise(c=>setTimeout(c,200)),t.querySelector('input[type="checkbox"]')?.click()},args:{}},n={render:()=>({components:{MpStatusToggle:l},setup(){const t=u("Active"),e=u("—");function c(){t.value=t.value==="Active"?"Paused":"Active",e.value=`toggle → ${t.value}`}return{status:t,lastEvent:e,onToggle:c}},template:`
      <div>
        <MpStatusToggle :status="status" @toggle="onToggle" />
        <div class="text-caption text-medium-emphasis mt-3">Last event: {{ lastEvent }}</div>
      </div>
    `}),args:{}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'Active'
  }
}`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'Paused'
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'Draft'
  }
}`,...s.parameters?.docs?.source},description:{story:"Draft renders the switch disabled — drafts are activated from the builder, not the list.",...s.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      MpStatusToggle
    },
    template: \`
      <div class="d-flex flex-column ga-3">
        <MpStatusToggle status="Active" />
        <MpStatusToggle status="Paused" />
        <MpStatusToggle status="Draft" />
      </div>
    \`
  }),
  args: {} as any
}`,...a.parameters?.docs?.source},description:{story:"The full state matrix side by side.",...a.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      MpStatusToggle
    },
    setup() {
      const toggleCount = ref(0);
      function onToggle() {
        toggleCount.value++;
      }
      return {
        toggleCount,
        onToggle
      };
    },
    template: \`
      <div>
        <MpStatusToggle status="Draft" @toggle="onToggle" />
        <div class="text-caption text-medium-emphasis mt-3">Toggle events fired: {{ toggleCount }} (switch is disabled on Draft, so this stays 0)</div>
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    await new Promise(resolve => setTimeout(resolve, 200));
    const input = canvasElement.querySelector<HTMLInputElement>('input[type="checkbox"]');
    input?.click();
  },
  args: {} as any
}`,...o.parameters?.docs?.source},description:{story:"Draft's disabled mechanism, made explicit: the switch is rendered `disabled` (per the\ncomponent's `:disabled=\"status === 'Draft'\"` binding), so clicking it fires no \\`toggle\\`\nevent at all. This play function clicks the switch input and the counter below stays at 0.",...o.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      MpStatusToggle
    },
    setup() {
      const status = ref<'Active' | 'Paused'>('Active');
      const lastEvent = ref('—');
      function onToggle() {
        status.value = status.value === 'Active' ? 'Paused' : 'Active';
        lastEvent.value = \`toggle → \${status.value}\`;
      }
      return {
        status,
        lastEvent,
        onToggle
      };
    },
    template: \`
      <div>
        <MpStatusToggle :status="status" @toggle="onToggle" />
        <div class="text-caption text-medium-emphasis mt-3">Last event: {{ lastEvent }}</div>
      </div>
    \`
  }),
  args: {} as any
}`,...n.parameters?.docs?.source},description:{story:"Live wiring of the \\`toggle\\` event: the story owns the status and flips it between\nActive and Paused, exactly like a journeys list view does. The last event is logged below.",...n.parameters?.docs?.description}}};const h=["Active","Paused","Draft","AllStates","DisabledInteraction","ToggleEvent"];export{i as Active,a as AllStates,o as DisabledInteraction,s as Draft,r as Paused,n as ToggleEvent,h as __namedExportsOrder,m as default};
