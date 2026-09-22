import{r as n}from"./iframe-BqHSr5b_.js";import{R as t}from"./RolePicker-B2ABwpZQ.js";import"./preload-helper-PPVm8Dsz.js";import"./useRbac-Dd_5O9sS.js";import"./useAccounts-BNKGYLRf.js";import"./rbacData-DG1N_lNm.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const h={title:"Product/RBAC/RolePicker",component:t,tags:["autodocs"],parameters:{docs:{description:{component:`
### Overview
\`RolePicker\` is the grouped role checklist used by the invite flow and the per-user access drawer. Roles are
grouped Global-first, then by product (MMC / MSC / MCC). Groups whose product isn't in the active account's
subscription render locked ("Requires … subscription"), demoing the PRD rule that role availability is
filtered by subscription entitlements. Account Owner is never assignable and never appears.

The picker reads role groups and usage counts from \`useRbacStore\`; the active account (from \`useAccountsStore\`)
drives which groups are locked. A role that conflicts with an already-selected role shows an inline warning —
final validation happens on save via \`rbac.validateAssignment\`.

**Use when:** assigning one or more roles to a user (invite, edit access, bulk assign).

**Don't use when:** editing what a role can do — that's \`PermissionMatrix\`.

### Usage
\`\`\`html
<RolePicker v-model="selectedRoleIds" />
<RolePicker v-model="ownerRoleIds" disabled />
\`\`\`

### A11y
- **Provides:** every checkbox is labelled "{role} — {product group}"; locked groups explain why in text; selection state is conveyed by border + checkbox, not colour alone; conflict warnings are text + icon.
- **Consumer must:** surface \`validateAssignment\` errors near the save action, not only in the picker.
        `}}},render:a=>({components:{RolePicker:t},setup(){const s=n([...a.modelValue]);return{args:a,model:s}},template:`
      <section style="padding:24px;background:rgb(var(--v-theme-background));max-width:560px;">
        <RolePicker v-model="model" :disabled="args.disabled" />
        <p class="text-caption text-medium-emphasis mt-4">Selected: {{ model.join(', ') || 'none' }}</p>
      </section>
    `}),argTypes:{modelValue:{control:"object",description:"Selected role ids (v-model). Controlled — the picker emits the next array rather than mutating this one."},disabled:{control:"boolean",description:"Disables every checkbox (e.g. the account owner's roles can't change). Individually locked roles stay locked regardless. Default false."},"update:modelValue":{action:"update:modelValue",description:"Emitted with the next selected-id array when a role is checked or unchecked."}}},e={args:{modelValue:["role-mmc-campaign-manager"]}},o={args:{modelValue:["role-analyst"]}},r={args:{modelValue:["role-platform-admin"],disabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: ['role-mmc-campaign-manager']
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    // Read-Only Analyst is selected — Platform Admin and MMC Admin show conflict hints
    modelValue: ['role-analyst']
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: ['role-platform-admin'],
    disabled: true
  }
}`,...r.parameters?.docs?.source}}};const g=["Default","ConflictWarning","Disabled"];export{o as ConflictWarning,e as Default,r as Disabled,g as __namedExportsOrder,h as default};
