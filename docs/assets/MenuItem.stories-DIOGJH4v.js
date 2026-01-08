import{M as n,D as b,b as d,c as p,d as S,e as u}from"./MenuItem-DPWdyUM0.js";import{C as h}from"./Chip-rHBRHuD5.js";import{t as v}from"./vue.esm-bundler-ByLATHYC.js";import{I as l}from"./Icon-DsmK7y8n.js";import{S as g,a as I}from"./SlotPlaceholder-DfufsQ1e.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Button-b1d-Ht_r.js";import"./IconButton-zWkt4keY.js";import"./device-9fgosCm4.js";const k={title:"Components/Menu/MenuItem",component:n},L=o=>({components:{MenuItem:n,DsChip:h,SlotPlaceholder:g},setup(){return{...v(o),ICONS:l,SLOT_PLACEHOLDER_SIZES:I}},template:`
        <menu-item :label="label" :additional-text="additionalText" :size="size" :state="state"
                                    :icon-left="ICONS[iconLeft]" :icon-right="ICONS[iconRight]" :is-done="isDone"
                                    :is-selected="isSelected" :background-color="backgroundColor" :index="index"
                                    :is-label-uppercase="isLabelUppercase" :icon-right-rotation="iconRightRotation"
                                    :has-selected-icons-color-primary="hasSelectedIconsColorPrimary"
                                    :is-selected-interactive="isSelectedInteractive" :level="level"
                                    :accessoryState="accessoryState">
            <template #labelSlot v-if="labelSlot">
                <span v-html="labelSlot" />
            </template>
            <template #default>
                <slot-placeholder label="defaul slot" :size="SLOT_PLACEHOLDER_SIZES.SMALL" />
            </template>
            <template #children>
                <slot-placeholder label="children slot" />
            </template>
        </menu-item>`}),e=L.bind({}),C={additionalText:"",labelSlot:"Menu Item label in slot",size:p.SMALL,backgroundColor:d.NEUTRAL_WEAK,iconLeft:null,iconRight:null,iconRightRotation:null,index:null,level:1,label:"Menu Item label",isLabelUppercase:!1,state:u.DEFAULT,accessoryState:null,isSelected:!1,isDone:!1,hasSelectedIconsColorPrimary:!0,isSelectedInteractive:!1},f={labelSlot:{control:"text"},size:{control:"select",options:Object.values(p)},backgroundColor:{control:"select",options:Object.values(d)},iconLeft:{control:"select",options:[null,...Object.keys(l)]},iconRight:{control:"select",options:[null,...Object.keys(l)]},iconRightRotation:{control:"select",options:[null,90,180,270]},index:{control:{type:"number"}},level:{control:{type:"number"}},label:{control:"text"},isLabelUppercase:{control:"boolean"},additionalText:{control:"text"},state:{control:"select",options:Object.values(u)},accessoryState:{control:"select",options:[null,...Object.values(S)]},isSelected:{control:"boolean"},isDone:{control:"boolean"},hasSelectedIconsColorPrimary:{control:"boolean"},isSelectedInteractive:{control:"boolean"}};e.argTypes=f;e.args=C;e.parameters={design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?type=design&node-id=6148-111431&t=Amd0mke9FMknuKCX-0"}};const E=o=>({components:{MenuItem:n,DsMenu:b},template:`
        <menu-item label="level 1">
            <template #children>
                <ds-menu>
                    <menu-item label="level 2" />
                    <menu-item label="level 2">
                        <template #children>
                            <ds-menu>
                                <menu-item label="level 3">
                                    <template #children>
                                        <ds-menu>
                                            <menu-item label="level 4">
                                                <template #children>
                                                    <ds-menu>
                                                        <menu-item label="level 5">
                                                            <template #children>
                                                                <ds-menu>
                                                                    <menu-item label="level 6" />
                                                                </ds-menu>
                                                            </template>
                                                        </menu-item>
                                                    </ds-menu>
                                                </template>
                                            </menu-item>
                                        </ds-menu>
                                    </template>
                                </menu-item>
                            </ds-menu>
                        </template>
                    </menu-item>
                    <menu-item label="level 2" />
                </ds-menu>
            </template>
        </menu-item>`}),t=E.bind({});var a,s,i;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`args => ({
  components: {
    MenuItem,
    DsChip,
    SlotPlaceholder
  },
  setup() {
    const reactiveArgs = toRefs(args);
    return {
      ...reactiveArgs,
      ICONS,
      SLOT_PLACEHOLDER_SIZES
    };
  },
  template: \`
        <menu-item :label="label" :additional-text="additionalText" :size="size" :state="state"
                                    :icon-left="ICONS[iconLeft]" :icon-right="ICONS[iconRight]" :is-done="isDone"
                                    :is-selected="isSelected" :background-color="backgroundColor" :index="index"
                                    :is-label-uppercase="isLabelUppercase" :icon-right-rotation="iconRightRotation"
                                    :has-selected-icons-color-primary="hasSelectedIconsColorPrimary"
                                    :is-selected-interactive="isSelectedInteractive" :level="level"
                                    :accessoryState="accessoryState">
            <template #labelSlot v-if="labelSlot">
                <span v-html="labelSlot" />
            </template>
            <template #default>
                <slot-placeholder label="defaul slot" :size="SLOT_PLACEHOLDER_SIZES.SMALL" />
            </template>
            <template #children>
                <slot-placeholder label="children slot" />
            </template>
        </menu-item>\`
})`,...(i=(s=e.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var m,r,c;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`args => ({
  components: {
    MenuItem,
    DsMenu
  },
  template: \`
        <menu-item label="level 1">
            <template #children>
                <ds-menu>
                    <menu-item label="level 2" />
                    <menu-item label="level 2">
                        <template #children>
                            <ds-menu>
                                <menu-item label="level 3">
                                    <template #children>
                                        <ds-menu>
                                            <menu-item label="level 4">
                                                <template #children>
                                                    <ds-menu>
                                                        <menu-item label="level 5">
                                                            <template #children>
                                                                <ds-menu>
                                                                    <menu-item label="level 6" />
                                                                </ds-menu>
                                                            </template>
                                                        </menu-item>
                                                    </ds-menu>
                                                </template>
                                            </menu-item>
                                        </ds-menu>
                                    </template>
                                </menu-item>
                            </ds-menu>
                        </template>
                    </menu-item>
                    <menu-item label="level 2" />
                </ds-menu>
            </template>
        </menu-item>\`
})`,...(c=(r=t.parameters)==null?void 0:r.docs)==null?void 0:c.source}}};const U=["Interactive","Nested"];export{e as Interactive,t as Nested,U as __namedExportsOrder,k as default};
