goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__53527__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__53527 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__53528__i = 0, G__53528__a = new Array(arguments.length -  0);
while (G__53528__i < G__53528__a.length) {G__53528__a[G__53528__i] = arguments[G__53528__i + 0]; ++G__53528__i;}
  args = new cljs.core.IndexedSeq(G__53528__a,0,null);
} 
return G__53527__delegate.call(this,args);};
G__53527.cljs$lang$maxFixedArity = 0;
G__53527.cljs$lang$applyTo = (function (arglist__53529){
var args = cljs.core.seq(arglist__53529);
return G__53527__delegate(args);
});
G__53527.cljs$core$IFn$_invoke$arity$variadic = G__53527__delegate;
return G__53527;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__53530__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__53530 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__53531__i = 0, G__53531__a = new Array(arguments.length -  0);
while (G__53531__i < G__53531__a.length) {G__53531__a[G__53531__i] = arguments[G__53531__i + 0]; ++G__53531__i;}
  args = new cljs.core.IndexedSeq(G__53531__a,0,null);
} 
return G__53530__delegate.call(this,args);};
G__53530.cljs$lang$maxFixedArity = 0;
G__53530.cljs$lang$applyTo = (function (arglist__53532){
var args = cljs.core.seq(arglist__53532);
return G__53530__delegate(args);
});
G__53530.cljs$core$IFn$_invoke$arity$variadic = G__53530__delegate;
return G__53530;
})()
;

return null;
});
