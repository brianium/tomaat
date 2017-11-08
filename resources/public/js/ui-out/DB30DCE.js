goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__54621__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__54621 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__54622__i = 0, G__54622__a = new Array(arguments.length -  0);
while (G__54622__i < G__54622__a.length) {G__54622__a[G__54622__i] = arguments[G__54622__i + 0]; ++G__54622__i;}
  args = new cljs.core.IndexedSeq(G__54622__a,0,null);
} 
return G__54621__delegate.call(this,args);};
G__54621.cljs$lang$maxFixedArity = 0;
G__54621.cljs$lang$applyTo = (function (arglist__54623){
var args = cljs.core.seq(arglist__54623);
return G__54621__delegate(args);
});
G__54621.cljs$core$IFn$_invoke$arity$variadic = G__54621__delegate;
return G__54621;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__54624__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__54624 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__54625__i = 0, G__54625__a = new Array(arguments.length -  0);
while (G__54625__i < G__54625__a.length) {G__54625__a[G__54625__i] = arguments[G__54625__i + 0]; ++G__54625__i;}
  args = new cljs.core.IndexedSeq(G__54625__a,0,null);
} 
return G__54624__delegate.call(this,args);};
G__54624.cljs$lang$maxFixedArity = 0;
G__54624.cljs$lang$applyTo = (function (arglist__54626){
var args = cljs.core.seq(arglist__54626);
return G__54624__delegate(args);
});
G__54624.cljs$core$IFn$_invoke$arity$variadic = G__54624__delegate;
return G__54624;
})()
;

return null;
});
