import{f as D,G as y,o as a,l as i,j as v,c as p,m as te,u as o,d as oe,h as I,a2 as ne,_ as re,$ as ie,W as C,Z as le,w as ue,N as pe,k as O,a as L,L as R,K as de,r as ae}from"./vue.esm-bundler-S9zc6Wpc.js";import{P as ce,_ as me,a as fe,b as be,c as ve}from"./PopoverTriggerReference-B8D-PfSb.js";import{u as N,P as he}from"./Primitive-DZpX8QWU.js";import{i as ge}from"./PopperContent-Q46ZxJO6.js";import{i as Oe}from"./device-mzBmLsxe.js";import{_ as A,e as ye,d as xe}from"./Button-C24VVysr.js";import{I as Te,c as Pe,a as Se}from"./IconButton-BP3MsFJS.js";import{I as ke}from"./Icon-BCNBiMEg.js";import"./Presence-BVs8m1Yx.js";import"./index-Dm7VD4DC.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./fontawesome-CXWUXLFT.js";const _e={key:0,d:"M0 0L6 6L12 0"},Ee={key:1,d:"M0 0L4.58579 4.58579C5.36683 5.36683 6.63316 5.36684 7.41421 4.58579L12 0"};var Be=D({__name:"Arrow",props:{width:{type:Number,required:!1,default:10},height:{type:Number,required:!1,default:5},rounded:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"svg"}},setup(n){const s=n;return N(),(t,h)=>(a(),y(o(he),te(s,{width:t.width,height:t.height,viewBox:t.asChild?void 0:"0 0 12 6",preserveAspectRatio:t.asChild?void 0:"none"}),{default:i(()=>[v(t.$slots,"default",{},()=>[t.rounded?(a(),p("path",Ee)):(a(),p("path",_e))])]),_:3},16,["width","height","viewBox","preserveAspectRatio"]))}}),Ie=Be;const we={top:"bottom",right:"left",bottom:"top",left:"right"};var De=D({inheritAttrs:!1,__name:"PopperArrow",props:{width:{type:Number,required:!1},height:{type:Number,required:!1},rounded:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"svg"}},setup(n){const{forwardRef:s}=N(),t=ge(),h=oe(()=>we[t.placedSide.value]);return(r,T)=>{var P,f,e,g;return a(),p("span",{ref:S=>{o(t).onArrowChange(S)},style:ne({position:"absolute",left:(P=o(t).arrowX)!=null&&P.value?`${(f=o(t).arrowX)==null?void 0:f.value}px`:void 0,top:(e=o(t).arrowY)!=null&&e.value?`${(g=o(t).arrowY)==null?void 0:g.value}px`:void 0,[h.value]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[o(t).placedSide.value],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[o(t).placedSide.value],visibility:o(t).shouldHideArrow.value?"hidden":void 0})},[I(Ie,te(r.$attrs,{ref:o(s),style:{display:"block"},as:r.as,"as-child":r.asChild,rounded:r.rounded,width:r.width,height:r.height}),{default:i(()=>[v(r.$slots,"default")]),_:3},16,["as","as-child","rounded","width","height"])],4)}}}),Re=De,Ne=D({__name:"PopoverArrow",props:{width:{type:Number,required:!1,default:10},height:{type:Number,required:!1,default:5},rounded:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"svg"}},setup(n){const s=n;return N(),(t,h)=>(a(),y(o(Re),re(ie(s)),{default:i(()=>[v(t.$slots,"default")]),_:3},16))}}),Ae=Ne;const c={DEFAULT:"default",NEUTRAL:"neutral"},m={TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},x={START:"start",CENTER:"center",END:"end"},l={SMALL:"small",MEDIUM:"medium"},w={ENABLED:"enabled",DISABLED_ON_TOUCH_DEVICES:"disabled-on-touch-devices"},Ce=["src"],Le={class:"ds-popover__content"},Me={key:0,class:"ds-popover__title"},ze={key:1,class:"ds-popover__subtitle"},Ue=24,Ve=16,qe=4,Fe=12,u=D({__name:"Popover",props:C({collisionBoundary:{default:null},isDisabled:{type:Boolean,default:!1},isManual:{type:Boolean,default:!1},side:{default:()=>m.BOTTOM},align:{default:()=>x.CENTER},color:{default:()=>c.DEFAULT},titleText:{default:null},subtitleText:{default:null},buttonText:{default:null},headerImageUrl:{default:null},appendToBody:{type:Boolean,default:!0},sideFlip:{type:Boolean,default:!0},size:{default:()=>l.SMALL},maxHeight:{default:null},isPointerVisible:{type:Boolean,default:!0},hideWhenDetached:{type:Boolean,default:!1},autofocus:{default:()=>w.ENABLED}},{open:{type:Boolean,default:!1},openModifiers:{}}),emits:C(["button-click"],["update:open"]),setup(n,{expose:s}){const t=le(n,"open"),h=oe(()=>n.maxHeight?{maxHeight:n.maxHeight}:{});function r(e){n.isManual||(t.value=e)}function T(e){n.isManual&&e.preventDefault()}function P(e){(n.isManual||n.autofocus===w.DISABLED_ON_TOUCH_DEVICES&&Oe())&&e.preventDefault()}function f(){t.value=!1}return ue(()=>n.isDisabled,e=>{e&&!n.isManual&&f()}),s({close:f}),(e,g)=>(a(),p("span",null,[e.isDisabled?v(e.$slots,"reference",{key:0}):(a(),y(o(ve),{key:1,open:t.value,"onUpdate:open":r},{default:i(()=>[I(o(ce),{as:me},{default:i(()=>[v(e.$slots,"reference")]),_:3}),I(o(fe),{disabled:!e.appendToBody},{default:i(()=>{var S;return[I(o(be),{class:pe(["ds-popover",{"-ds-color-neutral":e.color===o(c).NEUTRAL,"-ds-small":e.size===o(l).SMALL,"-ds-medium":e.size===o(l).MEDIUM}]),side:e.side,align:e.align,"side-offset":qe,"arrow-padding":Fe,"side-flip":e.sideFlip,"collision-boundary":(S=e.collisionBoundary)!=null?S:void 0,"position-strategy":"absolute","hide-when-detached":e.hideWhenDetached,onOpenAutoFocus:P,onCloseAutoFocus:T,onEscapeKeyDown:T,onInteractOutside:T},{default:i(()=>[e.headerImageUrl?(a(),p("img",{key:0,class:"ds-popover__image",src:e.headerImageUrl,alt:""},null,8,Ce)):O("",!0),L("div",Le,[e.titleText?(a(),p("div",Me,R(e.titleText),1)):O("",!0),e.subtitleText?(a(),p("div",ze,R(e.subtitleText),1)):O("",!0),L("div",{class:"ds-popover__contentSlot",style:ne(h.value)},[v(e.$slots,"default",{close:f})],4)]),e.buttonText?(a(),y(o(A),{key:1,class:"ds-popover__button",type:o(xe).TEXT,size:o(ye).LARGE,onClick:g[0]||(g[0]=$e=>e.$emit("button-click"))},{default:i(()=>[de(R(e.buttonText),1)]),_:1},8,["type","size"])):O("",!0),e.isPointerVisible?(a(),y(o(Ae),{key:2,class:"ds-popover__arrow",width:Ue,height:Ve})):O("",!0)]),_:3},8,["class","side","align","side-flip","collision-boundary","hide-when-detached"])]}),_:3},8,["disabled"])]),_:3},8,["open"]))]))}});u.__docgenInfo={exportName:"default",displayName:"Popover",description:"",tags:{},expose:[{name:"close"}],props:[{name:"collisionBoundary",required:!1,type:{name:"union",elements:[{name:"Element"},{name:"null"}]}},{name:"isDisabled",required:!1,type:{name:"boolean"}},{name:"isManual",required:!1,type:{name:"boolean"}},{name:"side",required:!1,type:{name:"PopoverSide"}},{name:"align",required:!1,type:{name:"PopoverAlign"}},{name:"color",required:!1,type:{name:"PopoverColor"}},{name:"titleText",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]}},{name:"subtitleText",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]}},{name:"buttonText",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]}},{name:"headerImageUrl",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]}},{name:"appendToBody",required:!1,type:{name:"boolean"}},{name:"sideFlip",required:!1,type:{name:"boolean"}},{name:"size",required:!1,type:{name:"PopoverSize"}},{name:"maxHeight",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]}},{name:"isPointerVisible",required:!1,type:{name:"boolean"}},{name:"hideWhenDetached",required:!1,type:{name:"boolean"}},{name:"autofocus",required:!1,type:{name:"PopoverAutofocus"}}],events:[{name:"button-click"}],slots:[{name:"reference"},{name:"default",scoped:!0,bindings:[{name:"close",title:"binding"}]}],sourceFiles:["/home/runner/work/design-system/design-system/lib/js/components/Popover/Popover.vue"]};const at={title:"Components/Popover",component:u},He=n=>({components:{Popover:u},setup(){return n},template:'<div style="display: flex; align-items: center; justify-content: center; height: 800px; background: var(--raw-gray-50);"><popover :side="side" :align="align" :color="color" :is-disabled="isDisabled" :is-manual="isManual" :title-text="titleText" :subtitle-text="subtitleText" :button-text="buttonText" :open="open" :header-image-url="headerImageUrl" :size="size" :max-height="maxHeight" :is-pointer-visible="isPointerVisible" :side-flip="sideFlip" :append-to-body="appendToBody" :hide-when-detached="hideWhenDetached" :autofocus="autofocus"><template #reference><span style="background: var(--theme-100); border-radius: 4px; padding: 4px 8px;">click me!</span></template><div>{{ definitionSlot }}</div></popover></div>'}),d=He.bind({});d.args={size:l.SMALL,side:m.BOTTOM,align:x.CENTER,color:c.DEFAULT,headerImageUrl:"https://wnl-platform-dev-kuba.s3.eu-central-1.amazonaws.com/public/illustation-StatusLekcji.png",titleText:"Lorem ipsum",subtitleText:"Dolor sit amet",buttonText:"button text",isDisabled:!1,isManual:!1,open:!1,maxHeight:"",isPointerVisible:!0,sideFlip:!0,appendToBody:!0,hideWhenDetached:!1,autofocus:w.ENABLED,definitionSlot:"Bacon ipsum dolor amet t-bone meatball ground round turducken buffalo pork."};const se={size:{control:"select",options:Object.values(l)},side:{control:"select",options:Object.values(m)},align:{control:"select",options:Object.values(x)},color:{control:"select",options:Object.values(c)},isManual:{control:"boolean",description:"Only model updates and explicit close() calls change the open state, and focus stays put."},isDisabled:{control:"boolean"},maxHeight:{control:"text"},autofocus:{control:"select",options:Object.values(w),description:"Whether focus moves into the panel on open. `disabled-on-touch-devices` keeps an input in the panel from opening the on-screen keyboard."}};d.argTypes=se;d.parameters={design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=3590%3A67741"}};const je=n=>({components:{Popover:u},setup(){return n},template:'<div style="display: flex; align-items: center; justify-content: center; height: 800px"><popover :side="side" :align="align" :color="color" :is-disabled="isDisabled" :is-manual="isManual" :title-text="titleText" :subtitle-text="subtitleText" :open="open" :size="size" :max-height="maxHeight" :is-pointer-visible="isPointerVisible"><template #reference><span>click me!</span></template><template #default><b>Bacon</b> ipsum dolor <u>amet</u> t-bone meatball ground round turducken buffalo pork.<b>Bacon</b> ipsum dolor <u>amet</u> t-bone meatball ground round turducken buffalo pork.<b>Bacon</b> ipsum dolor <u>amet</u> t-bone meatball ground round turducken buffalo pork.<b>Bacon</b> ipsum dolor <u>amet</u> t-bone meatball ground round turducken buffalo pork.<b>Bacon</b> ipsum dolor <u>amet</u> t-bone meatball ground round turducken buffalo pork.<b>Bacon</b> ipsum dolor <u>amet</u> t-bone meatball ground round turducken buffalo pork.<b>Bacon</b> ipsum dolor <u>amet</u> t-bone meatball ground round turducken buffalo pork.<b>Bacon</b> ipsum dolor <u>amet</u> t-bone meatball ground round turducken buffalo pork. <b>Bacon</b> ipsum dolor <u>amet</u> t-bone meatball ground round turducken buffalo pork.<b>Bacon</b> ipsum dolor <u>amet</u> t-bone meatball ground round turducken buffalo pork.<b>Bacon</b> ipsum dolor <u>amet</u> t-bone meatball ground round turducken buffalo pork.</template></popover></div>'}),b=je.bind({});b.args={size:l.MEDIUM,maxHeight:"250px",side:m.BOTTOM,align:x.CENTER,color:c.DEFAULT,titleText:"Lorem ipsum",subtitleText:"Dolor sit amet",isDisabled:!1,isManual:!1,open:!1,isPointerVisible:!1};b.argTypes=se;const k=()=>({components:{Popover:u,DsButton:A},setup(){return{isOpen:ae(!1)}},template:`
        <div style="display: flex; flex-direction: column; align-items: center; gap: 24px; min-height: 800px; padding: 48px; background: var(--raw-gray-50);">
            <label>
                <input v-model="isOpen" type="checkbox" />
                isOpen: {{ isOpen }}
            </label>
            <p>Use the checkbox to open or close. Escape, outside clicks, and reference clicks keep the current state.</p>
            <popover v-model:open="isOpen" is-manual title-text="Manually controlled popover">
                <template #reference><ds-button>Popover reference</ds-button></template>
                The checkbox controls this popover through v-model:open="isOpen".
                <ds-button @click="isOpen = false">Close popover</ds-button>
            </popover>
        </div>
    `}),_=()=>({components:{Popover:u,DsIconButton:Te},setup(){return{ICONS:ke,ICON_BUTTON_COLORS:Se,ICON_BUTTON_SIZES:Pe,POPOVER_ALIGNS:x,POPOVER_COLORS:c,POPOVER_SIDES:m}},template:`
        <div style="display: flex; align-items: center; gap: 4px; padding: 24px 16px;">
            <span>Average score</span>
            <popover
                :side="POPOVER_SIDES.BOTTOM"
                :align="POPOVER_ALIGNS.START"
                :color="POPOVER_COLORS.NEUTRAL"
                title-text="How is it calculated?"
                subtitle-text="Updated daily"
            >
                <template #reference>
                    <ds-icon-button
                        :icon="ICONS.FA_CIRCLE_INFO"
                        :size="ICON_BUTTON_SIZES.XX_SMALL"
                        :color="ICON_BUTTON_COLORS.NEUTRAL"
                        aria-label="About average score"
                    />
                </template>
                The mean of your last 20 quiz attempts. Unfinished attempts are not counted.
            </popover>
        </div>
    `}),E=()=>({components:{Popover:u,DsButton:A},setup(){return{isOpen:ae(!0),POPOVER_SIDES:m,POPOVER_SIZES:l}},template:`
        <div style="display: flex; flex-direction: column; align-items: flex-start; gap: 24px; padding: 24px 16px; min-height: 600px;">
            <input placeholder="Focus stays here while the popover is open" style="box-sizing: border-box; width: 100%; max-width: 320px;" autofocus />
            <popover
                v-model:open="isOpen"
                is-manual
                :side="POPOVER_SIDES.BOTTOM"
                :size="POPOVER_SIZES.MEDIUM"
                header-image-url="https://wnl-platform-dev-kuba.s3.eu-central-1.amazonaws.com/public/illustation-StatusLekcji.png"
                title-text="New: lesson status"
                subtitle-text="See where you left off"
                button-text="Got it"
                @button-click="isOpen = false"
            >
                <template #reference><ds-button>Lessons</ds-button></template>
                Every lesson now shows whether you have finished, started or not opened it yet.
            </popover>
        </div>
    `}),B=()=>({components:{Popover:u},setup(){return{variants:Object.values(c).flatMap(s=>Object.values(l).map(t=>({color:s,size:t}))),POPOVER_SIDES:m}},template:`
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(min(100%, 500px), 1fr)); padding: 16px;">
            <div
                v-for="variant in variants"
                :key="variant.color + variant.size"
                style="display: flex; align-items: center; justify-content: center; height: 480px;"
            >
                <popover
                    :open="true"
                    is-manual
                    :side="POPOVER_SIDES.BOTTOM"
                    :color="variant.color"
                    :size="variant.size"
                    :title-text="variant.color + ' · ' + variant.size"
                    subtitle-text="Subtitle"
                    button-text="Button"
                >
                    <template #reference><span>{{ variant.color }} / {{ variant.size }}</span></template>
                    Bacon ipsum dolor amet t-bone meatball ground round turducken buffalo pork.
                </popover>
            </div>
        </div>
    `});var M,z,U;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`args => ({
  components: {
    Popover
  },
  setup() {
    return args;
  },
  template: '<div style="display: flex; align-items: center; justify-content: center; height: 800px; background: var(--raw-gray-50);">' + '<popover :side="side" :align="align" :color="color" :is-disabled="isDisabled" :is-manual="isManual" :title-text="titleText" :subtitle-text="subtitleText" :button-text="buttonText" :open="open" :header-image-url="headerImageUrl" :size="size" :max-height="maxHeight" :is-pointer-visible="isPointerVisible" :side-flip="sideFlip" :append-to-body="appendToBody" :hide-when-detached="hideWhenDetached" :autofocus="autofocus">' + '<template #reference><span style="background: var(--theme-100); border-radius: 4px; padding: 4px 8px;">click me!</span></template>' + '<div>{{ definitionSlot }}</div>' + '</popover>' + '</div>'
})`,...(U=(z=d.parameters)==null?void 0:z.docs)==null?void 0:U.source}}};var V,q,F;b.parameters={...b.parameters,docs:{...(V=b.parameters)==null?void 0:V.docs,source:{originalSource:`args => ({
  components: {
    Popover
  },
  setup() {
    return args;
  },
  template: '<div style="display: flex; align-items: center; justify-content: center; height: 800px">' + '<popover :side="side" :align="align" :color="color" :is-disabled="isDisabled" :is-manual="isManual" :title-text="titleText" :subtitle-text="subtitleText" :open="open" :size="size" :max-height="maxHeight" :is-pointer-visible="isPointerVisible">' + '<template #reference><span>click me!</span></template>' + '<template #default><b>Bacon</b> ipsum dolor <u>amet</u> t-bone meatball ground round turducken buffalo pork.<b>Bacon</b> ipsum dolor <u>amet</u> t-bone meatball ground round turducken buffalo pork.<b>Bacon</b> ipsum dolor <u>amet</u> t-bone meatball ground round turducken buffalo pork.<b>Bacon</b> ipsum dolor <u>amet</u> t-bone meatball ground round turducken buffalo pork.<b>Bacon</b> ipsum dolor <u>amet</u> t-bone meatball ground round turducken buffalo pork.<b>Bacon</b> ipsum dolor <u>amet</u> t-bone meatball ground round turducken buffalo pork.<b>Bacon</b> ipsum dolor <u>amet</u> t-bone meatball ground round turducken buffalo pork.<b>Bacon</b> ipsum dolor <u>amet</u> t-bone meatball ground round turducken buffalo pork. <b>Bacon</b> ipsum dolor <u>amet</u> t-bone meatball ground round turducken buffalo pork.<b>Bacon</b> ipsum dolor <u>amet</u> t-bone meatball ground round turducken buffalo pork.<b>Bacon</b> ipsum dolor <u>amet</u> t-bone meatball ground round turducken buffalo pork.</template>' + '</popover>' + '</div>'
})`,...(F=(q=b.parameters)==null?void 0:q.docs)==null?void 0:F.source}}};var H,j,$;k.parameters={...k.parameters,docs:{...(H=k.parameters)==null?void 0:H.docs,source:{originalSource:`() => ({
  components: {
    Popover,
    DsButton
  },
  setup() {
    const isOpen = ref(false);
    return {
      isOpen
    };
  },
  template: \`
        <div style="display: flex; flex-direction: column; align-items: center; gap: 24px; min-height: 800px; padding: 48px; background: var(--raw-gray-50);">
            <label>
                <input v-model="isOpen" type="checkbox" />
                isOpen: {{ isOpen }}
            </label>
            <p>Use the checkbox to open or close. Escape, outside clicks, and reference clicks keep the current state.</p>
            <popover v-model:open="isOpen" is-manual title-text="Manually controlled popover">
                <template #reference><ds-button>Popover reference</ds-button></template>
                The checkbox controls this popover through v-model:open="isOpen".
                <ds-button @click="isOpen = false">Close popover</ds-button>
            </popover>
        </div>
    \`
})`,...($=(j=k.parameters)==null?void 0:j.docs)==null?void 0:$.source}}};var W,G,Z;_.parameters={..._.parameters,docs:{...(W=_.parameters)==null?void 0:W.docs,source:{originalSource:`() => ({
  components: {
    Popover,
    DsIconButton
  },
  setup() {
    return {
      ICONS,
      ICON_BUTTON_COLORS,
      ICON_BUTTON_SIZES,
      POPOVER_ALIGNS,
      POPOVER_COLORS,
      POPOVER_SIDES
    };
  },
  template: \`
        <div style="display: flex; align-items: center; gap: 4px; padding: 24px 16px;">
            <span>Average score</span>
            <popover
                :side="POPOVER_SIDES.BOTTOM"
                :align="POPOVER_ALIGNS.START"
                :color="POPOVER_COLORS.NEUTRAL"
                title-text="How is it calculated?"
                subtitle-text="Updated daily"
            >
                <template #reference>
                    <ds-icon-button
                        :icon="ICONS.FA_CIRCLE_INFO"
                        :size="ICON_BUTTON_SIZES.XX_SMALL"
                        :color="ICON_BUTTON_COLORS.NEUTRAL"
                        aria-label="About average score"
                    />
                </template>
                The mean of your last 20 quiz attempts. Unfinished attempts are not counted.
            </popover>
        </div>
    \`
})`,...(Z=(G=_.parameters)==null?void 0:G.docs)==null?void 0:Z.source}}};var X,Y,K;E.parameters={...E.parameters,docs:{...(X=E.parameters)==null?void 0:X.docs,source:{originalSource:`() => ({
  components: {
    Popover,
    DsButton
  },
  setup() {
    const isOpen = ref(true);
    return {
      isOpen,
      POPOVER_SIDES,
      POPOVER_SIZES
    };
  },
  template: \`
        <div style="display: flex; flex-direction: column; align-items: flex-start; gap: 24px; padding: 24px 16px; min-height: 600px;">
            <input placeholder="Focus stays here while the popover is open" style="box-sizing: border-box; width: 100%; max-width: 320px;" autofocus />
            <popover
                v-model:open="isOpen"
                is-manual
                :side="POPOVER_SIDES.BOTTOM"
                :size="POPOVER_SIZES.MEDIUM"
                header-image-url="https://wnl-platform-dev-kuba.s3.eu-central-1.amazonaws.com/public/illustation-StatusLekcji.png"
                title-text="New: lesson status"
                subtitle-text="See where you left off"
                button-text="Got it"
                @button-click="isOpen = false"
            >
                <template #reference><ds-button>Lessons</ds-button></template>
                Every lesson now shows whether you have finished, started or not opened it yet.
            </popover>
        </div>
    \`
})`,...(K=(Y=E.parameters)==null?void 0:Y.docs)==null?void 0:K.source}}};var Q,J,ee;B.parameters={...B.parameters,docs:{...(Q=B.parameters)==null?void 0:Q.docs,source:{originalSource:`() => ({
  components: {
    Popover
  },
  setup() {
    const variants = Object.values(POPOVER_COLORS).flatMap(color => Object.values(POPOVER_SIZES).map(size => ({
      color,
      size
    })));
    return {
      variants,
      POPOVER_SIDES
    };
  },
  template: \`
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(min(100%, 500px), 1fr)); padding: 16px;">
            <div
                v-for="variant in variants"
                :key="variant.color + variant.size"
                style="display: flex; align-items: center; justify-content: center; height: 480px;"
            >
                <popover
                    :open="true"
                    is-manual
                    :side="POPOVER_SIDES.BOTTOM"
                    :color="variant.color"
                    :size="variant.size"
                    :title-text="variant.color + ' · ' + variant.size"
                    subtitle-text="Subtitle"
                    button-text="Button"
                >
                    <template #reference><span>{{ variant.color }} / {{ variant.size }}</span></template>
                    Bacon ipsum dolor amet t-bone meatball ground round turducken buffalo pork.
                </popover>
            </div>
        </div>
    \`
})`,...(ee=(J=B.parameters)==null?void 0:J.docs)==null?void 0:ee.source}}};const st=["Interactive","PopoverMMaxHeightNoPointer","Manual","InfoHint","FeatureAnnouncement","Variants"];export{E as FeatureAnnouncement,_ as InfoHint,d as Interactive,k as Manual,b as PopoverMMaxHeightNoPointer,B as Variants,st as __namedExportsOrder,at as default};
