// Compiled by ClojureScript 1.9.908 {:target :nodejs}
goog.provide('figwheel.connect.build_main_dev');
goog.require('cljs.core');
goog.require('main.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__58612__delegate = function (x){
if(cljs.core.truth_(main.core.reload)){
return cljs.core.apply.call(null,main.core.reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'main.core/reload' is missing");
}
};
var G__58612 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__58613__i = 0, G__58613__a = new Array(arguments.length -  0);
while (G__58613__i < G__58613__a.length) {G__58613__a[G__58613__i] = arguments[G__58613__i + 0]; ++G__58613__i;}
  x = new cljs.core.IndexedSeq(G__58613__a,0,null);
} 
return G__58612__delegate.call(this,x);};
G__58612.cljs$lang$maxFixedArity = 0;
G__58612.cljs$lang$applyTo = (function (arglist__58614){
var x = cljs.core.seq(arglist__58614);
return G__58612__delegate(x);
});
G__58612.cljs$core$IFn$_invoke$arity$variadic = G__58612__delegate;
return G__58612;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"main-dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=build_main_dev.js.map?rel=1510234293551
