import{D as o,a as r}from"./DrawerHeader-B6p3qZIF.js";import{I as n}from"./Icon-Dg-H1Zak.js";import"./vue.esm-bundler-Dgz4BqwH.js";import"./Button-CsOCHUpA.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Divider-DTjC3ra5.js";import"./IconButton-tAYYPmG6.js";import"./Chip-DseOCaPi.js";const g={title:"Components/Drawer/DrawerHeader",component:o},s=a=>({components:{DrawerHeader:o},setup(){return a},data(){return{ICONS:Object.freeze(n)}},template:`
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
        >
            <template #actions v-if="actions">
                <div v-html="actions" />
            </template>
            <template #titleTrailing v-if="titleTrailing">
                <div v-html="titleTrailing" />
            </template>
        </drawer-header>`}),e=s.bind({}),c={eyebrowText:"eyebrow",isInteractiveEyebrow:!1,eyebrowEllipsis:!1,title:"Header Title",titleEllipsis:!1,titleColor:r.NEUTRAL_STRONG,leftIcon:null,chipLabel:"chip",isClosable:!0,hasDivider:!1,isSecondLevel:!1,actions:"actions slot",titleTrailing:"trailing slot"},p={eyebrowText:{control:"text"},isInteractiveEyebrow:{control:"boolean"},eyebrowEllipsis:{control:"boolean"},title:{control:"text"},titleEllipsis:{control:"boolean"},titleColor:{control:"select",options:Object.values(r)},leftIcon:{control:"select",options:[...Object.keys(n),null]},chipLabel:{control:"text"},hasDivider:{control:"boolean"},isSecondLevel:{control:"boolean"},isClosable:{control:"boolean"},actions:{control:"text"},titleTrailing:{control:"text"}};e.argTypes=p;e.args=c;e.parameters={design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?type=design&node-id=5844-97971&t=BghQUeaLDBGoEKOq-4"}};var t,i,l;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`args => ({
  components: {
    DrawerHeader
  },
  setup() {
    return args;
  },
  data() {
    return {
      ICONS: Object.freeze(ICONS)
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
        >
            <template #actions v-if="actions">
                <div v-html="actions" />
            </template>
            <template #titleTrailing v-if="titleTrailing">
                <div v-html="titleTrailing" />
            </template>
        </drawer-header>\`
})`,...(l=(i=e.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const I=["Interactive"];export{e as Interactive,I as __namedExportsOrder,g as default};