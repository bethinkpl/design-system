import{I as n}from"./Icon-BKHsOsqJ.js";import{D as a,a as c,b as r}from"./DatePicker-DWNN8pt3.js";import"./vue.esm-bundler-DcRN7CPI.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Tile-CpiZ6Id0.js";import"./iframe-CtLVeH09.js";import"../sb-preview/runtime.js";const u={title:"Components/DatePickers/DateBox",component:a,render:t=>({components:{DateBox:a},setup(){return t},data(){return{ICONS:Object.freeze(n)}},computed:{formattedStartDate(){return this.startDate?new Date(this.startDate):null},formattedEndDate(){return this.endDate?new Date(this.endDate):null}},template:`
                <div style="display: flex">
                    <date-box
                        :is-interactive="isInteractive"
                        :placeholder="placeholder"
                        :start-date="formattedStartDate"
                        :end-date="formattedEndDate"
                        :start-icon="startIcon ? ICONS[startIcon] : null"
                        :end-icon="endIcon ? ICONS[endIcon] : null"
                        :are-icons-hidden-on-mobile="areIconsHiddenOnMobile"
                        :error-message="errorMessage"
                        :state="state"
                        :color="color"
                        :is-open="isOpen"
                    />
                </div>`}),argTypes:{startDate:{control:"date"},endDate:{control:"date"},startIcon:{control:"select",options:[null,...Object.keys(n)]},endIcon:{control:"select",options:[null,...Object.keys(n)]},state:{control:"select",options:Object.values(c)},color:{control:"select",options:Object.values(r).filter(t=>t!==r.NEUTRAL)}},parameters:{design:{type:"figma",url:"https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=8502-1209&t=mHbWSeRfkspainMZ-4"}}},e={args:{isInteractive:!0,color:r.NEUTRAL_WEAK,placeholder:"Ustaw",startDate:null,endDate:null,startIcon:"FA_CALENDAR_DAY",endIcon:"FA_CALENDAR_DAY",areIconsHiddenOnMobile:!1,errorMessage:"",state:c.DEFAULT,isOpen:!1}};var o,s,l;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    isInteractive: true,
    color: DATE_PICKER_COLORS.NEUTRAL_WEAK,
    placeholder: 'Ustaw',
    startDate: null,
    endDate: null,
    startIcon: 'FA_CALENDAR_DAY',
    endIcon: 'FA_CALENDAR_DAY',
    areIconsHiddenOnMobile: false,
    errorMessage: '',
    state: DATE_PICKER_STATES.DEFAULT,
    isOpen: false
  } as Args
}`,...(l=(s=e.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const E=["Interactive"];export{e as Interactive,E as __namedExportsOrder,u as default};
