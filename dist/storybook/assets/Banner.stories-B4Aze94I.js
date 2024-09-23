import{B as t,a as n,b as o}from"./Banner-BFpQNeYP.js";import{I as a}from"./Icon-CVHceNst.js";import"./Button-Cbw2_9er.js";import"./vue.esm-bundler-Bq1ZKmuF.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Divider-Ba-XwrF-.js";import"./IconButton-o4H-Dbj2.js";const f={title:"Components/Banner",component:t},s=(l,{updateArgs:d})=>({components:{Banner:t},setup(){return l},data(){return{ICONS:Object.freeze(a)}},methods:{onIsExpandedUpdated(i){d({isExpanded:i})}},template:`
            <banner
                    :closable="closable"
                    :icon="ICONS[icon]"
                    :color="color"
                    :title="title"
                    :buttonText="buttonText"
                    :layout="layout"
                    :is-expanded="isExpanded"
                    :is-icon-hidden-on-mobile="isIconHiddenOnMobile"
                    @update:isExpanded="onIsExpandedUpdated"
            >
            <template #defaultText><span v-html="defaultText" /></template>
            <template v-if="expandedText" #expandedText>
                <div v-html="expandedText" />
            </template>
            <template v-if="rightSlot" #rightSlot>
                <div v-html="rightSlot" />
            </template>
            </banner>`}),e=s.bind({}),r={closable:!1,icon:null,color:n.DEFAULT,title:"Banner Title",buttonText:"",layout:o.HORIZONTAL,defaultText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultrices malesuada vehicula. Mauris egestas scelerisque enim, condimentum aliquet arcu bibendum nec.",expandedText:"",rightSlot:"",isExpanded:!1,isIconHiddenOnMobile:!1},p={closable:{control:"boolean"},icon:{control:"select",options:[null,...Object.keys(a)]},isIconHiddenOnMobile:{control:"boolean"},color:{control:"select",options:Object.values(n)},title:{control:"text"},buttonText:{control:"text"},layout:{control:"select",options:Object.values(o)},defaultText:{control:"text"},expandedText:{control:"text"},rightSlot:{control:"text"},isExpanded:{control:"boolean"}};e.argTypes=p;e.args=r;e.parameters={design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=3696%3A68274"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`(args, {
  updateArgs
}) => ({
  components: {
    Banner
  },
  setup() {
    return args;
  },
  data() {
    return {
      ICONS: Object.freeze(ICONS)
    };
  },
  methods: {
    onIsExpandedUpdated(isExpanded) {
      updateArgs({
        isExpanded
      });
    }
  },
  template: \`
            <banner
                    :closable="closable"
                    :icon="ICONS[icon]"
                    :color="color"
                    :title="title"
                    :buttonText="buttonText"
                    :layout="layout"
                    :is-expanded="isExpanded"
                    :is-icon-hidden-on-mobile="isIconHiddenOnMobile"
                    @update:isExpanded="onIsExpandedUpdated"
            >
            <template #defaultText><span v-html="defaultText" /></template>
            <template v-if="expandedText" #expandedText>
                <div v-html="expandedText" />
            </template>
            <template v-if="rightSlot" #rightSlot>
                <div v-html="rightSlot" />
            </template>
            </banner>\`
})`,...e.parameters?.docs?.source}}};const O=["Interactive"];export{e as Interactive,O as __namedExportsOrder,f as default};
