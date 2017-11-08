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
var G__39246__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__39246 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39248__i = 0, G__39248__a = new Array(arguments.length -  0);
while (G__39248__i < G__39248__a.length) {G__39248__a[G__39248__i] = arguments[G__39248__i + 0]; ++G__39248__i;}
  args = new cljs.core.IndexedSeq(G__39248__a,0,null);
} 
return G__39246__delegate.call(this,args);};
G__39246.cljs$lang$maxFixedArity = 0;
G__39246.cljs$lang$applyTo = (function (arglist__39249){
var args = cljs.core.seq(arglist__39249);
return G__39246__delegate(args);
});
G__39246.cljs$core$IFn$_invoke$arity$variadic = G__39246__delegate;
return G__39246;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__39250__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__39250 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39251__i = 0, G__39251__a = new Array(arguments.length -  0);
while (G__39251__i < G__39251__a.length) {G__39251__a[G__39251__i] = arguments[G__39251__i + 0]; ++G__39251__i;}
  args = new cljs.core.IndexedSeq(G__39251__a,0,null);
} 
return G__39250__delegate.call(this,args);};
G__39250.cljs$lang$maxFixedArity = 0;
G__39250.cljs$lang$applyTo = (function (arglist__39252){
var args = cljs.core.seq(arglist__39252);
return G__39250__delegate(args);
});
G__39250.cljs$core$IFn$_invoke$arity$variadic = G__39250__delegate;
return G__39250;
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

//# sourceMappingURL=debug.js.map?rel=1510143306795
