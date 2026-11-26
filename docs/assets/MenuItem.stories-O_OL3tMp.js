import{M as n,D as m,b as g,c as L,d as _}from"./MenuItem-BAiOh289.js";import{D as O}from"./Chip-B885g_GX.js";import{t as f}from"./vue.esm-bundler-S9zc6Wpc.js";import{D as A,a as D}from"./SectionHeader-BCRcQ__g.js";import{S as R,a as C}from"./SlotPlaceholder-DGwCsFz7.js";import{I as i}from"./Icon-BCNBiMEg.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./IconButton-BP3MsFJS.js";import"./Button-C24VVysr.js";import"./device-mzBmLsxe.js";import"./Divider-Cfx8bFqy.js";import"./fontawesome-CXWUXLFT.js";const{useArgs:T}=__STORYBOOK_MODULE_PREVIEW_API__,W={title:"Components/Menu/MenuItem",component:n},N=t=>{const[P,M]=T();return{components:{MenuItem:n,DsChip:O,SlotPlaceholder:R},setup(){return{...f(t),ICONS:i,SLOT_PLACEHOLDER_SIZES:C}},methods:{isExpandedUpdated(o){M({isExpanded:o})}},template:`
        <menu-item :label="label" :additional-text="additionalText" :size="size" :state="state"
                                    :icon-left="ICONS[iconLeft]" :icon-right="ICONS[iconRight]" :is-done="isDone"
                                    :is-selected="isSelected" :background-color="backgroundColor" :index="index"
                                    :is-label-uppercase="isLabelUppercase" :icon-right-rotation="iconRightRotation"
                                    :has-selected-accessories-primary="hasSelectedAccessoriesPrimary"
                                    :is-selected-interactive="isSelectedInteractive" :level="level"
                                    :is-expandable="isExpandable" :is-expanded="isExpanded"
                   @update:isExpanded="isExpandedUpdated">
            <template #labelSlot v-if="labelSlot">
                <span v-html="labelSlot" />
            </template>
            <template #default>
                <slot-placeholder label="defaul slot" :size="SLOT_PLACEHOLDER_SIZES.SMALL" />
            </template>
            <template #children>
                <slot-placeholder label="children slot" :size="SLOT_PLACEHOLDER_SIZES.MEDIUM" />
            </template>
        </menu-item>`}},e=N.bind({}),H={additionalText:"",labelSlot:"Menu Item label in slot",size:L.SMALL,backgroundColor:g.NONE,iconLeft:null,iconRight:null,iconRightRotation:null,index:null,level:1,label:"Menu Item label",isLabelUppercase:!1,state:_.DEFAULT,isExpandable:!1,isExpanded:!1,isSelected:!1,isDone:!1,hasSelectedAccessoriesPrimary:!0,isSelectedInteractive:!1},X={labelSlot:{control:"text"},size:{control:"select",options:Object.values(L)},backgroundColor:{control:"select",options:Object.values(g)},iconLeft:{control:"select",options:[null,...Object.keys(i)]},iconRight:{control:"select",options:[null,...Object.keys(i)]},iconRightRotation:{control:"select",options:[null,90,180,270]},index:{control:{type:"number"}},level:{control:{type:"number"}},label:{control:"text"},isLabelUppercase:{control:"boolean"},additionalText:{control:"text"},state:{control:"select",options:Object.values(_)},isExpandable:{control:"boolean"},isExpanded:{control:"boolean"},isSelected:{control:"boolean"},isDone:{control:"boolean"},hasSelectedAccessoriesPrimary:{control:"boolean"},isSelectedInteractive:{control:"boolean"}};e.argTypes=X;e.args=H;e.parameters={design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?type=design&node-id=6148-111431&t=Amd0mke9FMknuKCX-0"}};const y=t=>({components:{MenuItem:n,DsMenu:m,SectionHeader:A},setup(){return{SECTION_HEADER_SIZES:D}},template:`
        <menu-item label="level 1">
            <template #children>
                <section-header title="Section Header XXS Level 2" :size="SECTION_HEADER_SIZES.XX_SMALL" :has-divider="false" />
                <menu-item label="level 2">
                    <template #children>
                        <menu-item label="level 3 first item" />
                        <section-header title="Section Header XXS Level 3" :size="SECTION_HEADER_SIZES.XX_SMALL" :has-divider="false" />
                        <menu-item label="level 3 second item" />
                    </template>
                </menu-item>
                <menu-item label="level 2 another item" />
            </template>
        </menu-item>`}),l=y.bind({}),U=t=>({components:{MenuItem:n,DsMenu:m},template:`
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
        </menu-item>`}),a=U.bind({}),z=t=>({components:{MenuItem:n,DsMenu:m},template:`
        <menu-item is-expandable label="level 1">
            <template #children>
                <ds-menu>
                    <menu-item is-expandable label="level 2" />
                    <menu-item is-expandable label="level 2">
                        <template #children>
                            <ds-menu>
                                <menu-item is-expandable label="level 3">
                                    <template #children>
                                        <ds-menu>
                                            <menu-item is-expandable label="level 4">
                                                <template #children>
                                                    <ds-menu>
                                                        <menu-item is-expandable label="level 5">
                                                            <template #children>
                                                                <ds-menu>
                                                                    <menu-item is-expandable label="level 6" />
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
                    <menu-item is-expandable label="level 2" />
                </ds-menu>
            </template>
        </menu-item>`}),s=z.bind({});var d,r,c;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`args => {
  const [_, updateArgs] = useArgs();
  return {
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
    methods: {
      isExpandedUpdated(isExpanded: boolean) {
        updateArgs({
          isExpanded
        });
      }
    },
    template: \`
        <menu-item :label="label" :additional-text="additionalText" :size="size" :state="state"
                                    :icon-left="ICONS[iconLeft]" :icon-right="ICONS[iconRight]" :is-done="isDone"
                                    :is-selected="isSelected" :background-color="backgroundColor" :index="index"
                                    :is-label-uppercase="isLabelUppercase" :icon-right-rotation="iconRightRotation"
                                    :has-selected-accessories-primary="hasSelectedAccessoriesPrimary"
                                    :is-selected-interactive="isSelectedInteractive" :level="level"
                                    :is-expandable="isExpandable" :is-expanded="isExpanded"
                   @update:isExpanded="isExpandedUpdated">
            <template #labelSlot v-if="labelSlot">
                <span v-html="labelSlot" />
            </template>
            <template #default>
                <slot-placeholder label="defaul slot" :size="SLOT_PLACEHOLDER_SIZES.SMALL" />
            </template>
            <template #children>
                <slot-placeholder label="children slot" :size="SLOT_PLACEHOLDER_SIZES.MEDIUM" />
            </template>
        </menu-item>\`
  };
}`,...(c=(r=e.parameters)==null?void 0:r.docs)==null?void 0:c.source}}};var p,u,b;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`args => ({
  components: {
    MenuItem,
    DsMenu,
    SectionHeader
  },
  setup() {
    return {
      SECTION_HEADER_SIZES
    };
  },
  template: \`
        <menu-item label="level 1">
            <template #children>
                <section-header title="Section Header XXS Level 2" :size="SECTION_HEADER_SIZES.XX_SMALL" :has-divider="false" />
                <menu-item label="level 2">
                    <template #children>
                        <menu-item label="level 3 first item" />
                        <section-header title="Section Header XXS Level 3" :size="SECTION_HEADER_SIZES.XX_SMALL" :has-divider="false" />
                        <menu-item label="level 3 second item" />
                    </template>
                </menu-item>
                <menu-item label="level 2 another item" />
            </template>
        </menu-item>\`
})`,...(b=(u=l.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var S,E,v;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`args => ({
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
})`,...(v=(E=a.parameters)==null?void 0:E.docs)==null?void 0:v.source}}};var h,x,I;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`args => ({
  components: {
    MenuItem,
    DsMenu
  },
  template: \`
        <menu-item is-expandable label="level 1">
            <template #children>
                <ds-menu>
                    <menu-item is-expandable label="level 2" />
                    <menu-item is-expandable label="level 2">
                        <template #children>
                            <ds-menu>
                                <menu-item is-expandable label="level 3">
                                    <template #children>
                                        <ds-menu>
                                            <menu-item is-expandable label="level 4">
                                                <template #children>
                                                    <ds-menu>
                                                        <menu-item is-expandable label="level 5">
                                                            <template #children>
                                                                <ds-menu>
                                                                    <menu-item is-expandable label="level 6" />
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
                    <menu-item is-expandable label="level 2" />
                </ds-menu>
            </template>
        </menu-item>\`
})`,...(I=(x=s.parameters)==null?void 0:x.docs)==null?void 0:I.source}}};const q=["Interactive","SectionHeaderMenu","Nested","NestedExpandable"];export{e as Interactive,a as Nested,s as NestedExpandable,l as SectionHeaderMenu,q as __namedExportsOrder,W as default};
