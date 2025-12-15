import{d as P}from"./index-DrFu-skq.js";const{useEffect:B,useMemo:A}=__STORYBOOK_MODULE_PREVIEW_API__,{global:j}=__STORYBOOK_MODULE_GLOBAL__,{logger:X}=__STORYBOOK_MODULE_CLIENT_LOGGER__;var p="backgrounds",D={light:{name:"light",value:"#F8F8F8"},dark:{name:"dark",value:"#333"}},{document:b,window:G}=j,F=()=>{var r;return!!((r=G==null?void 0:G.matchMedia("(prefers-reduced-motion: reduce)"))!=null&&r.matches)},T=r=>{(Array.isArray(r)?r:[r]).forEach(N)},N=r=>{var t;let e=b.getElementById(r);e&&((t=e.parentElement)==null||t.removeChild(e))},Y=(r,e)=>{let t=b.getElementById(r);if(t)t.innerHTML!==e&&(t.innerHTML=e);else{let o=b.createElement("style");o.setAttribute("id",r),o.innerHTML=e,b.head.appendChild(o)}},H=(r,e,t)=>{var a;let o=b.getElementById(r);if(o)o.innerHTML!==e&&(o.innerHTML=e);else{let d=b.createElement("style");d.setAttribute("id",r),d.innerHTML=e;let i=`addon-backgrounds-grid${t?`-docs-${t}`:""}`,n=b.getElementById(i);n?(a=n.parentElement)==null||a.insertBefore(d,n):b.head.appendChild(d)}},W={cellSize:100,cellAmount:10,opacity:.8},R="addon-backgrounds",C="addon-backgrounds-grid",q=F()?"":"transition: background-color 0.3s;",J=(r,e)=>{let{globals:t,parameters:o,viewMode:a,id:d}=e,{options:i=D,disable:n,grid:s=W}=o[p]||{},c=t[p]||{},u=c.value,l=u?i[u]:void 0,$=(l==null?void 0:l.value)||"transparent",f=c.grid||!1,y=!!l&&!n,k=a==="docs"?`#anchor--${d} .docs-story`:".sb-show-main",x=a==="docs"?`#anchor--${d} .docs-story`:".sb-show-main",m=o.layout===void 0||o.layout==="padded",_=a==="docs"?20:m?16:0,{cellAmount:v,cellSize:g,opacity:S,offsetX:E=_,offsetY:h=_}=s,M=a==="docs"?`${R}-docs-${d}`:`${R}-color`,w=a==="docs"?d:null;B(()=>{let L=`
    ${k} {
      background: ${$} !important;
      ${q}
      }`;if(!y){T(M);return}H(M,L,w)},[k,M,w,y,$]);let O=a==="docs"?`${C}-docs-${d}`:`${C}`;return B(()=>{if(!f){T(O);return}let L=[`${g*v}px ${g*v}px`,`${g*v}px ${g*v}px`,`${g}px ${g}px`,`${g}px ${g}px`].join(", "),K=`
        ${x} {
          background-size: ${L} !important;
          background-position: ${E}px ${h}px, ${E}px ${h}px, ${E}px ${h}px, ${E}px ${h}px !important;
          background-blend-mode: difference !important;
          background-image: linear-gradient(rgba(130, 130, 130, ${S}) 1px, transparent 1px),
           linear-gradient(90deg, rgba(130, 130, 130, ${S}) 1px, transparent 1px),
           linear-gradient(rgba(130, 130, 130, ${S/2}) 1px, transparent 1px),
           linear-gradient(90deg, rgba(130, 130, 130, ${S/2}) 1px, transparent 1px) !important;
        }
      `;Y(O,K)},[v,g,x,O,f,E,h,S]),r()},Q=(r,e=[],t)=>{if(r==="transparent")return"transparent";if(e.find(a=>a.value===r)||r)return r;let o=e.find(a=>a.name===t);if(o)return o.value;if(t){let a=e.map(d=>d.name).join(", ");X.warn(P`
        Backgrounds Addon: could not find the default color "${t}".
        These are the available colors for your story based on your configuration:
        ${a}.
      `)}return"transparent"},Z=(r,e)=>{var u;let{globals:t,parameters:o}=e,a=(u=t[p])==null?void 0:u.value,d=o[p],i=A(()=>d.disable?"transparent":Q(a,d.values,d.default),[d,a]),n=A(()=>i&&i!=="transparent",[i]),s=e.viewMode==="docs"?`#anchor--${e.id} .docs-story`:".sb-show-main",c=A(()=>`
      ${s} {
        background: ${i} !important;
        ${F()?"":"transition: background-color 0.3s;"}
      }
    `,[i,s]);return B(()=>{let l=e.viewMode==="docs"?`addon-backgrounds-docs-${e.id}`:"addon-backgrounds-color";if(!n){T(l);return}H(l,c,e.viewMode==="docs"?e.id:null)},[n,c,e]),r()},V=(r,e)=>{var y,k,x;let{globals:t,parameters:o}=e,a=o[p].grid,d=((y=t[p])==null?void 0:y.grid)===!0&&a.disable!==!0,{cellAmount:i,cellSize:n,opacity:s}=a,c=e.viewMode==="docs",u=o.layout===void 0||o.layout==="padded"?16:0,l=(k=a.offsetX)!=null?k:c?20:u,$=(x=a.offsetY)!=null?x:c?20:u,f=A(()=>{let m=e.viewMode==="docs"?`#anchor--${e.id} .docs-story`:".sb-show-main",_=[`${n*i}px ${n*i}px`,`${n*i}px ${n*i}px`,`${n}px ${n}px`,`${n}px ${n}px`].join(", ");return`
      ${m} {
        background-size: ${_} !important;
        background-position: ${l}px ${$}px, ${l}px ${$}px, ${l}px ${$}px, ${l}px ${$}px !important;
        background-blend-mode: difference !important;
        background-image: linear-gradient(rgba(130, 130, 130, ${s}) 1px, transparent 1px),
         linear-gradient(90deg, rgba(130, 130, 130, ${s}) 1px, transparent 1px),
         linear-gradient(rgba(130, 130, 130, ${s/2}) 1px, transparent 1px),
         linear-gradient(90deg, rgba(130, 130, 130, ${s/2}) 1px, transparent 1px) !important;
      }
    `},[n]);return B(()=>{let m=e.viewMode==="docs"?`addon-backgrounds-grid-docs-${e.id}`:"addon-backgrounds-grid";if(!d){T(m);return}Y(m,f)},[d,f,e]),r()},I,ae=(I=globalThis.FEATURES)!=null&&I.backgroundsStoryGlobals?[J]:[V,Z],z,oe={[p]:{grid:{cellSize:20,opacity:.5,cellAmount:5},disable:!1,...!((z=globalThis.FEATURES)!=null&&z.backgroundsStoryGlobals)&&{values:Object.values(D)}}},ee={[p]:{value:void 0,grid:!1}},U,de=(U=globalThis.FEATURES)!=null&&U.backgroundsStoryGlobals?ee:{[p]:null};export{ae as decorators,de as initialGlobals,oe as parameters};
