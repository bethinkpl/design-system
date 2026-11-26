import{T as o,_ as m,U as S}from"./UserDropdownDivider-BkDjEVgp.js";import{T as d}from"./TopNavBranding-CoKXAY4P.js";import{F as O,b as _,a as T}from"./flags-D4eeNDn_.js";import{I as c,b as I,c as E,a as N}from"./IconButton-BP3MsFJS.js";import{b as L}from"./Button-C24VVysr.js";import{_ as U}from"./UserDropdownItem-FM0UCaJf.js";import{S as u,a as A}from"./SlotPlaceholder-DGwCsFz7.js";import{T as g}from"./topNavStoryLogo-C8n3Ajyz.js";import{I as C}from"./Icon-BCNBiMEg.js";import"./vue.esm-bundler-S9zc6Wpc.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Avatar-BuoCNnT1.js";import"./Badge-Nq8X1BJu.js";import"./Tooltip-DGxAUyqd.js";import"./device-mzBmLsxe.js";import"./Dropdown-B14FGbTx.js";import"./PopoverTriggerReference-B8D-PfSb.js";import"./Primitive-DZpX8QWU.js";import"./index-Dm7VD4DC.js";import"./PopperContent-Q46ZxJO6.js";import"./Presence-BVs8m1Yx.js";import"./SelectList-DDs0Y1IW.js";import"./SelectListItemContainer-ug3rOVHZ.js";import"./SelectListItemDivider-CDg6g1xy.js";import"./Divider-Cfx8bFqy.js";import"./TextGroup-CIbAZRxD.js";import"./Skeleton-Dph7qEcf.js";import"./index-CPvnfNuQ.js";import"./SelectListItem-BSUo8-oj.js";import"./fontawesome-CXWUXLFT.js";const ae={title:"Components/TopNav/TopNav",component:o},R=()=>({components:{TopNav:o,TopNavBranding:d,Flag:O,IconButton:c,UserDropdown:S,UserDropdownItem:U,UserDropdownDivider:m},setup(){return{logo:g,FLAGS:T,FLAG_SIZES:_,ICONS:C,ICON_BUTTON_COLORS:N,ICON_BUTTON_SIZES:E,ICON_BUTTON_TYPES:I,BUTTON_RADIUSES:L}},template:`
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
                <user-dropdown username="Bethink User" email="bethink.user@bethink.pl">
                    <template #default="{ close }">
                        <user-dropdown-item :icon-left="ICONS.FA_USER" label="Konto" />
                        <user-dropdown-divider />
                        <user-dropdown-item
                            :icon-left="ICONS.FA_ARROW_RIGHT_FROM_BRACKET"
                            label="Wyloguj się"
                            @click="close"
                        />
                    </template>
                </user-dropdown>
            </template>
        </top-nav>
    `}),e=R.bind({}),D=()=>({components:{TopNav:o,SlotPlaceholder:u},setup(){return{SLOT_PLACEHOLDER_SIZES:A}},template:`
        <top-nav>
            <template #leading>
                <slot-placeholder label="leading" :size="SLOT_PLACEHOLDER_SIZES.MEDIUM" />
            </template>
            <slot-placeholder label="default" :size="SLOT_PLACEHOLDER_SIZES.MEDIUM" />
            <template #trailing>
                <slot-placeholder label="trailing" :size="SLOT_PLACEHOLDER_SIZES.MEDIUM" />
            </template>
        </top-nav>
    `}),t=D.bind({}),s={design:{type:"figma",url:"https://www.figma.com/design/xym3gXf0vBCofzksDtRDaU/INI-201-E-commerce?node-id=345-21287&m=dev"}};e.parameters=s;t.parameters=s;var n,a,l;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`() => ({
  components: {
    TopNav,
    TopNavBranding,
    Flag,
    IconButton,
    UserDropdown,
    UserDropdownItem,
    UserDropdownDivider
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
      BUTTON_RADIUSES
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
                <user-dropdown username="Bethink User" email="bethink.user@bethink.pl">
                    <template #default="{ close }">
                        <user-dropdown-item :icon-left="ICONS.FA_USER" label="Konto" />
                        <user-dropdown-divider />
                        <user-dropdown-item
                            :icon-left="ICONS.FA_ARROW_RIGHT_FROM_BRACKET"
                            label="Wyloguj się"
                            @click="close"
                        />
                    </template>
                </user-dropdown>
            </template>
        </top-nav>
    \`
})`,...(l=(a=e.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};var r,p,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`() => ({
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
})`,...(i=(p=t.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};const le=["Filled","SlotPlaceholders"];export{e as Filled,t as SlotPlaceholders,le as __namedExportsOrder,ae as default};
