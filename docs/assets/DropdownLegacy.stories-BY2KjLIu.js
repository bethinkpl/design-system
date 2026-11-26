import{v as h}from"./vue-popper-CAd-1XHe.js";import{f as O,G as y,l as i,J as S,o as w,a as r,N as l,a2 as v,j as d}from"./vue.esm-bundler-S9zc6Wpc.js";import{_ as T}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{S as D}from"./SelectList-DDs0Y1IW.js";import{S as L}from"./SelectListItem-BSUo8-oj.js";import"./Icon-BCNBiMEg.js";import"./fontawesome-CXWUXLFT.js";const a={CLICK:"click",HOVER:"hover"},o={TOP:"top",BOTTOM:"bottom",BOTH:"both"},n={BOTTOM_START:"bottom-start",BOTTOM_END:"bottom-end"},u=O({name:"DropdownLegacy",components:{VuePopper:h},props:{boundariesSelector:{type:String,default:null},forceShow:{type:Boolean,default:!1},sameWidth:{type:Boolean,default:!1},triggerAction:{type:String,default:a.CLICK,validator(e){return Object.values(a).includes(e)}},radius:{type:String,default:o.BOTH,validate(e){return Object.values(o).includes(e)}},placement:{type:String,default:n.BOTTOM_START,validate(e){return Object.values(n).includes(e)}},maxHeight:{type:String,default:null}},emits:["document-click","hide","show"],data(){return{key:1,isOpened:!1,DROPDOWN_LEGACY_RADIUSES:Object.freeze(o)}},computed:{scrollableWrapperStyles(){return{...this.maxHeight&&{maxHeight:this.maxHeight}}},options(){return{modifiers:{preventOverflow:{padding:0}},placement:this.placement,...this.sameWidth&&{onUpdate:({instance:{reference:e,popper:s}})=>{s.style.width=`${e.offsetWidth}px`}}}}},watch:{triggerAction(){this.updateKey()},sameWidth(){this.updateKey()},boundariesSelector(){this.updateKey()},placement(){this.updateKey()}},methods:{close(){this.isOpened=!1,this.$refs.popper.doClose()},updateKey(){this.key++},onHide(){this.isOpened=!1,this.$emit("hide")},onShow(){this.isOpened=!0,this.$emit("show")}}}),b=["inert"];function A(e,s,E,I,W,B){const g=S("vue-popper");return w(),y(g,{ref:"popper",key:e.key,"boundaries-selector":e.boundariesSelector,"force-show":e.forceShow,options:e.options,"visible-arrow":!1,trigger:e.triggerAction,"delay-on-mouse-out":300,onDocumentClick:s[0]||(s[0]=H=>e.$emit("document-click")),onHide:e.onHide,onShow:e.onShow},{reference:i(()=>[d(e.$slots,"reference",{isOpened:e.isOpened},void 0,!0)]),default:i(()=>[r("div",{class:l(["popper ds-dropdownLegacy",{"-ds-radiusBottom":e.radius===e.DROPDOWN_LEGACY_RADIUSES.BOTTOM,"-ds-radiusTop":e.radius===e.DROPDOWN_LEGACY_RADIUSES.TOP,"-ds-radiusBottom -ds-radiusTop":e.radius===e.DROPDOWN_LEGACY_RADIUSES.BOTH}]),inert:!e.isOpened},[r("div",{class:l(["ds-dropdownLegacy__scrollableWrapper",{"-ds-heightLimited":!!e.maxHeight}]),style:v(e.scrollableWrapperStyles)},[d(e.$slots,"default",{close:e.close},void 0,!0)],6)],10,b)]),_:3},8,["boundaries-selector","force-show","options","trigger","onHide","onShow"])}const f=T(u,[["render",A],["__scopeId","data-v-556779d6"]]);u.__docgenInfo={displayName:"DropdownLegacy",exportName:"default",description:"",tags:{},props:[{name:"boundariesSelector",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"forceShow",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"sameWidth",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"triggerAction",type:{name:"string"},defaultValue:{func:!1,value:"DROPDOWN_LEGACY_TRIGGER_ACTIONS.CLICK"}},{name:"radius",type:{name:"string"},defaultValue:{func:!1,value:"DROPDOWN_LEGACY_RADIUSES.BOTH"}},{name:"placement",type:{name:"string"},defaultValue:{func:!1,value:"DROPDOWN_LEGACY_PLACEMENTS.BOTTOM_START"}},{name:"maxHeight",type:{name:"string"},defaultValue:{func:!1,value:"null"}}],events:[{name:"document-click"},{name:"hide"},{name:"show"}],slots:[{name:"default",scoped:!0,bindings:[{name:"close",title:"binding"}]},{name:"reference",scoped:!0,bindings:[{name:"is-opened",title:"binding"}]}],sourceFiles:["/home/runner/work/design-system/design-system/lib/js/components/DropdownLegacy/DropdownLegacy.vue"]};const V={title:"Components/DropdownLegacy",component:f},C=e=>({components:{DropdownLegacy:f,SelectList:D,SelectListItem:L},setup(){return e},template:`
    <div style="position: relative">
      <dropdown-legacy :trigger-action="triggerAction"
                :force-show="forceShow"
                :same-width="sameWidth"
                :radius="radius"
                :placement="placement"
                :max-height="maxHeight">
        <template #reference="{ isOpened }"><span>DropdownLegacy entry point {{ isOpened ? 'opened' : 'closed' }}</span>
        </template>
        <template #default="{ close }">
          <select-list>
            <select-list-item label="One" @click.native="close" />
            <select-list-item label="Two" @click.native="close" />
          </select-list>
        </template>
      </dropdown-legacy>
    </div>`}),t=C.bind({}),_={triggerAction:a.CLICK,radius:o.BOTH,forceShow:!1,sameWidth:!1,maxHeight:"",placement:n.BOTTOM_START},R={triggerAction:{control:"select",options:Object.values(a)},radius:{control:"select",options:Object.values(o)},placement:{control:"select",options:Object.values(n)},maxHeight:{control:"text"}};t.argTypes=R;t.args=_;t.parameters={design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=4010%3A69857"}};var p,c,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`args => ({
  components: {
    DropdownLegacy,
    SelectList,
    SelectListItem
  },
  setup() {
    return args;
  },
  template: \`
    <div style="position: relative">
      <dropdown-legacy :trigger-action="triggerAction"
                :force-show="forceShow"
                :same-width="sameWidth"
                :radius="radius"
                :placement="placement"
                :max-height="maxHeight">
        <template #reference="{ isOpened }"><span>DropdownLegacy entry point {{ isOpened ? 'opened' : 'closed' }}</span>
        </template>
        <template #default="{ close }">
          <select-list>
            <select-list-item label="One" @click.native="close" />
            <select-list-item label="Two" @click.native="close" />
          </select-list>
        </template>
      </dropdown-legacy>
    </div>\`
})`,...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const j=["Interactive"];export{t as Interactive,j as __namedExportsOrder,V as default};
