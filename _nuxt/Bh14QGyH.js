import{_ as C}from"./C2ioPwpU.js";import{_ as W}from"./CN_NCJAC.js";import{s as $}from"./Kva1MhdC.js";import{s as A}from"./C587Bjh8.js";import{h as E,t as H,f as j,_ as q}from"./8RHhlyyV.js";import{r as I,e as L,f as T,g as z,u as F,h as R,i as G,j as J,o as l,c as a,b as h,w as _,a as e,k as t,d as i,t as s,n as K,F as y,l as k,m as P,p as N,q as B}from"./DfWhJFcD.js";import{u as Q}from"./C9nHrrDH.js";function X(m,o,n){const p=document.querySelector(m);p==null||p.addEventListener("scroll",f=>{const d=f.target;if(d.scrollTop+d.clientHeight>=d.scrollHeight-10){const u=Object.keys(o);for(let x=0;x<u.length;x++)if(!o[u[x]]){o[u[x]]=!0;break}n(o)}},!1)}const Y=()=>{const m=I(window.innerWidth);L(()=>{window.addEventListener("resize",()=>{m.value=window.innerWidth})});const o=T(()=>!(m.value>768)),n=T(()=>!(m.value>1024));return{windowWidth:m,isOnMobile:o,isOnTablet:n}},Z=q+"#star",tt={class:"transition-colors"},et={class:"container mx-auto px-10",id:"container"},nt={class:"grid grid-row-2 lg:grid-cols-2 min-h-[calc(100vh-89px)] content-center"},st={class:"w-fit m-auto mt-20"},ot={key:0,class:"text-6xl font-semibold"},lt={class:"text-green-500 dark:text-primary-500"},rt={key:1,class:"text-6xl font-semibold leading-relaxed"},it={class:"text-green-500 dark:text-primary-500"},at={class:"my-8 text-xl font-semibold"},ct={class:"text-green-500 dark:text-primary-500"},dt=["textContent"],ut={class:"w-fit m-auto mt-20"},mt={class:"bg-gray-800 dark:bg-gray-100 text-gray-100 dark:text-gray-900 transition-colors pb-48"},_t={class:"container mx-auto px-10"},xt={class:"text-4xl font-semibold text-center pt-16"},pt={key:0,class:"leading-normal"},gt=["textContent"],ht={key:1},ft=["textContent"],vt={key:0,class:"grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-16 mt-14"},yt={width:"5rem",height:"5rem",class:"text-green-500 dark:text-primary-500"},kt=["href"],bt=["textContent"],wt=["textContent"],Ct={key:0,class:"container mx-auto px-10 pb-96"},$t={class:"mt-16"},Tt={class:"text-4xl font-semibold text-center"},Pt={key:0},Nt=["textContent"],Bt={key:1},It=["textContent"],Lt={class:"grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-16 mt-14"},Ot=["textContent"],Dt={class:"flex flex-nowrap mb-6"},Mt=["viewBox"],St=["textContent"],Ut=["textContent"],Vt={class:"text-gray-400 mt-2 text-lg"},Ft=z({__name:"index",setup(m){const{locale:o,t:n}=F(),p=R();Q({title:n("phrases.seo.index.title"),meta:[{name:"description",content:n("phrases.seo.signUp.description")},{name:"keywords",content:n("phrases.seo.signUp.keywords")}]});const f=G(),{isOnTablet:d}=Y(),u=I({cardItems:!1,trust:!1});L(()=>{X(".root-element-page",u.value,g=>{u.value=g})});const x=g=>g===0?o.value==="en"?"slide-left":"slide-right":g===1?o.value==="en"?d.value?"slide-right":"slide-bottom":d.value?"slide-left":"slide-bottom":o.value==="en"?d.value?"slide-left":"slide-right":d.value?"slide-right":"slide-left";return(g,r)=>{const O=C,b=A,D=$,M=C,S=$,U=W,w=J("animation-on-scroll");return l(),a("div",tt,[h(U,{name:"default"},{default:_(()=>[e("div",et,[e("div",nt,[e("div",st,[t(o)=="en"?(l(),a("h4",ot,[i(s(`${t(n)("index.serviceTitle.one")}`)+" ",1),r[0]||(r[0]=e("br",null,null,-1)),e("span",lt,s(`${t(n)("general.uptime")} ${t(n)("general.monitoring")}`),1),r[1]||(r[1]=i(" service. "))])):(l(),a("h4",rt,[i(s(`${t(n)("index.serviceTitle.one")}`)+" ",1),r[2]||(r[2]=e("br",null,null,-1)),e("span",it,s(`${t(n)("index.serviceTitle.two")}`),1)])),e("p",at,[i(s(`${t(n)("index.getTitle")}`)+" ",1),e("span",ct,[i(s(`${t(n)("general.totally")} `)+" ",1),e("span",{textContent:s(t(n)("general.free")),class:"uppercase"},null,8,dt)]),r[3]||(r[3]=i(". "))]),h(b,{severity:"success",pt:{root:"!px-20 !py-4 !mx-auto"}},{default:_(()=>[h(O,{to:`${t(p)("index")}#`,class:"font-semibold",textContent:s(t(n)("index.startMonitoring"))},null,8,["to","textContent"])]),_:1})]),e("div",ut,[e("i",{class:K(["w-[26rem] md:w-[30rem]",{"content-darkIndex":t(f).isDarkTheme,"content-lightIndex":!t(f).isDarkTheme}])},null,2)])])]),e("div",mt,[e("div",_t,[e("div",null,[e("h4",xt,[i(s(t(n)("index.careAbout"))+" ",1),r[5]||(r[5]=e("br",null,null,-1)),t(o)=="fa"?(l(),a("span",pt,[i(s(t(n)("phrases.etc.inOnePlace"))+" ",1),e("span",{class:"text-green-500 dark:text-primary-500",textContent:s(t(n)("general.monitored"))},null,8,gt),r[4]||(r[4]=i(". "))])):(l(),a("span",ht,[e("span",{class:"text-green-500 dark:text-primary-500",textContent:s(t(n)("general.monitored"))},null,8,ft),i(" "+s(t(n)("phrases.etc.inOnePlace"))+". ",1)]))])]),t(u).cardItems?(l(),a("div",vt,[(l(!0),a(y,null,k(t(E)[0].items,(c,v)=>N((l(),B(D,{key:v,class:"shadow-md p-2",pt:{root:"scale-0"}},{title:_(()=>[(l(),a("svg",yt,[e("use",{href:c.icon,width:"5rem",height:"5rem"},null,8,kt)])),e("h5",{textContent:s(t(n)(c.label)),class:"font-bold text-2xl mt-2"},null,8,bt)]),content:_(()=>[e("p",{textContent:s(t(o)==="en"?c.content:c.faContent),class:"text-lg text-multiline-ellips-3"},null,8,wt),h(b,{severity:"success",class:"mt-5",label:t(n)(c.label)},null,8,["label"])]),_:2},1024)),[[w]])),128))])):P("",!0)])]),t(u).trust?(l(),a("div",Ct,[e("div",$t,[e("h4",Tt,[t(o)==="en"?(l(),a("span",Pt,[i(s(`${t(n)("general.why")} ${t(n)("general.users")}`)+" ",1),e("span",{class:"text-green-500 dark:text-primary-500",textContent:s(t(n)("general.trusts"))},null,8,Nt),i(" "+s(t(n)("general.UptimeRobot")),1)])):(l(),a("span",Bt,[i(s(`${t(n)("general.why")} ${t(n)("general.users")} به ${t(n)("general.UptimeRobot")}`)+" ",1),e("span",{class:"text-green-500",textContent:s(t(n)("general.trusts"))},null,8,It)]))])]),e("div",Lt,[(l(!0),a(y,null,k(t(o)==="en"?t(H):t(j),(c,v)=>N((l(),B(S,{key:v,class:"shadow-md p-2"},{title:_(()=>[e("div",{class:"text-gray-400",textContent:s(c.userName)},null,8,Ot),e("div",Dt,[(l(),a(y,null,k(5,V=>e("svg",{class:"text-orange-600",width:"2rem",height:"2rem",key:V,viewBox:t(o)=="en"?"4 0 24 24":"-4 0 24 24"},r[6]||(r[6]=[e("use",{href:Z},null,-1)]),8,Mt)),64))]),e("h5",{class:"font-extrabold text-2xl",textContent:s(c.title)},null,8,St)]),content:_(()=>[e("p",{class:"text-lg text-multiline-ellips-4",textContent:s(c.content)},null,8,Ut),e("div",Vt,[e("span",null,s(t(o)==="en"?"Peviewed on ":"مشاهده شده در "),1),h(M,{target:"_blank",class:"text-green-500 dark:text-primary-400 font-bold",to:`https://${c.link}`},{default:_(()=>[i(s(c.link),1)]),_:2},1032,["to"])])]),_:2},1024)),[[w,x(v)]])),128))])])):P("",!0)]),_:1})])}}});export{Ft as default};