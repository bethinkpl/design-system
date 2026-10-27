import{P as r}from"./Pagination-Bjq-52Qw.js";import"./IconButton-DPCw5IX6.js";import"./Icon-QFU__4e-.js";import"./vue.esm-bundler-DeRiNcSr.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Button-4WEdqI-U.js";import"./device-mzBmLsxe.js";import"./Dropdown-DnnVZ6l4.js";import"./PopoverTriggerReference-DU9WjlMc.js";import"./Primitive-DQnq458G.js";import"./index-BxAcIQAY.js";import"./PopperContent-DKUWvcUs.js";import"./Presence-Ccu_tC1V.js";import"./useLegacyI18n-AnNgdHoQ.js";import"./SelectList-Df3d7moM.js";import"./SelectListItem-bHwieP_d.js";const{useArgs:c}=__STORYBOOK_MODULE_PREVIEW_API__,x={title:"Components/Pagination",component:r},m=a=>{const[g,s]=c();return{components:{Pagination:r},setup(){return{args:a}},methods:{onChangePage(i){s({currentPage:i})}},template:`
            <Pagination v-bind="args" @change-page="onChangePage">
                <template v-if="args.accessory" #accessory>
                    <div  v-html="args.accessory" />
                </template>
            </Pagination>`}},e=m.bind({}),p={currentPage:{control:{type:"number",min:1}},forceCompact:{control:"boolean"},isLoading:{control:"boolean"},isCentered:{control:"boolean"},itemsPerPage:{control:{type:"number",min:1}},itemsTotalAmount:{control:{type:"number",min:1}},accessory:{control:"text"}};e.argTypes=p;e.args={currentPage:1,forceCompact:!1,isLoading:!1,isCentered:!1,itemsPerPage:30,itemsTotalAmount:600,accessory:"accessory slot"};e.parameters={design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=5163%3A83788&t=5NKcvxgSeUb4Ped9-4"}};var t,n,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`args => {
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const E=["Interactive"];export{e as Interactive,E as __namedExportsOrder,x as default};
