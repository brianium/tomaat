goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__46354__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__46354 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46355__i = 0, G__46355__a = new Array(arguments.length -  0);
while (G__46355__i < G__46355__a.length) {G__46355__a[G__46355__i] = arguments[G__46355__i + 0]; ++G__46355__i;}
  args = new cljs.core.IndexedSeq(G__46355__a,0,null);
} 
return G__46354__delegate.call(this,args);};
G__46354.cljs$lang$maxFixedArity = 0;
G__46354.cljs$lang$applyTo = (function (arglist__46356){
var args = cljs.core.seq(arglist__46356);
return G__46354__delegate(args);
});
G__46354.cljs$core$IFn$_invoke$arity$variadic = G__46354__delegate;
return G__46354;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__46357__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__46357 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46358__i = 0, G__46358__a = new Array(arguments.length -  0);
while (G__46358__i < G__46358__a.length) {G__46358__a[G__46358__i] = arguments[G__46358__i + 0]; ++G__46358__i;}
  args = new cljs.core.IndexedSeq(G__46358__a,0,null);
} 
return G__46357__delegate.call(this,args);};
G__46357.cljs$lang$maxFixedArity = 0;
G__46357.cljs$lang$applyTo = (function (arglist__46359){
var args = cljs.core.seq(arglist__46359);
return G__46357__delegate(args);
});
G__46357.cljs$core$IFn$_invoke$arity$variadic = G__46357__delegate;
return G__46357;
})()
;

return null;
});
