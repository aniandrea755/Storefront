import{M as c}from"./MpNotificationsMenu-C4gumWrE.js";import{u}from"./useNotifications-DDqnt56P.js";import{N as p}from"./fixtures-JszyI_e-.js";import"./iframe-BqHSr5b_.js";import"./preload-helper-PPVm8Dsz.js";import"./MpEmptyState-WqesgUXi.js";import"./MpIllustration-7mikb6DB.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useAccounts-BNKGYLRf.js";import"./useToast-D0O_SpbR.js";import"./useToastStackTimers-CbTd3XmR.js";import"./MpListRow-Cp1HcjrS.js";const x={title:"Molecules/MpNotificationsMenu",component:c,tags:["autodocs"],parameters:{docs:{description:{component:`
### Overview
\`MpNotificationsMenu\` is the app bar's notification centre, aligned with the real product's
feed: a bell trigger whose unread badge **wraps** the button (the app's \`v-badge\` convention,
capped at 99+), opening a \`role="dialog"\` panel of notification rows — **one generic icon**
(the real system carries no classification, so severity iconography would be invented), the
message with an **absolute timestamp** ("Aug 26, 2026 at 02:40 AM"), a **download action** on
report/export rows — with "See all" (→ the /notifications page) and "Mark all read" in the
header, and an \`MpEmptyState\` when the feed is empty. The row itself is the shared
\`notifications/NotificationRow\`, used by the panel and the page.

It is **store-driven and has no props** — it reads \`useNotifications\` (items, unread count)
and calls \`markRead\`/\`markAllRead\` on it, exactly like the app bar reads the accounts and
theme stores. Attrs fall through to the bell button, so the app bar passes
\`class="appbar-action-btn"\` for its 40px utility-button treatment.

**Use when:** the global app bar needs its notification bell. This is a singleton surface —
one per app frame.

**Don't use when:** a page needs an inline activity feed (compose \`MpListRow\`s directly —
see the ActivityFeed story on MpListRow) or a transient confirmation (that's \`useToast\`).

### Usage
\`\`\`html
<MpNotificationsMenu class="appbar-action-btn" />
\`\`\`

### 🟢 Do's
- **Do** keep timestamps absolute ("Aug 26, 2026 at 02:40 AM") — this feed mirrors the real
  centre, which never shows relative times.
- **Do** set \`downloadable\` only on rows that genuinely produce a file (reports, exports) —
  the trailing action is a promise.

### 🔴 Don'ts
- **Don't** render a second bell anywhere — one notification centre per frame.
- **Don't** push transient confirmations into the store — auto-dismissing feedback is
  \`useToast\`'s job; notifications are a persistent, catch-up feed.

### A11y
- **Provides:** the trigger's \`aria-label\` carries the live unread count
  ("Notifications, 3 unread"), \`aria-haspopup="dialog"\` (the panel has a header and a
  button — it is a dialog, not a \`role="menu"\`), and Vuetify wires \`aria-expanded\`; the
  panel is \`role="dialog"\` with an accessible name; every row is a real button
  (\`MpListRow clickable\`) with an sr-only "Unread — " prefix; the download button carries a
  per-row \`aria-label\` and swallows its click (it never marks the row read); the badge is
  decorative (the label already announces the count).
- **Consumer must:** nothing — the component is self-contained.
- **Gaps:** no \`aria-live\` region announces count changes while the panel is closed (the
  pre-existing app-bar gap, carried over); the download action is a prototype stub (toast).

### Controls
The component has no props — state comes from \`useNotifications\`. Stories seed the store in
\`setup()\` (reset first, then push fixtures) so they don't bleed into each other.
        `}}}};function s(i,l=!1){return{render:()=>({components:{MpNotificationsMenu:c},setup(){const n=u();return n.items=i.map(d=>({...d})),{}},template:`
        <div class="d-flex justify-end" style="min-height: 480px; padding: 24px;">
          <MpNotificationsMenu />
        </div>
      `}),...l?{play:async({canvasElement:n})=>{await new Promise(d=>setTimeout(d,300)),n.querySelector('[aria-label^="Notifications"]')?.click()}}:{},args:{}}}const e=s(p),t=s(p,!0),a=s(p.map(i=>({...i,read:!0})),!0),o=s([],!0),r=s([{id:"d-1",title:"Custom report allfin generated for 206 campaigns",time:"Aug 26, 2026 at 02:33 AM",read:!1,downloadable:!0},{id:"d-2",title:"Export report from Aug 26, 2026 to Aug 26, 2026 for 'transab' campaigns",time:"Aug 26, 2026 at 02:31 AM",read:!1,downloadable:!0},{id:"d-3",title:"Import 10000 contacts to 'HB list 1' started. Emails imported: 9,988",time:"Aug 31, 2026 at 02:54 AM",read:!0}],!0);e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"seededStory(NOTIFICATIONS as AppNotification[])",...e.parameters?.docs?.source},description:{story:"The resting trigger: bell + wrapping unread badge. Click it to open the panel.",...e.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"seededStory(NOTIFICATIONS as AppNotification[], true)",...t.parameters?.docs?.source},description:{story:`The open panel: See all + Mark all read in the header, generic-icon rows with absolute
times, download actions on report/export rows, unread dots.`,...t.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`seededStory((NOTIFICATIONS as AppNotification[]).map(n => ({
  ...n,
  read: true
})), true)`,...a.parameters?.docs?.source},description:{story:'All caught up — the badge hides at zero unread and "Mark all read" disables.',...a.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"seededStory([], true)",...o.parameters?.docs?.source},description:{story:"Empty feed — the panel composes MpEmptyState.",...o.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`seededStory([{
  id: 'd-1',
  title: 'Custom report allfin generated for 206 campaigns',
  time: 'Aug 26, 2026 at 02:33 AM',
  read: false,
  downloadable: true
}, {
  id: 'd-2',
  title: "Export report from Aug 26, 2026 to Aug 26, 2026 for 'transab' campaigns",
  time: 'Aug 26, 2026 at 02:31 AM',
  read: false,
  downloadable: true
}, {
  id: 'd-3',
  title: "Import 10000 contacts to 'HB list 1' started. Emails imported: 9,988",
  time: 'Aug 31, 2026 at 02:54 AM',
  read: true
}], true)`,...r.parameters?.docs?.source},description:{story:`Download rows — reports and exports carry the trailing download action; it swallows its
click, so downloading never marks the row read or closes the panel.`,...r.parameters?.docs?.description}}};const T=["Default","OpenPanel","AllRead","Empty","WithDownloads"];export{a as AllRead,e as Default,o as Empty,t as OpenPanel,r as WithDownloads,T as __namedExportsOrder,x as default};
