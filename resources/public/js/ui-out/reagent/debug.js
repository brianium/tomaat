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
var G__45498__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__45498 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45503__i = 0, G__45503__a = new Array(arguments.length -  0);
while (G__45503__i < G__45503__a.length) {G__45503__a[G__45503__i] = arguments[G__45503__i + 0]; ++G__45503__i;}
  args = new cljs.core.IndexedSeq(G__45503__a,0,null);
} 
return G__45498__delegate.call(this,args);};
G__45498.cljs$lang$maxFixedArity = 0;
G__45498.cljs$lang$applyTo = (function (arglist__45508){
var args = cljs.core.seq(arglist__45508);
return G__45498__delegate(args);
});
G__45498.cljs$core$IFn$_invoke$arity$variadic = G__45498__delegate;
return G__45498;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__45509__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__45509 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45511__i = 0, G__45511__a = new Array(arguments.length -  0);
while (G__45511__i < G__45511__a.length) {G__45511__a[G__45511__i] = arguments[G__45511__i + 0]; ++G__45511__i;}
  args = new cljs.core.IndexedSeq(G__45511__a,0,null);
} 
return G__45509__delegate.call(this,args);};
G__45509.cljs$lang$maxFixedArity = 0;
G__45509.cljs$lang$applyTo = (function (arglist__45512){
var args = cljs.core.seq(arglist__45512);
return G__45509__delegate(args);
});
G__45509.cljs$core$IFn$_invoke$arity$variadic = G__45509__delegate;
return G__45509;
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

//# sourceMappingURL=debug.js.map?rel=1510229230669
