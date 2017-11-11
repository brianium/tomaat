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
var G__31843__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__31843 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31850__i = 0, G__31850__a = new Array(arguments.length -  0);
while (G__31850__i < G__31850__a.length) {G__31850__a[G__31850__i] = arguments[G__31850__i + 0]; ++G__31850__i;}
  args = new cljs.core.IndexedSeq(G__31850__a,0,null);
} 
return G__31843__delegate.call(this,args);};
G__31843.cljs$lang$maxFixedArity = 0;
G__31843.cljs$lang$applyTo = (function (arglist__31851){
var args = cljs.core.seq(arglist__31851);
return G__31843__delegate(args);
});
G__31843.cljs$core$IFn$_invoke$arity$variadic = G__31843__delegate;
return G__31843;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__31852__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__31852 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31853__i = 0, G__31853__a = new Array(arguments.length -  0);
while (G__31853__i < G__31853__a.length) {G__31853__a[G__31853__i] = arguments[G__31853__i + 0]; ++G__31853__i;}
  args = new cljs.core.IndexedSeq(G__31853__a,0,null);
} 
return G__31852__delegate.call(this,args);};
G__31852.cljs$lang$maxFixedArity = 0;
G__31852.cljs$lang$applyTo = (function (arglist__31854){
var args = cljs.core.seq(arglist__31854);
return G__31852__delegate(args);
});
G__31852.cljs$core$IFn$_invoke$arity$variadic = G__31852__delegate;
return G__31852;
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

//# sourceMappingURL=debug.js.map?rel=1510360378308
