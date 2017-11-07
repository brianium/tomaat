goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__45880__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__45880 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45881__i = 0, G__45881__a = new Array(arguments.length -  0);
while (G__45881__i < G__45881__a.length) {G__45881__a[G__45881__i] = arguments[G__45881__i + 0]; ++G__45881__i;}
  args = new cljs.core.IndexedSeq(G__45881__a,0,null);
} 
return G__45880__delegate.call(this,args);};
G__45880.cljs$lang$maxFixedArity = 0;
G__45880.cljs$lang$applyTo = (function (arglist__45882){
var args = cljs.core.seq(arglist__45882);
return G__45880__delegate(args);
});
G__45880.cljs$core$IFn$_invoke$arity$variadic = G__45880__delegate;
return G__45880;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__45883__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__45883 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45884__i = 0, G__45884__a = new Array(arguments.length -  0);
while (G__45884__i < G__45884__a.length) {G__45884__a[G__45884__i] = arguments[G__45884__i + 0]; ++G__45884__i;}
  args = new cljs.core.IndexedSeq(G__45884__a,0,null);
} 
return G__45883__delegate.call(this,args);};
G__45883.cljs$lang$maxFixedArity = 0;
G__45883.cljs$lang$applyTo = (function (arglist__45885){
var args = cljs.core.seq(arglist__45885);
return G__45883__delegate(args);
});
G__45883.cljs$core$IFn$_invoke$arity$variadic = G__45883__delegate;
return G__45883;
})()
;

return null;
});
