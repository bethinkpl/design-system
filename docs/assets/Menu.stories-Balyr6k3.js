import{D as l,M as s,a}from"./MenuItem-BByO0CbO.js";import{M as o}from"./MenuDivider-DoXCd9dI.js";import"./vue.esm-bundler-CXPnezKh.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Icon-oTYEsZAB.js";import"./IconButton-xbDIoPT0.js";import"./Button-Kce8Ha0I.js";import"./device-9fgosCm4.js";import"./Divider-CytxH5-u.js";const I={title:"Components/Menu/Menu",component:l},u=r=>({components:{DsMenu:l,MenuItem:s,MenuDivider:o},setup(){return r},template:`
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
        </ds-menu>`}),e=u.bind({}),i={layout:{control:"select",options:Object.values(a)}};e.args={layout:a.DEFAULT};e.argTypes=i;e.parameters={design:{type:"figma",url:"https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=15355-7663&m=dev"}};var n,t,m;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`args => ({
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
})`,...(m=(t=e.parameters)==null?void 0:t.docs)==null?void 0:m.source}}};const f=["Interactive"];export{e as Interactive,f as __namedExportsOrder,I as default};
