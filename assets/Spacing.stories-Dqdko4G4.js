import{ej as o,er as t,et as s,eC as i}from"./iframe-DH-XNaA6.js";import{t as r}from"./foundationTokens-CjBC_I18.js";import"./preload-helper-PPVm8Dsz.js";const c={title:"Foundations/Spacing",component:o,tags:["autodocs"],parameters:{docs:{description:{component:"\n### Overview\n`space.*` is the one spacing scale, and **the token name is the pixel value** — `space.12`\n*is* 12px. It runs on a 4px grid from 16px up, with 2px half-steps (2 · 6 · 10 · 14) below it;\nthat sub-grid is a recorded decision (DESIGN_AUDIT.md P1-5), not an accident. Every bar below is\nrendered from `src/design-tokens/generated/tokens.ts`, so its width **is** the token value.\n\n### How to consume\n- In templates, prefer Vuetify utilities (`pa-4`, `ma-2`, `ga-3`) — same 4px grid\n  (`pa-1` = 4px = `space.4`).\n- In CSS, use `var(--mp-space-*)` (SCSS: `$mp-space-*`). Never a raw px literal.\n- Layout constants (e.g. drawer width 480px) come from `layout.*`, never re-typed.\n        "}}}},n=r("mp_space_"),m=r("mp_layout_"),e={render:()=>({setup(){return{spacing:n,mp_radius_4:i,mp_fontFamily_mono:s,mp_fontSize_11:t}},template:`
      <div class="pa-6">
        <p class="text-overline text-medium-emphasis mb-4">Spacing scale — space.* (name = px value)</p>
        <div v-for="s in spacing" :key="s.token" class="d-flex align-center ga-4 mb-2">
          <div
            class="text-medium-emphasis"
            :style="{ fontFamily: mp_fontFamily_mono, fontSize: mp_fontSize_11, minWidth: '160px' }"
          >{{ s.name }} · {{ s.value }}</div>
          <div
            :style="{
              width: s.value,
              height: '20px',
              background: 'rgb(var(--v-theme-primary))',
              borderRadius: mp_radius_4,
            }"
          />
        </div>
      </div>
    `})},a={render:()=>({setup(){return{layout:m,mp_radius_4:i,mp_fontFamily_mono:s,mp_fontSize_11:t}},template:`
      <div class="pa-6">
        <p class="text-overline text-medium-emphasis mb-4">Layout dimensions — layout.*</p>
        <div v-for="l in layout" :key="l.token" class="mb-4">
          <div
            class="text-medium-emphasis mb-1"
            :style="{ fontFamily: mp_fontFamily_mono, fontSize: mp_fontSize_11 }"
          >{{ l.name }} · {{ l.value }}</div>
          <div
            :style="{
              width: l.value,
              maxWidth: '100%',
              height: '28px',
              background: 'rgb(var(--v-theme-primary-container))',
              border: '1px solid rgb(var(--v-theme-outline-variant))',
              borderRadius: mp_radius_4,
            }"
          />
        </div>
        <p class="text-caption text-medium-emphasis mt-2">
          Bars render at the real token width (capped at the container edge).
        </p>
      </div>
    `})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => ({
    setup() {
      return {
        spacing,
        mp_radius_4,
        mp_fontFamily_mono,
        mp_fontSize_11
      };
    },
    template: \`
      <div class="pa-6">
        <p class="text-overline text-medium-emphasis mb-4">Spacing scale — space.* (name = px value)</p>
        <div v-for="s in spacing" :key="s.token" class="d-flex align-center ga-4 mb-2">
          <div
            class="text-medium-emphasis"
            :style="{ fontFamily: mp_fontFamily_mono, fontSize: mp_fontSize_11, minWidth: '160px' }"
          >{{ s.name }} · {{ s.value }}</div>
          <div
            :style="{
              width: s.value,
              height: '20px',
              background: 'rgb(var(--v-theme-primary))',
              borderRadius: mp_radius_4,
            }"
          />
        </div>
      </div>
    \`
  })
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => ({
    setup() {
      return {
        layout,
        mp_radius_4,
        mp_fontFamily_mono,
        mp_fontSize_11
      };
    },
    template: \`
      <div class="pa-6">
        <p class="text-overline text-medium-emphasis mb-4">Layout dimensions — layout.*</p>
        <div v-for="l in layout" :key="l.token" class="mb-4">
          <div
            class="text-medium-emphasis mb-1"
            :style="{ fontFamily: mp_fontFamily_mono, fontSize: mp_fontSize_11 }"
          >{{ l.name }} · {{ l.value }}</div>
          <div
            :style="{
              width: l.value,
              maxWidth: '100%',
              height: '28px',
              background: 'rgb(var(--v-theme-primary-container))',
              border: '1px solid rgb(var(--v-theme-outline-variant))',
              borderRadius: mp_radius_4,
            }"
          />
        </div>
        <p class="text-caption text-medium-emphasis mt-2">
          Bars render at the real token width (capped at the container edge).
        </p>
      </div>
    \`
  })
}`,...a.parameters?.docs?.source}}};const u=["SpacingScale","LayoutDimensions"];export{a as LayoutDimensions,e as SpacingScale,u as __namedExportsOrder,c as default};
