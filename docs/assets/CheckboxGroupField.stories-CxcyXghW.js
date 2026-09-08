import{C as o}from"./CheckboxGroupField-CSdd-g_V.js";import{C as S,a as s,d as a,b as t}from"./Checkbox-L5sNPDQG.js";import{a as v,b as f}from"./FormField.stories.shared-BRq9-4GH.js";import{t as u,d as E}from"./vue.esm-bundler-BjwGMXGm.js";import{I as O}from"./Icon-DWO0jEK5.js";import{_ as b}from"./HelpButton-CCGF6TKJ.js";import"./FormField-sX0EmOqB.js";import"./FormFieldMessage-BUJJU_qM.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useFormFieldWithinForm-BUlalYRP.js";import"./VisuallyHidden-dgGAb0ge.js";import"./index-3uRCwzDq.js";import"./Collection-CLGbUG7t.js";import"./VisuallyHiddenInput-CHcbOPWj.js";import"./IconButton-DdE4tqnq.js";import"./Button-BTZgnZ5_.js";import"./device-mzBmLsxe.js";import"./Tooltip-C3_MzQ5E.js";import"./Modal-Bfn0ROuM.js";import"./FeatureIcon-DXvCkVhs.js";import"./useLegacyI18n-Bv0SIZks.js";const R={title:"Components/Form/CheckboxGroupField",component:o,render:l=>({components:{CheckboxGroupField:o,Checkbox:S,HelpButton:b},setup(){const{help:r,labelAside:m,message:d,fieldStatus:c,field:g,...C}=u(l);return{props:E({...C}),labelAside:m,fieldStatus:c,message:d,help:r,CHECKBOX_STATES:t,ICONS:O}},template:`
            <CheckboxGroupField v-bind="props">
                <template #field>
                    <Checkbox value="option1">Option 1</Checkbox>
                    <Checkbox value="option2">Option 2</Checkbox>
                    <Checkbox value="option3">Option 3</Checkbox>
                </template>
                <template v-if="help" #help>
                    <HelpButton :is-disabled="props.state === CHECKBOX_STATES.DISABLED" modal-title="Help modal title">
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
            </CheckboxGroupField>
        `}),argTypes:v},e={args:{...f,state:t.DEFAULT,size:a.SMALL,elevation:s.X_SMALL,field:()=>{}},parameters:{design:{type:"figma",url:"https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=14832-98644&m=dev"}},argTypes:{size:{control:"select",options:Object.values(a)},state:{control:"select",options:Object.values(t)},elevation:{control:"select",options:Object.values(s)}}};var i,n,p;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    ...args,
    state: CHECKBOX_STATES.DEFAULT,
    size: CHECKBOX_SIZES.SMALL,
    elevation: CHECKBOX_ELEVATIONS.X_SMALL,
    // Override the field arg just to make TS happy; the story doesn't allow editing it anyway
    field: () => {}
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=14832-98644&m=dev'
    }
  },
  argTypes: {
    size: {
      control: 'select',
      options: Object.values(CHECKBOX_SIZES)
    },
    state: {
      control: 'select',
      options: Object.values(CHECKBOX_STATES)
    },
    elevation: {
      control: 'select',
      options: Object.values(CHECKBOX_ELEVATIONS)
    }
  }
}`,...(p=(n=e.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const V=["Interactive"];export{e as Interactive,V as __namedExportsOrder,R as default};
