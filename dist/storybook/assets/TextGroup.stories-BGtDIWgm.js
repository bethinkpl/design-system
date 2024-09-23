import{D as a}from"./Divider-Ba-XwrF-.js";import{D as t,T as s,a as i,b as o,c as l}from"./TextGroup-C_AdPfoL.js";import"./vue.esm-bundler-Bq1ZKmuF.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Skeleton-BrRagspw.js";const T={title:"Components/TextGroup",component:t},n=r=>({components:{DsDivider:a,DsTextGroup:t},setup(){return r},template:`
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
        />
        <div style="margin-top: 100px; color: #888">
            <ds-divider />
            <small>Use "null" in *Text props to get nullable value</small>
        </div>`}),e=n.bind({});e.args={size:s.MEDIUM,color:i.NEUTRAL,eyebrowText:"Eyebrow Uppercase Veritatis aspernatur cupiditate magnam quidem",eyebrowTextEllipsis:!1,isEyebrowTextUppercase:!0,mainText:"Main text Veritatis aspernatur cupiditate magnam quidem",mainTextEllipsis:!1,supportingText:"Eaque cumque ut beatae ratione nostrum vitae nisi. Consequatur ut expedita labore quisquam impedit ullam ipsam delectus at. Veritatis aspernatur cupiditate magnam quidem.",supportingTextEllipsis:!1,isInteractive:!0,skeletonLoadingSize:o.LARGE,isSelected:!1,state:l.DEFAULT};e.argTypes={size:{control:"select",options:Object.values(s)},color:{control:"select",options:Object.values(i)},eyebrowText:{control:"text"},eyebrowTextEllipsis:{control:"boolean"},isEyebrowTextUppercase:{control:"boolean"},mainText:{control:"text"},mainTextEllipsis:{control:"boolean"},supportingText:{control:"text"},supportingTextEllipsis:{control:"boolean"},isInteractive:{control:"boolean"},skeletonLoadingSize:{control:"select",options:Object.values(o)},isSelected:{control:"boolean"},state:{control:"select",options:Object.values(l)}};e.parameters={design:{type:"figma",url:"https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=10439-30112&t=NLnObQEu7dAT74xq-0"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => ({
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
        />
        <div style="margin-top: 100px; color: #888">
            <ds-divider />
            <small>Use "null" in *Text props to get nullable value</small>
        </div>\`
})`,...e.parameters?.docs?.source}}};const d=["Interactive"];export{e as Interactive,d as __namedExportsOrder,T as default};
