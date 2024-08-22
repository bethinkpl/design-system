import{D as t,a as o,b as s,c as i}from"./Dropdown-CNZx4bM2.js";import{S as r}from"./SelectList-BiYiZ8_O.js";import{S as l}from"./SelectListItem-B5BpBuxD.js";import"./vue-popper-BZ-flBra.js";import"./_commonjsHelpers-C4iS2aBk.js";import"./vue.esm-bundler-Bq1ZKmuF.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Icon-CVHceNst.js";const S={title:"Components/Dropdown",component:t},n=a=>({components:{Dropdown:t,SelectList:r,SelectListItem:l},setup(){return a},template:`
    <div style="position: relative">
      <dropdown :trigger-action="triggerAction"
                :force-show="forceShow"
                :same-width="sameWidth"
                :radius="radius"
                :placement="placement"
                :max-height="maxHeight">
        <template #reference="{ isOpened }"><span>Dropdown entry point {{ isOpened ? 'opened' : 'closed' }}</span>
        </template>
        <template #default="{ close }">
          <select-list>
            <select-list-item label="One" @click.native="close" />
            <select-list-item label="Two" @click.native="close" />
          </select-list>
        </template>
      </dropdown>
    </div>`}),e=n.bind({}),c={triggerAction:o.CLICK,radius:s.BOTH,forceShow:!1,sameWidth:!1,maxHeight:"",placement:i.BOTTOM_START},p={triggerAction:{control:"select",options:Object.values(o)},radius:{control:"select",options:Object.values(s)},placement:{control:"select",options:Object.values(i)},maxHeight:{control:"text"}};e.argTypes=p;e.args=c;e.parameters={design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=4010%3A69857"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => ({
  components: {
    Dropdown,
    SelectList,
    SelectListItem
  },
  setup() {
    return args;
  },
  template: \`
    <div style="position: relative">
      <dropdown :trigger-action="triggerAction"
                :force-show="forceShow"
                :same-width="sameWidth"
                :radius="radius"
                :placement="placement"
                :max-height="maxHeight">
        <template #reference="{ isOpened }"><span>Dropdown entry point {{ isOpened ? 'opened' : 'closed' }}</span>
        </template>
        <template #default="{ close }">
          <select-list>
            <select-list-item label="One" @click.native="close" />
            <select-list-item label="Two" @click.native="close" />
          </select-list>
        </template>
      </dropdown>
    </div>\`
})`,...e.parameters?.docs?.source}}};const v=["Interactive"];export{e as Interactive,v as __namedExportsOrder,S as default};
