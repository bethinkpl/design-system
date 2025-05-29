import{I as o}from"./IconButton-CZPMfbyF.js";import{I as N,f as T,c as S,g,e as v,h as D,i as I}from"./Button-D3r6zRpz.js";import{I as r}from"./Icon-mlOEH8dY.js";import{w as F}from"./decorator-CSnIf-k5.js";import"./vue.esm-bundler-C__e7YM5.js";import"./device-9fgosCm4.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./v4-BZawosSj.js";const q={title:"Components/Buttons/IconButton",component:o,decorators:[F]},h=e=>({components:{IconButton:o},setup(){return e},computed:{isInverted(){return this.color==="inverted"}},data(){return{ICONS:Object.freeze(r),ICON_BUTTON_COLORS:Object.freeze(I)}},template:`<div :class="{ contrastBackground: isInverted }">
    <icon-button
        :icon="ICONS[icon]"
        :size="size"
        :type="type"
        :radius="radius"
        :color-scheme="colorScheme"
        :touchable="touchable"
        :elevation="elevation"
        :color="color"
        :state="state"
    ><span v-if="label !== ''">{{label}}</span></icon-button>
    </div>`}),t=h.bind({}),P={size:N.LARGE,type:T.ICON_ONLY,radius:S.CAPSULE,label:"Zamknij",colorScheme:g.ALL_IN_COLOR,touchable:!0,elevation:v.NONE,color:"primary",state:D.DEFAULT,icon:"FA_XMARK"},M={size:{control:"select",options:Object.values(N)},type:{control:"select",options:Object.values(T)},radius:{control:"select",options:Object.values(S)},icon:{control:"select",options:Object.keys(r)},color:{control:"select",options:Object.values(I)},colorScheme:{control:"select",options:Object.values(g)},elevation:{control:"select",options:Object.values(v)},state:{control:"select",options:Object.values(D)}};t.argTypes=M;t.args=P;t.parameters={actions:{handles:["click"]},design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=180%3A2709"}};const i={size:{disable:!0},type:{disable:!0},radius:{disable:!0},icon:{disable:!0},color:{disable:!0},colorScheme:{disable:!0},elevation:{disable:!0},state:{disable:!0},touchable:{disable:!0},default:{disable:!0}},Y=e=>({components:{IconButton:o},setup(){return e},template:'<icon-button :icon="ICONS.FA_XMARK" :type="ICON_BUTTON_TYPES.FILLED" >Zamknij</icon-button>',data(){return{ICONS:Object.freeze(r),ICON_BUTTON_TYPES:Object.freeze(T)}}}),n=Y.bind({});n.argTypes=i;const Z=e=>({components:{IconButton:o},setup(){return e},template:'<icon-button :icon="ICONS.FA_CHEVRON_RIGHT" :type="ICON_BUTTON_TYPES.OUTLINED" :radius="BUTTON_RADIUSES.ROUNDED" />',data(){return{ICONS:Object.freeze(r),ICON_BUTTON_TYPES:Object.freeze(T),BUTTON_RADIUSES:Object.freeze(S)}}}),c=Z.bind({});c.argTypes=i;const W=e=>({components:{IconButton:o},setup(){return e},template:'<icon-button :icon="ICONS.FA_XMARK" :type="ICON_BUTTON_TYPES.FILLED" :color="ICON_BUTTON_COLORS.PRIMARY" :size="ICON_BUTTON_SIZES.X_SMALL" />',data(){return{ICONS:Object.freeze(r),ICON_BUTTON_TYPES:Object.freeze(T),ICON_BUTTON_COLORS:Object.freeze(I),ICON_BUTTON_SIZES:Object.freeze(N)}}}),s=W.bind({});s.argTypes=i;const H=e=>({components:{IconButton:o},setup(){return e},template:'<icon-button :icon="ICONS.FA_FLAG" :color="ICON_BUTTON_COLORS.INFO" :size="ICON_BUTTON_SIZES.MEDIUM" />',data(){return{ICONS:Object.freeze(r),ICON_BUTTON_COLORS:Object.freeze(I),ICON_BUTTON_SIZES:Object.freeze(N)}}}),a=H.bind({});a.argTypes=i;const k=e=>({components:{IconButton:o},setup(){return e},template:'<icon-button :icon="ICONS.HEAD_WITH_QUESTION_MARK" :color="ICON_BUTTON_COLORS.WARNING" :size="ICON_BUTTON_SIZES.MEDIUM" />',data(){return{ICONS:Object.freeze(r),ICON_BUTTON_COLORS:Object.freeze(I),ICON_BUTTON_SIZES:Object.freeze(N)}}}),O=k.bind({});O.argTypes=i;O.args={};var _,l,u;t.parameters={...t.parameters,docs:{...(_=t.parameters)==null?void 0:_.docs,source:{originalSource:`args => ({
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
        :touchable="touchable"
        :elevation="elevation"
        :color="color"
        :state="state"
    ><span v-if="label !== ''">{{label}}</span></icon-button>
    </div>\`
})`,...(u=(l=t.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var p,C,d;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`args => ({
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
})`,...(d=(C=n.parameters)==null?void 0:C.docs)==null?void 0:d.source}}};var m,b,U;c.parameters={...c.parameters,docs:{...(m=c.parameters)==null?void 0:m.docs,source:{originalSource:`args => ({
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
})`,...(U=(b=c.parameters)==null?void 0:b.docs)==null?void 0:U.source}}};var B,E,R;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`args => ({
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
})`,...(R=(E=s.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var f,z,L;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`args => ({
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
})`,...(L=(z=a.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};var j,y,A;O.parameters={...O.parameters,docs:{...(j=O.parameters)==null?void 0:j.docs,source:{originalSource:`args => ({
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
})`,...(A=(y=O.parameters)==null?void 0:y.docs)==null?void 0:A.source}}};const $=["Interactive","FilledWithLabel","OutlinedRounded","FilledPrimary","IconOnlyInfo","IconOnlyWarning"];export{s as FilledPrimary,n as FilledWithLabel,a as IconOnlyInfo,O as IconOnlyWarning,t as Interactive,c as OutlinedRounded,$ as __namedExportsOrder,q as default};
