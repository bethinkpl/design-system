import{w as h}from"./decorator-CcL-F-0p.js";import{b as L}from"./vue.esm-bundler-BjwGMXGm.js";import{P as p,a as o,b as S,c as a}from"./PinInputField-CEXlH_4X.js";import{_ as D}from"./HelpButton-D9OBVWuA.js";import{M as F}from"./Modal-SmLIq-Cc.js";import{a as A,b as y}from"./FormField.stories.shared-DUIbBZOM.js";import"./chunk-4XZ63LWV-laKUlqim.js";import"./v4-CwV2VaSl.js";import"./VisuallyHidden-dgGAb0ge.js";import"./index-3uRCwzDq.js";import"./VisuallyHiddenInput-CHcbOPWj.js";import"./FormField-JqUILWeD.js";import"./FormFieldMessage-C0aLt5yH.js";import"./Icon-CdUzGdbx.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useFormFieldWithinForm-CuurwLt3.js";import"./IconButton-QdkwLB9f.js";import"./Button-DXBV2lSl.js";import"./device-mzBmLsxe.js";import"./Tooltip-C3_MzQ5E.js";import"./useLegacyI18n-Bv0SIZks.js";import"./FeatureIcon-zAUFxSrq.js";const re={title:"Components/Form/PinInputField",component:p,decorators:[h],render:n=>({components:{PinInputField:p,HelpButton:D,Modal:F},setup(){return{props:L(()=>{const{help:b,labelAside:w,message:R,fieldStatus:B,...N}=n;return N}),args:n,PIN_INPUT_FIELD_STATES:a}},data:()=>({value:""}),template:`<PinInputField v-bind="props" v-model="value">
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
        </PinInputField>`}),argTypes:{...A,state:{control:"select",options:Object.values(a)},length:{control:"number"},otp:{control:"boolean"},type:{control:"select",options:Object.values(o)},ariaLabel:{control:"text"}}},e={args:{...y,state:a.DEFAULT,length:S,otp:!0,type:o.NUMBER},parameters:{design:{type:"figma",url:"https://www.figma.com/design/xym3gXf0vBCofzksDtRDaU/INI-201---E-commerce?node-id=1763-34732&m=dev"}}},r={...e,args:{...e.args,state:a.ERROR,messageText:"Kod jest nieprawidłowy"}},s={...e,args:{...e.args,state:a.LOADING}},t={...e,args:{...e.args,otp:!1,type:o.TEXT}};var i,m,l;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(l=(m=e.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var c,d,g;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...Interactive,
  args: {
    ...Interactive.args,
    state: PIN_INPUT_FIELD_STATES.ERROR,
    messageText: 'Kod jest nieprawidłowy'
  }
}`,...(g=(d=r.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var u,I,T;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(f=(E=t.parameters)==null?void 0:E.docs)==null?void 0:f.source},description:{story:"Both `otp` and `type` default on, which suits a numeric one-time code. An alphanumeric code has to\nopt out of `type: 'number'` — reka silently discards non-digits otherwise.",...(P=(v=t.parameters)==null?void 0:v.docs)==null?void 0:P.description}}};const se=["Interactive","Error","Loading","Alphanumeric"];export{t as Alphanumeric,r as Error,e as Interactive,s as Loading,se as __namedExportsOrder,re as default};
