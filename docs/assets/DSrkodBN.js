import{_ as A}from"./C-j57mnI.js";import{_ as M}from"./BzpjxHHB.js";import{u as $}from"./wzKXfmg-.js";import{n as d,i as g,c as v,o as l,a as u,b as _,w as f,d as h,q as k,s as r,v as j,u as N,x as V,F as B}from"#entry";/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),L=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,o,s)=>s?s.toUpperCase():o.toLowerCase()),q=e=>{const t=L(e);return t.charAt(0).toUpperCase()+t.slice(1)},H=(...e)=>e.filter((t,o,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===o).join(" ").trim(),x=e=>e==="";/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var c={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=({name:e,iconNode:t,absoluteStrokeWidth:o,"absolute-stroke-width":s,strokeWidth:n,"stroke-width":i,size:a=c.width,color:C=c.stroke,...m},{slots:p})=>d("svg",{...c,...m,width:a,height:a,stroke:C,"stroke-width":x(o)||x(s)||o===!0||s===!0?Number(n||i||c["stroke-width"])*24/Number(a):n||i||c["stroke-width"],class:H("lucide",m.class,...e?[`lucide-${w(q(e))}-icon`,`lucide-${w(e)}`]:["lucide-icon"])},[...t.map(b=>d(...b)),...p.default?[p.default()]:[]]);/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=(e,t)=>(o,{slots:s,attrs:n})=>d(O,{...n,...o,iconNode:t,name:e},s);/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=y("volume-2",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]);/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=y("volume-off",[["path",{d:"M16 9a5 5 0 0 1 .95 2.293",key:"1fgyg8"}],["path",{d:"M19.364 5.636a9 9 0 0 1 1.889 9.96",key:"l3zxae"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"m7 7-.587.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298V11",key:"1gbwow"}],["path",{d:"M9.828 4.172A.686.686 0 0 1 11 4.657v.686",key:"s2je0y"}]]),F={class:"sticky z-40 top-0 bg-white/10 backdrop-blur-sm w-full flex justify-center"},I={class:"container flex h-14 max-w-screen-2xl items-center px-4"},K={class:"md:mr-1 md:flex"},U={class:"flex flex-1 items-center justify-end space-x-2"},Z=g({__name:"Navbar",setup(e){const{isMuted:t,toggleMute:o}=$();return(s,n)=>{const i=A,a=M;return l(),v("header",F,[u("div",I,[_(a,{to:"/"},{default:f(()=>[u("div",K,[_(i,null,{default:f(()=>[...n[0]||(n[0]=[h("キ",-1)])]),_:1}),n[1]||(n[1]=h("ミノコエ",-1))])]),_:1}),u("div",U,[r(t)?(l(),k(r(z),{key:0,onClick:r(o)},null,8,["onClick"])):(l(),k(r(E),{key:1,onClick:r(o)},null,8,["onClick"]))])])])}}}),P=Object.assign(Z,{__name:"KiNavbar"}),S={class:"main"},Q=g({__name:"default",setup(e){return j({robots:()=>({noindex:!0})}),N({title:"キミノコエ"}),(t,o)=>{const s=P;return l(),v(B,null,[_(s),u("div",S,[V(t.$slots,"default")])],64)}}});export{Q as default};
