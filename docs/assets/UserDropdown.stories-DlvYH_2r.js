import{w as k}from"./decorator-CcL-F-0p.js";import{U as r,_ as x,T as D}from"./UserDropdownDivider-Du7kJuOR.js";import{_ as b}from"./UserDropdownItem-42sFvswT.js";import{T as N}from"./TopNavBranding-D1wQdYPV.js";import{D as E,C}from"./Chip-CIi2ihJV.js";import{b as U,c as R}from"./Avatar-Cvz_TJ_Q.js";import{I as L}from"./Icon-QFU__4e-.js";import{S as H,a as P}from"./SlotPlaceholder-C-KWt78D.js";import"./chunk-4XZ63LWV-laKUlqim.js";import"./v4-CwV2VaSl.js";import"./vue.esm-bundler-DeRiNcSr.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Dropdown-DnnVZ6l4.js";import"./PopoverTriggerReference-DU9WjlMc.js";import"./Primitive-DQnq458G.js";import"./index-BxAcIQAY.js";import"./PopperContent-DKUWvcUs.js";import"./Presence-Ccu_tC1V.js";import"./SelectList-Df3d7moM.js";import"./SelectListItemContainer-CciXNmn3.js";import"./SelectListItemDivider-CuZhH3yr.js";import"./Divider-CbFkO93G.js";import"./TextGroup-BiVnAA-d.js";import"./_commonjsHelpers-D6Ya60D-.js";import"./Skeleton-DxOZ6CP1.js";import"./Tooltip-CWn3E76l.js";import"./device-mzBmLsxe.js";import"./SelectListItem-bHwieP_d.js";import"./Button-4WEdqI-U.js";import"./IconButton-DPCw5IX6.js";import"./Badge-CDi9eKyz.js";const we={title:"Components/TopNav/UserDropdown",component:r,decorators:[k],parameters:{actions:{handles:["show","hide"]},design:{type:"figma",url:"https://www.figma.com/design/WeJCbVlnkL9HmEcoBpu5NU/LMS---Specific-Components---Limbo?node-id=9272-42857"}}},d={username:"Roman Kowalski",email:"roman.kowalski@gmail.com"},o={username:{control:"text"},email:{control:"text"},avatarUrl:{control:"text"},activityStatus:{control:{type:"select",labels:{undefined:"None (undefined)"}},options:[void 0,...Object.values(R)]},accessStatus:{control:{type:"select",labels:{undefined:"None (undefined)"}},options:[void 0,...Object.values(U)]}},h=`
    <user-dropdown-item :to="{ name: 'account' }" :icon-left="ICONS.FA_USER" label="Konto" />
    <user-dropdown-item href="/messages" :icon-left="ICONS.FA_COMMENT" label="Wiadomości">
        <template #metadata>
            <ds-chip label="12" :size="CHIP_SIZES.X_SMALL" />
        </template>
    </user-dropdown-item>
    <user-dropdown-item :icon-left="ICONS.FA_MOON_STAR" label="Włącz tryb ciemny" />
    <user-dropdown-divider />
    <user-dropdown-item
        :icon-left="ICONS.FA_ARROW_RIGHT_FROM_BRACKET"
        label="Wyloguj się"
        @click="close"
    />
`,O=e=>({components:{UserDropdown:r,UserDropdownItem:b,UserDropdownDivider:x,DsChip:E},setup(){return{args:e,ICONS:L,CHIP_SIZES:C}},template:`
        <div style="display: flex; justify-content: flex-end; width: 300px; padding: 40px 0;">
            <user-dropdown v-bind="args">
                <template #default="{ close }">${h}</template>
            </user-dropdown>
        </div>`}),n={args:d,argTypes:o,render:O},t={args:d,argTypes:o,render:e=>({components:{UserDropdown:r},setup(){return{args:e}},template:`
            <div style="display: flex; justify-content: flex-end; width: 300px; padding: 40px 0;">
                <user-dropdown v-bind="args" />
            </div>`})},s={args:d,argTypes:o,render:e=>({components:{UserDropdown:r,SlotPlaceholder:H},setup(){return{args:e,SLOT_PLACEHOLDER_SIZES:P}},template:`
            <div style="display: flex; justify-content: flex-end; width: 300px; padding: 40px 0;">
                <user-dropdown v-bind="args">
                    <slot-placeholder label="default slot" :size="SLOT_PLACEHOLDER_SIZES.SMALL" />
                </user-dropdown>
            </div>`})},a={args:{username:"Roman Aleksander Kowalski-Nowakowski",email:"roman.aleksander.kowalski+newsletter@bardzo-dluga-domena.example.com"},argTypes:o,render:O},p={args:d,argTypes:o,render:e=>({components:{UserDropdown:r,UserDropdownItem:b,UserDropdownDivider:x,DsChip:E,TopNav:D,TopNavBranding:N},setup(){return{args:e,ICONS:L,CHIP_SIZES:C}},template:`
            <top-nav>
                <top-nav-branding title="Bethink" />
                <template #trailing>
                    <user-dropdown v-bind="args">
                        <template #default="{ close }">${h}</template>
                    </user-dropdown>
                </template>
            </top-nav>`})};var i,m,l;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args,
  argTypes,
  render
}`,...(l=(m=n.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var c,u,g;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args,
  argTypes,
  render: (storyArgs: Args) => ({
    components: {
      UserDropdown
    },
    setup() {
      return {
        args: storyArgs
      };
    },
    template: \`
            <div style="display: flex; justify-content: flex-end; width: 300px; padding: 40px 0;">
                <user-dropdown v-bind="args" />
            </div>\`
  })
}`,...(g=(u=t.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var w,S,f;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args,
  argTypes,
  render: (storyArgs: Args) => ({
    components: {
      UserDropdown,
      SlotPlaceholder
    },
    setup() {
      return {
        args: storyArgs,
        SLOT_PLACEHOLDER_SIZES
      };
    },
    template: \`
            <div style="display: flex; justify-content: flex-end; width: 300px; padding: 40px 0;">
                <user-dropdown v-bind="args">
                    <slot-placeholder label="default slot" :size="SLOT_PLACEHOLDER_SIZES.SMALL" />
                </user-dropdown>
            </div>\`
  })
}`,...(f=(S=s.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var v,A,y;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    username: 'Roman Aleksander Kowalski-Nowakowski',
    email: 'roman.aleksander.kowalski+newsletter@bardzo-dluga-domena.example.com'
  } as Args,
  argTypes,
  render
}`,...(y=(A=a.parameters)==null?void 0:A.docs)==null?void 0:y.source}}};var _,T,I;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args,
  argTypes,
  render: (storyArgs: Args) => ({
    components: {
      UserDropdown,
      UserDropdownItem,
      UserDropdownDivider,
      DsChip,
      TopNav,
      TopNavBranding
    },
    setup() {
      return {
        args: storyArgs,
        ICONS,
        CHIP_SIZES
      };
    },
    template: \`
            <top-nav>
                <top-nav-branding title="Bethink" />
                <template #trailing>
                    <user-dropdown v-bind="args">
                        <template #default="{ close }">\${items}</template>
                    </user-dropdown>
                </template>
            </top-nav>\`
  })
}`,...(I=(T=p.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};const Se=["Interactive","WithoutItems","Slots","LongEmail","InTopNav"];export{p as InTopNav,n as Interactive,a as LongEmail,s as Slots,t as WithoutItems,Se as __namedExportsOrder,we as default};
