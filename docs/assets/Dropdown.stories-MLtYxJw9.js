import{_ as o,D as I,a as k}from"./Dropdown-DnnVZ6l4.js";import{S as i}from"./SelectList-Df3d7moM.js";import{M as H}from"./Modal-B7FE1d7L.js";import{_ as x,d as M}from"./Button-4WEdqI-U.js";import{I as P,c as G,a as F}from"./IconButton-DPCw5IX6.js";import{B as W}from"./BasicRichListItem-DMJOpC42.js";import{R as Z,a as Y}from"./RichListItem-BBozKxWT.js";import{I as u}from"./Icon-QFU__4e-.js";import{r as O}from"./vue.esm-bundler-DeRiNcSr.js";import{S as c}from"./SelectListItem-bHwieP_d.js";import{S as K}from"./SelectListItemDivider-CuZhH3yr.js";import{S as z}from"./SelectListSectionTitle-Dd2W8xOi.js";import"./PopoverTriggerReference-DU9WjlMc.js";import"./Primitive-DQnq458G.js";import"./index-BxAcIQAY.js";import"./PopperContent-DKUWvcUs.js";import"./Presence-Ccu_tC1V.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FeatureIcon-CQN5_teu.js";import"./device-mzBmLsxe.js";import"./TextGroup-BiVnAA-d.js";import"./_commonjsHelpers-D6Ya60D-.js";import"./Skeleton-DxOZ6CP1.js";import"./Tooltip-CWn3E76l.js";import"./Divider-CbFkO93G.js";import"./Checkbox-Dyu8-w14.js";import"./Collection-M3jVt8UP.js";import"./VisuallyHidden-BquiPSGJ.js";import"./VisuallyHiddenInput-vtYPblLg.js";const Ce={title:"Components/Dropdown",component:o},j=e=>({components:{Dropdown:o,SelectList:i,SelectListItem:c},setup(){return e},template:`
    <div style="position: relative">
      <dropdown :open="open"
                :append-to-body="appendToBody"
                :has-same-width="hasSameWidth"
                :radius="radius"
                :align="align"
                :max-height="maxHeight"
                :side-flip="sideFlip"
                :hide-when-detached="hideWhenDetached">
        <template #reference="{ isOpen }"><span>Dropdown entry point {{ isOpen ? 'opened' : 'closed' }}</span>
        </template>
        <template #default="{ close }">
          <select-list>
            <select-list-item label="One" @click="close" />
            <select-list-item label="Two" @click="close" />
          </select-list>
        </template>
      </dropdown>
    </div>`}),s=j.bind({}),Q={radius:I.BOTH_EDGES,open:!1,appendToBody:!0,hasSameWidth:!1,maxHeight:"",align:k.START,sideFlip:!0,hideWhenDetached:!1},V={radius:{control:"select",options:Object.values(I)},align:{control:"select",options:Object.values(k)},maxHeight:{control:"text"}};s.argTypes=V;s.args=Q;s.parameters={design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=4010%3A69857"}};const n=e=>({components:{Dropdown:o,Modal:H,SelectList:i,SelectListItem:c},setup(){return e},template:`
    <modal header-title="Dropdown in a modal">
      <dropdown :append-to-body="appendToBody" has-same-width max-height="240px">
        <template #reference="{ isOpen }"><span>Dropdown entry point {{ isOpen ? 'opened' : 'closed' }}</span></template>
        <template #default="{ close }">
          <select-list>
            <select-list-item v-for="n in 30" :key="n" :label="'Item ' + n" @click="close" />
          </select-list>
        </template>
      </dropdown>
    </modal>`});n.args={appendToBody:!0};const p=()=>({components:{Dropdown:o,DsIconButton:P,SelectList:i,SelectListItem:c,SelectListItemDivider:K},setup(){const e=O("none");return{ICONS:u,ICON_BUTTON_COLORS:F,ICON_BUTTON_SIZES:G,lastAction:e,run:(a,r)=>{e.value=a,r()}}},template:`
    <div style="display: flex; align-items: center; justify-content: flex-end; gap: 16px; padding: 24px;">
      <span>Last action: {{ lastAction }}</span>
      <dropdown align="end">
        <template #reference>
          <ds-icon-button
            :icon="ICONS.FA_ELLIPSIS_VERTICAL"
            :size="ICON_BUTTON_SIZES.MEDIUM"
            :color="ICON_BUTTON_COLORS.NEUTRAL"
            aria-label="More actions"
          />
        </template>
        <template #default="{ close }">
          <select-list>
            <select-list-item label="Edit" :icon-left="ICONS.FA_PEN_TO_SQUARE" @click="run('edit', close)" />
            <select-list-item label="Duplicate" :icon-left="ICONS.FA_COPY" @click="run('duplicate', close)" />
            <select-list-item label="Copy link" :icon-left="ICONS.FA_LINK" @click="run('copy link', close)" />
            <select-list-item-divider />
            <select-list-item label="Archive" :icon-left="ICONS.FA_BOX_ARCHIVE" @click="run('archive', close)" />
            <select-list-item label="Delete" :icon-left="ICONS.FA_TRASH_CAN" @click="run('delete', close)" />
          </select-list>
        </template>
      </dropdown>
    </div>`}),d=()=>({components:{Dropdown:o,DsButton:x,SelectList:i,SelectListItem:c},setup(){const e=["Last 7 days","Last 30 days","Last 12 months","All time"],t=O(e[1]);return{BUTTON_TYPES:M,ICONS:u,options:e,selected:t,select:(r,S)=>{t.value=r,S()}}},template:`
    <div style="padding: 24px;">
      <dropdown>
        <template #reference="{ isOpen }">
          <ds-button :type="BUTTON_TYPES.OUTLINED" :icon-right="isOpen ? ICONS.FA_ANGLE_UP : ICONS.FA_ANGLE_DOWN">
            {{ selected }}
          </ds-button>
        </template>
        <template #default="{ close }">
          <select-list>
            <select-list-item
              v-for="option in options"
              :key="option"
              :label="option"
              :is-selected="option === selected"
              @click="select(option, close)"
            />
          </select-list>
        </template>
      </dropdown>
    </div>`}),l=e=>({components:{Dropdown:o,DsButton:x,SelectList:i,SelectListItem:c,SelectListSectionTitle:z},setup(){const t=[{title:"Internal medicine",items:["Cardiology","Gastroenterology","Nephrology","Pulmonology","Endocrinology"]},{title:"Surgery",items:["General surgery","Orthopaedics","Neurosurgery","Urology"]},{title:"Other",items:["Paediatrics","Psychiatry","Dermatology","Ophthalmology","Radiology"]}],a=O("Cardiology");return{args:e,BUTTON_TYPES:M,ICONS:u,groups:t,selected:a}},template:`
    <div style="padding: 24px;">
      <dropdown :max-height="args.maxHeight">
        <template #reference="{ isOpen }">
          <ds-button :type="BUTTON_TYPES.OUTLINED" :icon-right="isOpen ? ICONS.FA_ANGLE_UP : ICONS.FA_ANGLE_DOWN">
            {{ selected }}
          </ds-button>
        </template>
        <template #default="{ close }">
          <select-list>
            <template v-for="group in groups" :key="group.title">
              <select-list-section-title :label="group.title" />
              <select-list-item
                v-for="item in group.items"
                :key="item"
                :label="item"
                :is-selected="item === selected"
                @click="selected = item; close()"
              />
            </template>
          </select-list>
        </template>
      </dropdown>
    </div>`});l.args={maxHeight:"240px"};l.argTypes={maxHeight:{control:"text"}};const m=()=>({components:{Dropdown:o,DsBasicRichListItem:W,DsIconButton:P,SelectList:i,SelectListItem:c},setup(){const e=["Medicine course","Dentistry course","A product with a longer name that wraps inside the panel"],t=O(e[0]);return{DROPDOWN_RADIUSES:I,ICONS:u,ICON_BUTTON_COLORS:F,ICON_BUTTON_SIZES:G,RICH_LIST_ITEM_BACKGROUND_COLOR:Y,RICH_LIST_ITEM_SIZE:Z,products:e,selected:t,select:(r,S)=>{t.value=r,S()}}},template:`
    <div style="padding: 24px; max-width: 400px;">
      <dropdown has-same-width :radius="DROPDOWN_RADIUSES.SINGLE_EDGE">
        <template #reference="{ isOpen, toggle }">
          <ds-basic-rich-list-item
            :size="RICH_LIST_ITEM_SIZE.MEDIUM"
            :is-draggable="false"
            :is-selectable="false"
            :has-actions-slot-divider="false"
            :background-color="RICH_LIST_ITEM_BACKGROUND_COLOR.NEUTRAL_WEAK"
            eyebrow="Study access · 12 months"
            is-eyebrow-uppercase
            :text="selected"
          >
            <template #actions>
              <ds-icon-button
                :icon="isOpen ? ICONS.FA_ANGLE_UP : ICONS.FA_ANGLE_DOWN"
                :size="ICON_BUTTON_SIZES.SMALL"
                :color="ICON_BUTTON_COLORS.NEUTRAL"
                aria-label="Change product"
                @click="toggle"
              />
            </template>
          </ds-basic-rich-list-item>
        </template>
        <template #default="{ close }">
          <select-list>
            <select-list-item
              v-for="product in products"
              :key="product"
              :label="product"
              :is-selected="product === selected"
              @click="select(product, close)"
            />
          </select-list>
        </template>
      </dropdown>
    </div>`});var g,_,N;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`args => ({
  components: {
    Dropdown,
    SelectList,
    SelectListItem
  },
  setup() {
    return args;
  },
  template: \`
    <div style="position: relative">
      <dropdown :open="open"
                :append-to-body="appendToBody"
                :has-same-width="hasSameWidth"
                :radius="radius"
                :align="align"
                :max-height="maxHeight"
                :side-flip="sideFlip"
                :hide-when-detached="hideWhenDetached">
        <template #reference="{ isOpen }"><span>Dropdown entry point {{ isOpen ? 'opened' : 'closed' }}</span>
        </template>
        <template #default="{ close }">
          <select-list>
            <select-list-item label="One" @click="close" />
            <select-list-item label="Two" @click="close" />
          </select-list>
        </template>
      </dropdown>
    </div>\`
})`,...(N=(_=s.parameters)==null?void 0:_.docs)==null?void 0:N.source}}};var h,T,y;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`args => ({
  components: {
    Dropdown,
    Modal,
    SelectList,
    SelectListItem
  },
  setup() {
    return args;
  },
  template: \`
    <modal header-title="Dropdown in a modal">
      <dropdown :append-to-body="appendToBody" has-same-width max-height="240px">
        <template #reference="{ isOpen }"><span>Dropdown entry point {{ isOpen ? 'opened' : 'closed' }}</span></template>
        <template #default="{ close }">
          <select-list>
            <select-list-item v-for="n in 30" :key="n" :label="'Item ' + n" @click="close" />
          </select-list>
        </template>
      </dropdown>
    </modal>\`
})`,...(y=(T=n.parameters)==null?void 0:T.docs)==null?void 0:y.source}}};var L,f,C;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`() => ({
  components: {
    Dropdown,
    DsIconButton,
    SelectList,
    SelectListItem,
    SelectListItemDivider
  },
  setup() {
    const lastAction = ref('none');
    const run = (action: string, close: () => void) => {
      lastAction.value = action;
      close();
    };
    return {
      ICONS,
      ICON_BUTTON_COLORS,
      ICON_BUTTON_SIZES,
      lastAction,
      run
    };
  },
  template: \`
    <div style="display: flex; align-items: center; justify-content: flex-end; gap: 16px; padding: 24px;">
      <span>Last action: {{ lastAction }}</span>
      <dropdown align="end">
        <template #reference>
          <ds-icon-button
            :icon="ICONS.FA_ELLIPSIS_VERTICAL"
            :size="ICON_BUTTON_SIZES.MEDIUM"
            :color="ICON_BUTTON_COLORS.NEUTRAL"
            aria-label="More actions"
          />
        </template>
        <template #default="{ close }">
          <select-list>
            <select-list-item label="Edit" :icon-left="ICONS.FA_PEN_TO_SQUARE" @click="run('edit', close)" />
            <select-list-item label="Duplicate" :icon-left="ICONS.FA_COPY" @click="run('duplicate', close)" />
            <select-list-item label="Copy link" :icon-left="ICONS.FA_LINK" @click="run('copy link', close)" />
            <select-list-item-divider />
            <select-list-item label="Archive" :icon-left="ICONS.FA_BOX_ARCHIVE" @click="run('archive', close)" />
            <select-list-item label="Delete" :icon-left="ICONS.FA_TRASH_CAN" @click="run('delete', close)" />
          </select-list>
        </template>
      </dropdown>
    </div>\`
})`,...(C=(f=p.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var A,E,D;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`() => ({
  components: {
    Dropdown,
    DsButton,
    SelectList,
    SelectListItem
  },
  setup() {
    const options = ['Last 7 days', 'Last 30 days', 'Last 12 months', 'All time'];
    const selected = ref(options[1]);
    const select = (option: string, close: () => void) => {
      selected.value = option;
      close();
    };
    return {
      BUTTON_TYPES,
      ICONS,
      options,
      selected,
      select
    };
  },
  template: \`
    <div style="padding: 24px;">
      <dropdown>
        <template #reference="{ isOpen }">
          <ds-button :type="BUTTON_TYPES.OUTLINED" :icon-right="isOpen ? ICONS.FA_ANGLE_UP : ICONS.FA_ANGLE_DOWN">
            {{ selected }}
          </ds-button>
        </template>
        <template #default="{ close }">
          <select-list>
            <select-list-item
              v-for="option in options"
              :key="option"
              :label="option"
              :is-selected="option === selected"
              @click="select(option, close)"
            />
          </select-list>
        </template>
      </dropdown>
    </div>\`
})`,...(D=(E=d.parameters)==null?void 0:E.docs)==null?void 0:D.source}}};var w,b,R;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`args => ({
  components: {
    Dropdown,
    DsButton,
    SelectList,
    SelectListItem,
    SelectListSectionTitle
  },
  setup() {
    const groups = [{
      title: 'Internal medicine',
      items: ['Cardiology', 'Gastroenterology', 'Nephrology', 'Pulmonology', 'Endocrinology']
    }, {
      title: 'Surgery',
      items: ['General surgery', 'Orthopaedics', 'Neurosurgery', 'Urology']
    }, {
      title: 'Other',
      items: ['Paediatrics', 'Psychiatry', 'Dermatology', 'Ophthalmology', 'Radiology']
    }];
    const selected = ref('Cardiology');
    return {
      args,
      BUTTON_TYPES,
      ICONS,
      groups,
      selected
    };
  },
  template: \`
    <div style="padding: 24px;">
      <dropdown :max-height="args.maxHeight">
        <template #reference="{ isOpen }">
          <ds-button :type="BUTTON_TYPES.OUTLINED" :icon-right="isOpen ? ICONS.FA_ANGLE_UP : ICONS.FA_ANGLE_DOWN">
            {{ selected }}
          </ds-button>
        </template>
        <template #default="{ close }">
          <select-list>
            <template v-for="group in groups" :key="group.title">
              <select-list-section-title :label="group.title" />
              <select-list-item
                v-for="item in group.items"
                :key="item"
                :label="item"
                :is-selected="item === selected"
                @click="selected = item; close()"
              />
            </template>
          </select-list>
        </template>
      </dropdown>
    </div>\`
})`,...(R=(b=l.parameters)==null?void 0:b.docs)==null?void 0:R.source}}};var v,U,B;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`() => ({
  components: {
    Dropdown,
    DsBasicRichListItem,
    DsIconButton,
    SelectList,
    SelectListItem
  },
  setup() {
    const products = ['Medicine course', 'Dentistry course', 'A product with a longer name that wraps inside the panel'];
    const selected = ref(products[0]);
    const select = (product: string, close: () => void) => {
      selected.value = product;
      close();
    };
    return {
      DROPDOWN_RADIUSES,
      ICONS,
      ICON_BUTTON_COLORS,
      ICON_BUTTON_SIZES,
      RICH_LIST_ITEM_BACKGROUND_COLOR,
      RICH_LIST_ITEM_SIZE,
      products,
      selected,
      select
    };
  },
  template: \`
    <div style="padding: 24px; max-width: 400px;">
      <dropdown has-same-width :radius="DROPDOWN_RADIUSES.SINGLE_EDGE">
        <template #reference="{ isOpen, toggle }">
          <ds-basic-rich-list-item
            :size="RICH_LIST_ITEM_SIZE.MEDIUM"
            :is-draggable="false"
            :is-selectable="false"
            :has-actions-slot-divider="false"
            :background-color="RICH_LIST_ITEM_BACKGROUND_COLOR.NEUTRAL_WEAK"
            eyebrow="Study access · 12 months"
            is-eyebrow-uppercase
            :text="selected"
          >
            <template #actions>
              <ds-icon-button
                :icon="isOpen ? ICONS.FA_ANGLE_UP : ICONS.FA_ANGLE_DOWN"
                :size="ICON_BUTTON_SIZES.SMALL"
                :color="ICON_BUTTON_COLORS.NEUTRAL"
                aria-label="Change product"
                @click="toggle"
              />
            </template>
          </ds-basic-rich-list-item>
        </template>
        <template #default="{ close }">
          <select-list>
            <select-list-item
              v-for="product in products"
              :key="product"
              :label="product"
              :is-selected="product === selected"
              @click="select(product, close)"
            />
          </select-list>
        </template>
      </dropdown>
    </div>\`
})`,...(B=(U=m.parameters)==null?void 0:U.docs)==null?void 0:B.source}}};const Ae=["Interactive","InModal","ActionMenu","SingleSelect","ScrollableGroupedList","RichListTrigger"];export{p as ActionMenu,n as InModal,s as Interactive,m as RichListTrigger,l as ScrollableGroupedList,d as SingleSelect,Ae as __namedExportsOrder,Ce as default};
