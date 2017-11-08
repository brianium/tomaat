goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__54198__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__54198 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__54199__i = 0, G__54199__a = new Array(arguments.length -  0);
while (G__54199__i < G__54199__a.length) {G__54199__a[G__54199__i] = arguments[G__54199__i + 0]; ++G__54199__i;}
  args = new cljs.core.IndexedSeq(G__54199__a,0,null);
} 
return G__54198__delegate.call(this,args);};
G__54198.cljs$lang$maxFixedArity = 0;
G__54198.cljs$lang$applyTo = (function (arglist__54200){
var args = cljs.core.seq(arglist__54200);
return G__54198__delegate(args);
});
G__54198.cljs$core$IFn$_invoke$arity$variadic = G__54198__delegate;
return G__54198;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__54201__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__54201 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__54202__i = 0, G__54202__a = new Array(arguments.length -  0);
while (G__54202__i < G__54202__a.length) {G__54202__a[G__54202__i] = arguments[G__54202__i + 0]; ++G__54202__i;}
  args = new cljs.core.IndexedSeq(G__54202__a,0,null);
} 
return G__54201__delegate.call(this,args);};
G__54201.cljs$lang$maxFixedArity = 0;
G__54201.cljs$lang$applyTo = (function (arglist__54203){
var args = cljs.core.seq(arglist__54203);
return G__54201__delegate(args);
});
G__54201.cljs$core$IFn$_invoke$arity$variadic = G__54201__delegate;
return G__54201;
})()
;

return null;
});
