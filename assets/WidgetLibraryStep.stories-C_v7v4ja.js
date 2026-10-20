import{r as c}from"./iframe-DH-XNaA6.js";import{W as o}from"./WidgetLibraryStep-BhlpUw-Z.js";import"./preload-helper-PPVm8Dsz.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const y={title:"Product/Dashboards/Wizard/WidgetLibraryStep",component:o,tags:["autodocs"],parameters:{docs:{description:{component:"\nStep 1 of the widget wizard: a searchable, category-filterable catalog of the available widgets\n(from `WIDGET_LIBRARY`). Search and category chips are internal state — type in the search field to\nsee the empty state.\n\n### Controls\nThis step takes **no props** — the Controls panel is empty by design. It communicates entirely\nthrough two emits: `select` (a `DashboardWidgetLibraryEntry`) and `createWithAi` (no payload).\n        "}}},render:()=>({components:{WidgetLibraryStep:o},setup(){return{selected:c("")}},template:`
      <div style="max-width:560px;">
        <div v-if="selected" class="text-body-2 text-medium-emphasis mb-3">Selected: {{ selected }}</div>
        <WidgetLibraryStep @select="selected = $event.title" />
      </div>
    `})},t={},r={play:async({canvasElement:e})=>{await new Promise(n=>setTimeout(n,300)),e.querySelector(".widget-library__category:not(:first-child)")?.click()}},a={render:e=>({components:{WidgetLibraryStep:o},setup:()=>({args:e}),template:'<WidgetLibraryStep v-bind="args" />'})},s={render:e=>({components:{WidgetLibraryStep:o},setup:()=>({args:e}),template:'<WidgetLibraryStep v-bind="args" />'})},i={render:e=>({components:{WidgetLibraryStep:o},setup:()=>({args:e}),template:'<WidgetLibraryStep v-bind="args" />'})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source},description:{story:`Default "All" state — widgets group under muted section headers (Commerce/Marketing/
 Service/Retail/Merchandising), the UX-002 fix that replaced a flat, icon-only 28-item list.`,...t.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    await new Promise(resolve => setTimeout(resolve, 300));
    const chip = canvasElement.querySelector('.widget-library__category:not(:first-child)') as HTMLElement;
    chip?.click();
  }
}`,...r.parameters?.docs?.source},description:{story:`Clicking a category chip narrows to a flat, single-category list (headers only appear
 when "All" is active — a single category is already unambiguous).`,...r.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      WidgetLibraryStep
    },
    setup: () => ({
      args
    }),
    template: \`<WidgetLibraryStep v-bind="args" />\`
  })
}`,...a.parameters?.docs?.source},description:{story:"One structure — a filterable gallery of widget types. Its variants are the category filters.",...a.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      WidgetLibraryStep
    },
    setup: () => ({
      args
    }),
    template: \`<WidgetLibraryStep v-bind="args" />\`
  })
}`,...s.parameters?.docs?.source},description:{story:"There is no `size` prop — the gallery fills the wizard drawer's body. Its tiles are\n `MpOptionCard`s, so their inset is `component.card.padding` like every other card.",...s.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      WidgetLibraryStep
    },
    setup: () => ({
      args
    }),
    template: \`<WidgetLibraryStep v-bind="args" />\`
  })
}`,...i.parameters?.docs?.source},description:{story:"Unfiltered, filtered to one category, and a tile selected.",...i.parameters?.docs?.description}}};const u=["Default","FilteredByCategory","Variants","Sizes","States"];export{t as Default,r as FilteredByCategory,s as Sizes,i as States,a as Variants,u as __namedExportsOrder,y as default};
