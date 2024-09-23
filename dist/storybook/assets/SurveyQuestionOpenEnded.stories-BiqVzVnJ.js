import{S as t}from"./SurveyQuestionOpenEnded-BwSqY09C.js";import{S as a}from"./string-Bov6Irb4.js";import"./Card-BYx4IaSW.js";import"./vue.esm-bundler-Bq1ZKmuF.js";import"./Divider-Ba-XwrF-.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./LoadingBar-IDhNuLj_.js";import"./Button-Cbw2_9er.js";import"./Icon-CVHceNst.js";import"./IconButton-o4H-Dbj2.js";const h={title:"Components/SurveyQuestions/SurveyQuestionOpenEnded",component:t},p=(o,{updateArgs:n})=>({components:{SurveyQuestionOpenEnded:t},setup(){return o},template:'<survey-question-open-ended  :title="title" :value="value" :state="state" :placeholder="placeholder" @input="explanationUpdate"><template v-if="explanation" #explanation><div v-html="explanation" /></template></survey-question-open-ended>',methods:{explanationUpdate(i){n({value:i})}}}),e=p.bind({}),s={title:"Main question write here if it's long it will collapse.",value:"value",explanation:'<h3 class="modalHeader" style="text-align: center; margin-bottom: 16px;">Jak ocenić, czy slajdy i diagramy były zrozumiałe?</h3><div>Wyczerpujące materiały dają poczucie pełnego zrozumieina, przy jednoczesnym usystematyzowaniu informacji. Wpływa na to nie tylko ich jakość, ale też ilość.</div>',placeholder:"Wpisz swoją odpowiedź",state:a.DEFAULT},r={explanation:{control:"text"},state:{control:"select",options:Object.values(a)}};e.argTypes=r;e.args=s;e.parameters={design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=1555%3A41739"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`(args, {
  updateArgs
}) => ({
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
})`,...e.parameters?.docs?.source}}};const f=["Interactive"];export{e as Interactive,f as __namedExportsOrder,h as default};
