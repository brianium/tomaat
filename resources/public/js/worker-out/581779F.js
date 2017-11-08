goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__53627__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__53627 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__53628__i = 0, G__53628__a = new Array(arguments.length -  0);
while (G__53628__i < G__53628__a.length) {G__53628__a[G__53628__i] = arguments[G__53628__i + 0]; ++G__53628__i;}
  args = new cljs.core.IndexedSeq(G__53628__a,0,null);
} 
return G__53627__delegate.call(this,args);};
G__53627.cljs$lang$maxFixedArity = 0;
G__53627.cljs$lang$applyTo = (function (arglist__53629){
var args = cljs.core.seq(arglist__53629);
return G__53627__delegate(args);
});
G__53627.cljs$core$IFn$_invoke$arity$variadic = G__53627__delegate;
return G__53627;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__53630__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__53630 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__53631__i = 0, G__53631__a = new Array(arguments.length -  0);
while (G__53631__i < G__53631__a.length) {G__53631__a[G__53631__i] = arguments[G__53631__i + 0]; ++G__53631__i;}
  args = new cljs.core.IndexedSeq(G__53631__a,0,null);
} 
return G__53630__delegate.call(this,args);};
G__53630.cljs$lang$maxFixedArity = 0;
G__53630.cljs$lang$applyTo = (function (arglist__53632){
var args = cljs.core.seq(arglist__53632);
return G__53630__delegate(args);
});
G__53630.cljs$core$IFn$_invoke$arity$variadic = G__53630__delegate;
return G__53630;
})()
;

return null;
});
