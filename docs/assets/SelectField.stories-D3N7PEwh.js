import{c as K}from"./vue.esm-bundler-vCYTN4Ic.js";import{w as J}from"./decorator-dmUe8Ksx.js";import{S as c}from"./SelectField-BVLxtYKy.js";import{_ as Q}from"./HelpButton-DN4-1B_0.js";import{M as Y}from"./Modal-DYHKUM3F.js";import{I as s}from"./Icon-DTVXTHLv.js";import{a as $,b as X}from"./FormField.stories.shared-RIdVWHED.js";import{F as m}from"./FormFieldMessage-PaQjjKIp.js";import"./v4-CwV2VaSl.js";import"./VisuallyHidden-D4rawdGf.js";import"./index-Bp3klHO6.js";import"./FormField-B6QDh-V3.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useFormFieldWithinForm-cN2WH23R.js";import"./SelectList-DWdxPloD.js";import"./SelectListItemDivider-BLFjmzE0.js";import"./Divider-CNFUE6e5.js";import"./SelectListSectionTitle-DVRiWIR2.js";import"./SelectListItem-Cs4bBCTW.js";import"./IconButton-DwJOxZO_.js";import"./Button-Ci0iFb84.js";import"./device-mzBmLsxe.js";import"./Tooltip-Df-_Qx0e.js";import"./useLegacyI18n-Do6UFLBh.js";import"./FeatureIcon-BSViPktd.js";const Z=[{value:"pl",label:"Polska"},{value:"de",label:"Niemcy"},{value:"cz",label:"Czechy"},{value:"sk",label:"Słowacja",isDisabled:!0},{value:"jp",label:"Japonia"}],q=[{value:"all",label:"Wszystkie kraje"},{label:"Europa",options:[{value:"pl",label:"Polska"},{value:"de",label:"Niemcy"},{value:"cz",label:"Czechy"}]},{label:"Azja",options:[{value:"jp",label:"Japonia"},{value:"kr",label:"Korea Południowa"}]}],V=[{value:"draft",label:"Szkic",eyebrowText:"Status",iconLeft:s.FA_PENCIL},{value:"published",label:"Opublikowany",eyebrowText:"Status",iconLeft:s.FA_CHECK_SOLID},{value:"archived",label:"Zarchiwizowany",eyebrowText:"Status",iconLeft:s.FA_BOX}],U=Array.from({length:30},(a,i)=>({value:`option-${i+1}`,label:`Opcja numer ${i+1}`})),ee=[{value:"anatomia",label:"Anatomia prawidłowa człowieka z elementami histologii"},{value:"biochemia",label:"Biochemia kliniczna i diagnostyka laboratoryjna"},{value:"farmakologia",label:"Farmakologia z toksykologią dla kierunku lekarskiego"},{value:"short",label:"Krótka nazwa"},{value:"bardzo-dlugi",label:"Wyjątkowo długa nazwa kursu, która nie zmieści się w dostępnej szerokości okna i zostanie skrócona wielokropkiem"}];function ae(a){return typeof a=="string"&&a.trim()!==""&&!Number.isNaN(Number(a))?Number(a):a}const Fe={title:"Components/Form/SelectField",component:c,decorators:[J],render:a=>({components:{SelectField:c,HelpButton:Q,Modal:Y},setup(){const i=K(()=>{const{help:te,labelAside:re,message:oe,fieldStatus:se,...u}=a;return{...u,maxHeight:ae(u.maxHeight)}});return{args:a,props:i,FORM_FIELD_STATES:m,ICONS:s}},data:()=>({value:void 0}),template:`<SelectField v-bind="props" :left-icon="props.leftIcon ? ICONS[props.leftIcon] : null" v-model="value">
            <template v-if="args.help" #help>
                <HelpButton :is-disabled="props.state === FORM_FIELD_STATES.DISABLED" modal-title="Help modal title">
                    <template #modalContent>
                        Modal
                    </template>
                </HelpButton>
            </template>
            <template #labelAside v-if="args.labelAside">
                <div v-html="args.labelAside" />
            </template>
            <template #fieldStatus v-if="args.fieldStatus">
                <div v-html="args.fieldStatus" />
            </template>
            <template #message v-if="args.message">
                <div v-html="args.message" />
            </template>
        </SelectField>`}),argTypes:{...$,options:{control:"object"},placeholder:{control:"text"},leftIcon:{control:"select",options:[null,...Object.keys(s)]},ariaLabel:{control:"text"},maxHeight:{control:"text"},isGroupLabelUppercase:{control:"boolean"},autocomplete:{control:"text"}}},e={args:{...X,options:Z,placeholder:"Wybierz kraj",leftIcon:null,isGroupLabelUppercase:!0},parameters:{design:{type:"figma",url:"https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=13216-6915"}}},l={...e,args:{...e.args,options:q},parameters:{}},n={...e,args:{...e.args,options:V,placeholder:"Wybierz status"},parameters:{}},t={render:a=>({components:{SelectField:c},setup(){return{args:a}},data:()=>({value:"farmakologia"}),template:`
            <div style="width: 360px;">
                <SelectField v-bind="args" v-model="value" />
            </div>
        `}),args:{label:"Kurs",placeholder:"Wybierz kurs",options:ee}},r={...e,args:{...e.args,options:U,placeholder:"Wybierz opcję"},parameters:{}},o={parameters:{layout:"fullscreen"},render:a=>({components:{SelectField:c},setup(){return{args:a}},data:()=>({value:void 0}),template:`
            <div
                style="display: flex; align-items: flex-end; box-sizing: border-box; min-height: 100vh; padding: 16px;"
            >
                <div style="width: 360px;">
                    <SelectField v-bind="args" v-model="value" />
                </div>
            </div>
        `}),args:{label:"Opcja",placeholder:"Wybierz opcję",options:U}},p={...e,args:{...e.args,state:m.DISABLED},parameters:{}},d={...e,args:{...e.args,state:m.ERROR,messageText:"Error message text"},parameters:{}};var g,h,b;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    ...args,
    options: OPTIONS,
    placeholder: 'Wybierz kraj',
    leftIcon: null,
    isGroupLabelUppercase: true
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=13216-6915'
    }
  }
}`,...(b=(h=e.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var v,f,S;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  ...Interactive,
  args: {
    ...Interactive.args,
    options: GROUPED_OPTIONS
  },
  parameters: {}
}`,...(S=(f=l.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var w,y,I;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  ...Interactive,
  args: {
    ...Interactive.args,
    options: RICH_OPTIONS,
    placeholder: 'Wybierz status'
  },
  parameters: {}
}`,...(I=(y=n.parameters)==null?void 0:y.docs)==null?void 0:I.source}}};var O,k,z,L,T;t.parameters={...t.parameters,docs:{...(O=t.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: args => ({
    components: {
      SelectField
    },
    setup() {
      return {
        args
      };
    },
    data: () => ({
      // Preselected so the trigger's ellipsis is visible without opening the dropdown.
      value: 'farmakologia'
    }),
    template: \`
            <div style="width: 360px;">
                <SelectField v-bind="args" v-model="value" />
            </div>
        \`
  }),
  args: {
    label: 'Kurs',
    placeholder: 'Wybierz kurs',
    options: LONG_LABEL_OPTIONS
  }
}`,...(z=(k=t.parameters)==null?void 0:k.docs)==null?void 0:z.source},description:{story:`The field is constrained to 360px while the option labels are much longer. Two behaviours to
check here:

- the trigger keeps the field's width and ellipsizes the selected label;
- the dropdown uses the trigger width only as a *minimum*, widening to fit the longest
  option, and stops at the space available in the viewport — where the last option, which is
  longer still, ellipsizes inside the list.

Try it near the right edge of the canvas, and switch to a mobile viewport, to see the
\`max-width\` clamp take over.`,...(T=(L=t.parameters)==null?void 0:L.docs)==null?void 0:T.description}}};var x,_,E,F,N;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  ...Interactive,
  args: {
    ...Interactive.args,
    options: LONG_OPTIONS,
    placeholder: 'Wybierz opcję'
  },
  parameters: {}
}`,...(E=(_=r.parameters)==null?void 0:_.docs)==null?void 0:E.source},description:{story:"The dropdown caps at `maxHeight` (320px by default) and scrolls beyond it.",...(N=(F=r.parameters)==null?void 0:F.docs)==null?void 0:N.description}}};var A,W,j,D,P;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  render: args => ({
    components: {
      SelectField
    },
    setup() {
      return {
        args
      };
    },
    data: () => ({
      value: undefined
    }),
    template: \`
            <div
                style="display: flex; align-items: flex-end; box-sizing: border-box; min-height: 100vh; padding: 16px;"
            >
                <div style="width: 360px;">
                    <SelectField v-bind="args" v-model="value" />
                </div>
            </div>
        \`
  }),
  args: {
    label: 'Opcja',
    placeholder: 'Wybierz opcję',
    options: LONG_OPTIONS
  }
}`,...(j=(W=o.parameters)==null?void 0:W.docs)==null?void 0:j.source},description:{story:`The field sits at the bottom of the viewport, so there is no room for the dropdown below the
trigger — the popper flips and the list opens upwards. Uses the long list to make sure the
dropdown is tall enough to force the flip on any viewport height.`,...(P=(D=o.parameters)==null?void 0:D.docs)==null?void 0:P.description}}};var R,C,G;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  ...Interactive,
  args: {
    ...Interactive.args,
    state: FORM_FIELD_STATES.DISABLED
  },
  parameters: {}
}`,...(G=(C=p.parameters)==null?void 0:C.docs)==null?void 0:G.source}}};var B,M,H;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  ...Interactive,
  args: {
    ...Interactive.args,
    state: FORM_FIELD_STATES.ERROR,
    messageText: 'Error message text'
  },
  parameters: {}
}`,...(H=(M=d.parameters)==null?void 0:M.docs)==null?void 0:H.source}}};const Ne=["Interactive","WithGroups","WithIconsAndEyebrow","ConstrainedWidthWithLongLabels","LongList","OpeningUpwards","Disabled","Error"];export{t as ConstrainedWidthWithLongLabels,p as Disabled,d as Error,e as Interactive,r as LongList,o as OpeningUpwards,l as WithGroups,n as WithIconsAndEyebrow,Ne as __namedExportsOrder,Fe as default};
