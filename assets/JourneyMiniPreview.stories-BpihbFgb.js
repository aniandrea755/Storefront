import{b as y,i as l}from"./journeyFlowData-BfF7KkYe.js";import{J as d}from"./JourneyMiniPreview-lCxnYyDK.js";import"./iframe-DH-XNaA6.js";import"./preload-helper-PPVm8Dsz.js";import"./useFlowTree-3VPeKGZt.js";import"./flowTheme-luQBUdZG.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";function g(c,h){const p=c.slice(0,h).map(u=>({...u,children:[...u.children]})),m=p[p.length-1];return m&&(m.children=[]),p}const e=g(l("abandoned-cart",0),4),v=l("re-engagement",0),w=l("lapsed-buyer",0),S=y[0].nodes,M={title:"Product/Marketing/Journeys/JourneyMiniPreview",component:d,tags:["autodocs"],parameters:{docs:{description:{component:'\n### Overview\n`JourneyMiniPreview` is the read-only thumbnail of a journey graph — category-tinted pills\njoined by hairline connectors, with branch columns that mirror the full canvas (rejoin, dead-end,\nor empty "·"). It is used inside template pickers (`CreateJourney`, `DataJourneys`), typically\nin an `MpOptionCard` media slot.\n\nPass a flat `nodes` array at the root; the component builds its own segments (the `segments`\nprop exists for its internal branch recursion only).\n        '}}},argTypes:{nodes:{control:!1,description:"`FlowNode[]` — raw journey nodes. The preview groups them into segments itself, so pass this when you have the flat list."},segments:{control:!1,description:"`FlowSegment[]` — pre-grouped segments. Takes precedence over `nodes`; pass this when the caller has already built them."}},args:{nodes:e},render:c=>({components:{JourneyMiniPreview:d},setup:()=>({args:c}),template:`
      <div class="bg-background border rounded-lg pa-4 d-flex justify-center" style="width: 340px; overflow-x: auto;">
        <JourneyMiniPreview :nodes="args.nodes" />
      </div>
    `})},s={},r={render:()=>({components:{JourneyMiniPreview:d},setup:()=>({linear:e,branched:v}),template:`
      <div class="d-flex ga-8 align-start flex-wrap">
        <div>
          <div class="text-caption text-medium-emphasis mb-2">linear</div>
          <JourneyMiniPreview :nodes="linear" />
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">branched</div>
          <JourneyMiniPreview :nodes="branched" />
        </div>
      </div>
    `}),args:{}},n={render:()=>({components:{JourneyMiniPreview:d},setup:()=>({linear:e,short:e.slice(0,2)}),template:`
      <div class="d-flex ga-8 align-start flex-wrap">
        <div>
          <div class="text-caption text-medium-emphasis mb-2">first two steps</div>
          <JourneyMiniPreview :nodes="short" />
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">full journey</div>
          <JourneyMiniPreview :nodes="linear" />
        </div>
      </div>
    `}),args:{}},t={render:()=>({components:{JourneyMiniPreview:d},setup:()=>({linear:e,short:e.slice(0,2)}),template:'<JourneyMiniPreview :nodes="linear" />'}),args:{}},a={args:{nodes:v}},i={args:{nodes:w}},o={args:{nodes:S}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source},description:{story:"A straight trigger → delay → email → delay run.",...s.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      JourneyMiniPreview
    },
    setup: () => ({
      linear: LINEAR_NODES,
      branched: BRANCHED_NODES
    }),
    template: \`
      <div class="d-flex ga-8 align-start flex-wrap">
        <div>
          <div class="text-caption text-medium-emphasis mb-2">linear</div>
          <JourneyMiniPreview :nodes="linear" />
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">branched</div>
          <JourneyMiniPreview :nodes="branched" />
        </div>
      </div>
    \`
  }),
  args: {} as never
}`,...r.parameters?.docs?.source},description:{story:"Every journey shape the preview can lay out.",...r.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      JourneyMiniPreview
    },
    setup: () => ({
      linear: LINEAR_NODES,
      short: LINEAR_NODES.slice(0, 2)
    }),
    template: \`
      <div class="d-flex ga-8 align-start flex-wrap">
        <div>
          <div class="text-caption text-medium-emphasis mb-2">first two steps</div>
          <JourneyMiniPreview :nodes="short" />
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">full journey</div>
          <JourneyMiniPreview :nodes="linear" />
        </div>
      </div>
    \`
  }),
  args: {} as never
}`,...n.parameters?.docs?.source},description:{story:"Step count is the size axis — the preview scales its nodes to fit rather than scrolling.",...n.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      JourneyMiniPreview
    },
    setup: () => ({
      linear: LINEAR_NODES,
      short: LINEAR_NODES.slice(0, 2)
    }),
    template: \`<JourneyMiniPreview :nodes="linear" />\`
  }),
  args: {} as never
}`,...t.parameters?.docs?.source},description:{story:"The preview is a static thumbnail — it has one state per journey shape.",...t.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    nodes: BRANCHED_NODES
  }
}`,...a.parameters?.docs?.source},description:{story:"Welcome Series: YES/NO branches that rejoin at a shared tag step.",...a.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    nodes: NESTED_NODES
  }
}`,...i.parameters?.docs?.source},description:{story:"Lapsed Buyer: an A/B split nested inside the NO branch.",...i.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    nodes: DATA_NODES
  }
}`,...o.parameters?.docs?.source},description:{story:"A data-journey template (Salesforce Lead Sync) — same pills, data palette icons.",...o.parameters?.docs?.description}}};const P=["Default","Variants","Sizes","States","Branched","NestedSplit","DataJourney"];export{a as Branched,o as DataJourney,s as Default,i as NestedSplit,n as Sizes,t as States,r as Variants,P as __namedExportsOrder,M as default};
