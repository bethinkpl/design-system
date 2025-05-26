import{D as r,B as i,a as c,b as a,c as l,d as p,e as u}from"./Button-DHfR56t4.js";import{I as e}from"./Icon-D0llnARZ.js";import{w as O}from"./decorator-CSnIf-k5.js";import"./vue.esm-bundler-DmkhfO_9.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./v4-BZawosSj.js";const E={title:"Components/Buttons/Button",component:r,decorators:[O]},m=d=>({components:{Button:r},setup(){return d},template:`
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
            </div>`,computed:{isInverted(){return this.color==="inverted"}},data(){return{ICONS:Object.freeze(e)}}}),t=m.bind({}),v={slotText:"Hello",size:i.MEDIUM,type:c.FILLED,color:a.PRIMARY,radius:l.CAPSULE,state:p.DEFAULT,elevation:u.NONE,iconLeft:"FA_CHEVRON_LEFT",iconRight:null},I={size:{control:"select",options:Object.values(i)},type:{control:"select",options:Object.values(c)},color:{control:"select",options:Object.values(a)},radius:{control:"select",options:Object.values(l)},state:{control:"select",options:Object.values(p)},elevation:{control:"select",options:Object.values(u)},iconLeft:{control:"select",options:[null,...Object.keys(e)]},iconRight:{control:"select",options:[null,...Object.keys(e)]}};t.argTypes=I;t.args=v;t.parameters={actions:{handles:["click"]},design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=138%3A2373"}};var o,n,s;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`args => ({
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
})`,...(s=(n=t.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const y=["Interactive"];export{t as Interactive,y as __namedExportsOrder,E as default};
