import{S as e}from"./SettingsSection-D7MpxWnj.js";import"./iframe-DH-XNaA6.js";import"./preload-helper-PPVm8Dsz.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const v={title:"Patterns/Settings/SettingsSection",component:e,tags:["autodocs"],parameters:{docs:{description:{component:"\n### Overview\n`SettingsSection` is the bordered content card used on every Settings page. It renders an\noptional head (title + description + right-aligned `#actions` slot) above the default-slot body.\nSettings pages stack several sections vertically with `gap` spacing; `compact` tightens the\npadding for short utility sections.\n        "}}},args:{title:"Sender defaults",description:"The from-name and reply-to address used when a campaign does not set its own.",compact:!1},argTypes:{title:{control:"text",description:"Section heading. Omit it for an unheaded section that is only a bordered body — the head row is skipped entirely when there is no title, description or `#actions` slot."},description:{control:"text"},compact:{control:"boolean",description:"Tightens the section's vertical rhythm. Use it when several sections stack inside one card and the standard spacing reads as loose."}},render:t=>({components:{SettingsSection:e},setup:()=>({args:t}),template:`
      <div style="max-width: 720px;">
        <SettingsSection v-bind="args">
          <v-row dense>
            <v-col cols="12" sm="6">
              <v-text-field label="From name" model-value="Maison Nord" hide-details />
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field label="Reply-to address" model-value="hello@maisonnord.com" hide-details />
            </v-col>
          </v-row>
        </SettingsSection>
      </div>
    `})},a={},i={render:()=>({components:{SettingsSection:e},template:`
      <div class="d-flex flex-column ga-6">
        <div>
          <div class="text-caption text-medium-emphasis mb-2">with title + description</div>
          <SettingsSection title="Sender identity" description="The name and address your campaigns send from.">
            <div class="text-body-2">Section body</div>
          </SettingsSection>
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">body only — no header</div>
          <SettingsSection><div class="text-body-2">Section body</div></SettingsSection>
        </div>
      </div>
    `}),args:{}},n={render:()=>({components:{SettingsSection:e},template:`
      <div class="d-flex flex-column ga-6">
        <div>
          <div class="text-caption text-medium-emphasis mb-2">default</div>
          <SettingsSection title="Sender identity" description="The name and address your campaigns send from.">
            <div class="text-body-2">Section body</div>
          </SettingsSection>
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">compact</div>
          <SettingsSection compact title="Sender identity" description="The name and address your campaigns send from.">
            <div class="text-body-2">Section body</div>
          </SettingsSection>
        </div>
      </div>
    `}),args:{}},s={render:()=>({components:{SettingsSection:e},template:`
      <div class="d-flex flex-column ga-6">
        <div>
          <div class="text-caption text-medium-emphasis mb-2">no actions</div>
          <SettingsSection title="Sender identity"><div class="text-body-2">Section body</div></SettingsSection>
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">with actions</div>
          <SettingsSection title="Sender identity">
            <template #actions><v-btn size="small" variant="text" class="text-none">Edit</v-btn></template>
            <div class="text-body-2">Section body</div>
          </SettingsSection>
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">form stack — spacing from component.field.groupGap</div>
          <SettingsSection title="Sender identity" description="Fields sit on one shared rhythm.">
            <div class="stack">
              <v-text-field variant="outlined" label="From name" model-value="Maropost" hide-details="auto" />
              <v-text-field variant="outlined" label="From address" model-value="hello@maropost.com" hint="Must be a verified domain." persistent-hint />
            </div>
          </SettingsSection>
        </div>
      </div>
    `}),args:{}},d={args:{title:"API keys",description:"Keys grant full access to this account over the REST API."},render:t=>({components:{SettingsSection:e},setup:()=>({args:t}),template:`
      <div style="max-width: 720px;">
        <SettingsSection v-bind="args">
          <template #actions>
            <v-btn size="small" variant="outlined" prepend-icon="plus">Create key</v-btn>
          </template>
          <div class="d-flex align-center justify-space-between py-2">
            <div>
              <div class="text-body-2 font-weight-medium">Production key</div>
              <div class="text-caption text-medium-emphasis">mk_live_••••••••4f2a · created May 12, 2026</div>
            </div>
            <v-btn size="small" variant="text" icon="copy" aria-label="Copy key" />
          </div>
        </SettingsSection>
      </div>
    `})},o={args:{title:"Time zone",description:"Used for scheduling sends and report date ranges.",compact:!0},render:t=>({components:{SettingsSection:e},setup:()=>({args:t}),template:`
      <div style="max-width: 720px;">
        <SettingsSection v-bind="args">
          <v-select label="Time zone" :items="['(GMT-05:00) Eastern Time', '(GMT-08:00) Pacific Time']"
            model-value="(GMT-05:00) Eastern Time" hide-details style="max-width: 320px;" />
        </SettingsSection>
      </div>
    `})},c={args:{title:void 0,description:void 0},render:()=>({components:{SettingsSection:e},template:`
      <div style="max-width: 720px;">
        <SettingsSection>
          <div class="d-flex align-start gap-3">
            <v-icon size="20" color="primary" class="mt-1">shield-check</v-icon>
            <div>
              <div class="text-body-2 font-weight-medium">Two-factor authentication is on</div>
              <div class="text-caption text-medium-emphasis">All users in this account sign in with an authenticator app.</div>
            </div>
          </div>
        </SettingsSection>
      </div>
    `})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      SettingsSection
    },
    template: \`
      <div class="d-flex flex-column ga-6">
        <div>
          <div class="text-caption text-medium-emphasis mb-2">with title + description</div>
          <SettingsSection title="Sender identity" description="The name and address your campaigns send from.">
            <div class="text-body-2">Section body</div>
          </SettingsSection>
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">body only — no header</div>
          <SettingsSection><div class="text-body-2">Section body</div></SettingsSection>
        </div>
      </div>
    \`
  }),
  args: {} as never
}`,...i.parameters?.docs?.source},description:{story:"With and without a header — the structural axis.",...i.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      SettingsSection
    },
    template: \`
      <div class="d-flex flex-column ga-6">
        <div>
          <div class="text-caption text-medium-emphasis mb-2">default</div>
          <SettingsSection title="Sender identity" description="The name and address your campaigns send from.">
            <div class="text-body-2">Section body</div>
          </SettingsSection>
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">compact</div>
          <SettingsSection compact title="Sender identity" description="The name and address your campaigns send from.">
            <div class="text-body-2">Section body</div>
          </SettingsSection>
        </div>
      </div>
    \`
  }),
  args: {} as never
}`,...n.parameters?.docs?.source},description:{story:"The density ramp.",...n.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      SettingsSection
    },
    template: \`
      <div class="d-flex flex-column ga-6">
        <div>
          <div class="text-caption text-medium-emphasis mb-2">no actions</div>
          <SettingsSection title="Sender identity"><div class="text-body-2">Section body</div></SettingsSection>
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">with actions</div>
          <SettingsSection title="Sender identity">
            <template #actions><v-btn size="small" variant="text" class="text-none">Edit</v-btn></template>
            <div class="text-body-2">Section body</div>
          </SettingsSection>
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">form stack — spacing from component.field.groupGap</div>
          <SettingsSection title="Sender identity" description="Fields sit on one shared rhythm.">
            <div class="stack">
              <v-text-field variant="outlined" label="From name" model-value="Maropost" hide-details="auto" />
              <v-text-field variant="outlined" label="From address" model-value="hello@maropost.com" hint="Must be a verified domain." persistent-hint />
            </div>
          </SettingsSection>
        </div>
      </div>
    \`
  }),
  args: {} as never
}`,...s.parameters?.docs?.source},description:{story:"With and without header actions, and with a form stack using the field.groupGap token.",...s.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'API keys',
    description: 'Keys grant full access to this account over the REST API.'
  },
  render: args => ({
    components: {
      SettingsSection
    },
    setup: () => ({
      args
    }),
    template: \`
      <div style="max-width: 720px;">
        <SettingsSection v-bind="args">
          <template #actions>
            <v-btn size="small" variant="outlined" prepend-icon="plus">Create key</v-btn>
          </template>
          <div class="d-flex align-center justify-space-between py-2">
            <div>
              <div class="text-body-2 font-weight-medium">Production key</div>
              <div class="text-caption text-medium-emphasis">mk_live_••••••••4f2a · created May 12, 2026</div>
            </div>
            <v-btn size="small" variant="text" icon="copy" aria-label="Copy key" />
          </div>
        </SettingsSection>
      </div>
    \`
  })
}`,...d.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Time zone',
    description: 'Used for scheduling sends and report date ranges.',
    compact: true
  },
  render: args => ({
    components: {
      SettingsSection
    },
    setup: () => ({
      args
    }),
    template: \`
      <div style="max-width: 720px;">
        <SettingsSection v-bind="args">
          <v-select label="Time zone" :items="['(GMT-05:00) Eastern Time', '(GMT-08:00) Pacific Time']"
            model-value="(GMT-05:00) Eastern Time" hide-details style="max-width: 320px;" />
        </SettingsSection>
      </div>
    \`
  })
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    title: undefined,
    description: undefined
  },
  render: () => ({
    components: {
      SettingsSection
    },
    template: \`
      <div style="max-width: 720px;">
        <SettingsSection>
          <div class="d-flex align-start gap-3">
            <v-icon size="20" color="primary" class="mt-1">shield-check</v-icon>
            <div>
              <div class="text-body-2 font-weight-medium">Two-factor authentication is on</div>
              <div class="text-caption text-medium-emphasis">All users in this account sign in with an authenticator app.</div>
            </div>
          </div>
        </SettingsSection>
      </div>
    \`
  })
}`,...c.parameters?.docs?.source}}};const S=["Default","Variants","Sizes","States","WithActions","Compact","BodyOnly"];export{c as BodyOnly,o as Compact,a as Default,n as Sizes,s as States,i as Variants,d as WithActions,S as __namedExportsOrder,v as default};
