import{O as a,a as s,b as n}from"./OverlayHeader-Bk3jbrSa.js";import{I as l}from"./Icon-QFU__4e-.js";import"./IconButton-DPCw5IX6.js";import"./Button-4WEdqI-U.js";import"./vue.esm-bundler-DeRiNcSr.js";import"./device-mzBmLsxe.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Divider-CbFkO93G.js";import"./Dropdown-DnnVZ6l4.js";import"./PopoverTriggerReference-DU9WjlMc.js";import"./Primitive-DQnq458G.js";import"./index-BxAcIQAY.js";import"./PopperContent-DKUWvcUs.js";import"./Presence-Ccu_tC1V.js";import"./Skeleton-DxOZ6CP1.js";import"./Tooltip-CWn3E76l.js";import"./useLegacyI18n-AnNgdHoQ.js";const E={title:"Components/Headers/OverlayHeader",component:a},d=i=>({components:{OverlayHeader:a},setup(){return{args:i}},methods:{onClose(){console.log("OverlayHeader emitted close event")}},data(){return{ICONS:Object.freeze(l)}},template:`
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
        </div>`}),e=d.bind({}),c={title:"Zadanie #123",shortTitle:"#123",eyebrowText:"Eyebrow",accessorySlot:"accessory",actionsSlot:"actions slot",dropdownSlot:"dropdown slot",dropdownIcon:"FA_ELLIPSIS_VERTICAL",eyebrowAccessorySlot:"eyebrowAccessory",titleLeadingSlot:"leading",titleTrailingSlot:"trailing",isTitleInteractive:!1,areKeyboardShortcutsDisabled:!1,borderColor:n.NEUTRAL_GHOST,state:s.DEFAULT},g={borderColor:{control:"select",options:Object.values(n)},state:{control:"select",options:Object.values(s)},dropdownIcon:{control:"select",options:Object.keys(l)}};e.argTypes=g;e.args=c;e.parameters={layout:"fullscreen",design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=5867%3A99215&t=gnx09suYyI8a6jHh-0"}};var t,r,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`args => ({
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
})`,...(o=(r=e.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const H=["Interactive"];export{e as Interactive,H as __namedExportsOrder,E as default};
