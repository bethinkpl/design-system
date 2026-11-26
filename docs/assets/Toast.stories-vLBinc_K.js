import{f as K,d as a,n as W,b as Z,c as T,h as v,k as u,M as Q,l as m,u as o,N as J,o as i,a as g,G as C,K as B,L as b,j as X}from"./vue.esm-bundler-S9zc6Wpc.js";import{c as p,e as h,_ as E,b as D,d as ee}from"./Button-C24VVysr.js";import{D as te}from"./Card-DXLn1iri.js";import{a as oe,c as ne,I as se}from"./IconButton-BP3MsFJS.js";import{I as l}from"./Icon-BCNBiMEg.js";import{_ as ae}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{w as ie}from"./decorator-CcL-F-0p.js";import"./Divider-Cfx8bFqy.js";import"./LoadingBar-CjG84nig.js";import"./ContainerRibbon-CwDaG5Dq.js";import"./device-mzBmLsxe.js";import"./fontawesome-CXWUXLFT.js";import"./chunk-4XZ63LWV-laKUlqim.js";import"./v4-CwV2VaSl.js";const f={SMALL:"small",MEDIUM:"medium",LARGE:"large"},r={NEUTRAL_HEAVY:"neutralHeavy",NEUTRAL_STRONG:"neutralStrong",SUCCESS:"success",WARNING:"warning",DANGER:"danger",INFO:"info"},y={LEFT:"left",CENTER:"center",RIGHT:"right",NONE:"none"},re={class:"ds-toast__body"},le={key:0,class:"ds-toast__title"},ce={class:"ds-toast__content"},de={class:"ds-toast__footerButtons"},ue={key:0,class:"ds-toast__close"},U=K({__name:"Toast",props:{title:{default:""},size:{default:()=>f.MEDIUM},position:{default:()=>y.CENTER},color:{default:()=>r.INFO},footerPrimaryButtonText:{default:""},footerPrimaryButtonIcon:{default:null},footerSecondaryButtonText:{default:""},footerSecondaryButtonIcon:{default:null},isDisappearing:{type:Boolean,default:!0},disappearingTimeout:{default:"0"},isClosable:{type:Boolean,default:!1}},emits:["close","primary-button-click","secondary-button-click"],setup(t,{emit:j}){const $=j,q=a(()=>t.color===r.DANGER?p.NEUTRAL:p.PRIMARY),V=a(()=>t.color===r.DANGER?p.DANGER:p.NEUTRAL),I=a(()=>t.size===f.SMALL?h.SMALL:h.MEDIUM),G=a(()=>`-ds-size-${t.size.toLowerCase()}`),F=a(()=>`-ds-position-${t.position.toLowerCase()}`),Y=a(()=>`-ds-color-${t.color}`);let c=null;const N=()=>{c!==null&&(clearTimeout(c),c=null)},O=()=>{N(),$("close")};return W(()=>{t.isDisappearing&&t.disappearingTimeout!=="0"&&(c=setTimeout(O,parseInt(t.disappearingTimeout,10)*1e3+100))}),Z(N),(e,d)=>(i(),T("div",{class:J(["ds-toast",G.value,F.value,Y.value,{"-ds-closable":e.isClosable}])},[v(o(te),{"loading-bar-color":e.color,"has-loading-bar":"","loading-bar-time":e.disappearingTimeout},Q({content:m(()=>[g("div",re,[e.title?(i(),T("div",le,b(e.title),1)):u("",!0),g("div",ce,[X(e.$slots,"content",{},void 0,!0)])])]),_:2},[e.footerPrimaryButtonText.length>0||e.footerSecondaryButtonText.length>0?{name:"footer",fn:m(()=>[g("div",de,[e.footerSecondaryButtonText.length?(i(),C(o(E),{key:0,color:V.value,size:I.value,"icon-right":e.footerSecondaryButtonIcon,type:o(ee).OUTLINED,radius:o(D).ROUNDED,onClick:d[0]||(d[0]=H=>e.$emit("secondary-button-click"))},{default:m(()=>[B(b(e.footerSecondaryButtonText),1)]),_:1},8,["color","size","icon-right","type","radius"])):u("",!0),e.footerPrimaryButtonText.length?(i(),C(o(E),{key:1,color:q.value,size:I.value,"icon-right":e.footerPrimaryButtonIcon,radius:o(D).ROUNDED,onClick:d[1]||(d[1]=H=>e.$emit("primary-button-click"))},{default:m(()=>[B(b(e.footerPrimaryButtonText),1)]),_:1},8,["color","size","icon-right","radius"])):u("",!0)])]),key:"0"}:void 0]),1032,["loading-bar-color","loading-bar-time"]),e.isClosable?(i(),T("div",ue,[v(o(se),{icon:o(l).FA_XMARK,size:o(ne).SMALL,color:o(oe).NEUTRAL_WEAK,onClick:O},null,8,["icon","size","color"])])):u("",!0)],2))}}),S=ae(U,[["__scopeId","data-v-67651428"]]);U.__docgenInfo={exportName:"default",displayName:"Toast",description:"",tags:{},props:[{name:"title",required:!1,type:{name:"string"}},{name:"size",required:!1,type:{name:"ToastSizes"}},{name:"position",required:!1,type:{name:"ToastPositions"}},{name:"color",required:!1,type:{name:"ToastColors"}},{name:"footerPrimaryButtonText",required:!1,type:{name:"string"}},{name:"footerPrimaryButtonIcon",required:!1,type:{name:"union",elements:[{name:"IconItem"},{name:"null"}]}},{name:"footerSecondaryButtonText",required:!1,type:{name:"string"}},{name:"footerSecondaryButtonIcon",required:!1,type:{name:"union",elements:[{name:"IconItem"},{name:"null"}]}},{name:"isDisappearing",required:!1,type:{name:"boolean"}},{name:"disappearingTimeout",description:"Seconds, as a numeric string. `'0'` disables the auto-close.",required:!1,type:{name:"string"}},{name:"isClosable",required:!1,type:{name:"boolean"}}],events:[{name:"secondary-button-click"},{name:"primary-button-click"},{name:"close"}],slots:[{name:"content"}],sourceFiles:["/home/runner/work/design-system/design-system/lib/js/components/Toast/Toast.vue"]};const De={title:"Components/Toast",component:S,decorators:[ie]},x=`<ds-toast
        v-if="isVisible"
        :title="title"
        :size="size"
        :position="position"
        :color="color"
        :footer-primary-button-text="footerPrimaryButtonText"
        :footer-primary-button-icon="ICONS[footerPrimaryButtonIcon]"
        :footer-secondary-button-text="footerSecondaryButtonText"
        :footer-secondary-button-icon="ICONS[footerSecondaryButtonIcon]"
        :is-disappearing="isDisappearing"
        :disappearing-timeout="disappearingTimeout"
        :is-closable="isClosable"
        @close="isVisible = false"
    >
        <template #content>
            <span v-html="content" />
        </template>
    </ds-toast>`,me=t=>({components:{DsToast:S},setup(){return t},data(){return{ICONS:Object.freeze(l),isVisible:!0}},template:`<div style="height: 1200px; width: 100%;">
        ${x}
    </div>`}),pe=t=>({components:{DsToast:S},setup(){return t},data(){return{ICONS:Object.freeze(l),isVisible:!0}},template:`<div style="height: 400px; padding: 24px; width: 100%;">
        <div style="position: relative; height: 100%; border: 1px black solid;">
            <div style="position: absolute; bottom: 16px; right: 16px;">
                ${x}
            </div>
        </div>
    </div>`}),n=me.bind({}),_={title:"Opcjonalny Title wpisz tutaj",size:f.MEDIUM,position:y.CENTER,color:r.INFO,footerPrimaryButtonText:"primary",footerPrimaryButtonIcon:null,footerSecondaryButtonText:"secondary",footerSecondaryButtonIcon:null,isDisappearing:!1,disappearingTimeout:"0",isClosable:!0,content:"Wpłynąłem na suchego przestwór oceanu"},M={title:{control:"text"},size:{control:"select",options:Object.values(f)},position:{control:"select",options:Object.values(y)},color:{control:"select",options:Object.values(r)},footerPrimaryButtonIcon:{control:"select",options:[null,...Object.keys(l)]},footerSecondaryButtonIcon:{control:"select",options:[null,...Object.keys(l)]},isClosable:{control:"boolean"},content:{control:"text"}},w={actions:{handles:["close","primary-button-click","secondary-button-click"]}};n.argTypes=M;n.args=_;n.parameters={...w,design:{type:"figma",url:"https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=8091-108960"}};const s=pe.bind({});s.argTypes=M;s.args={..._,position:y.NONE};s.parameters=w;var k,z,R;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`args => ({
  components: {
    DsToast
  },
  setup() {
    return args;
  },
  data() {
    return {
      ICONS: Object.freeze(ICONS),
      isVisible: true
    };
  },
  template: \`<div style="height: 1200px; width: 100%;">
        \${toastTemplate}
    </div>\`
})`,...(R=(z=n.parameters)==null?void 0:z.docs)==null?void 0:R.source}}};var A,L,P;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`args => ({
  components: {
    DsToast
  },
  setup() {
    return args;
  },
  data() {
    return {
      ICONS: Object.freeze(ICONS),
      isVisible: true
    };
  },
  template: \`<div style="height: 400px; padding: 24px; width: 100%;">
        <div style="position: relative; height: 100%; border: 1px black solid;">
            <div style="position: absolute; bottom: 16px; right: 16px;">
                \${toastTemplate}
            </div>
        </div>
    </div>\`
})`,...(P=(L=s.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};const ke=["Interactive","ClientPositioned"];export{s as ClientPositioned,n as Interactive,ke as __namedExportsOrder,De as default};
