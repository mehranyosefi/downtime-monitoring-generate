import{z as f,W as k,X as g,Y as P,Z as L,_ as B,y as S,v as C,$ as R,a0 as p,a1 as j,a2 as A,I as v,a3 as y,m as o,L as T,a4 as w,V as N,a5 as O,a6 as z,B as E,o as l,c as i,k as c,n as u,a as $}from"./DYj79cmF.js";import{b as H}from"./KIzrvjWp.js";const I=f({name:"LayoutLoader",inheritAttrs:!1,props:{name:String,layoutProps:Object},setup(e,a){return()=>y(p[e.name],e.layoutProps,a.slots)}}),G=f({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null},fallback:{type:[String,Object],default:null}},setup(e,a){const t=k(),n=g(P),r=n===L()?B():n,d=S(()=>{let s=v(e.name)??r.meta.layout??"default";return s&&!(s in p)&&e.fallback&&(s=v(e.fallback)),s}),m=C();a.expose({layoutRef:m});const b=t.deferHydration();if(t.isHydrating){const s=t.hooks.hookOnce("app:error",b);R().beforeEach(s)}return()=>{const s=d.value&&d.value in p,h=r.meta.layoutTransition??j;return A(N,s&&h,{default:()=>y(w,{suspensible:!0,onResolve:()=>{T(b)}},{default:()=>y(V,{layoutProps:o(a.attrs,{ref:m}),key:d.value||void 0,name:d.value,shouldProvide:!e.name,hasTransition:!!h},a.slots)})}).default()}}}),V=f({name:"NuxtLayoutProvider",inheritAttrs:!1,props:{name:{type:[String,Boolean]},layoutProps:{type:Object},hasTransition:{type:Boolean},shouldProvide:{type:Boolean}},setup(e,a){const t=e.name;return e.shouldProvide&&O(z,{isCurrent:n=>t===(n.meta.layout??"default")}),()=>{var n,r;return!t||typeof t=="string"&&!(t in p)?(r=(n=a.slots).default)==null?void 0:r.call(n):y(I,{key:t,layoutProps:e.layoutProps,name:t},a.slots)}}});var M=function(a){var t=a.dt;return`
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
`)},W={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},X=E.extend({name:"card",theme:M,classes:W}),Y={name:"BaseCard",extends:H,style:X,provide:function(){return{$pcCard:this,$parentInstance:this}}},Z={name:"Card",extends:Y,inheritAttrs:!1};function q(e,a,t,n,r,d){return l(),i("div",o({class:e.cx("root")},e.ptmi("root")),[e.$slots.header?(l(),i("div",o({key:0,class:e.cx("header")},e.ptm("header")),[c(e.$slots,"header")],16)):u("",!0),$("div",o({class:e.cx("body")},e.ptm("body")),[e.$slots.title||e.$slots.subtitle?(l(),i("div",o({key:0,class:e.cx("caption")},e.ptm("caption")),[e.$slots.title?(l(),i("div",o({key:0,class:e.cx("title")},e.ptm("title")),[c(e.$slots,"title")],16)):u("",!0),e.$slots.subtitle?(l(),i("div",o({key:1,class:e.cx("subtitle")},e.ptm("subtitle")),[c(e.$slots,"subtitle")],16)):u("",!0)],16)):u("",!0),$("div",o({class:e.cx("content")},e.ptm("content")),[c(e.$slots,"content")],16),e.$slots.footer?(l(),i("div",o({key:1,class:e.cx("footer")},e.ptm("footer")),[c(e.$slots,"footer")],16)):u("",!0)],16)],16)}Z.render=q;export{G as _,Z as s};
