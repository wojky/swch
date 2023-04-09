"use strict";(self.webpackChunkswch=self.webpackChunkswch||[]).push([[368],{9368:(W,m,o)=>{o.r(m),o.d(m,{default:()=>V});var h=o(6895),n=o(8256),F=o(8505),g=o(1135),v=o(4004);let C=(()=>{class t{constructor(){this.state$$=new g.X({records:new Map})}get value(){return this.state$$.value}get state$(){return this.state$$.asObservable()}get recordsAsArray$(){return this.state$.pipe((0,v.U)(e=>Array.from(e.records.keys())))}addFact(e){const a=new Map(this.value.records).set(e,e);this.state$$.next({records:a})}hasFact(e){return this.value.records.has(e)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac}),t})();var x=o(7579),E=o(4482),A=o(5403),y=o(8421),z=o(5032);function d(t){return(0,E.e)((s,e)=>{(0,y.Xf)(t).subscribe((0,A.x)(e,()=>e.complete(),z.Z)),!e.closed&&s.subscribe(e)})}var $=o(9300),T=o(9751),L=o(5577),M=o(1144),c=o(576),B=o(3268);const O=["addListener","removeListener"],b=["addEventListener","removeEventListener"],I=["on","off"];function u(t,s,e,a){if((0,c.m)(e)&&(a=e,e=void 0),a)return u(t,s,e).pipe((0,B.Z)(a));const[r,l]=function U(t){return(0,c.m)(t.addEventListener)&&(0,c.m)(t.removeEventListener)}(t)?b.map(i=>p=>t[i](s,p,e)):function H(t){return(0,c.m)(t.addListener)&&(0,c.m)(t.removeListener)}(t)?O.map(S(t,s)):function R(t){return(0,c.m)(t.on)&&(0,c.m)(t.off)}(t)?I.map(S(t,s)):[];if(!r&&(0,M.z)(t))return(0,L.z)(i=>u(i,s,e))((0,y.Xf)(t));if(!r)throw new TypeError("Invalid event target");return new T.y(i=>{const p=(...f)=>i.next(1<f.length?f:f[0]);return r(p),()=>l(p)})}function S(t,s){return e=>a=>t[e](s,a)}const Q=["item"],Z=["*"];let w=(()=>{class t{constructor(){this.zone=(0,n.f3M)(n.R0b),this.doc=(0,n.f3M)(h.K0),this.loadBalancer$=new g.X({loading:!1}),this.destroy$=new x.x,this.lastItemHeight=0}set source$(e){this.loadFn=()=>{e.pipe(d(this.destroy$)).subscribe(()=>{this.isAppScrollable()&&this.loadFn()})}}ngOnInit(){this.loadFn(),this.loadBalancer$.pipe(d(this.destroy$),(0,$.h)(e=>e.loading)).subscribe(()=>{this.loadFn()}),this.zone.runOutsideAngular(()=>{this.handleResizeEvent(),this.handleScrollEvent()})}ngAfterContentInit(){this.cards.changes.pipe(d(this.destroy$)).subscribe(()=>{this.loadBalancer$.value.loading&&this.loadBalancer$.next({loading:!1}),this.lastItemHeight=this.cards.last.element.nativeElement.getBoundingClientRect().height})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}handleResizeEvent(){u(window,"resize").pipe(d(this.destroy$),(0,$.h)(()=>this.isAppScrollable())).subscribe(()=>{this.zone.run(()=>{this.loadFn()})})}handleScrollEvent(){u(this.doc,"scroll").pipe(d(this.destroy$)).subscribe(()=>{const a=this.doc.body,r=a.clientHeight,l=this.doc.documentElement.clientHeight+Math.abs(Math.floor(a.getBoundingClientRect().y));this.runLoadBalancer(r-l)})}runLoadBalancer(e){this.loadBalancer$.value.loading||e>this.lastItemHeight||this.zone.run(()=>{this.loadBalancer$.next({loading:!0})})}isAppScrollable(){return this.doc.documentElement.clientHeight>this.doc.body.clientHeight}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-lazy-scroll-container"]],contentQueries:function(e,a,r){if(1&e&&n.Suo(r,Q,4,n.s_b),2&e){let l;n.iGM(l=n.CRH())&&(a.cards=l)}},inputs:{source$:"source$"},standalone:!0,features:[n.jDz],ngContentSelectors:Z,decls:1,vars:0,template:function(e,a){1&e&&(n.F$t(),n.Hsn(0))},encapsulation:2}),t})();const X=["*"];let j=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-cat-card"]],standalone:!0,features:[n.jDz],ngContentSelectors:X,decls:1,vars:0,template:function(e,a){1&e&&(n.F$t(),n.Hsn(0))},styles:["[_nghost-%COMP%]{display:block;font-size:1.25rem;border:1px solid var(--primary);padding:10px;border-radius:5px;min-height:2rem}"]}),t})();var Y=o(529);const J=new n.OlP("",{factory:()=>"https://meowfacts.herokuapp.com"});let P=(()=>{class t{constructor(){this.URL=(0,n.f3M)(J),this.http=(0,n.f3M)(Y.eN)}getFact(){return this.http.get(this.URL).pipe((0,v.U)(({data:e})=>e[0]))}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function D(t,s){if(1&t&&(n.TgZ(0,"app-cat-card",null,4),n._uU(2),n.qZA()),2&t){const e=s.$implicit;n.xp6(2),n.Oqu(e)}}function N(t,s){if(1&t&&(n.ynx(0),n.YNc(1,D,3,1,"app-cat-card",3),n.BQk()),2&t){const e=n.oxw().ngIf,a=n.oxw();n.xp6(1),n.Q6J("ngForOf",e)("ngForTrackBy",a.trackBy)}}function G(t,s){if(1&t&&(n.ynx(0),n.TgZ(1,"app-lazy-scroll-container",2),n.YNc(2,N,2,2,"ng-container",0),n.qZA(),n.BQk()),2&t){const e=s.ngIf,a=n.oxw(),r=n.MAs(5);n.xp6(1),n.Q6J("source$",a.addFact$),n.xp6(1),n.Q6J("ngIf",e.length)("ngIfElse",r)}}function K(t,s){1&t&&n._uU(0,"\u0141adowanie...")}const V=[{path:"",component:(()=>{class t{constructor(){this.service=(0,n.f3M)(P),this.factsState=(0,n.f3M)(C),this.facts$=this.factsState.recordsAsArray$,this.addFact$=this.service.getFact().pipe((0,F.b)(e=>{this.factsState.hasFact(e)?this.addFact$.subscribe():this.factsState.addFact(e)}))}trackBy(e,a){return a}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-cats"]],standalone:!0,features:[n._Bn([C]),n.jDz],decls:6,vars:4,consts:[[4,"ngIf","ngIfElse"],["loading",""],[3,"source$"],[4,"ngFor","ngForOf","ngForTrackBy"],["item",""]],template:function(e,a){if(1&e&&(n.TgZ(0,"h1"),n._uU(1,"Cats facts!"),n.qZA(),n.YNc(2,G,3,3,"ng-container",0),n.ALo(3,"async"),n.YNc(4,K,1,0,"ng-template",null,1,n.W1O)),2&e){const r=n.MAs(5);n.xp6(2),n.Q6J("ngIf",n.lcZ(3,2,a.facts$))("ngIfElse",r)}},dependencies:[h.ax,h.O5,h.Ov,j,w],styles:["app-cat-card[_ngcontent-%COMP%]{margin-bottom:8px}"]}),t})()}]}}]);