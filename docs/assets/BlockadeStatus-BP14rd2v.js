import{d as n,o as r,c,g as i,a as u,k as d,n as p,r as l}from"./vue.esm-bundler-Dgz4BqwH.js";import{a as _,I as t,b as m}from"./Icon-Dg-H1Zak.js";import{a as e}from"./user-DY5hg_iu.js";import{_ as S}from"./_plugin-vue_export-helper-DlAUqK2U.js";const a=n({name:"BlockadeStatus",components:{Icon:_},props:{status:{type:String,required:!0}},data(){return{ICONS:Object.freeze(t),ICON_SIZES:Object.freeze(m)}},computed:{icon(){return this.status===e.ACTIVE?t.FA_LOCK_KEYHOLE:t.FA_UNLOCK_KEYHOLE},statusClass(){return this.status===e.ACTIVE?"-ds-active":""},text(){return this.status===e.ACTIVE?"Blokada dostępu":"Blokada zakończona"}}}),C={class:"ds-blockadeStatus__text"};function f(s,k,I,E,O,B){const o=l("icon");return r(),c("div",{class:p(["ds-blockadeStatus",s.statusClass])},[i(o,{size:s.ICON_SIZES.X_SMALL,icon:s.icon,class:"ds-blockadeStatus__icon"},null,8,["size","icon"]),u("span",C,d(s.text),1)],2)}const z=S(a,[["render",f],["__scopeId","data-v-a48935bf"]]);a.__docgenInfo={displayName:"BlockadeStatus",exportName:"default",description:"",tags:{},props:[{name:"status",type:{name:"string"},required:!0}],sourceFiles:["/home/runner/work/design-system/design-system/lib/js/components/Statuses/BlockadeStatus/BlockadeStatus.vue"]};export{z as B};