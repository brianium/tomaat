goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__54382__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__54382 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__54383__i = 0, G__54383__a = new Array(arguments.length -  0);
while (G__54383__i < G__54383__a.length) {G__54383__a[G__54383__i] = arguments[G__54383__i + 0]; ++G__54383__i;}
  args = new cljs.core.IndexedSeq(G__54383__a,0,null);
} 
return G__54382__delegate.call(this,args);};
G__54382.cljs$lang$maxFixedArity = 0;
G__54382.cljs$lang$applyTo = (function (arglist__54384){
var args = cljs.core.seq(arglist__54384);
return G__54382__delegate(args);
});
G__54382.cljs$core$IFn$_invoke$arity$variadic = G__54382__delegate;
return G__54382;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__54385__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__54385 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__54386__i = 0, G__54386__a = new Array(arguments.length -  0);
while (G__54386__i < G__54386__a.length) {G__54386__a[G__54386__i] = arguments[G__54386__i + 0]; ++G__54386__i;}
  args = new cljs.core.IndexedSeq(G__54386__a,0,null);
} 
return G__54385__delegate.call(this,args);};
G__54385.cljs$lang$maxFixedArity = 0;
G__54385.cljs$lang$applyTo = (function (arglist__54387){
var args = cljs.core.seq(arglist__54387);
return G__54385__delegate(args);
});
G__54385.cljs$core$IFn$_invoke$arity$variadic = G__54385__delegate;
return G__54385;
})()
;

return null;
});
