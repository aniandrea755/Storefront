import{o as h,r as m}from"./iframe-BqHSr5b_.js";import{M as a}from"./MpManageFoldersDrawer-QAt9qib_.js";import{M as f}from"./MpFolderSelect-CR4duRlu.js";import{M as v}from"./MpDataTableToolbar-2XPmr9xo.js";import{M as w}from"./MpStatusChip-Cvm9kx4z.js";import{a as M,C as b,F,e as D}from"./fixtures-JszyI_e-.js";import{u as y}from"./useFolders-Bmdz7Ozg.js";import"./preload-helper-PPVm8Dsz.js";import"./MpFormDrawer-NT-xQk6b.js";import"./useFocusTrap-oS9hmom4.js";import"./useScrollEdges-B2McRpMX.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./MpFormGrid-D0pxdSe6.js";import"./MpFormSection-CmGpUCf7.js";import"./MpConfirmDialog-g8XCZO_Q.js";import"./MpDialog-F4WZRRS8.js";import"./MpFormField-eWrsvwna.js";const G={title:"Molecules/MpManageFoldersDrawer",component:a,tags:["autodocs"],parameters:{docs:{description:{component:`
### Overview
\`MpManageFoldersDrawer\` is a right-side drawer (480px, wraps \`MpFormDrawer\`) for full folder
CRUD within a scope: create (with optional one-level nesting under a parent), inline rename, and
delete with confirmation. Deleting a folder promotes its subfolders to the top level and emits
\`deleted(folderId)\` so the owning view can re-file affected items to "All folders". Folder data
lives in the global \`useFolders\` store — the drawer reads and writes it directly.

**Use when:** users need to create, rename, nest, or delete folders for a scope — opened from a
page header button or \`MpFolderSelect\`'s "Manage folders" action.

**Don't use when:** picking a folder for one item (\`MpMoveToFolderDialog\`) or filtering by
folder (\`MpFolderSelect\`).

### Usage
\`\`\`html
<MpManageFoldersDrawer
  v-model="manageOpen"
  scope="campaigns"
  :counts="countsByFolder"
  @deleted="id => campaignsStore.reassignFolder(id, null)"
/>
\`\`\`

### 🟢 Do's
- **Do** open it from the page header's "Manage Folders" button and from \`MpFolderSelect\`'s
  "Manage folders" action.
- **Do** listen for \`@deleted\` and call the item store's \`reassignFolder\`.
- **Do** pass \`counts\` — the per-folder item count is what makes deletion decisions safe.

### 🔴 Don'ts
- **Don't** use a centered dialog for this — folder management is a form surface and follows the
  drawer convention.
- **Don't** write to the folders store from the view while the drawer is open; the drawer owns
  folder CRUD.

### A11y
- **Provides:** inherits \`MpFormDrawer\`'s dialog semantics (\`role="dialog"\`, \`aria-modal\`,
  labelled title, focus trap, Escape-close, focus restore); rename/delete/save/cancel icon buttons
  all carry \`aria-label\`s; the rename field autofocuses and commits on Enter / cancels on Escape;
  delete is gated behind a confirmation dialog that names the folder.
- **Consumer must:** handle \`@deleted\` so items don't silently point at a dead folder id.
- **Provides (Phase 4):** the delete confirmation dialog is wired to its title and message via
  \`aria-labelledby\`/\`aria-describedby\`, and the rename field carries an \`aria-label\` naming
  the folder being renamed ("New name for X").
- **Gaps:** the "No folders yet" empty text is not a live region (backlog).
        `}}},argTypes:{modelValue:{control:"boolean",description:"v-model — drawer visibility."},scope:{control:"select",options:["campaigns","contents","images"],description:"Folder scope read from (and written to) the global useFolders store."},counts:{control:"object",description:"Item counts per folder id, shown next to each folder name."},deleted:{control:!1,description:"Event — fired with the folder id after deletion so the view can re-file its items.",table:{category:"events"}}},render:l=>({components:{MpManageFoldersDrawer:a},setup(){const e=m(!0);return{args:l,open:e}},template:`
      <section style="min-height:640px;background:rgb(var(--v-theme-background));padding:24px;">
        <v-btn variant="outlined" prepend-icon="folder-cog" @click="open = true">Manage folders</v-btn>
        <MpManageFoldersDrawer v-bind="args" v-model="open" />
      </section>
    `})},d={args:{modelValue:!0,scope:"campaigns",counts:{"cmp-promotions":7,"cmp-seasonal":5,"cmp-black-friday":2,"cmp-automated":5}}},c={args:{modelValue:!0,scope:"images",counts:{"img-banners":3,"img-products":3,"img-lifestyle":2,"img-logos":2}}},t={args:{modelValue:!0,scope:"contents",counts:{"cnt-templates":4,"cnt-campaigns":6,"cnt-holiday":2,"cnt-automation":3}}},o={args:{modelValue:!0,scope:"images",counts:{}},parameters:{docs:{disable:!0}},render:l=>({components:{MpManageFoldersDrawer:a},setup(){const e=y(),u=e.folders.filter(p=>p.scope==="images");e.folders=e.folders.filter(p=>p.scope!=="images"),h(()=>{e.folders=[...e.folders,...u]});const g=m(!0);return{args:l,open:g}},template:`
      <section style="min-height:640px;background:rgb(var(--v-theme-background));padding:24px;">
        <v-btn variant="outlined" prepend-icon="folder-cog" @click="open = true">Manage folders</v-btn>
        <MpManageFoldersDrawer v-bind="args" v-model="open" />
      </section>
    `})},r={render:()=>({components:{MpManageFoldersDrawer:a},data:()=>({which:"campaigns"}),template:`
      <div class="d-flex ga-2 flex-wrap">
        <v-btn variant="outlined" class="text-none" @click="which = 'campaigns'">scope="campaigns"</v-btn>
        <v-btn variant="outlined" class="text-none" @click="which = 'images'">scope="images"</v-btn>

        <MpManageFoldersDrawer :model-value="which === 'campaigns'" scope="campaigns" @update:model-value="which = ''" />
        <MpManageFoldersDrawer :model-value="which === 'images'" scope="images" @update:model-value="which = ''" />
      </div>
    `}),args:{}},s={render:()=>({components:{MpManageFoldersDrawer:a},data:()=>({open:!0}),template:`
      <div>
        <v-btn variant="outlined" class="text-none" @click="open = true">Manage folders</v-btn>
        <MpManageFoldersDrawer v-model="open" scope="campaigns" />
      </div>
    `}),args:{}},n={render:()=>({components:{MpManageFoldersDrawer:a},data:()=>({which:""}),template:`
      <div class="d-flex ga-2 flex-wrap">
        <v-btn variant="outlined" class="text-none" @click="which = 'full'">Populated</v-btn>
        <v-btn variant="outlined" class="text-none" @click="which = 'empty'">Empty scope</v-btn>

        <MpManageFoldersDrawer :model-value="which === 'full'" scope="campaigns" @update:model-value="which = ''" />
        <MpManageFoldersDrawer :model-value="which === 'empty'" scope="forms" @update:model-value="which = ''" />
      </div>
    `}),args:{}},i={render:()=>({components:{MpManageFoldersDrawer:a,MpFolderSelect:f,MpDataTableToolbar:v,MpStatusChip:w},setup(){return{manage:m(!1),folders:D,counts:F,rows:b,headers:M}},template:`
      <v-card flat border rounded="lg">
        <MpDataTableToolbar title="Campaigns" :total-count="rows.length" search-placeholder="Search campaigns…">
          <template #actions>
            <MpFolderSelect :folders="folders" :counts="counts" :total-count="102" @manage="manage = true" />
          </template>
        </MpDataTableToolbar>
        <v-data-table :headers="headers" :items="rows" item-value="id" hide-default-footer>
          <template #item.status="{ item }">
            <MpStatusChip :status="item.status" type="campaign" size="sm" />
          </template>
        </v-data-table>
        <MpManageFoldersDrawer v-model="manage" scope="campaigns" />
      </v-card>
    `}),args:{}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: true,
    scope: 'campaigns',
    counts: {
      'cmp-promotions': 7,
      'cmp-seasonal': 5,
      'cmp-black-friday': 2,
      'cmp-automated': 5
    }
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: true,
    scope: 'images',
    counts: {
      'img-banners': 3,
      'img-products': 3,
      'img-lifestyle': 2,
      'img-logos': 2
    }
  }
}`,...c.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: true,
    scope: 'contents',
    counts: {
      'cnt-templates': 4,
      'cnt-campaigns': 6,
      'cnt-holiday': 2,
      'cnt-automation': 3
    }
  }
}`,...t.parameters?.docs?.source},description:{story:'The contents scope, whose seed data includes a nested child ("Holiday 2026" under "Campaigns").',...t.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: true,
    scope: 'images',
    counts: {}
  },
  parameters: {
    docs: {
      disable: true
    }
  },
  render: args => ({
    components: {
      MpManageFoldersDrawer
    },
    setup() {
      const store = useFoldersStore();
      const removed = store.folders.filter(f => f.scope === 'images');
      store.folders = store.folders.filter(f => f.scope !== 'images');
      onBeforeUnmount(() => {
        store.folders = [...store.folders, ...removed];
      });
      const open = ref(true);
      return {
        args,
        open
      };
    },
    template: \`
      <section style="min-height:640px;background:rgb(var(--v-theme-background));padding:24px;">
        <v-btn variant="outlined" prepend-icon="folder-cog" @click="open = true">Manage folders</v-btn>
        <MpManageFoldersDrawer v-bind="args" v-model="open" />
      </section>
    \`
  })
}`,...o.parameters?.docs?.source},description:{story:`Zero folders in the scope — the list shows the "No folders yet" hint and the create form
becomes the only affordance.

The story temporarily empties the images scope in the shared folders store and restores it on
unmount; it is excluded from the docs page so it can't race the other stories' seeded state.`,...o.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      MpManageFoldersDrawer
    },
    data: () => ({
      which: 'campaigns' as string
    }),
    template: \`
      <div class="d-flex ga-2 flex-wrap">
        <v-btn variant="outlined" class="text-none" @click="which = 'campaigns'">scope="campaigns"</v-btn>
        <v-btn variant="outlined" class="text-none" @click="which = 'images'">scope="images"</v-btn>

        <MpManageFoldersDrawer :model-value="which === 'campaigns'" scope="campaigns" @update:model-value="which = ''" />
        <MpManageFoldersDrawer :model-value="which === 'images'" scope="images" @update:model-value="which = ''" />
      </div>
    \`
  }),
  args: {} as never
}`,...r.parameters?.docs?.source},description:{story:"One structure — a folder CRUD panel — instantiated per `scope`. Each scope has its own tree,\nread from `useFoldersStore`, so the same drawer manages campaigns, images and everything\nelse that is foldered.",...r.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      MpManageFoldersDrawer
    },
    data: () => ({
      open: true
    }),
    template: \`
      <div>
        <v-btn variant="outlined" class="text-none" @click="open = true">Manage folders</v-btn>
        <MpManageFoldersDrawer v-model="open" scope="campaigns" />
      </div>
    \`
  }),
  args: {} as never
}`,...s.parameters?.docs?.source},description:{story:"There is no `size` prop. This composes `MpFormDrawer` and inherits its 480px default\n(`layout.drawerWidth`), its 20px header/body/footer rhythm and its full-bleed collapse below\n640px. That inheritance is the reason Phase 4 changed nothing in this file: fixing the\ndrawer fixed this too.",...s.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      MpManageFoldersDrawer
    },
    data: () => ({
      which: '' as string
    }),
    template: \`
      <div class="d-flex ga-2 flex-wrap">
        <v-btn variant="outlined" class="text-none" @click="which = 'full'">Populated</v-btn>
        <v-btn variant="outlined" class="text-none" @click="which = 'empty'">Empty scope</v-btn>

        <MpManageFoldersDrawer :model-value="which === 'full'" scope="campaigns" @update:model-value="which = ''" />
        <MpManageFoldersDrawer :model-value="which === 'empty'" scope="forms" @update:model-value="which = ''" />
      </div>
    \`
  }),
  args: {} as never
}`,...n.parameters?.docs?.source},description:{story:"A populated tree, a nested tree, and an empty scope with only the create affordance.",...n.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      MpManageFoldersDrawer,
      MpFolderSelect,
      MpDataTableToolbar,
      MpStatusChip
    },
    setup() {
      const manage = ref(false);
      return {
        manage,
        folders: FOLDERS,
        counts: FOLDER_COUNTS,
        rows: CAMPAIGNS,
        headers: CAMPAIGN_HEADERS
      };
    },
    template: \`
      <v-card flat border rounded="lg">
        <MpDataTableToolbar title="Campaigns" :total-count="rows.length" search-placeholder="Search campaigns…">
          <template #actions>
            <MpFolderSelect :folders="folders" :counts="counts" :total-count="102" @manage="manage = true" />
          </template>
        </MpDataTableToolbar>
        <v-data-table :headers="headers" :items="rows" item-value="id" hide-default-footer>
          <template #item.status="{ item }">
            <MpStatusChip :status="item.status" type="campaign" size="sm" />
          </template>
        </v-data-table>
        <MpManageFoldersDrawer v-model="manage" scope="campaigns" />
      </v-card>
    \`
  }),
  args: {} as never
}`,...i.parameters?.docs?.source},description:{story:'**In context.** The real entry point: `MpFolderSelect` in a table toolbar\'s `#actions` slot,\nwhose "Manage folders" row opens this drawer.',...i.parameters?.docs?.description}}};const B=["Campaigns","Images","NestedFolders","EmptyFolderList","Variants","Sizes","States","InContextFromTheFolderMenu"];export{d as Campaigns,o as EmptyFolderList,c as Images,i as InContextFromTheFolderMenu,t as NestedFolders,s as Sizes,n as States,r as Variants,B as __namedExportsOrder,G as default};
