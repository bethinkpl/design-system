import{C as o,a,b as n,c as i,d as c}from"./ContainerRibbon-BdqIxAt4.js";import"./vue.esm-bundler-DJk5tYYm.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const l={title:"Components/ContainerRibbon",component:o,render:N=>({components:{ContainerRibbon:o},setup(){return{args:N}},template:`
            <div style="width: 120px; height: 120px; display: flex;">
                <ContainerRibbon v-bind="args" />
            </div>
        `}),argTypes:{size:{control:"select",options:Object.values(c)},color:{control:"select",options:Object.values(i)},layout:{control:"select",options:Object.values(n)},radius:{control:"select",options:Object.values(a)}}},e={args:{size:c.LARGE,color:i.NEUTRAL,layout:n.VERTICAL,radius:a.NONE}};e.parameters={design:{type:"figma",url:"https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=8468-25270&m=dev"}};var t,s,r;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    size: CONTAINER_RIBBON_SIZES.LARGE,
    color: CONTAINER_RIBBON_COLORS.NEUTRAL,
    layout: CONTAINER_RIBBON_LAYOUTS.VERTICAL,
    radius: CONTAINER_RIBBON_RADIUSES.NONE
  }
}`,...(r=(s=e.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};const p=["Interactive"];export{e as Interactive,p as __namedExportsOrder,l as default};
