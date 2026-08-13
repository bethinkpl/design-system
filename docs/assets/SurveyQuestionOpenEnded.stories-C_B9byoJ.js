import{S as n}from"./SurveyQuestionOpenEnded-BoDkrU5L.js";import{S as r}from"./string-Cj_XMNpQ.js";import"./Card-DUIc7RNT.js";import"./vue.esm-bundler-vCYTN4Ic.js";import"./Divider-CNFUE6e5.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./LoadingBar-Dam9_K4F.js";import"./ContainerRibbon-ClvIry19.js";import"./Modal-DYHKUM3F.js";import"./FeatureIcon-BSViPktd.js";import"./Icon-DTVXTHLv.js";import"./Button-Ci0iFb84.js";import"./IconButton-DwJOxZO_.js";import"./device-mzBmLsxe.js";import"./useLegacyI18n-Do6UFLBh.js";const{useArgs:l}=__STORYBOOK_MODULE_PREVIEW_API__,U={title:"Components/SurveyQuestions/SurveyQuestionOpenEnded",component:n},u=i=>{const[c,p]=l();return{components:{SurveyQuestionOpenEnded:n},setup(){return i},template:`<survey-question-open-ended  :title="title" :value="value" :state="state" :placeholder="placeholder !== '' ? placeholder: null" @input="explanationUpdate"><template v-if="explanation" #explanation><div v-html="explanation" /></template></survey-question-open-ended>`,methods:{explanationUpdate(s){p({value:s})}}}},e=u.bind({}),d={title:"Main question write here if it's long it will collapse.",value:"value",explanation:'<h3 class="modalHeader" style="text-align: center; margin-bottom: 16px;">Jak ocenić, czy slajdy i diagramy były zrozumiałe?</h3><div>Wyczerpujące materiały dają poczucie pełnego zrozumieina, przy jednoczesnym usystematyzowaniu informacji. Wpływa na to nie tylko ich jakość, ale też ilość.</div>',placeholder:"",state:r.DEFAULT},m={explanation:{control:"text"},state:{control:"select",options:Object.values(r)}};e.argTypes=m;e.args=d;e.parameters={design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=1555%3A41739"}};var t,a,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`args => {
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
}`,...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const j=["Interactive"];export{e as Interactive,j as __namedExportsOrder,U as default};
