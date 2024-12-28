import{s as y}from"./DdRiL9NS.js";import{B as w,o as s,c as l,k as x,m,t as d,p as _,I as k,q as $,n as z,z as C,A as S,b7 as A,a as e,b as p,w as h,H as n}from"./BM9grzN6.js";import{a as j}from"./DXh5QzY0.js";import{_ as f}from"./Ecz1I3k6.js";import{_ as B}from"./DlAUqK2U.js";var E=function(i){var a=i.dt;return`
.p-avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: `.concat(a("avatar.width"),`;
    height: `).concat(a("avatar.height"),`;
    font-size: `).concat(a("avatar.font.size"),`;
    background: `).concat(a("avatar.background"),`;
    color: `).concat(a("avatar.color"),`;
    border-radius: `).concat(a("avatar.border.radius"),`;
}

.p-avatar-image {
    background: transparent;
}

.p-avatar-circle {
    border-radius: 50%;
}

.p-avatar-circle img {
    border-radius: 50%;
}

.p-avatar-icon {
    font-size: `).concat(a("avatar.icon.size"),`;
    width: `).concat(a("avatar.icon.size"),`;
    height: `).concat(a("avatar.icon.size"),`;
}

.p-avatar img {
    width: 100%;
    height: 100%;
}

.p-avatar-lg {
    width: `).concat(a("avatar.lg.width"),`;
    height: `).concat(a("avatar.lg.width"),`;
    font-size: `).concat(a("avatar.lg.font.size"),`;
}

.p-avatar-lg .p-avatar-icon {
    font-size: `).concat(a("avatar.lg.icon.size"),`;
    width: `).concat(a("avatar.lg.icon.size"),`;
    height: `).concat(a("avatar.lg.icon.size"),`;
}

.p-avatar-xl {
    width: `).concat(a("avatar.xl.width"),`;
    height: `).concat(a("avatar.xl.width"),`;
    font-size: `).concat(a("avatar.xl.font.size"),`;
}

.p-avatar-xl .p-avatar-icon {
    font-size: `).concat(a("avatar.xl.icon.size"),`;
    width: `).concat(a("avatar.xl.icon.size"),`;
    height: `).concat(a("avatar.xl.icon.size"),`;
}

.p-avatar-group {
    display: flex;
    align-items: center;
}

.p-avatar-group .p-avatar + .p-avatar {
    margin-inline-start: `).concat(a("avatar.group.offset"),`;
}

.p-avatar-group .p-avatar {
    border: 2px solid `).concat(a("avatar.group.border.color"),`;
}

.p-avatar-group .p-avatar-lg + .p-avatar-lg {
    margin-inline-start: `).concat(a("avatar.lg.group.offset"),`;
}

.p-avatar-group .p-avatar-xl + .p-avatar-xl {
    margin-inline-start: `).concat(a("avatar.xl.group.offset"),`;
}
`)},L={root:function(i){var a=i.props;return["p-avatar p-component",{"p-avatar-image":a.image!=null,"p-avatar-circle":a.shape==="circle","p-avatar-lg":a.size==="large","p-avatar-xl":a.size==="xlarge"}]},label:"p-avatar-label",icon:"p-avatar-icon"},I=w.extend({name:"avatar",theme:E,classes:L}),P={name:"BaseAvatar",extends:y,props:{label:{type:String,default:null},icon:{type:String,default:null},image:{type:String,default:null},size:{type:String,default:"normal"},shape:{type:String,default:"square"},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:I,provide:function(){return{$pcAvatar:this,$parentInstance:this}}},b={name:"Avatar",extends:P,inheritAttrs:!1,emits:["error"],methods:{onError:function(i){this.$emit("error",i)}}},D=["aria-labelledby","aria-label"],N=["src","alt"];function U(t,i,a,g,r,c){return s(),l("div",m({class:t.cx("root"),"aria-labelledby":t.ariaLabelledby,"aria-label":t.ariaLabel},t.ptmi("root")),[x(t.$slots,"default",{},function(){return[t.label?(s(),l("span",m({key:0,class:t.cx("label")},t.ptm("label")),d(t.label),17)):t.$slots.icon?(s(),_($(t.$slots.icon),{key:1,class:k(t.cx("icon"))},null,8,["class"])):t.icon?(s(),l("span",m({key:2,class:[t.cx("icon"),t.icon]},t.ptm("icon")),null,16)):t.image?(s(),l("img",m({key:3,src:t.image,alt:t.ariaLabel,onError:i[0]||(i[0]=function(){return c.onError&&c.onError.apply(c,arguments)})},t.ptm("image")),null,16,N)):z("",!0)]})],16,D)}b.render=U;const V=f+"#close",q=f+"#send-message",H={class:"conversation"},R={class:"w-[90%] mx-auto h-[32%]"},M={class:"flex items-center justify-between"},T={class:"mt-4"},Y={class:"text-2xl font-bold capitalize"},F={key:0},G={key:1},J=["textContent"],K={class:"mt-2 flex"},O={class:"bg-gray-800 dark:bg-white rounded-xl h-[68.5%] transition-colors text-white dark:text-gray-900 relative"},Q={class:"flex flex-col items-start w-[calc(100%-36px)] ltr:pl-3 rtl:pr-3"},W={class:"text-sm text-gray-200 dark:text-gray-700"},X={key:0},Z={key:1},aa={key:0,class:"text-lg"},ta={key:1,class:"text-lg"},ea=C({__name:"Conversation",async setup(t){let i,a;const{locale:g,t:r}=S();return[i,a]=A(()=>new Promise((c,o)=>{setTimeout(c,2e3)})),await i,a(),(c,o)=>{const u=j,v=b;return s(),l("div",H,[e("div",R,[e("div",M,[o[2]||(o[2]=e("div",{class:"circle-shadow"},null,-1)),p(u,{class:"inline-block",pt:{root:"!bg-transparent !hover:bg-transparent !border-none !rounded-none !p-0"},onClick:o[0]||(o[0]=na=>c.$emit("handle-close"))},{default:h(()=>o[1]||(o[1]=[e("svg",{width:"2rem",height:"2rem",class:"text-gray-900 dark:text-white hover:text-green-500 dark:hover:text-primary-500 cursor-pointer transition-all"},[e("use",{width:"2rem",height:"2rem",href:V})],-1)])),_:1})]),e("div",T,[e("h2",Y,[n(g)==="en"?(s(),l("span",F,d(`${n(r)("general.UptimeRobot")} ${n(r)("general.team")} ${n(r)("general.support")}`),1)):(s(),l("span",G,d(`${n(r)("general.team")} ${n(r)("general.support")} ${n(r)("general.UptimeRobot")}`),1))]),e("p",{class:"font-bold my-1",textContent:d(n(r)("phrases.etc.helpYou"))},null,8,J)]),e("div",K,[p(v,{image:"/img/conversation-avatar-1.jpg",pt:{root:"!w-10 !h-10",image:"rounded-full"}}),p(v,{image:"/img/conversation-avatar-2.jpg",pt:{root:"!w-10 !h-10",image:"rounded-full"}}),p(v,{image:"/img/conversation-avatar-3.jpg",pt:{root:"!w-10 !h-10",image:"rounded-full"}}),p(v,{image:"/img/conversation-avatar-4.webp",pt:{root:"!w-10 !h-10",image:"rounded-full"}})])]),e("div",O,[p(u,{pt:{root:"flex w-full rounded-b-none rounded-t-xl p-4 hover:bg-gray-700 dark:hover:bg-gray-100"},unstyled:""},{default:h(()=>[o[4]||(o[4]=e("div",{class:"circle-shadow bg-green-200 dark:bg-primary-400/90"},null,-1)),e("div",Q,[o[3]||(o[3]=e("div",{class:"flex justify-between w-full"},[e("h3",{class:"text-lg"},"Mr.Always Up"),e("span",{class:"date text-xs"}," 10/14/2024 13:50 ")],-1)),e("p",W,[n(g)==="en"?(s(),l("span",X,"Hey!.join our Discord...")):(s(),l("span",Z,"سلام! به گفت و گوی ما بپیوندید..."))])])]),_:1}),p(u,{severity:"success",class:"!absolute bottom-5 !mx-auto left-0 right-0 !w-[80%] !rounded-md"},{default:h(()=>[o[5]||(o[5]=e("svg",{width:"1.2rem",height:"1.2rem"},[e("use",{width:"1.2rem",height:"1.2rem",href:q})],-1)),n(g)==="en"?(s(),l("span",aa,d(`${n(r)("general.start")} ${n(r)("general.new")} ${n(r)("general.conversation")}`),1)):(s(),l("span",ta,d(`${n(r)("general.start")} ${n(r)("general.conversation")} ${n(r)("general.new")}`),1))]),_:1})])])}}}),ca=B(ea,[["__scopeId","data-v-413a4ff2"]]);export{ca as default};
