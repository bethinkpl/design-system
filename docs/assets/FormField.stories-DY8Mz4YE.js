import{F as s}from"./FormField-BjLFip7T.js";import{_ as F}from"./HelpButton-BStTtLsz.js";import{F as l}from"./FormFieldMessage-B4Oy2QBT.js";import{a as I,b as S}from"./FormField.stories.shared-3_36NKi_.js";import{t as E,r as R}from"./vue.esm-bundler-DcRN7CPI.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./IconButton-Cn83Zk5-.js";import"./Icon-DUeXRUm6.js";import"./Button-XuK8IxnR.js";import"./device-9fgosCm4.js";import"./Tooltip-BvaJ_K9_.js";import"./Modal-ByQBkOMU.js";import"./FeatureIcon-DY5WvpPf.js";const z={title:"Components/Form/FormField",component:s,render:n=>({components:{FormField:s,HelpButton:F},setup(){const{field:d,help:f,labelAside:g,message:c,fieldStatus:v,...u}=E(n);return{props:R({...u}),labelAside:g,fieldStatus:v,message:c,help:f,field:d,FORM_FIELD_STATES:l}},template:`<FormField v-bind="props">
            <template #field="{fieldId, messageId}">
                <input v-if="!field" :id="fieldId" :aria-describedby="messageId" />
                <div v-else v-html="field" />
            </template>
            <template v-if="help" #help>
                <HelpButton :is-disabled="props.state === FORM_FIELD_STATES.DISABLED" modal-title="Help modal title">
                    <template #modalContent>
                        Modal
                    </template>
                </HelpButton>
            </template>
            <template v-if="labelAside" #labelAside>
                <div v-html="labelAside" />
            </template>
            <template v-if="fieldStatus" #fieldStatus>
                <div v-html="fieldStatus" />
            </template>
            <template v-if="message" #message>
                <div v-html="message" />
            </template>
        </FormField>`}),argTypes:{...I,field:{control:"text"}}},e={args:{...S,field:""},parameters:{design:{type:"figma",url:"https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=13267-86654&t=ezos5nMsGrZyaqmC-4"}}},t={...e,args:{...e.args,state:l.ERROR,messageText:"Error message text"}};var a,r,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    ...args,
    field: ''
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=13267-86654&t=ezos5nMsGrZyaqmC-4'
    }
  }
}`,...(o=(r=e.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};var m,i,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  ...Interactive,
  args: {
    ...Interactive.args,
    state: FORM_FIELD_STATES.ERROR,
    messageText: 'Error message text'
  }
}`,...(p=(i=t.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const G=["Interactive","Error"];export{t as Error,e as Interactive,G as __namedExportsOrder,z as default};
