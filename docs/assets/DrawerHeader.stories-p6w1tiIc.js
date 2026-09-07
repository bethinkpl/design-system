import{D as i,a as r,b as s}from"./DrawerHeader-BFbOrDr_.js";import{I as a}from"./Icon-CdUzGdbx.js";import{S as p,a as c}from"./SlotPlaceholder-BQQBev8O.js";import{t as b}from"./vue.esm-bundler-BjwGMXGm.js";import"./Button-DXBV2lSl.js";import"./Divider-Bk_mEbdR.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./IconButton-QdkwLB9f.js";import"./device-mzBmLsxe.js";import"./Chip-C1UWgDcz.js";import"./useLegacyI18n-Bv0SIZks.js";const v={title:"Components/Drawer/DrawerHeader",component:i},d=n=>({components:{DrawerHeader:i,SlotPlaceholder:p},setup(){return{...b(n),ICONS:a,SLOT_PLACEHOLDER_SIZES:c}},template:`
        <drawer-header
            :eyebrow-ellipsis="eyebrowEllipsis"
            :is-eyebrow-text-uppercase="isEyebrowTextUppercase"
            :eyebrow-text="eyebrowText"
            :has-divider="hasDivider"
            :is-closable="isClosable"
            :is-interactive-eyebrow="isInteractiveEyebrow"
            :is-second-level="isSecondLevel"
            :left-icon="ICONS[leftIcon]"
            :chip-label="chipLabel"
            :title-color="titleColor"
            :title-ellipsis="titleEllipsis"
            :is-title-text-uppercase="isTitleTextUppercase"
            :title="title"
            :has-back-button="hasBackButton"
            :background-color="backgroundColor"
        >
            <template #actions v-if="actions">
                <slot-placeholder :label="actions" :size="SLOT_PLACEHOLDER_SIZES.SMALL" />
            </template>
            <template #titleTrailing v-if="titleTrailing">
                <slot-placeholder :label="titleTrailing" :size="SLOT_PLACEHOLDER_SIZES.SMALL" />
            </template>
            <template #supporting v-if="supporting">
                <slot-placeholder :label="supporting" :size="SLOT_PLACEHOLDER_SIZES.SMALL" />
            </template>
        </drawer-header>`}),e=d.bind({}),E={eyebrowText:"eyebrow",isInteractiveEyebrow:!1,eyebrowEllipsis:!1,isEyebrowTextUppercase:!0,title:"Header Title",titleEllipsis:!1,isTitleTextUppercase:!1,titleColor:s.NEUTRAL_STRONG,leftIcon:null,chipLabel:"chip",isClosable:!0,hasDivider:!1,isSecondLevel:!1,actions:"actions slot",titleTrailing:"trailing slot",supporting:"supporting slot",hasBackButton:!1,backgroundColor:r.NONE},L={eyebrowText:{control:"text"},isInteractiveEyebrow:{control:"boolean"},eyebrowEllipsis:{control:"boolean"},isEyebrowTextUppercase:{control:"boolean"},title:{control:"text"},titleEllipsis:{control:"boolean"},isTitleTextUppercase:{control:"boolean"},titleColor:{control:"select",options:Object.values(s)},leftIcon:{control:"select",options:[...Object.keys(a),null]},chipLabel:{control:"text"},hasDivider:{control:"boolean"},isSecondLevel:{control:"boolean"},isClosable:{control:"boolean"},actions:{control:"text"},titleTrailing:{control:"text"},supporting:{control:"text"},hasBackButton:{control:"boolean"},backgroundColor:{control:"select",options:Object.values(r)}};e.argTypes=L;e.args=E;e.parameters={design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?type=design&node-id=5844-97971&t=BghQUeaLDBGoEKOq-4"}};var t,o,l;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`args => ({
  components: {
    DrawerHeader,
    SlotPlaceholder
  },
  setup() {
    return {
      ...toRefs(args),
      ICONS,
      SLOT_PLACEHOLDER_SIZES
    };
  },
  template: \`
        <drawer-header
            :eyebrow-ellipsis="eyebrowEllipsis"
            :is-eyebrow-text-uppercase="isEyebrowTextUppercase"
            :eyebrow-text="eyebrowText"
            :has-divider="hasDivider"
            :is-closable="isClosable"
            :is-interactive-eyebrow="isInteractiveEyebrow"
            :is-second-level="isSecondLevel"
            :left-icon="ICONS[leftIcon]"
            :chip-label="chipLabel"
            :title-color="titleColor"
            :title-ellipsis="titleEllipsis"
            :is-title-text-uppercase="isTitleTextUppercase"
            :title="title"
            :has-back-button="hasBackButton"
            :background-color="backgroundColor"
        >
            <template #actions v-if="actions">
                <slot-placeholder :label="actions" :size="SLOT_PLACEHOLDER_SIZES.SMALL" />
            </template>
            <template #titleTrailing v-if="titleTrailing">
                <slot-placeholder :label="titleTrailing" :size="SLOT_PLACEHOLDER_SIZES.SMALL" />
            </template>
            <template #supporting v-if="supporting">
                <slot-placeholder :label="supporting" :size="SLOT_PLACEHOLDER_SIZES.SMALL" />
            </template>
        </drawer-header>\`
})`,...(l=(o=e.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};const I=["Interactive"];export{e as Interactive,I as __namedExportsOrder,v as default};
