import{P as o}from"./Pagination-JlS_MH0D.js";import"./IconButton-M8bwqP9X.js";import"./Icon-ZJHMCHB3.js";import"./vue.esm-bundler-DcRN7CPI.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Button-jnh2Tlf-.js";import"./device-9fgosCm4.js";import"./Dropdown-Bdrd2ZIh.js";import"./vue-popper-m_ujT3wC.js";import"./SelectList-YMQ8rEMc.js";import"./SelectListItem-BlPwpwLF.js";const{useArgs:c}=__STORYBOOK_MODULE_PREVIEW_API__,A={title:"Components/Pagination",component:o},m=r=>{const[p,s]=c();return{components:{Pagination:o},setup(){return{args:r}},methods:{onChangePage(i){s({currentPage:i})}},template:`
            <Pagination v-bind=args @change-page="onChangePage">
                <template #accessory>
                    <div v-if="args.accessory" v-html="args.accessory" />
                </template>
            </Pagination>`}},e=m.bind({}),g={currentPage:{control:{type:"number",min:1}},forceCompact:{control:"boolean"},isCentered:{control:"boolean"},itemsPerPage:{control:{type:"number",min:1}},itemsTotalAmount:{control:{type:"number",min:1}},accessory:{control:"text"}};e.argTypes=g;e.args={currentPage:1,forceCompact:!1,isCentered:!1,itemsPerPage:30,itemsTotalAmount:600,accessory:"accessory slot"};e.parameters={design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=5163%3A83788&t=5NKcvxgSeUb4Ped9-4"}};var t,n,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`args => {
  const [_, updateArgs] = useArgs();
  return {
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
  };
}`,...(a=(n=e.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const I=["Interactive"];export{e as Interactive,I as __namedExportsOrder,A as default};
