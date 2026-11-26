import{g as r,b as E,a as m,c as D,d as p,e as g,R as S,f as b}from"./RichListItem-CsjN1MP4.js";import{S as T,a as f}from"./SlotPlaceholder-DGwCsFz7.js";import{w as H}from"./decorator-CcL-F-0p.js";import{I as R}from"./Image-Ixu31zL3.js";import{I as i,c as u}from"./Icon-BCNBiMEg.js";import"./vue.esm-bundler-S9zc6Wpc.js";import"./Divider-Cfx8bFqy.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Checkbox-BzlLxSA4.js";import"./Primitive-DZpX8QWU.js";import"./index-Dm7VD4DC.js";import"./Presence-BVs8m1Yx.js";import"./Collection-VCss6lUH.js";import"./VisuallyHidden-C_eXOqFr.js";import"./VisuallyHiddenInput-r-p-ryZM.js";import"./chunk-4XZ63LWV-laKUlqim.js";import"./v4-CwV2VaSl.js";import"./Skeleton-Dph7qEcf.js";import"./index-CPvnfNuQ.js";import"./fontawesome-CXWUXLFT.js";const{useArgs:c}=__STORYBOOK_MODULE_PREVIEW_API__,te={title:"Components/RichList/RichListItem",component:r,decorators:[e=>({components:{story:e},template:"<div style='display: flex;padding: 16px;'><story /></div>"}),H]},d=(e,s={})=>(e.argTypes={type:{options:Object.values(b),control:"select"},size:{options:Object.values(S),control:"select"},layout:{options:Object.values(g),control:{type:"select"}},state:{options:Object.values(p),control:"select"},iconColor:{options:Object.values(u),control:"select"},borderColor:{options:[null,...Object.values(D)],control:"select"},icon:{options:[null,...Object.keys(i)],control:"select"},iconColorHex:{control:"text"},borderColorHex:{control:"text"},content:{control:"text"},leadingAccessory:{control:"text"},metadata:{control:"text"},actions:{control:"text"},draggableIconClassName:{control:"text"},backgroundColor:{options:[null,...Object.values(m)],control:"select"},elevation:{options:[null,...Object.values(E)],control:"select"}},e.args={size:S.MEDIUM,type:b.DEFAULT,layout:g.HORIZONTAL,backgroundColor:m.NEUTRAL,elevation:null,isDimmed:!1,isDraggable:!0,hasDraggableHandler:!0,icon:null,iconColor:u.NEUTRAL_WEAK,iconColorHex:"",hasActionsSlotDivider:!0,isSelectable:!0,isSelected:!0,borderColor:null,borderColorHex:"",state:p.DEFAULT,isInteractive:!0,draggableIconClassName:"draggableIconClassName-1",content:"Content Slot",leadingAccessory:"",metadata:"Metadata Slot",actions:"ACS",...s},e.parameters={actions:{handles:["icon-click","click","update:is-selected"]},layout:"fullscreen",design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?type=design&node-id=8507-129603&mode=design&t=dC5vBzU9RlP1j7G2-4"}},e),x=e=>{const[s,o]=c();return{components:{RichListItem:r},setup(){return e},data(){return{ICONS:Object.freeze(i)}},methods:{updateIsSelected(n){o({isSelected:n})}},template:`
            <rich-list-item
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
                :draggable-icon-class-name="draggableIconClassName"
                :state="state"
                :background-color="backgroundColor"
                :elevation="elevation"
                :has-draggable-handler="hasDraggableHandler"
                :has-actions-slot-divider="hasActionsSlotDivider"
                :is-selectable="isSelectable"
                :is-selected="isSelected"
                @update:is-selected="updateIsSelected"
            >
                <template v-if="content" #content>
                    <div v-html="content" />
                </template>
                <template v-if="leadingAccessory" #leadingAccessory>
                    <div v-html="leadingAccessory" />
                </template>
                <template v-if="metadata" #metadata>
                    <div v-html="metadata" />
                </template>
                <template v-if="actions" #actions>
                    <div v-html="actions" />
                </template>
            </rich-list-item>`}},l=x.bind({});d(l);const z=e=>{const[s,o]=c();return{components:{RichListItem:r,SlotPlaceholder:T},setup(){return e},data(){return{SLOT_PLACEHOLDER_SIZES:f}},methods:{updateIsSelected(n){o({isSelected:n})}},template:`
            <rich-list-item
                :size="size"
                :type="type"
                :layout="layout"
                :is-interactive="isInteractive"
                :is-draggable="isDraggable"
                :is-dimmed="isDimmed"
                :border-color="borderColor"
                :border-color-hex="borderColorHex"
                :draggable-icon-class-name="draggableIconClassName"
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
                <template #content>
                    <slot-placeholder :size="SLOT_PLACEHOLDER_SIZES.SMALL" label="content" />
                </template>
                <template #metadata>
                    <slot-placeholder :size="SLOT_PLACEHOLDER_SIZES.SMALL" label="metadata" />
                </template>
                <template #actions>
                    <slot-placeholder :size="SLOT_PLACEHOLDER_SIZES.SMALL" label="actions" />
                </template>
            </rich-list-item>`}},t=z.bind({});d(t);t.argTypes={...t.argTypes,content:{control:!1},leadingAccessory:{control:!1},metadata:{control:!1},actions:{control:!1}};const N=e=>{const[s,o]=c();return{components:{RichListItem:r,DsImage:R},setup(){return e},data(){return{ICONS:Object.freeze(i)}},methods:{updateIsSelected(n){o({isSelected:n})}},template:`
            <rich-list-item
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
                :draggable-icon-class-name="draggableIconClassName"
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
                    <ds-image :src="imageSrcUsedInStoryBook" />
                </template>
                <template v-if="content" #content>
                    <div v-html="content" />
                </template>
                <template v-if="metadata" #metadata>
                    <div v-html="metadata" />
                </template>
                <template v-if="actions" #actions>
                    <div v-html="actions" />
                </template>
            </rich-list-item>`}},a=N.bind({});d(a,{imageSrcUsedInStoryBook:"https://storage.googleapis.com/media-manager/lek/018f6291-3956-7342-8e6b-0ee901d48643/018f6291-3a56-7213-aef6-b5da7253839f.jpg"});a.argTypes={...a.argTypes,leadingAccessory:{control:!1}};var h,I,v;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`args => {
  const [_, updateArgs] = useArgs();
  return {
    components: {
      RichListItem
    },
    setup() {
      return args;
    },
    data() {
      return {
        ICONS: Object.freeze(ICONS)
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
            <rich-list-item
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
                :draggable-icon-class-name="draggableIconClassName"
                :state="state"
                :background-color="backgroundColor"
                :elevation="elevation"
                :has-draggable-handler="hasDraggableHandler"
                :has-actions-slot-divider="hasActionsSlotDivider"
                :is-selectable="isSelectable"
                :is-selected="isSelected"
                @update:is-selected="updateIsSelected"
            >
                <template v-if="content" #content>
                    <div v-html="content" />
                </template>
                <template v-if="leadingAccessory" #leadingAccessory>
                    <div v-html="leadingAccessory" />
                </template>
                <template v-if="metadata" #metadata>
                    <div v-html="metadata" />
                </template>
                <template v-if="actions" #actions>
                    <div v-html="actions" />
                </template>
            </rich-list-item>\`
  };
}`,...(v=(I=l.parameters)==null?void 0:I.docs)==null?void 0:v.source}}};var C,L,A;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`args => {
  const [_, updateArgs] = useArgs();
  return {
    components: {
      RichListItem,
      SlotPlaceholder
    },
    setup() {
      return args;
    },
    data() {
      return {
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
            <rich-list-item
                :size="size"
                :type="type"
                :layout="layout"
                :is-interactive="isInteractive"
                :is-draggable="isDraggable"
                :is-dimmed="isDimmed"
                :border-color="borderColor"
                :border-color-hex="borderColorHex"
                :draggable-icon-class-name="draggableIconClassName"
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
                <template #content>
                    <slot-placeholder :size="SLOT_PLACEHOLDER_SIZES.SMALL" label="content" />
                </template>
                <template #metadata>
                    <slot-placeholder :size="SLOT_PLACEHOLDER_SIZES.SMALL" label="metadata" />
                </template>
                <template #actions>
                    <slot-placeholder :size="SLOT_PLACEHOLDER_SIZES.SMALL" label="actions" />
                </template>
            </rich-list-item>\`
  };
}`,...(A=(L=t.parameters)==null?void 0:L.docs)==null?void 0:A.source}}};var O,_,y;a.parameters={...a.parameters,docs:{...(O=a.parameters)==null?void 0:O.docs,source:{originalSource:`args => {
  const [_, updateArgs] = useArgs();
  return {
    components: {
      RichListItem,
      DsImage
    },
    setup() {
      return args;
    },
    data() {
      return {
        ICONS: Object.freeze(ICONS)
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
            <rich-list-item
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
                :draggable-icon-class-name="draggableIconClassName"
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
                    <ds-image :src="imageSrcUsedInStoryBook" />
                </template>
                <template v-if="content" #content>
                    <div v-html="content" />
                </template>
                <template v-if="metadata" #metadata>
                    <div v-html="metadata" />
                </template>
                <template v-if="actions" #actions>
                    <div v-html="actions" />
                </template>
            </rich-list-item>\`
  };
}`,...(y=(_=a.parameters)==null?void 0:_.docs)==null?void 0:y.source}}};const ae=["Interactive","PlaceholderSlots","WithMedia"];export{l as Interactive,t as PlaceholderSlots,a as WithMedia,ae as __namedExportsOrder,te as default};
