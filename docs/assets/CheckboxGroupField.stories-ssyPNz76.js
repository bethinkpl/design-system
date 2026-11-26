import{C as o}from"./CheckboxGroupField-tgm3ftxj.js";import{C as S,a as s,d as a,b as t}from"./Checkbox-BzlLxSA4.js";import{a as v,b as f}from"./FormField.stories.shared-CNxxJsd9.js";import{t as u,e as E}from"./vue.esm-bundler-S9zc6Wpc.js";import{_ as O}from"./HelpButton-AOedB5Rv.js";import{I as b}from"./Icon-BCNBiMEg.js";import"./FormField-VXY5juBG.js";import"./FormFieldMessage-BYUVNjt0.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useFormFieldWithinForm-BuVp703G.js";import"./Primitive-DZpX8QWU.js";import"./index-Dm7VD4DC.js";import"./Presence-BVs8m1Yx.js";import"./Collection-VCss6lUH.js";import"./VisuallyHidden-C_eXOqFr.js";import"./VisuallyHiddenInput-r-p-ryZM.js";import"./IconButton-BP3MsFJS.js";import"./Button-C24VVysr.js";import"./device-mzBmLsxe.js";import"./Tooltip-DGxAUyqd.js";import"./Modal-3-iKun9o.js";import"./FeatureIcon-CCm0-VHM.js";import"./useLegacyI18n-V_RMslSR.js";import"./fontawesome-CXWUXLFT.js";const J={title:"Components/Form/CheckboxGroupField",component:o,render:r=>({components:{CheckboxGroupField:o,Checkbox:S,HelpButton:O},setup(){const{help:l,labelAside:m,message:d,fieldStatus:c,field:g,...C}=u(r);return{props:E({...C}),labelAside:m,fieldStatus:c,message:d,help:l,CHECKBOX_STATES:t,ICONS:b}},template:`
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
}`,...(n=(p=e.parameters)==null?void 0:p.docs)==null?void 0:n.source}}};const U=["Interactive"];export{e as Interactive,U as __namedExportsOrder,J as default};
