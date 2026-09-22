import{r as u}from"./iframe-BqHSr5b_.js";import{D as n,u as h}from"./DvHistoryDrawer-BGEyiJyc.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusTrap-oS9hmom4.js";import"./useRelativeTime-BAck8X0K.js";import"./useDaVinciToasts-CLYfO6vp.js";import"./useToastStackTimers-CbTd3XmR.js";import"./MpConfirmDialog-g8XCZO_Q.js";import"./MpDialog-F4WZRRS8.js";import"./useScrollEdges-B2McRpMX.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./MpMenuItem-C7bGP4dE.js";import"./MpRowActionsMenu-DfQDq_iX.js";function f(){const e=new Date;e.setHours(0,0,0,0);const r=e.getTime(),o=36e5,p=24*o,v=(t,m)=>Math.max(Date.now()-t,r+m*6e4);return[{title:"Revenue by channel this quarter",draftedCount:2,addedCount:1,at:v(2*o,2)},{title:"Open rate trend for VIP segment",draftedCount:1,at:v(5*o,1)},{title:"Ticket backlog by priority",draftedCount:3,addedCount:2,at:r-8*o},{title:"Abandoned cart recovery funnel",draftedCount:1,addedCount:1,at:r-3*p},{title:"Top products by repeat purchases",draftedCount:2,at:r-20*p}]}function D(e){const{items:r,addItem:o,clearAll:p}=h();p(),e.forEach(t=>o({title:t.title,draftedCount:t.draftedCount,addedCount:t.addedCount}));const v=new Map(e.map(t=>[t.title,t.at]));return r.value.forEach(t=>{const m=v.get(t.title);m!=null&&(t.createdAt=m)}),r.value[0]?.id}const M={title:"Product/Da Vinci/DvHistoryDrawer",component:n,tags:["autodocs"],parameters:{docs:{description:{component:`
### Overview
\`DvHistoryDrawer\` lists past Da Vinci conversations from \`useDaVinciHistory()\`, grouped into
Today / Yesterday / Last 7 days / Older. It renders in two modes: \`overlay\` (a modal panel with
full dialog semantics) and \`rail\` (inline inside the copilot surface, non-modal). Rows select a
conversation; per-row and "Clear all" deletions route through \`MpConfirmDialog\`.

**Use when:** offering conversation history inside a copilot surface.

**Don't use when:** you need a general list view — this is bound to the Da Vinci history store.

### 🟢 Do's
- **Do** pass \`activeId\` so the current conversation is marked in the list.
- **Do** use \`rail\` mode when the drawer sits inside an already-modal surface — nested focus
  traps fight each other.

### 🔴 Don'ts
- **Don't** delete history without the confirm step; clearing all is irreversible.

### A11y
- **Provides:** in \`overlay\` mode the panel has \`role="dialog"\`, \`aria-modal\`,
  \`aria-labelledby\`, Escape-to-close, focus-in/restore, and a Tab trap; in \`rail\` mode those
  are deliberately inert since the drawer is inline, not modal.
- **Consumer must:** keep exactly one modal overlay open at a time.
        `}}},parameters:{canvas:"full",docs:{story:{inline:!1,height:"640px"}}},argTypes:{open:{control:!1,description:"Slides the drawer in (overlay mode). Ignored in rail mode, which is always visible."},activeId:{control:!1,description:"Id of the currently open conversation — highlights its row."},mode:{control:!1,description:'"overlay" (default): slides in over the copilot panel below its 60px header, with a close button. "rail": fills a persistent side rail and swaps the close button for a kebab menu with "Delete all conversations" (gated behind an MpConfirmDialog — replaced window.confirm in the Phase 4 a11y pass, which also gave the search input an aria-label).'},close:{control:!1,description:"Event — X button clicked (overlay mode only).",table:{category:"events"}},select:{control:!1,description:"Event — conversation chosen (click or Enter/Space); payload is the item id.",table:{category:"events"}},newChat:{control:!1,description:"Event — declared for consumers; not fired internally today.",table:{category:"events"}}}},y="position:relative; width:380px; height:560px; overflow:hidden; border:1px solid rgb(var(--v-theme-outline-variant)); border-radius:16px; background: rgb(var(--v-theme-surface));",w="height:60px; display:flex; align-items:center; padding:0 16px; border-bottom:1px solid rgb(var(--v-theme-outline-variant)); font-weight:600; font-size:13.5px; color: rgb(var(--v-theme-on-surface));",a={args:{open:!0},render:()=>({components:{DvHistoryDrawer:n},setup(){const e=u(D(f())),r=u(!0);return{activeId:e,open:r}},template:`
      <div class="pa-6 d-flex flex-column align-center ga-4">
        <v-btn size="small" variant="tonal" color="primary" class="text-none" @click="open = !open">
          {{ open ? 'Close drawer' : 'Reopen drawer' }}
        </v-btn>
        <div style="${y}">
          <div style="${w}">Da Vinci</div>
          <DvHistoryDrawer
            :open="open"
            :active-id="activeId"
            mode="overlay"
            @close="open = false"
            @select="(id) => (activeId = id)"
          />
        </div>
      </div>
    `})},s={args:{open:!0,mode:"rail"},render:()=>({components:{DvHistoryDrawer:n},setup(){return{activeId:u(D(f()))}},template:`
      <div class="pa-6 d-flex justify-center">
        <div style="${y}">
          <DvHistoryDrawer
            open
            :active-id="activeId"
            mode="rail"
            @select="(id) => (activeId = id)"
          />
        </div>
      </div>
    `})},i={args:{open:!0},render:()=>({components:{DvHistoryDrawer:n},setup(){const{clearAll:e}=h();e()},template:`
      <div class="pa-6 d-flex justify-center">
        <div style="${y}">
          <div style="${w}">Da Vinci</div>
          <DvHistoryDrawer open mode="overlay" />
        </div>
      </div>
    `})},d={render:e=>({components:{DvHistoryDrawer:n},setup:()=>({args:e}),template:'<DvHistoryDrawer v-bind="args" />'})},c={render:e=>({components:{DvHistoryDrawer:n},setup:()=>({args:e}),template:'<DvHistoryDrawer v-bind="args" />'})},l={render:e=>({components:{DvHistoryDrawer:n},setup:()=>({args:e}),template:'<DvHistoryDrawer v-bind="args" />'})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    open: true
  },
  render: () => ({
    components: {
      DvHistoryDrawer
    },
    setup() {
      const activeId = ref(seedHistory(buildSeeds()));
      const open = ref(true);
      return {
        activeId,
        open
      };
    },
    template: \`
      <div class="pa-6 d-flex flex-column align-center ga-4">
        <v-btn size="small" variant="tonal" color="primary" class="text-none" @click="open = !open">
          {{ open ? 'Close drawer' : 'Reopen drawer' }}
        </v-btn>
        <div style="\${FRAME_STYLE}">
          <div style="\${HEAD_STYLE}">Da Vinci</div>
          <DvHistoryDrawer
            :open="open"
            :active-id="activeId"
            mode="overlay"
            @close="open = false"
            @select="(id) => (activeId = id)"
          />
        </div>
      </div>
    \`
  })
}`,...a.parameters?.docs?.source},description:{story:`Overlay mode as used inside MpDaVinciBot: grouped history with an active
row, search, hover/focus delete buttons, and a working close → reopen cycle.`,...a.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    mode: 'rail'
  },
  render: () => ({
    components: {
      DvHistoryDrawer
    },
    setup() {
      const activeId = ref(seedHistory(buildSeeds()));
      return {
        activeId
      };
    },
    template: \`
      <div class="pa-6 d-flex justify-center">
        <div style="\${FRAME_STYLE}">
          <DvHistoryDrawer
            open
            :active-id="activeId"
            mode="rail"
            @select="(id) => (activeId = id)"
          />
        </div>
      </div>
    \`
  })
}`,...s.parameters?.docs?.source},description:{story:`Rail mode as used by the DaVinciCopilot full page: always visible, no close
button, kebab menu with the destructive "Delete all conversations" action.`,...s.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    open: true
  },
  render: () => ({
    components: {
      DvHistoryDrawer
    },
    setup() {
      const {
        clearAll
      } = useDaVinciHistory();
      clearAll();
    },
    template: \`
      <div class="pa-6 d-flex justify-center">
        <div style="\${FRAME_STYLE}">
          <div style="\${HEAD_STYLE}">Da Vinci</div>
          <DvHistoryDrawer open mode="overlay" />
        </div>
      </div>
    \`
  })
}`,...i.parameters?.docs?.source},description:{story:"No conversations yet — the built-in empty state (also shown when a search matches nothing).",...i.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      DvHistoryDrawer
    },
    setup: () => ({
      args
    }),
    template: \`<DvHistoryDrawer v-bind="args" />\`
  })
}`,...d.parameters?.docs?.source},description:{story:"Two structures: the full drawer and the narrow rail mode the copilot uses when it is docked beside a page.",...d.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      DvHistoryDrawer
    },
    setup: () => ({
      args
    }),
    template: \`<DvHistoryDrawer v-bind="args" />\`
  })
}`,...c.parameters?.docs?.source},description:{story:"There is no `size` prop — the drawer takes its width from the copilot surface it lives in. Its rows sit on `component.listItem.*`, the same 40px floor as every other list in the system, so a history entry and a nav row line up.",...c.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      DvHistoryDrawer
    },
    setup: () => ({
      args
    }),
    template: \`<DvHistoryDrawer v-bind="args" />\`
  })
}`,...l.parameters?.docs?.source},description:{story:"Populated, and empty — a first session with nothing to look back at yet.",...l.parameters?.docs?.description}}};const $=["Default","RailMode","Empty","Variants","Sizes","States"];export{a as Default,i as Empty,s as RailMode,c as Sizes,l as States,d as Variants,$ as __namedExportsOrder,M as default};
