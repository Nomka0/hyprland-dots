(self.webpackChunk=self.webpackChunk||[]).push([[637],{35238:(e,t,i)=>{i.d(t,{G:()=>r});var s=i(58303),n=i(25770),o=i(9243);class r extends o.J{constructor(){super(),this._popoverActionsHandler=n.h.create(s.YP)}setPopoverActionsHandler(e){this._popoverActionsHandler.set(s.G(e))}get popoverActionsHandlerAtom(){return this._popoverActionsHandler}dispose(){this._popoverActionsHandler.set(s.YP)}}},47004:(e,t,i)=>{i.d(t,{z:()=>o});var s=i(58303),n=i(25770);class o{constructor(){this.activePopoverStack=n.h.create(s.YP),this.activePopoverView=n.h.create(s.YP),this._popoverActionsHandler=n.h.create(s.YP)}addPopover(e,t){}getInteractionActions(e,t,i){return[]}removePopover(e,t){}switchView(e){}get popoverActionsHandlerAtom(){return this._popoverActionsHandler}setPopoverActionsHandler(e){}dispose(){}}},21421:(e,t,i)=>{i.r(t),i.d(t,{createSduiBasicEngine:()=>w,default:()=>f});var s=i(90023),n=i(88570),o=i(61447),r=i(55402),a=i(55446),d=i(65647),c=i(58303),p=i(52906),l=i(73170),u=i(82695),h=i(58838),v=i(21578),A=i(70536),g=i(35238),m=i(47004);const w=({sduiBufferService:e,alertState:t,getByRawAlertId:i,sendUserAction:w,environment:f,capiClient:I,getGrammarlyGoAssistantMode:P,onReplacement:C,sduiPopoversSupported:S=!1})=>{const G=new r.w.Keeper,_=(0,s.ls)((e=>e.toString()),i,c.ij,c.UI((e=>p.j.AlertId.from(e.id)))),b=e.capiEvents.pipe(a.h(n.hX.is("sdui_add","sdui_remove","sdui_update")),a.h(l.e.isSduiEvent),d.U(u.al.fromSource(u.i5.CAPI))),E=S?new g.G:new m.z,x=new h.G(b,_,E),y=new v.Q({sendUserAction:w}),M=new A.U(x,y,f,I,{openAssistant(e){throw new Error("Method is not implemented")},closePopover:t=>e.pushCapiSduiEvent({kind:"sdui_remove",sduiRootId:o.t_.Id.create(t)})},P,C);return E.setPopoverActionsHandler(M),G.push(t.subscribe((e=>x.notifyAlertsChanged())),e.capiEvents.pipe(a.h(n.hX.is("session_started")),a.h((e=>e.isNewSession))).subscribe((e=>x.onSessionStarted())),e.capiEvents.pipe(a.h(n.hX.is("finish")),a.h((e=>0===e.revision))).subscribe((e=>x.onFirstCheckingFinished())),x),{sduiBufferService:e,sduiManager:x,sduiFeedbackService:y,dispose:()=>{G.dispose()}}},f={createSduiBasicEngine:w}},70536:(e,t,i)=>{i.d(t,{U:()=>F});var s=i(53186),n=i(90023),o=i(88e3),r=i(36072),a=i(55402),d=i(70989),c=i(65647),p=i(14765),l=i(17888),u=i(58303),h=i(98427),v=i(52256),A=i(68259),g=i(59833),m=i(21147),w=i(25770),f=i(51118),I=i(73251),P=i(46325),C=i(8748),S=i(12518),G=i(17071);class _{constructor(){this.feed=C.E,this.currentFeed=u.YP,this.onFeedRemove=C.E,this.onFeedEmpty=C.E,this.header=C.E,this.footer=C.E,this.pushFeed=()=>S.right(null),this.popFeed=G.Q1,this.focusCard=()=>S.right(null),this.notifyCardFocused=G.Q1,this.dispose=G.Q1}}var b,E=i(31273),x=i(95940),y=i(42760),M=i(76671),U=i(27943),k=i(48856);class F{constructor(e,t,i,s,h,v,A){this.sduiManager=e,this.sduiFeedbackService=t,this.environment=i,this.capiClient=s,this.integrationModel=h,this.getGrammarlyGoAssistantMode=v,this.onReplacement=A,this._focusedItem=w.h.create(u.YP),this._sduiInlineCardActions=new r.xQ,this._subs=new a.w.Keeper,this.focusCard=e=>{this._focusedItem.set(u.G(e))},this.handleSduiCardAction=(e,t,i)=>{this._sduiInlineCardActions.next({cardAction:e,cardModel:t,match:i})},this.handleGButtonPopoverAction=e=>{this._sduiViewModel.sduiActionEvents.next(e),(0,n.zG)(F.getSduiFeedActions(e.actions),u.UI((t=>this.integrationModel.openAssistant({type:k.WT.sdui,action:{...e,actions:t,type:o.lY.Type.sduiCardAction}}))))},this.dispose=()=>this._subs.dispose(),this._sduiViewModel=new f.x(t,e,new _,s,this._focusedItem.view(u.UI((e=>e.id))));const g=this._sduiViewModel.sduiActionEvents.pipe(d.M(this._sduiInlineCardActions.pipe(c.U(u.G),p.O(u.YP)))).subscribe((([e,t])=>this._nativeHandling(e,(0,n.zG)(t,u.UI((e=>e.match))),(0,n.zG)(t,u.UI((e=>e.cardModel)))))),m=this._sduiInlineCardActions.pipe(l.skipBy(b.eq)).subscribe((({cardAction:e})=>this._sduiViewModel.sduiActionEvents.next(e)));this._subs.push(g,m,this._sduiViewModel)}_nativeHandling({actions:e,cardId:t,sourceId:i,scope:s},o,r){(0,n.zG)(F.getSduiFeedActions(e),u.UI((e=>{(0,n.zG)(r,u.UI((n=>{n.onOpenExpandedViewBySduiAction(E.Oe.create(e,t,i,s))})))}))),e.forEach((e=>{switch(e.type){case"nextCard":case"prevCard":case"openSettings":case"openToneDetector":case"openFeedback":case"openLearnMore":case"transition":case"openCreateSnippetModal":case"nativeOpenAssistant":case"selectAlternative":case"highlightAlert":case"openPerformanceScore":case"nativeOpenUserSatisfactionFeedback":case"enablePlagiarismCheck":case"disablePlagiarismCheck":case"showHighlights":case"hideHighlights":case"notify":case"switchView":case"newRevision":case"interactPopover":case"enableWritingExpertCheck":case"disableWritingExpertCheck":case"pushAssistantFeed":case"popAssistantFeed":case"focusAssistantCard":return;case"closePopover":return void this.integrationModel.closePopover(e.rootPopoverId);case"openLink":return void this.environment.actions.openPopup(new h.Z(e.url));case"copyToClipboard":return void(0,U.vQ)(e.text);case"stopApplyingAlerts":case"upgradeToPremium":return(0,n.zG)(r,u.UI((e=>e.openPlanComparisonPage({utmCampaign:x.L.Place.assistantCardList})))),void(0,n.zG)(o,u.UI((e=>e.hide())));case"applyAlerts":return void(0,n.zG)(o,u.UI((i=>{if(null==i.alert)return;const{alert:s}=i;(0,n.zG)((0,y.UQ)(s,i.plainText),(t=>new M.U_(t,(t=>i.replace(null!=t?t:"",!1,e.alternativeIndex)))),(i=>(0,n.zG)(u.ij(i.replacements[e.alternativeIndex]),u.UI((e=>i.getOnReplace(e)())),v.bw((()=>{var e;null===(e=this.onReplacement)||void 0===e||e.call(this,t,s.group,s.category)}))))),i.hide()})));case"closeCard":case"removeRoot":return void(0,n.zG)(o,u.UI((e=>e.hide())));case"removeAlerts":return void(0,n.zG)(o,u.UI((e=>{e.ignore(),e.hide()})));case"openGrammarlyGo":return void(0,n.zG)(u.RD([r,o]),u.UI((([e,t])=>{var i,s;const n=(t,i)=>{const s=this.getGrammarlyGoAssistantMode();e.onOpenGrammarlyGo({assistantMode:s,genAIParams:t,source:i})};if(t.alert&&(0,P.t)(t.alert.patternName)){const e=(0,y.UQ)(t.alert,t.plainText);if(e.length>0&&e[0].newText){const i=e[0].newText;n({genAISessionMode:"pushRewrite",writingExpertContext:{alertId:t.alert.id,alertPname:t.alert.patternName,originalText:t.alert.text,replacementText:i},transformRange:t.alert.transformRange},{kind:"inlinePushRewriteSource"})}else n({genAISessionMode:"ideation"},{kind:"inlinePushRewriteSource"})}else n({genAISessionMode:"ideation"},{kind:"inlineCardSource",alertId:null!==(s=null===(i=t.alert)||void 0===i?void 0:i.id)&&void 0!==s?s:null})})));default:(0,A.L0)(e)}}))}}F.getSduiFeedActions=(0,n.ls)(g.hX((e=>"popAssistantFeed"===e.type||"pushAssistantFeed"===e.type||"focusAssistantCard"===e.type)),s.nI),function(e){e.eq=m.MW({cardAction:I.t.eq})}(b||(b={}))},27943:(e,t,i)=>{i.d(t,{Sz:()=>o,vQ:()=>n});var s=i(12518);async function n(e,t=self){if(function(e=self){var t,i;return!!(null===(i=null===(t=e.navigator)||void 0===t?void 0:t.clipboard)||void 0===i?void 0:i.writeText)}(t))return t.navigator.clipboard.writeText(e);throw new Error("Clipboard API not supported")}function o(e,t=self){return n(e,t).then((()=>s.right(void 0))).catch((e=>s.left(e instanceof Error?e:new Error(String(e)))))}}}]);