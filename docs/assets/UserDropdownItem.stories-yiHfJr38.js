import{_ as l}from"./UserDropdownItem-FM0UCaJf.js";import{S as n}from"./SelectList-DDs0Y1IW.js";import{D as p,C as m}from"./Chip-B885g_GX.js";import{a as e}from"./SelectListItem-BSUo8-oj.js";import{I as o}from"./Icon-BCNBiMEg.js";import"./vue.esm-bundler-S9zc6Wpc.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./IconButton-BP3MsFJS.js";import"./Button-C24VVysr.js";import"./device-mzBmLsxe.js";import"./fontawesome-CXWUXLFT.js";const C={title:"Components/TopNav/UserDropdown/UserDropdownItem",component:l},t={args:{label:"Wiadomości",iconLeft:"FA_COMMENT",href:"",state:e.DEFAULT,metadataSlot:!0},argTypes:{iconLeft:{control:"select",options:[null,...Object.keys(o)]},state:{control:"select",options:Object.values(e)},href:{control:"text"},metadataSlot:{control:"boolean"}},render:i=>({components:{UserDropdownItem:l,SelectList:n,DsChip:p},setup(){return{args:i,ICONS:o,CHIP_SIZES:m}},template:`
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
            </div>`})};var r,a,s;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(s=(a=t.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const b=["Interactive"];export{t as Interactive,b as __namedExportsOrder,C as default};
