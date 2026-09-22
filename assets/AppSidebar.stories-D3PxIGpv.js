import{A as t,a as u}from"./AppSidebar-BHr0Bw84.js";import{M as h}from"./MpPageHeader-DvEYTUk7.js";import{M as v}from"./MpDataTableToolbar-2XPmr9xo.js";import{M as b}from"./MpStatusChip-Cvm9kx4z.js";import{b as g,d as y}from"./fixtures-JszyI_e-.js";import{r as a}from"./iframe-BqHSr5b_.js";import{a as f}from"./decorators-DmUOp7kZ.js";import"./useAccounts-BNKGYLRf.js";import"./useCopilot-Dk9L7vKg.js";import"./useUserProfile-CiWBSKP8.js";import"./useAppTheme-d8BR_Qbt.js";import"./useToast-D0O_SpbR.js";import"./useToastStackTimers-CbTd3XmR.js";import"./DvOrbitOrb-CursqOcX.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./MpNotificationsMenu-C4gumWrE.js";import"./MpEmptyState-WqesgUXi.js";import"./MpIllustration-7mikb6DB.js";import"./useNotifications-DDqnt56P.js";import"./MpListRow-Cp1HcjrS.js";import"./MpSegmentedControl-O78n2lBW.js";import"./PlgTrialChip-C1I0pLGc.js";import"./usePlg-ML6QTG6m.js";import"./PlgTalkToSalesDialog-Uyjcz-oU.js";import"./MpDialog-F4WZRRS8.js";import"./useScrollEdges-B2McRpMX.js";import"./MpFormGrid-D0pxdSe6.js";import"./useTrialLab-fw30bCL2.js";import"./trialLabData-Bky5uwx1.js";import"./useOnboarding-rnLK_TX1.js";import"./MpFormDrawer-NT-xQk6b.js";import"./useFocusTrap-oS9hmom4.js";import"./MpFormField-eWrsvwna.js";import"./preload-helper-PPVm8Dsz.js";const ee={title:"Patterns/App Shell/AppSidebar",component:t,tags:["autodocs"],decorators:[f],parameters:{canvas:"full",sidebarSkin:"gray",docs:{description:{component:`
### Overview
\`AppSidebar\` is the primary left-hand navigation of the Maropost platform. It supports two
modes: expanded (240px, labels + expandable module groups) and rail (64px, icons with hover
flyout menus). A \`temporary\` prop switches it to an overlay drawer with scrim for small
viewports (App.vue flips it below the md breakpoint).

**Chrome:** the panel is painted by a skin (\`<html data-sidebar="gray|white|dark">\`) that
shares the \`--mp-nav-surface\` bind with \`AppBar\`, so the two navs never drift. The skin only
differentiates **light** mode — in the app's dark theme all three resolve to the same charcoal
treatment sourced from the \`dark\` token ramp (\`sidebar-dark.css\`).

**Store coupling:** \`useAccounts\` — the account id resolved from the route (or the active
account) builds every nav path, and subscription keys gate locked modules (Crown badge). The
Storybook preview registers Pinia with seeded defaults and a catch-all route, which is all the
sidebar needs (it navigates by path, not by route name).

**Use when:** composing the app shell — exactly once, inside \`v-layout\`, before \`AppBar\`
and \`v-main\` (see \`App.vue\`).

**Don't use when:** a module needs local sub-navigation (Settings, Retail and
Merchandising all use \`MpSectionRail\`), or the surface is full-page (builders
hide the shell entirely).

### Usage
\`\`\`html
<AppSidebar
  v-model="drawer"
  :rail="sidebarRail"
  :temporary="isMobile"
  @update:rail="rail = $event"
/>
\`\`\`

### 🟢 Do's
- **Do** use rail mode on smaller desktop viewports and \`temporary\` on mobile.
- **Do** wrap it in a \`v-layout\` alongside \`AppBar\` and \`v-main\` for proper page structure.
- **Do** keep administrative surfaces in the app bar/user menu when they are utilities rather
  than primary navigation.

### 🔴 Don'ts
- **Don't** add Settings back into the sidebar; use the app bar/user menu entry instead.
- **Don't** put page-specific actions in the sidebar. Navigation only.
- **Don't** render more than one sidebar per page.

### 💡 Best Practices
- **Widths:** 240px expanded, 64px rail (fixed via \`width\`/\`rail-width\` on the underlying
  \`v-navigation-drawer\`).
- **Locked modules:** groups whose \`requires\` subscription the active account lacks render a
  Crown marker and route to an upsell instead of the module.

### A11y
- **Provides:** the underlying \`v-navigation-drawer\` renders as a \`<nav>\` landmark named
  "Main navigation" via \`aria-label\` *(named in the Phase 4 a11y pass)*; brand,
  collapse-toggle, and apps-toggle buttons all carry \`aria-label\`s; nav entries are
  router-linked \`v-list-item\`s with keyboard focus and Enter activation; the rail flyout panel
  has \`role="menu"\` with a group-specific \`aria-label\`, and cascade triggers expose
  \`aria-expanded\`.
- **Consumer must:** pair it with the shell's skip link and \`v-main\` landmark, and pass
  \`temporary\` on small viewports so the scrim/dismiss behavior is available.
- **Gaps:** rail-mode flyouts open on hover/click of the icon but are not reachable purely by
  keyboard in rail mode (hover-driven cascade — backlog, needs a focus-driven flyout rework);
  the active module is conveyed by color/weight without \`aria-current\` on group headers
  (backlog); locked (Crown) items don't announce that they are locked (backlog).
        `}}},argTypes:{modelValue:{control:"boolean",description:"v-model — sidebar visibility (relevant with temporary; the permanent drawer stays mounted)."},rail:{control:"boolean",description:"v-model:rail — collapse to the 64px icon-only rail with hover flyouts."},temporary:{control:"boolean",description:"Overlay drawer with scrim instead of a permanent column — used below the md breakpoint."}}},m={args:{modelValue:!0,rail:!1},render:()=>({components:{AppSidebar:t},setup(){const e=a(!0),r=a(!1);return{open:e,rail:r}},template:`
      <v-layout style="height: 600px;" class="bg-surface">
        <AppSidebar v-model="open" v-model:rail="rail" />
        <v-main class="pa-6">
          <p class="text-body-1">Sidebar is <strong>expanded</strong> (240px). Toggle the rail prop to collapse it.</p>
        </v-main>
      </v-layout>
    `})},c={args:{modelValue:!0,rail:!0},render:()=>({components:{AppSidebar:t},setup(){const e=a(!0),r=a(!0);return{open:e,rail:r}},template:`
      <v-layout style="height: 600px;" class="bg-surface">
        <AppSidebar v-model="open" v-model:rail="rail" />
        <v-main class="pa-6">
          <p class="text-body-1">Sidebar is in <strong>rail mode</strong> (icon-only, 64px). Hovering a module icon opens its flyout menu.</p>
        </v-main>
      </v-layout>
    `})},s={args:{modelValue:!0,rail:!1},parameters:{sidebarSkin:"white"},globals:{theme:"light"},render:()=>({components:{AppSidebar:t},setup(){const e=a(!0),r=a(!1);return{open:e,rail:r}},template:`
      <v-layout style="height: 600px;" class="bg-surface">
        <AppSidebar v-model="open" v-model:rail="rail" />
        <v-main class="pa-6">
          <p class="text-body-1">The <strong>white</strong> skin — white nav chrome, gray canvas.</p>
        </v-main>
      </v-layout>
    `})},n={args:{modelValue:!0,rail:!1},parameters:{sidebarSkin:"dark"},globals:{theme:"light"},render:()=>({components:{AppSidebar:t},setup(){const e=a(!0),r=a(!1);return{open:e,rail:r}},template:`
      <v-layout style="height: 600px;" class="bg-surface">
        <AppSidebar v-model="open" v-model:rail="rail" />
        <v-main class="pa-6">
          <p class="text-body-1">The <strong>dark</strong> skin on a light app theme.</p>
        </v-main>
      </v-layout>
    `})},o={args:{modelValue:!0,rail:!1,temporary:!0},globals:{viewport:{value:"mobile375",isRotated:!1}},render:()=>({components:{AppSidebar:t},setup(){const e=a(!0),r=a(!1);return{open:e,rail:r}},template:`
      <v-layout style="min-height: 700px;" class="bg-surface">
        <AppSidebar v-model="open" v-model:rail="rail" temporary />
        <v-main class="pa-4">
          <v-btn variant="outlined" prepend-icon="panel-left" @click="open = true">Open sidebar</v-btn>
          <p class="text-body-2 text-medium-emphasis mt-4">
            Temporary mode overlays the content with a scrim instead of reserving a column.
          </p>
        </v-main>
      </v-layout>
    `})},i={render:()=>({components:{AppSidebar:t},template:`
      <div class="d-flex ga-6 align-stretch" style="min-height: 560px">
        <div>
          <div class="text-caption text-medium-emphasis mb-2">expanded — 248px (layout.sidebarWidth)</div>
          <AppSidebar :model-value="true" :rail="false" />
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">rail — 72px (layout.sidebarRailWidth)</div>
          <AppSidebar :model-value="true" :rail="true" />
        </div>
      </div>
    `}),args:{}},l={render:()=>({components:{AppSidebar:t},template:`
      <div class="d-flex ga-6 align-stretch" style="min-height: 520px">
        <AppSidebar :model-value="true" :rail="false" />
        <AppSidebar :model-value="true" :rail="true" />
      </div>
    `}),args:{}},p={render:()=>({components:{AppSidebar:t},template:`
      <div class="d-flex ga-6 align-stretch" style="min-height: 560px">
        <AppSidebar :model-value="true" :rail="false" />
        <div class="pt-6 text-body-2 text-medium-emphasis" style="max-width: 320px">
          Hover a parent row to reveal its chevron, click to open the flyout, and tab through
          the list to see the focus ring. The active row is whichever matches the current route.
        </div>
      </div>
    `}),args:{}},d={render:()=>({components:{AppSidebar:t,AppBar:u,MpPageHeader:h,MpDataTableToolbar:v,MpStatusChip:b},setup:()=>({rows:y.slice(0,5),headers:g.filter(e=>e.key!=="actions")}),template:`
      <div class="d-flex align-stretch" style="min-height: 640px; background: var(--surface-canvas)">
        <AppSidebar :model-value="true" :rail="false" />
        <div class="flex-grow-1 d-flex flex-column" style="min-width: 0">
          <AppBar />
          <div class="pa-6" style="min-width: 0">
            <MpPageHeader eyebrow="Commerce · Orders" title="Sales Orders" subtitle="82 orders total · $43,565.90 lifetime revenue" />
            <v-card flat border rounded="lg" class="mt-6">
              <MpDataTableToolbar title="Sales Orders" :total-count="rows.length" search-placeholder="Search orders…" />
              <v-data-table :headers="headers" :items="rows" item-value="id" hide-default-footer>
                <template #item.status="{ item }">
                  <MpStatusChip :status="item.status" type="order" size="sm" />
                </template>
                <template #item.fulfillment="{ item }">
                  <MpStatusChip :status="item.fulfillment" type="fulfillment" size="sm" />
                </template>
              </v-data-table>
            </v-card>
          </div>
        </div>
      </div>
    `}),args:{}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: true,
    rail: false
  },
  render: () => ({
    components: {
      AppSidebar
    },
    setup() {
      const open = ref(true);
      const rail = ref(false);
      return {
        open,
        rail
      };
    },
    template: \`
      <v-layout style="height: 600px;" class="bg-surface">
        <AppSidebar v-model="open" v-model:rail="rail" />
        <v-main class="pa-6">
          <p class="text-body-1">Sidebar is <strong>expanded</strong> (240px). Toggle the rail prop to collapse it.</p>
        </v-main>
      </v-layout>
    \`
  })
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: true,
    rail: true
  },
  render: () => ({
    components: {
      AppSidebar
    },
    setup() {
      const open = ref(true);
      const rail = ref(true);
      return {
        open,
        rail
      };
    },
    template: \`
      <v-layout style="height: 600px;" class="bg-surface">
        <AppSidebar v-model="open" v-model:rail="rail" />
        <v-main class="pa-6">
          <p class="text-body-1">Sidebar is in <strong>rail mode</strong> (icon-only, 64px). Hovering a module icon opens its flyout menu.</p>
        </v-main>
      </v-layout>
    \`
  })
}`,...c.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: true,
    rail: false
  },
  parameters: {
    sidebarSkin: 'white'
  },
  globals: {
    theme: 'light'
  },
  render: () => ({
    components: {
      AppSidebar
    },
    setup() {
      const open = ref(true);
      const rail = ref(false);
      return {
        open,
        rail
      };
    },
    template: \`
      <v-layout style="height: 600px;" class="bg-surface">
        <AppSidebar v-model="open" v-model:rail="rail" />
        <v-main class="pa-6">
          <p class="text-body-1">The <strong>white</strong> skin — white nav chrome, gray canvas.</p>
        </v-main>
      </v-layout>
    \`
  })
}`,...s.parameters?.docs?.source},description:{story:"The white skin: white chrome over the metal-gray content canvas. Light mode only.",...s.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: true,
    rail: false
  },
  parameters: {
    sidebarSkin: 'dark'
  },
  globals: {
    theme: 'light'
  },
  render: () => ({
    components: {
      AppSidebar
    },
    setup() {
      const open = ref(true);
      const rail = ref(false);
      return {
        open,
        rail
      };
    },
    template: \`
      <v-layout style="height: 600px;" class="bg-surface">
        <AppSidebar v-model="open" v-model:rail="rail" />
        <v-main class="pa-6">
          <p class="text-body-1">The <strong>dark</strong> skin on a light app theme.</p>
        </v-main>
      </v-layout>
    \`
  })
}`,...n.parameters?.docs?.source},description:{story:"The dark skin on a light app theme: dark nav chrome beside light content. Its values come\nfrom the `dark` token ramp by name, so they hold even though the surrounding theme is light.",...n.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: true,
    rail: false,
    temporary: true
  },
  globals: {
    viewport: {
      value: 'mobile375',
      isRotated: false
    }
  },
  render: () => ({
    components: {
      AppSidebar
    },
    setup() {
      const open = ref(true);
      const rail = ref(false);
      return {
        open,
        rail
      };
    },
    template: \`
      <v-layout style="min-height: 700px;" class="bg-surface">
        <AppSidebar v-model="open" v-model:rail="rail" temporary />
        <v-main class="pa-4">
          <v-btn variant="outlined" prepend-icon="panel-left" @click="open = true">Open sidebar</v-btn>
          <p class="text-body-2 text-medium-emphasis mt-4">
            Temporary mode overlays the content with a scrim instead of reserving a column.
          </p>
        </v-main>
      </v-layout>
    \`
  })
}`,...o.parameters?.docs?.source},description:{story:"The mobile configuration: `temporary` turns the sidebar into an overlay drawer with a scrim\n(canvas only — the docs page doesn't resize). Dismiss it via the scrim and re-open it with\nthe button.",...o.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      AppSidebar
    },
    template: \`
      <div class="d-flex ga-6 align-stretch" style="min-height: 560px">
        <div>
          <div class="text-caption text-medium-emphasis mb-2">expanded — 248px (layout.sidebarWidth)</div>
          <AppSidebar :model-value="true" :rail="false" />
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">rail — 72px (layout.sidebarRailWidth)</div>
          <AppSidebar :model-value="true" :rail="true" />
        </div>
      </div>
    \`
  }),
  args: {} as never
}`,...i.parameters?.docs?.source},description:{story:"The sidebar's two structures — expanded (labels visible) and rail (icons only, with a\nflyout on hover) — beside the three skins the shell can wear. Structure is `rail`;\nskin is a global app setting, not a prop.",...i.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      AppSidebar
    },
    template: \`
      <div class="d-flex ga-6 align-stretch" style="min-height: 520px">
        <AppSidebar :model-value="true" :rail="false" />
        <AppSidebar :model-value="true" :rail="true" />
      </div>
    \`
  }),
  args: {} as never
}`,...l.parameters?.docs?.source},description:{story:"There is no `size` prop — the two widths are `rail`'s two states, and both now come from\n`layout.sidebarWidth` / `layout.sidebarRailWidth`. Phase 4 (P4-7) closed a gap here:\n`tokens.json` and CLAUDE.md both documented 248 / 72 while the component rendered 240 / 64,\nso the tokens described a layout nothing used. The drawer reads the generated TS token now\n(VNavigationDrawer takes numbers, not custom properties).\n\nIts rows are `component.listItem.*` — the same 40px floor as `MpSectionRail`, `MpListRow`\nand the app bar's menu rows. Only the inline inset differs, deliberately: this drawer insets\nits scroller by 8 and the section rail insets its own by 12, so 8 + 16 here and 12 + 12\nthere both put the label 24px from the panel edge.",...l.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      AppSidebar
    },
    template: \`
      <div class="d-flex ga-6 align-stretch" style="min-height: 560px">
        <AppSidebar :model-value="true" :rail="false" />
        <div class="pt-6 text-body-2 text-medium-emphasis" style="max-width: 320px">
          Hover a parent row to reveal its chevron, click to open the flyout, and tab through
          the list to see the focus ring. The active row is whichever matches the current route.
        </div>
      </div>
    \`
  }),
  args: {} as never
}`,...p.parameters?.docs?.source},description:{story:"Row states: resting, hover, active (`active-nav-item` — tinted surface plus a semibold\nlabel), a parent row with its hover chevron, and a badge. Hover and tab through the rows\nto see the affordances; the focus ring is a box-shadow so it reads on every skin.",...p.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      AppSidebar,
      AppBar,
      MpPageHeader,
      MpDataTableToolbar,
      MpStatusChip
    },
    setup: () => ({
      rows: ORDERS.slice(0, 5),
      headers: ORDER_HEADERS.filter(h => h.key !== 'actions')
    }),
    template: \`
      <div class="d-flex align-stretch" style="min-height: 640px; background: var(--surface-canvas)">
        <AppSidebar :model-value="true" :rail="false" />
        <div class="flex-grow-1 d-flex flex-column" style="min-width: 0">
          <AppBar />
          <div class="pa-6" style="min-width: 0">
            <MpPageHeader eyebrow="Commerce · Orders" title="Sales Orders" subtitle="82 orders total · $43,565.90 lifetime revenue" />
            <v-card flat border rounded="lg" class="mt-6">
              <MpDataTableToolbar title="Sales Orders" :total-count="rows.length" search-placeholder="Search orders…" />
              <v-data-table :headers="headers" :items="rows" item-value="id" hide-default-footer>
                <template #item.status="{ item }">
                  <MpStatusChip :status="item.status" type="order" size="sm" />
                </template>
                <template #item.fulfillment="{ item }">
                  <MpStatusChip :status="item.fulfillment" type="fulfillment" size="sm" />
                </template>
              </v-data-table>
            </v-card>
          </div>
        </div>
      </div>
    \`
  }),
  args: {} as never
}`,...d.parameters?.docs?.source},description:{story:`**In context.** The full shell: sidebar + app bar + a real page. This is the composition
Phase 4's control-height work is visible in — every control in the app bar, every nav row
in the sidebar, and every control in the table toolbar resolve to one 40px baseline.`,...d.parameters?.docs?.description}}};const ae=["Expanded","CollapsedRail","SkinWhite","SkinDark","MobileTemporary","Variants","Sizes","States","InContextAppShell"];export{c as CollapsedRail,m as Expanded,d as InContextAppShell,o as MobileTemporary,l as Sizes,n as SkinDark,s as SkinWhite,p as States,i as Variants,ae as __namedExportsOrder,ee as default};
