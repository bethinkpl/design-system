import{_ as t,P as a,a as r,b as d,c as i}from"./Popover-5a_PmZyY.js";import{_ as R}from"./Button-4WEdqI-U.js";import{I as D,c as w,a as V}from"./IconButton-DPCw5IX6.js";import{I as C}from"./Icon-QFU__4e-.js";import{r as L}from"./vue.esm-bundler-DeRiNcSr.js";import"./PopoverTriggerReference-DU9WjlMc.js";import"./Primitive-DQnq458G.js";import"./index-BxAcIQAY.js";import"./PopperContent-DKUWvcUs.js";import"./Presence-Ccu_tC1V.js";import"./device-mzBmLsxe.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const K={title:"Components/Popover",component:t},U=o=>({components:{Popover:t},setup(){return o},template:'<div style="display: flex; align-items: center; justify-content: center; height: 800px; background: var(--raw-gray-50);"><popover :side="side" :align="align" :color="color" :is-disabled="isDisabled" :is-manual="isManual" :title-text="titleText" :subtitle-text="subtitleText" :button-text="buttonText" :open="open" :header-image-url="headerImageUrl" :size="size" :max-height="maxHeight" :is-pointer-visible="isPointerVisible" :side-flip="sideFlip" :append-to-body="appendToBody" :hide-when-detached="hideWhenDetached"><template #reference><span style="background: var(--theme-100); border-radius: 4px; padding: 4px 8px;">click me!</span></template><div>{{ definitionSlot }}</div></popover></div>'}),e=U.bind({});e.args={size:i.SMALL,side:a.BOTTOM,align:d.CENTER,color:r.DEFAULT,headerImageUrl:"https://wnl-platform-dev-kuba.s3.eu-central-1.amazonaws.com/public/illustation-StatusLekcji.png",titleText:"Lorem ipsum",subtitleText:"Dolor sit amet",buttonText:"button text",isDisabled:!1,isManual:!1,open:!1,maxHeight:"",isPointerVisible:!0,sideFlip:!0,appendToBody:!0,hideWhenDetached:!1,definitionSlot:"Bacon ipsum dolor amet t-bone meatball ground round turducken buffalo pork."};const M={size:{control:"select",options:Object.values(i)},side:{control:"select",options:Object.values(a)},align:{control:"select",options:Object.values(d)},color:{control:"select",options:Object.values(r)},isManual:{control:"boolean",description:"Only model updates and explicit close() calls change the open state, and focus stays put."},isDisabled:{control:"boolean"},maxHeight:{control:"text"}};e.argTypes=M;e.parameters={design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=3590%3A67741"}};const A=o=>({components:{Popover:t},setup(){return o},template:'<div style="display: flex; align-items: center; justify-content: center; height: 800px"><popover :side="side" :align="align" :color="color" :is-disabled="isDisabled" :is-manual="isManual" :title-text="titleText" :subtitle-text="subtitleText" :open="open" :size="size" :max-height="maxHeight" :is-pointer-visible="isPointerVisible"><template #reference><span>click me!</span></template><template #default><b>Bacon</b> ipsum dolor <u>amet</u> t-bone meatball ground round turducken buffalo pork.<b>Bacon</b> ipsum dolor <u>amet</u> t-bone meatball ground round turducken buffalo pork.<b>Bacon</b> ipsum dolor <u>amet</u> t-bone meatball ground round turducken buffalo pork.<b>Bacon</b> ipsum dolor <u>amet</u> t-bone meatball ground round turducken buffalo pork.<b>Bacon</b> ipsum dolor <u>amet</u> t-bone meatball ground round turducken buffalo pork.<b>Bacon</b> ipsum dolor <u>amet</u> t-bone meatball ground round turducken buffalo pork.<b>Bacon</b> ipsum dolor <u>amet</u> t-bone meatball ground round turducken buffalo pork.<b>Bacon</b> ipsum dolor <u>amet</u> t-bone meatball ground round turducken buffalo pork. <b>Bacon</b> ipsum dolor <u>amet</u> t-bone meatball ground round turducken buffalo pork.<b>Bacon</b> ipsum dolor <u>amet</u> t-bone meatball ground round turducken buffalo pork.<b>Bacon</b> ipsum dolor <u>amet</u> t-bone meatball ground round turducken buffalo pork.</template></popover></div>'}),n=A.bind({});n.args={size:i.MEDIUM,maxHeight:"250px",side:a.BOTTOM,align:d.CENTER,color:r.DEFAULT,titleText:"Lorem ipsum",subtitleText:"Dolor sit amet",isDisabled:!1,isManual:!1,open:!1,isPointerVisible:!1};n.argTypes=M;const s=()=>({components:{Popover:t,DsButton:R},setup(){return{isOpen:L(!1)}},template:`
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
    `}),l=()=>({components:{Popover:t,DsIconButton:D},setup(){return{ICONS:C,ICON_BUTTON_COLORS:V,ICON_BUTTON_SIZES:w,POPOVER_ALIGNS:d,POPOVER_COLORS:r,POPOVER_SIDES:a}},template:`
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
    `}),p=()=>({components:{Popover:t,DsButton:R},setup(){return{isOpen:L(!0),POPOVER_SIDES:a,POPOVER_SIZES:i}},template:`
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
    `}),u=()=>({components:{Popover:t},setup(){return{variants:Object.values(r).flatMap(N=>Object.values(i).map(z=>({color:N,size:z}))),POPOVER_SIDES:a}},template:`
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
    `});var c,m,b;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`args => ({
  components: {
    Popover
  },
  setup() {
    return args;
  },
  template: '<div style="display: flex; align-items: center; justify-content: center; height: 800px; background: var(--raw-gray-50);">' + '<popover :side="side" :align="align" :color="color" :is-disabled="isDisabled" :is-manual="isManual" :title-text="titleText" :subtitle-text="subtitleText" :button-text="buttonText" :open="open" :header-image-url="headerImageUrl" :size="size" :max-height="maxHeight" :is-pointer-visible="isPointerVisible" :side-flip="sideFlip" :append-to-body="appendToBody" :hide-when-detached="hideWhenDetached">' + '<template #reference><span style="background: var(--theme-100); border-radius: 4px; padding: 4px 8px;">click me!</span></template>' + '<div>{{ definitionSlot }}</div>' + '</popover>' + '</div>'
})`,...(b=(m=e.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var f,v,g;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`args => ({
  components: {
    Popover
  },
  setup() {
    return args;
  },
  template: '<div style="display: flex; align-items: center; justify-content: center; height: 800px">' + '<popover :side="side" :align="align" :color="color" :is-disabled="isDisabled" :is-manual="isManual" :title-text="titleText" :subtitle-text="subtitleText" :open="open" :size="size" :max-height="maxHeight" :is-pointer-visible="isPointerVisible">' + '<template #reference><span>click me!</span></template>' + '<template #default><b>Bacon</b> ipsum dolor <u>amet</u> t-bone meatball ground round turducken buffalo pork.<b>Bacon</b> ipsum dolor <u>amet</u> t-bone meatball ground round turducken buffalo pork.<b>Bacon</b> ipsum dolor <u>amet</u> t-bone meatball ground round turducken buffalo pork.<b>Bacon</b> ipsum dolor <u>amet</u> t-bone meatball ground round turducken buffalo pork.<b>Bacon</b> ipsum dolor <u>amet</u> t-bone meatball ground round turducken buffalo pork.<b>Bacon</b> ipsum dolor <u>amet</u> t-bone meatball ground round turducken buffalo pork.<b>Bacon</b> ipsum dolor <u>amet</u> t-bone meatball ground round turducken buffalo pork.<b>Bacon</b> ipsum dolor <u>amet</u> t-bone meatball ground round turducken buffalo pork. <b>Bacon</b> ipsum dolor <u>amet</u> t-bone meatball ground round turducken buffalo pork.<b>Bacon</b> ipsum dolor <u>amet</u> t-bone meatball ground round turducken buffalo pork.<b>Bacon</b> ipsum dolor <u>amet</u> t-bone meatball ground round turducken buffalo pork.</template>' + '</popover>' + '</div>'
})`,...(g=(v=n.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var O,x,h;s.parameters={...s.parameters,docs:{...(O=s.parameters)==null?void 0:O.docs,source:{originalSource:`() => ({
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
})`,...(h=(x=s.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var k,S,y;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`() => ({
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
})`,...(y=(S=l.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var P,T,E;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`() => ({
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
})`,...(E=(T=p.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};var I,_,B;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`() => ({
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
})`,...(B=(_=u.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};const ee=["Interactive","PopoverMMaxHeightNoPointer","Manual","InfoHint","FeatureAnnouncement","Variants"];export{p as FeatureAnnouncement,l as InfoHint,e as Interactive,s as Manual,n as PopoverMMaxHeightNoPointer,u as Variants,ee as __namedExportsOrder,K as default};
