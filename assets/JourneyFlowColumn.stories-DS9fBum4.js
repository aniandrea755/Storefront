import{r as g}from"./iframe-DH-XNaA6.js";import{b as e}from"./useFlowTree-3VPeKGZt.js";import{d as h,i as d,a as y,b as f}from"./journeyFlowData-BfF7KkYe.js";import{J as u}from"./JourneyFlowColumn-D7sNjlub.js";import"./preload-helper-PPVm8Dsz.js";import"./JourneyAddStepMenu-CvQvwInO.js";import"./flowTheme-luQBUdZG.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./MpMenuItem-D9v8-M9a.js";import"./MpRowActionsMenu-B3n7Nt9u.js";function w(c,i){const l=c.slice(0,i).map(p=>({...p,children:[...p.children]})),m=l[l.length-1];return m&&(m.children=[]),l}const b=e(w(d("abandoned-cart",0),4)),E=e(d("welcome",0)),S=e(d("lapsed-buyer",0)),v=e(d("advocacy",0)),N=e(d("abandoned-cart",1)),C=e(y(f[0],"sb")),k={title:"Product/Marketing/Journeys/JourneyFlowColumn",component:u,tags:["autodocs"],parameters:{docs:{description:{component:'\n### Overview\n`JourneyFlowColumn` renders one vertical run of the journey builder canvas: node cards with a\ncategory-tinted header, connectors, hover-revealed add-step (+) menus on every edge, and a\nper-node kebab menu (Configure / Duplicate / Delete). Filter nodes recurse into side-by-side\nbranch columns that can rejoin, dead-end, or stay empty (dashed "Add step" target).\n\nBuild `segments` from a flat `FlowNode[]` with `buildSegments` (`useFlowTree.ts`). The\noptional `catalog` prop swaps the add-step palette (marketing vs data journeys). In these\nstories only `select` is wired (click a card to move the selection ring); `add`, `duplicate`\nand `remove` are graph edits owned by JourneyBuilder.\n        '}}},args:{segments:b,selectedId:null},argTypes:{flashId:{control:"text",description:"Node to pulse once, for jump-to-issue. The parent clears it on a timer — the column does not reset it."},segments:{control:!1,description:"`FlowSegment[]` — the journey's nodes in order, already grouped into segments. Each node's `category` picks the accent that drives its spine, icon tile and eyebrow from one colour."},selectedId:{control:!1,description:"Id of the currently selected node, or `null` for none. Selection is controlled — the column emits `select` and never changes this itself."},catalog:{control:!1,description:"`CatalogItem[]` offered by the add-step menus. Defaults to the marketing catalog; pass a narrower list to restrict what can be inserted."}},render:c=>({components:{JourneyFlowColumn:u},setup(){const i=g(c.selectedId??null);return{args:c,selected:i}},template:`
      <div class="bg-background rounded-lg pa-8" style="overflow-x: auto;">
        <div class="d-flex flex-column align-center mx-auto" style="min-width: 460px; width: max-content;">
          <JourneyFlowColumn :segments="args.segments" :selected-id="selected" :catalog="args.catalog"
            @select="id => selected = id" />
        </div>
      </div>
    `})},t={},s={args:{segments:E}},r={args:{segments:S}},a={args:{segments:v}},o={args:{segments:N,selectedId:"j1-c3"}},n={args:{segments:C,catalog:h}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source},description:{story:'Trigger → delay → email → delay, ending in the dashed "End of journey" card.',...t.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    segments: BRANCHED
  }
}`,...s.parameters?.docs?.source},description:{story:"Welcome Series: a YES/NO filter whose branches rejoin at a shared tag step.",...s.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    segments: NESTED
  }
}`,...r.parameters?.docs?.source},description:{story:"Lapsed Buyer: an A/B split nested inside the NO branch of a YES/NO filter.",...r.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    segments: EMPTY_BRANCH
  }
}`,...a.parameters?.docs?.source},description:{story:"Advocacy: the NO branch is empty and renders the dashed add-step target.",...a.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    segments: SELECTABLE,
    selectedId: 'j1-c3'
  }
}`,...o.parameters?.docs?.source},description:{story:"A node pre-selected via `selectedId` — primary ring; click other cards to move it.",...o.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    segments: DATA_FLOW,
    catalog: dataNodeCatalog
  }
}`,...n.parameters?.docs?.source},description:{story:"Data-journey flow with `catalog` swapped to the data palette (open a + menu).",...n.parameters?.docs?.description}}};const O=["LinearFlow","BranchedFlow","NestedSplit","EmptyBranch","SelectedNode","DataJourneyCatalog"];export{s as BranchedFlow,n as DataJourneyCatalog,a as EmptyBranch,t as LinearFlow,r as NestedSplit,o as SelectedNode,O as __namedExportsOrder,k as default};
