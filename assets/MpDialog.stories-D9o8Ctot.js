import{M as e}from"./MpDialog-F4WZRRS8.js";import{M as h}from"./MpListRow-Cp1HcjrS.js";import{M as w}from"./MpConfirmDialog-g8XCZO_Q.js";import{M as v}from"./MpFormGrid-D0pxdSe6.js";import{M as u}from"./MpFormSection-CmGpUCf7.js";import{M as b}from"./MpFormField-eWrsvwna.js";import"./iframe-BqHSr5b_.js";import"./preload-helper-PPVm8Dsz.js";import"./useScrollEdges-B2McRpMX.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const N={title:"Molecules/MpDialog",component:e,tags:["autodocs"],parameters:{docs:{description:{component:'\n### Overview\n`MpDialog` is the one modal shell. Before it, eight components built dialogs from a raw\n`v-dialog` + `v-card-title/text/actions` with five different header/body/footer rhythms\n(`pa-1` · `pt-4 px-5` + `px-3 py-2` + `px-4 pb-4` · `pa-5 pa-5 pa-4` · `16×20` + `20` +\n`12×16`) — CLAUDE.md already said "never raw `v-dialog`", but there was nothing to compose,\nso every new dialog re-decided its own insets.\n\nIt is the dialog analogue of `MpFormDrawer` and shares its geometry tokens\n(`component.dialog.*`), so a modal and a drawer cannot drift apart.\n\n**Use when:** a confirm prompt, a picker, or a short form that must sit centred over the page.\n\n**Don\'t use when:** the surface is a create/edit form with more than a couple of fields —\nuse `MpFormDrawer`. For a plain destructive confirm, use `MpConfirmDialog`, which is a\nthin wrapper over this.\n\n### Usage\n```html\n<MpDialog v-model="open" size="sm" title="Move to folder" :subtitle="itemName">\n  <!-- body children are spaced on component.dialog.gap -->\n  <v-text-field label="Name" />\n  <template #footer>\n    <v-btn variant="text" class="text-none" @click="open = false">Cancel</v-btn>\n    <v-btn color="primary" variant="flat" class="text-none" @click="save">Save</v-btn>\n  </template>\n</MpDialog>\n```\n\n### Geometry\nOne inset on all three bands — `component.dialog.padding` (20) — so the title, the fields and\nthe footer buttons share one left edge and one right edge. The body is a flex column on\n`component.dialog.gap` (16), which is what makes a form\'s field rhythm a property of the\nshell rather than of whatever utility each host remembered to add. Below\n`layout.breakpointCompact` (640) all three bands drop to `paddingCompact` (16), matching how\n`MpFormDrawer` collapses.\n\n**The header is a grid, and that is load-bearing (P6-1).** It has a floor of\n`component.dialog.headerMinHeight` (88), so a title-only modal and a title+subtitle modal are\nthe same height — the band used to be 72 / 87 / 109px depending on which optional lines were\npresent. The eyebrow, title and subtitle each own a row, and the lead and the trailing controls\nare placed on the *title\'s* row, so the close button sits on the title\'s optical centre rather\nthan the heading block\'s at any combination of optional lines.\n\n**Scroll affordance (P6-2).** When the body is scrolled, the header casts `shadow.sm` down and\nthe footer casts `shadow.scrollUp` up. The dividers are structure and never change; the shadow\nis state, and it is the only thing that tells a reader the content continues past the fold.\n\n### 🟢 Do\'s\n- **Do** put actions in `#footer`; they right-align on `component.dialog.footerGap` in\n  secondary-then-primary order. Use `#footerStart` for a left-aligned "Back" or "Clear all".\n- **Do** use `eyebrow` for a mode label ("New dashboard" / "Edit dashboard") and `#lead`\n  for an avatar — the same two names `MpPageHeader` and `MpListRow` already use.\n- **Do** reach for `flush` when the body brings its own frame (a preview stage, a full-bleed\n  picker). That is the supported way to opt out of the inset.\n\n### 🔴 Don\'ts\n- **Don\'t** add `pa-*` utilities or `mb-*` margins inside the body. The rhythm is the point of\n  the shell; a margin there lands *on top of* the 16px gap and yields 32.\n- **Don\'t** write `:deep(.mp-dialog__body) { padding: 0 }` in a host. That is what `flush` is.\n- **Don\'t** set a width on the host. The ramp is `size`.\n- **Don\'t** reach for `fullscreen` for forms — it is for preview surfaces.\n\n### A11y\n- **Provides:** `aria-labelledby` on the title and `aria-describedby` on the body, so a\n  screen reader announces the prompt text and not just the heading. Vuetify\'s overlay\n  handles the focus trap and restores focus to the trigger on close. Esc closes unless\n  `persistent`; with `guarded`, Esc and the scrim route through the `close` emit so the host\n  can confirm before discarding unsaved work.\n- **Consumer must:** write a `title` that stands on its own, and make the primary footer\n  action\'s label say what will happen ("Delete segment", not "OK").\n        '}}},argTypes:{size:{control:"inline-radio",options:["sm","md","lg"],description:"Width ramp — sm 440 · md 640 · lg 880 (`component.dialog.width.*`)."},tone:{control:"inline-radio",options:["neutral","error"],description:"Paints the header icon. Matches MpEmptyState's `tone` vocabulary."},title:{control:"text",description:"Dialog heading, rendered in the header band. Required — a modal without a title is a modal a user cannot label to themselves."},subtitle:{control:"text",description:"Optional supporting line under the title. Keep it to one sentence; longer context belongs in the body."},eyebrow:{control:"text",description:"Uppercase kicker above the title."},icon:{control:"text",description:"Lucide icon name (kebab-case). Ignored when `#lead` is filled."},fullscreen:{control:"boolean",description:"Edge-to-edge sheet — preview surfaces, not forms."},persistent:{control:"boolean",description:"Scrim and Esc no longer close it."},flush:{control:"boolean",description:"Body renders edge-to-edge with no inset and no gap, for a surface that brings its own frame. The supported alternative to a `:deep(.mp-dialog__body)` override."},guarded:{control:"boolean",description:"Esc / the close button / the scrim route through the `close` emit instead of closing directly, so the host can confirm before discarding unsaved work. Mirrors `MpFormDrawer`."},close:{control:!1,description:"Event — emitted instead of closing when `guarded` is set.",table:{category:"events"}},default:{control:!1,description:"Slot — dialog body. Children are spaced on `component.dialog.gap`.",table:{category:"slots"}},lead:{control:!1,description:"Slot — leading element in the header (an avatar or badge). Replaces `icon`.",table:{category:"slots"}},headerActions:{control:!1,description:"Slot — trailing header controls, before the close button.",table:{category:"slots"}},footer:{control:!1,description:"Slot — right-aligned actions, secondary then primary, on `component.dialog.footerGap`.",table:{category:"slots"}},footerStart:{control:!1,description:'Slot — left-aligned footer zone, held away from the primary pair. For a "Back" step or a destructive action.',table:{category:"slots"}}}};function d(g,f="Open dialog"){return{components:{MpDialog:e,MpListRow:h,MpFormGrid:v,MpFormSection:u,MpFormField:b},data:()=>({open:!0}),template:`
      <div>
        <v-btn variant="outlined" class="text-none" @click="open = true">${f}</v-btn>
        ${g}
      </div>
    `}}const p={render:()=>d(`
    <MpDialog v-model="open" title="Rename dashboard" subtitle="Visible to everyone with access">
      <v-text-field label="Dashboard name" model-value="Lifecycle Health" />
      <template #footer>
        <v-btn variant="text" class="text-none" @click="open = false">Cancel</v-btn>
        <v-btn color="primary" variant="flat" class="text-none" @click="open = false">Save changes</v-btn>
      </template>
    </MpDialog>
  `),args:{title:"Rename dashboard"}},t={render:()=>({components:{MpDialog:e},data:()=>({which:"plain"}),template:`
      <div class="d-flex ga-2 flex-wrap">
        <v-btn variant="outlined" class="text-none" @click="which = 'plain'">Title only</v-btn>
        <v-btn variant="outlined" class="text-none" @click="which = 'sub'">+ subtitle</v-btn>
        <v-btn variant="outlined" class="text-none" @click="which = 'icon'">+ icon</v-btn>
        <v-btn variant="outlined" class="text-none" @click="which = 'lead'">#lead + eyebrow</v-btn>

        <MpDialog :model-value="which === 'plain'" title="Rename dashboard" @update:model-value="which = ''">
          <p class="ma-0">Title only — the minimum header.</p>
        </MpDialog>

        <MpDialog :model-value="which === 'sub'" title="Move to folder" subtitle="Spring Refresh" @update:model-value="which = ''">
          <p class="ma-0">A subtitle carries the record the dialog is acting on.</p>
        </MpDialog>

        <MpDialog :model-value="which === 'icon'" title="Delete this segment?" icon="triangle-alert" tone="error" @update:model-value="which = ''">
          <p class="ma-0">An icon plus the error tone is how a destructive prompt reads.</p>
        </MpDialog>

        <MpDialog :model-value="which === 'lead'" eyebrow="New dashboard" title="Untitled dashboard" @update:model-value="which = ''">
          <template #lead>
            <v-avatar size="44" variant="tonal" color="primary"><v-icon>layout-dashboard</v-icon></v-avatar>
          </template>
          <p class="ma-0">An avatar rides in on <code>#lead</code>; the mode label on <code>eyebrow</code>.</p>
        </MpDialog>
      </div>
    `}),args:{}},a={render:()=>({components:{MpDialog:e},data:()=>({which:""}),template:`
      <div class="d-flex ga-2 flex-wrap">
        <v-btn variant="outlined" class="text-none" @click="which = 'sm'">sm — 440</v-btn>
        <v-btn variant="outlined" class="text-none" @click="which = 'md'">md — 640</v-btn>
        <v-btn variant="outlined" class="text-none" @click="which = 'lg'">lg — 880</v-btn>

        <MpDialog :model-value="which === 'sm'" size="sm" title="sm — 440px" @update:model-value="which = ''">
          <p class="ma-0">Confirms and single-field prompts.</p>
        </MpDialog>
        <MpDialog :model-value="which === 'md'" size="md" title="md — 640px" @update:model-value="which = ''">
          <p class="ma-0">The default. Short forms and pickers.</p>
        </MpDialog>
        <MpDialog :model-value="which === 'lg'" size="lg" title="lg — 880px" @update:model-value="which = ''">
          <p class="ma-0">Preview and comparison surfaces.</p>
        </MpDialog>
      </div>
    `}),args:{}},o={render:()=>({components:{MpDialog:e},data:()=>({which:"",guardNote:""}),template:`
      <div class="d-flex ga-2 flex-wrap">
        <v-btn variant="outlined" class="text-none" @click="which = 'nofooter'">No footer</v-btn>
        <v-btn variant="outlined" class="text-none" @click="which = 'flush'">Flush body</v-btn>
        <v-btn variant="outlined" class="text-none" @click="which = 'persistent'">Persistent</v-btn>
        <v-btn variant="outlined" class="text-none" @click="which = 'guarded'">Guarded</v-btn>
        <v-btn variant="outlined" class="text-none" @click="which = 'footerstart'">#footerStart</v-btn>
        <v-btn variant="outlined" class="text-none" @click="which = 'full'">Fullscreen</v-btn>

        <MpDialog :model-value="which === 'nofooter'" title="Connection details" @update:model-value="which = ''">
          <p class="ma-0">With no <code>#footer</code> slot the shell omits the divider and the band entirely.</p>
        </MpDialog>

        <MpDialog :model-value="which === 'flush'" flush title="Email preview" subtitle="Spring Refresh" @update:model-value="which = ''">
          <div class="pa-8 text-center text-medium-emphasis" style="background: rgb(var(--v-theme-background));">
            The body has no inset and no gap, so this stage runs edge to edge.
          </div>
        </MpDialog>

        <MpDialog :model-value="which === 'persistent'" persistent title="Verification required" subtitle="$249.00 · Visa ending 4242">
          <p class="ma-0">Esc and the scrim are inert — only a footer action closes this.</p>
          <template #footer>
            <v-btn variant="text" class="text-none" @click="which = ''">Cancel</v-btn>
            <v-btn color="primary" variant="flat" class="text-none" @click="which = ''">Approve</v-btn>
          </template>
        </MpDialog>

        <MpDialog
          :model-value="which === 'guarded'"
          guarded
          title="Edit segment"
          subtitle="You have unsaved changes"
          @close="guardNote = 'close was emitted — the host decides what happens next'"
        >
          <p class="ma-0">Press Esc or the close button: the shell emits <code>close</code> rather than closing itself.</p>
          <p v-if="guardNote" class="ma-0 text-medium-emphasis">{{ guardNote }}</p>
          <template #footer>
            <v-btn variant="text" class="text-none" @click="which = ''; guardNote = ''">Discard</v-btn>
            <v-btn color="primary" variant="flat" class="text-none" @click="which = ''; guardNote = ''">Save</v-btn>
          </template>
        </MpDialog>

        <MpDialog :model-value="which === 'footerstart'" title="Choose a template" subtitle="Step 2 of 3" @update:model-value="which = ''">
          <p class="ma-0">A left-aligned zone for a step control, held away from the primary pair by the shell.</p>
          <template #footerStart>
            <v-btn variant="text" class="text-none" prepend-icon="arrow-left" @click="which = ''">Back</v-btn>
          </template>
          <template #footer>
            <v-btn variant="text" class="text-none" @click="which = ''">Cancel</v-btn>
            <v-btn color="primary" variant="flat" class="text-none" @click="which = ''">Continue</v-btn>
          </template>
        </MpDialog>

        <MpDialog :model-value="which === 'full'" fullscreen title="Email preview" @update:model-value="which = ''">
          <div class="pa-8 text-center text-medium-emphasis">Edge-to-edge stage for preview surfaces.</div>
        </MpDialog>
      </div>
    `}),args:{}},l={render:()=>d(`
    <MpDialog v-model="open" title="New folder" subtitle="Organise campaigns by lifecycle stage">
      <v-text-field label="Folder name *" placeholder="Welcome series" />
      <v-select label="Parent folder" :items="['None', 'Lifecycle', 'Promotions', 'Archive']" model-value="Lifecycle" />
      <v-textarea label="Description" rows="3" />
      <template #footer>
        <v-btn variant="text" class="text-none" @click="open = false">Cancel</v-btn>
        <v-btn color="primary" variant="flat" class="text-none" @click="open = false">Create folder</v-btn>
      </template>
    </MpDialog>
  `,"Open short form"),args:{}},i={render:()=>d(`
    <MpDialog v-model="open" title="Campaign settings" subtitle="Spring Refresh · Draft">
      <MpFormSection title="General" />
      <MpFormGrid :cols="2">
        <v-text-field label="Campaign name *" model-value="Spring Refresh" class="mp-form-grid__full" />
        <v-text-field label="From name" model-value="Northwind Supply" />
        <v-text-field label="Reply-to" model-value="hello@northwind.test" type="email" />
        <v-text-field label="Subject line *" model-value="New season, new gear" class="mp-form-grid__full" />
        <v-textarea label="Preview text" rows="3" class="mp-form-grid__full" />
      </MpFormGrid>

      <MpFormSection title="Audience" description="Who receives this send." />
      <MpFormGrid :cols="2">
        <v-select label="List *" :items="['All contacts', 'Newsletter', 'VIP customers']" model-value="Newsletter" />
        <v-select label="Segment" :items="['None', 'Opened last 30 days', 'Lapsed 90 days']" model-value="None" />
        <v-select
          label="Exclude segments"
          class="mp-form-grid__full"
          :items="['Unsubscribed', 'Bounced', 'Recent purchasers', 'Employees']"
          :model-value="['Unsubscribed', 'Bounced', 'Recent purchasers']"
          multiple
          chips
        />
      </MpFormGrid>

      <MpFormSection title="Delivery" />
      <MpFormGrid :cols="2">
        <v-text-field label="Send date" type="date" model-value="2026-09-14" />
        <v-text-field label="Send time" type="time" model-value="09:30" />
        <v-select label="Time zone" class="mp-form-grid__full" :items="['UTC', 'Australia/Sydney', 'America/New_York']" model-value="Australia/Sydney" />
        <v-textarea label="Internal notes" rows="5" class="mp-form-grid__full" />
      </MpFormGrid>

      <MpFormSection title="Tracking" />
      <MpFormGrid>
        <v-checkbox label="Track opens" model-value />
        <v-checkbox label="Track link clicks" model-value />
        <v-checkbox label="Append UTM parameters" />
      </MpFormGrid>

      <template #footer>
        <v-btn variant="text" class="text-none" @click="open = false">Cancel</v-btn>
        <v-btn color="primary" variant="flat" class="text-none" @click="open = false">Save campaign</v-btn>
      </template>
    </MpDialog>
  `,"Open long form"),args:{}},r={render:()=>d(`
    <MpDialog v-model="open" title="New coupon" subtitle="Fix three fields to continue" icon="triangle-alert" tone="error">
      <MpFormSection title="General" />
      <MpFormGrid :cols="2">
        <v-text-field label="Coupon code *" model-value="" error-messages="Coupon code is required" />
        <v-text-field label="Discount *" model-value="-15" type="number" error-messages="Enter a value above zero" />
        <v-select
          label="Applies to *"
          class="mp-form-grid__full"
          :items="['All products', 'Selected collections', 'Selected products']"
          :model-value="null"
          error-messages="Choose what this coupon applies to"
        />
        <v-textarea label="Internal note" rows="3" class="mp-form-grid__full" hint="Not shown to customers" persistent-hint />
      </MpFormGrid>

      <MpFormSection title="Limits" />
      <MpFormGrid>
        <MpFormField label="Usage limit" error="Pick one before saving">
          <template #default="{ labelId, descriptionId }">
            <v-radio-group :model-value="null" :aria-labelledby="labelId" :aria-describedby="descriptionId">
              <v-radio value="none" label="Unlimited uses" />
              <v-radio value="capped" label="Limit total uses" />
            </v-radio-group>
          </template>
        </MpFormField>
      </MpFormGrid>

      <template #footer>
        <v-btn variant="text" class="text-none" @click="open = false">Cancel</v-btn>
        <v-btn color="primary" variant="flat" class="text-none" disabled>Create coupon</v-btn>
      </template>
    </MpDialog>
  `,"Open form with errors"),args:{}},n={render:()=>({components:{MpDialog:e,MpFormGrid:v,MpFormSection:u,MpFormField:b},data:()=>({open:!0,tiers:[{id:1,label:"Bronze",amount:25},{id:2,label:"Silver",amount:50},{id:3,label:"Gold",amount:100}]}),template:`
      <div>
        <v-btn variant="outlined" class="text-none" @click="open = true">Open two-column form</v-btn>
        <MpDialog v-model="open" title="Reward tiers" subtitle="Northwind Loyalty">
          <MpFormSection title="Programme" />
          <MpFormGrid :cols="2">
            <v-text-field label="Programme name *" model-value="Northwind Loyalty" class="mp-form-grid__full" />
            <v-text-field label="Points per dollar" model-value="1" type="number" />
            <v-select label="Currency" :items="['AUD', 'USD', 'NZD']" model-value="AUD" />
            <MpFormField label="Enrolment" hint="How members join." class="mp-form-grid__full">
              <template #default="{ labelId, descriptionId }">
                <v-chip-group :model-value="0" :aria-labelledby="labelId" :aria-describedby="descriptionId">
                  <v-chip filter>Automatic</v-chip>
                  <v-chip filter>Opt in</v-chip>
                  <v-chip filter>Invite only</v-chip>
                </v-chip-group>
              </template>
            </MpFormField>
          </MpFormGrid>

          <MpFormSection title="Tiers" description="Each tier needs a name and a spend threshold." />
          <MpFormGrid :cols="2">
            <div v-for="tier in tiers" :key="tier.id" class="mp-form-grid__trailing">
              <MpFormGrid :cols="2">
                <v-text-field label="Tier name" :model-value="tier.label" />
                <v-text-field label="Spend threshold" :model-value="tier.amount" type="number" prepend-inner-icon="dollar-sign" />
              </MpFormGrid>
              <v-btn icon="trash-2" variant="text" size="small" density="comfortable" :aria-label="'Remove ' + tier.label" />
            </div>
            <v-btn variant="text" class="text-none mp-form-grid__full align-self-start" prepend-icon="plus">Add tier</v-btn>
          </MpFormGrid>

          <template #footer>
            <v-btn variant="text" class="text-none" @click="open = false">Cancel</v-btn>
            <v-btn color="primary" variant="flat" class="text-none" @click="open = false">Save tiers</v-btn>
          </template>
        </MpDialog>
      </div>
    `}),args:{}},s={render:()=>({components:{MpDialog:e,MpConfirmDialog:w,MpListRow:h,MpFormGrid:v,MpFormSection:u},data:()=>({frameStyle:"position: relative; overflow: hidden; height: 560px; flex: 1 1 360px; min-width: 340px;"}),template:`
      <div class="d-flex ga-6 align-start flex-wrap">
        <div :style="frameStyle">
          <div class="text-caption text-medium-emphasis mb-2">MpConfirmDialog · sm · title only</div>
          <MpConfirmDialog
            model-value
            contained
            persistent
            :retain-focus="false"
            :scrim="false"
            scroll-strategy="none"
            title="Delete this segment?"
            message="Contacts stay in your account. Any journey using this segment stops targeting it."
            confirm-label="Delete segment"
            danger
          />
        </div>

        <div :style="frameStyle">
          <div class="text-caption text-medium-emphasis mb-2">MpDialog · md · title + subtitle</div>
          <MpDialog
            model-value
            contained
            persistent
            :retain-focus="false"
            :scrim="false"
            scroll-strategy="none"
            title="Rename dashboard"
            subtitle="Visible to everyone with access"
          >
            <MpFormGrid>
              <v-text-field label="Dashboard name" model-value="Lifecycle Health" />
              <v-select label="Folder" :items="['None', 'Lifecycle', 'Revenue']" model-value="Lifecycle" />
            </MpFormGrid>
            <template #footer>
              <v-btn variant="text" class="text-none">Cancel</v-btn>
              <v-btn color="primary" variant="flat" class="text-none">Save changes</v-btn>
            </template>
          </MpDialog>
        </div>

        <div :style="frameStyle">
          <div class="text-caption text-medium-emphasis mb-2">MpDialog · lg · eyebrow + lead</div>
          <MpDialog
            model-value
            contained
            persistent
            :retain-focus="false"
            :scrim="false"
            scroll-strategy="none"
            size="lg"
            eyebrow="New widget"
            title="Choose a data source"
          >
            <template #lead>
              <v-avatar size="44" variant="tonal" color="primary"><v-icon>database</v-icon></v-avatar>
            </template>
            <MpListRow variant="boxed" title="Marketing Cloud" eyebrow="Campaigns, journeys, sends">
              <template #lead><v-icon size="18">megaphone</v-icon></template>
            </MpListRow>
            <MpListRow variant="boxed" title="Commerce Cloud" eyebrow="Orders, products, revenue">
              <template #lead><v-icon size="18">shopping-cart</v-icon></template>
            </MpListRow>
            <template #footerStart>
              <v-btn variant="text" class="text-none" prepend-icon="arrow-left">Back</v-btn>
            </template>
            <template #footer>
              <v-btn variant="text" class="text-none">Cancel</v-btn>
              <v-btn color="primary" variant="flat" class="text-none">Continue</v-btn>
            </template>
          </MpDialog>
        </div>
      </div>
    `}),parameters:{canvas:"full"},args:{}},c={render:()=>({components:{MpDialog:e,MpListRow:h},data:()=>({open:!0,selected:"marketing",sources:[{id:"marketing",label:"Marketing Cloud",caption:"Campaigns, journeys, sends",icon:"megaphone"},{id:"commerce",label:"Commerce Cloud",caption:"Orders, products, revenue",icon:"shopping-cart"},{id:"service",label:"Service Cloud",caption:"Tickets, CSAT, response time",icon:"headset"},{id:"retail",label:"Retail Cloud",caption:"Stores, registers, POS sales",icon:"store"}]}),template:`
      <div>
        <v-btn variant="outlined" class="text-none" @click="open = true">Add widget</v-btn>
        <MpDialog v-model="open" size="sm" eyebrow="New widget" title="Choose a data source">
          <template #lead>
            <v-avatar size="44" variant="tonal" color="primary"><v-icon>database</v-icon></v-avatar>
          </template>

          <MpListRow
            v-for="s in sources"
            :key="s.id"
            clickable
            variant="boxed"
            :title="s.label"
            :eyebrow="s.caption"
            @click="selected = s.id"
          >
            <template #lead><v-icon size="18">{{ s.icon }}</v-icon></template>
            <template #trailing>
              <v-icon v-if="selected === s.id" size="18" color="primary">circle-check</v-icon>
            </template>
          </MpListRow>

          <template #footer>
            <v-btn variant="text" class="text-none" @click="open = false">Cancel</v-btn>
            <v-btn color="primary" variant="flat" class="text-none" @click="open = false">Continue</v-btn>
          </template>
        </MpDialog>
      </div>
    `}),args:{}},m={globals:{viewport:{value:"mobile375",isRotated:!1}},render:()=>d(`
    <MpDialog v-model="open" title="Move to folder" subtitle="Spring Refresh">
      <p class="ma-0">Below <code>layout.breakpointCompact</code> (640) all three bands drop to <code>paddingCompact</code> (16), the same way MpFormDrawer collapses.</p>
      <template #footer>
        <v-btn variant="text" class="text-none" @click="open = false">Cancel</v-btn>
        <v-btn color="primary" variant="flat" class="text-none" @click="open = false">Move</v-btn>
      </template>
    </MpDialog>
  `),args:{}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => launcher(\`
    <MpDialog v-model="open" title="Rename dashboard" subtitle="Visible to everyone with access">
      <v-text-field label="Dashboard name" model-value="Lifecycle Health" />
      <template #footer>
        <v-btn variant="text" class="text-none" @click="open = false">Cancel</v-btn>
        <v-btn color="primary" variant="flat" class="text-none" @click="open = false">Save changes</v-btn>
      </template>
    </MpDialog>
  \`),
  args: {
    title: 'Rename dashboard'
  }
}`,...p.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      MpDialog
    },
    data: () => ({
      which: 'plain' as string
    }),
    template: \`
      <div class="d-flex ga-2 flex-wrap">
        <v-btn variant="outlined" class="text-none" @click="which = 'plain'">Title only</v-btn>
        <v-btn variant="outlined" class="text-none" @click="which = 'sub'">+ subtitle</v-btn>
        <v-btn variant="outlined" class="text-none" @click="which = 'icon'">+ icon</v-btn>
        <v-btn variant="outlined" class="text-none" @click="which = 'lead'">#lead + eyebrow</v-btn>

        <MpDialog :model-value="which === 'plain'" title="Rename dashboard" @update:model-value="which = ''">
          <p class="ma-0">Title only — the minimum header.</p>
        </MpDialog>

        <MpDialog :model-value="which === 'sub'" title="Move to folder" subtitle="Spring Refresh" @update:model-value="which = ''">
          <p class="ma-0">A subtitle carries the record the dialog is acting on.</p>
        </MpDialog>

        <MpDialog :model-value="which === 'icon'" title="Delete this segment?" icon="triangle-alert" tone="error" @update:model-value="which = ''">
          <p class="ma-0">An icon plus the error tone is how a destructive prompt reads.</p>
        </MpDialog>

        <MpDialog :model-value="which === 'lead'" eyebrow="New dashboard" title="Untitled dashboard" @update:model-value="which = ''">
          <template #lead>
            <v-avatar size="44" variant="tonal" color="primary"><v-icon>layout-dashboard</v-icon></v-avatar>
          </template>
          <p class="ma-0">An avatar rides in on <code>#lead</code>; the mode label on <code>eyebrow</code>.</p>
        </MpDialog>
      </div>
    \`
  }),
  args: {} as never
}`,...t.parameters?.docs?.source},description:{story:`The header can be built four ways: title only, title + subtitle, icon + title, and
\`#lead\` + eyebrow + title. Everything below the header is identical — that is the shell
doing its job. Open them in turn: the band is the same height in the first three, and the
close button stays on the title's centre line in all four.`,...t.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      MpDialog
    },
    data: () => ({
      which: '' as string
    }),
    template: \`
      <div class="d-flex ga-2 flex-wrap">
        <v-btn variant="outlined" class="text-none" @click="which = 'sm'">sm — 440</v-btn>
        <v-btn variant="outlined" class="text-none" @click="which = 'md'">md — 640</v-btn>
        <v-btn variant="outlined" class="text-none" @click="which = 'lg'">lg — 880</v-btn>

        <MpDialog :model-value="which === 'sm'" size="sm" title="sm — 440px" @update:model-value="which = ''">
          <p class="ma-0">Confirms and single-field prompts.</p>
        </MpDialog>
        <MpDialog :model-value="which === 'md'" size="md" title="md — 640px" @update:model-value="which = ''">
          <p class="ma-0">The default. Short forms and pickers.</p>
        </MpDialog>
        <MpDialog :model-value="which === 'lg'" size="lg" title="lg — 880px" @update:model-value="which = ''">
          <p class="ma-0">Preview and comparison surfaces.</p>
        </MpDialog>
      </div>
    \`
  }),
  args: {} as never
}`,...a.parameters?.docs?.source},description:{story:"The width ramp. Open each to compare — the insets never change, only the measure.",...a.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      MpDialog
    },
    data: () => ({
      which: '' as string,
      guardNote: ''
    }),
    template: \`
      <div class="d-flex ga-2 flex-wrap">
        <v-btn variant="outlined" class="text-none" @click="which = 'nofooter'">No footer</v-btn>
        <v-btn variant="outlined" class="text-none" @click="which = 'flush'">Flush body</v-btn>
        <v-btn variant="outlined" class="text-none" @click="which = 'persistent'">Persistent</v-btn>
        <v-btn variant="outlined" class="text-none" @click="which = 'guarded'">Guarded</v-btn>
        <v-btn variant="outlined" class="text-none" @click="which = 'footerstart'">#footerStart</v-btn>
        <v-btn variant="outlined" class="text-none" @click="which = 'full'">Fullscreen</v-btn>

        <MpDialog :model-value="which === 'nofooter'" title="Connection details" @update:model-value="which = ''">
          <p class="ma-0">With no <code>#footer</code> slot the shell omits the divider and the band entirely.</p>
        </MpDialog>

        <MpDialog :model-value="which === 'flush'" flush title="Email preview" subtitle="Spring Refresh" @update:model-value="which = ''">
          <div class="pa-8 text-center text-medium-emphasis" style="background: rgb(var(--v-theme-background));">
            The body has no inset and no gap, so this stage runs edge to edge.
          </div>
        </MpDialog>

        <MpDialog :model-value="which === 'persistent'" persistent title="Verification required" subtitle="$249.00 · Visa ending 4242">
          <p class="ma-0">Esc and the scrim are inert — only a footer action closes this.</p>
          <template #footer>
            <v-btn variant="text" class="text-none" @click="which = ''">Cancel</v-btn>
            <v-btn color="primary" variant="flat" class="text-none" @click="which = ''">Approve</v-btn>
          </template>
        </MpDialog>

        <MpDialog
          :model-value="which === 'guarded'"
          guarded
          title="Edit segment"
          subtitle="You have unsaved changes"
          @close="guardNote = 'close was emitted — the host decides what happens next'"
        >
          <p class="ma-0">Press Esc or the close button: the shell emits <code>close</code> rather than closing itself.</p>
          <p v-if="guardNote" class="ma-0 text-medium-emphasis">{{ guardNote }}</p>
          <template #footer>
            <v-btn variant="text" class="text-none" @click="which = ''; guardNote = ''">Discard</v-btn>
            <v-btn color="primary" variant="flat" class="text-none" @click="which = ''; guardNote = ''">Save</v-btn>
          </template>
        </MpDialog>

        <MpDialog :model-value="which === 'footerstart'" title="Choose a template" subtitle="Step 2 of 3" @update:model-value="which = ''">
          <p class="ma-0">A left-aligned zone for a step control, held away from the primary pair by the shell.</p>
          <template #footerStart>
            <v-btn variant="text" class="text-none" prepend-icon="arrow-left" @click="which = ''">Back</v-btn>
          </template>
          <template #footer>
            <v-btn variant="text" class="text-none" @click="which = ''">Cancel</v-btn>
            <v-btn color="primary" variant="flat" class="text-none" @click="which = ''">Continue</v-btn>
          </template>
        </MpDialog>

        <MpDialog :model-value="which === 'full'" fullscreen title="Email preview" @update:model-value="which = ''">
          <div class="pa-8 text-center text-medium-emphasis">Edge-to-edge stage for preview surfaces.</div>
        </MpDialog>
      </div>
    \`
  }),
  args: {} as never
}`,...o.parameters?.docs?.source},description:{story:"The states that change the shell's behaviour: no footer, `flush` (the body brings its own\nframe), `persistent` (scrim and Esc do nothing), `guarded` (they route through `close`\ninstead), and `#footerStart`.",...o.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => launcher(\`
    <MpDialog v-model="open" title="New folder" subtitle="Organise campaigns by lifecycle stage">
      <v-text-field label="Folder name *" placeholder="Welcome series" />
      <v-select label="Parent folder" :items="['None', 'Lifecycle', 'Promotions', 'Archive']" model-value="Lifecycle" />
      <v-textarea label="Description" rows="3" />
      <template #footer>
        <v-btn variant="text" class="text-none" @click="open = false">Cancel</v-btn>
        <v-btn color="primary" variant="flat" class="text-none" @click="open = false">Create folder</v-btn>
      </template>
    </MpDialog>
  \`, 'Open short form'),
  args: {} as never
}`,...l.parameters?.docs?.source},description:{story:"**A short form.** Four fields, no margins anywhere: the gap between them is\n`component.dialog.gap`, stated once by the shell.",...l.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => launcher(\`
    <MpDialog v-model="open" title="Campaign settings" subtitle="Spring Refresh · Draft">
      <MpFormSection title="General" />
      <MpFormGrid :cols="2">
        <v-text-field label="Campaign name *" model-value="Spring Refresh" class="mp-form-grid__full" />
        <v-text-field label="From name" model-value="Northwind Supply" />
        <v-text-field label="Reply-to" model-value="hello@northwind.test" type="email" />
        <v-text-field label="Subject line *" model-value="New season, new gear" class="mp-form-grid__full" />
        <v-textarea label="Preview text" rows="3" class="mp-form-grid__full" />
      </MpFormGrid>

      <MpFormSection title="Audience" description="Who receives this send." />
      <MpFormGrid :cols="2">
        <v-select label="List *" :items="['All contacts', 'Newsletter', 'VIP customers']" model-value="Newsletter" />
        <v-select label="Segment" :items="['None', 'Opened last 30 days', 'Lapsed 90 days']" model-value="None" />
        <v-select
          label="Exclude segments"
          class="mp-form-grid__full"
          :items="['Unsubscribed', 'Bounced', 'Recent purchasers', 'Employees']"
          :model-value="['Unsubscribed', 'Bounced', 'Recent purchasers']"
          multiple
          chips
        />
      </MpFormGrid>

      <MpFormSection title="Delivery" />
      <MpFormGrid :cols="2">
        <v-text-field label="Send date" type="date" model-value="2026-09-14" />
        <v-text-field label="Send time" type="time" model-value="09:30" />
        <v-select label="Time zone" class="mp-form-grid__full" :items="['UTC', 'Australia/Sydney', 'America/New_York']" model-value="Australia/Sydney" />
        <v-textarea label="Internal notes" rows="5" class="mp-form-grid__full" />
      </MpFormGrid>

      <MpFormSection title="Tracking" />
      <MpFormGrid>
        <v-checkbox label="Track opens" model-value />
        <v-checkbox label="Track link clicks" model-value />
        <v-checkbox label="Append UTM parameters" />
      </MpFormGrid>

      <template #footer>
        <v-btn variant="text" class="text-none" @click="open = false">Cancel</v-btn>
        <v-btn color="primary" variant="flat" class="text-none" @click="open = false">Save campaign</v-btn>
      </template>
    </MpDialog>
  \`, 'Open long form'),
  args: {} as never
}`,...i.parameters?.docs?.source},description:{story:`**A long scrolling form.** The header and footer stay pinned while the body scrolls, and each
casts an edge shadow only while there is content hidden beneath it — scroll the body up and
down to watch them appear and clear. Sections come from \`MpFormSection\`, so the space around
every heading is the same one token.`,...i.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => launcher(\`
    <MpDialog v-model="open" title="New coupon" subtitle="Fix three fields to continue" icon="triangle-alert" tone="error">
      <MpFormSection title="General" />
      <MpFormGrid :cols="2">
        <v-text-field label="Coupon code *" model-value="" error-messages="Coupon code is required" />
        <v-text-field label="Discount *" model-value="-15" type="number" error-messages="Enter a value above zero" />
        <v-select
          label="Applies to *"
          class="mp-form-grid__full"
          :items="['All products', 'Selected collections', 'Selected products']"
          :model-value="null"
          error-messages="Choose what this coupon applies to"
        />
        <v-textarea label="Internal note" rows="3" class="mp-form-grid__full" hint="Not shown to customers" persistent-hint />
      </MpFormGrid>

      <MpFormSection title="Limits" />
      <MpFormGrid>
        <MpFormField label="Usage limit" error="Pick one before saving">
          <template #default="{ labelId, descriptionId }">
            <v-radio-group :model-value="null" :aria-labelledby="labelId" :aria-describedby="descriptionId">
              <v-radio value="none" label="Unlimited uses" />
              <v-radio value="capped" label="Limit total uses" />
            </v-radio-group>
          </template>
        </MpFormField>
      </MpFormGrid>

      <template #footer>
        <v-btn variant="text" class="text-none" @click="open = false">Cancel</v-btn>
        <v-btn color="primary" variant="flat" class="text-none" disabled>Create coupon</v-btn>
      </template>
    </MpDialog>
  \`, 'Open form with errors'),
  args: {} as never
}`,...r.parameters?.docs?.source},description:{story:`**Error states.** Every control type carries its message the same way and at the same
distance (\`component.field.hintGap\`). Note what does *not* happen: the fields without an
error reserve no space for one, so the rhythm is identical to the clean form above. That
reserved-but-empty message row is what used to produce the uneven vertical gaps.

The disabled primary action is deliberate — it still meets 3:1 against the modal surface.`,...r.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      MpDialog,
      MpFormGrid,
      MpFormSection,
      MpFormField
    },
    data: () => ({
      open: true,
      tiers: [{
        id: 1,
        label: 'Bronze',
        amount: 25
      }, {
        id: 2,
        label: 'Silver',
        amount: 50
      }, {
        id: 3,
        label: 'Gold',
        amount: 100
      }]
    }),
    template: \`
      <div>
        <v-btn variant="outlined" class="text-none" @click="open = true">Open two-column form</v-btn>
        <MpDialog v-model="open" title="Reward tiers" subtitle="Northwind Loyalty">
          <MpFormSection title="Programme" />
          <MpFormGrid :cols="2">
            <v-text-field label="Programme name *" model-value="Northwind Loyalty" class="mp-form-grid__full" />
            <v-text-field label="Points per dollar" model-value="1" type="number" />
            <v-select label="Currency" :items="['AUD', 'USD', 'NZD']" model-value="AUD" />
            <MpFormField label="Enrolment" hint="How members join." class="mp-form-grid__full">
              <template #default="{ labelId, descriptionId }">
                <v-chip-group :model-value="0" :aria-labelledby="labelId" :aria-describedby="descriptionId">
                  <v-chip filter>Automatic</v-chip>
                  <v-chip filter>Opt in</v-chip>
                  <v-chip filter>Invite only</v-chip>
                </v-chip-group>
              </template>
            </MpFormField>
          </MpFormGrid>

          <MpFormSection title="Tiers" description="Each tier needs a name and a spend threshold." />
          <MpFormGrid :cols="2">
            <div v-for="tier in tiers" :key="tier.id" class="mp-form-grid__trailing">
              <MpFormGrid :cols="2">
                <v-text-field label="Tier name" :model-value="tier.label" />
                <v-text-field label="Spend threshold" :model-value="tier.amount" type="number" prepend-inner-icon="dollar-sign" />
              </MpFormGrid>
              <v-btn icon="trash-2" variant="text" size="small" density="comfortable" :aria-label="'Remove ' + tier.label" />
            </div>
            <v-btn variant="text" class="text-none mp-form-grid__full align-self-start" prepend-icon="plus">Add tier</v-btn>
          </MpFormGrid>

          <template #footer>
            <v-btn variant="text" class="text-none" @click="open = false">Cancel</v-btn>
            <v-btn color="primary" variant="flat" class="text-none" @click="open = false">Save tiers</v-btn>
          </template>
        </MpDialog>
      </div>
    \`
  }),
  args: {} as never
}`,...n.parameters?.docs?.source},description:{story:`**Two columns with a trailing-action row.** The point of this story is the right edge. Both
columns are equal width; the full-width rows and the amount+delete rows all start on the same
left edge *and* finish on the same right edge, because the delete button occupies its own
fixed \`component.control.height\` track instead of eating into the input's width.

It also mixes a floating-label field with a composite \`MpFormField\` in the same row, which is
the case that used to leave two neighbouring controls on different baselines.`,...n.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      MpDialog,
      MpConfirmDialog,
      MpListRow,
      MpFormGrid,
      MpFormSection
    },
    data: () => ({
      frameStyle: 'position: relative; overflow: hidden; height: 560px; flex: 1 1 360px; min-width: 340px;'
    }),
    template: \`
      <div class="d-flex ga-6 align-start flex-wrap">
        <div :style="frameStyle">
          <div class="text-caption text-medium-emphasis mb-2">MpConfirmDialog · sm · title only</div>
          <MpConfirmDialog
            model-value
            contained
            persistent
            :retain-focus="false"
            :scrim="false"
            scroll-strategy="none"
            title="Delete this segment?"
            message="Contacts stay in your account. Any journey using this segment stops targeting it."
            confirm-label="Delete segment"
            danger
          />
        </div>

        <div :style="frameStyle">
          <div class="text-caption text-medium-emphasis mb-2">MpDialog · md · title + subtitle</div>
          <MpDialog
            model-value
            contained
            persistent
            :retain-focus="false"
            :scrim="false"
            scroll-strategy="none"
            title="Rename dashboard"
            subtitle="Visible to everyone with access"
          >
            <MpFormGrid>
              <v-text-field label="Dashboard name" model-value="Lifecycle Health" />
              <v-select label="Folder" :items="['None', 'Lifecycle', 'Revenue']" model-value="Lifecycle" />
            </MpFormGrid>
            <template #footer>
              <v-btn variant="text" class="text-none">Cancel</v-btn>
              <v-btn color="primary" variant="flat" class="text-none">Save changes</v-btn>
            </template>
          </MpDialog>
        </div>

        <div :style="frameStyle">
          <div class="text-caption text-medium-emphasis mb-2">MpDialog · lg · eyebrow + lead</div>
          <MpDialog
            model-value
            contained
            persistent
            :retain-focus="false"
            :scrim="false"
            scroll-strategy="none"
            size="lg"
            eyebrow="New widget"
            title="Choose a data source"
          >
            <template #lead>
              <v-avatar size="44" variant="tonal" color="primary"><v-icon>database</v-icon></v-avatar>
            </template>
            <MpListRow variant="boxed" title="Marketing Cloud" eyebrow="Campaigns, journeys, sends">
              <template #lead><v-icon size="18">megaphone</v-icon></template>
            </MpListRow>
            <MpListRow variant="boxed" title="Commerce Cloud" eyebrow="Orders, products, revenue">
              <template #lead><v-icon size="18">shopping-cart</v-icon></template>
            </MpListRow>
            <template #footerStart>
              <v-btn variant="text" class="text-none" prepend-icon="arrow-left">Back</v-btn>
            </template>
            <template #footer>
              <v-btn variant="text" class="text-none">Cancel</v-btn>
              <v-btn color="primary" variant="flat" class="text-none">Continue</v-btn>
            </template>
          </MpDialog>
        </div>
      </div>
    \`
  }),
  parameters: {
    canvas: 'full'
  },
  args: {} as never
}`,...s.parameters?.docs?.source},description:{story:"**The regression check.** Three different modals rendered at once so their geometry can be\ncompared without opening anything: a title-only confirm at `sm`, a title+subtitle form at\n`md`, and an eyebrow+lead picker at `lg`.\n\nWhat to look at, left to right:\n- **Header height** is identical in the first two — 88px, the `headerMinHeight` floor — even\n  though only one of them has a subtitle. The third is 100px because an eyebrow adds a real\n  row; the token is a floor, not a cap.\n- **Close button** sits on the title's centre line in all three (measured delta: 0), including\n  the two that carry a lead icon.\n- **Left edge** — every field starts 21px from the card edge in all three (20 inset + 1\n  border). A title indents past a lead icon when one is present; that is what a lead is for.\n- **Right edge** — the close button, the fields and the primary action all finish on that same\n  21px in all three.\n- **Footer** — secondary then primary, right-aligned, `footerGap` (8) between them.\n\nThe frames are deliberately equal width, so the comparison is about geometry rather than the\nsize ramp — `Sizes` covers the ramp.\n\nThe `contained` / `retain-focus` / `scrim` / `scroll-strategy` attributes below are\nstory-only: they let three overlays render in place instead of teleporting to `<body>` and\nfighting each other for focus. Never use them in app code.",...s.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      MpDialog,
      MpListRow
    },
    data: () => ({
      open: true,
      selected: 'marketing',
      sources: [{
        id: 'marketing',
        label: 'Marketing Cloud',
        caption: 'Campaigns, journeys, sends',
        icon: 'megaphone'
      }, {
        id: 'commerce',
        label: 'Commerce Cloud',
        caption: 'Orders, products, revenue',
        icon: 'shopping-cart'
      }, {
        id: 'service',
        label: 'Service Cloud',
        caption: 'Tickets, CSAT, response time',
        icon: 'headset'
      }, {
        id: 'retail',
        label: 'Retail Cloud',
        caption: 'Stores, registers, POS sales',
        icon: 'store'
      }]
    }),
    template: \`
      <div>
        <v-btn variant="outlined" class="text-none" @click="open = true">Add widget</v-btn>
        <MpDialog v-model="open" size="sm" eyebrow="New widget" title="Choose a data source">
          <template #lead>
            <v-avatar size="44" variant="tonal" color="primary"><v-icon>database</v-icon></v-avatar>
          </template>

          <MpListRow
            v-for="s in sources"
            :key="s.id"
            clickable
            variant="boxed"
            :title="s.label"
            :eyebrow="s.caption"
            @click="selected = s.id"
          >
            <template #lead><v-icon size="18">{{ s.icon }}</v-icon></template>
            <template #trailing>
              <v-icon v-if="selected === s.id" size="18" color="primary">circle-check</v-icon>
            </template>
          </MpListRow>

          <template #footer>
            <v-btn variant="text" class="text-none" @click="open = false">Cancel</v-btn>
            <v-btn color="primary" variant="flat" class="text-none" @click="open = false">Continue</v-btn>
          </template>
        </MpDialog>
      </div>
    \`
  }),
  args: {} as never
}`,...c.parameters?.docs?.source},description:{story:'**In context.** A real "add a widget source" picker: a scrolling list of `MpListRow`s in\nthe body, a two-button footer. Nothing here sets a padding — every edge in the dialog\ncomes from `component.dialog.*`, and the rows come from `component.listItem.*`.',...c.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  globals: {
    viewport: {
      value: 'mobile375',
      isRotated: false
    }
  },
  render: () => launcher(\`
    <MpDialog v-model="open" title="Move to folder" subtitle="Spring Refresh">
      <p class="ma-0">Below <code>layout.breakpointCompact</code> (640) all three bands drop to <code>paddingCompact</code> (16), the same way MpFormDrawer collapses.</p>
      <template #footer>
        <v-btn variant="text" class="text-none" @click="open = false">Cancel</v-btn>
        <v-btn color="primary" variant="flat" class="text-none" @click="open = false">Move</v-btn>
      </template>
    </MpDialog>
  \`),
  args: {} as never
}`,...m.parameters?.docs?.source}}};const _=["Default","Variants","Sizes","States","ShortForm","LongScrollingForm","ErrorStates","TwoColumnWithTrailingRow","SideBySideRegression","InContextSourcePicker","Mobile375"];export{p as Default,r as ErrorStates,c as InContextSourcePicker,i as LongScrollingForm,m as Mobile375,l as ShortForm,s as SideBySideRegression,a as Sizes,o as States,n as TwoColumnWithTrailingRow,t as Variants,_ as __namedExportsOrder,N as default};
