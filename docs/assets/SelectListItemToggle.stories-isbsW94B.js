import{S as a}from"./SelectListItemToggle-DVeIonzN.js";import{I as n}from"./Icon-DLflpryl.js";import{a as l,b as r}from"./SelectListItem-BfrNC0lN.js";import"./vue.esm-bundler-DD4BrEtS.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const{useArgs:O}=__STORYBOOK_MODULE_PREVIEW_API__,T={title:"Components/SelectList/SelectListItemToggle",component:a},f=c=>{const[g,t]=O();return{components:{SelectListItemToggle:a},setup(){return c},template:`
                <select-list-item-toggle
                        :icon-off="ICONS[iconOff]"
                        :icon-on="ICONS[iconOn]"
                        :is-on="isOn"
                        :label-off="labelOff"
                        :label-on="labelOn"
                        :size="size"
                        :state="state"
                        @click.native="onClick"
                />
        `,data(){return{ICONS:Object.freeze(n)}},methods:{onClick(){t({isLoading:!0}),setTimeout(()=>t({isLoading:!1,isOn:!this.isOn}),1e3)}}}},e=f.bind({}),m={size:r.SMALL,labelOff:"Label off",labelOn:"Label on",iconOff:"FA_STAR",iconOn:"FA_STAR_SOLID",state:l.DEFAULT,isOn:!1},p={iconOff:{control:"select",options:[null,...Object.keys(n)]},iconOn:{control:"select",options:[null,...Object.keys(n)]},size:{control:"select",options:Object.values(r)},state:{control:"select",options:Object.values(l)}};e.argTypes=p;e.args=m;e.parameters={design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=5367%3A96717&t=rKEt9RQrHIDsfC7p-4"}};var s,o,i;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`args => {
  const [_, updateArgs] = useArgs();
  return {
    components: {
      SelectListItemToggle
    },
    setup() {
      return args;
    },
    template: \`
                <select-list-item-toggle
                        :icon-off="ICONS[iconOff]"
                        :icon-on="ICONS[iconOn]"
                        :is-on="isOn"
                        :label-off="labelOff"
                        :label-on="labelOn"
                        :size="size"
                        :state="state"
                        @click.native="onClick"
                />
        \`,
    data() {
      return {
        ICONS: Object.freeze(ICONS)
      };
    },
    methods: {
      onClick() {
        updateArgs({
          isLoading: true
        });
        setTimeout(() => updateArgs({
          isLoading: false,
          // @ts-ignore
          isOn: !this.isOn
        }), 1000);
      }
    }
  };
}`,...(i=(o=e.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const _=["Interactive"];export{e as Interactive,_ as __namedExportsOrder,T as default};
