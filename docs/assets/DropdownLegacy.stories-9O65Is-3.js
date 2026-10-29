import{D as a,a as i,b as r,c}from"./DropdownLegacy-BEEi2sEB.js";import{S as n}from"./SelectList-Df3d7moM.js";import{S as p}from"./SelectListItem-bHwieP_d.js";import"./vue-popper-Cmpvh8Ld.js";import"./vue.esm-bundler-DeRiNcSr.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Icon-QFU__4e-.js";const L={title:"Components/DropdownLegacy",component:a},m=l=>({components:{DropdownLegacy:a,SelectList:n,SelectListItem:p},setup(){return l},template:`
    <div style="position: relative">
      <dropdown-legacy :trigger-action="triggerAction"
                :force-show="forceShow"
                :same-width="sameWidth"
                :radius="radius"
                :placement="placement"
                :max-height="maxHeight">
        <template #reference="{ isOpened }"><span>DropdownLegacy entry point {{ isOpened ? 'opened' : 'closed' }}</span>
        </template>
        <template #default="{ close }">
          <select-list>
            <select-list-item label="One" @click.native="close" />
            <select-list-item label="Two" @click.native="close" />
          </select-list>
        </template>
      </dropdown-legacy>
    </div>`}),e=m.bind({}),d={triggerAction:c.CLICK,radius:i.BOTH,forceShow:!1,sameWidth:!1,maxHeight:"",placement:r.BOTTOM_START},g={triggerAction:{control:"select",options:Object.values(c)},radius:{control:"select",options:Object.values(i)},placement:{control:"select",options:Object.values(r)},maxHeight:{control:"text"}};e.argTypes=g;e.args=d;e.parameters={design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=4010%3A69857"}};var t,o,s;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`args => ({
  components: {
    DropdownLegacy,
    SelectList,
    SelectListItem
  },
  setup() {
    return args;
  },
  template: \`
    <div style="position: relative">
      <dropdown-legacy :trigger-action="triggerAction"
                :force-show="forceShow"
                :same-width="sameWidth"
                :radius="radius"
                :placement="placement"
                :max-height="maxHeight">
        <template #reference="{ isOpened }"><span>DropdownLegacy entry point {{ isOpened ? 'opened' : 'closed' }}</span>
        </template>
        <template #default="{ close }">
          <select-list>
            <select-list-item label="One" @click.native="close" />
            <select-list-item label="Two" @click.native="close" />
          </select-list>
        </template>
      </dropdown-legacy>
    </div>\`
})`,...(s=(o=e.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const v=["Interactive"];export{e as Interactive,v as __namedExportsOrder,L as default};
