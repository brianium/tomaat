goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__54645__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__54645 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__54646__i = 0, G__54646__a = new Array(arguments.length -  0);
while (G__54646__i < G__54646__a.length) {G__54646__a[G__54646__i] = arguments[G__54646__i + 0]; ++G__54646__i;}
  args = new cljs.core.IndexedSeq(G__54646__a,0,null);
} 
return G__54645__delegate.call(this,args);};
G__54645.cljs$lang$maxFixedArity = 0;
G__54645.cljs$lang$applyTo = (function (arglist__54647){
var args = cljs.core.seq(arglist__54647);
return G__54645__delegate(args);
});
G__54645.cljs$core$IFn$_invoke$arity$variadic = G__54645__delegate;
return G__54645;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__54648__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__54648 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__54649__i = 0, G__54649__a = new Array(arguments.length -  0);
while (G__54649__i < G__54649__a.length) {G__54649__a[G__54649__i] = arguments[G__54649__i + 0]; ++G__54649__i;}
  args = new cljs.core.IndexedSeq(G__54649__a,0,null);
} 
return G__54648__delegate.call(this,args);};
G__54648.cljs$lang$maxFixedArity = 0;
G__54648.cljs$lang$applyTo = (function (arglist__54650){
var args = cljs.core.seq(arglist__54650);
return G__54648__delegate(args);
});
G__54648.cljs$core$IFn$_invoke$arity$variadic = G__54648__delegate;
return G__54648;
})()
;

return null;
});
