import{_ as L}from"./B3zpy4jk.js";import{_ as T,s as B}from"./XHPh5sIG.js";import{s as H,a as I,b as M}from"./CYbzOqtR.js";import{a as z}from"./DTCzEUwa.js";import{z as A,C as S,A as U,E,o as c,c as _,b as l,w as a,a as u,I as s,d,t as o,p as f,n as x}from"./DTVQB7nK.js";import{u as F}from"./CdUYm2mH.js";import{_ as D}from"./DlAUqK2U.js";import"./YjVBSvsL.js";const j=["innerHTML"],G=["innerHTML"],J={class:"flex flex-col gap-1"},K=["textContent"],O=["textContent"],Q=["textContent"],R=A({__name:"register",setup(W){const N=S(),{locale:g,t:e}=U();F({title:e("general.signUp"),meta:[{name:"description",content:e("phrases.seo.signUp.description")},{name:"keywords",content:e("phrases.seo.signUp.keywords")}]});const b=E({email:"",fullName:"",password:""}),k=({values:t})=>{var i,m;const n={email:[],fullName:[],password:[]};return t.email||n.email.push({type:"required",message:e("errors.email.required")}),t.fullName||n.fullName.push({type:"required",message:e("errors.fullName.required")}),((i=t.fullName)==null?void 0:i.length)<6&&n.fullName.push({type:"required",message:e("errors.fullName.min",{number:6})}),t.password||n.password.push({type:"required",message:e("errors.password.required")}),((m=t.password)==null?void 0:m.length)<6&&n.password.push({type:"required",message:e("errors.password.min",{number:6})}),{errors:n}},v=({valid:t})=>{t||console.log("InValid")};return(t,n)=>{const i=H,m=I,C=z,q=M,V=B,P=L,$=T;return c(),_("div",null,[l($,{name:"sign"},{footer:a(()=>[u("footer",null,[u("div",null,[l(P,{to:s(N)("login"),class:"block w-fit mx-auto mt-5 underline text-gray-900 dark:text-gray-100 text-sm"},{default:a(()=>[d(o(s(e)("signup.footer"))+o(s(g)=="fa"?"؟":"?"),1)]),_:1},8,["to"])])])]),default:a(()=>[l(V,{class:"mt-10"},{title:a(()=>[s(g)=="fa"?(c(),_("h2",{key:0,class:"text-center text-xl font-semibold",innerHTML:`${t.$t("general.yourAccount")} را
              <span class='text-green-500 dark:text-primary-500'>${t.$t("general.register")}</span> کنید`},null,8,j)):(c(),_("h2",{key:1,class:"text-center text-xl font-semibold",innerHTML:`<span class='text-green-500 dark:text-primary-500'>${t.$t("general.register")}</span> ${t.$t("general.yourAccount")}`},null,8,G))]),content:a(()=>[l(q,{initialValues:s(b),resolver:k,onSubmit:v,class:"flex flex-col"},{default:a(p=>{var h,y,w;return[u("div",J,[u("label",{for:"email",textContent:o(s(e)("general.email"))},null,8,K),l(i,{name:"email",type:"email",placeholder:s(e)("phrases.placeholder.email"),fluid:"",autocomplete:"on"},null,8,["placeholder"]),(h=p.email)!=null&&h.invalid?(c(),f(m,{key:0,class:"mr-1",severity:"error",size:"small",variant:"simple",pt:{text:"!text-xs"}},{default:a(()=>{var r;return[d(o((r=p.email.error)==null?void 0:r.message),1)]}),_:2},1024)):x("",!0),u("label",{for:"fullName",textContent:o(s(e)("user.fullName")),class:"mt-5"},null,8,O),l(i,{name:"fullName",type:"text",placeholder:s(e)("phrases.placeholder.fullName"),fluid:"",autocomplete:"on"},null,8,["placeholder"]),(y=p.fullName)!=null&&y.invalid?(c(),f(m,{key:1,class:"mr-1",severity:"error",size:"small",variant:"simple",pt:{text:"!text-xs"}},{default:a(()=>{var r;return[d(o((r=p.fullName.error)==null?void 0:r.message),1)]}),_:2},1024)):x("",!0),u("label",{for:"password",textContent:o(s(e)("general.password")),class:"mt-5"},null,8,Q),l(i,{name:"password",type:"password",placeholder:s(e)("phrases.placeholder.password"),fluid:"",autocomplete:"on"},null,8,["placeholder"]),(w=p.password)!=null&&w.invalid?(c(),f(m,{key:2,class:"mr-1",severity:"error",size:"small",variant:"simple",pt:{text:"!text-xs"}},{default:a(()=>{var r;return[d(o((r=p.password.error)==null?void 0:r.message),1)]}),_:2},1024)):x("",!0)]),l(C,{class:"mt-6",severity:"success",type:"submit",label:s(e)("general.register")},null,8,["label"])]}),_:1},8,["initialValues"])]),_:1})]),_:1})])}}}),le=D(R,[["__scopeId","data-v-f9e9aa9e"]]);export{le as default};
