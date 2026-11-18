const v={title:"foundations/Fade Masks"},c=[{call:"fadeMask(right, 40px)",modifier:"-ds-right",description:"Fades the content towards the right edge. The right padding lets the last item scroll fully out of the fade.",direction:"row"},{call:"fadeMask(bottom, 40px)",modifier:"-ds-bottom",description:"Same curve towards the bottom edge, for vertically scrolling lists.",direction:"column"},{call:"fadeMask(left, 40px, <offset>)",modifier:"-ds-leftOffset",description:"How TextGroup's eyebrow uses it: starts scrolled to the end, and the offset pushes the band out as the start comes closer, so the first item ends up unfaded.",direction:"row",hasScrollOffset:!0},{call:"flexOverflowMask(40px)",modifier:"-ds-flexOverflow",description:"Scrollable flex row with fadeMask(right) built in; it adds the right margin to the last child itself.",direction:"row"},{call:"fadeMaskBoth(vertical, 24px, 40px)",modifier:"-ds-bothVertical",description:"Fades the top and bottom edges in one mask, each with its own width. Two fadeMask calls on one element would override each other.",direction:"column"},{call:"fadeMaskBoth(horizontal, 40px)",modifier:"-ds-bothHorizontal",description:"Fades the left and right edges in one mask; the end width defaults to the start width.",direction:"row"}],f=["","-ds-primary"],m=Array.from({length:12},(e,s)=>`Item ${s+1}`),a=40,l=e=>{const s=e.scrollLeft-(e.clientWidth-e.scrollWidth),r=s>a?0:Math.floor(a-s);e.style.setProperty("--ds-fade-mask-demo-offset",`${r}px`)},n=e=>{e&&requestAnimationFrame(()=>l(e))},p=()=>({setup(){return{examples:c,surfaces:f,items:m,initScrollOffset:n,onScroll:e=>l(e.target)}},template:`
        <div class="ds-fadeMaskDemo">
            <div v-for="example in examples" :key="example.call" class="ds-fadeMaskDemo__example">
                <code>@include {{ example.call }};</code>
                <p class="ds-fadeMaskDemo__description">{{ example.description }}</p>
                <div class="ds-fadeMaskDemo__surfaces">
                    <div
                        v-for="surface in surfaces"
                        :key="surface"
                        :class="['ds-fadeMaskDemo__surface', surface]"
                    >
                        <div
                            :ref="example.hasScrollOffset ? initScrollOffset : undefined"
                            :class="['ds-fadeMaskDemo__box', '-ds-' + example.direction, example.modifier]"
                            @scroll="example.hasScrollOffset && onScroll($event)"
                        >
                            <div v-if="example.hasScrollOffset" class="ds-fadeMaskDemo__track">
                                <div v-for="item in items" :key="item" class="ds-fadeMaskDemo__item">{{ item }}</div>
                            </div>
                            <template v-else>
                                <div v-for="item in items" :key="item" class="ds-fadeMaskDemo__item">{{ item }}</div>
                            </template>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `}),t=p.bind({});var i,o,d;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`() => ({
  setup() {
    return {
      examples,
      surfaces,
      items,
      initScrollOffset,
      onScroll: (event: Event) => updateScrollOffset(event.target as HTMLElement)
    };
  },
  template: \`
        <div class="ds-fadeMaskDemo">
            <div v-for="example in examples" :key="example.call" class="ds-fadeMaskDemo__example">
                <code>@include {{ example.call }};</code>
                <p class="ds-fadeMaskDemo__description">{{ example.description }}</p>
                <div class="ds-fadeMaskDemo__surfaces">
                    <div
                        v-for="surface in surfaces"
                        :key="surface"
                        :class="['ds-fadeMaskDemo__surface', surface]"
                    >
                        <div
                            :ref="example.hasScrollOffset ? initScrollOffset : undefined"
                            :class="['ds-fadeMaskDemo__box', '-ds-' + example.direction, example.modifier]"
                            @scroll="example.hasScrollOffset && onScroll($event)"
                        >
                            <div v-if="example.hasScrollOffset" class="ds-fadeMaskDemo__track">
                                <div v-for="item in items" :key="item" class="ds-fadeMaskDemo__item">{{ item }}</div>
                            </div>
                            <template v-else>
                                <div v-for="item in items" :key="item" class="ds-fadeMaskDemo__item">{{ item }}</div>
                            </template>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    \`
})`,...(d=(o=t.parameters)==null?void 0:o.docs)==null?void 0:d.source}}};const h=["Static"];export{t as Static,h as __namedExportsOrder,v as default};
