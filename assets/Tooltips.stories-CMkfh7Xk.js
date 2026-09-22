const i={title:"Foundations/Tooltips",tags:["autodocs"],parameters:{docs:{description:{component:`
### Overview
Tooltips in this app are **stock Vuetify \`v-tooltip\`s** — there is no \`MpTooltip\` wrapper.
Their timing comes entirely from the shared \`VTooltip\` defaults in
\`src/plugins/maropostTheme.ts\`: \`location: 'top'\`, \`openDelay: 150\`, \`closeDelay: 0\`. Every
icon-only control should be wrapped in a \`v-tooltip\` whose text equals its \`aria-label\`,
keeping the accessible name and the visible hint in sync by construction (see
\`docs/ui-system-audit/00-reference-research.md\`, section 7).

**Use when:** a control's purpose isn't obvious from a visible label alone — icon-only
buttons, or a control that carries a keyboard shortcut worth surfacing.

**Do not use when:** the content is essential to complete the task. Tooltips don't reach
touch users or reliably reach screen-reader users on their own — put anything essential in
a visible label, helper text, or \`MpEmptyState\`/\`MpErrorState\` instead.

### Usage
\`\`\`html
<v-tooltip text="Delete campaign">
  <template #activator="{ props }">
    <v-btn v-bind="props" icon="trash-2" variant="text" color="error" aria-label="Delete campaign" />
  </template>
</v-tooltip>
\`\`\`

### 🟢 Do's
- **Do** keep tooltip text 2–6 words, sentence case, no period — and identical to the
  activator's \`aria-label\`.
- **Do** let the shared default place the tooltip (\`location="top"\`); only override
  \`location\` when the trigger sits near a viewport edge and top would clip or invert.
- **Do** render a keyboard shortcut as a small chip beside the tooltip text, never
  concatenated into the same string (e.g. not \`"Search ⌘K"\` as one run of text).

### 🔴 Don'ts
- **Don't** build a new tooltip wrapper component — use \`v-tooltip\` directly at every call site.
- **Don't** put paragraphs or multi-sentence copy in a tooltip; that belongs in a popover,
  drawer, or inline help text.
- **Don't** rely on a tooltip alone to label a truly \`disabled\` control — disabled elements
  don't fire the hover/focus events \`v-tooltip\`'s activator listens for (see
  \`DisabledControl\` below for the workaround).

### A11y
- **Provides:** the shared \`VTooltip\` default opens on both mouse hover and keyboard focus
  out of the box (Vuetify's activator opens on \`:focus-visible\` whenever \`openOnHover\` is on
  — no extra wiring needed), and \`openDelay: 150\` avoids flashing a tooltip on every
  incidental mouse pass.
- **Consumer must:** give the activator its own \`aria-label\` (or visible text) that matches
  the tooltip content, and route truly disabled controls through the wrapping-\`<span>\`
  pattern so the tooltip can still fire — Vuetify's own \`.v-btn--disabled\` sets
  \`pointer-events: none\`, so hover/focus falls through to the span around it.
        `}}}},t={render:()=>({template:`
      <div class="d-flex flex-wrap ga-8" style="padding: 48px;">
        <div class="d-flex flex-column align-center ga-2">
          <v-tooltip text="Settings" location="top">
            <template #activator="{ props }">
              <v-btn v-bind="props" icon="settings" variant="text" aria-label="Settings" />
            </template>
          </v-tooltip>
          <span class="text-caption text-medium-emphasis">location="top" (default)</span>
        </div>
        <div class="d-flex flex-column align-center ga-2">
          <v-tooltip text="Refresh data" location="bottom">
            <template #activator="{ props }">
              <v-btn v-bind="props" icon="refresh-cw" variant="text" aria-label="Refresh data" />
            </template>
          </v-tooltip>
          <span class="text-caption text-medium-emphasis">location="bottom"</span>
        </div>
        <div class="d-flex flex-column align-center ga-2">
          <v-tooltip text="Filter results" location="left">
            <template #activator="{ props }">
              <v-btn v-bind="props" icon="filter" variant="text" aria-label="Filter results" />
            </template>
          </v-tooltip>
          <span class="text-caption text-medium-emphasis">location="left"</span>
        </div>
        <div class="d-flex flex-column align-center ga-2">
          <v-tooltip text="More options" location="right">
            <template #activator="{ props }">
              <v-btn v-bind="props" icon="more-horizontal" variant="text" aria-label="More options" />
            </template>
          </v-tooltip>
          <span class="text-caption text-medium-emphasis">location="right"</span>
        </div>
      </div>
    `})},e={render:()=>({template:`
      <div class="d-flex justify-center" style="padding: 48px;">
        <v-tooltip text="Exports every column currently visible in this table, including any custom fields you've added">
          <template #activator="{ props }">
            <v-btn v-bind="props" icon="download" variant="text" aria-label="Export all visible columns" />
          </template>
        </v-tooltip>
      </div>
    `})},o={render:()=>({template:`
      <div style="padding: 48px;">
        <p class="text-caption text-medium-emphasis mb-4">
          Click into this canvas, then press Tab — the tooltip opens on focus, no hover required.
        </p>
        <div class="d-flex ga-4">
          <v-btn variant="outlined" class="text-none">Focus me first</v-btn>
          <v-tooltip text="Duplicate campaign">
            <template #activator="{ props }">
              <v-btn v-bind="props" icon="copy" variant="text" aria-label="Duplicate campaign" />
            </template>
          </v-tooltip>
        </div>
      </div>
    `})},a={render:()=>({template:`
      <div style="padding: 48px;">
        <v-tooltip text="Requires an active plan">
          <template #activator="{ props }">
            <span v-bind="props">
              <v-btn icon="rocket" variant="text" disabled aria-label="Launch campaign (requires an active plan)" />
            </span>
          </template>
        </v-tooltip>
      </div>
    `})},n={render:()=>({template:`
      <div class="d-flex justify-center" style="padding: 48px;">
        <v-tooltip location="bottom">
          <template #activator="{ props }">
            <v-btn v-bind="props" icon="search" variant="text" aria-label="Search" />
          </template>
          <div class="d-flex align-center ga-2">
            <span>Search</span>
            <v-chip size="x-small" variant="outlined" class="text-none">⌘K</v-chip>
          </div>
        </v-tooltip>
      </div>
    `})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <div class="d-flex flex-wrap ga-8" style="padding: 48px;">
        <div class="d-flex flex-column align-center ga-2">
          <v-tooltip text="Settings" location="top">
            <template #activator="{ props }">
              <v-btn v-bind="props" icon="settings" variant="text" aria-label="Settings" />
            </template>
          </v-tooltip>
          <span class="text-caption text-medium-emphasis">location="top" (default)</span>
        </div>
        <div class="d-flex flex-column align-center ga-2">
          <v-tooltip text="Refresh data" location="bottom">
            <template #activator="{ props }">
              <v-btn v-bind="props" icon="refresh-cw" variant="text" aria-label="Refresh data" />
            </template>
          </v-tooltip>
          <span class="text-caption text-medium-emphasis">location="bottom"</span>
        </div>
        <div class="d-flex flex-column align-center ga-2">
          <v-tooltip text="Filter results" location="left">
            <template #activator="{ props }">
              <v-btn v-bind="props" icon="filter" variant="text" aria-label="Filter results" />
            </template>
          </v-tooltip>
          <span class="text-caption text-medium-emphasis">location="left"</span>
        </div>
        <div class="d-flex flex-column align-center ga-2">
          <v-tooltip text="More options" location="right">
            <template #activator="{ props }">
              <v-btn v-bind="props" icon="more-horizontal" variant="text" aria-label="More options" />
            </template>
          </v-tooltip>
          <span class="text-caption text-medium-emphasis">location="right"</span>
        </div>
      </div>
    \`
  })
}`,...t.parameters?.docs?.source},description:{story:"All four `location` values on plain icon buttons. The shared default is `top` — the other\nthree are opt-in overrides for triggers near an edge where `top` would clip or invert.",...t.parameters?.docs?.description}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <div class="d-flex justify-center" style="padding: 48px;">
        <v-tooltip text="Exports every column currently visible in this table, including any custom fields you've added">
          <template #activator="{ props }">
            <v-btn v-bind="props" icon="download" variant="text" aria-label="Export all visible columns" />
          </template>
        </v-tooltip>
      </div>
    \`
  })
}`,...e.parameters?.docs?.source},description:{story:`Longer-than-recommended tooltip text (an edge case, not the house style) to confirm it
wraps inside Vuetify's tooltip surface instead of overflowing or clipping.`,...e.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <div style="padding: 48px;">
        <p class="text-caption text-medium-emphasis mb-4">
          Click into this canvas, then press Tab — the tooltip opens on focus, no hover required.
        </p>
        <div class="d-flex ga-4">
          <v-btn variant="outlined" class="text-none">Focus me first</v-btn>
          <v-tooltip text="Duplicate campaign">
            <template #activator="{ props }">
              <v-btn v-bind="props" icon="copy" variant="text" aria-label="Duplicate campaign" />
            </template>
          </v-tooltip>
        </div>
      </div>
    \`
  })
}`,...o.parameters?.docs?.source},description:{story:`Tab into this canvas — the shared default opens the tooltip on keyboard focus, not only
on hover, so keyboard users get the same hint as mouse users. This is Vuetify's built-in
activator behavior; nothing extra is wired up for it.`,...o.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <div style="padding: 48px;">
        <v-tooltip text="Requires an active plan">
          <template #activator="{ props }">
            <span v-bind="props">
              <v-btn icon="rocket" variant="text" disabled aria-label="Launch campaign (requires an active plan)" />
            </span>
          </template>
        </v-tooltip>
      </div>
    \`
  })
}`,...a.parameters?.docs?.source},description:{story:"A truly `disabled` v-btn never fires hover or focus, so a tooltip bound to it directly\nwould never open. Vuetify's own `.v-btn--disabled` rule sets `pointer-events: none`, so\nwrapping the button in a plain `<span>` and putting the tooltip's activator props on the\nspan (not the button) lets hover/focus fall through to the span instead — no new wrapper\ncomponent, just where the activator props land.",...a.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <div class="d-flex justify-center" style="padding: 48px;">
        <v-tooltip location="bottom">
          <template #activator="{ props }">
            <v-btn v-bind="props" icon="search" variant="text" aria-label="Search" />
          </template>
          <div class="d-flex align-center ga-2">
            <span>Search</span>
            <v-chip size="x-small" variant="outlined" class="text-none">⌘K</v-chip>
          </div>
        </v-tooltip>
      </div>
    \`
  })
}`,...n.parameters?.docs?.source},description:{story:"A shortcut rendered as a chip beside the tooltip text, inside the tooltip surface — never\nconcatenated into the string itself. Mirrors the `appbar-search-cmd` kbd-chip idea in\n`src/components/layout/AppBar.vue` (a small bordered pill next to the label); that class is\nscoped to `AppBar.vue` itself, so this story uses a stock `v-chip` for the same visual\nelsewhere rather than reaching into another component's scoped styles.",...n.parameters?.docs?.description}}};const s=["Placements","LongText","KeyboardFocusTrigger","DisabledControl","WithShortcutChip"];export{a as DisabledControl,o as KeyboardFocusTrigger,e as LongText,t as Placements,n as WithShortcutChip,s as __namedExportsOrder,i as default};
