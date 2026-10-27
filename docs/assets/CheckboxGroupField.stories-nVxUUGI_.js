import{C as o}from"./CheckboxGroupField-BfB7rTbn.js";import{C as S,a as s,d as a,b as t}from"./Checkbox-Dyu8-w14.js";import{a as v,b as f}from"./FormField.stories.shared-C9r3q7tX.js";import{t as u,d as E}from"./vue.esm-bundler-DeRiNcSr.js";import{I as O}from"./Icon-QFU__4e-.js";import{_ as b}from"./HelpButton-_0i8SlVu.js";import"./FormField-CSAaRm5O.js";import"./FormFieldMessage-YZrxkF5N.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useFormFieldWithinForm-DzYwomQz.js";import"./Primitive-DQnq458G.js";import"./index-BxAcIQAY.js";import"./Presence-Ccu_tC1V.js";import"./Collection-M3jVt8UP.js";import"./VisuallyHidden-BquiPSGJ.js";import"./VisuallyHiddenInput-vtYPblLg.js";import"./IconButton-DPCw5IX6.js";import"./Button-4WEdqI-U.js";import"./device-mzBmLsxe.js";import"./Tooltip-CWn3E76l.js";import"./Modal-B7FE1d7L.js";import"./FeatureIcon-CQN5_teu.js";import"./useLegacyI18n-AnNgdHoQ.js";const Z={title:"Components/Form/CheckboxGroupField",component:o,render:r=>({components:{CheckboxGroupField:o,Checkbox:S,HelpButton:b},setup(){const{help:l,labelAside:m,message:d,fieldStatus:c,field:g,...C}=u(r);return{props:E({...C}),labelAside:m,fieldStatus:c,message:d,help:l,CHECKBOX_STATES:t,ICONS:O}},template:`
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
        `}),argTypes:v},e={args:{...f,state:t.DEFAULT,size:a.SMALL,elevation:s.X_SMALL,field:()=>{}},parameters:{design:{type:"figma",url:"https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=14832-98644&m=dev"}},argTypes:{size:{control:"select",options:Object.values(a)},state:{control:"select",options:Object.values(t)},elevation:{control:"select",options:Object.values(s)}}};var i,p,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(n=(p=e.parameters)==null?void 0:p.docs)==null?void 0:n.source}}};const J=["Interactive"];export{e as Interactive,J as __namedExportsOrder,Z as default};
