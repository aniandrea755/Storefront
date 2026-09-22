import{M as n}from"./MpWizardShell-BueSUkau.js";import"./iframe-BqHSr5b_.js";import"./preload-helper-PPVm8Dsz.js";import"./MpPageHeader-DvEYTUk7.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./MpWizardSteps-Db2_wLT1.js";const s=["Campaign details","Contacts","Content","Schedule","Review"],o=`
  <v-card variant="flat" border rounded="lg" class="pa-8">
    <h2 class="text-h6 font-weight-bold mb-1">Campaign details</h2>
    <p class="text-body-2 text-medium-emphasis mb-6">Name your campaign and write the subject line recipients will see.</p>
    <v-divider class="mb-6" />
    <div class="text-body-2 text-medium-emphasis">Step content</div>
  </v-card>
`,v={title:"Patterns/Wizard Shell/MpWizardShell",component:n,tags:["autodocs"],parameters:{canvas:"full",docs:{description:{component:"\n### Overview\nThe one full-page wizard chrome (route meta `builderShell`): a surface header\nband with `MpPageHeader` and `MpWizardSteps` in its tabs row, a scrollable\nbody with a centred measure (`component.wizard.measure.{sm,md,lg}` =\n780/920/1040), and a surface footer band — Back fallback on the left; hint\ncaption, tabular `N / M` counter and the primary actions on the right.\n\nThe shell composes the `Step N of M — <label>` subtitle itself; pass\n`subtitle` only to override it (entitlement banners, single-step flows —\nomitting `steps` also drops the steps row and counter).\n\n### Division of labour\nStep state lives in the page via `useWizardSteps` — feed its `step` /\n`maxStep` into `current` / `max-step` and handle `@select` / `@back`.\nThe leave guard also stays with the page (it owns the dirty state):\nexplicit-persistence wizards wire `useDirtyLeaveGuard` + `MpConfirmDialog`;\nautosaving flows don't block. Step content composes `MpWizardStepCard`;\ngalleries may render bare in the measure.\n\nIn the app the shell fills the rounded content frame (`.mp-frame-fill`).\nPass `standalone` to contain it in the parent instead — these stories all do.\n"}}},argTypes:{title:{control:"text",description:"Page title in the header band."},steps:{control:"object",description:"Ordered step labels. Omit for a single-step action flow — the steps row, composed subtitle and counter all drop away."},current:{control:"number",description:"1-based current step. Required when `steps` is set."},maxStep:{control:"number",description:"High-water mark of visited steps (`useWizardSteps().maxStep`). Steps up to it are jumpable; defaults to `current`."},clickable:{control:"boolean",description:"Visited steps clickable (default true). MpWizardSteps gates jumps on `maxStep` regardless."},backTo:{control:"object",description:"Header back-chevron target (`RouteLocationRaw`)."},eyebrow:{control:"text",description:"Muted tracked label above the title."},subtitle:{control:"text",description:"Overrides the composed `Step N of M — <label>` subtitle."},measure:{control:"select",options:["sm","md","lg"],description:"Content column width → `component.wizard.measure.*`: sm 780 (canonical form), md 920 (wide form/table steps), lg 1040 (split-pane and gallery steps). Defaults to sm."},counter:{control:"boolean",description:"Show the tabular `N / M` footer counter (default true; renders only when `steps` is set)."},hint:{control:"text",description:"Disabled-reason caption before the counter — why the primary action is inert right now."},standalone:{control:"boolean",description:"Fill the parent at height 100% instead of the app content frame. Set it outside the normal app chrome (nested layouts, Storybook)."}}},r={args:{title:"Create campaign",steps:s,current:2,maxStep:3,standalone:!0},render:i=>({components:{MpWizardShell:n},setup:()=>({args:i}),template:`
      <div style="height:520px">
        <MpWizardShell v-bind="args">
          <template #actions>
            <v-btn variant="text" class="text-none text-medium-emphasis">Save &amp; exit</v-btn>
          </template>
          ${o}
          <template #footer>
            <v-btn color="primary" variant="flat" class="text-none" append-icon="arrow-right">Continue</v-btn>
          </template>
        </MpWizardShell>
      </div>
    `})},e={args:{title:"",standalone:!0},render:()=>({components:{MpWizardShell:n},setup:()=>({STEPS:s}),template:`
      <div class="d-flex flex-column ga-6">
        <div v-for="m in ['sm', 'md', 'lg']" :key="m" style="height:300px">
          <MpWizardShell :title="'Measure ' + m" :steps="STEPS.slice(0, 3)" :current="1" :measure="m" standalone>
            <v-card variant="flat" border rounded="lg" class="pa-8 text-body-2 text-medium-emphasis">
              component.wizard.measure.{{ m }}
            </v-card>
            <template #footer>
              <v-btn color="primary" variant="flat" class="text-none">Continue</v-btn>
            </template>
          </MpWizardShell>
        </div>
      </div>
    `})},t={args:{title:"",standalone:!0},render:()=>({components:{MpWizardShell:n},setup:()=>({STEPS:s}),template:`
      <div class="d-flex flex-column ga-6">
        <div style="height:280px">
          <MpWizardShell title="Composed subtitle + eyebrow" eyebrow="Marketing · Campaigns" :steps="STEPS.slice(0, 3)" :current="2" :max-step="2" standalone>
            <v-card variant="flat" border rounded="lg" class="pa-8 text-body-2 text-medium-emphasis">The subtitle reads "Step 2 of 3 — Contacts", composed by the shell.</v-card>
            <template #footer><v-btn color="primary" variant="flat" class="text-none">Continue</v-btn></template>
          </MpWizardShell>
        </div>
        <div style="height:280px">
          <MpWizardShell title="Subtitle override" subtitle="SMS is not enabled on this account." :steps="STEPS.slice(0, 2)" :current="1" standalone>
            <v-card variant="flat" border rounded="lg" class="pa-8 text-body-2 text-medium-emphasis">An entitlement banner replaces the composed step subtitle.</v-card>
            <template #footer><v-btn color="primary" variant="flat" class="text-none" disabled>Continue</v-btn></template>
          </MpWizardShell>
        </div>
        <div style="height:280px">
          <MpWizardShell title="Single-step action flow" subtitle="No steps — the steps row, composed subtitle and counter all drop away." standalone>
            <v-card variant="flat" border rounded="lg" class="pa-8 text-body-2 text-medium-emphasis">A chooser page committing one decision.</v-card>
            <template #footerStart><v-btn variant="text" class="text-none">Cancel</v-btn></template>
            <template #footer><v-btn color="primary" variant="flat" class="text-none" disabled>Continue</v-btn></template>
          </MpWizardShell>
        </div>
      </div>
    `})},a={args:{title:"",standalone:!0},render:()=>({components:{MpWizardShell:n},setup:()=>({STEPS:s}),template:`
      <div class="d-flex flex-column ga-6">
        <div style="height:280px">
          <MpWizardShell title="Hint while blocked" :steps="STEPS.slice(0, 3)" :current="1" hint="Name your campaign to continue" standalone>
            <v-card variant="flat" border rounded="lg" class="pa-8 text-body-2 text-medium-emphasis">The caption explains the disabled primary.</v-card>
            <template #footer><v-btn color="primary" variant="flat" class="text-none" disabled append-icon="arrow-right">Continue</v-btn></template>
          </MpWizardShell>
        </div>
        <div style="height:280px">
          <MpWizardShell title="Everything visited" :steps="STEPS.slice(0, 4)" :current="2" :max-step="4" standalone>
            <v-card variant="flat" border rounded="lg" class="pa-8 text-body-2 text-medium-emphasis">Edit-mode hydration (useWizardSteps().unlockAll()) — every step is jumpable.</v-card>
            <template #footer><v-btn color="primary" variant="flat" class="text-none" append-icon="arrow-right">Continue</v-btn></template>
          </MpWizardShell>
        </div>
        <div style="height:280px">
          <MpWizardShell title="Final step" :steps="STEPS.slice(0, 3)" :current="3" :max-step="3" standalone>
            <v-card variant="flat" border rounded="lg" class="pa-8 text-body-2 text-medium-emphasis">Finalize actions replace Continue.</v-card>
            <template #footer>
              <v-btn variant="outlined" class="text-none">Save draft</v-btn>
              <v-btn color="primary" variant="flat" class="text-none" prepend-icon="rocket">Schedule campaign</v-btn>
            </template>
          </MpWizardShell>
        </div>
      </div>
    `})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Create campaign',
    steps: STEPS,
    current: 2,
    maxStep: 3,
    standalone: true
  },
  render: args => ({
    components: {
      MpWizardShell
    },
    setup: () => ({
      args
    }),
    template: \`
      <div style="height:520px">
        <MpWizardShell v-bind="args">
          <template #actions>
            <v-btn variant="text" class="text-none text-medium-emphasis">Save &amp; exit</v-btn>
          </template>
          \${stepCard}
          <template #footer>
            <v-btn color="primary" variant="flat" class="text-none" append-icon="arrow-right">Continue</v-btn>
          </template>
        </MpWizardShell>
      </div>
    \`
  })
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    title: '',
    standalone: true
  },
  render: () => ({
    components: {
      MpWizardShell
    },
    setup: () => ({
      STEPS
    }),
    template: \`
      <div class="d-flex flex-column ga-6">
        <div v-for="m in ['sm', 'md', 'lg']" :key="m" style="height:300px">
          <MpWizardShell :title="'Measure ' + m" :steps="STEPS.slice(0, 3)" :current="1" :measure="m" standalone>
            <v-card variant="flat" border rounded="lg" class="pa-8 text-body-2 text-medium-emphasis">
              component.wizard.measure.{{ m }}
            </v-card>
            <template #footer>
              <v-btn color="primary" variant="flat" class="text-none">Continue</v-btn>
            </template>
          </MpWizardShell>
        </div>
      </div>
    \`
  })
}`,...e.parameters?.docs?.source},description:{story:"The three measure stops on one shell.",...e.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    title: '',
    standalone: true
  },
  render: () => ({
    components: {
      MpWizardShell
    },
    setup: () => ({
      STEPS
    }),
    template: \`
      <div class="d-flex flex-column ga-6">
        <div style="height:280px">
          <MpWizardShell title="Composed subtitle + eyebrow" eyebrow="Marketing · Campaigns" :steps="STEPS.slice(0, 3)" :current="2" :max-step="2" standalone>
            <v-card variant="flat" border rounded="lg" class="pa-8 text-body-2 text-medium-emphasis">The subtitle reads "Step 2 of 3 — Contacts", composed by the shell.</v-card>
            <template #footer><v-btn color="primary" variant="flat" class="text-none">Continue</v-btn></template>
          </MpWizardShell>
        </div>
        <div style="height:280px">
          <MpWizardShell title="Subtitle override" subtitle="SMS is not enabled on this account." :steps="STEPS.slice(0, 2)" :current="1" standalone>
            <v-card variant="flat" border rounded="lg" class="pa-8 text-body-2 text-medium-emphasis">An entitlement banner replaces the composed step subtitle.</v-card>
            <template #footer><v-btn color="primary" variant="flat" class="text-none" disabled>Continue</v-btn></template>
          </MpWizardShell>
        </div>
        <div style="height:280px">
          <MpWizardShell title="Single-step action flow" subtitle="No steps — the steps row, composed subtitle and counter all drop away." standalone>
            <v-card variant="flat" border rounded="lg" class="pa-8 text-body-2 text-medium-emphasis">A chooser page committing one decision.</v-card>
            <template #footerStart><v-btn variant="text" class="text-none">Cancel</v-btn></template>
            <template #footer><v-btn color="primary" variant="flat" class="text-none" disabled>Continue</v-btn></template>
          </MpWizardShell>
        </div>
      </div>
    \`
  })
}`,...t.parameters?.docs?.source},description:{story:"Structural variants: composed subtitle vs override, eyebrow, and a single-step flow with no steps row.",...t.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    title: '',
    standalone: true
  },
  render: () => ({
    components: {
      MpWizardShell
    },
    setup: () => ({
      STEPS
    }),
    template: \`
      <div class="d-flex flex-column ga-6">
        <div style="height:280px">
          <MpWizardShell title="Hint while blocked" :steps="STEPS.slice(0, 3)" :current="1" hint="Name your campaign to continue" standalone>
            <v-card variant="flat" border rounded="lg" class="pa-8 text-body-2 text-medium-emphasis">The caption explains the disabled primary.</v-card>
            <template #footer><v-btn color="primary" variant="flat" class="text-none" disabled append-icon="arrow-right">Continue</v-btn></template>
          </MpWizardShell>
        </div>
        <div style="height:280px">
          <MpWizardShell title="Everything visited" :steps="STEPS.slice(0, 4)" :current="2" :max-step="4" standalone>
            <v-card variant="flat" border rounded="lg" class="pa-8 text-body-2 text-medium-emphasis">Edit-mode hydration (useWizardSteps().unlockAll()) — every step is jumpable.</v-card>
            <template #footer><v-btn color="primary" variant="flat" class="text-none" append-icon="arrow-right">Continue</v-btn></template>
          </MpWizardShell>
        </div>
        <div style="height:280px">
          <MpWizardShell title="Final step" :steps="STEPS.slice(0, 3)" :current="3" :max-step="3" standalone>
            <v-card variant="flat" border rounded="lg" class="pa-8 text-body-2 text-medium-emphasis">Finalize actions replace Continue.</v-card>
            <template #footer>
              <v-btn variant="outlined" class="text-none">Save draft</v-btn>
              <v-btn color="primary" variant="flat" class="text-none" prepend-icon="rocket">Schedule campaign</v-btn>
            </template>
          </MpWizardShell>
        </div>
      </div>
    \`
  })
}`,...a.parameters?.docs?.source},description:{story:"Footer states: the disabled-reason hint, locked vs jumpable steps, and the final step.",...a.parameters?.docs?.description}}};const h=["Default","Measures","Variants","States"];export{r as Default,e as Measures,a as States,t as Variants,h as __namedExportsOrder,v as default};
