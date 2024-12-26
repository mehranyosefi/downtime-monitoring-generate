import{s as m}from"./DZq4RPda.js";import{B as u,o,c as s,k as h,m as p,t as f,p as b,I as y,q as w,n as x,z,a as r,b as n,w as d}from"./Bu7s840o.js";import{a as k}from"./B7Ygkmcj.js";import{_ as v}from"./DU05P3yn.js";import{_ as $}from"./DlAUqK2U.js";var S=function(e){var a=e.dt;return`
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
`)},B={root:function(e){var a=e.props;return["p-avatar p-component",{"p-avatar-image":a.image!=null,"p-avatar-circle":a.shape==="circle","p-avatar-lg":a.size==="large","p-avatar-xl":a.size==="xlarge"}]},label:"p-avatar-label",icon:"p-avatar-icon"},C=u.extend({name:"avatar",theme:S,classes:B}),_={name:"BaseAvatar",extends:m,props:{label:{type:String,default:null},icon:{type:String,default:null},image:{type:String,default:null},size:{type:String,default:"normal"},shape:{type:String,default:"square"},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:C,provide:function(){return{$pcAvatar:this,$parentInstance:this}}},g={name:"Avatar",extends:_,inheritAttrs:!1,emits:["error"],methods:{onError:function(e){this.$emit("error",e)}}},j=["aria-labelledby","aria-label"],A=["src","alt"];function E(t,e,a,l,i,c){return o(),s("div",p({class:t.cx("root"),"aria-labelledby":t.ariaLabelledby,"aria-label":t.ariaLabel},t.ptmi("root")),[h(t.$slots,"default",{},function(){return[t.label?(o(),s("span",p({key:0,class:t.cx("label")},t.ptm("label")),f(t.label),17)):t.$slots.icon?(o(),b(w(t.$slots.icon),{key:1,class:y(t.cx("icon"))},null,8,["class"])):t.icon?(o(),s("span",p({key:2,class:[t.cx("icon"),t.icon]},t.ptm("icon")),null,16)):t.image?(o(),s("img",p({key:3,src:t.image,alt:t.ariaLabel,onError:e[0]||(e[0]=function(){return c.onError&&c.onError.apply(c,arguments)})},t.ptm("image")),null,16,A)):x("",!0)]})],16,j)}g.render=E;const L=v+"#close",D=v+"#send-message",I={class:"conversation"},N={class:"w-[90%] mx-auto h-[32%]"},P={class:"flex items-center justify-between"},V={class:"mt-1 flex"},q={class:"bg-gray-800 dark:bg-white rounded-xl h-[68%] transition-colors text-white dark:text-gray-900 relative"},H=z({__name:"Conversation",setup(t){return(e,a)=>{const l=k,i=g;return o(),s("div",I,[r("div",N,[r("div",P,[a[2]||(a[2]=r("div",{class:"circle-shadow"},null,-1)),n(l,{class:"inline-block",pt:{root:"!bg-transparent !hover:bg-transparent !border-none !rounded-none !p-0"},onClick:a[0]||(a[0]=c=>e.$emit("handle-close"))},{default:d(()=>a[1]||(a[1]=[r("svg",{width:"2rem",height:"2rem",class:"text-gray-900 dark:text-white hover:text-green-500 dark:hover:text-primary-500 cursor-pointer transition-all"},[r("use",{width:"2rem",height:"2rem",href:L})],-1)])),_:1})]),a[3]||(a[3]=r("div",{class:"mt-4"},[r("h2",{class:"text-2xl font-bold"},"UptimeRobot Team Support"),r("p",{class:"font-bold"},"How can we help you?")],-1)),r("div",V,[n(i,{image:"/img/conversation-avatar-1.jpg",pt:{root:"!w-10 !h-10",image:"rounded-full"}}),n(i,{image:"/img/conversation-avatar-2.jpg",pt:{root:"!w-10 !h-10",image:"rounded-full"}}),n(i,{image:"/img/conversation-avatar-3.jpg",pt:{root:"!w-10 !h-10",image:"rounded-full"}}),n(i,{image:"/img/conversation-avatar-4.webp",pt:{root:"!w-10 !h-10",image:"rounded-full"}})])]),r("div",q,[n(l,{pt:{root:"flex w-full rounded-b-none rounded-t-xl p-4 hover:bg-gray-700 dark:hover:bg-gray-100"},unstyled:""},{default:d(()=>a[4]||(a[4]=[r("div",{class:"circle-shadow dark:bg-primary-400/90"},null,-1),r("div",{class:"flex flex-col items-start w-[calc(100%-36px)] ltr:pl-3 rtl:pr-3"},[r("div",{class:"flex justify-between w-full"},[r("h3",{class:"text-lg"},"Mr.Always Up"),r("span",{class:"date text-xs"}," 10/14/2024 13:50 ")]),r("p",{class:"text-sm text-gray-200 dark:text-gray-700"}," Hey!.join our Discord... ")],-1)])),_:1}),n(l,{severity:"success",class:"!absolute bottom-5 !mx-auto left-0 right-0 !w-[80%] !rounded-md"},{default:d(()=>a[5]||(a[5]=[r("svg",{width:"1.2rem",height:"1.2rem"},[r("use",{width:"1.2rem",height:"1.2rem",href:D})],-1),r("span",null,"start new conversation",-1)])),_:1})])])}}}),G=$(H,[["__scopeId","data-v-7139d428"]]);export{G as default};
