goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__54257__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__54257 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__54258__i = 0, G__54258__a = new Array(arguments.length -  0);
while (G__54258__i < G__54258__a.length) {G__54258__a[G__54258__i] = arguments[G__54258__i + 0]; ++G__54258__i;}
  args = new cljs.core.IndexedSeq(G__54258__a,0,null);
} 
return G__54257__delegate.call(this,args);};
G__54257.cljs$lang$maxFixedArity = 0;
G__54257.cljs$lang$applyTo = (function (arglist__54259){
var args = cljs.core.seq(arglist__54259);
return G__54257__delegate(args);
});
G__54257.cljs$core$IFn$_invoke$arity$variadic = G__54257__delegate;
return G__54257;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__54260__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__54260 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__54261__i = 0, G__54261__a = new Array(arguments.length -  0);
while (G__54261__i < G__54261__a.length) {G__54261__a[G__54261__i] = arguments[G__54261__i + 0]; ++G__54261__i;}
  args = new cljs.core.IndexedSeq(G__54261__a,0,null);
} 
return G__54260__delegate.call(this,args);};
G__54260.cljs$lang$maxFixedArity = 0;
G__54260.cljs$lang$applyTo = (function (arglist__54262){
var args = cljs.core.seq(arglist__54262);
return G__54260__delegate(args);
});
G__54260.cljs$core$IFn$_invoke$arity$variadic = G__54260__delegate;
return G__54260;
})()
;

return null;
});
