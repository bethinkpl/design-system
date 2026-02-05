import{h as s,P as c,f as l}from"./ProgressBarLegendItem-Br7enVIj.js";import{I as t}from"./Icon-C3NipVtS.js";import"./vue.esm-bundler-BEu-HfQJ.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const S={title:"Components/ProgressBar/ProgressBarLegendItem",component:s},i=r=>({components:{ProgressBarLegendItem:s},setup(){return{args:r}},template:`
        <progress-bar-legend-item :label="args.label" :data="args.data" :percent-value="args.percentValue" :size="args.size" :color="args.color" :icon="icon"></progress-bar-legend-item>`,data(){return{ICONS:Object.freeze(t)}},computed:{icon:()=>r.icon?t[r.icon]:null}}),e=i.bind({}),p={size:{control:"select",options:Object.values(c)},color:{control:"select",options:Object.values(l)},icon:{control:"select",options:[null,...Object.keys(t)]},label:{control:"text"},data:{control:"text"},percentValue:{control:"text"}};e.argTypes=p;e.args={size:c.SMALL,color:l.PRIMARY,icon:null,label:"Random label",data:"Some Data",percentValue:"10"};e.parameters={design:{type:"figma",url:"https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=14650-1822&m=dev"}};var n,o,a;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`args => ({
  components: {
    ProgressBarLegendItem
  },
  setup() {
    return {
      args
    };
  },
  template: \`
        <progress-bar-legend-item :label="args.label" :data="args.data" :percent-value="args.percentValue" :size="args.size" :color="args.color" :icon="icon"></progress-bar-legend-item>\`,
  data() {
    return {
      ICONS: Object.freeze(ICONS)
    };
  },
  computed: {
    icon: () => {
      if (args.icon) {
        return ICONS[args.icon];
      }
      return null;
    }
  }
})`,...(a=(o=e.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const b=["Interactive"];export{e as Interactive,b as __namedExportsOrder,S as default};
