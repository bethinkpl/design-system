import{B as a,a as l,b as i}from"./Banner-vhOMD_c2.js";import{I as s}from"./Icon-DUeXRUm6.js";import"./vue.esm-bundler-DcRN7CPI.js";import"./Button-XuK8IxnR.js";import"./Divider-NOTDPuJ1.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./IconButton-Cn83Zk5-.js";import"./device-9fgosCm4.js";import"./FeatureIcon-DY5WvpPf.js";const{useArgs:c}=__STORYBOOK_MODULE_PREVIEW_API__,_={title:"Components/Banner",component:a},m=r=>{const[b,d]=c();return{components:{Banner:a},setup(){return r},data(){return{ICONS:Object.freeze(s)}},methods:{onIsExpandedUpdated(p){d({isExpanded:p})}},template:`
                <banner
                        :closable="closable"
                        :icon="ICONS[icon]"
                        :color="color"
                        :title="title"
                        :buttonText="buttonText"
                        :is-expanded="isExpanded"
                        :is-icon-hidden-on-mobile="isIconHiddenOnMobile"
                        :size="size"
                        :title-in-color="titleInColor"
                        @update:isExpanded="onIsExpandedUpdated"
                >
                <template v-if="defaultText" #defaultText><span v-html="defaultText" /></template>
                <template v-if="expandedText" #expandedText>
                    <div v-html="expandedText" />
                </template>
                <template v-if="rightSlot" #rightSlot>
                    <div v-html="rightSlot" />
                </template>
                </banner>`}},e=m.bind({}),x={size:i.MEDIUM,color:l.DEFAULT,icon:null,isIconHiddenOnMobile:!1,title:"Banner Title",titleInColor:!1,buttonText:"",closable:!1,isExpanded:!1,defaultText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultrices malesuada vehicula. Mauris egestas scelerisque enim, condimentum aliquet arcu bibendum nec.",expandedText:"",rightSlot:""},u={closable:{control:"boolean"},icon:{control:"select",options:[null,...Object.keys(s)]},isIconHiddenOnMobile:{control:"boolean"},color:{control:"select",options:Object.values(l)},title:{control:"text"},buttonText:{control:"text"},defaultText:{control:"text"},expandedText:{control:"text"},rightSlot:{control:"text"},isExpanded:{control:"boolean"},size:{control:"select",options:Object.values(i)},titleInColor:{control:"boolean"}};e.argTypes=u;e.args=x;e.parameters={design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=3696%3A68274"}};var t,n,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`args => {
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
                        :is-expanded="isExpanded"
                        :is-icon-hidden-on-mobile="isIconHiddenOnMobile"
                        :size="size"
                        :title-in-color="titleInColor"
                        @update:isExpanded="onIsExpandedUpdated"
                >
                <template v-if="defaultText" #defaultText><span v-html="defaultText" /></template>
                <template v-if="expandedText" #expandedText>
                    <div v-html="expandedText" />
                </template>
                <template v-if="rightSlot" #rightSlot>
                    <div v-html="rightSlot" />
                </template>
                </banner>\`
  };
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const C=["Interactive"];export{e as Interactive,C as __namedExportsOrder,_ as default};
