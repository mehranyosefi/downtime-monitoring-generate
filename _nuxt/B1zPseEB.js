import{s as f}from"./DzfROggB.js";import{B as b,o as s,c as i,k as y,m as g,t as p,p as w,I as x,q as _,n as k,z as $,A as z,a as e,b as c,w as v,H as n}from"./DWnQAoXO.js";import{a as S}from"./AXOV3S0f.js";import{_ as u}from"./D_BelsTX.js";import{_ as C}from"./DlAUqK2U.js";var A=function(o){var a=o.dt;return`
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
`)},B={root:function(o){var a=o.props;return["p-avatar p-component",{"p-avatar-image":a.image!=null,"p-avatar-circle":a.shape==="circle","p-avatar-lg":a.size==="large","p-avatar-xl":a.size==="xlarge"}]},label:"p-avatar-label",icon:"p-avatar-icon"},j=b.extend({name:"avatar",theme:A,classes:B}),E={name:"BaseAvatar",extends:f,props:{label:{type:String,default:null},icon:{type:String,default:null},image:{type:String,default:null},size:{type:String,default:"normal"},shape:{type:String,default:"square"},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:j,provide:function(){return{$pcAvatar:this,$parentInstance:this}}},h={name:"Avatar",extends:E,inheritAttrs:!1,emits:["error"],methods:{onError:function(o){this.$emit("error",o)}}},L=["aria-labelledby","aria-label"],I=["src","alt"];function D(t,o,a,m,r,l){return s(),i("div",g({class:t.cx("root"),"aria-labelledby":t.ariaLabelledby,"aria-label":t.ariaLabel},t.ptmi("root")),[y(t.$slots,"default",{},function(){return[t.label?(s(),i("span",g({key:0,class:t.cx("label")},t.ptm("label")),p(t.label),17)):t.$slots.icon?(s(),w(_(t.$slots.icon),{key:1,class:x(t.cx("icon"))},null,8,["class"])):t.icon?(s(),i("span",g({key:2,class:[t.cx("icon"),t.icon]},t.ptm("icon")),null,16)):t.image?(s(),i("img",g({key:3,src:t.image,alt:t.ariaLabel,onError:o[0]||(o[0]=function(){return l.onError&&l.onError.apply(l,arguments)})},t.ptm("image")),null,16,I)):k("",!0)]})],16,L)}h.render=D;const N=u+"#close",P=u+"#send-message",U={class:"conversation"},V={class:"w-[90%] mx-auto h-[32%]"},q={class:"flex items-center justify-between"},H={class:"mt-4"},R={class:"text-2xl font-bold capitalize"},M={key:0},Y={key:1},F=["textContent"],G={class:"mt-2 flex"},J={class:"bg-gray-800 dark:bg-white rounded-xl h-[68.5%] transition-colors text-white dark:text-gray-900 relative"},K={class:"flex flex-col items-start w-[calc(100%-36px)] ltr:pl-3 rtl:pr-3"},O={class:"text-sm text-gray-200 dark:text-gray-700"},Q={key:0},T={key:1},W={key:0,class:"text-lg"},X={key:1,class:"text-lg"},Z=$({__name:"Conversation",setup(t){const{locale:o,t:a}=z();return(m,r)=>{const l=S,d=h;return s(),i("div",U,[e("div",V,[e("div",q,[r[2]||(r[2]=e("div",{class:"circle-shadow"},null,-1)),c(l,{class:"inline-block",pt:{root:"!bg-transparent !hover:bg-transparent !border-none !rounded-none !p-0"},onClick:r[0]||(r[0]=aa=>m.$emit("handle-close"))},{default:v(()=>r[1]||(r[1]=[e("svg",{width:"2rem",height:"2rem",class:"text-gray-900 dark:text-white hover:text-green-500 dark:hover:text-primary-500 cursor-pointer transition-all"},[e("use",{width:"2rem",height:"2rem",href:N})],-1)])),_:1})]),e("div",H,[e("h2",R,[n(o)==="en"?(s(),i("span",M,p(`${n(a)("general.UptimeRobot")} ${n(a)("general.team")} ${n(a)("general.support")}`),1)):(s(),i("span",Y,p(`${n(a)("general.team")} ${n(a)("general.support")} ${n(a)("general.UptimeRobot")}`),1))]),e("p",{class:"font-bold my-1",textContent:p(n(a)("phrases.etc.helpYou"))},null,8,F)]),e("div",G,[c(d,{image:"/img/conversation-avatar-1.jpg",pt:{root:"!w-10 !h-10",image:"rounded-full"}}),c(d,{image:"/img/conversation-avatar-2.jpg",pt:{root:"!w-10 !h-10",image:"rounded-full"}}),c(d,{image:"/img/conversation-avatar-3.jpg",pt:{root:"!w-10 !h-10",image:"rounded-full"}}),c(d,{image:"/img/conversation-avatar-4.webp",pt:{root:"!w-10 !h-10",image:"rounded-full"}})])]),e("div",J,[c(l,{pt:{root:"flex w-full rounded-b-none rounded-t-xl p-4 hover:bg-gray-700 dark:hover:bg-gray-100"},unstyled:""},{default:v(()=>[r[4]||(r[4]=e("div",{class:"circle-shadow bg-green-200 dark:bg-primary-400/90"},null,-1)),e("div",K,[r[3]||(r[3]=e("div",{class:"flex justify-between w-full"},[e("h3",{class:"text-lg"},"Mr.Always Up"),e("span",{class:"date text-xs"}," 10/14/2024 13:50 ")],-1)),e("p",O,[n(o)==="en"?(s(),i("span",Q,"Hey!.join our Discord...")):(s(),i("span",T,"سلام! به گفت و گوی ما بپیوندید..."))])])]),_:1}),c(l,{severity:"success",class:"!absolute bottom-5 !mx-auto left-0 right-0 !w-[80%] !rounded-md"},{default:v(()=>[r[5]||(r[5]=e("svg",{width:"1.2rem",height:"1.2rem"},[e("use",{width:"1.2rem",height:"1.2rem",href:P})],-1)),n(o)==="en"?(s(),i("span",W,p(`${n(a)("general.start")} ${n(a)("general.new")} ${n(a)("general.conversation")}`),1)):(s(),i("span",X,p(`${n(a)("general.start")} ${n(a)("general.conversation")} ${n(a)("general.new")}`),1))]),_:1})])])}}}),sa=C(Z,[["__scopeId","data-v-43c99e26"]]);export{sa as default};
