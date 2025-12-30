const o={title:"foundations/Borders"},r=[{name:"border-xs",value:1},{name:"border-s",value:2},{name:"border-m",value:4},{name:"border-l",value:6},{name:"border-xl",value:8}],i=()=>({data(){return{spacings:Object.freeze(r)}},methods:{getStyles(a){return`border: black solid ${a.value}px;`}},template:`
        <div>
            <div v-for="spacing in spacings" style="margin-bottom: 24px;">
                <code>
                    \${{ spacing.name }}: {{ spacing.value }}px
                </code>
                <div :style="getStyles(spacing)">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            </div>
        </div>
    `}),e=i.bind({});e.parameters={design:{type:"figma",url:"https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=8375-32903&t=ItmVGTyxKahcKsdh-4"}};var n,s,t;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`() => ({
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
})`,...(t=(s=e.parameters)==null?void 0:s.docs)==null?void 0:t.source}}};const d=["Static"];export{e as Static,d as __namedExportsOrder,o as default};
