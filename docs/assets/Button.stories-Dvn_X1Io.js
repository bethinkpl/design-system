import{_ as r,B as a,a as i,b as c,c as l,d as p,e as u}from"./Button-Cxy1oLg0.js";import{I as e}from"./Icon-Sov23HR0.js";import{w as O}from"./decorator-B_8W69Nd.js";import"./vue.esm-bundler-DcRN7CPI.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./v4-CwV2VaSl.js";const E={title:"Components/Buttons/Button",component:r,decorators:[O]},m=d=>({components:{Button:r},setup(){return d},template:`
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
                    :as="as"
            >
                {{ slotText }}
            </Button>
            </div>`,computed:{isInverted(){return this.color==="inverted"}},data(){return{ICONS:Object.freeze(e)}}}),t=m.bind({}),v={slotText:"Hello",size:u.MEDIUM,type:p.FILLED,color:l.PRIMARY,radius:c.CAPSULE,state:i.DEFAULT,elevation:a.NONE,iconLeft:"FA_CHEVRON_LEFT",iconRight:null,as:"span"},I={size:{control:"select",options:Object.values(u)},type:{control:"select",options:Object.values(p)},color:{control:"select",options:Object.values(l)},radius:{control:"select",options:Object.values(c)},state:{control:"select",options:Object.values(i)},elevation:{control:"select",options:Object.values(a)},iconLeft:{control:"select",options:[null,...Object.keys(e)]},iconRight:{control:"select",options:[null,...Object.keys(e)]},as:{control:"select",options:["button","a","span"]}};t.argTypes=I;t.args=v;t.parameters={actions:{handles:["click"]},design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=138%3A2373"}};var o,n,s;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`args => ({
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
                    :as="as"
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
})`,...(s=(n=t.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const _=["Interactive"];export{t as Interactive,_ as __namedExportsOrder,E as default};
