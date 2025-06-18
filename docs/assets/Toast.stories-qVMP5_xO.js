import{D as i,T as s,a,b as c}from"./Toast-qTS4Aysr.js";import{I as o}from"./Icon-I3Cniv10.js";import{w as d}from"./decorator-B_8W69Nd.js";import"./Button-C5dr6u6F.js";import"./vue.esm-bundler-DD4BrEtS.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Card-KSW_Q55y.js";import"./Divider-9o-i_zKL.js";import"./LoadingBar-Dc_eLNsl.js";import"./v4-CwV2VaSl.js";const x={title:"Components/Toast",component:i,decorators:[d]},p=l=>({components:{DsToast:i},setup(){return l},data(){return{ICONS:Object.freeze(o),isVisible:!0,boundariesSelectorId:this.boundariesSelector!=null?`#${this.boundariesSelector}`:null}},template:`<div style="display: flex; justify-content: space-around; height: 1200px; width: 100%;">
        <ds-toast
            v-if="isVisible"
            :size="size"
            :position="position"
            :boundaries-selector="boundariesSelectorId"
            :color="color"
            :footer-primary-button-text="footerPrimaryButtonText"
            :footer-primary-button-icon="ICONS[footerPrimaryButtonIcon]"
            :footer-secondary-button-text="footerSecondaryButtonText"
            :footer-secondary-button-icon="ICONS[footerSecondaryButtonIcon]"
            :is-disappearing="isDisappearing"
            :disappearing-timeout="disappearingTimeout"
            @close="isVisible = false"
        >
            <template #content>
                <span v-html="content" />
            </template>
        </ds-toast>
        <div id="left" style="width: 25%; height: 100%;  border: 1px black solid;"></div>
        <div id="right" style="width: 25%; height: 100%;  border: 1px black solid;"></div>
    </div>`}),t=p.bind({}),u={size:a.MEDIUM,position:s.CENTER,boundariesSelector:null,color:c.INFO,footerPrimaryButtonText:"primary",footerPrimaryButtonIcon:null,footerSecondaryButtonText:"secondary",footerSecondaryButtonIcon:null,isDisappearing:!1,disappearingTimeout:"0",content:"Wpłynąłem na suchego przestwór oceanu"},m={size:{control:"select",options:Object.values(a)},position:{control:"select",options:Object.values(s)},boundariesSelector:{control:"select",options:[null,"left","right"]},color:{control:"select",options:Object.values(c)},footerPrimaryButtonIcon:{control:"select",options:[null,...Object.keys(o)]},footerSecondaryButtonIcon:{control:"select",options:[null,...Object.keys(o)]},content:{control:"text"}};t.argTypes=m;t.args=u;t.parameters={actions:{handles:["close","primary-button-click","secondary-button-click"]},design:{type:"figma",url:"https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=8091-108960"}};var e,n,r;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`args => ({
  components: {
    DsToast
  },
  setup() {
    return args;
  },
  data() {
    return {
      ICONS: Object.freeze(ICONS),
      isVisible: true,
      boundariesSelectorId: this.boundariesSelector != null ? \`#\${this.boundariesSelector}\` : null
    };
  },
  template: \`<div style="display: flex; justify-content: space-around; height: 1200px; width: 100%;">
        <ds-toast
            v-if="isVisible"
            :size="size"
            :position="position"
            :boundaries-selector="boundariesSelectorId"
            :color="color"
            :footer-primary-button-text="footerPrimaryButtonText"
            :footer-primary-button-icon="ICONS[footerPrimaryButtonIcon]"
            :footer-secondary-button-text="footerSecondaryButtonText"
            :footer-secondary-button-icon="ICONS[footerSecondaryButtonIcon]"
            :is-disappearing="isDisappearing"
            :disappearing-timeout="disappearingTimeout"
            @close="isVisible = false"
        >
            <template #content>
                <span v-html="content" />
            </template>
        </ds-toast>
        <div id="left" style="width: 25%; height: 100%;  border: 1px black solid;"></div>
        <div id="right" style="width: 25%; height: 100%;  border: 1px black solid;"></div>
    </div>\`
})`,...(r=(n=t.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};const B=["Interactive"];export{t as Interactive,B as __namedExportsOrder,x as default};
