import{D as a}from"./DashboardTableWidget-BIEL_W1b.js";import"./iframe-DH-XNaA6.js";import"./preload-helper-PPVm8Dsz.js";import"./MpStatusChip-BgtNpj8f.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const l={kind:"table",columns:[{key:"order",label:"Order"},{key:"customer",label:"Customer"},{key:"total",label:"Total",align:"end"},{key:"status",label:"Status"}],rows:[{order:"#10482",customer:"Ava Thompson",total:"$214.90",status:"Paid"},{order:"#10481",customer:"Liam Nguyen",total:"$89.00",status:"Paid"},{order:"#10480",customer:"Sofia Rossi",total:"$402.50",status:"Pending"},{order:"#10479",customer:"Noah Patel",total:"$156.20",status:"Paid"},{order:"#10478",customer:"Mia Johansson",total:"$74.99",status:"Refunded"}]},c={kind:"table",columns:[{key:"campaign",label:"Campaign"},{key:"revenue",label:"Revenue",align:"end"},{key:"openRate",label:"Open rate",align:"end"}],rows:[{campaign:"Spring Sale Announcement",revenue:"$12,480",openRate:"28.4% open rate"},{campaign:"VIP Early Access",revenue:"$8,920",openRate:"34.1% open rate"},{campaign:"Back in Stock: Bestsellers",revenue:"$5,140",openRate:"22.7% open rate"},{campaign:"Weekend Flash Deal",revenue:"$3,660",openRate:"19.2% open rate"},{campaign:"New Arrivals — June",revenue:"$2,310",openRate:"17.8% open rate"}]},v={title:"Product/Dashboards/Widgets/DashboardTableWidget",component:a,tags:["autodocs"],parameters:{docs:{description:{component:'Table body for dashboard widgets. Generic column/row payloads render as a compact sticky-header table; payloads with `campaign` + `revenue` columns switch to the top-campaigns meter-list layout unless a column carries `cellType: "status"`, which keeps the real table and renders that column as MpStatusChips.'}}},args:{data:l},argTypes:{data:{control:"object",description:"`DashboardTableData` — `{ columns, rows }`. A column with `cellType: 'status'` renders an `MpStatusChip`; a campaign+revenue table with no status column instead renders the meter-list treatment, so the column set changes the layout, not just the content."}},render:e=>({components:{DashboardTableWidget:a},setup:()=>({args:e}),template:`
      <v-card flat border rounded="lg" style="max-width:560px;height:320px;padding:8px 18px;">
        <DashboardTableWidget v-bind="args" />
      </v-card>
    `})},d={},o={args:{data:c}},p={kind:"table",columns:[{key:"campaign",label:"Campaign"},{key:"status",label:"Status",cellType:"status",statusType:"campaign"},{key:"openRate",label:"Open Rate",align:"end"},{key:"revenue",label:"Revenue",align:"end"}],rows:[{campaign:"Flash Sale — 4 Hours Only",status:"Sent",openRate:"69.6%",revenue:"$134,521.75"},{campaign:"Cyber Monday Flash Sale",status:"Sent",openRate:"47.4%",revenue:"$98,432.75"},{campaign:"January Sale",status:"Scheduled",openRate:"37.4%",revenue:"$56,789.25"},{campaign:"December Holiday Gift Guide",status:"Draft",openRate:"41.8%",revenue:"$45,234.50"}]},i={args:{data:p},parameters:{docs:{description:{story:'A status column (`cellType: "status"`) renders MpStatusChips and opts the table out of the campaign meter-list treatment — this is the shadcn Overview "Top campaigns" configuration.'}}}},t={render:e=>({components:{DashboardTableWidget:a},setup:()=>({args:e}),template:'<DashboardTableWidget v-bind="args" />'})},s={render:e=>({components:{DashboardTableWidget:a},setup:()=>({args:e}),template:`
      <div class="d-flex ga-6 flex-wrap align-start">
        <div style="width: 280px; height: 220px"><v-card flat border rounded="lg" class="h-100 pa-5"><DashboardTableWidget v-bind="args" /></v-card></div>
        <div style="width: 420px; height: 260px"><v-card flat border rounded="lg" class="h-100 pa-5"><DashboardTableWidget v-bind="args" /></v-card></div>
        <div style="width: 620px; height: 300px"><v-card flat border rounded="lg" class="h-100 pa-5"><DashboardTableWidget v-bind="args" /></v-card></div>
      </div>
    `})},r={render:e=>({components:{DashboardTableWidget:a},setup:()=>({args:e}),template:'<DashboardTableWidget v-bind="args" />'})},n={render:e=>({components:{DashboardTableWidget:a},setup:()=>({args:e}),template:`
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: var(--mp-space-16); align-items: stretch">
        <v-card flat border rounded="lg" style="height: 280px" class="pa-5"><DashboardTableWidget v-bind="args" /></v-card>
        <v-card flat border rounded="lg" style="height: 280px" class="pa-5"><DashboardTableWidget v-bind="args" /></v-card>
      </div>
    `})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{}",...d.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    data: TOP_CAMPAIGNS
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    data: STATUS_CHIP_TABLE
  },
  parameters: {
    docs: {
      description: {
        story: 'A status column (\`cellType: "status"\`) renders MpStatusChips and opts the table out of the campaign meter-list treatment — this is the shadcn Overview "Top campaigns" configuration.'
      }
    }
  }
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      DashboardTableWidget
    },
    setup: () => ({
      args
    }),
    template: \`<DashboardTableWidget v-bind="args" />\`
  })
}`,...t.parameters?.docs?.source},description:{story:"Two structures, chosen from the data: a real table, and the campaign meter-list a campaign/revenue shape renders as instead.",...t.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      DashboardTableWidget
    },
    setup: () => ({
      args
    }),
    template: \`
      <div class="d-flex ga-6 flex-wrap align-start">
        <div style="width: 280px; height: 220px"><v-card flat border rounded="lg" class="h-100 pa-5"><DashboardTableWidget v-bind="args" /></v-card></div>
        <div style="width: 420px; height: 260px"><v-card flat border rounded="lg" class="h-100 pa-5"><DashboardTableWidget v-bind="args" /></v-card></div>
        <div style="width: 620px; height: 300px"><v-card flat border rounded="lg" class="h-100 pa-5"><DashboardTableWidget v-bind="args" /></v-card></div>
      </div>
    \`
  })
}`,...s.parameters?.docs?.source},description:{story:"There is no `size` prop — a widget fills the grid cell it is placed in. What Phase 4\n(P4-1) guarantees is that the **inset** does not change with the cell: the distance from\nthe card's border to this widget's content is `component.card.padding` at every size,\ninherited from the card standard set in Phase 3 rather than a second widget-only pair.\n\nRendered below at three cell sizes inside a real `DashboardWidgetCard` — run your eye down\nthe left edges.",...s.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      DashboardTableWidget
    },
    setup: () => ({
      args
    }),
    template: \`<DashboardTableWidget v-bind="args" />\`
  })
}`,...r.parameters?.docs?.source},description:{story:"Populated, with status-chip columns, and empty.",...r.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      DashboardTableWidget
    },
    setup: () => ({
      args
    }),
    template: \`
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: var(--mp-space-16); align-items: stretch">
        <v-card flat border rounded="lg" style="height: 280px" class="pa-5"><DashboardTableWidget v-bind="args" /></v-card>
        <v-card flat border rounded="lg" style="height: 280px" class="pa-5"><DashboardTableWidget v-bind="args" /></v-card>
      </div>
    \`
  })
}`,...n.parameters?.docs?.source},description:{story:`**In context.** The widget where it actually lives — inside a \`DashboardWidgetCard\`, in a
dashboard row beside its siblings. This is the composition P4-1 is judged on: the header
band, the body inset and the footer are the card's, and every widget in the family sits on
the same edge.`,...n.parameters?.docs?.description}}};const y=["GenericTable","TopCampaignsList","StatusChipColumns","Variants","Sizes","States","InContextDashboardRow"];export{d as GenericTable,n as InContextDashboardRow,s as Sizes,r as States,i as StatusChipColumns,o as TopCampaignsList,t as Variants,y as __namedExportsOrder,v as default};
