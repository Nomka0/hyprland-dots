(self.webpackChunk=self.webpackChunk||[]).push([[3313],{6132:(e,t,n)=>{n.d(t,{A:()=>F});var r=n(90023),i=n(61447),o=n(88570),a=n(54761),s=n(80441),u=n(52536),c=n(55402),l=n(96030),f=n(65647),d=n(55446),h=n(17071),p=n(58303),v=n(25583),g=n(59833),y=n(19813),b=n(58838),m=n(82695),I=n(52906),_=n(73170),w=n(33378);function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function S(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function C(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function j(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o=[],a=!0,s=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(e){s=!0,i=e}finally{try{a||null==n.return||n.return()}finally{if(s)throw i}}return o}}(e,t)||P(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(e){return function(e){if(Array.isArray(e))return A(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||P(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function P(e,t){if(e){if("string"==typeof e)return A(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?A(e,t):void 0}}var F=function(){function e(t,n,A){var O=arguments.length>3&&void 0!==arguments[3]?arguments[3]:new w.J,j=this;S(this,e),C(this,"_getByRawAlertId",void 0),C(this,"popoverManager",void 0),C(this,"state",void 0),C(this,"_sduiManager",void 0),C(this,"_subs",void 0),C(this,"_log",void 0),C(this,"alertIdResolver",void 0),C(this,"findFirstCardWithContent",void 0),C(this,"onSessionStarted",void 0),C(this,"onFirstCheckingFinished",void 0),C(this,"notifyAlertsChanged",void 0),C(this,"loadItems",void 0),C(this,"_toRemovedAlertIdsByClient",void 0),this._getByRawAlertId=A,this.popoverManager=O,this._subs=new c.w.Keeper,this._log=y.C8.Logging.getLogger("SDUIManager",y.zW.i.TRACE,y.zW.T.Manager.getColor()),this.findFirstCardWithContent=function(e){return j._sduiManager.findFirstCardWithContent(e)},this.onSessionStarted=function(){return j._sduiManager.onSessionStarted()},this.onFirstCheckingFinished=function(){return j._sduiManager.onFirstCheckingFinished()},this.notifyAlertsChanged=function(){return j._sduiManager.notifyAlertsChanged()},this.loadItems=function(e){return j._sduiManager.loadItems(e)},this._toRemovedAlertIdsByClient=function(e){var t=function(e,t,n){return(0,h.Kg)(a.bZ.isRemovedByTextChange,a.bZ.isDuplicated)(t.alert)?(0,r.zG)(n,p.ij,p.tS((function(e){return e.alert.rawId})),p.wp((function(){return t.alert.rawId})),p.g_((function(){return e}),(function(n){var r,i=a.bZ.isRemovedByTextChange(t.alert)?m.i5.TextChange:m.i5.RemoveDuplicate;return j._log.debug("[Optimistic update] alert ".concat(a.bZ.State.Type.REMOVED," by ").concat(i," ").concat(s.h.show.show(t))),e.set(i,k(null!==(r=e.get(i))&&void 0!==r?r:[]).concat([I.j.AlertId.from(n)]))}))):e};return e.pipe(l.G(),f.U((0,r.og)(u.p.diff)),f.U((function(e){return v.v.reduce(new Map,(function(e,n){return t(e,n)}),(function(e,n,r){return t(e,r,n)}),r.yR)(e)})),d.h((function(e){return(0,r.zG)(Array.from(e.values()),g.xH,(0,h.ff)(g.xb))})))};var P=n.pipe(d.h(_.e.isSduiEvent),f.U(m.al.fromSource(m.i5.CAPI))),F=(0,r.ls)(i.wQ.Id.create,this._getByRawAlertId,p.UI((function(e){return I.j.AlertId.from(e.id)})));this._sduiManager=new b.G(P,F,O),this.alertIdResolver=F,this.state=this._sduiManager.state,this._subs.push(t.subscribe((function(e){return j._sduiManager.notifyAlertsChanged()})),this._toRemovedAlertIdsByClient(t).subscribe((function(e){return e.forEach((function(e,t){return j.pushRemovedAlerts([e,t])}))})),n.pipe(d.h(o.hX.is("session_started")),d.h((function(e){return e.isNewSession}))).subscribe((function(e){return j._sduiManager.onSessionStarted()})),n.pipe(d.h(o.hX.is("finish")),d.h((function(e){return 0===e.revision}))).subscribe((function(e){return j._sduiManager.onFirstCheckingFinished()})))}var t,n,A;return t=e,(n=[{key:"onAlertsRefEmpty",get:function(){return this._sduiManager.onAlertsRefEmpty}},{key:"pushRemovedRoot",value:function(e){this._sduiManager.pushRemovedRoot(e)}},{key:"pushRemovedAlerts",value:function(e){var t=j(e,2),n=t[0],r=t[1];this._sduiManager.pushRemovedAlerts([n,r])}},{key:"pushRemovedDenaliAlerts",value:function(e){var t=j(e,2),n=t[0],r=t[1];this._sduiManager.pushRemovedAlerts([n.map(I.j.AlertId.from),r])}},{key:"pushSwitchView",value:function(e){this._sduiManager.pushSwitchView(e)}},{key:"resolveStrongAlertRefAlerts",value:function(e){return this._sduiManager.resolveStrongAlertRefAlerts(e)}},{key:"flush",value:function(){this._sduiManager.flush()}},{key:"dispose",value:function(){this._subs.dispose(),this._sduiManager.dispose()}}])&&O(t.prototype,n),A&&O(t,A),e}()},81246:(e,t,n)=>{n.d(t,{_:()=>V});var r=n(24332),i=n(90023),o=n(25770),a=n(36072),s=n(31413),u=n(49144),c=n(55402),l=n(90049),f=n(65647),d=n(6662),h=n(19360),p=n(70989),v=n(55446),g=n(14765),y=n(96030),b=n(65802),m=n(12518),I=n(92562),_=n(48886),w=n(83622),A=n(58303),S=n(25583),O=n(17071),C=n(14944),j=n(68259),k=n(52256),P=n(97225),F=n(58623),E=n(19813),M=n(52906),U=n(64826),x=n(76368),R=n(3697),T=n(43034);function D(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function G(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){G(e,t,n[t])}))}return e}function W(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function B(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o=[],a=!0,s=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(e){s=!0,i=e}finally{try{a||null==n.return||n.return()}finally{if(s)throw i}}return o}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return D(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return D(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var V=function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),G(this,"onFeedRemove",new a.xQ),G(this,"onFeedEmpty",new a.xQ),G(this,"_header",new s.t(1)),G(this,"_footer",new s.t(1)),G(this,"_feeds",new Map),G(this,"_currentCards",o.h.create(x.l.empty)),G(this,"_feed",new u.X(void 0)),G(this,"_feedStack",new u.X([])),G(this,"_cardIdToFocus",new a.xQ),G(this,"_subs",new c.w.Keeper),G(this,"_log",E.C8.Logging.getLogger("SDUIFeedManager",E.zW.i.TRACE,E.zW.T.Manager.getColor())),G(this,"_forceFeedInternalInfo",new a.xQ),G(this,"_getFeedContent",(0,i.ls)(this._getFeed,m.map((function(e){return e.content})),I.MH)),G(this,"_changeFeed",(function(e){n._feed.next(e),(0,i.zG)(e.cards,x.l.applyDiff,_.UI(w.T.recover((function(e){return n._log.error("conflicts on diff apply",e)}))),(function(t){var r=n._currentCards.get(),i=t(r);if(r.entries.size>0&&0===i.entries.size){var o=n._feeds.get(e.feedId);void 0!==o&&n.onFeedEmpty.next(o)}n._currentCards.modify(t)}))}));var r=l.T(this._feedStack.pipe(f.U((function(e){return A.ij(e[e.length-1])})),d.oA,f.U((function(e){return n._getFeedInternalInfo(e.feedId,e.focusedCardId)}))),this._forceFeedInternalInfo),O=l.T(this._feedStack.pipe(h.g("length"),f.U((function(e){return A.ij(e[e.length-1])})),d.oA,f.U((function(e){return n._getFeedInternalInfo(e.feedId,e.focusedCardId)}))),this._forceFeedInternalInfo),C=this._cardIdToFocus.pipe(p.M(this._feedStack.pipe(f.U((function(e){var t;return null===(t=e[e.length-1])||void 0===t?void 0:t.focusedCardId})))),v.h((function(e){var t=B(e,2);return t[0]!==t[1]})),f.U((function(e){return B(e,1)[0]})),p.M(this.feed),f.U((function(e){var t=B(e,2),r=t[0],i=t[1];return n._getFeedInternalInfo(i.feedId,M.j.Item.Id.from(r))}))),j=t.pipe(g.O(U.a.empty),y.G(),f.U((function(e){var t=B(e,2),n=t[0],r=t[1];return U.a.diff(n,r)})),f.U((function(e){return n._processSDUIItems(e)})),p.M(r),f.U((function(e){var t=B(e,2),n=t[0],r=t[1],o=r.feedOrd,a=r.feedFilter;return{feedId:r.feedId,cards:(0,i.zG)(n,S.v.filter(a,(function(e,t){return a(t)}),a)),feedOrd:o,itemIdToSelect:A.YP}}))),k=l.T(O,C).pipe(p.M(t,this._currentCards),f.U((function(e){var t=B(e,3),n=t[0],r=n.feedOrd,o=n.feedFilter,a=n.feedId,s=n.itemIdToSelect,u=t[1],c=t[2],l=(0,i.zG)(u,x.l.iso.unwrap,(function(e){return(0,i.zG)(e.entries,F.hX(o))}));return{feedId:a,cards:x.l.diffFromEntries(c.entries,l),feedOrd:r,itemIdToSelect:s}})));this._subs.push(l.T(j,k).subscribe(this._changeFeed)),this._subs.push(O.pipe(b.j("header")).subscribe((function(e){return n._header.next(e)}))),this._subs.push(O.pipe(b.j("footer")).subscribe((function(e){return n._footer.next(e)})))}var t,n,T;return t=e,n=[{key:"header",get:function(){return this._header.asObservable()}},{key:"footer",get:function(){return this._footer.asObservable()}},{key:"feed",get:function(){return this._feed.pipe(v.h(O.$K))}},{key:"currentFeed",get:function(){return A.ij(this._feed.getValue())}},{key:"_getFeed",value:function(e){var t=this._feeds.get(e);return void 0===t?m.left("Cannot switch to feed. Feed with id '".concat(e,"' not found.")):m.right(t)}},{key:"_getFeedInternalInfo",value:function(e,t){var n=this._getFeedContent(e);return{feedId:e,feedFilter:function(e){var t=N(e.content);return!A.Wi(t)&&n.filtering.reduce((function(e,n){return!1===e?e:(0,i.zG)(t,A.tS((function(e){return A.ij(e[n.property])})),A.g_((function(){return n.condition===R.j2.NotEqualTo}),(function(e){return n.condition===R.j2.EqualTo?e===n.value:e!==n.value})))}),!0)},feedOrd:(0,r.g_)(C.iP())(n.ordering.map((function(e){return(0,i.zG)(C.Mh,C.Uz((0,i.ls)(N,A.tS((function(t){return A.ij(t[e.orderBy])})),A.g_((function(){return Number.MAX_VALUE}),(function(t){return e.direction===R.di.Asc?t:-1*t})))))}))),itemIdToSelect:A.G(t),header:n.header,footer:A.ij(n.footer)}}},{key:"pushFeed",value:function(e,t){var n=this;return(0,i.zG)(this._getFeed(e),m.map((function(){var r=n._feedStack.getValue();return r=r.concat({feedId:e,focusedCardId:t?M.j.Item.Id.from(t):void 0}),n._feedStack.next(r),null})))}},{key:"popFeed",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A.YP,t=this,n=this._feedStack.getValue();if(n.length>1)return n=n.slice(0,n.length-1),void this._feedStack.next(n);(0,i.zG)(e,A.g_((function(){return t._log.warn("Invoked `popFeed()` when there are less than 2 feeds in the feed stack, this is a no-op. No fallback feed provided.")}),(function(e){t.pushFeed(M.j.Item.Id.from(e.feedId),e.cardId),t._log.debug("Invoked 'popFeed()' when there are less than 2 feeds in the feed stack. Switching to the provided fallback feed. ".concat(JSON.stringify(e)))})))}},{key:"focusCard",value:function(e){var t=this;return(0,i.zG)(this.currentFeed,m.fromOption((function(){return"Cannot focus card when there is no active feed."})),m.map((function(){return t._cardIdToFocus.next(e),null})))}},{key:"notifyCardFocused",value:function(e){var t=this._feedStack.getValue(),n=t[t.length-1];(0,j.kG)(void 0!==n,"notifyCardFocused: Feed stack cannot be empty."),t=t.slice(0,t.length-1).concat(W(z({},n),{focusedCardId:e})),this._feedStack.next(t)}},{key:"_processSDUIItems",value:function(e){var t=this;return S.v.fromMutation((function(n){(0,i.zG)(e,S.v.forEach((function(e){void 0!==t._feeds.get(e.id)?(t._feeds.delete(e.id),(0,i.zG)(t.currentFeed,A.hX((function(t){return t.feedId.toString()===e.id.toString()})),k.bw((function(){return t.onFeedRemove.next(e)})))):n.set(e.id,P.t$(e))}),(function(e,r){if("assistantFeed"===r.content.type){var o=r.content;void 0!==t._feeds.get(e.id)?(t._feeds.set(e.id,W(z({},r),{content:o})),(0,i.zG)(t.currentFeed,A.hX((function(t){return t.feedId===e.id})),A.UI((function(e){t._header.next(o.header),t._footer.next(A.ij(o.footer))})))):t._log.warn("Feed with id '".concat(e.id,"' not found for update"))}else n.set(e.id,P.Hk(e,r))}),(function(e){if("assistantFeed"===e.content.type){var r=e.content;t._feeds.set(e.id,W(z({},e),{content:r}))}else n.set(e.id,P.F2(e))})))}))}},{key:"dispose",value:function(){this._subs.dispose()}}],n&&L(t.prototype,n),T&&L(t,T),e}();function N(e){var t=!0,n=!1,r=void 0;try{for(var i,o=T.ab.traverse(e)[Symbol.iterator]();!(t=(i=o.next()).done);t=!0){var a=i.value;if("longFormCard"===a.type)return A.G(a.feedProperties);if("assistantCard"===a.type&&a.properties)return A.G(a.properties)}}catch(e){n=!0,r=e}finally{try{t||null==o.return||o.return()}finally{if(n)throw r}}return A.YP}},59316:(e,t,n)=>{n.d(t,{i:()=>r});var r,i=n(90023),o=n(17071),a=n(12518),s=n(58303),u=n(52256),c=n(19813),l=n(19549),f=n(85519),d=n(43034),h=n(3697);function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){v(e,t,n[t])}))}return e}function y(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o=[],a=!0,s=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(e){s=!0,i=e}finally{try{a||null==n.return||n.return()}finally{if(s)throw i}}return o}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}!function(e){var t=(0,o.HP)(c.C8.Logging.getLogger);!function(e){e.create=function(e){var n=t("SingleCardAssistant.Transformers.disablePrevNextButtons");return function(t){var r=t.state,o=t.metadata;if(!l.nL.hasItems(r))return n.trace("state has no feed items, returning original state"),a.left({state:r,metadata:o});var c=r;return(0,i.zG)(c.currentLens.cardIndex,s.tS((function(e){return(0,i.zG)(l.In.getActiveItem(r.currentLens),s.UI((function(t){return(0,i.bc)(t,e)})))})),s.UI((function(t){var n=b(t,2),i=n[0],o=n[1];return l.nL.Prism.getLensWithItems().modify((function(t){if(!f.e.isSDUIItem(i)||!s.pC(i.cardDSL))return t;var n=e.clone(i),a=u.MH(n.cardDSL),c=!1,l=d.ab.map(a,(function(e){if("button"===e.type&&e.name.value===h.MU.ButtonPrev){var t=0===o?h.BN.Disabled:h.BN.Enabled;return c=c||t!==e.state,y(g({},e),{state:t})}if("button"===e.type&&e.name.value===h.MU.ButtonNext){var n=o===r.currentLens.items.size-1?h.BN.Disabled:h.BN.Enabled;return c=c||n!==e.state,y(g({},e),{state:n})}return e}));return s.pC(l)&&c?(n=Object.assign(n,{cardDSL:l}),y(g({},t),{items:t.items.add(n)})):t}),c)})),s.fS((function(){return r})),(function(e){return a.left({state:e,metadata:o})}))}}}(e.DisablePrevNextButtons||(e.DisablePrevNextButtons={}))}(r||(r={}))},28375:(e,t,n)=>{n.d(t,{q:()=>V});var r=n(90023),i=n(58303),o=n(12518),a=n(52256),s=n(68259),u=n(59833),c=n(17071),l=n(86399),f=n(19813),d=n(31375),h=n(54761),p=n(56765),v=n(88e3),g=n(73251),y=n(19549),b=n(33081),m=n(55402),I=n(36072),_=n(60165),w=n(65647),A=n(80223),S=n(55446),O=n(17888),C=n(8748),j=n(93954),k=n(52906),P=n(28488),F=n(85519),E=n(72342),M=n(51118),U=n(25770);function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function R(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function T(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function D(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function L(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function G(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o=[],a=!0,s=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(e){s=!0,i=e}finally{try{a||null==n.return||n.return()}finally{if(s)throw i}}return o}}(e,t)||W(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function z(e){return function(e){if(Array.isArray(e))return x(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||W(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function W(e,t){if(e){if("string"==typeof e)return x(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?x(e,t):void 0}}var B,V=function(){function e(t,n,o,a,s,u,c,h){var p,v=arguments.length>8&&void 0!==arguments[8]?arguments[8]:new d.A,g=this;R(this,e),D(this,"_checksFeedCapabilities",void 0),D(this,"_lensState",void 0),D(this,"_alertReader",void 0),D(this,"_capiClient",void 0),D(this,"_platformEnvironment",void 0),D(this,"_sduiViewModel",void 0),D(this,"sduiActionEvents",void 0),D(this,"_sduiAlertIdResolver",void 0),D(this,"_log",void 0),D(this,"_subs",void 0),D(this,"actionEvents",void 0),D(this,"_focusedItem",void 0),D(this,"_mapToDenaliAlerts",void 0),this._checksFeedCapabilities=n,this._lensState=o,this._alertReader=u,this._capiClient=c,this._platformEnvironment=v,this._log=f.C8.Logging.getLogger("SDUICardsViewModelImpl",f.zW.i.DEBUG),this._subs=new m.w.Keeper,this.actionEvents=new I.xQ,this._focusedItem=this._lensState.view((function(e){return y.nL.hasItems(e)?(0,r.zG)(e.currentLens.cardIndex,i.tS((function(t){return e.currentLens.items.getAt(t)}))):i.YP})),this._mapToDenaliAlerts=function(e){return(0,r.zG)(e,l.fw(i.Kw)((function(e){return g._alertReader.getById(g._mapToDenaliAlertId(e))})),i.hX(l.Od))},this._sduiAlertIdResolver=(0,M.X)(a.alertIdResolver,this._log);var b=U.h.create(i.YP);this._sduiViewModel=new M.x(t,a,s,c,b,v),this.sduiActionEvents=this._sduiViewModel.sduiActionEvents,(p=this._subs).push.apply(p,z(this._integrateCardsViewModel(h)).concat([(0,r.zG)(this._focusedItem,_.x((function(e,t){return i.Eh(j.s.eqById).equals(e,t)})),w.U(i.tS(i.DT(F.e.isSDUIItem))),w.U(i.UI((function(e){return k.j.Item.Id.from(e.id)})))).subscribe(A.wW(b)),this._sduiViewModel]))}var t,n,c;return t=e,n=[{key:"_integrateCardsViewModel",value:function(e){return[this.actionEvents.subscribe(e.actionEvents),e.actionEvents.pipe(S.h(g.t.isSduiCardAction)).subscribe(this.sduiActionEvents)]}},{key:"_sduiActionsHandler",value:function(){var e=this;return this.sduiActionEvents.pipe(O.skipBy(g.t.eq),w.U((function(t){var n=t.cardId,u=t.actions,c=t.scope;return function(t){return e._log.info("sdui card action:",{cardId:n,actions:u}),(0,r.zG)(u,l.u4(t,(function(t,u){switch(u.type){case"notify":case"nextCard":case"prevCard":case"openSettings":case"openToneDetector":case"openFeedback":case"upgradeToPremium":case"openLearnMore":case"transition":case"openCreateSnippetModal":case"nativeOpenAssistant":case"showHighlights":case"hideHighlights":case"selectAlternative":case"openLink":case"copyToClipboard":case"pushAssistantFeed":case"popAssistantFeed":case"focusAssistantCard":case"switchView":case"newRevision":case"stopApplyingAlerts":case"closePopover":case"interactPopover":case"openGrammarlyGo":case"enablePlagiarismCheck":case"disablePlagiarismCheck":case"enableWritingExpertCheck":case"disableWritingExpertCheck":case"openPerformanceScore":case"nativeOpenUserSatisfactionFeedback":return t;case"removeRoot":return(0,r.zG)(t.currentLens.items.get(n),i.UI((function(e){return e.value})),i.UI(e._checksFeedCapabilities.remove(r.W8,r.W8)),i.UI((function(e){return y.nL.Prism.getLens().compose(b.v.Prism.items).set(t.currentLens.items.modifyWith([[e.id,e]],(function(){return e})),t)})),i.fS((0,r.a9)(t)));case"applyAlerts":return(0,r.zG)(t.currentLens.items.get(n),i.UI((function(e){return e.value})),o.fromOption((function(){return new Error("unknown cardId: ".concat(n))})),o.bimap((function(t){return e._log.error("error in processing applyAlerts action",t)}),(function(t){(0,r.zG)(e._sduiAlertIdResolver(c.alertRefs),a.bw((function(n){requestAnimationFrame((function(){(0,r.zG)(n,e._mapToDenaliAlerts,i.UI(l.UI((function(n){return e.actionEvents.next({type:v.lY.Type.alertApply,id:t.id,eligibleForSurvey:n.acceptSurvey,eligibleForGbPrompt:n.gbPrompt,alertId:n.id,alternativeIndex:u.alternativeIndex,cardType:v.lY.getCardType({activeAlert:P.$.fromModel(n)})})}))))}))})))})),(function(){return t.patch({alertSource:h.l$.sidebar})}));case"closeCard":return t.patch({currentLens:y.nL.hasItems(t)?e._checksFeedCapabilities.unselectItem()(t.currentLens):t.currentLens,switchOrder:"lensOrder",alertSource:h.l$.sidebar});case"removeAlerts":return(0,r.zG)(e._sduiAlertIdResolver(c.alertRefs),a.bw((function(t){requestAnimationFrame((function(){(0,r.zG)(t,e._mapToDenaliAlerts,i.UI(l.UI((function(t){return e.actionEvents.next({type:v.lY.Type.alertIgnore,id:n,alertId:t.id,eligibleForSurvey:t.dismissSurvey})}))))}))}))),t.patch({alertSource:h.l$.sidebar});case"highlightAlert":return(0,r.zG)(e._sduiAlertIdResolver(c.alertRefs),i.tS(e._mapToDenaliAlerts),i.UI((function(e){if(!y.nL.hasItems(t))return t;var n=function(e,t){return function(n){return(0,r.zG)(n.items.update(e,(function(e){return(0,r.zG)(e,i.DT(E.P.isAlertRefSDUIItem),i.tS(E.P.Capabilities.setActiveAlertId(t)),i.tS(E.P.Capabilities.setActiveHighlightIndex(u.highlightIndex)),i.fS((0,r.a9)(e)))})),o.fold((function(){return n}),(function(e){return L(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){D(e,t,n[t])}))}return e}({},n),{items:e})})))}},a=e[0];return(0,r.zG)(y.In.getActiveItem(t.currentLens),i.UI((function(e){return y.nL.Prism.getLensWithItems().modify(n(e.id,a.id),t)})),i.UI((function(e){return e.patch({alertSource:h.l$.sidebar})})),i.fS((0,r.a9)(t)))})),i.fS((0,r.a9)(t)));default:(0,s.L0)(u)}})))}})))}},{key:"getApplicatorEffects",value:function(){return(0,r.zG)([[this._sduiActionsHandler(),"sduiActions"]],u.UI((function(e){var t=G(e,2),n=t[0],r=t[1];return{id:"cardsViewModel.effects.".concat(r),when:p.R.isWithAlertsId,what:y.nL.Effect.Applicator.create(n)}})))}},{key:"onAssistantClose",value:function(){this._sduiViewModel.onAssistantClose()}},{key:"dispose",value:function(){this._subs.dispose()}},{key:"_mapToDenaliAlertId",value:function(e){return"".concat(e)}}],n&&T(t.prototype,n),c&&T(t,c),e}();!function(e){e.itemsLens=y.nL.Prism.getLens().compose(b.v.Prism.items),e.createLegacy=function(e,t,n,s,u,c,l){var f=arguments.length>7&&void 0!==arguments[7]?arguments[7]:new d.A,h={enablePlagiarismSearch:function(){return Promise.resolve(o.right(void 0))},disablePlagiarismSearch:function(){return Promise.resolve(o.right(void 0))},enableWritingExpert:function(){return Promise.resolve(o.right(void 0))},disableWritingExpert:function(){return Promise.resolve(o.right(void 0))},requestWritingExpert:function(){return function(){return Promise.resolve(o.right(void 0))}}};return(0,r.zG)(a.gz(e,s,u),i.g_((function(){return new B.Mock}),(function(e){var r=G(e,3),i=r[0],o=r[1],a=r[2];return new V(i,t,n,o,a,c,h,l,f)})))};e.Mock=function e(){R(this,e),D(this,"actionEvents",new I.xQ),D(this,"sduiActionEvents",new I.xQ),D(this,"sideEffect",{id:"cardsViewModelMock",when:p.R.isWithAlertsId,what:y.nL.Effect.Applicator.create(C.E)}),D(this,"getApplicatorEffects",(function(){return[{id:"cardsViewModelMock",when:p.R.isWithAlertsId,what:y.nL.Effect.Applicator.create(C.E)}]})),D(this,"onAssistantClose",c.Q1),D(this,"dispose",c.Q1)}}(B||(B={}))}}]);