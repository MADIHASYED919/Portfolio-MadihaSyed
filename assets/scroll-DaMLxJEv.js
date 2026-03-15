import{r as e,j as o}from"./index-CwmSIpQP.js";import{i}from"./index-8VvpPIzA.js";function c(){const[t,s]=e.useState(!1);e.useEffect(()=>{const r=()=>{s(window.scrollY>300)};return window.addEventListener("scroll",r),()=>window.removeEventListener("scroll",r)},[]);const n=()=>{window.scrollTo({top:0,behavior:"smooth"})};return t?o.jsxs("button",{onClick:n,className:`group fixed bottom-6 right-6 flex items-center\r
      bg-green-400 text-black rounded-full px-4 py-3\r
      shadow-lg hover:shadow-[0_0_40px_rgba(34,197,94,0.9)]\r
      transition-all duration-300`,children:[o.jsx(i,{}),o.jsx("span",{className:` opacity-0 max-w-0 overflow-hidden\r
      group-hover:opacity-100 group-hover:max-w-[120px]\r
      transition-all duration-300 whitespace-nowrap`,children:"Back to Top"})]}):null}export{c as default};
