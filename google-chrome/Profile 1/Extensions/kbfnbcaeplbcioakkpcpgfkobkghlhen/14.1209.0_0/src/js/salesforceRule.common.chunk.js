(self.webpackChunk=self.webpackChunk||[]).push([[5091],{44288:(e,t,a)=>{a.r(t),a.d(t,{Salesforce:()=>i});var i,l=a(20715),r=a(72925),o=a(68599),n=a(53253),s=a(60167),c=a(90522),d=a(86185),f=a(13641),u=a(50601),p=a(67630),v=a(4623),m=a(88900),x=a(92865),C=a(52073);!function(e){function t(e){return e.experimentClient.isGateEnabled(c.K.SalesforceDetailsTextareaRichReplacementServiceDelay)?{overwriteGenericOpts:{createReplacementService:t=>new f.BT(t,e.experimentClient,void 0,void 0,50)}}:{}}e.createQuillIntegrationWithCustomReplacementService=t;const a=p.P.generic(t),i=o.T.textarea("Salesforce.classicChat",(e=>({extraCondition:e=>!!e.field.closest("#chatTextArea"),validationRules:[...n.u,(0,s.Uo)(18)],createLayout:()=>new r.A(e.field)}))),R=o.T.textarea("Salesforce.serviceConsoleNewCase",(e=>({extraCondition:e=>!!e.field.closest("records-record-layout-text-area"),validationRules:[...n.u],createLayout:()=>new r.A(e.field),createReplacementService:e.experimentClient.isGateEnabled(c.K.SalesforceServiceConsoleReplacementFix)?t=>new u.l(e.field,t,e.experimentClient,50):void 0}))),T=o.T.textarea("Salesforce.serviceConsoleReplyMessage",(e=>({extraCondition:e=>!!e.field.closest(".messaging-textarea"),validationRules:[...n.u,(0,s.Uo)(18)],createLayout:()=>new r.A(e.field,{createGbuttonShiftBehavior:()=>(0,l.of)({left:0,top:6})})})));e.REPLAY_THREAD_TITLE="- Original Message -",e.stopProcessEmailFieldOnReplyThread=(t,a)=>{var i;return!(!(0,d.BM)(t)||!(null===(i=t.textContent)||void 0===i?void 0:i.includes(e.REPLAY_THREAD_TITLE)))||v.Z.defaultFinishBlockMap(t,a)};const S=o.T.iframe("Salesforce.emailField",(t=>t.experimentClient.isGateEnabled(c.K.SalesforceFilterEmailThread)?{textMap:{createFieldTextMap:t=>new v.Z(t,void 0,void 0,void 0,void 0,void 0,e.stopProcessEmailFieldOnReplyThread)}}:{}));e.page=(0,m.$W)({name:"Salesforce",domain:C.c3},[i,R,T,S,a,...x.k.defaultFieldRuleSet])}(i||(i={}))}}]);