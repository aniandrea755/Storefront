import{r as c}from"./iframe-DH-XNaA6.js";import{A as t}from"./AddSectionDialog-Dq4B80nL.js";import{S as l}from"./StorefrontPreview-DdAhMdFI.js";import"./preload-helper-PPVm8Dsz.js";import"./MpDialog-vzXqpvNK.js";import"./useScrollEdges-CBa2dNoC.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./MpFormSection-BK5pVmwO.js";import"./MpListRow-Bc2C1VpE.js";import"./themeBuilderData-CwPveBFz.js";import"./LumosCollectionsPage-cNFVpevn.js";import"./useProductExtras-BJzyuYBW.js";const k={title:"Product/Sales Channels/AddSectionDialog",component:t,tags:["autodocs"],parameters:{docs:{description:{component:"The store theme builder's Add Section picker. Left pane: a Generate-with-AI row, a search box, and the section catalog grouped into collapsible categories (Layout, Media, Featured, Content, Commerce). Clicking a no-variant kind emits `add` and closes; a variant-bearing kind (hero, featured-products, collection-grid, image-banner, testimonials) reveals layout cards in the right pane, and picking one emits `addVariant`. `isKindDisabled` greys out unique kinds already present on the active template. The parent (StoreThemeBuilder) owns the open state."}}},argTypes:{modelValue:{control:!1,description:"Dialog open state (v-model), owned by the parent."},isKindDisabled:{control:!1,description:"Predicate returning true when a kind is already present and cannot be re-added."},onAdd:{table:{category:"events"},description:"Emitted with the section def when a no-variant kind is clicked, then the dialog closes."},onAddVariant:{table:{category:"events"},description:"Emitted with the section def and chosen variant id when a variant card is picked."},onGenerate:{table:{category:"events"},description:"Emitted when the Generate-with-AI row is clicked; the parent opens the Da Vinci generator."}}},n={render:()=>({components:{AddSectionDialog:t},setup(){return{open:c(!0),isKindDisabled:()=>!1}},template:`
      <div style="min-height:520px;">
        <AddSectionDialog
          v-model="open"
          :is-kind-disabled="isKindDisabled"
          @add="() => {}"
          @add-variant="() => {}"
          @generate="() => {}"
        />
      </div>
    `})},i={render:()=>({components:{AddSectionDialog:t},setup(){return{open:c(!0),isKindDisabled:d=>d.kind==="header"||d.kind==="footer"}},template:`
      <div style="min-height:520px;">
        <AddSectionDialog
          v-model="open"
          :is-kind-disabled="isKindDisabled"
          @add="() => {}"
          @add-variant="() => {}"
          @generate="() => {}"
        />
      </div>
    `})},a={render:e=>({components:{AddSectionDialog:t},setup:()=>({args:e}),template:'<AddSectionDialog v-bind="args" />'})},o={render:e=>({components:{AddSectionDialog:t},setup:()=>({args:e}),template:'<AddSectionDialog v-bind="args" />'})},r={render:e=>({components:{AddSectionDialog:t},setup:()=>({args:e}),template:'<AddSectionDialog v-bind="args" />'})},s={render:e=>({components:{AddSectionDialog:t,StorefrontPreview:l},setup:()=>({args:e}),template:`
      <div>
        <div class="d-flex align-center ga-3 pa-4" style="border-bottom: 1px solid var(--border-subtle)">
          <div class="text-body-2 font-weight-bold">Northwind Supply · Theme</div>
          <v-spacer />
          <v-btn variant="outlined" class="text-none" prepend-icon="plus">Add section</v-btn>
        </div>
        <div class="pa-4" style="background: var(--surface-canvas)">
          <StorefrontPreview device="desktop" />
        </div>
        <AddSectionDialog v-bind="args" />
      </div>
    `})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      AddSectionDialog
    },
    setup() {
      const open = ref(true);
      const isKindDisabled = () => false;
      return {
        open,
        isKindDisabled
      };
    },
    template: \`
      <div style="min-height:520px;">
        <AddSectionDialog
          v-model="open"
          :is-kind-disabled="isKindDisabled"
          @add="() => {}"
          @add-variant="() => {}"
          @generate="() => {}"
        />
      </div>
    \`
  })
}`,...n.parameters?.docs?.source},description:{story:"The picker shown open, nothing disabled — browse categories or search, and pick a variant layout.",...n.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      AddSectionDialog
    },
    setup() {
      const open = ref(true);
      const isKindDisabled = (def: ThemeSectionDef) => def.kind === 'header' || def.kind === 'footer';
      return {
        open,
        isKindDisabled
      };
    },
    template: \`
      <div style="min-height:520px;">
        <AddSectionDialog
          v-model="open"
          :is-kind-disabled="isKindDisabled"
          @add="() => {}"
          @add-variant="() => {}"
          @generate="() => {}"
        />
      </div>
    \`
  })
}`,...i.parameters?.docs?.source},description:{story:'`isKindDisabled` returns true for the unique `header` and `footer` kinds, so both\nrender greyed out with an "Already added" hint and can\'t be selected.',...i.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      AddSectionDialog
    },
    setup: () => ({
      args
    }),
    template: \`<AddSectionDialog v-bind="args" />\`
  })
}`,...a.parameters?.docs?.source},description:{story:`One structure — a two-pane picker: a searchable, grouped catalog on the left and the
selected section's layout variants on the right. What varies is which pane is populated.`,...a.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      AddSectionDialog
    },
    setup: () => ({
      args
    }),
    template: \`<AddSectionDialog v-bind="args" />\`
  })
}`,...o.parameters?.docs?.source},description:{story:"There is no `size` prop — this is `MpDialog`'s `md` (640px), wide enough for the split\nwithout letting the catalog column stretch.\n\nPhase 4 (P4-6) is the finding this dialog was named in: it carried **five** different\nmicro-insets of its own (`12×14`, `8×8`, `6×8`, `8`, and 6px gaps). Every repeating row is\nan `MpListRow` now, so two insets are left — the row inset (`component.listItem.*`) and the\nvariant thumbnail's compact card inset. The schematic mini-mocks below the thumbnails are\nillustration geometry and stay off the scale, marked as such in the file.",...o.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      AddSectionDialog
    },
    setup: () => ({
      args
    }),
    template: \`<AddSectionDialog v-bind="args" />\`
  })
}`,...r.parameters?.docs?.source},description:{story:`Row states in the catalog: resting, selected (accent wash), and disabled ("Already added" —
a section a theme allows only once). Plus the right pane's empty state before anything is
picked, and the searching state where the grouped tree flattens to a filtered list.`,...r.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      AddSectionDialog,
      StorefrontPreview
    },
    setup: () => ({
      args
    }),
    template: \`
      <div>
        <div class="d-flex align-center ga-3 pa-4" style="border-bottom: 1px solid var(--border-subtle)">
          <div class="text-body-2 font-weight-bold">Northwind Supply · Theme</div>
          <v-spacer />
          <v-btn variant="outlined" class="text-none" prepend-icon="plus">Add section</v-btn>
        </div>
        <div class="pa-4" style="background: var(--surface-canvas)">
          <StorefrontPreview device="desktop" />
        </div>
        <AddSectionDialog v-bind="args" />
      </div>
    \`
  })
}`,...s.parameters?.docs?.source},description:{story:`**In context.** The dialog opening from the store editor's "Add section" affordance, over
the storefront preview it will add to.`,...s.parameters?.docs?.description}}};const x=["Default","WithDisabledKinds","Variants","Sizes","States","InContextStoreEditor"];export{n as Default,s as InContextStoreEditor,o as Sizes,r as States,a as Variants,i as WithDisabledKinds,x as __namedExportsOrder,k as default};
