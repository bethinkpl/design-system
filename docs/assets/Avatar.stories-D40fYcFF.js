import{A as o,a as r,b as k,c as m}from"./Avatar-DJEZDpOI.js";import"./vue.esm-bundler-DcRN7CPI.js";import"./Badge-B8eFbzRx.js";import"./Icon-DUeXRUm6.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Tooltip-BvaJ_K9_.js";import"./device-9fgosCm4.js";const S={title:"Components/Avatar",component:o,render:s=>({components:{Avatar:o},setup(){return{args:s}},template:'<Avatar v-bind="args" />'}),argTypes:{size:{control:"select",options:Object.values(r)},accessStatus:{control:{type:"select",labels:{undefined:"None (undefined)"}},options:[void 0,...Object.values(m)]},activityStatus:{control:{type:"select",labels:{undefined:"None (undefined)"}},options:[void 0,...Object.values(k)]},activityStatusTooltip:{control:"text"}}},e={args:{size:r.X_SMALL,username:"Dariusz Chrapek",avatarUrl:"https://wiecejnizlek.pl/wp-content/uploads/2021/08/Dariusz_Chrapek-uai-2996x2996-1-scaled.jpeg",teamMemberImageUrl:"https://lek.wiecejnizlek.pl/images/lek/logo-badge.svg",activityStatusTooltip:"Active now"}};e.parameters={design:{type:"figma",url:"https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=12364-12175&t=UpUoIm9oCAaH4dEp-4"}};const a={render:s=>({components:{Avatar:o},setup(){return{args:s,names:["Arkadiusz Kowalski","Bartosz Nowak","Cezary Kowalczyk","Dariusz Chrapek","Edward Nowak","Feliks Kowalski","Grzegorz Nowak","Henryk Kowalczyk","Ireneusz Nowak","Jacek Kowalski","Kamil Nowak","Leszek Kowalczyk","Marek Nowak","Norbert Kowalski","Oskar Nowak","Piotr Kowalczyk"]}},template:'<div style="display: flex; gap: 12px;  flex-wrap: wrap;"><div v-for="name in names"><Avatar v-bind="args" :username="name" /></div></div>'}),argTypes:{size:{control:"select",options:Object.values(r)},username:{control:!1},avatarUrl:{control:!1}},args:{size:r.X_SMALL,teamMemberImageUrl:"https://lek.wiecejnizlek.pl/images/lek/logo-badge.svg"}};var t,i,l;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    size: AVATAR_SIZES.X_SMALL,
    username: 'Dariusz Chrapek',
    avatarUrl: 'https://wiecejnizlek.pl/wp-content/uploads/2021/08/Dariusz_Chrapek-uai-2996x2996-1-scaled.jpeg',
    teamMemberImageUrl: 'https://lek.wiecejnizlek.pl/images/lek/logo-badge.svg',
    activityStatusTooltip: 'Active now'
  }
}`,...(l=(i=e.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var n,p,c;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: (args: AvatarProps) => ({
    components: {
      Avatar
    },
    setup() {
      return {
        args,
        names: ['Arkadiusz Kowalski', 'Bartosz Nowak', 'Cezary Kowalczyk', 'Dariusz Chrapek', 'Edward Nowak', 'Feliks Kowalski', 'Grzegorz Nowak', 'Henryk Kowalczyk', 'Ireneusz Nowak', 'Jacek Kowalski', 'Kamil Nowak', 'Leszek Kowalczyk', 'Marek Nowak', 'Norbert Kowalski', 'Oskar Nowak', 'Piotr Kowalczyk']
      };
    },
    template: \`<div style="display: flex; gap: 12px;  flex-wrap: wrap;"><div v-for="name in names"><Avatar v-bind="args" :username="name" /></div></div>\`
  }),
  argTypes: {
    size: {
      control: 'select',
      options: Object.values(AVATAR_SIZES)
    },
    username: {
      control: false
    },
    avatarUrl: {
      control: false
    }
  },
  args: {
    size: AVATAR_SIZES.X_SMALL,
    teamMemberImageUrl: 'https://lek.wiecejnizlek.pl/images/lek/logo-badge.svg'
  }
}`,...(c=(p=a.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const y=["Interactive","Colors"];export{a as Colors,e as Interactive,y as __namedExportsOrder,S as default};
