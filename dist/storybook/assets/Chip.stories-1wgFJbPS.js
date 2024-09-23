import{C as o,a as l,b as a,c,d as i}from"./Chip-ji2hlWAf.js";import{I as r}from"./Icon-CVHceNst.js";import{o as u,c as h,a as p}from"./vue.esm-bundler-Bq1ZKmuF.js";import"./IconButton-o4H-Dbj2.js";import"./Button-Cbw2_9er.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const b={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 23 23"},g=p("path",{"fill-rule":"evenodd",d:"M13.47 3.952 3.951 13.47a3.702 3.702 0 0 0 5.235 5.234l9.517-9.517a3.701 3.701 0 1 0-5.235-5.235zM2.207 20.449a6.17 6.17 0 0 0 8.724 0l9.518-9.518a6.17 6.17 0 1 0-8.724-8.724l-9.518 9.518a6.17 6.17 0 0 0 0 8.724","clip-rule":"evenodd"},null,-1),I=p("path",{d:"M2.207 20.45a6.17 6.17 0 0 0 8.724 0l5.405-5.406L7.612 6.32l-5.405 5.405a6.17 6.17 0 0 0 0 8.724z"},null,-1),S=[g,I];function f(s,O){return u(),h("svg",b,S)}const n={render:f},A={title:"Components/Chip",component:o},C=s=>({components:{Chip:o,LogoBadge:n},setup(){return s},template:'<chip :label="label" :is-label-uppercase="isLabelUppercase" :left-icon="ICONS[leftIcon]" :is-removable="isRemovable" :size="size" :color="color" :color-hex="colorHex" :state="state" :radius="radius" />',data(){return{ICONS:Object.freeze(r)}}}),v=s=>({components:{Chip:o,LogoBadge:n},setup(){return s},template:'<chip :label="label" :is-label-uppercase="isLabelUppercase" :left-icon="ICONS[leftIcon]" :is-removable="isRemovable" :size="size" :color="color" :color-hex="colorHex" :state="state" :radius="radius"><template #accessory><logo-badge :style="svgStyle" /></template></chip>',data(){return{ICONS:Object.freeze(r)}},computed:{svgStyle(){return this.size===a.SMALL?{width:"12px",height:"12px"}:{width:"8px",height:"8px"}}}}),e=C.bind({}),t=v.bind({}),d={label:"Chip z labelem",isLabelUppercase:!1,leftIcon:null,radius:l.CAPSULE,size:a.SMALL,color:c.NEUTRAL,colorHex:"",isRemovable:!1,state:i.DEFAULT},m={leftIcon:{control:"select",options:[null,...Object.keys(r)]},size:{control:"select",options:Object.values(a)},color:{control:"select",options:Object.values(c)},state:{control:"select",options:Object.values(i)},radius:{control:"select",options:Object.values(l)}};e.argTypes=m;e.args=d;e.parameters={design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=3690%3A69072"}};t.argTypes=m;t.args=d;t.parameters={design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=3690%3A69072"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => ({
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
})`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => ({
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
})`,...t.parameters?.docs?.source}}};const N=["Interactive","InteractiveWithAccessory"];export{e as Interactive,t as InteractiveWithAccessory,N as __namedExportsOrder,A as default};
