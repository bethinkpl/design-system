import{a as n,b as a,c as r,S as c}from"./SurveyToggle--5L10kQN.js";import{I as l}from"./Icon-CrGnHcSg.js";import"./vue.esm-bundler-DcRN7CPI.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const I={title:"Components/SurveyToggle",component:n},g=i=>({components:{SurveyToggle:n},setup(){return i},template:'<div style="background-color:#f6f6f8"><survey-toggle :label="label"  :meaning="meaning" :content-text="contentText" :selected-icon="ICONS[selectedIcon]" :status="status" :state="state" /></div>',data(){return{ICONS:Object.freeze(l)}}}),e=g.bind({}),m={label:"label",contentText:"1",meaning:c.PRIMARY,status:r.DEFAULT,state:a.DEFAULT,selectedIcon:"FA_CHECK_SOLID"},p={label:{control:"text"},contentText:{control:"text"},meaning:{control:"select",options:Object.values(c)},status:{control:"select",options:Object.values(r)},state:{control:"select",options:Object.values(a)},selectedIcon:{control:"select",options:Object.keys(l)}};e.argTypes=p;e.args=m;e.parameters={design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=1555%3A35210"}};var t,o,s;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`args => ({
  components: {
    SurveyToggle
  },
  setup() {
    return args;
  },
  template: '<div style="background-color:#f6f6f8"><survey-toggle :label="label"  :meaning="meaning" :content-text="contentText" :selected-icon="ICONS[selectedIcon]" :status="status" :state="state" /></div>',
  data() {
    return {
      ICONS: Object.freeze(ICONS)
    };
  }
})`,...(s=(o=e.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const O=["Interactive"];export{e as Interactive,O as __namedExportsOrder,I as default};
