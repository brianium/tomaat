// Compiled by ClojureScript 1.9.908 {:target :nodejs}
goog.provide('figwheel.connect.build_main_dev');
goog.require('cljs.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
goog.require('tomaat.main.core');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__40088__delegate = function (x){
if(cljs.core.truth_(tomaat.main.core.reload)){
return cljs.core.apply.call(null,tomaat.main.core.reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'tomaat.main.core/reload' is missing");
}
};
var G__40088 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__40089__i = 0, G__40089__a = new Array(arguments.length -  0);
while (G__40089__i < G__40089__a.length) {G__40089__a[G__40089__i] = arguments[G__40089__i + 0]; ++G__40089__i;}
  x = new cljs.core.IndexedSeq(G__40089__a,0,null);
} 
return G__40088__delegate.call(this,x);};
G__40088.cljs$lang$maxFixedArity = 0;
G__40088.cljs$lang$applyTo = (function (arglist__40090){
var x = cljs.core.seq(arglist__40090);
return G__40088__delegate(x);
});
G__40088.cljs$core$IFn$_invoke$arity$variadic = G__40088__delegate;
return G__40088;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"main-dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=build_main_dev.js.map?rel=1510360383374
