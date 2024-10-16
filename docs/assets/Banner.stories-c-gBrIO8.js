import{B as a,a as l,b as s}from"./Banner-pfk44IPM.js";import{I as d}from"./Icon-Dg-H1Zak.js";import"./Button-CsOCHUpA.js";import"./vue.esm-bundler-Dgz4BqwH.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Divider-DTjC3ra5.js";import"./IconButton-tAYYPmG6.js";const{useArgs:c}=__STORYBOOK_MODULE_PREVIEW_API__,v={title:"Components/Banner",component:a},m=r=>{const[b,i]=c();return{components:{Banner:a},setup(){return r},data(){return{ICONS:Object.freeze(d)}},methods:{onIsExpandedUpdated(p){i({isExpanded:p})}},template:`
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const E=["Interactive"];export{e as Interactive,E as __namedExportsOrder,v as default};
