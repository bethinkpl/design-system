import{D as t,a as i}from"./DrawerHeader-DnXrEMhW.js";import{I as l}from"./Icon-CVHceNst.js";import"./vue.esm-bundler-Bq1ZKmuF.js";import"./Button-Cbw2_9er.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Divider-Ba-XwrF-.js";import"./IconButton-o4H-Dbj2.js";import"./Chip-ji2hlWAf.js";const y={title:"Components/Drawer/DrawerHeader",component:t},r=o=>({components:{DrawerHeader:t},setup(){return o},data(){return{ICONS:Object.freeze(l)}},template:`
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
        </drawer-header>`}),e=r.bind({}),n={eyebrowText:"eyebrow",isInteractiveEyebrow:!1,eyebrowEllipsis:!1,title:"Header Title",titleEllipsis:!1,titleColor:i.NEUTRAL_STRONG,leftIcon:null,chipLabel:"chip",isClosable:!0,hasDivider:!1,isSecondLevel:!1,actions:"actions slot",titleTrailing:"trailing slot"},a={eyebrowText:{control:"text"},isInteractiveEyebrow:{control:"boolean"},eyebrowEllipsis:{control:"boolean"},title:{control:"text"},titleEllipsis:{control:"boolean"},titleColor:{control:"select",options:Object.values(i)},leftIcon:{control:"select",options:[...Object.keys(l),null]},chipLabel:{control:"text"},hasDivider:{control:"boolean"},isSecondLevel:{control:"boolean"},isClosable:{control:"boolean"},actions:{control:"text"},titleTrailing:{control:"text"}};e.argTypes=a;e.args=n;e.parameters={design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?type=design&node-id=5844-97971&t=BghQUeaLDBGoEKOq-4"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => ({
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
})`,...e.parameters?.docs?.source}}};const f=["Interactive"];export{e as Interactive,f as __namedExportsOrder,y as default};
