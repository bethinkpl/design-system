import{T as n,a as x}from"./Tooltip-448jplYO.js";import{D as v}from"./Switch-B3HGIUG9.js";import{D as y}from"./Button-CsOCHUpA.js";import"./vue.esm-bundler-Dgz4BqwH.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Icon-Dg-H1Zak.js";const j={title:"Prime Vue Components/Tooltip",component:n},f=s=>({components:{Tooltip:n},setup(){return s},template:`
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
    `}),t=f.bind({}),l={text:"Lorem ipsum dolor sit amet.",isDisabled:!1,placement:x.BOTTOM,isPointerVisible:!0,inline:!0},o={placement:{control:"select",options:Object.values(x)}};t.argTypes=o;t.args=l;t.parameters={design:{type:"figma",url:"https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=8238-6888&m=dev"}};const D=s=>({components:{Tooltip:n,DsSwitch:v},setup(){return s},template:`
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
    `}),e=D.bind({});e.argTypes={...o,switchDisabled:{control:"boolean"}};e.args={...l,switchDisabled:!0,inline:!1};const h=s=>({components:{Tooltip:n,DsButton:y},setup(){return s},template:`
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
    `}),i=h.bind({});i.argTypes={...o,buttonDisabled:{control:"boolean"}};i.args={...l,buttonDisabled:!0,inline:!1};var a,d,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`args => ({
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
})`,...(p=(d=t.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var r,c,b;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`args => ({
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
})`,...(b=(c=e.parameters)==null?void 0:c.docs)==null?void 0:b.source}}};var m,u,g;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`args => ({
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
})`,...(g=(u=i.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const B=["Interactive","OnDsSwitch","OnDsButton"];export{t as Interactive,i as OnDsButton,e as OnDsSwitch,B as __namedExportsOrder,j as default};
