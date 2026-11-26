import{a as n,b as s,D as c}from"./Divider-Cfx8bFqy.js";import{f as m,c as l,h as D,J as u,o as v}from"./vue.esm-bundler-S9zc6Wpc.js";import{_ as f}from"./_plugin-vue_export-helper-DlAUqK2U.js";const a=m({name:"DrawerDivider",components:{DsDivider:c},props:{prominence:{type:String,default:s.DEFAULT,validator:e=>Object.values(s).includes(e)},size:{type:String,default:n.S,validator:e=>Object.values(n).includes(e)}}}),_={class:"ds-drawerDivider"};function g(e,S,y,z,h,b){const p=u("ds-divider");return v(),l("div",_,[D(p,{prominence:e.prominence,size:e.size},null,8,["prominence","size"])])}const d=f(a,[["render",g],["__scopeId","data-v-8bf644dd"]]);a.__docgenInfo={displayName:"DrawerDivider",exportName:"default",description:"",tags:{},props:[{name:"prominence",type:{name:"string"},defaultValue:{func:!1,value:"DIVIDER_PROMINENCES.DEFAULT"}},{name:"size",type:{name:"string"},defaultValue:{func:!1,value:"DIVIDER_SIZES.S"}}],sourceFiles:["/home/runner/work/design-system/design-system/lib/js/components/Drawer/DrawerDivider/DrawerDivider.vue"]};const N={title:"Components/Drawer/DrawerDivider",component:d},I=e=>({components:{DrawerDivider:d},setup(){return e},template:`
        <div style="height: 200px; width: 200px;">
        <drawer-divider :prominence="prominence" :size="size" />
        </div>`}),r=I.bind({}),w={prominence:s.DEFAULT,size:n.S},E={prominence:{control:"select",options:Object.values(s)},size:{control:"select",options:Object.values(n)}};r.argTypes=E;r.args=w;r.parameters={design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=6785-111032&t=2Z2n2tIHRHEsWjoW-4"}};var i,t,o;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`args => ({
  components: {
    DrawerDivider
  },
  setup() {
    return args;
  },
  template: \`
        <div style="height: 200px; width: 200px;">
        <drawer-divider :prominence="prominence" :size="size" />
        </div>\`
})`,...(o=(t=r.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};const V=["Interactive"];export{r as Interactive,V as __namedExportsOrder,N as default};
