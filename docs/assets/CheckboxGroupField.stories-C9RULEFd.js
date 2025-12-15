import{C as o}from"./CheckboxGroupField-jZunUewN.js";import{C as S,a,d as s,b as t}from"./Checkbox-C1xryXFs.js";import{a as u,b as f}from"./FormField.stories.shared-9WhO1mVY.js";import{t as v,r as g}from"./vue.esm-bundler-C98R7Ujk.js";import{I as E}from"./Icon-ddyjuS6I.js";import{_ as O}from"./HelpButton-B44y-6gc.js";import{B as b}from"./Banner-BGAnAjLw.js";import"./FormField-Hq3E-jxa.js";import"./FormFieldMessage-a_Ertf9B.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useFormFieldWithinForm-CBdTYQYp.js";import"./IconButton-DnKJVLNZ.js";import"./Button-BjAiPnav.js";import"./device-9fgosCm4.js";import"./Tooltip-BgIjJ37R.js";import"./Modal-u1yDpz5c.js";import"./FeatureIcon-xXaQf1Ne.js";import"./Divider-B4IxPXqZ.js";const N={title:"Components/Form/CheckboxGroupField",component:o,render:l=>({components:{CheckboxGroupField:o,Checkbox:S,HelpButton:O,Banner:b},setup(){const{help:p,labelAside:m,message:c,fieldStatus:d,field:h,...C}=v(l);return{props:g({...C}),labelAside:m,fieldStatus:d,message:c,help:p,CHECKBOX_STATES:t,ICONS:E}},template:`
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
}`,...(r=(n=e.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};const Q=["Interactive"];export{e as Interactive,Q as __namedExportsOrder,N as default};
