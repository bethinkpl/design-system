import{I as o}from"./IconButton-o4H-Dbj2.js";import{I as N,f as T,c as S,g as _,e as l,h as u,i as I}from"./Button-Cbw2_9er.js";import{I as r}from"./Icon-CVHceNst.js";import"./vue.esm-bundler-Bq1ZKmuF.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const y={title:"Components/Buttons/IconButton",component:o},p=e=>({components:{IconButton:o},setup(){return e},computed:{isInverted(){return this.color==="inverted"}},data(){return{ICONS:Object.freeze(r),ICON_BUTTON_COLORS:Object.freeze(I)}},template:`<div :class="{ contrastBackground: isInverted }">
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
    </div>`}),t=p.bind({}),C={size:N.LARGE,type:T.ICON_ONLY,radius:S.CAPSULE,label:"Zamknij",colorScheme:_.ALL_IN_COLOR,touchable:!0,elevation:l.NONE,color:"primary",state:u.DEFAULT},d={size:{control:"select",options:Object.values(N)},type:{control:"select",options:Object.values(T)},radius:{control:"select",options:Object.values(S)},icon:{control:"select",options:Object.keys(r)},color:{control:"select",options:Object.values(I)},colorScheme:{control:"select",options:Object.values(_)},elevation:{control:"select",options:Object.values(l)},state:{control:"select",options:Object.values(u)}};t.argTypes=d;t.args=C;t.parameters={actions:{handles:["click"]},design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=180%3A2709"}};const i={size:{disable:!0},type:{disable:!0},radius:{disable:!0},icon:{disable:!0},color:{disable:!0},colorScheme:{disable:!0},elevation:{disable:!0},state:{disable:!0},touchable:{disable:!0},default:{disable:!0}},b=e=>({components:{IconButton:o},setup(){return e},template:'<icon-button :icon="ICONS.FA_XMARK" :type="ICON_BUTTON_TYPES.FILLED" >Zamknij</icon-button>',data(){return{ICONS:Object.freeze(r),ICON_BUTTON_TYPES:Object.freeze(T)}}}),n=b.bind({});n.argTypes=i;const m=e=>({components:{IconButton:o},setup(){return e},template:'<icon-button :icon="ICONS.FA_CHEVRON_RIGHT" :type="ICON_BUTTON_TYPES.OUTLINED" :radius="BUTTON_RADIUSES.ROUNDED" />',data(){return{ICONS:Object.freeze(r),ICON_BUTTON_TYPES:Object.freeze(T),BUTTON_RADIUSES:Object.freeze(S)}}}),c=m.bind({});c.argTypes=i;const U=e=>({components:{IconButton:o},setup(){return e},template:'<icon-button :icon="ICONS.FA_XMARK" :type="ICON_BUTTON_TYPES.FILLED" :color="ICON_BUTTON_COLORS.PRIMARY" :size="ICON_BUTTON_SIZES.X_SMALL" />',data(){return{ICONS:Object.freeze(r),ICON_BUTTON_TYPES:Object.freeze(T),ICON_BUTTON_COLORS:Object.freeze(I),ICON_BUTTON_SIZES:Object.freeze(N)}}}),s=U.bind({});s.argTypes=i;const B=e=>({components:{IconButton:o},setup(){return e},template:'<icon-button :icon="ICONS.FA_FLAG" :color="ICON_BUTTON_COLORS.INFO" :size="ICON_BUTTON_SIZES.MEDIUM" />',data(){return{ICONS:Object.freeze(r),ICON_BUTTON_COLORS:Object.freeze(I),ICON_BUTTON_SIZES:Object.freeze(N)}}}),a=B.bind({});a.argTypes=i;const E=e=>({components:{IconButton:o},setup(){return e},template:'<icon-button :icon="ICONS.HEAD_WITH_QUESTION_MARK" :color="ICON_BUTTON_COLORS.WARNING" :size="ICON_BUTTON_SIZES.MEDIUM" />',data(){return{ICONS:Object.freeze(r),ICON_BUTTON_COLORS:Object.freeze(I),ICON_BUTTON_SIZES:Object.freeze(N)}}}),O=E.bind({});O.argTypes=i;O.args={};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => ({
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
})`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`args => ({
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
})`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`args => ({
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
})`,...c.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => ({
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
})`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => ({
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
})`,...a.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`args => ({
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
})`,...O.parameters?.docs?.source}}};const g=["Interactive","FilledWithLabel","OutlinedRounded","FilledPrimary","IconOnlyInfo","IconOnlyWarning"];export{s as FilledPrimary,n as FilledWithLabel,a as IconOnlyInfo,O as IconOnlyWarning,t as Interactive,c as OutlinedRounded,g as __namedExportsOrder,y as default};
