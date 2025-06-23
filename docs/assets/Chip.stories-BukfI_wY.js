import{C as o,d as a,e as b,b as g,a as f,c as C}from"./Chip-Bi-iKYH0.js";import{I as r}from"./Icon-BxW-ny3A.js";import{c as O,a as c,o as v}from"./vue.esm-bundler-CC_vsnCp.js";import"./Button-CRTJWjWJ.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./IconButton-C0_vxVJn.js";import"./device-9fgosCm4.js";const x={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 23 23"};function L(s,l){return v(),O("svg",x,l[0]||(l[0]=[c("path",{"fill-rule":"evenodd",d:"M13.47 3.952 3.951 13.47a3.702 3.702 0 0 0 5.235 5.234l9.517-9.517a3.701 3.701 0 1 0-5.235-5.235zM2.207 20.449a6.17 6.17 0 0 0 8.724 0l9.518-9.518a6.17 6.17 0 1 0-8.724-8.724l-9.518 9.518a6.17 6.17 0 0 0 0 8.724","clip-rule":"evenodd"},null,-1),c("path",{d:"M2.207 20.45a6.17 6.17 0 0 0 8.724 0l5.405-5.406L7.612 6.32l-5.405 5.405a6.17 6.17 0 0 0 0 8.724z"},null,-1)]))}const h={render:L},B={title:"Components/Chip",component:o},y=s=>({components:{Chip:o,LogoBadge:h},setup(){return s},template:'<chip :label="label" :is-label-uppercase="isLabelUppercase" :left-icon="ICONS[leftIcon]" :is-removable="isRemovable" :size="size" :color="color" :color-hex="colorHex" :state="state" :radius="radius" />',data(){return{ICONS:Object.freeze(r)}}}),z=s=>({components:{Chip:o,LogoBadge:h},setup(){return s},template:'<chip :label="label" :is-label-uppercase="isLabelUppercase" :left-icon="ICONS[leftIcon]" :is-removable="isRemovable" :size="size" :color="color" :color-hex="colorHex" :state="state" :radius="radius"><template #accessory><logo-badge :style="svgStyle" /></template></chip>',data(){return{ICONS:Object.freeze(r)}},computed:{svgStyle(){return this.size===a.SMALL?{width:"12px",height:"12px"}:{width:"8px",height:"8px"}}}}),e=y.bind({}),t=z.bind({}),I={label:"Chip z labelem",isLabelUppercase:!1,leftIcon:null,radius:g.CAPSULE,size:a.SMALL,color:f,colorHex:"",isRemovable:!1,state:b.DEFAULT},S={leftIcon:{control:"select",options:[null,...Object.keys(r)]},size:{control:"select",options:Object.values(a)},color:{control:"select",options:Object.values(C)},state:{control:"select",options:Object.values(b)},radius:{control:"select",options:Object.values(g)}};e.argTypes=S;e.args=I;e.parameters={design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=3690%3A69072"}};t.argTypes=S;t.args=I;t.parameters={design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=3690%3A69072"}};var i,p,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`args => ({
  components: {
    Chip,
    LogoBadge
  },
  setup() {
    return args;
  },
  template: '<chip :label="label" :is-label-uppercase="isLabelUppercase" :left-icon="ICONS[leftIcon]" :is-removable="isRemovable" :size="size" :color="color" :color-hex="colorHex" :state="state" :radius="radius" />',
  data() {
    return {
      ICONS: Object.freeze(ICONS)
    };
  }
})`,...(n=(p=e.parameters)==null?void 0:p.docs)==null?void 0:n.source}}};var m,d,u;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`args => ({
  components: {
    Chip,
    LogoBadge
  },
  setup() {
    return args;
  },
  template: '<chip :label="label" :is-label-uppercase="isLabelUppercase" :left-icon="ICONS[leftIcon]" :is-removable="isRemovable" :size="size" :color="color" :color-hex="colorHex" :state="state" :radius="radius">' + '<template #accessory><logo-badge :style="svgStyle" /></template>' + '</chip>',
  data() {
    return {
      ICONS: Object.freeze(ICONS)
    };
  },
  computed: {
    svgStyle() {
      if (this.size === CHIP_SIZES.SMALL) {
        return {
          width: '12px',
          height: '12px'
        };
      }
      return {
        width: '8px',
        height: '8px'
      };
    }
  }
})`,...(u=(d=t.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const E=["Interactive","InteractiveWithAccessory"];export{e as Interactive,t as InteractiveWithAccessory,E as __namedExportsOrder,B as default};
