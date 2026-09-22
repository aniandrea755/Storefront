import{d as ce,r as C,c as p,eL as ue,eK as de,ed as he,d2 as fe,o as me,w as pe,eV as l,eW as i,eX as d,d0 as n,eM as ge,eR as b,eZ as o,fn as ve,fu as _e,ez as L,f4 as k,fe as x,eO as j,eP as O,e_ as w,fj as F,f5 as R,fc as be,fW as ye,fX as we,fm as ke,n as q}from"./iframe-BqHSr5b_.js";import{M as xe}from"./MpBuilderShell-Bmkar_Pm.js";import{M as Se}from"./MpStatusChip-Cvm9kx4z.js";import{M as H}from"./MpEmptyState-WqesgUXi.js";import{M as Ce}from"./MpConfirmDialog-g8XCZO_Q.js";import{u as Le}from"./useDirtyLeaveGuard-B6dEH9ZJ.js";import{u as Te}from"./useToast-D0O_SpbR.js";import{u as je}from"./useSalesChannels-C-UC6oeI.js";import{u as Fe}from"./useStoreThemes-QB0Rm-ee.js";import{_ as Ne}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";import"./MpIllustration-7mikb6DB.js";import"./MpDialog-F4WZRRS8.js";import"./useScrollEdges-B2McRpMX.js";import"./useToastStackTimers-CbTd3XmR.js";import"./themeBuilderData-DLi7IgYG.js";const X=[{path:"layouts/theme.html",language:"html",content:`{{ define "layout" }}
<!doctype html>
<html lang="{{ .Store.Locale }}">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>{{ .Page.Title }} · {{ .Store.Name }}</title>
    <link rel="stylesheet" href="{{ asset "theme.css" }}" />
    {{ block "head" . }}{{ end }}
  </head>
  <body class="template-{{ .Template.Type }}">
    {{ section "header" . }}
    <main id="main-content" role="main">
      {{ block "content" . }}{{ end }}
    </main>
    {{ section "footer" . }}
    <script src="{{ asset "theme.js" }}" defer><\/script>
  </body>
</html>
{{ end }}`},{path:"layouts/checkout.html",language:"html",content:`{{ define "layout" }}
<!doctype html>
<html lang="{{ .Store.Locale }}">
  <head>
    <meta charset="utf-8" />
    <title>Checkout · {{ .Store.Name }}</title>
    <link rel="stylesheet" href="{{ asset "checkout.css" }}" />
  </head>
  <body class="template-checkout">
    <header class="checkout__header">
      <a href="/" class="checkout__logo">{{ .Store.Name }}</a>
    </header>
    {{ block "content" . }}{{ end }}
  </body>
</html>
{{ end }}`},{path:"templates/home/default.html",language:"html",content:`{{ define "content" }}
<div class="page-home">
  {{ range .Sections }}
    <section class="section section--{{ .Type }}" data-section-id="{{ .Id }}">
      {{ if eq .Type "hero" }}
        <div class="hero" style="background-image:url('{{ .Settings.image }}')">
          <h1 class="hero__title">{{ .Settings.heading }}</h1>
          <p class="hero__subtitle">{{ .Settings.subheading }}</p>
          <a href="{{ .Settings.ctaLink }}" class="btn btn--primary">
            {{ .Settings.ctaLabel }}
          </a>
        </div>
      {{ else if eq .Type "featured-products" }}
        <div class="featured">
          <h2>{{ .Settings.title }}</h2>
          <ul class="product-grid">
            {{ range .Products }}
              {{ include "snippets/product-card" . }}
            {{ end }}
          </ul>
        </div>
      {{ else }}
        {{ include (printf "sections/%s" .Type) . }}
      {{ end }}
    </section>
  {{ end }}
</div>
{{ end }}`},{path:"templates/home/default.json",language:"json",content:`{
  "sections": {
    "hero": {
      "type": "hero",
      "settings": {
        "heading": "New season, new gear",
        "subheading": "Shop the Fall 26 collection",
        "ctaLabel": "Shop now",
        "ctaLink": "/collections/all",
        "image": "assets/hero-fall26.jpg"
      }
    },
    "featured": {
      "type": "featured-products",
      "settings": {
        "title": "Trending now",
        "collection": "featured",
        "limit": 8
      }
    }
  },
  "order": ["hero", "featured"]
}`},{path:"templates/header/default.html",language:"html",content:`{{ define "content" }}
<header class="site-header">
  <div class="site-header__inner">
    <a href="/" class="site-header__logo">
      {{ if .Settings.logo }}
        <img src="{{ .Settings.logo }}" alt="{{ .Store.Name }}" />
      {{ else }}
        <span>{{ .Store.Name }}</span>
      {{ end }}
    </a>
    <nav class="site-nav" aria-label="Primary">
      {{ range .Menu.Items }}
        <a href="{{ .Url }}" class="site-nav__link">{{ .Title }}</a>
      {{ end }}
    </nav>
    <div class="site-header__actions">
      <a href="/search" aria-label="Search">{{ icon "search" }}</a>
      <a href="/cart" aria-label="Cart">{{ icon "cart" }} <span>{{ .Cart.Count }}</span></a>
    </div>
  </div>
</header>
{{ end }}`},{path:"templates/header/default.json",language:"json",content:`{
  "settings": {
    "logo": "assets/logo.svg",
    "sticky": true,
    "menu": "main-menu",
    "showSearch": true,
    "showCart": true
  }
}`},{path:"templates/footer/default.json",language:"json",content:`{
  "settings": {
    "menu": "footer-menu",
    "showNewsletter": true,
    "newsletterHeading": "Join our list",
    "copyright": "© {{ year }} Atlas Outfitters",
    "socialLinks": [
      { "platform": "instagram", "url": "https://instagram.com/atlas" },
      { "platform": "tiktok", "url": "https://tiktok.com/@atlas" }
    ]
  }
}`},{path:"templates/cart/default.json",language:"json",content:`{
  "settings": {
    "showTaxNote": true,
    "enableNotes": true,
    "checkoutLabel": "Proceed to checkout",
    "emptyMessage": "Your cart is empty.",
    "recommendations": {
      "enabled": true,
      "engine": "frequently-bought-together"
    }
  }
}`},{path:"templates/collection/default.json",language:"json",content:`{
  "settings": {
    "productsPerPage": 24,
    "showFilters": true,
    "defaultSort": "best-selling",
    "sortOptions": ["best-selling", "price-asc", "price-desc", "newest"],
    "showBreadcrumbs": true
  }
}`},{path:"templates/account/default.json",language:"json",content:`{
  "settings": {
    "showOrderHistory": true,
    "showAddresses": true,
    "showWishlist": false,
    "ordersPerPage": 10
  }
}`},{path:"templates/login/default.json",language:"json",content:`{
  "settings": {
    "heading": "Log in",
    "showGuestCheckout": true,
    "enableSocialLogin": false,
    "registerPrompt": "New here? Create an account"
  }
}`},{path:"templates/login/schema.json",language:"json",content:`{
  "name": "Login",
  "settings": [
    { "id": "heading", "type": "text", "label": "Heading", "default": "Log in" },
    { "id": "showGuestCheckout", "type": "checkbox", "label": "Allow guest checkout", "default": true },
    { "id": "enableSocialLogin", "type": "checkbox", "label": "Social login", "default": false },
    { "id": "registerPrompt", "type": "text", "label": "Register prompt" }
  ]
}`},{path:"templates/404/default.html",language:"html",content:`{{ define "content" }}
{{ end }}`},{path:"templates/404/default.json",language:"json",content:`{
  "settings": {
    "heading": "Page not found",
    "message": "The page you're looking for doesn't exist.",
    "ctaLabel": "Back to home",
    "ctaLink": "/"
  }
}`},{path:"templates/500/default.html",language:"html",content:`{{ define "content" }}
<div class="page-error">
  <h1>{{ .Settings.heading }}</h1>
  <p>{{ .Settings.message }}</p>
  <a href="{{ .Settings.ctaLink }}" class="btn">{{ .Settings.ctaLabel }}</a>
</div>
{{ end }}`},{path:"templates/500/default.json",language:"json",content:`{
  "settings": {
    "heading": "Something went wrong",
    "message": "We hit an unexpected error. Please try again.",
    "ctaLabel": "Reload",
    "ctaLink": "/"
  }
}`},{path:"templates/blogs/default.json",language:"json",content:`{
  "settings": {
    "postsPerPage": 12,
    "showExcerpt": true,
    "showAuthor": true,
    "showDate": true,
    "layout": "grid"
  }
}`},{path:"templates/blogpost/default.json",language:"json",content:`{
  "settings": {
    "showAuthor": true,
    "showDate": true,
    "showShareButtons": true,
    "showRelated": true,
    "relatedLimit": 3
  }
}`}];function Pe(h){const r=[],g=new Map;for(const v of h){const _=v.path.split("/")[0]??"";g.has(_)||(g.set(_,[]),r.push(_)),g.get(_).push(v)}return r.map(v=>({name:v,files:g.get(v)}))}function S(h){const r=h.indexOf("/");return r===-1?h:h.slice(r+1)}function De(h){return h.map(r=>({...r}))}const Ee=ce("themeCode",()=>{const h=C(De(X)),r=C(Object.fromEntries(X.map(s=>[s.path,s.content])));function g(s){return h.value.find(m=>m.path===s)}function v(s){const m=g(s);return m?m.content!==r.value[s]:!1}const _=p(()=>h.value.some(s=>s.content!==r.value[s.path])),P=p(()=>h.value.filter(s=>s.content!==r.value[s.path]).map(s=>s.path));function D(s,m){const N=g(s);N&&(N.content=m)}function c(s){const m=g(s);m&&(r.value[s]=m.content)}function E(){for(const s of h.value)r.value[s.path]=s.content}return{files:h,savedContent:r,getFile:g,isDirty:v,anyDirty:_,dirtyPaths:P,updateFile:D,saveFile:c,saveAll:E}}),Me={key:0,class:"tc-missing d-flex align-center justify-center"},Be={class:"font-weight-bold text-body-1 text-truncate"},Ie={class:"tc-body d-flex h-100",style:{overflow:"hidden"}},Ve={class:"tc-rail border-r bg-surface d-flex flex-column align-center py-2","aria-label":"Editor views"},$e={class:"tc-explorer border-r bg-surface d-flex flex-column"},ze={class:"flex-grow-1 overflow-y-auto"},Oe={role:"list","aria-label":"Open editors"},Re=["aria-label","onClick"],Ae={class:"tc-file-row__label text-truncate"},Ue={key:0,class:"tc-dot",role:"status","aria-label":"Unsaved"},Ke={role:"tree","aria-label":"Theme files"},Ge=["aria-expanded","onClick"],We={class:"tc-folder-row__label"},qe={key:0,role:"group"},He=["aria-label","onClick"],Xe={class:"tc-file-row__label text-truncate"},Ye={key:0,class:"tc-dot",role:"status","aria-label":"Unsaved"},Je={class:"tc-editor-area d-flex flex-column flex-grow-1",style:{"min-width":"0"}},Ze={class:"tc-tabs d-flex border-b bg-surface",role:"tablist","aria-label":"Open files"},Qe=["aria-selected"],et=["onClick"],tt={class:"text-truncate"},at={key:0,class:"tc-dot tc-dot--tab","aria-label":"Unsaved"},st={class:"tc-editor flex-grow-1"},ot=["aria-label"],nt={key:1,class:"tc-empty flex-grow-1 d-flex align-center justify-center"},Y=ue({__name:"StoreThemeCode",setup(h){const r=de(),g=he(),v=p(()=>r.params.accountId),_=p(()=>r.params.channelId),P=je(),D=Fe(),c=Ee(),E=Te(),s=p(()=>P.getChannel(v.value,_.value)),m=p(()=>D.themeForChannel(_.value)),N=p(()=>({name:"StoreThemeBuilder",params:{accountId:v.value,channelId:_.value}})),J=p(()=>Pe(c.files)),T=C(new Set);function Z(a){const t=new Set(T.value);t.has(a)?t.delete(a):t.add(a),T.value=t}function M(a){return a==="json"?"braces":"file-code"}const y=C([]),u=C(null),A=p(()=>u.value?c.getFile(u.value):void 0),U=C(null);function B(a){y.value.includes(a)||y.value.push(a),u.value=a,q(()=>U.value?.focus())}function K(a){const t=y.value.indexOf(a);t!==-1&&(y.value.splice(t,1),u.value===a&&(u.value=y.value[t]??y.value[t-1]??null))}const I=p({get:()=>A.value?.content??"",set:a=>{u.value&&c.updateFile(u.value,a)}}),Q=p(()=>{const a=I.value.split(`
`).length;return Array.from({length:a},(t,e)=>e+1)}),V=C(null);function ee(a){V.value&&(V.value.scrollTop=a.target.scrollTop)}function te(a){if(a.key!=="Tab"||!u.value)return;a.preventDefault();const t=a.target,{selectionStart:e,selectionEnd:f,value:z}=t,re=`${z.slice(0,e)}  ${z.slice(f)}`;c.updateFile(u.value,re),q(()=>{t.selectionStart=t.selectionEnd=e+2})}const ae=p(()=>c.anyDirty),{confirmLeave:$,allowNextLeave:se,discardAndLeave:oe,leaveTitle:ne,leaveMessage:le,leaveConfirmLabel:ie}=Le(ae,{title:"Leave theme code editor?",message:"You have unsaved code changes. Leaving now will discard them.",beforeUnload:!0});function G(){c.anyDirty&&(c.saveAll(),se(),E.success("Theme code saved"))}function W(a){(a.metaKey||a.ctrlKey)&&a.key.toLowerCase()==="s"&&(a.preventDefault(),G())}return fe(()=>window.addEventListener("keydown",W)),me(()=>window.removeEventListener("keydown",W)),pe(_,()=>{y.value=[],u.value=null}),(a,t)=>!s.value||!m.value?(l(),i("div",Me,[d(H,{icon:"code",title:s.value?"No theme for this channel":"Sales channel not found",description:s.value?"This channel doesn't have a store theme yet, so there's no code to edit.":"This sales channel doesn't exist or was removed.",actionLabel:"Back to sales channels",actionIcon:"arrow-left",onAction:t[0]||(t[0]=e=>n(g).push({name:"SalesChannels",params:{accountId:v.value}}))},null,8,["title","description"])])):(l(),ge(xe,{key:1,"back-to":N.value,"back-label":"Back to visual editor",title:m.value.name,dirty:n(c).anyDirty,"persistence-mode":"explicit"},{title:b(()=>[o("div",Be,w(m.value.name),1),d(Se,{status:"Theme code",type:"general",size:"sm"})]),actions:b(()=>[d(R,{color:"primary",variant:"flat",size:"small",class:"text-none","prepend-icon":"save",disabled:!n(c).anyDirty,onClick:G},{default:b(()=>[...t[3]||(t[3]=[k(" Save ",-1)])]),_:1},8,["disabled"])]),default:b(()=>[o("div",Ie,[o("nav",Ve,[d(ve,{text:"Explorer",location:"right"},{activator:b(({props:e})=>[o("button",_e(e,{class:"tc-rail__btn tc-rail__btn--active","aria-label":"Explorer","aria-current":"page"}),[d(L,{size:"18"},{default:b(()=>[...t[4]||(t[4]=[k("files",-1)])]),_:1})],16)]),_:1})]),o("aside",$e,[t[7]||(t[7]=o("div",{class:"tc-explorer__title px-3 py-2 text-caption font-weight-bold text-uppercase text-medium-emphasis"}," Explorer ",-1)),o("div",ze,[y.value.length?(l(),i(x,{key:0},[t[5]||(t[5]=o("div",{class:"tc-group-label px-3 py-1 text-caption font-weight-bold text-uppercase text-medium-emphasis"}," Open Editors ",-1)),o("div",Oe,[(l(!0),i(x,null,j(y.value,e=>(l(),i("div",{key:e,role:"listitem",class:O(["tc-file-row",{"tc-file-row--active":e===u.value}])},[o("button",{class:"tc-file-row__main","aria-label":`Open ${n(S)(e)}`,onClick:f=>B(e)},[d(L,{size:"16",class:"tc-file-row__icon"},{default:b(()=>[k(w(M(n(c).getFile(e).language)),1)]),_:2},1024),o("span",Ae,w(n(S)(e)),1),n(c).isDirty(e)?(l(),i("span",Ue)):F("",!0)],8,Re),d(R,{icon:"x",variant:"text",size:"small",density:"comfortable",class:"tc-file-row__close","aria-label":`Close ${n(S)(e)}`,onClick:f=>K(e)},null,8,["aria-label","onClick"])],2))),128))]),d(be,{class:"my-1"})],64)):F("",!0),o("div",Ke,[(l(!0),i(x,null,j(J.value,e=>(l(),i("div",{key:e.name,role:"treeitem"},[o("button",{class:"tc-folder-row","aria-expanded":!T.value.has(e.name),onClick:f=>Z(e.name)},[d(L,{size:"16",class:"tc-folder-row__chevron"},{default:b(()=>[k(w(T.value.has(e.name)?"chevron-right":"chevron-down"),1)]),_:2},1024),d(L,{size:"16",class:"tc-folder-row__icon"},{default:b(()=>[...t[6]||(t[6]=[k("folder",-1)])]),_:1}),o("span",We,w(e.name),1)],8,Ge),T.value.has(e.name)?F("",!0):(l(),i("div",qe,[(l(!0),i(x,null,j(e.files,f=>(l(),i("div",{key:f.path,class:O(["tc-file-row tc-file-row--nested",{"tc-file-row--active":f.path===u.value}])},[o("button",{class:"tc-file-row__main","aria-label":`Open ${n(S)(f.path)}`,onClick:z=>B(f.path)},[d(L,{size:"16",class:"tc-file-row__icon"},{default:b(()=>[k(w(M(f.language)),1)]),_:2},1024),o("span",Xe,w(n(S)(f.path)),1),n(c).isDirty(f.path)?(l(),i("span",Ye)):F("",!0)],8,He)],2))),128))]))]))),128))])])]),o("div",Je,[A.value?(l(),i(x,{key:0},[o("div",Ze,[(l(!0),i(x,null,j(y.value,e=>(l(),i("div",{key:e,class:O(["tc-tab",{"tc-tab--active":e===u.value}]),role:"tab","aria-selected":e===u.value},[o("button",{class:"tc-tab__label",onClick:f=>B(e)},[d(L,{size:"16",class:"tc-tab__icon"},{default:b(()=>[k(w(M(n(c).getFile(e).language)),1)]),_:2},1024),o("span",tt,w(n(S)(e)),1)],8,et),n(c).isDirty(e)?(l(),i("span",at)):F("",!0),d(R,{icon:"x",variant:"text",size:"small",density:"comfortable",class:"tc-tab__close","aria-label":`Close ${n(S)(e)}`,onClick:f=>K(e)},null,8,["aria-label","onClick"])],10,Qe))),128))]),o("div",st,[o("div",{ref_key:"gutterRef",ref:V,class:"tc-gutter","aria-hidden":"true"},[(l(!0),i(x,null,j(Q.value,e=>(l(),i("div",{key:e,class:"tc-gutter__line"},w(e),1))),128))],512),ye(o("textarea",{ref_key:"editorRef",ref:U,"onUpdate:modelValue":t[1]||(t[1]=e=>I.value=e),class:"tc-textarea",spellcheck:"false",autocomplete:"off",autocapitalize:"off","aria-label":`Editing ${u.value}`,onScroll:ee,onKeydown:te},null,40,ot),[[we,I.value]])])],64)):(l(),i("div",nt,[d(H,{icon:"code",title:"No file opened",description:"Pick a file from the Explorer to start editing your theme code."})]))])]),d(Ce,{modelValue:n($),"onUpdate:modelValue":t[2]||(t[2]=e=>ke($)?$.value=e:null),danger:"",title:n(ne),message:n(le),"confirm-label":n(ie),onConfirm:n(oe)},null,8,["modelValue","title","message","confirm-label","onConfirm"])]),_:1},8,["back-to","title","dirty"]))}}),kt=Ne(Y,[["__scopeId","data-v-3eca6a96"]]);Y.__docgenInfo={exportName:"default",displayName:"StoreThemeCode",description:"",tags:{},sourceFiles:["/home/runner/work/Storefront/Storefront/src/views/SalesChannels/StoreThemeCode.vue"]};export{kt as default};
