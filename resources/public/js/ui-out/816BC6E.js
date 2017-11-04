goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__46232__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__46232 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46233__i = 0, G__46233__a = new Array(arguments.length -  0);
while (G__46233__i < G__46233__a.length) {G__46233__a[G__46233__i] = arguments[G__46233__i + 0]; ++G__46233__i;}
  args = new cljs.core.IndexedSeq(G__46233__a,0,null);
} 
return G__46232__delegate.call(this,args);};
G__46232.cljs$lang$maxFixedArity = 0;
G__46232.cljs$lang$applyTo = (function (arglist__46234){
var args = cljs.core.seq(arglist__46234);
return G__46232__delegate(args);
});
G__46232.cljs$core$IFn$_invoke$arity$variadic = G__46232__delegate;
return G__46232;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__46235__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__46235 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46236__i = 0, G__46236__a = new Array(arguments.length -  0);
while (G__46236__i < G__46236__a.length) {G__46236__a[G__46236__i] = arguments[G__46236__i + 0]; ++G__46236__i;}
  args = new cljs.core.IndexedSeq(G__46236__a,0,null);
} 
return G__46235__delegate.call(this,args);};
G__46235.cljs$lang$maxFixedArity = 0;
G__46235.cljs$lang$applyTo = (function (arglist__46237){
var args = cljs.core.seq(arglist__46237);
return G__46235__delegate(args);
});
G__46235.cljs$core$IFn$_invoke$arity$variadic = G__46235__delegate;
return G__46235;
})()
;

return null;
});
