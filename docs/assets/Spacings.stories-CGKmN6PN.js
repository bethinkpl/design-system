const g={title:"foundations/Spacings"},c=2,i=[28,20,16,12,10,8,6,5,4,3,2,1].map(e=>({name:`space-${e}`,value:c*e})),r=()=>({data(){return{spacings:Object.freeze(i)}},methods:{getStyles(e){return`
                    background-color: gray;
                    margin-bottom: 30px;
                    height: ${e.value}px;
                    width: ${e.value}px;
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
    `}),n=r.bind({}),p={},o={};n.argTypes=o;n.args=p;var a,s,t;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`() => ({
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
})`,...(t=(s=n.parameters)==null?void 0:s.docs)==null?void 0:t.source}}};const d=["Interactive"];export{n as Interactive,d as __namedExportsOrder,g as default};
