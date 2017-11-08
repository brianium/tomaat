goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__54524__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__54524 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__54525__i = 0, G__54525__a = new Array(arguments.length -  0);
while (G__54525__i < G__54525__a.length) {G__54525__a[G__54525__i] = arguments[G__54525__i + 0]; ++G__54525__i;}
  args = new cljs.core.IndexedSeq(G__54525__a,0,null);
} 
return G__54524__delegate.call(this,args);};
G__54524.cljs$lang$maxFixedArity = 0;
G__54524.cljs$lang$applyTo = (function (arglist__54526){
var args = cljs.core.seq(arglist__54526);
return G__54524__delegate(args);
});
G__54524.cljs$core$IFn$_invoke$arity$variadic = G__54524__delegate;
return G__54524;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__54527__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__54527 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__54528__i = 0, G__54528__a = new Array(arguments.length -  0);
while (G__54528__i < G__54528__a.length) {G__54528__a[G__54528__i] = arguments[G__54528__i + 0]; ++G__54528__i;}
  args = new cljs.core.IndexedSeq(G__54528__a,0,null);
} 
return G__54527__delegate.call(this,args);};
G__54527.cljs$lang$maxFixedArity = 0;
G__54527.cljs$lang$applyTo = (function (arglist__54529){
var args = cljs.core.seq(arglist__54529);
return G__54527__delegate(args);
});
G__54527.cljs$core$IFn$_invoke$arity$variadic = G__54527__delegate;
return G__54527;
})()
;

return null;
});
