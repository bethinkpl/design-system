import{S as n}from"./SurveyQuestionOpenEnded-BwOEeMNM.js";import{S as i}from"./string-CDcVqaqZ.js";import"./Card-B6XP7g0D.js";import"./vue.esm-bundler-DJk5tYYm.js";import"./Divider-B2bMofDY.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./LoadingBar-ux1FeoeE.js";import"./ContainerRibbon-BdqIxAt4.js";import"./Button-CKGCPMu_.js";import"./Icon-BfsrDTGn.js";import"./IconButton-D9RNiVlA.js";import"./device-9fgosCm4.js";import"./useLegacyI18n-NHhnry62.js";const{useArgs:l}=__STORYBOOK_MODULE_PREVIEW_API__,T={title:"Components/SurveyQuestions/SurveyQuestionOpenEnded",component:n},d=r=>{const[c,s]=l();return{components:{SurveyQuestionOpenEnded:n},setup(){return r},template:'<survey-question-open-ended  :title="title" :value="value" :state="state" :placeholder="placeholder" @input="explanationUpdate"><template v-if="explanation" #explanation><div v-html="explanation" /></template></survey-question-open-ended>',methods:{explanationUpdate(p){s({value:p})}}}},e=d.bind({}),u={title:"Main question write here if it's long it will collapse.",value:"value",explanation:'<h3 class="modalHeader" style="text-align: center; margin-bottom: 16px;">Jak ocenić, czy slajdy i diagramy były zrozumiałe?</h3><div>Wyczerpujące materiały dają poczucie pełnego zrozumieina, przy jednoczesnym usystematyzowaniu informacji. Wpływa na to nie tylko ich jakość, ale też ilość.</div>',placeholder:"Wpisz swoją odpowiedź",state:i.DEFAULT},m={explanation:{control:"text"},state:{control:"select",options:Object.values(i)}};e.argTypes=m;e.args=u;e.parameters={design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=1555%3A41739"}};var t,a,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`args => {
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
}`,...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const j=["Interactive"];export{e as Interactive,j as __namedExportsOrder,T as default};
