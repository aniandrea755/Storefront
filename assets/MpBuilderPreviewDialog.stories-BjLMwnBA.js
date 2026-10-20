import{r as m}from"./iframe-DH-XNaA6.js";import{M as e}from"./MpBuilderPreviewDialog-0T9k8_oC.js";import"./preload-helper-PPVm8Dsz.js";import"./MpDialog-vzXqpvNK.js";import"./useScrollEdges-CBa2dNoC.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const x={title:"Patterns/Builder Shell/MpBuilderPreviewDialog",component:e,tags:["autodocs"],parameters:{docs:{description:{component:`
### Overview
\`MpBuilderPreviewDialog\` is the fullscreen preview overlay shared by the Email, Landing page,
and Chatbot builders. It's a \`v-dialog fullscreen\` wrapping a flat, square-cornered card: a
56px title bar (title, optional \`#toolbar\` slot, close button) above a scrollable stage that
holds the preview content. The stage owns the scroll, so long previews never scroll the page
behind the overlay.

**Use when:** a builder needs to show merchant-facing output at full size — never leave a
"Preview" button unwired.

**Don't use when:** the preview is a small inline artifact (use a card in the builder's own
canvas), or the surface is a form (use \`MpFormDrawer\`).

### Usage
\`\`\`html
<MpBuilderPreviewDialog v-model="previewOpen" title="Preview — Welcome email">
  <template #toolbar>
    <v-btn-toggle v-model="device" density="compact" />
  </template>
  <EmailCanvas :blocks="blocks" />
</MpBuilderPreviewDialog>
\`\`\`

### 🟢 Do's
- **Do** name what's being previewed in \`title\` ("Preview — Welcome email"), not just "Preview".
- **Do** put device/viewport toggles in the \`#toolbar\` slot so they sit beside the close button.
- **Do** let the stage scroll — give preview content a \`max-width\` rather than its own scroller.

### 🔴 Don'ts
- **Don't** put editing controls in here — preview is read-only; edits belong in the builder.
- **Don't** nest another dialog inside the stage.

### A11y
- **Provides:** the dialog is labelled by its title via \`aria-labelledby\` (\`useId()\`-scoped),
  the close button carries \`aria-label="Close preview"\`, and Vuetify's \`v-dialog\` supplies the
  focus trap, Escape-to-close, and focus restoration.
- **Consumer must:** ensure preview content is itself accessible (alt text, heading order) —
  the dialog does not sanitize what it renders.
        `}}},argTypes:{modelValue:{control:"boolean",description:"Open state (v-model)."},title:{control:"text",description:'Title-bar label. Defaults to "Preview"; name the artifact being previewed.'},"update:modelValue":{action:"update:modelValue",description:"Emitted when the dialog closes."}}},p=`
  <v-card flat border rounded="lg" class="pa-8" style="max-width:600px;width:100%">
    <div class="text-h5 font-weight-bold mb-2">Welcome</div>
    <div class="text-body-2 text-medium-emphasis">Preview content goes here.</div>
  </v-card>
`;function d(v,c=""){return()=>({components:{MpBuilderPreviewDialog:e},setup:()=>({open:m(!0)}),template:`
      <div>
        <v-btn class="text-none" @click="open = true">Open preview</v-btn>
        <MpBuilderPreviewDialog v-model="open" title="Preview — Welcome email">
          ${c}
          ${v}
        </MpBuilderPreviewDialog>
      </div>
    `})}const t={render:d(p)},a={render:d(p,`<template #toolbar>
       <v-btn-toggle model-value="desktop" density="compact" variant="outlined" divided>
         <v-btn value="desktop" size="small" icon="monitor" aria-label="Desktop" />
         <v-btn value="mobile" size="small" icon="smartphone" aria-label="Mobile" />
       </v-btn-toggle>
     </template>`)},r={render:d(`
    <v-card flat border rounded="lg" class="pa-8" style="max-width:600px;width:100%">
      <div class="text-h5 font-weight-bold mb-4">Spring lookbook</div>
      <p v-for="n in 24" :key="n" class="text-body-2 text-medium-emphasis mb-4">
        Section {{ n }} — preview content continues past the fold so the stage scrolls
        independently of the pinned title bar.
      </p>
    </v-card>
  `)},i={render:d(p),globals:{viewport:{value:"mobile375",isRotated:!1}}},o={render:()=>({components:{MpBuilderPreviewDialog:e},data:()=>({which:"plain",device:"desktop"}),template:`
      <div class="d-flex ga-2 flex-wrap">
        <v-btn variant="outlined" class="text-none" @click="which = 'plain'">Bar + stage</v-btn>
        <v-btn variant="outlined" class="text-none" @click="which = 'toolbar'">+ #toolbar</v-btn>

        <MpBuilderPreviewDialog :model-value="which === 'plain'" title="Email preview" @update:model-value="which = ''">
          <v-card flat border rounded="lg" class="pa-8" style="width: 600px">Email canvas</v-card>
        </MpBuilderPreviewDialog>

        <MpBuilderPreviewDialog :model-value="which === 'toolbar'" title="Landing page preview" @update:model-value="which = ''">
          <template #toolbar>
            <v-btn-toggle v-model="device" mandatory density="compact" variant="outlined">
              <v-btn value="desktop" icon="monitor" aria-label="Desktop" />
              <v-btn value="tablet" icon="tablet" aria-label="Tablet" />
              <v-btn value="mobile" icon="smartphone" aria-label="Mobile" />
            </v-btn-toggle>
          </template>
          <v-card flat border rounded="lg" class="pa-8" style="width: 600px">Landing canvas — {{ device }}</v-card>
        </MpBuilderPreviewDialog>
      </div>
    `}),args:{}},l={render:()=>({components:{MpBuilderPreviewDialog:e},data:()=>({open:!0}),template:`
      <div>
        <v-btn variant="outlined" class="text-none" @click="open = true">Open preview</v-btn>
        <MpBuilderPreviewDialog v-model="open" title="Email preview">
          <v-card flat border rounded="lg" class="pa-8" style="width: 600px">A 600px email canvas on a full-bleed stage.</v-card>
        </MpBuilderPreviewDialog>
      </div>
    `}),args:{}},n={render:()=>({components:{MpBuilderPreviewDialog:e},data:()=>({which:"",blocks:Array.from({length:10},(v,c)=>c+1)}),template:`
      <div class="d-flex ga-2 flex-wrap">
        <v-btn variant="outlined" class="text-none" @click="which = 'short'">Short</v-btn>
        <v-btn variant="outlined" class="text-none" @click="which = 'long'">Scrolling</v-btn>

        <MpBuilderPreviewDialog :model-value="which === 'short'" title="Short preview" @update:model-value="which = ''">
          <v-card flat border rounded="lg" class="pa-8" style="width: 600px">One block.</v-card>
        </MpBuilderPreviewDialog>
        <MpBuilderPreviewDialog :model-value="which === 'long'" title="Long preview" @update:model-value="which = ''">
          <div style="width: 600px">
            <v-card v-for="n in blocks" :key="n" flat border rounded="lg" class="pa-8 mb-4">Block {{ n }}</v-card>
          </div>
        </MpBuilderPreviewDialog>
      </div>
    `}),args:{}},s={render:()=>({components:{MpBuilderPreviewDialog:e},data:()=>({open:!0,device:"desktop"}),template:`
      <div class="d-flex align-center ga-3">
        <div class="text-body-2 text-medium-emphasis">Spring Refresh · Draft</div>
        <v-spacer />
        <v-btn variant="outlined" class="text-none" prepend-icon="eye" @click="open = true">Preview</v-btn>
        <v-btn color="primary" variant="flat" class="text-none">Send test</v-btn>

        <MpBuilderPreviewDialog v-model="open" title="Spring Refresh — preview">
          <template #toolbar>
            <v-btn-toggle v-model="device" mandatory density="compact" variant="outlined">
              <v-btn value="desktop" icon="monitor" aria-label="Desktop" />
              <v-btn value="mobile" icon="smartphone" aria-label="Mobile" />
            </v-btn-toggle>
          </template>
          <v-card flat border rounded="lg" :style="{ width: device === 'mobile' ? '390px' : '640px' }">
            <div class="pa-6 text-center" style="background: var(--surface-secondary)">
              <div class="text-h6 font-weight-bold">Northwind Supply Co.</div>
            </div>
            <div class="pa-8 text-center">
              <div class="text-h5 font-weight-bold mb-2">Spring, refreshed</div>
              <p class="text-body-2 text-medium-emphasis mb-6">New arrivals for the trail, the town and everything between.</p>
              <v-btn color="primary" variant="flat" class="text-none">Shop new arrivals</v-btn>
            </div>
            <div class="pa-4 text-center text-caption text-medium-emphasis" style="background: var(--surface-secondary)">
              You are receiving this because you subscribed. Unsubscribe.
            </div>
          </v-card>
        </MpBuilderPreviewDialog>
      </div>
    `}),args:{}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: previewStory(EMAIL_PREVIEW)
}`,...t.parameters?.docs?.source},description:{story:"The overlay open over a short email preview.",...t.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: previewStory(EMAIL_PREVIEW, \`<template #toolbar>
       <v-btn-toggle model-value="desktop" density="compact" variant="outlined" divided>
         <v-btn value="desktop" size="small" icon="monitor" aria-label="Desktop" />
         <v-btn value="mobile" size="small" icon="smartphone" aria-label="Mobile" />
       </v-btn-toggle>
     </template>\`)
}`,...a.parameters?.docs?.source},description:{story:"A device toggle in the `#toolbar` slot, sitting left of the close button.",...a.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: previewStory(\`
    <v-card flat border rounded="lg" class="pa-8" style="max-width:600px;width:100%">
      <div class="text-h5 font-weight-bold mb-4">Spring lookbook</div>
      <p v-for="n in 24" :key="n" class="text-body-2 text-medium-emphasis mb-4">
        Section {{ n }} — preview content continues past the fold so the stage scrolls
        independently of the pinned title bar.
      </p>
    </v-card>
  \`)
}`,...r.parameters?.docs?.source},description:{story:"Long content — the stage scrolls, the title bar stays pinned.",...r.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: previewStory(EMAIL_PREVIEW),
  globals: {
    viewport: {
      value: 'mobile375',
      isRotated: false
    }
  }
}`,...i.parameters?.docs?.source},description:{story:"At 375px the title truncates and the stage fills the viewport edge to edge.",...i.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      MpBuilderPreviewDialog
    },
    data: () => ({
      which: 'plain' as string,
      device: 'desktop'
    }),
    template: \`
      <div class="d-flex ga-2 flex-wrap">
        <v-btn variant="outlined" class="text-none" @click="which = 'plain'">Bar + stage</v-btn>
        <v-btn variant="outlined" class="text-none" @click="which = 'toolbar'">+ #toolbar</v-btn>

        <MpBuilderPreviewDialog :model-value="which === 'plain'" title="Email preview" @update:model-value="which = ''">
          <v-card flat border rounded="lg" class="pa-8" style="width: 600px">Email canvas</v-card>
        </MpBuilderPreviewDialog>

        <MpBuilderPreviewDialog :model-value="which === 'toolbar'" title="Landing page preview" @update:model-value="which = ''">
          <template #toolbar>
            <v-btn-toggle v-model="device" mandatory density="compact" variant="outlined">
              <v-btn value="desktop" icon="monitor" aria-label="Desktop" />
              <v-btn value="tablet" icon="tablet" aria-label="Tablet" />
              <v-btn value="mobile" icon="smartphone" aria-label="Mobile" />
            </v-btn-toggle>
          </template>
          <v-card flat border rounded="lg" class="pa-8" style="width: 600px">Landing canvas — {{ device }}</v-card>
        </MpBuilderPreviewDialog>
      </div>
    \`
  }),
  args: {} as never
}`,...o.parameters?.docs?.source},description:{story:"Two structures: bar + stage, and bar + `#toolbar` controls + stage. Since Phase 4 both are\n`MpDialog fullscreen` — the header band, close affordance and body scroll come from the\nshell, so a preview and a form modal wear the same chrome.",...o.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      MpBuilderPreviewDialog
    },
    data: () => ({
      open: true
    }),
    template: \`
      <div>
        <v-btn variant="outlined" class="text-none" @click="open = true">Open preview</v-btn>
        <MpBuilderPreviewDialog v-model="open" title="Email preview">
          <v-card flat border rounded="lg" class="pa-8" style="width: 600px">A 600px email canvas on a full-bleed stage.</v-card>
        </MpBuilderPreviewDialog>
      </div>
    \`
  }),
  args: {} as never
}`,...l.parameters?.docs?.source},description:{story:"There is no `size` prop — a preview is always full-screen, because the point is to see the\nartefact at its real size without the app's chrome competing. The stage inside is what\ncarries a measure, and that is the caller's canvas.",...l.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      MpBuilderPreviewDialog
    },
    data: () => ({
      which: '' as string,
      blocks: Array.from({
        length: 10
      }, (_, i) => i + 1)
    }),
    template: \`
      <div class="d-flex ga-2 flex-wrap">
        <v-btn variant="outlined" class="text-none" @click="which = 'short'">Short</v-btn>
        <v-btn variant="outlined" class="text-none" @click="which = 'long'">Scrolling</v-btn>

        <MpBuilderPreviewDialog :model-value="which === 'short'" title="Short preview" @update:model-value="which = ''">
          <v-card flat border rounded="lg" class="pa-8" style="width: 600px">One block.</v-card>
        </MpBuilderPreviewDialog>
        <MpBuilderPreviewDialog :model-value="which === 'long'" title="Long preview" @update:model-value="which = ''">
          <div style="width: 600px">
            <v-card v-for="n in blocks" :key="n" flat border rounded="lg" class="pa-8 mb-4">Block {{ n }}</v-card>
          </div>
        </MpBuilderPreviewDialog>
      </div>
    \`
  }),
  args: {} as never
}`,...n.parameters?.docs?.source},description:{story:"Short content (stage centres it) and content long enough to scroll (the bar stays pinned).",...n.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      MpBuilderPreviewDialog
    },
    data: () => ({
      open: true,
      device: 'desktop'
    }),
    template: \`
      <div class="d-flex align-center ga-3">
        <div class="text-body-2 text-medium-emphasis">Spring Refresh · Draft</div>
        <v-spacer />
        <v-btn variant="outlined" class="text-none" prepend-icon="eye" @click="open = true">Preview</v-btn>
        <v-btn color="primary" variant="flat" class="text-none">Send test</v-btn>

        <MpBuilderPreviewDialog v-model="open" title="Spring Refresh — preview">
          <template #toolbar>
            <v-btn-toggle v-model="device" mandatory density="compact" variant="outlined">
              <v-btn value="desktop" icon="monitor" aria-label="Desktop" />
              <v-btn value="mobile" icon="smartphone" aria-label="Mobile" />
            </v-btn-toggle>
          </template>
          <v-card flat border rounded="lg" :style="{ width: device === 'mobile' ? '390px' : '640px' }">
            <div class="pa-6 text-center" style="background: var(--surface-secondary)">
              <div class="text-h6 font-weight-bold">Northwind Supply Co.</div>
            </div>
            <div class="pa-8 text-center">
              <div class="text-h5 font-weight-bold mb-2">Spring, refreshed</div>
              <p class="text-body-2 text-medium-emphasis mb-6">New arrivals for the trail, the town and everything between.</p>
              <v-btn color="primary" variant="flat" class="text-none">Shop new arrivals</v-btn>
            </div>
            <div class="pa-4 text-center text-caption text-medium-emphasis" style="background: var(--surface-secondary)">
              You are receiving this because you subscribed. Unsubscribe.
            </div>
          </v-card>
        </MpBuilderPreviewDialog>
      </div>
    \`
  }),
  args: {} as never
}`,...s.parameters?.docs?.source},description:{story:"**In context.** A builder's Preview button opening a real-looking email: device toggle in\n`#toolbar`, the rendered email on the stage.",...s.parameters?.docs?.description}}};const y=["Default","WithToolbar","LongContent","Mobile375","Variants","Sizes","States","InContextEmailBuilderPreview"];export{t as Default,s as InContextEmailBuilderPreview,r as LongContent,i as Mobile375,l as Sizes,n as States,o as Variants,a as WithToolbar,y as __namedExportsOrder,x as default};
