import{M as t}from"./MpFloatingBulkBar-BNeeQKsI.js";import{r as c}from"./iframe-DH-XNaA6.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const g={title:"Molecules/MpFloatingBulkBar",component:t,tags:["autodocs"],parameters:{docs:{description:{component:`
### Overview
The \`MpFloatingBulkBar\` appears fixed at the bottom of the workspace when rows are selected in
a list or grid. It shows the selection count, an optional "Select all (N)" escalation when
\`total\` is provided and \`count < total\`, the view's bulk action buttons (default slot), and a
"Clear selection" button. It renders nothing when \`count\` is 0 and slides in/out with a
\`v-slide-y-transition\`.

**Use when:** a \`v-data-table\`/grid supports row selection and offers bulk actions (fulfill,
export, tag, delete).

**Don't use when:** you're inside a drawer or dialog (it is fixed to the page-level workspace),
or there is only ever a single selectable item (use row actions instead).

### Usage
\`\`\`html
<MpFloatingBulkBar
  :count="selected.length"
  :total="orders.length"
  @select-all="selected = orders.map(o => o.id)"
  @clear="selected = []"
>
  <v-btn size="small" variant="outlined" prepend-icon="truck">Fulfill</v-btn>
  <v-btn size="small" variant="outlined" prepend-icon="download">Export</v-btn>
  <v-btn size="small" variant="outlined" color="error" prepend-icon="trash-2">Delete</v-btn>
</MpFloatingBulkBar>
\`\`\`

### 🟢 Do's
- **Do** pass \`total\` so users can escalate a partial selection to everything ("Select all (42)").
  The button hides itself once \`count === total\`.
- **Do** populate the default slot with 2–4 clearly labeled \`v-btn variant="outlined"\` actions.
- **Do** ensure the \`@clear\` handler deselects everything in the underlying table.

### 🔴 Don'ts
- **Don't** use this component inside modals or drawers. It is designed only for the main
  page-level workspace (fixed, centered over \`v-main\`, bottom 24px).
- **Don't** provide more than 4 actions — use a dropdown menu if more bulk actions are required.
- **Don't** use solid/elevated buttons inside the bar; stick to outlined variants against the
  solid bar surface.

### 💡 Best Practices
- **Destructive actions:** place dangerous bulk actions (like Delete) last and color them
  \`color="error"\`.
- **Positioning:** the bar centers itself over the content area using Vuetify's
  \`--v-layout-left/right\` variables, so it stays centered when the sidebar collapses.

### A11y
- **Provides:** the bar is a \`role="status"\` region named "Bulk actions", so its appearance and
  count changes are announced politely and it is discoverable as a named region *(fixed in the
  Phase 4 a11y pass)*; all actions are real buttons with visible focus indicators; the count is
  visible text ("N selected"), not color-coded; "Select all (N)" states the target count in its
  label.
- **Consumer must:** keep slot buttons text-labeled (no icon-only bulk actions) and wire \`@clear\`
  so keyboard users can exit selection mode.
- **Gaps:** none known — note the bar mounts with \`v-if\`, so the very first appearance may not
  announce on all screen readers (subsequent count changes do).
        `}}},argTypes:{count:{control:{type:"number",min:0,max:100},description:"Number of selected rows. The bar renders only while count > 0."},total:{control:{type:"number",min:0,max:100},description:'Total selectable rows. When provided and count < total, a "Select all (total)" button appears.'},clear:{control:!1,description:'Event — "Clear selection" clicked. Deselect everything in the table.',table:{category:"events"}},selectAll:{control:!1,description:'Event — "Select all (N)" clicked. Select every row, not just the current page.',table:{category:"events"}},default:{control:!1,description:'Slot — 2–4 outlined bulk action buttons; destructive last with color="error".',table:{category:"slots"}}}},r={render:()=>({components:{MpFloatingBulkBar:t},setup(){return{count:c(5)}},template:`
      <div style="min-height: 200px; position: relative;">
        <div class="d-flex gap-2 mb-4">
          <v-btn size="small" @click="count++">Select more</v-btn>
          <v-btn size="small" @click="count = Math.max(0, count - 1)">Deselect one</v-btn>
        </div>
        <MpFloatingBulkBar :count="count" @clear="count = 0">
          <v-btn size="small" variant="outlined" prepend-icon="truck">Fulfill</v-btn>
          <v-btn size="small" variant="outlined" prepend-icon="download">Export</v-btn>
          <v-btn size="small" variant="outlined" color="error" prepend-icon="trash-2">Delete</v-btn>
        </MpFloatingBulkBar>
      </div>
    `}),args:{}},n={render:()=>({components:{MpFloatingBulkBar:t},template:`
      <div class="d-flex flex-column ga-8">
        <div>
          <div class="text-caption text-medium-emphasis mb-2">actions only</div>
          <MpFloatingBulkBar :count="3">
            <v-btn size="small" variant="text" class="text-none">Export</v-btn>
            <v-btn size="small" variant="text" class="text-none text-error">Delete</v-btn>
          </MpFloatingBulkBar>
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">with total — offers "select all"</div>
          <MpFloatingBulkBar :count="3" :total="128">
            <v-btn size="small" variant="text" class="text-none">Export</v-btn>
          </MpFloatingBulkBar>
        </div>
      </div>
    `}),args:{}},a={render:()=>({components:{MpFloatingBulkBar:t},template:`
      <div class="d-flex flex-column ga-8">
        <div v-for="n in [1, 3, 128]" :key="n">
          <div class="text-caption text-medium-emphasis mb-2">count={{ n }}</div>
          <MpFloatingBulkBar :count="n" :total="128">
            <v-btn size="small" variant="text" class="text-none">Export</v-btn>
          </MpFloatingBulkBar>
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">count=0 — renders nothing</div>
          <MpFloatingBulkBar :count="0"><v-btn size="small" variant="text">Export</v-btn></MpFloatingBulkBar>
        </div>
      </div>
    `}),args:{}},o={render:()=>({components:{MpFloatingBulkBar:t},setup(){const e=c(5),d=c(42);return{count:e,total:d}},template:`
      <div style="min-height: 200px; position: relative;">
        <MpFloatingBulkBar :count="count" :total="total" @clear="count = 0" @select-all="count = total">
          <v-btn size="small" variant="outlined" prepend-icon="tag">Tag</v-btn>
          <v-btn size="small" variant="outlined" color="error" prepend-icon="trash-2">Delete</v-btn>
        </MpFloatingBulkBar>
      </div>
    `}),args:{}},s={args:{count:3},render:e=>({components:{MpFloatingBulkBar:t},setup:()=>({args:e}),template:`
      <div style="min-height: 200px; position: relative;">
        <MpFloatingBulkBar v-bind="args">
          <v-btn size="small" variant="outlined" prepend-icon="tag">Tag</v-btn>
          <v-btn size="small" variant="outlined" prepend-icon="mail">Email</v-btn>
        </MpFloatingBulkBar>
      </div>
    `})},l={args:{count:1,total:42},render:e=>({components:{MpFloatingBulkBar:t},setup:()=>({args:e}),template:`
      <div style="min-height: 200px; position: relative;">
        <MpFloatingBulkBar v-bind="args">
          <v-btn size="small" variant="outlined" prepend-icon="tag">Tag</v-btn>
          <v-btn size="small" variant="outlined" color="error" prepend-icon="trash-2">Delete</v-btn>
        </MpFloatingBulkBar>
      </div>
    `})},i={args:{count:42,total:42},render:e=>({components:{MpFloatingBulkBar:t},setup:()=>({args:e}),template:`
      <div style="min-height: 200px; position: relative;">
        <MpFloatingBulkBar v-bind="args">
          <v-btn size="small" variant="outlined" prepend-icon="tag">Tag</v-btn>
          <v-btn size="small" variant="outlined" prepend-icon="download">Export</v-btn>
          <v-btn size="small" variant="outlined" color="error" prepend-icon="trash-2">Delete</v-btn>
        </MpFloatingBulkBar>
      </div>
    `})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      MpFloatingBulkBar
    },
    setup() {
      const count = ref(5);
      return {
        count
      };
    },
    template: \`
      <div style="min-height: 200px; position: relative;">
        <div class="d-flex gap-2 mb-4">
          <v-btn size="small" @click="count++">Select more</v-btn>
          <v-btn size="small" @click="count = Math.max(0, count - 1)">Deselect one</v-btn>
        </div>
        <MpFloatingBulkBar :count="count" @clear="count = 0">
          <v-btn size="small" variant="outlined" prepend-icon="truck">Fulfill</v-btn>
          <v-btn size="small" variant="outlined" prepend-icon="download">Export</v-btn>
          <v-btn size="small" variant="outlined" color="error" prepend-icon="trash-2">Delete</v-btn>
        </MpFloatingBulkBar>
      </div>
    \`
  }),
  args: {} as any // Fixes TS strict mode error
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      MpFloatingBulkBar
    },
    template: \`
      <div class="d-flex flex-column ga-8">
        <div>
          <div class="text-caption text-medium-emphasis mb-2">actions only</div>
          <MpFloatingBulkBar :count="3">
            <v-btn size="small" variant="text" class="text-none">Export</v-btn>
            <v-btn size="small" variant="text" class="text-none text-error">Delete</v-btn>
          </MpFloatingBulkBar>
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">with total — offers "select all"</div>
          <MpFloatingBulkBar :count="3" :total="128">
            <v-btn size="small" variant="text" class="text-none">Export</v-btn>
          </MpFloatingBulkBar>
        </div>
      </div>
    \`
  }),
  args: {} as never
}`,...n.parameters?.docs?.source},description:{story:"With and without a select-all affordance in the default slot.",...n.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      MpFloatingBulkBar
    },
    template: \`
      <div class="d-flex flex-column ga-8">
        <div v-for="n in [1, 3, 128]" :key="n">
          <div class="text-caption text-medium-emphasis mb-2">count={{ n }}</div>
          <MpFloatingBulkBar :count="n" :total="128">
            <v-btn size="small" variant="text" class="text-none">Export</v-btn>
          </MpFloatingBulkBar>
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">count=0 — renders nothing</div>
          <MpFloatingBulkBar :count="0"><v-btn size="small" variant="text">Export</v-btn></MpFloatingBulkBar>
        </div>
      </div>
    \`
  }),
  args: {} as never
}`,...a.parameters?.docs?.source},description:{story:"The bar appears at 1 and hides at 0 — the count is the state.",...a.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      MpFloatingBulkBar
    },
    setup() {
      const count = ref(5);
      const total = ref(42);
      return {
        count,
        total
      };
    },
    template: \`
      <div style="min-height: 200px; position: relative;">
        <MpFloatingBulkBar :count="count" :total="total" @clear="count = 0" @select-all="count = total">
          <v-btn size="small" variant="outlined" prepend-icon="tag">Tag</v-btn>
          <v-btn size="small" variant="outlined" color="error" prepend-icon="trash-2">Delete</v-btn>
        </MpFloatingBulkBar>
      </div>
    \`
  }),
  args: {} as any // Fixes TS strict mode error
}`,...o.parameters?.docs?.source},description:{story:'Partial selection with a known total — the "Select all (42)" escalation is visible.',...o.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    count: 3
  },
  render: args => ({
    components: {
      MpFloatingBulkBar
    },
    setup: () => ({
      args
    }),
    template: \`
      <div style="min-height: 200px; position: relative;">
        <MpFloatingBulkBar v-bind="args">
          <v-btn size="small" variant="outlined" prepend-icon="tag">Tag</v-btn>
          <v-btn size="small" variant="outlined" prepend-icon="mail">Email</v-btn>
        </MpFloatingBulkBar>
      </div>
    \`
  })
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    count: 1,
    total: 42
  },
  render: args => ({
    components: {
      MpFloatingBulkBar
    },
    setup: () => ({
      args
    }),
    template: \`
      <div style="min-height: 200px; position: relative;">
        <MpFloatingBulkBar v-bind="args">
          <v-btn size="small" variant="outlined" prepend-icon="tag">Tag</v-btn>
          <v-btn size="small" variant="outlined" color="error" prepend-icon="trash-2">Delete</v-btn>
        </MpFloatingBulkBar>
      </div>
    \`
  })
}`,...l.parameters?.docs?.source},description:{story:'The minimum visible state — a single selected row ("1 selected").',...l.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    count: 42,
    total: 42
  },
  render: args => ({
    components: {
      MpFloatingBulkBar
    },
    setup: () => ({
      args
    }),
    template: \`
      <div style="min-height: 200px; position: relative;">
        <MpFloatingBulkBar v-bind="args">
          <v-btn size="small" variant="outlined" prepend-icon="tag">Tag</v-btn>
          <v-btn size="small" variant="outlined" prepend-icon="download">Export</v-btn>
          <v-btn size="small" variant="outlined" color="error" prepend-icon="trash-2">Delete</v-btn>
        </MpFloatingBulkBar>
      </div>
    \`
  })
}`,...i.parameters?.docs?.source},description:{story:'Everything selected (count === total) — the "Select all" button hides itself.',...i.parameters?.docs?.description}}};const b=["Default","Variants","States","WithSelectAll","WithThreeSelected","OneSelected","AllSelected"];export{i as AllSelected,r as Default,l as OneSelected,a as States,n as Variants,o as WithSelectAll,s as WithThreeSelected,b as __namedExportsOrder,g as default};
