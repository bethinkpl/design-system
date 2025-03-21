import{S as n}from"./SurveyQuestionOpenEnded-CbCdMqdU.js";import{S as i}from"./string-ybdEWR3p.js";import"./Card-BzXb8FVb.js";import"./vue.esm-bundler-DmkhfO_9.js";import"./Divider-CeZli6az.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./LoadingBar-C1yAImWt.js";import"./Button-BlGyuUvH.js";import"./Icon-D72drrb6.js";import"./IconButton-Da_zvyX7.js";import"./device-9fgosCm4.js";const{useArgs:l}=__STORYBOOK_MODULE_PREVIEW_API__,w={title:"Components/SurveyQuestions/SurveyQuestionOpenEnded",component:n},d=s=>{const[c,r]=l();return{components:{SurveyQuestionOpenEnded:n},setup(){return s},template:'<survey-question-open-ended  :title="title" :value="value" :state="state" :placeholder="placeholder" @input="explanationUpdate"><template v-if="explanation" #explanation><div v-html="explanation" /></template></survey-question-open-ended>',methods:{explanationUpdate(p){r({value:p})}}}},e=d.bind({}),u={title:"Main question write here if it's long it will collapse.",value:"value",explanation:'<h3 class="modalHeader" style="text-align: center; margin-bottom: 16px;">Jak ocenić, czy slajdy i diagramy były zrozumiałe?</h3><div>Wyczerpujące materiały dają poczucie pełnego zrozumieina, przy jednoczesnym usystematyzowaniu informacji. Wpływa na to nie tylko ich jakość, ale też ilość.</div>',placeholder:"Wpisz swoją odpowiedź",state:i.DEFAULT},m={explanation:{control:"text"},state:{control:"select",options:Object.values(i)}};e.argTypes=m;e.args=u;e.parameters={design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=1555%3A41739"}};var t,a,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`args => {
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
}`,...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const A=["Interactive"];export{e as Interactive,A as __namedExportsOrder,w as default};
