import{D as m,M as u,a}from"./MenuItem-fAgKQlyz.js";import{M as r}from"./MenuDivider-CkEnsgQA.js";import"./vue.esm-bundler-ByLATHYC.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Icon-DsmK7y8n.js";import"./Divider-DibbBBgz.js";const g={title:"Components/Menu/Menu",component:m},o=s=>({components:{DsMenu:m,MenuItem:u,MenuDivider:r},setup(){return s},template:`
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
        </ds-menu>`}),e=o.bind({}),i={layout:{control:"select",options:Object.values(a)}};e.args={layout:a.DEFAULT};e.argTypes=i;e.parameters={design:{type:"figma",url:"https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=15355-7663&m=dev"}};var n,t,l;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`args => ({
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
})`,...(l=(t=e.parameters)==null?void 0:t.docs)==null?void 0:l.source}}};const y=["Interactive"];export{e as Interactive,y as __namedExportsOrder,g as default};
