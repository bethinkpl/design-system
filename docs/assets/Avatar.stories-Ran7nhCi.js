import{A as o,a as r}from"./Avatar-OqeGv3bT.js";import"./vue.esm-bundler-DmkhfO_9.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const z={title:"Components/Avatar",component:o,render:s=>({components:{Avatar:o},setup(){return{args:s}},template:'<Avatar v-bind="args" />'}),argTypes:{size:{control:"select",options:[...Object.values(r)]}}},a={args:{size:r.X_SMALL,username:"Dariusz Chrapek",avatarUrl:"https://wiecejnizlek.pl/wp-content/uploads/2021/08/Dariusz_Chrapek-uai-2996x2996-1-scaled.jpeg"}};a.parameters={design:{type:"figma",url:"https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=12364-12175&t=UpUoIm9oCAaH4dEp-4"}};const e={render:s=>({components:{Avatar:o},setup(){return{args:s,names:["Arkadiusz Kowalski","Bartosz Nowak","Cezary Kowalczyk","Dariusz Chrapek","Edward Nowak","Feliks Kowalski","Grzegorz Nowak","Henryk Kowalczyk","Ireneusz Nowak","Jacek Kowalski","Kamil Nowak","Leszek Kowalczyk","Marek Nowak","Norbert Kowalski","Oskar Nowak","Piotr Kowalczyk"]}},template:'<div style="display: flex; gap: 12px;  flex-wrap: wrap;"><div v-for="name in names"><Avatar :username="name" :size="args.size" /></div></div>'}),argTypes:{size:{control:"select",options:Object.values(r)},username:{control:!1},avatarUrl:{control:!1}},args:{size:r.X_SMALL}};var t,n,i;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    size: AVATAR_SIZES.X_SMALL,
    username: 'Dariusz Chrapek',
    avatarUrl: 'https://wiecejnizlek.pl/wp-content/uploads/2021/08/Dariusz_Chrapek-uai-2996x2996-1-scaled.jpeg'
  }
}`,...(i=(n=a.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var l,p,k;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
    template: \`<div style="display: flex; gap: 12px;  flex-wrap: wrap;"><div v-for="name in names"><Avatar :username="name" :size="args.size" /></div></div>\`
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
    size: AVATAR_SIZES.X_SMALL
  }
}`,...(k=(p=e.parameters)==null?void 0:p.docs)==null?void 0:k.source}}};const d=["Interactive","Colors"];export{e as Colors,a as Interactive,d as __namedExportsOrder,z as default};
