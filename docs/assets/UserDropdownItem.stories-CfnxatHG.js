import{_ as l}from"./UserDropdownItem-CbvOEq5Y.js";import{S as n}from"./SelectList-s7WnQXXV.js";import{D as p,C as c}from"./Chip-Cj4oLHjB.js";import{a as e}from"./SelectListItem-bmZ24eci.js";import{I as o}from"./Icon-DWO0jEK5.js";import"./vue.esm-bundler-BjwGMXGm.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Button-BTZgnZ5_.js";import"./IconButton-DdE4tqnq.js";import"./device-mzBmLsxe.js";const u={title:"Components/TopNav/UserDropdown/UserDropdownItem",component:l},t={args:{label:"Wiadomości",iconLeft:"FA_COMMENT",href:"",state:e.DEFAULT,metadataSlot:!0},argTypes:{iconLeft:{control:"select",options:[null,...Object.keys(o)]},state:{control:"select",options:Object.values(e)},href:{control:"text"},metadataSlot:{control:"boolean"}},render:i=>({components:{UserDropdownItem:l,SelectList:n,DsChip:p},setup(){return{args:i,ICONS:o,CHIP_SIZES:c}},template:`
            <div style="width: 220px;">
                <select-list>
                    <user-dropdown-item
                        :label="args.label"
                        :icon-left="ICONS[args.iconLeft]"
                        :href="args.href"
                        :state="args.state"
                    >
                        <template v-if="args.metadataSlot" #metadata>
                            <ds-chip label="12" :size="CHIP_SIZES.X_SMALL" />
                        </template>
                    </user-dropdown-item>
                </select-list>
            </div>`})};var a,r,s;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    label: 'Wiadomości',
    iconLeft: 'FA_COMMENT',
    href: '',
    state: SELECT_LIST_ITEM_STATES.DEFAULT,
    metadataSlot: true
  } as Args,
  argTypes: {
    iconLeft: {
      control: 'select',
      options: [null, ...Object.keys(ICONS)]
    },
    state: {
      control: 'select',
      options: Object.values(SELECT_LIST_ITEM_STATES)
    },
    href: {
      control: 'text'
    },
    metadataSlot: {
      control: 'boolean'
    }
  } as ArgTypes,
  render: (args: Args) => ({
    components: {
      UserDropdownItem,
      SelectList,
      DsChip
    },
    setup() {
      return {
        args,
        ICONS,
        CHIP_SIZES
      };
    },
    template: \`
            <div style="width: 220px;">
                <select-list>
                    <user-dropdown-item
                        :label="args.label"
                        :icon-left="ICONS[args.iconLeft]"
                        :href="args.href"
                        :state="args.state"
                    >
                        <template v-if="args.metadataSlot" #metadata>
                            <ds-chip label="12" :size="CHIP_SIZES.X_SMALL" />
                        </template>
                    </user-dropdown-item>
                </select-list>
            </div>\`
  })
}`,...(s=(r=t.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const C=["Interactive"];export{t as Interactive,C as __namedExportsOrder,u as default};
