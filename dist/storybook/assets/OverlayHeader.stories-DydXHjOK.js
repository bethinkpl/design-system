import{O as t,a,b as r}from"./OverlayHeader-BSOZSWOe.js";import"./IconButton-o4H-Dbj2.js";import"./Icon-CVHceNst.js";import"./vue.esm-bundler-Bq1ZKmuF.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Button-Cbw2_9er.js";import"./Divider-Ba-XwrF-.js";import"./Dropdown-CNZx4bM2.js";import"./vue-popper-BZ-flBra.js";import"./_commonjsHelpers-C4iS2aBk.js";import"./Skeleton-BrRagspw.js";const u={title:"Components/Headers/OverlayHeader",component:t},s=o=>({components:{OverlayHeader:t},setup(){return{args:o}},template:`
        <div style="height: 300px">
            <overlay-header v-bind=args>
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
        </div>`}),e=s.bind({}),i={title:"Zadanie #123",shortTitle:"#123",eyebrowText:"Eyebrow",accessorySlot:"accessory",actionsSlot:"actions slot",dropdownSlot:"dropdown slot",eyebrowAccessorySlot:"eyebrowAccessory",titleLeadingSlot:"leading",titleTrailingSlot:"trailing",isTitleInteractive:!1,borderColor:a.NEUTRAL_GHOST,state:r.DEFAULT},l={borderColor:{control:"select",options:Object.values(a)},state:{control:"select",options:Object.values(r)}};e.argTypes=l;e.args=i;e.parameters={layout:"fullscreen",design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=5867%3A99215&t=gnx09suYyI8a6jHh-0"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => ({
  components: {
    OverlayHeader
  },
  setup() {
    return {
      args
    };
  },
  template: \`
        <div style="height: 300px">
            <overlay-header v-bind=args>
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
})`,...e.parameters?.docs?.source}}};const f=["Interactive"];export{e as Interactive,f as __namedExportsOrder,u as default};
