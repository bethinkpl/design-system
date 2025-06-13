import{T as n,a}from"./ThreeColumnLayout-DXA1815_.js";import"./vue.esm-bundler-DD4BrEtS.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const c={title:"Components/Layouts/ThreeColumnLayout",component:n,decorators:[e=>({components:{story:e},template:`<div style='display: flex; width: 100vw; height: 100vh;  background: lightgray; flex-direction: column;'><div style="padding: 16px; background: lightcoral; z-index: 1">Example header</div><story /></div>`}),e=>({components:{story:e},template:"<div style='display: flex; width: 100%; height: 100%; font-size: 12px; color: #fff;'><story /></div>"})]},r=e=>({components:{ThreeColumnLayout:n},setup(){return e},template:`
        <three-column-layout :rightColumnSize='rightColumnSize'
                             :rightColumnVisible='rightColumnVisible'
                             :leftColumnVisible='leftColumnVisible'
                             :initialMobileRightColumnVisibleState='initialMobileRightColumnVisibleState'
                             :initialMobileLeftColumnVisibleState='initialMobileLeftColumnVisibleState'
                             :contentWithoutPadding='contentWithoutPadding'>
        <template #leftColumn>
            <div style='width: 100%; height: 100%; background: rgb(249, 27, 214);'>leftColumn</div>
        </template>
        <template #rightColumn>
            <div style='width: 100%; height: 100%;'
                 :style='{"background": (rightColumnSize === "medium" ? "#2c7bfb" : "#817c81")}'>rightColumn
            </div>
        </template>

        <div style='width: 100%; height: 100%; background: #9133c2;'>
            content
        </div>
        </three-column-layout>`}),t=r.bind({}),u={rightColumnVisible:!0,initialMobileRightColumnVisibleState:!0,leftColumnVisible:!0,initialMobileLeftColumnVisibleState:!1,contentWithoutPadding:!1,rightColumnSize:a.MEDIUM},s={rightColumnSize:{control:"select",options:Object.values(a)},leftColumnVisible:{control:"boolean"},rightColumnVisible:{control:"boolean"},initialMobileRightColumnVisibleState:{control:"boolean"},initialMobileLeftColumnVisibleState:{control:"boolean"},contentWithoutPadding:{control:"boolean"}};t.argTypes=s;t.args=u;t.parameters={layout:"fullscreen",design:{type:"figma",url:"https://www.figma.com/file/AYTmGtcujVq9subNrTpHnX/Layout---nowa-koncepcja?type=design&node-id=1-7&t=ANHJptt0VBE6JEs4-4"}};var i,l,o;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`args => ({
  components: {
    ThreeColumnLayout
  },
  setup() {
    return args;
  },
  template: \`
        <three-column-layout :rightColumnSize='rightColumnSize'
                             :rightColumnVisible='rightColumnVisible'
                             :leftColumnVisible='leftColumnVisible'
                             :initialMobileRightColumnVisibleState='initialMobileRightColumnVisibleState'
                             :initialMobileLeftColumnVisibleState='initialMobileLeftColumnVisibleState'
                             :contentWithoutPadding='contentWithoutPadding'>
        <template #leftColumn>
            <div style='width: 100%; height: 100%; background: rgb(249, 27, 214);'>leftColumn</div>
        </template>
        <template #rightColumn>
            <div style='width: 100%; height: 100%;'
                 :style='{"background": (rightColumnSize === "medium" ? "#2c7bfb" : "#817c81")}'>rightColumn
            </div>
        </template>

        <div style='width: 100%; height: 100%; background: #9133c2;'>
            content
        </div>
        </three-column-layout>\`
})`,...(o=(l=t.parameters)==null?void 0:l.docs)==null?void 0:o.source}}};const g=["Interactive"];export{t as Interactive,g as __namedExportsOrder,c as default};
