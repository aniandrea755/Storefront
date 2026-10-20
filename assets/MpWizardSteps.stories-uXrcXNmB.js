import{M as p}from"./MpWizardSteps-DMhyjkX-.js";import"./iframe-DH-XNaA6.js";import"./preload-helper-PPVm8Dsz.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const u={title:"Atoms/MpWizardSteps",component:p,tags:["autodocs"],parameters:{docs:{description:{component:`
### Overview
\`MpWizardSteps\` renders the compact step chips used in wizard toolbars (numbered circles,
check icon for completed steps, rail separators). \`current\` is 1-based. Below 700px viewport
width the labels collapse and only the numbered circles remain, so the toolbar still fits.

**Two supported contracts:**
1. **Wizard navigation** — inside \`MpWizardShell\`'s header: pass \`clickable\` and \`:max-step\`
   (\`useWizardSteps\`' high-water ref — never the current step, or forward jumps die after
   stepping back). Visited steps become jumpable buttons emitting \`select\`.
2. **Passive progress display** — omit \`clickable\` for a read-only position tracker
   (OrderDetail's fulfillment stages, AllContacts' import dialog).

### Usage
\`\`\`html
<MpWizardSteps :steps="['Choose template', 'Settings']" :current="step" />
\`\`\`

### 🟢 Do's
- **Do** keep labels short (1–2 words) — they live in a toolbar row.
- **Do** drive \`current\` from the wizard's step state.

### 🔴 Don'ts
- **Don't** bind \`:max-step\` to the current step — that kills forward jumps the moment the
  user steps back. It wants the high-water mark (\`useWizardSteps().maxStep\`).
- **Don't** exceed ~5 steps; use a full \`v-stepper\` for longer flows.

### 💡 Best Practices
- **Done state:** a \`current\` greater than \`steps.length\` marks every step complete — useful
  for a final confirmation screen.
- **Small screens:** the collapse is a viewport media query (\`max-width: 700px\`), not a
  container query — it reacts to the browser window, not the parent element's width.

### A11y
- **Provides:** semantic \`role="list"\`/\`role="listitem"\` with an \`aria-label="Wizard steps"\`
  group name; the active step carries \`aria-current="step"\`; label text stays in the DOM when
  visually collapsed (font-size 0), so screen readers still hear the step names on small screens.
- **Consumer must:** announce step changes elsewhere (e.g. move focus to the new step's heading)
  — the indicator itself is not a live region.
- **Provides (Phase 4):** completed steps append a visually-hidden "(completed)" text
  alternative, so state is no longer conveyed by the check icon and color alone.
- **Gaps:** none known.
        `}}},args:{steps:["Choose template","Settings"],current:1},argTypes:{clickable:{control:"boolean",description:"Makes visited steps (those at or below `maxStep`) clickable, emitting `select`. Off by default — the indicator is passive unless the wizard supports jumping back."},maxStep:{control:"number",description:"Highest 1-based step reached; everything up to it is jumpable when `clickable` is on. Defaults to `current`, which means no forward jumping."},steps:{control:"object",description:"Ordered step labels (keep to 2–4 short labels)."},current:{control:{type:"number",min:1,max:5,step:1},description:"1-based index of the active step. Steps below it render as completed (check); a value beyond the last step marks all steps done."}}},i={},e={render:()=>({components:{MpWizardSteps:p},template:`
      <div class="d-flex flex-column ga-8">
        <div>
          <div class="text-caption text-medium-emphasis mb-2">two steps</div>
          <MpWizardSteps :steps="['Choose a type', 'Configure']" :current="1" />
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">four steps</div>
          <MpWizardSteps :steps="['Choose a type', 'Configure', 'Design', 'Review']" :current="2" />
        </div>
      </div>
    `}),args:{}},s={render:()=>({components:{MpWizardSteps:p},template:`
      <div class="d-flex flex-column ga-8">
        <div>
          <div class="text-caption text-medium-emphasis mb-2">full width — labels visible</div>
          <MpWizardSteps :steps="['Choose a type', 'Configure', 'Design', 'Review']" :current="2" />
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">narrow container — labels collapse to dots</div>
          <div style="max-width: 320px;">
            <MpWizardSteps :steps="['Choose a type', 'Configure', 'Design', 'Review']" :current="2" />
          </div>
        </div>
      </div>
    `}),args:{}},t={render:()=>({components:{MpWizardSteps:p},setup:()=>({steps:["Choose a type","Configure","Design","Review"]}),template:`
      <div class="d-flex flex-column ga-8">
        <div v-for="n in [1, 2, 4]" :key="n">
          <div class="text-caption text-medium-emphasis mb-2">current={{ n }}</div>
          <MpWizardSteps :steps="steps" :current="n" />
        </div>
      </div>
    `}),args:{}},o={args:{current:2}},n={args:{steps:["Setup","Template","Audience","Review"],current:3}},r={args:{steps:["Setup","Template","Audience","Review"],current:5}},a={args:{steps:["Setup","Template","Audience","Review"],current:2},globals:{viewport:{value:"mobile375",isRotated:!1}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      MpWizardSteps
    },
    template: \`
      <div class="d-flex flex-column ga-8">
        <div>
          <div class="text-caption text-medium-emphasis mb-2">two steps</div>
          <MpWizardSteps :steps="['Choose a type', 'Configure']" :current="1" />
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">four steps</div>
          <MpWizardSteps :steps="['Choose a type', 'Configure', 'Design', 'Review']" :current="2" />
        </div>
      </div>
    \`
  }),
  args: {} as never
}`,...e.parameters?.docs?.source},description:{story:"Step-count is the only structural axis — the component is a passive indicator.",...e.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      MpWizardSteps
    },
    template: \`
      <div class="d-flex flex-column ga-8">
        <div>
          <div class="text-caption text-medium-emphasis mb-2">full width — labels visible</div>
          <MpWizardSteps :steps="['Choose a type', 'Configure', 'Design', 'Review']" :current="2" />
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">narrow container — labels collapse to dots</div>
          <div style="max-width: 320px;">
            <MpWizardSteps :steps="['Choose a type', 'Configure', 'Design', 'Review']" :current="2" />
          </div>
        </div>
      </div>
    \`
  }),
  args: {} as never
}`,...s.parameters?.docs?.source},description:{story:"Below 700px the labels collapse to dots. Resize the canvas to verify.",...s.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      MpWizardSteps
    },
    setup: () => ({
      steps: ['Choose a type', 'Configure', 'Design', 'Review']
    }),
    template: \`
      <div class="d-flex flex-column ga-8">
        <div v-for="n in [1, 2, 4]" :key="n">
          <div class="text-caption text-medium-emphasis mb-2">current={{ n }}</div>
          <MpWizardSteps :steps="steps" :current="n" />
        </div>
      </div>
    \`
  }),
  args: {} as never
}`,...t.parameters?.docs?.source},description:{story:"Progress through every position: first, mid, and complete. `aria-current` follows `current`.",...t.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    current: 2
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    steps: ['Setup', 'Template', 'Audience', 'Review'],
    current: 3
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    steps: ['Setup', 'Template', 'Audience', 'Review'],
    current: 5
  }
}`,...r.parameters?.docs?.source},description:{story:'`current` beyond the last step marks every step complete — the "all done" confirmation state.',...r.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    steps: ['Setup', 'Template', 'Audience', 'Review'],
    current: 2
  },
  globals: {
    viewport: {
      value: 'mobile375',
      isRotated: false
    }
  }
}`,...a.parameters?.docs?.source},description:{story:`Below 700px viewport width the labels collapse to numbered circles only (viewport media
query — view this story in the canvas, where the iframe is sized to 375px).`,...a.parameters?.docs?.description}}};const v=["Default","Variants","Sizes","States","TwoStepsOnSettings","FourStepsMidProgress","AllStepsDone","SmallScreenCollapse"];export{r as AllStepsDone,i as Default,n as FourStepsMidProgress,s as Sizes,a as SmallScreenCollapse,t as States,o as TwoStepsOnSettings,e as Variants,v as __namedExportsOrder,u as default};
