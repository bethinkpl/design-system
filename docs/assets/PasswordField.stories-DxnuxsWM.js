import{_ as a}from"./PasswordField-n3FPeskA.js";import{_ as v}from"./HelpButton-QvPfcVi7.js";import{M as S}from"./Modal-Bes0eQ6Q.js";import{I}from"./Icon-DjEhQlHu.js";import{a as E,b as F}from"./FormField.stories.shared-C0ZMZypL.js";import{F as l}from"./FormFieldMessage-BUzmZ2Bz.js";import{t as _,d as h}from"./vue.esm-bundler-BjwGMXGm.js";import"./InputField-BJa0VAtz.js";import"./FormField-C_VXIOqC.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useFormFieldWithinForm-DpKb2ka7.js";import"./useTextFieldWithinForm-DVxht5qS.js";import"./IconButton-Bsp8NtDc.js";import"./Button-7OwSQ1rP.js";import"./device-mzBmLsxe.js";import"./Tooltip-C3_MzQ5E.js";import"./useLegacyI18n-Bv0SIZks.js";import"./FeatureIcon-BT4ozZng.js";const J={title:"Components/Form/PasswordField",component:a,render:n=>({components:{PasswordField:a,HelpButton:v,Modal:S},setup(){const{help:d,labelAside:c,message:f,fieldStatus:g,...u}=_(n);return{props:h({...u}),labelAside:c,fieldStatus:g,message:f,help:d,FORM_FIELD_STATES:l,ICONS:I}},data:()=>({value:""}),template:`<PasswordField v-bind="props" v-model="value">
            <template v-if="help" #help>
                <HelpButton :is-disabled="props.state === FORM_FIELD_STATES.DISABLED">
                    <template #modal="{onClose}">
                        <Modal @close-modal="onClose">Modal</Modal>
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
        </PasswordField>`}),argTypes:{...E,suffixText:{control:"text"}}},e={args:{...F,suffixText:"%",inputProps:{placeholder:"Placeholder"}},parameters:{design:{type:"figma",url:"https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=13576-21478&m=dev"}}},t={...e,args:{...e.args,state:l.ERROR,messageText:"Error message text"}};var s,r,o;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    ...args,
    suffixText: '%',
    inputProps: {
      placeholder: 'Placeholder'
    }
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=13576-21478&m=dev'
    }
  }
}`,...(o=(r=e.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};var m,i,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  ...Interactive,
  args: {
    ...Interactive.args,
    state: FORM_FIELD_STATES.ERROR,
    messageText: 'Error message text'
  }
}`,...(p=(i=t.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const Y=["Interactive","Error"];export{t as Error,e as Interactive,Y as __namedExportsOrder,J as default};
