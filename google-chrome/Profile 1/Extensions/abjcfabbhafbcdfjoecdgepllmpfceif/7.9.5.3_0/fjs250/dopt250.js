// // Browser Extension - Magic Actions - CHROMEACTIONS.COM - Copyright (c) 2023 Mixesoft - All Rights Reserved
// Minified by Google Closure Compiler 20221102
(function(){var p,a;const M=function(e){console.info(e)};var J=function(){};const F=window,C=F.document,D=C.documentElement,r=M.call,{Event:E,JSON:{stringify:N,parse:O},URL:{revokeObjectURL:V,reateObjectURL:W},Object:{defineProperty:X},setTimeout:Y,parseInt:K,chrome:{runtime:{sendMessage:Z},i18n:{getMessage:aa}}}=F,h=C.createElement.bind(C);(C.createTextNode||J).bind(C);const ba=C.querySelector.bind(C),B=r.bind(DocumentFragment.prototype.querySelector),v=r.bind(D.setAttribute),ca=r.bind(D.attachShadow),
k=r.bind(D.appendChild),P=r.bind(D.removeChild);r.bind(Event.prototype.stopPropagation);const x=r.bind(D.addEventListener);r.bind(D.dispatchEvent);r.bind(Array.prototype.push);r.bind(Array.prototype.join);r.bind("".slice);r.bind("".charCodeAt);const da=r.bind("".charAt),ea=r.bind("".indexOf),Q=r.bind(D.click),w=r.bind(Object.getOwnPropertyDescriptor(Node.prototype,"textContent").set),G=async function(e){let b;try{b=await Z(N(e))}catch(c){M(c),0<ea(c,"context")&&window.location.reload()}return b},
d=function(e){return aa(e)||""},H=function(e,b,c){console.info("opt saveOpt",e,b);G({id:4,name:e,value:b,ctx:c})},fa=function(e){e instanceof E&&e.isTrusted&&(B(p,"#"+a.color).className="",a.color=this.id,this.className="sel",H("color",a.color,null))},I=function(e){e instanceof E&&e.isTrusted&&(B(p,"#vc"+a.mwvci).checked=!1,a.mwvci=K(da(this.id||"  1",2),10),this.checked=!0,H("mwvci",a.mwvci,null))},L=function(e){e instanceof E&&e.isTrusted&&(B(p,"#ca"+a.cini).checked=!1,a.cini=K(this.id.charAt(2),
10),this.checked=!0,H("cini",a.cini,null))},y=function(e){e instanceof E&&e.isTrusted&&(B(p,"#"+a.hqi).checked=!1,a.hqi=this.id,this.checked=!0,H("hqi",a.hqi,null))},R=function(e){if(e instanceof E&&e.isTrusted){var b=this.id;e=this.checked;a[b]=e?!0:!1;e&&"cine"==b?(B(p,"#cina").checked=a.cina=!1,G({id:3,opt:{cina:!1,cine:!0}})):e&&"cina"==b?(B(p,"#cine").checked=a.cine=!1,G({id:3,opt:{cine:!1,cina:!0}})):H(b,e?!0:!1,"a0"==b||"a3"==b?!0:!1);b=this.parentElement;if("opt"==b.className)for(b=b.nextElementSibling;b&&
("sub"==b.className||"sub multi"==b.className);)v(b,"disabled",!e),b=b.nextElementSibling}},ha=function(e){if(e instanceof E&&e.isTrusted){e=this.id;var b=this.value;w(this.nextElementSibling,"psi"===e?b/100:b);b=K(b,10);a[e]=b;H(e,b,null)}},ia=function(e){e instanceof E&&e.isTrusted&&G(this.mafy||{})},q=function(e,b,c,f,l){var m=h("label"),n=h("input");n.type="radio";n.id=b;f&&(n.checked=!0);k(e,n);w(m,c);v(m,"for",b);k(e,m);x(n,"click",l,!1)},g=function(e,b,c,f,l,m,n,z){var t=h("li"),A=h("label"),
u=h("input");f&&(t.title=f);w(A,c);v(A,"for",b);u.type="checkbox";u.id=b;u.checked=l;k(t,u);k(t,A);m?(t.className="sub",v(t,"disabled",n)):t.className="opt";z&&(b=h("span"),w(b,"?"),b.title="Learn more about this feature …",b.className="help",X(b,"mafy",{value:z,writable:!1,configurable:!1,enumerable:!1}),k(t,b),x(b,"click",ia,!0));k(e,t);x(u,"click",R,!0)},S=function(e,b,c){for(var f=h("li"),l,m,n=0,z=b.length;n<z;n+=3)l=h("label"),m=h("input"),w(l,b[n+1]),v(l,"for",b[n]),m.type="checkbox",m.id=
b[n],m.checked=b[n+2],k(f,m),k(f,l),x(m,"click",R,!1);f.className="sub multi";v(f,"disabled",c);k(e,f)},T=function(e,b,c,f,l,m,n,z){var t=h("li"),A=h("label"),u=h("input");w(A,c);v(A,"for",b);u.type="range";u.min=l;u.max=m;u.step=n;u.value=f;u.id=b;u.title="Range: "+l+"-"+m;k(t,A);k(t,u);A=h("span");w(A,"psi"===b?f/100:f);k(t,A);t.className="sub";v(t,"disabled",z);k(e,t);x(u,"change",ha,!0)},ka=function(){var e=N(a);e=new Blob([e],{type:"application/json;charset=UTF-8"});ja(e,"MagicActions-Options.json")},
ma=function(){la(1E5,function(e){try{var b=O(e)}catch(f){b=null}if(b){e=a.ver;for(var c in b)void 0!=a[c]&&(a[c]=b[c]);a.ver=e;for(G({id:3,opt:a});p.firstElementChild;)P(p,p.firstElementChild)}U()})},la=function(e,b){var c=B(p,"#openAs");c&&P(p,c);c=h("input");c.id="openAs";c.style.display="none";c.type="file";k(p,c);x(c,"change",function(f){if((f=f.target.files)&&1==f.length&&f[0].size<e){var l=new FileReader;l.onload=function(m){b(m.target.result)};l.readAsText(f[0])}},!1);Q(c)},ja=function(e,b){var c=
h("a");c.href=W(e);v(c,"download",b);Q(c);Y(function(){V(c.href)},2E3)},U=function(){console.info("constructOptions",a);p||(p=ca(ba("body"),{mode:"closed"}));const e=function(){var b=h("ul");b.className="page";g(b,"mwvc",d("o8"),null,a.mwvc,null,null,{id:2,u:305,a:!0});g(b,"mwvcm",d("o82"),null,a.mwvcm,1,!a.mwvc,null);g(b,"mwvcs",d("o80"),null,a.mwvcs,1,!a.mwvc,null);g(b,"mwvct",d("o83"),null,a.mwvct,1,!a.mwvc,null);g(b,"mwvcr",d("o41"),null,a.mwvcr,1,!a.mwvc,null);var c="red LightPink orange lime GreenYellow yellow gold DodgerBlue aqua magenta DeepPink white".split(" "),
f=h("li");var l=h("label");f.className="sub";v(f,"disabled",!a.mwvc);f.id="color";w(l,d("o9"));k(f,l);for(var m=0,n=c.length;m<n;m++){var z=c[m];l=h("button");l.id=z;l.style.backgroundColor=z;a.color==z&&(l.className="sel");k(f,l);x(l,"click",fa,!1)}k(b,f);c=h("li");f=h("label");c.id="mwvci";c.className="sub";v(c,"disabled",!a.mwvc);w(f,d("o23"));k(c,f);q(c,"vc0",d("o85"),0==a.mwvci,I);q(c,"vc1",d("o24"),1==a.mwvci,I);q(c,"vc2",d("o25"),2==a.mwvci,I);q(c,"vc3",d("o26"),3==a.mwvci,I);k(b,c);T(b,"gap",
d("o27"),a.gap,1,25,1,!a.mwvc);g(b,"hq",d("o90"),null,a.hq,null,null,{id:2,u:306,a:!0});c=h("li");c.id="hqi";c.className="sub";v(c,"disabled",!a.hq);q(c,"highres",d("o91"),"highres"==a.hqi,y);q(c,"hd2880",d("o92"),"hd2880"==a.hqi,y);q(c,"hd2160",d("o93"),"hd2160"==a.hqi,y);q(c,"hd1440",d("o94"),"hd1440"==a.hqi,y);q(c,"hd1080",d("o95"),"hd1080"==a.hqi,y);q(c,"hd720",d("o96"),"hd720"==a.hqi,y);q(c,"large",d("o97"),"large"==a.hqi,y);q(c,"medium",d("o98"),"medium"==a.hqi,y);q(c,"small",d("o99"),"small"==
a.hqi,y);q(c,"tiny",d("o100"),"tiny"==a.hqi,y);k(b,c);g(b,"b0",d("b0"),null,a.b0,null,null,{id:2,u:322,a:!0});g(b,"b1",d("b1"),null,a.b1,1,!a.b0,null);g(b,"b2",d("b2"),null,a.b2,1,!a.b0,null);g(b,"b3",d("b3"),null,a.b2,1,!a.b0,null);g(b,"ps",d("o72"),"Hotkeys to adjust playback speed: [SHIFT]+[,] or [SHIFT]+[.]",a.ps,null,null,null);T(b,"psi",d("o73"),a.psi,25,200,5,!a.ps);g(b,"mrl",d("o44"),"Right-click on the timeline (seek/progress bar) to mark up one or several pieces of video and then play them in an endless loop. Right-click on a loop to remove it from the timeline.",
a.mrl,null,null,{id:2,u:321,a:!0});g(b,"cin",d("o29"),null,a.cin,null,null,{id:2,u:302,a:!0});c=h("li");f=h("label");c.id="cini";c.className="sub";v(c,"disabled",!a.cin);w(f,d("o32"));k(c,f);q(c,"ca0",d("o33"),0==a.cini,L);q(c,"ca1",d("o34"),1==a.cini,L);q(c,"ca2",d("o35"),2==a.cini,L);k(b,c);g(b,"cina",d("o30"),null,a.cina,1,!a.cin,null);g(b,"cine",d("o36"),null,a.cine,1,!a.cin,null);g(b,"cinf",d("o31"),null,a.cinf,1,!a.cin,null);g(b,"cinl",d("o65"),null,a.cinl,1,!a.cin,null);g(b,"pause",d("o17"),
null,a.pause,0,0,{id:2,u:320,a:!0});g(b,"plist",d("o19"),null,a.plist,1,!a.pause,null);g(b,"buf",d("o18"),null,a.buf,null,null,null);g(b,"buf1",d("o63"),null,a.buf1,1,!a.buf,null);g(b,"loop",d("o40"),null,a.loop,null,null,{id:2,u:321,a:!0});g(b,"c0",d("o70"),null,a.c0,0,0,{id:2,u:307,a:!0});S(b,["c1",d("o71"),a.c1,"c4",d("o86"),a.c4],!a.c0);g(b,"anns",d("o42"),null,a.anns,null,null,null);g(b,"h0",d("o50"),null,a.h0,null,null,null);S(b,["h2",d("o52"),a.h2,"h13",d("c8"),a.h13,"h9",d("o66"),a.h9,"h12",
d("o43"),a.h12,"h10",d("o67"),a.h10,"h8",d("o57"),a.h8,"h11",d("o68"),a.h11,"h7",d("o56"),a.h7,"h5",d("o55"),a.h5,"h1",d("o51"),a.h1,"h6",d("o64"),a.h6,"h4",d("o54"),a.h4,"h3",d("o53"),a.h3],!a.h0);g(b,"a0",d("o60"),null,a.a0,0,0,{id:2,u:304,a:!0});g(b,"a4",d("o81"),null,a.a4,1,!a.a0,null);g(b,"a6",d("a6"),null,a.a6,1,!a.a0,null);g(b,"a2",d("o62"),null,a.a2,1,!a.a0,null);g(b,"a3",d("o84"),null,a.a3,1,!a.a0,null);g(b,"a8",d("a8"),null,a.a8,1,!a.a0,null);g(b,"a9",d("a9"),null,a.a9,1,!a.a0,null);g(b,
"me",d("me"),null,a.me,null,null,null);g(b,"wide",d("o28"),null,a.wide,null,null,null);c=h("li");f=h("a");c.className="opt";w(f,"Export Options …");f.className="bttn";x(f,"click",ka,!1);k(c,f);f=h("a");w(f,"Import Options …");f.className="bttn";x(f,"click",ma,!1);k(c,f);k(b,c);k(p,b);b=h("sup");w(b,d("m4"));b.style.color="red";b.style.verticalAlign="top";k(B(p,"#ps").nextElementSibling,b)};(function(){var b=h("link");b.rel="stylesheet";b.type="text/css";b.href="fcss250/dopt250.css";x(b,"load",
e,!1);k(p,b)})()};J=function(){console.info("pageLoaded");G({id:0}).then(e=>{console.info(typeof e,e);if("string"==typeof e){try{a=O(e)}catch(b){a=null}a&&U()}})};F.top==F.self?F.top.location.href="https://www.chromeactions.com/magic-options.html":x(F,"DOMContentLoaded",J,!0)})();