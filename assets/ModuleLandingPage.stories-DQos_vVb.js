import{M as m}from"./ModuleLandingPage-o_XjiwuF.js";import"./iframe-BqHSr5b_.js";import"./preload-helper-PPVm8Dsz.js";import"./MpPageHeader-DvEYTUk7.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./MpListRow-Cp1HcjrS.js";const e="/accounts/2000290",h=[{label:"New campaign",icon:"plus",to:`${e}/campaigns/new`}],v=[{icon:"send",label:"New campaign",description:"Send an email to a list",to:`${e}/campaigns/new`},{icon:"route",label:"Build a journey",description:"Multi-step automation",to:`${e}/journeys`},{icon:"clipboard-list",label:"Create form",description:"Capture new contacts",to:`${e}/signup_forms`},{icon:"file-text",label:"Browse templates",description:"Reusable email content",to:`${e}/contents`}],g=[{icon:"megaphone",title:"Campaigns",description:"Email blasts, transactional sends, and campaign tags.",to:`${e}/campaigns`,count:24},{icon:"route",title:"Journeys",description:"Multi-step automated customer journeys with branching logic.",to:`${e}/journeys`,count:8},{icon:"file-text",title:"Templates",description:"Reusable email content and dynamic blocks for fast composition.",to:`${e}/contents`,count:47},{icon:"zap",title:"Automations",description:"Triggered flows: cart abandon, win-back, post-purchase, and more.",to:`${e}/data_journeys`,count:12},{icon:"clipboard-list",title:"Forms",description:"Signup forms, landing pages, and surveys to grow your audience.",to:`${e}/signup_forms`,count:6},{icon:"bar-chart-3",title:"Reports",description:"Email performance, deliverability, and engagement analytics.",to:`${e}/reports`,status:"New"}],b=[{icon:"mail",tag:"email",eyebrow:"2m ago",title:"Spring Refresh sent to Segment A · 12,408 recipients",meta:"58.2% open"},{icon:"route",tag:"automation",eyebrow:"14m ago",title:"Cart abandoned · Step 2 enrolled 84 contacts",meta:"In flow"},{icon:"users",tag:"audience",eyebrow:"32m ago",title:"VIP repeat buyers segment refreshed",meta:"+312"},{icon:"mail",tag:"email",eyebrow:"1h ago",title:"Loyalty · April delivered to 4,210 contacts",meta:"63.1% open"},{icon:"package",tag:"order",eyebrow:"2h ago",title:"Order #10482 placed from campaign link",meta:"$184.00"}],u={title:"Marketing setup",description:"Finish these to send your first campaign with confidence.",items:[{label:"Verify sending domain (DKIM, SPF)",complete:!0},{label:"Connect a contact list",complete:!0},{label:"Send a test campaign",complete:!1,to:`${e}/campaigns/new`},{label:"Set up a welcome journey",complete:!1,to:`${e}/journeys`}],ctaLabel:"Open setup guide",ctaTo:`${e}/campaigns`},y={title:"Da Vinci AI · Marketing",description:"Smart suggestions tuned to your audience and recent campaigns.",headline:"Let Da Vinci draft your next campaign",ctaLabel:"Open Da Vinci",ctaTo:`${e}/da-vinci/dashboard`,suggestions:[{label:"Find best send time for VIP segment",to:`${e}/da-vinci/dashboard`},{label:"Generate subject line variants",to:`${e}/da-vinci/dashboard`},{label:"Score audience engagement risk",to:`${e}/da-vinci/dashboard`}]},M={title:"Patterns/Module Landing Page",component:m,tags:["autodocs"],parameters:{docs:{description:{component:`
### Overview
\`ModuleLandingPage\` is the config-driven hub page for a whole module (used by
\`MarketingLanding\` and \`ContentLanding\`): page header with pill actions, a quick-actions row,
a grid of child-page cards (count or status badge), a recent-activity feed, and optional setup /
Da Vinci AI side cards. Only \`title\` and \`childPages\` are required — every other section
renders conditionally.

**Use when:** a module needs an overview hub that routes into its child pages (Marketing, Content, and future clouds).

**Don't use when:** the page shows actual data or workflows — this is a launcher, not a dashboard; use dashboard widgets or list views for real content.

### Usage
\`\`\`html
<!-- Views pass module config only; all links are route paths. -->
<ModuleLandingPage
  title="Marketing"
  description="Plan, send, and automate every customer touch."
  :primary-actions="[{ label: 'New campaign', icon: 'plus', to: campaignsNewPath }]"
  :quick-actions="quickActions"
  :child-pages="childPages"
  :recent-activity="recentActivity"
  :setup-card="setupCard"
  :da-vinci-card="daVinciCard"
/>
\`\`\`

### 🟢 Do's
- **Do** drive all links from route paths (\`to\`) so account scoping stays in the view.
- **Do** keep child-page descriptions to one sentence; the cards clamp at ~2 lines.

### 🔴 Don'ts
- **Don't** hand-build module hubs in views — configure this component instead.
- **Don't** exceed ~6 quick actions; the row wraps on tablet and stacks on mobile.

### A11y
- **Provides:** the title renders through \`MpPageHeader\` as the page \`h1\`; quick actions are real \`<button>\`s and child cards are router-links, both with visible \`:focus-visible\` rings via theme tokens; the setup progress bar is a Vuetify progress-linear with proper role; the quick-actions row has an \`aria-label\` landmark.
- **Consumer must:** keep child-page descriptions meaningful (they are the link's supporting text) and route \`to\` paths valid.
- **Gaps:** the "Sections" / "Recent activity" eyebrows now carry \`role="heading"\` + \`aria-level="2"\`, giving the page a sub-heading structure under the h1 *(fixed in the Phase 4 a11y pass)*; activity rows are non-interactive text (fine); setup-list checkmarks still convey completion by icon + strikethrough only — not announced as a checklist (backlog).
        `}}},args:{title:"Marketing",description:"Plan, send, and automate every customer touch — campaigns, journeys, content, and forms in one place.",primaryActions:h,quickActions:v,childPages:g,recentActivity:b,setupCard:u,daVinciCard:y},argTypes:{title:{control:"text",description:"Module name, rendered by MpPageHeader as the page h1."},description:{control:"text",description:"One-line module summary under the title."},eyebrow:{control:"text",description:"Muted, tracked kicker rendered above the display headline."},inkDaVinciCard:{control:"boolean",description:"Renders the Da Vinci card as the ink panel — the page's single branded moment. Use at most once per page."},primaryActions:{control:"object",description:"Pill buttons in the header ({ label, icon?, to?/href?, variant? }[]). The first entry defaults to primary color."},quickActions:{control:"object",description:"Shortcut buttons row under the header ({ icon, label, description?, to }[])."},childPages:{control:"object",description:"Required. Grid of section cards ({ icon, title, description, to, count? | status? }[])."},recentActivity:{control:"object",description:"Feed rows ({ icon, eyebrow, title, meta?, tag? }[]); tag colors the icon chip (email/order/audience/automation)."},setupCard:{control:"object",description:"Optional setup checklist side card with progress bar ({ title, description, items, ctaLabel?, ctaTo? }); null hides it."},daVinciCard:{control:"object",description:"Optional Da Vinci suggestions side card ({ title, description, suggestions }); null hides it."}},render:t=>({components:{ModuleLandingPage:m},setup:()=>({args:t}),template:`
      <div style="max-width: 1240px; margin: 0 auto;">
        <ModuleLandingPage v-bind="args" />
      </div>
    `})},i={},n={render:t=>({components:{ModuleLandingPage:m},setup:()=>({args:t}),template:`
      <div class="d-flex flex-column ga-8">
        <div>
          <div class="text-caption text-medium-emphasis mb-2">default — Da Vinci suggestion list in the side column</div>
          <ModuleLandingPage v-bind="args" :ink-da-vinci-card="false" />
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">inkDaVinciCard — the single branded moment</div>
          <ModuleLandingPage v-bind="args" ink-da-vinci-card />
        </div>
      </div>
    `})},a={render:t=>({components:{ModuleLandingPage:m},setup:()=>({args:t}),template:`
      <div class="d-flex flex-column ga-8">
        <div>
          <div class="text-caption text-medium-emphasis mb-2">minimal — child pages only</div>
          <ModuleLandingPage
            title="Content"
            description="Templates and reusable blocks."
            :child-pages="args.childPages.slice(0, 2)"
          />
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">full — quick actions, activity, setup and Da Vinci</div>
          <ModuleLandingPage v-bind="args" />
        </div>
      </div>
    `})},s={render:t=>({components:{ModuleLandingPage:m},setup:()=>({args:t}),template:`
      <div class="d-flex flex-column ga-8">
        <div>
          <div class="text-caption text-medium-emphasis mb-2">no recent activity</div>
          <ModuleLandingPage v-bind="args" :recent-activity="[]" />
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">no setup card — onboarding already complete</div>
          <ModuleLandingPage v-bind="args" :setup-card="null" />
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">no quick actions</div>
          <ModuleLandingPage v-bind="args" :quick-actions="[]" />
        </div>
      </div>
    `})},o={args:{title:"Content",description:"Templates, snippets, and media for every channel.",primaryActions:void 0,quickActions:void 0,childPages:g.slice(2,5).map(t=>({...t,count:void 0})),recentActivity:void 0,setupCard:null,daVinciCard:null}},r={args:{setupCard:{...u,items:u.items.map(t=>({...t,complete:!0})),ctaLabel:void 0}}},c={args:{recentActivity:[],setupCard:{...u,items:u.items.map(t=>({...t,complete:!1}))},childPages:g.map(t=>({...t,count:0,status:void 0}))}},d={args:{inkDaVinciCard:!0}},l={args:{eyebrow:"Marketing cloud"}},p={globals:{viewport:{value:"mobile375",isRotated:!1}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source},description:{story:"The full Marketing hub: every optional section populated.",...i.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      ModuleLandingPage
    },
    setup: () => ({
      args
    }),
    template: \`
      <div class="d-flex flex-column ga-8">
        <div>
          <div class="text-caption text-medium-emphasis mb-2">default — Da Vinci suggestion list in the side column</div>
          <ModuleLandingPage v-bind="args" :ink-da-vinci-card="false" />
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">inkDaVinciCard — the single branded moment</div>
          <ModuleLandingPage v-bind="args" ink-da-vinci-card />
        </div>
      </div>
    \`
  })
}`,...n.parameters?.docs?.source},description:{story:"Both Da Vinci treatments side by side: the suggestion list vs the single ink moment.",...n.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      ModuleLandingPage
    },
    setup: () => ({
      args
    }),
    template: \`
      <div class="d-flex flex-column ga-8">
        <div>
          <div class="text-caption text-medium-emphasis mb-2">minimal — child pages only</div>
          <ModuleLandingPage
            title="Content"
            description="Templates and reusable blocks."
            :child-pages="args.childPages.slice(0, 2)"
          />
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">full — quick actions, activity, setup and Da Vinci</div>
          <ModuleLandingPage v-bind="args" />
        </div>
      </div>
    \`
  })
}`,...a.parameters?.docs?.source},description:{story:"Content volume is the size axis for a landing page — there is no `size` prop.\nThis is the same pattern with a minimal payload and a full one.",...a.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      ModuleLandingPage
    },
    setup: () => ({
      args
    }),
    template: \`
      <div class="d-flex flex-column ga-8">
        <div>
          <div class="text-caption text-medium-emphasis mb-2">no recent activity</div>
          <ModuleLandingPage v-bind="args" :recent-activity="[]" />
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">no setup card — onboarding already complete</div>
          <ModuleLandingPage v-bind="args" :setup-card="null" />
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">no quick actions</div>
          <ModuleLandingPage v-bind="args" :quick-actions="[]" />
        </div>
      </div>
    \`
  })
}`,...s.parameters?.docs?.source},description:{story:"Each optional block absent in turn, so a module with no activity or no setup card is verifiable.",...s.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Content',
    description: 'Templates, snippets, and media for every channel.',
    primaryActions: undefined,
    quickActions: undefined,
    childPages: CHILD_PAGES.slice(2, 5).map(cp => ({
      ...cp,
      count: undefined
    })),
    recentActivity: undefined,
    setupCard: null,
    daVinciCard: null
  }
}`,...o.parameters?.docs?.source},description:{story:"Only the required props — header plus child-page grid, no side column content.",...o.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    setupCard: {
      ...SETUP_CARD,
      items: SETUP_CARD.items.map(i => ({
        ...i,
        complete: true
      })),
      ctaLabel: undefined
    }
  }
}`,...r.parameters?.docs?.source},description:{story:"Setup checklist complete — progress bar full, all items struck through.",...r.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    recentActivity: [],
    setupCard: {
      ...SETUP_CARD,
      items: SETUP_CARD.items.map(i => ({
        ...i,
        complete: false
      }))
    },
    childPages: CHILD_PAGES.map(cp => ({
      ...cp,
      count: 0,
      status: undefined
    }))
  }
}`,...c.parameters?.docs?.source},description:{story:"A brand-new module: no activity yet and setup barely started. The activity section is gated on\n`recentActivity?.length`, so an empty array collapses it entirely rather than leaving a bare\nheading — the same result as passing `undefined`.",...c.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    inkDaVinciCard: true
  }
}`,...d.parameters?.docs?.source},description:{story:"The Da Vinci card promoted to the ink panel — the page's single branded moment:\none message, one action. The CTA is a real `v-btn` (outlined, pill) recoloured for\nthe inverted surface, not a hand-rolled anchor.",...d.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    eyebrow: 'Marketing cloud'
  }
}`,...l.parameters?.docs?.source},description:{story:"With the muted kicker above the display headline.",...l.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  globals: {
    viewport: {
      value: 'mobile375',
      isRotated: false
    }
  }
}`,...p.parameters?.docs?.source},description:{story:"At 375px the quick-actions row stacks and the child-page grid collapses to one column.",...p.parameters?.docs?.description}}};const A=["Default","Variants","Sizes","States","Minimal","SetupComplete","EmptyActivity","InkDaVinciCard","WithEyebrow","Mobile375"];export{i as Default,c as EmptyActivity,d as InkDaVinciCard,o as Minimal,p as Mobile375,r as SetupComplete,a as Sizes,s as States,n as Variants,l as WithEyebrow,A as __namedExportsOrder,M as default};
