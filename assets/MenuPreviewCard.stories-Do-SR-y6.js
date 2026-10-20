import{M as m}from"./MenuPreviewCard-D2rWsAOk.js";import{c as e}from"./useStoreNavigation-BM4UYS0v.js";import"./iframe-DH-XNaA6.js";import"./preload-helper-PPVm8Dsz.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";function c(){return{id:"story-main-menu",channelId:"story-channel",name:"Main menu",handle:"main-menu",status:"Active",updatedAt:"Jul 8, 2026",items:[e({title:"Home",linkType:"homepage"},"story-mi-home"),e({title:"Shop all",linkType:"collection-list"},"story-mi-shop"),e({title:"New arrivals",linkType:"collection",target:"col-new-arrivals"},"story-mi-new"),e({title:"Blog",linkType:"blog"},"story-mi-blog")]}}function p(){return{id:"story-footer-menu",channelId:"story-channel",name:"Footer menu",handle:"footer-menu",status:"Active",updatedAt:"Jul 2, 2026",items:[e({title:"Search",linkType:"search"},"story-mi-search"),e({title:"Privacy policy",linkType:"page",target:"page-privacy"},"story-mi-privacy"),e({title:"Contact",linkType:"url",target:"https://example.com/contact"},"story-mi-contact")]}}function u(){return{id:"story-empty-menu",channelId:"story-channel",name:"New menu",handle:"",status:"Inactive",updatedAt:"",items:[]}}const v={title:"Product/Sales Channels/MenuPreviewCard",component:m,tags:["autodocs"],parameters:{docs:{description:{component:"Live mini storefront preview used by the store Navigation menu editor. Auto-selects the header or footer variant from the menu handle/name; each link tooltips its resolved destination."}}},argTypes:{menu:{control:"object",description:'`StoreMenu` — `{ handle, name, items }`. Items render in order; an empty `title` falls back to "Untitled" and is styled as a placeholder. The card picks header vs footer layout automatically when `handle` or `name` contains "footer"; the toggle overrides it.'},storeName:{control:"text",description:'Store name shown in the simulated storefront chrome. Defaults to "Your store".'}}},s={args:{menu:c(),storeName:"Atlas Outfitters"}},o={args:{menu:p(),storeName:"Atlas Outfitters"}},i={args:{menu:u(),storeName:"Atlas Outfitters"}},r={render:t=>({components:{MenuPreviewCard:m},setup:()=>({args:t}),template:'<MenuPreviewCard v-bind="args" />'})},n={render:t=>({components:{MenuPreviewCard:m},setup:()=>({args:t}),template:'<MenuPreviewCard v-bind="args" />'})},a={render:t=>({components:{MenuPreviewCard:m},setup:()=>({args:t}),template:'<MenuPreviewCard v-bind="args" />'})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    menu: mainMenu(),
    storeName: 'Atlas Outfitters'
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    menu: footerMenu(),
    storeName: 'Atlas Outfitters'
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    menu: emptyMenu(),
    storeName: 'Atlas Outfitters'
  }
}`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      MenuPreviewCard
    },
    setup: () => ({
      args
    }),
    template: \`<MenuPreviewCard v-bind="args" />\`
  })
}`,...r.parameters?.docs?.source},description:{story:"One structure — a card previewing a storefront menu. Its variants are the menu positions: header and footer.",...r.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      MenuPreviewCard
    },
    setup: () => ({
      args
    }),
    template: \`<MenuPreviewCard v-bind="args" />\`
  })
}`,...n.parameters?.docs?.source},description:{story:"There is no `size` prop — the card spans its column. Its inset is `component.card.*`, so it sits on the same edge as every other card on the page.",...n.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      MenuPreviewCard
    },
    setup: () => ({
      args
    }),
    template: \`<MenuPreviewCard v-bind="args" />\`
  })
}`,...a.parameters?.docs?.source},description:{story:"Populated and empty — a menu with no items yet.",...a.parameters?.docs?.description}}};const M=["HeaderMenu","FooterMenu","EmptyMenu","Variants","Sizes","States"];export{i as EmptyMenu,o as FooterMenu,s as HeaderMenu,n as Sizes,a as States,r as Variants,M as __namedExportsOrder,v as default};
