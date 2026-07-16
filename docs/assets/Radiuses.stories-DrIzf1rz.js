const i={title:"foundations/Radiuses"},t=[{name:"radius-xs",value:"2px"},{name:"radius-s",value:"4px"},{name:"radius-m",value:"6px"},{name:"radius-l",value:"8px"},{name:"radius-xl",value:"200px"}],n=()=>({setup(){return{radiuses:t}},methods:{getStyles(d){return`
                border-radius: ${d.value};
                background-color: gray;
                height: 80px;
                width: 160px;
            `}},template:`
        <div>
            <div v-for="radius in radiuses" style="margin-bottom: 24px;">
                <code>
                    \${{ radius.name }}: {{ radius.value }}
                </code>
                <div :style="getStyles(radius)"></div>
            </div>
        </div>
    `}),e=n.bind({});var a,s,r;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`() => ({
  setup() {
    return {
      radiuses
    };
  },
  methods: {
    getStyles(radius) {
      return \`
                border-radius: \${radius.value};
                background-color: gray;
                height: 80px;
                width: 160px;
            \`;
    }
  },
  template: \`
        <div>
            <div v-for="radius in radiuses" style="margin-bottom: 24px;">
                <code>
                    \\\${{ radius.name }}: {{ radius.value }}
                </code>
                <div :style="getStyles(radius)"></div>
            </div>
        </div>
    \`
})`,...(r=(s=e.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};const u=["Static"];export{e as Static,u as __namedExportsOrder,i as default};
