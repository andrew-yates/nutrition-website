import{q as de}from"./task.BqUaA2Wx.js";import{s as Y,a as J,b as _e,c as D,d as ce,e as me,f as R,h as E,g as he,i as ye,j as _,k as ge,H as Ne,r as G,l as p,m as U,n as Ee,o as j,p as $,q as be,I as C,t as ee,u as xe,v as Ae,w as K,E as Ie,x as Se,y as ke,z as qe,A as Ue,B as Te,C as Me,D as Le,F as we,L as Oe,N as Re,G as pe,J as Ce,K as Pe,M as te,O as He,P as ae,Q as S,R as V,S as k,T as b,U as M,V as F,W as B,X as ne,Y as De,Z as X,_ as Fe,$ as Be,a0 as Ve}from"./template.CltUSWbt.js";import{s as L}from"./render.DYNeI7DO.js";let z=!1;function re(){z||(z=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{if(!e.defaultPrevented)for(const t of e.target.elements)t.__on_r?.()})},{capture:!0}))}function Qe(e){var t=_e,a=D;Y(null),J(null);try{return e()}finally{Y(t),J(a)}}function ie(e,t,a,r=a){e.addEventListener(t,()=>Qe(a));const i=e.__on_r;i?e.__on_r=()=>{i(),r(!0)}:e.__on_r=()=>r(!0),re()}function ue(e,t){return t}function Ye(e,t,a,r){for(var i=[],f=t.length,o=0;o<f;o++)Se(t[o].e,i,!0);var c=f>0&&i.length===0&&a!==null;if(c){var m=a.parentNode;ke(m),m.append(a),r.clear(),A(e,t[0].prev,t[f-1].next)}qe(i,()=>{for(var h=0;h<f;h++){var l=t[h];c||(r.delete(l.k),A(e,l.prev,l.next)),Ue(l.e,!c)}})}function le(e,t,a,r,i,f=null){var o=e,c={flags:t,items:new Map,first:null};{var m=e;o=E?R(he(m)):m.appendChild(ce())}E&&ye();var h=null,l=!1,N=ge(()=>{var u=a();return we(u)?u:u==null?[]:ee(u)});me(()=>{var u=_(N),d=u.length;if(l&&d===0)return;l=d===0;let n=!1;if(E){var s=o.data===Ne;s!==(d===0)&&(o=G(),R(o),p(!1),n=!0)}if(E){for(var y=null,v,g=0;g<d;g++){if(U.nodeType===8&&U.data===Ee){o=U,n=!0,p(!1);break}var q=u[g],I=r(q,g);v=se(U,c,y,null,q,I,g,i,t,a),c.items.set(I,v),y=v}d>0&&R(G())}E||Je(u,c,o,i,t,r,a),f!==null&&(d===0?h?j(h):h=$(()=>f(o)):h!==null&&be(h,()=>{h=null})),n&&p(!0),_(N)}),E&&(o=U)}function Je(e,t,a,r,i,f,o){var c=e.length,m=t.items,h=t.first,l=h,N,u=null,d=[],n=[],s,y,v,g;for(g=0;g<c;g+=1){if(s=e[g],y=f(s,g),v=m.get(y),v===void 0){var q=l?l.e.nodes_start:a;u=se(q,t,u,u===null?t.first:u.next,s,y,g,r,i,o),m.set(y,u),d=[],n=[],l=u.next;continue}if(Ge(v,s,g),(v.e.f&C)!==0&&j(v.e),v!==l){if(N!==void 0&&N.has(v)){if(d.length<n.length){var I=n[0],x;u=I.prev;var Q=d[0],w=d[d.length-1];for(x=0;x<d.length;x+=1)W(d[x],I,a);for(x=0;x<n.length;x+=1)N.delete(n[x]);A(t,Q.prev,w.next),A(t,u,Q),A(t,w,I),l=I,u=w,g-=1,d=[],n=[]}else N.delete(v),W(v,l,a),A(t,v.prev,v.next),A(t,v,u===null?t.first:u.next),A(t,u,v),u=v;continue}for(d=[],n=[];l!==null&&l.k!==y;)(l.e.f&C)===0&&(N??=new Set).add(l),n.push(l),l=l.next;if(l===null)continue;v=l}d.push(v),u=v,l=v.next}if(l!==null||N!==void 0){for(var O=N===void 0?[]:ee(N);l!==null;)(l.e.f&C)===0&&O.push(l),l=l.next;var oe=O.length;if(oe>0){var ve=c===0?a:null;Ye(t,O,ve,m)}}D.first=t.first&&t.first.e,D.last=u&&u.e}function Ge(e,t,a,r){xe(e.v,t),e.i=a}function se(e,t,a,r,i,f,o,c,m,h){var l=(m&Te)!==0,N=(m&Me)===0,u=l?N?Ae(i):K(i):i,d=(m&Ie)===0?o:K(o),n={i:d,v:u,k:f,a:null,e:null,prev:a,next:r};try{return n.e=$(()=>c(e,u,d,h),E),n.e.prev=a&&a.e,n.e.next=r&&r.e,a===null?t.first=n:(a.next=n,a.e.next=n.e),r!==null&&(r.prev=n,r.e.prev=n.e),n}finally{}}function W(e,t,a){for(var r=e.next?e.next.e.nodes_start:a,i=t?t.e.nodes_start:a,f=e.e.nodes_start;f!==r;){var o=Le(f);i.before(f),f=o}}function A(e,t,a){t===null?e.first=a:(t.next=a,t.e.next=a&&a.e),a!==null&&(a.prev=t,a.e.prev=t&&t.e)}const Ke=Symbol("is custom element"),Xe=Symbol("is html");function ze(e){if(E){var t=!1,a=()=>{if(!t){if(t=!0,e.hasAttribute("value")){var r=e.value;Z(e,"value",null),e.value=r}if(e.hasAttribute("checked")){var i=e.checked;Z(e,"checked",null),e.checked=i}}};e.__on_r=a,de(a),re()}}function Z(e,t,a,r){var i=We(e);E&&(i[t]=e.getAttribute(t),t==="src"||t==="srcset"||t==="href"&&e.nodeName==="LINK")||i[t]!==(i[t]=a)&&(t==="loading"&&(e[Oe]=a),e.removeAttribute(t))}function We(e){return e.__attributes??={[Ke]:e.nodeName.includes("-"),[Xe]:e.namespaceURI===Re}}function Ze(e,t,a=t){var r=pe();ie(e,"input",i=>{var f=i?e.defaultValue:e.value;if(f=P(e)?H(f):f,a(f),r&&f!==(f=t())){var o=e.selectionStart,c=e.selectionEnd;e.value=f??"",c!==null&&(e.selectionStart=o,e.selectionEnd=Math.min(c,e.value.length))}}),(E&&e.defaultValue!==e.value||Ce(t)==null&&e.value)&&a(P(e)?H(e.value):e.value),Pe(()=>{var i=t();P(e)&&i===H(e.value)||e.type==="date"&&!i&&!e.value||i!==e.value&&(e.value=i??"")})}function P(e){var t=e.type;return t==="number"||t==="range"}function H(e){return e===""?null:+e}function fe(e,t,a){if(e.multiple)return et(e,t);for(var r of e.options){var i=T(r);if(He(i,t)){r.selected=!0;return}}(!a||t!==void 0)&&(e.selectedIndex=-1)}function je(e,t){te(()=>{var a=new MutationObserver(()=>{var r=e.__value;fe(e,r)});return a.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),()=>{a.disconnect()}})}function $e(e,t,a=t){var r=!0;ie(e,"change",i=>{var f=i?"[selected]":":checked",o;if(e.multiple)o=[].map.call(e.querySelectorAll(f),T);else{var c=e.querySelector(f)??e.querySelector("option:not([disabled])");o=c&&T(c)}a(o)}),te(()=>{var i=t();if(fe(e,i,r),r&&i===void 0){var f=e.querySelector(":checked");f!==null&&(i=T(f),a(i))}e.__value=i,r=!1}),je(e)}function et(e,t){for(var a of e.options)a.selected=~t.indexOf(T(a))}function T(e){return"__value"in e?e.__value:e.value}var tt=V("<option> </option>"),at=V('<li class="svelte-bbh10f"><div> </div> <div><input type="number" min="0" style="width: 40px;"></div> <div><select name="unit"></select></div> <div> </div></li>');function nt(e,t){ae(t,!0);let a=S(()=>t.quantityUnit.protein*t.quantity);var r=at(),i=k(r),f=k(i,!0);b(i);var o=M(i,2),c=k(o);ze(c),b(o);var m=M(o,2),h=k(m);le(h,21,()=>t.units,ue,(u,d)=>{var n=tt(),s={},y=k(n,!0);b(n),F(()=>{s!==(s=_(d).unitName)&&(n.value=(n.__value=_(d).unitName)==null?"":_(d).unitName),L(y,_(d).unitName)}),B(u,n)}),b(h),b(m);var l=M(m,2),N=k(l);b(l),b(r),F(u=>{L(f,t.foodName),L(N,`${u??""}g`)},[()=>Math.round(_(a))]),Ze(c,()=>t.quantity,u=>t.onQuantityUpdate(u)),$e(h,()=>t.quantityUnit.unitName,u=>t.onUnitUpdate(u)),B(e,r),ne()}var rt=V('<ul class="svelte-1knob23"></ul> <p> </p>',1);function st(e,t){ae(t,!0);let a=De(X(document.getElementById(t.datePickerId).value));Fe(()=>{const n=document.getElementById(t.datePickerId),s=()=>{Ve(a,n.value,!0)};return n.addEventListener("change",s),()=>{n.removeEventListener("change",s)}});let r=X(JSON.parse(localStorage.getItem("dailyFoodAmounts")||"{}")),i=S(()=>r[_(a)]??{});const f=n=>s=>y=>{if(r[n]||(r[n]={}),!r[n][s]){const v=t.foods.find(g=>g.foodName===s).units;r[n][s]={unitName:v[0].unitName,quantity:0}}r[n][s].quantity=y,c()},o=n=>s=>y=>{if(r[n]||(r[n]={}),!r[n][s]){const v=t.foods.find(g=>g.foodName===s).units;r[n][s]={unitName:v[0].unitName,quantity:0}}r[n][s].unitName=y,c()},c=()=>localStorage.setItem("dailyFoodAmounts",JSON.stringify(r));let m=(n,s)=>t.foods.find(y=>y.foodName===n).units.find(y=>y.unitName===s),h=S(()=>Math.round(t.foods.map(n=>m(n.foodName,_(i)[n.foodName]?.unitName??n.units[0].unitName).protein*(_(i)[n.foodName]?.quantity??0)).reduce((n,s)=>n+s,0)));var l=rt(),N=Be(l);le(N,21,()=>t.foods,ue,(n,s)=>{const y=S(()=>_(i)[_(s).foodName]?.quantity??0),v=S(()=>m(_(s).foodName,_(i)[_(s).foodName]?.unitName??_(s).units[0].unitName)),g=S(()=>f(_(a))(_(s).foodName)),q=S(()=>o(_(a))(_(s).foodName));nt(n,{get foodName(){return _(s).foodName},get units(){return _(s).units},get quantity(){return _(y)},get quantityUnit(){return _(v)},get onQuantityUpdate(){return _(g)},get onUnitUpdate(){return _(q)}})}),b(N);var u=M(N,2),d=k(u);b(u),F(()=>L(d,`total protein: ${_(h)??""}g`)),B(e,l),ne()}export{st as default};
