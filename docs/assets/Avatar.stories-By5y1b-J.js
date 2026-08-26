import{A as o,a as t,b as k,c as v}from"./Avatar-vs8jnc3m.js";import{L as w}from"./logo-badge-BJZHaZGL.js";import"./vue.esm-bundler-BjwGMXGm.js";import"./Badge-CNM-wkWR.js";import"./Icon-CdUzGdbx.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Tooltip-C3_MzQ5E.js";import"./device-mzBmLsxe.js";const R={title:"Components/Avatar",component:o,render:e=>({components:{Avatar:o},setup(){return{args:e}},template:'<Avatar v-bind="args" />'}),argTypes:{size:{control:"select",options:Object.values(t)},accessStatus:{control:{type:"select",labels:{undefined:"None (undefined)"}},options:[void 0,...Object.values(k)]},activityStatus:{control:{type:"select",labels:{undefined:"None (undefined)"}},options:[void 0,...Object.values(v)]},activityStatusTooltip:{control:"text"}}},a={args:{size:t.X_SMALL,username:"Dariusz Chrapek",avatarUrl:"https://wiecejnizlek.pl/_cms/glide/http/aHR0cHM6Ly9jbXMubGFuZGluZy5iZXRoaW5rLnRlY2gvYXNzZXRzL3RlYW0vZGFyaXVzemlyZW5ldXN6X2NocmFwZWsucG5n?w=400&h=400&fit=contain&q=85&fm=webp&dpr=1&t=",teamMemberImageUrl:"https://lek.wiecejnizlek.pl/images/lek/logo-badge.svg",activityStatusTooltip:"Active now"}};a.parameters={design:{type:"figma",url:"https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=12364-12175&t=UpUoIm9oCAaH4dEp-4"}};const r={render:e=>({components:{Avatar:o,LogoBadge:w},setup(){return{args:e}},template:'<Avatar v-bind="args"><template #teamMemberImage><logo-badge /></template></Avatar>'}),args:{size:t.MEDIUM,username:"Dariusz Chrapek",avatarUrl:"https://wiecejnizlek.pl/_cms/glide/http/aHR0cHM6Ly9jbXMubGFuZGluZy5iZXRoaW5rLnRlY2gvYXNzZXRzL3RlYW0vZGFyaXVzemlyZW5ldXN6X2NocmFwZWsucG5n?w=400&h=400&fit=contain&q=85&fm=webp&dpr=1&t=",accessStatus:k.TEAM_MEMBER}},s={render:e=>({components:{Avatar:o},setup(){return{args:e,names:["Arkadiusz Kowalski","Bartosz Nowak","Cezary Kowalczyk","Dariusz Chrapek","Edward Nowak","Feliks Kowalski","Grzegorz Nowak","Henryk Kowalczyk","Ireneusz Nowak","Jacek Kowalski","Kamil Nowak","Leszek Kowalczyk","Marek Nowak","Norbert Kowalski","Oskar Nowak","Piotr Kowalczyk"]}},template:'<div style="display: flex; gap: 12px;  flex-wrap: wrap;"><div v-for="name in names"><Avatar v-bind="args" :username="name" /></div></div>'}),argTypes:{size:{control:"select",options:Object.values(t)},username:{control:!1},avatarUrl:{control:!1}},args:{size:t.X_SMALL,teamMemberImageUrl:"https://lek.wiecejnizlek.pl/images/lek/logo-badge.svg"}};var n,l,i;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    size: AVATAR_SIZES.X_SMALL,
    username: 'Dariusz Chrapek',
    avatarUrl: 'https://wiecejnizlek.pl/_cms/glide/http/aHR0cHM6Ly9jbXMubGFuZGluZy5iZXRoaW5rLnRlY2gvYXNzZXRzL3RlYW0vZGFyaXVzemlyZW5ldXN6X2NocmFwZWsucG5n?w=400&h=400&fit=contain&q=85&fm=webp&dpr=1&t=',
    teamMemberImageUrl: 'https://lek.wiecejnizlek.pl/images/lek/logo-badge.svg',
    activityStatusTooltip: 'Active now'
  }
}`,...(i=(l=a.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var m,p,c;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: (args: AvatarProps) => ({
    components: {
      Avatar,
      LogoBadge
    },
    setup() {
      return {
        args
      };
    },
    template: \`<Avatar v-bind="args"><template #teamMemberImage><logo-badge /></template></Avatar>\`
  }),
  args: {
    size: AVATAR_SIZES.MEDIUM,
    username: 'Dariusz Chrapek',
    avatarUrl: 'https://wiecejnizlek.pl/_cms/glide/http/aHR0cHM6Ly9jbXMubGFuZGluZy5iZXRoaW5rLnRlY2gvYXNzZXRzL3RlYW0vZGFyaXVzemlyZW5ldXN6X2NocmFwZWsucG5n?w=400&h=400&fit=contain&q=85&fm=webp&dpr=1&t=',
    accessStatus: AVATAR_ACCESS_STATUSES.TEAM_MEMBER
  }
}`,...(c=(p=r.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var d,u,g;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(g=(u=s.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const N=["Interactive","InteractiveWithTeamMemberImageSlot","Colors"];export{s as Colors,a as Interactive,r as InteractiveWithTeamMemberImageSlot,N as __namedExportsOrder,R as default};
