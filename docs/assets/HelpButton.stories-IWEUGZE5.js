import{t as c}from"./vue.esm-bundler-Dauw-loN.js";import{_ as o}from"./HelpButton-Dz29ptAb.js";import{M as f,a as m}from"./Modal-CHkItIDS.js";import{D as u,B as S}from"./Banner-BXA5BUu0.js";import"./IconButton-BCEo1-Pu.js";import"./Icon-CgiTwonM.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Button-CaO3uHjI.js";import"./device-mzBmLsxe.js";import"./Tooltip-CdLjtN7C.js";import"./useLegacyI18n-BIaJbRkl.js";import"./FeatureIcon-DKTQ5UNF.js";import"./Divider-KZoliOA5.js";const E={title:"Components/Buttons/HelpButton",component:o,render:i=>({components:{HelpButton:o,Modal:f,DsBanner:u},setup(){const{tooltipText:n,modalTitle:s,modalContent:r,modalSize:d,isDisabled:p}=c(i);return{tooltipText:n,isDisabled:p,modalTitle:s,modalContent:r,modalSize:d,BANNER_COLORS:S}},template:`<HelpButton :tooltip-text="tooltipText" :modal-title="modalTitle" :modal-size="modalSize" :is-disabled="isDisabled">
            <template v-if="modalContent || modalTitle" #modalContent>
                <div v-html="modalContent" />
            </template>
            <template v-else #modal="{onClose}">
                <modal @close-modal="onClose">test</modal>
            </template>
        </HelpButton>`}),argTypes:{modalTitle:{control:"text"},modalContent:{control:"text"},modalSize:{control:"select",options:Object.values(m)},isDisabled:{control:"boolean"}}},t={args:{tooltipText:"Tooltip text",isDisabled:!1,modalContent:"",modalTitle:"",modalSize:m.MEDIUM}};t.parameters={design:{type:"figma",url:"https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=13519-192453"}};var e,a,l;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    tooltipText: 'Tooltip text',
    isDisabled: false,
    modalContent: '',
    modalTitle: '',
    modalSize: MODAL_SIZES.MEDIUM
  }
}`,...(l=(a=t.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};const H=["Interactive"];export{t as Interactive,H as __namedExportsOrder,E as default};
