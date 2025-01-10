import{D as i,S as a,a as l,b as c,c as d}from"./Switch-D7dezY9z.js";import{I as t,a as S}from"./Icon-ABi09a6P.js";import{w as g}from"./decorator-CSnIf-k5.js";import"./vue.esm-bundler-CWlcb7ht.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./v4-BZawosSj.js";const v={title:"Components/Switch",component:i,decorators:[g]},h=r=>({components:{DsSwitch:i,Icon:S},setup(){return r},methods:{onSelectedUpdated(p){console.log(p)}},data(){return{ICONS:Object.freeze(t)}},template:`
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
    `}),e=h.bind({}),m={size:a.MEDIUM,radius:l.CAPSULE,iconLeft:null,iconRight:null,labelLeft:"Left option",labelRight:"Right option",state:c.DEFAULT,selectedSide:d.LEFT},u={size:{control:"select",options:Object.values(a)},radius:{control:"select",options:Object.values(l)},iconLeft:{control:"select",options:[null,...Object.keys(t)]},iconRight:{control:"select",options:[null,...Object.keys(t)]},state:{control:"select",options:Object.values(c)},selectedSide:{control:"select",options:Object.values(d)}};e.argTypes=u;e.args=m;e.parameters={actions:{handles:["updated:selectedSide"]},design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?type=design&node-id=7270-124052&mode=design&t=cVof0yT3M88A1z0U-0"}};var s,n,o;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`args => ({
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
})`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const y=["Interactive"];export{e as Interactive,y as __namedExportsOrder,v as default};
