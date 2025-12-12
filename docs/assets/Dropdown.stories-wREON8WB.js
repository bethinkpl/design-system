import{D as i,a,b as r,c as l}from"./Dropdown-C8e7wlm1.js";import{S as c}from"./SelectList-DL7--W0V.js";import{S as p}from"./SelectListItem-2wPeeCwI.js";import"./vue-popper-JYnG7Eu3.js";import"./vue.esm-bundler-C98R7Ujk.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Icon-DOp6a8h0.js";const D={title:"Components/Dropdown",component:i},m=n=>({components:{Dropdown:i,SelectList:c,SelectListItem:p},setup(){return n},template:`
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
    </div>`}),e=m.bind({}),d={triggerAction:l.CLICK,radius:r.BOTH,forceShow:!1,sameWidth:!1,maxHeight:"",placement:a.BOTTOM_START},g={triggerAction:{control:"select",options:Object.values(l)},radius:{control:"select",options:Object.values(r)},placement:{control:"select",options:Object.values(a)},maxHeight:{control:"text"}};e.argTypes=g;e.args=d;e.parameters={design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=4010%3A69857"}};var t,o,s;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`args => ({
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
})`,...(s=(o=e.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const T=["Interactive"];export{e as Interactive,T as __namedExportsOrder,D as default};
