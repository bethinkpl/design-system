import{C as o}from"./CheckboxGroupField-BmCHCNJj.js";import{C as S,a as s,d as a,b as t}from"./Checkbox-B3YmWjDJ.js";import{a as v,b as f}from"./FormField.stories.shared-B-v7oUea.js";import{t as u,r as E}from"./vue.esm-bundler-CjwGEpld.js";import{I as O}from"./Icon-CyG6-QCe.js";import{_ as b}from"./HelpButton-Dg8V8ba-.js";import"./FormField-CTlolAw8.js";import"./FormFieldMessage-CmOpMglL.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useFormFieldWithinForm-B1Fw3uwb.js";import"./index-BXf4aNP_.js";import"./IconButton-Z2JnqBV8.js";import"./Button-Dl-HN0v2.js";import"./device-mzBmLsxe.js";import"./Tooltip-B5HEf_NZ.js";import"./Modal-BIuIn3bk.js";import"./FeatureIcon-CtCoA9t3.js";import"./useLegacyI18n-BPFocabW.js";const G={title:"Components/Form/CheckboxGroupField",component:o,render:l=>({components:{CheckboxGroupField:o,Checkbox:S,HelpButton:b},setup(){const{help:r,labelAside:m,message:d,fieldStatus:c,field:g,...C}=u(l);return{props:E({...C}),labelAside:m,fieldStatus:c,message:d,help:r,CHECKBOX_STATES:t,ICONS:O}},template:`
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
}`,...(p=(n=e.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const N=["Interactive"];export{e as Interactive,N as __namedExportsOrder,G as default};
