import{a as t,S as o,b as s,c as n}from"./SurveyToggle-BbZXp5Z2.js";import{I as a}from"./Icon-CVHceNst.js";import"./vue.esm-bundler-Bq1ZKmuF.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const d={title:"Components/SurveyToggle",component:t},c=r=>({components:{SurveyToggle:t},setup(){return r},template:'<div style="background-color:#f6f6f8"><survey-toggle :label="label"  :meaning="meaning" :content-text="contentText" :selected-icon="ICONS[selectedIcon]" :status="status" :state="state" /></div>',data(){return{ICONS:Object.freeze(a)}}}),e=c.bind({}),l={label:"label",contentText:"1",meaning:o.PRIMARY,status:s.DEFAULT,state:n.DEFAULT,selectedIcon:"FA_CHECK_SOLID"},i={label:{control:"text"},contentText:{control:"text"},meaning:{control:"select",options:Object.values(o)},status:{control:"select",options:Object.values(s)},state:{control:"select",options:Object.values(n)},selectedIcon:{control:"select",options:Object.keys(a)}};e.argTypes=i;e.args=l;e.parameters={design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=1555%3A35210"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => ({
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
})`,...e.parameters?.docs?.source}}};const S=["Interactive"];export{e as Interactive,S as __namedExportsOrder,d as default};
