import{D as s,T as m,a as i,b as u}from"./Toast-B9rgJGQj.js";import{I as o}from"./Icon-B79JJqqy.js";import{w as T}from"./decorator-CcL-F-0p.js";import"./vue.esm-bundler-B82wjiSt.js";import"./Button-DK14lfTl.js";import"./Card-Dhv8K2-r.js";import"./Divider-Bxxz8Ron.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./LoadingBar-B_Pl6HQp.js";import"./ContainerRibbon-CvIa6H_D.js";import"./IconButton-DKdAEAea.js";import"./device-mzBmLsxe.js";import"./chunk-4XZ63LWV-laKUlqim.js";import"./v4-CwV2VaSl.js";const V={title:"Components/Toast",component:s,decorators:[T]},b=`<ds-toast
        v-if="isVisible"
        :title="title"
        :size="size"
        :position="position"
        :color="color"
        :footer-primary-button-text="footerPrimaryButtonText"
        :footer-primary-button-icon="ICONS[footerPrimaryButtonIcon]"
        :footer-secondary-button-text="footerSecondaryButtonText"
        :footer-secondary-button-icon="ICONS[footerSecondaryButtonIcon]"
        :is-disappearing="isDisappearing"
        :disappearing-timeout="disappearingTimeout"
        :is-closable="isClosable"
        @close="isVisible = false"
    >
        <template #content>
            <span v-html="content" />
        </template>
    </ds-toast>`,f=n=>({components:{DsToast:s},setup(){return n},data(){return{ICONS:Object.freeze(o),isVisible:!0}},template:`<div style="height: 1200px; width: 100%;">
        ${b}
    </div>`}),S=n=>({components:{DsToast:s},setup(){return n},data(){return{ICONS:Object.freeze(o),isVisible:!0}},template:`<div style="height: 400px; padding: 24px; width: 100%;">
        <div style="position: relative; height: 100%; border: 1px black solid;">
            <div style="position: absolute; bottom: 16px; right: 16px;">
                ${b}
            </div>
        </div>
    </div>`}),t=f.bind({}),y={title:"Opcjonalny Title wpisz tutaj",size:u.MEDIUM,position:i.CENTER,color:m.INFO,footerPrimaryButtonText:"primary",footerPrimaryButtonIcon:null,footerSecondaryButtonText:"secondary",footerSecondaryButtonIcon:null,isDisappearing:!1,disappearingTimeout:"0",isClosable:!0,content:"Wpłynąłem na suchego przestwór oceanu"},g={title:{control:"text"},size:{control:"select",options:Object.values(u)},position:{control:"select",options:Object.values(i)},color:{control:"select",options:Object.values(m)},footerPrimaryButtonIcon:{control:"select",options:[null,...Object.keys(o)]},footerSecondaryButtonIcon:{control:"select",options:[null,...Object.keys(o)]},isClosable:{control:"boolean"},content:{control:"text"}},O={actions:{handles:["close","primary-button-click","secondary-button-click"]}};t.argTypes=g;t.args=y;t.parameters={...O,design:{type:"figma",url:"https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=8091-108960"}};const e=S.bind({});e.argTypes=g;e.args={...y,position:i.NONE};e.parameters=O;var r,a,p;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`args => ({
  components: {
    DsToast
  },
  setup() {
    return args;
  },
  data() {
    return {
      ICONS: Object.freeze(ICONS),
      isVisible: true
    };
  },
  template: \`<div style="height: 1200px; width: 100%;">
        \${toastTemplate}
    </div>\`
})`,...(p=(a=t.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};var c,l,d;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`args => ({
  components: {
    DsToast
  },
  setup() {
    return args;
  },
  data() {
    return {
      ICONS: Object.freeze(ICONS),
      isVisible: true
    };
  },
  template: \`<div style="height: 400px; padding: 24px; width: 100%;">
        <div style="position: relative; height: 100%; border: 1px black solid;">
            <div style="position: absolute; bottom: 16px; right: 16px;">
                \${toastTemplate}
            </div>
        </div>
    </div>\`
})`,...(d=(l=e.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const _=["Interactive","ClientPositioned"];export{e as ClientPositioned,t as Interactive,_ as __namedExportsOrder,V as default};
