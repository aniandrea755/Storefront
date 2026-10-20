import{M as t}from"./MpStatusChip-BgtNpj8f.js";import"./iframe-DH-XNaA6.js";import"./preload-helper-PPVm8Dsz.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const M={title:"Atoms/MpStatusChip",component:t,tags:["autodocs"],parameters:{docs:{description:{component:`
### Overview
The \`MpStatusChip\` displays the current state of an entity. It automatically applies appropriate Maropost semantic colors based on the text string matching known statuses in the business logic (lookup is case-insensitive).

**Use when:** rendering a workflow state in a table cell, card, or detail view — orders, fulfillments, payments, campaigns, contacts, tickets, coupons, priorities, connections.

**Don't use when:** tagging or categorizing (use \`v-chip\`), toggling a state (use \`MpStatusToggle\`), or identifying a data source (use \`MpSourceCloudChip\`).

### Usage
\`\`\`html
<template #item.status="{ item }">
  <MpStatusChip :status="item.status" type="order" />
</template>
<template #item.fulfillment="{ item }">
  <MpStatusChip :status="item.fulfillment" type="fulfillment" show-icon />
</template>
\`\`\`

### 🟢 Do's
- **Do** always provide the specific \`type\` (e.g., 'order', 'fulfillment', 'campaign'). This is crucial because a 'Pending' status might mean different things (and need different colors) across different domains.
- **Do** use \`size="sm"\` when placing chips inside Data Tables to conserve vertical space.
- **Do** use the \`showIcon\` prop explicitly for Fulfillment statuses, where the visual icon adds critical scanning speed for warehouse teams.

### 🔴 Don'ts
- **Don't** manually override colors via CSS or props. The component is deliberately rigid to enforce platform-wide color consistency for specific status terms.
- **Don't** use this component for generic tags (like "VIP Customer" or "New"). Use standard \`v-chip\` for general tagging; \`MpStatusChip\` is strictly for workflow states.

### 💡 Best Practices
- **Fallback:** If a status string is passed that the component doesn't recognize for the given \`type\`, it falls back to the \`general\` map, then to a neutral gray layout.
- **Consistency:** If you are adding a new business status to the backend, ensure you also update the \`MpStatusChip\` logic maps to support it.

### A11y
- **Provides:** the status is always visible as text, so color is never the sole carrier of meaning; tonal variants use theme tokens for contrast; the optional icon inherits \`currentColor\` and is decorative (\`v-icon\` is \`aria-hidden\`).
- **Consumer must:** pass human-readable status strings (the chip renders \`status\` verbatim) and keep the chip non-interactive — wire row actions elsewhere.
- **Gaps:** none found at baseline; the chip renders as a static element with no focusable parts.
        `}}},argTypes:{status:{control:"text",description:"Status text, rendered verbatim. Matched case-insensitively against the tone map for the given type."},type:{control:"select",options:["order","fulfillment","payment","campaign","contact","ticket","coupon","priority","connection","general"],description:"Business domain used to resolve the status → color mapping. Unknown statuses fall back to the general map, then neutral."},size:{control:"select",options:["sm","md","lg"],description:'Chip size on the shared sm|md|lg ramp (P2-1). Heights come from component.chip.height.* — 20 / 24 / 32. Use "sm" inside data tables.'},variant:{control:"select",options:["flat","tonal","outlined"],description:"Chip fill style. Tonal (default) is the platform standard."},showIcon:{control:"boolean",description:"Prepend the mapped status icon (available for fulfillment, campaign, ticket, order, payment, priority, connection)."}}},p={args:{status:"Processing",type:"order"}},e={render:()=>({components:{MpStatusChip:t},setup:()=>({variants:["tonal","flat","outlined"]}),template:`
      <div class="d-flex flex-column ga-6">
        <div v-for="v in variants" :key="v">
          <div class="text-caption text-medium-emphasis mb-2">{{ v }}</div>
          <div class="d-flex flex-wrap ga-2 align-center">
            <MpStatusChip status="Completed" type="order" :variant="v" />
            <MpStatusChip status="On hold" type="order" :variant="v" />
            <MpStatusChip status="Cancelled" type="order" :variant="v" />
            <MpStatusChip status="Archived" type="order" :variant="v" />
          </div>
        </div>
      </div>
    `}),args:{}},s={render:()=>({components:{MpStatusChip:t},setup:()=>({sizes:["sm","md","lg"]}),template:`
      <div class="d-flex flex-wrap ga-4 align-center">
        <div v-for="size in sizes" :key="size">
          <div class="text-caption text-medium-emphasis mb-2">{{ size }}</div>
          <MpStatusChip status="Shipped" type="fulfillment" :size="size" show-icon />
        </div>
      </div>
    `}),args:{}},a={render:()=>({components:{MpStatusChip:t},template:`
      <div class="d-flex flex-column ga-6">
        <div>
          <div class="text-caption text-medium-emphasis mb-2">all five tones</div>
          <div class="d-flex flex-wrap ga-2 align-center">
            <MpStatusChip status="Processing" type="order" />
            <MpStatusChip status="Completed" type="order" />
            <MpStatusChip status="On hold" type="order" />
            <MpStatusChip status="Cancelled" type="order" />
            <MpStatusChip status="Archived" type="order" />
          </div>
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">show-icon</div>
          <div class="d-flex flex-wrap ga-2 align-center">
            <MpStatusChip status="Shipped" type="fulfillment" show-icon />
            <MpStatusChip status="Cancelled" type="fulfillment" show-icon />
          </div>
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">unmapped status — falls back to the neutral tone rather than throwing</div>
          <MpStatusChip status="Something we've never seen" type="order" />
        </div>
      </div>
    `}),args:{}},r={args:{status:"Shipped",type:"fulfillment",showIcon:!0}},o={render:()=>({components:{MpStatusChip:t},template:`
      <div class="d-flex flex-wrap ga-2 align-center">
        <MpStatusChip status="Pending" type="order" />
        <MpStatusChip status="Processing" type="order" />
        <MpStatusChip status="Completed" type="order" />
        <MpStatusChip status="Cancelled" type="order" />
        <MpStatusChip status="Refunded" type="order" />
        <MpStatusChip status="On Hold" type="order" />
      </div>
    `}),args:{}},l={render:()=>({components:{MpStatusChip:t},template:`
      <div class="d-flex flex-wrap ga-2 align-center">
        <MpStatusChip status="Critical" type="priority" showIcon />
        <MpStatusChip status="High" type="priority" showIcon />
        <MpStatusChip status="Medium" type="priority" showIcon />
        <MpStatusChip status="Low" type="priority" showIcon />
      </div>
    `}),args:{}},d={render:()=>({components:{MpStatusChip:t},template:`
      <div class="d-flex flex-wrap ga-2 align-center">
        <MpStatusChip status="Connected" type="connection" showIcon />
        <MpStatusChip status="Disconnected" type="connection" showIcon />
        <MpStatusChip status="Needs Setup" type="connection" showIcon />
        <MpStatusChip status="Sync Issue" type="connection" showIcon />
        <MpStatusChip status="Auth Expired" type="connection" showIcon />
      </div>
    `}),args:{}},c={render:()=>({components:{MpStatusChip:t},template:`
      <div class="d-flex flex-wrap ga-2 align-center">
        <MpStatusChip status="Unapproved" type="fulfillment" showIcon />
        <MpStatusChip status="Not Ready" type="fulfillment" showIcon />
        <MpStatusChip status="Ready For Fulfillment" type="fulfillment" showIcon />
        <MpStatusChip status="Shipped" type="fulfillment" showIcon />
        <MpStatusChip status="Return Requested" type="fulfillment" showIcon />
        <MpStatusChip status="Cancelled" type="fulfillment" showIcon />
      </div>
    `}),args:{}},u={render:()=>({components:{MpStatusChip:t},template:`
      <div class="d-flex flex-wrap ga-2 align-center">
        <MpStatusChip status="Not Paid" type="payment" />
        <MpStatusChip status="Paid" type="payment" />
        <MpStatusChip status="Requires Action" type="payment" />
      </div>
    `}),args:{}},m={render:()=>({components:{MpStatusChip:t},template:`
      <div class="d-flex flex-wrap ga-2 align-center">
        <MpStatusChip status="Draft" type="campaign" />
        <MpStatusChip status="Scheduled" type="campaign" />
        <MpStatusChip status="Sending" type="campaign" />
        <MpStatusChip status="Sent" type="campaign" />
        <MpStatusChip status="Stopped" type="campaign" />
      </div>
    `}),args:{}},h={render:()=>({components:{MpStatusChip:t},template:`
      <div>
        <h4 class="text-subtitle-2 mb-2">Order</h4>
        <div class="d-flex flex-wrap gap-2 mb-4">
          <MpStatusChip status="Processing" type="order" />
          <MpStatusChip status="Completed" type="order" />
          <MpStatusChip status="Cancelled" type="order" />
        </div>
        <h4 class="text-subtitle-2 mb-2">Fulfillment</h4>
        <div class="d-flex flex-wrap gap-2 mb-4">
          <MpStatusChip status="Shipped" type="fulfillment" showIcon />
          <MpStatusChip status="Ready For Fulfillment" type="fulfillment" showIcon />
          <MpStatusChip status="Unapproved" type="fulfillment" showIcon />
        </div>
        <h4 class="text-subtitle-2 mb-2">Payment</h4>
        <div class="d-flex flex-wrap gap-2 mb-4">
          <MpStatusChip status="Paid" type="payment" />
          <MpStatusChip status="Not Paid" type="payment" />
          <MpStatusChip status="Requires Action" type="payment" />
        </div>
        <h4 class="text-subtitle-2 mb-2">Campaign</h4>
        <div class="d-flex flex-wrap gap-2 mb-4">
          <MpStatusChip status="Draft" type="campaign" />
          <MpStatusChip status="Sent" type="campaign" />
          <MpStatusChip status="Stopped" type="campaign" />
        </div>
        <h4 class="text-subtitle-2 mb-2">Ticket</h4>
        <div class="d-flex flex-wrap gap-2 mb-4">
          <MpStatusChip status="Open" type="ticket" />
          <MpStatusChip status="In Progress" type="ticket" />
          <MpStatusChip status="Resolved" type="ticket" />
          <MpStatusChip status="Closed" type="ticket" />
        </div>
      </div>
    `}),args:{}},n={render:()=>({components:{MpStatusChip:t},setup(){return{matrix:{order:["Processing","Completed","Cancelled","Refunded","On Hold","Archived"],fulfillment:["Unapproved","Not Ready","Ready For Fulfillment","Shipped","Return Requested","Cancelled","Fulfilled","Unfulfilled","Partial","Awaiting Fulfillment","Picking","Packed","Ready To Ship"],payment:["Paid","Refunded","Voided","Pending","Failed","Authorised","partially_refunded"],campaign:["Sent","Scheduled","Draft","Sending","Active","Paused","Completed","Failed","Archived","Aborted"],contact:["Active","Subscribed","Unsubscribed","Bounced","Pending","Confirmed","Suspended","Suppressed","Spam","Hard Bounce"],ticket:["Open","In Progress","Awaiting Reply","Resolved","Closed","On Hold","Escalated","New"],coupon:["Active","Expired","Scheduled","Used","Disabled"],priority:["Critical","Urgent","High","Medium","Normal","Low"],connection:["Connected","Disconnected","Needs Setup","Sync Issue","Auth Expired","Syncing","Error","Healthy"],general:["Active","Inactive","Pending","Error","Published","Draft","Archived","Enabled","Disabled","Failed","Running","Paused","Completed","Connected","Disconnected","Needs Setup","Sync Issue","Auth Expired","Healthy","Needs Attention","Incomplete","Open","Closed","Online","Offline","Syncing"]}}},template:`
      <div>
        <div v-for="(statuses, type) in matrix" :key="type" class="mb-4">
          <h4 class="text-subtitle-2 text-capitalize mb-2">{{ type }}</h4>
          <div class="d-flex flex-wrap ga-2 align-center">
            <MpStatusChip v-for="s in statuses" :key="s" :status="s" :type="type" />
          </div>
        </div>
        <h4 class="text-subtitle-2 mb-2">Unknown status → neutral fallback</h4>
        <div class="d-flex flex-wrap ga-2 align-center">
          <MpStatusChip status="Some Custom Status" type="order" />
        </div>
      </div>
    `}),args:{}},i={render:()=>({components:{MpStatusChip:t},setup(){return{sizes:["sm","md","lg"],variants:["tonal","flat","outlined"]}},template:`
      <div>
        <div v-for="variant in variants" :key="variant" class="mb-4">
          <h4 class="text-subtitle-2 text-capitalize mb-2">{{ variant }}</h4>
          <div class="d-flex flex-wrap ga-2 align-center">
            <MpStatusChip
              v-for="size in sizes"
              :key="size"
              status="Shipped"
              type="fulfillment"
              :size="size"
              :variant="variant"
              showIcon
            />
          </div>
        </div>
      </div>
    `}),args:{}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'Processing',
    type: 'order'
  }
}`,...p.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      MpStatusChip
    },
    setup: () => ({
      variants: ['tonal', 'flat', 'outlined']
    }),
    template: \`
      <div class="d-flex flex-column ga-6">
        <div v-for="v in variants" :key="v">
          <div class="text-caption text-medium-emphasis mb-2">{{ v }}</div>
          <div class="d-flex flex-wrap ga-2 align-center">
            <MpStatusChip status="Completed" type="order" :variant="v" />
            <MpStatusChip status="On hold" type="order" :variant="v" />
            <MpStatusChip status="Cancelled" type="order" :variant="v" />
            <MpStatusChip status="Archived" type="order" :variant="v" />
          </div>
        </div>
      </div>
    \`
  }),
  args: {} as never
}`,...e.parameters?.docs?.source},description:{story:"The three fill treatments. `tonal` is the default — a whisper of colour, not a block of it.",...e.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      MpStatusChip
    },
    setup: () => ({
      sizes: ['sm', 'md', 'lg']
    }),
    template: \`
      <div class="d-flex flex-wrap ga-4 align-center">
        <div v-for="size in sizes" :key="size">
          <div class="text-caption text-medium-emphasis mb-2">{{ size }}</div>
          <MpStatusChip status="Shipped" type="fulfillment" :size="size" show-icon />
        </div>
      </div>
    \`
  }),
  args: {} as any
}`,...s.parameters?.docs?.source},description:{story:"All three sizes on the shared sm|md|lg ramp.",...s.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      MpStatusChip
    },
    template: \`
      <div class="d-flex flex-column ga-6">
        <div>
          <div class="text-caption text-medium-emphasis mb-2">all five tones</div>
          <div class="d-flex flex-wrap ga-2 align-center">
            <MpStatusChip status="Processing" type="order" />
            <MpStatusChip status="Completed" type="order" />
            <MpStatusChip status="On hold" type="order" />
            <MpStatusChip status="Cancelled" type="order" />
            <MpStatusChip status="Archived" type="order" />
          </div>
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">show-icon</div>
          <div class="d-flex flex-wrap ga-2 align-center">
            <MpStatusChip status="Shipped" type="fulfillment" show-icon />
            <MpStatusChip status="Cancelled" type="fulfillment" show-icon />
          </div>
        </div>
        <div>
          <div class="text-caption text-medium-emphasis mb-2">unmapped status — falls back to the neutral tone rather than throwing</div>
          <MpStatusChip status="Something we've never seen" type="order" />
        </div>
      </div>
    \`
  }),
  args: {} as never
}`,...a.parameters?.docs?.source},description:{story:"Every tone the chip maps to, plus the icon on/off state and an unmapped status falling back to neutral.",...a.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'Shipped',
    type: 'fulfillment',
    showIcon: true
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      MpStatusChip
    },
    template: \`
      <div class="d-flex flex-wrap ga-2 align-center">
        <MpStatusChip status="Pending" type="order" />
        <MpStatusChip status="Processing" type="order" />
        <MpStatusChip status="Completed" type="order" />
        <MpStatusChip status="Cancelled" type="order" />
        <MpStatusChip status="Refunded" type="order" />
        <MpStatusChip status="On Hold" type="order" />
      </div>
    \`
  }),
  args: {} as any
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      MpStatusChip
    },
    template: \`
      <div class="d-flex flex-wrap ga-2 align-center">
        <MpStatusChip status="Critical" type="priority" showIcon />
        <MpStatusChip status="High" type="priority" showIcon />
        <MpStatusChip status="Medium" type="priority" showIcon />
        <MpStatusChip status="Low" type="priority" showIcon />
      </div>
    \`
  }),
  args: {} as any
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      MpStatusChip
    },
    template: \`
      <div class="d-flex flex-wrap ga-2 align-center">
        <MpStatusChip status="Connected" type="connection" showIcon />
        <MpStatusChip status="Disconnected" type="connection" showIcon />
        <MpStatusChip status="Needs Setup" type="connection" showIcon />
        <MpStatusChip status="Sync Issue" type="connection" showIcon />
        <MpStatusChip status="Auth Expired" type="connection" showIcon />
      </div>
    \`
  }),
  args: {} as any
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      MpStatusChip
    },
    template: \`
      <div class="d-flex flex-wrap ga-2 align-center">
        <MpStatusChip status="Unapproved" type="fulfillment" showIcon />
        <MpStatusChip status="Not Ready" type="fulfillment" showIcon />
        <MpStatusChip status="Ready For Fulfillment" type="fulfillment" showIcon />
        <MpStatusChip status="Shipped" type="fulfillment" showIcon />
        <MpStatusChip status="Return Requested" type="fulfillment" showIcon />
        <MpStatusChip status="Cancelled" type="fulfillment" showIcon />
      </div>
    \`
  }),
  args: {} as any
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      MpStatusChip
    },
    template: \`
      <div class="d-flex flex-wrap ga-2 align-center">
        <MpStatusChip status="Not Paid" type="payment" />
        <MpStatusChip status="Paid" type="payment" />
        <MpStatusChip status="Requires Action" type="payment" />
      </div>
    \`
  }),
  args: {} as any
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      MpStatusChip
    },
    template: \`
      <div class="d-flex flex-wrap ga-2 align-center">
        <MpStatusChip status="Draft" type="campaign" />
        <MpStatusChip status="Scheduled" type="campaign" />
        <MpStatusChip status="Sending" type="campaign" />
        <MpStatusChip status="Sent" type="campaign" />
        <MpStatusChip status="Stopped" type="campaign" />
      </div>
    \`
  }),
  args: {} as any
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      MpStatusChip
    },
    template: \`
      <div>
        <h4 class="text-subtitle-2 mb-2">Order</h4>
        <div class="d-flex flex-wrap gap-2 mb-4">
          <MpStatusChip status="Processing" type="order" />
          <MpStatusChip status="Completed" type="order" />
          <MpStatusChip status="Cancelled" type="order" />
        </div>
        <h4 class="text-subtitle-2 mb-2">Fulfillment</h4>
        <div class="d-flex flex-wrap gap-2 mb-4">
          <MpStatusChip status="Shipped" type="fulfillment" showIcon />
          <MpStatusChip status="Ready For Fulfillment" type="fulfillment" showIcon />
          <MpStatusChip status="Unapproved" type="fulfillment" showIcon />
        </div>
        <h4 class="text-subtitle-2 mb-2">Payment</h4>
        <div class="d-flex flex-wrap gap-2 mb-4">
          <MpStatusChip status="Paid" type="payment" />
          <MpStatusChip status="Not Paid" type="payment" />
          <MpStatusChip status="Requires Action" type="payment" />
        </div>
        <h4 class="text-subtitle-2 mb-2">Campaign</h4>
        <div class="d-flex flex-wrap gap-2 mb-4">
          <MpStatusChip status="Draft" type="campaign" />
          <MpStatusChip status="Sent" type="campaign" />
          <MpStatusChip status="Stopped" type="campaign" />
        </div>
        <h4 class="text-subtitle-2 mb-2">Ticket</h4>
        <div class="d-flex flex-wrap gap-2 mb-4">
          <MpStatusChip status="Open" type="ticket" />
          <MpStatusChip status="In Progress" type="ticket" />
          <MpStatusChip status="Resolved" type="ticket" />
          <MpStatusChip status="Closed" type="ticket" />
        </div>
      </div>
    \`
  }),
  args: {} as any
}`,...h.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      MpStatusChip
    },
    setup() {
      // Mirrors the component's toneMap keys, title-cased for display
      // (the lookup is case-insensitive).
      const matrix: Record<string, string[]> = {
        order: ['Processing', 'Completed', 'Cancelled', 'Refunded', 'On Hold', 'Archived'],
        fulfillment: ['Unapproved', 'Not Ready', 'Ready For Fulfillment', 'Shipped', 'Return Requested', 'Cancelled', 'Fulfilled', 'Unfulfilled', 'Partial', 'Awaiting Fulfillment', 'Picking', 'Packed', 'Ready To Ship'],
        payment: ['Paid', 'Refunded', 'Voided', 'Pending', 'Failed', 'Authorised', 'partially_refunded'],
        campaign: ['Sent', 'Scheduled', 'Draft', 'Sending', 'Active', 'Paused', 'Completed', 'Failed', 'Archived', 'Aborted'],
        contact: ['Active', 'Subscribed', 'Unsubscribed', 'Bounced', 'Pending', 'Confirmed', 'Suspended', 'Suppressed', 'Spam', 'Hard Bounce'],
        ticket: ['Open', 'In Progress', 'Awaiting Reply', 'Resolved', 'Closed', 'On Hold', 'Escalated', 'New'],
        coupon: ['Active', 'Expired', 'Scheduled', 'Used', 'Disabled'],
        priority: ['Critical', 'Urgent', 'High', 'Medium', 'Normal', 'Low'],
        connection: ['Connected', 'Disconnected', 'Needs Setup', 'Sync Issue', 'Auth Expired', 'Syncing', 'Error', 'Healthy'],
        general: ['Active', 'Inactive', 'Pending', 'Error', 'Published', 'Draft', 'Archived', 'Enabled', 'Disabled', 'Failed', 'Running', 'Paused', 'Completed', 'Connected', 'Disconnected', 'Needs Setup', 'Sync Issue', 'Auth Expired', 'Healthy', 'Needs Attention', 'Incomplete', 'Open', 'Closed', 'Online', 'Offline', 'Syncing']
      };
      return {
        matrix
      };
    },
    template: \`
      <div>
        <div v-for="(statuses, type) in matrix" :key="type" class="mb-4">
          <h4 class="text-subtitle-2 text-capitalize mb-2">{{ type }}</h4>
          <div class="d-flex flex-wrap ga-2 align-center">
            <MpStatusChip v-for="s in statuses" :key="s" :status="s" :type="type" />
          </div>
        </div>
        <h4 class="text-subtitle-2 mb-2">Unknown status → neutral fallback</h4>
        <div class="d-flex flex-wrap ga-2 align-center">
          <MpStatusChip status="Some Custom Status" type="order" />
        </div>
      </div>
    \`
  }),
  args: {} as any
}`,...n.parameters?.docs?.source},description:{story:`The complete status × type matrix — every status string the component maps for
every type, plus the neutral fallback for unknown statuses. This is the source
of truth for which strings resolve to which tone.`,...n.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      MpStatusChip
    },
    setup() {
      const sizes = ['sm', 'md', 'lg'];
      const variants = ['tonal', 'flat', 'outlined'];
      return {
        sizes,
        variants
      };
    },
    template: \`
      <div>
        <div v-for="variant in variants" :key="variant" class="mb-4">
          <h4 class="text-subtitle-2 text-capitalize mb-2">{{ variant }}</h4>
          <div class="d-flex flex-wrap ga-2 align-center">
            <MpStatusChip
              v-for="size in sizes"
              :key="size"
              status="Shipped"
              type="fulfillment"
              :size="size"
              :variant="variant"
              showIcon
            />
          </div>
        </div>
      </div>
    \`
  }),
  args: {} as any
}`,...i.parameters?.docs?.source},description:{story:"Size × variant matrix on a single status, for density decisions in tables vs detail views.",...i.parameters?.docs?.description}}};const x=["Default","Variants","Sizes","States","WithIcon","OrderStatuses","PriorityLevels","ConnectionStatuses","FulfillmentStatuses","PaymentStatuses","CampaignStatuses","AllTypes","FullMatrix","SizesAndVariants"];export{h as AllTypes,m as CampaignStatuses,d as ConnectionStatuses,p as Default,c as FulfillmentStatuses,n as FullMatrix,o as OrderStatuses,u as PaymentStatuses,l as PriorityLevels,s as Sizes,i as SizesAndVariants,a as States,e as Variants,r as WithIcon,x as __namedExportsOrder,M as default};
