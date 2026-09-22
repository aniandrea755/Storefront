import{r as v}from"./iframe-BqHSr5b_.js";import{M as r}from"./MerchProductCard-DBxX7Ger.js";import"./preload-helper-PPVm8Dsz.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";function m(t){return{image:`https://picsum.photos/seed/${t.id}/400/500`,price:129,qty:12,brand:"Verve",color:"Black",size:"M",category:"Women's Dresses",tags:[],popularity:62,createdAt:"2026-05-12T00:00:00.000Z",...t}}const e=m({id:"merch7",title:"Asymmetric Dress in Black",price:261,qty:15}),u=m({id:"merch2",title:"Boyfriend Jeans",price:76,compareAt:122,qty:8,brand:"Nordica",color:"Blue",category:"Denim",tags:["sale"]}),h=m({id:"merch1",title:"Azur Bracelet in Blue Azurite",price:39,qty:22,brand:"Atlas",color:"Blue",category:"Jewelry"}),g=m({id:"merch30",title:"Suede Ankle Boots",price:214,qty:5,brand:"Kinfolk",color:"Cream",category:"Shoes"}),P={title:"Product/Merchandising/MerchProductCard",component:r,tags:["autodocs"],parameters:{docs:{description:{component:"\n### Overview\n`MerchProductCard` is the product tile of the merchandising collection grids (pinning UI and\nrule previews). It shows image, title, price (sale price + strikethrough when `compareAt` is\nset), and stock qty. Hover or focus the card to reveal the select checkbox and pin button;\n`rank` renders the 1-based position badge on pinned cards, and `interactive: false` strips all\naffordances for read-only rule previews.\n\nIn these stories `toggle-pin` / `toggle-select` are wired to local state — click them to see\nthe pinned/selected chrome.\n        "}}},args:{product:e,pinned:!1,selected:!1,selectable:!0,interactive:!0},argTypes:{product:{control:"object",description:"`MerchProduct` — image, title, price and inventory state for the card."},pinned:{control:"boolean",description:"Shows the pinned treatment. Pinning is controlled: the card emits `togglePin` and never flips this itself."},rank:{control:"number",description:"1-based position badge, shown only on pinned cards to say where in the manual order this product sits."},selected:{control:"boolean",description:"Selection state for bulk actions. Controlled — the card emits `toggleSelect`."},selectable:{control:"boolean",description:"Whether the selection checkbox is offered at all. On by default."},interactive:{control:"boolean",description:"False renders a read-only card with no pin or select affordances — used for rule previews, where the card is an illustration rather than a control."}},render:t=>({components:{MerchProductCard:r},setup(){const x=v(t.pinned??!1),y=v(t.selected??!1);return{args:t,pinned:x,selected:y}},template:`
      <div style="width: 220px;">
        <MerchProductCard v-bind="args" :pinned="pinned" :selected="selected"
          @toggle-pin="pinned = !pinned" @toggle-select="selected = !selected" />
      </div>
    `})},s={},d={render:()=>({components:{MerchProductCard:r},setup:()=>({product:e}),template:`
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: var(--mp-space-16);">
        <div>
          <div class="text-caption text-medium-emphasis mb-2">interactive (default)</div>
          <MerchProductCard :product="product" />
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">pinned with rank</div>
          <MerchProductCard :product="product" pinned :rank="1" />
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">read-only — no pin/select affordances</div>
          <MerchProductCard :product="product" :interactive="false" />
        </div>
      </div>
    `}),args:{}},a={render:()=>({components:{MerchProductCard:r},setup:()=>({product:e}),template:`
      <div class="d-flex ga-6 align-start">
        <div style="width: 160px;">
          <div class="text-caption text-medium-emphasis mb-2">160px track</div>
          <MerchProductCard :product="product" />
        </div>
        <div style="width: 240px;">
          <div class="text-caption text-medium-emphasis mb-2">240px track</div>
          <MerchProductCard :product="product" />
        </div>
      </div>
    `}),args:{}},n={render:()=>({components:{MerchProductCard:r},setup:()=>({product:e,sale:u,empty:{...e,qty:0}}),template:`
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: var(--mp-space-16);">
        <div>
          <div class="text-caption text-medium-emphasis mb-2">default — hover to reveal actions</div>
          <MerchProductCard :product="product" />
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">selected</div>
          <MerchProductCard :product="product" selected />
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">on sale</div>
          <MerchProductCard :product="sale" />
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">out of stock</div>
          <MerchProductCard :product="empty" />
        </div>
      </div>
    `}),args:{}},i={args:{product:u}},l={args:{product:h,pinned:!0,rank:1}},o={args:{product:g,selected:!0}},c={args:{product:e,interactive:!1}},p={render:()=>({components:{MerchProductCard:r},setup:()=>({products:[h,u,e,g]}),template:`
      <div style="display: grid; grid-template-columns: repeat(4, 180px); gap: 12px;">
        <MerchProductCard v-for="(p, i) in products" :key="p.id" :product="p"
          :pinned="i < 2" :rank="i < 2 ? i + 1 : undefined" />
      </div>
    `})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source},description:{story:"Hover the card to reveal the select checkbox and pin button.",...s.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      MerchProductCard
    },
    setup: () => ({
      product: DRESS
    }),
    template: \`
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: var(--mp-space-16);">
        <div>
          <div class="text-caption text-medium-emphasis mb-2">interactive (default)</div>
          <MerchProductCard :product="product" />
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">pinned with rank</div>
          <MerchProductCard :product="product" pinned :rank="1" />
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">read-only — no pin/select affordances</div>
          <MerchProductCard :product="product" :interactive="false" />
        </div>
      </div>
    \`
  }),
  args: {} as never
}`,...d.parameters?.docs?.source},description:{story:"`compareAt` renders the sale price in error red with a strikethrough original.\nPinned, selectable, and read-only — the three structural modes.",...d.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      MerchProductCard
    },
    setup: () => ({
      product: DRESS
    }),
    template: \`
      <div class="d-flex ga-6 align-start">
        <div style="width: 160px;">
          <div class="text-caption text-medium-emphasis mb-2">160px track</div>
          <MerchProductCard :product="product" />
        </div>
        <div style="width: 240px;">
          <div class="text-caption text-medium-emphasis mb-2">240px track</div>
          <MerchProductCard :product="product" />
        </div>
      </div>
    \`
  }),
  args: {} as never
}`,...a.parameters?.docs?.source},description:{story:"There is no `size` prop — the card fills its grid track. This shows it at the\nnarrowest and widest tracks the merchandising grid actually uses.",...a.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      MerchProductCard
    },
    setup: () => ({
      product: DRESS,
      sale: SALE_JEANS,
      empty: {
        ...DRESS,
        qty: 0
      }
    }),
    template: \`
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: var(--mp-space-16);">
        <div>
          <div class="text-caption text-medium-emphasis mb-2">default — hover to reveal actions</div>
          <MerchProductCard :product="product" />
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">selected</div>
          <MerchProductCard :product="product" selected />
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">on sale</div>
          <MerchProductCard :product="sale" />
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">out of stock</div>
          <MerchProductCard :product="empty" />
        </div>
      </div>
    \`
  }),
  args: {} as never
}`,...n.parameters?.docs?.source},description:{story:"Selected, on sale, and out of stock. Hover a card to reveal the pin and checkbox.",...n.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    product: SALE_JEANS
  }
}`,...i.parameters?.docs?.source},description:{story:"Pinned to position 1 — pin button stays visible, rank badge bottom-left.",...i.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    product: BRACELET,
    pinned: true,
    rank: 1
  }
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    product: BOOTS,
    selected: true
  }
}`,...o.parameters?.docs?.source},description:{story:"Selected — primary border ring, checkbox stays visible.",...o.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    product: DRESS,
    interactive: false
  }
}`,...c.parameters?.docs?.source},description:{story:"`interactive: false` — read-only tile for merchandising rule previews.",...c.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      MerchProductCard
    },
    setup: () => ({
      products: [BRACELET, SALE_JEANS, DRESS, BOOTS]
    }),
    template: \`
      <div style="display: grid; grid-template-columns: repeat(4, 180px); gap: 12px;">
        <MerchProductCard v-for="(p, i) in products" :key="p.id" :product="p"
          :pinned="i < 2" :rank="i < 2 ? i + 1 : undefined" />
      </div>
    \`
  })
}`,...p.parameters?.docs?.source},description:{story:"How the collection grid composes cards: pinned ranks first, then organic results.",...p.parameters?.docs?.description}}};const C=["Default","Variants","Sizes","States","OnSale","PinnedWithRank","Selected","ReadOnly","CollectionGrid"];export{p as CollectionGrid,s as Default,i as OnSale,l as PinnedWithRank,c as ReadOnly,o as Selected,a as Sizes,n as States,d as Variants,C as __namedExportsOrder,P as default};
