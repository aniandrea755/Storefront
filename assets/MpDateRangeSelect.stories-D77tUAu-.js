import{r as m,w as u}from"./iframe-BqHSr5b_.js";import{M as c}from"./MpDateRangeSelect-Co6FF3N_.js";import{d as g}from"./useAnalytics-CLoG1RFa.js";import"./preload-helper-PPVm8Dsz.js";import"./MpFormGrid-D0pxdSe6.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const D={title:"Molecules/MpDateRangeSelect",component:c,tags:["autodocs"],parameters:{docs:{description:{component:`
### Overview
\`MpDateRangeSelect\` is the shared report date-range control used across every Analytics report
view (Sales Summary, Campaign Reports, Orders Report, Website Reports, and more — 14 usages).
It renders as a single trigger button showing the active range as text, backed by a popover menu
of standard presets plus a "Custom range" option that reveals From/To date fields inline.

**Use when:** a report or dashboard needs one date-range filter driving its queried data — pair
it with \`isWithinRange()\` from \`useAnalytics\` to filter rows against the selected value.

**Don't use when:** the page needs two independent date pickers, or a range that isn't
report-scoped (use plain \`v-text-field type="date"\` fields instead).

### Usage
\`\`\`html
<script setup>
import { ref } from 'vue'
import MpDateRangeSelect from '@/components/MpDateRangeSelect.vue'
import { isWithinRange, type DateRangeValue } from '@/stores/useAnalytics'

const dateRange = ref<DateRangeValue>({ preset: 'Last 30 days' })
const filteredRows = computed(() => rows.filter((r) => isWithinRange(r.date, dateRange.value)))
<\/script>

<MpDateRangeSelect v-model="dateRange" />
\`\`\`

### 🟢 Do's
- **Do** default new reports to \`{ preset: 'Last 30 days' }\` (\`DEFAULT_DATE_RANGE\`) for consistency.
- **Do** drive filtering through \`isWithinRange()\` rather than re-implementing date math per view.

### 🔴 Don'ts
- **Don't** allow an invalid Custom range — Apply stays disabled until at least one of From/To is filled.
- **Don't** rename or reorder the presets; they're a fixed shared union (\`DateRangePreset\`) used by every report.

### 💡 Best Practices
- **Label:** the trigger text is always \`dateRangeLabel(modelValue)\` — the preset name, or the
  formatted "MMM D, YYYY – MMM D, YYYY" bounds for Custom ("Custom range" if both bounds are empty).
- **Persistence:** the popover re-syncs its Custom fields from \`modelValue\` every time it opens,
  so a cancelled edit never leaks into the next open.

### A11y
- **Provides:** the trigger is a real \`<button>\` whose visible text is always the current range
  (never color- or icon-only); the popover is a standard Vuetify \`v-menu\`/\`v-list\`, keyboard
  navigable, closing on Escape; the Apply button is disabled (not hidden) until the Custom range
  has at least one bound filled.
- **Consumer must:** keep passing \`modelValue\` through \`dateRangeLabel()\` for any place the
  range is echoed outside the control (e.g. a report subtitle).
- **Gaps:** the trigger \`<button>\` has no explicit \`aria-haspopup\`/\`aria-label\` — its accessible
  name comes from its visible text content only (acceptable since the label always renders, but
  not an explicit popup affordance for assistive tech).
        `}}},argTypes:{modelValue:{control:"object",description:"v-model — the active range: `{ preset: DateRangePreset | 'Custom', from?: string, to?: string }`. `from`/`to` are ISO date strings, only meaningful when `preset` is 'Custom'."},"update:modelValue":{control:!1,description:"Event — emitted with the new `DateRangeValue` when a preset is picked or a Custom range is applied.",table:{category:"events"}}},render:e=>({components:{MpDateRangeSelect:c},setup(){const t=m({...e.modelValue});return u(()=>e.modelValue,a=>{t.value={...a}}),{value:t}},template:`
      <section style="padding:24px;background:rgb(var(--v-theme-background));min-height:280px;">
        <MpDateRangeSelect v-model="value" />
      </section>
    `})},d={args:{modelValue:{preset:"Last 30 days"}}},r={render:()=>({components:{MpDateRangeSelect:c},setup(){const e=["Last 7 days","Last 30 days","Last 90 days","This month","This year"],t=m(e.map(a=>({preset:a})));return{presets:e,values:t}},template:`
      <div style="padding:24px;display:flex;flex-wrap:wrap;gap:16px;background:rgb(var(--v-theme-background));">
        <MpDateRangeSelect v-for="(p, i) in presets" :key="p" v-model="values[i]" />
      </div>
    `}),args:{}},n={args:{modelValue:{preset:"Custom",from:"2026-06-01",to:"2026-06-30"}}},o={args:{modelValue:{preset:"Custom"}}},i={args:{modelValue:{preset:"Last 90 days"}},play:async({canvasElement:e})=>{await new Promise(a=>setTimeout(a,300)),e.querySelector(".mp-range-trigger")?.click()}},l={args:{modelValue:{preset:"This month"}},play:async({canvasElement:e})=>{await new Promise(s=>setTimeout(s,300)),e.querySelector(".mp-range-trigger")?.click(),await new Promise(s=>setTimeout(s,200)),Array.from(document.querySelectorAll(".v-list-item")).find(s=>s.textContent?.includes("Custom range"))?.click()}},p={render:()=>({components:{MpDateRangeSelect:c},setup(){return{value:m({preset:"Last 30 days"}),dateRangeLabel:g}},template:`
      <div style="padding:24px;background:rgb(var(--v-theme-background));min-height:280px;">
        <MpDateRangeSelect v-model="value" />
        <p class="text-body-2 text-medium-emphasis mt-4">Active range: {{ dateRangeLabel(value) }}</p>
      </div>
    `}),args:{}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: {
      preset: 'Last 30 days'
    }
  }
}`,...d.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      MpDateRangeSelect
    },
    setup() {
      const presets: DateRangePreset[] = ['Last 7 days', 'Last 30 days', 'Last 90 days', 'This month', 'This year'];
      const values = ref<DateRangeValue[]>(presets.map(preset => ({
        preset
      })));
      return {
        presets,
        values
      };
    },
    template: \`
      <div style="padding:24px;display:flex;flex-wrap:wrap;gap:16px;background:rgb(var(--v-theme-background));">
        <MpDateRangeSelect v-for="(p, i) in presets" :key="p" v-model="values[i]" />
      </div>
    \`
  }),
  args: {} as any
}`,...r.parameters?.docs?.source},description:{story:"Every standard preset, closed, side by side — the trigger label is just the preset name.",...r.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: {
      preset: 'Custom',
      from: '2026-06-01',
      to: '2026-06-30'
    }
  }
}`,...n.parameters?.docs?.source},description:{story:"An active Custom range with both bounds set — the trigger shows the formatted date span.",...n.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: {
      preset: 'Custom'
    }
  }
}`,...o.parameters?.docs?.source},description:{story:'Custom selected but no bounds filled yet — the trigger falls back to "Custom range".',...o.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: {
      preset: 'Last 90 days'
    }
  },
  play: async ({
    canvasElement
  }) => {
    await new Promise(resolve => setTimeout(resolve, 300));
    const trigger = canvasElement.querySelector<HTMLElement>('.mp-range-trigger');
    trigger?.click();
  }
}`,...i.parameters?.docs?.source},description:{story:'The preset menu opened automatically — the active preset is highlighted, "Custom range" sits below a divider.',...i.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: {
      preset: 'This month'
    }
  },
  play: async ({
    canvasElement
  }) => {
    await new Promise(resolve => setTimeout(resolve, 300));
    const trigger = canvasElement.querySelector<HTMLElement>('.mp-range-trigger');
    trigger?.click();
    await new Promise(resolve => setTimeout(resolve, 200));
    const items = Array.from(document.querySelectorAll<HTMLElement>('.v-list-item'));
    const customItem = items.find(el => el.textContent?.includes('Custom range'));
    customItem?.click();
  }
}`,...l.parameters?.docs?.source},description:{story:'Clicking "Custom range" reveals the From/To fields inline, without closing the menu.',...l.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      MpDateRangeSelect
    },
    setup() {
      const value = ref<DateRangeValue>({
        preset: 'Last 30 days'
      });
      return {
        value,
        dateRangeLabel
      };
    },
    template: \`
      <div style="padding:24px;background:rgb(var(--v-theme-background));min-height:280px;">
        <MpDateRangeSelect v-model="value" />
        <p class="text-body-2 text-medium-emphasis mt-4">Active range: {{ dateRangeLabel(value) }}</p>
      </div>
    \`
  }),
  args: {} as any
}`,...p.parameters?.docs?.source},description:{story:"Live wiring: picking a preset (or applying a Custom range) updates the label below immediately.",...p.parameters?.docs?.description}}};const C=["Default","AllPresets","CustomRange","CustomRangeUnset","MenuOpen","CustomPanelOpen","LiveSelection"];export{r as AllPresets,l as CustomPanelOpen,n as CustomRange,o as CustomRangeUnset,d as Default,p as LiveSelection,i as MenuOpen,C as __namedExportsOrder,D as default};
