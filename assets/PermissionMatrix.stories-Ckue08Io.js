import{r as m}from"./iframe-DH-XNaA6.js";import{P as s}from"./PermissionMatrix-BR5PrI8X.js";import"./preload-helper-PPVm8Dsz.js";import"./rbacData-DG1N_lNm.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const u={title:"Product/RBAC/PermissionMatrix",component:s,tags:["autodocs"],parameters:{docs:{description:{component:`
### Overview
\`PermissionMatrix\` renders the unified RBAC permission catalog (Core Platform, MMC, MSC, MCC) as per-module
checklists with product tabs. It encodes the PRD's dependency rules: checking a permission auto-grants its
\`requires\` closure (create/edit/delete require view; manage requires edit), and a granted permission that
another grant depends on renders checked + disabled with a "Required by …" tooltip.

**Use when:** editing a custom role's permissions, or showing a role's / user's effective permissions read-only.

**Don't use when:** picking roles for a user — that's \`RolePicker\`.

### Usage
\`\`\`html
<PermissionMatrix v-model="role.permissionIds" :products="['platform', 'marketing']" />
<PermissionMatrix :model-value="[...effectivePermissions]" readonly />
\`\`\`

### 🟢 Do's
- **Do** scope \`products\` to the role's product (plus \`platform\` for global roles) so the tabs stay relevant.
- **Do** persist through \`expandWithDependencies\` on save — the matrix keeps the model closed over dependencies, but defense in depth is cheap.

### 🔴 Don'ts
- **Don't** hand-edit the model to remove a dependency of a granted permission; unlock it by removing the dependent grant first.

### A11y
- **Provides:** every checkbox has an explicit \`aria-label\` (permission + module); the module tri-state toggle is labelled "Grant all …"; locked rows expose the reason via the lock icon's label; read-only mode conveys state with icon + text colour, not colour alone.
- **Consumer must:** place the matrix under a heading that names whose permissions are being edited.
        `}}},render:o=>({components:{PermissionMatrix:s},setup(){const n=m([...o.modelValue]);return{args:o,model:n}},template:`
      <section style="padding:24px;background:rgb(var(--v-theme-background));max-width:880px;">
        <PermissionMatrix v-model="model" :products="args.products" :readonly="args.readonly" />
        <p class="text-caption text-medium-emphasis mt-4">{{ model.length }} permissions granted</p>
      </section>
    `}),argTypes:{modelValue:{control:"object",description:"Granted permission ids (v-model). The matrix is controlled — it never mutates this array."},products:{control:"object",description:"ProductKey[] limiting which product tabs render, in catalog order. Defaults to the full PRODUCT_ORDER catalog."},readonly:{control:"boolean",description:"Read-only rendering — check / minus icons instead of interactive checkboxes. Default false."},"update:modelValue":{action:"update:modelValue",description:"Emitted with the next granted-id array whenever a permission or module row is toggled."}}},e={args:{modelValue:["marketing.campaigns.view","marketing.campaigns.create","marketing.campaigns.edit","marketing.audience.view","marketing.content.view"],products:["marketing"]}},a={args:{modelValue:["marketing.campaigns.view","marketing.campaigns.edit","marketing.campaigns.manage"],products:["marketing"]}},r={args:{modelValue:["platform.dashboards.view","marketing.analytics.view"],products:["platform","marketing","service","commerce"]}},t={args:{modelValue:["marketing.campaigns.view","marketing.campaigns.create","marketing.campaigns.edit","marketing.campaigns.delete","marketing.campaigns.manage","marketing.audience.view","marketing.content.view","marketing.analytics.view"],products:["marketing"],readonly:!0}},i={args:{modelValue:["commerce.orders.view","commerce.orders.edit"],products:["commerce"]}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: ['marketing.campaigns.view', 'marketing.campaigns.create', 'marketing.campaigns.edit', 'marketing.audience.view', 'marketing.content.view'],
    products: ['marketing']
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    // campaigns.manage requires edit requires view — view and edit render locked
    modelValue: ['marketing.campaigns.view', 'marketing.campaigns.edit', 'marketing.campaigns.manage'],
    products: ['marketing']
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: ['platform.dashboards.view', 'marketing.analytics.view'],
    products: ['platform', 'marketing', 'service', 'commerce']
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: ['marketing.campaigns.view', 'marketing.campaigns.create', 'marketing.campaigns.edit', 'marketing.campaigns.delete', 'marketing.campaigns.manage', 'marketing.audience.view', 'marketing.content.view', 'marketing.analytics.view'],
    products: ['marketing'],
    readonly: true
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: ['commerce.orders.view', 'commerce.orders.edit'],
    products: ['commerce']
  }
}`,...i.parameters?.docs?.source}}};const k=["EditableMarketingRole","DependencyLocking","GlobalRoleAllProducts","ReadonlyEffectivePermissions","ProvisionalCommerce"];export{a as DependencyLocking,e as EditableMarketingRole,r as GlobalRoleAllProducts,i as ProvisionalCommerce,t as ReadonlyEffectivePermissions,k as __namedExportsOrder,u as default};
