import{C as o}from"./CheckboxGroupField-NGesI6yH.js";import{C as S,a,d as s,b as t}from"./Checkbox-BD8fLSpN.js";import{a as u,b as f}from"./FormField.stories.shared-BkJHpJMm.js";import{t as v,r as g}from"./vue.esm-bundler-ByLATHYC.js";import{I as E}from"./Icon-f7fVVYjX.js";import{_ as O}from"./HelpButton-ChgongCu.js";import{D as b}from"./Banner-CI0kW3HZ.js";import"./FormField-cQs2l_Iv.js";import"./FormFieldMessage-Bqf0A_bX.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useFormFieldWithinForm-fRno9JFs.js";import"./IconButton-BtPgywma.js";import"./Button-DnGEop_q.js";import"./device-9fgosCm4.js";import"./Tooltip-B2ZtAco5.js";import"./Modal-CZ5wdDv9.js";import"./FeatureIcon-_Yj5AQyL.js";import"./useLegacyI18n-Lhj0cz5x.js";import"./Divider-DibbBBgz.js";const Q={title:"Components/Form/CheckboxGroupField",component:o,render:l=>({components:{CheckboxGroupField:o,Checkbox:S,HelpButton:O,Banner:b},setup(){const{help:p,labelAside:m,message:c,fieldStatus:d,field:h,...C}=v(l);return{props:g({...C}),labelAside:m,fieldStatus:d,message:c,help:p,CHECKBOX_STATES:t,ICONS:E}},template:`
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
            <Banner color="danger" title="Uwaga! Mogą wystąpić problemy z pisaniem testów jednostkowych korzystających z tego komponentu. Unikaj jego używania. A jeśli jest rok 2026 i wciąż widzisz ten komunikat — nakrzycz na Karola!" title-in-color />
        `}),argTypes:u},e={args:{...f,state:t.DEFAULT,size:s.SMALL,elevation:a.X_SMALL,field:()=>{}},parameters:{design:{type:"figma",url:"https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=14832-98644&m=dev"}},argTypes:{size:{control:"select",options:Object.values(s)},state:{control:"select",options:Object.values(t)},elevation:{control:"select",options:Object.values(a)}}};var i,n,r;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(r=(n=e.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};const R=["Interactive"];export{e as Interactive,R as __namedExportsOrder,Q as default};
