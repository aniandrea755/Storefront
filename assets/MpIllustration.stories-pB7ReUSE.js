import{M as t}from"./MpIllustration-C2XUoC6J.js";import"./iframe-DH-XNaA6.js";import"./preload-helper-PPVm8Dsz.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const n=["no-results","empty-orders","empty-contacts","empty-campaigns","empty-products","empty-generic","start-here","error"],i={title:"Atoms/MpIllustration",component:t,tags:["autodocs"],parameters:{docs:{description:{component:'\n### Overview\nA monochrome line-illustration system for empty states across commerce + marketing. Single-weight\nline drawings — no mascots, no faces, no gradients. Each illustration draws in `currentColor`\n(muted via `--muted`) with exactly one accent detail keyed to `--accent`, so the set adapts to\nlight/dark themes automatically.\n\n### Usage\n```html\n<MpIllustration name="empty-orders" :size="160" />\n```\n\nPair with `MpEmptyState` in place of (or above) the standard icon for a first-use surface. The\nillustration is `aria-hidden` — meaning lives in the surrounding title and description.\n        '}}},argTypes:{name:{control:"select",options:n,description:"Which illustration to render."},size:{control:{type:"number"},description:"Rendered width in px (height = size × 0.75)."}}},e={args:{name:"no-results",size:160},render:()=>({components:{MpIllustration:t},setup(){return{names:n}},template:`
      <div style="display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:32px 24px;padding:8px">
        <div v-for="n in names" :key="n" style="display:flex;flex-direction:column;align-items:center;gap:12px">
          <MpIllustration :name="n" :size="140" />
          <code style="font:12px/1 ui-monospace,monospace;color:var(--text-muted)">{{ n }}</code>
        </div>
      </div>
    `})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'no-results',
    size: 160
  },
  render: () => ({
    components: {
      MpIllustration
    },
    setup() {
      return {
        names
      };
    },
    template: \`
      <div style="display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:32px 24px;padding:8px">
        <div v-for="n in names" :key="n" style="display:flex;flex-direction:column;align-items:center;gap:12px">
          <MpIllustration :name="n" :size="140" />
          <code style="font:12px/1 ui-monospace,monospace;color:var(--text-muted)">{{ n }}</code>
        </div>
      </div>
    \`
  })
}`,...e.parameters?.docs?.source},description:{story:"Every illustration in the set at a common size, with labels.",...e.parameters?.docs?.description}}};const p=["Gallery"];export{e as Gallery,p as __namedExportsOrder,i as default};
