import{D as s}from"./DvSegmentCard-Dk_1pVE9.js";import"./iframe-BqHSr5b_.js";import"./preload-helper-PPVm8Dsz.js";import"./MpFormSection-CmGpUCf7.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const c={title:"Product/Da Vinci/DvSegmentCard",component:s,tags:["autodocs"],argTypes:{name:{control:"text",description:"Name of the audience segment"},rules:{description:"Array of rule descriptions defining the segment criteria",control:!1},estimatedSize:{control:"number",description:"Estimated number of contacts matching the segment"}},parameters:{docs:{description:{component:`
## Overview
DvSegmentCard displays a customer segment with its defining rules and estimated size. It's used to preview and manage audience segmentation recommendations from the AI copilot.

## Do's
- Show clear, readable rules in plain language
- Always include estimated segment size
- Use for previewing segment criteria
- Provide actions to save or refine segments
- Use human-readable rule descriptions

## Don'ts
- Don't use overly technical rule syntax
- Don't hide segment size information
- Don't create segments with vague criteria
- Don't use without allowing users to preview results

## Best Practices
- List most important rules first
- Use "AND" logic between rules (all must match)
- Include timeframe context (e.g., "Last 30 Days")
- Show both positive and negative criteria
- Estimate segment size based on actual data
        `}}}},e={args:{name:"High-Value Customers",rules:["Total Spending: Greater than $500","Purchase Frequency: At least 5 purchases","Recent Activity: Last purchase within 60 days","Email Engagement: Opened emails in last 30 days"],estimatedSize:847}},t={args:{name:"Inactive Subscribers - 6+ Months",rules:["Last Purchase: More than 180 days ago","No Email Opens: Last 90 days","Email Delivery Status: Valid and active","Subscription Status: Active (not unsubscribed)"],estimatedSize:2341}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'High-Value Customers',
    rules: ['Total Spending: Greater than $500', 'Purchase Frequency: At least 5 purchases', 'Recent Activity: Last purchase within 60 days', 'Email Engagement: Opened emails in last 30 days'],
    estimatedSize: 847
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'Inactive Subscribers - 6+ Months',
    rules: ['Last Purchase: More than 180 days ago', 'No Email Opens: Last 90 days', 'Email Delivery Status: Valid and active', 'Subscription Status: Active (not unsubscribed)'],
    estimatedSize: 2341
  }
}`,...t.parameters?.docs?.source}}};const m=["HighValueCustomers","InactiveSubscribers"];export{e as HighValueCustomers,t as InactiveSubscribers,m as __namedExportsOrder,c as default};
