(self.webpackChunk=self.webpackChunk||[]).push([[6084],{81279:(e,t,r)=>{r.d(t,{z:()=>d});var a=r(49231),o=r(63178),n=r(51007),l=r(2498),s=r(90382),i=r(59330);const d=a.forwardRef((function(e,t){const{size:r="medium",children:d,iconEnd:c,iconStart:m,text:g,tabIndex:p,shortcut:f}=e,{buttonProps:u,isPressed:E,ref:h,inProgress:C,variant:v}=(0,n.zT)(e,t),{isFocusVisible:b,focusProps:y}=(0,l.Fx)(),{isLoading:L}=e,w=null!=g?g:"string"==typeof d?d:void 0;return a.createElement("button",{className:(0,o.W)((0,n.gj)(e,E,C,b,!1),L&&"gds-button-loading"),ref:h,"aria-disabled":L,...u,...y,tabIndex:null!=p?p:0},a.createElement(a.Fragment,null,L?a.createElement(s.a,{accessibilityLabel:"Loading",style:{position:"absolute"}},a.createElement(s.a.Circular,{variant:"inherit",className:"gds-button-loader",size:{small:"small",medium:"small",large:"medium",xlarge:"medium","2xlarge":"large","3xlarge":"large","4xlarge":"large"}[r]})):null,(0,n.g_)(v,m,r),(0,n.Vh)(w,d,n.g$[r],v),(0,n.FX)(v,c,r),null!=f&&!["premium","critical","pro","enterprise"].includes(v)&&a.createElement(i.x,{variant:n.g$[r],className:"gds-button-shortcut",as:"kbd"},f)))}))},77530:(e,t,r)=>{r.d(t,{k:()=>s});var a=r(49231),o=r(73255),n=r(41226),l=r(63178);const s=a.forwardRef((function(e,t){const{utility:r,other:o}=(0,n.a)(e),{accessibilityLabel:s,align:d,as:c,children:m,className:g,direction:p="row",elevation:f,flex:u,gap:E=0,justify:h,wrap:C=!1,style:v={},...b}=o,y=function({direction:e,wrap:t,elevation:r,className:a}){return(0,l.W)("gds-flex","column"===e&&"gds-flex-direction-column",t&&"gds-flex-wrap",r&&`gds-flex-elevation-${r}`,a)}({direction:p,wrap:C,elevation:f,className:g}),L=(0,n.f)(r),w={...i(E),alignItems:d,justifyContent:h,flex:u,...L,...v},x=null!=c?c:"div";return a.createElement(x,{"aria-label":s,ref:t,className:y,style:w,...b},m)}));function i(e){if(null==e)return{};if("number"==typeof e)return{gap:`var(--space-${(0,o.Jy)(e)})`};return{gap:`${null==e.row?"normal":`var(--space-${(0,o.Jy)(e.row)})`} ${null==e.column?"normal":`var(--space-${(0,o.Jy)(e.column)})`}`}}},94207:(e,t,r)=>{r.d(t,{X:()=>l});var a=r(49231),o=r(63178),n=r(73255);const l=a.forwardRef((function(e,t){const{as:r,className:l,variant:s="heading-medium",color:i,align:d,margin:c,marginLeft:m,marginRight:g,marginTop:p,marginBottom:f,style:u,...E}=e,h={...u,...null!=i&&{color:`var(--color-text-${i})`},...null!=d&&{textAlign:d},...(0,n.AA)({margin:c,marginLeft:m,marginRight:g,marginTop:p,marginBottom:f})};return a.createElement(r,{ref:t,className:(0,o.W)("gds-typography","gds-"+(s.startsWith("heading")?"heading":"text"),`gds-${s}`,l),style:h,...E})}))},78426:(e,t,r)=>{r.d(t,{E:()=>l});let a=null;let o;class n{constructor(){const e=document.getElementById("gds-liveAnnouncer");this.node=document.createElement("div"),this.node.setAttribute("id","gds-liveAnnouncer"),this.node.dataset.liveAnnouncer="true",this.node.classList.add("gds-sr-only"),this.assertiveLog=this.createLog("assertive"),this.node.appendChild(this.assertiveLog),this.politeLog=this.createLog("polite"),this.node.appendChild(this.politeLog),e||document.body.append(this.node)}createLog(e){const t=document.createElement("div");return t.setAttribute("role","status"),t.setAttribute("aria-live",e),t.setAttribute("id",`gds-${e}`),t}createEmptyNode(e){const t=document.getElementById(`gds-${e}`);t&&(t.innerHTML="<p>&nbsp;</p>")}destroy(){this.node&&(document.body.removeChild(this.node),this.node=null)}clearOldMessages(e){e&&e.childNodes.forEach((t=>e.removeChild(t)))}announce(e,t="assertive",r){if(!this.node)return;const a=document.createElement("p");a.textContent=e,this.clearOldMessages(this.assertiveLog),this.clearOldMessages(this.politeLog),"assertive"===t?this.assertiveLog.appendChild(a):this.politeLog.appendChild(a),""!==e&&setTimeout((()=>{a.remove()}),r)}clear(e){this.node&&(e?"assertive"===e?this.assertiveLog.innerHTML="":this.politeLog.innerHTML="":(this.assertiveLog.innerHTML="",this.politeLog.innerHTML=""))}}const l={announce:function(e,t="polite",r=7e3){a&&(a.createEmptyNode("polite"),a.createEmptyNode("assertive")),a||(a=new n),o&&clearTimeout(o),o=setTimeout((()=>{a&&a.announce(e,t,r)}),10)},clear:function(e){a&&a.clear(e)},destroy:function(){a&&(a.destroy(),a=null)}}},50078:(e,t,r)=>{r.d(t,{W:()=>n});var a=r(49231),o=r(63178);const n=({size:e="medium",variant:t="default",className:r,...n})=>a.createElement("div",{className:(0,o.W)("gds-branded-loader-container",`gds-branded-loader-container-size-${e.toLowerCase()}`,r),...n},a.createElement("svg",{viewBox:"0 0 128 128",fill:`var(--color-icon-base-${t})`,xmlns:"http://www.w3.org/2000/svg"},a.createElement("path",{className:"gds-branded-loader-bobble gds-branded-loader-top-left",d:"M59.7334 38.4C59.7334 26.6179 50.1821 17.0667 38.4001 17.0667C26.618 17.0667 17.0667 26.6179 17.0667 38.4C17.0667 50.1821 26.618 59.7333 38.4001 59.7333H59.7334V38.4Z"}),a.createElement("path",{className:"gds-branded-loader-bobble gds-branded-loader-bottom-left",d:"M59.7334 98.1333C59.7334 114.628 46.3616 128 29.8667 128C13.3718 128 6.48499e-05 114.628 6.48499e-05 98.1333C6.48499e-05 81.6384 13.3718 68.2667 29.8667 68.2667H59.7334V98.1333Z"}),a.createElement("path",{className:"gds-branded-loader-bobble gds-branded-loader-top-right",d:"M68.2666 29.8667C68.2666 13.3718 81.6384 0 98.1333 0C114.628 0 128 13.3718 128 29.8667C128 46.3616 114.628 59.7333 98.1333 59.7333H68.2666V29.8667Z"}),a.createElement("path",{className:"gds-branded-loader-bobble gds-branded-loader-bottom-right",d:"M68.2666 89.6C68.2666 101.382 77.8179 110.933 89.5999 110.933C101.382 110.933 110.933 101.382 110.933 89.6C110.933 77.8179 101.382 68.2667 89.5999 68.2667H68.2666V89.6Z"})))},52955:(e,t,r)=>{r.d(t,{V:()=>n});var a=r(49231),o=r(63178);const n=({size:e="medium",variant:t="default",className:r,...n})=>a.createElement("div",{className:(0,o.W)("gds-circular-loader-container",`gds-circular-loader-container-size-${e.toLowerCase()}`,r),...n},a.createElement("svg",{viewBox:"25 25 50 50",width:"100%","aria-hidden":"true"},a.createElement("circle",{className:(0,o.W)("gds-circular-loader",`gds-circular-loader-${e.toLowerCase()}`,`gds-circular-loader-variant-${t.toLowerCase()}`),cx:"50",cy:"50",r:"20",fill:"none",strokeMiterlimit:"1"})))},90382:(e,t,r)=>{r.d(t,{a:()=>i});var a=r(49231),o=r(52955),n=r(79863),l=r(50078),s=r(78426);const i=(0,n.o)((({accessibilityLabel:e="Loading",shouldFocus:t=!1,onLoaded:r,children:o,...n})=>{const l=a.useRef(null);return(0,a.useEffect)((()=>{var e;return t&&(null==(e=l.current)||e.focus()),()=>{null==r||r(),s.E.clear("polite")}}),[]),(0,a.useEffect)((()=>{e&&s.E.announce(e,"polite")}),[e,s.E]),a.createElement("div",{ref:l,role:"progressbar","aria-label":e,"aria-valuetext":"In progress",...n},o)}),"Loader",{Circular:o.V,Branded:l.W})},54763:(e,t,r)=>{function a(e){if(void 0!==e)return"light-green"===e?"var(--light-green)":"yellow-green"===e?"var(--yellow-green)":/-\d\d?\d?$/.test(e)||"white"===e?`var(--${e})`:`var(--color-${e})`}r.d(t,{y:()=>a})},41226:(e,t,r)=>{r.d(t,{a:()=>n,f:()=>l});var a=r(54763),o=r(73255);function n(e){const{bgColor:t,borderColor:r,borderRadius:a,color:o,margin:n,marginLeft:l,marginRight:s,marginTop:i,marginBottom:d,padding:c,paddingLeft:m,paddingRight:g,paddingTop:p,paddingBottom:f,width:u,height:E,...h}=e;return{utility:{bgColor:t,borderColor:r,borderRadius:a,color:o,margin:n,marginLeft:l,marginRight:s,marginTop:i,marginBottom:d,padding:c,paddingLeft:m,paddingRight:g,paddingTop:p,paddingBottom:f,width:u,height:E},other:h}}function l(e){const{bgColor:t,borderColor:r,borderRadius:n,color:l,margin:s,marginLeft:i,marginRight:d,marginTop:c,marginBottom:m,padding:g,paddingLeft:p,paddingRight:f,paddingTop:u,paddingBottom:E,width:h,height:C}=e;return{backgroundColor:(0,a.y)(t),border:void 0!==r?`1px solid var(--color-border-${r})`:void 0,borderRadius:void 0!==n?`var(--radius-${(0,o.Jy)(n)})`:void 0,color:void 0!==l?`var(--color-text-${l})`:void 0,width:"number"==typeof h?`${h}px`:h,height:"number"==typeof C?`${C}px`:C,...(0,o.AA)({margin:s,marginLeft:i,marginRight:d,marginTop:c,marginBottom:m}),...(0,o.VI)({padding:g,paddingLeft:p,paddingRight:f,paddingTop:u,paddingBottom:E})}}},93171:(e,t,r)=>{r.d(t,{E:()=>o});var a=r(49231);const o=(0,r(78021).I)("nocolor",(({title:e,titleId:t,desc:r,descId:o,...n})=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",viewBox:"0 0 24 24","aria-hidden":"true","data-icon":"EmojiUrgent",stroke:"transparent","aria-labelledby":t,"aria-describedby":o,...n},r?a.createElement("desc",{id:o},r):null,e?a.createElement("title",{id:t},e):null,a.createElement("g",{clipPath:"url(#rgenta)"},a.createElement("path",{fill:"#6E8189",d:"M12.625 4.188h-1.25v1.875h1.25z"}),a.createElement("path",{fill:"url(#rgentb)",d:"M12.938 4.813h-1.876v-.884c0-.489 1.876-.489 1.876 0z"}),a.createElement("path",{fill:"#99A8AE",d:"m19.688 3.448-5.191 5.194.866.866 5.19-5.195c.576-.577-.288-1.443-.866-.865M3.447 4.312l5.194 5.19.866-.864-5.194-5.19c-.578-.577-1.443.288-.866.864"}),a.createElement("path",{fill:"url(#rgentc)",d:"m5.063 20.177 2.188-3.788 1.624.937-2.187 3.789c-.417.722-2.041-.216-1.625-.938"}),a.createElement("path",{fill:"url(#rgentd)",d:"m17.313 21.115-2.188-3.789 1.623-.937 2.188 3.789c.417.722-1.207 1.66-1.623.937"}),a.createElement("path",{fill:"url(#rgente)",d:"M12 21.375a8.125 8.125 0 1 0 0-16.25 8.125 8.125 0 0 0 0 16.25"}),a.createElement("path",{fill:"#302C3B",d:"M12 20.125a6.875 6.875 0 1 0 0-13.75 6.875 6.875 0 0 0 0 13.75"}),a.createElement("path",{fill:"#99A8AE",d:"M12 19.813a6.562 6.562 0 1 0 0-13.125 6.562 6.562 0 0 0 0 13.125"}),a.createElement("path",{fill:"url(#rgentf)",d:"M12 19.5A6.25 6.25 0 1 0 12 7a6.25 6.25 0 0 0 0 12.5"}),a.createElement("path",{fill:"#302C3B",d:"M9.006 17.715a.36.36 0 0 1 .495-.137c.172.1.23.321.13.497a.364.364 0 0 1-.496.137.363.363 0 0 1-.129-.497M14.864 8.29a.36.36 0 0 0-.495.135.363.363 0 0 0 .13.496c.172.1.393.039.494-.136a.363.363 0 0 0-.13-.496M7.671 15.748a.363.363 0 0 0-.497-.128.363.363 0 0 0-.137.495c.099.172.322.23.497.129a.363.363 0 0 0 .137-.496M16.464 10.257a.363.363 0 0 1 .497.128c.1.173.039.394-.136.496a.364.364 0 0 1-.497-.13.363.363 0 0 1 .136-.494M6.636 13.61a.363.363 0 0 0 .366-.36.363.363 0 0 0-.366-.36.363.363 0 0 0-.365.36c0 .199.163.36.365.36M17.364 13.61a.363.363 0 0 0 .365-.36.363.363 0 0 0-.365-.36.363.363 0 0 0-.366.36c0 .199.164.36.366.36M7.672 10.752a.363.363 0 0 0-.137-.495.363.363 0 0 0-.498.129.363.363 0 0 0 .138.495.363.363 0 0 0 .497-.129M16.825 15.62c.175.1.235.323.136.495a.36.36 0 0 1-.497.129.363.363 0 0 1-.136-.495c.099-.172.322-.23.497-.129M9.501 8.922c.173-.1.23-.322.13-.497a.363.363 0 0 0-.496-.137.363.363 0 0 0-.129.498.363.363 0 0 0 .495.136M14.993 17.715a.36.36 0 0 1-.129.496.364.364 0 0 1-.495-.136.363.363 0 0 1 .13-.497.36.36 0 0 1 .494.137M12 8.253c.199 0 .36-.164.36-.367A.363.363 0 0 0 12 7.52a.363.363 0 0 0-.36.366c0 .203.16.367.36.367M12 18.98c.199 0 .36-.164.36-.366a.363.363 0 0 0-.36-.366.363.363 0 0 0-.36.366c0 .202.16.365.36.365"}),a.createElement("path",{fill:"#1A1626",d:"m16.835 11-.469-.813L12 12.709l-3.283-1.896-.47.81 2.816 1.626h1.874z"}),a.createElement("path",{fill:"#1A1626",d:"M12 14.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5"}),a.createElement("path",{fill:"#6E8189",d:"M12 14.188a.937.937 0 1 0 0-1.875.937.937 0 0 0 0 1.874"}),a.createElement("path",{fill:"url(#rgentg)",d:"M15.16 3.736c-.506.507 4.597 5.61 5.104 5.104 3.382-3.382-1.722-8.486-5.104-5.104"}),a.createElement("path",{fill:"url(#rgenth)",d:"M8.84 3.736C5.458.355.354 5.458 3.736 8.84c.507.506 5.61-4.598 5.104-5.104"})),a.createElement("defs",null,a.createElement("radialGradient",{id:"rgentb",cx:0,cy:0,r:1,gradientTransform:"matrix(.79672 0 0 .79672 12 4.188)",gradientUnits:"userSpaceOnUse"},a.createElement("stop",{stopColor:"#E6EBED"}),a.createElement("stop",{offset:1,stopColor:"#CFD8DD"})),a.createElement("radialGradient",{id:"rgente",cx:0,cy:0,r:1,gradientTransform:"translate(12 13.25)scale(8.125)",gradientUnits:"userSpaceOnUse"},a.createElement("stop",{offset:.515,stopColor:"#FF000E"}),a.createElement("stop",{offset:.658,stopColor:"#FB000D"}),a.createElement("stop",{offset:.795,stopColor:"#F0000A"}),a.createElement("stop",{offset:.929,stopColor:"#DC0004"}),a.createElement("stop",{offset:1,stopColor:"#CF0000"})),a.createElement("radialGradient",{id:"rgentf",cx:0,cy:0,r:1,gradientTransform:"translate(12 13.25)scale(6.25)",gradientUnits:"userSpaceOnUse"},a.createElement("stop",{stopColor:"#fff"}),a.createElement("stop",{offset:.396,stopColor:"#FBFBFC"}),a.createElement("stop",{offset:.823,stopColor:"#EEF1F4"}),a.createElement("stop",{offset:1,stopColor:"#E6EBEF"})),a.createElement("radialGradient",{id:"rgentg",cx:0,cy:0,r:1,gradientTransform:"translate(17.547 4.93)scale(3.125)",gradientUnits:"userSpaceOnUse"},a.createElement("stop",{stopColor:"#E6EBED"}),a.createElement("stop",{offset:.416,stopColor:"#E2E8EA"}),a.createElement("stop",{offset:.84,stopColor:"#D6DEE2"}),a.createElement("stop",{offset:1,stopColor:"#CFD8DD"})),a.createElement("radialGradient",{id:"rgenth",cx:0,cy:0,r:1,gradientTransform:"translate(4.11 4.656)scale(3.56462)",gradientUnits:"userSpaceOnUse"},a.createElement("stop",{stopColor:"#E6EBED"}),a.createElement("stop",{offset:.416,stopColor:"#E2E8EA"}),a.createElement("stop",{offset:.84,stopColor:"#D6DEE2"}),a.createElement("stop",{offset:1,stopColor:"#CFD8DD"})),a.createElement("linearGradient",{id:"rgentc",x1:6.001,x2:7.625,y1:18.553,y2:19.491,gradientUnits:"userSpaceOnUse"},a.createElement("stop",{stopColor:"#CFD8DD"}),a.createElement("stop",{offset:.18,stopColor:"#CAD3D8"}),a.createElement("stop",{offset:.405,stopColor:"#BAC3C8"}),a.createElement("stop",{offset:.653,stopColor:"#A1AAAF"}),a.createElement("stop",{offset:.916,stopColor:"#7E888D"}),a.createElement("stop",{offset:1,stopColor:"#717B80"})),a.createElement("linearGradient",{id:"rgentd",x1:16.375,x2:17.999,y1:19.491,y2:18.554,gradientUnits:"userSpaceOnUse"},a.createElement("stop",{stopColor:"#CFD8DD"}),a.createElement("stop",{offset:.18,stopColor:"#CAD3D8"}),a.createElement("stop",{offset:.405,stopColor:"#BAC3C8"}),a.createElement("stop",{offset:.653,stopColor:"#A1AAAF"}),a.createElement("stop",{offset:.916,stopColor:"#7E888D"}),a.createElement("stop",{offset:1,stopColor:"#717B80"})),a.createElement("clipPath",{id:"rgenta"},a.createElement("path",{fill:"#fff",d:"M2 2h20v20H2z"}))))))},66682:(e,t,r)=>{r.d(t,{N:()=>o});var a=r(49231);const o=(0,r(78021).I)("color",(({title:e,titleId:t,desc:r,descId:o,...n})=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",viewBox:"0 0 16 16","aria-hidden":"true","data-icon":"InterfaceLock",stroke:"transparent","aria-labelledby":t,"aria-describedby":o,...n},r?a.createElement("desc",{id:o},r):null,e?a.createElement("title",{id:t},e):null,a.createElement("path",{stroke:"#646B81",strokeLinejoin:"round",d:"M5.727 6.615H3V14h10V6.615h-2.727m-4.546 0V4.273a2.273 2.273 0 1 1 4.545 0v2.342m-4.545 0h4.546"}))))}}]);