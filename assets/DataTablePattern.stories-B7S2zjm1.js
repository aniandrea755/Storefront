import{r as a,c as h}from"./iframe-DH-XNaA6.js";import{M as c}from"./MpFilterTabs-B_gxggkd.js";import{M as p}from"./MpDataTableToolbar-B8KxFN8z.js";import{M as w}from"./MpStatusChip-BgtNpj8f.js";import{M as b}from"./MpEmptyState-BasWsDO3.js";import{M}from"./MpFloatingBulkBar-BNeeQKsI.js";import{M as k}from"./MpTableSkeleton-CIdhc0pK.js";import{M as T}from"./MpRowActionsMenu-B3n7Nt9u.js";import"./preload-helper-PPVm8Dsz.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./MpFormDrawer-cMf60X6E.js";import"./useFocusTrap-DNOqYf4B.js";import"./useScrollEdges-CBa2dNoC.js";import"./MpFormField-BzBLjfV3.js";import"./MpIllustration-C2XUoC6J.js";const _={title:"Patterns/Data Table",tags:["autodocs"],parameters:{docs:{description:{component:'\n### Overview\nThe **Data Table pattern** is the canonical list-view composition used by every table page in\nthe platform — Sales Orders, Campaigns, Contacts, Tickets, Products, Coupons. Copy this\nstructure whenever you build a list view. The reference implementation is\n`src/views/Commerce/SalesOrders.vue`.\n\n```\nMpPageHeader (title + primary action; MpFilterTabs in its #tabs slot)\n  └── MpFilterTabs (All / Status1 / Status2, with counts)\n  └── v-card variant="flat" border rounded="lg"\n        └── MpDataTableToolbar (v-model:search + filters + actions)\n        └── v-data-table (custom cell templates)  |  MpTableSkeleton while loading\n        └── MpEmptyState (inside #no-data when 0 items)\n  └── MpFloatingBulkBar (when selections > 0)\n```\n\n### Layer by layer\n\n**1. MpFilterTabs** — status segmentation above the card. Pass `tabs` as\n`{ label, key, count }[]` with counts computed from the *unfiltered* dataset, and bind the\nactive key with `v-model`. In real views the tabs live in `MpPageHeader`\'s `#tabs` slot;\nthey are shown standalone here to keep the pattern in focus. Tab filtering happens in a\ncomputed — the table just receives the filtered array.\n\n**2. The card** — `v-card variant="flat" border rounded="lg" class="overflow-hidden"`.\nOne card contains the toolbar and the table; nothing else. No elevation, ever.\n\n**3. MpDataTableToolbar** — directly above the table, inside the card. Bind\n`v-model:search` (updates every keystroke; debounce expensive work yourself), pass\n`total-count` as the **filtered** length so the "N records" line matches the table, and give\nit a specific `search-placeholder` ("Search orders…"). Drawer filters go in the\n`#filter-content` slot; view-specific controls (folder select, export) in `#actions`.\n\n**4. v-data-table** — `item-value` for selection identity, `show-select` for the checkbox\ncolumn, `hover`, `density="comfortable"`, and the `search` prop wired to the toolbar model.\nStyle cells with custom `#item.*` templates:\n- Identifier column reads as a link: `text-primary font-weight-bold`.\n- Status columns always use `MpStatusChip` with the **correct `type`** (`order`,\n  `fulfillment`, `payment`, `campaign`, `ticket`…) and `size="sm"` in tables.\n- The last column is `MpRowActionsMenu` (kebab) with `v-list-item`s; destructive items get\n  `class="text-error"` behind a divider. Wrap it in `<div @click.stop>` if rows navigate on click.\n\n**5. MpEmptyState** — rendered inside the table\'s `#no-data` slot, so it appears in the card\nbelow the toolbar. Distinguish the two empties: *no matches* (search/filters active → offer to\nadjust) vs *truly empty* (nothing exists yet → offer the create action).\n\n**6. MpTableSkeleton** — while loading, render it *in place of* the table\n(`v-if="loading"` / `v-else`), keeping the toolbar visible.\n\n**7. MpFloatingBulkBar** — outside the card, after it. Appears automatically when\n`count > 0`. Pass `count` and `total` (filtered length), handle `@clear` and\n`@select-all`, and put bulk action buttons in the default slot — destructive ones confirmed\nvia `MpConfirmDialog` with `danger`.\n\n### The table\'s own geometry (Phase 4, P4-4)\nThe rows you see below are not sized by the pattern — they come from `component.table.*`,\napplied to `v-data-table` in `global.scss`. Row height is a stated decision now rather than\nan emergent side effect of padding plus line-height:\n\n| Token | Governs |\n|---|---|\n| `table.rowMinHeight` (48) | the body row\'s floor — a cell with a chip and a cell with plain text render the same height |\n| `table.headerMinHeight` (40) | the header row\'s floor, shared with buttons, form fields, nav items and list rows |\n| `table.cellPaddingBlock` (14) · `cellPaddingInline` (16) | body cells; the header takes the same inline inset, so a column label can never sit off-axis from its values |\n| `table.headerPaddingBlock` (8) | header cells — was an off-scale `5px !important` |\n| `table.cellPaddingInlineCompact` (8) | the sub-`sm` step that keeps a three-column table off a horizontal scrollbar at 375px |\n\nThese are **floors, not caps.** A row whose tallest cell holds a real control still grows past\nthem — a body row with a 40px row-actions kebab measures ~69, and a header row with a select\ncheckbox measures ~52. That is correct: the token sets the resting rhythm and the content sets\nthe exception. The visible effect of P4-4 is on rows that had no such cell — a header row\nwithout a selection column went from Vuetify\'s undecided 48 to a deliberate 40.\n\n`MpTableSkeleton` is pinned to the **same** tokens, so a table swapping from loading to loaded\ndoes not shift. It used to sit at the card inset (20) against the table\'s 16.\n\nEvery control in `MpDataTableToolbar` — search field, Filter button, column toggle — resolves\nto `component.control.height` (40), the same baseline as the header row beneath it. Adding a\ncontrol to that row means giving it the token, not a number.\n\n### 🟢 Do\'s\n- **Do** compute tab counts from the full dataset and rows from the tab + drawer filters.\n- **Do** keep the primary "Create …" action in `MpPageHeader`, not in the toolbar.\n- **Do** prune selections when filters drop selected rows out of view.\n\n### 🔴 Don\'ts\n- **Don\'t** put bulk actions in the toolbar — selection UI belongs to `MpFloatingBulkBar`.\n- **Don\'t** hand-roll status cells — `MpStatusChip` with the right `type` is mandatory.\n- **Don\'t** render `MpEmptyState` outside the card, and don\'t merge empty with error states\n  (`MpErrorState` exists for failures).\n        '}}}},t=[{id:1,orderNumber:"MB-1041",date:"Jul 17, 2026",customer:"Sarah Mitchell",items:3,total:"$184.50",fulfillment:"Shipped",status:"Completed"},{id:2,orderNumber:"MB-1040",date:"Jul 17, 2026",customer:"James Okafor",items:1,total:"$59.00",fulfillment:"Ready For Fulfillment",status:"Processing"},{id:3,orderNumber:"MB-1039",date:"Jul 16, 2026",customer:"Priya Sharma",items:5,total:"$412.75",fulfillment:"Not Ready",status:"Processing"},{id:4,orderNumber:"MB-1038",date:"Jul 16, 2026",customer:"Daniel Reyes",items:2,total:"$96.20",fulfillment:"Shipped",status:"Completed"},{id:5,orderNumber:"MB-1037",date:"Jul 15, 2026",customer:"Emily Chen",items:4,total:"$233.10",fulfillment:"Return Requested",status:"On Hold"},{id:6,orderNumber:"MB-1036",date:"Jul 15, 2026",customer:"Marcus Webb",items:1,total:"$28.99",fulfillment:"Cancelled",status:"Cancelled"},{id:7,orderNumber:"MB-1035",date:"Jul 14, 2026",customer:"Aisha Bello",items:6,total:"$540.00",fulfillment:"Shipped",status:"Completed"},{id:8,orderNumber:"MB-1034",date:"Jul 14, 2026",customer:"Tom Nakamura",items:2,total:"$147.35",fulfillment:"Unapproved",status:"Processing"},{id:9,orderNumber:"MB-1033",date:"Jul 13, 2026",customer:"Laura Costa",items:3,total:"$201.60",fulfillment:"Shipped",status:"Refunded"},{id:10,orderNumber:"MB-1032",date:"Jul 12, 2026",customer:"Viktor Hansen",items:1,total:"$74.90",fulfillment:"Ready For Fulfillment",status:"Processing"}],f=[{title:"Order",key:"orderNumber",sortable:!0},{title:"Date",key:"date"},{title:"Customer",key:"customer"},{title:"Items",key:"items",align:"end",width:70},{title:"Total",key:"total",align:"end"},{title:"Fulfillment",key:"fulfillment"},{title:"Status",key:"status"},{title:"",key:"actions",sortable:!1,width:48}];function v(r){return()=>({components:{MpFilterTabs:c,MpDataTableToolbar:p,MpStatusChip:w,MpEmptyState:b,MpFloatingBulkBar:M,MpRowActionsMenu:T},setup(){const l=a("all"),d=a(""),m=a(r),y=h(()=>[{label:"All Orders",key:"all",count:t.length},{label:"Completed",key:"completed",count:t.filter(e=>e.status==="Completed").length},{label:"Processing",key:"processing",count:t.filter(e=>e.status==="Processing").length},{label:"Not Fulfilled",key:"not_fulfilled",count:t.filter(e=>!["Shipped","Cancelled"].includes(e.fulfillment)).length}]),u=h(()=>{switch(l.value){case"completed":return t.filter(e=>e.status==="Completed");case"processing":return t.filter(e=>e.status==="Processing");case"not_fulfilled":return t.filter(e=>!["Shipped","Cancelled"].includes(e.fulfillment));default:return t}});function g(){m.value=u.value.map(e=>e.id)}return{activeTab:l,search:d,selected:m,tabs:y,headers:f,filteredOrders:u,selectAll:g}},template:`
      <div class="d-flex flex-column gap-5">
        <MpFilterTabs v-model="activeTab" :tabs="tabs" aria-label="Filter orders by status" />

        <v-card variant="flat" border rounded="lg" class="overflow-hidden">
          <MpDataTableToolbar
            v-model:search="search"
            title="All Orders"
            :total-count="filteredOrders.length"
            search-placeholder="Search orders…"
          />

          <v-data-table
            v-model="selected"
            :headers="headers"
            :items="filteredOrders"
            :search="search"
            item-value="id"
            show-select
            hover
            density="comfortable"
            :items-per-page="15"
          >
            <template v-slot:item.orderNumber="{ item }">
              <span class="text-primary font-weight-bold cursor-pointer">{{ item.orderNumber }}</span>
            </template>

            <template v-slot:item.date="{ item }">
              <span class="text-medium-emphasis text-body-2 text-no-wrap">{{ item.date }}</span>
            </template>

            <template v-slot:item.total="{ item }">
              <span class="font-weight-semibold text-no-wrap">{{ item.total }}</span>
            </template>

            <template v-slot:item.fulfillment="{ item }">
              <MpStatusChip :status="item.fulfillment" type="fulfillment" size="sm" />
            </template>

            <template v-slot:item.status="{ item }">
              <MpStatusChip :status="item.status" type="order" size="sm" />
            </template>

            <template v-slot:item.actions="{ item }">
              <div @click.stop>
                <MpRowActionsMenu aria-label="Order actions">
                  <v-list-item prepend-icon="eye" title="View order" />
                  <v-list-item prepend-icon="package-check" title="Mark fulfilled" :disabled="item.fulfillment === 'Shipped'" />
                  <v-list-item prepend-icon="printer" title="Print invoice" />
                  <v-divider class="my-1" style="opacity: 0.4" />
                  <v-list-item prepend-icon="ban" title="Cancel order" class="text-error" :disabled="item.status === 'Cancelled'" />
                </MpRowActionsMenu>
              </div>
            </template>

            <template #no-data>
              <MpEmptyState
                icon="search"
                title="No orders match your search"
                description="Adjust your search or filters to see more."
                class="py-10"
              />
            </template>
          </v-data-table>
        </v-card>

        <MpFloatingBulkBar
          :count="selected.length"
          :total="filteredOrders.length"
          @clear="selected = []"
          @select-all="selectAll"
        >
          <v-btn size="small" variant="flat" color="surface" prepend-icon="package-check" class="text-none" rounded="lg">Mark Fulfilled</v-btn>
          <v-btn size="small" variant="flat" color="surface" prepend-icon="ban" class="text-none text-error" rounded="lg">Cancel Orders</v-btn>
        </MpFloatingBulkBar>
      </div>
    `})}const s={render:v([])},o={render:()=>({components:{MpFilterTabs:c,MpDataTableToolbar:p,MpEmptyState:b},setup(){const r=a("all"),l=a("");return{activeTab:r,search:l,tabs:[{label:"All Orders",key:"all",count:0},{label:"Completed",key:"completed",count:0},{label:"Processing",key:"processing",count:0},{label:"Not Fulfilled",key:"not_fulfilled",count:0}],headers:f}},template:`
      <div class="d-flex flex-column gap-5">
        <MpFilterTabs v-model="activeTab" :tabs="tabs" aria-label="Filter orders by status" />

        <v-card variant="flat" border rounded="lg" class="overflow-hidden">
          <MpDataTableToolbar
            v-model:search="search"
            title="All Orders"
            :total-count="0"
            search-placeholder="Search orders…"
          />

          <v-data-table :headers="headers" :items="[]" density="comfortable" hide-default-footer>
            <template #no-data>
              <MpEmptyState
                icon="shopping-cart"
                title="No orders yet"
                description="Orders appear here as your channels start selling."
                action-label="Create draft order"
                action-icon="plus"
                class="py-10"
              />
            </template>
          </v-data-table>
        </v-card>
      </div>
    `})},i={render:()=>({components:{MpFilterTabs:c,MpDataTableToolbar:p,MpTableSkeleton:k},setup(){const r=a("all"),l=a("");return{activeTab:r,search:l,tabs:[{label:"All Orders",key:"all"},{label:"Completed",key:"completed"},{label:"Processing",key:"processing"},{label:"Not Fulfilled",key:"not_fulfilled"}]}},template:`
      <div class="d-flex flex-column gap-5">
        <MpFilterTabs v-model="activeTab" :tabs="tabs" aria-label="Filter orders by status" />

        <v-card variant="flat" border rounded="lg" class="overflow-hidden">
          <MpDataTableToolbar
            v-model:search="search"
            title="All Orders"
            search-placeholder="Search orders…"
          />
          <MpTableSkeleton :rows="8" :columns="6" />
        </v-card>
      </div>
    `})},n={render:v([2,3,8])};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: tableStory([])
}`,...s.parameters?.docs?.source},description:{story:`The full populated pattern: filter tabs with live counts, toolbar search, status chips
with the correct types, and a kebab row-actions menu. Tabs and search are functional —
switch a tab or type in the search to see the table filter.`,...s.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      MpFilterTabs,
      MpDataTableToolbar,
      MpEmptyState
    },
    setup() {
      const activeTab = ref('all');
      const search = ref('');
      const tabs = [{
        label: 'All Orders',
        key: 'all',
        count: 0
      }, {
        label: 'Completed',
        key: 'completed',
        count: 0
      }, {
        label: 'Processing',
        key: 'processing',
        count: 0
      }, {
        label: 'Not Fulfilled',
        key: 'not_fulfilled',
        count: 0
      }];
      return {
        activeTab,
        search,
        tabs,
        headers
      };
    },
    template: \`
      <div class="d-flex flex-column gap-5">
        <MpFilterTabs v-model="activeTab" :tabs="tabs" aria-label="Filter orders by status" />

        <v-card variant="flat" border rounded="lg" class="overflow-hidden">
          <MpDataTableToolbar
            v-model:search="search"
            title="All Orders"
            :total-count="0"
            search-placeholder="Search orders…"
          />

          <v-data-table :headers="headers" :items="[]" density="comfortable" hide-default-footer>
            <template #no-data>
              <MpEmptyState
                icon="shopping-cart"
                title="No orders yet"
                description="Orders appear here as your channels start selling."
                action-label="Create draft order"
                action-icon="plus"
                class="py-10"
              />
            </template>
          </v-data-table>
        </v-card>
      </div>
    \`
  })
}`,...o.parameters?.docs?.source},description:{story:`Zero items. MpEmptyState renders inside the table's #no-data slot, so it sits in the card
below the toolbar. A truly empty list (nothing exists yet) offers the create action;
a filtered-to-empty list would instead suggest adjusting search/filters.`,...o.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      MpFilterTabs,
      MpDataTableToolbar,
      MpTableSkeleton
    },
    setup() {
      const activeTab = ref('all');
      const search = ref('');
      const tabs = [{
        label: 'All Orders',
        key: 'all'
      }, {
        label: 'Completed',
        key: 'completed'
      }, {
        label: 'Processing',
        key: 'processing'
      }, {
        label: 'Not Fulfilled',
        key: 'not_fulfilled'
      }];
      return {
        activeTab,
        search,
        tabs
      };
    },
    template: \`
      <div class="d-flex flex-column gap-5">
        <MpFilterTabs v-model="activeTab" :tabs="tabs" aria-label="Filter orders by status" />

        <v-card variant="flat" border rounded="lg" class="overflow-hidden">
          <MpDataTableToolbar
            v-model:search="search"
            title="All Orders"
            search-placeholder="Search orders…"
          />
          <MpTableSkeleton :rows="8" :columns="6" />
        </v-card>
      </div>
    \`
  })
}`,...i.parameters?.docs?.source},description:{story:`Initial load. MpTableSkeleton renders in place of the table (v-if="loading" / v-else)
while the toolbar stays visible, so the page keeps its shape.`,...i.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: tableStory([2, 3, 8])
}`,...n.parameters?.docs?.source},description:{story:`Rows selected. MpFloatingBulkBar appears automatically when count > 0 — it shows the
selection tally, a select-all affordance, bulk action buttons, and a clear control.
Destructive bulk actions must confirm via MpConfirmDialog with the danger prop.`,...n.parameters?.docs?.description}}};const z=["Default","Empty","Loading","WithSelection"];export{s as Default,o as Empty,i as Loading,n as WithSelection,z as __namedExportsOrder,_ as default};
