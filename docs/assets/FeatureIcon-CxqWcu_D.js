import{a as l,I as u,b as o}from"./Icon-Dg-H1Zak.js";import{d as i,t as E,o as t,c as d,g as c,n as I,r as R}from"./vue.esm-bundler-Dgz4BqwH.js";import{_ as O}from"./_plugin-vue_export-helper-DlAUqK2U.js";const n={SMALL:"small",MEDIUM:"medium",LARGE:"large",X_LARGE:"xLarge"},a={DANGER:"danger",INFO:"info",NEUTRAL:"neutral",NEUTRAL_WEAK:"neutralWeak",PRIMARY:"primary",SUCCESS:"success",WARNING:"warning"},s=i({name:"FeatureIcon",components:{WnlIcon:l},props:{icon:{type:Object,default:null,validator(e){return Object.values(u).includes(E(e))}},size:{type:String,default:n.MEDIUM,validator:e=>Object.values(n).includes(e)},color:{type:String,required:!0,validator(e){return Object.values(a).includes(e)}},doubleBackground:{type:Boolean,default:!1}},data(){return{FEATURE_ICON_COLOR:Object.freeze(a),FEATURE_ICON_SIZES:Object.freeze(n)}},computed:{iconSize(){return this.size===n.SMALL?o.X_SMALL:this.size===n.LARGE?o.LARGE:this.size===n.X_LARGE?o.X_LARGE:o.MEDIUM}}});function A(e,m,C,f,p,N){const r=R("wnl-icon");return t(),d("div",{class:I(["ds-featureIcon",{"-ds-doubleBackground":e.doubleBackground,"-ds-danger":e.color===e.FEATURE_ICON_COLOR.DANGER,"-ds-info":e.color===e.FEATURE_ICON_COLOR.INFO,"-ds-neutral":e.color===e.FEATURE_ICON_COLOR.NEUTRAL,"-ds-neutralWeak":e.color===e.FEATURE_ICON_COLOR.NEUTRAL_WEAK,"-ds-primary":e.color===e.FEATURE_ICON_COLOR.PRIMARY,"-ds-success":e.color===e.FEATURE_ICON_COLOR.SUCCESS,"-ds-warning":e.color===e.FEATURE_ICON_COLOR.WARNING,"-ds-small":e.size===e.FEATURE_ICON_SIZES.SMALL,"-ds-medium":e.size===e.FEATURE_ICON_SIZES.MEDIUM,"-ds-large":e.size===e.FEATURE_ICON_SIZES.LARGE,"-ds-xLarge":e.size===e.FEATURE_ICON_SIZES.X_LARGE}])},[c(r,{class:"ds-featureIcon__icon",icon:e.icon,size:e.iconSize},null,8,["icon","size"])],2)}const U=O(s,[["render",A]]);s.__docgenInfo={displayName:"FeatureIcon",exportName:"default",description:"",tags:{},props:[{name:"icon",type:{name:"object"},defaultValue:{func:!1,value:"null"}},{name:"size",type:{name:"string"},defaultValue:{func:!1,value:"FEATURE_ICON_SIZES.MEDIUM"}},{name:"color",type:{name:"string"},required:!0},{name:"doubleBackground",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["/home/runner/work/design-system/design-system/lib/js/components/Icons/FeatureIcon/FeatureIcon.vue"]};export{U as F,n as a,a as b};