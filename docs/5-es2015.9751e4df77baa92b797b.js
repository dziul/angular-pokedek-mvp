(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{ywpW:function(e,t,n){"use strict";n.r(t),n.d(t,"PokedekModule",(function(){return Qe})),n("8LU1");var i=n("fXoL"),o=n("XNiG"),s=n("LRne"),r=(n("HDdC"),n("xgIS")),a=n("VRyK"),c=n("3N8a"),l=n("IjjT"),p=n("quSY"),d=n("7o/Q");n("3UWI"),n("pLZG"),n("1G5W"),n("JX91"),n("eIep");class u extends c.a{constructor(e,t){super(e,t),this.scheduler=e,this.work=t}schedule(e,t=0){return t>0?super.schedule(e,t):(this.delay=t,this.state=e,this.scheduler.flush(this),this)}execute(e,t){return t>0||this.closed?super.execute(e,t):this._execute(e,t)}requestAsyncId(e,t,n=0){return null!==n&&n>0||null===n&&this.delay>0?super.requestAsyncId(e,t,n):e.flush(this)}}class h extends l.a{}const f=new h(u);var g=n("EY2u"),b=n("z6cu");let m=(()=>{class e{constructor(e,t,n){this.kind=e,this.value=t,this.error=n,this.hasValue="N"===e}observe(e){switch(this.kind){case"N":return e.next&&e.next(this.value);case"E":return e.error&&e.error(this.error);case"C":return e.complete&&e.complete()}}do(e,t,n){switch(this.kind){case"N":return e&&e(this.value);case"E":return t&&t(this.error);case"C":return n&&n()}}accept(e,t,n){return e&&"function"==typeof e.next?this.observe(e):this.do(e,t,n)}toObservable(){switch(this.kind){case"N":return Object(s.a)(this.value);case"E":return Object(b.a)(this.error);case"C":return Object(g.b)()}throw new Error("unexpected notification kind value")}static createNext(t){return void 0!==t?new e("N",t):e.undefinedValueNotification}static createError(t){return new e("E",void 0,t)}static createComplete(){return e.completeNotification}}return e.completeNotification=new e("C"),e.undefinedValueNotification=new e("N",void 0),e})();class k extends d.a{constructor(e,t,n=0){super(e),this.scheduler=t,this.delay=n}static dispatch(e){const{notification:t,destination:n}=e;t.observe(n),this.unsubscribe()}scheduleMessage(e){this.destination.add(this.scheduler.schedule(k.dispatch,this.delay,new _(e,this.destination)))}_next(e){this.scheduleMessage(m.createNext(e))}_error(e){this.scheduleMessage(m.createError(e)),this.unsubscribe()}_complete(){this.scheduleMessage(m.createComplete()),this.unsubscribe()}}class _{constructor(e,t){this.notification=e,this.destination=t}}var x=n("9ppp"),w=n("Ylt2");class y extends o.a{constructor(e=Number.POSITIVE_INFINITY,t=Number.POSITIVE_INFINITY,n){super(),this.scheduler=n,this._events=[],this._infiniteTimeWindow=!1,this._bufferSize=e<1?1:e,this._windowTime=t<1?1:t,t===Number.POSITIVE_INFINITY?(this._infiniteTimeWindow=!0,this.next=this.nextInfiniteTimeWindow):this.next=this.nextTimeWindow}nextInfiniteTimeWindow(e){const t=this._events;t.push(e),t.length>this._bufferSize&&t.shift(),super.next(e)}nextTimeWindow(e){this._events.push(new v(this._getNow(),e)),this._trimBufferThenGetEvents(),super.next(e)}_subscribe(e){const t=this._infiniteTimeWindow,n=t?this._events:this._trimBufferThenGetEvents(),i=this.scheduler,o=n.length;let s;if(this.closed)throw new x.a;if(this.isStopped||this.hasError?s=p.a.EMPTY:(this.observers.push(e),s=new w.a(this,e)),i&&e.add(e=new k(e,i)),t)for(let r=0;r<o&&!e.closed;r++)e.next(n[r]);else for(let r=0;r<o&&!e.closed;r++)e.next(n[r].value);return this.hasError?e.error(this.thrownError):this.isStopped&&e.complete(),s}_getNow(){return(this.scheduler||f).now()}_trimBufferThenGetEvents(){const e=this._getNow(),t=this._bufferSize,n=this._windowTime,i=this._events,o=i.length;let s=0;for(;s<o&&!(e-i[s].time<n);)s++;return o>t&&(s=Math.max(s,o-t)),s>0&&i.splice(0,s),i}}class v{constructor(e,t){this.time=e,this.value=t}}var P=n("nLfN"),O=n("ofXK"),I=n("cH1L");let M=(()=>{class e{}return e.\u0275mod=i.Jb({type:e}),e.\u0275inj=i.Ib({factory:function(t){return new(t||e)}}),e})(),C=(()=>{class e{}return e.\u0275mod=i.Jb({type:e}),e.\u0275inj=i.Ib({factory:function(t){return new(t||e)},imports:[[I.a,P.b,M],I.a,M]}),e})();var j=n("3Pt+"),N=n("tyNb"),E=n("iIjj");let L=(()=>{class e{}return e.\u0275mod=i.Jb({type:e}),e.\u0275inj=i.Ib({factory:function(t){return new(t||e)},imports:[[O.c,E.a,N.g,j.c]]}),e})();var z=n("2Vo4"),B=n("D0XW");class Q{constructor(e,t){this.delay=e,this.scheduler=t}call(e,t){return t.subscribe(new $(e,this.delay,this.scheduler))}}class $ extends d.a{constructor(e,t,n){super(e),this.delay=t,this.scheduler=n,this.queue=[],this.active=!1,this.errored=!1}static dispatch(e){const t=e.source,n=t.queue,i=e.scheduler,o=e.destination;for(;n.length>0&&n[0].time-i.now()<=0;)n.shift().notification.observe(o);if(n.length>0){const t=Math.max(0,n[0].time-i.now());this.schedule(e,t)}else this.unsubscribe(),t.active=!1}_schedule(e){this.active=!0,this.destination.add(e.schedule($.dispatch,this.delay,{source:this,destination:this.destination,scheduler:e}))}scheduleNotification(e){if(!0===this.errored)return;const t=this.scheduler,n=new D(t.now()+this.delay,e);this.queue.push(n),!1===this.active&&this._schedule(t)}_next(e){this.scheduleNotification(m.createNext(e))}_error(e){this.errored=!0,this.queue=[],this.destination.error(e),this.unsubscribe()}_complete(){this.scheduleNotification(m.createComplete()),this.unsubscribe()}}class D{constructor(e,t){this.time=e,this.notification=t}}var T=n("vkgz"),V=n("JIr8"),A=n("NXyV");const F=e=>t=>Object(A.a)(()=>(e(),t));var S=n("Zq6G"),G=n("cp0P"),X=n("oB13");function Y(e,t,n,i){n&&"function"!=typeof n&&(i=n);const o="function"==typeof n?n:void 0,s=new y(e,t,i);return e=>Object(X.a)(()=>s,o)(e)}var W=n("x+ZX");const J=()=>e=>e.pipe(Y(1),Object(W.a)());class q{constructor(e,t){this.count=e,this.source=t}call(e,t){return t.subscribe(new K(e,this.count,this.source))}}class K extends d.a{constructor(e,t,n){super(e),this.count=t,this.source=n}error(e){if(!this.isStopped){const{source:t,count:n}=this;if(0===n)return super.error(e);n>-1&&(this.count=n-1),t.subscribe(this._unsubscribeAndRecycle())}}}var R=n("IzEk"),Z=n("5+tZ"),H=n("lJxs"),U=n("0EUg"),ee=n("128B");function te(e,t,n){return 0===n?[t]:(e.push(t),e)}function ne(){return Object(ee.a)(te,[])}var ie=n("bHdf"),oe=n("tk/3");let se=(()=>{class e{constructor(e){this.http=e,this.languageDefault="en",this.languageOriginal="ja"}get(e){return this.http.get(e).pipe(function(e=-1){return t=>t.lift(new q(e,t))}(2),Object(R.a)(1))}getAllGeneration(){return this.get("/generation").pipe(Object(Z.a)(e=>e.results),Object(H.a)(e=>this.get(e.url)),Object(U.a)(),Object(H.a)(e=>{const t=this.searchFilterDataByLanguage(e.names,"name");return{name:{id:e.name,original:t.original,default:t.default},id:e.id,pokemons:[...e.pokemon_species.map(e=>{const t=e.url.replace(/.*\/(\d+).?$/,"$1");return Object.assign(Object.assign({},e),{id:t.length&&Number(t),imageIcon:this.getPokemonImageIcon(e.name)})}).sort((e,t)=>e.id-t.id)]}}),ne())}getAllPokemons(){return this.getAllGeneration().pipe(Object(ie.a)(),function(...e){const t=e.length;if(0===t)throw new Error("list of properties cannot be empty.");return n=>Object(H.a)(function(e,t){return n=>{let i=n;for(let o=0;o<t;o++){const t=i[e[o]];if(void 0===t)return;i=t}return i}}(e,t))(n)}("pokemons"),Object(U.a)(),ne())}pokemonSpecieParser(e){return e.pipe(Object(Z.a)(e=>Object(G.a)({base:Object(s.a)(e),evolutionChain:this.get(e.evolution_chain.url),generation:this.generationParser(this.get(e.generation.url))})))}getPokemon(e){return this.get(`/pokemon/${e}`).pipe(Object(Z.a)(e=>Object(G.a)({base:Object(s.a)(e),species:this.pokemonSpecieParser(this.get(e.species.url)),type:Object(a.a)(...e.types.map(e=>this.get(e.type.url))).pipe(ne())})),Object(H.a)(e=>{const{base:t,species:n}=e,i=this.searchFilterDataByLanguage(n.base.names,"name");return{height:Number((.1*t.height).toFixed(1)),weight:Number((.1*t.weight).toFixed(1)),description:this.searchFilterDataByLanguage(n.base.flavor_text_entries,"flavor_text").default.replace(/(\r\n|\n|\r|\u000c)/gm," "),image:{default:this.getPokemonImageDefault(n.base.id),icon:this.getPokemonImageIcon(t.name)},name:{original:i.original,id:t.name,default:i.default},id:n.base.id,generation:n.generation}}))}typeParser(e){return e}generationParser(e){return e.pipe(Object(H.a)(e=>{const t=this.searchFilterDataByLanguage(e.names,"name");return{id:e.id,name:Object.assign(Object.assign({},t),{id:e.name})}}))}searchFilterDataByLanguage(e,t){return e.reduce((e,n)=>(n.language.name===this.languageDefault&&(e=Object.assign(Object.assign({},e),{default:n[t]})),n.language.name===this.languageOriginal&&(e=Object.assign(Object.assign({},e),{original:n[t]})),e),{})}getPokemonImageDefault(e){return`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${((e,t=2)=>e.toString().padStart(t,"0"))(e,3)}.png`}getPokemonImageIcon(e){return`https://img.pokemondb.net/sprites/sword-shield/icon/${e}.png`}}return e.\u0275fac=function(t){return new(t||e)(i.Ub(oe.b))},e.\u0275prov=i.Hb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),re=(()=>{class e{constructor(e){this.api=e,this.pokemons={}}onlyOneEmitter(e){return e.pipe(Y(1),Object(W.a)())}getPokemonList(){return this.pokelist$||(this.pokelist$=this.api.getAllPokemons().pipe(J())),this.pokelist$}getGenerationList(){return this.generationList$||(this.generationList$=this.api.getAllGeneration().pipe(J())),this.generationList$}getPokemonInformation(e){return this.pokemons[e]||(this.pokemons[e]=this.api.getPokemon(e).pipe(J())),this.pokemons[e]}getAllPokemonInformation(){return Object(G.a)(this.pokemons)}}return e.\u0275fac=function(t){return new(t||e)(i.Ub(se))},e.\u0275prov=i.Hb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var ae=n("u47x"),ce=n("nYR2");let le=(()=>{class e{constructor(e){this.hostElement=e}focus(){this.hostElement.nativeElement.focus()}}return e.\u0275fac=function(t){return new(t||e)(i.Lb(i.l))},e.\u0275dir=i.Gb({type:e,selectors:[["","keyboardNavigableItem",""]],inputs:{value:["keyboardNavigableItem","value"]}}),e})();var pe=n("bTqV"),de=n("kmnG"),ue=n("NFeN");let he=(()=>{class e{transform(e,t){return e.filter(e=>-1!==`${e.name} ${e.id}`.indexOf(t.trim().toLowerCase()))}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275pipe=i.Kb({name:"where",type:e,pure:!0}),e})();const fe=["input"],ge=["lazy"];function be(e,t){if(1&e){const e=i.Rb();i.Qb(0,"button",6),i.Yb("click",(function(){return i.nc(e),i.cc(2).inputValue=""})),i.Qb(1,"mat-icon"),i.vc(2,"close"),i.Pb(),i.Pb()}}function me(e,t){if(1&e){const e=i.Rb();i.Qb(0,"label",2),i.Qb(1,"input",3,4),i.Yb("ngModelChange",(function(t){return i.nc(e),i.cc().inputValue=t}))("keydown",(function(t){return i.nc(e),i.cc().onKeyDownInput(t)})),i.Pb(),i.tc(3,be,3,0,"button",5),i.Pb()}if(2&e){const e=i.cc();i.Bb(1),i.ic("ngModel",e.inputValue),i.Bb(2),i.ic("ngIf",e.inputValue)}}const ke=function(e){return["/pokedek",e]};function _e(e,t){if(1&e){const e=i.Rb();i.Qb(0,"li",9),i.Qb(1,"a",10,11),i.Yb("click",(function(){i.nc(e);const n=t.index;return i.cc(2).onClick(n)})),i.Qb(3,"h4",12),i.vc(4),i.Qb(5,"small"),i.vc(6),i.Pb(),i.Pb(),i.Mb(7,"img",13,14),i.Pb(),i.Pb()}if(2&e){const e=t.$implicit;i.Bb(1),i.ic("routerLink",i.kc(7,ke,e.id))("keyboardNavigableItem",e.name),i.Bb(3),i.xc(" ",e.name," "),i.Bb(2),i.xc("#",e.id,""),i.Bb(1),i.ic("alt",e.name),i.Cb("data-src",e.imageIcon)("aria-hidden",!0)}}function xe(e,t){if(1&e){const e=i.Rb();i.Qb(0,"ul",7),i.Yb("keydown",(function(t){return i.nc(e),i.cc().onKeyDown(t)})),i.tc(1,_e,9,9,"li",8),i.dc(2,"where"),i.Pb()}if(2&e){const e=t.ngIf,n=i.cc();i.Bb(1),i.ic("ngForOf",i.fc(2,1,e,n.inputValue))}}let we=(()=>{class e{constructor(e,t){this.store=e,this.renderer2=t,this.inputValue="",this.loading$=new z.a(!1),this.afterViewInit=!1,this.focusByInput=!1}ngOnInit(){this.list$=this.store.getPokemonList().pipe(F(()=>this.loading$.next(!0)),Object(ce.a)(()=>{this.loading$.next(!1)}))}ngAfterViewInit(){this.keyManager=new ae.a(this.options);const e=new IntersectionObserver((t,n)=>{for(const i of t)i.isIntersecting&&(this.renderer2.setAttribute(i.target,"src",i.target.dataset.src),this.renderer2.addClass(i.target,"checked"),this.renderer2.setAttribute(i.target,"aria-hidden","false"),e.unobserve(i.target))},{rootMargin:"100px"});this.imagesElement.changes.subscribe(t=>{t.forEach(t=>{e.observe(t.nativeElement)})}),this.afterViewInit=!0}onKeyDown(e){switch(e.key.toLowerCase()){case"arrowup":0===this.keyManager.activeItemIndex&&this.focusByInput?(this.focusByInput=!1,this.inputElement.nativeElement.select()):this.keyManager.onKeydown(e);break;case"home":this.keyManager.setFirstItemActive();break;case"end":this.keyManager.setLastItemActive();break;default:this.keyManager.onKeydown(e)}}onKeyDownInput(e){switch(e.key.toLowerCase()){case"arrowdown":this.keyManager.setFirstItemActive()}this.focusByInput=!0}onClick(e){console.log(e),this.keyManager.setActiveItem(e)}}return e.\u0275fac=function(t){return new(t||e)(i.Lb(re),i.Lb(i.E))},e.\u0275cmp=i.Fb({type:e,selectors:[["app-poke-select"]],viewQuery:function(e,t){var n;1&e&&(i.yc(fe,!0,i.l),i.yc(ge,!0,i.l),i.yc(le,!0)),2&e&&(i.lc(n=i.Zb())&&(t.inputElement=n.first),i.lc(n=i.Zb())&&(t.imagesElement=n),i.lc(n=i.Zb())&&(t.options=n))},decls:3,vars:4,consts:[["class","poke-select__input",4,"ngIf"],["class","poke-select__select","role","listbox",3,"keydown",4,"ngIf"],[1,"poke-select__input"],["type","text","placeholder","Search by name or id...",3,"ngModel","ngModelChange","keydown"],["input",""],["mat-button","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click",4,"ngIf"],["mat-button","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click"],["role","listbox",1,"poke-select__select",3,"keydown"],["class","poke-select__option","role","listitem",4,"ngFor","ngForOf"],["role","listitem",1,"poke-select__option"],["mat-button","","routerLinkActive","active",3,"routerLink","keyboardNavigableItem","click"],["linkActive","routerLinkActive"],[1,"poke-select__text"],[1,"poke-select__image",3,"alt"],["lazy",""]],template:function(e,t){1&e&&(i.tc(0,me,4,2,"label",0),i.tc(1,xe,3,4,"ul",1),i.dc(2,"async")),2&e&&(i.ic("ngIf",t.afterViewInit),i.Bb(1),i.ic("ngIf",i.ec(2,2,t.list$)))},directives:[O.j,j.a,j.e,j.g,pe.b,de.c,ue.a,O.i,pe.a,N.f,N.e,le],pipes:[O.b,he],styles:["[_nghost-%COMP%]{-ms-flex-direction:column;flex-direction:column;height:100%}[_nghost-%COMP%], [_nghost-%COMP%]   .poke-select__input[_ngcontent-%COMP%]{display:-ms-flexbox;display:flex}[_nghost-%COMP%]   .poke-select__input[_ngcontent-%COMP%]{position:-webkit-sticky;position:sticky;top:0;z-index:2;-ms-flex-pack:end;justify-content:flex-end;width:100%;background:#fff;padding:12px 16px;box-sizing:border-box}[_nghost-%COMP%]   .poke-select__input[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]{font-size:14px;line-height:24px;box-sizing:border-box;border:0;width:100%;background:none;text-align:right}[_nghost-%COMP%]   .poke-select__select[_ngcontent-%COMP%]{-ms-flex-positive:1;flex-grow:1;-ms-flex-preferred-size:0;flex-basis:0;overflow:hidden;overflow-y:auto;box-sizing:border-box}[_nghost-%COMP%]   .poke-select__text[_ngcontent-%COMP%]{margin:0 8px 0 0}[_nghost-%COMP%]   .poke-select__text[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:80%;opacity:.4}[_nghost-%COMP%]   .poke-select__image[_ngcontent-%COMP%]{width:100%;max-width:56px;min-height:42px;transition:opacity .5s;opacity:0}[_nghost-%COMP%]   .poke-select__image.checked[_ngcontent-%COMP%]{opacity:1}"],changeDetection:0}),e})();const ye=["picture"];let ve=(()=>{class e{constructor(){this.src="",this.alt="",this.loaded=new i.n}ngOnInit(){}ngAfterViewInit(){Object(r.a)(this.pictureElement.nativeElement,"load").subscribe(e=>{console.log(e),this.loaded.emit(!0)})}ngOnDestroy(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Fb({type:e,selectors:[["app-picture"]],viewQuery:function(e,t){var n;1&e&&i.yc(ye,!0,i.l),2&e&&i.lc(n=i.Zb())&&(t.pictureElement=n.first)},inputs:{src:"src",alt:"alt"},outputs:{loaded:"loaded"},decls:2,vars:2,consts:[[1,"poke-picture",3,"src","alt"],["picture",""]],template:function(e,t){1&e&&i.Mb(0,"img",0,1),2&e&&(i.jc("src",t.src,i.oc),i.jc("alt",t.alt))},styles:[".poke-picture[_ngcontent-%COMP%] {\n        max-width: inherit;\n        max-height: inherit;\n      }"]}),e})();const Pe=["*"];let Oe=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Fb({type:e,selectors:[["app-pokeball-loader"]],ngContentSelectors:Pe,decls:3,vars:0,consts:[["role","img","attr.aria-label","pok\xe9ball",1,"pokeball-loader"],[1,"pokeball-loader__content"]],template:function(e,t){1&e&&(i.hc(),i.Qb(0,"span",0),i.Mb(1,"span",1),i.Pb(),i.gc(2))},styles:['[_nghost-%COMP%]{-ms-flex-align:center;align-items:center;width:100%;height:100%;position:absolute;left:0;top:0}.pokeball-loader[_ngcontent-%COMP%], [_nghost-%COMP%]{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}.pokeball-loader[_ngcontent-%COMP%]{position:relative;width:46px;height:46px}.pokeball-loader[_ngcontent-%COMP%]:after{content:"";background:rgba(0,0,0,.2);height:5px;width:60%;border-radius:100%;position:absolute;bottom:-2px}.pokeball-loader[_ngcontent-%COMP%]:before{content:"";position:absolute;background-color:red;width:6px;height:6px;border-radius:50%;bottom:20px;right:20px;z-index:4;-webkit-animation:capturing .6s ease-in-out infinite alternate,flare 1s ease-in-out infinite alternate;animation:capturing .6s ease-in-out infinite alternate,flare 1s ease-in-out infinite alternate}.pokeball-loader__content[_ngcontent-%COMP%]{box-sizing:border-box;z-index:2;display:block;width:100%;height:1005;background-color:#fff;border-radius:50%;position:relative;overflow:hidden;border:2px solid;-webkit-animation:capturing .6s ease-in-out infinite alternate;animation:capturing .6s ease-in-out infinite alternate}.pokeball-loader__content[_ngcontent-%COMP%]:after{content:"";position:absolute;width:46px;height:23px;background-color:red;border-bottom:4px solid;top:-4px}.pokeball-loader__content[_ngcontent-%COMP%]:before{content:"";position:absolute;background-color:#fff;width:10px;height:10px;border:4px solid;border-radius:50%;bottom:12px;right:12px;z-index:1}@-webkit-keyframes capturing{0%,90%{transform:rotate(0deg) translatex(0)}20%,80%{transform:rotate(12deg) translatex(1px)}50%,to{transform:rotate(-12deg) translatex(-2px)}}@keyframes capturing{0%,90%{transform:rotate(0deg) translatex(0)}20%,80%{transform:rotate(12deg) translatex(1px)}50%,to{transform:rotate(-12deg) translatex(-2px)}}@-webkit-keyframes flare{0%,80%{opacity:.2}20%,to{opacity:.6}}@keyframes flare{0%,80%{opacity:.2}20%,to{opacity:.6}}']}),e})();function Ie(e,t){if(1&e&&(i.Qb(0,"div",9),i.Qb(1,"small",10),i.vc(2),i.Pb(),i.Qb(3,"h2",11),i.vc(4),i.Qb(5,"small"),i.vc(6),i.Pb(),i.Pb(),i.Qb(7,"p",12),i.vc(8),i.Pb(),i.Qb(9,"span"),i.vc(10),i.Pb(),i.Mb(11,"br"),i.Qb(12,"span"),i.vc(13),i.Pb(),i.Qb(14,"span",13),i.vc(15),i.Pb(),i.Pb()),2&e){const e=i.cc().ngIf;i.Bb(2),i.wc(e.generation.name.default),i.Bb(2),i.xc(" ",e.name.default,""),i.Bb(2),i.xc("#",e.id,""),i.Bb(2),i.xc(" ",e.description," "),i.Bb(2),i.xc("height: ",e.height,"m"),i.Bb(3),i.xc("weight: ",e.weight,"kg"),i.Bb(2),i.wc(e.name.original)}}function Me(e,t){if(1&e){const e=i.Rb();i.Qb(0,"div",6),i.tc(1,Ie,16,7,"div",7),i.dc(2,"async"),i.Qb(3,"app-picture",8),i.Yb("loaded",(function(t){return i.nc(e),i.cc().onImageLoaded(t)})),i.Pb(),i.Pb()}if(2&e){const e=t.ngIf,n=i.cc(),o=i.mc(7);i.Bb(1),i.ic("ngIf",i.ec(2,4,n.imageLoaded$))("ngIfElse",o),i.Bb(2),i.ic("src",e.image.default)("alt",e.name.default)}}function Ce(e,t){if(1&e&&(i.Qb(0,"div",9),i.Qb(1,"div",15),i.Mb(2,"img",16),i.Qb(3,"p",17),i.vc(4,' This pok\xe9mon "'),i.Qb(5,"span"),i.vc(6),i.Pb(),i.vc(7,"\" doesn't exist, guy! "),i.Pb(),i.Pb(),i.Pb()),2&e){const e=t.ngIf;i.Bb(6),i.wc(e)}}function je(e,t){1&e&&(i.Qb(0,"app-pokeball-loader",18),i.Qb(1,"span"),i.vc(2,"Loading..."),i.Pb(),i.Pb())}function Ne(e,t){if(1&e&&(i.tc(0,Ce,8,1,"div",7),i.dc(1,"async"),i.tc(2,je,3,0,"ng-template",null,14,i.uc)),2&e){const e=i.mc(3),t=i.cc();i.ic("ngIf",i.ec(1,2,t.error$))("ngIfElse",e)}}function Ee(e,t){1&e&&(i.Qb(0,"app-pokeball-loader",18),i.Qb(1,"span"),i.vc(2,"Loading..."),i.Pb(),i.Pb())}let Le=(()=>{class e{constructor(e,t,n,i){this.route=e,this.router=t,this.htmlDocument=n,this.store=i,this.imageLoaded$=new z.a(!1),this.error$=new o.a,this.paramsId$=new o.a}ngOnInit(){this.route.params.subscribe(e=>{this.information$=this.store.getPokemonInformation(e.id).pipe(F(()=>{this.imageLoaded$.next(!1),this.error$.next(void 0)}),function(e,t=B.a){var n;const i=(n=e)instanceof Date&&!isNaN(+n)?+e-t.now():Math.abs(e);return e=>e.lift(new Q(i,t))}(1e3),Object(T.a)(e=>{this.htmlDocument.setTitle(`Pok\xe9mon ${e.name.default}`),this.htmlDocument.setMetaDescription(`${e.name.default}, ${e.description}`)}),Object(V.a)(t=>(this.error$.next(e.id),Object(g.b)())))})}onImageLoaded(e){this.imageLoaded$.next(e)}ngOnDestroy(){}}return e.\u0275fac=function(t){return new(t||e)(i.Lb(N.a),i.Lb(N.d),i.Lb(S.a),i.Lb(re))},e.\u0275cmp=i.Fb({type:e,selectors:[["app-pokedek"]],decls:9,vars:4,consts:[[1,"pokedek"],[1,"pokedek__content"],["class","pokedek__info",4,"ngIf","ngIfElse"],["loadingError",""],["loaderSecond",""],[1,"pokedek__select"],[1,"pokedek__info"],["class","pokedek__info__content",4,"ngIf","ngIfElse"],[1,"pokedek__info__image",3,"src","alt","loaded"],[1,"pokedek__info__content"],[1,"pokedek__info__small"],[1,"pokedek__info__name"],[1,"pokedek__info__description"],[1,"pokedek__info__water-mark"],["loading",""],[1,"pokedek__error-content"],["src","../../assets/images/ash-meme-ffuu-edited.png",1,"pokedek__error-image"],[1,"pokedek__error-text"],[1,"pokedek__loader"]],template:function(e,t){if(1&e&&(i.Qb(0,"div",0),i.Qb(1,"div",1),i.tc(2,Me,4,6,"div",2),i.dc(3,"async"),i.tc(4,Ne,4,4,"ng-template",null,3,i.uc),i.tc(6,Ee,3,0,"ng-template",null,4,i.uc),i.Pb(),i.Mb(8,"app-poke-select",5),i.Pb()),2&e){const e=i.mc(5);i.Bb(2),i.ic("ngIf",i.ec(3,2,t.information$))("ngIfElse",e)}},directives:[O.j,we,ve,Oe],pipes:[O.b],styles:['.pokedek[_ngcontent-%COMP%]{height:100%;-ms-flex-pack:justify;justify-content:space-between;overflow:hidden;background:rgba(253,213,0,.5)}.pokedek[_ngcontent-%COMP%], .pokedek__content[_ngcontent-%COMP%]{display:-ms-flexbox;display:flex;-ms-flex-align:stretch;align-items:stretch}.pokedek__content[_ngcontent-%COMP%]{width:100%;background:#fdd500;position:relative;z-index:5;-ms-flex-positive:1;flex-grow:1;-ms-flex-preferred-size:0;flex-basis:0}.pokedek__content[_ngcontent-%COMP%]:after{content:"";height:100%;width:200px;position:absolute;right:0;background:inherit;-ms-transform:skew(-10deg) translateX(100px);transform:skew(-10deg) translateX(100px);z-index:0}.pokedek__info[_ngcontent-%COMP%]{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding:60px;box-sizing:border-box;z-index:2}.pokedek__info[_ngcontent-%COMP%], .pokedek__info__content[_ngcontent-%COMP%]{width:100%;position:relative}.pokedek__info__name[_ngcontent-%COMP%]{font-size:72px;line-height:1;text-transform:uppercase;font-weight:900}.pokedek__info__name[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:30%;padding-left:4px}@media (min-width:1281px){.pokedek__info__name[_ngcontent-%COMP%]{font-size:92px}}.pokedek__info__small[_ngcontent-%COMP%]{font-size:12px;display:block}.pokedek__info__description[_ngcontent-%COMP%]{padding-top:32px;font-size:16px;line-height:1.3;max-width:360px}@media (min-width:1281px){.pokedek__info__description[_ngcontent-%COMP%]{max-width:460px}}.pokedek__info__water-mark[_ngcontent-%COMP%]{position:absolute;top:-60px;left:0;font-size:120px;line-height:1;opacity:.05;white-space:nowrap}@media (min-width:1281px){.pokedek__info__water-mark[_ngcontent-%COMP%]{top:-90px;font-size:180px}}.pokedek__info__image[_ngcontent-%COMP%]{position:absolute;bottom:36px;right:-20%;display:block;width:100%;max-width:360px;max-height:520px}@media (min-width:1281px){.pokedek__info__image[_ngcontent-%COMP%]{right:-12%;max-width:460px}}.pokedek__select[_ngcontent-%COMP%]{height:100%;position:relative;width:30%}.pokedek__loader[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{font-size:16px;font-weight:700;padding-left:5px}.pokedek__error-content[_ngcontent-%COMP%]{position:fixed;display:-ms-flexbox;display:flex;-ms-flex-align:start;align-items:flex-start;-ms-flex-pack:start;justify-content:flex-start;bottom:0;left:0}.pokedek__error-text[_ngcontent-%COMP%]{max-width:220px;line-height:1.2;text-align:center;background:#fff;border-radius:20px;padding:20px;font-size:18px;position:relative;opacity:0;-webkit-animation:balon .2s .2s forwards;animation:balon .2s .2s forwards}.pokedek__error-text[_ngcontent-%COMP%]:before{content:"";display:block;width:20px;height:20px;background:inherit;position:absolute;left:30px;bottom:-10px;-ms-transform:skew(-40deg,4deg) rotate(-30deg);transform:skew(-40deg,4deg) rotate(-30deg);border-radius:0 0 10px 0}.pokedek__error-text[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{font-weight:700;text-transform:capitalize}.pokedek__error-image[_ngcontent-%COMP%]{max-height:360px;-ms-transform:translate(-380px,380px);transform:translate(-380px,380px);-webkit-animation:toastyyy .2s ease-out forwards;animation:toastyyy .2s ease-out forwards}@-webkit-keyframes toastyyy{0%{transform:translate(-380px,380px)}to{transform:translate(0)}}@keyframes toastyyy{0%{transform:translate(-380px,380px)}to{transform:translate(0)}}@-webkit-keyframes balon{0%{opacity:0;transform:translateX(-5px)}to{opacity:1;transform:translateX(0)}}@keyframes balon{0%{opacity:0;transform:translateX(-5px)}to{opacity:1;transform:translateX(0)}}']}),e})();const ze=[{path:":id",component:Le},{path:"",component:Le}];let Be=(()=>{class e{}return e.\u0275mod=i.Jb({type:e}),e.\u0275inj=i.Ib({factory:function(t){return new(t||e)},imports:[[N.g.forChild(ze)],N.g]}),e})(),Qe=(()=>{class e{}return e.\u0275mod=i.Jb({type:e}),e.\u0275inj=i.Ib({factory:function(t){return new(t||e)},imports:[[O.c,Be,C,E.a,L]]}),e})()}}]);