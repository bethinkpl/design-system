import{_ as s,D as I,a as k,b as x}from"./Dropdown-B14FGbTx.js";import{S as i}from"./SelectList-DDs0Y1IW.js";import{M as W}from"./Modal-3-iKun9o.js";import{_ as P,d as M}from"./Button-C24VVysr.js";import{I as F,c as G,a as H}from"./IconButton-BP3MsFJS.js";import{B as Z}from"./BasicRichListItem-CVXGdfUB.js";import{r as u}from"./vue.esm-bundler-S9zc6Wpc.js";import{S as c}from"./SelectListItem-BSUo8-oj.js";import{S as Y}from"./SelectListItemDivider-CDg6g1xy.js";import{S as K}from"./SelectListSectionTitle-CU1c_u14.js";import{I as O}from"./Icon-BCNBiMEg.js";import{R as z,a as j}from"./RichListItem-CsjN1MP4.js";import"./PopoverTriggerReference-B8D-PfSb.js";import"./Primitive-DZpX8QWU.js";import"./index-Dm7VD4DC.js";import"./PopperContent-Q46ZxJO6.js";import"./Presence-BVs8m1Yx.js";import"./device-mzBmLsxe.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FeatureIcon-CCm0-VHM.js";import"./TextGroup-CIbAZRxD.js";import"./Skeleton-Dph7qEcf.js";import"./index-CPvnfNuQ.js";import"./Tooltip-DGxAUyqd.js";import"./Divider-Cfx8bFqy.js";import"./fontawesome-CXWUXLFT.js";import"./Checkbox-BzlLxSA4.js";import"./Collection-VCss6lUH.js";import"./VisuallyHidden-C_eXOqFr.js";import"./VisuallyHiddenInput-r-p-ryZM.js";const De={title:"Components/Dropdown",component:s},Q=e=>({components:{Dropdown:s,SelectList:i,SelectListItem:c},setup(){return e},template:`
    <div style="position: relative">
      <dropdown :open="open"
                :append-to-body="appendToBody"
                :has-same-width="hasSameWidth"
                :radius="radius"
                :align="align"
                :max-height="maxHeight"
                :side-flip="sideFlip"
                :hide-when-detached="hideWhenDetached"
                :autofocus="autofocus">
        <template #reference="{ isOpen }"><span>Dropdown entry point {{ isOpen ? 'opened' : 'closed' }}</span>
        </template>
        <template #default="{ close }">
          <select-list>
            <select-list-item label="One" @click="close" />
            <select-list-item label="Two" @click="close" />
          </select-list>
        </template>
      </dropdown>
    </div>`}),o=Q.bind({}),V={radius:I.BOTH_EDGES,open:!1,appendToBody:!0,hasSameWidth:!1,maxHeight:"",align:k.START,sideFlip:!0,hideWhenDetached:!1,autofocus:x.ENABLED},X={radius:{control:"select",options:Object.values(I)},align:{control:"select",options:Object.values(k)},maxHeight:{control:"text"},autofocus:{control:"select",options:Object.values(x),description:"Whether focus moves into the panel on open. `disabled-on-touch-devices` keeps an input in the panel from opening the on-screen keyboard."}};o.argTypes=X;o.args=V;o.parameters={design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=4010%3A69857"}};const r=e=>({components:{Dropdown:s,Modal:W,SelectList:i,SelectListItem:c},setup(){return e},template:`
    <modal header-title="Dropdown in a modal">
      <dropdown :append-to-body="appendToBody" has-same-width max-height="240px">
        <template #reference="{ isOpen }"><span>Dropdown entry point {{ isOpen ? 'opened' : 'closed' }}</span></template>
        <template #default="{ close }">
          <select-list>
            <select-list-item v-for="n in 30" :key="n" :label="'Item ' + n" @click="close" />
          </select-list>
        </template>
      </dropdown>
    </modal>`});r.args={appendToBody:!0};const p=()=>({components:{Dropdown:s,DsIconButton:F,SelectList:i,SelectListItem:c,SelectListItemDivider:Y},setup(){const e=u("none");return{ICONS:O,ICON_BUTTON_COLORS:H,ICON_BUTTON_SIZES:G,lastAction:e,run:(a,n)=>{e.value=a,n()}}},template:`
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
    </div>`}),d=()=>({components:{Dropdown:s,DsButton:P,SelectList:i,SelectListItem:c},setup(){const e=["Last 7 days","Last 30 days","Last 12 months","All time"],t=u(e[1]);return{BUTTON_TYPES:M,ICONS:O,options:e,selected:t,select:(n,S)=>{t.value=n,S()}}},template:`
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
    </div>`}),l=e=>({components:{Dropdown:s,DsButton:P,SelectList:i,SelectListItem:c,SelectListSectionTitle:K},setup(){const t=[{title:"Internal medicine",items:["Cardiology","Gastroenterology","Nephrology","Pulmonology","Endocrinology"]},{title:"Surgery",items:["General surgery","Orthopaedics","Neurosurgery","Urology"]},{title:"Other",items:["Paediatrics","Psychiatry","Dermatology","Ophthalmology","Radiology"]}],a=u("Cardiology");return{args:e,BUTTON_TYPES:M,ICONS:O,groups:t,selected:a}},template:`
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
    </div>`});l.args={maxHeight:"240px"};l.argTypes={maxHeight:{control:"text"}};const m=()=>({components:{Dropdown:s,DsBasicRichListItem:Z,DsIconButton:F,SelectList:i,SelectListItem:c},setup(){const e=["Medicine course","Dentistry course","A product with a longer name that wraps inside the panel"],t=u(e[0]);return{DROPDOWN_RADIUSES:I,ICONS:O,ICON_BUTTON_COLORS:H,ICON_BUTTON_SIZES:G,RICH_LIST_ITEM_BACKGROUND_COLOR:j,RICH_LIST_ITEM_SIZE:z,products:e,selected:t,select:(n,S)=>{t.value=n,S()}}},template:`
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
    </div>`});var g,_,N;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`args => ({
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
                :hide-when-detached="hideWhenDetached"
                :autofocus="autofocus">
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
})`,...(N=(_=o.parameters)==null?void 0:_.docs)==null?void 0:N.source}}};var h,T,y;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`args => ({
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
})`,...(y=(T=r.parameters)==null?void 0:T.docs)==null?void 0:y.source}}};var f,L,C;p.parameters={...p.parameters,docs:{...(f=p.parameters)==null?void 0:f.docs,source:{originalSource:`() => ({
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
})`,...(C=(L=p.parameters)==null?void 0:L.docs)==null?void 0:C.source}}};var A,D,E;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`() => ({
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
})`,...(E=(D=d.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var b,w,v;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`args => ({
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
})`,...(v=(w=l.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};var R,U,B;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`() => ({
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
})`,...(B=(U=m.parameters)==null?void 0:U.docs)==null?void 0:B.source}}};const Ee=["Interactive","InModal","ActionMenu","SingleSelect","ScrollableGroupedList","RichListTrigger"];export{p as ActionMenu,r as InModal,o as Interactive,m as RichListTrigger,l as ScrollableGroupedList,d as SingleSelect,Ee as __namedExportsOrder,De as default};
