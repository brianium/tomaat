goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__45311__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__45311 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45312__i = 0, G__45312__a = new Array(arguments.length -  0);
while (G__45312__i < G__45312__a.length) {G__45312__a[G__45312__i] = arguments[G__45312__i + 0]; ++G__45312__i;}
  args = new cljs.core.IndexedSeq(G__45312__a,0,null);
} 
return G__45311__delegate.call(this,args);};
G__45311.cljs$lang$maxFixedArity = 0;
G__45311.cljs$lang$applyTo = (function (arglist__45313){
var args = cljs.core.seq(arglist__45313);
return G__45311__delegate(args);
});
G__45311.cljs$core$IFn$_invoke$arity$variadic = G__45311__delegate;
return G__45311;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__45314__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__45314 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45315__i = 0, G__45315__a = new Array(arguments.length -  0);
while (G__45315__i < G__45315__a.length) {G__45315__a[G__45315__i] = arguments[G__45315__i + 0]; ++G__45315__i;}
  args = new cljs.core.IndexedSeq(G__45315__a,0,null);
} 
return G__45314__delegate.call(this,args);};
G__45314.cljs$lang$maxFixedArity = 0;
G__45314.cljs$lang$applyTo = (function (arglist__45316){
var args = cljs.core.seq(arglist__45316);
return G__45314__delegate(args);
});
G__45314.cljs$core$IFn$_invoke$arity$variadic = G__45314__delegate;
return G__45314;
})()
;

return null;
});
