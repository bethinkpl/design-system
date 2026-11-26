import{t as c}from"./vue.esm-bundler-S9zc6Wpc.js";import{_ as o}from"./HelpButton-AOedB5Rv.js";import{M as f,a as m}from"./Modal-3-iKun9o.js";import{D as u,B as S}from"./Banner-DBrnx5vO.js";import"./IconButton-BP3MsFJS.js";import"./Icon-BCNBiMEg.js";import"./fontawesome-CXWUXLFT.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Button-C24VVysr.js";import"./device-mzBmLsxe.js";import"./Tooltip-DGxAUyqd.js";import"./useLegacyI18n-V_RMslSR.js";import"./FeatureIcon-CCm0-VHM.js";import"./Divider-Cfx8bFqy.js";const H={title:"Components/Buttons/HelpButton",component:o,render:i=>({components:{HelpButton:o,Modal:f,DsBanner:u},setup(){const{tooltipText:n,modalTitle:s,modalContent:r,modalSize:p,isDisabled:d}=c(i);return{tooltipText:n,isDisabled:d,modalTitle:s,modalContent:r,modalSize:p,BANNER_COLORS:S}},template:`<HelpButton :tooltip-text="tooltipText" :modal-title="modalTitle" :modal-size="modalSize" :is-disabled="isDisabled">
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
}`,...(l=(a=t.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};const L=["Interactive"];export{t as Interactive,L as __namedExportsOrder,H as default};
