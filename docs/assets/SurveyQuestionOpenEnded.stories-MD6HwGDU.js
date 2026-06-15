import{S as n}from"./SurveyQuestionOpenEnded-CDRtzi6a.js";import{S as r}from"./string-BA7jaimE.js";import"./Card-Cqj4aKF5.js";import"./vue.esm-bundler-KKLRPfRG.js";import"./Divider-Cv_Se4zt.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./LoadingBar-BunR9MCe.js";import"./ContainerRibbon-DP0rnZE8.js";import"./Button-CCs6ZaPM.js";import"./Icon-SK4lyiHa.js";import"./IconButton-B4mxds2z.js";import"./device-mzBmLsxe.js";import"./useLegacyI18n-D1OoysyW.js";const{useArgs:l}=__STORYBOOK_MODULE_PREVIEW_API__,I={title:"Components/SurveyQuestions/SurveyQuestionOpenEnded",component:n},u=i=>{const[c,s]=l();return{components:{SurveyQuestionOpenEnded:n},setup(){return i},template:`<survey-question-open-ended  :title="title" :value="value" :state="state" :placeholder="placeholder !== '' ? placeholder: null" @input="explanationUpdate"><template v-if="explanation" #explanation><div v-html="explanation" /></template></survey-question-open-ended>`,methods:{explanationUpdate(p){s({value:p})}}}},e=u.bind({}),d={title:"Main question write here if it's long it will collapse.",value:"value",explanation:'<h3 class="modalHeader" style="text-align: center; margin-bottom: 16px;">Jak ocenić, czy slajdy i diagramy były zrozumiałe?</h3><div>Wyczerpujące materiały dają poczucie pełnego zrozumieina, przy jednoczesnym usystematyzowaniu informacji. Wpływa na to nie tylko ich jakość, ale też ilość.</div>',placeholder:"",state:r.DEFAULT},m={explanation:{control:"text"},state:{control:"select",options:Object.values(r)}};e.argTypes=m;e.args=d;e.parameters={design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=1555%3A41739"}};var t,a,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`args => {
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
}`,...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const Q=["Interactive"];export{e as Interactive,Q as __namedExportsOrder,I as default};
