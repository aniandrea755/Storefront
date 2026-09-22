import{_ as i}from"./StoreEditorSidebar-CDJcfvGv.js";import{u as l}from"./useSalesChannels-C-UC6oeI.js";import"./iframe-BqHSr5b_.js";import"./preload-helper-PPVm8Dsz.js";import"./MpSectionRail-D_ZN1psi.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const d="2000290",f={title:"Product/Sales Channels/StoreEditorSidebar",component:i,tags:["autodocs"],parameters:{docs:{description:{component:`
### Overview
\`StoreEditorSidebar\` is the entity flavor of \`MpSectionRail\`: the 260px in-content rail for the
store editor shell. It composes the rail with the store's identity block, a "Switch store"
selector listing the account's *other* web stores, and the section links from
\`storeEditorMenu.ts\` — grouped as Overview → Customize (Theme first, since the storefront theme
is the primary job) → Store content.

**Use when:** inside a store-editor route, as the shell's rail. The global AppSidebar
auto-minimizes behind it via the route's \`railShell\`/\`storeEditor\` meta.

**Don't use when:** you need a generic section rail — use \`MpSectionRail\` directly.

### Usage
\`\`\`html
<StoreEditorSidebar :channel="channel" />
\`\`\`

### 🟢 Do's
- **Do** pass the resolved \`SalesChannel\` — the rail derives identity, domain, and switcher from it.
- **Do** rely on the built-in switch handler: it keeps the reader on the same section when
  swapping stores (editors land on their section root via \`sectionRootForRoute\`).

### 🔴 Don'ts
- **Don't** add the current store to the switcher — it filters itself out.
- **Don't** hardcode \`accountId\`; it reads the route param and falls back to \`'2000290'\`.

### A11y
- **Provides:** inherits \`MpSectionRail\`'s \`<nav aria-label="Store editor navigation">\`, active
  state via \`aria-current\`, and keyboard-operable switcher.
- **Consumer must:** ensure exactly one rail is on screen per shell route.

> **Story note:** the Storybook router is a catch-all with no \`accountId\` param, so the rail
> falls back to account \`${d}\` and every link resolves against that stub route.
        `}}},argTypes:{channel:{control:"object",description:"The SalesChannel being edited — supplies rail identity, domain caption, and the switcher exclusion."}}};function c(e){return{render:()=>({components:{StoreEditorSidebar:i},setup(){return{channel:l().webStoreChannels(d)[e]}},template:`
        <div style="display: flex; min-height: 620px;">
          <StoreEditorSidebar v-if="channel" :channel="channel" />
        </div>
      `})}}const t=c(0),r=c(1),o=c(2),s={render:e=>({components:{StoreEditorSidebar:i},setup:()=>({args:e}),template:'<StoreEditorSidebar v-bind="args" />'})},a={render:e=>({components:{StoreEditorSidebar:i},setup:()=>({args:e}),template:'<StoreEditorSidebar v-bind="args" />'})},n={render:e=>({components:{StoreEditorSidebar:i},setup:()=>({args:e}),template:'<StoreEditorSidebar v-bind="args" />'})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"channelStory(0)",...t.parameters?.docs?.source},description:{story:"The primary DTC storefront — published, with a live domain in the identity caption.",...t.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"channelStory(1)",...r.parameters?.docs?.source},description:{story:`A second store from the same account. The switcher lists the *other* four web stores, and the
identity block picks up this store's own name and domain.`,...r.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"channelStory(2)",...o.parameters?.docs?.source},description:{story:'A store still in setup — `webStore.domain` may be empty, so the identity caption falls back to\nthe literal "Web store".',...o.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      StoreEditorSidebar
    },
    setup: () => ({
      args
    }),
    template: \`<StoreEditorSidebar v-bind="args" />\`
  })
}`,...s.parameters?.docs?.source},description:{story:"One structure — the entity flavor of `MpSectionRail`: a back link, the store's identity card with a switcher, then the grouped section links. It adds no geometry of its own.",...s.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      StoreEditorSidebar
    },
    setup: () => ({
      args
    }),
    template: \`<StoreEditorSidebar v-bind="args" />\`
  })
}`,...a.parameters?.docs?.source},description:{story:"There is no `size` prop — it inherits `MpSectionRail`'s 260px column (`layout.sectionRailWidth`) and its `component.listItem.*` rows. Phase 4 (P4-7) tokenized the rail, and this component picked all of it up for free — which is the argument for composing the rail rather than hand-rolling one, as the deleted `SettingsSidebar` did.",...a.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      StoreEditorSidebar
    },
    setup: () => ({
      args
    }),
    template: \`<StoreEditorSidebar v-bind="args" />\`
  })
}`,...n.parameters?.docs?.source},description:{story:"A store with a domain, a store without one (caption falls back), and the switcher open.",...n.parameters?.docs?.description}}};const w=["Default","AlternateStore","NoDomainFallback","Variants","Sizes","States"];export{r as AlternateStore,t as Default,o as NoDomainFallback,a as Sizes,n as States,s as Variants,w as __namedExportsOrder,f as default};
