import{D as i,a,b as r,c as l}from"./Dropdown-vkyblifO.js";import{S as c}from"./SelectList-IYj9X3z5.js";import{S as p}from"./SelectListItem-DxlYAAqR.js";import"./vue-popper-CgJSQDC2.js";import"./_commonjsHelpers-CDR5Xrri.js";import"./vue.esm-bundler-CC_vsnCp.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Icon-BxW-ny3A.js";const T={title:"Components/Dropdown",component:i},m=n=>({components:{Dropdown:i,SelectList:c,SelectListItem:p},setup(){return n},template:`
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
})`,...(s=(o=e.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const I=["Interactive"];export{e as Interactive,I as __namedExportsOrder,T as default};
