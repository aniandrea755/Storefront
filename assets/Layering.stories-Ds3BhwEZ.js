import{d2 as l,n as c,r as n}from"./iframe-BqHSr5b_.js";import{M as p}from"./MpRowActionsMenu-DfQDq_iX.js";import{M as m}from"./MpConfirmDialog-g8XCZO_Q.js";import{M as v}from"./MpFormDrawer-NT-xQk6b.js";import"./preload-helper-PPVm8Dsz.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./MpDialog-F4WZRRS8.js";import"./useScrollEdges-B2McRpMX.js";import"./useFocusTrap-oS9hmom4.js";const M={title:"Patterns/Layering",tags:["autodocs"],parameters:{docs:{description:{component:`
### Overview
\`Patterns/Layering\` is not a component — it is a proof file. Each story opens a real,
teleported Vuetify overlay (\`v-menu\`, \`v-tooltip\`, \`v-dialog\` via \`MpConfirmDialog\`) against a
container that could plausibly clip or out-stack it: a card grid, a data table with a sticky
header, a scrolling drawer-style body, and a form drawer. Every example ships already open (via
\`v-model\` or \`play()\`, same idiom as \`MpRowActionsMenu.stories.ts\`'s \`OpenMenu\`) so reviewers see
the actual stacking, not a description of it. See
\`docs/overlay-audit/01-overlay-component-audit.md\` §§4/6 for the full z-index token table and the
portal/teleport/clipping risk list this file works through.

**Use when:** verifying that a menu, tooltip, or dialog still renders above its surroundings
after a token, CSS, or Vuetify-version change — re-open this page in both themes before merging
anything that touches \`global.scss\`'s overlay rules or the \`--mp-zIndex-*\` tokens.

**Do not use when:** you need a component's own API/behavior docs — see \`MpRowActionsMenu\`,
\`MpConfirmDialog\`, \`MpFormDrawer\`, and \`MpToastStack\`'s own story files instead; this file only
proves stacking, not props, slots, or the rest of a component's contract.

### Usage
\`\`\`html
<!-- The pattern every example relies on: let Vuetify's teleport-based overlay system do
     the escaping. Never wrap an activator in a new stacking context (transform / filter /
     will-change) to "fix" a menu that looks clipped — the container is not the bug. -->
<div style="overflow: hidden;">
  <v-menu location="top end">
    <template #activator="{ props }">
      <v-btn v-bind="props" icon="more-vertical" />
    </template>
    <v-list><!-- ... --></v-list>
  </v-menu>
</div>
\`\`\`

### 🟢 Do's
- **Do** re-run this page after any change to \`--mp-zIndex-*\` tokens, \`global.scss\`'s overlay
  rules, or \`MpFormDrawer\`'s \`Teleport to="body"\` — it is the fastest way to catch a stacking
  regression before it reaches a real page.
- **Do** check both themes — L2/L3 surfaces collapse to the same white in light mode (audit §4),
  so a contrast regression can hide in light and only show in dark.
- **Do** trust Vuetify's own overlay z-index (\`dropdown\`/\`modal\` tokens are reference-only per
  the audit) — none of these examples override it.

### 🔴 Don'ts
- **Don't** add \`position: relative\` plus a manual \`z-index\` to a card, table, or drawer to
  "push a menu on top" — every teleported overlay already renders inside
  \`.v-overlay-container\` at the end of \`<body>\`, outside any local stacking context; a local
  z-index fix is solving the wrong layer.
- **Don't** assume \`overflow: hidden\` on a container will clip a nested \`v-menu\`/\`v-tooltip\` —
  only non-teleported content clips (audit §6); confirm against this page instead of guessing.
- **Don't** treat this file as a substitute for the destination component's own story.

### A11y
- **Provides:** every overlay here keeps its own component's contract untouched by the
  stacking scenario — \`MpConfirmDialog\`/\`MpFormDrawer\` still trap and restore focus, \`v-menu\`
  still closes on Escape and returns focus to its trigger, and \`v-tooltip\` stays reachable via
  keyboard focus on its activator, not hover-only.
- **Consumer must:** nothing extra — these are the same production components used elsewhere in
  the design system; this page only changes the container they are demonstrated against.
        `}}}},a={render:()=>({components:{MpRowActionsMenu:p},setup(){return{cards:[{id:"a",name:"Welcome Series",meta:"Journey · 3 steps"},{id:"b",name:"VIP Repeat Buyers",meta:"Segment · 312 contacts",constrained:!0},{id:"c",name:"Spring Refresh",meta:"Campaign · Sent"},{id:"d",name:"Cart Abandoned",meta:"Automation · Active"},{id:"e",name:"Signup Form — Footer",meta:"Form · 6 fields"},{id:"f",name:"April Loyalty Email",meta:"Template · Draft"}]}},template:`
      <div style="display: grid; grid-template-columns: repeat(3, minmax(150px, 1fr)); gap: 16px; max-width: 620px;">
        <v-card
          v-for="card in cards"
          :key="card.id"
          flat border rounded="lg"
          class="pa-4"
          :style="card.constrained ? 'overflow: hidden;' : undefined"
        >
          <div class="d-flex align-start justify-space-between ga-2">
            <div>
              <div class="text-body-2 font-weight-bold">{{ card.name }}</div>
              <div class="text-caption text-medium-emphasis mt-1">{{ card.meta }}</div>
            </div>
            <MpRowActionsMenu ariaLabel="Card actions" :itemLabel="card.name">
              <v-list-item prepend-icon="pencil" title="Edit"></v-list-item>
              <v-list-item prepend-icon="copy" title="Duplicate"></v-list-item>
              <v-divider class="my-1" style="opacity: 0.4"></v-divider>
              <v-list-item prepend-icon="trash-2" title="Delete" class="text-error"></v-list-item>
            </MpRowActionsMenu>
          </div>
        </v-card>
      </div>
    `}),play:async({canvasElement:e})=>{await new Promise(s=>setTimeout(s,300)),e.querySelector('[aria-label="Card actions for VIP Repeat Buyers"]')?.click()}},r={render:()=>({setup(){const e=n(!0),t=n(null),s=[{id:1,name:"MB-1041",date:"Jul 17, 2026",total:"$184.50"},{id:2,name:"MB-1040",date:"Jul 17, 2026",total:"$59.00"},{id:3,name:"MB-1039",date:"Jul 16, 2026",total:"$412.75"},{id:4,name:"MB-1038",date:"Jul 16, 2026",total:"$96.20"},{id:5,name:"MB-1037",date:"Jul 15, 2026",total:"$233.10"},{id:6,name:"MB-1036",date:"Jul 15, 2026",total:"$28.99"},{id:7,name:"MB-1035",date:"Jul 14, 2026",total:"$540.00"},{id:8,name:"MB-1034",date:"Jul 14, 2026",total:"$147.35"}];return l(async()=>{await c(),t.value&&(t.value.scrollTop=60)}),{menuOpen:e,scrollBody:t,rows:s}},template:`
      <div
        ref="scrollBody"
        style="max-width: 460px; max-height: 210px; overflow-y: auto; border: 1px solid var(--border-default); border-radius: 12px;"
      >
        <v-table density="comfortable">
          <thead>
            <tr>
              <th style="position: sticky; top: 0; z-index: var(--mp-zIndex-stickyHeader); background: var(--surface-primary); border-bottom: 1px solid var(--border-subtle);">Order</th>
              <th style="position: sticky; top: 0; z-index: var(--mp-zIndex-stickyHeader); background: var(--surface-primary); border-bottom: 1px solid var(--border-subtle);">Date</th>
              <th class="text-right" style="position: sticky; top: 0; z-index: var(--mp-zIndex-stickyHeader); background: var(--surface-primary); border-bottom: 1px solid var(--border-subtle);">Total</th>
              <th style="position: sticky; top: 0; z-index: var(--mp-zIndex-stickyHeader); background: var(--surface-primary); border-bottom: 1px solid var(--border-subtle); width: 48px;"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in rows" :key="row.id">
              <td class="text-primary font-weight-bold">{{ row.name }}</td>
              <td class="text-medium-emphasis">{{ row.date }}</td>
              <td class="text-right font-weight-semibold">{{ row.total }}</td>
              <td class="text-right">
                <v-menu v-if="row.id === 3" v-model="menuOpen" location="top end">
                  <template #activator="{ props }">
                    <v-btn v-bind="props" icon="more-vertical" variant="text" size="x-small" aria-label="MB-1039 actions"></v-btn>
                  </template>
                  <v-list density="compact" min-width="170">
                    <v-list-item prepend-icon="eye" title="View order"></v-list-item>
                    <v-list-item prepend-icon="printer" title="Print invoice"></v-list-item>
                    <v-divider class="my-1" style="opacity: 0.4"></v-divider>
                    <v-list-item prepend-icon="ban" title="Cancel order" class="text-error"></v-list-item>
                  </v-list>
                </v-menu>
                <v-btn v-else icon="more-vertical" variant="text" size="x-small" :aria-label="row.name + ' actions'"></v-btn>
              </td>
            </tr>
          </tbody>
        </v-table>
      </div>
    `})},o={render:()=>({setup(){const e=n(!0),t=Array.from({length:10},(s,d)=>d+1);return{tooltipOpen:e,items:t}},template:`
      <div
        style="max-width: 360px; height: 200px; overflow-y: auto; border: 1px solid var(--border-default); border-radius: 12px; padding: 4px 16px; background: var(--surface-primary);"
      >
        <div v-for="n in items" :key="n" class="d-flex align-center justify-space-between py-2">
          <span class="text-body-2">Segment rule {{ n }}</span>
          <v-tooltip
            v-if="n === 5"
            v-model="tooltipOpen"
            location="bottom"
            text="Escapes the scroll container's overflow-y: auto via Vuetify's teleport-based overlay — not clipped at the edge."
          >
            <template #activator="{ props }">
              <v-icon v-bind="props" size="18" class="text-medium-emphasis">info</v-icon>
            </template>
          </v-tooltip>
          <v-icon v-else size="18" class="text-medium-emphasis" style="opacity: 0.35;">info</v-icon>
        </div>
      </div>
    `})},i={render:()=>({components:{MpFormDrawer:v,MpConfirmDialog:m},setup(){const e=n(!0),t=n(!0);return{drawerOpen:e,confirmOpen:t}},template:`
      <div style="min-height: 480px; background: rgb(var(--v-theme-background)); padding: 24px;">
        <MpFormDrawer v-model="drawerOpen" title="Edit campaign details" subtitle="Welcome Series — Step 2">
          <div class="d-flex flex-column ga-4">
            <v-text-field label="Campaign name" model-value="Welcome Series — Step 2" variant="outlined" density="comfortable" hide-details></v-text-field>
            <v-textarea label="Subject line" model-value="Thanks for joining us!" variant="outlined" density="comfortable" rows="2" hide-details></v-textarea>
          </div>
          <template #footer>
            <v-btn variant="text" class="text-none" @click="confirmOpen = true">Cancel</v-btn>
            <v-btn color="primary" variant="flat" class="text-none">Save</v-btn>
          </template>
        </MpFormDrawer>

        <MpConfirmDialog
          v-model="confirmOpen"
          title="Discard unsaved changes?"
          message="You have unsaved edits to this campaign. Closing now will discard them."
          confirm-label="Discard"
          danger
          @confirm="drawerOpen = false"
        />
      </div>
    `})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      MpRowActionsMenu
    },
    setup() {
      const cards = [{
        id: 'a',
        name: 'Welcome Series',
        meta: 'Journey · 3 steps'
      }, {
        id: 'b',
        name: 'VIP Repeat Buyers',
        meta: 'Segment · 312 contacts',
        constrained: true
      }, {
        id: 'c',
        name: 'Spring Refresh',
        meta: 'Campaign · Sent'
      }, {
        id: 'd',
        name: 'Cart Abandoned',
        meta: 'Automation · Active'
      }, {
        id: 'e',
        name: 'Signup Form — Footer',
        meta: 'Form · 6 fields'
      }, {
        id: 'f',
        name: 'April Loyalty Email',
        meta: 'Template · Draft'
      }];
      return {
        cards
      };
    },
    template: \`
      <div style="display: grid; grid-template-columns: repeat(3, minmax(150px, 1fr)); gap: 16px; max-width: 620px;">
        <v-card
          v-for="card in cards"
          :key="card.id"
          flat border rounded="lg"
          class="pa-4"
          :style="card.constrained ? 'overflow: hidden;' : undefined"
        >
          <div class="d-flex align-start justify-space-between ga-2">
            <div>
              <div class="text-body-2 font-weight-bold">{{ card.name }}</div>
              <div class="text-caption text-medium-emphasis mt-1">{{ card.meta }}</div>
            </div>
            <MpRowActionsMenu ariaLabel="Card actions" :itemLabel="card.name">
              <v-list-item prepend-icon="pencil" title="Edit"></v-list-item>
              <v-list-item prepend-icon="copy" title="Duplicate"></v-list-item>
              <v-divider class="my-1" style="opacity: 0.4"></v-divider>
              <v-list-item prepend-icon="trash-2" title="Delete" class="text-error"></v-list-item>
            </MpRowActionsMenu>
          </div>
        </v-card>
      </div>
    \`
  }),
  // The "VIP Repeat Buyers" card carries overflow: hidden — open its menu on load to prove
  // the menu (teleported to <body>) escapes that card's own clipping and the whole grid.
  play: async ({
    canvasElement
  }) => {
    await new Promise(resolve => setTimeout(resolve, 300));
    const trigger = canvasElement.querySelector<HTMLElement>('[aria-label="Card actions for VIP Repeat Buyers"]');
    trigger?.click();
  }
}`,...a.parameters?.docs?.source},description:{story:"Proves a card's row-action menu is not clipped by a neighboring card's own\n`overflow: hidden` — the menu paints in front of the whole grid regardless.",...a.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => ({
    setup() {
      const menuOpen = ref(true);
      const scrollBody = ref<HTMLElement | null>(null);
      const rows = [{
        id: 1,
        name: 'MB-1041',
        date: 'Jul 17, 2026',
        total: '$184.50'
      }, {
        id: 2,
        name: 'MB-1040',
        date: 'Jul 17, 2026',
        total: '$59.00'
      }, {
        id: 3,
        name: 'MB-1039',
        date: 'Jul 16, 2026',
        total: '$412.75'
      }, {
        id: 4,
        name: 'MB-1038',
        date: 'Jul 16, 2026',
        total: '$96.20'
      }, {
        id: 5,
        name: 'MB-1037',
        date: 'Jul 15, 2026',
        total: '$233.10'
      }, {
        id: 6,
        name: 'MB-1036',
        date: 'Jul 15, 2026',
        total: '$28.99'
      }, {
        id: 7,
        name: 'MB-1035',
        date: 'Jul 14, 2026',
        total: '$540.00'
      }, {
        id: 8,
        name: 'MB-1034',
        date: 'Jul 14, 2026',
        total: '$147.35'
      }];
      // Pre-scroll so the sticky header is proven mid-scroll (not just a plain top header),
      // with the open-menu row landing directly beneath it.
      onMounted(async () => {
        await nextTick();
        if (scrollBody.value) scrollBody.value.scrollTop = 60;
      });
      return {
        menuOpen,
        scrollBody,
        rows
      };
    },
    template: \`
      <div
        ref="scrollBody"
        style="max-width: 460px; max-height: 210px; overflow-y: auto; border: 1px solid var(--border-default); border-radius: 12px;"
      >
        <v-table density="comfortable">
          <thead>
            <tr>
              <th style="position: sticky; top: 0; z-index: var(--mp-zIndex-stickyHeader); background: var(--surface-primary); border-bottom: 1px solid var(--border-subtle);">Order</th>
              <th style="position: sticky; top: 0; z-index: var(--mp-zIndex-stickyHeader); background: var(--surface-primary); border-bottom: 1px solid var(--border-subtle);">Date</th>
              <th class="text-right" style="position: sticky; top: 0; z-index: var(--mp-zIndex-stickyHeader); background: var(--surface-primary); border-bottom: 1px solid var(--border-subtle);">Total</th>
              <th style="position: sticky; top: 0; z-index: var(--mp-zIndex-stickyHeader); background: var(--surface-primary); border-bottom: 1px solid var(--border-subtle); width: 48px;"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in rows" :key="row.id">
              <td class="text-primary font-weight-bold">{{ row.name }}</td>
              <td class="text-medium-emphasis">{{ row.date }}</td>
              <td class="text-right font-weight-semibold">{{ row.total }}</td>
              <td class="text-right">
                <v-menu v-if="row.id === 3" v-model="menuOpen" location="top end">
                  <template #activator="{ props }">
                    <v-btn v-bind="props" icon="more-vertical" variant="text" size="x-small" aria-label="MB-1039 actions"></v-btn>
                  </template>
                  <v-list density="compact" min-width="170">
                    <v-list-item prepend-icon="eye" title="View order"></v-list-item>
                    <v-list-item prepend-icon="printer" title="Print invoice"></v-list-item>
                    <v-divider class="my-1" style="opacity: 0.4"></v-divider>
                    <v-list-item prepend-icon="ban" title="Cancel order" class="text-error"></v-list-item>
                  </v-list>
                </v-menu>
                <v-btn v-else icon="more-vertical" variant="text" size="x-small" :aria-label="row.name + ' actions'"></v-btn>
              </td>
            </tr>
          </tbody>
        </v-table>
      </div>
    \`
  })
}`,...r.parameters?.docs?.source},description:{story:"Proves a row-action menu renders above the table's sticky header (position: sticky +\nthe `--mp-zIndex-stickyHeader` token, same pattern as DashboardTableWidget.vue) instead\nof being trapped behind it.",...r.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => ({
    setup() {
      const tooltipOpen = ref(true);
      const items = Array.from({
        length: 10
      }, (_, i) => i + 1);
      return {
        tooltipOpen,
        items
      };
    },
    template: \`
      <div
        style="max-width: 360px; height: 200px; overflow-y: auto; border: 1px solid var(--border-default); border-radius: 12px; padding: 4px 16px; background: var(--surface-primary);"
      >
        <div v-for="n in items" :key="n" class="d-flex align-center justify-space-between py-2">
          <span class="text-body-2">Segment rule {{ n }}</span>
          <v-tooltip
            v-if="n === 5"
            v-model="tooltipOpen"
            location="bottom"
            text="Escapes the scroll container's overflow-y: auto via Vuetify's teleport-based overlay — not clipped at the edge."
          >
            <template #activator="{ props }">
              <v-icon v-bind="props" size="18" class="text-medium-emphasis">info</v-icon>
            </template>
          </v-tooltip>
          <v-icon v-else size="18" class="text-medium-emphasis" style="opacity: 0.35;">info</v-icon>
        </div>
      </div>
    \`
  })
}`,...o.parameters?.docs?.source},description:{story:"Proves a tooltip near a scroll container's edge is not clipped by the container's\n`overflow-y: auto` — Vuetify's teleport-based overlay escapes it instead of being cut off.",...o.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      MpFormDrawer,
      MpConfirmDialog
    },
    setup() {
      const drawerOpen = ref(true);
      const confirmOpen = ref(true);
      return {
        drawerOpen,
        confirmOpen
      };
    },
    template: \`
      <div style="min-height: 480px; background: rgb(var(--v-theme-background)); padding: 24px;">
        <MpFormDrawer v-model="drawerOpen" title="Edit campaign details" subtitle="Welcome Series — Step 2">
          <div class="d-flex flex-column ga-4">
            <v-text-field label="Campaign name" model-value="Welcome Series — Step 2" variant="outlined" density="comfortable" hide-details></v-text-field>
            <v-textarea label="Subject line" model-value="Thanks for joining us!" variant="outlined" density="comfortable" rows="2" hide-details></v-textarea>
          </div>
          <template #footer>
            <v-btn variant="text" class="text-none" @click="confirmOpen = true">Cancel</v-btn>
            <v-btn color="primary" variant="flat" class="text-none">Save</v-btn>
          </template>
        </MpFormDrawer>

        <MpConfirmDialog
          v-model="confirmOpen"
          title="Discard unsaved changes?"
          message="You have unsaved edits to this campaign. Closing now will discard them."
          confirm-label="Discard"
          danger
          @confirm="drawerOpen = false"
        />
      </div>
    \`
  })
}`,...i.parameters?.docs?.source},description:{story:`Proves MpConfirmDialog stacks correctly above an open MpFormDrawer instead of being
trapped behind its scrim — a "discard changes" confirm over a form drawer.`,...i.parameters?.docs?.description}}};const D=["MenuOverCardGrid","MenuOverStickyHeaderTable","TooltipInScrollContainer","DialogInsideFormDrawer"];export{i as DialogInsideFormDrawer,a as MenuOverCardGrid,r as MenuOverStickyHeaderTable,o as TooltipInScrollContainer,D as __namedExportsOrder,M as default};
