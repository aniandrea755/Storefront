import{r as i}from"./iframe-BqHSr5b_.js";import{M as s}from"./MpAlert-DU_CxSiJ.js";import"./preload-helper-PPVm8Dsz.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const d={title:"Molecules/MpAlert",component:s,tags:["autodocs"],parameters:{docs:{description:{component:'\n### Overview\n`MpAlert` is the one in-page feedback block: a rounded, borderless soft-fill callout in four\nsemantic tones, with an optional title, actions row and dismiss button. It enforces the\nrole/`aria-live` pairing that raw `v-alert` leaves to each call site — info/success announce\npolitely as `role="status"`, warning/error interrupt as `role="alert"` — and prefixes a\nvisually-hidden tone label so severity never rides on color alone.\n\n**Use when:** persistent feedback is attached to a region of the page — a plan limit, a sync\nproblem, an over-cap validation summary, an instructional caveat with a real consequence.\n\n**Don\'t use when:** the feedback is transient (`useToast`), spans the whole app frame\n(`MpBanner` — the square edge strip), replaces a surface that failed to load (`MpErrorState`),\nor means "nothing here yet" (`MpEmptyState`).\n\n### Usage\n```html\n<MpAlert tone="warning" title="Sync issue" dismissible @dismiss="hidden = true">\n  3 products failed to sync to this channel.\n  <template #actions>\n    <v-btn size="small" variant="outlined" class="text-none">Review sync</v-btn>\n  </template>\n</MpAlert>\n```\n\n### Two `tone` vocabularies (deliberate)\n`MpDialog`/`MpEmptyState` carry a *surface-state* tone (`\'neutral\' | \'error\'` — is this whole\nsurface in an error state). `MpAlert`/`MpBanner` carry a *feedback-severity* tone\n(`\'info\' | \'success\' | \'warning\' | \'error\'`). Don\'t unify them — they answer different questions.\n\n### 🟢 Do\'s\n- **Do** compose `MpAlert` in new code — never a raw `v-alert` (the ~40 legacy sites are\n  grandfathered, not precedent).\n- **Do** keep the body one or two sentences; put the remedy in `#actions`, not the prose.\n- **Do** pass `live="polite"` explicitly on a warning whose content re-renders often (live\n  counts) so it doesn\'t interrupt on every keystroke.\n\n### 🔴 Don\'ts\n- **Don\'t** stack more than one alert per region — merge or promote to `MpBanner`.\n- **Don\'t** use `dismissible` for feedback the user must resolve — dismissing an unresolved\n  error is a dead end.\n- **Don\'t** reach for `tone="info"` as decoration — an alert with no consequence is body copy.\n\n### A11y\n- **Provides:** `role="status"`+polite (info/success) or `role="alert"`+assertive\n  (warning/error), overridable via `live`; a `d-sr-only` tone prefix ("Warning: …"); the icon\n  is `aria-hidden` (the prefix already announces severity); a labelled dismiss button; every\n  tone pair is contrast-checked (`npm run contrast:check`).\n- **Consumer must:** own visibility (`v-if` + `@dismiss`), keep the body meaningful without\n  color, and give action buttons verb labels.\n- **Gaps:** an alert rendered with the initial page (not in response to interaction) may not be\n  announced by all screen readers — that\'s inherent to live regions, not a defect.\n\n### API\nProps `tone` · `title?` · `live?` · `dismissible?` · `icon?: string | false` (defaults per\ntone: info `info`, success `circle-check`, warning `triangle-alert`, error `circle-alert`).\nEmits `dismiss`. Slots: default (body), `#actions`.\n        '}}},args:{tone:"info"},argTypes:{tone:{control:"inline-radio",options:["info","success","warning","error"],description:"Feedback severity — drives tint (semantic container pairs), default icon, role and aria-live."},title:{control:"text",description:"Optional bold line above the body."},live:{control:"inline-radio",options:["off","polite","assertive"],description:"Live-region politeness override. Defaults by tone: info/success 'polite', warning/error 'assertive'."},dismissible:{control:"boolean",description:"Renders a dismiss button. Visibility stays consumer-owned: v-if + @dismiss."},icon:{control:"text",description:"Lucide icon override; pass `false` to hide. Defaults per tone."},default:{control:!1,description:"Slot — the alert body. Keep it to one or two sentences.",table:{category:"slots"}},actions:{control:!1,description:"Slot — remedy buttons (small outlined/text v-btns), rendered under the body.",table:{category:"slots"}}}},n={render:r=>({components:{MpAlert:s},setup:()=>({args:r}),template:`
      <div style="max-width: 560px;">
        <MpAlert v-bind="args">Contacts imported from a CSV keep their original subscription status.</MpAlert>
      </div>
    `})},e={render:()=>({components:{MpAlert:s},template:`
      <div class="d-flex flex-column ga-3" style="max-width: 560px;">
        <MpAlert tone="info">Contacts imported from a CSV keep their original subscription status.</MpAlert>
        <MpAlert tone="success">Domain verified — campaigns now send from your own address.</MpAlert>
        <MpAlert tone="warning">This segment references a deleted field and may match fewer contacts than expected.</MpAlert>
        <MpAlert tone="error">The audience exceeds your plan's send limit. Reduce the selection to continue.</MpAlert>
      </div>
    `}),args:{}},t={render:()=>({components:{MpAlert:s},setup(){return{visible:i(!0)}},template:`
      <div class="d-flex flex-column ga-3" style="max-width: 560px;">
        <MpAlert tone="warning" title="Sync issue">
          3 products failed to sync to this channel.
          <template #actions>
            <v-btn size="small" variant="outlined" class="text-none">Review sync</v-btn>
            <v-btn size="small" variant="text" class="text-none">Dismiss for now</v-btn>
          </template>
        </MpAlert>
        <MpAlert v-if="visible" tone="info" dismissible @dismiss="visible = false">
          Dismissible — visibility is owned by the consumer (v-if + @dismiss).
        </MpAlert>
        <MpAlert tone="error" title="Import failed">
          214 rows were rejected because the email column contained values that are not valid
          addresses. Fix the source file and run the import again — successfully imported rows
          are unaffected and will not be duplicated.
        </MpAlert>
      </div>
    `}),args:{}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      MpAlert
    },
    setup: () => ({
      args
    }),
    template: \`
      <div style="max-width: 560px;">
        <MpAlert v-bind="args">Contacts imported from a CSV keep their original subscription status.</MpAlert>
      </div>
    \`
  })
}`,...n.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      MpAlert
    },
    template: \`
      <div class="d-flex flex-column ga-3" style="max-width: 560px;">
        <MpAlert tone="info">Contacts imported from a CSV keep their original subscription status.</MpAlert>
        <MpAlert tone="success">Domain verified — campaigns now send from your own address.</MpAlert>
        <MpAlert tone="warning">This segment references a deleted field and may match fewer contacts than expected.</MpAlert>
        <MpAlert tone="error">The audience exceeds your plan's send limit. Reduce the selection to continue.</MpAlert>
      </div>
    \`
  }),
  args: {} as never
}`,...e.parameters?.docs?.source},description:{story:`The four semantic tones on the contrast-checked container pairs. Info tints from the
accent container (info === primary — there is deliberately no separate info container).`,...e.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      MpAlert
    },
    setup() {
      const visible = ref(true);
      return {
        visible
      };
    },
    template: \`
      <div class="d-flex flex-column ga-3" style="max-width: 560px;">
        <MpAlert tone="warning" title="Sync issue">
          3 products failed to sync to this channel.
          <template #actions>
            <v-btn size="small" variant="outlined" class="text-none">Review sync</v-btn>
            <v-btn size="small" variant="text" class="text-none">Dismiss for now</v-btn>
          </template>
        </MpAlert>
        <MpAlert v-if="visible" tone="info" dismissible @dismiss="visible = false">
          Dismissible — visibility is owned by the consumer (v-if + @dismiss).
        </MpAlert>
        <MpAlert tone="error" title="Import failed">
          214 rows were rejected because the email column contained values that are not valid
          addresses. Fix the source file and run the import again — successfully imported rows
          are unaffected and will not be duplicated.
        </MpAlert>
      </div>
    \`
  }),
  args: {} as never
}`,...t.parameters?.docs?.source},description:{story:"Title, actions, dismissible, and a long body wrapping inside the block.",...t.parameters?.docs?.description}}};const p=["Default","Variants","States"];export{n as Default,t as States,e as Variants,p as __namedExportsOrder,d as default};
