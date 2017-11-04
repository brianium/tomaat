goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__45930__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__45930 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45931__i = 0, G__45931__a = new Array(arguments.length -  0);
while (G__45931__i < G__45931__a.length) {G__45931__a[G__45931__i] = arguments[G__45931__i + 0]; ++G__45931__i;}
  args = new cljs.core.IndexedSeq(G__45931__a,0,null);
} 
return G__45930__delegate.call(this,args);};
G__45930.cljs$lang$maxFixedArity = 0;
G__45930.cljs$lang$applyTo = (function (arglist__45932){
var args = cljs.core.seq(arglist__45932);
return G__45930__delegate(args);
});
G__45930.cljs$core$IFn$_invoke$arity$variadic = G__45930__delegate;
return G__45930;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__45933__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__45933 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45934__i = 0, G__45934__a = new Array(arguments.length -  0);
while (G__45934__i < G__45934__a.length) {G__45934__a[G__45934__i] = arguments[G__45934__i + 0]; ++G__45934__i;}
  args = new cljs.core.IndexedSeq(G__45934__a,0,null);
} 
return G__45933__delegate.call(this,args);};
G__45933.cljs$lang$maxFixedArity = 0;
G__45933.cljs$lang$applyTo = (function (arglist__45935){
var args = cljs.core.seq(arglist__45935);
return G__45933__delegate(args);
});
G__45933.cljs$core$IFn$_invoke$arity$variadic = G__45933__delegate;
return G__45933;
})()
;

return null;
});
