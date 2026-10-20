import{D as a}from"./DashboardWidgetActionMenu-DQu_wH_Q.js";import"./iframe-DH-XNaA6.js";import"./preload-helper-PPVm8Dsz.js";import"./MpMenuItem-D9v8-M9a.js";import"./MpRowActionsMenu-B3n7Nt9u.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./MpSegmentedControl-BADxSX_o.js";import"./widgetSizePresets-CKImfI68.js";const h={title:"Product/Dashboards/DashboardWidgetActionMenu",component:a,tags:["autodocs"],parameters:{docs:{description:{component:"Unified kebab menu for every dashboard widget card: Expand, Edit, View report, a Size S/M/L/XL preset row (`currentSize` highlighted; none when the widget has a custom dragged size), and Remove. Click the kebab button to open the menu."}}},args:{widgetTitle:"Revenue Over Time",currentSize:"M"},argTypes:{widgetTitle:{control:"text",description:"Used for the aria-label on the activator button"},currentSize:{control:"select",options:["S","M","L","XL",null],description:"Highlighted size preset; null when the widget was dragged to a custom size"}},render:e=>({components:{DashboardWidgetActionMenu:a},setup:()=>({args:e}),template:`
      <div style="min-height:320px;display:flex;align-items:flex-start;justify-content:flex-end;max-width:480px;">
        <DashboardWidgetActionMenu v-bind="args" />
      </div>
    `})},i={},r={args:{currentSize:null}},t={render:e=>({components:{DashboardWidgetActionMenu:a},setup:()=>({args:e}),template:'<div class="d-flex ga-6"><DashboardWidgetActionMenu v-bind="args" /></div>'})},n={render:e=>({components:{DashboardWidgetActionMenu:a},setup:()=>({args:e}),template:`
      <div class="d-flex align-center ga-4">
        <DashboardWidgetActionMenu v-bind="args" />
        <div class="text-body-2 text-medium-emphasis">32px — --mp-component-widget-actionSize</div>
      </div>
    `})},s={render:e=>({components:{DashboardWidgetActionMenu:a},setup:()=>({args:e}),template:`
      <div class="d-flex ga-10">
        <div>
          <div class="text-caption text-medium-emphasis mb-2">resting</div>
          <DashboardWidgetActionMenu v-bind="args" />
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">hover / focus — tab to it</div>
          <DashboardWidgetActionMenu v-bind="args" />
        </div>
      </div>
    `})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    currentSize: null
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      DashboardWidgetActionMenu
    },
    setup: () => ({
      args
    }),
    template: \`<div class="d-flex ga-6"><DashboardWidgetActionMenu v-bind="args" /></div>\`
  })
}`,...t.parameters?.docs?.source},description:{story:"One structure — a kebab opening the widget's actions. Open it to see the rows; they are\n`component.listItem.*` like every other menu row in the system, so a widget menu and a table\nrow menu are the same height.",...t.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      DashboardWidgetActionMenu
    },
    setup: () => ({
      args
    }),
    template: \`
      <div class="d-flex align-center ga-4">
        <DashboardWidgetActionMenu v-bind="args" />
        <div class="text-body-2 text-medium-emphasis">32px — --mp-component-widget-actionSize</div>
      </div>
    \`
  })
}`,...n.parameters?.docs?.source},description:{story:`The trigger sits in the widget card's floating overlay and is sized by
\`component.widget.actionSize\` (32) — the same token the overlay's inset and gap come from,
and the same three tokens P4-2 derives a bespoke header's clearance from. It is deliberately
smaller than the 40px control baseline: it floats over content rather than sitting in a
control row.`,...n.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      DashboardWidgetActionMenu
    },
    setup: () => ({
      args
    }),
    template: \`
      <div class="d-flex ga-10">
        <div>
          <div class="text-caption text-medium-emphasis mb-2">resting</div>
          <DashboardWidgetActionMenu v-bind="args" />
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">hover / focus — tab to it</div>
          <DashboardWidgetActionMenu v-bind="args" />
        </div>
      </div>
    \`
  })
}`,...s.parameters?.docs?.source},description:{story:"Closed, open, and open with a destructive action separated by a divider.",...s.parameters?.docs?.description}}};const v=["Default","CustomSize","Variants","Sizes","States"];export{r as CustomSize,i as Default,n as Sizes,s as States,t as Variants,v as __namedExportsOrder,h as default};
