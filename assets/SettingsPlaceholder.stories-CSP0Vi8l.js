import{S as o}from"./SettingsPlaceholder-DK4VuI4r.js";import"./iframe-DH-XNaA6.js";import"./preload-helper-PPVm8Dsz.js";import"./MpPageHeader-CCaHAp6V.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./SettingsSection-D7MpxWnj.js";const m={title:"Patterns/Settings/SettingsPlaceholder",component:o,tags:["autodocs"],parameters:{docs:{description:{component:'\n### Overview\n`SettingsPlaceholder` is the "coming soon" page body used by not-yet-built Settings routes\n(16 of them at last count). It renders a compact `MpPageHeader` plus a `SettingsSection`\nwith a fixed explanation, so future deep links resolve instead of 404ing.\n        '}}},args:{title:"DNS Setup",description:"Verify sending domains and manage DKIM, SPF, and tracking CNAMEs."},argTypes:{title:{control:"text",description:'Name of the settings area that does not exist yet. Used both as the page heading and inside the coming-soon copy, so pass the area name alone (\\"Tax & rounding\\"), not a sentence.'},description:{control:"text"}},render:i=>({components:{SettingsPlaceholder:o},setup:()=>({args:i}),template:`
      <div style="max-width: 880px;">
        <SettingsPlaceholder v-bind="args" />
      </div>
    `})},n={},e={render:()=>({components:{SettingsPlaceholder:o},template:`
      <div class="d-flex flex-column ga-6">
        <div>
          <div class="text-caption text-medium-emphasis mb-2">with description</div>
          <SettingsPlaceholder title="Webhooks" description="Send events to your own endpoints." />
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">title only</div>
          <SettingsPlaceholder title="Webhooks" />
        </div>
      </div>
    `}),args:{}},t={render:()=>({components:{SettingsPlaceholder:o},template:'<SettingsPlaceholder title="Webhooks" description="Send events to your own endpoints." />'}),args:{}},s={args:{title:"Audit Log",description:void 0}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      SettingsPlaceholder
    },
    template: \`
      <div class="d-flex flex-column ga-6">
        <div>
          <div class="text-caption text-medium-emphasis mb-2">with description</div>
          <SettingsPlaceholder title="Webhooks" description="Send events to your own endpoints." />
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">title only</div>
          <SettingsPlaceholder title="Webhooks" />
        </div>
      </div>
    \`
  }),
  args: {} as never
}`,...e.parameters?.docs?.source},description:{story:"With and without the supporting description line.",...e.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      SettingsPlaceholder
    },
    template: \`<SettingsPlaceholder title="Webhooks" description="Send events to your own endpoints." />\`
  }),
  args: {} as never
}`,...t.parameters?.docs?.source},description:{story:'One state — "planned, not built yet". This is deliberately a left-aligned inline notice,\nnot a centred empty state: the navigation exists so deep links keep working, and the copy\nis an aside rather than the page\'s whole content. If the surface exists but has no data,\nthat is `MpEmptyState`; if it failed to load, `MpErrorState`.',...t.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Audit Log',
    description: undefined
  }
}`,...s.parameters?.docs?.source}}};const g=["Default","Variants","States","WithoutDescription"];export{n as Default,t as States,e as Variants,s as WithoutDescription,g as __namedExportsOrder,m as default};
