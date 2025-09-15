import{D as o,a as r}from"./DrawerHeader-CA6Qcw9P.js";import{I as a}from"./Icon-S5zPLm_h.js";import"./vue.esm-bundler-DcRN7CPI.js";import"./Button-QhwLVK52.js";import"./Divider-NOTDPuJ1.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./IconButton-DCpLAyGJ.js";import"./device-9fgosCm4.js";import"./Chip-0W8FKghZ.js";const u={title:"Components/Drawer/DrawerHeader",component:o},s=n=>({components:{DrawerHeader:o},setup(){return n},data(){return{ICONS:Object.freeze(a)}},template:`
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
        >
            <template #actions v-if="actions">
                <div v-html="actions" />
            </template>
            <template #titleTrailing v-if="titleTrailing">
                <div v-html="titleTrailing" />
            </template>
        </drawer-header>`}),e=s.bind({}),c={eyebrowText:"eyebrow",isInteractiveEyebrow:!1,eyebrowEllipsis:!1,title:"Header Title",titleEllipsis:!1,titleColor:r.NEUTRAL_STRONG,leftIcon:null,chipLabel:"chip",isClosable:!0,hasDivider:!1,isSecondLevel:!1,actions:"actions slot",titleTrailing:"trailing slot",hasBackButton:!1},p={eyebrowText:{control:"text"},isInteractiveEyebrow:{control:"boolean"},eyebrowEllipsis:{control:"boolean"},title:{control:"text"},titleEllipsis:{control:"boolean"},titleColor:{control:"select",options:Object.values(r)},leftIcon:{control:"select",options:[...Object.keys(a),null]},chipLabel:{control:"text"},hasDivider:{control:"boolean"},isSecondLevel:{control:"boolean"},isClosable:{control:"boolean"},actions:{control:"text"},titleTrailing:{control:"text"},hasBackButton:{control:"boolean"}};e.argTypes=p;e.args=c;e.parameters={design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?type=design&node-id=5844-97971&t=BghQUeaLDBGoEKOq-4"}};var t,i,l;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`args => ({
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
            :has-back-button="hasBackButton"
        >
            <template #actions v-if="actions">
                <div v-html="actions" />
            </template>
            <template #titleTrailing v-if="titleTrailing">
                <div v-html="titleTrailing" />
            </template>
        </drawer-header>\`
})`,...(l=(i=e.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const I=["Interactive"];export{e as Interactive,I as __namedExportsOrder,u as default};
