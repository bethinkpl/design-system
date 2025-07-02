import{D as u}from"./Divider-CVSnQKGH.js";import{D as s,T as l,a as n,b as p,c as r}from"./TextGroup-C3lzWR3I.js";import"./vue.esm-bundler-F3F7hH0X.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Skeleton-Cju9fW3L.js";import"./Tooltip-Boh3_oxI.js";import"./device-9fgosCm4.js";const S={title:"Components/TextGroup",component:s},x=a=>({components:{DsDivider:u,DsTextGroup:s},setup(){return a},template:`
        <ds-text-group
            :size="size"
            :color="color"
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
        />
        <div style="margin-top: 100px; color: #888">
            <ds-divider />
            <small>Use "null" in *Text props to get nullable value</small>
        </div>`}),t=x.bind({});t.args={size:r.MEDIUM,color:p.NEUTRAL,eyebrowText:"Eyebrow Uppercase Veritatis aspernatur cupiditate magnam quidem",eyebrowTextEllipsis:!1,isEyebrowTextUppercase:!0,mainText:"Main text Veritatis aspernatur cupiditate magnam quidem",mainTextEllipsis:!1,supportingText:"Eaque cumque ut beatae ratione nostrum vitae nisi. Consequatur ut expedita labore quisquam impedit ullam ipsam delectus at. Veritatis aspernatur cupiditate magnam quidem.",supportingTextEllipsis:!1,isInteractive:!0,skeletonLoadingSize:n.LARGE,isSelected:!1,state:l.DEFAULT,isSupportingTextTooltipEnabled:!1,isSupportingTextTooltipEnabledOnMobile:!0,isSupportingTextTooltipAutoFilledWithContent:!0,supportingTextTooltipContent:""};t.argTypes={size:{control:"select",options:Object.values(r)},color:{control:"select",options:Object.values(p)},eyebrowText:{control:"text"},eyebrowTextEllipsis:{control:"boolean"},isEyebrowTextUppercase:{control:"boolean"},mainText:{control:"text"},mainTextEllipsis:{control:"boolean"},supportingText:{control:"text"},supportingTextEllipsis:{control:"boolean"},isInteractive:{control:"boolean"},skeletonLoadingSize:{control:"select",options:Object.values(n)},isSelected:{control:"boolean"},state:{control:"select",options:Object.values(l)},isSupportingTextTooltipEnabled:{control:"boolean"},isSupportingTextTooltipEnabledOnMobile:{control:"boolean"},isSupportingTextTooltipAutoFilledWithContent:{control:"boolean"},supportingTextTooltipContent:{control:"text"}};t.parameters={design:{type:"figma",url:"https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=10439-30112&t=NLnObQEu7dAT74xq-0"}};var e,o,i;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`args => ({
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
            :color="color"
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
        />
        <div style="margin-top: 100px; color: #888">
            <ds-divider />
            <small>Use "null" in *Text props to get nullable value</small>
        </div>\`
})`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const y=["Interactive"];export{t as Interactive,y as __namedExportsOrder,S as default};
