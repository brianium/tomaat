goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__45660__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__45660 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45661__i = 0, G__45661__a = new Array(arguments.length -  0);
while (G__45661__i < G__45661__a.length) {G__45661__a[G__45661__i] = arguments[G__45661__i + 0]; ++G__45661__i;}
  args = new cljs.core.IndexedSeq(G__45661__a,0,null);
} 
return G__45660__delegate.call(this,args);};
G__45660.cljs$lang$maxFixedArity = 0;
G__45660.cljs$lang$applyTo = (function (arglist__45662){
var args = cljs.core.seq(arglist__45662);
return G__45660__delegate(args);
});
G__45660.cljs$core$IFn$_invoke$arity$variadic = G__45660__delegate;
return G__45660;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__45663__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__45663 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45664__i = 0, G__45664__a = new Array(arguments.length -  0);
while (G__45664__i < G__45664__a.length) {G__45664__a[G__45664__i] = arguments[G__45664__i + 0]; ++G__45664__i;}
  args = new cljs.core.IndexedSeq(G__45664__a,0,null);
} 
return G__45663__delegate.call(this,args);};
G__45663.cljs$lang$maxFixedArity = 0;
G__45663.cljs$lang$applyTo = (function (arglist__45665){
var args = cljs.core.seq(arglist__45665);
return G__45663__delegate(args);
});
G__45663.cljs$core$IFn$_invoke$arity$variadic = G__45663__delegate;
return G__45663;
})()
;

return null;
});
