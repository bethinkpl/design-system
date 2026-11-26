import{B as r}from"./BasicRichListItem-CVXGdfUB.js";import{w as A}from"./decorator-CcL-F-0p.js";import{S as _,a as O}from"./SlotPlaceholder-DGwCsFz7.js";import{t as c}from"./vue.esm-bundler-S9zc6Wpc.js";import{I as w}from"./Image-Ixu31zL3.js";import{I as p,c as D}from"./Icon-BCNBiMEg.js";import{b as f,a as m,c as R,d as u,e as b,R as g,f as S}from"./RichListItem-CsjN1MP4.js";import"./TextGroup-CIbAZRxD.js";import"./index-Dm7VD4DC.js";import"./Skeleton-Dph7qEcf.js";import"./index-CPvnfNuQ.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Tooltip-DGxAUyqd.js";import"./device-mzBmLsxe.js";import"./chunk-4XZ63LWV-laKUlqim.js";import"./v4-CwV2VaSl.js";import"./fontawesome-CXWUXLFT.js";import"./Divider-Cfx8bFqy.js";import"./Checkbox-BzlLxSA4.js";import"./Primitive-DZpX8QWU.js";import"./Presence-BVs8m1Yx.js";import"./Collection-VCss6lUH.js";import"./VisuallyHidden-C_eXOqFr.js";import"./VisuallyHiddenInput-r-p-ryZM.js";const{useArgs:n}=__STORYBOOK_MODULE_PREVIEW_API__,ae={title:"Components/RichList/BasicRichListItem",component:r,decorators:[e=>({components:{story:e},template:"<div style='display: flex;padding: 16px;'><story /></div>"}),A]},d=(e,a={})=>(e.argTypes={type:{options:Object.values(S),control:"select"},size:{options:Object.values(g),control:"select"},layout:{options:Object.values(b),control:{type:"select"}},state:{options:Object.values(u),control:"select"},iconColor:{options:[null,...Object.values(D)],control:"select"},borderColor:{options:[null,...Object.values(R)],control:"select"},icon:{options:[null,...Object.keys(p)],control:"select"},iconColorHex:{control:"text"},borderColorHex:{control:"text"},eyebrow:{control:"text"},eyebrowEllipsis:{control:"boolean"},isEyebrowUppercase:{control:"boolean"},text:{control:"text"},textEllipsis:{control:"boolean"},supportingText:{control:"text"},supportingTextEllipsis:{control:"boolean"},isSupportingTextTooltipEnabled:{control:"boolean"},metadata:{control:"text"},leadingAccessory:{control:"text"},textSlot:{control:"text"},actions:{control:"text"},draggableIconClassName:{control:"text"},backgroundColor:{options:[null,...Object.values(m)],control:"select"},elevation:{options:[null,...Object.values(f)],control:"select"}},e.args={size:g.MEDIUM,type:S.DEFAULT,layout:b.HORIZONTAL,backgroundColor:m.NEUTRAL,elevation:null,isDimmed:!1,isDraggable:!0,hasDraggableHandler:!0,icon:null,iconColor:null,iconColorHex:"",hasActionsSlotDivider:!0,isSelectable:!0,isSelected:!0,isTextGroupSelected:!1,borderColor:null,borderColorHex:"",state:u.DEFAULT,isInteractive:!0,draggableIconClassName:"draggableIconClassName-1",eyebrow:"Eyebrow Uppercase",eyebrowEllipsis:!1,isEyebrowUppercase:!1,text:"Długa nazwa gdy się nie mieści Praesentium dicta sit. Molestiae unde voluptatem eaque labore.",textEllipsis:!1,supportingText:"null",supportingTextEllipsis:!1,isSupportingTextTooltipEnabled:!1,metadata:"Metadata Slot",leadingAccessory:"",textSlot:"",actions:"ACS",...a},e.parameters={actions:{handles:["icon-click","click","update:is-selected"]},layout:"fullscreen",design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?type=design&node-id=8673-2345&mode=design&t=QeEz8TmzxDbrGYK3-4"}},e),H=e=>{const[a,s]=n();return{components:{BasicRichListItem:r},setup(){return{...c(e),ICONS:p}},methods:{updateIsSelected(l){s({isSelected:l})}},template:`
        <basic-rich-list-item
            :size="size"
            :type="type"
            :layout="layout"
            :is-interactive="isInteractive"
            :is-draggable="isDraggable"
            :icon="ICONS[icon]"
            :icon-color="iconColor"
            :icon-color-hex="iconColorHex"
            :is-dimmed="isDimmed"
            :border-color="borderColor"
            :border-color-hex="borderColorHex"
            :state="state"
            :eyebrow="eyebrow === 'null' ? null : eyebrow"
            :eyebrow-ellipsis="eyebrowEllipsis"
            :is-eyebrow-uppercase="isEyebrowUppercase"
            :text="text"
            :text-ellipsis="textEllipsis"
            :supporting-text="supportingText === 'null' ? null : supportingText"
            :supporting-text-ellipsis="supportingTextEllipsis"
            :is-supporting-text-tooltip-enabled="isSupportingTextTooltipEnabled"
            :background-color="backgroundColor"
            :elevation="elevation"
            :has-draggable-handler="hasDraggableHandler"
            :has-actions-slot-divider="hasActionsSlotDivider"
            :is-selectable="isSelectable"
            :is-selected="isSelected"
            :is-text-group-selected="isTextGroupSelected"
            @update:is-selected="updateIsSelected"
        >
            <template v-if="metadata" #metadata>
                <div v-html="metadata" />
            </template>
            <template v-if="leadingAccessory" #leadingAccessory>
                <div v-html="leadingAccessory" />
            </template>
            <template v-if="textSlot" #text>
                <div v-html="textSlot" />
            </template>
            <template v-if="actions" #actions>
                <div v-html="actions" />
            </template>
        </basic-rich-list-item>`}},i=H.bind({});d(i);const z=e=>{const[a,s]=n();return{components:{BasicRichListItem:r,SlotPlaceholder:_},setup(){return{...c(e),SLOT_PLACEHOLDER_SIZES:O}},methods:{updateIsSelected(l){s({isSelected:l})}},template:`
            <basic-rich-list-item
                :size="size"
                :type="type"
                :layout="layout"
                :is-interactive="isInteractive"
                :is-draggable="isDraggable"
                :is-dimmed="isDimmed"
                :border-color="borderColor"
                :border-color-hex="borderColorHex"
                :eyebrow="eyebrow === 'null' ? null : eyebrow"
                :eyebrow-ellipsis="eyebrowEllipsis"
                :is-eyebrow-uppercase="isEyebrowUppercase"
                :text="text"
                :text-ellipsis="textEllipsis"
                :supporting-text="supportingText === 'null' ? null : supportingText"
                :supporting-text-ellipsis="supportingTextEllipsis"
                :is-supporting-text-tooltip-enabled="isSupportingTextTooltipEnabled"
                :state="state"
                :background-color="backgroundColor"
                :elevation="elevation"
                :has-draggable-handler="hasDraggableHandler"
                :has-actions-slot-divider="hasActionsSlotDivider"
                :is-selectable="isSelectable"
                :is-selected="isSelected"
                @update:is-selected="updateIsSelected"
            >
                <template #media>
                    <slot-placeholder :size="SLOT_PLACEHOLDER_SIZES.SMALL" label="media" />
                </template>
                <template #leadingAccessory>
                    <slot-placeholder :size="SLOT_PLACEHOLDER_SIZES.SMALL" label="leadingAccessory" />
                </template>
                <template #text>
                    <slot-placeholder :size="SLOT_PLACEHOLDER_SIZES.SMALL" label="text" />
                </template>
                <template #metadata>
                    <slot-placeholder :size="SLOT_PLACEHOLDER_SIZES.SMALL" label="metadata" />
                </template>
                <template #actions>
                    <slot-placeholder :size="SLOT_PLACEHOLDER_SIZES.SMALL" label="actions" />
                </template>
            </basic-rich-list-item>`}},t=z.bind({});d(t);t.argTypes={...t.argTypes,leadingAccessory:{control:!1},metadata:{control:!1},textSlot:{control:!1},actions:{control:!1}};const M=e=>{const[a,s]=n();return{components:{BasicRichListItem:r,DsImage:w},setup(){return{...c(e),ICONS:p}},methods:{updateIsSelected(l){s({isSelected:l})}},template:`
            <basic-rich-list-item
                :size="size"
                :type="type"
                :layout="layout"
                :is-interactive="isInteractive"
                :is-draggable="isDraggable"
                :icon="ICONS[icon]"
                :icon-color="iconColor"
                :icon-color-hex="iconColorHex"
                :is-dimmed="isDimmed"
                :border-color="borderColor"
                :border-color-hex="borderColorHex"
                :state="state"
                :eyebrow="eyebrow === 'null' ? null : eyebrow"
                :eyebrow-ellipsis="eyebrowEllipsis"
                :is-eyebrow-uppercase="isEyebrowUppercase"
                :text="text"
                :text-ellipsis="textEllipsis"
                :supporting-text="supportingText === 'null' ? null : supportingText"
                :supporting-text-ellipsis="supportingTextEllipsis"
                :is-supporting-text-tooltip-enabled="isSupportingTextTooltipEnabled"
                :background-color="backgroundColor"
                :elevation="elevation"
                :has-draggable-handler="hasDraggableHandler"
                :has-actions-slot-divider="hasActionsSlotDivider"
                :is-selectable="isSelectable"
                :is-selected="isSelected"
                :is-text-group-selected="isTextGroupSelected"
                @update:is-selected="updateIsSelected"
            >
                <template #media>
                    <ds-image :src="imageSrcUsedInStoryBook"/>
                </template>
                <template v-if="metadata" #metadata>
                    <div v-html="metadata"/>
                </template>
                <template v-if="actions" #actions>
                    <div v-html="actions"/>
                </template>
            </basic-rich-list-item>`}},o=M.bind({});d(o,{imageSrcUsedInStoryBook:"https://storage.googleapis.com/media-manager/lek/018f6291-3956-7342-8e6b-0ee901d48643/018f6291-3a56-7213-aef6-b5da7253839f.jpg"});o.argTypes={...o.argTypes,leadingAccessory:{control:!1}};var x,y,h;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`args => {
  const [_, updateArgs] = useArgs();
  return {
    components: {
      BasicRichListItem
    },
    setup() {
      return {
        ...toRefs(args),
        ICONS
      };
    },
    methods: {
      updateIsSelected(isSelected) {
        updateArgs({
          isSelected
        });
      }
    },
    template: \`
        <basic-rich-list-item
            :size="size"
            :type="type"
            :layout="layout"
            :is-interactive="isInteractive"
            :is-draggable="isDraggable"
            :icon="ICONS[icon]"
            :icon-color="iconColor"
            :icon-color-hex="iconColorHex"
            :is-dimmed="isDimmed"
            :border-color="borderColor"
            :border-color-hex="borderColorHex"
            :state="state"
            :eyebrow="eyebrow === 'null' ? null : eyebrow"
            :eyebrow-ellipsis="eyebrowEllipsis"
            :is-eyebrow-uppercase="isEyebrowUppercase"
            :text="text"
            :text-ellipsis="textEllipsis"
            :supporting-text="supportingText === 'null' ? null : supportingText"
            :supporting-text-ellipsis="supportingTextEllipsis"
            :is-supporting-text-tooltip-enabled="isSupportingTextTooltipEnabled"
            :background-color="backgroundColor"
            :elevation="elevation"
            :has-draggable-handler="hasDraggableHandler"
            :has-actions-slot-divider="hasActionsSlotDivider"
            :is-selectable="isSelectable"
            :is-selected="isSelected"
            :is-text-group-selected="isTextGroupSelected"
            @update:is-selected="updateIsSelected"
        >
            <template v-if="metadata" #metadata>
                <div v-html="metadata" />
            </template>
            <template v-if="leadingAccessory" #leadingAccessory>
                <div v-html="leadingAccessory" />
            </template>
            <template v-if="textSlot" #text>
                <div v-html="textSlot" />
            </template>
            <template v-if="actions" #actions>
                <div v-html="actions" />
            </template>
        </basic-rich-list-item>\`
  };
}`,...(h=(y=i.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var E,v,I;t.parameters={...t.parameters,docs:{...(E=t.parameters)==null?void 0:E.docs,source:{originalSource:`args => {
  const [_, updateArgs] = useArgs();
  return {
    components: {
      BasicRichListItem,
      SlotPlaceholder
    },
    setup() {
      return {
        ...toRefs(args),
        SLOT_PLACEHOLDER_SIZES
      };
    },
    methods: {
      updateIsSelected(isSelected) {
        updateArgs({
          isSelected
        });
      }
    },
    template: \`
            <basic-rich-list-item
                :size="size"
                :type="type"
                :layout="layout"
                :is-interactive="isInteractive"
                :is-draggable="isDraggable"
                :is-dimmed="isDimmed"
                :border-color="borderColor"
                :border-color-hex="borderColorHex"
                :eyebrow="eyebrow === 'null' ? null : eyebrow"
                :eyebrow-ellipsis="eyebrowEllipsis"
                :is-eyebrow-uppercase="isEyebrowUppercase"
                :text="text"
                :text-ellipsis="textEllipsis"
                :supporting-text="supportingText === 'null' ? null : supportingText"
                :supporting-text-ellipsis="supportingTextEllipsis"
                :is-supporting-text-tooltip-enabled="isSupportingTextTooltipEnabled"
                :state="state"
                :background-color="backgroundColor"
                :elevation="elevation"
                :has-draggable-handler="hasDraggableHandler"
                :has-actions-slot-divider="hasActionsSlotDivider"
                :is-selectable="isSelectable"
                :is-selected="isSelected"
                @update:is-selected="updateIsSelected"
            >
                <template #media>
                    <slot-placeholder :size="SLOT_PLACEHOLDER_SIZES.SMALL" label="media" />
                </template>
                <template #leadingAccessory>
                    <slot-placeholder :size="SLOT_PLACEHOLDER_SIZES.SMALL" label="leadingAccessory" />
                </template>
                <template #text>
                    <slot-placeholder :size="SLOT_PLACEHOLDER_SIZES.SMALL" label="text" />
                </template>
                <template #metadata>
                    <slot-placeholder :size="SLOT_PLACEHOLDER_SIZES.SMALL" label="metadata" />
                </template>
                <template #actions>
                    <slot-placeholder :size="SLOT_PLACEHOLDER_SIZES.SMALL" label="actions" />
                </template>
            </basic-rich-list-item>\`
  };
}`,...(I=(v=t.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};var T,L,C;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`args => {
  const [_, updateArgs] = useArgs();
  return {
    components: {
      BasicRichListItem,
      DsImage
    },
    setup() {
      return {
        ...toRefs(args),
        ICONS
      };
    },
    methods: {
      updateIsSelected(isSelected) {
        updateArgs({
          isSelected
        });
      }
    },
    template: \`
            <basic-rich-list-item
                :size="size"
                :type="type"
                :layout="layout"
                :is-interactive="isInteractive"
                :is-draggable="isDraggable"
                :icon="ICONS[icon]"
                :icon-color="iconColor"
                :icon-color-hex="iconColorHex"
                :is-dimmed="isDimmed"
                :border-color="borderColor"
                :border-color-hex="borderColorHex"
                :state="state"
                :eyebrow="eyebrow === 'null' ? null : eyebrow"
                :eyebrow-ellipsis="eyebrowEllipsis"
                :is-eyebrow-uppercase="isEyebrowUppercase"
                :text="text"
                :text-ellipsis="textEllipsis"
                :supporting-text="supportingText === 'null' ? null : supportingText"
                :supporting-text-ellipsis="supportingTextEllipsis"
                :is-supporting-text-tooltip-enabled="isSupportingTextTooltipEnabled"
                :background-color="backgroundColor"
                :elevation="elevation"
                :has-draggable-handler="hasDraggableHandler"
                :has-actions-slot-divider="hasActionsSlotDivider"
                :is-selectable="isSelectable"
                :is-selected="isSelected"
                :is-text-group-selected="isTextGroupSelected"
                @update:is-selected="updateIsSelected"
            >
                <template #media>
                    <ds-image :src="imageSrcUsedInStoryBook"/>
                </template>
                <template v-if="metadata" #metadata>
                    <div v-html="metadata"/>
                </template>
                <template v-if="actions" #actions>
                    <div v-html="actions"/>
                </template>
            </basic-rich-list-item>\`
  };
}`,...(C=(L=o.parameters)==null?void 0:L.docs)==null?void 0:C.source}}};const re=["Interactive","PlaceholderSlots","WithMedia"];export{i as Interactive,t as PlaceholderSlots,o as WithMedia,re as __namedExportsOrder,ae as default};
