goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__18376__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__18376 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18377__i = 0, G__18377__a = new Array(arguments.length -  0);
while (G__18377__i < G__18377__a.length) {G__18377__a[G__18377__i] = arguments[G__18377__i + 0]; ++G__18377__i;}
  args = new cljs.core.IndexedSeq(G__18377__a,0,null);
} 
return G__18376__delegate.call(this,args);};
G__18376.cljs$lang$maxFixedArity = 0;
G__18376.cljs$lang$applyTo = (function (arglist__18378){
var args = cljs.core.seq(arglist__18378);
return G__18376__delegate(args);
});
G__18376.cljs$core$IFn$_invoke$arity$variadic = G__18376__delegate;
return G__18376;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__18379__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__18379 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18380__i = 0, G__18380__a = new Array(arguments.length -  0);
while (G__18380__i < G__18380__a.length) {G__18380__a[G__18380__i] = arguments[G__18380__i + 0]; ++G__18380__i;}
  args = new cljs.core.IndexedSeq(G__18380__a,0,null);
} 
return G__18379__delegate.call(this,args);};
G__18379.cljs$lang$maxFixedArity = 0;
G__18379.cljs$lang$applyTo = (function (arglist__18381){
var args = cljs.core.seq(arglist__18381);
return G__18379__delegate(args);
});
G__18379.cljs$core$IFn$_invoke$arity$variadic = G__18379__delegate;
return G__18379;
})()
;

return null;
});
