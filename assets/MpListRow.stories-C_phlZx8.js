import{M as e}from"./MpListRow-Cp1HcjrS.js";import"./iframe-BqHSr5b_.js";import"./preload-helper-PPVm8Dsz.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const m={title:"Atoms/MpListRow",component:e,tags:["autodocs"],parameters:{docs:{description:{component:'\n### Overview\n`MpListRow` is the one row geometry for every list in the system. Before it, a single\nfile (`ModuleLandingPage`) hand-rolled three different rows at three different heights,\nand `DvDraftPreview` hand-rolled a fourth. This consolidates them.\n\n**Use when:** you are rendering a repeating row — an activity feed, a checklist, a menu of\nsuggestions, a settings list.\n\n**Don\'t use when:** you need a real data table (use `v-data-table` with the\n`MpDataTableToolbar` pattern) or a selectable card (use `MpOptionCard`).\n\n### Usage\n```html\n<MpListRow\n  v-for="item in activity"\n  :key="item.id"\n  :to="item.to"\n  variant="divided"\n  :eyebrow="item.time"\n  :title="item.title"\n  :meta="item.value"\n>\n  <template #lead><v-icon size="14">{{ item.icon }}</v-icon></template>\n</MpListRow>\n```\n\n### Geometry\nEverything comes from `component.listItem.*`. `minHeight` reuses\n`component.control.height` (40px), so a list row, a button and a form field all sit on\none baseline. `density="compact"` drops that floor for checklists and dense menus, where\na full control height reads loose rather than calm.\n\n### The tag is inferred\nPass `to` for a `RouterLink`, `href` for an anchor, `clickable` for a `<button>`, or\nnothing for a `<div>`. Consumers no longer need three hand-written branches per row —\nbinding an unconditional `:href` alongside RouterLink\'s `:to` used to clobber the href\nRouterLink computes internally, which is exactly the bug this removes.\n\n### 🟢 Do\'s\n- **Do** use `variant="divided"` for a feed inside a card — the hairline is drawn\n  *between* siblings, never above the first or below the last.\n- **Do** put the timestamp or count in `meta`; it right-aligns and renders tabular.\n\n### 🔴 Don\'ts\n- **Don\'t** re-implement a row because you need one different colour — pass a class and\n  style the `#lead` slot, as `ModuleLandingPage` does for its tinted activity chips.\n\n### A11y\n- **Provides:** interactive rows render as real links or buttons, so they are focusable\n  and keyboard-operable, and carry a visible `:focus-visible` ring.\n- **Consumer must:** give `#lead` icons `aria-hidden` (Vuetify\'s `v-icon` already does)\n  and make sure `title` reads sensibly on its own.\n        '}}},argTypes:{variant:{control:"inline-radio",options:["plain","divided","boxed"],description:"Structure: 'plain' (bare row), 'divided' (hairline between siblings), 'boxed' (each row its own bordered tile)."},emphasis:{control:"inline-radio",options:["default","prominent"],description:"Visual weight of the title. Shared system-wide vocabulary (P2-7)."},density:{control:"inline-radio",options:["default","compact"],description:"'default' holds the 40px control-height floor; 'compact' drops it for checklists and dense menus."},title:{control:"text",description:"Row title. Truncates with an ellipsis rather than wrapping."},eyebrow:{control:"text",description:"Muted line above the title."},meta:{control:"text",description:"Trailing muted value — right-aligned, tabular figures."},to:{control:!1,description:"Router target — renders the row as a RouterLink."},href:{control:!1,description:"External target — renders the row as an anchor."},clickable:{control:"boolean",description:"Renders the row as a <button> (use with @click)."}}},s={args:{title:"Spring Refresh sent to Segment A",eyebrow:"2m ago",meta:"58.2% open"}},t={render:()=>({components:{MpListRow:e},template:`
      <div class="d-flex flex-column ga-8">
        <div>
          <div class="text-caption text-medium-emphasis mb-2">plain</div>
          <MpListRow title="Verify sending domain" meta="Done" />
          <MpListRow title="Connect a contact list" meta="Done" />
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">divided</div>
          <MpListRow variant="divided" title="Spring Refresh sent" eyebrow="2m ago" meta="58.2% open" />
          <MpListRow variant="divided" title="Cart abandoned · Step 2" eyebrow="14m ago" meta="In flow" />
          <MpListRow variant="divided" title="VIP segment refreshed" eyebrow="32m ago" meta="+312" />
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">boxed</div>
          <div class="d-flex flex-column ga-2">
            <MpListRow variant="boxed" title="Find best send time for VIP segment" />
            <MpListRow variant="boxed" title="Generate subject line variants" />
          </div>
        </div>
      </div>
    `}),args:{}},i={render:()=>({components:{MpListRow:e},template:`
      <div class="d-flex flex-column ga-8">
        <div>
          <div class="text-caption text-medium-emphasis mb-2">density="default" — 40px floor, matches a button</div>
          <MpListRow variant="divided" title="Verify sending domain (DKIM, SPF)" />
          <MpListRow variant="divided" title="Connect a contact list" />
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">density="compact" — no floor, for checklists</div>
          <MpListRow density="compact" title="Verify sending domain (DKIM, SPF)" />
          <MpListRow density="compact" title="Connect a contact list" />
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">emphasis="prominent" — heavier title</div>
          <MpListRow emphasis="prominent" title="Spring Refresh sent to Segment A" eyebrow="2m ago" meta="58.2% open" />
        </div>
      </div>
    `}),args:{}},a={render:()=>({components:{MpListRow:e},template:`
      <div class="d-flex flex-column ga-8">
        <div>
          <div class="text-caption text-medium-emphasis mb-2">static — renders a &lt;div&gt;, no hover</div>
          <MpListRow title="Read-only row" meta="—" />
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">clickable — renders a &lt;button&gt;, hover + focus ring</div>
          <MpListRow clickable title="Click or tab to me" meta="→" />
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">href — renders an &lt;a&gt;</div>
          <MpListRow href="https://maropost.com" title="External link row" meta="↗" />
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">boxed + interactive — border reacts too</div>
          <MpListRow variant="boxed" clickable title="Boxed and clickable" />
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">long title — truncates rather than wrapping</div>
          <MpListRow
            title="An abandoned-cart automation that recovers revenue by nudging shoppers who left items behind"
            meta="2h ago"
          />
        </div>
      </div>
    `}),args:{}},n={render:()=>({components:{MpListRow:e},setup:()=>({items:[{icon:"mail",eyebrow:"2m ago",title:"Spring Refresh sent to Segment A · 12,408 recipients",meta:"58.2% open"},{icon:"workflow",eyebrow:"14m ago",title:"Cart abandoned · Step 2 enrolled 84 contacts",meta:"In flow"},{icon:"users",eyebrow:"32m ago",title:"VIP repeat buyers segment refreshed",meta:"+312"}]}),template:`
      <v-card flat border rounded="lg" style="padding-inline: var(--mp-component-card-paddingCompact);">
        <MpListRow
          v-for="item in items"
          :key="item.title"
          variant="divided"
          clickable
          :eyebrow="item.eyebrow"
          :title="item.title"
          :meta="item.meta"
        >
          <template #lead>
            <span style="
              width: var(--mp-space-28); height: var(--mp-space-28);
              display: flex; align-items: center; justify-content: center;
              border-radius: var(--mp-component-chip-radius);
              background: color-mix(in oklch, var(--accent) 14%, transparent);
              color: var(--accent-ink);
            "><v-icon size="14">{{ item.icon }}</v-icon></span>
          </template>
        </MpListRow>
      </v-card>
    `}),args:{}},o={render:()=>({components:{MpListRow:e},setup:()=>({items:[{label:"Verify sending domain (DKIM, SPF)",complete:!0},{label:"Connect a contact list",complete:!0},{label:"Send a test campaign",complete:!1},{label:"Set up a welcome journey",complete:!1}]}),template:`
      <div class="d-flex flex-column ga-1">
        <MpListRow v-for="i in items" :key="i.label" density="compact" :title="i.label">
          <template #lead>
            <v-icon size="14" :color="i.complete ? 'success' : undefined" class="text-medium-emphasis">
              {{ i.complete ? 'circle-check' : 'circle' }}
            </v-icon>
          </template>
        </MpListRow>
      </div>
    `}),args:{}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Spring Refresh sent to Segment A',
    eyebrow: '2m ago',
    meta: '58.2% open'
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      MpListRow
    },
    template: \`
      <div class="d-flex flex-column ga-8">
        <div>
          <div class="text-caption text-medium-emphasis mb-2">plain</div>
          <MpListRow title="Verify sending domain" meta="Done" />
          <MpListRow title="Connect a contact list" meta="Done" />
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">divided</div>
          <MpListRow variant="divided" title="Spring Refresh sent" eyebrow="2m ago" meta="58.2% open" />
          <MpListRow variant="divided" title="Cart abandoned · Step 2" eyebrow="14m ago" meta="In flow" />
          <MpListRow variant="divided" title="VIP segment refreshed" eyebrow="32m ago" meta="+312" />
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">boxed</div>
          <div class="d-flex flex-column ga-2">
            <MpListRow variant="boxed" title="Find best send time for VIP segment" />
            <MpListRow variant="boxed" title="Generate subject line variants" />
          </div>
        </div>
      </div>
    \`
  }),
  args: {} as never
}`,...t.parameters?.docs?.source},description:{story:"All three structures. `divided` only draws its hairline between siblings, so it needs a group to be visible.",...t.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      MpListRow
    },
    template: \`
      <div class="d-flex flex-column ga-8">
        <div>
          <div class="text-caption text-medium-emphasis mb-2">density="default" — 40px floor, matches a button</div>
          <MpListRow variant="divided" title="Verify sending domain (DKIM, SPF)" />
          <MpListRow variant="divided" title="Connect a contact list" />
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">density="compact" — no floor, for checklists</div>
          <MpListRow density="compact" title="Verify sending domain (DKIM, SPF)" />
          <MpListRow density="compact" title="Connect a contact list" />
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">emphasis="prominent" — heavier title</div>
          <MpListRow emphasis="prominent" title="Spring Refresh sent to Segment A" eyebrow="2m ago" meta="58.2% open" />
        </div>
      </div>
    \`
  }),
  args: {} as never
}`,...i.parameters?.docs?.source},description:{story:"There is no `size` prop — a row spans its container. The axes that vary are density\n(row height) and emphasis (title weight), shown together here.",...i.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      MpListRow
    },
    template: \`
      <div class="d-flex flex-column ga-8">
        <div>
          <div class="text-caption text-medium-emphasis mb-2">static — renders a &lt;div&gt;, no hover</div>
          <MpListRow title="Read-only row" meta="—" />
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">clickable — renders a &lt;button&gt;, hover + focus ring</div>
          <MpListRow clickable title="Click or tab to me" meta="→" />
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">href — renders an &lt;a&gt;</div>
          <MpListRow href="https://maropost.com" title="External link row" meta="↗" />
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">boxed + interactive — border reacts too</div>
          <MpListRow variant="boxed" clickable title="Boxed and clickable" />
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">long title — truncates rather than wrapping</div>
          <MpListRow
            title="An abandoned-cart automation that recovers revenue by nudging shoppers who left items behind"
            meta="2h ago"
          />
        </div>
      </div>
    \`
  }),
  args: {} as never
}`,...a.parameters?.docs?.source},description:{story:"Static vs interactive, and each tag the component can resolve to. Hover and focus a row to see the affordance.",...a.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      MpListRow
    },
    setup: () => ({
      items: [{
        icon: 'mail',
        eyebrow: '2m ago',
        title: 'Spring Refresh sent to Segment A · 12,408 recipients',
        meta: '58.2% open'
      }, {
        icon: 'workflow',
        eyebrow: '14m ago',
        title: 'Cart abandoned · Step 2 enrolled 84 contacts',
        meta: 'In flow'
      }, {
        icon: 'users',
        eyebrow: '32m ago',
        title: 'VIP repeat buyers segment refreshed',
        meta: '+312'
      }]
    }),
    template: \`
      <v-card flat border rounded="lg" style="padding-inline: var(--mp-component-card-paddingCompact);">
        <MpListRow
          v-for="item in items"
          :key="item.title"
          variant="divided"
          clickable
          :eyebrow="item.eyebrow"
          :title="item.title"
          :meta="item.meta"
        >
          <template #lead>
            <span style="
              width: var(--mp-space-28); height: var(--mp-space-28);
              display: flex; align-items: center; justify-content: center;
              border-radius: var(--mp-component-chip-radius);
              background: color-mix(in oklch, var(--accent) 14%, transparent);
              color: var(--accent-ink);
            "><v-icon size="14">{{ item.icon }}</v-icon></span>
          </template>
        </MpListRow>
      </v-card>
    \`
  }),
  args: {} as never
}`,...n.parameters?.docs?.source},description:{story:"The activity-feed shape, as ModuleLandingPage composes it: tinted lead glyph + eyebrow + meta.",...n.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      MpListRow
    },
    setup: () => ({
      items: [{
        label: 'Verify sending domain (DKIM, SPF)',
        complete: true
      }, {
        label: 'Connect a contact list',
        complete: true
      }, {
        label: 'Send a test campaign',
        complete: false
      }, {
        label: 'Set up a welcome journey',
        complete: false
      }]
    }),
    template: \`
      <div class="d-flex flex-column ga-1">
        <MpListRow v-for="i in items" :key="i.label" density="compact" :title="i.label">
          <template #lead>
            <v-icon size="14" :color="i.complete ? 'success' : undefined" class="text-medium-emphasis">
              {{ i.complete ? 'circle-check' : 'circle' }}
            </v-icon>
          </template>
        </MpListRow>
      </div>
    \`
  }),
  args: {} as never
}`,...o.parameters?.docs?.source},description:{story:"The setup-checklist shape: compact density, a state glyph in #lead, no meta.",...o.parameters?.docs?.description}}};const p=["Default","Variants","Sizes","States","ActivityFeed","Checklist"];export{n as ActivityFeed,o as Checklist,s as Default,i as Sizes,a as States,t as Variants,p as __namedExportsOrder,m as default};
