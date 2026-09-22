import{_ as i}from"./MpMenuItem-C7bGP4dE.js";import{M as a}from"./MpRowActionsMenu-DfQDq_iX.js";import"./iframe-BqHSr5b_.js";import"./preload-helper-PPVm8Dsz.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const u={title:"Atoms/MpMenuItem",component:i,tags:["autodocs"],parameters:{docs:{description:{component:'\n### Overview\n`MpMenuItem` is the one action-menu item — a `v-list-item` that owns the menu contract:\n`role="menuitem"`, verb-first `title`, optional leading `icon`, and the `danger` treatment.\nIt exists so the role stops being a call-site convention (GAPS §1).\n\n**Use when:** slotting actions into `MpRowActionsMenu` (or any `role="menu"` panel).\n\n**Don\'t use when:** the row is a picker option, nav link, or list content — those aren\'t menu\nitems; use `v-list-item` (or `MpListRow`) directly.\n\n### Usage\n```html\n<MpRowActionsMenu ariaLabel="Order actions" :itemLabel="item.order">\n  <MpMenuItem title="View order" icon="eye" @click="view(item)" />\n  <MpMenuItem title="Duplicate" icon="copy" @click="duplicate(item)" />\n  <v-divider class="my-1" />\n  <MpMenuItem title="Delete" icon="trash-2" danger @click="confirmDelete(item)" />\n</MpRowActionsMenu>\n```\n\n### 🟢 Do\'s\n- **Do** keep titles verb-first and short — no descriptions in menus.\n- **Do** place `danger` items last, behind a `<v-divider class="my-1" />`.\n- **Do** pass `disabled`, `subtitle`, `@click` etc. straight through — attrs reach the\n  underlying `v-list-item`.\n\n### 🔴 Don\'ts\n- **Don\'t** hand-roll `role="menuitem"` + `class="text-error"` on a bare `v-list-item` —\n  that convention is what this component retires.\n- **Don\'t** use it outside a `role="menu"` panel.\n\n### A11y\n- **Provides:** `role="menuitem"`; the danger treatment (colour is reinforced by position —\n  last, divided — and destructive actions confirm via MpConfirmDialog before committing).\n- **Consumer must:** supply the surrounding `role="menu"` (MpRowActionsMenu does) and attach a\n  real `@click`.\n        '}}},argTypes:{title:{control:"text",description:"Verb-first label."},icon:{control:"text",description:"Optional leading Lucide icon name."},danger:{control:"boolean",description:"Destructive treatment (text-error). Place last, after a divider."}},args:{title:"Duplicate",icon:"copy",danger:!1}},s={render:r=>({components:{MpMenuItem:i},setup:()=>({args:r}),template:'<v-list density="compact" role="menu" style="max-width: 220px"><MpMenuItem v-bind="args" /></v-list>'})},e={render:()=>({components:{MpMenuItem:i},template:`
      <v-list density="compact" role="menu" style="max-width: 220px">
        <MpMenuItem title="Plain item" />
        <MpMenuItem title="With icon" icon="eye" />
        <v-divider class="my-1" />
        <MpMenuItem title="Delete" icon="trash-2" danger />
      </v-list>
    `}),args:{}},t={render:()=>({components:{MpMenuItem:i},template:`
      <v-list density="compact" role="menu" style="max-width: 240px">
        <MpMenuItem title="Resting" icon="eye" />
        <MpMenuItem title="Disabled" icon="circle-pause" disabled />
        <MpMenuItem title="With subtitle" icon="undo-2" subtitle="Already refunded" disabled />
        <v-divider class="my-1" />
        <MpMenuItem title="Destructive" icon="trash-2" danger />
      </v-list>
    `}),args:{}},n={render:()=>({components:{MpMenuItem:i,MpRowActionsMenu:a},template:`
      <div class="d-flex justify-center pt-4" style="min-height: 280px">
        <MpRowActionsMenu ariaLabel="Order actions" itemLabel="#10002">
          <MpMenuItem title="View order" icon="eye" />
          <MpMenuItem title="Print packing slip" icon="printer" />
          <v-divider class="my-1" />
          <MpMenuItem title="Cancel order" icon="ban" danger />
        </MpRowActionsMenu>
      </div>
    `}),args:{},play:async({canvasElement:r})=>{await new Promise(o=>setTimeout(o,300)),r.querySelector('[aria-label="Order actions for #10002"]')?.click()}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      MpMenuItem
    },
    setup: () => ({
      args
    }),
    template: \`<v-list density="compact" role="menu" style="max-width: 220px"><MpMenuItem v-bind="args" /></v-list>\`
  })
}`,...s.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      MpMenuItem
    },
    template: \`
      <v-list density="compact" role="menu" style="max-width: 220px">
        <MpMenuItem title="Plain item" />
        <MpMenuItem title="With icon" icon="eye" />
        <v-divider class="my-1" />
        <MpMenuItem title="Delete" icon="trash-2" danger />
      </v-list>
    \`
  }),
  args: {} as never
}`,...e.parameters?.docs?.source},description:{story:"One structure; what varies is icon presence and the danger treatment.",...e.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      MpMenuItem
    },
    template: \`
      <v-list density="compact" role="menu" style="max-width: 240px">
        <MpMenuItem title="Resting" icon="eye" />
        <MpMenuItem title="Disabled" icon="circle-pause" disabled />
        <MpMenuItem title="With subtitle" icon="undo-2" subtitle="Already refunded" disabled />
        <v-divider class="my-1" />
        <MpMenuItem title="Destructive" icon="trash-2" danger />
      </v-list>
    \`
  }),
  args: {} as never
}`,...t.parameters?.docs?.source},description:{story:"Sizing comes from the menu panel (`component.menu.itemHeight`/`itemPaddingBlock`) — there is no size prop.",...t.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      MpMenuItem,
      MpRowActionsMenu
    },
    template: \`
      <div class="d-flex justify-center pt-4" style="min-height: 280px">
        <MpRowActionsMenu ariaLabel="Order actions" itemLabel="#10002">
          <MpMenuItem title="View order" icon="eye" />
          <MpMenuItem title="Print packing slip" icon="printer" />
          <v-divider class="my-1" />
          <MpMenuItem title="Cancel order" icon="ban" danger />
        </MpRowActionsMenu>
      </div>
    \`
  }),
  args: {} as never,
  play: async ({
    canvasElement
  }) => {
    await new Promise(resolve => setTimeout(resolve, 300));
    canvasElement.querySelector<HTMLElement>('[aria-label="Order actions for #10002"]')?.click();
  }
}`,...n.parameters?.docs?.source},description:{story:"In context: slotted into the canonical kebab menu.",...n.parameters?.docs?.description}}};const M=["Default","Variants","States","InRowActionsMenu"];export{s as Default,n as InRowActionsMenu,t as States,e as Variants,M as __namedExportsOrder,u as default};
