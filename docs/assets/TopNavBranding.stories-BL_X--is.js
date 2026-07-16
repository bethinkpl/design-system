import{T as o}from"./TopNavBranding-CTVIHyES.js";import{F as E,a as O}from"./Flag-bUgw_7n3.js";import{F as A}from"./flags-3Q26n80q.js";import{S as T,a as v}from"./SlotPlaceholder-CuZiU-PR.js";import{t as _}from"./vue.esm-bundler-yuXcNhMB.js";import{T as F}from"./topNavStoryLogo-C8n3Ajyz.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const N={title:"Components/TopNav/TopNavBranding",component:o},h=a=>({components:{TopNavBranding:o,Flag:E},setup(){return{..._(a),logo:F,FLAGS:A,FLAG_SIZES:O}},template:`
        <top-nav-branding :title="title" :href="href" :to="to">
            <template #logo>
                <span v-html="logo" style="display: inline-flex;" />
            </template>
            <template #accessory>
                <flag :flag="FLAGS.FLAG_POLAND" :size="FLAG_SIZES.XXS" />
            </template>
        </top-nav-branding>
    `}),e=h.bind({}),t=h.bind({}),u=a=>({components:{TopNavBranding:o,SlotPlaceholder:T},setup(){return{..._(a),SLOT_PLACEHOLDER_SIZES:v}},template:`
        <top-nav-branding :title="title">
            <template #logo>
                <slot-placeholder label="logo" :size="SLOT_PLACEHOLDER_SIZES.MEDIUM" />
            </template>
            <template #accessory>
                <slot-placeholder label="accessory" :size="SLOT_PLACEHOLDER_SIZES.MEDIUM" />
            </template>
        </top-nav-branding>
    `}),n=u.bind({}),r={title:"Bethink",href:"",to:""},s={title:{control:"text"},href:{control:"text",description:"Renders the logo + title as an `<a>` linking to this URL."},to:{control:"text",description:"Renders the logo + title as a `<router-link>` (resolved by the host app). Ignored when `href` is set."}},l={design:{type:"figma",url:"https://www.figma.com/design/xym3gXf0vBCofzksDtRDaU/INI-201-E-commerce?node-id=345-21287&m=dev"}};e.args=r;e.argTypes=s;e.parameters=l;t.args={...r,href:"/"};t.argTypes=s;t.parameters=l;n.args=r;n.argTypes=s;n.parameters=l;var p,i,m;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`args => ({
  components: {
    TopNavBranding,
    Flag
  },
  setup() {
    return {
      ...toRefs(args),
      logo: TOP_NAV_STORY_LOGO,
      FLAGS,
      FLAG_SIZES
    };
  },
  template: \`
        <top-nav-branding :title="title" :href="href" :to="to">
            <template #logo>
                <span v-html="logo" style="display: inline-flex;" />
            </template>
            <template #accessory>
                <flag :flag="FLAGS.FLAG_POLAND" :size="FLAG_SIZES.XXS" />
            </template>
        </top-nav-branding>
    \`
})`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var c,g,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`args => ({
  components: {
    TopNavBranding,
    Flag
  },
  setup() {
    return {
      ...toRefs(args),
      logo: TOP_NAV_STORY_LOGO,
      FLAGS,
      FLAG_SIZES
    };
  },
  template: \`
        <top-nav-branding :title="title" :href="href" :to="to">
            <template #logo>
                <span v-html="logo" style="display: inline-flex;" />
            </template>
            <template #accessory>
                <flag :flag="FLAGS.FLAG_POLAND" :size="FLAG_SIZES.XXS" />
            </template>
        </top-nav-branding>
    \`
})`,...(d=(g=t.parameters)==null?void 0:g.docs)==null?void 0:d.source}}};var S,L,f;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`args => ({
  components: {
    TopNavBranding,
    SlotPlaceholder
  },
  setup() {
    return {
      ...toRefs(args),
      SLOT_PLACEHOLDER_SIZES
    };
  },
  template: \`
        <top-nav-branding :title="title">
            <template #logo>
                <slot-placeholder label="logo" :size="SLOT_PLACEHOLDER_SIZES.MEDIUM" />
            </template>
            <template #accessory>
                <slot-placeholder label="accessory" :size="SLOT_PLACEHOLDER_SIZES.MEDIUM" />
            </template>
        </top-nav-branding>
    \`
})`,...(f=(L=n.parameters)==null?void 0:L.docs)==null?void 0:f.source}}};const Z=["Filled","Linked","SlotPlaceholders"];export{e as Filled,t as Linked,n as SlotPlaceholders,Z as __namedExportsOrder,N as default};
