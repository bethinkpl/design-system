import{O as o,a as s,b as n}from"./OverlayHeader-DYU6A8e-.js";import{I as l}from"./Icon-BxW-ny3A.js";import"./IconButton-C0_vxVJn.js";import"./Button-CRTJWjWJ.js";import"./vue.esm-bundler-CC_vsnCp.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./device-9fgosCm4.js";import"./Divider-BNN8PhWF.js";import"./Dropdown-vkyblifO.js";import"./vue-popper-CgJSQDC2.js";import"./_commonjsHelpers-CDR5Xrri.js";import"./Skeleton-a6juZJ74.js";import"./Tooltip-DKqXTPwf.js";const A={title:"Components/Headers/OverlayHeader",component:o},d=i=>({components:{OverlayHeader:o},setup(){return{args:i}},methods:{onClose(){console.log("OverlayHeader emitted close event")}},data(){return{ICONS:Object.freeze(l)}},template:`
        <div style="height: 300px">
            <overlay-header v-bind=args :dropdown-icon="ICONS[args.dropdownIcon]" @close="onClose">
                <template v-if="args.accessorySlot" #accessory>
                    <div style="background: var(--raw-gray-300); height: 100%">{{ args.accessorySlot }}</div>
                </template>
                <template v-if="args.eyebrowAccessorySlot" #eyebrowAccessory>
                    <div style="background: var(--raw-gray-300); font-size: 10px">{{ args.eyebrowAccessorySlot }}</div>
                </template>
                <template v-if="args.titleLeadingSlot" #titleLeading>
                    <div style="background: var(--raw-gray-300);">{{ args.titleLeadingSlot }}</div>
                </template>
                <template v-if="args.titleTrailingSlot" #titleTrailing>
                    <div style="background: var(--raw-gray-300); white-space: nowrap">{{ args.titleTrailingSlot }}</div>
                </template>
                <template v-if="args.actionsSlot" #actions>
                    <div style="background: var(--raw-gray-300); height: 100%">{{ args.actionsSlot }}</div>
                </template>
                <template v-if="args.dropdownSlot" #dropdown="{ close }">
                    <div style="background: var(--raw-gray-300);">{{ args.dropdownSlot }}</div>
                    <div style="background: var(--raw-gray-300);">{{ args.dropdownSlot }}</div>
                </template>
            </overlay-header>
        </div>`}),e=d.bind({}),c={title:"Zadanie #123",shortTitle:"#123",eyebrowText:"Eyebrow",accessorySlot:"accessory",actionsSlot:"actions slot",dropdownSlot:"dropdown slot",dropdownIcon:"FA_ELLIPSIS_VERTICAL",eyebrowAccessorySlot:"eyebrowAccessory",titleLeadingSlot:"leading",titleTrailingSlot:"trailing",isTitleInteractive:!1,borderColor:n.NEUTRAL_GHOST,state:s.DEFAULT},g={borderColor:{control:"select",options:Object.values(n)},state:{control:"select",options:Object.values(s)},dropdownIcon:{control:"select",options:Object.keys(l)}};e.argTypes=g;e.args=c;e.parameters={layout:"fullscreen",design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=5867%3A99215&t=gnx09suYyI8a6jHh-0"}};var t,r,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`args => ({
  components: {
    OverlayHeader
  },
  setup() {
    return {
      args
    };
  },
  methods: {
    onClose() {
      console.log('OverlayHeader emitted close event');
    }
  },
  data() {
    return {
      ICONS: Object.freeze(ICONS)
    };
  },
  template: \`
        <div style="height: 300px">
            <overlay-header v-bind=args :dropdown-icon="ICONS[args.dropdownIcon]" @close="onClose">
                <template v-if="args.accessorySlot" #accessory>
                    <div style="background: var(--raw-gray-300); height: 100%">{{ args.accessorySlot }}</div>
                </template>
                <template v-if="args.eyebrowAccessorySlot" #eyebrowAccessory>
                    <div style="background: var(--raw-gray-300); font-size: 10px">{{ args.eyebrowAccessorySlot }}</div>
                </template>
                <template v-if="args.titleLeadingSlot" #titleLeading>
                    <div style="background: var(--raw-gray-300);">{{ args.titleLeadingSlot }}</div>
                </template>
                <template v-if="args.titleTrailingSlot" #titleTrailing>
                    <div style="background: var(--raw-gray-300); white-space: nowrap">{{ args.titleTrailingSlot }}</div>
                </template>
                <template v-if="args.actionsSlot" #actions>
                    <div style="background: var(--raw-gray-300); height: 100%">{{ args.actionsSlot }}</div>
                </template>
                <template v-if="args.dropdownSlot" #dropdown="{ close }">
                    <div style="background: var(--raw-gray-300);">{{ args.dropdownSlot }}</div>
                    <div style="background: var(--raw-gray-300);">{{ args.dropdownSlot }}</div>
                </template>
            </overlay-header>
        </div>\`
})`,...(a=(r=e.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const k=["Interactive"];export{e as Interactive,k as __namedExportsOrder,A as default};
