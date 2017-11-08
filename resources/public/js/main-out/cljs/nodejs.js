// Compiled by ClojureScript 1.9.908 {:target :nodejs}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__16117__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__16117 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16118__i = 0, G__16118__a = new Array(arguments.length -  0);
while (G__16118__i < G__16118__a.length) {G__16118__a[G__16118__i] = arguments[G__16118__i + 0]; ++G__16118__i;}
  args = new cljs.core.IndexedSeq(G__16118__a,0,null);
} 
return G__16117__delegate.call(this,args);};
G__16117.cljs$lang$maxFixedArity = 0;
G__16117.cljs$lang$applyTo = (function (arglist__16119){
var args = cljs.core.seq(arglist__16119);
return G__16117__delegate(args);
});
G__16117.cljs$core$IFn$_invoke$arity$variadic = G__16117__delegate;
return G__16117;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__16120__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__16120 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16121__i = 0, G__16121__a = new Array(arguments.length -  0);
while (G__16121__i < G__16121__a.length) {G__16121__a[G__16121__i] = arguments[G__16121__i + 0]; ++G__16121__i;}
  args = new cljs.core.IndexedSeq(G__16121__a,0,null);
} 
return G__16120__delegate.call(this,args);};
G__16120.cljs$lang$maxFixedArity = 0;
G__16120.cljs$lang$applyTo = (function (arglist__16122){
var args = cljs.core.seq(arglist__16122);
return G__16120__delegate(args);
});
G__16120.cljs$core$IFn$_invoke$arity$variadic = G__16120__delegate;
return G__16120;
})()
;

return null;
});
