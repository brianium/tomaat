goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__57976__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__57976 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__57977__i = 0, G__57977__a = new Array(arguments.length -  0);
while (G__57977__i < G__57977__a.length) {G__57977__a[G__57977__i] = arguments[G__57977__i + 0]; ++G__57977__i;}
  args = new cljs.core.IndexedSeq(G__57977__a,0,null);
} 
return G__57976__delegate.call(this,args);};
G__57976.cljs$lang$maxFixedArity = 0;
G__57976.cljs$lang$applyTo = (function (arglist__57978){
var args = cljs.core.seq(arglist__57978);
return G__57976__delegate(args);
});
G__57976.cljs$core$IFn$_invoke$arity$variadic = G__57976__delegate;
return G__57976;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__57979__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__57979 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__57980__i = 0, G__57980__a = new Array(arguments.length -  0);
while (G__57980__i < G__57980__a.length) {G__57980__a[G__57980__i] = arguments[G__57980__i + 0]; ++G__57980__i;}
  args = new cljs.core.IndexedSeq(G__57980__a,0,null);
} 
return G__57979__delegate.call(this,args);};
G__57979.cljs$lang$maxFixedArity = 0;
G__57979.cljs$lang$applyTo = (function (arglist__57981){
var args = cljs.core.seq(arglist__57981);
return G__57979__delegate(args);
});
G__57979.cljs$core$IFn$_invoke$arity$variadic = G__57979__delegate;
return G__57979;
})()
;

return null;
});
