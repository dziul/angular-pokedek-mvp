(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{ywpW:function(t,e,n){"use strict";n.r(e),n.d(e,"PokedekModule",(function(){return tt}));var o=n("pdUi"),i=n("Valr"),a=n("QJY3"),r=n("iIjj"),c=n("DUip"),s=n("26FU"),p=n("K9Ia"),l=n("G5J1"),d=n("vubp"),f=n("xMyE"),u=n("9Z1F"),g=n("lYZG"),b=function(t){return function(e){return Object(g.a)((function(){return t(),e}))}},m=n("TYT/"),k=n("Zq6G"),_=n("JYg6"),h=n("9LEk"),x=n("2WpN"),y=function(){function t(t){this.hostElement=t}return t.prototype.focus=function(){this.hostElement.nativeElement.focus()},t.\u0275fac=function(e){return new(e||t)(m.Lb(m.l))},t.\u0275dir=m.Gb({type:t,selectors:[["","keyboardNavigableItem",""]],inputs:{value:["keyboardNavigableItem","value"]}}),t}(),w=n("p+mS"),v=n("eHTH"),P=n("GsDI"),C=n("Ew49"),M=n("bne5"),O=n("mrSG"),I=function(t,e,n){return(299*t+587*e+114*n)/1e3/255*100},Q=function(){function t(t){this.route=t,this.isActiveEmitter=new m.n,this.blackList=[[0,0,0],[62,62,62],[64,64,64],[77,87,106],[81,90,106],[235,240,237],[248,248,248],[255,255,255]]}return t.prototype.ngAfterViewInit=function(){var t=this;this.route.params.subscribe((function(e){var n=t.pokemon,o=n.id,i=n.name,a=e.id.toString().toLowerCase();[o.toString(),i].includes(a)&&t.getColors(t.pokemon.imageIcon)}))},t.prototype.getColors=function(t){var e=this,n=new Image;n.src=t,n.crossOrigin="Anonymous";var o=document.createElement("canvas").getContext("2d");Object(M.a)(n,"load").subscribe((function(t){var n=t.target;o.drawImage(n,0,0,n.width,n.height);var i,a,r,c,s=o.getImageData(0,0,n.width,n.height).data,p=(i=s,a=e.blackList,r=function(t){return(e=t,Array.from({length:Math.ceil(e.length/4)},(function(t,n){return Array.from(e.slice(4*n,4*n+4))}))).map((function(t){var e=t.pop();return t.push(e/255),t}));var e}(i).reduce((function(t,e){var n=e.join("-");return Array.isArray(a)&&a.some((function(t){return n.includes(t.join("-"))}))||(t[n]=t[n]?t[n]+1:1),t}),{}),c=Math.max.apply(Math,Object(O.d)(Object.values(r))),Object.keys(r).reduce((function(t,e){return r[e]===c&&t.push(e.split("-").map(Number)),t}),[])).sort((function(t,e){return I(t[0],t[1],t[2])-I(e[0],e[1],e[2])})).pop(),l=I(p[0],p[1],p[2])<50.19;e.isActiveEmitter.emit({color:p,isDark:l})}))},t.\u0275fac=function(e){return new(e||t)(m.Lb(c.a))},t.\u0275dir=m.Gb({type:t,selectors:[["","isActiveImage",""]],inputs:{pokemon:["isActiveImage","pokemon"]},outputs:{isActiveEmitter:"isActiveEmitter"}}),t}(),L=function(t){return t.normalize("NFD").replace(/[\u0300-\u036f]/g,"")},A=function(){function t(){}return t.prototype.transform=function(t,e){return t.filter((function(t){return-1!==L(t.name+" "+t.id).toLowerCase().indexOf(L(e.trim()).toLowerCase())}))},t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=m.Kb({name:"where",type:t,pure:!0}),t}(),z=["input"];function j(t,e){if(1&t){var n=m.Rb();m.Qb(0,"button",5),m.Yb("click",(function(){return m.nc(n),m.cc().inputValue=""})),m.Qb(1,"mat-icon"),m.vc(2,"close"),m.Pb(),m.Pb()}}var B=function(t){return["/pokedek",t]};function E(t,e){if(1&t){var n=m.Rb();m.Qb(0,"li",8),m.Qb(1,"a",9),m.Yb("click",(function(){m.nc(n);var t=e.index;return m.cc(2).onClick(t)})),m.Qb(2,"h4",10),m.vc(3),m.Qb(4,"small"),m.vc(5),m.Pb(),m.Pb(),m.Qb(6,"img",11),m.Yb("isActiveEmitter",(function(t){return m.nc(n),m.cc(2).onIsActiveImage(t)})),m.Pb(),m.Pb(),m.Pb()}if(2&t){var o=e.$implicit;m.Bb(1),m.ic("routerLink",m.kc(7,B,o.id))("keyboardNavigableItem",o.name),m.Bb(2),m.xc(" ",o.name," "),m.Bb(2),m.xc("#",o.id,""),m.Bb(1),m.ic("src",o.imageIcon,m.oc)("alt",o.name)("isActiveImage",o)}}function D(t,e){if(1&t){var n=m.Rb();m.Qb(0,"ul",6),m.Yb("keydown",(function(t){return m.nc(n),m.cc().onKeyDown(t)})),m.tc(1,E,7,9,"li",7),m.dc(2,"where"),m.Pb()}if(2&t){var o=e.ngIf,i=m.cc();m.Bb(1),m.ic("ngForOf",m.fc(2,1,o,i.inputValue))}}var S=function(){function t(t){this.store=t,this.getActivedImageColor=new m.n,this.inputValue="",this.loading$=new s.a(!1),this.focusByInput=!1}return t.prototype.ngOnInit=function(){var t=this;this.list$=this.store.getPokemonList().pipe(b((function(){return t.loading$.next(!0)})),Object(x.a)((function(){t.loading$.next(!1)})))},t.prototype.ngAfterViewInit=function(){this.keyManager=new h.b(this.options)},t.prototype.onKeyDown=function(t){switch(t.key.toLowerCase()){case"arrowup":0===this.keyManager.activeItemIndex&&this.focusByInput?(this.focusByInput=!1,this.inputElement.nativeElement.select()):this.keyManager.onKeydown(t);break;case"home":this.keyManager.setFirstItemActive();break;case"end":this.keyManager.setLastItemActive();break;default:this.keyManager.onKeydown(t)}},t.prototype.onKeyDownInput=function(t){switch(t.key.toLowerCase()){case"arrowdown":this.keyManager.setFirstItemActive()}this.focusByInput=!0},t.prototype.onClick=function(t){this.keyManager.setActiveItem(t)},t.prototype.onIsActiveImage=function(t){this.getActivedImageColor.emit(t)},t.\u0275fac=function(e){return new(e||t)(m.Lb(_.a))},t.\u0275cmp=m.Fb({type:t,selectors:[["app-select"]],viewQuery:function(t,e){var n;1&t&&(m.zc(z,!0,m.l),m.zc(y,!0)),2&t&&(m.lc(n=m.Zb())&&(e.inputElement=n.first),m.lc(n=m.Zb())&&(e.options=n))},outputs:{getActivedImageColor:"getActivedImageColor"},decls:6,vars:5,consts:[[1,"poke-select__input"],["type","text","placeholder","Search by name or id...",3,"ngModel","ngModelChange","keydown"],["input",""],["mat-button","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click",4,"ngIf"],["class","poke-select__select","role","listbox",3,"keydown",4,"ngIf"],["mat-button","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click"],["role","listbox",1,"poke-select__select",3,"keydown"],["class","poke-select__option","role","listitem",4,"ngFor","ngForOf"],["role","listitem",1,"poke-select__option"],["mat-button","","routerLinkActive","active",3,"routerLink","keyboardNavigableItem","click"],[1,"poke-select__text"],["routerLinkActive","active","lazySrcLoad","",1,"poke-select__image",3,"src","alt","isActiveImage","isActiveEmitter"]],template:function(t,e){1&t&&(m.Qb(0,"label",0),m.Qb(1,"input",1,2),m.Yb("ngModelChange",(function(t){return e.inputValue=t}))("keydown",(function(t){return e.onKeyDownInput(t)})),m.Pb(),m.tc(3,j,3,0,"button",3),m.Pb(),m.tc(4,D,3,4,"ul",4),m.dc(5,"async")),2&t&&(m.Bb(1),m.ic("ngModel",e.inputValue),m.Bb(2),m.ic("ngIf",e.inputValue),m.Bb(1),m.ic("ngIf",m.ec(5,3,e.list$)))},directives:[a.a,a.h,a.k,i.k,w.b,v.e,P.a,i.j,w.a,c.g,c.f,y,C.a,Q],pipes:[i.b,A],styles:["[_nghost-%COMP%]{-ms-flex-direction:column;flex-direction:column;height:100%}[_nghost-%COMP%], [_nghost-%COMP%]   .poke-select__input[_ngcontent-%COMP%]{display:-ms-flexbox;display:flex}[_nghost-%COMP%]   .poke-select__input[_ngcontent-%COMP%]{position:-webkit-sticky;position:sticky;top:0;z-index:2;-ms-flex-pack:end;justify-content:flex-end;width:100%;background:#fff;padding:12px 16px;box-sizing:border-box}[_nghost-%COMP%]   .poke-select__input[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]{font-size:14px;line-height:24px;box-sizing:border-box;border:0;width:100%;background:none;text-align:right}[_nghost-%COMP%]   .poke-select__select[_ngcontent-%COMP%]{-ms-flex-positive:1;flex-grow:1;-ms-flex-preferred-size:0;flex-basis:0;overflow:hidden;overflow-y:auto;box-sizing:border-box}[_nghost-%COMP%]   .poke-select__text[_ngcontent-%COMP%]{margin:0 8px 0 0}[_nghost-%COMP%]   .poke-select__text[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:80%;opacity:.4}[_nghost-%COMP%]   .poke-select__image[_ngcontent-%COMP%]{width:100%;max-width:56px;min-height:42px;transition:opacity .5s;opacity:0}[_nghost-%COMP%]   .poke-select__image.checked[_ngcontent-%COMP%]{opacity:1}"],changeDetection:0}),t}(),$=["picture"],F=function(){function t(){this.src="",this.alt="",this.loaded=new m.n}return t.prototype.ngOnInit=function(){},t.prototype.ngAfterViewInit=function(){var t=this;Object(M.a)(this.pictureElement.nativeElement,"load").subscribe((function(e){t.loaded.emit(!0)}))},t.prototype.ngOnDestroy=function(){},t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=m.Fb({type:t,selectors:[["app-picture"]],viewQuery:function(t,e){var n;1&t&&m.zc($,!0,m.l),2&t&&m.lc(n=m.Zb())&&(e.pictureElement=n.first)},inputs:{src:"src",alt:"alt"},outputs:{loaded:"loaded"},decls:2,vars:2,consts:[[1,"poke-picture",3,"src","alt"],["picture",""]],template:function(t,e){1&t&&m.Mb(0,"img",0,1),2&t&&(m.jc("src",e.src,m.oc),m.jc("alt",e.alt))},styles:[".poke-picture[_ngcontent-%COMP%] {\n        max-width: inherit;\n        max-height: inherit;\n      }"]}),t}(),Y=["*"],V=function(){function t(){}return t.prototype.ngOnInit=function(){},t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=m.Fb({type:t,selectors:[["app-pokeball-loader"]],ngContentSelectors:Y,decls:3,vars:0,consts:[["role","img","attr.aria-label","pok\xe9ball",1,"pokeball-loader"],[1,"pokeball-loader__content"]],template:function(t,e){1&t&&(m.hc(),m.Qb(0,"span",0),m.Mb(1,"span",1),m.Pb(),m.gc(2))},styles:['[_nghost-%COMP%]{-ms-flex-align:center;align-items:center;width:100%;height:100%;position:absolute;left:0;top:0}.pokeball-loader[_ngcontent-%COMP%], [_nghost-%COMP%]{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}.pokeball-loader[_ngcontent-%COMP%]{position:relative;width:46px;height:46px;color:#333}.pokeball-loader[_ngcontent-%COMP%]:after{content:"";background:rgba(0,0,0,.2);height:5px;width:60%;border-radius:100%;position:absolute;bottom:-2px}.pokeball-loader[_ngcontent-%COMP%]:before{content:"";position:absolute;background-color:red;width:6px;height:6px;border-radius:50%;bottom:20px;right:20px;z-index:4;-webkit-animation:capturing .6s ease-in-out infinite alternate,flare 1s ease-in-out infinite alternate;animation:capturing .6s ease-in-out infinite alternate,flare 1s ease-in-out infinite alternate}.pokeball-loader__content[_ngcontent-%COMP%]{box-sizing:border-box;z-index:2;display:block;width:100%;height:1005;background-color:#fff;border-radius:50%;position:relative;overflow:hidden;border:2px solid;-webkit-animation:capturing .6s ease-in-out infinite alternate;animation:capturing .6s ease-in-out infinite alternate}.pokeball-loader__content[_ngcontent-%COMP%]:after{content:"";position:absolute;width:46px;height:23px;background-color:red;border-bottom:4px solid;top:-4px}.pokeball-loader__content[_ngcontent-%COMP%]:before{content:"";position:absolute;background-color:#fff;width:10px;height:10px;border:4px solid;border-radius:50%;bottom:12px;right:12px;z-index:1}@-webkit-keyframes capturing{0%,90%{transform:rotate(0deg) translatex(0)}20%,80%{transform:rotate(12deg) translatex(1px)}50%,to{transform:rotate(-12deg) translatex(-2px)}}@keyframes capturing{0%,90%{transform:rotate(0deg) translatex(0)}20%,80%{transform:rotate(12deg) translatex(1px)}50%,to{transform:rotate(-12deg) translatex(-2px)}}@-webkit-keyframes flare{0%,80%{opacity:.2}20%,to{opacity:.6}}@keyframes flare{0%,80%{opacity:.2}20%,to{opacity:.6}}']}),t}();function X(t,e){if(1&t&&(m.Qb(0,"div",9),m.Qb(1,"small",10),m.vc(2),m.Pb(),m.Qb(3,"h2",11),m.vc(4),m.Qb(5,"small"),m.vc(6),m.Pb(),m.Pb(),m.Qb(7,"p",12),m.vc(8),m.Pb(),m.Qb(9,"span"),m.vc(10),m.Pb(),m.Mb(11,"br"),m.Qb(12,"span"),m.vc(13),m.Pb(),m.Qb(14,"span",13),m.vc(15),m.Pb(),m.Pb()),2&t){var n=m.cc().ngIf;m.Bb(2),m.wc(n.generation.name.default),m.Bb(2),m.xc(" ",n.name.default,""),m.Bb(2),m.xc("#",n.id,""),m.Bb(2),m.xc(" ",n.description," "),m.Bb(2),m.xc("height: ",n.height,"m"),m.Bb(3),m.xc("weight: ",n.weight,"kg"),m.Bb(2),m.wc(n.name.original)}}var G=function(t){return{loaded:t}};function J(t,e){if(1&t){var n=m.Rb();m.Qb(0,"div",6),m.tc(1,X,16,7,"div",7),m.dc(2,"async"),m.Qb(3,"app-picture",8),m.Yb("loaded",(function(t){return m.nc(n),m.cc().onImageLoaded(t)})),m.dc(4,"async"),m.Pb(),m.Pb()}if(2&t){var o=e.ngIf,i=m.cc(),a=m.mc(7);m.Bb(1),m.ic("ngIf",m.ec(2,5,i.imageLoaded$))("ngIfElse",a),m.Bb(2),m.ic("src",o.image.default)("alt",o.name.default)("ngClass",m.kc(9,G,m.ec(4,7,i.imageLoaded$)))}}function K(t,e){if(1&t&&(m.Qb(0,"div",9),m.Qb(1,"div",15),m.Mb(2,"img",16),m.Qb(3,"p",17),m.vc(4,' This pok\xe9mon "'),m.Qb(5,"span"),m.vc(6),m.Pb(),m.vc(7,"\" doesn't exist, guy! "),m.Pb(),m.Pb(),m.Pb()),2&t){var n=e.ngIf;m.Bb(6),m.wc(n)}}function N(t,e){1&t&&(m.Qb(0,"app-pokeball-loader",18),m.Qb(1,"span"),m.vc(2,"Loading..."),m.Pb(),m.Pb())}function T(t,e){if(1&t&&(m.tc(0,K,8,1,"div",7),m.dc(1,"async"),m.tc(2,N,3,0,"ng-template",null,14,m.uc)),2&t){var n=m.mc(3),o=m.cc();m.ic("ngIf",m.ec(1,2,o.error$))("ngIfElse",n)}}function Z(t,e){1&t&&(m.Qb(0,"app-pokeball-loader",18),m.Qb(1,"span"),m.vc(2,"Loading..."),m.Pb(),m.Pb())}var H=function(t){return{"background-color":t}},R=[{path:":id",component:function(){function t(t,e,n,o,i){this.route=t,this.renderer=e,this.elementHost=n,this.htmlDocument=o,this.store=i,this.imageLoaded$=new s.a(!1),this.error$=new p.a,this.paramsId$=new p.a,this.backgroundColorPrimary="rgba(253, 213, 0, 0.7)",this.backgroundColorSecondary="rgb(253, 213, 0)"}return t.prototype.ngOnInit=function(){var t=this;this.route.params.subscribe((function(e){t.information$=t.store.getPokemonInformation(e.id.toString().toLowerCase()).pipe(b((function(){t.imageLoaded$.next(!1),t.error$.next(void 0)})),Object(d.a)(1e3),Object(f.a)((function(e){t.htmlDocument.setTitle("Pok\xe9mon "+e.name.default),t.htmlDocument.setMetaDescription(e.name.default+", "+e.description)})),Object(u.a)((function(n){return t.error$.next(e.id),Object(l.b)()})))}))},t.prototype.onImageLoaded=function(t){this.imageLoaded$.next(t)},t.prototype.changeBackgroundColor=function(t){var e=t.color,n=t.isDark;this.backgroundColorPrimary="rgba("+e[0]+", "+e[1]+", "+e[2]+", 0.7)",this.backgroundColorSecondary="rgb("+e[0]+", "+e[1]+", "+e[2]+")",this.isDark=n},t.\u0275fac=function(e){return new(e||t)(m.Lb(c.a),m.Lb(m.E),m.Lb(m.l),m.Lb(k.a),m.Lb(_.a))},t.\u0275cmp=m.Fb({type:t,selectors:[["app-information"]],decls:9,vars:12,consts:[[1,"pokedek",3,"ngStyle"],[1,"pokedek__content",3,"ngStyle"],["class","pokedek__info",4,"ngIf","ngIfElse"],["loadingError",""],["loaderSecond",""],[1,"pokedek__select",3,"getActivedImageColor"],[1,"pokedek__info"],["class","pokedek__info__content",4,"ngIf","ngIfElse"],[1,"pokedek__info__image",3,"src","alt","ngClass","loaded"],[1,"pokedek__info__content"],[1,"pokedek__info__small"],[1,"pokedek__info__name"],[1,"pokedek__info__description"],[1,"pokedek__info__water-mark"],["loading",""],[1,"pokedek__error-content"],["src","./assets/images/ash-meme-ffuu-edited.png",1,"pokedek__error-image"],[1,"pokedek__error-text"],[1,"pokedek__loader"]],template:function(t,e){if(1&t&&(m.Qb(0,"div",0),m.Qb(1,"div",1),m.tc(2,J,5,11,"div",2),m.dc(3,"async"),m.tc(4,T,4,4,"ng-template",null,3,m.uc),m.tc(6,Z,3,0,"ng-template",null,4,m.uc),m.Pb(),m.Qb(8,"app-select",5),m.Yb("getActivedImageColor",(function(t){return e.changeBackgroundColor(t)})),m.Pb(),m.Pb()),2&t){var n=m.mc(5);m.Db("dark",e.isDark),m.ic("ngStyle",m.kc(8,H,e.backgroundColorPrimary)),m.Bb(1),m.ic("ngStyle",m.kc(10,H,e.backgroundColorSecondary)),m.Bb(1),m.ic("ngIf",m.ec(3,6,e.information$))("ngIfElse",n)}},directives:[i.l,i.k,S,F,i.i,V],pipes:[i.b],styles:['.pokedek[_ngcontent-%COMP%]{display:-ms-flexbox;display:flex;height:100%;-ms-flex-align:stretch;align-items:stretch;-ms-flex-pack:justify;justify-content:space-between;overflow:hidden;color:#333;transition:color background-color .3s}.pokedek.dark[_ngcontent-%COMP%]{color:#fff}.pokedek__content[_ngcontent-%COMP%]{display:-ms-flexbox;display:flex;-ms-flex-align:stretch;align-items:stretch;width:100%;transition:background-color .3s;position:relative;z-index:5;-ms-flex-positive:1;flex-grow:1;-ms-flex-preferred-size:0;flex-basis:0}.pokedek__content[_ngcontent-%COMP%]:after{content:"";height:100%;width:200px;position:absolute;right:0;background:inherit;-ms-transform:skew(-10deg) translateX(100px);transform:skew(-10deg) translateX(100px);z-index:0}.pokedek__info[_ngcontent-%COMP%]{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding:60px;box-sizing:border-box;z-index:2}.pokedek__info[_ngcontent-%COMP%], .pokedek__info__content[_ngcontent-%COMP%]{width:100%;position:relative}.pokedek__info__name[_ngcontent-%COMP%]{font-size:72px;line-height:1;text-transform:uppercase;font-weight:900}.pokedek__info__name[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:30%;padding-left:4px}@media (min-width:1281px){.pokedek__info__name[_ngcontent-%COMP%]{font-size:92px}}.pokedek__info__small[_ngcontent-%COMP%]{font-size:12px;display:block}.pokedek__info__description[_ngcontent-%COMP%]{padding-top:32px;font-size:16px;line-height:1.3;max-width:360px}@media (min-width:1281px){.pokedek__info__description[_ngcontent-%COMP%]{max-width:460px}}.pokedek__info__water-mark[_ngcontent-%COMP%]{position:absolute;top:-60px;left:0;font-size:120px;line-height:1;opacity:.1;white-space:nowrap}@media (min-width:1281px){.pokedek__info__water-mark[_ngcontent-%COMP%]{top:-90px;font-size:180px}}.pokedek__info__image[_ngcontent-%COMP%]{position:absolute;bottom:36px;right:-20%;display:block;width:100%;max-width:360px;max-height:520px;-ms-transform:translateX(-20px);transform:translateX(-20px);opacity:0;transition:transform .4s}.pokedek__info__image.loaded[_ngcontent-%COMP%]{-ms-transform:translateX(0);transform:translateX(0);-webkit-animation:fadeIn .2s;animation:fadeIn .2s;opacity:1}@media (min-width:1281px){.pokedek__info__image[_ngcontent-%COMP%]{right:-12%;max-width:460px}}.pokedek__select[_ngcontent-%COMP%]{height:100%;position:relative;width:30%}.pokedek__loader[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{font-size:16px;font-weight:700;padding-left:5px}.pokedek__error-content[_ngcontent-%COMP%]{position:fixed;display:-ms-flexbox;display:flex;-ms-flex-align:start;align-items:flex-start;-ms-flex-pack:start;justify-content:flex-start;bottom:0;left:0}.pokedek__error-text[_ngcontent-%COMP%]{max-width:220px;line-height:1.2;text-align:center;background:#fff;border-radius:20px;padding:20px;font-size:18px;position:relative;opacity:0;-webkit-animation:balon .2s .2s forwards;animation:balon .2s .2s forwards}.pokedek__error-text[_ngcontent-%COMP%]:before{content:"";display:block;width:20px;height:20px;background:inherit;position:absolute;left:30px;bottom:-10px;-ms-transform:skew(-40deg,4deg) rotate(-30deg);transform:skew(-40deg,4deg) rotate(-30deg);border-radius:0 0 10px 0}.pokedek__error-text[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{font-weight:700;text-transform:capitalize}.pokedek__error-image[_ngcontent-%COMP%]{max-height:360px;-ms-transform:translate(-380px,380px);transform:translate(-380px,380px);-webkit-animation:toastyyy .2s ease-out forwards;animation:toastyyy .2s ease-out forwards}@-webkit-keyframes toastyyy{0%{transform:translate(-380px,380px)}to{transform:translate(0)}}@keyframes toastyyy{0%{transform:translate(-380px,380px)}to{transform:translate(0)}}@-webkit-keyframes balon{0%{opacity:0;transform:translateX(-5px)}to{opacity:1;transform:translateX(0)}}@keyframes balon{0%{opacity:0;transform:translateX(-5px)}to{opacity:1;transform:translateX(0)}}@-webkit-keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}']}),t}()},{path:"**",redirectTo:"1"}],U=function(){function t(){}return t.\u0275mod=m.Jb({type:t}),t.\u0275inj=m.Ib({factory:function(e){return new(e||t)},imports:[[c.h.forChild(R)],c.h]}),t}(),W=n("yGOH"),q=function(){function t(){}return t.\u0275mod=m.Jb({type:t}),t.\u0275inj=m.Ib({factory:function(e){return new(e||t)},imports:[[i.c,r.a,c.h,a.e,W.a]]}),t}(),tt=function(){function t(){}return t.\u0275mod=m.Jb({type:t}),t.\u0275inj=m.Ib({factory:function(e){return new(e||t)},imports:[[i.c,U,o.c,r.a,q,a.e,a.l]]}),t}()}}]);