import{P as r,a,b as n,c as u,d as l}from"./PopOver-CehHpqnB.js";import"./vue-popper-Bw2qoyOw.js";import"./_commonjsHelpers-Chg3vePA.js";import"./vue.esm-bundler-Dgz4BqwH.js";import"./Button-CsOCHUpA.js";import"./Icon-Dg-H1Zak.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const B={title:"Components/PopOver",component:r},g=o=>({components:{PopOver:r},setup(){return o},template:'<div style="display: flex; align-items: center; justify-content: center; height: 800px; background: var(--raw-gray-50);"><pop-over :placement="placement" :color="color" :trigger-action="triggerAction" :title-text="titleText" :subtitle-text="subtitleText" :button-text="buttonText" :force-show="forceShow" :header-image-url="headerImageUrl" :size="size" :max-height="maxHeight" :is-pointer-visible="isPointerVisible"><template #reference><span style="background: var(--theme-100); border-radius: 4px; padding: 4px 8px;">click me!</span></template><div>{{ definitionSlot }}</div></pop-over></div>'}),e=g.bind({});e.args={size:a.SMALL,maxHeight:!1,placement:n.BOTTOM,color:u.DEFAULT,headerImageUrl:"https://wnl-platform-dev-kuba.s3.eu-central-1.amazonaws.com/public/illustation-StatusLekcji.png",titleText:"Lorem ipsum",subtitleText:"Dolor sit amet",buttonText:"button text",triggerAction:l.CLICK,forceShow:!1,isPointerVisible:!0,definitionSlot:"Bacon ipsum dolor amet t-bone meatball ground round turducken buffalo pork."};const d={size:{control:"select",options:Object.values(a)},placement:{control:"select",options:Object.values(n)},color:{control:"select",options:Object.values(u)},triggerAction:{control:"select",options:Object.values(l)}};e.argTypes=d;e.parameters={design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=3590%3A67741"}};const f=o=>({components:{PopOver:r},props:Object.keys(o),template:'<div style="display: flex; align-items: center; justify-content: center; height: 800px"><pop-over :placement="placement" :color="color" :trigger-action="triggerAction" :title-text="titleText" :subtitle-text="subtitleText" :force-show="forceShow" :size="size" :max-height="maxHeight" :is-pointer-visible="isPointerVisible"><template #reference><span>click me!</span></template><template #default><b>Bacon</b> ipsum dolor <u>amet</u> t-bone meatball ground round turducken buffalo pork.<b>Bacon</b> ipsum dolor <u>amet</u> t-bone meatball ground round turducken buffalo pork.<b>Bacon</b> ipsum dolor <u>amet</u> t-bone meatball ground round turducken buffalo pork.<b>Bacon</b> ipsum dolor <u>amet</u> t-bone meatball ground round turducken buffalo pork.<b>Bacon</b> ipsum dolor <u>amet</u> t-bone meatball ground round turducken buffalo pork.<b>Bacon</b> ipsum dolor <u>amet</u> t-bone meatball ground round turducken buffalo pork.<b>Bacon</b> ipsum dolor <u>amet</u> t-bone meatball ground round turducken buffalo pork.<b>Bacon</b> ipsum dolor <u>amet</u> t-bone meatball ground round turducken buffalo pork. <b>Bacon</b> ipsum dolor <u>amet</u> t-bone meatball ground round turducken buffalo pork.<b>Bacon</b> ipsum dolor <u>amet</u> t-bone meatball ground round turducken buffalo pork.<b>Bacon</b> ipsum dolor <u>amet</u> t-bone meatball ground round turducken buffalo pork.</template></pop-over></div>'}),t=f.bind({});t.args={size:a.MEDIUM,maxHeight:!0,placement:n.BOTTOM,color:u.DEFAULT,titleText:"Lorem ipsum",subtitleText:"Dolor sit amet",triggerAction:l.CLICK,forceShow:!1,isPointerVisible:!1};t.argTypes=d;var i,s,p;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`args => ({
  components: {
    PopOver
  },
  setup() {
    return args;
  },
  template: '<div style="display: flex; align-items: center; justify-content: center; height: 800px; background: var(--raw-gray-50);">' + '<pop-over :placement="placement" :color="color" :trigger-action="triggerAction" :title-text="titleText" :subtitle-text="subtitleText" :button-text="buttonText" :force-show="forceShow" :header-image-url="headerImageUrl" :size="size" :max-height="maxHeight" :is-pointer-visible="isPointerVisible">' + '<template #reference><span style="background: var(--theme-100); border-radius: 4px; padding: 4px 8px;">click me!</span></template>' + '<div>{{ definitionSlot }}</div>' + '</pop-over>' + '</div>'
})`,...(p=(s=e.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};var c,m,b;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`argTypes => ({
  components: {
    PopOver
  },
  props: Object.keys(argTypes),
  template: '<div style="display: flex; align-items: center; justify-content: center; height: 800px">' + '<pop-over :placement="placement" :color="color" :trigger-action="triggerAction" :title-text="titleText" :subtitle-text="subtitleText" :force-show="forceShow" :size="size" :max-height="maxHeight" :is-pointer-visible="isPointerVisible">' + '<template #reference><span>click me!</span></template>' + '<template #default><b>Bacon</b> ipsum dolor <u>amet</u> t-bone meatball ground round turducken buffalo pork.<b>Bacon</b> ipsum dolor <u>amet</u> t-bone meatball ground round turducken buffalo pork.<b>Bacon</b> ipsum dolor <u>amet</u> t-bone meatball ground round turducken buffalo pork.<b>Bacon</b> ipsum dolor <u>amet</u> t-bone meatball ground round turducken buffalo pork.<b>Bacon</b> ipsum dolor <u>amet</u> t-bone meatball ground round turducken buffalo pork.<b>Bacon</b> ipsum dolor <u>amet</u> t-bone meatball ground round turducken buffalo pork.<b>Bacon</b> ipsum dolor <u>amet</u> t-bone meatball ground round turducken buffalo pork.<b>Bacon</b> ipsum dolor <u>amet</u> t-bone meatball ground round turducken buffalo pork. <b>Bacon</b> ipsum dolor <u>amet</u> t-bone meatball ground round turducken buffalo pork.<b>Bacon</b> ipsum dolor <u>amet</u> t-bone meatball ground round turducken buffalo pork.<b>Bacon</b> ipsum dolor <u>amet</u> t-bone meatball ground round turducken buffalo pork.</template>' + '</pop-over>' + '</div>'
})`,...(b=(m=t.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};const P=["Interactive","PopOverMMaxHeightNoPointer"];export{e as Interactive,t as PopOverMMaxHeightNoPointer,P as __namedExportsOrder,B as default};