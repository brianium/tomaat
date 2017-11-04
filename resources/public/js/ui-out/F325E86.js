goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__45014__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__45014 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45015__i = 0, G__45015__a = new Array(arguments.length -  0);
while (G__45015__i < G__45015__a.length) {G__45015__a[G__45015__i] = arguments[G__45015__i + 0]; ++G__45015__i;}
  args = new cljs.core.IndexedSeq(G__45015__a,0,null);
} 
return G__45014__delegate.call(this,args);};
G__45014.cljs$lang$maxFixedArity = 0;
G__45014.cljs$lang$applyTo = (function (arglist__45016){
var args = cljs.core.seq(arglist__45016);
return G__45014__delegate(args);
});
G__45014.cljs$core$IFn$_invoke$arity$variadic = G__45014__delegate;
return G__45014;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__45017__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__45017 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45018__i = 0, G__45018__a = new Array(arguments.length -  0);
while (G__45018__i < G__45018__a.length) {G__45018__a[G__45018__i] = arguments[G__45018__i + 0]; ++G__45018__i;}
  args = new cljs.core.IndexedSeq(G__45018__a,0,null);
} 
return G__45017__delegate.call(this,args);};
G__45017.cljs$lang$maxFixedArity = 0;
G__45017.cljs$lang$applyTo = (function (arglist__45019){
var args = cljs.core.seq(arglist__45019);
return G__45017__delegate(args);
});
G__45017.cljs$core$IFn$_invoke$arity$variadic = G__45017__delegate;
return G__45017;
})()
;

return null;
});
