import{I as a}from"./InputField-DRL6wBQz.js";import{_ as S}from"./HelpButton-B44y-6gc.js";import{D as x}from"./Modal-u1yDpz5c.js";import{I as o}from"./Icon-ddyjuS6I.js";import{a as E,b as F}from"./FormField.stories.shared-9WhO1mVY.js";import{F as m}from"./FormFieldMessage-a_Ertf9B.js";import{t as h,r as R}from"./vue.esm-bundler-C98R7Ujk.js";import"./FormField-Hq3E-jxa.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useFormFieldWithinForm-CBdTYQYp.js";import"./IconButton-DnKJVLNZ.js";import"./Button-BjAiPnav.js";import"./device-9fgosCm4.js";import"./Tooltip-BgIjJ37R.js";import"./FeatureIcon-xXaQf1Ne.js";const z={title:"Components/Form/InputField",component:a,render:c=>({components:{InputField:a,HelpButton:S,Modal:x},setup(){const{help:d,labelAside:f,message:u,fieldStatus:g,action:I,...v}=h(c);return{props:R({...v}),labelAside:f,fieldStatus:g,message:u,help:d,action:I,FORM_FIELD_STATES:m,ICONS:o}},data:()=>({value:""}),template:`<InputField v-bind="props" :left-icon="props.leftIcon ? ICONS[props.leftIcon] : null" v-model="value">
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
        </InputField>`}),argTypes:{...E,leftIcon:{control:"select",options:[null,...Object.keys(o)]},suffixText:{control:"text"},action:{control:"text"}}},e={args:{...F,leftIcon:null,suffixText:"%",action:"Action",inputProps:{placeholder:"Placeholder"}},parameters:{design:{type:"figma",url:"https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=13198-38645&t=BlkZV83eerbMSMyv-4"}}},t={...e,args:{...e.args,state:m.ERROR,messageText:"Error message text"}};var s,r,n;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(n=(r=e.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};var l,i,p;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  ...Interactive,
  args: {
    ...Interactive.args,
    state: FORM_FIELD_STATES.ERROR,
    messageText: 'Error message text'
  }
}`,...(p=(i=t.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const G=["Interactive","Error"];export{t as Error,e as Interactive,G as __namedExportsOrder,z as default};
