import{S as s}from"./SelectListItemToggle-BhIF97Dg.js";import{I as n}from"./Icon-CVHceNst.js";import{b as o,c as i}from"./SelectListItem-B5BpBuxD.js";import"./vue.esm-bundler-Bq1ZKmuF.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const S={title:"Components/SelectList/SelectListItemToggle",component:s},a=(l,{updateArgs:t})=>({components:{SelectListItemToggle:s},setup(){return l},template:`
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
    `,data(){return{ICONS:Object.freeze(n)}},methods:{onClick(){t({isLoading:!0}),setTimeout(()=>t({isLoading:!1,isOn:!this.isOn}),1e3)}}}),e=a.bind({}),c={size:o.SMALL,labelOff:"Label off",labelOn:"Label on",iconOff:"FA_STAR",iconOn:"FA_STAR_SOLID",state:i.DEFAULT,isOn:!1},r={iconOff:{control:"select",options:[null,...Object.keys(n)]},iconOn:{control:"select",options:[null,...Object.keys(n)]},size:{control:"select",options:Object.values(o)},state:{control:"select",options:Object.values(i)}};e.argTypes=r;e.args=c;e.parameters={design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=5367%3A96717&t=rKEt9RQrHIDsfC7p-4"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`(args, {
  updateArgs
}) => ({
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
})`,...e.parameters?.docs?.source}}};const I=["Interactive"];export{e as Interactive,I as __namedExportsOrder,S as default};
