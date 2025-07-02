import{M as g}from"./ModalDialog-ClbZOvyl.js";import{I as a}from"./Icon-7s2OvWdI.js";import{F as n}from"./FeatureIcon-B2q4syOZ.js";import{a as t}from"./Button-CS50J7iM.js";import"./Modal-D-ASieTi.js";import"./IconButton-6OUfwdA4.js";import"./vue.esm-bundler-F3F7hH0X.js";import"./device-9fgosCm4.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const q={title:"Components/Modals/ModalDialog",component:g},i=h=>({components:{ModalDialog:g},setup(){return h},template:'<modal-dialog :headerFeatureIcon="ICONS[headerFeatureIcon]" :danger="danger" :headerTitle="headerTitle" :headerSubtitle="headerSubtitle" :headerFeatureIconColor="headerFeatureIconColor" :footerPrimaryButtonText="footerPrimaryButtonText" :footerPrimaryButtonIcon="footerPrimaryButtonIcon" :footerPrimaryButtonState="footerPrimaryButtonState" :headerImage="headerImage" :footerSecondaryButtonText="footerSecondaryButtonText" :footerSecondaryButtonIcon="footerSecondaryButtonIcon" :footerSecondaryButtonState="footerSecondaryButtonState"><div v-html="defaultSlot" /><template v-if="rightActionsSlot" #rightActions><div style="display: inline-flex;" v-html="rightActionsSlot" /></template></modal-dialog>',data(){return{ICONS:Object.freeze(a),BUTTON_STATES:Object.freeze(t)}}}),e=i.bind({}),T={defaultSlot:'<p style="margin-top: 0">Text. Occaecati qui debitis ut minima ab ut ipsa. Eos qui eum. Vel eaque sint. Aut voluptatem est. Eos est aut sit soluta est facere qui soluta aspernatur. Et sint repellat sunt.</p><p style="margin-top: 0; margin-bottom: 0">Text. Occaecati qui debitis ut minima ab ut ipsa. Eos qui eum. Vel eaque sint. Aut voluptatem est. Eos est aut sit soluta est facere qui soluta aspernatur. Et sint repellat sunt.</p>',rightActionsSlot:"Right actions",danger:!1,headerImage:"",headerTitle:"Modal Title Accusantium occaecati atque similique gg provident nobis.",headerSubtitle:"Modal Subtitle Aut vitae neque consequatur. Consequuntur natus sint ad.",headerFeatureIcon:"FA_CIRCLE_QUESTION",headerFeatureIconColor:n.NEUTRAL,footerPrimaryButtonText:"Primary M",footerPrimaryButtonIcon:null,footerPrimaryButtonState:t.DEFAULT,footerSecondaryButtonText:"Secondary M",footerSecondaryButtonIcon:null,footerSecondaryButtonState:t.DEFAULT},u={danger:{control:"boolean"},headerImage:{control:"text",table:{type:{summary:"string"},defaultValue:{summary:"Hello"}}},headerTitle:{control:"text"},headerSubtitle:{control:"text"},headerFeatureIcon:{control:"select",options:[null,...Object.keys(a)]},headerFeatureIconColor:{control:"select",options:Object.values(n)},footerPrimaryButtonText:{control:"text"},footerPrimaryButtonIcon:{control:"select",options:[null,...Object.keys(a)]},footerPrimaryButtonState:{control:"select",options:Object.values(t)},footerSecondaryButtonText:{control:"text"},footerSecondaryButtonIcon:{control:"select",options:[null,...Object.keys(a)]},footerSecondaryButtonState:{control:"select",options:Object.values(t)}};e.argTypes=u;e.args=T;e.parameters={design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=5658%3A96416&t=lgUXCZhvWDuBr3qw-0"}};const I={defaultSlot:'<p style="margin-top: 0">Text. Occaecati qui debitis ut minima ab ut ipsa. Eos qui eum. Vel eaque sint. Aut voluptatem est. Eos est aut sit soluta est facere qui soluta aspernatur. Et sint repellat sunt.</p><p style="margin-top: 0; margin-bottom: 0">Text. Occaecati qui debitis ut minima ab ut ipsa. Eos qui eum. Vel eaque sint. Aut voluptatem est. Eos est aut sit soluta est facere qui soluta aspernatur. Et sint repellat sunt.</p>',rightActionsSlot:"Right actions",danger:!0,headerImage:"",headerTitle:"Modal Title Accusantium occaecati atque similique gg provident nobis.",headerSubtitle:"Modal Subtitle Aut vitae neque consequatur. Consequuntur natus sint ad.",headerFeatureIcon:"FA_CIRCLE_EXCLAMATION",headerFeatureIconColor:n.NEUTRAL,footerPrimaryButtonText:"Primary M",footerPrimaryButtonIcon:null,footerPrimaryButtonState:t.DEFAULT,footerSecondaryButtonText:"Secondary M",footerSecondaryButtonIcon:null,footerSecondaryButtonState:t.DEFAULT},o=i.bind({});o.argTypes=u;o.args=I;const B={defaultSlot:"",rightActionsSlot:"",danger:!1,headerImage:"https://wiecejnizlek.pl/wp-content/themes/uncode-child/assets/patterns/pattern-black.png",headerTitle:"Modal Title Accusantium occaecati atque similique gg provident nobis.",headerSubtitle:"Modal Subtitle Aut vitae neque consequatur. Consequuntur natus sint ad.",headerFeatureIcon:"FA_CIRCLE_EXCLAMATION",headerFeatureIconColor:n.NEUTRAL,footerPrimaryButtonText:"Primary M",footerPrimaryButtonIcon:null,footerPrimaryButtonState:t.DEFAULT,footerSecondaryButtonText:"Secondary M",footerSecondaryButtonIcon:null,footerSecondaryButtonState:t.DEFAULT},r=i.bind({});r.argTypes=u;r.args=B;var l,c,s;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`args => ({
  components: {
    ModalDialog
  },
  setup() {
    return args;
  },
  template: '<modal-dialog :headerFeatureIcon="ICONS[headerFeatureIcon]" :danger="danger" ' + ':headerTitle="headerTitle" :headerSubtitle="headerSubtitle" :headerFeatureIconColor="headerFeatureIconColor" ' + ':footerPrimaryButtonText="footerPrimaryButtonText" :footerPrimaryButtonIcon="footerPrimaryButtonIcon" :footerPrimaryButtonState="footerPrimaryButtonState" ' + ':headerImage="headerImage" ' + ':footerSecondaryButtonText="footerSecondaryButtonText" :footerSecondaryButtonIcon="footerSecondaryButtonIcon" :footerSecondaryButtonState="footerSecondaryButtonState">' + '<div v-html="defaultSlot" />' + '<template v-if="rightActionsSlot" #rightActions><div style="display: inline-flex;" v-html="rightActionsSlot" /></template>' + '</modal-dialog>',
  data() {
    return {
      ICONS: Object.freeze(ICONS),
      BUTTON_STATES: Object.freeze(BUTTON_STATES)
    };
  }
})`,...(s=(c=e.parameters)==null?void 0:c.docs)==null?void 0:s.source}}};var d,m,S;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`args => ({
  components: {
    ModalDialog
  },
  setup() {
    return args;
  },
  template: '<modal-dialog :headerFeatureIcon="ICONS[headerFeatureIcon]" :danger="danger" ' + ':headerTitle="headerTitle" :headerSubtitle="headerSubtitle" :headerFeatureIconColor="headerFeatureIconColor" ' + ':footerPrimaryButtonText="footerPrimaryButtonText" :footerPrimaryButtonIcon="footerPrimaryButtonIcon" :footerPrimaryButtonState="footerPrimaryButtonState" ' + ':headerImage="headerImage" ' + ':footerSecondaryButtonText="footerSecondaryButtonText" :footerSecondaryButtonIcon="footerSecondaryButtonIcon" :footerSecondaryButtonState="footerSecondaryButtonState">' + '<div v-html="defaultSlot" />' + '<template v-if="rightActionsSlot" #rightActions><div style="display: inline-flex;" v-html="rightActionsSlot" /></template>' + '</modal-dialog>',
  data() {
    return {
      ICONS: Object.freeze(ICONS),
      BUTTON_STATES: Object.freeze(BUTTON_STATES)
    };
  }
})`,...(S=(m=o.parameters)==null?void 0:m.docs)==null?void 0:S.source}}};var f,y,p;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`args => ({
  components: {
    ModalDialog
  },
  setup() {
    return args;
  },
  template: '<modal-dialog :headerFeatureIcon="ICONS[headerFeatureIcon]" :danger="danger" ' + ':headerTitle="headerTitle" :headerSubtitle="headerSubtitle" :headerFeatureIconColor="headerFeatureIconColor" ' + ':footerPrimaryButtonText="footerPrimaryButtonText" :footerPrimaryButtonIcon="footerPrimaryButtonIcon" :footerPrimaryButtonState="footerPrimaryButtonState" ' + ':headerImage="headerImage" ' + ':footerSecondaryButtonText="footerSecondaryButtonText" :footerSecondaryButtonIcon="footerSecondaryButtonIcon" :footerSecondaryButtonState="footerSecondaryButtonState">' + '<div v-html="defaultSlot" />' + '<template v-if="rightActionsSlot" #rightActions><div style="display: inline-flex;" v-html="rightActionsSlot" /></template>' + '</modal-dialog>',
  data() {
    return {
      ICONS: Object.freeze(ICONS),
      BUTTON_STATES: Object.freeze(BUTTON_STATES)
    };
  }
})`,...(p=(y=r.parameters)==null?void 0:y.docs)==null?void 0:p.source}}};const N=["Interactive","Danger","WithImage"];export{o as Danger,e as Interactive,r as WithImage,N as __namedExportsOrder,q as default};
