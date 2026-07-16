const i={title:"foundations/Shadows"},e=[{name:"shadow-s",modifier:"-ds-shadowS"},{name:"shadow-m",modifier:"-ds-shadowM"},{name:"shadow-l",modifier:"-ds-shadowL"},{name:"shadow-xl",modifier:"-ds-shadowXl"},{name:"shadow-inset-s",modifier:"-ds-shadowInsetS"},{name:"shadow-inset-m",modifier:"-ds-shadowInsetM"}],n=()=>({setup(){return{shadows:e}},template:`
        <div style="padding: 24px;">
            <div v-for="shadow in shadows" style="margin-bottom: 48px;">
                <code>
                    \${{ shadow.name }}
                </code>
                <div :class="['ds-shadow', shadow.modifier]" style="margin-top: 12px;"></div>
            </div>
        </div>
    `}),s=n.bind({});var d,o,a;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`() => ({
  setup() {
    return {
      shadows
    };
  },
  template: \`
        <div style="padding: 24px;">
            <div v-for="shadow in shadows" style="margin-bottom: 48px;">
                <code>
                    \\\${{ shadow.name }}
                </code>
                <div :class="['ds-shadow', shadow.modifier]" style="margin-top: 12px;"></div>
            </div>
        </div>
    \`
})`,...(a=(o=s.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const t=["Static"];export{s as Static,t as __namedExportsOrder,i as default};
