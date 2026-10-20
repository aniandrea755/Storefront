import{ej as u,er as r,et as l,eG as h}from"./iframe-DH-XNaA6.js";import{t as e}from"./foundationTokens-CjBC_I18.js";import"./preload-helper-PPVm8Dsz.js";const T={title:"Foundations/Typography",component:u,tags:["autodocs"],parameters:{docs:{description:{component:"\n### Overview\nEvery specimen on this page is styled programmatically from `src/design-tokens/generated/tokens.ts`\n(source: `tokens.json`, rebuilt via `npm run tokens:build`). The base font is **Inter**; mono is\nJetBrains Mono for token values and code.\n\n### The scale\n- **UI ramp:** `fontSize.*` — 10 · 11 · 12 · 13 · 14 · 15 · 16 · 18 · 20 · 24 · 28 · 32 · 40 · 48.\n  **The token name is the pixel value**, so there is no `md`-means-16-or-13 guesswork. **Body is\n  14px** — the one canonical body size. No fractional sizes exist in this system.\n- **Other primitives:** `fontWeight` (regular → heavy), `lineHeight`, `letterSpacing`.\n- **Text roles:** composite `text.*` — pageTitle, kpiValue, sectionTitle, body, caption,\n  eyebrow — the styles product pages should actually use. Every one resolves to a stop on the ramp.\n- **Display styles:** composite `display.{sm,md,lg,xl}` — a deliberately separate hero ramp\n  (32/44/60/80) for marketing surfaces and page heroes, never product chrome.\n\n### Rules\n- Use text roles (or Vuetify text utilities) before reaching for raw sizes.\n- **Never** write `font-size: 13px` in a component — write `var(--mp-fontSize-13)`.\n  DESIGN_AUDIT.md P1-6 records the snapping rules for the legacy fractional literals.\n        "}}}},g=e("mp_fontSize_"),x=e("mp_fontWeight_"),b=e("mp_lineHeight_"),S=e("mp_letterSpacing_");function y(c){const s=new Map;for(const{name:t,value:m}of c){const d=t.lastIndexOf("_"),p=t.slice(0,d),f=t.slice(d+1);s.has(p)||s.set(p,{}),s.get(p)[f]=m}return Array.from(s.entries()).map(([t,m])=>({name:t,css:m}))}const _=y(e("mp_display_")),k=y(e("mp_text_")),v={props:["entry"],setup(){return{mp_fontFamily_mono:l,mp_fontSize_11:r}},template:`
    <div
      class="text-medium-emphasis"
      :style="{ fontFamily: mp_fontFamily_mono, fontSize: mp_fontSize_11, minWidth: '220px' }"
    >{{ entry.name }} · {{ entry.value }}</div>
  `},n={render:()=>({components:{SpecimenLabel:v},setup(){return{fontSizes:g,mp_fontFamily_base:h,mp_fontFamily_mono:l}},template:`
      <div class="pa-6">
        <p class="text-overline text-medium-emphasis mb-2">Font families</p>
        <p :style="{ fontFamily: mp_fontFamily_base }" class="mb-1">base — {{ mp_fontFamily_base }}</p>
        <p :style="{ fontFamily: mp_fontFamily_mono }" class="mb-6">mono — {{ mp_fontFamily_mono }}</p>

        <p class="text-overline text-medium-emphasis mb-2">Font-size scale — fontSize.* (name = px value)</p>
        <div v-for="s in fontSizes" :key="s.token" class="d-flex align-center ga-4 mb-3">
          <SpecimenLabel :entry="s" />
          <div :style="{ fontSize: s.value, fontFamily: mp_fontFamily_base, lineHeight: 1.2, whiteSpace: 'nowrap' }">
            The quick brown fox
          </div>
        </div>
      </div>
    `})},i={render:()=>({components:{SpecimenLabel:v},setup(){return{fontWeights:x,letterSpacings:S,lineHeights:b}},template:`
      <div class="pa-6">
        <p class="text-overline text-medium-emphasis mb-2">Font weights — fontWeight.*</p>
        <div v-for="w in fontWeights" :key="w.token" class="d-flex align-center ga-4 mb-2">
          <SpecimenLabel :entry="w" />
          <div :style="{ fontWeight: w.value }">The quick brown fox jumps over the lazy dog</div>
        </div>

        <p class="text-overline text-medium-emphasis mb-2 mt-8">Letter spacing — letterSpacing.*</p>
        <div v-for="l in letterSpacings" :key="l.token" class="d-flex align-center ga-4 mb-2">
          <SpecimenLabel :entry="l" />
          <div :style="{ letterSpacing: l.value }">The quick brown fox jumps over the lazy dog</div>
        </div>

        <p class="text-overline text-medium-emphasis mb-2 mt-8">Line height — lineHeight.*</p>
        <div class="d-flex flex-wrap ga-6">
          <div v-for="l in lineHeights" :key="l.token" style="max-width: 240px;">
            <SpecimenLabel :entry="l" />
            <p :style="{ lineHeight: l.value }" class="mt-1">
              Merchants scan dashboards quickly. Line height controls how dense each block of copy feels on the page.
            </p>
          </div>
        </div>
      </div>
    `})},a={render:()=>({setup(){return{displayStyles:_,mp_fontFamily_mono:l,mp_fontSize_11:r}},template:`
      <div class="pa-6">
        <p class="text-overline text-medium-emphasis mb-4">Display styles — display.*</p>
        <div v-for="d in displayStyles" :key="d.name" class="mb-6">
          <div
            class="text-medium-emphasis mb-1"
            :style="{ fontFamily: mp_fontFamily_mono, fontSize: mp_fontSize_11 }"
          >display.{{ d.name }} · {{ d.css.fontSize }} / {{ d.css.lineHeight }} / {{ d.css.letterSpacing }} / {{ d.css.fontWeight }}</div>
          <div :style="d.css">Grow revenue</div>
        </div>
      </div>
    `})},o={render:()=>({setup(){return{textStyles:k,samples:{pageTitle:"Sales orders",kpiValue:"$48,920",sectionTitle:"Recent activity",body:"Body copy for cards, tables and forms.",caption:"Updated 4 minutes ago",eyebrow:"COMMERCE"},mp_fontFamily_mono:l,mp_fontSize_11:r}},template:`
      <div class="pa-6">
        <p class="text-overline text-medium-emphasis mb-4">Text roles — text.*</p>
        <div v-for="s in textStyles" :key="s.name" class="mb-5">
          <div
            class="text-medium-emphasis mb-1"
            :style="{ fontFamily: mp_fontFamily_mono, fontSize: mp_fontSize_11 }"
          >text.{{ s.name }} · {{ Object.entries(s.css).map(([k, v]) => k + ': ' + v).join(' · ') }}</div>
          <div :style="s.css">{{ samples[s.name] ?? 'Specimen' }}</div>
        </div>
      </div>
    `})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      SpecimenLabel
    },
    setup() {
      return {
        fontSizes,
        mp_fontFamily_base,
        mp_fontFamily_mono
      };
    },
    template: \`
      <div class="pa-6">
        <p class="text-overline text-medium-emphasis mb-2">Font families</p>
        <p :style="{ fontFamily: mp_fontFamily_base }" class="mb-1">base — {{ mp_fontFamily_base }}</p>
        <p :style="{ fontFamily: mp_fontFamily_mono }" class="mb-6">mono — {{ mp_fontFamily_mono }}</p>

        <p class="text-overline text-medium-emphasis mb-2">Font-size scale — fontSize.* (name = px value)</p>
        <div v-for="s in fontSizes" :key="s.token" class="d-flex align-center ga-4 mb-3">
          <SpecimenLabel :entry="s" />
          <div :style="{ fontSize: s.value, fontFamily: mp_fontFamily_base, lineHeight: 1.2, whiteSpace: 'nowrap' }">
            The quick brown fox
          </div>
        </div>
      </div>
    \`
  })
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      SpecimenLabel
    },
    setup() {
      return {
        fontWeights,
        letterSpacings,
        lineHeights
      };
    },
    template: \`
      <div class="pa-6">
        <p class="text-overline text-medium-emphasis mb-2">Font weights — fontWeight.*</p>
        <div v-for="w in fontWeights" :key="w.token" class="d-flex align-center ga-4 mb-2">
          <SpecimenLabel :entry="w" />
          <div :style="{ fontWeight: w.value }">The quick brown fox jumps over the lazy dog</div>
        </div>

        <p class="text-overline text-medium-emphasis mb-2 mt-8">Letter spacing — letterSpacing.*</p>
        <div v-for="l in letterSpacings" :key="l.token" class="d-flex align-center ga-4 mb-2">
          <SpecimenLabel :entry="l" />
          <div :style="{ letterSpacing: l.value }">The quick brown fox jumps over the lazy dog</div>
        </div>

        <p class="text-overline text-medium-emphasis mb-2 mt-8">Line height — lineHeight.*</p>
        <div class="d-flex flex-wrap ga-6">
          <div v-for="l in lineHeights" :key="l.token" style="max-width: 240px;">
            <SpecimenLabel :entry="l" />
            <p :style="{ lineHeight: l.value }" class="mt-1">
              Merchants scan dashboards quickly. Line height controls how dense each block of copy feels on the page.
            </p>
          </div>
        </div>
      </div>
    \`
  })
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => ({
    setup() {
      return {
        displayStyles,
        mp_fontFamily_mono,
        mp_fontSize_11
      };
    },
    template: \`
      <div class="pa-6">
        <p class="text-overline text-medium-emphasis mb-4">Display styles — display.*</p>
        <div v-for="d in displayStyles" :key="d.name" class="mb-6">
          <div
            class="text-medium-emphasis mb-1"
            :style="{ fontFamily: mp_fontFamily_mono, fontSize: mp_fontSize_11 }"
          >display.{{ d.name }} · {{ d.css.fontSize }} / {{ d.css.lineHeight }} / {{ d.css.letterSpacing }} / {{ d.css.fontWeight }}</div>
          <div :style="d.css">Grow revenue</div>
        </div>
      </div>
    \`
  })
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => ({
    setup() {
      const samples: Record<string, string> = {
        pageTitle: 'Sales orders',
        kpiValue: '$48,920',
        sectionTitle: 'Recent activity',
        body: 'Body copy for cards, tables and forms.',
        caption: 'Updated 4 minutes ago',
        eyebrow: 'COMMERCE'
      };
      return {
        textStyles,
        samples,
        mp_fontFamily_mono,
        mp_fontSize_11
      };
    },
    template: \`
      <div class="pa-6">
        <p class="text-overline text-medium-emphasis mb-4">Text roles — text.*</p>
        <div v-for="s in textStyles" :key="s.name" class="mb-5">
          <div
            class="text-medium-emphasis mb-1"
            :style="{ fontFamily: mp_fontFamily_mono, fontSize: mp_fontSize_11 }"
          >text.{{ s.name }} · {{ Object.entries(s.css).map(([k, v]) => k + ': ' + v).join(' · ') }}</div>
          <div :style="s.css">{{ samples[s.name] ?? 'Specimen' }}</div>
        </div>
      </div>
    \`
  })
}`,...o.parameters?.docs?.source}}};const L=["TypeScale","WeightsAndSpacing","DisplayStyles","SemanticStyles"];export{a as DisplayStyles,o as SemanticStyles,n as TypeScale,i as WeightsAndSpacing,L as __namedExportsOrder,T as default};
