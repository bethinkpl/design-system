import{P as a}from"./Pagination-ideO7Soz.js";import"./IconButton-DKdAEAea.js";import"./Icon-B79JJqqy.js";import"./vue.esm-bundler-B82wjiSt.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Button-DK14lfTl.js";import"./device-mzBmLsxe.js";import"./Dropdown-C77ALwXr.js";import"./vue-popper-CeoH2ak3.js";import"./useLegacyI18n-CQM7nz1H.js";import"./SelectList-DZZ2xEty.js";import"./SelectListItem-BJA7RJnu.js";const{useArgs:c}=__STORYBOOK_MODULE_PREVIEW_API__,I={title:"Components/Pagination",component:a},m=r=>{const[p,s]=c();return{components:{Pagination:a},setup(){return{args:r}},methods:{onChangePage(i){s({currentPage:i})}},template:`
            <Pagination v-bind="args" @change-page="onChangePage">
                <template v-if="args.accessory" #accessory>
                    <div  v-html="args.accessory" />
                </template>
            </Pagination>`}},e=m.bind({}),g={currentPage:{control:{type:"number",min:1}},forceCompact:{control:"boolean"},isLoading:{control:"boolean"},isCentered:{control:"boolean"},itemsPerPage:{control:{type:"number",min:1}},itemsTotalAmount:{control:{type:"number",min:1}},accessory:{control:"text"}};e.argTypes=g;e.args={currentPage:1,forceCompact:!1,isLoading:!1,isCentered:!1,itemsPerPage:30,itemsTotalAmount:600,accessory:"accessory slot"};e.parameters={design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=5163%3A83788&t=5NKcvxgSeUb4Ped9-4"}};var n,t,o;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`args => {
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
            <Pagination v-bind="args" @change-page="onChangePage">
                <template v-if="args.accessory" #accessory>
                    <div  v-html="args.accessory" />
                </template>
            </Pagination>\`
  };
}`,...(o=(t=e.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};const O=["Interactive"];export{e as Interactive,O as __namedExportsOrder,I as default};
