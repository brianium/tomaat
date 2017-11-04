// Compiled by ClojureScript 1.9.908 {:target :nodejs}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__37123__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__37123 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37124__i = 0, G__37124__a = new Array(arguments.length -  0);
while (G__37124__i < G__37124__a.length) {G__37124__a[G__37124__i] = arguments[G__37124__i + 0]; ++G__37124__i;}
  args = new cljs.core.IndexedSeq(G__37124__a,0,null);
} 
return G__37123__delegate.call(this,args);};
G__37123.cljs$lang$maxFixedArity = 0;
G__37123.cljs$lang$applyTo = (function (arglist__37125){
var args = cljs.core.seq(arglist__37125);
return G__37123__delegate(args);
});
G__37123.cljs$core$IFn$_invoke$arity$variadic = G__37123__delegate;
return G__37123;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__37126__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__37126 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37127__i = 0, G__37127__a = new Array(arguments.length -  0);
while (G__37127__i < G__37127__a.length) {G__37127__a[G__37127__i] = arguments[G__37127__i + 0]; ++G__37127__i;}
  args = new cljs.core.IndexedSeq(G__37127__a,0,null);
} 
return G__37126__delegate.call(this,args);};
G__37126.cljs$lang$maxFixedArity = 0;
G__37126.cljs$lang$applyTo = (function (arglist__37128){
var args = cljs.core.seq(arglist__37128);
return G__37126__delegate(args);
});
G__37126.cljs$core$IFn$_invoke$arity$variadic = G__37126__delegate;
return G__37126;
})()
;

return null;
});
