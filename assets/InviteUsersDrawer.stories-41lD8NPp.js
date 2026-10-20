import{r as n}from"./iframe-DH-XNaA6.js";import{I as l}from"./InviteUsersDrawer-BZQzQorY.js";import"./preload-helper-PPVm8Dsz.js";import"./MpConfirmDialog-Brqm1ewS.js";import"./MpDialog-vzXqpvNK.js";import"./useScrollEdges-CBa2dNoC.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./MpFormDrawer-cMf60X6E.js";import"./useFocusTrap-DNOqYf4B.js";import"./MpFormField-BzBLjfV3.js";import"./MpFormGrid-CIGBvnp2.js";import"./MpFormSection-BK5pVmwO.js";import"./RolePicker-BGtycDt4.js";import"./useRbac-CsV3uJ_J.js";import"./useAccounts-BCL4QMJk.js";import"./rbacData-DG1N_lNm.js";import"./useRetail-C5-y3KHA.js";import"./useCommerce-rriUBVdv.js";import"./useOnboarding-Bm2wJjXK.js";import"./usePlg-Bc4Wejg8.js";import"./useSalesChannels-DWI5c6z4.js";function i(e){return new Promise(t=>setTimeout(t,e))}function c(e,t){e.value=t,e.dispatchEvent(new Event("input",{bubbles:!0})),e.dispatchEvent(new KeyboardEvent("keydown",{key:"Enter",bubbles:!0,cancelable:!0}))}const q={title:"Product/RBAC/InviteUsersDrawer",component:l,tags:["autodocs"],parameters:{docs:{story:{inline:!1,height:"720px"},description:{component:`
### Overview
\`InviteUsersDrawer\` is the two-step "Invite users" flow: pick email addresses and roles (via
\`RolePicker\`, grouped and filtered by the account's subscriptions), review a summary, then send.
It composes \`MpFormDrawer\` and owns its email/role/step state entirely internally, resetting to
step 1 with everything empty every time it's reopened. Sending creates the users through
\`useRbacStore.inviteUsers()\` and closes itself, emitting \`invited\` with the new emails.

**Use when:** adding new users to the account and assigning their initial roles in one flow.

**Don't use when:** changing an existing user's roles or status (\`UserAccessDrawer\`), or picking
roles outside an invite/edit flow (\`RolePicker\` on its own).

### Usage
\`\`\`html
<v-btn color="primary" prepend-icon="user-plus" @click="inviteOpen = true">Invite users</v-btn>
<InviteUsersDrawer
  v-model="inviteOpen"
  @invited="emails => toast.success(\`Invited \${emails.length} user\${emails.length === 1 ? '' : 's'}\`)"
/>
\`\`\`

### 🟢 Do's
- **Do** let the drawer own its email/role/step state — it always resets to step 1 empty on open,
  so there's no need (and no prop) to seed it from outside.
- **Do** handle \`@invited\` to confirm the result (toast, refresh the users list); the drawer has
  already closed itself by the time it fires.
- **Do** rely on \`RolePicker\`'s subscription-aware grouping and \`validateAssignment\` instead of
  re-checking role conflicts or entitlements yourself.

### 🔴 Don'ts
- **Don't** try to pass initial emails or roles — there's no prop for it; every open starts blank.
- **Don't** duplicate the commerce store-scope logic — it only appears once a commerce role is
  selected, and the drawer already gates Continue on it being resolved.

### A11y
- **Provides:** inherits \`MpFormDrawer\`'s dialog semantics (focus trap, Escape, focus restore on
  close); the email field carries \`aria-label="Email addresses to invite"\`; invalid emails surface
  as a field \`error-messages\` string, not color alone; the role conflict warning is a \`v-alert\`
  with icon + text, matching \`RolePicker\`'s own conflict styling.
- **Consumer must:** keep the trigger button mounted while the drawer is open so focus can return
  to it on close.
        `}}},argTypes:{modelValue:{control:"boolean",description:"v-model — drawer visibility. Reopening always resets to step 1 with empty emails and roles."},invited:{control:!1,description:"Event — emitted with the created emails after Send; the drawer closes itself first.",table:{category:"events"}}},args:{modelValue:!0},render:e=>({components:{InviteUsersDrawer:l},setup(){const t=n(e.modelValue),m=n("—");return{args:e,open:t,lastInvited:m}},template:`
      <section style="min-height:640px;background:rgb(var(--v-theme-background));padding:24px;">
        <v-btn color="primary" variant="flat" prepend-icon="user-plus" class="text-none" @click="open = true">Invite users</v-btn>
        <div class="text-caption text-medium-emphasis mt-3">Last invited: {{ lastInvited }}</div>
        <InviteUsersDrawer v-bind="args" v-model="open" @invited="emails => lastInvited = emails.join(', ')" />
      </section>
    `})},r={args:{modelValue:!1}},o={args:{modelValue:!0}},a={args:{modelValue:!0},play:async()=>{await i(300);const e=document.querySelector(".mp-form-drawer__body input");e&&(c(e,"jordan@maropost.com"),await i(80),c(e,"casey@maropost.com"),await i(80)),document.querySelector('input[aria-label*="Campaign Manager"]')?.click(),document.querySelector('input[aria-label*="Content Manager"]')?.click()}},s={args:{modelValue:!0},play:async()=>{await i(300),document.querySelector('input[aria-label*="Read-Only Analyst"]')?.click(),await i(60),document.querySelector('input[aria-label*="Platform Admin"]')?.click()}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: false
  }
}`,...r.parameters?.docs?.source},description:{story:"Closed — just the trigger button, the resting state on the Users & Roles page.",...r.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: true
  }
}`,...o.parameters?.docs?.source},description:{story:"Freshly opened step 1: empty emails, no roles selected yet, Continue disabled.",...o.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: true
  },
  play: async () => {
    await wait(300);
    const emailInput = document.querySelector<HTMLInputElement>('.mp-form-drawer__body input');
    if (emailInput) {
      commitEmail(emailInput, 'jordan@maropost.com');
      await wait(80);
      commitEmail(emailInput, 'casey@maropost.com');
      await wait(80);
    }
    document.querySelector<HTMLInputElement>('input[aria-label*="Campaign Manager"]')?.click();
    document.querySelector<HTMLInputElement>('input[aria-label*="Content Manager"]')?.click();
  }
}`,...a.parameters?.docs?.source},description:{story:"A typical filled-out step 1 — two email chips plus two compatible Marketing Cloud roles, so Continue is enabled.",...a.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: true
  },
  play: async () => {
    await wait(300);
    document.querySelector<HTMLInputElement>('input[aria-label*="Read-Only Analyst"]')?.click();
    await wait(60);
    document.querySelector<HTMLInputElement>('input[aria-label*="Platform Admin"]')?.click();
  }
}`,...s.parameters?.docs?.source},description:{story:"Selecting two conflicting roles (Read-Only Analyst + Platform Admin) surfaces the inline warning — Continue stays blocked until one is removed.",...s.parameters?.docs?.description}}};const x=["Default","Open","PopulatedForm","RoleConflictWarning"];export{r as Default,o as Open,a as PopulatedForm,s as RoleConflictWarning,x as __namedExportsOrder,q as default};
