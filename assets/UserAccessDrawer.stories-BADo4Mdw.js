import{r as i}from"./iframe-BqHSr5b_.js";import{U as c}from"./UserAccessDrawer-6Peuy4Tt.js";import{S as d}from"./rbacData-DG1N_lNm.js";import"./preload-helper-PPVm8Dsz.js";import"./MpConfirmDialog-g8XCZO_Q.js";import"./MpDialog-F4WZRRS8.js";import"./useScrollEdges-B2McRpMX.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./MpFormDrawer-NT-xQk6b.js";import"./useFocusTrap-oS9hmom4.js";import"./MpFormField-eWrsvwna.js";import"./MpFormGrid-D0pxdSe6.js";import"./MpFormSection-CmGpUCf7.js";import"./MpStatusChip-Cvm9kx4z.js";import"./PermissionMatrix-BzTlggZi.js";import"./RolePicker-B2ABwpZQ.js";import"./useRbac-Dd_5O9sS.js";import"./useAccounts-BNKGYLRf.js";import"./useRetail-e8HtNslC.js";import"./useCommerce-CNvvpQph.js";import"./useOnboarding-rnLK_TX1.js";import"./usePlg-ML6QTG6m.js";import"./useSalesChannels-C-UC6oeI.js";import"./useRelativeTime-BAck8X0K.js";function m(e){return new Promise(r=>setTimeout(r,e))}const z={title:"Product/RBAC/UserAccessDrawer",component:c,tags:["autodocs"],parameters:{docs:{story:{inline:!1,height:"760px"},description:{component:`
### Overview
\`UserAccessDrawer\` is the "Manage access" flow for an existing user: identity + status, an
editable \`RolePicker\` (disabled outright for the account owner), a conditional commerce
store-scope picker, a live product-access preview with a togglable read-only \`PermissionMatrix\`,
and a danger zone (deactivate/reactivate, remove). It reads the user via
\`useRbacStore.userById(userId)\` and reinitializes its local role/scope selection from that user
every time \`userId\` or \`open\` changes. Save calls \`rbac.assignRoles()\`; the danger-zone buttons
call \`rbac.setUserStatus()\` directly, while removal only asks the parent to confirm via
\`request-remove\` — the drawer never deletes a user itself.

**Use when:** editing an existing user's roles, commerce scope, or account status from the Users
& Roles list.

**Don't use when:** inviting a brand-new user (\`InviteUsersDrawer\`), or editing what a role itself
grants (\`PermissionMatrix\` inside role management).

### Usage
\`\`\`html
<UserAccessDrawer
  v-model="accessOpen"
  :user-id="selectedUserId"
  @notify="message => toast.success(message)"
  @request-remove="userId => confirmRemove(userId)"
/>
\`\`\`

### 🟢 Do's
- **Do** keep passing the same \`userId\` for the drawer's whole open lifetime — it resets its local
  role/scope selection whenever \`userId\` (or \`open\`) changes.
- **Do** handle \`@request-remove\` with a confirm step (\`MpConfirmDialog\`) before actually removing
  the user — the drawer only asks, it never removes on its own.
- **Do** leave the account owner's row alone — \`isOwner\` already disables roles, scope, and the
  danger zone, and replaces them with explanatory copy.

### 🔴 Don'ts
- **Don't** call \`rbac.assignRoles\` yourself from \`@notify\` — Save has already persisted the
  change by the time \`@notify\` fires; it's just the message to surface.
- **Don't** open the drawer with \`userId: null\` expecting content — it renders nothing until a
  real user resolves.

### A11y
- **Provides:** inherits \`MpFormDrawer\`'s dialog semantics (focus trap, Escape, focus restore); the
  owner's shield icon carries its explanation via \`v-tooltip\` rather than being decorative; the
  status chip conveys state with icon + text, not color alone; the danger zone is set apart with a
  border (not color alone), and its buttons are explicitly labelled ("Reactivate user" /
  "Deactivate user" / "Remove user").
- **Consumer must:** confirm destructive actions on \`@request-remove\` before calling into the
  store, and surface \`@notify\` messages (e.g. via \`MpToastStack\`) — the drawer shows no inline
  confirmation of its own.
        `}}},argTypes:{modelValue:{control:"boolean",description:"v-model — drawer visibility."},userId:{control:"select",options:d.map(e=>e.id),description:"The user being managed, looked up via useRbacStore.userById(). Local role/scope selection reinitializes from this user whenever it changes."},notify:{control:!1,description:"Event — a message to surface (e.g. via toast) after Save, or after a deactivate/reactivate.",table:{category:"events"}},"request-remove":{control:!1,description:'Event — emitted with the userId when "Remove user" is clicked; the host must confirm and perform the removal.',table:{category:"events"}}},args:{modelValue:!0,userId:"user-3"},render:e=>({components:{UserAccessDrawer:c},setup(){const r=i(e.modelValue),l=i("—");return{args:e,open:r,lastNotice:l}},template:`
      <section style="min-height:640px;background:rgb(var(--v-theme-background));padding:24px;">
        <v-btn variant="flat" size="small" class="text-none" prepend-icon="user-cog" rounded="lg" color="surface" @click="open = true">Manage access</v-btn>
        <div class="text-caption text-medium-emphasis mt-3">Last notice: {{ lastNotice }}</div>
        <UserAccessDrawer
          v-bind="args"
          v-model="open"
          @notify="message => lastNotice = message"
          @request-remove="removedId => lastNotice = 'Requested removal of ' + removedId"
        />
      </section>
    `})},s={args:{modelValue:!1,userId:"user-3"}},t={args:{modelValue:!0,userId:"user-3"}},o={args:{modelValue:!0,userId:"user-7"}},a={args:{modelValue:!0,userId:"user-1"}},n={args:{modelValue:!0,userId:"user-4"},play:async()=>{await m(300),Array.from(document.querySelectorAll(".mp-form-drawer__body button")).find(r=>r.textContent?.includes("Show effective permissions"))?.click()}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: false,
    userId: 'user-3'
  }
}`,...s.parameters?.docs?.source},description:{story:`Closed — just the trigger button, the resting state from a row's "Manage access" action.`,...s.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: true,
    userId: 'user-3'
  }
}`,...t.parameters?.docs?.source},description:{story:"Mike Zhang — a single-role active user, the baseline open state.",...t.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: true,
    userId: 'user-7'
  }
}`,...o.parameters?.docs?.source},description:{story:"James Okafor — MCC Admin scoped to two specific locations: exercises the commerce store-scope picker and a fuller product-access preview.",...o.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: true,
    userId: 'user-1'
  }
}`,...a.parameters?.docs?.source},description:{story:"The account owner is fully protected: roles and scope render disabled behind an explanatory alert, and the danger zone is replaced with protective copy — Save stays disabled.",...a.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: true,
    userId: 'user-4'
  },
  play: async () => {
    await wait(300);
    const toggle = Array.from(document.querySelectorAll<HTMLButtonElement>('.mp-form-drawer__body button')).find(btn => btn.textContent?.includes('Show effective permissions'));
    toggle?.click();
  }
}`,...n.parameters?.docs?.source},description:{story:'Priya Sharma with "Show effective permissions" expanded, revealing the read-only PermissionMatrix for her current role selection.',...n.parameters?.docs?.description}}};const _=["Default","Open","CommerceScopeAccess","OwnerProtected","EffectivePermissionsExpanded"];export{o as CommerceScopeAccess,s as Default,n as EffectivePermissionsExpanded,t as Open,a as OwnerProtected,_ as __namedExportsOrder,z as default};
