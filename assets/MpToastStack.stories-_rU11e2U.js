import{eL as L,eM as A,eZ as b,eW as k,eO as W,d0 as a,fe as F,fK as O,eP as N,eX as w,eR as S,ez as z,f4 as P,e_ as f,fj as E,f5 as B,f9 as $,eV as r}from"./iframe-BqHSr5b_.js";import{u as _}from"./useToast-D0O_SpbR.js";import{_ as U}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";import"./useToastStackTimers-CbTd3XmR.js";const q={class:"mp-toast-stack","aria-live":"polite"},Y=["role","onMouseenter","onMouseleave","onFocusin","onFocusout"],j={class:"mp-toast__body"},K={key:0,class:"mp-toast__title"},R={class:"mp-toast__message"},I=L({__name:"MpToastStack",setup(e){const{toasts:v,dismiss:M,pause:T,resume:C}=_(),V={success:"check",error:"circle-alert",warning:"triangle-alert",info:"info"};function D(y){y.action?.onClick(),M(y.id)}return(y,X)=>(r(),A(O,{to:"body"},[b("div",q,[(r(!0),k(F,null,W(a(v),t=>(r(),k("div",{key:t.id,class:N(["mp-toast",{"is-leaving":t.leaving}]),role:t.type==="error"?"alert":"status",onMouseenter:n=>a(T)(t.id),onMouseleave:n=>a(C)(t.id),onFocusin:n=>a(T)(t.id),onFocusout:n=>a(C)(t.id)},[w($,{flat:"",border:"",rounded:"lg",class:"mp-toast__card pa-3 d-flex ga-3"},{default:S(()=>[w(z,{color:t.type,size:"18",class:"mp-toast__icon"},{default:S(()=>[P(f(V[t.type]),1)]),_:2},1032,["color"]),b("div",j,[t.title?(r(),k("div",K,f(t.title),1)):E("",!0),b("div",R,f(t.message),1),t.action?(r(),A(B,{key:1,variant:"text",size:"small",color:"primary",class:"text-none px-0 mp-toast__action",onClick:n=>D(t)},{default:S(()=>[P(f(t.action.label),1)]),_:2},1032,["onClick"])):E("",!0)]),w(B,{icon:"x",variant:"text",size:"small",density:"comfortable","aria-label":"Dismiss notification",class:"mp-toast__close",onClick:n=>a(M)(t.id)},null,8,["onClick"])]),_:2},1024)],42,Y))),128))])]))}}),x=U(I,[["__scopeId","data-v-cda8d6ae"]]);I.__docgenInfo={exportName:"default",displayName:"MpToastStack",description:"",tags:{},sourceFiles:["/home/runner/work/Storefront/Storefront/src/components/MpToastStack.vue"]};const ee={title:"Molecules/MpToastStack",component:x,tags:["autodocs"],parameters:{canvas:"full",docs:{story:{inline:!1,height:"300px"},description:{component:`
### Overview
\`MpToastStack\` is the single shared toast host for the app (WP-C1 — the one approved
exception to the "no new wrapper components" rule). It renders the queue produced by the
\`useToast()\` composable: call \`toast.success()\` / \`toast.error()\` / \`toast.warning()\` /
\`toast.info()\` (or \`toast.show()\` with an explicit \`type\`) from anywhere, and the toast appears bottom-right,
stacking upward as more arrive. \`MpToastStack\` itself is mounted once, in \`App.vue\` — components
never render it directly.

**Use when:** confirming an action succeeded, reporting an error, or surfacing a passive
status update — anything that used to be a one-off \`v-snackbar\`.

**Don't use when:** the message requires a decision (use \`MpConfirmDialog\`) or blocks the
user from continuing (use a dialog or inline form error instead).

### Usage
\`\`\`ts
import { useToast } from '@/composables/useToast'

const toast = useToast()
toast.success('Segment saved.')
toast.error('Could not save changes. Check your connection and try again.')
toast.info('3 contacts were skipped because they already exist in this list.', {
  title: 'Import finished',
  action: { label: 'View', onClick: () => router.push('/contacts') },
})
\`\`\`

### 🟢 Do's
- **Do** keep the message to one short sentence; use \`title\` only when a label above it adds
  real clarity.
- **Do** pass at most one \`action\` — a second action means this should be a dialog instead.
- **Do** let success/info auto-dismiss (4500ms default) and warnings at 7000ms; only override
  \`durationMs\` when a call site has a specific, documented reason.
- **Do** use \`warning\` for degraded-but-continuing outcomes ("3 rows skipped") — a failure the
  user must act on is an \`error\` (persistent), a blocking condition is an inline \`MpAlert\`.

### 🔴 Don'ts
- **Don't** use \`type: 'error'\` for anything the user doesn't need to act on — errors persist
  until dismissed, which is disruptive if overused.
- **Don't** rely on color alone to convey type — pair it with the icon and message text, both
  of which \`MpToastStack\` always renders.

### A11y
- **Provides:** one persistent \`aria-live="polite"\` container, mounted for the app's whole
  lifetime — only the toast cards inside it mount/unmount, never the region itself. Each card
  is \`role="status"\` (success/warning/info) or \`role="alert"\` (error, which nested-overrides to an
  assertive announcement — reserved for errors per the a11y audit; an auto-dismissing warning
  announces politely). Type is always icon + text, never color-only. The auto-dismiss timer
  pauses on \`:hover\`/\`:focus-within\` and resumes on leave/blur, so a keyboard user tabbing to
  the action button is never cut off. Entrance/exit are CSS animations, so the app's global
  \`prefers-reduced-motion\` rule zeroes them automatically.
- **Consumer must:** keep \`message\` meaningful on its own (screen readers announce it without
  surrounding page context) and give \`action.label\` a verb ("Undo", "View") — never "Click here".

### API
\`MpToastStack\` takes **no props, emits, or slots** — there is deliberately nothing to configure
on the host. Its public API is the \`useToast()\` composable and the \`Toast\` / \`ToastOptions\` /
\`ToastAction\` types in \`src/composables/useToast.ts\`, all documented inline there. That's why
the Controls panel below is empty.
`}}}},o=36e5;function s(e){return{render:()=>({components:{MpToastStack:x},setup(){const v=_();return v.toasts.value=[],e(v),{}},template:`
        <div style="min-height: 260px; padding: 24px;">
          <MpToastStack />
        </div>
      `})}}const i=s(e=>{e.success("Segment saved.",{durationMs:o})}),c=s(e=>{e.error("Could not save changes. Check your connection and try again.")}),d=s(e=>{e.warning("Send rate is throttled — this campaign will take about 40 minutes longer.",{durationMs:o})}),l=s(e=>{e.info("3 contacts were skipped because they already exist in this list.",{durationMs:o})}),p=s(e=>{e.success("The change applies to all new enrollments immediately.",{title:"Automation activated",durationMs:o})}),u=s(e=>{e.success("Contact archived.",{action:{label:"Undo",onClick:()=>{}},durationMs:o})}),m=s(e=>{e.error('Stopping "Black Friday 2025 — Early Access VIP" cancels delivery for the 18,240 contacts still queued. The 6,411 emails already sent cannot be recalled, and their opens and clicks will keep reporting under this campaign.',{title:"Campaign send stopped"})}),h=s(e=>{e.info("Draft autosaved.",{durationMs:o}),e.success("Widget added to Overview.",{action:{label:"View",onClick:()=>{}},durationMs:o}),e.error("2 items failed to import.")}),g={render:()=>({components:{MpToastStack:x},setup(){const e=_();return e.toasts.value=[],{toast:e}},template:`
      <div style="min-height: 260px; padding: 24px; display: flex; gap: 8px; flex-wrap: wrap; align-content: flex-start;">
        <v-btn variant="tonal" color="success" class="text-none" @click="toast.success('Segment saved.')">Push success</v-btn>
        <v-btn variant="tonal" color="error" class="text-none" @click="toast.error('Could not save changes.')">Push error</v-btn>
        <v-btn variant="tonal" color="warning" class="text-none" @click="toast.warning('Send rate is throttled.')">Push warning</v-btn>
        <v-btn variant="tonal" color="info" class="text-none" @click="toast.info('3 contacts were skipped.')">Push info</v-btn>
        <v-btn variant="tonal" class="text-none" @click="toast.success('Widget added.', { action: { label: 'View', onClick: () => {} } })">Push with action</v-btn>
        <MpToastStack />
      </div>
    `})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`seededStory(toast => {
  toast.success('Segment saved.', {
    durationMs: STABLE_MS
  });
})`,...i.parameters?.docs?.source},description:{story:"A success confirmation. Auto-dismisses after 4.5s in real usage (pinned here so the docs page stays stable).",...i.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`seededStory(toast => {
  toast.error('Could not save changes. Check your connection and try again.');
})`,...c.parameters?.docs?.source},description:{story:"Errors never auto-dismiss — the user must close them (or use the action, if any).",...c.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`seededStory(toast => {
  toast.warning('Send rate is throttled — this campaign will take about 40 minutes longer.', {
    durationMs: STABLE_MS
  });
})`,...d.parameters?.docs?.source},description:{story:`A degraded-but-continuing outcome. Auto-dismisses after 7s in real usage (longer read
time than success/info); announces politely — assertive announcements stay error-only.`,...d.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`seededStory(toast => {
  toast.info('3 contacts were skipped because they already exist in this list.', {
    durationMs: STABLE_MS
  });
})`,...l.parameters?.docs?.source},description:{story:"An informational, non-urgent update.",...l.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`seededStory(toast => {
  toast.success('The change applies to all new enrollments immediately.', {
    title: 'Automation activated',
    durationMs: STABLE_MS
  });
})`,...p.parameters?.docs?.source},description:{story:"Optional bold title above the message.",...p.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`seededStory(toast => {
  toast.success('Contact archived.', {
    action: {
      label: 'Undo',
      onClick: () => {}
    },
    durationMs: STABLE_MS
  });
})`,...u.parameters?.docs?.source},description:{story:"At most one action, rendered as a text-link style button next to the message.",...u.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`seededStory(toast => {
  toast.error('Stopping "Black Friday 2025 — Early Access VIP" cancels delivery for the 18,240 contacts ' + 'still queued. The 6,411 emails already sent cannot be recalled, and their opens and clicks ' + 'will keep reporting under this campaign.', {
    title: 'Campaign send stopped'
  });
})`,...m.parameters?.docs?.source},description:{story:"A long message wraps inside the fixed ~320px card instead of widening it.",...m.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`seededStory(toast => {
  toast.info('Draft autosaved.', {
    durationMs: STABLE_MS
  });
  toast.success('Widget added to Overview.', {
    action: {
      label: 'View',
      onClick: () => {}
    },
    durationMs: STABLE_MS
  });
  toast.error('2 items failed to import.');
})`,...h.parameters?.docs?.source},description:{story:"Multiple toasts at once — newest appended at the bottom, older ones pushed upward.",...h.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      MpToastStack
    },
    setup() {
      const toast = useToast();
      toast.toasts.value = [];
      return {
        toast
      };
    },
    template: \`
      <div style="min-height: 260px; padding: 24px; display: flex; gap: 8px; flex-wrap: wrap; align-content: flex-start;">
        <v-btn variant="tonal" color="success" class="text-none" @click="toast.success('Segment saved.')">Push success</v-btn>
        <v-btn variant="tonal" color="error" class="text-none" @click="toast.error('Could not save changes.')">Push error</v-btn>
        <v-btn variant="tonal" color="warning" class="text-none" @click="toast.warning('Send rate is throttled.')">Push warning</v-btn>
        <v-btn variant="tonal" color="info" class="text-none" @click="toast.info('3 contacts were skipped.')">Push info</v-btn>
        <v-btn variant="tonal" class="text-none" @click="toast.success('Widget added.', { action: { label: 'View', onClick: () => {} } })">Push with action</v-btn>
        <MpToastStack />
      </div>
    \`
  })
}`,...g.parameters?.docs?.source},description:{story:`Drives the real API from buttons — demonstrates the actual 4.5s auto-dismiss timing and
hover/focus-to-pause behavior (hover a toast, or Tab to its action button, before it times out).`,...g.parameters?.docs?.description}}};const te=["Success","PersistentError","Warning","Info","WithTitle","WithAction","LongMessage","MultipleStacked","Interactive"];export{l as Info,g as Interactive,m as LongMessage,h as MultipleStacked,c as PersistentError,i as Success,d as Warning,u as WithAction,p as WithTitle,te as __namedExportsOrder,ee as default};
