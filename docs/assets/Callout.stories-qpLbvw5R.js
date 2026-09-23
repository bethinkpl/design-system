import{_ as Y,b as d}from"./chunk-4XZ63LWV-laKUlqim.js";import{C as O,a as b,b as L,c,d as m}from"./Callout-BLFNFeZ_.js";import{a as f,_ as h,d as w,e as D,c as P}from"./Button-DakEY1TS.js";import{I as l}from"./Icon-D5w-paEm.js";import"./v4-CwV2VaSl.js";import"./vue.esm-bundler-BjwGMXGm.js";import"./FeatureIcon-DTJheQNs.js";import"./TextGroup-on93TfAp.js";import"./_commonjsHelpers-D6Ya60D-.js";import"./index-3uRCwzDq.js";import"./Skeleton-YSjeLuoR.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Tooltip-C3_MzQ5E.js";import"./device-mzBmLsxe.js";const{definePreview:ut}=__STORYBOOK_MODULE_PREVIEW_API__,{global:x}=__STORYBOOK_MODULE_GLOBAL__;var k={};Y(k,{argsEnhancers:()=>V,loaders:()=>G});var v=(t,o)=>typeof o[t]>"u"&&!(t in o),F=t=>{let{initialArgs:o,argTypes:a,id:s,parameters:{actions:i}}=t;if(!i||i.disable||!i.argTypesRegex||!a)return{};let e=new RegExp(i.argTypesRegex);return Object.entries(a).filter(([n])=>!!e.test(n)).reduce((n,[_,Q])=>(v(_,o)&&(n[_]=d(_,{implicit:!0,id:s})),n),{})},Z=t=>{let{initialArgs:o,argTypes:a,parameters:{actions:s}}=t;return s!=null&&s.disable||!a?{}:Object.entries(a).filter(([i,e])=>!!e.action).reduce((i,[e,n])=>(v(e,o)&&(i[e]=d(typeof n.action=="string"?n.action:e)),i),{})},V=[Z,F],S=!1,K=t=>{let{parameters:{actions:o}}=t;if(!(o!=null&&o.disable)&&!S&&"__STORYBOOK_TEST_ON_MOCK_CALL__"in x&&typeof x.__STORYBOOK_TEST_ON_MOCK_CALL__=="function"){let a=x.__STORYBOOK_TEST_ON_MOCK_CALL__;a((s,i)=>{let e=s.getMockName();e!=="spy"&&(!/^next\/.*::/.test(e)||["next/router::useRouter()","next/navigation::useRouter()","next/navigation::redirect","next/cache::","next/headers::cookies().set","next/headers::cookies().delete","next/headers::headers().set","next/headers::headers().delete"].some(n=>e.startsWith(n)))&&d(e)(i)}),S=!0}},G=[K];const B="https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=17359-1009&m=dev",W="https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=17760-416&m=dev",T=t=>t||null,j=t=>({...t,icon:l[t.icon],buttonIcon:l[t.buttonIcon],eyebrowText:T(t.eyebrowText),mainText:T(t.mainText),supportingText:T(t.supportingText),buttonLabel:T(t.buttonLabel)}),pt={title:"Components/Callout",component:O,render:t=>({components:{Callout:O},setup(){return{onButtonClicked:d("button-clicked")}},computed:{props(){return j(t)}},template:'<div style="max-width: 500px;"><Callout v-bind="props" @button-clicked="onButtonClicked" /></div>'}),argTypes:{layout:{control:"select",options:Object.values(m)},size:{control:"select",options:Object.values(c)},iconColor:{control:"select",options:Object.values(L)},mainTextColor:{control:"select",options:Object.values(b)},icon:{control:"select",options:[null,...Object.keys(l)]},buttonIcon:{control:"select",options:[null,...Object.keys(l)]},buttonState:{control:"select",options:Object.values(f)},eyebrowText:{control:"text"},mainText:{control:"text"},supportingText:{control:"text"},buttonLabel:{control:"text"},isActionVertical:{control:"boolean"}}},u={args:{layout:m.VERTICAL,size:c.MEDIUM,iconColor:L.PRIMARY,mainTextColor:b.PRIMARY,icon:"FA_COMMENT_DOTS",eyebrowText:"",mainText:"Main text tutaj sobie będzie",supportingText:"Supporting text tutaj będzie",buttonLabel:"Button label",buttonIcon:null,isActionVertical:!1,buttonState:f.DEFAULT}};u.parameters={design:{type:"figma",url:B}};const p={render:t=>({components:{Callout:O,DsButton:h},setup(){return{args:t,ICONS:l,BUTTON_COLORS:P,BUTTON_SIZES:D,BUTTON_TYPES:w}},computed:{props(){return j(t)}},template:`
            <div style="max-width: 500px;">
                <Callout v-bind="props">
                    <template #actions>
                        <ds-button :color="BUTTON_COLORS.NEUTRAL" :type="BUTTON_TYPES.OUTLINED" :size="BUTTON_SIZES.SMALL">Cancel</ds-button>
                        <ds-button :color="BUTTON_COLORS.PRIMARY" :type="BUTTON_TYPES.FILLED" :size="BUTTON_SIZES.SMALL">Confirm</ds-button>
                    </template>
                </Callout>
            </div>`}),args:{layout:m.VERTICAL,size:c.MEDIUM,iconColor:L.PRIMARY,mainTextColor:b.PRIMARY,icon:"FA_COMMENT_DOTS",mainText:"Main text tutaj sobie będzie",supportingText:"Supporting text tutaj będzie",isActionVertical:!1}};p.parameters={design:{type:"figma",url:B}};const r={render:()=>({components:{Callout:O},setup(){return{ICONS:l,CALLOUT_LAYOUTS:m,CALLOUT_SIZES:c,sizes:Object.values(c)}},template:`
            <div style="display: flex; flex-direction: column; gap: 48px;">
                <section v-for="layout in [CALLOUT_LAYOUTS.VERTICAL, CALLOUT_LAYOUTS.HORIZONTAL]" :key="layout">
                    <h3 style="margin-bottom: 16px;">{{ layout }}</h3>
                    <div style="display: flex; flex-direction: column; gap: 32px; max-width: 500px;">
                        <Callout
                            v-for="size in sizes"
                            :key="size"
                            :layout="layout"
                            :size="size"
                            :icon="ICONS.FA_COMMENT_DOTS"
                            :eyebrow-text="size === CALLOUT_SIZES.SMALL ? 'Eyebrow text' : null"
                            :main-text="'Main text tutaj sobie będzie (' + size + ')'"
                            supporting-text="Supporting text tutaj będzie"
                            button-label="Button small"
                        />
                        <Callout
                            :layout="layout"
                            :icon="ICONS.FA_COMMENT_DOTS"
                            main-text="Main text tutaj sobie będzie (stacked actions)"
                            supporting-text="Supporting text tutaj będzie"
                            button-label="Button small"
                            is-action-vertical
                        />
                        <Callout
                            :layout="layout"
                            :icon="ICONS.FA_COMMENT_DOTS"
                            main-text="Main text tutaj sobie będzie (no actions)"
                            supporting-text="Supporting text tutaj będzie"
                        />
                        <Callout
                            :layout="layout"
                            main-text="Main text tutaj sobie będzie (no icon)"
                            supporting-text="Supporting text tutaj będzie"
                            button-label="Button small"
                        />
                    </div>
                </section>
            </div>`})};r.parameters={design:{type:"figma",url:W}};var C,A,y;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    layout: CALLOUT_LAYOUTS.VERTICAL,
    size: CALLOUT_SIZES.MEDIUM,
    iconColor: CALLOUT_ICON_COLORS.PRIMARY,
    mainTextColor: CALLOUT_MAIN_TEXT_COLORS.PRIMARY,
    icon: 'FA_COMMENT_DOTS' as unknown as CalloutProps['icon'],
    eyebrowText: '',
    mainText: 'Main text tutaj sobie będzie',
    supportingText: 'Supporting text tutaj będzie',
    buttonLabel: 'Button label',
    buttonIcon: null,
    isActionVertical: false,
    buttonState: BUTTON_STATES.DEFAULT
  }
}`,...(y=(A=u.parameters)==null?void 0:A.docs)==null?void 0:y.source}}};var I,g,M;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: (args: CalloutProps) => ({
    components: {
      Callout,
      DsButton
    },
    setup() {
      return {
        args,
        ICONS,
        BUTTON_COLORS,
        BUTTON_SIZES,
        BUTTON_TYPES
      };
    },
    computed: {
      props() {
        return mapArgs(args);
      }
    },
    template: \`
            <div style="max-width: 500px;">
                <Callout v-bind="props">
                    <template #actions>
                        <ds-button :color="BUTTON_COLORS.NEUTRAL" :type="BUTTON_TYPES.OUTLINED" :size="BUTTON_SIZES.SMALL">Cancel</ds-button>
                        <ds-button :color="BUTTON_COLORS.PRIMARY" :type="BUTTON_TYPES.FILLED" :size="BUTTON_SIZES.SMALL">Confirm</ds-button>
                    </template>
                </Callout>
            </div>\`
  }),
  args: {
    layout: CALLOUT_LAYOUTS.VERTICAL,
    size: CALLOUT_SIZES.MEDIUM,
    iconColor: CALLOUT_ICON_COLORS.PRIMARY,
    mainTextColor: CALLOUT_MAIN_TEXT_COLORS.PRIMARY,
    icon: 'FA_COMMENT_DOTS' as unknown as CalloutProps['icon'],
    mainText: 'Main text tutaj sobie będzie',
    supportingText: 'Supporting text tutaj będzie',
    isActionVertical: false
  }
}`,...(M=(g=p.parameters)==null?void 0:g.docs)==null?void 0:M.source}}};var E,U,R,N,z;r.parameters={...r.parameters,docs:{...(E=r.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Callout
    },
    setup() {
      return {
        ICONS,
        CALLOUT_LAYOUTS,
        CALLOUT_SIZES,
        sizes: Object.values(CALLOUT_SIZES)
      };
    },
    template: \`
            <div style="display: flex; flex-direction: column; gap: 48px;">
                <section v-for="layout in [CALLOUT_LAYOUTS.VERTICAL, CALLOUT_LAYOUTS.HORIZONTAL]" :key="layout">
                    <h3 style="margin-bottom: 16px;">{{ layout }}</h3>
                    <div style="display: flex; flex-direction: column; gap: 32px; max-width: 500px;">
                        <Callout
                            v-for="size in sizes"
                            :key="size"
                            :layout="layout"
                            :size="size"
                            :icon="ICONS.FA_COMMENT_DOTS"
                            :eyebrow-text="size === CALLOUT_SIZES.SMALL ? 'Eyebrow text' : null"
                            :main-text="'Main text tutaj sobie będzie (' + size + ')'"
                            supporting-text="Supporting text tutaj będzie"
                            button-label="Button small"
                        />
                        <Callout
                            :layout="layout"
                            :icon="ICONS.FA_COMMENT_DOTS"
                            main-text="Main text tutaj sobie będzie (stacked actions)"
                            supporting-text="Supporting text tutaj będzie"
                            button-label="Button small"
                            is-action-vertical
                        />
                        <Callout
                            :layout="layout"
                            :icon="ICONS.FA_COMMENT_DOTS"
                            main-text="Main text tutaj sobie będzie (no actions)"
                            supporting-text="Supporting text tutaj będzie"
                        />
                        <Callout
                            :layout="layout"
                            main-text="Main text tutaj sobie będzie (no icon)"
                            supporting-text="Supporting text tutaj będzie"
                            button-label="Button small"
                        />
                    </div>
                </section>
            </div>\`
  })
}`,...(R=(U=r.parameters)==null?void 0:U.docs)==null?void 0:R.source},description:{story:`The full variant matrix, laid out for side-by-side comparison with the Figma component set
(node 17696:2260).`,...(z=(N=r.parameters)==null?void 0:N.docs)==null?void 0:z.description}}};const ct=["Interactive","WithActionsSlot","Variants"];export{u as Interactive,r as Variants,p as WithActionsSlot,ct as __namedExportsOrder,pt as default};
