import{t as c}from"./vue.esm-bundler-ByLATHYC.js";import{_ as o}from"./HelpButton-f4asTM4P.js";import{M as u,a as i}from"./Modal-BeNNtprW.js";import{D as S,B as w}from"./Banner-SFV4WrWB.js";import"./IconButton-Cw2jxV2R.js";import"./Icon-Kh1XjJ1-.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Button-BNHTyiKB.js";import"./device-9fgosCm4.js";import"./Tooltip-B2ZtAco5.js";import"./useLegacyI18n-Lhj0cz5x.js";import"./FeatureIcon-Cjf43l4V.js";import"./Divider-DibbBBgz.js";const _={title:"Components/Buttons/HelpButton",component:o,render:m=>({components:{HelpButton:o,Modal:u,DsBanner:S},setup(){const{tooltipText:n,modalTitle:s,modalContent:r,modalSize:d,isDisabled:p}=c(m);return{tooltipText:n,isDisabled:p,modalTitle:s,modalContent:r,modalSize:d,BANNER_COLORS:w}},template:`<HelpButton :tooltip-text="tooltipText" :modal-title="modalTitle" :modal-size="modalSize" :is-disabled="isDisabled">
            <template v-if="modalContent || modalTitle" #modalContent>
                <div v-html="modalContent" />
            </template>
            <template v-else #modal="{onClose}">
                <modal @close-modal="onClose">test</modal>
            </template>
        </HelpButton>
        <ds-banner style="margin-top: 20px;" :color="BANNER_COLORS.WARNING" title="Uwaga, z uwagi na brak lokalizacji w DS, na Modalu (tworzonym za pomocą propsa modalTitle i slota modalContent) nie wyświetla się Button w footerze do zamykania modala. Poprawimy to w ramach LMS-2762. Jako alternatywa można skorzystać ze slota modal i wstawić do modala co się chce ;)" />`}),argTypes:{modalTitle:{control:"text"},modalContent:{control:"text"},modalSize:{control:"select",options:Object.values(i)},isDisabled:{control:"boolean"}}},t={args:{tooltipText:"Tooltip text",isDisabled:!1,modalContent:"",modalTitle:"",modalSize:i.MEDIUM}};t.parameters={design:{type:"figma",url:"https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=13519-192453"}};var e,a,l;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    tooltipText: 'Tooltip text',
    isDisabled: false,
    modalContent: '',
    modalTitle: '',
    modalSize: MODAL_SIZES.MEDIUM
  }
}`,...(l=(a=t.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};const v=["Interactive"];export{t as Interactive,v as __namedExportsOrder,_ as default};
