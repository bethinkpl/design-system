import{D as l,M as o,a}from"./MenuItem-BAiOh289.js";import{M as s}from"./MenuDivider-CDYX-U_4.js";import"./vue.esm-bundler-S9zc6Wpc.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Icon-BCNBiMEg.js";import"./fontawesome-CXWUXLFT.js";import"./IconButton-BP3MsFJS.js";import"./Button-C24VVysr.js";import"./device-mzBmLsxe.js";import"./Divider-Cfx8bFqy.js";const f={title:"Components/Menu/Menu",component:l},i=r=>({components:{DsMenu:l,MenuItem:o,MenuDivider:s},setup(){return r},template:`
        <ds-menu :layout="layout" >
            <menu-item label="level 1" />
            <menu-item label="level 1" />
            <menu-divider />
            <menu-item label="level 1" />
            <menu-item label="level 1" >
                <template #children>
                    <ds-menu>
                        <menu-item label="level 2" />
                    </ds-menu>
                </template>
            </menu-item>
            <menu-item label="level 1" />
        </ds-menu>`}),e=i.bind({}),u={layout:{control:"select",options:Object.values(a)}};e.args={layout:a.DEFAULT};e.argTypes=u;e.parameters={design:{type:"figma",url:"https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=15355-7663&m=dev"}};var n,t,m;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`args => ({
  components: {
    DsMenu,
    MenuItem,
    MenuDivider
  },
  setup() {
    return args;
  },
  template: \`
        <ds-menu :layout="layout" >
            <menu-item label="level 1" />
            <menu-item label="level 1" />
            <menu-divider />
            <menu-item label="level 1" />
            <menu-item label="level 1" >
                <template #children>
                    <ds-menu>
                        <menu-item label="level 2" />
                    </ds-menu>
                </template>
            </menu-item>
            <menu-item label="level 1" />
        </ds-menu>\`
})`,...(m=(t=e.parameters)==null?void 0:t.docs)==null?void 0:m.source}}};const S=["Interactive"];export{e as Interactive,S as __namedExportsOrder,f as default};
