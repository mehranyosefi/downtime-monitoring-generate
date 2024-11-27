import{e as f,M as k,N as g,P,O as S,Q as L,l as B,R as C,S as R,U as p,V as T,_ as j,h as v,W as y,s as o,q as A,X as N,T as O,Y as w,Z as E,C as H,o as l,c as i,E as c,k as u,a as $}from"./yW9OeVAK.js";import{a as V}from"./DbhS83mR.js";const z=f({name:"LayoutLoader",inheritAttrs:!1,props:{name:String,layoutProps:Object},setup(e,a){return()=>y(p[e.name],e.layoutProps,a.slots)}}),D=f({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null},fallback:{type:[String,Object],default:null}},setup(e,a){const t=k(),n=g(P),r=n===S()?L():n,d=B(()=>{let s=v(e.name)??r.meta.layout??"default";return s&&!(s in p)&&e.fallback&&(s=v(e.fallback)),s}),m=C();a.expose({layoutRef:m});const b=t.deferHydration();if(t.isHydrating){const s=t.hooks.hookOnce("app:error",b);R().beforeEach(s)}return()=>{const s=d.value&&d.value in p,h=r.meta.layoutTransition??T;return j(O,s&&h,{default:()=>y(N,{suspensible:!0,onResolve:()=>{A(b)}},{default:()=>y(I,{layoutProps:o(a.attrs,{ref:m}),key:d.value||void 0,name:d.value,shouldProvide:!e.name,hasTransition:!!h},a.slots)})}).default()}}}),I=f({name:"NuxtLayoutProvider",inheritAttrs:!1,props:{name:{type:[String,Boolean]},layoutProps:{type:Object},hasTransition:{type:Boolean},shouldProvide:{type:Boolean}},setup(e,a){const t=e.name;return e.shouldProvide&&w(E,{isCurrent:n=>t===(n.meta.layout??"default")}),()=>{var n,r;return!t||typeof t=="string"&&!(t in p)?(r=(n=a.slots).default)==null?void 0:r.call(n):y(z,{key:t,layoutProps:e.layoutProps,name:t},a.slots)}}});var M=function(a){var t=a.dt;return`
.p-card {
    background: `.concat(t("card.background"),`;
    color: `).concat(t("card.color"),`;
    box-shadow: `).concat(t("card.shadow"),`;
    border-radius: `).concat(t("card.border.radius"),`;
    display: flex;
    flex-direction: column;
}

.p-card-caption {
    display: flex;
    flex-direction: column;
    gap: `).concat(t("card.caption.gap"),`;
}

.p-card-body {
    padding: `).concat(t("card.body.padding"),`;
    display: flex;
    flex-direction: column;
    gap: `).concat(t("card.body.gap"),`;
}

.p-card-title {
    font-size: `).concat(t("card.title.font.size"),`;
    font-weight: `).concat(t("card.title.font.weight"),`;
}

.p-card-subtitle {
    color: `).concat(t("card.subtitle.color"),`;
}
`)},q={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},Q=H.extend({name:"card",theme:M,classes:q}),U={name:"BaseCard",extends:V,style:Q,provide:function(){return{$pcCard:this,$parentInstance:this}}},W={name:"Card",extends:U,inheritAttrs:!1};function X(e,a,t,n,r,d){return l(),i("div",o({class:e.cx("root")},e.ptmi("root")),[e.$slots.header?(l(),i("div",o({key:0,class:e.cx("header")},e.ptm("header")),[c(e.$slots,"header")],16)):u("",!0),$("div",o({class:e.cx("body")},e.ptm("body")),[e.$slots.title||e.$slots.subtitle?(l(),i("div",o({key:0,class:e.cx("caption")},e.ptm("caption")),[e.$slots.title?(l(),i("div",o({key:0,class:e.cx("title")},e.ptm("title")),[c(e.$slots,"title")],16)):u("",!0),e.$slots.subtitle?(l(),i("div",o({key:1,class:e.cx("subtitle")},e.ptm("subtitle")),[c(e.$slots,"subtitle")],16)):u("",!0)],16)):u("",!0),$("div",o({class:e.cx("content")},e.ptm("content")),[c(e.$slots,"content")],16),e.$slots.footer?(l(),i("div",o({key:1,class:e.cx("footer")},e.ptm("footer")),[c(e.$slots,"footer")],16)):u("",!0)],16)],16)}W.render=X;export{D as _,W as s};
