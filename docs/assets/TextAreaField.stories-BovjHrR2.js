import{T as s}from"./TextAreaField-BtOMFG3s.js";import{_ as w}from"./HelpButton-Ddo5PBYZ.js";import{M as E}from"./Modal-Y6lEWRWI.js";import{a as F,b as x}from"./FormField.stories.shared-C_nfzbZc.js";import{F as f}from"./FormFieldMessage-CsClBSRk.js";import{t as R,a as _}from"./vue.esm-bundler-B82wjiSt.js";import"./FormField-hXs1B1fE.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useFormFieldWithinForm-Oc6Cld1h.js";import"./index-DCEEfTeG.js";import"./useTextFieldWithinForm-Bp-2_985.js";import"./IconButton-DKdAEAea.js";import"./Icon-B79JJqqy.js";import"./Button-DK14lfTl.js";import"./device-mzBmLsxe.js";import"./Tooltip-BAbGxXLW.js";import"./useLegacyI18n-CQM7nz1H.js";import"./FeatureIcon-B6uzddnt.js";const N={title:"Components/Form/TextAreaField",component:s,render:h=>({components:{TextAreaField:s,HelpButton:w,Modal:E},setup(){const{help:v,labelAside:A,message:S,fieldStatus:T,...I}=R(h);return{props:_({...I}),labelAside:A,fieldStatus:T,message:S,help:v,FORM_FIELD_STATES:f}},data:()=>({value:""}),template:`<TextAreaField v-bind="props" v-model="value">
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
