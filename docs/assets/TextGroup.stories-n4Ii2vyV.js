import{D as u}from"./Divider-CsYapLKZ.js";import{D as s,T as n,a as l,b as p,c as r}from"./TextGroup-ChPw6rUC.js";import"./vue.esm-bundler-BEu-HfQJ.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./_commonjsHelpers-D6Ya60D-.js";import"./index-yKlVThWI.js";import"./Skeleton-CA38Yv_j.js";import"./Tooltip-Do-QYl8p.js";import"./device-9fgosCm4.js";const w={title:"Components/TextGroup",component:s},x=a=>({components:{DsDivider:u,DsTextGroup:s},setup(){return a},template:`
        <ds-text-group
            :size="size"
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
            :is-selected="isSelected"
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
        </div>`}),t=x.bind({});t.args={mainTextSlot:"",size:r.MEDIUM,prominence:p.DEFAULT,eyebrowText:"Eyebrow Uppercase Veritatis aspernatur cupiditate magnam quidem",eyebrowTextEllipsis:!1,isEyebrowTextUppercase:!0,hasEyebrowMask:!1,mainText:"Main text Veritatis aspernatur cupiditate magnam quidem",mainTextEllipsis:!1,supportingText:"Eaque cumque ut beatae ratione nostrum vitae nisi. Consequatur ut expedita labore quisquam impedit ullam ipsam delectus at. Veritatis aspernatur cupiditate magnam quidem.",supportingTextEllipsis:!1,isInteractive:!0,skeletonLoadingSize:l.LARGE,isSelected:!1,state:n.DEFAULT,isSupportingTextTooltipEnabled:!1,isSupportingTextTooltipEnabledOnMobile:!0,isSupportingTextTooltipAutoFilledWithContent:!0,supportingTextTooltipContent:""};t.argTypes={size:{control:"select",options:Object.values(r)},prominence:{control:"select",options:Object.values(p)},eyebrowText:{control:"text"},eyebrowTextEllipsis:{control:"boolean"},isEyebrowTextUppercase:{control:"boolean"},hasEyebrowMask:{control:"boolean"},mainText:{control:"text"},mainTextEllipsis:{control:"boolean"},supportingText:{control:"text"},supportingTextEllipsis:{control:"boolean"},isInteractive:{control:"boolean"},skeletonLoadingSize:{control:"select",options:Object.values(l)},isSelected:{control:"boolean"},state:{control:"select",options:Object.values(n)},isSupportingTextTooltipEnabled:{control:"boolean"},isSupportingTextTooltipEnabledOnMobile:{control:"boolean"},isSupportingTextTooltipAutoFilledWithContent:{control:"boolean"},supportingTextTooltipContent:{control:"text"},mainTextSlot:{control:"text"}};t.parameters={design:{type:"figma",url:"https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=10439-30112&t=NLnObQEu7dAT74xq-0"}};var e,o,i;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`args => ({
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
            :is-selected="isSelected"
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
})`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const v=["Interactive"];export{t as Interactive,v as __namedExportsOrder,w as default};
