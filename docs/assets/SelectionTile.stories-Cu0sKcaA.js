import{f as B,d as v,c as A,a as m,G as S,k as L,u as n,L as g,N as U,o as a}from"./vue.esm-bundler-S9zc6Wpc.js";import{a as b,b as R,I as E}from"./Icon-BCNBiMEg.js";import{S as T,R as F,c as x}from"./RadioButton-DVYfJBX_.js";import{b as I,C as w,d as z}from"./Checkbox-BzlLxSA4.js";import{_ as h}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{w as X}from"./decorator-CcL-F-0p.js";import"./fontawesome-CXWUXLFT.js";import"./Primitive-DZpX8QWU.js";import"./index-Dm7VD4DC.js";import"./Presence-BVs8m1Yx.js";import"./Collection-VCss6lUH.js";import"./VisuallyHidden-C_eXOqFr.js";import"./VisuallyHiddenInput-r-p-ryZM.js";import"./chunk-4XZ63LWV-laKUlqim.js";import"./v4-CwV2VaSl.js";const r={RADIO_BUTTON:"radioButton",CHECKBOX:"checkbox"},t={DEFAULT:"default",DISABLED:"disabled",LOADING:"loading"},G={class:"ds-selectionTile__wrapper"},K={class:"ds-selectionTile__textWrapper"},M={class:"ds-selectionTile__title"},P={key:0,class:"ds-selectionTile__supportingText"},y=B({__name:"SelectionTile",props:{type:{default:()=>r.RADIO_BUTTON},title:{},supportingText:{default:null},icon:{default:null},isSelected:{type:Boolean,default:!1},state:{default:()=>t.DEFAULT}},emits:["update:is-selected","icon-click"],setup(o,{emit:O}){const d={[t.DEFAULT]:T.DEFAULT,[t.LOADING]:T.LOADING,[t.DISABLED]:T.DISABLED},p={[t.DEFAULT]:I.DEFAULT,[t.LOADING]:I.DEFAULT,[t.DISABLED]:I.DISABLED},_=O,i=v(()=>o.state===t.LOADING),u=e=>{i.value||o.state===t.DISABLED||_("update:is-selected",e)},k=e=>{i.value||(e.stopPropagation(),_("icon-click"))};return(e,l)=>(a(),A("div",{class:U(["ds-selectionTile",[{"-ds-selected":e.isSelected,"-ds-default":e.state===n(t).DEFAULT,"-ds-disabled":e.state===n(t).DISABLED,"-ds-loading":i.value}]]),onClick:l[2]||(l[2]=c=>u(!e.isSelected))},[m("div",G,[e.type===n(r).RADIO_BUTTON?(a(),S(F,{key:0,size:n(x).X_SMALL,"is-selected":e.isSelected,state:d[e.state],"onUpdate:isSelected":l[0]||(l[0]=c=>u(c))},null,8,["size","is-selected","state"])):(a(),S(w,{key:1,size:n(z).X_SMALL,"model-value":e.isSelected,state:p[e.state],"onUpdate:modelValue":l[1]||(l[1]=c=>u(c!==!1))},null,8,["size","model-value","state"])),m("div",K,[m("div",M,g(e.title),1),e.supportingText?(a(),A("div",P,g(e.supportingText),1)):L("",!0)])]),e.icon||i.value?(a(),S(b,{key:0,class:"ds-selectionTile__icon",icon:i.value?n(E).FAD_SPINNER_THIRD:e.icon,size:n(R).X_SMALL,spinning:i.value,onClick:k},null,8,["icon","size","spinning"])):L("",!0)],2))}}),N=h(y,[["__scopeId","data-v-60adce30"]]);y.__docgenInfo={exportName:"default",displayName:"SelectionTile",description:"",tags:{},props:[{name:"type",required:!1,type:{name:"SelectionTileType"}},{name:"title",required:!0,type:{name:"string"}},{name:"supportingText",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]}},{name:"icon",required:!1,type:{name:"union",elements:[{name:"IconItem"},{name:"null"}]}},{name:"isSelected",required:!1,type:{name:"boolean"}},{name:"state",required:!1,type:{name:"SelectionTileState"}}],events:[{name:"update:is-selected",type:{names:["boolean"]}},{name:"icon-click"}],sourceFiles:["/home/runner/work/design-system/design-system/lib/js/components/SelectionTile/SelectionTile.vue"]};const{useArgs:j}=__STORYBOOK_MODULE_PREVIEW_API__,ae={title:"Components/SelectionTile",component:N,decorators:[o=>({components:{story:o},template:"<div style='display: flex; max-width: 300px;'><story /></div>"}),X]},q=o=>{const[O,d]=j();return{components:{SelectionTile:N},setup(){return o},methods:{onIsSelectedUpdated(p){d({isSelected:p})},onIconClick(){alert("Klik w ikonę")}},data(){return{ICONS:Object.freeze(E)}},template:`
            <SelectionTile
                :title="title"
                :supporting-text="supportingText"
                :type="type"
                :icon="ICONS[icon]"
                :is-selected="isSelected"
                :state="state"
                @icon-click="onIconClick"
                @update:is-selected="onIsSelectedUpdated"
            />`}},s=q.bind({});s.argTypes={type:{control:"select",options:Object.values(r)},title:{control:"text"},supportingText:{control:"text"},icon:{control:"select",options:[null,...Object.keys(E)]},isSelected:{control:"boolean"},state:{control:"select",options:Object.values(t)}};s.args={type:r.RADIO_BUTTON,title:"Example title",supportingText:"",icon:null,isSelected:!1,state:t.DEFAULT};s.parameters={actions:{handles:["click"]},design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?type=design&node-id=6085-110809&t=436AgbJEEFBphXVn-0"}};var f,C,D;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`args => {
  const [_, updateArgs] = useArgs();
  return {
    components: {
      SelectionTile
    },
    setup() {
      return args;
    },
    methods: {
      onIsSelectedUpdated(isSelected) {
        updateArgs({
          isSelected
        });
      },
      onIconClick() {
        alert('Klik w ikonę');
      }
    },
    data() {
      return {
        ICONS: Object.freeze(ICONS)
      };
    },
    template: \`
            <SelectionTile
                :title="title"
                :supporting-text="supportingText"
                :type="type"
                :icon="ICONS[icon]"
                :is-selected="isSelected"
                :state="state"
                @icon-click="onIconClick"
                @update:is-selected="onIsSelectedUpdated"
            />\`
  };
}`,...(D=(C=s.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};const ce=["Interactive"];export{s as Interactive,ce as __namedExportsOrder,ae as default};
