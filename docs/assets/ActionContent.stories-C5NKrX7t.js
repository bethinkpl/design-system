import{A as s}from"./ActionContent-BgZojLpy.js";import{_ as u,B as O,a as S,b}from"./Button-Dl-HN0v2.js";import{I as e}from"./Icon-CyG6-QCe.js";import{t as m}from"./vue.esm-bundler-CjwGEpld.js";import"./FeatureIcon-CtCoA9t3.js";import"./TextGroup-CkuLb7U7.js";import"./_commonjsHelpers-D6Ya60D-.js";import"./index-BXf4aNP_.js";import"./Skeleton-DPTE0q_E.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Tooltip-B5HEf_NZ.js";import"./device-mzBmLsxe.js";const y={title:"Components/ActionContent",component:s},N=i=>({components:{ActionContent:s},setup(){return{...m(i),ICONS:e}},template:`
                <action-content
                        :icon="ICONS[icon]"
                        :main-text="mainText"
                        :supporting-text="supportingText"
                        :button-label="buttonLabel"
                        :button-icon="ICONS[buttonIcon]"
                        :is-action-vertical="isActionVertical"
                >
                <template v-if="actions" #actions><span v-html="actions" /></template>
                </action-content>`}),t=N.bind({}),x={icon:"FA_COMMENT_DOTS",mainText:"Main text tutaj sobie będzie",supportingText:"Supporting text tutaj będzie",buttonLabel:"Button label",buttonIcon:null,isActionVertical:!1,actions:""},o={icon:{control:"select",options:[null,...Object.keys(e)]},mainText:{control:"text"},supportingText:{control:"text"},buttonLabel:{control:"text"},buttonIcon:{control:"select",options:[null,...Object.keys(e)]},isActionVertical:{control:"boolean"},actions:{control:"text"}};t.argTypes=o;t.args=x;t.parameters={design:{type:"figma",url:"https://www.figma.com/design/uLBrJvVwTYzuch6VnDOBlL/INI-188---Dyskusje-2.0-NEW?node-id=4001-152961&m=dev"}};const g=i=>({components:{ActionContent:s,DsButton:u},setup(){return{...m(i),ICONS:e,BUTTON_COLORS:b,BUTTON_SIZES:S,BUTTON_TYPES:O}},template:`
                <action-content
                        :icon="ICONS[icon]"
                        :main-text="mainText"
                        :supporting-text="supportingText"
                        :is-action-vertical="isActionVertical"
                >
                <template #actions>
                    <ds-button
                            :color="BUTTON_COLORS.NEUTRAL"
                            :type="BUTTON_TYPES.OUTLINED"
                            :size="BUTTON_SIZES.SMALL"
                    >Cancel</ds-button>
                    <ds-button
                            :color="BUTTON_COLORS.PRIMARY"
                            :type="BUTTON_TYPES.FILLED"
                            :size="BUTTON_SIZES.SMALL"
                    >Confirm</ds-button>
                </template>
                </action-content>`}),n=g.bind({});n.argTypes={icon:o.icon,mainText:o.mainText,supportingText:o.supportingText,isActionVertical:o.isActionVertical};n.args={icon:"FA_COMMENT_DOTS",mainText:"Main text tutaj sobie będzie",supportingText:"Supporting text tutaj będzie",isActionVertical:!1};n.parameters={design:{type:"figma",url:"https://www.figma.com/design/uLBrJvVwTYzuch6VnDOBlL/INI-188---Dyskusje-2.0-NEW?node-id=4001-152961&m=dev"}};var a,c,r;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
  return {
    components: {
      ActionContent
    },
    setup() {
      return {
        ...toRefs(args),
        ICONS
      };
    },
    template: \`
                <action-content
                        :icon="ICONS[icon]"
                        :main-text="mainText"
                        :supporting-text="supportingText"
                        :button-label="buttonLabel"
                        :button-icon="ICONS[buttonIcon]"
                        :is-action-vertical="isActionVertical"
                >
                <template v-if="actions" #actions><span v-html="actions" /></template>
                </action-content>\`
  };
}`,...(r=(c=t.parameters)==null?void 0:c.docs)==null?void 0:r.source}}};var p,T,l;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
  return {
    components: {
      ActionContent,
      DsButton
    },
    setup() {
      return {
        ...toRefs(args),
        ICONS,
        BUTTON_COLORS,
        BUTTON_SIZES,
        BUTTON_TYPES
      };
    },
    template: \`
                <action-content
                        :icon="ICONS[icon]"
                        :main-text="mainText"
                        :supporting-text="supportingText"
                        :is-action-vertical="isActionVertical"
                >
                <template #actions>
                    <ds-button
                            :color="BUTTON_COLORS.NEUTRAL"
                            :type="BUTTON_TYPES.OUTLINED"
                            :size="BUTTON_SIZES.SMALL"
                    >Cancel</ds-button>
                    <ds-button
                            :color="BUTTON_COLORS.PRIMARY"
                            :type="BUTTON_TYPES.FILLED"
                            :size="BUTTON_SIZES.SMALL"
                    >Confirm</ds-button>
                </template>
                </action-content>\`
  };
}`,...(l=(T=n.parameters)==null?void 0:T.docs)==null?void 0:l.source}}};const V=["Interactive","WithActionsSlot"];export{t as Interactive,n as WithActionsSlot,V as __namedExportsOrder,y as default};
