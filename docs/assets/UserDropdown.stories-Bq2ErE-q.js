import{w as k}from"./decorator-CcL-F-0p.js";import{U as r,_ as x,T as D}from"./UserDropdownDivider-BkDjEVgp.js";import{_ as b}from"./UserDropdownItem-FM0UCaJf.js";import{T as N}from"./TopNavBranding-CoKXAY4P.js";import{D as E,C}from"./Chip-B885g_GX.js";import{b as U,c as R}from"./Avatar-BuoCNnT1.js";import{S as H,a as P}from"./SlotPlaceholder-DGwCsFz7.js";import{I as L}from"./Icon-BCNBiMEg.js";import"./chunk-4XZ63LWV-laKUlqim.js";import"./v4-CwV2VaSl.js";import"./vue.esm-bundler-S9zc6Wpc.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Dropdown-B14FGbTx.js";import"./PopoverTriggerReference-B8D-PfSb.js";import"./Primitive-DZpX8QWU.js";import"./index-Dm7VD4DC.js";import"./PopperContent-Q46ZxJO6.js";import"./Presence-BVs8m1Yx.js";import"./device-mzBmLsxe.js";import"./SelectList-DDs0Y1IW.js";import"./SelectListItemContainer-ug3rOVHZ.js";import"./SelectListItemDivider-CDg6g1xy.js";import"./Divider-Cfx8bFqy.js";import"./TextGroup-CIbAZRxD.js";import"./Skeleton-Dph7qEcf.js";import"./index-CPvnfNuQ.js";import"./Tooltip-DGxAUyqd.js";import"./SelectListItem-BSUo8-oj.js";import"./IconButton-BP3MsFJS.js";import"./Button-C24VVysr.js";import"./Badge-Nq8X1BJu.js";import"./fontawesome-CXWUXLFT.js";const Se={title:"Components/TopNav/UserDropdown",component:r,decorators:[k],parameters:{actions:{handles:["show","hide"]},design:{type:"figma",url:"https://www.figma.com/design/WeJCbVlnkL9HmEcoBpu5NU/LMS---Specific-Components---Limbo?node-id=9272-42857"}}},i={username:"Roman Kowalski",email:"roman.kowalski@gmail.com"},o={username:{control:"text"},email:{control:"text"},avatarUrl:{control:"text"},activityStatus:{control:{type:"select",labels:{undefined:"None (undefined)"}},options:[void 0,...Object.values(R)]},accessStatus:{control:{type:"select",labels:{undefined:"None (undefined)"}},options:[void 0,...Object.values(U)]}},h=`
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
        </div>`}),n={args:i,argTypes:o,render:O},t={args:i,argTypes:o,render:e=>({components:{UserDropdown:r},setup(){return{args:e}},template:`
            <div style="display: flex; justify-content: flex-end; width: 300px; padding: 40px 0;">
                <user-dropdown v-bind="args" />
            </div>`})},s={args:i,argTypes:o,render:e=>({components:{UserDropdown:r,SlotPlaceholder:H},setup(){return{args:e,SLOT_PLACEHOLDER_SIZES:P}},template:`
            <div style="display: flex; justify-content: flex-end; width: 300px; padding: 40px 0;">
                <user-dropdown v-bind="args">
                    <slot-placeholder label="default slot" :size="SLOT_PLACEHOLDER_SIZES.SMALL" />
                </user-dropdown>
            </div>`})},a={args:{username:"Roman Aleksander Kowalski-Nowakowski",email:"roman.aleksander.kowalski+newsletter@bardzo-dluga-domena.example.com"},argTypes:o,render:O},p={args:i,argTypes:o,render:e=>({components:{UserDropdown:r,UserDropdownItem:b,UserDropdownDivider:x,DsChip:E,TopNav:D,TopNavBranding:N},setup(){return{args:e,ICONS:L,CHIP_SIZES:C}},template:`
            <top-nav>
                <top-nav-branding title="Bethink" />
                <template #trailing>
                    <user-dropdown v-bind="args">
                        <template #default="{ close }">${h}</template>
                    </user-dropdown>
                </template>
            </top-nav>`})};var d,m,l;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(I=(T=p.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};const fe=["Interactive","WithoutItems","Slots","LongEmail","InTopNav"];export{p as InTopNav,n as Interactive,a as LongEmail,s as Slots,t as WithoutItems,fe as __namedExportsOrder,Se as default};
