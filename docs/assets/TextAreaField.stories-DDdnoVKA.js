import{T as s}from"./TextAreaField-CZoVnHeq.js";import{_ as w}from"./HelpButton-BV1qHpxf.js";import{M as E}from"./Modal-B1JuZoLY.js";import{a as F,b as x}from"./FormField.stories.shared-CuRZzQoK.js";import{F as f}from"./FormFieldMessage-DKnRkpVg.js";import{t as R,d as _}from"./vue.esm-bundler-BjwGMXGm.js";import"./FormField-BdaT5k7t.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useFormFieldWithinForm-ISSjMz7D.js";import"./index-3uRCwzDq.js";import"./useTextFieldWithinForm-B0FRccWI.js";import"./IconButton-DtmOxBsJ.js";import"./Icon-D5w-paEm.js";import"./Button-DakEY1TS.js";import"./device-mzBmLsxe.js";import"./Tooltip-C3_MzQ5E.js";import"./useLegacyI18n-Bv0SIZks.js";import"./FeatureIcon-DTJheQNs.js";const N={title:"Components/Form/TextAreaField",component:s,render:h=>({components:{TextAreaField:s,HelpButton:w,Modal:E},setup(){const{help:v,labelAside:A,message:S,fieldStatus:T,...I}=R(h);return{props:_({...I}),labelAside:A,fieldStatus:T,message:S,help:v,FORM_FIELD_STATES:f}},data:()=>({value:""}),template:`<TextAreaField v-bind="props" v-model="value">
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
        </TextAreaField>`}),argTypes:{...F,inputProps:{control:"object"},isAutoresizing:{control:"boolean"}}},e={args:{...x,isAutoresizing:!1,inputProps:{rows:3,placeholder:"TextArea placeholder"}},parameters:{design:{type:"figma",url:"https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=13216-6572"}}},t={...e,args:{...e.args,isAutoresizing:!0}},r={...e,args:{...e.args,state:f.ERROR,messageText:"Error message text"}};var a,o,i;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    ...args,
    isAutoresizing: false,
    inputProps: {
      rows: 3,
      placeholder: 'TextArea placeholder'
    }
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=13216-6572'
    }
  }
}`,...(i=(o=e.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var n,p,m,l,d;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  ...Interactive,
  args: {
    ...Interactive.args,
    isAutoresizing: true
  }
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source},description:{story:"The field grows with its content instead of showing the resize handle. `rows` stays the starting\nheight, and the field grows up to 500px, after which it scrolls.",...(d=(l=t.parameters)==null?void 0:l.docs)==null?void 0:d.description}}};var c,g,u;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...Interactive,
  args: {
    ...Interactive.args,
    state: FORM_FIELD_STATES.ERROR,
    messageText: 'Error message text'
  }
}`,...(u=(g=r.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const U=["Interactive","Autoresizing","Error"];export{t as Autoresizing,r as Error,e as Interactive,U as __namedExportsOrder,N as default};
