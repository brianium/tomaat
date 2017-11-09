goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__57916__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__57916 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__57917__i = 0, G__57917__a = new Array(arguments.length -  0);
while (G__57917__i < G__57917__a.length) {G__57917__a[G__57917__i] = arguments[G__57917__i + 0]; ++G__57917__i;}
  args = new cljs.core.IndexedSeq(G__57917__a,0,null);
} 
return G__57916__delegate.call(this,args);};
G__57916.cljs$lang$maxFixedArity = 0;
G__57916.cljs$lang$applyTo = (function (arglist__57918){
var args = cljs.core.seq(arglist__57918);
return G__57916__delegate(args);
});
G__57916.cljs$core$IFn$_invoke$arity$variadic = G__57916__delegate;
return G__57916;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__57919__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__57919 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__57920__i = 0, G__57920__a = new Array(arguments.length -  0);
while (G__57920__i < G__57920__a.length) {G__57920__a[G__57920__i] = arguments[G__57920__i + 0]; ++G__57920__i;}
  args = new cljs.core.IndexedSeq(G__57920__a,0,null);
} 
return G__57919__delegate.call(this,args);};
G__57919.cljs$lang$maxFixedArity = 0;
G__57919.cljs$lang$applyTo = (function (arglist__57921){
var args = cljs.core.seq(arglist__57921);
return G__57919__delegate(args);
});
G__57919.cljs$core$IFn$_invoke$arity$variadic = G__57919__delegate;
return G__57919;
})()
;

return null;
});
