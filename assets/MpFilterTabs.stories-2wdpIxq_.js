import{r as m,w as p}from"./iframe-BqHSr5b_.js";import{M as r}from"./MpFilterTabs-BPPHJIyJ.js";import"./preload-helper-PPVm8Dsz.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const b=[{label:"All",key:"all",count:1471},{label:"Completed",key:"completed",count:892},{label:"Processing",key:"processing",count:234},{label:"Not Fulfilled",key:"unfulfilled",count:345}],v=[{label:"All",key:"all",count:8},{label:"Drafts",key:"drafts",count:2},{label:"Scheduled",key:"scheduled",count:1},{label:"Sent",key:"sent",count:5}],h=[{label:"Overview",key:"overview"},{label:"Email",key:"email"},{label:"Commerce",key:"commerce"},{label:"Audience",key:"audience"}],f=[{label:"All",key:"all",count:1471},{label:"Open",key:"open",count:234},{label:"Paid",key:"paid",count:892},{label:"Fulfilled",key:"fulfilled",count:736},{label:"Unfulfilled",key:"unfulfilled",count:345},{label:"Returned",key:"returned",count:42},{label:"Refunded",key:"refunded",count:19},{label:"Archived",key:"archived",count:88}],x={title:"Atoms/MpFilterTabs",component:r,tags:["autodocs"],parameters:{docs:{description:{component:`
### Overview
\`MpFilterTabs\` is the tab strip that filters a list or table by status, placed between \`MpPageHeader\` and the table card. Each tab carries a key, a label, and an optional count badge; the active key is bound via \`v-model\`.

**Use when:** switching a single collection between mutually exclusive status views (All / Completed / Processing…), especially with counts.

**Don't use when:** navigating between different pages or routes (use real navigation tabs), or when more than one filter can be active at once (use filter menus in \`MpDataTableToolbar\`).

### Usage
\`\`\`html
<MpFilterTabs
  v-model="activeTab"
  :tabs="[
    { label: 'All', key: 'all', count: total },
    { label: 'Completed', key: 'completed', count: completedCount },
    { label: 'Processing', key: 'processing', count: processingCount },
  ]"
  aria-label="Filter orders"
/>
\`\`\`

### 🟢 Do's
- **Do** always lead with an "All" tab so users can clear the filter in one click.
- **Do** keep counts live — they update as the underlying data changes and are the fastest triage signal on the page.

### 🔴 Don'ts
- **Don't** exceed ~8 tabs; the strip scrolls with overflow arrows (see the ManyTabs story) but scanning suffers.
- **Don't** use counts for slow/expensive queries — a wrong count is worse than none (counts of 0 are hidden automatically).

### A11y
- **Provides:** Vuetify \`v-tabs\` semantics — a \`tablist\` with arrow-key navigation and a visible active indicator; the \`ariaLabel\` prop names the tablist (defaults to "Filter results"); count chips render inside the tab so they are part of its accessible name; overflow arrows appear when tabs don't fit.
- **Provides (Phase 4):** the \`controlsId\` prop wires every tab's \`aria-controls\` to the filtered results container — set an \`id\` on the table/list wrapper and pass it here.
- **Consumer must:** pass a domain-specific \`ariaLabel\` ("Filter orders"), keep tab labels distinct, and pass \`controlsId\` so assistive tech can jump from tab to results.
- **Gaps:** none known — without \`controlsId\` the tabs fall back to the unwired filter-tab pattern.
        `}}},args:{modelValue:"all",tabs:b,ariaLabel:"Filter orders"},argTypes:{modelValue:{control:"text",description:"Active tab key (v-model)"},tabs:{control:"object",description:"Array of tab objects with label, key, and optional count (counts of 0 are hidden)"},ariaLabel:{control:"text",description:'Accessible name for the tablist. Default: "Filter results" — always override with the domain ("Filter orders").'},controlsId:{control:"text",description:"id of the filtered results container; wired to each tab's aria-controls."}},render:e=>({components:{MpFilterTabs:r},setup(){const a=m(e.modelValue);return p(()=>e.modelValue,u=>{a.value=u}),{args:e,active:a}},template:`
      <section style="padding:24px;background:rgb(var(--v-theme-background));min-height:180px;">
        <MpFilterTabs
          v-model="active"
          :tabs="args.tabs"
          :aria-label="args.ariaLabel"
        />
        <p class="text-body-2 text-medium-emphasis mt-4">Active tab: {{ active }}</p>
      </section>
    `})},i={args:{modelValue:"all",tabs:b,ariaLabel:"Filter orders"}},t={render:()=>({components:{MpFilterTabs:r},setup:()=>({withCounts:[{label:"All",key:"all",count:128},{label:"Processing",key:"processing",count:12},{label:"Completed",key:"completed",count:104}],noCounts:[{label:"All",key:"all"},{label:"Processing",key:"processing"},{label:"Completed",key:"completed"}]}),template:`
      <div class="d-flex flex-column ga-8">
        <div>
          <div class="text-caption text-medium-emphasis mb-2">with counts</div>
          <MpFilterTabs :tabs="withCounts" model-value="all" aria-label="Order filters" />
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">without counts</div>
          <MpFilterTabs :tabs="noCounts" model-value="all" aria-label="Order filters" />
        </div>
      </div>
    `}),args:{}},s={render:()=>({components:{MpFilterTabs:r},setup:()=>({few:[{label:"All",key:"all",count:128},{label:"Draft",key:"draft",count:4}],many:["All","Processing","On hold","Completed","Cancelled","Refunded","Archived","Failed"].map((e,a)=>({label:e,key:`k${a}`,count:(a+1)*7}))}),template:`
      <div class="d-flex flex-column ga-8">
        <div>
          <div class="text-caption text-medium-emphasis mb-2">two tabs</div>
          <MpFilterTabs :tabs="few" model-value="all" aria-label="Order filters" />
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">eight tabs — scrolls, never wraps</div>
          <MpFilterTabs :tabs="many" model-value="k0" aria-label="Order filters" />
        </div>
      </div>
    `}),args:{}},l={render:()=>({components:{MpFilterTabs:r},setup:()=>({tabs:[{label:"All",key:"all",count:128},{label:"Processing",key:"processing",count:12},{label:"Refunded",key:"refunded",count:0}]}),template:`
      <div class="d-flex flex-column ga-8">
        <div>
          <div class="text-caption text-medium-emphasis mb-2">first tab active</div>
          <MpFilterTabs :tabs="tabs" model-value="all" aria-label="Order filters" />
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">middle tab active</div>
          <MpFilterTabs :tabs="tabs" model-value="processing" aria-label="Order filters" />
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">zero-count tab active</div>
          <MpFilterTabs :tabs="tabs" model-value="refunded" aria-label="Order filters" />
        </div>
      </div>
    `}),args:{}},o={args:{modelValue:"all",tabs:b,ariaLabel:"Filter orders"}},n={args:{modelValue:"all",tabs:v,ariaLabel:"Filter campaigns"}},d={args:{modelValue:"overview",tabs:h,ariaLabel:"Filter workspace sections"}},c={args:{modelValue:"all",tabs:f,ariaLabel:"Filter many order states"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: 'all',
    tabs: orderTabs,
    ariaLabel: 'Filter orders'
  }
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      MpFilterTabs
    },
    setup: () => ({
      withCounts: [{
        label: 'All',
        key: 'all',
        count: 128
      }, {
        label: 'Processing',
        key: 'processing',
        count: 12
      }, {
        label: 'Completed',
        key: 'completed',
        count: 104
      }],
      noCounts: [{
        label: 'All',
        key: 'all'
      }, {
        label: 'Processing',
        key: 'processing'
      }, {
        label: 'Completed',
        key: 'completed'
      }]
    }),
    template: \`
      <div class="d-flex flex-column ga-8">
        <div>
          <div class="text-caption text-medium-emphasis mb-2">with counts</div>
          <MpFilterTabs :tabs="withCounts" model-value="all" aria-label="Order filters" />
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">without counts</div>
          <MpFilterTabs :tabs="noCounts" model-value="all" aria-label="Order filters" />
        </div>
      </div>
    \`
  }),
  args: {} as never
}`,...t.parameters?.docs?.source},description:{story:"With and without counts — the structural axis.",...t.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      MpFilterTabs
    },
    setup: () => ({
      few: [{
        label: 'All',
        key: 'all',
        count: 128
      }, {
        label: 'Draft',
        key: 'draft',
        count: 4
      }],
      many: ['All', 'Processing', 'On hold', 'Completed', 'Cancelled', 'Refunded', 'Archived', 'Failed'].map((label, i) => ({
        label,
        key: \`k\${i}\`,
        count: (i + 1) * 7
      }))
    }),
    template: \`
      <div class="d-flex flex-column ga-8">
        <div>
          <div class="text-caption text-medium-emphasis mb-2">two tabs</div>
          <MpFilterTabs :tabs="few" model-value="all" aria-label="Order filters" />
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">eight tabs — scrolls, never wraps</div>
          <MpFilterTabs :tabs="many" model-value="k0" aria-label="Order filters" />
        </div>
      </div>
    \`
  }),
  args: {} as never
}`,...s.parameters?.docs?.source},description:{story:"Tab-count is the size axis — a long set scrolls horizontally rather than wrapping.",...s.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      MpFilterTabs
    },
    setup: () => ({
      tabs: [{
        label: 'All',
        key: 'all',
        count: 128
      }, {
        label: 'Processing',
        key: 'processing',
        count: 12
      }, {
        label: 'Refunded',
        key: 'refunded',
        count: 0
      }]
    }),
    template: \`
      <div class="d-flex flex-column ga-8">
        <div>
          <div class="text-caption text-medium-emphasis mb-2">first tab active</div>
          <MpFilterTabs :tabs="tabs" model-value="all" aria-label="Order filters" />
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">middle tab active</div>
          <MpFilterTabs :tabs="tabs" model-value="processing" aria-label="Order filters" />
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">zero-count tab active</div>
          <MpFilterTabs :tabs="tabs" model-value="refunded" aria-label="Order filters" />
        </div>
      </div>
    \`
  }),
  args: {} as never
}`,...l.parameters?.docs?.source},description:{story:"Active vs inactive, and a zero count. Tab through to see the focus ring.",...l.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: 'all',
    tabs: orderTabs,
    ariaLabel: 'Filter orders'
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: 'all',
    tabs: campaignTabs,
    ariaLabel: 'Filter campaigns'
  }
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: 'overview',
    tabs: noCountTabs,
    ariaLabel: 'Filter workspace sections'
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: 'all',
    tabs: manyTabs,
    ariaLabel: 'Filter many order states'
  }
}`,...c.parameters?.docs?.source}}};const T=["Default","Variants","Sizes","States","OrderTabs","CampaignTabs","NoCounts","ManyTabs"];export{n as CampaignTabs,i as Default,c as ManyTabs,d as NoCounts,o as OrderTabs,s as Sizes,l as States,t as Variants,T as __namedExportsOrder,x as default};
