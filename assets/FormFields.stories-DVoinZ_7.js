import{d2 as M,n as k,r as e}from"./iframe-BqHSr5b_.js";import{M as P}from"./MpFormGrid-D0pxdSe6.js";import{M as L}from"./MpFormSection-CmGpUCf7.js";import{M as E}from"./MpFormField-eWrsvwna.js";import"./preload-helper-PPVm8Dsz.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const N={title:"Patterns/Form Fields",tags:["autodocs"],parameters:{docs:{description:{component:'\n## Unified Field Baseline — static top label\n\nEvery outlined form control in the app shares a single visual style — a **static\nlabel above the field box** (the Stripe / Shopify Polaris pattern; it replaced the\nFlowbite floating-notch label, see DESIGN_AUDIT.md "Field rework"):\n- **Label** – the `label` prop, rendered above the box: 13px/500 (`text.label`),\n  `--text-secondary`, 6px (`field.labelGap`) above the border, flush with its left\n  edge. The label stays **calm on focus and on error** — the 2px border and the\n  message carry the state. A labelled field reserves `labelHeight + labelGap`\n  (24px) of headroom; a placeholder+aria-label field reserves nothing.\n- **Sizes** – one ramp from the `density` prop:\n  `compact` → **sm 32** · `comfortable` → **md 40** (the theme default — equal to\n  `control.height`, so a field, a button and a toolbar control share one baseline) ·\n  `default` → **lg 48**\n- **Shape** – 10px border radius, **transparent** fill at rest (no tint)\n- **Border** – Flat 1px `--border-strong` at rest (dark-mode-aware), darker on hover\n- **Focus** – Primary-color border, **2px**, no box-shadow ring\n- **Error** – Error-color border, **2px**, no box-shadow ring\n- **Placeholder** – solid `--text-muted`, always visible while the field is empty.\n  Example values only; it never restates the label\n- **Disabled** – Full opacity, muted text/label, lighter border\n- **Readonly** – opt-in: `class="mp-field-readonly"` beside the `readonly` prop\n  (Vuetify has no readonly root class). Secondary fill, subtle hairline that never\n  promotes to the 2px focus border, value stays `--text-primary` — filled and calm,\n  clearly not editable, clearly not disabled\n- **Success** – opt-in: `class="mp-field-success"` paints a 2px success border and a\n  green message; add `append-inner-icon="circle-check"` for the trailing check.\n  Error always wins when both apply. The label stays calm on success, like on error\n\n### Rules\n- `variant="outlined"` and `density="comfortable"` are the **theme defaults** — don\'t restate\n  them on the tag. The selection controls (`v-checkbox`, `v-radio-group`,\n  `v-switch`, `v-slider`, `v-number-input`, `v-btn-toggle`, `v-chip-group`) have the same\n  defaults, so a checkbox group and the fields above it sit on one rhythm.\n- **Always pass a `label`, not a bare `placeholder`** — the top label is the field\'s\n  name; a placeholder is example text inside the box. The two exceptions are chrome:\n  toolbar searches and table-cell inline editors use `placeholder` + `aria-label`\n  (no label → no headroom, so they stay flush in a 40px control row).\n- **One required mark:** a trailing ` *` in the label text, or `required` on `MpFormField` /\n  `MpFormSection`. Never an asterisk inside a placeholder.\n- Never pass `rounded="pill"` — or any `rounded` — on standard form fields. The AppBar search\n  and the `MpDataTableToolbar` search are the only two exceptions.\n- Do not add local `background` or `box-shadow` overrides to fields — let the baseline apply.\n- **Don\'t set `hide-details`** to tidy up spacing. The default is `"auto"`, which reserves no\n  height when there is no message; bare `hide-details` permanently suppresses validation and\n  hints. Keep it only for a dense toolbar filter, with a comment saying so.\n- **Textarea height comes from `rows`** — 3 for a normal message, 5 for long-form. Never a CSS\n  height.\n- `density="compact"` (sm) is for genuinely dense chrome — table-cell editors, tight\n  side panels; forms use the default md.\n- **Hints:** a transient `hint` shows on focus — use it for input-format guidance ("YYYY-MM-DD").\n  Anything the user needs *before* focusing (consequences, defaults, scope) is `persistent-hint`.\n- **Counters** (`counter="60"`) only turn red when a validation rule actually invalidates the\n  field — Vuetify\'s counter doesn\'t self-invalidate, so always pair it with a max-length rule.\n- **Prefix/suffix** (`prefix="$"`, `suffix="cm"`) render muted — they\'re chrome, not content.\n  There is deliberately no boxed-addon segment style.\n\n### Spacing between fields — not a field\'s job (Phase 6)\nA field sets **zero external margin**. The container owns the rhythm:\n\n- `MpFormGrid` — one or two columns on `component.field.groupGap` (16), plus\n  `mp-form-grid__full` and `mp-form-grid__trailing` for the two row shapes that were being\n  hand-rolled six different ways.\n- `MpFormSection` — the one in-form section heading, owning `component.field.sectionGap` (24).\n- `MpFormField` — label + hint/error + aria for **composite** controls only (chip groups, radio\n  groups, tile pickers). Never around a Vuetify input; those own their own label.\n- Inside `MpDialog` / `MpFormDrawer` the body is already a 16px flex column, so a bare stack of\n  fields needs no container at all.\n\nAn `mb-4` on a field inside a shell body used to land *on top of* the shell\'s 16px gap and\nrender 32. 275 of them were deleted in Phase 6; don\'t add the 276th.\n        '}}}},x={name:"All States",parameters:{controls:{disable:!0}},render:()=>({setup(){const t=e("Hello World"),s=e("");return{text:t,empty:s}},template:`
      <div>
        <h3 class="text-subtitle-1 font-weight-bold mb-4">Text Field — all states</h3>
        <v-row>
          <v-col cols="12" sm="6" md="4">
            <div class="text-caption text-medium-emphasis mb-1">Default (empty)</div>
            <v-text-field
              v-model="empty"
              label="Company name"
              hide-details
            />
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <div class="text-caption text-medium-emphasis mb-1">Default (filled)</div>
            <v-text-field
              v-model="text"
              label="Company name"
              hide-details
            />
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <div class="text-caption text-medium-emphasis mb-1">Disabled</div>
            <v-text-field
              model-value="Locked value"
              label="Company name"
              disabled
              hide-details
            />
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <div class="text-caption text-medium-emphasis mb-1">Read-only</div>
            <v-text-field
              model-value="Read-only value"
              label="Company name"
              readonly
              hide-details
            />
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <div class="text-caption text-medium-emphasis mb-1">Error</div>
            <v-text-field
              model-value=""
              label="Company name"
              error-messages="This field is required"
            />
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <div class="text-caption text-medium-emphasis mb-1">Helper text</div>
            <v-text-field
              model-value=""
              label="Subdomain"
              hint="This will be part of your store URL"
              persistent-hint
            />
          </v-col>
        </v-row>
      </div>
    `})},g={name:"Label States",parameters:{controls:{disable:!0}},render:()=>({setup(){const t=e(""),s=e("Scooter Village"),l=e(""),C=e();return M(()=>k(()=>C.value?.focus())),{empty:t,filled:s,emptyIcon:l,focusedFieldRef:C}},template:`
      <div>
        <h3 class="text-subtitle-1 font-weight-bold mb-1">Static top label — one spec across every state</h3>
        <p class="text-caption text-medium-emphasis mb-4">
          The label is 13px/500 --text-secondary in every state except disabled — focus and
          error are carried by the 2px border and the message, never by recoloring the label.
          The focused specimen is pinned open so the calm label and no-glow border are visible
          without clicking anything.
        </p>
        <v-row>
          <v-col cols="12" sm="6" md="4">
            <div class="text-caption text-medium-emphasis mb-1">Empty — placeholder visible</div>
            <v-text-field v-model="empty" label="Account name" placeholder="e.g. Scooter Village" hide-details />
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <div class="text-caption text-medium-emphasis mb-1">Filled</div>
            <v-text-field v-model="filled" label="Account name" hide-details />
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <div class="text-caption text-medium-emphasis mb-1">Focused (autofocus) — border 2px primary, label calm</div>
            <v-text-field ref="focusedFieldRef" v-model="emptyIcon" label="Email address" prepend-inner-icon="mail" hide-details />
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <div class="text-caption text-medium-emphasis mb-1">Required — trailing * in the label text</div>
            <v-text-field model-value="" label="Company name *" hide-details />
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <div class="text-caption text-medium-emphasis mb-1">Error — border + message carry it, label calm</div>
            <v-text-field model-value="" label="Company name *" error-messages="This field is required" />
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <div class="text-caption text-medium-emphasis mb-1">Disabled — label joins the muted ink</div>
            <v-text-field model-value="Locked value" label="Company name" disabled hide-details />
          </v-col>
        </v-row>
      </div>
    `})},y={name:"Sizes",parameters:{controls:{disable:!0}},render:()=>({setup(){return{values:e({sm:"",md:"",lg:"",ssm:"Active",smd:"Active",slg:"Active"})}},template:`
      <div>
        <h3 class="text-subtitle-1 font-weight-bold mb-1">Size ramp — component.field.height</h3>
        <p class="text-caption text-medium-emphasis mb-4">
          One ramp, mapped from Vuetify's density prop: compact → sm 32 · comfortable → md 40
          (the theme default — equal to control.height, so a field and a button share one
          baseline) · default → lg 48. The label spec never changes with size. A field with no
          label (last row) reserves no headroom, so its box top aligns with a button's.
        </p>
        <v-row>
          <v-col cols="12" sm="6" md="4">
            <div class="text-caption text-medium-emphasis mb-1">sm — density="compact" (32px)</div>
            <v-text-field v-model="values.sm" label="Label" density="compact" hide-details />
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <div class="text-caption text-medium-emphasis mb-1">md — theme default (40px)</div>
            <v-text-field v-model="values.md" label="Label" hide-details />
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <div class="text-caption text-medium-emphasis mb-1">lg — density="default" (48px)</div>
            <v-text-field v-model="values.lg" label="Label" density="default" hide-details />
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-select v-model="values.ssm" :items="['Active','Paused']" label="Status" density="compact" hide-details />
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-select v-model="values.smd" :items="['Active','Paused']" label="Status" hide-details />
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-select v-model="values.slg" :items="['Active','Paused']" label="Status" density="default" hide-details />
          </v-col>
          <v-col cols="12">
            <div class="text-caption text-medium-emphasis mb-1">Unlabelled chrome field beside a button — both boxes 40px, tops flush</div>
            <div class="d-flex ga-3 align-start" style="max-width: 480px">
              <v-text-field placeholder="Search records…" aria-label="Search records" prepend-inner-icon="search" hide-details />
              <v-btn color="primary" variant="flat" class="text-none">Search</v-btn>
            </div>
          </v-col>
        </v-row>
      </div>
    `})},w={name:"Search Field",parameters:{controls:{disable:!0}},render:()=>({setup(){return{query:e("")}},template:`
      <div>
        <h3 class="text-subtitle-1 font-weight-bold mb-4">Search — toolbar / filter variant</h3>
        <v-row>
          <v-col cols="12" sm="6">
            <div class="text-caption text-medium-emphasis mb-1">md (default, 40px) — control rows and toolbars</div>
            <v-text-field
              v-model="query"
              placeholder="Search…"
              aria-label="Search"
              prepend-inner-icon="search"
              clearable
              hide-details
            />
          </v-col>
          <v-col cols="12" sm="6">
            <div class="text-caption text-medium-emphasis mb-1">sm (density="compact", 32px) — dense side panels</div>
            <v-text-field
              v-model="query"
              density="compact"
              placeholder="Search records…"
              aria-label="Search records"
              prepend-inner-icon="search"
              clearable
              hide-details
            />
          </v-col>
        </v-row>
      </div>
    `})},S={name:"Select & Combobox",parameters:{controls:{disable:!0}},render:()=>({setup(){const t=e(""),s=e([]);return{single:t,multi:s}},template:`
      <div>
        <h3 class="text-subtitle-1 font-weight-bold mb-4">Select / Combobox — unified style</h3>
        <v-row>
          <v-col cols="12" sm="6">
            <div class="text-caption text-medium-emphasis mb-1">Single select</div>
            <v-select
              v-model="single"
              :items="['Active', 'Inactive', 'Pending', 'Archived']"
              label="Status"
              hide-details
            />
          </v-col>
          <v-col cols="12" sm="6">
            <div class="text-caption text-medium-emphasis mb-1">Multi-select with chips</div>
            <v-select
              v-model="multi"
              :items="['Email', 'SMS', 'Push', 'In-app']"
              label="Channels"
              multiple
              chips
              closable-chips
              hide-details
            />
          </v-col>
          <v-col cols="12" sm="6">
            <div class="text-caption text-medium-emphasis mb-1">Select — disabled</div>
            <v-select
              model-value="Active"
              :items="['Active']"
              label="Status"
              disabled
              hide-details
            />
          </v-col>
          <v-col cols="12" sm="6">
            <div class="text-caption text-medium-emphasis mb-1">sm (density="compact") — dense chrome; aria-label, no top label</div>
            <v-select
              v-model="single"
              :items="['All statuses', 'Active', 'Inactive', 'Pending']"
              aria-label="Status filter"
              density="compact"
              hide-details
            />
          </v-col>
        </v-row>
      </div>
    `})},F={name:"Textarea",parameters:{controls:{disable:!0}},render:()=>({setup(){return{body:e("")}},template:`
      <div>
        <h3 class="text-subtitle-1 font-weight-bold mb-4">Textarea — same baseline</h3>
        <v-row>
          <v-col cols="12" sm="6">
            <v-textarea
              v-model="body"
              label="Message body"
              rows="4"
              placeholder="Type your message here…"
              hint="Markdown is supported"
              persistent-hint
            />
          </v-col>
          <v-col cols="12" sm="6">
            <v-textarea
              model-value="This field is disabled."
              label="Internal notes"
              rows="4"
              disabled
              hide-details
            />
          </v-col>
        </v-row>
      </div>
    `})},A={name:"With Icons",parameters:{controls:{disable:!0}},render:()=>({template:`
      <div>
        <h3 class="text-subtitle-1 font-weight-bold mb-4">Fields with icons</h3>
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field
              label="Email"
              prepend-inner-icon="mail"
              placeholder="hello@example.com"
              hide-details
            />
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              label="Website"
              prepend-inner-icon="globe"
              append-inner-icon="external-link"
              placeholder="https://example.com"
              hide-details
            />
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              label="Password"
              type="password"
              prepend-inner-icon="lock"
              append-inner-icon="eye-off"
              hide-details
            />
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              label="Revenue"
              prefix="$"
              placeholder="0.00"
              hide-details
            />
          </v-col>
        </v-row>
      </div>
    `})},a={name:"Form Layout Example",parameters:{controls:{disable:!0}},render:()=>({components:{MpFormGrid:P,MpFormSection:L,MpFormField:E},setup(){return{form:e({name:"",email:"",timezone:"",notes:"",channel:0})}},template:`
      <div>
        <h3 class="text-subtitle-1 font-weight-bold mb-4">Typical form layout</h3>
        <v-card flat border rounded="lg" style="max-width: var(--mp-component-dialog-width-md); padding: var(--mp-component-card-padding);">
          <MpFormSection title="Profile" />
          <MpFormGrid :cols="2">
            <v-text-field
              v-model="form.name"
              label="Full name *"
              prepend-inner-icon="user"
              class="mp-form-grid__full"
            />
            <v-text-field v-model="form.email" label="Email" type="email" prepend-inner-icon="mail" />
            <v-select
              v-model="form.timezone"
              :items="['UTC-8 (PST)', 'UTC-5 (EST)', 'UTC+0 (GMT)', 'UTC+5:30 (IST)']"
              label="Timezone"
            />
            <v-textarea v-model="form.notes" label="Notes" rows="3" class="mp-form-grid__full" />
          </MpFormGrid>

          <MpFormSection title="Contact preference" />
          <MpFormGrid>
            <MpFormField label="How we reach you" hint="Used for service notices, never marketing.">
              <template #default="{ labelId, descriptionId }">
                <v-chip-group v-model="form.channel" :aria-labelledby="labelId" :aria-describedby="descriptionId">
                  <v-chip filter>Email</v-chip>
                  <v-chip filter>SMS</v-chip>
                  <v-chip filter>In-app only</v-chip>
                </v-chip-group>
              </template>
            </MpFormField>
          </MpFormGrid>

          <div class="d-flex justify-end ga-2 mt-6">
            <v-btn class="text-none">Cancel</v-btn>
            <v-btn color="primary" variant="flat" class="text-none">Save changes</v-btn>
          </div>
        </v-card>
      </div>
    `})},R=[{type:"subheader",title:"Sales"},"Jordan Lee","Casey Kim",{type:"subheader",title:"Marketing"},"Alex Rivera","Sam Patel",{type:"subheader",title:"Support"},"Morgan Blake"],I=["Premium Wireless Noise-Cancelling Over-Ear Headphones — Midnight Black","Organic Cotton Crewneck T-Shirt, Unisex, Made in Portugal","Stainless Steel Insulated Water Bottle with Bamboo Lid, 750ml","Limited Edition Hand-Poured Soy Candle — Sea Salt & Driftwood"],T=["Argentina","Australia","Austria","Belgium","Brazil","Canada","Chile","Colombia","Denmark","Egypt","Finland","France","Germany","Greece","India","Indonesia","Ireland","Italy","Japan","Kenya","Malaysia","Mexico","Netherlands","New Zealand","Norway","Philippines","Poland","Portugal","Singapore","South Africa","South Korea","Spain","Sweden","Switzerland","Thailand","United Kingdom","United States","Vietnam"],D=[{title:"Active",value:"active"},{title:"Paused",value:"paused"},{title:"Archived",value:"archived",disabled:!0}],o={name:"Select — Selected (Checkmark)",parameters:{controls:{disable:!0}},render:()=>({setup(){const t=e("Active"),s=e(!0);return{status:t,menu:s}},template:`
      <div>
        <h3 class="text-subtitle-1 font-weight-bold mb-4">Select — menu open, item selected</h3>
        <v-row>
          <v-col cols="12" sm="6" md="4">
            <v-select
              v-model="status"
              v-model:menu="menu"
              :items="['Active', 'Inactive', 'Pending', 'Archived']"
              label="Status"
              hide-details
            />
          </v-col>
        </v-row>
      </div>
    `})},i={name:"Select — Grouped Options",parameters:{controls:{disable:!0}},render:()=>({setup(){const t=e("Jordan Lee"),s=e(!0);return{assignee:t,menu:s,groupedAssigneeItems:R}},template:`
      <div>
        <h3 class="text-subtitle-1 font-weight-bold mb-4">Select — grouped with subheaders</h3>
        <v-row>
          <v-col cols="12" sm="6" md="4">
            <v-select
              v-model="assignee"
              v-model:menu="menu"
              :items="groupedAssigneeItems"
              label="Assign to"
              hide-details
            />
          </v-col>
        </v-row>
      </div>
    `})},r={name:"Select — Long Labels",parameters:{controls:{disable:!0}},render:()=>({setup(){const t=e(I[0]),s=e(I[1]),l=e(!0);return{closedValue:t,openValue:s,menu:l,longLabelItems:I}},template:`
      <div>
        <h3 class="text-subtitle-1 font-weight-bold mb-4">Select — long option text truncates</h3>
        <v-row>
          <v-col cols="12" sm="6" md="4">
            <div class="text-caption text-medium-emphasis mb-1">Closed — selected value truncates</div>
            <v-select
              v-model="closedValue"
              :items="longLabelItems"
              label="Product"
              hide-details
            />
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <div class="text-caption text-medium-emphasis mb-1">Open — menu rows truncate</div>
            <v-select
              v-model="openValue"
              v-model:menu="menu"
              :items="longLabelItems"
              label="Product"
              hide-details
            />
          </v-col>
        </v-row>
      </div>
    `})},n={name:"Select — Many Options (Scroll)",parameters:{controls:{disable:!0}},render:()=>({setup(){const t=e(""),s=e(!0);return{country:t,menu:s,manyCountryItems:T}},template:`
      <div>
        <h3 class="text-subtitle-1 font-weight-bold mb-4">Select — many options, menu scrolls internally</h3>
        <v-row>
          <v-col cols="12" sm="6" md="4">
            <v-select
              v-model="country"
              v-model:menu="menu"
              :items="manyCountryItems"
              label="Country"
              hide-details
            />
          </v-col>
        </v-row>
      </div>
    `})},d={name:"Select — Disabled Item",parameters:{controls:{disable:!0}},render:()=>({setup(){const t=e("active"),s=e(!0);return{status:t,menu:s,statusItemsWithDisabled:D}},template:`
      <div>
        <h3 class="text-subtitle-1 font-weight-bold mb-4">Select — one option disabled</h3>
        <v-row>
          <v-col cols="12" sm="6" md="4">
            <v-select
              v-model="status"
              v-model:menu="menu"
              :items="statusItemsWithDisabled"
              item-props
              label="Status"
              hide-details
            />
          </v-col>
        </v-row>
      </div>
    `})},c={name:"Loading State",parameters:{controls:{disable:!0}},render:()=>({template:`
      <div>
        <h3 class="text-subtitle-1 font-weight-bold mb-4">Fields — loading</h3>
        <v-row>
          <v-col cols="12" sm="6" md="4">
            <v-text-field
              label="Company name"
              loading
              hide-details
            />
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-select
              :items="['Active', 'Inactive', 'Pending']"
              label="Status"
              loading="primary"
              hide-details
            />
          </v-col>
        </v-row>
      </div>
    `})},m={name:"Autocomplete — No Matches",parameters:{controls:{disable:!0}},render:()=>({setup(){const t=e(null),s=e("Wakanda"),l=e(!0);return{country:t,search:s,menu:l,manyCountryItems:T}},template:`
      <div>
        <h3 class="text-subtitle-1 font-weight-bold mb-4">Autocomplete — search matches nothing</h3>
        <v-row>
          <v-col cols="12" sm="6" md="4">
            <v-autocomplete
              v-model="country"
              v-model:search="search"
              v-model:menu="menu"
              :items="manyCountryItems"
              label="Country"
              placeholder="Search countries…"
              prepend-inner-icon="search"
              clearable
              hide-details
            />
          </v-col>
        </v-row>
      </div>
    `})},p={name:"Error State",parameters:{controls:{disable:!0}},render:()=>({template:`
      <div>
        <h3 class="text-subtitle-1 font-weight-bold mb-4">Fields — error</h3>
        <v-row>
          <v-col cols="12" sm="6" md="4">
            <v-select
              :items="['Active', 'Inactive', 'Pending']"
              label="Status"
              error-messages="Select a status"
            />
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-textarea
              label="Notes"
              rows="3"
              error-messages="Notes cannot be empty"
            />
          </v-col>
        </v-row>
      </div>
    `})},v={name:"Helper Text",render:()=>({template:`
      <div>
        <h3 class="text-subtitle-1 font-weight-bold mb-4">Helper text — transient vs persistent</h3>
        <v-row>
          <v-col cols="12" sm="6" md="4">
            <v-text-field
              label="Send date"
              placeholder="2026-09-15"
              hint="YYYY-MM-DD"
            />
            <div class="text-caption text-medium-emphasis mt-2">Transient — focus the field to see the format hint.</div>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-text-field
              label="Reply-to address"
              placeholder="support@atlas.com"
              hint="Replies from contacts land here, not in the sending inbox."
              persistent-hint
            />
            <div class="text-caption text-medium-emphasis mt-2">Persistent — a consequence the user needs before focusing.</div>
          </v-col>
        </v-row>
      </div>
    `})},u={name:"Readonly",render:()=>({template:`
      <div>
        <h3 class="text-subtitle-1 font-weight-bold mb-4">Editable vs readonly vs disabled</h3>
        <v-row>
          <v-col cols="12" sm="6" md="4">
            <v-text-field label="Editable" model-value="Atlas Outfitters" />
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-text-field label="Readonly" model-value="ACC-2000290" readonly class="mp-field-readonly" />
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-text-field label="Disabled" model-value="Inherited from plan" disabled />
          </v-col>
        </v-row>
      </div>
    `})},h={name:"Success Validation",render:()=>({template:`
      <div>
        <h3 class="text-subtitle-1 font-weight-bold mb-4">Fields — success</h3>
        <v-row>
          <v-col cols="12" sm="6" md="4">
            <v-text-field
              label="Sending domain"
              model-value="mail.atlas.com"
              class="mp-field-success"
              append-inner-icon="circle-check"
              messages="Domain verified."
            />
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-text-field
              label="Error beats success"
              model-value="not-a-domain"
              class="mp-field-success"
              error-messages="Enter a valid domain."
            />
            <div class="text-caption text-medium-emphasis mt-2">Both classes applied — the error treatment wins.</div>
          </v-col>
        </v-row>
      </div>
    `})},b={name:"Counter",render:()=>({setup(){return{maxRule:s=>(s?.length??0)<=60||"Keep the subject under 60 characters."}},template:`
      <div>
        <h3 class="text-subtitle-1 font-weight-bold mb-4">Character counter</h3>
        <v-row>
          <v-col cols="12" sm="6" md="4">
            <v-text-field
              label="Subject line"
              model-value="Fall drop 02 — early access"
              counter="60"
              :rules="[maxRule]"
            />
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-text-field
              label="Subject line (over the limit)"
              model-value="Fall drop 02 — early access for VIP members plus free shipping this weekend only"
              counter="60"
              :rules="[maxRule]"
            />
          </v-col>
        </v-row>
      </div>
    `})},f={name:"Prefix & Suffix",render:()=>({template:`
      <div>
        <h3 class="text-subtitle-1 font-weight-bold mb-4">Inline affixes</h3>
        <v-row>
          <v-col cols="12" sm="6" md="4">
            <v-text-field label="Price" model-value="49.00" prefix="$" />
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-text-field label="URL handle" model-value="trail-shell-jacket" prefix="/" />
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-text-field label="Discount" model-value="15" suffix="%" />
          </v-col>
        </v-row>
      </div>
    `})};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'All States',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => ({
    setup() {
      const text = ref('Hello World');
      const empty = ref('');
      return {
        text,
        empty
      };
    },
    template: \`
      <div>
        <h3 class="text-subtitle-1 font-weight-bold mb-4">Text Field — all states</h3>
        <v-row>
          <v-col cols="12" sm="6" md="4">
            <div class="text-caption text-medium-emphasis mb-1">Default (empty)</div>
            <v-text-field
              v-model="empty"
              label="Company name"
              hide-details
            />
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <div class="text-caption text-medium-emphasis mb-1">Default (filled)</div>
            <v-text-field
              v-model="text"
              label="Company name"
              hide-details
            />
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <div class="text-caption text-medium-emphasis mb-1">Disabled</div>
            <v-text-field
              model-value="Locked value"
              label="Company name"
              disabled
              hide-details
            />
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <div class="text-caption text-medium-emphasis mb-1">Read-only</div>
            <v-text-field
              model-value="Read-only value"
              label="Company name"
              readonly
              hide-details
            />
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <div class="text-caption text-medium-emphasis mb-1">Error</div>
            <v-text-field
              model-value=""
              label="Company name"
              error-messages="This field is required"
            />
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <div class="text-caption text-medium-emphasis mb-1">Helper text</div>
            <v-text-field
              model-value=""
              label="Subdomain"
              hint="This will be part of your store URL"
              persistent-hint
            />
          </v-col>
        </v-row>
      </div>
    \`
  })
}`,...x.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Label States',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => ({
    setup() {
      const empty = ref('');
      const filled = ref('Scooter Village');
      const emptyIcon = ref('');
      // The native \`autofocus\` HTML attribute races Vuetify's own focus
      // listener: the input becomes document.activeElement, but the
      // \`@focus\` handler that flips VField's internal \`focused\` ref (and
      // therefore the .v-field--focused class this baseline's focus rules
      // key off) attaches in Vuetify's mounted hook — which can run after
      // the browser has already fired the autofocus event. Result: the
      // input is focused but renders as if it isn't. Calling the exposed
      // .focus() method after nextTick() sidesteps the race entirely.
      const focusedFieldRef = ref();
      onMounted(() => nextTick(() => focusedFieldRef.value?.focus()));
      return {
        empty,
        filled,
        emptyIcon,
        focusedFieldRef
      };
    },
    template: \`
      <div>
        <h3 class="text-subtitle-1 font-weight-bold mb-1">Static top label — one spec across every state</h3>
        <p class="text-caption text-medium-emphasis mb-4">
          The label is 13px/500 --text-secondary in every state except disabled — focus and
          error are carried by the 2px border and the message, never by recoloring the label.
          The focused specimen is pinned open so the calm label and no-glow border are visible
          without clicking anything.
        </p>
        <v-row>
          <v-col cols="12" sm="6" md="4">
            <div class="text-caption text-medium-emphasis mb-1">Empty — placeholder visible</div>
            <v-text-field v-model="empty" label="Account name" placeholder="e.g. Scooter Village" hide-details />
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <div class="text-caption text-medium-emphasis mb-1">Filled</div>
            <v-text-field v-model="filled" label="Account name" hide-details />
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <div class="text-caption text-medium-emphasis mb-1">Focused (autofocus) — border 2px primary, label calm</div>
            <v-text-field ref="focusedFieldRef" v-model="emptyIcon" label="Email address" prepend-inner-icon="mail" hide-details />
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <div class="text-caption text-medium-emphasis mb-1">Required — trailing * in the label text</div>
            <v-text-field model-value="" label="Company name *" hide-details />
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <div class="text-caption text-medium-emphasis mb-1">Error — border + message carry it, label calm</div>
            <v-text-field model-value="" label="Company name *" error-messages="This field is required" />
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <div class="text-caption text-medium-emphasis mb-1">Disabled — label joins the muted ink</div>
            <v-text-field model-value="Locked value" label="Company name" disabled hide-details />
          </v-col>
        </v-row>
      </div>
    \`
  })
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Sizes',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => ({
    setup() {
      const values = ref({
        sm: '',
        md: '',
        lg: '',
        ssm: 'Active',
        smd: 'Active',
        slg: 'Active'
      });
      return {
        values
      };
    },
    template: \`
      <div>
        <h3 class="text-subtitle-1 font-weight-bold mb-1">Size ramp — component.field.height</h3>
        <p class="text-caption text-medium-emphasis mb-4">
          One ramp, mapped from Vuetify's density prop: compact → sm 32 · comfortable → md 40
          (the theme default — equal to control.height, so a field and a button share one
          baseline) · default → lg 48. The label spec never changes with size. A field with no
          label (last row) reserves no headroom, so its box top aligns with a button's.
        </p>
        <v-row>
          <v-col cols="12" sm="6" md="4">
            <div class="text-caption text-medium-emphasis mb-1">sm — density="compact" (32px)</div>
            <v-text-field v-model="values.sm" label="Label" density="compact" hide-details />
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <div class="text-caption text-medium-emphasis mb-1">md — theme default (40px)</div>
            <v-text-field v-model="values.md" label="Label" hide-details />
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <div class="text-caption text-medium-emphasis mb-1">lg — density="default" (48px)</div>
            <v-text-field v-model="values.lg" label="Label" density="default" hide-details />
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-select v-model="values.ssm" :items="['Active','Paused']" label="Status" density="compact" hide-details />
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-select v-model="values.smd" :items="['Active','Paused']" label="Status" hide-details />
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-select v-model="values.slg" :items="['Active','Paused']" label="Status" density="default" hide-details />
          </v-col>
          <v-col cols="12">
            <div class="text-caption text-medium-emphasis mb-1">Unlabelled chrome field beside a button — both boxes 40px, tops flush</div>
            <div class="d-flex ga-3 align-start" style="max-width: 480px">
              <v-text-field placeholder="Search records…" aria-label="Search records" prepend-inner-icon="search" hide-details />
              <v-btn color="primary" variant="flat" class="text-none">Search</v-btn>
            </div>
          </v-col>
        </v-row>
      </div>
    \`
  })
}`,...y.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Search Field',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => ({
    setup() {
      const query = ref('');
      return {
        query
      };
    },
    template: \`
      <div>
        <h3 class="text-subtitle-1 font-weight-bold mb-4">Search — toolbar / filter variant</h3>
        <v-row>
          <v-col cols="12" sm="6">
            <div class="text-caption text-medium-emphasis mb-1">md (default, 40px) — control rows and toolbars</div>
            <v-text-field
              v-model="query"
              placeholder="Search…"
              aria-label="Search"
              prepend-inner-icon="search"
              clearable
              hide-details
            />
          </v-col>
          <v-col cols="12" sm="6">
            <div class="text-caption text-medium-emphasis mb-1">sm (density="compact", 32px) — dense side panels</div>
            <v-text-field
              v-model="query"
              density="compact"
              placeholder="Search records…"
              aria-label="Search records"
              prepend-inner-icon="search"
              clearable
              hide-details
            />
          </v-col>
        </v-row>
      </div>
    \`
  })
}`,...w.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'Select & Combobox',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => ({
    setup() {
      const single = ref('');
      const multi = ref<string[]>([]);
      return {
        single,
        multi
      };
    },
    template: \`
      <div>
        <h3 class="text-subtitle-1 font-weight-bold mb-4">Select / Combobox — unified style</h3>
        <v-row>
          <v-col cols="12" sm="6">
            <div class="text-caption text-medium-emphasis mb-1">Single select</div>
            <v-select
              v-model="single"
              :items="['Active', 'Inactive', 'Pending', 'Archived']"
              label="Status"
              hide-details
            />
          </v-col>
          <v-col cols="12" sm="6">
            <div class="text-caption text-medium-emphasis mb-1">Multi-select with chips</div>
            <v-select
              v-model="multi"
              :items="['Email', 'SMS', 'Push', 'In-app']"
              label="Channels"
              multiple
              chips
              closable-chips
              hide-details
            />
          </v-col>
          <v-col cols="12" sm="6">
            <div class="text-caption text-medium-emphasis mb-1">Select — disabled</div>
            <v-select
              model-value="Active"
              :items="['Active']"
              label="Status"
              disabled
              hide-details
            />
          </v-col>
          <v-col cols="12" sm="6">
            <div class="text-caption text-medium-emphasis mb-1">sm (density="compact") — dense chrome; aria-label, no top label</div>
            <v-select
              v-model="single"
              :items="['All statuses', 'Active', 'Inactive', 'Pending']"
              aria-label="Status filter"
              density="compact"
              hide-details
            />
          </v-col>
        </v-row>
      </div>
    \`
  })
}`,...S.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: 'Textarea',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => ({
    setup() {
      const body = ref('');
      return {
        body
      };
    },
    template: \`
      <div>
        <h3 class="text-subtitle-1 font-weight-bold mb-4">Textarea — same baseline</h3>
        <v-row>
          <v-col cols="12" sm="6">
            <v-textarea
              v-model="body"
              label="Message body"
              rows="4"
              placeholder="Type your message here…"
              hint="Markdown is supported"
              persistent-hint
            />
          </v-col>
          <v-col cols="12" sm="6">
            <v-textarea
              model-value="This field is disabled."
              label="Internal notes"
              rows="4"
              disabled
              hide-details
            />
          </v-col>
        </v-row>
      </div>
    \`
  })
}`,...F.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: 'With Icons',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => ({
    template: \`
      <div>
        <h3 class="text-subtitle-1 font-weight-bold mb-4">Fields with icons</h3>
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field
              label="Email"
              prepend-inner-icon="mail"
              placeholder="hello@example.com"
              hide-details
            />
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              label="Website"
              prepend-inner-icon="globe"
              append-inner-icon="external-link"
              placeholder="https://example.com"
              hide-details
            />
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              label="Password"
              type="password"
              prepend-inner-icon="lock"
              append-inner-icon="eye-off"
              hide-details
            />
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              label="Revenue"
              prefix="$"
              placeholder="0.00"
              hide-details
            />
          </v-col>
        </v-row>
      </div>
    \`
  })
}`,...A.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Form Layout Example',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => ({
    components: {
      MpFormGrid,
      MpFormSection,
      MpFormField
    },
    setup() {
      const form = ref({
        name: '',
        email: '',
        timezone: '',
        notes: '',
        channel: 0
      });
      return {
        form
      };
    },
    template: \`
      <div>
        <h3 class="text-subtitle-1 font-weight-bold mb-4">Typical form layout</h3>
        <v-card flat border rounded="lg" style="max-width: var(--mp-component-dialog-width-md); padding: var(--mp-component-card-padding);">
          <MpFormSection title="Profile" />
          <MpFormGrid :cols="2">
            <v-text-field
              v-model="form.name"
              label="Full name *"
              prepend-inner-icon="user"
              class="mp-form-grid__full"
            />
            <v-text-field v-model="form.email" label="Email" type="email" prepend-inner-icon="mail" />
            <v-select
              v-model="form.timezone"
              :items="['UTC-8 (PST)', 'UTC-5 (EST)', 'UTC+0 (GMT)', 'UTC+5:30 (IST)']"
              label="Timezone"
            />
            <v-textarea v-model="form.notes" label="Notes" rows="3" class="mp-form-grid__full" />
          </MpFormGrid>

          <MpFormSection title="Contact preference" />
          <MpFormGrid>
            <MpFormField label="How we reach you" hint="Used for service notices, never marketing.">
              <template #default="{ labelId, descriptionId }">
                <v-chip-group v-model="form.channel" :aria-labelledby="labelId" :aria-describedby="descriptionId">
                  <v-chip filter>Email</v-chip>
                  <v-chip filter>SMS</v-chip>
                  <v-chip filter>In-app only</v-chip>
                </v-chip-group>
              </template>
            </MpFormField>
          </MpFormGrid>

          <div class="d-flex justify-end ga-2 mt-6">
            <v-btn class="text-none">Cancel</v-btn>
            <v-btn color="primary" variant="flat" class="text-none">Save changes</v-btn>
          </div>
        </v-card>
      </div>
    \`
  })
}`,...a.parameters?.docs?.source},description:{story:"The layout primitives doing the work together: `MpFormSection` for each heading, `MpFormGrid`\nfor each group, `MpFormField` for the one composite control. There is no spacing utility in\nthis markup — every gap is a token, and the fields carry no margins of their own.",...a.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Select — Selected (Checkmark)',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => ({
    setup() {
      const status = ref('Active');
      const menu = ref(true);
      return {
        status,
        menu
      };
    },
    template: \`
      <div>
        <h3 class="text-subtitle-1 font-weight-bold mb-4">Select — menu open, item selected</h3>
        <v-row>
          <v-col cols="12" sm="6" md="4">
            <v-select
              v-model="status"
              v-model:menu="menu"
              :items="['Active', 'Inactive', 'Pending', 'Archived']"
              label="Status"
              hide-details
            />
          </v-col>
        </v-row>
      </div>
    \`
  })
}`,...o.parameters?.docs?.source},description:{story:`Menu pre-opened with "Active" already selected — the active row shows the UX-008 trailing
checkmark (global.scss \`.v-overlay .v-list-item--active[aria-selected='true']\`), composed with
the existing tint rather than replacing it, per reference-research §1.`,...o.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Select — Grouped Options',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => ({
    setup() {
      const assignee = ref('Jordan Lee');
      const menu = ref(true);
      return {
        assignee,
        menu,
        groupedAssigneeItems
      };
    },
    template: \`
      <div>
        <h3 class="text-subtitle-1 font-weight-bold mb-4">Select — grouped with subheaders</h3>
        <v-row>
          <v-col cols="12" sm="6" md="4">
            <v-select
              v-model="assignee"
              v-model:menu="menu"
              :items="groupedAssigneeItems"
              label="Assign to"
              hide-details
            />
          </v-col>
        </v-row>
      </div>
    \`
  })
}`,...i.parameters?.docs?.source},description:{story:`Menu pre-opened with items grouped under subheaders ("Sales" / "Marketing" / "Support") — group
headers are visually recessed and non-interactive, never a clickable row.`,...i.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Select — Long Labels',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => ({
    setup() {
      const closedValue = ref(longLabelItems[0]);
      const openValue = ref(longLabelItems[1]);
      const menu = ref(true);
      return {
        closedValue,
        openValue,
        menu,
        longLabelItems
      };
    },
    template: \`
      <div>
        <h3 class="text-subtitle-1 font-weight-bold mb-4">Select — long option text truncates</h3>
        <v-row>
          <v-col cols="12" sm="6" md="4">
            <div class="text-caption text-medium-emphasis mb-1">Closed — selected value truncates</div>
            <v-select
              v-model="closedValue"
              :items="longLabelItems"
              label="Product"
              hide-details
            />
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <div class="text-caption text-medium-emphasis mb-1">Open — menu rows truncate</div>
            <v-select
              v-model="openValue"
              v-model:menu="menu"
              :items="longLabelItems"
              label="Product"
              hide-details
            />
          </v-col>
        </v-row>
      </div>
    \`
  })
}`,...r.parameters?.docs?.source},description:{story:`Long option text truncates instead of wrapping or widening the field — both in the closed
field's selected value and in each open-menu row.`,...r.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Select — Many Options (Scroll)',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => ({
    setup() {
      const country = ref('');
      const menu = ref(true);
      return {
        country,
        menu,
        manyCountryItems
      };
    },
    template: \`
      <div>
        <h3 class="text-subtitle-1 font-weight-bold mb-4">Select — many options, menu scrolls internally</h3>
        <v-row>
          <v-col cols="12" sm="6" md="4">
            <v-select
              v-model="country"
              v-model:menu="menu"
              :items="manyCountryItems"
              label="Country"
              hide-details
            />
          </v-col>
        </v-row>
      </div>
    \`
  })
}`,...n.parameters?.docs?.source},description:{story:`38 options pre-opened — the menu's default 310px max-height (VSelect's built-in cap) scrolls
internally instead of growing to fit every row.`,...n.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Select — Disabled Item',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => ({
    setup() {
      const status = ref('active');
      const menu = ref(true);
      return {
        status,
        menu,
        statusItemsWithDisabled
      };
    },
    template: \`
      <div>
        <h3 class="text-subtitle-1 font-weight-bold mb-4">Select — one option disabled</h3>
        <v-row>
          <v-col cols="12" sm="6" md="4">
            <v-select
              v-model="status"
              v-model:menu="menu"
              :items="statusItemsWithDisabled"
              item-props
              label="Status"
              hide-details
            />
          </v-col>
        </v-row>
      </div>
    \`
  })
}`,...d.parameters?.docs?.source},description:{story:"Menu pre-opened with \"Archived\" disabled (can't file back into it directly) — Vuetify's\nbuilt-in disabled row treatment: muted text, no hover/active state, unclickable. Uses\n`item-props` so each item object's own `disabled` flag reaches the underlying `v-list-item`.",...d.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Loading State',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => ({
    template: \`
      <div>
        <h3 class="text-subtitle-1 font-weight-bold mb-4">Fields — loading</h3>
        <v-row>
          <v-col cols="12" sm="6" md="4">
            <v-text-field
              label="Company name"
              loading
              hide-details
            />
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-select
              :items="['Active', 'Inactive', 'Pending']"
              label="Status"
              loading="primary"
              hide-details
            />
          </v-col>
        </v-row>
      </div>
    \`
  })
}`,...c.parameters?.docs?.source},description:{story:"Vuetify's built-in `loading` prop — a linear progress bar replaces the resting border while\na value is being fetched. Works the same on `v-text-field` and `v-select`.",...c.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Autocomplete — No Matches',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => ({
    setup() {
      const country = ref(null);
      const search = ref('Wakanda');
      const menu = ref(true);
      return {
        country,
        search,
        menu,
        manyCountryItems
      };
    },
    template: \`
      <div>
        <h3 class="text-subtitle-1 font-weight-bold mb-4">Autocomplete — search matches nothing</h3>
        <v-row>
          <v-col cols="12" sm="6" md="4">
            <v-autocomplete
              v-model="country"
              v-model:search="search"
              v-model:menu="menu"
              :items="manyCountryItems"
              label="Country"
              placeholder="Search countries…"
              prepend-inner-icon="search"
              clearable
              hide-details
            />
          </v-col>
        </v-row>
      </div>
    \`
  })
}`,...m.parameters?.docs?.source},description:{story:`Searchable autocomplete with a query that matches nothing — Vuetify's default no-data row
renders in place of the list instead of an empty menu.`,...m.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Error State',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => ({
    template: \`
      <div>
        <h3 class="text-subtitle-1 font-weight-bold mb-4">Fields — error</h3>
        <v-row>
          <v-col cols="12" sm="6" md="4">
            <v-select
              :items="['Active', 'Inactive', 'Pending']"
              label="Status"
              error-messages="Select a status"
            />
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-textarea
              label="Notes"
              rows="3"
              error-messages="Notes cannot be empty"
            />
          </v-col>
        </v-row>
      </div>
    \`
  })
}`,...p.parameters?.docs?.source},description:{story:"Select and textarea with `error-messages` set — complements AllStates' text-field error case\nwith the same treatment on other field types.",...p.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Helper Text',
  render: () => ({
    template: \`
      <div>
        <h3 class="text-subtitle-1 font-weight-bold mb-4">Helper text — transient vs persistent</h3>
        <v-row>
          <v-col cols="12" sm="6" md="4">
            <v-text-field
              label="Send date"
              placeholder="2026-09-15"
              hint="YYYY-MM-DD"
            />
            <div class="text-caption text-medium-emphasis mt-2">Transient — focus the field to see the format hint.</div>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-text-field
              label="Reply-to address"
              placeholder="support@atlas.com"
              hint="Replies from contacts land here, not in the sending inbox."
              persistent-hint
            />
            <div class="text-caption text-medium-emphasis mt-2">Persistent — a consequence the user needs before focusing.</div>
          </v-col>
        </v-row>
      </div>
    \`
  })
}`,...v.parameters?.docs?.source},description:{story:"Transient vs persistent helper text. A transient `hint` shows on focus — input-format\nguidance. Anything the user needs before focusing (consequences, defaults, scope) is\n`persistent-hint`.",...v.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Readonly',
  render: () => ({
    template: \`
      <div>
        <h3 class="text-subtitle-1 font-weight-bold mb-4">Editable vs readonly vs disabled</h3>
        <v-row>
          <v-col cols="12" sm="6" md="4">
            <v-text-field label="Editable" model-value="Atlas Outfitters" />
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-text-field label="Readonly" model-value="ACC-2000290" readonly class="mp-field-readonly" />
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-text-field label="Disabled" model-value="Inherited from plan" disabled />
          </v-col>
        </v-row>
      </div>
    \`
  })
}`,...u.parameters?.docs?.source},description:{story:"Editable / readonly / disabled must read as three distinct states. Readonly is the\nopt-in `mp-field-readonly` class beside the `readonly` prop: secondary fill, subtle\nhairline (never promotes to the focus border), value stays `--text-primary` — the\ncontent is real, only editing is off. Disabled mutes the value too.",...u.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Success Validation',
  render: () => ({
    template: \`
      <div>
        <h3 class="text-subtitle-1 font-weight-bold mb-4">Fields — success</h3>
        <v-row>
          <v-col cols="12" sm="6" md="4">
            <v-text-field
              label="Sending domain"
              model-value="mail.atlas.com"
              class="mp-field-success"
              append-inner-icon="circle-check"
              messages="Domain verified."
            />
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-text-field
              label="Error beats success"
              model-value="not-a-domain"
              class="mp-field-success"
              error-messages="Enter a valid domain."
            />
            <div class="text-caption text-medium-emphasis mt-2">Both classes applied — the error treatment wins.</div>
          </v-col>
        </v-row>
      </div>
    \`
  })
}`,...h.parameters?.docs?.source},description:{story:'Success validation is the opt-in `mp-field-success` class: 2px success border + green\nmessage, with `append-inner-icon="circle-check"` as the trailing-check convention.\nThe label stays calm (like on error), and error always wins when both classes apply.',...h.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Counter',
  render: () => ({
    setup() {
      const maxRule = (v: string) => (v?.length ?? 0) <= 60 || 'Keep the subject under 60 characters.';
      return {
        maxRule
      };
    },
    template: \`
      <div>
        <h3 class="text-subtitle-1 font-weight-bold mb-4">Character counter</h3>
        <v-row>
          <v-col cols="12" sm="6" md="4">
            <v-text-field
              label="Subject line"
              model-value="Fall drop 02 — early access"
              counter="60"
              :rules="[maxRule]"
            />
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-text-field
              label="Subject line (over the limit)"
              model-value="Fall drop 02 — early access for VIP members plus free shipping this weekend only"
              counter="60"
              :rules="[maxRule]"
            />
          </v-col>
        </v-row>
      </div>
    \`
  })
}`,...b.parameters?.docs?.source},description:{story:`The counter joins the messages voice (12px, muted). It only turns red when a validation
rule actually invalidates the field — Vuetify's counter doesn't self-invalidate, so a
\`counter="N"\` is always paired with a max-length rule.`,...b.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Prefix & Suffix',
  render: () => ({
    template: \`
      <div>
        <h3 class="text-subtitle-1 font-weight-bold mb-4">Inline affixes</h3>
        <v-row>
          <v-col cols="12" sm="6" md="4">
            <v-text-field label="Price" model-value="49.00" prefix="$" />
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-text-field label="URL handle" model-value="trail-shell-jacket" prefix="/" />
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-text-field label="Discount" model-value="15" suffix="%" />
          </v-col>
        </v-row>
      </div>
    \`
  })
}`,...f.parameters?.docs?.source},description:{story:`Prefixes and suffixes are inline affixes — muted chrome beside the value, height-aligned
to the field ramp. There is deliberately no boxed-addon segment style.`,...f.parameters?.docs?.description}}};const O=["AllStates","LabelStates","Sizes","SearchField","SelectAndCombobox","TextareaField","WithIcons","FormLayout","SelectedWithCheckmark","GroupedOptions","LongLabels","ManyOptionsScroll","DisabledItem","LoadingState","EmptyState","ErrorState","HelperText","Readonly","SuccessValidation","Counter","PrefixSuffix"];export{x as AllStates,b as Counter,d as DisabledItem,m as EmptyState,p as ErrorState,a as FormLayout,i as GroupedOptions,v as HelperText,g as LabelStates,c as LoadingState,r as LongLabels,n as ManyOptionsScroll,f as PrefixSuffix,u as Readonly,w as SearchField,S as SelectAndCombobox,o as SelectedWithCheckmark,y as Sizes,h as SuccessValidation,F as TextareaField,A as WithIcons,O as __namedExportsOrder,N as default};
