// Compiled by ClojureScript 1.9.908 {:target :nodejs}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__46830__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__46830 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46833__i = 0, G__46833__a = new Array(arguments.length -  0);
while (G__46833__i < G__46833__a.length) {G__46833__a[G__46833__i] = arguments[G__46833__i + 0]; ++G__46833__i;}
  args = new cljs.core.IndexedSeq(G__46833__a,0,null);
} 
return G__46830__delegate.call(this,args);};
G__46830.cljs$lang$maxFixedArity = 0;
G__46830.cljs$lang$applyTo = (function (arglist__46834){
var args = cljs.core.seq(arglist__46834);
return G__46830__delegate(args);
});
G__46830.cljs$core$IFn$_invoke$arity$variadic = G__46830__delegate;
return G__46830;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__46836__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__46836 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46837__i = 0, G__46837__a = new Array(arguments.length -  0);
while (G__46837__i < G__46837__a.length) {G__46837__a[G__46837__i] = arguments[G__46837__i + 0]; ++G__46837__i;}
  args = new cljs.core.IndexedSeq(G__46837__a,0,null);
} 
return G__46836__delegate.call(this,args);};
G__46836.cljs$lang$maxFixedArity = 0;
G__46836.cljs$lang$applyTo = (function (arglist__46838){
var args = cljs.core.seq(arglist__46838);
return G__46836__delegate(args);
});
G__46836.cljs$core$IFn$_invoke$arity$variadic = G__46836__delegate;
return G__46836;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1510360404458
