function a(e){if(e==null)return"";const t=String(e);return/[",\n]/.test(t)?`"${t.replace(/"/g,'""')}"`:t}function i(e,t){const c=t.map(n=>a(n.title)).join(","),r=e.map(n=>t.map(o=>a(typeof o.value=="function"?o.value(n):n[o.value])).join(",")).join(`
`);return`${c}
${r}`}function s(e,t,c){const r=new Blob([i(t,c)],{type:"text/csv;charset=utf-8;"}),n=URL.createObjectURL(r),o=document.createElement("a");o.href=n,o.download=`${e}.csv`,o.click(),URL.revokeObjectURL(n)}export{s as d};
