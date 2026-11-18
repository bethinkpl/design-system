import{S as n}from"./SurveyQuestionOpenEnded-B5HJIxrs.js";import{S as r}from"./string-CFee_Lxg.js";import"./Card-CBKVvAdM.js";import"./vue.esm-bundler-DeRiNcSr.js";import"./Divider-CbFkO93G.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./LoadingBar-CbbirPNT.js";import"./ContainerRibbon-DACBSzDo.js";import"./Modal-DW_7ZMUv.js";import"./FeatureIcon-CQN5_teu.js";import"./Icon-QFU__4e-.js";import"./Button-DHvNpaXA.js";import"./IconButton-Df-RqxjI.js";import"./device-mzBmLsxe.js";import"./TextAreaField-D-F2Tw8n.js";import"./FormField-CSAaRm5O.js";import"./FormFieldMessage-YZrxkF5N.js";import"./useFormFieldWithinForm-DzYwomQz.js";import"./index-BxAcIQAY.js";import"./useTextFieldWithinForm-CoqMaoNV.js";import"./useLegacyI18n-AnNgdHoQ.js";const{useArgs:l}=__STORYBOOK_MODULE_PREVIEW_API__,D={title:"Components/SurveyQuestions/SurveyQuestionOpenEnded",component:n},m=i=>{const[c,p]=l();return{components:{SurveyQuestionOpenEnded:n},setup(){return i},template:`<survey-question-open-ended  :title="title" :value="value" :state="state" :placeholder="placeholder !== '' ? placeholder: null" @input="explanationUpdate"><template v-if="explanation" #explanation><div v-html="explanation" /></template></survey-question-open-ended>`,methods:{explanationUpdate(s){p({value:s})}}}},e=m.bind({}),u={title:"Main question write here if it's long it will collapse.",value:"value",explanation:'<h3 class="modalHeader" style="text-align: center; margin-bottom: 16px;">Jak ocenić, czy slajdy i diagramy były zrozumiałe?</h3><div>Wyczerpujące materiały dają poczucie pełnego zrozumieina, przy jednoczesnym usystematyzowaniu informacji. Wpływa na to nie tylko ich jakość, ale też ilość.</div>',placeholder:"",state:r.DEFAULT},d={explanation:{control:"text"},state:{control:"select",options:Object.values(r)}};e.argTypes=d;e.args=u;e.parameters={design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=1555%3A41739"}};var t,o,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`args => {
  const [_, updateArgs] = useArgs();
  return {
    components: {
      SurveyQuestionOpenEnded
    },
    setup() {
      return args;
    },
    // TODO typing in textarea looses focus
    template: '<survey-question-open-ended  :title="title" :value="value" :state="state" :placeholder="placeholder !== \\'\\' ? placeholder: null" @input="explanationUpdate">' + '<template v-if="explanation" #explanation><div v-html="explanation" /></template>' + '</survey-question-open-ended>',
    methods: {
      explanationUpdate(value) {
        updateArgs({
          value
        });
      }
    }
  };
}`,...(a=(o=e.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const R=["Interactive"];export{e as Interactive,R as __namedExportsOrder,D as default};
