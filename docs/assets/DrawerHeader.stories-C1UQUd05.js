import{D as i,a as r,b as a}from"./DrawerHeader-BOhdkKtD.js";import{I as s}from"./Icon-CgiTwonM.js";import{S as c,a as p}from"./SlotPlaceholder-BZV-a8Mn.js";import{t as b}from"./vue.esm-bundler-Dauw-loN.js";import"./Button-CaO3uHjI.js";import"./Divider-KZoliOA5.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./IconButton-BCEo1-Pu.js";import"./device-mzBmLsxe.js";import"./Chip-DhxmN5Lc.js";import"./useLegacyI18n-BIaJbRkl.js";const I={title:"Components/Drawer/DrawerHeader",component:i},d=n=>({components:{DrawerHeader:i,SlotPlaceholder:c},setup(){return{...b(n),ICONS:s,SLOT_PLACEHOLDER_SIZES:p}},template:`
        <drawer-header
            :eyebrow-ellipsis="eyebrowEllipsis"
            :eyebrow-text="eyebrowText"
            :has-divider="hasDivider"
            :is-closable="isClosable"
            :is-interactive-eyebrow="isInteractiveEyebrow"
            :is-second-level="isSecondLevel"
            :left-icon="ICONS[leftIcon]"
            :chip-label="chipLabel"
            :title-color="titleColor"
            :title-ellipsis="titleEllipsis"
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
        </drawer-header>`}),e=d.bind({}),L={eyebrowText:"eyebrow",isInteractiveEyebrow:!1,eyebrowEllipsis:!1,title:"Header Title",titleEllipsis:!1,titleColor:a.NEUTRAL_STRONG,leftIcon:null,chipLabel:"chip",isClosable:!0,hasDivider:!1,isSecondLevel:!1,actions:"actions slot",titleTrailing:"trailing slot",supporting:"supporting slot",hasBackButton:!1,backgroundColor:r.NONE},S={eyebrowText:{control:"text"},isInteractiveEyebrow:{control:"boolean"},eyebrowEllipsis:{control:"boolean"},title:{control:"text"},titleEllipsis:{control:"boolean"},titleColor:{control:"select",options:Object.values(a)},leftIcon:{control:"select",options:[...Object.keys(s),null]},chipLabel:{control:"text"},hasDivider:{control:"boolean"},isSecondLevel:{control:"boolean"},isClosable:{control:"boolean"},actions:{control:"text"},titleTrailing:{control:"text"},supporting:{control:"text"},hasBackButton:{control:"boolean"},backgroundColor:{control:"select",options:Object.values(r)}};e.argTypes=S;e.args=L;e.parameters={design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?type=design&node-id=5844-97971&t=BghQUeaLDBGoEKOq-4"}};var t,o,l;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`args => ({
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
            :eyebrow-text="eyebrowText"
            :has-divider="hasDivider"
            :is-closable="isClosable"
            :is-interactive-eyebrow="isInteractiveEyebrow"
            :is-second-level="isSecondLevel"
            :left-icon="ICONS[leftIcon]"
            :chip-label="chipLabel"
            :title-color="titleColor"
            :title-ellipsis="titleEllipsis"
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
})`,...(l=(o=e.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};const y=["Interactive"];export{e as Interactive,y as __namedExportsOrder,I as default};
