import{D as s,S as n,a as i,b as o,c as a}from"./Switch-Ays7txCd.js";import{I as t,a as c}from"./Icon-CVHceNst.js";import"./vue.esm-bundler-Bq1ZKmuF.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const b={title:"Components/Switch",component:s},r=(l,{updateArgs:g})=>({components:{DsSwitch:s,Icon:c},setup(){return l},methods:{onSelectedUpdated(d){console.log(d)}},data(){return{ICONS:Object.freeze(t)}},template:`
        <div style="width: 500px; height: 300px; padding: 10px; border: 1px solid var(--raw-gray-100); position:relative">
            <ds-switch
                :size="size"
                :radius="radius"
                :icon-left="ICONS[iconLeft]"
                :icon-right="ICONS[iconRight]"
                :label-left="labelLeft"
                :label-right="labelRight"
                :state="state"
                :selectedSide="selectedSide"
                @update:selectedSide="onSelectedUpdated"
            />
        </div>
    `}),e=r.bind({}),p={size:n.MEDIUM,radius:i.CAPSULE,iconLeft:null,iconRight:null,labelLeft:"Left option",labelRight:"Right option",state:o.DEFAULT,selectedSide:a.LEFT},S={size:{control:"select",options:Object.values(n)},radius:{control:"select",options:Object.values(i)},iconLeft:{control:"select",options:[null,...Object.keys(t)]},iconRight:{control:"select",options:[null,...Object.keys(t)]},state:{control:"select",options:Object.values(o)},selectedSide:{control:"select",options:Object.values(a)}};e.argTypes=S;e.args=p;e.parameters={actions:{handles:["updated:selectedSide"]},design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?type=design&node-id=7270-124052&mode=design&t=cVof0yT3M88A1z0U-0"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`(args, {
  updateArgs
}) => ({
  components: {
    DsSwitch,
    Icon
  },
  setup() {
    return args;
  },
  methods: {
    onSelectedUpdated(side) {
      console.log(side);
    }
  },
  data() {
    return {
      ICONS: Object.freeze(ICONS)
    };
  },
  template: \`
        <div style="width: 500px; height: 300px; padding: 10px; border: 1px solid var(--raw-gray-100); position:relative">
            <ds-switch
                :size="size"
                :radius="radius"
                :icon-left="ICONS[iconLeft]"
                :icon-right="ICONS[iconRight]"
                :label-left="labelLeft"
                :label-right="labelRight"
                :state="state"
                :selectedSide="selectedSide"
                @update:selectedSide="onSelectedUpdated"
            />
        </div>
    \`
})`,...e.parameters?.docs?.source}}};const f=["Interactive"];export{e as Interactive,f as __namedExportsOrder,b as default};
