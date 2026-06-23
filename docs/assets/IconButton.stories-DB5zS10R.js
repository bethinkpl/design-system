import{I as o,a as N,b as T,c as I,d as g,e as D}from"./IconButton-BkaojgfZ.js";import{b as l,B as v}from"./Button-jIfyX13P.js";import{I as r}from"./Icon-DWRpSdRa.js";import{w as F}from"./decorator-dmUe8Ksx.js";import"./vue.esm-bundler-BTN_IDVo.js";import"./device-mzBmLsxe.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./v4-CwV2VaSl.js";const q={title:"Components/Buttons/IconButton",component:o,decorators:[F]},P=e=>({components:{IconButton:o},setup(){return e},computed:{isInverted(){return this.color==="inverted"}},data(){return{ICONS:Object.freeze(r),ICON_BUTTON_COLORS:Object.freeze(N)}},template:`<div :class="{ contrastBackground: isInverted }">
    <icon-button
        :icon="ICONS[icon]"
        :size="size"
        :type="type"
        :radius="radius"
        :color-scheme="colorScheme"
        :touchable-deprecated="touchableDeprecated"
        :elevation="elevation"
        :color="color"
        :state="state"
    >
        <template v-if="label !== ''" #default>
            <span>{{label}}</span>
        </template>
    </icon-button>
    </div>`}),t=P.bind({}),h={size:I.LARGE,type:T.ICON_ONLY,radius:l.CAPSULE,label:"Zamknij",colorScheme:D.ALL_IN_COLOR,touchableDeprecated:!1,elevation:v.NONE,color:"primary",state:g.DEFAULT,icon:"FA_XMARK"},M={size:{control:"select",options:Object.values(I)},type:{control:"select",options:Object.values(T)},radius:{control:"select",options:Object.values(l)},icon:{control:"select",options:Object.keys(r)},color:{control:"select",options:Object.values(N)},colorScheme:{control:"select",options:Object.values(D)},elevation:{control:"select",options:Object.values(v)},state:{control:"select",options:Object.values(g)}};t.argTypes=M;t.args=h;t.parameters={actions:{handles:["click"]},design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=180%3A2709"}};const i={size:{disable:!0},type:{disable:!0},radius:{disable:!0},icon:{disable:!0},color:{disable:!0},colorScheme:{disable:!0},elevation:{disable:!0},state:{disable:!0},touchableDeprecated:{disable:!0},default:{disable:!0}},Y=e=>({components:{IconButton:o},setup(){return e},template:'<icon-button :icon="ICONS.FA_XMARK" :type="ICON_BUTTON_TYPES.FILLED" >Zamknij</icon-button>',data(){return{ICONS:Object.freeze(r),ICON_BUTTON_TYPES:Object.freeze(T)}}}),a=Y.bind({});a.argTypes=i;const Z=e=>({components:{IconButton:o},setup(){return e},template:'<icon-button :icon="ICONS.FA_CHEVRON_RIGHT" :type="ICON_BUTTON_TYPES.OUTLINED" :radius="BUTTON_RADIUSES.ROUNDED" />',data(){return{ICONS:Object.freeze(r),ICON_BUTTON_TYPES:Object.freeze(T),BUTTON_RADIUSES:Object.freeze(l)}}}),c=Z.bind({});c.argTypes=i;const W=e=>({components:{IconButton:o},setup(){return e},template:'<icon-button :icon="ICONS.FA_XMARK" :type="ICON_BUTTON_TYPES.FILLED" :color="ICON_BUTTON_COLORS.PRIMARY" :size="ICON_BUTTON_SIZES.X_SMALL" />',data(){return{ICONS:Object.freeze(r),ICON_BUTTON_TYPES:Object.freeze(T),ICON_BUTTON_COLORS:Object.freeze(N),ICON_BUTTON_SIZES:Object.freeze(I)}}}),n=W.bind({});n.argTypes=i;const H=e=>({components:{IconButton:o},setup(){return e},template:'<icon-button :icon="ICONS.FA_FLAG" :color="ICON_BUTTON_COLORS.INFO" :size="ICON_BUTTON_SIZES.MEDIUM" />',data(){return{ICONS:Object.freeze(r),ICON_BUTTON_COLORS:Object.freeze(N),ICON_BUTTON_SIZES:Object.freeze(I)}}}),s=H.bind({});s.argTypes=i;const k=e=>({components:{IconButton:o},setup(){return e},template:'<icon-button :icon="ICONS.HEAD_WITH_QUESTION_MARK" :color="ICON_BUTTON_COLORS.WARNING" :size="ICON_BUTTON_SIZES.MEDIUM" />',data(){return{ICONS:Object.freeze(r),ICON_BUTTON_COLORS:Object.freeze(N),ICON_BUTTON_SIZES:Object.freeze(I)}}}),O=k.bind({});O.argTypes=i;O.args={};var S,_,u;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`args => ({
  components: {
    IconButton
  },
  setup() {
    return args;
  },
  computed: {
    isInverted() {
      return this.color === 'inverted';
    }
  },
  data() {
    return {
      ICONS: Object.freeze(ICONS),
      ICON_BUTTON_COLORS: Object.freeze(ICON_BUTTON_COLORS)
    };
  },
  template: \`<div :class="{ contrastBackground: isInverted }">
    <icon-button
        :icon="ICONS[icon]"
        :size="size"
        :type="type"
        :radius="radius"
        :color-scheme="colorScheme"
        :touchable-deprecated="touchableDeprecated"
        :elevation="elevation"
        :color="color"
        :state="state"
    >
        <template v-if="label !== ''" #default>
            <span>{{label}}</span>
        </template>
    </icon-button>
    </div>\`
})`,...(u=(_=t.parameters)==null?void 0:_.docs)==null?void 0:u.source}}};var p,C,d;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`args => ({
  components: {
    IconButton
  },
  setup() {
    return args;
  },
  template: '<icon-button :icon="ICONS.FA_XMARK" :type="ICON_BUTTON_TYPES.FILLED" >Zamknij</icon-button>',
  data() {
    return {
      ICONS: Object.freeze(ICONS),
      ICON_BUTTON_TYPES: Object.freeze(ICON_BUTTON_TYPES)
    };
  }
})`,...(d=(C=a.parameters)==null?void 0:C.docs)==null?void 0:d.source}}};var m,b,U;c.parameters={...c.parameters,docs:{...(m=c.parameters)==null?void 0:m.docs,source:{originalSource:`args => ({
  components: {
    IconButton
  },
  setup() {
    return args;
  },
  template: '<icon-button :icon="ICONS.FA_CHEVRON_RIGHT" :type="ICON_BUTTON_TYPES.OUTLINED" :radius="BUTTON_RADIUSES.ROUNDED" />',
  data() {
    return {
      ICONS: Object.freeze(ICONS),
      ICON_BUTTON_TYPES: Object.freeze(ICON_BUTTON_TYPES),
      BUTTON_RADIUSES: Object.freeze(BUTTON_RADIUSES)
    };
  }
})`,...(U=(b=c.parameters)==null?void 0:b.docs)==null?void 0:U.source}}};var B,E,f;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`args => ({
  components: {
    IconButton
  },
  setup() {
    return args;
  },
  template: '<icon-button :icon="ICONS.FA_XMARK" :type="ICON_BUTTON_TYPES.FILLED" :color="ICON_BUTTON_COLORS.PRIMARY" :size="ICON_BUTTON_SIZES.X_SMALL" />',
  data() {
    return {
      ICONS: Object.freeze(ICONS),
      ICON_BUTTON_TYPES: Object.freeze(ICON_BUTTON_TYPES),
      ICON_BUTTON_COLORS: Object.freeze(ICON_BUTTON_COLORS),
      ICON_BUTTON_SIZES: Object.freeze(ICON_BUTTON_SIZES)
    };
  }
})`,...(f=(E=n.parameters)==null?void 0:E.docs)==null?void 0:f.source}}};var R,z,L;s.parameters={...s.parameters,docs:{...(R=s.parameters)==null?void 0:R.docs,source:{originalSource:`args => ({
  components: {
    IconButton
  },
  setup() {
    return args;
  },
  template: '<icon-button :icon="ICONS.FA_FLAG" :color="ICON_BUTTON_COLORS.INFO" :size="ICON_BUTTON_SIZES.MEDIUM" />',
  data() {
    return {
      ICONS: Object.freeze(ICONS),
      ICON_BUTTON_COLORS: Object.freeze(ICON_BUTTON_COLORS),
      ICON_BUTTON_SIZES: Object.freeze(ICON_BUTTON_SIZES)
    };
  }
})`,...(L=(z=s.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};var j,y,A;O.parameters={...O.parameters,docs:{...(j=O.parameters)==null?void 0:j.docs,source:{originalSource:`args => ({
  components: {
    IconButton
  },
  setup() {
    return args;
  },
  template: '<icon-button :icon="ICONS.HEAD_WITH_QUESTION_MARK" :color="ICON_BUTTON_COLORS.WARNING" :size="ICON_BUTTON_SIZES.MEDIUM" />',
  data() {
    return {
      ICONS: Object.freeze(ICONS),
      ICON_BUTTON_COLORS: Object.freeze(ICON_BUTTON_COLORS),
      ICON_BUTTON_SIZES: Object.freeze(ICON_BUTTON_SIZES)
    };
  }
})`,...(A=(y=O.parameters)==null?void 0:y.docs)==null?void 0:A.source}}};const $=["Interactive","FilledWithLabel","OutlinedRounded","FilledPrimary","IconOnlyInfo","IconOnlyWarning"];export{n as FilledPrimary,a as FilledWithLabel,s as IconOnlyInfo,O as IconOnlyWarning,t as Interactive,c as OutlinedRounded,$ as __namedExportsOrder,q as default};
