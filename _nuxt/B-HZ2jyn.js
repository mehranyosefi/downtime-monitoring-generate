import{_ as $}from"./CO73SxTj.js";import{_ as q,s as B}from"./DmfXTcg0.js";import{s as I,a as z,b as S}from"./BuEzryel.js";import{a as E}from"./BIb0aLND.js";import{z as F,A as H,C as L,E as T,o as p,c as A,b as a,w as s,a as r,t as n,H as o,d,p as f,n as g}from"./DiweA6vy.js";import{u as D}from"./Cf19a1CG.js";import"./DGHFaQ8o.js";import"./Dze83bYN.js";const M=["textContent"],j={class:"flex flex-col gap-1"},G=["textContent"],J=["textContent"],K={class:"text-center mt-7"},O={class:"text-sm text-gray-600 dark:text-gray-300"},se=F({__name:"login",setup(Q){const{locale:h,t:e}=H(),w=L();D({title:e("general.login"),meta:[{name:"description",content:e("phrases.seo.login.description")},{name:"keywords",content:e("phrases.seo.login.keywords")}]});const y=T({email:"",password:""}),b=({values:t})=>{var i;const l={email:[],fullName:[],password:[]};return t.email||l.email.push({type:"required",message:e("errors.email.required")}),t.password||l.password.push({type:"required",message:e("errors.password.required")}),((i=t.password)==null?void 0:i.length)<6&&l.password.push({type:"required",message:e("errors.password.min",{number:6})}),{errors:l}},k=({valid:t})=>{t||console.log("InValid")};return(t,l)=>{const i=I,u=z,C=E,v=S,V=B,P=$,N=q;return p(),A("div",null,[a(N,{name:"sign"},{footer:s(()=>[r("footer",null,[r("div",K,[r("span",O,n(`${t.$t("signIn.footer.line1")}${o(h)=="fa"?"؟":"?"}`),1),a(P,{to:o(w)("register"),class:"block w-fit mx-auto mt-2 underline text-sm"},{default:s(()=>[d(n(t.$t("signIn.footer.line2")),1)]),_:1},8,["to"])])])]),default:s(()=>[a(V,{class:"mt-10"},{title:s(()=>[r("h2",{textContent:n(t.$t("general.welcome")),class:"text-center text-xl font-semibold text-green-500 dark:text-primary-500"},null,8,M)]),content:s(()=>[a(v,{initialValues:o(y),resolver:b,onSubmit:k,class:"flex flex-col gap-4"},{default:s(c=>{var _,x;return[r("div",j,[r("label",{for:"email",textContent:n(o(e)("general.email"))},null,8,G),a(i,{pt:{root:"mt-2"},name:"email",type:"email",placeholder:o(e)("phrases.placeholder.email"),fluid:""},null,8,["placeholder"]),(_=c.email)!=null&&_.invalid?(p(),f(u,{key:0,class:"mr-1",severity:"error",size:"small",variant:"simple",pt:{text:"!text-xs"}},{default:s(()=>{var m;return[d(n((m=c.email.error)==null?void 0:m.message),1)]}),_:2},1024)):g("",!0),r("label",{for:"password",textContent:n(o(e)("general.password")),class:"mt-5"},null,8,J),a(i,{pt:{root:"mt-2"},name:"password",type:"password",placeholder:o(e)("phrases.placeholder.password"),fluid:""},null,8,["placeholder"]),(x=c.password)!=null&&x.invalid?(p(),f(u,{key:1,class:"mr-1",severity:"error",size:"small",variant:"simple",pt:{text:"!text-xs"}},{default:s(()=>{var m;return[d(n((m=c.password.error)==null?void 0:m.message),1)]}),_:2},1024)):g("",!0)]),a(C,{class:"mt-6",type:"submit",severity:"success",label:o(e)("general.login")},null,8,["label"])]}),_:1},8,["initialValues"])]),_:1})]),_:1})])}}});export{se as default};
