(self.webpackChunk=self.webpackChunk||[]).push([[1196],{54589:(e,t,i)=>{i.r(t),i.d(t,{PlagiarismViewModelImpl:()=>g,createPlagiarismEntities:()=>m,createPlagiarismViewModels:()=>pe,setupSduiManagement:()=>Ie});var a=i(95922),s=i(90023),r=i(58303),l=i(65647),n=i(3697),o=i(31273),c=i(73713),d=i(39953),u=i(52256),p=i(25770);class g{constructor(e,t){this._plagiarismViewModelsFactory=e,this._wrapNotifyPayload=t,this.isShouldShowPlagiarismButton=p.h.create(!1),this.plagiarismButtonActions=p.h.create(r.YP),this.plagiarismEngine=p.h.create(r.YP)}setShowPlagiarismButton(e){this.isShouldShowPlagiarismButton.set(e)}setPlagiarismButtonActions(e){this.plagiarismButtonActions.set(r.G(e))}setPlagiarismEngine(e){this.plagiarismEngine.set(r.G(e))}openPlagiarismPage(){const e=this._plagiarismViewModelsFactory();this.setPlagiarismEngine(e),r.pC(this.plagiarismButtonActions.get())&&(0,d.zG)(this.plagiarismButtonActions.get(),u.MH,e.handleSduiAction)}closePlagiarismPage(){(0,d.zG)(this.plagiarismEngine.get(),u.bw((e=>e.handleSduiAction(this._wrapNotifyPayload([{type:"disablePlagiarismCheck"}],"")))))}}function m(e,t,i){const d=(e,t,i,a)=>a.forEach((a=>{switch(a.type){case"notify":return void t.sduiFeedbackService.sendUserAction(a.sourceId||i.sourceId,a.userAction);case"enablePlagiarismCheck":return void e.openPlagiarism();case"closePopover":return void t.sduiManager.popoverManager.removePopover(a.rootPopoverId);case"interactPopover":switch((0,s.zG)(t.sduiManager.popoverManager.getInteractionActions(a.rootPopoverId,a.popoverViewId,a.interaction),(a=>d(e,t,i,a))),a.interaction){case n.fP.Fulfill:case n.fP.Dismiss:t.sduiManager.popoverManager.removePopover(a.rootPopoverId)}return;default:return}})),u=t=>({handleGButtonPopoverAction:i=>{r.pC(e)&&d(t,e.value,i,i.actions)}});return(0,s.zG)(e,r.g_((()=>r.YP),(e=>{const s=t({sduiEngine:e,...i});return r.G({plagiarismVM:new g((0,a.of)(s),c.Zq),plagiarismButtonSub:e.sduiManager.state.pipe(l.U((e=>o.D1.GButton.getPlagiarismContent(e)))),popover:(n=e.sduiManager,n.popoverManager.activePopoverView.view(r.tS((e=>"component"===e.anchor.kind&&"gButton:plagiarism"===e.anchor.id?r.G(e):r.YP)))),popoverActionsHandler:u,trackPlagiarismAlertsEditing:s.trackPlagiarismAlertsEditing});var n})))}var h=i(56765),v=i(54761),f=i(51279),A=i(71039),b=i(64198),I=i(35578),P=i(51054),S=i(7818),C=i(60787),w=i(66777),y=i(54995),E=i(64445),M=i(62381),k=i(19549),R=i(33081),B=i(73217),F=i(87601),U=i(16277),L=i(6864),D=i(55402),G=i(20715),z=i(73863),T=i(65802),q=i(78488),x=i(36072),H=i(8748),O=i(65882),V=i(14765),W=i(96030),j=i(6662),Q=i(31413),Y=i(70989),_=i(12518),Z=i(25583),K=i(59833),X=i(92562),N=i(43636),$=i(17071),J=i(19813),ee=i(81246),te=i(59316),ie=i(28375),ae=i(72342),se=i(44929),re=i(31081),le=i(98093),ne=i(56490),oe=i(79514),ce=i(27943),de=i(71605),ue=i(63586);const pe=({sduiEngine:e,engine:t,capiProxy:i,ded:a,showPlagiarismAlerts:n,environment:o})=>{const c=J.C8.Logging.getLogger("gDocs.PlagiarismEngine"),d=new D.w.Keeper,g=new ee._(e.sduiManager.state),m={features:new Set([C.IG.Features.showCardLabelInOutcomes]),cardLayoutDensityMode:M.j.Density.minimal,shouldAnimateAlertApply:C.IG.Default.shouldAnimateAlertApply,cardVisualMode:p.h.create(M.j.CardVisualMode.RegularLightMode)},E=(0,C.Ls)((()=>_.left({kind:"default",error:new Error("should not use hydration to render sdui cards")})),t.alertsReader,m,(()=>G.of(r.YP)),r.YP),Y=de.p.getCapabilities(E,t.alertsReader),N=(0,s.a9)(s.yR),$=e=>N,pe=b.t.create(b.t.defaultLensFilters,{...b.t.defaultTextFilters,[h.R.SpecialId.Closed]:s.jv,[h.R.SpecialId.AllAlerts]:v.bZ.belongsToAllAlerts}),he=p.h.create(f.A.defaultState),ve=new le.t(he.view("lenses"),pe,t.sessionModel.scoreStatus),fe={create:(e,t)=>R.v.WithSuccess.create(e,t,de.p.equatable.structEq,de.p.defaultOrd(Y))},Ae=B.v.createWithExternalItems(fe,Y),be=new I.F.Impl(t.alertsList.state,t.positionManager,t.alertsReader,pe.alertCanBeDisplayed),Ie=new U.oq(t.alertsList.state,t.alertsReader,he.view("lenses"),be,ve,((e,t,i,a,l)=>((e=>{(0,s.zG)(e,u.bw((e=>{d.push(g.feed.pipe(z.q(1),T.j("cards"),q.b((0,s.ls)(Z.v.filter(s.jv,s.jv,(t=>t.alertIds.includes((0,s.MZ)(e.alert.id)))),Z.v.foldMap(K.uZ())((0,s.a9)(K.cS),(0,s.a9)(K.cS),K.of),K.YM,u.bw((e=>{requestAnimationFrame((()=>{(0,s.zG)(g.focusCard(e.id),_.fold((e=>c.warn("Error on focusing SDUI item in a new lens",e)),s.Q1))}))}))))).subscribe())})))})(a),Ae(e,t,i,a,(0,s.zG)(l,r.hX((e=>h.R.isWithAlertsId(e.id))))))),$,Y,pe),Pe=p.h.create(Ie.emptyState(h.R.SpecialId.Plagiarism).patch({alertSource:v.l$.sidebar})),Se=R.v.Items.getRemoveDisposedItemsTransformer(Y),Ce=te.i.DisablePrevNextButtons.create(Y),we=R.v.Items.getItemsPositionsUpdateTransformer(Y),ye=S.Py.getDefaultBehavior(de.p.getActiveFocusableItem,Y),Ee=p.h.create(!0),Me=p.h.create(h.R.SpecialId.AllAlerts),ke=(0,S.u0)((()=>a.getCursor().index),Ie),Re=(0,S.VC)(Ie,ke,Me,Y,(()=>!1),(()=>!1)),Be=S.sR.getStateTransformer(ye,Re,Y,S.sR.getShouldAutoFocus(Ee,t.alertsReader,de.p.getActiveItemWithAlert),s.Q1,Me),Fe=(0,s.ls)(Se,X.L9(Be),X.L9(Ce),X.L9(we)),Ue=new P.Xx({flush:()=>a.flushChanges()},new x.xQ,E,t.alertsService,t.alertsReader,(()=>Promise.resolve()),(()=>Promise.resolve()),(0,s.zG)(t.mutedAlertsCategoriesModel,r.UI((e=>({model:e,openSuggestionsManagement:()=>self.open((0,oe.Um)().suggestionsSettings)})))),r.YP,s.jv,de.p.getActiveFocusableItem,Y,o,{bufferTransitions:!0,showGbPrompt:!1}),Le=new ie.q(e.sduiFeedbackService,Y,Pe,e.sduiManager,g,t.alertsReader,{...e.capiClient,...t.writingExpertClient},Ue,o),De=(0,s.zG)(S.sR.focusFirstCardAfterBigCheck(Pe,p.h.create(i.checkingState),p.h.create(!0),{bigPaste:H.E}),(e=>S.sR.getSideEffect(e,Y))),Ge=(0,ne.xl)(Pe,pe,G.of(),p.h.create(!1),p.h.create(!0)),ze=O.aj([Ge,n]).pipe(l.U((([e,t])=>t?e:s.jv))),Te=new ne.o$(t.alertsList,t.alertsReader,t.positionManager,t.alertsService,a,Pe,ze,de.p.getActiveFocusableItem,p.h.create(!1),G.of(void 0),!1),qe=new w.o((()=>_.right(void 0))),xe=(0,se.hp)(Pe,Te,p.h.create(16),qe,a,c),He=t.alertsReader,Oe=Pe.view(k.nL.getActiveAlertHighlight(de.p.getActiveFocusableItem)),Ve=new A.mN(a,Te,t.alertsReader,Oe,Pe.view((e=>e.currentLens.meta.filter))),We=[De,ae.P.SideEffects.createSDUIFeedSideEffect({...Y,findNextAlert:(0,s.a9)(r.YP),selectItemByAlert:()=>s.yR},g.feed.pipe(l.U(r.G),V.O(r.YP),W.G(),l.U((([e,t])=>(0,s.zG)(u.gz(e,t),r.hX((([e,t])=>e.feedId===t.feedId)),r.UI((([,e])=>({...e,cards:(0,s.zG)(e.cards,Z.v.filter(s.jv,s.W8,s.W8))}))),r.wp((()=>t))))),j.oA),de.p.sduiToChecksFeedOrd(Y),t.alertsReader),ge(g,Y),...Le.getApplicatorEffects(),...Ue.getApplicatorEffects(),P.dv.changeAlertEffect(Pe,Ue,E,de.p.getActiveFocusableItem,t.alertsReader,r.G(xe),ke,c.getLogger("CardsViewModelEffects.changeAlertEffect")),y.R7(Pe,qe,Y,(0,s.MZ)(Ue.actionEvents)),me(Le.sduiActionEvents,G.of(!0),Y),(0,re.A7)(Ve,Pe,!0),L.EQ.focusMarkByActiveAlert(Pe,Te,He,de.p.getActiveFocusableItem,c.getLogger("MarksEffects.focusMarkByActiveAlert")),L.EQ.highlightMarkByHighlightedCard(Ue,Pe,Te,He,Y,c.getLogger("MarksEffects.highlightMarkByHighlightedCard")),(je=Le.sduiActionEvents,Qe=ue.u,{id:"sduiCopyToClipboardEffect",when:h.R.isWithAlertsId,what:k.nL.Effect.Applicator.create(je.pipe(l.U((e=>t=>(e.actions.forEach((e=>{"copyToClipboard"===e.type&&(0,ce.vQ)(e.text).then((()=>Qe.enqueue("referenceCopied")))})),t)))))})];var je,Qe;const Ye=new F.l(Pe,Ie,t.alertsReader,t.alertsService,We,de.p.getActiveFocusableItem,Fe),_e=new Q.t;return{...e,checksFeedFlow:()=>de.p.createCardListFlow(Ue)(Ue,Pe.lens(k.nL.Prism.getLens()),_e,G.of(!1),Y,de.p.listItemOrd),sduiFeedManager:g,handleSduiAction:e=>{Le.sduiActionEvents.next(e)},capabilities:Y,lensState:Pe,trackPlagiarismAlertsEditing:Te.getPlagiarismAlertsEditingTracker(),dispose:()=>{Ye.dispose(),Ue.dispose(),Le.dispose(),d.dispose()}}};function ge(e,t){return{id:"SDUIItemRemoveSideEffect",when:h.R.isWithAlertsId,what:k.nL.Effect.Applicator.create(e.feed.pipe(l.U((e=>i=>{const a=(0,s.zG)(e.cards,Z.v.reduce([],((e,a)=>(0,s.zG)(i.currentLens.items.get(a.id),r.UI(N.ei("value")),r.hX((0,$.Kg)((0,s.ff)(E.o.isAnimatable),(0,s.ff)(E.o.isAnimatingRemoval))),r.UI(t.remove(s.W8,s.W8)),r.g_((()=>e),(t=>(e.push(t),e))))),s.yR,s.yR));if(a.length>0){const e=i.currentLens.items.add(a);return k.nL.Prism.getLens().compose(R.v.Prism.items).set(e,i)}return i}))))}}function me(e,t,i){return{id:"sduiFocusEffect",when:h.R.isWithAlertsId,what:k.nL.Effect.Applicator.create(e.pipe(Y.M(t),l.U((([{actions:e,cardId:t},a])=>l=>a&&Boolean(e.find((e=>"notify"===e.type&&"focus"===e.userAction)))&&k.nL.hasItems(l)?(0,s.zG)(k.In.getActiveItemOfType(de.p.isAlertRefSDUI)(l.currentLens),r.hX((e=>!["focused","removed"].includes(e.visualState.transition.type))),r.UI((()=>k.nL.Prism.getLensWithItems().modify(i.selectItemById((0,s.MZ)(t)),l))),r.fS((0,s.a9)(l))):l))))}}var he=i(88570),ve=i(17888),fe=i(73170),Ae=i(82695),be=i(6132);function Ie(e,t,i){const a=e.view((e=>(0,d.zG)(e,r.UI((e=>e.sduiBufferService.capiEvents.pipe(ve.filter(he.hX.is("sdui_add","sdui_remove","sdui_update")),ve.filter(fe.e.isSduiEvent),ve.map(Ae.al.fromSource(Ae.i5.CAPI))))),u.MH))).get(),s=new be.A(i,a,t),{sduiFeedbackService:l,capiClient:n}=e.view((e=>(0,d.zG)(e,r.UI((e=>({sduiFeedbackService:e.sduiFeedbackService,capiClient:e.capiClient}))),u.MH))).get();return{sduiFeedbackService:l,capiClient:n,sduiManager:s}}},71605:(e,t,i)=>{i.d(t,{p:()=>a});var a,s=i(24332),r=i(90023),l=i(39953),n=i(54761),o=i(86230),c=i(93954),d=i(64445),u=i(19549),p=i(33081),g=i(58303),m=i(14944),h=i(17071),v=i(68259),f=i(45689),A=i(72342),b=i(85519),I=i(52276),P=i(95196),S=i(31273);!function(e){const t=e=>(0,l.zG)(u.In.getActiveItemOfType(a)(e),g.tS(A.P.Capabilities.toAlertItem));function i(e){return u.nL.Items.mapper((e=>e.kind),{[A.P.Kind]:e})}function a(e){return e.kind===A.P.Kind}function C(){return{viewState:()=>e=>e.kind===A.P.Kind?{view:e,kind:"alertRefSDUI"}:{}}}e.isSelectableItem=a,e.getActiveItemWithAlert=t,e.getActiveFocusableItem=e=>t(e),e.checksFeedItemsMapper=i,e.isAlertRefSDUI=a,e.defaultOrd=t=>(0,s.g_)(m.iP())([(0,l.zG)(m.C2,m.Uz((0,h.ff)(A.P.Item.isBulkAcceptSDUI))),(0,l.zG)(m.C2,m.Uz(A.P.Item.isBulkDismissSDUI)),e.getByActiveAlertPositionOrd(t)]),e.sduiToChecksFeedOrd=function(t){return i=>m.Zt(((a,s)=>b.e.isSDUIItem(a)&&b.e.isSDUIItem(s)?b.e.getOrd(i).compare(a,s):e.getByActiveAlertPositionOrd(t).compare(a,s)))},e.getByActiveAlertPositionOrd=e=>(0,s.g_)(m.iP())([(0,l.zG)(n.h$.ordHRange,m.Uz((t=>(0,l.zG)(e.hasActiveAlert(t),g.UI((e=>e.alert)),g.fS((()=>({getHighlightRanges:()=>[{start:0,end:0}]})))))))]),e.item=()=>f.UI.Union.make("kind",{alertRefSDUI:I.p.SquashedListCard(),empty:P.Q.Empty}),e.viewState=C,e.createCardListFlow=e=>(0,o.sJ)((t=>{switch(t.key){case"empty":break;case"alertRefSDUI":e.actionEvents.next(t.action);break;default:(0,v.L0)(t)}})),e.listItemOrd=e=>m.Uz((e=>e.cell.item.view))(e).compare;const w={equals:(e,t)=>e.kind===t.kind&&c.s.eqById.equals(e,t)},y=e=>({equals:(t,i)=>{const a={[A.P.Kind]:e};return w.equals(t,i)&&(s=e=>e.kind,r=a,(e,t)=>r[s(e)].equals(e,t))(t,i);var s,r}});function E(){return{changePosition:e=>i(A.P.Capabilities.changePosition(e))}}function M(){return{completeTransition:e=>i(A.P.Capabilities.animatable.completeTransition(e)),transitionTo:e=>i(A.P.Capabilities.animatable.transitionTo(e)),changeVisualState:e=>i(A.P.Capabilities.animatable.changeVisualState(e))}}function k(){return{select:(e,t)=>i(A.P.Capabilities.select.select(e,t)),selectByAlert:(e,t,a)=>i(A.P.Capabilities.select.selectByAlert(e,t,a)),unselect:(e,t)=>i(A.P.Capabilities.select.unselect((0,r.MZ)(e),t))}}function R(){return{removeAlertFromItem:(e,t)=>i((i=>i.id===S.D1.SuccessReport.ID?i:A.P.Capabilities.removeAlert.removeAlertFromItem(e,t)(i)))}}function B(){return{remove:(e,t)=>i(A.P.Capabilities.remove.remove(e,t))}}function F(){return{updateWithAlerts:e=>i(r.yR)}}function U(){return{nextAlert:i((()=>g.YP)),prevAlert:i((()=>g.YP))}}function L(){return{updateUserInput:e=>i(r.yR)}}e.equatable={structEq:y(A.P.eq),idEq:y(w),visualStateEq:y(A.P.eq)},e.changePosition=E,e.disposable={isScheduledToDispose:i(A.P.Capabilities.disposable.isScheduledToDispose)},e.hidable={isHidden:i(d.o.isHidden)},e.animatableItem=M,e.hasAlertsQueries={isSelectableByAlert:e=>i(A.P.Capabilities.hasAlerts.isSelectableByAlert(e)),hasAlert:e=>i(A.P.Capabilities.hasAlerts.hasAlert(e)),hasActiveAlert:i(A.P.Capabilities.hasAlerts.hasActiveAlert)},e.changePositionStrategyQueries={useReferenceHeightOnRemove:i(r.jv)},e.select=k,e.removeAlert=R,e.remove=B,e.updateWithAlert=F,e.releaseAlert=()=>p.v.Capabilities.getAlertReleaser({...R(),...e.disposable}),e.unselectable=()=>p.v.Capabilities.getUnselectable(u.In.getActiveItem,{...k(),isScheduledToDispose:r.jv}),e.selectableByAlert=()=>p.v.Capabilities.getSelectableByAlert(u.In.getActiveItem,{...e.hasAlertsQueries,...k(),...p.v.Capabilities.getHasChecksFeed(),...e.disposable}),e.selectableById=()=>p.v.Capabilities.getSelectableById(u.In.getActiveItem,{...k(),isScheduledToDispose:r.jv}),e.updateMeta=()=>({updateMeta:p.v.Capabilities.getMetaUpdatable().updateMeta}),e.animatableFeed=e=>p.v.Capabilities.getAnimatable(e,{...R(),...M(),...p.v.Capabilities.getHasChecksFeed()}),e.alignable={isValidToAlign:i((t=>!e.disposable.isScheduledToDispose(t)))},e.alertIterator=U,e.itemReleaser=()=>p.v.Capabilities.getItemReleaser(),e.hasAlerts=p.v.Capabilities.getHasAlerts,e.hasUserInput=L,e.verifiable=()=>p.v.Capabilities.getVerifiable(e.disposable),e.cloneable=()=>({clone:i(c.s.Capabilities.getPojoCloneable().clone)});const D={getFeatures:i((e=>A.P.Item.isBulkDismissSDUI(e)?[A.P.Features.BulkDismiss]:A.P.Item.isBulkAcceptSDUI(e)?[A.P.Features.BulkAccept]:[]))};e.getCapabilities=function(t,i){return{...C(),...e.disposable,...e.hidable,...e.equatable,...L(),...e.cloneable(),...E(),...M(),...k(),...B(),...R(),...F(),...e.hasAlertsQueries,...e.changePositionStrategyQueries,...e.alignable,...e.releaseAlert(t),...e.unselectable(t),...e.selectableByAlert(t),...e.selectableById(t),...e.updateMeta(t),...e.animatableFeed(t),...e.itemReleaser(),...D,shouldAnimatePositionChange:()=>()=>!1,...e.verifiable(),...e.cloneable(),...e.hasAlerts(U(),i,(()=>e.isSelectableItem),{...e.hasAlertsQueries,...e.disposable})}}}(a||(a={}))},27943:(e,t,i)=>{i.d(t,{Sz:()=>r,vQ:()=>s});var a=i(12518);async function s(e,t=self){if(function(e=self){var t,i;return!!(null===(i=null===(t=e.navigator)||void 0===t?void 0:t.clipboard)||void 0===i?void 0:i.writeText)}(t))return t.navigator.clipboard.writeText(e);throw new Error("Clipboard API not supported")}function r(e,t=self){return s(e,t).then((()=>a.right(void 0))).catch((e=>a.left(e instanceof Error?e:new Error(String(e)))))}}}]);