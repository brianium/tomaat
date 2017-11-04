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
var G__46448__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__46448 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46449__i = 0, G__46449__a = new Array(arguments.length -  0);
while (G__46449__i < G__46449__a.length) {G__46449__a[G__46449__i] = arguments[G__46449__i + 0]; ++G__46449__i;}
  args = new cljs.core.IndexedSeq(G__46449__a,0,null);
} 
return G__46448__delegate.call(this,args);};
G__46448.cljs$lang$maxFixedArity = 0;
G__46448.cljs$lang$applyTo = (function (arglist__46450){
var args = cljs.core.seq(arglist__46450);
return G__46448__delegate(args);
});
G__46448.cljs$core$IFn$_invoke$arity$variadic = G__46448__delegate;
return G__46448;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__46451__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__46451 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46452__i = 0, G__46452__a = new Array(arguments.length -  0);
while (G__46452__i < G__46452__a.length) {G__46452__a[G__46452__i] = arguments[G__46452__i + 0]; ++G__46452__i;}
  args = new cljs.core.IndexedSeq(G__46452__a,0,null);
} 
return G__46451__delegate.call(this,args);};
G__46451.cljs$lang$maxFixedArity = 0;
G__46451.cljs$lang$applyTo = (function (arglist__46453){
var args = cljs.core.seq(arglist__46453);
return G__46451__delegate(args);
});
G__46451.cljs$core$IFn$_invoke$arity$variadic = G__46451__delegate;
return G__46451;
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

//# sourceMappingURL=debug.js.map
