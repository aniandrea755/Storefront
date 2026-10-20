import{r as g}from"./iframe-DH-XNaA6.js";import{T as l,g as b}from"./ThemeDaVinciPanel-BFBgIE0O.js";import{g as T}from"./themeBuilderData-CwPveBFz.js";import{s as w}from"./decorators-VsXP7llt.js";import"./preload-helper-PPVm8Dsz.js";import"./MpChatBubble-c0TbrPz9.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const y=[{id:"u-1",role:"user",text:"Add a hero “Winter Sale” and featured products"},{id:"d-1",role:"davinci",text:"Added Hero and Featured products to your Home page.",addedIds:["sec-hero-1","sec-featured-1"],addedTitles:["Hero","Featured products"]}],k=[{id:"u-1",role:"user",text:"Make my checkout faster"},{id:"d-1",role:"davinci",text:"I can add sections like a hero banner, featured products, an image banner, testimonials, or a newsletter. Try “Draft a full homepage” or “add an image banner”."}],C={title:"Product/Sales Channels/ThemeDaVinciPanel",component:l,tags:["autodocs"],parameters:{docs:{description:{component:"Da Vinci chat surface for the store theme builder's left panel — presentational: the parent (StoreThemeBuilder) owns the conversation, runs `generateSections` on `generate`, and removes sections on `undo`; turns with `addedIds` render a result card with a per-turn Undo button."}}},args:{messages:[]},argTypes:{messages:{control:"object",description:"ThemeChatMessage[] owned by the parent, newest last. Empty renders the welcome state with example-prompt chips; davinci turns with `addedIds`/`addedTitles` render the Undo result card."},onGenerate:{table:{category:"events"},description:"Emitted with the prompt on chip click or textarea submit (Enter sends, Shift+Enter newline)."},onUndo:{table:{category:"events"},description:"Emitted with the exact section ids a turn created — parent removes them and clears the turn's `addedIds`."},onClose:{table:{category:"events"},description:"Back button clicked — parent returns to the Sections/Styles tabs."}},decorators:[w({width:"320px",height:"560px"})]},r={},o={args:{messages:y}},i={args:{messages:k}},d={render:()=>({components:{ThemeDaVinciPanel:l},setup(){const t=g([]),u=g([]);let v=0;const h=a=>`${a}-${++v}`;function f(a){t.value.push({id:h("u"),role:"user",text:a});const n=b(a,{template:"home",existingKinds:u.value.map(e=>e.kind)});if(!n.matched||n.kinds.length===0){t.value.push({id:h("d"),role:"davinci",text:n.reply});return}const s=n.kinds.map(e=>({id:h("sec"),kind:e,title:T(e)?.title??e}));u.value.push(...s),t.value.push({id:h("d"),role:"davinci",text:n.reply,addedIds:s.map(e=>e.id),addedTitles:s.map(e=>e.title)})}function x(a){const n=new Set(a);u.value=u.value.filter(e=>!n.has(e.id));const s=t.value.find(e=>e.addedIds?.some(S=>n.has(S)));s&&(s.addedIds=void 0,s.text="Removed.")}return{messages:t,onGenerate:f,onUndo:x}},template:`
      <ThemeDaVinciPanel :messages="messages" @generate="onGenerate" @undo="onUndo" />
    `})},c={render:t=>({components:{ThemeDaVinciPanel:l},setup:()=>({args:t}),template:'<ThemeDaVinciPanel v-bind="args" />'})},m={render:t=>({components:{ThemeDaVinciPanel:l},setup:()=>({args:t}),template:'<ThemeDaVinciPanel v-bind="args" />'})},p={render:t=>({components:{ThemeDaVinciPanel:l},setup:()=>({args:t}),template:'<ThemeDaVinciPanel v-bind="args" />'})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source},description:{story:"Empty conversation — avatar intro, example-prompt chips, and the quoted-headline tip.",...r.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    messages: conversationMessages
  }
}`,...o.parameters?.docs?.source},description:{story:"A matched turn: user prompt, then a result card with the added titles and an Undo button.",...o.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    messages: unmatchedMessages
  }
}`,...i.parameters?.docs?.source},description:{story:"An unmatched prompt: Da Vinci replies with the capability fallback and re-shows the chips.",...i.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ThemeDaVinciPanel
    },
    setup() {
      const messages = ref<ThemeChatMessage[]>([]);
      const sections = ref<{
        id: string;
        kind: string;
        title: string;
      }[]>([]);
      let counter = 0;
      const nextId = (prefix: string) => \`\${prefix}-\${++counter}\`;
      function onGenerate(prompt: string) {
        messages.value.push({
          id: nextId('u'),
          role: 'user',
          text: prompt
        });
        const result = generateSections(prompt, {
          template: 'home',
          existingKinds: sections.value.map(s => s.kind)
        });
        if (!result.matched || result.kinds.length === 0) {
          messages.value.push({
            id: nextId('d'),
            role: 'davinci',
            text: result.reply
          });
          return;
        }
        const created = result.kinds.map(kind => ({
          id: nextId('sec'),
          kind,
          title: getSectionDef(kind)?.title ?? kind
        }));
        sections.value.push(...created);
        messages.value.push({
          id: nextId('d'),
          role: 'davinci',
          text: result.reply,
          addedIds: created.map(s => s.id),
          addedTitles: created.map(s => s.title)
        });
      }
      function onUndo(ids: string[]) {
        const idSet = new Set(ids);
        sections.value = sections.value.filter(s => !idSet.has(s.id));
        // Same as the builder: drop the ids off that turn so Undo can't double-fire.
        const turn = messages.value.find(m => m.addedIds?.some(id => idSet.has(id)));
        if (turn) {
          turn.addedIds = undefined;
          turn.text = 'Removed.';
        }
      }
      return {
        messages,
        onGenerate,
        onUndo
      };
    },
    template: \`
      <ThemeDaVinciPanel :messages="messages" @generate="onGenerate" @undo="onUndo" />
    \`
  })
}`,...d.parameters?.docs?.source},description:{story:"Fully wired flow — `generate` runs the real `generateSections` against locally\ntracked sections and `undo` removes them, mirroring StoreThemeBuilder's wiring\n(minus the store writes). Try a chip, the textarea, or Undo on a result card.",...d.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      ThemeDaVinciPanel
    },
    setup: () => ({
      args
    }),
    template: \`<ThemeDaVinciPanel v-bind="args" />\`
  })
}`,...c.parameters?.docs?.source},description:{story:"One structure — the Da Vinci panel docked in the theme builder. Its variants are the conversation modes: welcome prompts, an active exchange, and the fallback when nothing matched.",...c.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      ThemeDaVinciPanel
    },
    setup: () => ({
      args
    }),
    template: \`<ThemeDaVinciPanel v-bind="args" />\`
  })
}`,...m.parameters?.docs?.source},description:{story:"There is no `size` prop — the panel fills the builder's side column. Its rows and controls resolve to the shared list-row and control-height tokens.",...m.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      ThemeDaVinciPanel
    },
    setup: () => ({
      args
    }),
    template: \`<ThemeDaVinciPanel v-bind="args" />\`
  })
}`,...p.parameters?.docs?.source},description:{story:"Welcome, mid-conversation, unmatched fallback, and interactive.",...p.parameters?.docs?.description}}};const F=["Welcome","Conversation","UnmatchedFallback","Interactive","Variants","Sizes","States"];export{o as Conversation,d as Interactive,m as Sizes,p as States,i as UnmatchedFallback,c as Variants,r as Welcome,F as __namedExportsOrder,C as default};
