goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__45359__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__45359 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45360__i = 0, G__45360__a = new Array(arguments.length -  0);
while (G__45360__i < G__45360__a.length) {G__45360__a[G__45360__i] = arguments[G__45360__i + 0]; ++G__45360__i;}
  args = new cljs.core.IndexedSeq(G__45360__a,0,null);
} 
return G__45359__delegate.call(this,args);};
G__45359.cljs$lang$maxFixedArity = 0;
G__45359.cljs$lang$applyTo = (function (arglist__45361){
var args = cljs.core.seq(arglist__45361);
return G__45359__delegate(args);
});
G__45359.cljs$core$IFn$_invoke$arity$variadic = G__45359__delegate;
return G__45359;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__45362__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__45362 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45363__i = 0, G__45363__a = new Array(arguments.length -  0);
while (G__45363__i < G__45363__a.length) {G__45363__a[G__45363__i] = arguments[G__45363__i + 0]; ++G__45363__i;}
  args = new cljs.core.IndexedSeq(G__45363__a,0,null);
} 
return G__45362__delegate.call(this,args);};
G__45362.cljs$lang$maxFixedArity = 0;
G__45362.cljs$lang$applyTo = (function (arglist__45364){
var args = cljs.core.seq(arglist__45364);
return G__45362__delegate(args);
});
G__45362.cljs$core$IFn$_invoke$arity$variadic = G__45362__delegate;
return G__45362;
})()
;

return null;
});
