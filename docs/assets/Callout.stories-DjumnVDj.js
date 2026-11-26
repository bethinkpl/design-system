import{_ as W,b as L}from"./chunk-4XZ63LWV-laKUlqim.js";import{f as $,d as S,c as I,a as Q,k as E,G as J,h as g,u as l,j as tt,N as et,o as x,l as ot,K as nt,L as at}from"./vue.esm-bundler-S9zc6Wpc.js";import{F as it,a as M,_ as st}from"./FeatureIcon-CCm0-VHM.js";import{c as lt,D as rt,e as R,d as f}from"./TextGroup-CIbAZRxD.js";import{a as y,b as ut,e as P,d as V,c as Z,_ as G}from"./Button-C24VVysr.js";import{_ as ct}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{I as p}from"./Icon-BCNBiMEg.js";import"./v4-CwV2VaSl.js";import"./index-Dm7VD4DC.js";import"./Skeleton-Dph7qEcf.js";import"./index-CPvnfNuQ.js";import"./Tooltip-DGxAUyqd.js";import"./device-mzBmLsxe.js";import"./fontawesome-CXWUXLFT.js";const{definePreview:Dt}=__STORYBOOK_MODULE_PREVIEW_API__,{global:A}=__STORYBOOK_MODULE_GLOBAL__;var pt={};W(pt,{argsEnhancers:()=>dt,loaders:()=>Lt});var q=(e,n)=>typeof n[e]>"u"&&!(e in n),Tt=e=>{let{initialArgs:n,argTypes:i,id:s,parameters:{actions:t}}=e;if(!t||t.disable||!t.argTypesRegex||!i)return{};let o=new RegExp(t.argTypesRegex);return Object.entries(i).filter(([a])=>!!o.test(a)).reduce((a,[_,St])=>(q(_,n)&&(a[_]=L(_,{implicit:!0,id:s})),a),{})},mt=e=>{let{initialArgs:n,argTypes:i,parameters:{actions:s}}=e;return s!=null&&s.disable||!i?{}:Object.entries(i).filter(([t,o])=>!!o.action).reduce((t,[o,a])=>(q(o,n)&&(t[o]=L(typeof a.action=="string"?a.action:o)),t),{})},dt=[mt,Tt],U=!1,Ot=e=>{let{parameters:{actions:n}}=e;if(!(n!=null&&n.disable)&&!U&&"__STORYBOOK_TEST_ON_MOCK_CALL__"in A&&typeof A.__STORYBOOK_TEST_ON_MOCK_CALL__=="function"){let i=A.__STORYBOOK_TEST_ON_MOCK_CALL__;i((s,t)=>{let o=s.getMockName();o!=="spy"&&(!/^next\/.*::/.test(o)||["next/router::useRouter()","next/navigation::useRouter()","next/navigation::redirect","next/cache::","next/headers::cookies().set","next/headers::cookies().delete","next/headers::headers().set","next/headers::headers().delete"].some(a=>o.startsWith(a)))&&L(o)(t)}),U=!0}},Lt=[Ot];const r={VERTICAL:"vertical",HORIZONTAL:"horizontal"},u={SMALL:"small",MEDIUM:"medium",LARGE:"large"},b=it,C=lt,bt={class:"ds-callout__content"},Ct={key:0,class:"ds-callout__actions"},K=$({__name:"Callout",props:{icon:{default:null},layout:{default:()=>r.VERTICAL},size:{default:()=>u.MEDIUM},iconColor:{default:()=>b.PRIMARY},eyebrowText:{default:null},mainText:{default:null},supportingText:{default:null},mainTextColor:{default:()=>C.PRIMARY},buttonLabel:{default:null},buttonIcon:{default:null},buttonState:{default:()=>y.DEFAULT},isActionVertical:{type:Boolean,default:!1}},emits:["button-clicked"],setup(e){const n=S(()=>e.size===u.LARGE?M.LARGE:M.MEDIUM),i=S(()=>e.size===u.SMALL?R.MEDIUM:R.LARGE),s=S(()=>e.layout===r.VERTICAL?f.CENTER:f.LEFT);return(t,o)=>(x(),I("div",{class:et(["ds-callout",{"-ds-layout-vertical":t.layout===l(r).VERTICAL,"-ds-layout-horizontal":t.layout===l(r).HORIZONTAL,"-ds-actions-vertical":t.isActionVertical}])},[Q("div",bt,[t.icon?(x(),J(l(st),{key:0,class:"ds-callout__icon",icon:t.icon,color:t.iconColor,size:n.value,"double-background":""},null,8,["icon","color","size"])):E("",!0),g(rt,{class:"ds-callout__text","eyebrow-text":t.eyebrowText,"is-eyebrow-text-uppercase":!1,"main-text":t.mainText,"supporting-text":t.supportingText,size:i.value,align:s.value,"main-text-color":t.mainTextColor,"is-interactive":!1},null,8,["eyebrow-text","main-text","supporting-text","size","align","main-text-color"])]),t.$slots.actions||t.buttonLabel?(x(),I("div",Ct,[tt(t.$slots,"actions",{},()=>[g(l(G),{color:l(Z).PRIMARY,type:l(V).FILLED,size:l(P).SMALL,state:t.buttonState,radius:l(ut).ROUNDED,"icon-left":t.buttonIcon,onClick:o[0]||(o[0]=a=>t.$emit("button-clicked",a))},{default:ot(()=>[nt(at(t.buttonLabel),1)]),_:1},8,["color","type","size","state","radius","icon-left"])],!0)])):E("",!0)],2))}}),O=ct(K,[["__scopeId","data-v-c9e41555"]]);K.__docgenInfo={exportName:"default",displayName:"Callout",description:"",tags:{},props:[{name:"icon",required:!1,type:{name:"union",elements:[{name:"IconItem"},{name:"null"}]}},{name:"layout",required:!1,type:{name:"CalloutLayout"}},{name:"size",required:!1,type:{name:"CalloutSize"}},{name:"iconColor",required:!1,type:{name:"CalloutIconColor"}},{name:"eyebrowText",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]}},{name:"mainText",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]}},{name:"supportingText",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]}},{name:"mainTextColor",required:!1,type:{name:"CalloutMainTextColor"}},{name:"buttonLabel",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]}},{name:"buttonIcon",required:!1,type:{name:"union",elements:[{name:"IconItem"},{name:"null"}]}},{name:"buttonState",required:!1,type:{name:"ButtonState"}},{name:"isActionVertical",required:!1,type:{name:"boolean"}}],events:[{name:"button-clicked",type:{names:["Event"]}}],slots:[{name:"actions"}],sourceFiles:["/home/runner/work/design-system/design-system/lib/js/components/Callout/Callout.vue"]};const X="https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=17359-1009&m=dev",_t="https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=17760-416&m=dev",d=e=>e||null,H=e=>({...e,icon:p[e.icon],buttonIcon:p[e.buttonIcon],eyebrowText:d(e.eyebrowText),mainText:d(e.mainText),supportingText:d(e.supportingText),buttonLabel:d(e.buttonLabel)}),jt={title:"Components/Callout",component:O,render:e=>({components:{Callout:O},setup(){return{onButtonClicked:L("button-clicked")}},computed:{props(){return H(e)}},template:'<div style="max-width: 500px;"><Callout v-bind="props" @button-clicked="onButtonClicked" /></div>'}),argTypes:{layout:{control:"select",options:Object.values(r)},size:{control:"select",options:Object.values(u)},iconColor:{control:"select",options:Object.values(b)},mainTextColor:{control:"select",options:Object.values(C)},icon:{control:"select",options:[null,...Object.keys(p)]},buttonIcon:{control:"select",options:[null,...Object.keys(p)]},buttonState:{control:"select",options:Object.values(y)},eyebrowText:{control:"text"},mainText:{control:"text"},supportingText:{control:"text"},buttonLabel:{control:"text"},isActionVertical:{control:"boolean"}}},T={args:{layout:r.VERTICAL,size:u.MEDIUM,iconColor:b.PRIMARY,mainTextColor:C.PRIMARY,icon:"FA_COMMENT_DOTS",eyebrowText:"",mainText:"Main text tutaj sobie będzie",supportingText:"Supporting text tutaj będzie",buttonLabel:"Button label",buttonIcon:null,isActionVertical:!1,buttonState:y.DEFAULT}};T.parameters={design:{type:"figma",url:X}};const m={render:e=>({components:{Callout:O,DsButton:G},setup(){return{args:e,ICONS:p,BUTTON_COLORS:Z,BUTTON_SIZES:P,BUTTON_TYPES:V}},computed:{props(){return H(e)}},template:`
            <div style="max-width: 500px;">
                <Callout v-bind="props">
                    <template #actions>
                        <ds-button :color="BUTTON_COLORS.NEUTRAL" :type="BUTTON_TYPES.OUTLINED" :size="BUTTON_SIZES.SMALL">Cancel</ds-button>
                        <ds-button :color="BUTTON_COLORS.PRIMARY" :type="BUTTON_TYPES.FILLED" :size="BUTTON_SIZES.SMALL">Confirm</ds-button>
                    </template>
                </Callout>
            </div>`}),args:{layout:r.VERTICAL,size:u.MEDIUM,iconColor:b.PRIMARY,mainTextColor:C.PRIMARY,icon:"FA_COMMENT_DOTS",mainText:"Main text tutaj sobie będzie",supportingText:"Supporting text tutaj będzie",isActionVertical:!1}};m.parameters={design:{type:"figma",url:X}};const c={render:()=>({components:{Callout:O},setup(){return{ICONS:p,CALLOUT_LAYOUTS:r,CALLOUT_SIZES:u,sizes:Object.values(u)}},template:`
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
            </div>`})};c.parameters={design:{type:"figma",url:_t}};var N,z,v;T.parameters={...T.parameters,docs:{...(N=T.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(v=(z=T.parameters)==null?void 0:z.docs)==null?void 0:v.source}}};var B,D,j;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(j=(D=m.parameters)==null?void 0:D.docs)==null?void 0:j.source}}};var w,Y,h,k,F;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(h=(Y=c.parameters)==null?void 0:Y.docs)==null?void 0:h.source},description:{story:`The full variant matrix, laid out for side-by-side comparison with the Figma component set
(node 17696:2260).`,...(F=(k=c.parameters)==null?void 0:k.docs)==null?void 0:F.description}}};const wt=["Interactive","WithActionsSlot","Variants"];export{T as Interactive,c as Variants,m as WithActionsSlot,wt as __namedExportsOrder,jt as default};
