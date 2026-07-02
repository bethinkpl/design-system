import{D as T}from"./Divider-BMHcMlOr.js";import{D as n,T as l,a as s,b as p,c as r,d as a,e as u}from"./TextGroup-CkuLb7U7.js";import"./vue.esm-bundler-CjwGEpld.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./_commonjsHelpers-D6Ya60D-.js";import"./index-BXf4aNP_.js";import"./Skeleton-DPTE0q_E.js";import"./Tooltip-B5HEf_NZ.js";import"./device-mzBmLsxe.js";const O={title:"Components/TextGroup",component:n},m=x=>({components:{DsDivider:T,DsTextGroup:n},setup(){return x},template:`
        <ds-text-group
            :size="size"
            :align="align"
            :main-text-color="mainTextColor"
            :prominence="prominence"
            :eyebrow-text="eyebrowText === 'null' ? null : eyebrowText"
            :eyebrow-text-ellipsis="eyebrowTextEllipsis"
            :is-eyebrow-text-uppercase="isEyebrowTextUppercase"
            :main-text="mainText === 'null' ? null : mainText"
            :main-text-ellipsis="mainTextEllipsis"
            :supporting-text="supportingText === 'null' ? null : supportingText"
            :supporting-text-ellipsis="supportingTextEllipsis"
            :is-interactive="isInteractive"
            :skeleton-loading-size="skeletonLoadingSize"
            :state="state"
            :is-supporting-text-tooltip-enabled="isSupportingTextTooltipEnabled"
            :is-supporting-text-tooltip-enabled-on-mobile="isSupportingTextTooltipEnabledOnMobile"
            :is-supporting-text-tooltip-auto-filled-with-content="isSupportingTextTooltipAutoFilledWithContent"
            :supporting-text-tooltip-content="supportingTextTooltipContent"
            :has-eyebrow-mask="hasEyebrowMask"
        >
            <template v-if="mainTextSlot" #mainText>
                <div v-html="mainTextSlot" />
            </template>
        </ds-text-group>
        <div style="margin-top: 100px; color: #888">
            <ds-divider />
            <small>Use "null" in *Text props to get nullable value</small>
        </div>`}),t=m.bind({});t.args={mainTextSlot:"",size:u.MEDIUM,align:a.LEFT,mainTextColor:r.NEUTRAL,prominence:p.DEFAULT,eyebrowText:"Eyebrow Uppercase Veritatis aspernatur cupiditate magnam quidem",eyebrowTextEllipsis:!1,isEyebrowTextUppercase:!0,hasEyebrowMask:!1,mainText:"Main text Veritatis aspernatur cupiditate magnam quidem",mainTextEllipsis:!1,supportingText:"Eaque cumque ut beatae ratione nostrum vitae nisi. Consequatur ut expedita labore quisquam impedit ullam ipsam delectus at. Veritatis aspernatur cupiditate magnam quidem.",supportingTextEllipsis:!1,isInteractive:!0,skeletonLoadingSize:s.LARGE,state:l.DEFAULT,isSupportingTextTooltipEnabled:!1,isSupportingTextTooltipEnabledOnMobile:!0,isSupportingTextTooltipAutoFilledWithContent:!0,supportingTextTooltipContent:""};t.argTypes={size:{control:"select",options:Object.values(u)},align:{control:"select",options:Object.values(a)},mainTextColor:{control:"select",options:Object.values(r)},prominence:{control:"select",options:Object.values(p)},eyebrowText:{control:"text"},eyebrowTextEllipsis:{control:"boolean"},isEyebrowTextUppercase:{control:"boolean"},hasEyebrowMask:{control:"boolean"},mainText:{control:"text"},mainTextEllipsis:{control:"boolean"},supportingText:{control:"text"},supportingTextEllipsis:{control:"boolean"},isInteractive:{control:"boolean"},skeletonLoadingSize:{control:"select",options:Object.values(s)},state:{control:"select",options:Object.values(l)},isSupportingTextTooltipEnabled:{control:"boolean"},isSupportingTextTooltipEnabledOnMobile:{control:"boolean"},isSupportingTextTooltipAutoFilledWithContent:{control:"boolean"},supportingTextTooltipContent:{control:"text"},mainTextSlot:{control:"text"}};t.parameters={design:{type:"figma",url:"https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=10439-30112&t=NLnObQEu7dAT74xq-0"}};var e,o,i;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`args => ({
  components: {
    DsDivider,
    DsTextGroup
  },
  setup() {
    return args;
  },
  template: \`
        <ds-text-group
            :size="size"
            :align="align"
            :main-text-color="mainTextColor"
            :prominence="prominence"
            :eyebrow-text="eyebrowText === 'null' ? null : eyebrowText"
            :eyebrow-text-ellipsis="eyebrowTextEllipsis"
            :is-eyebrow-text-uppercase="isEyebrowTextUppercase"
            :main-text="mainText === 'null' ? null : mainText"
            :main-text-ellipsis="mainTextEllipsis"
            :supporting-text="supportingText === 'null' ? null : supportingText"
            :supporting-text-ellipsis="supportingTextEllipsis"
            :is-interactive="isInteractive"
            :skeleton-loading-size="skeletonLoadingSize"
            :state="state"
            :is-supporting-text-tooltip-enabled="isSupportingTextTooltipEnabled"
            :is-supporting-text-tooltip-enabled-on-mobile="isSupportingTextTooltipEnabledOnMobile"
            :is-supporting-text-tooltip-auto-filled-with-content="isSupportingTextTooltipAutoFilledWithContent"
            :supporting-text-tooltip-content="supportingTextTooltipContent"
            :has-eyebrow-mask="hasEyebrowMask"
        >
            <template v-if="mainTextSlot" #mainText>
                <div v-html="mainTextSlot" />
            </template>
        </ds-text-group>
        <div style="margin-top: 100px; color: #888">
            <ds-divider />
            <small>Use "null" in *Text props to get nullable value</small>
        </div>\`
})`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const _=["Interactive"];export{t as Interactive,_ as __namedExportsOrder,O as default};
