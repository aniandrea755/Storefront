import{ej as k,ek as u,el as x,em as b,en as g,eo as v,ep as y,ee as _,eq as w,er as S,es as R,et as P,eu as A,ev as C,ei as L,ew as B,ef as D}from"./iframe-DH-XNaA6.js";import{t as e}from"./foundationTokens-CjBC_I18.js";import"./preload-helper-PPVm8Dsz.js";const K={title:"Foundations/Colors",component:k,tags:["autodocs"],parameters:{docs:{description:{component:'\n### Overview\nEvery swatch on this page is rendered programmatically from `src/design-tokens/generated/tokens.ts`,\nwhich is generated from `src/design-tokens/tokens.json` (`npm run tokens:build`). If a value looks\nwrong here, fix it in `tokens.json` — never in a component.\n\n### How to consume\n- **In components:** use Vuetify theme channels — `rgb(var(--v-theme-primary))`, `color="success"`,\n  `bg-surface` — so light/dark theming is automatic. The themes in `src/plugins/maropostTheme.ts` are\n  built from these same tokens.\n- **In CSS:** the generated `variables.css` exposes each token as `--mp-color-*`.\n- **Never** hardcode hex values in components; the token name is the API.\n\n### Sections\nLight theme roles · Dark theme roles · **semantic aliases** (surface, text, border, accent, feedback) ·\nprimitive scales (blue / neutral / sidebar) · chart series.\n\nSemantic aliases (`--surface-*`, `--text-*`, `--border-*`, `--accent-*`) resolve through\n`mp-theme-aliases.css` and switch with the Storybook **Theme** and **Accent** toolbars — the same\npath as the app. Never hardcode hex in components; use aliases or Vuetify theme channels.\n        '}}}},G=e("mp_color_light_"),T=e("mp_color_dark_"),F=e("mp_color_blue_"),I=e("mp_color_neutral_"),M=e("mp_color_sidebar_"),z=e("mp_color_chart_light_"),W=e("mp_color_chart_dark_"),m={props:["swatches","heading","panelBg","panelText","panelMuted","panelBorder"],setup(){return{mp_radius_12:L,mp_space_12:C,mp_space_24:A,mp_fontFamily_mono:P,mp_fontSize_12:R,mp_fontSize_11:S}},template:`
    <section
      :style="{
        background: panelBg,
        color: panelText,
        padding: mp_space_24,
        borderRadius: mp_radius_12,
        border: '1px solid ' + panelBorder,
        marginBottom: mp_space_24,
      }"
    >
      <p class="text-overline" :style="{ color: panelMuted, marginBottom: mp_space_12 }">{{ heading }}</p>
      <div :style="{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: mp_space_12 }">
        <div v-for="s in swatches" :key="s.token">
          <div
            :style="{
              background: s.value,
              height: '56px',
              borderRadius: mp_radius_12,
              border: '1px solid ' + panelBorder,
            }"
          />
          <div :style="{ fontSize: mp_fontSize_12, fontWeight: 600, marginTop: '6px', wordBreak: 'break-all' }">{{ s.name }}</div>
          <div :style="{ fontFamily: mp_fontFamily_mono, fontSize: mp_fontSize_11, color: panelMuted, wordBreak: 'break-all' }">{{ s.value }}</div>
        </div>
      </div>
    </section>
  `},h={panelBg:w,panelText:_,panelMuted:y,panelBorder:v},f={panelBg:g,panelText:b,panelMuted:x,panelBorder:u},t={render:()=>({components:{SwatchGrid:m},setup(){return{lightColors:G,lightPanel:h}},template:`<SwatchGrid :heading="'Light theme — color.light.* (' + lightColors.length + ' roles)'" :swatches="lightColors" v-bind="lightPanel" />`})},s={render:()=>({components:{SwatchGrid:m},setup(){return{darkColors:T,darkPanel:f}},template:'<SwatchGrid heading="Dark theme — color.dark.* (rendered on the dark background token)" :swatches="darkColors" v-bind="darkPanel" />'})},o={render:()=>({components:{SwatchGrid:m},setup(){return{blueScale:F,neutralScale:I,sidebarColors:M,lightPanel:h}},template:`
      <div>
        <SwatchGrid heading="Blue scale — color.blue.*" :swatches="blueScale" v-bind="lightPanel" />
        <SwatchGrid heading="Neutral scale — color.neutral.*" :swatches="neutralScale" v-bind="lightPanel" />
        <SwatchGrid heading="Sidebar palette — color.sidebar.*" :swatches="sidebarColors" v-bind="lightPanel" />
      </div>
    `})},n={render:()=>({components:{SwatchGrid:m},setup(){return{chartLight:z,chartDark:W,lightPanel:h,darkPanel:f}},template:`
      <div>
        <SwatchGrid heading="Chart series — light theme order" :swatches="chartLight" v-bind="lightPanel" />
        <SwatchGrid heading="Chart series — dark theme order" :swatches="chartDark" v-bind="darkPanel" />
      </div>
    `})},r={props:["rows","heading"],template:`
    <section class="mb-6">
      <p class="text-overline text-medium-emphasis mb-3">{{ heading }}</p>
      <div style="display: grid; gap: 12px;">
        <div
          v-for="row in rows"
          :key="row.alias"
          class="d-flex align-center justify-space-between pa-3"
          :style="{
            background: row.bg ?? 'var(--surface-primary)',
            color: row.fg ?? 'var(--text-primary)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '8px',
          }"
        >
          <div>
            <div class="text-body-2 font-weight-medium">{{ row.label }}</div>
            <code class="text-caption text-medium-emphasis">{{ row.alias }}</code>
          </div>
          <div
            v-if="row.swatch"
            :style="{
              width: '48px',
              height: '32px',
              borderRadius: '6px',
              background: row.swatch,
              border: '1px solid var(--border-default)',
            }"
          />
        </div>
      </div>
    </section>
  `},j=[{label:"L0 — canvas / sunken wells",alias:"--surface-canvas",swatch:"var(--surface-canvas)"},{label:"L1 — cards, tables, AppBar",alias:"--surface-primary",swatch:"var(--surface-primary)"},{label:"L1 nested — inset groups",alias:"--surface-secondary",swatch:"var(--surface-secondary)"},{label:"L2 — raised / sticky / bulk bar",alias:"--surface-raised",swatch:"var(--surface-raised)"},{label:"L3/L4 — menus, modals, drawers",alias:"--surface-overlay",swatch:"var(--surface-overlay)"},{label:"Interactive hover",alias:"--surface-interactive-hover",swatch:"var(--surface-interactive-hover)"},{label:"Interactive selected",alias:"--surface-interactive-selected",swatch:"var(--surface-interactive-selected)"},{label:"Scrim / backdrop",alias:"--scrim-overlay",swatch:"var(--scrim-overlay)"}],N=[{label:"Primary body / headings",alias:"--text-primary",fg:"var(--text-primary)"},{label:"Secondary / meta",alias:"--text-secondary",fg:"var(--text-secondary)"},{label:"Muted / helper",alias:"--text-muted",fg:"var(--text-muted)"},{label:"Disabled",alias:"--text-disabled",fg:"var(--text-disabled)"}],O=[{label:"Subtle / hairline",alias:"--border-subtle",swatch:"var(--border-subtle)"},{label:"Default control / card",alias:"--border-default",swatch:"var(--border-default)"},{label:"Strong boundary",alias:"--border-strong",swatch:"var(--border-strong)"},{label:"Focus ring (opaque accent)",alias:"--focus-ring",swatch:"var(--focus-ring)"}],V=[{label:"Accent default",alias:"--accent-default",swatch:"var(--accent-default)"},{label:"Accent hover",alias:"--accent-hover",swatch:"var(--accent-hover)"},{label:"Accent active",alias:"--accent-active",swatch:"var(--accent-active)"},{label:"Selected background",alias:"--accent-selected-bg",swatch:"var(--accent-selected-bg)"},{label:"Subtle background",alias:"--accent-subtle-bg",swatch:"var(--accent-subtle-bg)"},{label:"On accent (foreground)",alias:"--accent-on",swatch:"var(--accent-on)"},{label:"Container / on-container",alias:"--accent-container",swatch:"var(--accent-container)"}],q=[{label:"Success (--pos)",alias:"--pos",swatch:"rgb(var(--v-theme-success))"},{label:"Success container",alias:"--pos-soft",swatch:"rgb(var(--v-theme-success-container))"},{label:"Danger (--neg)",alias:"--neg",swatch:"rgb(var(--v-theme-error))"},{label:"Danger container",alias:"--neg-soft",swatch:"rgb(var(--v-theme-error-container))"},{label:"Warning fill",alias:"rgb(var(--v-theme-warning))",swatch:"rgb(var(--v-theme-warning))"},{label:"Info fill",alias:"rgb(var(--v-theme-info))",swatch:"rgb(var(--v-theme-info))"}],c={parameters:{controls:{disable:!0}},render:()=>({components:{AliasRow:r},setup(){return{surfaceRows:j}},template:'<AliasRow heading="Surface hierarchy — active theme" :rows="surfaceRows" />'})},i={parameters:{controls:{disable:!0}},render:()=>({components:{AliasRow:r},setup(){return{textRows:N,iconRows:[{label:"Primary icon",alias:"--icon-primary",fg:"var(--icon-primary)"},{label:"Secondary icon",alias:"--icon-secondary",fg:"var(--icon-secondary)"},{label:"Disabled icon",alias:"--icon-disabled",fg:"var(--icon-disabled)"}]}},template:`
      <div>
        <AliasRow heading="Text hierarchy — active theme" :rows="textRows" />
        <AliasRow heading="Icon hierarchy — active theme" :rows="iconRows" />
      </div>
    `})},l={parameters:{controls:{disable:!0}},render:()=>({components:{AliasRow:r},setup(){return{borderRows:O}},template:'<AliasRow heading="Borders and focus — active theme" :rows="borderRows" />'})},d={parameters:{controls:{disable:!0}},render:()=>({components:{AliasRow:r},setup(){return{accentRows:V}},template:`
      <div>
        <p class="text-caption text-medium-emphasis mb-4">
          Use the <strong>Accent</strong> toolbar to preview blue, gray, or purple. Default cyan omits
          <code>data-accent</code> — same as the app.
        </p>
        <AliasRow heading="Accent roles — active accent + theme" :rows="accentRows" />
      </div>
    `})},p={parameters:{controls:{disable:!0}},render:()=>({components:{AliasRow:r},setup(){return{feedbackRows:q}},template:'<AliasRow heading="Feedback colours — active theme" :rows="feedbackRows" />'})},a={parameters:{controls:{disable:!0}},render:()=>({setup(){return{mp_color_light_background:w,mp_color_light_surface:D,mp_color_light_textPrimary:_,mp_color_light_border:v,mp_color_dark_background:g,mp_color_dark_surface:B,mp_color_dark_textPrimary:b,mp_color_dark_border:u}},template:`
      <div class="d-flex flex-wrap ga-4">
        <div
          class="pa-4 flex-grow-1"
          :style="{
            background: mp_color_light_background,
            color: mp_color_light_textPrimary,
            border: '1px solid ' + mp_color_light_border,
            borderRadius: '12px',
            minWidth: '280px',
          }"
        >
          <p class="text-overline mb-2">Light canvas</p>
          <div
            class="pa-3"
            :style="{
              background: mp_color_light_surface,
              border: '1px solid ' + mp_color_light_border,
              borderRadius: '8px',
            }"
          >
            L1 card surface
          </div>
        </div>
        <div
          class="pa-4 flex-grow-1"
          :style="{
            background: mp_color_dark_background,
            color: mp_color_dark_textPrimary,
            border: '1px solid ' + mp_color_dark_border,
            borderRadius: '12px',
            minWidth: '280px',
          }"
        >
          <p class="text-overline mb-2">Dark canvas</p>
          <div
            class="pa-3"
            :style="{
              background: mp_color_dark_surface,
              border: '1px solid ' + mp_color_dark_border,
              borderRadius: '8px',
            }"
          >
            L1 card surface
          </div>
        </div>
      </div>
    `})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      SwatchGrid
    },
    setup() {
      return {
        lightColors,
        lightPanel
      };
    },
    template: \`<SwatchGrid :heading="'Light theme — color.light.* (' + lightColors.length + ' roles)'" :swatches="lightColors" v-bind="lightPanel" />\`
  })
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      SwatchGrid
    },
    setup() {
      return {
        darkColors,
        darkPanel
      };
    },
    template: \`<SwatchGrid heading="Dark theme — color.dark.* (rendered on the dark background token)" :swatches="darkColors" v-bind="darkPanel" />\`
  })
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      SwatchGrid
    },
    setup() {
      return {
        blueScale,
        neutralScale,
        sidebarColors,
        lightPanel
      };
    },
    template: \`
      <div>
        <SwatchGrid heading="Blue scale — color.blue.*" :swatches="blueScale" v-bind="lightPanel" />
        <SwatchGrid heading="Neutral scale — color.neutral.*" :swatches="neutralScale" v-bind="lightPanel" />
        <SwatchGrid heading="Sidebar palette — color.sidebar.*" :swatches="sidebarColors" v-bind="lightPanel" />
      </div>
    \`
  })
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      SwatchGrid
    },
    setup() {
      return {
        chartLight,
        chartDark,
        lightPanel,
        darkPanel
      };
    },
    template: \`
      <div>
        <SwatchGrid heading="Chart series — light theme order" :swatches="chartLight" v-bind="lightPanel" />
        <SwatchGrid heading="Chart series — dark theme order" :swatches="chartDark" v-bind="darkPanel" />
      </div>
    \`
  })
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => ({
    components: {
      AliasRow
    },
    setup() {
      return {
        surfaceRows
      };
    },
    template: \`<AliasRow heading="Surface hierarchy — active theme" :rows="surfaceRows" />\`
  })
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => ({
    components: {
      AliasRow
    },
    setup() {
      const iconRows = [{
        label: 'Primary icon',
        alias: '--icon-primary',
        fg: 'var(--icon-primary)'
      }, {
        label: 'Secondary icon',
        alias: '--icon-secondary',
        fg: 'var(--icon-secondary)'
      }, {
        label: 'Disabled icon',
        alias: '--icon-disabled',
        fg: 'var(--icon-disabled)'
      }];
      return {
        textRows,
        iconRows
      };
    },
    template: \`
      <div>
        <AliasRow heading="Text hierarchy — active theme" :rows="textRows" />
        <AliasRow heading="Icon hierarchy — active theme" :rows="iconRows" />
      </div>
    \`
  })
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => ({
    components: {
      AliasRow
    },
    setup() {
      return {
        borderRows
      };
    },
    template: \`<AliasRow heading="Borders and focus — active theme" :rows="borderRows" />\`
  })
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => ({
    components: {
      AliasRow
    },
    setup() {
      return {
        accentRows
      };
    },
    template: \`
      <div>
        <p class="text-caption text-medium-emphasis mb-4">
          Use the <strong>Accent</strong> toolbar to preview blue, gray, or purple. Default cyan omits
          <code>data-accent</code> — same as the app.
        </p>
        <AliasRow heading="Accent roles — active accent + theme" :rows="accentRows" />
      </div>
    \`
  })
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => ({
    components: {
      AliasRow
    },
    setup() {
      return {
        feedbackRows
      };
    },
    template: \`<AliasRow heading="Feedback colours — active theme" :rows="feedbackRows" />\`
  })
}`,...p.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => ({
    setup() {
      return {
        mp_color_light_background,
        mp_color_light_surface,
        mp_color_light_textPrimary,
        mp_color_light_border,
        mp_color_dark_background,
        mp_color_dark_surface,
        mp_color_dark_textPrimary,
        mp_color_dark_border
      };
    },
    template: \`
      <div class="d-flex flex-wrap ga-4">
        <div
          class="pa-4 flex-grow-1"
          :style="{
            background: mp_color_light_background,
            color: mp_color_light_textPrimary,
            border: '1px solid ' + mp_color_light_border,
            borderRadius: '12px',
            minWidth: '280px',
          }"
        >
          <p class="text-overline mb-2">Light canvas</p>
          <div
            class="pa-3"
            :style="{
              background: mp_color_light_surface,
              border: '1px solid ' + mp_color_light_border,
              borderRadius: '8px',
            }"
          >
            L1 card surface
          </div>
        </div>
        <div
          class="pa-4 flex-grow-1"
          :style="{
            background: mp_color_dark_background,
            color: mp_color_dark_textPrimary,
            border: '1px solid ' + mp_color_dark_border,
            borderRadius: '12px',
            minWidth: '280px',
          }"
        >
          <p class="text-overline mb-2">Dark canvas</p>
          <div
            class="pa-3"
            :style="{
              background: mp_color_dark_surface,
              border: '1px solid ' + mp_color_dark_border,
              borderRadius: '8px',
            }"
          >
            L1 card surface
          </div>
        </div>
      </div>
    \`
  })
}`,...a.parameters?.docs?.source},description:{story:"Side-by-side light and dark surface tiers using generated token literals (not Storybook-only).",...a.parameters?.docs?.description}}};const Q=["LightTheme","DarkTheme","PrimitiveScales","ChartSeries","SemanticSurfaces","SemanticTextAndIcons","SemanticBordersAndFocus","SemanticAccents","SemanticFeedback","LightDarkSurfaceComparison"];export{n as ChartSeries,s as DarkTheme,a as LightDarkSurfaceComparison,t as LightTheme,o as PrimitiveScales,d as SemanticAccents,l as SemanticBordersAndFocus,p as SemanticFeedback,c as SemanticSurfaces,i as SemanticTextAndIcons,Q as __namedExportsOrder,K as default};
