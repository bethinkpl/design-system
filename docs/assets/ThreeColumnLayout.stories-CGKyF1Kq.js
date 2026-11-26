import{f as b,c as h,a as i,N as o,j as n,o as C}from"./vue.esm-bundler-S9zc6Wpc.js";import{_ as f}from"./_plugin-vue_export-helper-DlAUqK2U.js";const l={MEDIUM:"medium",LARGE:"large"},r=b({name:"ThreeColumnLayout",props:{rightColumnSize:{type:String,default:l.MEDIUM,validator(e){return Object.values(l).includes(e)}},rightColumnVisible:{type:Boolean,default:!0},leftColumnVisible:{type:Boolean,default:!0},initialMobileRightColumnVisibleState:{type:Boolean,default:!1},initialMobileLeftColumnVisibleState:{type:Boolean,default:!1},contentWithoutPadding:{type:Boolean,default:!1}},emits:["overlay-clicked"],data(){return{THREE_COLUMN_LAYOUT_RIGHT_COLUMN_SIZE:Object.freeze(l),leftColumnVisibleMobile:!1,rightColumnVisibleMobile:!1}},watch:{leftColumnVisible(e){this.leftColumnVisibleMobile!==e&&(this.leftColumnVisibleMobile=e)},rightColumnVisible(e){this.rightColumnVisibleMobile!==e&&(this.rightColumnVisibleMobile=e)}},created(){this.leftColumnVisibleMobile=this.initialMobileLeftColumnVisibleState,this.rightColumnVisibleMobile=this.initialMobileRightColumnVisibleState}}),g={class:"ds-threeColumnLayout"},c={class:"ds-threeColumnLayout__contentColumn"};function p(e,a,v,L,S,_){return C(),h("div",g,[i("div",{class:o(["ds-threeColumnLayout__overlay",{"-ds-visible":e.rightColumnVisibleMobile||e.leftColumnVisibleMobile}]),onClick:a[0]||(a[0]=T=>e.$emit("overlay-clicked"))},null,2),i("div",{class:o(["ds-threeColumnLayout__leftColumn",{"-ds-desktopVisible":e.leftColumnVisible||e.leftColumnVisibleMobile,"-ds-mobileVisible":e.leftColumnVisibleMobile}])},[n(e.$slots,"leftColumn",{},void 0,!0)],2),i("div",c,[i("div",{class:o(["ds-threeColumnLayout__content",{"-ds-noPadding":e.contentWithoutPadding}])},[n(e.$slots,"default",{},void 0,!0)],2)]),i("div",{class:o(["ds-threeColumnLayout__rightColumn",{"-ds-medium":e.rightColumnSize===e.THREE_COLUMN_LAYOUT_RIGHT_COLUMN_SIZE.MEDIUM,"-ds-large":e.rightColumnSize===e.THREE_COLUMN_LAYOUT_RIGHT_COLUMN_SIZE.LARGE,"-ds-desktopVisible":e.rightColumnVisible||e.rightColumnVisibleMobile,"-ds-mobileVisible":e.rightColumnVisibleMobile}])},[n(e.$slots,"rightColumn",{},void 0,!0)],2)])}const d=f(r,[["render",p],["__scopeId","data-v-e725c29a"]]);r.__docgenInfo={displayName:"ThreeColumnLayout",exportName:"default",description:"",tags:{},props:[{name:"rightColumnSize",type:{name:"ThreeColumnLayoutRightColumnSize"},defaultValue:{func:!1,value:"THREE_COLUMN_LAYOUT_RIGHT_COLUMN_SIZE.MEDIUM"}},{name:"rightColumnVisible",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"leftColumnVisible",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"initialMobileRightColumnVisibleState",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"initialMobileLeftColumnVisibleState",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"contentWithoutPadding",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"overlay-clicked"}],slots:[{name:"leftColumn"},{name:"default"},{name:"rightColumn"}],sourceFiles:["/home/runner/work/design-system/design-system/lib/js/components/Layouts/ThreeColumnLayout/ThreeColumnLayout.vue"]};const U={title:"Components/Layouts/ThreeColumnLayout",component:d,decorators:[e=>({components:{story:e},template:`<div style='display: flex; width: 100vw; height: 100vh;  background: lightgray; flex-direction: column;'><div style="padding: 16px; background: lightcoral; z-index: 1">Example header</div><story /></div>`}),e=>({components:{story:e},template:"<div style='display: flex; width: 100%; height: 100%; font-size: 12px; color: #fff;'><story /></div>"})]},V=e=>({components:{ThreeColumnLayout:d},setup(){return e},template:`
        <three-column-layout :rightColumnSize='rightColumnSize'
                             :rightColumnVisible='rightColumnVisible'
                             :leftColumnVisible='leftColumnVisible'
                             :initialMobileRightColumnVisibleState='initialMobileRightColumnVisibleState'
                             :initialMobileLeftColumnVisibleState='initialMobileLeftColumnVisibleState'
                             :contentWithoutPadding='contentWithoutPadding'>
        <template #leftColumn>
            <div style='width: 100%; height: 100%; background: rgb(249, 27, 214);'>leftColumn</div>
        </template>
        <template #rightColumn>
            <div style='width: 100%; height: 100%;'
                 :style='{"background": (rightColumnSize === "medium" ? "#2c7bfb" : "#817c81")}'>rightColumn
            </div>
        </template>

        <div style='width: 100%; height: 100%; background: #9133c2;'>
            content
        </div>
        </three-column-layout>`}),t=V.bind({}),y={rightColumnVisible:!0,initialMobileRightColumnVisibleState:!0,leftColumnVisible:!0,initialMobileLeftColumnVisibleState:!1,contentWithoutPadding:!1,rightColumnSize:l.MEDIUM},M={rightColumnSize:{control:"select",options:Object.values(l)},leftColumnVisible:{control:"boolean"},rightColumnVisible:{control:"boolean"},initialMobileRightColumnVisibleState:{control:"boolean"},initialMobileLeftColumnVisibleState:{control:"boolean"},contentWithoutPadding:{control:"boolean"}};t.argTypes=M;t.args=y;t.parameters={layout:"fullscreen",design:{type:"figma",url:"https://www.figma.com/file/AYTmGtcujVq9subNrTpHnX/Layout---nowa-koncepcja?type=design&node-id=1-7&t=ANHJptt0VBE6JEs4-4"}};var s,u,m;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`args => ({
  components: {
    ThreeColumnLayout
  },
  setup() {
    return args;
  },
  template: \`
        <three-column-layout :rightColumnSize='rightColumnSize'
                             :rightColumnVisible='rightColumnVisible'
                             :leftColumnVisible='leftColumnVisible'
                             :initialMobileRightColumnVisibleState='initialMobileRightColumnVisibleState'
                             :initialMobileLeftColumnVisibleState='initialMobileLeftColumnVisibleState'
                             :contentWithoutPadding='contentWithoutPadding'>
        <template #leftColumn>
            <div style='width: 100%; height: 100%; background: rgb(249, 27, 214);'>leftColumn</div>
        </template>
        <template #rightColumn>
            <div style='width: 100%; height: 100%;'
                 :style='{"background": (rightColumnSize === "medium" ? "#2c7bfb" : "#817c81")}'>rightColumn
            </div>
        </template>

        <div style='width: 100%; height: 100%; background: #9133c2;'>
            content
        </div>
        </three-column-layout>\`
})`,...(m=(u=t.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};const I=["Interactive"];export{t as Interactive,I as __namedExportsOrder,U as default};
