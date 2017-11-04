goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__45592__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__45592 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45593__i = 0, G__45593__a = new Array(arguments.length -  0);
while (G__45593__i < G__45593__a.length) {G__45593__a[G__45593__i] = arguments[G__45593__i + 0]; ++G__45593__i;}
  args = new cljs.core.IndexedSeq(G__45593__a,0,null);
} 
return G__45592__delegate.call(this,args);};
G__45592.cljs$lang$maxFixedArity = 0;
G__45592.cljs$lang$applyTo = (function (arglist__45594){
var args = cljs.core.seq(arglist__45594);
return G__45592__delegate(args);
});
G__45592.cljs$core$IFn$_invoke$arity$variadic = G__45592__delegate;
return G__45592;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__45595__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__45595 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45596__i = 0, G__45596__a = new Array(arguments.length -  0);
while (G__45596__i < G__45596__a.length) {G__45596__a[G__45596__i] = arguments[G__45596__i + 0]; ++G__45596__i;}
  args = new cljs.core.IndexedSeq(G__45596__a,0,null);
} 
return G__45595__delegate.call(this,args);};
G__45595.cljs$lang$maxFixedArity = 0;
G__45595.cljs$lang$applyTo = (function (arglist__45597){
var args = cljs.core.seq(arglist__45597);
return G__45595__delegate(args);
});
G__45595.cljs$core$IFn$_invoke$arity$variadic = G__45595__delegate;
return G__45595;
})()
;

return null;
});
