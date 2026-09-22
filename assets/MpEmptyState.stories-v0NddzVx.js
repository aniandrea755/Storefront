import{M as o}from"./MpEmptyState-WqesgUXi.js";import"./iframe-BqHSr5b_.js";import"./preload-helper-PPVm8Dsz.js";import"./MpIllustration-7mikb6DB.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const y={title:"Molecules/MpEmptyState",component:o,tags:["autodocs"],parameters:{docs:{description:{component:`
### Overview
The \`MpEmptyState\` component is used when a container (like a table, list, or dashboard widget) has no data to display.

**Use when:** a list/table/grid resolved successfully but has zero items — first use, cleared data, or a search/filter with no matches.

**Don't use when:** the data failed to load (use \`MpErrorState\` — it carries \`role="alert"\` and retry semantics) or is still loading (use \`MpTableSkeleton\`).

### Usage
\`\`\`html
<MpEmptyState
  v-if="!loading && items.length === 0"
  icon="package"
  title="No orders yet"
  description="Once customers start placing orders, they will appear here."
  action-label="Create Draft Order"
  action-icon="plus"
  @action="drawer = true"
/>
\`\`\`

### 🟢 Do's
- **Do** provide a helpful, action-oriented description explaining *why* it's empty and *what* to do next.
- **Do** include a primary action button (\`action-label\` and \`@action\`) if the user has permission to create the missing item.
- **Do** select an appropriate Lucide icon (\`icon\` prop) that semantically relates to the missing content (e.g., \`users\` for missing contacts).

### 🔴 Don'ts
- **Don't** leave users dead-ended. Always provide a path forward, even if it's just "Clear filters" or a link to documentation.
- **Don't** blame the user. Say "No orders found for this search" rather than "You searched wrong."
- **Don't** use overly large or complex custom illustrations if the standard icon + text format suffices, to maintain consistency.

### 💡 Best Practices
- **Context:** If the empty state is caused by active search/filters yielding zero results, the action button should clear those filters.
- **First Use:** For "first use" scenarios (zero data ever created), the action button should be the primary "Create New" workflow.

### A11y
- **Provides:** the title carries \`role="heading"\` + \`aria-level\` (default 2, tune via \`headingLevel\`), so screen-reader users can jump to it via heading navigation *(fixed in the Phase 4 a11y pass)*; the CTA is a real \`v-btn\` with a visible focus indicator; the icon is decorative (\`v-icon\` is \`aria-hidden\`), so meaning lives in the title and description text.
- **Consumer must:** write a title that makes sense out of context ("No orders yet", not "Nothing here"), and point \`@action\` somewhere useful.
- **Gaps:** there is no live region, so a filter change that empties a list is not announced — deliberately left to consumers (a global \`role="status"\` here would announce on every initial render); announce result-count changes at the toolbar/page level instead.
        `}}},argTypes:{headingLevel:{control:"number",description:'Heading level announced to assistive tech (`role="heading"` + `aria-level`). Set it to whatever keeps the pages outline correct where the state is mounted — it does not change the visual size.'},variant:{control:"inline-radio",options:["stack","launcher"],description:"Structure: 'stack' (centred icon + copy + action) or 'launcher' (adds a vertical menu of starting points in the default slot). Structural alternatives only — visual weight lives on `emphasis` (P2-7)."},emphasis:{control:"inline-radio",options:["default","prominent"],description:"Visual weight. 'prominent' is the illustration-led treatment with a larger measure and title, for high-visibility first-run moments. Shared system-wide vocabulary (P2-7)."},tone:{control:"inline-radio",options:["neutral","error"],description:"Leading-glyph tone. 'error' renders it in the error colour on a soft disc — this is what MpErrorState composes."},illustration:{control:"select",options:["no-results","empty-orders","empty-contacts","empty-campaigns","empty-products","empty-generic","start-here","error"],description:'MpIllustration name rendered when `emphasis="prominent"` (or override via the #illustration slot in any variant).'},icon:{control:"text",description:"Lucide icon name rendered bare (size 40, medium-emphasis) above the title in the default variant. Omit to hide."},title:{control:"text",description:"Required headline. Should make sense read on its own."},description:{control:"text",description:"Supporting copy (max-width 420px, wraps)."},actionLabel:{control:"text",description:"CTA button label. Omit to render no button."},actionIcon:{control:"text",description:"Lucide icon prepended to the CTA button."},action:{control:!1,description:"Event — emitted when the CTA button is clicked.",table:{category:"events"}}}},s={args:{icon:"package",title:"No orders yet",description:"Once customers start placing orders, they will appear here.",actionLabel:"Create Draft Order",actionIcon:"plus"}},e={render:l=>({components:{MpEmptyState:o},setup:()=>({args:l}),template:`
      <div class="d-flex flex-column ga-8">
        <div>
          <div class="text-caption text-medium-emphasis mb-2">variant="stack"</div>
          <MpEmptyState v-bind="args" variant="stack" />
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">variant="launcher"</div>
          <MpEmptyState title="How do you want to start?" description="Pick a starting point." variant="launcher">
            <v-btn variant="outlined" class="text-none justify-start" prepend-icon="file">Start from scratch</v-btn>
            <v-btn variant="outlined" class="text-none justify-start" prepend-icon="layout-template">Use a template</v-btn>
          </MpEmptyState>
        </div>
      </div>
    `}),args:{icon:"package",title:"No orders yet",description:"Once customers start placing orders, they will appear here.",actionLabel:"Create Draft Order",actionIcon:"plus"}},t={render:()=>({components:{MpEmptyState:o},template:`
      <div class="d-flex flex-column ga-8">
        <div>
          <div class="text-caption text-medium-emphasis mb-2">emphasis="default" — 240px floor, 32px inset</div>
          <MpEmptyState icon="package" title="No orders yet" description="Once customers start placing orders, they will appear here." />
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">emphasis="prominent" — 320px floor, 48px inset</div>
          <MpEmptyState
            emphasis="prominent"
            illustration="empty-campaigns"
            title="Launch your first campaign"
            description="Reach your audience with a broadcast email."
            action-label="Create campaign"
            action-icon="plus"
          />
        </div>
      </div>
    `}),args:{}},a={render:()=>({components:{MpEmptyState:o},template:`
      <div class="d-flex flex-column ga-8">
        <div>
          <div class="text-caption text-medium-emphasis mb-2">with CTA</div>
          <MpEmptyState icon="package" title="No orders yet" description="Once customers start placing orders, they will appear here." action-label="Create Draft Order" action-icon="plus" />
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">no CTA — filtered result, nothing to create</div>
          <MpEmptyState icon="search" title="No results found" description="Try adjusting your search or filter criteria." />
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">title only</div>
          <MpEmptyState icon="inbox" title="Nothing here yet" />
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">tone="error" — the shape MpErrorState wraps</div>
          <MpEmptyState tone="error" icon="alert-triangle" title="Something went wrong" description="We could not load your orders." action-label="Try again" action-icon="refresh-cw" />
        </div>
      </div>
    `}),args:{}},c={args:{icon:"mail",title:"No campaigns yet",description:"Create your first email campaign to engage your audience.",actionLabel:"New Campaign",actionIcon:"plus"}},p={args:{icon:"search",title:"No results found",description:"Try adjusting your search or filter criteria."}},d={args:{icon:"users",title:"No contacts yet",description:"Import contacts or add them manually to start building your audience.",actionLabel:"Import Contacts",actionIcon:"upload"}},i={args:{emphasis:"prominent",illustration:"empty-campaigns",title:"Launch your first campaign",description:"Reach your audience with a broadcast email. Design it, pick a segment, and send — you can track opens and clicks the moment it goes out.",actionLabel:"Create campaign",actionIcon:"plus"}},n={args:{title:"How do you want to start?",description:"Pick a starting point for your new campaign."},render:l=>({components:{MpEmptyState:o},setup:()=>({args:l}),template:`
      <MpEmptyState v-bind="args" variant="launcher">
        <v-btn variant="outlined" class="text-none justify-start" prepend-icon="file">Start from scratch</v-btn>
        <v-btn variant="outlined" class="text-none justify-start" prepend-icon="layout-template">Use a template</v-btn>
        <v-btn variant="outlined" class="text-none justify-start" prepend-icon="sparkles">Draft with Da Vinci</v-btn>
      </MpEmptyState>
    `})},r={args:{icon:"inbox",title:"No abandoned-cart automations are running for this store yet",description:"Abandoned-cart automations recover revenue by nudging shoppers who left items behind. Once you publish your first flow, enrolled contacts, sends, and recovered orders will all show up here. Most merchants start with a three-email sequence spaced over 48 hours.",actionLabel:"Create abandoned-cart automation",actionIcon:"plus"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'package',
    title: 'No orders yet',
    description: 'Once customers start placing orders, they will appear here.',
    actionLabel: 'Create Draft Order',
    actionIcon: 'plus'
  }
}`,...s.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      MpEmptyState
    },
    setup: () => ({
      args
    }),
    template: \`
      <div class="d-flex flex-column ga-8">
        <div>
          <div class="text-caption text-medium-emphasis mb-2">variant="stack"</div>
          <MpEmptyState v-bind="args" variant="stack" />
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">variant="launcher"</div>
          <MpEmptyState title="How do you want to start?" description="Pick a starting point." variant="launcher">
            <v-btn variant="outlined" class="text-none justify-start" prepend-icon="file">Start from scratch</v-btn>
            <v-btn variant="outlined" class="text-none justify-start" prepend-icon="layout-template">Use a template</v-btn>
          </MpEmptyState>
        </div>
      </div>
    \`
  }),
  args: {
    icon: 'package',
    title: 'No orders yet',
    description: 'Once customers start placing orders, they will appear here.',
    actionLabel: 'Create Draft Order',
    actionIcon: 'plus'
  }
}`,...e.parameters?.docs?.source},description:{story:"Both structures side by side. `launcher` swaps the single CTA for a menu of starting points.",...e.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      MpEmptyState
    },
    template: \`
      <div class="d-flex flex-column ga-8">
        <div>
          <div class="text-caption text-medium-emphasis mb-2">emphasis="default" — 240px floor, 32px inset</div>
          <MpEmptyState icon="package" title="No orders yet" description="Once customers start placing orders, they will appear here." />
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">emphasis="prominent" — 320px floor, 48px inset</div>
          <MpEmptyState
            emphasis="prominent"
            illustration="empty-campaigns"
            title="Launch your first campaign"
            description="Reach your audience with a broadcast email."
            action-label="Create campaign"
            action-icon="plus"
          />
        </div>
      </div>
    \`
  }),
  args: {} as never
}`,...t.parameters?.docs?.source},description:{story:"The emphasis ramp. There is no `size` prop — an empty state fills its container,\nso weight (not width) is the axis that varies.",...t.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      MpEmptyState
    },
    template: \`
      <div class="d-flex flex-column ga-8">
        <div>
          <div class="text-caption text-medium-emphasis mb-2">with CTA</div>
          <MpEmptyState icon="package" title="No orders yet" description="Once customers start placing orders, they will appear here." action-label="Create Draft Order" action-icon="plus" />
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">no CTA — filtered result, nothing to create</div>
          <MpEmptyState icon="search" title="No results found" description="Try adjusting your search or filter criteria." />
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">title only</div>
          <MpEmptyState icon="inbox" title="Nothing here yet" />
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">tone="error" — the shape MpErrorState wraps</div>
          <MpEmptyState tone="error" icon="alert-triangle" title="Something went wrong" description="We could not load your orders." action-label="Try again" action-icon="refresh-cw" />
        </div>
      </div>
    \`
  }),
  args: {} as never
}`,...a.parameters?.docs?.source},description:{story:"Every state the component renders: with and without a CTA, with a description or bare, and the error tone MpErrorState composes.",...a.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'mail',
    title: 'No campaigns yet',
    description: 'Create your first email campaign to engage your audience.',
    actionLabel: 'New Campaign',
    actionIcon: 'plus'
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'search',
    title: 'No results found',
    description: 'Try adjusting your search or filter criteria.'
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'users',
    title: 'No contacts yet',
    description: 'Import contacts or add them manually to start building your audience.',
    actionLabel: 'Import Contacts',
    actionIcon: 'upload'
  }
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    emphasis: 'prominent',
    illustration: 'empty-campaigns',
    title: 'Launch your first campaign',
    description: 'Reach your audience with a broadcast email. Design it, pick a segment, and send — you can track opens and clicks the moment it goes out.',
    actionLabel: 'Create campaign',
    actionIcon: 'plus'
  }
}`,...i.parameters?.docs?.source},description:{story:"Prominent — illustration-led with a larger, verb-first headline for high-visibility first-run moments.",...i.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'How do you want to start?',
    description: 'Pick a starting point for your new campaign.'
  },
  render: args => ({
    components: {
      MpEmptyState
    },
    setup: () => ({
      args
    }),
    template: \`
      <MpEmptyState v-bind="args" variant="launcher">
        <v-btn variant="outlined" class="text-none justify-start" prepend-icon="file">Start from scratch</v-btn>
        <v-btn variant="outlined" class="text-none justify-start" prepend-icon="layout-template">Use a template</v-btn>
        <v-btn variant="outlined" class="text-none justify-start" prepend-icon="sparkles">Draft with Da Vinci</v-btn>
      </MpEmptyState>
    \`
  })
}`,...n.parameters?.docs?.source},description:{story:"Launcher — a vertical menu of starting points passed via the default slot.",...n.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'inbox',
    title: 'No abandoned-cart automations are running for this store yet',
    description: 'Abandoned-cart automations recover revenue by nudging shoppers who left items behind. ' + 'Once you publish your first flow, enrolled contacts, sends, and recovered orders will all show up here. ' + 'Most merchants start with a three-email sequence spaced over 48 hours.',
    actionLabel: 'Create abandoned-cart automation',
    actionIcon: 'plus'
  }
}`,...r.parameters?.docs?.source},description:{story:"Long title + multi-sentence description — copy wraps inside the 420px measure without breaking layout.",...r.parameters?.docs?.description}}};const f=["Default","Variants","Sizes","States","Campaigns","SearchNoResults","Contacts","Prominent","Launcher","LongCopy"];export{c as Campaigns,d as Contacts,s as Default,n as Launcher,r as LongCopy,i as Prominent,p as SearchNoResults,t as Sizes,a as States,e as Variants,f as __namedExportsOrder,y as default};
