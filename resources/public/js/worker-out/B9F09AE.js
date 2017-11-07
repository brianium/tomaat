goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__14065__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__14065 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14066__i = 0, G__14066__a = new Array(arguments.length -  0);
while (G__14066__i < G__14066__a.length) {G__14066__a[G__14066__i] = arguments[G__14066__i + 0]; ++G__14066__i;}
  args = new cljs.core.IndexedSeq(G__14066__a,0,null);
} 
return G__14065__delegate.call(this,args);};
G__14065.cljs$lang$maxFixedArity = 0;
G__14065.cljs$lang$applyTo = (function (arglist__14067){
var args = cljs.core.seq(arglist__14067);
return G__14065__delegate(args);
});
G__14065.cljs$core$IFn$_invoke$arity$variadic = G__14065__delegate;
return G__14065;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__14068__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__14068 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14069__i = 0, G__14069__a = new Array(arguments.length -  0);
while (G__14069__i < G__14069__a.length) {G__14069__a[G__14069__i] = arguments[G__14069__i + 0]; ++G__14069__i;}
  args = new cljs.core.IndexedSeq(G__14069__a,0,null);
} 
return G__14068__delegate.call(this,args);};
G__14068.cljs$lang$maxFixedArity = 0;
G__14068.cljs$lang$applyTo = (function (arglist__14070){
var args = cljs.core.seq(arglist__14070);
return G__14068__delegate(args);
});
G__14068.cljs$core$IFn$_invoke$arity$variadic = G__14068__delegate;
return G__14068;
})()
;

return null;
});
