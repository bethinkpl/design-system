const a={title:"foundations/Borders"},s=[{name:"border-xs",value:1},{name:"border-s",value:2},{name:"border-m",value:4},{name:"border-l",value:6},{name:"border-xl",value:8}],t=()=>({data(){return{spacings:Object.freeze(s)}},methods:{getStyles(n){return`border: black solid ${n.value}px;`}},template:`
        <div>
            <div v-for="spacing in spacings" style="margin-bottom: 24px;">
                <code>
                    \${{ spacing.name }}: {{ spacing.value }}px
                </code>
                <div :style="getStyles(spacing)">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            </div>
        </div>
    `}),e=t.bind({});e.parameters={design:{type:"figma",url:"https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=8375-32903&t=ItmVGTyxKahcKsdh-4"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => ({
  data() {
    return {
      spacings: Object.freeze(borderSizes)
    };
  },
  methods: {
    getStyles(spacing) {
      return \`border: black solid \${spacing.value}px;\`;
    }
  },
  template: \`
        <div>
            <div v-for="spacing in spacings" style="margin-bottom: 24px;">
                <code>
                    \\\${{ spacing.name }}: {{ spacing.value }}px
                </code>
                <div :style="getStyles(spacing)">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            </div>
        </div>
    \`
})`,...e.parameters?.docs?.source}}};const r=["Static"];export{e as Static,r as __namedExportsOrder,a as default};
