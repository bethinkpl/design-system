import{D as o,B as n,a as s,b as r,c,d as i,e as a}from"./Button-Cbw2_9er.js";import{I as e}from"./Icon-CVHceNst.js";import"./vue.esm-bundler-Bq1ZKmuF.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const T={title:"Components/Buttons/Button",component:o},u=l=>({components:{Button:o},setup(){return l},template:`
            <div :class="{ contrastBackground: isInverted }">
            <Button
                    :size="size"
                    :type="type"
                    :state="state"
                    :radius="radius"
                    :color="color"
                    :elevation="elevation"
                    :icon-left="ICONS[iconLeft]"
                    :icon-right="ICONS[iconRight]"
            >
                {{ slotText }}
            </Button>
            </div>`,computed:{isInverted(){return this.color==="inverted"}},data(){return{ICONS:Object.freeze(e)}}}),t=u.bind({}),p={slotText:"Hello",size:n.MEDIUM,type:s.FILLED,color:r.PRIMARY,radius:c.CAPSULE,state:i.DEFAULT,elevation:a.NONE,iconLeft:"FA_CHEVRON_LEFT",iconRight:null},d={size:{control:"select",options:Object.values(n)},type:{control:"select",options:Object.values(s)},color:{control:"select",options:Object.values(r)},radius:{control:"select",options:Object.values(c)},state:{control:"select",options:Object.values(i)},elevation:{control:"select",options:Object.values(a)},iconLeft:{control:"select",options:[null,...Object.keys(e)]},iconRight:{control:"select",options:[null,...Object.keys(e)]}};t.argTypes=d;t.args=p;t.parameters={actions:{handles:["click"]},design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=138%3A2373"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => ({
  components: {
    Button
  },
  setup() {
    return args;
  },
  template: \`
            <div :class="{ contrastBackground: isInverted }">
            <Button
                    :size="size"
                    :type="type"
                    :state="state"
                    :radius="radius"
                    :color="color"
                    :elevation="elevation"
                    :icon-left="ICONS[iconLeft]"
                    :icon-right="ICONS[iconRight]"
            >
                {{ slotText }}
            </Button>
            </div>\`,
  computed: {
    isInverted() {
      return this.color === 'inverted';
    }
  },
  data() {
    return {
      ICONS: Object.freeze(ICONS)
    };
  }
})`,...t.parameters?.docs?.source}}};const S=["Interactive"];export{t as Interactive,S as __namedExportsOrder,T as default};
