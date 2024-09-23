try{
(()=>{var So=Object.defineProperty;var Eo=(o,e)=>{for(var t in e)So(o,t,{get:e[t],enumerable:!0})};var g={NODE_ENV:"production",NODE_PATH:[],STORYBOOK:"true",PUBLIC_URL:".",FONT_AWESOME_AUTH_TOKEN:"5F9A597F-D444-4D8D-9F48-323E8A7D2912"};var ce={};Eo(ce,{Children:()=>Mo,Component:()=>ke,Fragment:()=>_,Profiler:()=>ko,PureComponent:()=>To,StrictMode:()=>Po,Suspense:()=>Te,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:()=>No,cloneElement:()=>Ro,createContext:()=>Oo,createElement:()=>Bo,createFactory:()=>Lo,createRef:()=>Ho,default:()=>Co,forwardRef:()=>Io,isValidElement:()=>Fo,lazy:()=>Pe,memo:()=>zo,startTransition:()=>Uo,unstable_act:()=>Do,useCallback:()=>k,useContext:()=>jo,useDebugValue:()=>Vo,useDeferredValue:()=>Yo,useEffect:()=>N,useId:()=>Wo,useImperativeHandle:()=>Go,useInsertionEffect:()=>Zo,useLayoutEffect:()=>qo,useMemo:()=>Y,useReducer:()=>Xo,useRef:()=>Ko,useState:()=>T,useSyncExternalStore:()=>Jo,useTransition:()=>Qo,version:()=>er});var Co=__REACT__,{Children:Mo,Component:ke,Fragment:_,Profiler:ko,PureComponent:To,StrictMode:Po,Suspense:Te,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:No,cloneElement:Ro,createContext:Oo,createElement:Bo,createFactory:Lo,createRef:Ho,forwardRef:Io,isValidElement:Fo,lazy:Pe,memo:zo,startTransition:Uo,unstable_act:Do,useCallback:k,useContext:jo,useDebugValue:Vo,useDeferredValue:Yo,useEffect:N,useId:Wo,useImperativeHandle:Go,useInsertionEffect:Zo,useLayoutEffect:qo,useMemo:Y,useReducer:Xo,useRef:Ko,useState:T,useSyncExternalStore:Jo,useTransition:Qo,version:er}=__REACT__;var oi=__STORYBOOK_THEMING__,{CacheProvider:ri,ClassNames:ii,Global:si,ThemeProvider:ni,background:ai,color:li,convert:ci,create:di,createCache:hi,createGlobal:pi,createReset:ui,css:P,darken:fi,ensure:gi,ignoreSsrWarning:mi,isPropValid:vi,jsx:p,keyframes:yi,lighten:bi,styled:xi,themes:$i,typography:_i,useTheme:wi,withTheme:Si}=__STORYBOOK_THEMING__;var ki=__STORYBOOK_COMPONENTS__,{A:Ti,ActionBar:Pi,AddonPanel:ct,Badge:Ni,Bar:Ri,Blockquote:Oi,Button:Bi,ClipboardCode:Li,Code:Hi,DL:Ii,Div:Fi,DocumentWrapper:zi,EmptyTabContent:Ui,ErrorFormatter:Di,FlexBar:dt,Form:ji,H1:Vi,H2:Yi,H3:Wi,H4:Gi,H5:Zi,H6:qi,HR:Xi,IconButton:de,IconButtonSkeleton:Ki,Icons:he,Img:Ji,LI:Qi,Link:J,ListItem:es,Loader:ts,Modal:os,OL:rs,P:is,Placeholder:I,Pre:ss,ResetWrapper:ns,ScrollArea:as,Separator:ht,Spaced:ls,Span:cs,StorybookIcon:ds,StorybookLogo:hs,Symbols:ps,SyntaxHighlighter:us,TT:fs,TabBar:gs,TabButton:ms,TabWrapper:vs,Table:ys,Tabs:pt,TabsState:bs,TooltipLinkList:xs,TooltipMessage:$s,TooltipNote:_s,UL:ws,WithTooltip:Ss,WithTooltipPure:Es,Zoom:As,codeCommon:Cs,components:Ms,createCopyToClipboardFunction:ks,getStoryHref:Ts,icons:Ps,interleaveSeparators:Ns,nameSpaceClassNames:Rs,resetComponents:Os,withReset:Bs}=__STORYBOOK_COMPONENTS__;var pe=window,ue=pe.ShadowRoot&&(pe.ShadyCSS===void 0||pe.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ne=Symbol(),ut=new WeakMap,Q=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==Ne)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(ue&&e===void 0){let r=t!==void 0&&t.length===1;r&&(e=ut.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&ut.set(t,e))}return e}toString(){return this.cssText}},ft=o=>new Q(typeof o=="string"?o:o+"",void 0,Ne),A=(o,...e)=>{let t=o.length===1?o[0]:e.reduce((r,i,s)=>r+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+o[s+1],o[0]);return new Q(t,o,Ne)},Re=(o,e)=>{ue?o.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{let r=document.createElement("style"),i=pe.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=t.cssText,o.appendChild(r)})},fe=ue?o=>o:o=>o instanceof CSSStyleSheet?(e=>{let t="";for(let r of e.cssRules)t+=r.cssText;return ft(t)})(o):o;var Oe,ge=window,gt=ge.trustedTypes,tr=gt?gt.emptyScript:"",mt=ge.reactiveElementPolyfillSupport,Le={toAttribute(o,e){switch(e){case Boolean:o=o?tr:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,e){let t=o;switch(e){case Boolean:t=o!==null;break;case Number:t=o===null?null:Number(o);break;case Object:case Array:try{t=JSON.parse(o)}catch{t=null}}return t}},vt=(o,e)=>e!==o&&(e==e||o==o),Be={attribute:!0,type:String,converter:Le,reflect:!1,hasChanged:vt},B=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();let e=[];return this.elementProperties.forEach((t,r)=>{let i=this._$Ep(r,t);i!==void 0&&(this._$Ev.set(i,r),e.push(i))}),e}static createProperty(e,t=Be){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){let r=typeof e=="symbol"?Symbol():"__"+e,i=this.getPropertyDescriptor(e,r,t);i!==void 0&&Object.defineProperty(this.prototype,e,i)}}static getPropertyDescriptor(e,t,r){return{get(){return this[t]},set(i){let s=this[e];this[t]=i,this.requestUpdate(e,s,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Be}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;let e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let t=this.properties,r=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(let i of r)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let r=new Set(e.flat(1/0).reverse());for(let i of r)t.unshift(fe(i))}else e!==void 0&&t.push(fe(e));return t}static _$Ep(e,t){let r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,r;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)===null||r===void 0||r.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;let t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return Re(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var r;return(r=t.hostConnected)===null||r===void 0?void 0:r.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var r;return(r=t.hostDisconnected)===null||r===void 0?void 0:r.call(t)})}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$EO(e,t,r=Be){var i;let s=this.constructor._$Ep(e,r);if(s!==void 0&&r.reflect===!0){let n=(((i=r.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?r.converter:Le).toAttribute(t,r.type);this._$El=e,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$El=null}}_$AK(e,t){var r;let i=this.constructor,s=i._$Ev.get(e);if(s!==void 0&&this._$El!==s){let n=i.getPropertyOptions(s),c=typeof n.converter=="function"?{fromAttribute:n.converter}:((r=n.converter)===null||r===void 0?void 0:r.fromAttribute)!==void 0?n.converter:Le;this._$El=s,this[s]=c.fromAttribute(t,n.type),this._$El=null}}requestUpdate(e,t,r){let i=!0;e!==void 0&&(((r=r||this.constructor.getPropertyOptions(e)).hasChanged||vt)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),r.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,r))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,s)=>this[s]=i),this._$Ei=void 0);let t=!1,r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),(e=this._$ES)===null||e===void 0||e.forEach(i=>{var s;return(s=i.hostUpdate)===null||s===void 0?void 0:s.call(i)}),this.update(r)):this._$Ek()}catch(i){throw t=!1,this._$Ek(),i}t&&this._$AE(r)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(r=>{var i;return(i=r.hostUpdated)===null||i===void 0?void 0:i.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,r)=>this._$EO(r,this[r],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};B.finalized=!0,B.elementProperties=new Map,B.elementStyles=[],B.shadowRootOptions={mode:"open"},mt?.({ReactiveElement:B}),((Oe=ge.reactiveElementVersions)!==null&&Oe!==void 0?Oe:ge.reactiveElementVersions=[]).push("1.6.1");var He,me=window,G=me.trustedTypes,yt=G?G.createPolicy("lit-html",{createHTML:o=>o}):void 0,F=`lit$${(Math.random()+"").slice(9)}$`,Et="?"+F,or=`<${Et}>`,Z=document,te=(o="")=>Z.createComment(o),oe=o=>o===null||typeof o!="object"&&typeof o!="function",At=Array.isArray,rr=o=>At(o)||typeof o?.[Symbol.iterator]=="function",ee=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,bt=/-->/g,xt=/>/g,j=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),$t=/'/g,_t=/"/g,Ct=/^(?:script|style|textarea|title)$/i,Mt=o=>(e,...t)=>({_$litType$:o,strings:e,values:t}),b=Mt(1),C=Mt(2),L=Symbol.for("lit-noChange"),w=Symbol.for("lit-nothing"),wt=new WeakMap,W=Z.createTreeWalker(Z,129,null,!1),ir=(o,e)=>{let t=o.length-1,r=[],i,s=e===2?"<svg>":"",n=ee;for(let a=0;a<t;a++){let l=o[a],d,h,u=-1,f=0;for(;f<l.length&&(n.lastIndex=f,h=n.exec(l),h!==null);)f=n.lastIndex,n===ee?h[1]==="!--"?n=bt:h[1]!==void 0?n=xt:h[2]!==void 0?(Ct.test(h[2])&&(i=RegExp("</"+h[2],"g")),n=j):h[3]!==void 0&&(n=j):n===j?h[0]===">"?(n=i??ee,u=-1):h[1]===void 0?u=-2:(u=n.lastIndex-h[2].length,d=h[1],n=h[3]===void 0?j:h[3]==='"'?_t:$t):n===_t||n===$t?n=j:n===bt||n===xt?n=ee:(n=j,i=void 0);let m=n===j&&o[a+1].startsWith("/>")?" ":"";s+=n===ee?l+or:u>=0?(r.push(d),l.slice(0,u)+"$lit$"+l.slice(u)+F+m):l+F+(u===-2?(r.push(void 0),a):m)}let c=s+(o[t]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return[yt!==void 0?yt.createHTML(c):c,r]},re=class o{constructor({strings:e,_$litType$:t},r){let i;this.parts=[];let s=0,n=0,c=e.length-1,a=this.parts,[l,d]=ir(e,t);if(this.el=o.createElement(l,r),W.currentNode=this.el.content,t===2){let h=this.el.content,u=h.firstChild;u.remove(),h.append(...u.childNodes)}for(;(i=W.nextNode())!==null&&a.length<c;){if(i.nodeType===1){if(i.hasAttributes()){let h=[];for(let u of i.getAttributeNames())if(u.endsWith("$lit$")||u.startsWith(F)){let f=d[n++];if(h.push(u),f!==void 0){let m=i.getAttribute(f.toLowerCase()+"$lit$").split(F),x=/([.?@])?(.*)/.exec(f);a.push({type:1,index:s,name:x[2],strings:m,ctor:x[1]==="."?Fe:x[1]==="?"?ze:x[1]==="@"?Ue:X})}else a.push({type:6,index:s})}for(let u of h)i.removeAttribute(u)}if(Ct.test(i.tagName)){let h=i.textContent.split(F),u=h.length-1;if(u>0){i.textContent=G?G.emptyScript:"";for(let f=0;f<u;f++)i.append(h[f],te()),W.nextNode(),a.push({type:2,index:++s});i.append(h[u],te())}}}else if(i.nodeType===8)if(i.data===Et)a.push({type:2,index:s});else{let h=-1;for(;(h=i.data.indexOf(F,h+1))!==-1;)a.push({type:7,index:s}),h+=F.length-1}s++}}static createElement(e,t){let r=Z.createElement("template");return r.innerHTML=e,r}};function q(o,e,t=o,r){var i,s,n,c;if(e===L)return e;let a=r!==void 0?(i=t._$Co)===null||i===void 0?void 0:i[r]:t._$Cl,l=oe(e)?void 0:e._$litDirective$;return a?.constructor!==l&&((s=a?._$AO)===null||s===void 0||s.call(a,!1),l===void 0?a=void 0:(a=new l(o),a._$AT(o,t,r)),r!==void 0?((n=(c=t)._$Co)!==null&&n!==void 0?n:c._$Co=[])[r]=a:t._$Cl=a),a!==void 0&&(e=q(o,a._$AS(o,e.values),a,r)),e}var Ie=class{constructor(e,t){this.u=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(e){var t;let{el:{content:r},parts:i}=this._$AD,s=((t=e?.creationScope)!==null&&t!==void 0?t:Z).importNode(r,!0);W.currentNode=s;let n=W.nextNode(),c=0,a=0,l=i[0];for(;l!==void 0;){if(c===l.index){let d;l.type===2?d=new ie(n,n.nextSibling,this,e):l.type===1?d=new l.ctor(n,l.name,l.strings,this,e):l.type===6&&(d=new De(n,this,e)),this.u.push(d),l=i[++a]}c!==l?.index&&(n=W.nextNode(),c++)}return s}p(e){let t=0;for(let r of this.u)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}},ie=class o{constructor(e,t,r,i){var s;this.type=2,this._$AH=w,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=i,this._$Cm=(s=i?.isConnected)===null||s===void 0||s}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cm}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=q(this,e,t),oe(e)?e===w||e==null||e===""?(this._$AH!==w&&this._$AR(),this._$AH=w):e!==this._$AH&&e!==L&&this.g(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):rr(e)?this.k(e):this.g(e)}O(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}g(e){this._$AH!==w&&oe(this._$AH)?this._$AA.nextSibling.data=e:this.T(Z.createTextNode(e)),this._$AH=e}$(e){var t;let{values:r,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=re.createElement(i.h,this.options)),i);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===s)this._$AH.p(r);else{let n=new Ie(s,this),c=n.v(this.options);n.p(r),this.T(c),this._$AH=n}}_$AC(e){let t=wt.get(e.strings);return t===void 0&&wt.set(e.strings,t=new re(e)),t}k(e){At(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,r,i=0;for(let s of e)i===t.length?t.push(r=new o(this.O(te()),this.O(te()),this,this.options)):r=t[i],r._$AI(s),i++;i<t.length&&(this._$AR(r&&r._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,t);e&&e!==this._$AB;){let i=e.nextSibling;e.remove(),e=i}}setConnected(e){var t;this._$AM===void 0&&(this._$Cm=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},X=class{constructor(e,t,r,i,s){this.type=1,this._$AH=w,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=s,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=w}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,r,i){let s=this.strings,n=!1;if(s===void 0)e=q(this,e,t,0),n=!oe(e)||e!==this._$AH&&e!==L,n&&(this._$AH=e);else{let c=e,a,l;for(e=s[0],a=0;a<s.length-1;a++)l=q(this,c[r+a],t,a),l===L&&(l=this._$AH[a]),n||(n=!oe(l)||l!==this._$AH[a]),l===w?e=w:e!==w&&(e+=(l??"")+s[a+1]),this._$AH[a]=l}n&&!i&&this.j(e)}j(e){e===w?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Fe=class extends X{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===w?void 0:e}},sr=G?G.emptyScript:"",ze=class extends X{constructor(){super(...arguments),this.type=4}j(e){e&&e!==w?this.element.setAttribute(this.name,sr):this.element.removeAttribute(this.name)}},Ue=class extends X{constructor(e,t,r,i,s){super(e,t,r,i,s),this.type=5}_$AI(e,t=this){var r;if((e=(r=q(this,e,t,0))!==null&&r!==void 0?r:w)===L)return;let i=this._$AH,s=e===w&&i!==w||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==w&&(i===w||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,r;typeof this._$AH=="function"?this._$AH.call((r=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&r!==void 0?r:this.element,e):this._$AH.handleEvent(e)}},De=class{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){q(this,e)}};var St=me.litHtmlPolyfillSupport;St?.(re,ie),((He=me.litHtmlVersions)!==null&&He!==void 0?He:me.litHtmlVersions=[]).push("2.6.1");var kt=(o,e,t)=>{var r,i;let s=(r=t?.renderBefore)!==null&&r!==void 0?r:e,n=s._$litPart$;if(n===void 0){let c=(i=t?.renderBefore)!==null&&i!==void 0?i:null;s._$litPart$=n=new ie(e.insertBefore(te(),c),c,void 0,t??{})}return n._$AI(o),n};var je,Ve;var R=class extends B{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;let r=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=r.firstChild),r}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=kt(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return L}};R.finalized=!0,R._$litElement$=!0,(je=globalThis.litElementHydrateSupport)===null||je===void 0||je.call(globalThis,{LitElement:R});var Tt=globalThis.litElementPolyfillSupport;Tt?.({LitElement:R});((Ve=globalThis.litElementVersions)!==null&&Ve!==void 0?Ve:globalThis.litElementVersions=[]).push("3.2.2");var nr=(o,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,o)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,o)}};function S(o){return(e,t)=>t!==void 0?((r,i,s)=>{i.constructor.createProperty(s,r)})(o,e,t):nr(o,e)}var Ye,sa=((Ye=window.HTMLSlotElement)===null||Ye===void 0?void 0:Ye.prototype.assignedElements)!=null?(o,e)=>o.assignedElements(e):(o,e)=>o.assignedNodes(e).filter(t=>t.nodeType===Node.ELEMENT_NODE);var H=({title:o,children:e})=>b`
  <div class="error-background">
    <div class="error-container">
      <span class="error-title"
        ><span class="error-badge">Error</span>${o}</span
      >
      <span class="error-description">${e}</span>
    </div>
  </div>
`,Pt=A`
  .error-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background: var(--error-bg);
    color: var(--error-fg);
  }

  .error-container {
    max-width: 800px;
    margin: auto;
    padding: 1em;
  }

  .error-badge {
    display: inline-block;
    font-size: 0.8em;
    padding: 0.2em 0.5em;
    margin-inline-end: 0.5em;

    background: var(--error-color);
    border-radius: 2px;
    color: var(--error-bg);
    text-transform: uppercase;
  }

  .error-title {
    display: block;
    font-size: 1.2em;

    font-weight: bold;
    text-transform: capitalize;
  }

  .error-description {
    display: block;
    margin-block-start: 1em;
  }
`;var Nt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Rt=o=>(...e)=>({_$litDirective$:o,values:e}),ve=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};var V=Rt(class extends ve{constructor(o){var e;if(super(o),o.type!==Nt.ATTRIBUTE||o.name!=="style"||((e=o.strings)===null||e===void 0?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(o){return Object.keys(o).reduce((e,t)=>{let r=o[t];return r==null?e:e+`${t=t.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`},"")}update(o,[e]){let{style:t}=o.element;if(this.vt===void 0){this.vt=new Set;for(let r in e)this.vt.add(r);return this.render(e)}this.vt.forEach(r=>{e[r]==null&&(this.vt.delete(r),r.includes("-")?t.removeProperty(r):t[r]="")});for(let r in e){let i=e[r];i!=null&&(this.vt.add(r),r.includes("-")?t.setProperty(r,i):t[r]=i)}return L}});function Ot(o){return{top:o.y,right:o.x+o.width,bottom:o.y+o.height,left:o.x}}function Lt(o,e){let t=Ot(o),r=Ot(e),i=!(t.top>r.bottom||t.bottom<r.top),s=!(t.left>r.right||t.right<r.left);if(s&&i){let d={x:(Math.max(t.left,r.left)+Math.min(t.right,r.right))/2,y:(Math.max(t.top,r.top)+Math.min(t.bottom,r.bottom))/2};return[{points:[{x:t.left,y:d.y},{x:r.left,y:d.y}]},{points:[{x:t.right,y:d.y},{x:r.right,y:d.y}]},{points:[{y:t.top,x:d.x},{y:r.top,x:d.x}]},{points:[{y:t.bottom,x:d.x},{y:r.bottom,x:d.x}]}]}let n=t.left>r.right,c=t.top>r.bottom,a={x:o.x+o.width/2,y:o.y+o.height/2};return[s?null:{points:[{x:n?t.left:t.right,y:a.y},{x:n?r.right:r.left,y:a.y}],bisector:i?void 0:[{x:n?r.right:r.left,y:a.y},{x:n?r.right:r.left,y:c?r.bottom:r.top}]},i?null:{points:[{y:c?t.top:t.bottom,x:a.x},{y:c?r.bottom:r.top,x:a.x}],bisector:s?void 0:[{y:c?r.bottom:r.top,x:a.x},{y:c?r.bottom:r.top,x:n?r.right:r.left}]}].filter(d=>!!d)}function ne(o){return Math.round(o*100)/100}function ye(o,e){return[...Bt(o),...Bt(e)]}function Bt(o){return o?o instanceof Array?o:[o]:[]}var ar=function(o,e,t,r){var i=arguments.length,s=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(o,e,t,r);else for(var c=o.length-1;c>=0;c--)(n=o[c])&&(s=(i<3?n(s):i>3?n(e,t,s):n(e,t))||s);return i>3&&s&&Object.defineProperty(e,t,s),s},Ht=o=>{class e extends o{constructor(...r){super(...r),this.selectedNode=null}updated(r){super.updated(r),r.has("selectedNode")&&this.dispatchEvent(new CustomEvent("nodeselect",{detail:{selectedNode:this.selectedNode}}))}}return ar([S({attribute:!1})],e.prototype,"selectedNode",void 0),e};function be(o){return o.touches.length===0||o.touches.length>2}function lr(o,e){return Math.sqrt(Math.pow(o.x-e.x,2)+Math.pow(o.y-e.y,2))}var It=o=>class extends o{constructor(...t){super(...t),this.previousTouches=null,this.addEventListener("touchstart",r=>{be(r)||(r.preventDefault(),this.previousTouches=r.touches)}),this.addEventListener("touchend",r=>{be(r)||(r.preventDefault(),this.previousTouches=null)}),this.addEventListener("touchcancel",r=>{be(r)||(r.preventDefault(),this.previousTouches=null)}),this.addEventListener("touchmove",r=>{if(be(r))return;let i=Array.from(this.previousTouches||[]),s=Array.from(r.touches);if(this.previousTouches=r.touches,!(s.length!==i.length||!s.every(n=>i.some(c=>c.identifier===n.identifier)))){if(s.length===1){this.onTouchPan({x:s[0].pageX-i[0].pageX,y:s[0].pageY-i[0].pageY});return}this.onTouchPinch(lr({x:s[0].pageX,y:s[0].pageY},{x:i[0].pageX,y:i[0].pageY}))}})}get isTouching(){return!!(this.previousTouches&&this.previousTouches.length>0)}onTouchPan(t){}onTouchPinch(t){}};var ae=function(o,e,t,r){var i=arguments.length,s=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(o,e,t,r);else for(var c=o.length-1;c>=0;c--)(n=o[c])&&(s=(i<3?n(s):i>3?n(e,t,s):n(e,t))||s);return i>3&&s&&Object.defineProperty(e,t,s),s},O=function(o,e){if(!e.has(o))throw new TypeError("attempted to get private field on non-instance");return e.get(o)},Ft=function(o,e,t){if(!e.has(o))throw new TypeError("attempted to set private field on non-instance");return e.set(o,t),t},zt=o=>{var e,t,r,i,s;class n extends It(o){constructor(...a){super(...a),this.panX=0,this.panY=0,this.scale=1,this.zoomSpeed=500,this.panSpeed=500,e.set(this,!1),t.set(this,(d,h)=>{this.panX+=d/this.scale/window.devicePixelRatio,this.panY+=h/this.scale/window.devicePixelRatio}),r.set(this,d=>{d.code==="Space"&&!O(this,e)&&(Ft(this,e,!0),document.body.style.cursor="grab")}),i.set(this,d=>{d.code==="Space"&&O(this,e)&&(Ft(this,e,!1),document.body.style.cursor="auto")}),s.set(this,()=>{document.addEventListener("keyup",O(this,i)),document.addEventListener("keydown",O(this,r))}),this.addEventListener("wheel",d=>{if(this.isMovable)if(d.preventDefault(),d.ctrlKey){let{deltaY:h}=d;d.deltaMode===1&&(h*=15);let u=this.scale;this.scale*=1-h/((1e3-this.zoomSpeed)*.5);let f=d.offsetX-this.offsetWidth/2,m=d.offsetY-this.offsetHeight/2;this.panX+=f/this.scale-f/u,this.panY+=m/this.scale-m/u}else{let h=this.panSpeed*.002;this.panX-=d.deltaX*h/this.scale,this.panY-=d.deltaY*h/this.scale}},{passive:!1});let l=1;this.addEventListener("gesturestart",d=>{d.preventDefault(),l=this.scale}),this.addEventListener("gesturechange",d=>{let h=d;h.preventDefault(),this.scale=l*h.scale}),this.addEventListener("pointermove",d=>{d.buttons&4&&(d.preventDefault(),O(this,t).call(this,d.movementX,d.movementY))}),O(this,s).call(this),this.onmousedown=()=>{O(this,e)&&(document.body.style.cursor="grabbing",this.onmousemove=({movementX:d,movementY:h})=>{O(this,t).call(this,d,h)},this.onmouseup=()=>{document.body.style.cursor="grab",this.onmousemove=null,this.onmouseup=null})}}get isMovable(){return!0}get canvasTransform(){return[`scale(${this.scale})`,`translate(${this.panX}px, ${this.panY}px)`]}disconnectedCallback(){document.removeEventListener("keyup",O(this,i)),document.removeEventListener("keydown",O(this,r)),super.disconnectedCallback()}updated(a){super.updated(a),a.has("scale")&&this.dispatchEvent(new CustomEvent("scalechange",{detail:{scale:this.scale}})),(a.has("panX")||a.has("panY"))&&this.dispatchEvent(new CustomEvent("positionchange",{detail:{x:this.panX,y:this.panY}}))}onTouchPan(a){this.panX+=a.x/this.scale,this.panY+=a.y/this.scale}onTouchPinch(a){this.scale*=1-a/1e3}}return e=new WeakMap,t=new WeakMap,r=new WeakMap,i=new WeakMap,s=new WeakMap,ae([S({attribute:!1})],n.prototype,"panX",void 0),ae([S({attribute:!1})],n.prototype,"panY",void 0),ae([S({attribute:!1})],n.prototype,"scale",void 0),ae([S({type:Number,attribute:"zoom-speed"})],n.prototype,"zoomSpeed",void 0),ae([S({type:Number,attribute:"pan-speed"})],n.prototype,"panSpeed",void 0),n};var cr=({guide:o,reverseScale:e})=>{let t=Math.abs(o.points[0].x-o.points[1].x),r=Math.abs(o.points[0].y-o.points[1].y);return t===0&&r===0?null:C`
    <line
      class="distance-line"
      x1=${o.points[0].x}
      y1=${o.points[0].y}
      x2=${o.points[1].x}
      y2=${o.points[1].y}
    />

    ${o.bisector&&C`
        <line
          class="distance-line"
          x1=${o.bisector[0].x}
          y1=${o.bisector[0].y}
          x2=${o.bisector[1].x}
          y2=${o.bisector[1].y}
          style=${V({strokeDasharray:`${4*e}`})}
          shape-rendering="geometricPrecision"
          fill="none"
        />
      `}
  `},dr=({guide:o,reverseScale:e,fontSize:t})=>{let r=Math.abs(o.points[0].x-o.points[1].x),i=Math.abs(o.points[0].y-o.points[1].y);if(r===0&&i===0)return null;let s=ne(Math.max(r,i)).toString(10),n=s.length*t*.5,c=t*.25,a=t*.25,l=t*.5,d=r>i?(o.points[0].x+o.points[1].x)/2-n/2:o.points[0].x,h=r>i?o.points[0].y:(o.points[0].y+o.points[1].y)/2-t/2,u=[`scale(${e})`,r>i?`translate(0, ${c+a})`:`translate(${c+l}, 0)`].join(" "),f=d+n/2,m=h+t/2,x=r>i?`${f} ${h}`:`${d} ${m}`;return C`
    <g class="distance-tooltip">
      <rect
        x=${d-l}
        y=${h-a}
        rx="2"
        width=${n+l*2}
        height=${t+a*2}
        transform=${u}
        transform-origin=${x}
        stroke="none"
      />

      <text
        x=${f}
        y=${h+t-a/2}
        text-anchor="middle"
        transform=${u}
        transform-origin=${x}
        stroke="none"
        fill="white"
        style="font-size: ${t}px"
      >
        ${s}
      </text>
    </g>
  `},Ut=new Map,Dt=({node:o,distanceTo:e,reverseScale:t,fontSize:r})=>{let i=o.id+`
`+e.id,s=Ut.get(i);return s||(s=Lt(o.absoluteBoundingBox,e.absoluteBoundingBox),Ut.set(i,s)),[...s.map(n=>cr({guide:n,reverseScale:t})),...s.map(n=>dr({guide:n,reverseScale:t,fontSize:r}))]},jt=A`
  .distance-line {
    shape-rendering: geometricPrecision;
    fill: none;
    opacity: 0;
  }

  .distance-tooltip {
    opacity: 0;
  }

  .guide:hover ~ .distance-line,
  .guide:hover ~ .distance-tooltip {
    opacity: 1;
  }
`;var Vt=({onClick:o=()=>{}})=>C`
  <svg @click=${o} title="close icon" width="14" height="14" viewBox="0 0 20 20" fill="none">
    <path d="M1 19L19 1M19 19L1 1" stroke="#B3B3B3" stroke-width="2"/>
  </svg>
`,Ge=({onClick:o=()=>{}})=>C`
  <svg @click=${o} title="copy icon" width="14" height="14" viewBox="0 0 30 30" fill="none">
  <path d="M21 25.5C21 24.9477 20.5523 24.5 20 24.5C19.4477 24.5 19 24.9477 19 25.5H21ZM13 2H25V0H13V2ZM28 5V21H30V5H28ZM25 24H13V26H25V24ZM10 21V5H8V21H10ZM13 24C11.3431 24 10 22.6569 10 21H8C8 23.7614 10.2386 26 13 26V24ZM28 21C28 22.6569 26.6569 24 25 24V26C27.7614 26 30 23.7614 30 21H28ZM25 2C26.6569 2 28 3.34315 28 5H30C30 2.23858 27.7614 0 25 0V2ZM13 0C10.2386 0 8 2.23858 8 5H10C10 3.34315 11.3431 2 13 2V0ZM16.5 28H5V30H16.5V28ZM2 25V10H0V25H2ZM5 28C3.34315 28 2 26.6569 2 25H0C0 27.7614 2.23858 30 5 30V28ZM5 7H8V5H5V7ZM2 10C2 8.34315 3.34315 7 5 7V5C2.23858 5 0 7.23858 0 10H2ZM16.5 30C18.9853 30 21 27.9853 21 25.5H19C19 26.8807 17.8807 28 16.5 28V30Z" fill="#B3B3B3"/>
</svg>
`,Yt=()=>C`
  <svg title="horizontal padding" width="14" height="14" viewBox="0 0 29 28" fill="none">
    <rect x="7" y="8" width="14" height="14" stroke="#B3B3B3" stroke-width="2"/>
    <path d="M27 1V28" stroke="#B3B3B3" stroke-width="2"/>
    <path d="M1 0V28" stroke="#B3B3B3" stroke-width="2"/>
  </svg>
`,Wt=()=>C`
  <svg title="vertical padding" width="14" height="14" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="21" width="14" height="14" transform="rotate(-90 8 21)" stroke="#B3B3B3" stroke-width="2"/>
    <path d="M1 1L28 0.999999" stroke="#B3B3B3" stroke-width="2"/>
    <path d="M0 27L28 27" stroke="#B3B3B3" stroke-width="2"/>
  </svg>
`,Gt=()=>C`
  <svg title="figma logo" width="11" height="16" viewBox="0 0 12 17" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M5.5 1.5h-2c-1.105 0-2 .895-2 2 0 1.105.895 2 2 2h2v-4zm-5 2c0 1.043.533 1.963 1.341 2.5C1.033 6.537.5 7.457.5 8.5c0 1.043.533 1.963 1.341 2.5C1.033 11.537.5 12.457.5 13.5c0 1.657 1.343 3 3 3 1.657 0 3-1.343 3-3V10.736c.53.475 1.232.764 2 .764 1.657 0 3-1.343 3-3 0-1.043-.533-1.963-1.341-2.5.808-.537 1.341-1.457 1.341-2.5 0-1.657-1.343-3-3-3h-5c-1.657 0-3 1.343-3 3zm1 5c0-1.105.895-2 2-2h2v4h-2c-1.105 0-2-.895-2-2zm0 5c0-1.105.895-2 2-2h2v2c0 1.105-.895 2-2 2-1.105 0-2-.895-2-2zm7-3c-1.105 0-2-.895-2-2 0-1.105.895-2 2-2 1.105 0 2 .895 2 2 0 1.105-.895 2-2 2zm0-5h-2v-4h2c1.105 0 2 .895 2 2 0 1.105-.895 2-2 2z"
      fill-rule="evenodd"
      fill-opacity="1"
      fill="#000"
      stroke="none"
    ></path>
  </svg>
`;var K=o=>o.a===0?"transparent":o.a<1?`rgba(${Zt(o).join(", ")}, ${o.a.toFixed(2)})`:ur(o),pr=o=>new Ze(o).cssColor,Ze=class{constructor(e){this.gradientHandles={start:e.gradientHandlePositions[0],end:e.gradientHandlePositions[1]},this.colors=e.gradientStops,this.colorObjects=this.createColorObjects(this.colors),this.angle=this.calculateAngle(this.gradientHandles.start,this.gradientHandles.end)}get cssGradientArray(){return this.colorObjects.map((e,t)=>{let r=this.floatToPercent(this.colors[t].position);return e+" "+r})}get cssColor(){let e=this.cssGradientArray;return e.unshift(this.angle+"deg"),`linear-gradient(${e.join(", ")})`}createColorObjects(e){return e.map(({color:t})=>K(t))}floatToPercent(e){return(e*=100).toFixed(0)+"%"}calculateAngle(e,t){let r=Math.atan(this.calculateGradient(e,t));return parseInt(this.radToDeg(r).toFixed(1))}calculateGradient(e,t){return(t.y-e.y)/(t.x-e.x)*-1}radToDeg(e){return 180*e/Math.PI}},xe=class{constructor(e){var t,r,i;if(this.hasPadding=!1,this.height=`${Math.trunc(e.absoluteBoundingBox.height)}px`,this.width=`${Math.trunc(e.absoluteBoundingBox.width)}px`,(e.horizontalPadding||e.verticalPadding)&&(this.hasPadding=!0,this.horizontalPadding=`${e.horizontalPadding}px`,this.verticalPadding=`${e.verticalPadding}px`),e.style&&(this.fontFamily=e.style.fontFamily,this.fontPostScriptName=(t=e.style.fontPostScriptName)===null||t===void 0?void 0:t.replace("-"," "),this.fontWeight=e.style.fontWeight,this.fontSize=`${Math.ceil(e.style.fontSize)}px`,this.lineHeight=`${Math.trunc(e.style.lineHeightPx)}px`),e.rectangleCornerRadii&&(this.borderRadius=e.rectangleCornerRadii.filter(n=>n===e.cornerRadius).length<4?`${e.rectangleCornerRadii.join("px ")}px`:`${e.cornerRadius}px`),e.backgroundColor||e.backgroundColor){let n=e.backgroundColor||((r=e.background)===null||r===void 0?void 0:r[0].color);this.background=K(n)}let s=(i=e.fills)===null||i===void 0?void 0:i[0];if(s&&s.visible!==!1&&(e.type==="TEXT"?this.color=K(s.color):s.type.includes("GRADIENT")?this.backgroundImage=pr(s):s.type==="SOLID"&&(this.background=K(s.color))),e.strokes&&e.strokes.length>0&&(this.borderColor=K(e.strokes[0].color),this.border=`${e.strokeWeight}px solid ${this.borderColor}`),e.effects&&e.effects.length>0){let{offset:n,radius:c,color:a}=e.effects[0];this.boxShadowColor=K(a),this.boxShadow=`${n?.x||0}px ${n?.y||0}px 0 ${c} ${this.boxShadowColor}`}}getStyles(){return[this.height&&{property:"height",value:this.height},this.width&&{property:"width",value:this.width},this.fontFamily&&{property:"font-family",value:this.fontFamily},this.fontSize&&{property:"font-size",value:this.fontSize},this.fontWeight&&{property:"font-weight",value:this.fontWeight},this.lineHeight&&{property:"line-height",value:this.lineHeight},this.borderRadius&&{property:"border-radius",value:this.borderRadius},this.backgroundImage&&{property:"background-image",value:this.backgroundImage},this.boxShadow&&{property:"box-shadow",value:this.boxShadow,color:this.boxShadowColor},this.border&&{property:"border",value:this.border,color:this.borderColor},this.background&&{property:"background",value:this.background,color:this.background},this.color&&{property:"color",value:this.color,color:this.color}].filter(Boolean)}getStyleSheet(){return this.getStyles().map(qe).join(`
`)}},Zt=o=>[Math.trunc(255*o.r),Math.trunc(255*o.g),Math.trunc(255*o.b)],ur=o=>{let[e,t,r]=Zt(o);return"#"+((1<<24)+(e<<16)+(t<<8)+r).toString(16).slice(1)},qe=({property:o,value:e})=>`${o}: ${e};`;var fr=function(o,e,t,r){function i(s){return s instanceof t?s:new t(function(n){n(s)})}return new(t||(t=Promise))(function(s,n){function c(d){try{l(r.next(d))}catch(h){n(h)}}function a(d){try{l(r.throw(d))}catch(h){n(h)}}function l(d){d.done?s(d.value):i(d.value).then(c,a)}l((r=r.apply(o,e||[])).next())})},Xe=o=>fr(void 0,void 0,void 0,function*(){yield navigator.clipboard.writeText(o)}),qt=({node:o,onClose:e})=>{if(!o)return null;let t=new xe(o),r=i=>i.stopPropagation();return b`
    <div
      class="inspector-view"
      @click=${r}
      @wheel=${r}
      @keydown=${r}
      @keyup=${r}
      @pointermove=${r}
    >
      <div class="inspector-section selectable-content">
        <div class="title-section">
          <h4>${o.name}</h4>
          ${Vt({onClick:e})}
        </div>
        <div class="properties-overview">
          <div class="title-section">
            <p class="inspector-property">
              <span>W: </span>${t.width}
            </p>
            <p class="inspector-property" style="margin-left: 16px;">
              <span>H: </span>${t.height}
            </p>
          </div>
          ${t.fontPostScriptName?b`<p class="inspector-property">
                <span>Font:</span>
                ${t.fontPostScriptName}
              </p>`:null}
        </div>
      </div>
      ${t.hasPadding?b`<div class="inspector-section">
            <h4>Layout</h4>
            ${t.horizontalPadding&&b`<p class="inspector-property">
              ${Yt()} ${t.horizontalPadding}
            </p>`}
            ${t.verticalPadding&&b`<p class="inspector-property">
              ${Wt()} ${t.verticalPadding}
            </p>`}
          </div>`:null}
      ${o.characters?b`<div class="inspector-section">
            <div class="title-section">
              <h4>Content</h4>
              ${Ge({onClick:()=>Xe(o.characters)})}
            </div>
            <p class="node-content code-section selectable-content">
              ${o.characters}
            </p>
          </div>`:null}
      ${gr(t)}
    </div>
  `},gr=o=>{let e=()=>Xe(o.getStyleSheet()),t=o.getStyles();return b`<div class="inspector-section">
    <div class="title-section style-section">
      <h4>CSS</h4>
      ${Ge({onClick:e})}
    </div>
    <div class="code-section selectable-content">
      ${t.map(mr)}
    </div>
  </div>`},mr=o=>{let{property:e,value:t,color:r}=o,i=null;switch(e){case"background":case"fill":case"border":case"box-shadow":case"color":i=b`<span
        class="color-preview"
        style="background-color: ${r}"
      ></span>`;break;case"background-image":i=b`<span
        class="color-preview"
        style="background-image: ${t}"
      ></span>`;break}return b`<div class="css-property" @click=${()=>Xe(qe(o))}>
    <span>${e}:</span>${i}<span class="css-value">${t}</span>;</span>
  </div>`},Xt=A`
  .inspector-view {
    height: 100%;
    width: 300px;
    position: absolute;
    right: 0;
    background: white;
    border-left: 1px solid #ccc;
    overflow-y: auto;
    z-index: calc(var(--z-index) + 2);
  }

  .inspector-view h4 {
    font-size: 16px;
    margin: 0;
  }

  .style-section {
    margin-bottom: 12px;
  }

  .title-section {
    display: flex;
    align-items: center;
  }

  .code-section {
    padding: 8px;
    background: #f3f3f3;
    font-family: monospace;
  }

  .title-section svg {
    cursor: pointer;
    margin-left: auto;
  }

  .inspector-section {
    padding: 16px;
    border-bottom: 1px solid #eee;
  }

  .properties-overview {
    font-family: monospace;
    color: #518785;
  }

  .properties-overview p span {
    color: #121212;
  }

  .inspector-property {
    display: flex;
    align-items: center;
    margin-bottom: 0;
  }

  .inspector-property span {
    color: #b3b3b3;
    margin-right: 4px;
  }

  .inspector-property svg {
    margin-right: 8px;
  }

  .css-property {
    margin: 8px;
    transition: background-color ease-in-out 100ms;
  }

  .css-property:hover {
    cursor: pointer;
    background-color: #e8e8e8;
  }

  .css-value {
    color: #518785;
    margin-left: 4px;
  }

  .color-preview {
    display: inline-block;
    width: 12px;
    height: 12px;
    border: 1px solid #ccc;
    margin-left: 4px;
    vertical-align: middle;
  }

  .selectable-content {
    cursor: text;
    user-select: text;
  }
`;var Ke=({node:o,selected:e=!1,computedThickness:t,onClick:r})=>{let{x:i,y:s,width:n,height:c}=o.absoluteBoundingBox,a="cornerRadius"in o&&o.cornerRadius?{topLeft:o.cornerRadius,topRight:o.cornerRadius,bottomRight:o.cornerRadius,bottomLeft:o.cornerRadius}:"rectangleCornerRadii"in o&&o.rectangleCornerRadii?{topLeft:o.rectangleCornerRadii[0],topRight:o.rectangleCornerRadii[1],bottomRight:o.rectangleCornerRadii[2],bottomLeft:o.rectangleCornerRadii[3]}:{topLeft:0,topRight:0,bottomRight:0,bottomLeft:0},l=t/2,d=(m,x)=>`M${m},${x}`,h=(m,x)=>`L${m},${x}`,u=(m,x,E)=>`A${m},${m} 0 0 1 ${x},${E}`,f=[d(a.topLeft+l,l),h(n-a.topRight,l),u(a.topRight-l,n-l,a.topRight),h(n-l,c-a.bottomRight),u(a.bottomRight-l,n-a.bottomRight,c-l),h(a.bottomLeft,c-l),u(a.bottomLeft-l,l,c-a.bottomLeft),h(l,a.topLeft),u(a.topLeft-l,a.topLeft,l),"Z"].join(" ");return C`
    <path
      class="guide"
      d=${f}
      shape-rendering="geometricPrecision"
      fill="none"
      transform="translate(${i}, ${s})"
      ?data-selected=${e}
      @click=${r}
    />
  `},Kt=({nodeSize:{x:o,y:e,width:t,height:r},offsetX:i,offsetY:s,reverseScale:n})=>{let c={top:`${s+e+r}px`,left:`${i+o+t/2}px`,transform:`translateX(-50%) scale(${n}) translateY(0.25em)`};return b`
    <div class="tooltip" style="${V(c)}">
      ${ne(t)} x ${ne(r)}
    </div>
  `},Jt=A`
  .guide {
    /*
     * SVGs cannot be pixel perfect, especially floating values.
     * Since many platform renders them visually incorrectly (probably they
     * are following the spec), it's safe to set overflow to visible.
     * Cropped borders are hard to visible and ugly.
     */
    overflow: visible;

    pointer-events: all;

    opacity: 0;
  }
  .guide:hover {
    opacity: 1;
  }
  .guide[data-selected] {
    opacity: 1;
    stroke: var(--guide-selected-color);
  }

  .tooltip {
    position: absolute;
    padding: 0.25em 0.5em;
    font-size: var(--guide-tooltip-font-size);

    color: var(--guide-selected-tooltip-fg);
    background-color: var(--guide-selected-tooltip-bg);
    border-radius: 2px;
    pointer-events: none;
    z-index: calc(var(--z-index) + 1);

    transform-origin: top center;
  }
`;var br=[{gte:31536e6,divisor:31536e6,unit:"year"},{gte:2592e6,divisor:2592e6,unit:"month"},{gte:6048e5,divisor:6048e5,unit:"week"},{gte:864e5,divisor:864e5,unit:"day"},{gte:36e5,divisor:36e5,unit:"hour"},{gte:6e4,divisor:6e4,unit:"minute"},{gte:3e4,divisor:1e3,unit:"seconds"},{gte:0,divisor:1,text:"just now"}],Qt=o=>(typeof o=="object"?o:new Date(o)).getTime(),eo=(o,e=Date.now(),t=new Intl.RelativeTimeFormat(void 0,{numeric:"auto"}))=>{let i=Qt(e)-Qt(o),s=Math.abs(i);for(let n of br)if(s>=n.gte){let c=Math.round(Math.abs(i)/n.divisor),a=i<0,l=n.unit;return l?t.format(a?c:-c,l):n.text}};var to=A`
  .figma-footer {
    flex: 0;
    z-index: calc(var(--z-index) + 1);
    border-top: 1px solid #ccc;
    min-height: 48px;
    padding: 0 16px;
    text-decoration: none;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    background-color: #fff;
    overflow-x: auto;
    cursor: pointer;
    font-size: 12px;
    color: rgba(0, 0, 0, 0.8);
  }

  .figma-footer--icon {
    margin-right: 12px;
  }

  .figma-footer--title {
    font-weight: 600;
    margin-right: 4px;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .figma-footer--timestamp {
    white-space: nowrap;
    overflow: hidden;
  }
`,oo=o=>{if(!o||!o.link||o.link===void 0||o.link==="undefined")return null;let{link:e,timestamp:t,fileName:r}=o;return b`<a
    class="figma-footer"
    target="_blank"
    rel="noopener"
    title="Open in Figma"
    href="${e}"
  >
    <span class="figma-footer--icon"> ${Gt()} </span>
    <span class="figma-footer--title"> ${r} </span>
    <span
      title="Last time edited: ${new Date(t).toUTCString()}"
      class="figma-footer--timestamp"
    >
      Edited ${eo(t)}
    </span>
  </a>`};var ro=function(o,e,t,r){var i=arguments.length,s=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(o,e,t,r);else for(var c=o.length-1;c>=0;c--)(n=o[c])&&(s=(i<3?n(s):i>3?n(e,t,s):n(e,t))||s);return i>3&&s&&Object.defineProperty(e,t,s),s},M=function(o,e){if(!e.has(o))throw new TypeError("attempted to get private field on non-instance");return e.get(o)},Je=function(o,e,t){if(!e.has(o))throw new TypeError("attempted to set private field on non-instance");return e.set(o,t),t},_e=o=>{var e,t,r,i,s;class n extends Ht(zt(o)){constructor(...a){super(...a),this.zoomMargin=50,this.link="",e.set(this,void 0),t.set(this,void 0),r.set(this,void 0),i.set(this,l=>d=>{d.preventDefault(),d.stopPropagation(),this.selectedNode=l}),s.set(this,l=>{var d,h;return(h=(d=M(this,r))===null||d===void 0?void 0:d.find(u=>u.id===l))!==null&&h!==void 0?h:null})}static get styles(){let a=super.styles;return ye(a,[A`
          :host {
            --default-error-bg: #fff;
            --default-error-fg: #333;

            --bg: var(--figspec-viewer-bg, #e5e5e5);
            --z-index: var(--figspec-viewer-z-index, 0);
            --error-bg: var(--figspec-viewer-error-bg, var(--default-error-bg));
            --error-fg: var(--figspec-viewer-error-fg, var(--default-error-fg));
            --error-color: var(--figspec-viewer-error-color, tomato);

            --guide-thickness: var(--figspec-viewer-guide-thickness, 1.5px);
            --guide-color: var(--figspec-viewer-guide-color, tomato);
            --guide-selected-color: var(
              --figspec-viewer-guide-selected-color,
              dodgerblue
            );
            --guide-tooltip-fg: var(--figspec-viewer-guide-tooltip-fg, white);
            --guide-selected-tooltip-fg: var(
              --figspec-viewer-guide-selected-tooltip-fg,
              white
            );
            --guide-tooltip-bg: var(
              --figspec-viewer-guide-tooltip-bg,
              var(--guide-color)
            );
            --guide-selected-tooltip-bg: var(
              --figspec-viewer-guide-selected-tooltip-bg,
              var(--guide-selected-color)
            );
            --guide-tooltip-font-size: var(
              --figspec-viewer-guide-tooltip-font-size,
              12px
            );

            position: relative;
            display: block;

            background-color: var(--bg);
            user-select: none;
            overflow: hidden;
            z-index: var(--z-index);
          }

          @media (prefers-color-scheme: dark) {
            :host {
              --default-error-bg: #222;
              --default-error-fg: #fff;
            }
          }

          .spec-canvas-wrapper {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column-reverse;
          }

          .canvas {
            position: absolute;
            top: 50%;
            left: 50%;
            flex: 1;
          }

          .rendered-image {
            position: absolute;
            top: 0;
            left: 0;
          }

          .guides {
            position: absolute;

            overflow: visible;
            stroke: var(--guide-color);
            fill: var(--guide-color);
            pointer-events: none;
            z-index: calc(var(--z-index) + 2);
          }
        `,Jt,Pt,jt,Xt,to])}get __images(){return{}}deselectNode(){this.selectedNode=null}get error(){return!M(this,e)||!M(this,r)?H({title:"Error",children:"Please call `__updateTree/1` method with a valid parameter."}):null}render(){if(this.error)return this.error instanceof Error?H({title:this.error.name||"Error",children:this.error.message}):typeof this.error=="string"?H({title:"Error",children:this.error}):this.error;let a=M(this,e),l=1/this.scale,d=`calc(var(--guide-thickness) * ${l})`,h=parseFloat(getComputedStyle(this).getPropertyValue("--guide-thickness")),u=parseFloat(getComputedStyle(this).getPropertyValue("--guide-tooltip-font-size"));return b`
        <div class="spec-canvas-wrapper" @click=${this.deselectNode}>
          <div
            class="canvas"
            style="
          width: ${a.width}px;
          height: ${a.height}px;

          transform: translate(-50%, -50%) ${this.canvasTransform.join(" ")}
        "
          >
            ${Object.entries(this.__images).map(([f,m])=>{var x;let E=M(this,s).call(this,f);if(!E||!("absoluteBoundingBox"in E)||!(!((x=M(this,t))===null||x===void 0)&&x[E.id]))return null;let $=M(this,t)[E.id];return b`
                <img class="rendered-image" src="${m}"
                style=${V({top:`${E.absoluteBoundingBox.y-a.y}px`,left:`${E.absoluteBoundingBox.x-a.x}px`,marginTop:`${-$.top}px`,marginLeft:`${-$.left}px`,width:E.absoluteBoundingBox.width+$.left+$.right+"px",height:E.absoluteBoundingBox.height+$.top+$.bottom+"px"})}"
                " />
              `})}
            ${this.selectedNode&&Kt({nodeSize:this.selectedNode.absoluteBoundingBox,offsetX:-a.x,offsetY:-a.y,reverseScale:l})}
            ${C`
            <svg
              class="guides"
              viewBox="0 0 5 5"
              width="5"
              height="5"
              style=${V({left:`${-a.x}px`,top:`${-a.y}px`,strokeWidth:d})}
            >
              ${this.selectedNode&&Ke({node:this.selectedNode,selected:!0,computedThickness:h*l})}

              ${M(this,r).map(f=>{var m;return f.id===((m=this.selectedNode)===null||m===void 0?void 0:m.id)?null:C`
                  <g>
                    ${Ke({node:f,computedThickness:h*l,onClick:M(this,i).call(this,f)})}
                    ${this.selectedNode&&Dt({node:f,distanceTo:this.selectedNode,reverseScale:l,fontSize:u})}
                  </g>
                `})}
            </svg>
          `}
          </div>
          ${qt({node:this.selectedNode,onClose:this.deselectNode})}
          ${oo(this.getMetadata())}
        </div>
      `}getMetadata(){}connectedCallback(){super.connectedCallback(),this.resetZoom()}updated(a){super.updated(a)}__updateTree(a){if(!(a.type==="CANVAS"||a.type==="FRAME"||a.type==="COMPONENT"||a.type==="COMPONENT_SET"))throw new Error("Cannot update node tree: Top level node MUST be one of CANVAS, FRAME, COMPONENT, or COMPONENT_SET");Je(this,e,a.type==="CANVAS"?$r(a):a.absoluteBoundingBox),Je(this,r,$e(a)),this.requestUpdate()}__updateEffectMargins(){if(!this.__images)return;let a=Object.keys(this.__images).map(M(this,s)).filter(l=>!!l);Je(this,t,a.reduce((l,d)=>"absoluteBoundingBox"in d?Object.assign(Object.assign({},l),{[d.id]:_r(d,$e(d))}):l,{})),this.requestUpdate()}resetZoom(){if(M(this,e)){let{width:a,height:l}=M(this,e),{width:d,height:h}=this.getBoundingClientRect(),u=d/(a+this.zoomMargin*2),f=h/(l+this.zoomMargin*2);this.scale=Math.min(u,f,1)}}}return e=new WeakMap,t=new WeakMap,r=new WeakMap,i=new WeakMap,s=new WeakMap,ro([S({type:Number,attribute:"zoom-margin"})],n.prototype,"zoomMargin",void 0),ro([S({type:String,attribute:"link"})],n.prototype,"link",void 0),n};function $r(o){let e=[],t=[],r=[],i=[];for(let c of o.children){if(c.type!=="FRAME"&&c.type!=="COMPONENT")continue;let{x:a,y:l,width:d,height:h}=c.absoluteBoundingBox;e.push(a),t.push(a+d),r.push(l),i.push(l+h)}let s=Math.min(...e),n=Math.min(...r);return{x:s,y:n,width:Math.abs(Math.max(...t)-s),height:Math.abs(Math.min(...i)-n)}}function _r(o,e){let t=e.map(i=>{if(!("effects"in i))return{top:i.absoluteBoundingBox.y,right:i.absoluteBoundingBox.x+i.absoluteBoundingBox.width,bottom:i.absoluteBoundingBox.y+i.absoluteBoundingBox.height,left:i.absoluteBoundingBox.x};let s=i.effects.filter(a=>a.visible&&a.type==="LAYER_BLUR").map(a=>a.radius),n=i.effects.filter(a=>a.visible&&a.type==="DROP_SHADOW"&&!!a.offset).map(a=>({left:a.radius-a.offset.x,top:a.radius-a.offset.y,right:a.radius+a.offset.x,bottom:a.radius+a.offset.y})),c={top:Math.max(0,...s,...n.map(a=>a.top)),right:Math.max(0,...s,...n.map(a=>a.right)),bottom:Math.max(0,...s,...n.map(a=>a.bottom)),left:Math.max(0,...s,...n.map(a=>a.left))};return{top:i.absoluteBoundingBox.y-c.top,right:i.absoluteBoundingBox.x+i.absoluteBoundingBox.width+c.right,bottom:i.absoluteBoundingBox.y+i.absoluteBoundingBox.height+c.bottom,left:i.absoluteBoundingBox.x-c.left}}),r={top:Math.min(...t.map(i=>i.top)),right:Math.max(...t.map(i=>i.right)),bottom:Math.max(...t.map(i=>i.bottom)),left:Math.min(...t.map(i=>i.left))};return{top:o.absoluteBoundingBox.y-r.top,right:r.right-o.absoluteBoundingBox.x-o.absoluteBoundingBox.width,bottom:r.bottom-o.absoluteBoundingBox.y-o.absoluteBoundingBox.height,left:o.absoluteBoundingBox.x-r.left}}function $e(o,e=0){return"absoluteBoundingBox"in o?!("children"in o)||o.children.length===0?[Object.assign(Object.assign({},o),{depth:e})]:[Object.assign(Object.assign({},o),{depth:e}),...o.children.map(t=>$e(t,e+1)).flat()]:o.children.map(t=>$e(t,e+1)).flat()}var io=function(o,e,t,r){var i=arguments.length,s=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(o,e,t,r);else for(var c=o.length-1;c>=0;c--)(n=o[c])&&(s=(i<3?n(s):i>3?n(e,t,s):n(e,t))||s);return i>3&&s&&Object.defineProperty(e,t,s),s},z=class extends _e(R){constructor(){super(...arguments),this.nodes=null,this.renderedImage=null}get isMovable(){return!!(this.nodes&&this.renderedImage&&this.documentNode)}get documentNode(){if(!this.nodes)return null;let e=Object.values(this.nodes.nodes)[0];return!e||!("absoluteBoundingBox"in e.document)?null:e.document}get __images(){return!this.documentNode||!this.renderedImage?{}:{[this.documentNode.id]:this.renderedImage}}get error(){if(!this.nodes||!this.renderedImage)return H({title:"Parameter error",children:b`<span>
          Both <code>nodes</code> and <code>rendered-image</code> are required.
        </span>`});if(!this.documentNode)return H({title:"Parameter Error",children:b`
          <span> Document node is empty or does not have size. </span>
        `});if(super.error)return super.error}getMetadata(){return{fileName:this.nodes.name,timestamp:this.nodes.lastModified,link:this.link}}connectedCallback(){super.connectedCallback(),this.documentNode&&(this.__updateTree(this.documentNode),this.__updateEffectMargins(),this.resetZoom())}updated(e){if(super.updated(e),e.has("nodes")){if(!this.documentNode)return;this.__updateTree(this.documentNode),this.resetZoom()}e.has("renderedImage")&&this.__updateEffectMargins()}};io([S({type:Object})],z.prototype,"nodes",void 0);io([S({type:String,attribute:"rendered-image"})],z.prototype,"renderedImage",void 0);var so=function(o,e,t,r){var i=arguments.length,s=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(o,e,t,r);else for(var c=o.length-1;c>=0;c--)(n=o[c])&&(s=(i<3?n(s):i>3?n(e,t,s):n(e,t))||s);return i>3&&s&&Object.defineProperty(e,t,s),s},Qe=function(o,e){if(!e.has(o))throw new TypeError("attempted to get private field on non-instance");return e.get(o)},we,et,U=class extends _e(R){constructor(){super(...arguments),this.documentNode=null,this.renderedImages=null,this.selectedPage=null,we.set(this,()=>{var e;if(!this.documentNode){this.selectedPage=null;return}this.selectedPage=(e=this.documentNode.document.children.filter(t=>t.type==="CANVAS")[0])!==null&&e!==void 0?e:null}),et.set(this,e=>{var t,r;let i=e.currentTarget;this.selectedPage=(r=(t=this.documentNode)===null||t===void 0?void 0:t.document.children.find(s=>s.id===i.value))!==null&&r!==void 0?r:null,this.selectedPage&&(this.__updateTree(this.selectedPage),this.resetZoom(),this.__updateEffectMargins(),this.panX=0,this.panY=0)})}get isMovable(){return!!(this.renderedImages&&this.documentNode)}get __images(){return this.renderedImages||{}}get error(){if(!this.documentNode||!this.renderedImages)return H({title:"Parameter error",children:b`<span>
          Both <code>document-node</code> and <code>rendered-images</code> are
          required.
        </span>`});if(super.error)return super.error}static get styles(){return ye(super.styles,[A`
        :host {
          --figspec-control-bg-default: #fcfcfc;
          --figspec-control-fg-default: #333;

          --control-bg: var(
            --figspec-control-bg,
            var(--figspec-control-bg-default)
          );
          --control-fg: var(
            --figspec-control-bg,
            var(--figspec-control-fg-default)
          );
          --control-shadow: var(
            --figspec-control-shadow,
            0 2px 4px rgba(0, 0, 0, 0.3)
          );
          --padding: var(--figspec-control-padding, 8px 16px);

          display: flex;
          flex-direction: column;
        }

        @media (prefers-color-scheme: dark) {
          :host {
            --figspec-control-bg-default: #222;
            --figspec-control-fg-default: #fff;
          }
        }

        .controls {
          flex-shrink: 0;
          padding: var(--padding);

          background-color: var(--control-bg);
          box-shadow: var(--control-shadow);
          color: var(--control-fg);
          z-index: 1;
        }

        .view {
          position: relative;
          flex-grow: 1;
          flex-shrink: 1;
        }
      `])}render(){var e;return b`
      <div class="controls">
        <select @change=${Qe(this,et)}>
          ${(e=this.documentNode)===null||e===void 0?void 0:e.document.children.map(t=>b`<option value=${t.id}>${t.name}</option>`)}
        </select>
      </div>

      <div class="view">${super.render()}</div>
    `}getMetadata(){return{fileName:this.documentNode.name,timestamp:this.documentNode.lastModified,link:this.link}}connectedCallback(){super.connectedCallback(),this.documentNode&&(Qe(this,we).call(this),this.selectedPage&&(this.__updateTree(this.selectedPage),this.resetZoom()))}updated(e){super.updated(e),e.has("documentNode")&&(Qe(this,we).call(this),this.selectedPage&&(this.__updateTree(this.selectedPage),this.resetZoom())),e.has("renderedImages")&&this.__updateEffectMargins()}};we=new WeakMap,et=new WeakMap;so([S({type:Object,attribute:"document-node"})],U.prototype,"documentNode",void 0);so([S({type:Object,attribute:"rendered-images"})],U.prototype,"renderedImages",void 0);customElements.get("figspec-file-viewer")||customElements.define("figspec-file-viewer",U);customElements.get("figspec-frame-viewer")||customElements.define("figspec-frame-viewer",z);var wr=new Set(["children","localName","ref","style","className"]),no=new WeakMap,Sr=(o,e,t,r,i)=>{let s=i?.[e];s===void 0||t===r?t==null&&e in HTMLElement.prototype?o.removeAttribute(e):o[e]=t:((n,c,a)=>{let l=no.get(n);l===void 0&&no.set(n,l=new Map);let d=l.get(c);a!==void 0?d===void 0?(l.set(c,d={handleEvent:a}),n.addEventListener(c,d)):d.handleEvent=a:d!==void 0&&(l.delete(c),n.removeEventListener(c,d))})(o,s,t)};function Se(o=window.React,e,t,r,i){let s,n,c;if(e===void 0){let f=o;({tagName:n,elementClass:c,events:r,displayName:i}=f),s=f.react}else s=o,c=t,n=e;let a=s.Component,l=s.createElement,d=new Set(Object.keys(r??{}));class h extends a{constructor(){super(...arguments),this.o=null}t(m){if(this.o!==null)for(let x in this.i)Sr(this.o,x,this.props[x],m?m[x]:void 0,r)}componentDidMount(){this.t()}componentDidUpdate(m){this.t(m)}render(){let{_$Gl:m,...x}=this.props;this.h!==m&&(this.u=$=>{m!==null&&((D,lt)=>{typeof D=="function"?D(lt):D.current=lt})(m,$),this.o=$,this.h=m}),this.i={};let E={ref:this.u};for(let[$,D]of Object.entries(x))wr.has($)?E[$==="className"?"class":$]=D:d.has($)||$ in c.prototype?this.i[$]=D:E[$]=D;return l(n,E)}}h.displayName=i??c.name;let u=s.forwardRef((f,m)=>l(h,{...f,_$Gl:m},f?.children));return u.displayName=h.displayName,u}var ao=Se(ce,"figspec-frame-viewer",z,{onNodeSelect:"nodeselect",onPositionChange:"positionchange",onScaleChange:"scalechange"}),lo=Se(ce,"figspec-file-viewer",U,{onNodeSelect:"nodeselect",onPositionChange:"positionchange",onScaleChange:"scalechange"});var Yc=__STORYBOOK_API__,{ActiveTabs:Wc,Consumer:Gc,ManagerContext:Zc,Provider:qc,RequestResponseError:Xc,addons:Ee,combineParameters:Kc,controlOrMetaKey:Jc,controlOrMetaSymbol:Qc,eventMatchesShortcut:ed,eventToShortcut:td,experimental_requestResponse:od,isMacLike:rd,isShortcutTaken:id,keyToSymbol:sd,merge:nd,mockChannel:ad,optionOrAltSymbol:ld,shortcutMatchesShortcut:cd,shortcutToHumanString:dd,types:tt,useAddonState:hd,useArgTypes:pd,useArgs:ud,useChannel:fd,useGlobalTypes:gd,useGlobals:md,useParameter:ot,useSharedState:vd,useStoryPrepared:yd,useStorybookApi:bd,useStorybookState:co}=__STORYBOOK_API__;var Er=Object.defineProperty,nt=(o,e)=>()=>(o&&(e=o(o=0)),e),Ar=(o,e)=>{for(var t in e)Er(o,t,{get:e[t],enumerable:!0})},Me,ho,po,uo,at=nt(()=>{Me=({config:o,defer:e=!1})=>{let[t,r]=T(e?void 0:o.url),[i,s]=T(!1);return N(()=>{if(!e)return;let n=requestAnimationFrame(()=>{r(o.url)});return()=>cancelAnimationFrame(n)},[e,o.url]),N(()=>{s(!1)},[t]),p("div",{css:ho},!i&&p(I,{css:po},"Loading..."),p("iframe",{css:uo,src:t,allowFullScreen:o.allowFullscreen,onLoad:()=>s(!0)}))},ho=P`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  overflow: hidden;
`,po=P`
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
`,uo=P`
  position: relative;
  width: 100%;
  height: 100%;
  border: none;

  z-index: 1;
`}),it,fo,yo,bo=nt(()=>{at(),it=/https:\/\/[\w.-]+\.?figma.com\/([\w-]+)\/([0-9a-zA-Z]{22,128})(?:\/.*)?$/,fo=o=>it.test(o),yo=({config:o})=>{let e=Y(()=>fo(o.url)?{url:`https://www.figma.com/embed?embed_host=${o.embedHost||location.hostname}&url=${o.url}`,allowFullscreen:o.allowFullscreen}:(console.warn(`[storybook-addon-designs] The URL you specified is not valid Figma URL.
The addon fallbacks to normal iframe mode.For more detail, please check <https://www.figma.com/developers/embed>.`),o),[o.url,o.allowFullscreen,o.embedHost]);return p(Me,{defer:!0,config:e})}}),xo={};Ar(xo,{Figspec:()=>st,default:()=>_o});function Ae(o){return o.status!==200?Promise.reject(o.statusText):o.json()}function Cr(o){if(o.accessToken)return o.accessToken;try{return g.STORYBOOK_FIGMA_ACCESS_TOKEN??null}catch{return null}}function $o(o){return"absoluteBoundingBox"in o?[o]:!o.children||o.children.length===0?[]:o.children.map($o).reduce((e,t)=>e.concat(t),[])}var rt,st,_o,Mr=nt(()=>{bo(),rt=P`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`,st=({config:o})=>{let[e,t]=T({state:"loading"}),r=async i=>{t({state:"loading"});try{let s=o.url.match(it);if(!s)throw new Error(o.url+" is not a valid Figma URL.");let[,,n]=s,c=new URL(o.url).searchParams.get("node-id"),a=Cr(o);if(!a)throw new Error("Personal Access Token is required.");let l={"X-FIGMA-TOKEN":a},d=new URL(`https://api.figma.com/v1/files/${n}`),h=new URL(`https://api.figma.com/v1/images/${n}`);if(h.searchParams.set("format","svg"),!c){let m=await fetch(d.href,{headers:l,signal:i}).then($=>Ae($)),x=$o(m.document);h.searchParams.set("ids",x.map($=>$.id).join(","));let E=await fetch(h.href,{headers:l,signal:i}).then($=>Ae($));t({state:"fetched",value:{type:"file",props:{documentNode:m,renderedImages:E.images,link:o.url}}});return}d.pathname+="/nodes",d.searchParams.set("ids",c),h.searchParams.set("ids",c);let[u,f]=await Promise.all([fetch(d.href,{headers:l,signal:i}).then(m=>Ae(m)),fetch(h.href,{headers:l,signal:i}).then(m=>Ae(m))]);t({state:"fetched",value:{type:"frame",props:{nodes:u,renderedImage:Object.values(f.images)[0],link:o.url}}})}catch(s){if(s instanceof DOMException&&s.code===DOMException.ABORT_ERR)return;console.error(s),t({state:"failed",error:s instanceof Error?s.message:String(s)})}};switch(N(()=>{let i=!1,s=()=>{i=!0},n=new AbortController;return r(n.signal).then(s,s),()=>{i||n.abort()}},[o.url]),e.state){case"loading":return p(I,null,p(_,null,"Loading Figma file..."));case"failed":return p(I,null,p(_,null,"Failed to load Figma file"),p(_,null,e.error));case"fetched":return e.value.type==="file"?p(lo,{css:rt,...e.value.props}):p(ao,{css:rt,...e.value.props})}},_o=st}),wo="STORYBOOK_ADDON_DESIGNS",go=wo+"/panel",Ce="design",mo=class extends ke{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(o){return{hasError:!0,error:o}}componentDidCatch(o,e){console.group("An error occurred during rendering Addon panel of storybook-addon-designs"),console.log("--- Error ---"),console.error(o),console.log("--- React Component Stack ---"),console.error(e.componentStack),console.groupEnd()}render(){return this.state.hasError?p(I,null,p(_,null,"Failed to render addon UI"),p(_,null,p("p",null,"Sorry, this addon has crashed due to the below error has thrown during rendering the addon UI."),p("pre",null,String(this.state.error)),p("p",null,"See console log for more details. To clear the error state, please reload the page."," ",p(J,{href:"https://github.com/storybookjs/addon-designs/issues/new?assignees=&labels=category%3A+bug&template=bug_report.yml",target:"_blank",rel:"noopener",withArrow:!0,cancel:!1},"Bug report")))):this.props.children}};bo();at();var kr=(o,e)=>{let[t,r]=T([0,0]),[i,s]=T(!1),n=k(u=>{u.button===0&&(r([u.screenX,u.screenY]),s(!0))},[s,r]),c=k(u=>{let f=u.touches[0];r([f.screenX,f.screenY]),s(!0)},[s,r]),a=k(u=>{i&&r(f=>(o([u[0]-f[0],u[1]-f[1]]),u))},[r,i,...e]),l=k(u=>{let{screenX:f,screenY:m}=u;a([f,m])},[a]),d=k(u=>{let{screenX:f,screenY:m}=u.touches[0];a([f,m])},[r,i,...e]),h=k(()=>{r([0,0]),s(!1)},[s,r]);return{onMouseDown:n,onMouseMove:l,onMouseUp:h,onMouseLeave:h,onTouchStart:c,onTouchMove:d,onTouchCancel:h,onTouchEnd:h}},Tr=({children:o,className:e,style:t,defaultValue:r,value:i,onChange:s})=>{let[n,c]=T([0,0]);N(()=>{c(r||i||[0,0])},[r]);let a=kr(d=>{s&&s(d),c(h=>[h[0]+d[0],h[1]+d[1]])},[c,s]),l=Y(()=>{let d=i||n;return{transform:`translate(${d[0]}px, ${d[1]}px)`}},[i,n]);return p("div",{css:Pr,className:e,style:t,...a},p("div",{css:Nr,style:l},o))},Pr=P`
  position: relative;
  overflow: hidden;

  &:active {
    cursor: move;
  }
`,Nr=P`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`,Rr=({onZoomIn:o,onZoomOut:e,onReset:t})=>p(_,null,p(de,{onClick:o},p(he,{icon:"zoom"})),p(de,{onClick:e},p(he,{icon:"zoomout"})),p(de,{onClick:t},p(he,{icon:"zoomreset"}))),Or=(o,e)=>{let[t,r]=T(1);N(()=>{r(o)},e);let i=k(()=>{r(c=>c+.1)},[r]),s=k(()=>{r(c=>Math.max(c-.1,.1))},[r]),n=k(()=>{r(1)},[r]);return{scale:t,zoomIn:i,zoomOut:s,resetZoom:n}},Br=({config:o})=>{let e=Or(o.scale||1,[o.scale]),t=Y(()=>({transform:`scale(${e.scale})`}),[e.scale]);return p("div",{css:Lr},p(dt,{border:!0},p(_,{key:"left"},p("p",null,p("b",null,"Image")),p(ht,null),p(Rr,{onReset:e.resetZoom,onZoomIn:e.zoomIn,onZoomOut:e.zoomOut}))),p(Tr,{css:Hr,defaultValue:o.offset},p("img",{css:Ir,src:o.url,style:t})))},Lr=P`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`,Hr=P`
  flex-grow: 1;
`,Ir=P`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;

  pointer-events: none;
  border-radius: 1px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.15);
`,Fr=({config:o})=>p("div",{css:zr},p(J,{cancel:!1,href:o.url,target:o.target??"_blank",rel:o.rel??"noopener",withArrow:o.showArrow??!0},o.label||o.url)),zr=P`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;at();var Ur=o=>{if(o.protocol!=="https:")return{valid:!1,error:p(_,null,"Expected HTTPS link, received ",p("code",null,o.protocol),".")};if(o.hostname!=="www.sketch.com")return{valid:!1,error:p(_,null,"Expected a hostname ",p("code",null,"www.sketch.com"),", received"," ",p("code",null,o.hostname))};let e=p(_,null,"Expected pathname ",p("code",null,"/s/<string>/a/<string>"),", received"," ",p("code",null,o.pathname),"."),t=o.pathname.split("/").slice(1);if(t.length<4)return{valid:!1,error:e};if(t[0]==="embed")return{valid:!0,data:{url:o.href,offscreen:!1}};let[r,i,s,n]=t;return r!=="s"||!i||s!=="a"||!n?{valid:!1,error:e}:{valid:!0,data:{url:`https://www.sketch.com/embed/s/${i}/a/${n}`,offscreen:!1}}},Dr=({config:o})=>{let e=Y(()=>{let t=Ur(new URL(o.url));return t.valid?{...t,data:{...o,...t.data}}:t},[o]);return e.valid?p(Me,{defer:!0,config:e.data}):p(I,null,p(_,null,"Invalid Sketch URL"),p(_,null,e.error))},jr=({tabs:o,deps:e=[]})=>{let[t,r]=T(o[0].id);return N(()=>{r(o[0].id)},e),p(pt,{absolute:!0,selected:t,actions:{onSelect:r}},o.map(i=>p("div",{key:i.id,id:i.id,title:i.name},i.offscreen||t===i.id?i.content:null)))},Vr=Pe(()=>Promise.resolve().then(()=>(Mr(),xo))),Yr=({config:o})=>{if(!o||"length"in o&&o.length===0)return p(I,null,p(_,null,"No designs found"),p(_,null,"Learn how to"," ",p(J,{href:"https://github.com/storybookjs/addon-designs#3-add-it-to-story",target:"_blank",rel:"noopener",withArrow:!0,cancel:!1},"display design preview for the story")));let e=[...o instanceof Array?o:[o]].map(t=>{let r={id:JSON.stringify(t),name:t.name||t.type?.toUpperCase()||"ERROR",offscreen:t.offscreen??!0};switch(t.type){case"iframe":return{...r,content:p(Me,{config:t})};case"figma":return{...r,content:p(yo,{config:t}),offscreen:!1};case"sketch":return{...r,content:p(Dr,{config:t})};case"figspec":case"experimental-figspec":return t.type==="experimental-figspec"&&console.warn("[storybook-addon-designs] `experimental-figspec` is deprecated. We will remove it in v7.0. Please replace it to `figspec` type."),{...r,content:p(Te,{fallback:"Preparing Figspec viewer..."},p(Vr,{config:t})),offscreen:!1};case"image":return{...r,content:p(Br,{config:t})};case"link":return{...r,content:p(Fr,{config:t})}}return{...r,content:p(I,null,p(_,null,"Invalid config type"),p(_,null,"Config type you set is not supported. Please choose one from"," ",p(J,{href:"https://github.com/storybookjs/addon-designs/blob/master/packages/storybook-addon-designs/src/config.ts",target:"_blank",rel:"noopener",withArrow:!0,cancel:!1},"available config types")))}});return e.length===1?p("div",null,e[0].content):p(jr,{tabs:e,deps:[o]})},vo=({active:o})=>{let e=co(),t=ot(Ce),[r,i]=T(o);return N(()=>{i(o)},[t]),N(()=>{o&&i(!0)},[o]),r?p(Yr,{key:e.storyId,config:t}):null},le="Design";function Wr(o){Ee.register(wo,e=>{let t=function(){let r=ot(Ce);return r?Array.isArray(r)?r.length>0?`${le} (${r.length})`:le:(r.name||le)+" (1)":le};o==="tab"?Ee.add(go,{title:le,render({active:r}){return r?p(mo,null,p(vo,{active:!0})):p("noscript",null)},type:tt.TAB,paramKey:Ce}):Ee.add(go,{type:tt.PANEL,title:t,paramKey:Ce,render({active:r}){return p(ct,{active:!!r},p(mo,null,p(vo,{active:!!r})))}})})}Wr("panel");})();
}catch(e){ console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e); }
