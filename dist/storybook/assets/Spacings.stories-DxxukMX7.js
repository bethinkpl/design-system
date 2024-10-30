const o={title:"foundations/Spacings"},t=[{name:"space-4xl",value:80},{name:"space-3xl",value:64},{name:"space-2xl",value:56},{name:"space-xl",value:40},{name:"space-l",value:32},{name:"space-m",value:24},{name:"space-s",value:16},{name:"space-xs",value:12},{name:"space-2xs",value:8},{name:"space-3xs",value:6},{name:"space-4xs",value:4},{name:"space-5xs",value:2}],p=()=>({data(){return{spacings:Object.freeze(t)}},methods:{getStyles(a){return`
                    background-color: gray;
                    margin-bottom: 30px;
                    height: ${a.value}px;
                    width: ${a.value}px;
                `}},template:`
            <div>
            <div v-for="spacing in spacings">
                <h2>{{ spacing.name }}</h2>
                <code>
                    \${{ spacing.name }}: {{ spacing.value }}px
                </code>
                <div :style="getStyles(spacing)"></div>
            </div>
            </div>
    `}),e=p.bind({}),i={},r={};e.argTypes=r;e.args=i;var n,s,c;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`() => ({
  data() {
    return {
      spacings: Object.freeze(spacings)
    };
  },
  methods: {
    getStyles(spacing) {
      return \`
                    background-color: gray;
                    margin-bottom: 30px;
                    height: \${spacing.value}px;
                    width: \${spacing.value}px;
                \`;
    }
  },
  template: \`
            <div>
            <div v-for="spacing in spacings">
                <h2>{{ spacing.name }}</h2>
                <code>
                    \\\${{ spacing.name }}: {{ spacing.value }}px
                </code>
                <div :style="getStyles(spacing)"></div>
            </div>
            </div>
    \`
})`,...(c=(s=e.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};const g=["Interactive"];export{e as Interactive,g as __namedExportsOrder,o as default};
