let e,t,n,s=0,o=!1,l=!1,r=!1,i=!1;const c=window,a=document,f={t:0,s:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,s)=>e.addEventListener(t,n,s),rel:(e,t,n,s)=>e.removeEventListener(t,n,s)},u=(()=>!!a.documentElement.attachShadow)(),p=(()=>{try{return new CSSStyleSheet,!0}catch(e){}return!1})(),$={},d=new WeakMap,m=e=>d.get(e),h=(e,t)=>d.set(t.o=e,t),w=(e,t)=>t in e,y=e=>console.error(e),b=new Map,_=new Map,g=[],v=[],j=[],k=(e,t)=>n=>{e.push(n),o||(o=!0,t&&4&f.t?U(R):f.raf(R))},S=(e,t)=>{let n=0,s=0;for(;n<e.length&&(s=performance.now())<t;)try{e[n++](s)}catch(e){y(e)}n===e.length?e.length=0:0!==n&&e.splice(0,n)},R=()=>{s++,(e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){y(e)}e.length=0})(g);const e=2==(6&f.t)?performance.now()+10*Math.ceil(s*(1/22)):1/0;S(v,e),S(j,e),v.length>0&&(j.push(...v),v.length=0),(o=g.length+v.length+j.length>0)?f.raf(R):s=0},U=e=>Promise.resolve().then(e),M=k(g,!1),L=k(v,!0),O={},C=e=>null!=e,x=e=>"object"==(e=typeof e)||"function"===e,P=()=>c.CSS&&c.CSS.supports&&c.CSS.supports("color","var(--c)")?Promise.resolve():__sc_import_app("./p-67c1f911.js"),T=async()=>{const e=new RegExp("/app(\\.esm)?\\.js($|\\?|#)"),t=Array.from(a.querySelectorAll("script")).find(t=>e.test(t.src)||"app"===t.getAttribute("data-stencil-namespace")),n=t["data-opts"];{const e=new URL(".",new URL(t.getAttribute("data-resources-url")||t.src,c.location.href));return E(e.href),window.customElements||await __sc_import_app("./p-020f8d73.js"),Object.assign(Object.assign({},n),{resourcesUrl:e.href})}},E=e=>{const t=(()=>`__sc_import_${"app".replace(/\s|-/g,"_")}`)();try{c[t]=new Function("w",`return import(w);//${Math.random()}`)}catch(n){const s=new Map;c[t]=n=>{const o=new URL(n,e).href;let l=s.get(o);if(!l){const e=a.createElement("script");e.type="module",e.src=URL.createObjectURL(new Blob([`import * as m from '${o}'; window.${t}.m = m;`],{type:"application/javascript"})),l=new Promise(n=>{e.onload=()=>{n(c[t].m),e.remove()}}),s.set(o,l),a.head.appendChild(e)}return l}}},A=new WeakMap,D=e=>"sc-"+e,F=(e,t,...n)=>{let s,o,l=null,r=!1,i=!1,c=[];const a=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?a(l):null!=l&&"boolean"!=typeof l&&((r="function"!=typeof e&&!x(l))&&(l=String(l)),r&&i?c[c.length-1].l+=l:c.push(r?{t:0,l}:l),i=r)};if(a(n),t){s=t.key||void 0,o=t.name;{const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter(t=>e[t]).join(" "))}}if("function"==typeof e)return e(t,c,q);const f={t:0,i:e,u:c.length>0?c:null,p:void 0,$:t};return f.h=s,f._=o,f},W={},q={forEach:(e,t)=>e.map(H).forEach(t),map:(e,t)=>e.map(H).map(t).map(N)},H=e=>({vattrs:e.$,vchildren:e.u,vkey:e.h,vname:e._,vtag:e.i,vtext:e.l}),N=e=>({t:0,$:e.vattrs,u:e.vchildren,h:e.vkey,_:e.vname,i:e.vtag,l:e.vtext}),B=(e,t,n,s,o,l)=>{if(n===s)return;let r=w(e,t),i=t.toLowerCase();if("class"===t){const t=e.classList;V(n).forEach(e=>t.remove(e)),V(s).forEach(e=>t.add(e))}else if("style"===t){for(const t in n)s&&null!=s[t]||(t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(const t in s)n&&s[t]===n[t]||(t.includes("-")?e.style.setProperty(t,s[t]):e.style[t]=s[t])}else if("key"===t);else if("ref"===t)s&&s(e);else if(r||"o"!==t[0]||"n"!==t[1]){const c=x(s),a=null;if((r||c&&null!==s)&&!o)try{if(e.tagName.includes("-"))e[t]=s;else{let o=null==s?"":s;null!=n&&e[t]===(o=String(o))||(e[t]=o)}}catch(e){}null==s||!1===s?e.removeAttributeNS(a,i):(!r||4&l||o)&&!c&&e.setAttributeNS(a,i,s=!0===s?"":s)}else t="-"===t[2]?t.substr(3):w(e,i)?i.substr(2):i[2]+t.substr(3),n&&f.rel(e,t,n,!1),s&&f.ael(e,t,s,!1)},V=e=>e?e.split(/\s+/).filter(e=>e):[],z=(e,t,n,s)=>{const o=11===t.p.nodeType&&t.p.host?t.p.host:t.p,l=e&&e.$||O,r=t.$||O;for(s in l)s in r||B(o,s,l[s],void 0,n,t.t);for(s in r)B(o,s,l[s],r[s],n,t.t)},G=(s,o,r,c)=>{let f,u,p,$=o.u[r],d=0;if(l||(i=!0,"slot"===$.i&&(e&&c.classList.add(e+"-s"),$.t|=$.u?2:1)),C($.l))$.p=a.createTextNode($.l);else if(1&$.t)$.p=a.createTextNode("");else if(f=$.p=a.createElement(2&$.t?"slot-fb":$.i),z(null,$,!1),C(e)&&f["s-si"]!==e&&f.classList.add(f["s-si"]=e),$.u)for(d=0;d<$.u.length;++d)(u=G(s,$,d,f))&&f.appendChild(u);return $.p["s-hn"]=n,3&$.t&&($.p["s-sr"]=!0,$.p["s-cr"]=t,$.p["s-sn"]=$._||"",(p=s&&s.u&&s.u[r])&&p.i===$.i&&s.p&&I(s.p,!1)),$.p},I=(e,t)=>{f.t|=1;const s=e.childNodes;for(let e=s.length-1;e>=0;e--){const o=s[e];o["s-hn"]!==n&&o["s-ol"]&&(Y(o).insertBefore(o,X(o)),o["s-ol"].remove(),o["s-ol"]=void 0,i=!0),t&&I(o,t)}f.t&=-2},J=(e,t,s,o,l,r)=>{let i,c=e["s-cr"]&&e["s-cr"].parentNode||e;for(c.shadowRoot&&c.tagName===n&&(c=c.shadowRoot);l<=r;++l)o[l]&&(i=G(null,s,l,e))&&(o[l].p=i,c.insertBefore(i,X(t)))},K=(e,t,n,s)=>{for(;t<=n;++t)C(e[t])&&(s=e[t].p,se(e[t],!0),r=!0,s["s-ol"]?s["s-ol"].remove():I(s,!0),s.remove())},Q=(e,t)=>e.i===t.i&&("slot"===e.i?e._===t._:e.h===t.h),X=e=>e&&e["s-ol"]||e,Y=e=>(e["s-ol"]?e["s-ol"]:e).parentNode,Z=(e,t)=>{const n=t.p=e.p,s=e.u,o=t.u;let l;C(t.l)?(l=n["s-cr"])?l.parentNode.textContent=t.l:e.l!==t.l&&(n.textContent=t.l):("slot"===t.i||z(e,t,!1),C(s)&&C(o)?((e,t,n,s)=>{let o,l,r=0,i=0,c=0,a=0,f=t.length-1,u=t[0],p=t[f],$=s.length-1,d=s[0],m=s[$];for(;r<=f&&i<=$;)if(null==u)u=t[++r];else if(null==p)p=t[--f];else if(null==d)d=s[++i];else if(null==m)m=s[--$];else if(Q(u,d))Z(u,d),u=t[++r],d=s[++i];else if(Q(p,m))Z(p,m),p=t[--f],m=s[--$];else if(Q(u,m))"slot"!==u.i&&"slot"!==m.i||I(u.p.parentNode,!1),Z(u,m),e.insertBefore(u.p,p.p.nextSibling),u=t[++r],m=s[--$];else if(Q(p,d))"slot"!==u.i&&"slot"!==m.i||I(p.p.parentNode,!1),Z(p,d),e.insertBefore(p.p,u.p),p=t[--f],d=s[++i];else{for(c=-1,a=r;a<=f;++a)if(t[a]&&C(t[a].h)&&t[a].h===d.h){c=a;break}c>=0?((l=t[c]).i!==d.i?o=G(t&&t[i],n,c,e):(Z(l,d),t[c]=void 0,o=l.p),d=s[++i]):(o=G(t&&t[i],n,i,e),d=s[++i]),o&&Y(u.p).insertBefore(o,X(u.p))}r>f?J(e,null==s[$+1]?null:s[$+1].p,n,s,i,$):i>$&&K(t,r,f)})(n,s,t,o):C(o)?(C(e.l)&&(n.textContent=""),J(n,null,t,o,0,o.length-1)):C(s)&&K(s,0,s.length-1))},ee=(e,t,n,s,o,l,r,i)=>{for(s=0,o=(n=e.childNodes).length;s<o;s++)if(1===(t=n[s]).nodeType){if(t["s-sr"])for(r=t["s-sn"],t.hidden=!1,l=0;l<o;l++)if(n[l]["s-hn"]!==t["s-hn"])if(i=n[l].nodeType,""!==r){if(1===i&&r===n[l].getAttribute("slot")){t.hidden=!0;break}}else if(1===i||3===i&&""!==n[l].textContent.trim()){t.hidden=!0;break}ee(t)}},te=[],ne=e=>{let t,n,s,o,l=e.childNodes,i=l.length,c=0,a=0,f=0;for(i=l.length;c<i;c++){if((t=l[c])["s-sr"]&&(n=t["s-cr"]))for(o=t["s-sn"],a=(s=n.parentNode.childNodes).length-1;a>=0;a--)(n=s[a])["s-cn"]||n["s-nr"]||n["s-hn"]===t["s-hn"]||((3===(f=n.nodeType)||8===f)&&""===o||1===f&&null===n.getAttribute("slot")&&""===o||1===f&&n.getAttribute("slot")===o)&&(te.some(e=>e.g===n)||(r=!0,n["s-sn"]=o,te.push({v:t,g:n})));1===t.nodeType&&ne(t)}},se=(e,t)=>{e&&(e.$&&e.$.ref&&e.$.ref(t?null:e.p),e.u&&e.u.forEach(e=>{se(e,t)}))},oe=(e,t,n,s)=>{t.t|=16;const o=t.o,l=()=>le(e,t,n,o,s);let r;return s&&(r=ce(o,"componentWillLoad")),ae(r,()=>L(l))},le=(s,o,c,p,$)=>{o.t&=-17,s["s-lr"]=!1,$&&((e,t)=>{const n=((e,t)=>{let n=D(t.j),s=_.get(n);if(e=11===e.nodeType?e:a,s)if("string"==typeof s){let t,o=A.get(e=e.head||e);o||A.set(e,o=new Set),o.has(n)||((t=a.createElement("style")).innerHTML=s,e.insertBefore(t,e.querySelector("link")),o&&o.add(n))}else e.adoptedStyleSheets.includes(s)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,s]);return n})(u&&e.shadowRoot?e.shadowRoot:e.getRootNode(),t);10&t.t&&(e["s-sc"]=n,e.classList.add(n+"-h"))})(s,c),o.t|=4;try{((s,o,c,p)=>{n=s.tagName;const $=o.k||{t:0},d=(e=>e&&e.i===W)(p)?p:F(null,null,p);if(c.S&&(d.$=d.$||{},c.S.forEach(([e,t])=>d.$[t]=s[e])),d.i=null,d.t|=4,o.k=d,d.p=$.p=s.shadowRoot||s,e=s["s-sc"],t=s["s-cr"],l=u&&0!=(1&c.t),i=r=!1,Z($,d),i){ne(d.p);for(let e=0;e<te.length;e++){const t=te[e];if(!t.g["s-ol"]){const e=a.createTextNode("");e["s-nr"]=t.g,t.g.parentNode.insertBefore(t.g["s-ol"]=e,t.g)}}f.t|=1;for(let e=0;e<te.length;e++){const t=te[e],n=t.v.parentNode;let s=t.v.nextSibling,o=t.g["s-ol"];for(;o=o.previousSibling;){let e=o["s-nr"];if(e&&e["s-sn"]===t.g["s-sn"]&&n===e.parentNode&&(!(e=e.nextSibling)||!e["s-nr"])){s=e;break}}(!s&&n!==t.g.parentNode||t.g.nextSibling!==s)&&t.g!==s&&n.insertBefore(t.g,s)}f.t&=-2}r&&ee(d.p),te.length=0})(s,o,c,p.render&&p.render())}catch(e){y(e)}o.t&=-5,s["s-lr"]=!0,o.t|=2,s["s-rc"].length>0&&(s["s-rc"].forEach(e=>e()),s["s-rc"].length=0),re(s,o)},re=(e,t,n)=>{if(!e["s-al"]){const s=t.o,o=t.R;64&t.t?ce(s,"componentDidUpdate"):(t.t|=64,e.classList.add("hydrated"),ce(s,"componentDidLoad"),t.U(e),o||ie()),o&&((n=o["s-al"])&&(n.delete(e),0===n.size&&(o["s-al"]=void 0,o["s-init"]())),t.R=void 0)}},ie=()=>{a.documentElement.classList.add("hydrated"),f.t|=2},ce=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(e){y(e)}},ae=(e,t)=>e&&e.then?e.then(t):t(),fe=(e,t,n)=>{if(t.M){e.watchers&&(t.L=e.watchers);const s=Object.entries(t.M),o=e.prototype;if(s.forEach(([e,[s]])=>{(31&s||2&n&&32&s)&&Object.defineProperty(o,e,{get(){return((e,t)=>m(e).O.get(t))(this,e)},set(n){((e,t,n,s)=>{const o=m(this),l=o.C,r=o.O.get(t),i=o.t,c=o.o;if(!((n=((e,t)=>null==e||x(e)?e:4&t?"false"!==e&&(""===e||!!e):2&t?parseFloat(e):1&t?String(e):e)(n,s.M[t][0]))===r||8&i&&void 0!==r)&&(o.O.set(t,n),c)){if(s.L&&128&i){const e=s.L[t];e&&e.forEach(e=>{try{c[e](n,r,t)}catch(e){y(e)}})}2==(22&i)&&oe(l,o,s,!1)}})(0,e,n,t)},configurable:!0,enumerable:!0})}),1&n){const n=new Map;o.attributeChangedCallback=function(e,t,s){f.jmp(()=>{const t=n.get(e);this[t]=(null!==s||"boolean"!=typeof this[t])&&s})},e.observedAttributes=s.filter(([e,t])=>15&t[0]).map(([e,s])=>{const o=s[1]||e;return n.set(o,e),512&s[0]&&t.S.push([e,o]),o})}}return e},ue=e=>{ce(e,"connectedCallback")},pe=(e,t={})=>{const n=[],s=t.exclude||[],o=a.head,l=c.customElements,r=o.querySelector("meta[charset]"),i=a.createElement("style");let $;Object.assign(f,t),f.s=new URL(t.resourcesUrl||"./",a.baseURI).href,t.syncQueue&&(f.t|=4),e.forEach(e=>e[1].forEach(t=>{const o={t:t[0],j:t[1],M:t[2],P:t[3],S:[],L:{}};!u&&1&o.t&&(o.t|=8);const r=o.j;HTMLElement,o.T=e[0],s.includes(r)||l.get(r)||(n.push(r),l.define(r,fe(class extends HTMLElement{constructor(e){super(e),e=this,this["s-lr"]=!1,this["s-rc"]=[],(e=>{{const t={t:0,C:e,O:new Map};t.A=new Promise(e=>t.U=e),d.set(e,t)}})(e),1&o.t&&(u?e.attachShadow({mode:"open"}):"shadowRoot"in e||(e.shadowRoot=e))}connectedCallback(){$&&(clearTimeout($),$=null),f.jmp(()=>((e,t)=>{if(0==(1&f.t)){const n=m(e);if(!(1&n.t)){let s;n.t|=1,s||(4&t.t||8&t.t)&&((e,t)=>{(t=e["s-cr"]=a.createComment(""))["s-cn"]=!0,e.insertBefore(t,e.firstChild)})(e);{let t=e;for(;t=t.parentNode||t.host;)if(t["s-init"]&&!1===t["s-lr"]){n.R=t,(t["s-al"]=t["s-al"]||new Set).add(e);break}}t.M&&Object.entries(t.M).forEach(([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}}),U(()=>(async(e,t,n,s,o)=>{if(0==(32&t.t)){t.t|=32,(o=(e=>{const t=e.j.replace(/-/g,"_"),n=e.T,s=b.get(n);return s?s[t]:__sc_import_app(`./${n}.entry.js`).then(e=>(b.set(n,e),e[t]),y)})(n)).then&&(o=await o),o.isProxied||(n.L=o.watchers,fe(o,n,2),o.isProxied=!0),t.t|=8;try{new o(t)}catch(e){y(e)}t.t&=-9,t.t|=128,ue(t.o);const e=D(n.j);if(!_.has(e)&&o.style){let t=o.style;8&n.t&&(t=await __sc_import_app("./p-affe7c09.js").then(n=>n.scopeCss(t,e,!1))),((e,t,n)=>{let s=_.get(e);p&&n?(s=s||new CSSStyleSheet).replace(t):s=t,_.set(e,s)})(e,t,!!(1&n.t))}}const l=t.R,r=()=>oe(e,t,n,!0);l&&!1===l["s-lr"]&&l["s-rc"]?l["s-rc"].push(r):r()})(e,n,t))}ue(n.o)}})(this,o))}disconnectedCallback(){f.jmp(()=>(()=>{if(0==(1&f.t)){const e=m(this).o;ce(e,"disconnectedCallback"),ce(e,"componentDidUnload")}})())}"s-init"(){const e=m(this);e.o&&re(this,e)}"s-hmr"(e){}forceUpdate(){((e,t)=>{{const n=m(e);2&n.t&&oe(e,n,t,!1)}})(this,o)}componentOnReady(){return m(this).A}},o,1)))})),i.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",i.setAttribute("data-styles",""),o.insertBefore(i,r?r.nextSibling:o.firstChild),f.jmp(()=>$=setTimeout(ie,30))},$e=(e,t)=>t in $?$[t]:"window"===t?c:"document"===t?a:"isServer"!==t&&"isPrerender"!==t&&("isClient"===t||("resourcesUrl"===t||"publicPath"===t?(()=>{const e=new URL(".",f.s);return e.origin!==c.location.origin?e.href:e.pathname})():"queue"===t?{write:L,read:M,tick:{then:e=>U(e)}}:void 0)),de=e=>m(e).C;export{P as a,pe as b,$e as c,de as g,F as h,T as p,h as r};