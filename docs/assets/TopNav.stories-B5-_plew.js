import{T as o,_ as m,U as S}from"./UserDropdownDivider-Du7kJuOR.js";import{T as d}from"./TopNavBranding-D1wQdYPV.js";import{F as O,a as _}from"./Flag-zM6l48_K.js";import{F as T}from"./flags-B7UuI7TH.js";import{I as c,b as I,c as E,a as N}from"./IconButton-DPCw5IX6.js";import{b as L}from"./Button-4WEdqI-U.js";import{I as U}from"./Icon-QFU__4e-.js";import{_ as u}from"./UserDropdownItem-42sFvswT.js";import{S as A,a as g}from"./SlotPlaceholder-C-KWt78D.js";import{T as C}from"./topNavStoryLogo-C8n3Ajyz.js";import"./vue.esm-bundler-DeRiNcSr.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Avatar-Cvz_TJ_Q.js";import"./Badge-CDi9eKyz.js";import"./Tooltip-CWn3E76l.js";import"./device-mzBmLsxe.js";import"./Dropdown-DnnVZ6l4.js";import"./PopoverTriggerReference-DU9WjlMc.js";import"./Primitive-DQnq458G.js";import"./index-BxAcIQAY.js";import"./PopperContent-DKUWvcUs.js";import"./Presence-Ccu_tC1V.js";import"./SelectList-Df3d7moM.js";import"./SelectListItemContainer-CciXNmn3.js";import"./SelectListItemDivider-CuZhH3yr.js";import"./Divider-CbFkO93G.js";import"./TextGroup-BiVnAA-d.js";import"./_commonjsHelpers-D6Ya60D-.js";import"./Skeleton-DxOZ6CP1.js";import"./SelectListItem-bHwieP_d.js";const ae={title:"Components/TopNav/TopNav",component:o},R=()=>({components:{TopNav:o,TopNavBranding:d,Flag:O,IconButton:c,UserDropdown:S,UserDropdownItem:u,UserDropdownDivider:m},setup(){return{logo:C,FLAGS:T,FLAG_SIZES:_,ICONS:U,ICON_BUTTON_COLORS:N,ICON_BUTTON_SIZES:E,ICON_BUTTON_TYPES:I,BUTTON_RADIUSES:L}},template:`
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
    `}),e=R.bind({}),D=()=>({components:{TopNav:o,SlotPlaceholder:A},setup(){return{SLOT_PLACEHOLDER_SIZES:g}},template:`
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
