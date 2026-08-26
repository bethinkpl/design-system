import{D as i,S as a,a as l,b as r,c}from"./Switch-IPqbZwdR.js";import{a as S,I as t}from"./Icon-CdUzGdbx.js";import{w as g}from"./decorator-CcL-F-0p.js";import"./vue.esm-bundler-BjwGMXGm.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./chunk-4XZ63LWV-laKUlqim.js";import"./v4-CwV2VaSl.js";const y={title:"Components/Switch",component:i,decorators:[g]},m=d=>({components:{DsSwitch:i,Icon:S},setup(){return d},methods:{onSelectedUpdated(p){console.log(p)}},data(){return{ICONS:Object.freeze(t)}},template:`
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
    `}),e=m.bind({}),h={size:c.MEDIUM,radius:r.CAPSULE,iconLeft:null,iconRight:null,labelLeft:"Left option",labelRight:"Right option",state:l.DEFAULT,selectedSide:a.LEFT},u={size:{control:"select",options:Object.values(c)},radius:{control:"select",options:Object.values(r)},iconLeft:{control:"select",options:[null,...Object.keys(t)]},iconRight:{control:"select",options:[null,...Object.keys(t)]},state:{control:"select",options:Object.values(l)},selectedSide:{control:"select",options:Object.values(a)}};e.argTypes=u;e.args=h;e.parameters={actions:{handles:["updated:selectedSide"]},design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?type=design&node-id=7270-124052&mode=design&t=cVof0yT3M88A1z0U-0"}};var s,n,o;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`args => ({
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
})`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const L=["Interactive"];export{e as Interactive,L as __namedExportsOrder,y as default};
