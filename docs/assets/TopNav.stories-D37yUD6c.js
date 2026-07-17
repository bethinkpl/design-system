import{T as a}from"./TopNav-B49JVkNl.js";import{T as i}from"./TopNavBranding-CTVIHyES.js";import{F as m,a as O}from"./Flag-bUgw_7n3.js";import{F as _}from"./flags-3Q26n80q.js";import{I as T,b as E,c as I,a as N}from"./IconButton-zxxnPEnZ.js";import{e as c}from"./Button-Chm9wFwa.js";import{I as L}from"./Icon-sA9NtGkq.js";import{A,a as d}from"./Avatar-CuEXPcpb.js";import{S as g,a as U}from"./SlotPlaceholder-CuZiU-PR.js";import{T as C}from"./topNavStoryLogo-C8n3Ajyz.js";import"./vue.esm-bundler-yuXcNhMB.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./device-mzBmLsxe.js";import"./Badge-B59AzyEj.js";import"./Tooltip-CFsl4BrK.js";const X={title:"Components/TopNav/TopNav",component:a},R=()=>({components:{TopNav:a,TopNavBranding:i,Flag:m,IconButton:T,Avatar:A},setup(){return{logo:C,FLAGS:_,FLAG_SIZES:O,ICONS:L,ICON_BUTTON_COLORS:N,ICON_BUTTON_SIZES:I,ICON_BUTTON_TYPES:E,BUTTON_RADIUSES:c,AVATAR_SIZES:d}},template:`
        <top-nav>
            <template #leading>
                <icon-button
                    :icon="ICONS.FA_BARS"
                    :size="ICON_BUTTON_SIZES.MEDIUM"
                    :type="ICON_BUTTON_TYPES.ICON_ONLY"
                    :color="ICON_BUTTON_COLORS.NEUTRAL"
                    :radius="BUTTON_RADIUSES.ROUNDED"
                />
            </template>
            <top-nav-branding title="Bethink">
                <template #logo>
                    <span v-html="logo" style="display: inline-flex;" />
                </template>
                <template #accessory>
                    <flag :flag="FLAGS.FLAG_POLAND" :size="FLAG_SIZES.XXS" />
                </template>
            </top-nav-branding>
            <template #trailing>
                <avatar username="Bethink User" :size="AVATAR_SIZES.X_SMALL" />
            </template>
        </top-nav>
    `}),e=R.bind({}),v=()=>({components:{TopNav:a,SlotPlaceholder:g},setup(){return{SLOT_PLACEHOLDER_SIZES:U}},template:`
        <top-nav>
            <template #leading>
                <slot-placeholder label="leading" :size="SLOT_PLACEHOLDER_SIZES.MEDIUM" />
            </template>
            <slot-placeholder label="default" :size="SLOT_PLACEHOLDER_SIZES.MEDIUM" />
            <template #trailing>
                <slot-placeholder label="trailing" :size="SLOT_PLACEHOLDER_SIZES.MEDIUM" />
            </template>
        </top-nav>
    `}),t=v.bind({}),S={design:{type:"figma",url:"https://www.figma.com/design/xym3gXf0vBCofzksDtRDaU/INI-201-E-commerce?node-id=345-21287&m=dev"}};e.parameters=S;t.parameters=S;var n,o,l;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`() => ({
  components: {
    TopNav,
    TopNavBranding,
    Flag,
    IconButton,
    Avatar
  },
  setup() {
    return {
      logo: TOP_NAV_STORY_LOGO,
      FLAGS,
      FLAG_SIZES,
      ICONS,
      ICON_BUTTON_COLORS,
      ICON_BUTTON_SIZES,
      ICON_BUTTON_TYPES,
      BUTTON_RADIUSES,
      AVATAR_SIZES
    };
  },
  template: \`
        <top-nav>
            <template #leading>
                <icon-button
                    :icon="ICONS.FA_BARS"
                    :size="ICON_BUTTON_SIZES.MEDIUM"
                    :type="ICON_BUTTON_TYPES.ICON_ONLY"
                    :color="ICON_BUTTON_COLORS.NEUTRAL"
                    :radius="BUTTON_RADIUSES.ROUNDED"
                />
            </template>
            <top-nav-branding title="Bethink">
                <template #logo>
                    <span v-html="logo" style="display: inline-flex;" />
                </template>
                <template #accessory>
                    <flag :flag="FLAGS.FLAG_POLAND" :size="FLAG_SIZES.XXS" />
                </template>
            </top-nav-branding>
            <template #trailing>
                <avatar username="Bethink User" :size="AVATAR_SIZES.X_SMALL" />
            </template>
        </top-nav>
    \`
})`,...(l=(o=e.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};var r,p,s;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`() => ({
  components: {
    TopNav,
    SlotPlaceholder
  },
  setup() {
    return {
      SLOT_PLACEHOLDER_SIZES
    };
  },
  template: \`
        <top-nav>
            <template #leading>
                <slot-placeholder label="leading" :size="SLOT_PLACEHOLDER_SIZES.MEDIUM" />
            </template>
            <slot-placeholder label="default" :size="SLOT_PLACEHOLDER_SIZES.MEDIUM" />
            <template #trailing>
                <slot-placeholder label="trailing" :size="SLOT_PLACEHOLDER_SIZES.MEDIUM" />
            </template>
        </top-nav>
    \`
})`,...(s=(p=t.parameters)==null?void 0:p.docs)==null?void 0:s.source}}};const V=["Filled","SlotPlaceholders"];export{e as Filled,t as SlotPlaceholders,V as __namedExportsOrder,X as default};
