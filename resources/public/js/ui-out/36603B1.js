goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__45139__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__45139 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45140__i = 0, G__45140__a = new Array(arguments.length -  0);
while (G__45140__i < G__45140__a.length) {G__45140__a[G__45140__i] = arguments[G__45140__i + 0]; ++G__45140__i;}
  args = new cljs.core.IndexedSeq(G__45140__a,0,null);
} 
return G__45139__delegate.call(this,args);};
G__45139.cljs$lang$maxFixedArity = 0;
G__45139.cljs$lang$applyTo = (function (arglist__45141){
var args = cljs.core.seq(arglist__45141);
return G__45139__delegate(args);
});
G__45139.cljs$core$IFn$_invoke$arity$variadic = G__45139__delegate;
return G__45139;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__45142__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__45142 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45143__i = 0, G__45143__a = new Array(arguments.length -  0);
while (G__45143__i < G__45143__a.length) {G__45143__a[G__45143__i] = arguments[G__45143__i + 0]; ++G__45143__i;}
  args = new cljs.core.IndexedSeq(G__45143__a,0,null);
} 
return G__45142__delegate.call(this,args);};
G__45142.cljs$lang$maxFixedArity = 0;
G__45142.cljs$lang$applyTo = (function (arglist__45144){
var args = cljs.core.seq(arglist__45144);
return G__45142__delegate(args);
});
G__45142.cljs$core$IFn$_invoke$arity$variadic = G__45142__delegate;
return G__45142;
})()
;

return null;
});
