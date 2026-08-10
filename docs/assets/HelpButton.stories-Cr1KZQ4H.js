import{t as c}from"./vue.esm-bundler-yuXcNhMB.js";import{_ as o}from"./HelpButton-Bx0ABS5g.js";import{M as f,a as m}from"./Modal-OnCQN5QA.js";import{D as u,B as S}from"./Banner-VWUeLOVQ.js";import"./IconButton-CbmoYOmP.js";import"./Icon-B4tHv4zx.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Button-B7yXy-7T.js";import"./device-mzBmLsxe.js";import"./Tooltip-CFsl4BrK.js";import"./useLegacyI18n-DK3QJ9_8.js";import"./FeatureIcon-YzcsgLbs.js";import"./Divider-BPKGZVAH.js";const E={title:"Components/Buttons/HelpButton",component:o,render:i=>({components:{HelpButton:o,Modal:f,DsBanner:u},setup(){const{tooltipText:n,modalTitle:s,modalContent:r,modalSize:d,isDisabled:p}=c(i);return{tooltipText:n,isDisabled:p,modalTitle:s,modalContent:r,modalSize:d,BANNER_COLORS:S}},template:`<HelpButton :tooltip-text="tooltipText" :modal-title="modalTitle" :modal-size="modalSize" :is-disabled="isDisabled">
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
