import{d1 as o}from"./iframe-BqHSr5b_.js";const d={narrow:"320px",compact:"var(--mp-component-state-measure)",drawer:"var(--mp-layout-drawerWidth)",dialog:"var(--mp-component-dialog-width-md)",section:"720px",wide:"var(--mp-component-dialog-width-lg)"};function i(e="section"){return()=>({template:`<div style="max-width: ${d[e]}; margin-inline: auto;"><story /></div>`})}function s(e={}){const{width:r,height:t}=e;return()=>({template:`
      <div style="
        ${r?`width: ${r};`:""}
        ${t?`height: ${t};`:""}
        overflow: hidden;
        border: 1px solid var(--border-subtle);
        border-radius: var(--mp-component-card-radius);
        background: var(--surface-primary);
        color: var(--on-surface);
      "><story /></div>
    `})}function m(e="560px"){return()=>({template:`
      <div style="
        display: flex;
        height: ${e};
        overflow: hidden;
        border: 1px solid var(--border-subtle);
        border-radius: var(--mp-component-card-radius);
      ">
        <story />
        <div style="flex: 1; background: rgb(var(--v-theme-background)); color: rgb(var(--v-theme-on-background));" />
      </div>
    `})}const c=(e,r)=>({components:{story:e},setup(){const t=String(r.parameters.sidebarSkin??"gray"),a=document.documentElement.dataset.sidebar;return document.documentElement.dataset.sidebar=t,o(()=>{a===void 0?delete document.documentElement.dataset.sidebar:document.documentElement.dataset.sidebar=a}),{}},template:"<story />"});export{c as a,i as c,m as r,s};
