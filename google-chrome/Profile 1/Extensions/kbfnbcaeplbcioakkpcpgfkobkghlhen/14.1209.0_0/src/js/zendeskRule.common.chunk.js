(self.webpackChunk=self.webpackChunk||[]).push([[2970],{9139:(e,n,t)=>{t.r(n),t.d(n,{Zendesk:()=>z,zendeskTransformBeforeApply:()=>C});var i=t(20715),a=t(99213),r=t(72925),s=t(55901),o=t(68599),l=t(24432),d=t(56934),c=t(53253),p=t(60167),m=t(92865),u=t(52073),k=t(90522),f=t(31879),g=t(50293),w=t(50985),E=t(88900),v=t(5056),b=t(21768),h=t(18820);const y=e=>v.RI.isDelta(e)?v.RI.delta(R(e.delta),e.prevLen):e,R=e=>new b.i(e.map(T)),T=e=>h.s.isInsertString(e)&&Z(e)?{...e,attributes:{...e.attributes,zendeskMacro:!0}}:e,Z=({insert:e})=>e.split("\n").length>5;var z;function A(e){const n=(0,s.wr)(e,(e=>e.className.includes("ticket section")))||e;return(0,a.z)(n)}function C(e){return!(0,g.E)().experimentClient.isGateEnabled(k.K.ZendeskTransformReplacementOnlyForString)||(0,f.HD)(e.value)?l.T.transformReplacementNotToTrimSpaces(e):e}!function(e){const n=o.T.contentEditable("Zendesk.editor",(e=>({integrationName:"Zendesk Editor",extraCondition:e=>e.field.classList.contains("editor"),createLayout:n=>new r.A(n,{innerElementsField:e.field.closest(".zendesk-editor--rich-text-container")||e.field,createGbuttonShiftBehavior:e=>(0,i.of)({top:-40,left:-10}),scroller:A(n),pretendFieldPositioned:!0})}))),t=d.O$.generic((e=>({genericOpts:{integrationName:"Zendesk Reply (slatejs)",validationRules:[...c.u,(0,p.jw)(25)],createLayout:e=>new r.A(e,{innerElementsField:e.closest(".zendesk-editor--rich-text-container")||e,minimizeEnabled:!1,pretendFieldPositioned:!0})}}))),a=o.T.textarea("Zendesk.chat",(()=>({validationRules:[...c.u,(0,p.jw)(25)],createLayout:e=>new r.A(e,{innerElementsField:e.closest("[name='message']")||e,minimizeEnabled:!1})}))),s=l.T.generic((e=>({integrationName:"Zendesk Agent Chat",validationRules:[...c.u,(0,p.jw)(25)],genericOpts:{mapChange:y},transformReplacementBeforeApply:C,deletionEvent:(0,w.Xw)()?"beforeinput":"keydown"})));e.page=(0,E.$W)({domain:u.Qk,name:"zendesk",eventPropagationHandler:e=>{(0,g.E)().experimentClient.isGateEnabled(k.K.CentralizeStopEventPropagation)||e.addEventListener("keydown",(e=>{e.stopPropagation()}))}},[n,a,s,t,o.T.contentEditable("Zendesk",(()=>({createLayout:e=>new r.A(e)}))),o.T.iframe("Zendesk"),o.T.textarea("Zendesk",(()=>({createLayout:e=>new r.A(e),validationRules:c.u}))),m.k.iframeHostRule])}(z||(z={}))}}]);