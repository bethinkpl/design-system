import{T as n,a}from"./Tooltip-DZNx5wG9.js";import{D as d}from"./Switch-Ays7txCd.js";import{D as p}from"./Button-Cbw2_9er.js";import"./vue.esm-bundler-Bq1ZKmuF.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Icon-CVHceNst.js";const f={title:"Prime Vue Components/Tooltip",component:n},r=s=>({components:{Tooltip:n},setup(){return s},template:`
        <div style="padding: 60px; width: 100%;display: flex;  justify-content: center">
            <div style="padding: 60px;">
                <span>This is a text with </span>
                <tooltip
                    :text="text"
                    :inline="inline"
                    :is-disabled="isDisabled"
                    :placement="placement"
                    :is-pointer-visible="isPointerVisible">
                    <b>inline tooltip trigger</b>
                </tooltip>
            </div>
        </div>
    `}),t=r.bind({}),l={text:"Lorem ipsum dolor sit amet.",isDisabled:!1,placement:a.BOTTOM,isPointerVisible:!0,inline:!0},o={placement:{control:"select",options:Object.values(a)}};t.argTypes=o;t.args=l;t.parameters={design:{type:"figma",url:"https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=8238-6888&m=dev"}};const c=s=>({components:{Tooltip:n,DsSwitch:d},setup(){return s},template:`
        <div style="padding: 60px; width: 100%;display: flex;  justify-content: center">
            <div style="padding: 60px;">
                <tooltip
                    :text="text"
                    :is-disabled="isDisabled"
                    :placement="placement"
                    :is-pointer-visible="isPointerVisible">
                    <ds-switch
                        label-left="labelLeft"
                        label-right="labelRight"
                        :state="switchDisabled ? 'disabled' : 'default'"
                    />
                </tooltip>
            </div>
        </div>
    `}),e=c.bind({});e.argTypes={...o,switchDisabled:{control:"boolean"}};e.args={...l,switchDisabled:!0,inline:!1};const b=s=>({components:{Tooltip:n,DsButton:p},setup(){return s},template:`
        <div style="padding: 60px; width: 100%;display: flex;  justify-content: center">
            <div style="padding: 60px;">
                <tooltip
                    :text="text"
                    :is-disabled="isDisabled"
                    :placement="placement"
                    :is-pointer-visible="isPointerVisible">
                    <ds-button
                        :state="buttonDisabled ? 'disabled': 'default'"
                    >
                        Test button
                    </ds-button>
                </tooltip>
            </div>
        </div>
    `}),i=b.bind({});i.argTypes={...o,buttonDisabled:{control:"boolean"}};i.args={...l,buttonDisabled:!0,inline:!1};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => ({
  components: {
    Tooltip
  },
  setup() {
    return args;
  },
  template: \`
        <div style="padding: 60px; width: 100%;display: flex;  justify-content: center">
            <div style="padding: 60px;">
                <span>This is a text with </span>
                <tooltip
                    :text="text"
                    :inline="inline"
                    :is-disabled="isDisabled"
                    :placement="placement"
                    :is-pointer-visible="isPointerVisible">
                    <b>inline tooltip trigger</b>
                </tooltip>
            </div>
        </div>
    \`
})`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => ({
  components: {
    Tooltip,
    DsSwitch
  },
  setup() {
    return args;
  },
  template: \`
        <div style="padding: 60px; width: 100%;display: flex;  justify-content: center">
            <div style="padding: 60px;">
                <tooltip
                    :text="text"
                    :is-disabled="isDisabled"
                    :placement="placement"
                    :is-pointer-visible="isPointerVisible">
                    <ds-switch
                        label-left="labelLeft"
                        label-right="labelRight"
                        :state="switchDisabled ? 'disabled' : 'default'"
                    />
                </tooltip>
            </div>
        </div>
    \`
})`,...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`args => ({
  components: {
    Tooltip,
    DsButton
  },
  setup() {
    return args;
  },
  template: \`
        <div style="padding: 60px; width: 100%;display: flex;  justify-content: center">
            <div style="padding: 60px;">
                <tooltip
                    :text="text"
                    :is-disabled="isDisabled"
                    :placement="placement"
                    :is-pointer-visible="isPointerVisible">
                    <ds-button
                        :state="buttonDisabled ? 'disabled': 'default'"
                    >
                        Test button
                    </ds-button>
                </tooltip>
            </div>
        </div>
    \`
})`,...i.parameters?.docs?.source}}};const D=["Interactive","OnDsSwitch","OnDsButton"];export{t as Interactive,i as OnDsButton,e as OnDsSwitch,D as __namedExportsOrder,f as default};
