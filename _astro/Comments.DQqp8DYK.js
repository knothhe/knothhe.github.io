import{j as c,G as _}from"./config.D02E3Lc5.js";import{_ as v}from"./preload-helper.CLcXU_4U.js";import{r as a}from"./index.DK-fsZOb.js";function x({id:n,host:i,repo:s,repoId:o,category:e,categoryId:t,mapping:r,term:d,strict:h,reactionsEnabled:l,emitMetadata:u,inputPosition:g,theme:p,lang:f,loading:E}){const[m,k]=a.useState(!1);return a.useEffect(()=>{m||v(()=>import("./giscus-Ci9LqPcC.cvwcBf5t.js"),[]).then(()=>k(!0))},[]),m?c.jsx("giscus-widget",{id:n,host:i,repo:s,repoid:o,category:e,categoryid:t,mapping:r,term:d,strict:h,reactionsenabled:l,emitmetadata:u,inputposition:g,theme:p,lang:f,loading:E}):null}function j({lightTheme:n="light_protanopia",darkTheme:i="dark_dimmed"}){const[s,o]=a.useState(()=>{const e=localStorage.getItem("theme"),t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";return e||t});return a.useEffect(()=>{const e=window.matchMedia("(prefers-color-scheme: dark)"),t=({matches:r})=>{o(r?"dark":"light")};return e.addEventListener("change",t),()=>e.removeEventListener("change",t)},[]),a.useEffect(()=>{const e=document.querySelector("#theme-btn"),t=()=>{o(r=>r==="dark"?"light":"dark")};return e?.addEventListener("click",t),()=>e?.removeEventListener("click",t)},[]),c.jsx("div",{className:"mt-8",children:c.jsx(x,{theme:s==="light"?n:i,..._})})}export{j as default};
