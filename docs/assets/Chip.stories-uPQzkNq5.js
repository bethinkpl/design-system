import{D as r,C as a,a as I,b as u,c as b,d as S}from"./Chip-C1UWgDcz.js";import{I as s}from"./Icon-CdUzGdbx.js";import{L as g}from"./logo-badge-BJZHaZGL.js";import"./vue.esm-bundler-BjwGMXGm.js";import"./Button-DXBV2lSl.js";import"./IconButton-QdkwLB9f.js";import"./device-mzBmLsxe.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const H={title:"Components/Chip",component:r},C=o=>({components:{Chip:r,LogoBadge:g},setup(){return o},template:'<chip :label="label" :is-label-uppercase="isLabelUppercase" :left-icon="ICONS[leftIcon]" :right-icon="ICONS[rightIcon]" :is-removable="isRemovable" :size="size" :color="color" :color-hex="colorHex" :state="state" :radius="radius" :is-interactive="isInteractive" />',data(){return{ICONS:Object.freeze(s)}}}),O=o=>({components:{Chip:r,LogoBadge:g},setup(){return o},template:'<chip :label="label" :is-label-uppercase="isLabelUppercase" :left-icon="ICONS[leftIcon]" :right-icon="ICONS[rightIcon]" :is-removable="isRemovable" :size="size" :color="color" :color-hex="colorHex" :state="state" :radius="radius" :is-interactive="isInteractive"><template #accessory><logo-badge :style="svgStyle" /></template></chip>',data(){return{ICONS:Object.freeze(s)}},computed:{svgStyle(){return this.size===a.SMALL?{width:"12px",height:"12px"}:{width:"8px",height:"8px"}}}}),e=C.bind({}),t=O.bind({}),h={label:"Chip z labelem",isLabelUppercase:!1,leftIcon:null,rightIcon:null,radius:u.CAPSULE,size:a.SMALL,color:b,colorHex:"",isRemovable:!1,isInteractive:!1,state:I.DEFAULT},d={leftIcon:{control:"select",options:[null,...Object.keys(s)]},rightIcon:{control:"select",options:[null,...Object.keys(s)]},size:{control:"select",options:Object.values(a)},color:{control:"select",options:Object.values(S)},state:{control:"select",options:Object.values(I)},radius:{control:"select",options:Object.values(u)}};e.argTypes=d;e.args=h;e.parameters={design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=3690%3A69072"}};t.argTypes=d;t.args=h;t.parameters={design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=3690%3A69072"}};var i,c,l;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`args => ({
  components: {
    Chip,
    LogoBadge
  },
  setup() {
    return args;
  },
  template: '<chip :label="label" :is-label-uppercase="isLabelUppercase" :left-icon="ICONS[leftIcon]" :right-icon="ICONS[rightIcon]" :is-removable="isRemovable" :size="size" :color="color" :color-hex="colorHex" :state="state" :radius="radius" :is-interactive="isInteractive" />',
  data() {
    return {
      ICONS: Object.freeze(ICONS)
    };
  }
})`,...(l=(c=e.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var p,n,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`args => ({
  components: {
    Chip,
    LogoBadge
  },
  setup() {
    return args;
  },
  template: '<chip :label="label" :is-label-uppercase="isLabelUppercase" :left-icon="ICONS[leftIcon]" :right-icon="ICONS[rightIcon]" :is-removable="isRemovable" :size="size" :color="color" :color-hex="colorHex" :state="state" :radius="radius" :is-interactive="isInteractive">' + '<template #accessory><logo-badge :style="svgStyle" /></template>' + '</chip>',
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
})`,...(m=(n=t.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};const j=["Interactive","InteractiveWithAccessory"];export{e as Interactive,t as InteractiveWithAccessory,j as __namedExportsOrder,H as default};
