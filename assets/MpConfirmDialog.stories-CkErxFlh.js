import{r as m,w as h}from"./iframe-DH-XNaA6.js";import{M as n}from"./MpConfirmDialog-Brqm1ewS.js";import{M as u}from"./MpRowActionsMenu-B3n7Nt9u.js";import{M as v}from"./MpStatusChip-BgtNpj8f.js";import{M as f}from"./MpEmptyState-BasWsDO3.js";import{C as b,a as w}from"./fixtures-JszyI_e-.js";import"./preload-helper-PPVm8Dsz.js";import"./MpDialog-vzXqpvNK.js";import"./useScrollEdges-CBa2dNoC.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./MpIllustration-C2XUoC6J.js";const P={title:"Molecules/MpConfirmDialog",component:n,tags:["autodocs"],parameters:{docs:{description:{component:`
### Overview
\`MpConfirmDialog\` is a small confirm/cancel dialog for one-shot decisions (delete a node,
discard a draft). It closes itself on Cancel, Escape, backdrop click, and after emitting
\`confirm\`. Use \`danger\` for destructive actions — it switches the icon and confirm button
to the error color.

**Use when:** an action needs a single yes/no gate before running — especially destructive or
hard-to-undo ones.

**Don't use when:** the decision needs input fields or a picker (use \`MpFormDrawer\` or a
dedicated dialog like \`MpMoveToFolderDialog\`), or the action is trivially reversible (just do
it and offer undo).

### Usage
\`\`\`html
<MpConfirmDialog
  v-model="confirmOpen"
  danger
  title="Delete this split?"
  message="Deleting it also removes every step inside its branches."
  confirm-label="Delete split"
  @confirm="deleteSplit()"
/>
\`\`\`

### 🟢 Do's
- **Do** name the consequence in \`message\` ("also removes every step inside its branches").
- **Do** use a verb-first \`confirmLabel\` ("Delete split", "Discard draft") — never "OK".
- **Do** set \`danger\` whenever the confirm button destroys data.

### 🔴 Don'ts
- **Don't** use it for forms or multi-field input — use \`MpFormDrawer\` or a dedicated dialog
  (e.g. \`MpMoveToFolderDialog\`).
- **Don't** chain two confirm dialogs; if an action needs double confirmation, rethink the flow.

### A11y
- **Provides:** the dialog surface is wired to its title and message via \`aria-labelledby\`/
  \`aria-describedby\`, so it announces with its name and consequence on open *(fixed in the
  Phase 4 a11y pass)*; Vuetify's \`v-dialog\` traps focus, closes on Escape and backdrop click,
  and restores focus to the trigger on close; Cancel and confirm are real buttons with visible
  text; the danger icon is decorative (\`v-icon\` is \`aria-hidden\`).
- **Consumer must:** phrase \`title\` as the question and \`message\` as the consequence — screen
  readers read them in order when the dialog opens.
- **Gaps:** initial focus lands on the first focusable (Cancel) rather than an explicit safe
  default (backlog).
        `}}},args:{modelValue:!0,title:"Apply this change?",message:"The updated settings take effect for all new enrollments immediately.",confirmLabel:"Apply",danger:!1},argTypes:{modelValue:{control:"boolean",description:"v-model — dialog visibility. The component sets it false on Cancel, Escape, backdrop click, and confirm."},title:{control:"text",description:'The question, phrased as a yes/no decision ("Delete this split?").'},message:{control:"text",description:"The consequence of confirming — plain body text."},confirmLabel:{control:"text",description:'Verb-first confirm button label. Defaults to "Confirm"; never use "OK".'},danger:{control:"boolean",description:"Destructive styling: error triangle icon + error confirm button."},consequences:{control:"object",description:"Optional bullet list of consequences, rendered between the message and the action buttons."},confirm:{control:!1,description:"Event — emitted when the confirm button is clicked (the dialog then closes itself).",table:{category:"events"}}},render:e=>({components:{MpConfirmDialog:n},setup(){const t=m(!0);return h(()=>[e.title,e.danger],()=>{t.value=!0}),{args:e,open:t}},template:`
      <section style="min-height:360px;background:rgb(var(--v-theme-background));padding:24px;">
        <v-btn variant="outlined" @click="open = true">Open dialog</v-btn>
        <MpConfirmDialog v-bind="args" v-model="open" />
      </section>
    `})},c={},d={args:{title:"Delete this split?",message:'Deleting "Opened welcome email?" also removes every step inside its branches. Steps after the point where the branches rejoin are kept.',confirmLabel:"Delete split",danger:!0}},a={args:{title:"Stop this campaign send?",message:'Stopping "Black Friday 2025 — Early Access VIP" cancels delivery for the 18,240 contacts still queued. The 6,411 emails already sent cannot be recalled, and their opens and clicks will keep reporting under this campaign. A stopped campaign cannot be resumed — to send to the remaining contacts later, duplicate the campaign and target the "Not yet received" segment.',confirmLabel:"Stop send",danger:!0}},i={args:{title:"Delete this segment?",message:'Deleting "VIP — Repeat Buyers" removes it everywhere it is used.',confirmLabel:"Delete segment",danger:!0,consequences:["3 active campaigns targeting this segment will lose their audience.","2 journeys use this segment as an entry filter.","This cannot be undone."]}},s={render:()=>({components:{MpConfirmDialog:n},data:()=>({which:"neutral"}),template:`
      <div class="d-flex ga-2 flex-wrap">
        <v-btn variant="outlined" class="text-none" @click="which = 'neutral'">Neutral</v-btn>
        <v-btn variant="outlined" class="text-none" @click="which = 'danger'">Danger</v-btn>

        <MpConfirmDialog
          :model-value="which === 'neutral'"
          title="Publish this journey?"
          message="Contacts matching the entry filter will start entering immediately."
          confirm-label="Publish"
          @update:model-value="which = ''"
        />
        <MpConfirmDialog
          :model-value="which === 'danger'"
          danger
          title="Delete this segment?"
          message="Deleting “VIP — Repeat Buyers” removes it everywhere it is used."
          confirm-label="Delete segment"
          @update:model-value="which = ''"
        />
      </div>
    `}),args:{}},o={render:()=>({components:{MpConfirmDialog:n},data:()=>({open:!0}),template:`
      <div>
        <v-btn variant="outlined" class="text-none" @click="open = true">Open</v-btn>
        <MpConfirmDialog
          v-model="open"
          title="Archive this campaign?"
          message="Archived campaigns stop reporting and move out of the main list. You can restore them later."
          confirm-label="Archive"
        />
      </div>
    `}),args:{}},r={render:()=>({components:{MpConfirmDialog:n},data:()=>({which:""}),template:`
      <div class="d-flex ga-2 flex-wrap">
        <v-btn variant="outlined" class="text-none" @click="which = 'short'">Short</v-btn>
        <v-btn variant="outlined" class="text-none" @click="which = 'long'">Long message</v-btn>
        <v-btn variant="outlined" class="text-none" @click="which = 'consequences'">With consequences</v-btn>

        <MpConfirmDialog :model-value="which === 'short'" title="Discard changes?" message="Your edits will be lost." confirm-label="Discard" danger @update:model-value="which = ''" />
        <MpConfirmDialog
          :model-value="which === 'long'"
          title="Remove this sales channel?"
          message="Removing the channel stops order sync immediately and unlinks every product mapping. Historical orders stay in Commerce, but inventory will no longer reconcile against this storefront until it is reconnected."
          confirm-label="Remove channel"
          danger
          @update:model-value="which = ''"
        />
        <MpConfirmDialog
          :model-value="which === 'consequences'"
          title="Delete this segment?"
          message="Deleting “VIP — Repeat Buyers” removes it everywhere it is used."
          :consequences="['3 active campaigns targeting this segment will lose their audience.', '2 journeys use this segment as an entry filter.', 'This cannot be undone.']"
          confirm-label="Delete segment"
          danger
          @update:model-value="which = ''"
        />
      </div>
    `}),args:{}},l={render:()=>({components:{MpConfirmDialog:n,MpRowActionsMenu:u,MpStatusChip:v,MpEmptyState:f},setup(){const e=m([...b]),t=m(null),g=m(!1);return{rows:e,pending:t,open:g,headers:w.concat([{title:"",key:"actions",sortable:!1,align:"end"}]),ask:p=>{t.value=p,g.value=!0},remove:()=>{e.value=e.value.filter(p=>p.id!==t.value?.id)}}},template:`
      <v-card flat border rounded="lg">
        <v-data-table v-if="rows.length" :headers="headers" :items="rows" item-value="id" hide-default-footer>
          <template #item.status="{ item }">
            <MpStatusChip :status="item.status" type="campaign" size="sm" />
          </template>
          <template #item.actions="{ item }">
            <MpRowActionsMenu aria-label="Campaign actions" :item-label="item.name">
              <v-list-item title="Edit" prepend-icon="pencil" />
              <v-list-item title="Duplicate" prepend-icon="copy" />
              <v-divider class="my-1" />
              <v-list-item title="Delete" prepend-icon="trash-2" class="text-error" @click="ask(item)" />
            </MpRowActionsMenu>
          </template>
        </v-data-table>
        <MpEmptyState v-else title="No campaigns left" icon="megaphone" description="Every campaign in this list was deleted." />

        <MpConfirmDialog
          v-model="open"
          danger
          title="Delete this campaign?"
          :message="pending ? 'Deleting “' + pending.name + '” removes it and its reporting history.' : ''"
          :consequences="['Reporting for this campaign will no longer be available.', 'This cannot be undone.']"
          confirm-label="Delete campaign"
          @confirm="remove"
        />
      </v-card>
    `}),args:{}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"{}",...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Delete this split?',
    message: 'Deleting "Opened welcome email?" also removes every step inside its branches. Steps after the point where the branches rejoin are kept.',
    confirmLabel: 'Delete split',
    danger: true
  }
}`,...d.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Stop this campaign send?',
    message: 'Stopping "Black Friday 2025 — Early Access VIP" cancels delivery for the 18,240 contacts ' + 'still queued. The 6,411 emails already sent cannot be recalled, and their opens and clicks ' + 'will keep reporting under this campaign. A stopped campaign cannot be resumed — to send to ' + 'the remaining contacts later, duplicate the campaign and target the "Not yet received" segment.',
    confirmLabel: 'Stop send',
    danger: true
  }
}`,...a.parameters?.docs?.source},description:{story:"A long, multi-sentence message wraps inside the 440px card without breaking the action row.",...a.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Delete this segment?',
    message: 'Deleting "VIP — Repeat Buyers" removes it everywhere it is used.',
    confirmLabel: 'Delete segment',
    danger: true,
    consequences: ['3 active campaigns targeting this segment will lose their audience.', '2 journeys use this segment as an entry filter.', 'This cannot be undone.']
  }
}`,...i.parameters?.docs?.source},description:{story:"Bullet list of consequences rendered between the message and the action buttons.",...i.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      MpConfirmDialog
    },
    data: () => ({
      which: 'neutral' as string
    }),
    template: \`
      <div class="d-flex ga-2 flex-wrap">
        <v-btn variant="outlined" class="text-none" @click="which = 'neutral'">Neutral</v-btn>
        <v-btn variant="outlined" class="text-none" @click="which = 'danger'">Danger</v-btn>

        <MpConfirmDialog
          :model-value="which === 'neutral'"
          title="Publish this journey?"
          message="Contacts matching the entry filter will start entering immediately."
          confirm-label="Publish"
          @update:model-value="which = ''"
        />
        <MpConfirmDialog
          :model-value="which === 'danger'"
          danger
          title="Delete this segment?"
          message="Deleting “VIP — Repeat Buyers” removes it everywhere it is used."
          confirm-label="Delete segment"
          @update:model-value="which = ''"
        />
      </div>
    \`
  }),
  args: {} as never
}`,...s.parameters?.docs?.source},description:{story:"Two structures, and they are the whole component: a neutral confirmation and a destructive\none. `danger` swaps the header icon to the error tone and the confirm button to `error` —\nnothing else changes, which is the point.",...s.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      MpConfirmDialog
    },
    data: () => ({
      open: true
    }),
    template: \`
      <div>
        <v-btn variant="outlined" class="text-none" @click="open = true">Open</v-btn>
        <MpConfirmDialog
          v-model="open"
          title="Archive this campaign?"
          message="Archived campaigns stop reporting and move out of the main list. You can restore them later."
          confirm-label="Archive"
        />
      </div>
    \`
  }),
  args: {} as never
}`,...o.parameters?.docs?.source},description:{story:"There is no `size` prop. A confirm prompt is always `MpDialog`'s `sm` (440px) — a prompt the\nreader has to take in at a glance should not be a wide measure. If a confirmation needs more\nroom than this, it is a form, and it belongs in `MpFormDrawer`.",...o.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      MpConfirmDialog
    },
    data: () => ({
      which: '' as string
    }),
    template: \`
      <div class="d-flex ga-2 flex-wrap">
        <v-btn variant="outlined" class="text-none" @click="which = 'short'">Short</v-btn>
        <v-btn variant="outlined" class="text-none" @click="which = 'long'">Long message</v-btn>
        <v-btn variant="outlined" class="text-none" @click="which = 'consequences'">With consequences</v-btn>

        <MpConfirmDialog :model-value="which === 'short'" title="Discard changes?" message="Your edits will be lost." confirm-label="Discard" danger @update:model-value="which = ''" />
        <MpConfirmDialog
          :model-value="which === 'long'"
          title="Remove this sales channel?"
          message="Removing the channel stops order sync immediately and unlinks every product mapping. Historical orders stay in Commerce, but inventory will no longer reconcile against this storefront until it is reconnected."
          confirm-label="Remove channel"
          danger
          @update:model-value="which = ''"
        />
        <MpConfirmDialog
          :model-value="which === 'consequences'"
          title="Delete this segment?"
          message="Deleting “VIP — Repeat Buyers” removes it everywhere it is used."
          :consequences="['3 active campaigns targeting this segment will lose their audience.', '2 journeys use this segment as an entry filter.', 'This cannot be undone.']"
          confirm-label="Delete segment"
          danger
          @update:model-value="which = ''"
        />
      </div>
    \`
  }),
  args: {} as never
}`,...r.parameters?.docs?.source},description:{story:"The content states: a one-line message, a long message that wraps, and a consequences list.\nAll three sit in the same 20px body band — since Phase 4 this component composes `MpDialog`\nand no longer sets any inset of its own.",...r.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      MpConfirmDialog,
      MpRowActionsMenu,
      MpStatusChip,
      MpEmptyState
    },
    setup() {
      const rows = ref([...CAMPAIGNS]);
      const pending = ref<typeof CAMPAIGNS[number] | null>(null);
      const open = ref(false);
      return {
        rows,
        pending,
        open,
        headers: CAMPAIGN_HEADERS.concat([{
          title: '',
          key: 'actions',
          sortable: false,
          align: 'end' as const
        }] as never),
        ask: (row: typeof CAMPAIGNS[number]) => {
          pending.value = row;
          open.value = true;
        },
        remove: () => {
          rows.value = rows.value.filter(r => r.id !== pending.value?.id);
        }
      };
    },
    template: \`
      <v-card flat border rounded="lg">
        <v-data-table v-if="rows.length" :headers="headers" :items="rows" item-value="id" hide-default-footer>
          <template #item.status="{ item }">
            <MpStatusChip :status="item.status" type="campaign" size="sm" />
          </template>
          <template #item.actions="{ item }">
            <MpRowActionsMenu aria-label="Campaign actions" :item-label="item.name">
              <v-list-item title="Edit" prepend-icon="pencil" />
              <v-list-item title="Duplicate" prepend-icon="copy" />
              <v-divider class="my-1" />
              <v-list-item title="Delete" prepend-icon="trash-2" class="text-error" @click="ask(item)" />
            </MpRowActionsMenu>
          </template>
        </v-data-table>
        <MpEmptyState v-else title="No campaigns left" icon="megaphone" description="Every campaign in this list was deleted." />

        <MpConfirmDialog
          v-model="open"
          danger
          title="Delete this campaign?"
          :message="pending ? 'Deleting “' + pending.name + '” removes it and its reporting history.' : ''"
          :consequences="['Reporting for this campaign will no longer be available.', 'This cannot be undone.']"
          confirm-label="Delete campaign"
          @confirm="remove"
        />
      </v-card>
    \`
  }),
  args: {} as never
}`,...l.parameters?.docs?.source},description:{story:`**In context.** The real flow: a row's kebab menu triggers the prompt, and confirming
actually removes the row. This is the pattern every destructive action in the platform
uses — the table never deletes on click, the dialog is the gate.`,...l.parameters?.docs?.description}}};const E=["Default","Danger","LongMessage","WithConsequences","Variants","Sizes","States","InContextDeleteFromTable"];export{d as Danger,c as Default,l as InContextDeleteFromTable,a as LongMessage,o as Sizes,r as States,s as Variants,i as WithConsequences,E as __namedExportsOrder,P as default};
