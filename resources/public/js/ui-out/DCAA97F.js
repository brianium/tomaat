goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__45185__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__45185 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45186__i = 0, G__45186__a = new Array(arguments.length -  0);
while (G__45186__i < G__45186__a.length) {G__45186__a[G__45186__i] = arguments[G__45186__i + 0]; ++G__45186__i;}
  args = new cljs.core.IndexedSeq(G__45186__a,0,null);
} 
return G__45185__delegate.call(this,args);};
G__45185.cljs$lang$maxFixedArity = 0;
G__45185.cljs$lang$applyTo = (function (arglist__45187){
var args = cljs.core.seq(arglist__45187);
return G__45185__delegate(args);
});
G__45185.cljs$core$IFn$_invoke$arity$variadic = G__45185__delegate;
return G__45185;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__45188__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__45188 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45189__i = 0, G__45189__a = new Array(arguments.length -  0);
while (G__45189__i < G__45189__a.length) {G__45189__a[G__45189__i] = arguments[G__45189__i + 0]; ++G__45189__i;}
  args = new cljs.core.IndexedSeq(G__45189__a,0,null);
} 
return G__45188__delegate.call(this,args);};
G__45188.cljs$lang$maxFixedArity = 0;
G__45188.cljs$lang$applyTo = (function (arglist__45190){
var args = cljs.core.seq(arglist__45190);
return G__45188__delegate(args);
});
G__45188.cljs$core$IFn$_invoke$arity$variadic = G__45188__delegate;
return G__45188;
})()
;

return null;
});
