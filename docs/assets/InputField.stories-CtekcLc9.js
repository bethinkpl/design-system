import{I as a}from"./InputField-C9MiU79t.js";import{_ as S}from"./HelpButton-CYbQ1yNv.js";import{M as x}from"./Modal-D56H-Wlw.js";import{I as o}from"./Icon-B34psKr9.js";import{a as E,b as F}from"./FormField.stories.shared-D53wnOK2.js";import{F as m}from"./FormFieldMessage-5TGFcPHb.js";import{t as h,r as R}from"./vue.esm-bundler-BEu-HfQJ.js";import"./FormField-BpExHW9K.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useFormFieldWithinForm-D5mV3ZgF.js";import"./IconButton-DJiLh6fX.js";import"./Button-90lzII8N.js";import"./device-9fgosCm4.js";import"./Tooltip-Do-QYl8p.js";import"./useLegacyI18n-BcTBReTN.js";import"./FeatureIcon-C6hvRME_.js";const G={title:"Components/Form/InputField",component:a,render:c=>({components:{InputField:a,HelpButton:S,Modal:x},setup(){const{help:d,labelAside:f,message:u,fieldStatus:g,action:I,...v}=h(c);return{props:R({...v}),labelAside:f,fieldStatus:g,message:u,help:d,action:I,FORM_FIELD_STATES:m,ICONS:o}},data:()=>({value:""}),template:`<InputField v-bind="props" :left-icon="props.leftIcon ? ICONS[props.leftIcon] : null" v-model="value">
            <template v-if="help" #help>
                <HelpButton :is-disabled="props.state === FORM_FIELD_STATES.DISABLED" modal-title="Help modal title">
                    <template #modalContent>
                        Modal
                    </template>
                </HelpButton>
            </template>
            <template #labelAside v-if="labelAside">
                <div v-html="labelAside" />
            </template>
            <template #fieldStatus v-if="fieldStatus">
                <div v-html="fieldStatus" />
            </template>
            <template #message v-if="message">
                <div v-if="message" v-html="message" />
            </template>
            <template #action v-if="action">
                <div v-html="action" />
            </template>
        </InputField>`}),argTypes:{...E,leftIcon:{control:"select",options:[null,...Object.keys(o)]},suffixText:{control:"text"},action:{control:"text"}}},e={args:{...F,leftIcon:null,suffixText:"%",action:"Action",inputProps:{placeholder:"Placeholder"}},parameters:{design:{type:"figma",url:"https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=13198-38645&t=BlkZV83eerbMSMyv-4"}}},t={...e,args:{...e.args,state:m.ERROR,messageText:"Error message text"}};var r,s,n;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    ...args,
    leftIcon: null,
    suffixText: '%',
    action: 'Action',
    inputProps: {
      placeholder: 'Placeholder'
    }
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=13198-38645&t=BlkZV83eerbMSMyv-4'
    }
  }
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var l,i,p;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  ...Interactive,
  args: {
    ...Interactive.args,
    state: FORM_FIELD_STATES.ERROR,
    messageText: 'Error message text'
  }
}`,...(p=(i=t.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const J=["Interactive","Error"];export{t as Error,e as Interactive,J as __namedExportsOrder,G as default};
