import{S as n}from"./SurveyQuestionOpenEnded-CPxG6zGr.js";import{S as i}from"./string-D9303mhZ.js";import"./Card-Dw1XStcj.js";import"./vue.esm-bundler-CB1k_OTz.js";import"./Divider-C5li_5LX.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./LoadingBar-Cqn7rwnj.js";import"./Button-CfhjLW95.js";import"./Icon-BK9kwBCG.js";import"./IconButton-BAX8VyJU.js";import"./device-9fgosCm4.js";import"./useLegacyI18n-CheMYRK1.js";const{useArgs:l}=__STORYBOOK_MODULE_PREVIEW_API__,A={title:"Components/SurveyQuestions/SurveyQuestionOpenEnded",component:n},d=s=>{const[c,r]=l();return{components:{SurveyQuestionOpenEnded:n},setup(){return s},template:'<survey-question-open-ended  :title="title" :value="value" :state="state" :placeholder="placeholder" @input="explanationUpdate"><template v-if="explanation" #explanation><div v-html="explanation" /></template></survey-question-open-ended>',methods:{explanationUpdate(p){r({value:p})}}}},e=d.bind({}),u={title:"Main question write here if it's long it will collapse.",value:"value",explanation:'<h3 class="modalHeader" style="text-align: center; margin-bottom: 16px;">Jak ocenić, czy slajdy i diagramy były zrozumiałe?</h3><div>Wyczerpujące materiały dają poczucie pełnego zrozumieina, przy jednoczesnym usystematyzowaniu informacji. Wpływa na to nie tylko ich jakość, ale też ilość.</div>',placeholder:"Wpisz swoją odpowiedź",state:i.DEFAULT},m={explanation:{control:"text"},state:{control:"select",options:Object.values(i)}};e.argTypes=m;e.args=u;e.parameters={design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=1555%3A41739"}};var t,a,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`args => {
  const [_, updateArgs] = useArgs();
  return {
    components: {
      SurveyQuestionOpenEnded
    },
    setup() {
      return args;
    },
    // TODO typing in textarea looses focus
    template: '<survey-question-open-ended  :title="title" :value="value" :state="state" :placeholder="placeholder" @input="explanationUpdate">' + '<template v-if="explanation" #explanation><div v-html="explanation" /></template>' + '</survey-question-open-ended>',
    methods: {
      explanationUpdate(value) {
        updateArgs({
          value
        });
      }
    }
  };
}`,...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const T=["Interactive"];export{e as Interactive,T as __namedExportsOrder,A as default};
