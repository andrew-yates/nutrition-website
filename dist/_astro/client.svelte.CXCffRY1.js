import{aa as p,ab as m,ac as h,h as y,m as _,i as $,g as v,Z as g}from"./template.CltUSWbt.js";import{h as b,m as x,u as k}from"./render.DYNeI7DO.js";function f(e){return(a,...l)=>{var n=e(...l),t;if(y)t=_,$();else{var i=n.render().trim(),o=p(i);t=v(o),a.before(t)}const s=n.setup?.(t);m(t,t),typeof s=="function"&&h(s)}}const u=new WeakMap,L=e=>async(a,l,n,{client:t})=>{if(!e.hasAttribute("ssr"))return;let i,o,s={};for(const[r,c]of Object.entries(n))o??={},r==="default"?(o.default=!0,i=f(()=>({render:()=>`<astro-slot>${c}</astro-slot>`}))):o[r]=f(()=>({render:()=>`<astro-slot name="${r}">${c}</astro-slot>`})),r==="default"?s.children=f(()=>({render:()=>`<astro-slot>${c}</astro-slot>`})):s[r]=f(()=>({render:()=>`<astro-slot name="${r}">${c}</astro-slot>`}));const d={...l,children:i,$$slots:o,...s};if(u.has(e))u.get(e).setProps(d);else{const r=j(a,e,d,t!=="only");u.set(e,r),e.addEventListener("astro:unmount",()=>r.destroy(),{once:!0})}};function j(e,a,l,n){let t=g(l);const i=n?b:x;n||(a.innerHTML="");const o=i(e,{target:a,props:t});return{setProps(s){Object.assign(t,s);for(const d in t)d in s||delete t[d]},destroy(){k(o)}}}export{L as default};
