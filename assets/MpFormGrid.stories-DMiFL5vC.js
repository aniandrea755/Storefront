import{M as e}from"./MpFormGrid-CIGBvnp2.js";import{M as d}from"./MpFormSection-BK5pVmwO.js";import{M as o}from"./MpFormField-BzBLjfV3.js";import{c as s}from"./decorators-VsXP7llt.js";import"./iframe-DH-XNaA6.js";import"./preload-helper-PPVm8Dsz.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const b={title:"Molecules/MpFormGrid",component:e,tags:["autodocs"],parameters:{docs:{description:{component:`
### Overview
\`MpFormGrid\` is the one form layout container. Vertical rhythm between fields is a property of
the *form*, not of each field — but before this, 275 fields across the app carried their own
\`mb-2\` / \`mb-3\` / \`mb-4\`, and 117 of those sat inside an overlay body that already applied a
16px gap. The margin landed *on top of* the gap, so the real distance between two fields was 24,
28, 32, 36 or 40px depending on which utility the author happened to reach for.

A field sets zero external margin. This container sets the gap once, from
\`component.field.groupGap\`.

**Use when:** any group of form controls — in a drawer, a dialog, a settings card, or a page form.

**Don't use when:** the surface is a list of rows (\`MpListRow\`) or a page-level column layout
(\`v-row\`/\`v-col\` still own page grids).

### Usage
\`\`\`html
<MpFormGrid :cols="2">
  <v-text-field label="Campaign name *" class="mp-form-grid__full" />
  <v-text-field label="From name" />
  <v-text-field label="Reply-to" type="email" />

  <div class="mp-form-grid__trailing">
    <v-text-field label="Amount" type="number" />
    <v-btn icon="trash-2" variant="text" size="small" density="comfortable" aria-label="Remove" />
  </div>
</MpFormGrid>
\`\`\`

### The two child classes
- **\`mp-form-grid__full\`** — spans both columns in a two-column grid.
- **\`mp-form-grid__trailing\`** — a field plus a trailing icon button. The button gets its own
  fixed \`component.control.height\` track, so the input's right edge still lands on the form's
  right edge instead of being pushed in by the button's width. The button is centred against the
  input box, not the row, so a label above the field does not knock it out of alignment.

They are classes rather than props deliberately: a class is one attribute on the child, where a
prop would mean a wrapper component around every single row.

### 🟢 Do's
- **Do** let the grid own all vertical spacing between controls.
- **Do** use \`mp-form-grid__full\` for a field that should not be paired — a subject line, a
  textarea, a multi-select.
- **Do** nest a grid inside a \`mp-form-grid__trailing\` row when the row itself has two fields.

### 🔴 Don'ts
- **Don't** add \`mb-*\` to a child. That is the bug this component exists to remove.
- **Don't** use it to lay out a page. It is a *form* container; its gap is the field rhythm.

### A11y
- **Provides:** nothing — it is layout only, and renders a plain \`div\`, so it adds no semantics
  between a fieldset and its controls.
- **Consumer must:** label every control, and group related controls with \`MpFormField\` or a
  native \`fieldset\` where the grouping is meaningful rather than merely visual.
        `}}},argTypes:{cols:{control:"inline-radio",options:[1,2],description:"Column count. 1 (default) stacks every field; 2 pairs them. Collapses to 1 below `layout.breakpointCompact`."},default:{control:!1,description:"Slot — form controls. Accepts the `mp-form-grid__full` and `mp-form-grid__trailing` child classes.",table:{category:"slots"}}},decorators:[s("dialog")]},l={args:{cols:1},render:n=>({components:{MpFormGrid:e},setup:()=>({args:n}),template:`
      <MpFormGrid v-bind="args">
        <v-text-field label="Segment name *" />
        <v-select label="Match" :items="['All rules', 'Any rule']" model-value="All rules" />
        <v-textarea label="Description" rows="3" />
      </MpFormGrid>
    `})},i={render:()=>({components:{MpFormGrid:e},template:`
      <div class="d-flex flex-column ga-8">
        <div>
          <div class="text-caption text-medium-emphasis mb-2">cols="1" — the default</div>
          <MpFormGrid>
            <v-text-field label="First name" />
            <v-text-field label="Last name" />
            <v-text-field label="Email" type="email" />
          </MpFormGrid>
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">cols="2"</div>
          <MpFormGrid :cols="2">
            <v-text-field label="First name" />
            <v-text-field label="Last name" />
            <v-text-field label="Email" type="email" class="mp-form-grid__full" />
          </MpFormGrid>
        </div>
      </div>
    `}),args:{}},t={render:()=>({components:{MpFormGrid:e},template:`
      <div class="d-flex flex-column ga-8">
        <div>
          <div class="text-caption text-medium-emphasis mb-2">In a 440px surface (dialog sm)</div>
          <div style="max-width: var(--mp-component-dialog-width-sm); border: 1px dashed var(--border-subtle); padding: var(--mp-component-dialog-padding);">
            <MpFormGrid :cols="2">
              <v-text-field label="First name" />
              <v-text-field label="Last name" />
            </MpFormGrid>
          </div>
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">In a 640px surface (dialog md / drawer lg)</div>
          <div style="max-width: var(--mp-component-dialog-width-md); border: 1px dashed var(--border-subtle); padding: var(--mp-component-dialog-padding);">
            <MpFormGrid :cols="2">
              <v-text-field label="First name" />
              <v-text-field label="Last name" />
            </MpFormGrid>
          </div>
        </div>
      </div>
    `}),args:{}},a={render:()=>({components:{MpFormGrid:e,MpFormField:o},template:`
      <div class="d-flex flex-column ga-8">
        <div>
          <div class="text-caption text-medium-emphasis mb-2">Full-span child</div>
          <MpFormGrid :cols="2">
            <v-text-field label="First name" />
            <v-text-field label="Last name" />
            <v-textarea label="Notes" rows="3" class="mp-form-grid__full" />
          </MpFormGrid>
        </div>

        <div>
          <div class="text-caption text-medium-emphasis mb-2">Trailing action — note the shared right edge</div>
          <MpFormGrid :cols="2">
            <v-text-field label="Plain field" class="mp-form-grid__full" />
            <div class="mp-form-grid__trailing">
              <v-text-field label="Amount" model-value="25" type="number" prepend-inner-icon="dollar-sign" />
              <v-btn icon="trash-2" variant="text" size="small" density="comfortable" aria-label="Remove amount" />
            </div>
            <div class="mp-form-grid__trailing">
              <v-text-field label="Amount" model-value="50" type="number" prepend-inner-icon="dollar-sign" />
              <v-btn icon="trash-2" variant="text" size="small" density="comfortable" aria-label="Remove amount" />
            </div>
          </MpFormGrid>
        </div>

        <div>
          <div class="text-caption text-medium-emphasis mb-2">One field in error — its neighbour holds its baseline</div>
          <MpFormGrid :cols="2">
            <v-text-field label="Discount *" model-value="-15" type="number" error-messages="Enter a value above zero" />
            <v-text-field label="Coupon code" model-value="SPRING26" />
          </MpFormGrid>
        </div>

        <div>
          <div class="text-caption text-medium-emphasis mb-2">Floating label beside a composite control</div>
          <MpFormGrid :cols="2">
            <v-text-field label="Initial value" model-value="50" type="number" prepend-inner-icon="dollar-sign" />
            <MpFormField label="Common amounts">
              <v-chip-group :model-value="1">
                <v-chip filter>$25</v-chip>
                <v-chip filter>$50</v-chip>
                <v-chip filter>$100</v-chip>
              </v-chip-group>
            </MpFormField>
          </MpFormGrid>
        </div>
      </div>
    `}),args:{}},r={render:()=>({components:{MpFormGrid:e,MpFormSection:d,MpFormField:o},template:`
      <div>
        <MpFormSection title="General" />
        <MpFormGrid :cols="2">
          <v-text-field label="Initial value *" model-value="50" type="number" prepend-inner-icon="dollar-sign" />
          <MpFormField label="Common amounts" hint="Sets the initial value.">
            <v-chip-group :model-value="1">
              <v-chip filter>$25</v-chip>
              <v-chip filter>$50</v-chip>
              <v-chip filter>$100</v-chip>
              <v-chip filter>$200</v-chip>
            </v-chip-group>
          </MpFormField>
          <v-text-field label="Contact" prepend-inner-icon="user" class="mp-form-grid__full" />
          <v-text-field label="Email" type="email" prepend-inner-icon="mail" class="mp-form-grid__full" />
        </MpFormGrid>

        <MpFormSection title="Expiration date" />
        <MpFormGrid>
          <MpFormField
            label="When this card expires"
            hint="Countries have different laws for gift card expiry dates."
          >
            <template #default="{ labelId, descriptionId }">
              <v-radio-group model-value="none" :aria-labelledby="labelId" :aria-describedby="descriptionId">
                <v-radio value="none" label="No expiration date" />
                <v-radio value="date" label="Set expiration date" />
              </v-radio-group>
            </template>
          </MpFormField>
        </MpFormGrid>
      </div>
    `}),args:{}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    cols: 1
  },
  render: args => ({
    components: {
      MpFormGrid
    },
    setup: () => ({
      args
    }),
    template: \`
      <MpFormGrid v-bind="args">
        <v-text-field label="Segment name *" />
        <v-select label="Match" :items="['All rules', 'Any rule']" model-value="All rules" />
        <v-textarea label="Description" rows="3" />
      </MpFormGrid>
    \`
  })
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      MpFormGrid
    },
    template: \`
      <div class="d-flex flex-column ga-8">
        <div>
          <div class="text-caption text-medium-emphasis mb-2">cols="1" — the default</div>
          <MpFormGrid>
            <v-text-field label="First name" />
            <v-text-field label="Last name" />
            <v-text-field label="Email" type="email" />
          </MpFormGrid>
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">cols="2"</div>
          <MpFormGrid :cols="2">
            <v-text-field label="First name" />
            <v-text-field label="Last name" />
            <v-text-field label="Email" type="email" class="mp-form-grid__full" />
          </MpFormGrid>
        </div>
      </div>
    \`
  }),
  args: {} as never
}`,...i.parameters?.docs?.source},description:{story:"One column and two columns. In the two-column grid both tracks are `minmax(0, 1fr)` — equal\nwidth, and a long option in a select cannot push its column past its share.",...i.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      MpFormGrid
    },
    template: \`
      <div class="d-flex flex-column ga-8">
        <div>
          <div class="text-caption text-medium-emphasis mb-2">In a 440px surface (dialog sm)</div>
          <div style="max-width: var(--mp-component-dialog-width-sm); border: 1px dashed var(--border-subtle); padding: var(--mp-component-dialog-padding);">
            <MpFormGrid :cols="2">
              <v-text-field label="First name" />
              <v-text-field label="Last name" />
            </MpFormGrid>
          </div>
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">In a 640px surface (dialog md / drawer lg)</div>
          <div style="max-width: var(--mp-component-dialog-width-md); border: 1px dashed var(--border-subtle); padding: var(--mp-component-dialog-padding);">
            <MpFormGrid :cols="2">
              <v-text-field label="First name" />
              <v-text-field label="Last name" />
            </MpFormGrid>
          </div>
        </div>
      </div>
    \`
  }),
  args: {} as never
}`,...t.parameters?.docs?.source},description:{story:"There is no size axis. A form grid is as wide as the surface it sits in — a drawer body, a\ndialog body, a settings card — and the one dimension it does decide, the gap between fields,\nis a single token (`component.field.groupGap`, 16) rather than a ramp. The column count is a\nstructural choice, so it is `cols`, not `size`.",...t.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      MpFormGrid,
      MpFormField
    },
    template: \`
      <div class="d-flex flex-column ga-8">
        <div>
          <div class="text-caption text-medium-emphasis mb-2">Full-span child</div>
          <MpFormGrid :cols="2">
            <v-text-field label="First name" />
            <v-text-field label="Last name" />
            <v-textarea label="Notes" rows="3" class="mp-form-grid__full" />
          </MpFormGrid>
        </div>

        <div>
          <div class="text-caption text-medium-emphasis mb-2">Trailing action — note the shared right edge</div>
          <MpFormGrid :cols="2">
            <v-text-field label="Plain field" class="mp-form-grid__full" />
            <div class="mp-form-grid__trailing">
              <v-text-field label="Amount" model-value="25" type="number" prepend-inner-icon="dollar-sign" />
              <v-btn icon="trash-2" variant="text" size="small" density="comfortable" aria-label="Remove amount" />
            </div>
            <div class="mp-form-grid__trailing">
              <v-text-field label="Amount" model-value="50" type="number" prepend-inner-icon="dollar-sign" />
              <v-btn icon="trash-2" variant="text" size="small" density="comfortable" aria-label="Remove amount" />
            </div>
          </MpFormGrid>
        </div>

        <div>
          <div class="text-caption text-medium-emphasis mb-2">One field in error — its neighbour holds its baseline</div>
          <MpFormGrid :cols="2">
            <v-text-field label="Discount *" model-value="-15" type="number" error-messages="Enter a value above zero" />
            <v-text-field label="Coupon code" model-value="SPRING26" />
          </MpFormGrid>
        </div>

        <div>
          <div class="text-caption text-medium-emphasis mb-2">Floating label beside a composite control</div>
          <MpFormGrid :cols="2">
            <v-text-field label="Initial value" model-value="50" type="number" prepend-inner-icon="dollar-sign" />
            <MpFormField label="Common amounts">
              <v-chip-group :model-value="1">
                <v-chip filter>$25</v-chip>
                <v-chip filter>$50</v-chip>
                <v-chip filter>$100</v-chip>
              </v-chip-group>
            </MpFormField>
          </MpFormGrid>
        </div>
      </div>
    \`
  }),
  args: {} as never
}`,...a.parameters?.docs?.source},description:{story:`The states that change the layout: a full-span child, a trailing-action row, a row whose field
has an error message (the neighbouring column must not move), and the mixed case — a
plain labelled field beside a composite \`MpFormField\` in the same row (both render the
identical static top label, so the row shares one baseline).`,...a.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      MpFormGrid,
      MpFormSection,
      MpFormField
    },
    template: \`
      <div>
        <MpFormSection title="General" />
        <MpFormGrid :cols="2">
          <v-text-field label="Initial value *" model-value="50" type="number" prepend-inner-icon="dollar-sign" />
          <MpFormField label="Common amounts" hint="Sets the initial value.">
            <v-chip-group :model-value="1">
              <v-chip filter>$25</v-chip>
              <v-chip filter>$50</v-chip>
              <v-chip filter>$100</v-chip>
              <v-chip filter>$200</v-chip>
            </v-chip-group>
          </MpFormField>
          <v-text-field label="Contact" prepend-inner-icon="user" class="mp-form-grid__full" />
          <v-text-field label="Email" type="email" prepend-inner-icon="mail" class="mp-form-grid__full" />
        </MpFormGrid>

        <MpFormSection title="Expiration date" />
        <MpFormGrid>
          <MpFormField
            label="When this card expires"
            hint="Countries have different laws for gift card expiry dates."
          >
            <template #default="{ labelId, descriptionId }">
              <v-radio-group model-value="none" :aria-labelledby="labelId" :aria-describedby="descriptionId">
                <v-radio value="none" label="No expiration date" />
                <v-radio value="date" label="Set expiration date" />
              </v-radio-group>
            </template>
          </MpFormField>
        </MpFormGrid>
      </div>
    \`
  }),
  args: {} as never
}`,...r.parameters?.docs?.source},description:{story:"**In context.** A gift-card form built the way the real one now is: `MpFormSection` for each\nheading, `MpFormGrid` for each group, `MpFormField` for the composite controls. There is not\none margin utility in this markup — every gap you can see comes from a token.",...r.parameters?.docs?.description}}};const g=["Default","Variants","Sizes","States","InContextGiftCardForm"];export{l as Default,r as InContextGiftCardForm,t as Sizes,a as States,i as Variants,g as __namedExportsOrder,b as default};
