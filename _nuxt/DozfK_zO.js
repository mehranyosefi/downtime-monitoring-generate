import{s as _,a as w,_ as D}from"./CTSSIN3n.js";import{_ as I}from"./mL5HJHLR.js";import{a as j}from"./CdFE9PXB.js";import{z as N,A as T,C as F,Z as U,a7 as R,v as q,o as H,c as L,a as y,b as u,w as h,t as b,H as l,I as K,a8 as J,a9 as X,aa as Z,K as v,L as G,x as B,N as Q,ab as Y,ac as ee,y as te,ad as ne,a3 as a,D as re,k as C}from"./Xzuh7NT1.js";import{_ as oe}from"./DlAUqK2U.js";import{h as M,a as P,r as se}from"./0SHw8vzW.js";import{u as ae}from"./BgXM8LcO.js";import"./CTPfhe1u.js";import"./D1P9nIYZ.js";import"./Cv-OHefw.js";const ie={class:"px-24 pt-16 pb-28"},le=["textContent"],ce={width:"3rem",height:"3rem",class:"text-green-500 dark:text-primary-500"},de=["href"],ue=["textContent"],me=["textContent"],fe=["textContent"],he=["textContent"],pe=["textContent"],ye=N({__name:"SideNavMenu",props:{items:{},subItems:{}},setup(e,{expose:r}){const{t:n,locale:t}=T(),s=F();U();const o=R("sidenav"),i=q(!1);function f(){i.value?(o.value.style.width="0",i.value=!1,document.documentElement.classList.remove("unscrollable")):(i.value=!0,o.value.style.width="100%",document.documentElement.classList.add("unscrollable"))}return document.documentElement.classList.remove("unscrollable"),r({toggle_sideNav:f,sideNavActive:i}),(c,x)=>{const d=I,g=_,m=w,V=j;return H(),L("div",{ref_key:"sidenav",ref:o,class:K(["sidenav",{"left-0":l(t)=="en","right-0":l(t)=="fa"}])},[y("div",ie,[u(g,{model:[c.items[0]],pt:{root:"!border-none !rounded-none",submenuLabel:"!p-0 mb-2 font-bold text-2xl",item:"!px-2 text-xl py-1 my-2",itemContent:"hover:!text-green-500 dark:hover:!text-primary-500 w-fit !leading-4",itemIcon:"!text-green-500 dark:!text-primary-500"}},{submenulabel:h(({item:p})=>[y("h4",{class:"",textContent:b(l(n)("general.monitors"))},null,8,le)]),item:h(({item:p,props:A})=>[u(d,{to:p.path,class:"flex items-center w-fit"},{default:h(()=>[(H(),L("svg",ce,[y("use",{href:p.icon,width:"3rem",height:"3rem"},null,8,de)])),y("span",{textContent:b(l(n)(p.label)),class:"px-4"},null,8,ue)]),_:2},1032,["to"])]),_:1},8,["model"]),u(m,{class:"divider"}),u(g,{model:[c.subItems[0]],pt:{root:"!border-none !rounded-none",submenuLabel:"!p-0 mb-2 font-bold text-2xl",item:"!px-2 text-xl py-1 my-2",itemContent:"hover:!text-green-500 dark:hover:!text-primary-500  w-fit !leading-4",itemIcon:""}},{submenulabel:h(()=>[y("h4",{textContent:b(l(n)("general.teams"))},null,8,me)]),item:h(({item:p,props:A})=>[u(d,{to:p.path},{default:h(()=>[y("span",{textContent:b(l(n)(p.label)),class:"px-4"},null,8,fe)]),_:2},1032,["to"])]),_:1},8,["model"]),u(m,{class:"divider"}),u(g,{model:c.items.slice(1),pt:{root:"!border-none !rounded-none",item:"text-2xl my-3 font-bold",itemContent:"hover:!text-green-500 dark:hover:!text-primary-500 w-fit !leading-6",end:"hover:!text-green-500 dark:hover:!text-primary-500 !transition-colors !duration-75 w-fit !h-[20px] !leading-6"}},{item:h(({item:p,props:A})=>[u(d,{to:p.path},{default:h(()=>[y("span",{textContent:b(l(n)(p.label))},null,8,he)]),_:2},1032,["to"])]),end:h(()=>[u(d,{to:l(s)("login"),class:"text-2xl my-3 font-bold w-fit"},{default:h(()=>[y("span",{textContent:b(l(n)("general.login"))},null,8,pe)]),_:1},8,["to"])]),_:1},8,["model"]),u(m,{class:"divider"}),u(V,{severity:"success",pt:{root:"!block !mx-auto !px-8 mt-5 mb-10"}},{default:h(()=>[u(d,{to:l(s)("register"),textContent:b(l(n)("general.sign_out")),class:"font-semibold"},null,8,["to","textContent"])]),_:1})])],2)}}}),ge=oe(ye,[["__scopeId","data-v-550cadc7"]]);function be(){let e=[];return{cleanup:()=>{e=e.filter(t=>(t(),!1))},onCleanup:t=>{e.push(t)}}}function xe(e){let r=()=>{};const n=new Promise(s=>{r=()=>{e(),s()}});return{promise:n,resolvePromise:r,onResolvedPromise:s=>{n.then(s)}}}function ve(e){const r=e.effect.fn,n=e.render;e.render=(...t)=>{e.effect.fn=()=>n(...t);const s=e.effect.run();return e.effect.fn=r,e.render=n,s}}const _e=e=>typeof e=="function",we=e=>e!==null&&typeof e=="object";function k(e,r){if(J(e)&&(r(e),e.children!==null)){if(Array.isArray(e.children)){e.children.forEach(n=>k(n,r));return}we(e.children)&&Object.keys(e.children).forEach(n=>{if(!_e(e.children[n]))return;const t=e.children[n]();if(Array.isArray(t)){t.forEach(s=>k(s,r));return}k(t,r)})}}function Ie(e){var r,n;return((r=e.type)==null?void 0:r.__asyncLoader)&&((n=e.type)==null?void 0:n.name)==="AsyncComponentWrapper"}function ke({subTree:e},r){const n=[];if(k(e,t=>{Ie(t)&&n.push(t.type.__asyncLoader())}),n.length>0){Promise.all(n).then(r);return}r()}function Ce(e){if(!e||!e.subTree)return;const r=e.subTree.el,n=e.u;e.u===null&&(e.u=[]),e.u.push(()=>{e.subTree.el===null&&(e.subTree.el=r),e.u=n})}function Ee(){const e=v();if(!e||e.isMounted)throw new Error("useLazyHydration must be called from the setup method.");const r=e.vnode.el!==null;if(e.vnode.type.__isLazilyHydrated=!0,!r)return{willPerformHydration:r,onHydrated:()=>{}};const{cleanup:n,onCleanup:t}=be(),{promise:s,resolvePromise:o,onResolvedPromise:i}=xe(n),f=c=>i(()=>G(()=>ke(e,c)));return e.type.__asyncLoader=()=>s,Ce(e.parent),X(()=>{e.asyncDep=new Promise(c=>{c(!0)})}),i(()=>{ve(e),e.asyncDep=null}),Z(n),{willPerformHydration:r,hydrate:o,onHydrated:f,onCleanup:t}}function He({willPerformHydration:e,hydrate:r,onCleanup:n},t=2e3){if(!e)return;if(!v())throw new Error("useHydrateWhenIdle must be called from the setup or lifecycle hook methods.");if(!("requestIdleCallback"in window)){r();return}const s=requestIdleCallback(()=>{r()},{timeout:t});n(()=>{cancelIdleCallback(s)})}const W={ELEMENT:1,TEXT:3,COMMENT:8},S=e=>e&&e.nodeType===W.ELEMENT,$=e=>e&&e.nodeType===W.COMMENT,Le=e=>$(e)&&(e==null?void 0:e.data)==="[",Ne=e=>$(e)&&(e==null?void 0:e.data)==="]";function z({vnode:e,subTree:r}){if(!e||e.el===null)return[];if(S(e.el))return[e.el];const n=[];if(r&&Le(r.el)&&Ne(r.anchor)){let t=e.el.nextSibling;for(;t;){if(t&&S(t)&&n.push(t),t===r.anchor)return n;t=t.nextSibling}}return n}function Te({willPerformHydration:e,hydrate:r,onCleanup:n},t=["focus"]){if(!e)return;const s=v();if(!s||s.isMounted)throw new Error("useHydrateOnInteraction must be called from the setup method.");const o=l(t);B(()=>{const i=z(s),f=i.length>1?i[0].parentElement||document:i[0],c={capture:!0,once:!1,passive:!0},x=d=>{d.stopPropagation();const g=d.composedPath&&d.composedPath()||d.path;if(!g){let m=d.target;for(;m;){if(i.includes(m)){r();return}if(m===f)return;m=m.parentElement}return}i.forEach(m=>{g.includes(m)&&r()})};o.forEach(d=>{f.addEventListener(d,x,c)}),n(()=>{o.forEach(d=>{f.removeEventListener(d,x,c)})})})}function Ae({willPerformHydration:e,hydrate:r,onCleanup:n},t){if(!e)return;if(!v())throw new Error("useHydrateWhenTriggered must be called from the setup or lifecycle hook methods.");const s=Q(Y(t)?t:()=>t,o=>{o&&r()},{immediate:!0});n(s)}const E=new Map;function Me(e){const r=typeof IntersectionObserver<"u";if(!r)return{supported:r};const n=JSON.stringify(e);if(E.has(n))return{supported:r,observer:E.get(n)};const t=new IntersectionObserver(s=>{s.forEach(o=>{!(o.isIntersecting||o.intersectionRatio>0)||!o.target.hydrate||o.target.hydrate()})},e);return E.set(n,t),{supported:r,observer:t}}function Pe({willPerformHydration:e,hydrate:r,onCleanup:n},t){if(!e)return;const s=v();if(!s||s.isMounted)throw new Error("useHydrateWhenVisible must be called from the setup method.");const{supported:o,observer:i}=Me(t);if(!o){r();return}B(()=>{const f=z(s);f.forEach(c=>{c.hydrate=r,i.observe(c)}),n(()=>{f.forEach(c=>{delete c.hydrate,i.unobserve(c)})})})}const O=e=>e.length===1?e[0]:e,Se=N({name:"LazyHydrationWrapper",inheritAttrs:!1,suspensible:!1,props:{whenIdle:{default:!1,type:[Boolean,Number]},whenVisible:{default:!1,type:[Boolean,Object]},onInteraction:{default:!1,type:[Array,Boolean,String]},whenTriggered:{default:void 0,type:[Boolean,Object]}},emits:["hydrated"],setup(e,{slots:r,emit:n}){const t=Ee();if(!t.willPerformHydration)return()=>O(r.default());if(t.onHydrated(()=>n("hydrated")),e.whenIdle&&He(t,e.whenIdle!==!0?e.whenIdle:void 0),e.whenVisible&&Pe(t,e.whenVisible!==!0?e.whenVisible:void 0),e.onInteraction){let s;e.onInteraction!==!0&&(s=te(()=>Array.isArray(e.onInteraction)?e.onInteraction:[e.onInteraction]).value),Te(t,s)}return e.whenTriggered!==void 0&&Ae(t,ne(e,"whenTriggered")),()=>O(r.default())}}),Oe=ee(Se),Re={props:{monitoring:{type:Array},teams:{type:Array},resources:{type:Array}},setup(e,r){const{locale:n,t}=T(),s=[{href:"#facebook",svgId:"/img/icons.svg#facebook"},{href:"#twitter",svgId:"/img/icons.svg#twitter"},{href:"#linkedin",svgId:"/img/icons.svg#linkedin"},{href:"#telegram",svgId:"/img/icons.svg#telegram"}];return()=>[a("footer",{class:"transition-colors pt-32 min-h-[calc(100vh-89px)]"},[a("div",{class:"container mx-auto px-10"},[a("div",{class:["grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-y-10",n.value==="en"?"md:pl-[6rem]":"md:pr-[6rem]"]},[a("div",{class:["py-[.15rem] px-10"]},[a("h5",{class:"font-bold text-2xl"},t("general.UptimeRobot")),a("p",{class:"text-lg my-2"},t("footer.donwntimehappens")),a("p",{class:"w-4/5 text-gray-600 font-medium dark:text-gray-400 text-base"},t("footer.description")),a("div",{class:"flex items-center mt-4"},[s.map((o,i)=>a("a",{class:["router-link-active router-link-exact-active mx-1",o.href=="#twitter"?"bg-gray-500 hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors rounded-full flex items-center justify-center p-[.38rem]":null],"aria-current":"page",href:o.href},[a("svg",{width:o.href==="#twitter"?"1.22rem":"2rem",height:o.href==="#twitter"?"1.22rem":"2rem",class:[o.href!=="#twitter"?"text-gray-500 hover:text-gray-800 dark:hover:text-gray-100 transition-colors":"text-gray-100 dark:text-gray-800"]},a("use",{width:o.href==="#twitter"?"1.22rem":"2rem",height:o.href==="#twitter"?"1.22rem":"2rem",href:o.svgId}))]))])]),a(w,{pt:{root:"md:!hidden"}}),a(_,{model:e.monitoring,pt:{root:"!border-none !rounded-none !px-10",submenuLabel:"!p-0 mb-2 font-bold text-2xl",item:"text-xl py-1 my-2",itemContent:"hover:!text-green-500 dark:hover:!text-primary-500 w-fit !h-[20px] !leading-4",itemIcon:"!hidden"}},{submenulabel:({item:o})=>a("h5",t(o.label)),item:({item:o})=>a("h5",null,a(I,{to:o.path},()=>a("span",t(o.label))))}),a(w,{pt:{root:"md:!hidden"}}),a(_,{model:e.teams,pt:{root:"!border-none !rounded-none !px-10",submenuLabel:"!p-0 mb-2 font-bold text-2xl",item:"text-xl py-1 my-2",itemContent:"hover:!text-green-500 dark:hover:!text-primary-500 w-fit !h-[20px] !leading-4",itemIcon:"!hidden"}},{submenulabel:({item:o})=>a("h5",t(o.label)),item:({item:o})=>a("h5",null,a(I,{to:o.path},()=>a("span",t(o.label))))}),a(w,{pt:{root:"md:!hidden"}}),a(_,{model:e.resources,pt:{root:"!border-none !rounded-none !px-10",submenuLabel:"!p-0 mb-2 font-bold text-2xl",item:"text-xl py-1 my-2",itemContent:"hover:!text-green-500 dark:hover:!text-primary-500 w-fit !h-[20px] !leading-4",itemIcon:"!hidden"}},{submenulabel:({item:o})=>a("h5",t(o.label)),item:({item:o})=>a("h5",a(I,{to:o.path},()=>t(o.label)))})])])])]}},Be={class:"root-element-page overflow-x-hidden overflow-y-auto h-screen"},We={class:"main"},$e={class:"overflow-hidden"},Ze=N({__name:"default",setup(e){const{locale:r,t:n}=T(),t=re();ae({titleTemplate:`${n("general.UptimeRobot")} - %s`,htmlAttrs:{class:[r.value=="fa"?"rtl fa":"ltr en",t.state.theme==="dark"?"dark":""]}});const s=R("sideNav");return(o,i)=>{const f=D,c=ge,x=Oe,d=Re;return H(),L("div",Be,[C(o.$slots,"header",{},()=>{var g,m;return[u(f,{"sign-section":"","menu-section":"",logo:"",onShowSideNav:(g=l(s))==null?void 0:g.toggle_sideNav,"side-nav-active":(m=l(s))==null?void 0:m.sideNavActive},null,8,["onShowSideNav","side-nav-active"])]}),y("main",We,[y("div",$e,[C(o.$slots,"default"),u(x,{"on-interaction":["click","touchstart"]},{default:h(()=>[u(c,{items:l(M),subItems:l(P),ref_key:"sideNav",ref:s},null,8,["items","subItems"])]),_:1})])]),C(o.$slots,"footer",{},()=>[u(d,{monitoring:[l(M)[0]],teams:[l(P)[0]],resources:[l(se)[0]]},null,8,["monitoring","teams","resources"])])])}}});export{Ze as default};
