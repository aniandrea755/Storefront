import{D as a}from"./DvToastStack-l4uqIQam.js";import{u as d}from"./useDaVinciToasts-v-LisIxZ.js";import"./iframe-DH-XNaA6.js";import"./preload-helper-PPVm8Dsz.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useToastStackTimers-CbTd3XmR.js";const b={title:"Product/Da Vinci/DvToastStack",component:a,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{story:{inline:!1,height:"260px"},description:{component:"\n### Overview\n`DvToastStack` is the Da Vinci copilot's own toast layer — a bottom-center dark pill,\ndeliberately distinct from the app's bottom-right `MpToastStack` card. It renders the queue from\n`useDaVinciToasts()` and is mounted by the copilot surfaces (`MpDaVinciBot`,\n`DaVinciExperience`), never by feature code.\n\n**Use when:** confirming a Da Vinci action from inside a copilot surface.\n\n**Don't use when:** the message is about the app rather than the assistant — use `useToast()`\nand the app's `MpToastStack` instead.\n\n### API\n`DvToastStack` takes **no props, emits, or slots** — there is nothing to configure on the host,\nwhich is why the Controls panel is empty. Its public API is the `useDaVinciToasts()` composable\nand the `DaVinciToastInput` / `DaVinciToast` types in `src/composables/useDaVinciToasts.ts`,\ndocumented inline there.\n\n### A11y\n- **Provides:** a persistent `aria-live=\"polite\"` container with `role=\"status\"` pills; the\n  auto-dismiss timer pauses on hover and focus and resumes on leave/blur, so a keyboard user\n  tabbing to the action button is never cut off (WCAG 2.2.1).\n- **Consumer must:** keep `title` meaningful on its own and give `action` a verb label.\n        \n\n### Controls\nThis component takes **no props** — the Controls panel is empty by design. Its queue\ncomes from the `useDaVinciToasts()` composable (`toasts`, `triggerAction`, `pause`,\n`resume`). For the platform-wide toast layer use `MpToastStack` instead.\n"}}},render:()=>({components:{DvToastStack:a},template:"<DvToastStack />"})};function o(n){return{render:()=>({components:{DvToastStack:a},setup(){const{toasts:i,pushToast:s}=d();i.value=[],n.forEach(c=>s({durationMs:36e5,...c}));function r(){s({title:"Widget added",sub:"Revenue by Channel → Overview",action:"View"})}return{pushTransient:r}},template:`
        <div style="min-height: 220px; padding: 24px;">
          <v-btn color="primary" variant="tonal" class="text-none" @click="pushTransient">
            Push transient toast (4.2s)
          </v-btn>
          <DvToastStack />
        </div>
      `})}}const e=o([{title:"Widget added to Overview",sub:"Open Rate Trend · line chart",action:"Undo"}]),t=o([{title:"Draft updated",sub:"Da Vinci re-rendered with your changes"},{title:"Widget added to Overview",sub:"Revenue by Channel · bar chart",action:"View"},{title:"Conversation saved"}]);e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`makeToastStory([{
  title: 'Widget added to Overview',
  sub: 'Open Rate Trend · line chart',
  action: 'Undo'
}])`,...e.parameters?.docs?.source},description:{story:"One confirmation toast with a sub line and an action link.",...e.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`makeToastStory([{
  title: 'Draft updated',
  sub: 'Da Vinci re-rendered with your changes'
}, {
  title: 'Widget added to Overview',
  sub: 'Revenue by Channel · bar chart',
  action: 'View'
}, {
  title: 'Conversation saved'
}])`,...t.parameters?.docs?.source},description:{story:"Three queued toasts stacking bottom-up, mixing plain and action toasts.",...t.parameters?.docs?.description}}};const T=["SingleToast","QueuedToasts"];export{t as QueuedToasts,e as SingleToast,T as __namedExportsOrder,b as default};
