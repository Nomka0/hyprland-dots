(self.webpackChunk=self.webpackChunk||[]).push([[5275],{35238:(e,t,n)=>{n.d(t,{G:()=>o});var i=n(58303),r=n(25770),s=n(9243);class o extends s.J{constructor(){super(),this._popoverActionsHandler=r.h.create(i.YP)}setPopoverActionsHandler(e){this._popoverActionsHandler.set(i.G(e))}get popoverActionsHandlerAtom(){return this._popoverActionsHandler}dispose(){this._popoverActionsHandler.set(i.YP)}}},47004:(e,t,n)=>{n.d(t,{z:()=>s});var i=n(58303),r=n(25770);class s{constructor(){this.activePopoverStack=r.h.create(i.YP),this.activePopoverView=r.h.create(i.YP),this._popoverActionsHandler=r.h.create(i.YP)}addPopover(e,t){}getInteractionActions(e,t,n){return[]}removePopover(e,t){}switchView(e){}get popoverActionsHandlerAtom(){return this._popoverActionsHandler}setPopoverActionsHandler(e){}dispose(){}}},70536:(e,t,n)=>{n.d(t,{U:()=>F});var i=n(53186),r=n(90023),s=n(88e3),o=n(36072),a=n(55402),c=n(70989),d=n(65647),l=n(14765),u=n(17888),p=n(58303),h=n(98427),v=n(52256),f=n(68259),g=n(59833),m=n(21147),A=n(25770),I=n(51118),w=n(73251),b=n(46325),y=n(8748),C=n(12518),S=n(17071);class _{constructor(){this.feed=y.E,this.currentFeed=p.YP,this.onFeedRemove=y.E,this.onFeedEmpty=y.E,this.header=y.E,this.footer=y.E,this.pushFeed=()=>C.right(null),this.popFeed=S.Q1,this.focusCard=()=>C.right(null),this.notifyCardFocused=S.Q1,this.dispose=S.Q1}}var P,G=n(31273),M=n(95940),U=n(42760),E=n(76671),k=n(27943),x=n(48856);class F{constructor(e,t,n,i,h,v,f){this.sduiManager=e,this.sduiFeedbackService=t,this.environment=n,this.capiClient=i,this.integrationModel=h,this.getGrammarlyGoAssistantMode=v,this.onReplacement=f,this._focusedItem=A.h.create(p.YP),this._sduiInlineCardActions=new o.xQ,this._subs=new a.w.Keeper,this.focusCard=e=>{this._focusedItem.set(p.G(e))},this.handleSduiCardAction=(e,t,n)=>{this._sduiInlineCardActions.next({cardAction:e,cardModel:t,match:n})},this.handleGButtonPopoverAction=e=>{this._sduiViewModel.sduiActionEvents.next(e),(0,r.zG)(F.getSduiFeedActions(e.actions),p.UI((t=>this.integrationModel.openAssistant({type:x.WT.sdui,action:{...e,actions:t,type:s.lY.Type.sduiCardAction}}))))},this.dispose=()=>this._subs.dispose(),this._sduiViewModel=new I.x(t,e,new _,i,this._focusedItem.view(p.UI((e=>e.id))));const g=this._sduiViewModel.sduiActionEvents.pipe(c.M(this._sduiInlineCardActions.pipe(d.U(p.G),l.O(p.YP)))).subscribe((([e,t])=>this._nativeHandling(e,(0,r.zG)(t,p.UI((e=>e.match))),(0,r.zG)(t,p.UI((e=>e.cardModel)))))),m=this._sduiInlineCardActions.pipe(u.skipBy(P.eq)).subscribe((({cardAction:e})=>this._sduiViewModel.sduiActionEvents.next(e)));this._subs.push(g,m,this._sduiViewModel)}_nativeHandling({actions:e,cardId:t,sourceId:n,scope:i},s,o){(0,r.zG)(F.getSduiFeedActions(e),p.UI((e=>{(0,r.zG)(o,p.UI((r=>{r.onOpenExpandedViewBySduiAction(G.Oe.create(e,t,n,i))})))}))),e.forEach((e=>{switch(e.type){case"nextCard":case"prevCard":case"openSettings":case"openToneDetector":case"openFeedback":case"openLearnMore":case"transition":case"openCreateSnippetModal":case"nativeOpenAssistant":case"selectAlternative":case"highlightAlert":case"openPerformanceScore":case"nativeOpenUserSatisfactionFeedback":case"enablePlagiarismCheck":case"disablePlagiarismCheck":case"showHighlights":case"hideHighlights":case"notify":case"switchView":case"newRevision":case"interactPopover":case"enableWritingExpertCheck":case"disableWritingExpertCheck":case"pushAssistantFeed":case"popAssistantFeed":case"focusAssistantCard":return;case"closePopover":return void this.integrationModel.closePopover(e.rootPopoverId);case"openLink":return void this.environment.actions.openPopup(new h.Z(e.url));case"copyToClipboard":return void(0,k.vQ)(e.text);case"stopApplyingAlerts":case"upgradeToPremium":return(0,r.zG)(o,p.UI((e=>e.openPlanComparisonPage({utmCampaign:M.L.Place.assistantCardList})))),void(0,r.zG)(s,p.UI((e=>e.hide())));case"applyAlerts":return void(0,r.zG)(s,p.UI((n=>{if(null==n.alert)return;const{alert:i}=n;(0,r.zG)((0,U.UQ)(i,n.plainText),(t=>new E.U_(t,(t=>n.replace(null!=t?t:"",!1,e.alternativeIndex)))),(n=>(0,r.zG)(p.ij(n.replacements[e.alternativeIndex]),p.UI((e=>n.getOnReplace(e)())),v.bw((()=>{var e;null===(e=this.onReplacement)||void 0===e||e.call(this,t,i.group,i.category)}))))),n.hide()})));case"closeCard":case"removeRoot":return void(0,r.zG)(s,p.UI((e=>e.hide())));case"removeAlerts":return void(0,r.zG)(s,p.UI((e=>{e.ignore(),e.hide()})));case"openGrammarlyGo":return void(0,r.zG)(p.RD([o,s]),p.UI((([e,t])=>{var n,i;const r=(t,n)=>{const i=this.getGrammarlyGoAssistantMode();e.onOpenGrammarlyGo({assistantMode:i,genAIParams:t,source:n})};if(t.alert&&(0,b.t)(t.alert.patternName)){const e=(0,U.UQ)(t.alert,t.plainText);if(e.length>0&&e[0].newText){const n=e[0].newText;r({genAISessionMode:"pushRewrite",writingExpertContext:{alertId:t.alert.id,alertPname:t.alert.patternName,originalText:t.alert.text,replacementText:n},transformRange:t.alert.transformRange},{kind:"inlinePushRewriteSource"})}else r({genAISessionMode:"ideation"},{kind:"inlinePushRewriteSource"})}else r({genAISessionMode:"ideation"},{kind:"inlineCardSource",alertId:null!==(i=null===(n=t.alert)||void 0===n?void 0:n.id)&&void 0!==i?i:null})})));default:(0,f.L0)(e)}}))}}F.getSduiFeedActions=(0,r.ls)(g.hX((e=>"popAssistantFeed"===e.type||"pushAssistantFeed"===e.type||"focusAssistantCard"===e.type)),i.nI),function(e){e.eq=m.MW({cardAction:w.t.eq})}(P||(P={}))},53530:(e,t,n)=>{n.r(t),n.d(t,{createSduiInlineEngine:()=>k,default:()=>x});var i=n(90023),r=n(88570),s=n(55402),o=n(55446),a=n(65647),c=n(58303),d=n(52906),l=n(33192),u=n(73170),p=n(82695),h=n(58838),v=n(19813),f=n(43034),g=n(25583),m=n(14765),A=n(96030),I=n(64826);function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function b(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function C(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var i,r,s=[],o=!0,a=!1;try{for(n=n.call(e);!(o=(i=n.next()).done)&&(s.push(i.value),!t||s.length!==t);o=!0);}catch(e){a=!0,r=e}finally{try{o||null==n.return||n.return()}finally{if(a)throw r}}return s}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return w(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return w(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var S=function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),y(this,"_state",new Map),y(this,"_subs",new s.w.Keeper),y(this,"_log",v.C8.Logging.getLogger("SDUIInlineManager",v.zW.i.TRACE,v.zW.T.Manager.getColor())),this._subs.push(t.pipe(m.O(I.a.empty),A.G(),a.U((function(e){var t=C(e,2),n=t[0],i=t[1];return I.a.diff(n,i)})),a.U((function(e){return n._processSDUIItems(e)}))).subscribe())}var t,n,r;return t=e,(n=[{key:"getInlineItemForAlert",value:function(e){return c.ij(this._state.get(e))}},{key:"_processSDUIItems",value:function(e){var t=this;(0,i.zG)(e,g.v.forEach((function(e){_(e)&&(t._log.trace("inline item removed",{alertIds:e.alertIds,itemId:e.id}),e.alertIds.forEach((function(e){return t._state.delete(e)})))}),(function(e,n){_(n)&&(t._log.trace("inline item updated",{alertIds:n.alertIds,itemId:n.id}),n.alertIds.forEach((function(e){return t._state.set(e,n)})))}),(function(e){_(e)&&(t._log.trace("inline item added",{alertIds:e.alertIds,itemId:e.id}),e.alertIds.forEach((function(n){return t._state.set(n,e)})))})))}},{key:"dispose",value:function(){this._subs.dispose()}}])&&b(t.prototype,n),r&&b(t,r),e}(),_=function(e){return(0,i.zG)(f.ab.findFirst(e.content,"inlineCard"),c.pC)},P=n(21578),G=n(70536),M=n(31273),U=n(35238),E=n(47004);const k=({sduiBufferService:e,alertState:t,getByRawAlertId:n,sendUserAction:v,environment:f,capiClient:g,integrationModel:m,getGrammarlyGoAssistantMode:A,onReplacement:I,sduiPopoversSupported:w=!1,disposePopoverManager:b=!1})=>{const y=new s.w.Keeper,C=(0,i.ls)((e=>e.toString()),n,c.ij,c.UI((e=>d.j.AlertId.from(e.id)))),_=e.capiEvents.pipe(o.h(r.hX.is("sdui_add","sdui_remove","sdui_update")),o.h((e=>"sdui_remove"===e.kind||M.D1.InlineCard.isInlineCard(e.sdui)||M.D1.StrongAlertRef.isStrongAlertRefUpgradeHookContent(e.sdui)||M.D1.GButton.isGButtonContent(e.sdui)||M.D1.PopoverStack.isPopoverStack(e.sdui)||l.vK.isGlobalPart(e.sdui))),o.h(u.e.isSduiEvent),a.U(p.al.fromSource(p.i5.CAPI))),k=w?new U.G:new E.z,x=new h.G(_,C,k),F=new S(x.state),z=new P.Q({sendUserAction:v}),R=new G.U(x,z,f,g,m,A,I);return k.setPopoverActionsHandler(R),y.push(t.subscribe((e=>x.notifyAlertsChanged())),e.capiEvents.pipe(o.h(r.hX.is("session_started")),o.h((e=>e.isNewSession))).subscribe((e=>x.onSessionStarted())),e.capiEvents.pipe(o.h(r.hX.is("finish")),o.h((e=>0===e.revision))).subscribe((e=>x.onFirstCheckingFinished())),x,F,R),{sduiBufferService:e,sduiManager:x,sduiInlineManager:F,sduiFeedbackService:z,inlineCardViewModel:R,dispose:()=>{y.dispose(),b&&k.dispose()}}},x={createSduiInlineEngine:k}},27943:(e,t,n)=>{n.d(t,{Sz:()=>s,vQ:()=>r});var i=n(12518);async function r(e,t=self){if(function(e=self){var t,n;return!!(null===(n=null===(t=e.navigator)||void 0===t?void 0:t.clipboard)||void 0===n?void 0:n.writeText)}(t))return t.navigator.clipboard.writeText(e);throw new Error("Clipboard API not supported")}function s(e,t=self){return r(e,t).then((()=>i.right(void 0))).catch((e=>i.left(e instanceof Error?e:new Error(String(e)))))}}}]);