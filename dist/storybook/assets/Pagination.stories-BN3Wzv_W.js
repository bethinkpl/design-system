import{P as t}from"./Pagination-BgqtA7Nk.js";import"./IconButton-o4H-Dbj2.js";import"./Icon-CVHceNst.js";import"./vue.esm-bundler-Bq1ZKmuF.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Button-Cbw2_9er.js";import"./Dropdown-CNZx4bM2.js";import"./vue-popper-BZ-flBra.js";import"./_commonjsHelpers-C4iS2aBk.js";import"./SelectList-BiYiZ8_O.js";import"./SelectListItem-B5BpBuxD.js";const h={title:"Components/Pagination",component:t},r=(n,{updateArgs:a})=>({components:{Pagination:t},setup(){return{args:n}},methods:{onChangePage(o){a({currentPage:o})}},template:`
        <Pagination v-bind=args @change-page="onChangePage">
            <template #accessory>
                <div v-if="args.accessory" v-html="args.accessory" />
            </template>
        </Pagination>`}),e=r.bind({}),s={currentPage:{control:{type:"number",min:1}},forceCompact:{control:"boolean"},isCentered:{control:"boolean"},itemsPerPage:{control:{type:"number",min:1}},itemsTotalAmount:{control:{type:"number",min:1}},accessory:{control:"text"}};e.argTypes=s;e.args={currentPage:1,forceCompact:!1,isCentered:!1,itemsPerPage:30,itemsTotalAmount:600,accessory:"accessory slot"};e.parameters={design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=5163%3A83788&t=5NKcvxgSeUb4Ped9-4"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`(args, {
  updateArgs
}) => ({
  components: {
    Pagination
  },
  setup() {
    return {
      args
    };
  },
  methods: {
    onChangePage(currentPage) {
      updateArgs({
        currentPage
      });
    }
  },
  template: \`
        <Pagination v-bind=args @change-page="onChangePage">
            <template #accessory>
                <div v-if="args.accessory" v-html="args.accessory" />
            </template>
        </Pagination>\`
})`,...e.parameters?.docs?.source}}};const v=["Interactive"];export{e as Interactive,v as __namedExportsOrder,h as default};
