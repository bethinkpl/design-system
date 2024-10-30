import{D as u}from"./Divider-BPqXVinF.js";import{D as o,T as l,a as r,b as a,c as n}from"./TextGroup-DrSbeVN2.js";import"./vue.esm-bundler-DiF7B9b7.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Skeleton-yR2iGt-A.js";const b={title:"Components/TextGroup",component:o},c=p=>({components:{DsDivider:u,DsTextGroup:o},setup(){return p},template:`
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
        </div>`}),e=c.bind({});e.args={size:l.MEDIUM,color:r.NEUTRAL,eyebrowText:"Eyebrow Uppercase Veritatis aspernatur cupiditate magnam quidem",eyebrowTextEllipsis:!1,isEyebrowTextUppercase:!0,mainText:"Main text Veritatis aspernatur cupiditate magnam quidem",mainTextEllipsis:!1,supportingText:"Eaque cumque ut beatae ratione nostrum vitae nisi. Consequatur ut expedita labore quisquam impedit ullam ipsam delectus at. Veritatis aspernatur cupiditate magnam quidem.",supportingTextEllipsis:!1,isInteractive:!0,skeletonLoadingSize:a.LARGE,isSelected:!1,state:n.DEFAULT};e.argTypes={size:{control:"select",options:Object.values(l)},color:{control:"select",options:Object.values(r)},eyebrowText:{control:"text"},eyebrowTextEllipsis:{control:"boolean"},isEyebrowTextUppercase:{control:"boolean"},mainText:{control:"text"},mainTextEllipsis:{control:"boolean"},supportingText:{control:"text"},supportingTextEllipsis:{control:"boolean"},isInteractive:{control:"boolean"},skeletonLoadingSize:{control:"select",options:Object.values(a)},isSelected:{control:"boolean"},state:{control:"select",options:Object.values(n)}};e.parameters={design:{type:"figma",url:"https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=10439-30112&t=NLnObQEu7dAT74xq-0"}};var t,s,i;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`args => ({
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
})`,...(i=(s=e.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const E=["Interactive"];export{e as Interactive,E as __namedExportsOrder,b as default};
