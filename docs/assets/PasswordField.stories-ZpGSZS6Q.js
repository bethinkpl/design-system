import{f as w,W as A,Z as h,r as O,d as g,G as P,M as y,l as o,m as R,u as r,o as _,j as m,h as M,t as L,e as C}from"./vue.esm-bundler-S9zc6Wpc.js";import{I as B}from"./InputField-cdYDHA2j.js";import{I as x,c as $,a as k}from"./IconButton-BP3MsFJS.js";import{I as p}from"./Icon-BCNBiMEg.js";import{_ as N}from"./HelpButton-AOedB5Rv.js";import{M as V}from"./Modal-3-iKun9o.js";import{a as D,b as H}from"./FormField.stories.shared-CNxxJsd9.js";import{F as b}from"./FormFieldMessage-BYUVNjt0.js";import"./FormField-VXY5juBG.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useFormFieldWithinForm-BuVp703G.js";import"./useTextFieldWithinForm-BXIhBAA9.js";import"./Button-C24VVysr.js";import"./device-mzBmLsxe.js";import"./fontawesome-CXWUXLFT.js";import"./Tooltip-DGxAUyqd.js";import"./useLegacyI18n-V_RMslSR.js";import"./FeatureIcon-CCm0-VHM.js";const c=w({__name:"PasswordField",props:A({inputProps:{},suffixText:{},name:{},label:{},state:{},hasRequiredIndicator:{type:Boolean},labelInfo:{},subLabel:{},fieldId:{},messageText:{}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(l){const i=h(l,"modelValue"),s=O(!1),u=g(()=>({...l.inputProps,type:s.value?"text":"password"})),f=g(()=>s.value?p.FA_EYE_SLASH:p.FA_EYE);return(e,a)=>(_(),P(r(B),R(e.$props,{modelValue:i.value,"onUpdate:modelValue":a[1]||(a[1]=n=>i.value=n),"input-props":u.value,"left-icon":r(p).FA_LOCK_KEYHOLE}),y({action:o(()=>[M(r(x),{icon:f.value,color:r(k).NEUTRAL_WEAK,size:r($).X_SMALL,"data-test-id":"password-toggle",onClick:a[0]||(a[0]=n=>s.value=!s.value)},null,8,["icon","color","size"])]),_:2},[e.$slots.help?{name:"help",fn:o(()=>[m(e.$slots,"help")]),key:"0"}:void 0,e.$slots.labelAside?{name:"labelAside",fn:o(()=>[m(e.$slots,"labelAside")]),key:"1"}:void 0,e.$slots.message?{name:"message",fn:o(({messageId:n})=>[m(e.$slots,"message",{messageId:n})]),key:"2"}:void 0,e.$slots.fieldStatus?{name:"fieldStatus",fn:o(()=>[m(e.$slots,"fieldStatus")]),key:"3"}:void 0]),1040,["modelValue","input-props","left-icon"]))}});c.__docgenInfo={exportName:"default",displayName:"PasswordField",description:"",tags:{},slots:[{name:"help"},{name:"labelAside"},{name:"message",scoped:!0,bindings:[{name:"message-id",title:"binding"}]},{name:"fieldStatus"}],sourceFiles:["/home/runner/work/design-system/design-system/lib/js/components/Form/PasswordField/PasswordField.vue"]};const le={title:"Components/Form/PasswordField",component:c,render:l=>({components:{PasswordField:c,HelpButton:N,Modal:V},setup(){const{help:i,labelAside:s,message:u,fieldStatus:f,...e}=L(l);return{props:C({...e}),labelAside:s,fieldStatus:f,message:u,help:i,FORM_FIELD_STATES:b,ICONS:p}},data:()=>({value:""}),template:`<PasswordField v-bind="props" v-model="value">
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
        </PasswordField>`}),argTypes:{...D,suffixText:{control:"text"}}},t={args:{...H,suffixText:"%",inputProps:{placeholder:"Placeholder"}},parameters:{design:{type:"figma",url:"https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=13576-21478&m=dev"}}},d={...t,args:{...t.args,state:b.ERROR,messageText:"Error message text"}};var v,S,I;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(I=(S=t.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};var F,E,T;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  ...Interactive,
  args: {
    ...Interactive.args,
    state: FORM_FIELD_STATES.ERROR,
    messageText: 'Error message text'
  }
}`,...(T=(E=d.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};const ie=["Interactive","Error"];export{d as Error,t as Interactive,ie as __namedExportsOrder,le as default};
