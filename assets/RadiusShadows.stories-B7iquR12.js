import{ej as n,er as m,et as p,ei as i,eD as v,eE as c,eF as u}from"./iframe-DH-XNaA6.js";import{t as s}from"./foundationTokens-CjBC_I18.js";import"./preload-helper-PPVm8Dsz.js";const _={title:"Foundations/Radius & Shadows",component:n,tags:["autodocs"],parameters:{docs:{description:{component:'\n### Overview\nCorner radii and elevation, rendered directly from `src/design-tokens/generated/tokens.ts`.\n\n### Radius\nOne scale, named by pixel value — `radius.4 · 8 · 10 · 12 · 16 · 20 · full`. It reads as a\nconcentric language: **16** for outer surfaces (cards, dialogs, drawers), **12** for anything\nnested inside one, **10** for controls and inputs, **8** for chips and menu items, **4** for\nmicro-marks, `full` for pills, buttons and avatars.\n\nReach for a role token when the system has already made the decision —\n`component.{button,chip,input,menu,card,dialog}.radius` alias into the scale and are wired into\nthe Vuetify global defaults, so a plain `v-btn` or `v-card` picks them up automatically.\n\n### Shadows\nThree softly-tinted levels only. Depth in this system comes from hairline borders + tint, not\nheavy drop shadows — cards are `flat border rounded="lg"` by default. Use `sm` for resting\ncards, `md` for hover/popovers, `lg` for modals and drawers. Never stack shadows.\n        '}}}},h=s("mp_radius_"),b=s("mp_component_").filter(o=>o.name.endsWith("radius")),x=s("mp_shadow_"),g=s("mp_motion_"),d={props:["entry"],setup(){return{mp_fontFamily_mono:p,mp_fontSize_11:m}},template:`
    <div
      class="text-medium-emphasis mt-2"
      :style="{ fontFamily: mp_fontFamily_mono, fontSize: mp_fontSize_11, wordBreak: 'break-all' }"
    >{{ entry.name }} · {{ entry.value }}</div>
  `},a={render:()=>({components:{TileLabel:d},setup(){return{radii:h}},template:`
      <div class="pa-6">
        <p class="text-overline text-medium-emphasis mb-4">Radius scale — radius.* (name = px value)</p>
        <div class="d-flex flex-wrap ga-4">
          <div v-for="r in radii" :key="r.token" style="width: 140px;">
            <div
              :style="{
                borderRadius: r.value,
                height: '96px',
                background: 'rgb(var(--v-theme-primary-container))',
                border: '1px solid rgb(var(--v-theme-outline-variant))',
              }"
            />
            <TileLabel :entry="r" />
          </div>
        </div>
      </div>
    `})},r={render:()=>({components:{TileLabel:d},setup(){return{componentRadii:b}},template:`
      <div class="pa-6">
        <p class="text-overline text-medium-emphasis mb-4">Component radius — component.*.radius.* (wired into Vuetify defaults)</p>
        <div class="d-flex flex-wrap ga-4">
          <div v-for="r in componentRadii" :key="r.token" style="width: 180px;">
            <div
              :style="{
                borderRadius: r.value,
                height: '72px',
                background: 'rgb(var(--v-theme-surface))',
                border: '1px solid rgb(var(--v-theme-outline))',
              }"
            />
            <TileLabel :entry="r" />
          </div>
        </div>
      </div>
    `})},t={render:()=>({components:{TileLabel:d},setup(){return{lightShadows:x.filter(l=>!l.name.startsWith("dark_")),darkShadowTokens:[{name:"dark_sm",value:v,token:"mp_shadow_dark_sm"},{name:"dark_md",value:c,token:"mp_shadow_dark_md"},{name:"dark_lg",value:u,token:"mp_shadow_dark_lg"}],motion:g,mp_radius_12:i}},template:`
      <div class="pa-6" style="background: rgb(var(--v-theme-background));">
        <p class="text-overline text-medium-emphasis mb-4">Light elevation — shadow.sm / md / lg</p>
        <div class="d-flex flex-wrap ga-6 mb-8">
          <div v-for="s in lightShadows" :key="s.token" style="width: 220px;">
            <div
              :style="{
                boxShadow: s.value,
                height: '96px',
                borderRadius: mp_radius_12,
                background: 'rgb(var(--v-theme-surface))',
                border: '1px solid rgb(var(--v-theme-outline-variant))',
              }"
            />
            <TileLabel :entry="s" />
          </div>
        </div>
        <p class="text-overline text-medium-emphasis mb-4">Dark elevation — shadow.dark.* (generated tokens)</p>
        <div class="d-flex flex-wrap ga-6 mb-8">
          <div v-for="s in darkShadowTokens" :key="s.token" style="width: 220px;">
            <div
              :style="{
                boxShadow: s.value,
                height: '96px',
                borderRadius: mp_radius_12,
                background: 'var(--surface-primary)',
                border: '1px solid var(--border-subtle)',
              }"
            />
            <TileLabel :entry="s" />
          </div>
        </div>
        <p class="text-overline text-medium-emphasis mb-2">Motion — motion.*</p>
        <TileLabel v-for="t in motion" :key="t.token" :entry="t" />
      </div>
    `})},e={parameters:{controls:{disable:!0}},render:()=>({setup(){return{mp_radius_12:i}},template:`
      <div class="pa-6">
        <p class="text-overline text-medium-emphasis mb-4">Semantic elevation — --elevation-* aliases</p>
        <div class="d-flex flex-wrap ga-6">
          <div style="width: 220px;">
            <div
              :style="{
                boxShadow: 'var(--elevation-raised)',
                background: 'var(--surface-raised)',
                border: '1px solid var(--border-subtle)',
                borderRadius: mp_radius_12,
                height: '96px',
              }"
            />
            <p class="text-caption text-medium-emphasis mt-2 font-weight-medium">L2 raised</p>
            <code class="text-caption">--elevation-raised</code>
          </div>
          <div style="width: 220px;">
            <div
              :style="{
                boxShadow: 'var(--elevation-overlay)',
                background: 'var(--surface-overlay)',
                border: '1px solid var(--border-default)',
                borderRadius: mp_radius_12,
                height: '96px',
              }"
            />
            <p class="text-caption text-medium-emphasis mt-2 font-weight-medium">L3 overlay</p>
            <code class="text-caption">--elevation-overlay</code>
          </div>
          <div style="width: 220px;">
            <div
              :style="{
                boxShadow: 'var(--elevation-modal)',
                background: 'var(--surface-overlay)',
                border: '1px solid var(--border-default)',
                borderRadius: mp_radius_12,
                height: '96px',
              }"
            />
            <p class="text-caption text-medium-emphasis mt-2 font-weight-medium">L4 modal</p>
            <code class="text-caption">--elevation-modal</code>
          </div>
        </div>
      </div>
    `})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      TileLabel
    },
    setup() {
      return {
        radii
      };
    },
    template: \`
      <div class="pa-6">
        <p class="text-overline text-medium-emphasis mb-4">Radius scale — radius.* (name = px value)</p>
        <div class="d-flex flex-wrap ga-4">
          <div v-for="r in radii" :key="r.token" style="width: 140px;">
            <div
              :style="{
                borderRadius: r.value,
                height: '96px',
                background: 'rgb(var(--v-theme-primary-container))',
                border: '1px solid rgb(var(--v-theme-outline-variant))',
              }"
            />
            <TileLabel :entry="r" />
          </div>
        </div>
      </div>
    \`
  })
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      TileLabel
    },
    setup() {
      return {
        componentRadii
      };
    },
    template: \`
      <div class="pa-6">
        <p class="text-overline text-medium-emphasis mb-4">Component radius — component.*.radius.* (wired into Vuetify defaults)</p>
        <div class="d-flex flex-wrap ga-4">
          <div v-for="r in componentRadii" :key="r.token" style="width: 180px;">
            <div
              :style="{
                borderRadius: r.value,
                height: '72px',
                background: 'rgb(var(--v-theme-surface))',
                border: '1px solid rgb(var(--v-theme-outline))',
              }"
            />
            <TileLabel :entry="r" />
          </div>
        </div>
      </div>
    \`
  })
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      TileLabel
    },
    setup() {
      const lightShadows = shadows.filter(s => !s.name.startsWith('dark_'));
      const darkShadowTokens = [{
        name: 'dark_sm',
        value: mp_shadow_dark_sm,
        token: 'mp_shadow_dark_sm'
      }, {
        name: 'dark_md',
        value: mp_shadow_dark_md,
        token: 'mp_shadow_dark_md'
      }, {
        name: 'dark_lg',
        value: mp_shadow_dark_lg,
        token: 'mp_shadow_dark_lg'
      }];
      return {
        lightShadows,
        darkShadowTokens,
        motion,
        mp_radius_12
      };
    },
    template: \`
      <div class="pa-6" style="background: rgb(var(--v-theme-background));">
        <p class="text-overline text-medium-emphasis mb-4">Light elevation — shadow.sm / md / lg</p>
        <div class="d-flex flex-wrap ga-6 mb-8">
          <div v-for="s in lightShadows" :key="s.token" style="width: 220px;">
            <div
              :style="{
                boxShadow: s.value,
                height: '96px',
                borderRadius: mp_radius_12,
                background: 'rgb(var(--v-theme-surface))',
                border: '1px solid rgb(var(--v-theme-outline-variant))',
              }"
            />
            <TileLabel :entry="s" />
          </div>
        </div>
        <p class="text-overline text-medium-emphasis mb-4">Dark elevation — shadow.dark.* (generated tokens)</p>
        <div class="d-flex flex-wrap ga-6 mb-8">
          <div v-for="s in darkShadowTokens" :key="s.token" style="width: 220px;">
            <div
              :style="{
                boxShadow: s.value,
                height: '96px',
                borderRadius: mp_radius_12,
                background: 'var(--surface-primary)',
                border: '1px solid var(--border-subtle)',
              }"
            />
            <TileLabel :entry="s" />
          </div>
        </div>
        <p class="text-overline text-medium-emphasis mb-2">Motion — motion.*</p>
        <TileLabel v-for="t in motion" :key="t.token" :entry="t" />
      </div>
    \`
  })
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => ({
    setup() {
      return {
        mp_radius_12
      };
    },
    template: \`
      <div class="pa-6">
        <p class="text-overline text-medium-emphasis mb-4">Semantic elevation — --elevation-* aliases</p>
        <div class="d-flex flex-wrap ga-6">
          <div style="width: 220px;">
            <div
              :style="{
                boxShadow: 'var(--elevation-raised)',
                background: 'var(--surface-raised)',
                border: '1px solid var(--border-subtle)',
                borderRadius: mp_radius_12,
                height: '96px',
              }"
            />
            <p class="text-caption text-medium-emphasis mt-2 font-weight-medium">L2 raised</p>
            <code class="text-caption">--elevation-raised</code>
          </div>
          <div style="width: 220px;">
            <div
              :style="{
                boxShadow: 'var(--elevation-overlay)',
                background: 'var(--surface-overlay)',
                border: '1px solid var(--border-default)',
                borderRadius: mp_radius_12,
                height: '96px',
              }"
            />
            <p class="text-caption text-medium-emphasis mt-2 font-weight-medium">L3 overlay</p>
            <code class="text-caption">--elevation-overlay</code>
          </div>
          <div style="width: 220px;">
            <div
              :style="{
                boxShadow: 'var(--elevation-modal)',
                background: 'var(--surface-overlay)',
                border: '1px solid var(--border-default)',
                borderRadius: mp_radius_12,
                height: '96px',
              }"
            />
            <p class="text-caption text-medium-emphasis mt-2 font-weight-medium">L4 modal</p>
            <code class="text-caption">--elevation-modal</code>
          </div>
        </div>
      </div>
    \`
  })
}`,...e.parameters?.docs?.source},description:{story:"Semantic elevation aliases paired with borders — never shadow without a boundary.",...e.parameters?.docs?.description}}};const S=["RadiusScale","ComponentRadius","Shadows","ElevationAliases"];export{r as ComponentRadius,e as ElevationAliases,a as RadiusScale,t as Shadows,S as __namedExportsOrder,_ as default};
