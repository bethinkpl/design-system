import{S as s}from"./SelectListItemContainer-BVO32JAK.js";import{b as a,d as o}from"./Tile-CUH2feL-.js";import"./vue.esm-bundler-BEu-HfQJ.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Icon-T64bViws.js";const p={title:"Components/SelectList/SelectListItemContainer",component:s},r=()=>({components:{SelectListItemContainer:s,DsTile:o},template:`
<select-list-item-container>
    <ds-tile
        text="this is a text text"
        eyebrow-text="this is an eyebrowText text"
        additional-text="this is some additionalText"
        :interactive="false"
        :state="TILE_STATES.DEFAULT"
    />
</select-list-item-container>
    `,data:()=>({TILE_STATES:a})}),t=r.bind({});t.parameters={design:{type:"figma",url:"https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=5367-94238&m=dev"}};var e,i,n;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`() => ({
  components: {
    SelectListItemContainer,
    DsTile: Tile
  },
  template: \`
<select-list-item-container>
    <ds-tile
        text="this is a text text"
        eyebrow-text="this is an eyebrowText text"
        additional-text="this is some additionalText"
        :interactive="false"
        :state="TILE_STATES.DEFAULT"
    />
</select-list-item-container>
    \`,
  data: () => ({
    TILE_STATES
  })
})`,...(n=(i=t.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};const x=["Default"];export{t as Default,x as __namedExportsOrder,p as default};
