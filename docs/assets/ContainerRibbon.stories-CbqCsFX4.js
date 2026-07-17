import{D as o,C as r,a,b as i,c as R}from"./ContainerRibbon-iedRlmu8.js";import"./vue.esm-bundler-yuXcNhMB.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const l={title:"Components/ContainerRibbon",component:o,render:c=>({components:{ContainerRibbon:o},setup(){return{args:c}},template:`
            <div style="width: 120px; height: 120px; display: flex;">
                <ContainerRibbon v-bind="args" />
            </div>
        `}),argTypes:{size:{control:"select",options:Object.values(R)},color:{control:"select",options:Object.values(i)},layout:{control:"select",options:Object.values(a)},radius:{control:"select",options:Object.values(r)}}},e={args:{size:R.LARGE,color:i.NEUTRAL,layout:a.VERTICAL,radius:r.NONE}};e.parameters={design:{type:"figma",url:"https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=8468-25270&m=dev"}};var t,s,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    size: CONTAINER_RIBBON_SIZES.LARGE,
    color: CONTAINER_RIBBON_COLORS.NEUTRAL,
    layout: CONTAINER_RIBBON_LAYOUTS.VERTICAL,
    radius: CONTAINER_RIBBON_RADIUSES.NONE
  }
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const p=["Interactive"];export{e as Interactive,p as __namedExportsOrder,l as default};
