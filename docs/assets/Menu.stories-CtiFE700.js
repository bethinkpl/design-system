import{D as l,M as s,a}from"./MenuItem-DsQ4NfuV.js";import{M as o}from"./MenuDivider-DMHSgKbd.js";import"./vue.esm-bundler-BEu-HfQJ.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Icon-T64bViws.js";import"./IconButton-CaJzWnDf.js";import"./Button-BWrwGqVh.js";import"./device-mzBmLsxe.js";import"./Divider-Cj9DnfEY.js";const I={title:"Components/Menu/Menu",component:l},u=r=>({components:{DsMenu:l,MenuItem:s,MenuDivider:o},setup(){return r},template:`
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
