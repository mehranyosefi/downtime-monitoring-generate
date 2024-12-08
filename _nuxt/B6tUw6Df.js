import{a as i}from"./kI3aYKfa.js";import{G as l,o,c as r,y as a,I as n,m as s,a as c}from"./B_g5Nb5G.js";var p=function(d){var t=d.dt;return`
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
`)},u={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},m=l.extend({name:"card",theme:p,classes:u}),f={name:"BaseCard",extends:i,style:m,provide:function(){return{$pcCard:this,$parentInstance:this}}},b={name:"Card",extends:f,inheritAttrs:!1};function y(e,d,t,$,h,v){return o(),r("div",a({class:e.cx("root")},e.ptmi("root")),[e.$slots.header?(o(),r("div",a({key:0,class:e.cx("header")},e.ptm("header")),[n(e.$slots,"header")],16)):s("",!0),c("div",a({class:e.cx("body")},e.ptm("body")),[e.$slots.title||e.$slots.subtitle?(o(),r("div",a({key:0,class:e.cx("caption")},e.ptm("caption")),[e.$slots.title?(o(),r("div",a({key:0,class:e.cx("title")},e.ptm("title")),[n(e.$slots,"title")],16)):s("",!0),e.$slots.subtitle?(o(),r("div",a({key:1,class:e.cx("subtitle")},e.ptm("subtitle")),[n(e.$slots,"subtitle")],16)):s("",!0)],16)):s("",!0),c("div",a({class:e.cx("content")},e.ptm("content")),[n(e.$slots,"content")],16),e.$slots.footer?(o(),r("div",a({key:1,class:e.cx("footer")},e.ptm("footer")),[n(e.$slots,"footer")],16)):s("",!0)],16)],16)}b.render=y;export{b as s};
