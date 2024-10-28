import{P as o}from"./Pagination-dSOJSh7t.js";import"./IconButton-COzU-vlz.js";import"./Icon-BiVaixmr.js";import"./vue.esm-bundler-BSCmGRHc.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Button-CBZkgukP.js";import"./device-9fgosCm4.js";import"./Dropdown-BfX0EVaK.js";import"./vue-popper-BJbr8Gin.js";import"./_commonjsHelpers-Chg3vePA.js";import"./SelectList-CTXM5G8Z.js";import"./SelectListItem-_c4CA-YM.js";const{useArgs:c}=__STORYBOOK_MODULE_PREVIEW_API__,I={title:"Components/Pagination",component:o},m=r=>{const[p,s]=c();return{components:{Pagination:o},setup(){return{args:r}},methods:{onChangePage(i){s({currentPage:i})}},template:`
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
}`,...(a=(n=e.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const O=["Interactive"];export{e as Interactive,O as __namedExportsOrder,I as default};
