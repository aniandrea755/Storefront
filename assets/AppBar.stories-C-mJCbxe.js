import{ed as S,r as w}from"./iframe-BqHSr5b_.js";import{A as k,a as r}from"./AppSidebar-BHr0Bw84.js";import{M as A}from"./MpPageHeader-DvEYTUk7.js";import{M as T}from"./MpKpiCard-DGVlV4qi.js";import{a as M}from"./decorators-DmUOp7kZ.js";import"./preload-helper-PPVm8Dsz.js";import"./useAccounts-BNKGYLRf.js";import"./useCopilot-Dk9L7vKg.js";import"./useUserProfile-CiWBSKP8.js";import"./useAppTheme-d8BR_Qbt.js";import"./useToast-D0O_SpbR.js";import"./useToastStackTimers-CbTd3XmR.js";import"./DvOrbitOrb-CursqOcX.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./MpNotificationsMenu-C4gumWrE.js";import"./MpEmptyState-WqesgUXi.js";import"./MpIllustration-7mikb6DB.js";import"./useNotifications-DDqnt56P.js";import"./MpListRow-Cp1HcjrS.js";import"./MpSegmentedControl-O78n2lBW.js";import"./PlgTrialChip-C1I0pLGc.js";import"./usePlg-ML6QTG6m.js";import"./PlgTalkToSalesDialog-Uyjcz-oU.js";import"./MpDialog-F4WZRRS8.js";import"./useScrollEdges-B2McRpMX.js";import"./MpFormGrid-D0pxdSe6.js";import"./useTrialLab-fw30bCL2.js";import"./trialLabData-Bky5uwx1.js";import"./useOnboarding-rnLK_TX1.js";const B=["Settings","Billing","SettingsGeneral","AppStore","Dashboard","DashboardsList","SalesOrders","EmailCampaigns","AllContacts","DaVinciDashboard","DaVinciExperience","Segments","Journeys","ContactLists"];function x(a){for(const e of B)a.hasRoute(e)||a.addRoute({path:`/accounts/:accountId/sb-appbar/${e.toLowerCase()}`,name:e,component:{template:"<div />"}})}function s(){return()=>({components:{AppBar:r},setup(){x(S())},template:`
      <v-layout>
        <AppBar />
        <v-main class="pa-6">
          <p class="text-body-1">Main content area below the app bar.</p>
        </v-main>
      </v-layout>
    `})}function f(){return()=>({components:{AppBar:r,AppSidebar:k},setup(){x(S());const a=w(!0),e=w(!1);return{open:a,rail:e}},template:`
      <v-layout style="min-height: 520px;">
        <AppSidebar v-model="open" v-model:rail="rail" />
        <AppBar />
        <v-main class="pa-6">
          <p class="text-body-1">
            The head nav and side nav share one surface — the seam between them should read as
            a single continuous plane, broken only by a hairline.
          </p>
        </v-main>
      </v-layout>
    `})}const se={title:"Patterns/App Shell/AppBar",component:r,tags:["autodocs"],decorators:[M],parameters:{canvas:"full",sidebarSkin:"gray",docs:{description:{component:'\n### Overview\n`AppBar` is the main top navigation bar of the Maropost platform (56px). It provides the\nuniversal AI search menu, the quick-create menu (with single-key shortcuts while open), the\nnotification centre (`MpNotificationsMenu`), Galaxy and Settings shortcuts, the Da Vinci assistant menu, and the user\nprofile menu (account switcher, theme toggle, sign-out). It takes **no props** — everything is\nwired to global state.\n\n**Chrome:** the bar shares the `--mp-nav-surface` bind with `AppSidebar` (`shell-variants.css`)\nso head nav and side nav can never drift. The skin (`<html data-sidebar>`) only differentiates\nlight mode — in dark mode both navs resolve to the same charcoal surface from the `dark` token\nramp. The Seam stories below show the two together.\n\n**Store coupling:** `useAccounts` (active account + switcher list), `useCopilot` (opens the\nDa Vinci assistant), `useUserProfile` (avatar), and `useAppTheme` (light/dark mode). The\nStorybook preview registers Pinia with the stores\' seeded defaults (account 2000290), and these\nstories add stub routes for the named routes the bar links to.\n\n**Use when:** composing the app shell — exactly once, inside `v-layout`, alongside\n`AppSidebar` and `v-main` (see `App.vue`).\n\n**Don\'t use when:** a page needs its own header or actions — that\'s `MpPageHeader`. Full-page\nsurfaces (login, builders) omit the bar entirely.\n\n### Usage\n```html\n<v-layout>\n  <AppSidebar v-model="drawer" :rail="rail" />\n  <AppBar />\n  <v-main id="main-content" role="main">\n    <router-view />\n  </v-main>\n</v-layout>\n```\n\n### 🟢 Do\'s\n- **Do** always render it inside a `v-layout` wrapper so it integrates with the sidebar and main content.\n- **Do** use it as a singleton — only one AppBar should exist per page.\n\n### 🔴 Don\'ts\n- **Don\'t** add page-level actions to the AppBar — those belong in `MpPageHeader`.\n- **Don\'t** override its height; it follows the design token `appbar: 56px`.\n\n### 💡 Best Practices\n- The AppBar is fixed to the top; page content accounts for its height via `v-main`.\n- The quick-create menu binds single-key shortcuts (D/W/E/S/A/L) only while it is open, and\n  ignores keystrokes typed into inputs.\n\n### A11y\n- **Provides:** every icon-only control carries an `aria-label` — search ("Universal AI\n  search"), quick create, notifications (with unread count in the label), Galaxy, Settings,\n  AI Assistant, user menu, and the theme toggle buttons; menus are Vuetify `v-menu`s (Escape\n  closes, focus returns to the trigger); the account filter field has an `aria-label`; the\n  theme switcher row is a `role="group"` with a label.\n- **Consumer must:** provide the skip link and `v-main` landmark at the shell level (App.vue\n  does), since the bar itself is chrome.\n- **Gaps:** the notification badge count is visual + label-only (no live region when it\n  changes); the profile menu items are custom `button.um-item`s rather than list semantics —\n  arrow-key navigation inside the menu doesn\'t work (Tab only); the search menu\'s result list\n  isn\'t a combobox/listbox pattern, so results aren\'t announced as suggestions (noted for the\n  Phase 4 a11y pass).\n\n### API\n`AppBar` takes **no props, emits, or slots** — it is app chrome that reads everything it needs\nfrom the router and the accounts / theme / notifications stores (`useNotifications` backs the\nbell via `MpNotificationsMenu`), which is why the Controls panel is empty. Drive its states in\nstories and demos by seeding those stores, not by passing config.\n\n### Controls\nThe app bar takes **no props** — the Controls panel is empty by design. It composes `useAccountsStore`, `useCopilotStore`, `useUserProfile`, `useAppTheme`, `useMobileNav`, `useToast` and `usePlgStore` directly. The one story-level knob is `parameters.sidebarSkin` (`gray` | `white` | `dark`), which the shared `sidebarSkin` decorator stamps onto `<html data-sidebar>`.\n'}}}},b={render:s()},y={name:"Profile Menu (Open)",render:s(),play:async({canvasElement:a})=>{await new Promise(t=>setTimeout(t,500));const e=a.querySelector(".user-menu-trigger");e&&e.click()}},o={name:"Create Menu (Open)",render:s(),play:async({canvasElement:a})=>{await new Promise(t=>setTimeout(t,500));const e=a.querySelector('[aria-label="Quick create"]');e&&e.click()}},i={name:"Search (Open)",render:s(),play:async({canvasElement:a})=>{await new Promise(t=>setTimeout(t,500));const e=a.querySelector('[aria-label="Universal AI search"]');e&&e.click()}},p={name:"Search (Type Tabs)",render:s(),play:async({canvasElement:a})=>{await new Promise(n=>setTimeout(n,500));const e=a.querySelector('[aria-label="Universal AI search"]');e&&e.click(),await new Promise(n=>setTimeout(n,300));const t=document.querySelectorAll(".cmd-palette__tab");Array.from(t).find(n=>n.textContent?.trim()!=="All")?.click()}},l={render:s(),globals:{viewport:{value:"mobile375",isRotated:!1}}},c={render:f(),parameters:{sidebarSkin:"gray"},globals:{theme:"light"}},d={render:f(),parameters:{sidebarSkin:"white"},globals:{theme:"light"}},m={render:f(),parameters:{sidebarSkin:"dark"},globals:{theme:"light"}},h={render:()=>({components:{AppBar:r},template:`
      <div class="d-flex flex-column ga-6">
        <div>
          <div class="text-caption text-medium-emphasis mb-2">classic</div>
          <AppBar />
        </div>
      </div>
    `}),args:{}},u={render:()=>({components:{AppBar:r},template:`
      <div>
        <AppBar />
        <div class="pa-6 text-body-2 text-medium-emphasis">
          Measure any control in the bar above: 40px, the same baseline as a button, a form
          field, a list row, a nav item and a table header cell.
        </div>
      </div>
    `}),args:{}},v={render:()=>({components:{AppBar:r},template:`
      <div>
        <AppBar />
        <div class="pa-6 text-body-2 text-medium-emphasis">
          Click the search field (or press ⌘K) for the palette, <strong>+</strong> for Quick-create,
          and the avatar for the profile menu.
        </div>
      </div>
    `}),args:{}},g={render:()=>({components:{AppBar:r,AppSidebar:k,MpPageHeader:A,MpKpiCard:T},template:`
      <div class="d-flex align-stretch" style="min-height: 620px; background: var(--surface-canvas)">
        <AppSidebar :model-value="true" :rail="false" />
        <div class="flex-grow-1 d-flex flex-column" style="min-width: 0">
          <AppBar />
          <div class="pa-6">
            <MpPageHeader title="Dashboard" subtitle="Northwind Supply Co. · last 30 days" />
            <div class="d-flex ga-4 mt-6 flex-wrap">
              <MpKpiCard label="Revenue" value="$43,565.90" icon="dollar-sign" trend="+12.4%" trend-positive period="vs. prior 30 days" style="flex: 1 1 220px" />
              <MpKpiCard label="Orders" value="82" icon="shopping-cart" trend="+6" trend-positive period="vs. prior 30 days" style="flex: 1 1 220px" />
              <MpKpiCard label="Open rate" value="58.2%" icon="mail-open" trend="+2.1pt" trend-positive period="vs. prior 30 days" style="flex: 1 1 220px" />
              <MpKpiCard label="Tickets" value="14" icon="life-buoy" trend="-3" period="vs. prior 30 days" style="flex: 1 1 220px" />
            </div>
          </div>
        </div>
      </div>
    `}),args:{}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: appBarStory()
}`,...b.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Profile Menu (Open)',
  render: appBarStory(),
  play: async ({
    canvasElement
  }) => {
    // Auto-open the profile dropdown for Storybook preview
    await new Promise(resolve => setTimeout(resolve, 500));
    const trigger = canvasElement.querySelector('.user-menu-trigger') as HTMLElement;
    if (trigger) trigger.click();
  }
}`,...y.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Create Menu (Open)',
  render: appBarStory(),
  play: async ({
    canvasElement
  }) => {
    await new Promise(resolve => setTimeout(resolve, 500));
    const trigger = canvasElement.querySelector('[aria-label="Quick create"]') as HTMLElement;
    if (trigger) trigger.click();
  }
}`,...o.parameters?.docs?.source},description:{story:"The quick-create menu opened — grouped create targets with single-key shortcuts (D/W/E/S/A/L).",...o.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Search (Open)',
  render: appBarStory(),
  play: async ({
    canvasElement
  }) => {
    await new Promise(resolve => setTimeout(resolve, 500));
    const trigger = canvasElement.querySelector('[aria-label="Universal AI search"]') as HTMLElement;
    if (trigger) trigger.click();
  }
}`,...i.parameters?.docs?.source},description:{story:'The universal AI search menu opened — grouped destinations plus the "Ask Da Vinci" escape hatch.',...i.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Search (Type Tabs)',
  render: appBarStory(),
  play: async ({
    canvasElement
  }) => {
    await new Promise(resolve => setTimeout(resolve, 500));
    const trigger = canvasElement.querySelector('[aria-label="Universal AI search"]') as HTMLElement;
    if (trigger) trigger.click();
    await new Promise(resolve => setTimeout(resolve, 300));
    const tabs = document.querySelectorAll('.cmd-palette__tab');
    const nonAllTab = Array.from(tabs).find(t => t.textContent?.trim() !== 'All') as HTMLElement | undefined;
    nonAllTab?.click();
  }
}`,...p.parameters?.docs?.source},description:{story:'Search open with a non-"All" type tab selected, narrowing results to one searchSources\n category without retyping (WP-C3). Tabs are `role="group"`-labeled, real `<button>`s\n (keyboard-reachable), and the combobox\'s own `aria-activedescendant` wiring is unaffected\n by which tab is active.',...p.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: appBarStory(),
  globals: {
    viewport: {
      value: 'mobile375',
      isRotated: false
    }
  }
}`,...l.parameters?.docs?.source},description:{story:"The bar at a 375px viewport (canvas only — the docs page doesn't resize).",...l.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: navSeamStory(),
  parameters: {
    sidebarSkin: 'gray'
  },
  globals: {
    theme: 'light'
  }
}`,...c.parameters?.docs?.source},description:{story:"Gray skin — bar and sidebar share one continuous nav surface (light mode).",...c.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: navSeamStory(),
  parameters: {
    sidebarSkin: 'white'
  },
  globals: {
    theme: 'light'
  }
}`,...d.parameters?.docs?.source},description:{story:"White skin — white nav chrome beside a gray canvas (light mode).",...d.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: navSeamStory(),
  parameters: {
    sidebarSkin: 'dark'
  },
  globals: {
    theme: 'light'
  }
}`,...m.parameters?.docs?.source},description:{story:"Dark skin on a light app theme — charcoal nav cluster (light mode).",...m.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      AppBar
    },
    template: \`
      <div class="d-flex flex-column ga-6">
        <div>
          <div class="text-caption text-medium-emphasis mb-2">classic</div>
          <AppBar />
        </div>
      </div>
    \`
  }),
  args: {} as never
}`,...h.parameters?.docs?.source},description:{story:`The bar's structural variants are its skins ("seams"): the classic white chrome, the gray
shell and the dark shell. The control row is identical in all three — only the painted
surface behind it changes, which is why the controls had to stop being sized by hand.`,...h.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      AppBar
    },
    template: \`
      <div>
        <AppBar />
        <div class="pa-6 text-body-2 text-medium-emphasis">
          Measure any control in the bar above: 40px, the same baseline as a button, a form
          field, a list row, a nav item and a table header cell.
        </div>
      </div>
    \`
  }),
  args: {} as never
}`,...u.parameters?.docs?.source},description:{story:`There is no \`size\` prop. The bar is \`layout.appbarHeight\` (60px) tall, and **every control
inside it** — the search field, the Quick-create button, the notification/settings buttons,
the assistant pill, the user avatar, the theme segment's track — resolves to
\`component.control.height\` (40px).

Phase 4 (P4-7) is where that happened. They were 36px, which is on no scale stop, and the
app bar's search sat at 34 while the data-table toolbar's sat at 38 — the two search fields
in the product, two different heights. Both are the token now.`,...u.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      AppBar
    },
    template: \`
      <div>
        <AppBar />
        <div class="pa-6 text-body-2 text-medium-emphasis">
          Click the search field (or press ⌘K) for the palette, <strong>+</strong> for Quick-create,
          and the avatar for the profile menu.
        </div>
      </div>
    \`
  }),
  args: {} as never
}`,...v.parameters?.docs?.source},description:{story:`The bar's interactive states live in its overlays: the command palette (⌘K), the Quick-create
menu, and the profile menu with its account cascade. Open each from the bar — every row in
every one of those panels is \`component.listItem.*\`, so a menu row and a sidebar row are the
same height.`,...v.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      AppBar,
      AppSidebar,
      MpPageHeader,
      MpKpiCard
    },
    template: \`
      <div class="d-flex align-stretch" style="min-height: 620px; background: var(--surface-canvas)">
        <AppSidebar :model-value="true" :rail="false" />
        <div class="flex-grow-1 d-flex flex-column" style="min-width: 0">
          <AppBar />
          <div class="pa-6">
            <MpPageHeader title="Dashboard" subtitle="Northwind Supply Co. · last 30 days" />
            <div class="d-flex ga-4 mt-6 flex-wrap">
              <MpKpiCard label="Revenue" value="$43,565.90" icon="dollar-sign" trend="+12.4%" trend-positive period="vs. prior 30 days" style="flex: 1 1 220px" />
              <MpKpiCard label="Orders" value="82" icon="shopping-cart" trend="+6" trend-positive period="vs. prior 30 days" style="flex: 1 1 220px" />
              <MpKpiCard label="Open rate" value="58.2%" icon="mail-open" trend="+2.1pt" trend-positive period="vs. prior 30 days" style="flex: 1 1 220px" />
              <MpKpiCard label="Tickets" value="14" icon="life-buoy" trend="-3" period="vs. prior 30 days" style="flex: 1 1 220px" />
            </div>
          </div>
        </div>
      </div>
    \`
  }),
  args: {} as never
}`,...g.parameters?.docs?.source},description:{story:`**In context.** The bar over a real page, with the sidebar beside it — the only way to judge
whether the control row reads as one band. The 57px sidebar header and the 60px bar share a
divider line by design.`,...g.parameters?.docs?.description}}};const ne=["Default","ProfileMenuOpen","CreateMenuOpen","SearchOpen","SearchOpenWithTypeTabs","Mobile375","SeamGray","SeamWhite","SeamDarkSkin","Variants","Sizes","States","InContextAppShell"];export{o as CreateMenuOpen,b as Default,g as InContextAppShell,l as Mobile375,y as ProfileMenuOpen,m as SeamDarkSkin,c as SeamGray,d as SeamWhite,i as SearchOpen,p as SearchOpenWithTypeTabs,u as Sizes,v as States,h as Variants,ne as __namedExportsOrder,se as default};
