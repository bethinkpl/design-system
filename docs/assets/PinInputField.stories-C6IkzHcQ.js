import{w as h}from"./decorator-CcL-F-0p.js";import{b as L}from"./vue.esm-bundler-DeRiNcSr.js";import{P as p,a as o,b as S,c as r}from"./PinInputField-B0_X9NUg.js";import{_ as D}from"./HelpButton-_0i8SlVu.js";import{M as F}from"./Modal-B7FE1d7L.js";import{a as A,b as y}from"./FormField.stories.shared-C9r3q7tX.js";import"./chunk-4XZ63LWV-laKUlqim.js";import"./v4-CwV2VaSl.js";import"./Primitive-DQnq458G.js";import"./index-BxAcIQAY.js";import"./VisuallyHidden-BquiPSGJ.js";import"./VisuallyHiddenInput-vtYPblLg.js";import"./FormField-CSAaRm5O.js";import"./FormFieldMessage-YZrxkF5N.js";import"./Icon-QFU__4e-.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useFormFieldWithinForm-DzYwomQz.js";import"./IconButton-DPCw5IX6.js";import"./Button-4WEdqI-U.js";import"./device-mzBmLsxe.js";import"./Tooltip-CWn3E76l.js";import"./useLegacyI18n-AnNgdHoQ.js";import"./FeatureIcon-CQN5_teu.js";const se={title:"Components/Form/PinInputField",component:p,decorators:[h],render:n=>({components:{PinInputField:p,HelpButton:D,Modal:F},setup(){return{props:L(()=>{const{help:b,labelAside:w,message:R,fieldStatus:B,...N}=n;return N}),args:n,PIN_INPUT_FIELD_STATES:r}},data:()=>({value:""}),template:`<PinInputField v-bind="props" v-model="value">
            <template v-if="args.help" #help>
                <HelpButton modal-title="Help modal title">
                    <template #modalContent>
                        Modal
                    </template>
                </HelpButton>
            </template>
            <template #labelAside v-if="args.labelAside">
                <div v-html="args.labelAside" />
            </template>
            <template #fieldStatus v-if="args.fieldStatus">
                <div v-html="args.fieldStatus" />
            </template>
            <template #message v-if="args.message">
                <div v-html="args.message" />
            </template>
        </PinInputField>`}),argTypes:{...A,state:{control:"select",options:Object.values(r)},length:{control:"number"},otp:{control:"boolean"},type:{control:"select",options:Object.values(o)},ariaLabel:{control:"text"}}},e={args:{...y,state:r.DEFAULT,length:S,otp:!0,type:o.NUMBER},parameters:{design:{type:"figma",url:"https://www.figma.com/design/xym3gXf0vBCofzksDtRDaU/INI-201---E-commerce?node-id=1763-34732&m=dev"}}},a={...e,args:{...e.args,state:r.ERROR,messageText:"Kod jest nieprawidłowy"}},s={...e,args:{...e.args,state:r.LOADING}},t={...e,args:{...e.args,otp:!1,type:o.TEXT}};var i,m,l;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    ...args,
    state: PIN_INPUT_FIELD_STATES.DEFAULT as PinInputFieldState,
    length: PIN_INPUT_FIELD_DEFAULT_LENGTH,
    otp: true,
    type: PIN_INPUT_FIELD_TYPES.NUMBER
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/xym3gXf0vBCofzksDtRDaU/INI-201---E-commerce?node-id=1763-34732&m=dev'
    }
  }
}`,...(l=(m=e.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var c,d,g;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...Interactive,
  args: {
    ...Interactive.args,
    state: PIN_INPUT_FIELD_STATES.ERROR,
    messageText: 'Kod jest nieprawidłowy'
  }
}`,...(g=(d=a.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var u,I,T;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  ...Interactive,
  args: {
    ...Interactive.args,
    state: PIN_INPUT_FIELD_STATES.LOADING
  }
}`,...(T=(I=s.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var _,E,f,v,P;t.parameters={...t.parameters,docs:{...(_=t.parameters)==null?void 0:_.docs,source:{originalSource:`{
  ...Interactive,
  args: {
    ...Interactive.args,
    otp: false,
    type: PIN_INPUT_FIELD_TYPES.TEXT
  }
}`,...(f=(E=t.parameters)==null?void 0:E.docs)==null?void 0:f.source},description:{story:"Both `otp` and `type` default on, which suits a numeric one-time code. An alphanumeric code has to\nopt out of `type: 'number'` — reka silently discards non-digits otherwise.",...(P=(v=t.parameters)==null?void 0:v.docs)==null?void 0:P.description}}};const oe=["Interactive","Error","Loading","Alphanumeric"];export{t as Alphanumeric,a as Error,e as Interactive,s as Loading,oe as __namedExportsOrder,se as default};
