import{B as a,a as l,b as s}from"./Banner-B9Tr_i8L.js";import{I as d}from"./Icon-CytrC3Ws.js";import"./Button-BspEkV6x.js";import"./vue.esm-bundler-C__e7YM5.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Divider-C8Drds6C.js";import"./IconButton-D1G48iNF.js";import"./device-9fgosCm4.js";const{useArgs:c}=__STORYBOOK_MODULE_PREVIEW_API__,E={title:"Components/Banner",component:a},m=r=>{const[b,i]=c();return{components:{Banner:a},setup(){return r},data(){return{ICONS:Object.freeze(d)}},methods:{onIsExpandedUpdated(p){i({isExpanded:p})}},template:`
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
                </banner>`}},e=m.bind({}),u={closable:!1,icon:null,color:l.DEFAULT,title:"Banner Title",buttonText:"",layout:s.HORIZONTAL,defaultText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultrices malesuada vehicula. Mauris egestas scelerisque enim, condimentum aliquet arcu bibendum nec.",expandedText:"",rightSlot:"",isExpanded:!1,isIconHiddenOnMobile:!1},x={closable:{control:"boolean"},icon:{control:"select",options:[null,...Object.keys(d)]},isIconHiddenOnMobile:{control:"boolean"},color:{control:"select",options:Object.values(l)},title:{control:"text"},buttonText:{control:"text"},layout:{control:"select",options:Object.values(s)},defaultText:{control:"text"},expandedText:{control:"text"},rightSlot:{control:"text"},isExpanded:{control:"boolean"}};e.argTypes=x;e.args=u;e.parameters={design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=3696%3A68274"}};var t,n,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`args => {
  const [_, updateArgs] = useArgs();
  return {
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
  };
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const _=["Interactive"];export{e as Interactive,_ as __namedExportsOrder,E as default};
