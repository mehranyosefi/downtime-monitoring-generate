import{z as f,v as u,x as i,a5 as s,c as m,aB as b}from"./Xzuh7NT1.js";const d=Symbol.for("nuxt:client-only"),_=f({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(p,{slots:a,attrs:c}){const l=u(!1);return i(()=>{l.value=!0}),s(d,!0),e=>{var t;if(l.value)return(t=a.default)==null?void 0:t.call(a);const n=a.fallback||a.placeholder;if(n)return n();const r=e.fallback||e.placeholder||"",o=e.fallbackTag||e.placeholderTag||"span";return m(o,c,r)}}}),g=b("/img/icons.svg");export{g as _,_ as a};