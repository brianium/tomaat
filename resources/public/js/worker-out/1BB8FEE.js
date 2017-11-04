goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__45898__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__45898 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45899__i = 0, G__45899__a = new Array(arguments.length -  0);
while (G__45899__i < G__45899__a.length) {G__45899__a[G__45899__i] = arguments[G__45899__i + 0]; ++G__45899__i;}
  args = new cljs.core.IndexedSeq(G__45899__a,0,null);
} 
return G__45898__delegate.call(this,args);};
G__45898.cljs$lang$maxFixedArity = 0;
G__45898.cljs$lang$applyTo = (function (arglist__45900){
var args = cljs.core.seq(arglist__45900);
return G__45898__delegate(args);
});
G__45898.cljs$core$IFn$_invoke$arity$variadic = G__45898__delegate;
return G__45898;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__45901__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__45901 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45902__i = 0, G__45902__a = new Array(arguments.length -  0);
while (G__45902__i < G__45902__a.length) {G__45902__a[G__45902__i] = arguments[G__45902__i + 0]; ++G__45902__i;}
  args = new cljs.core.IndexedSeq(G__45902__a,0,null);
} 
return G__45901__delegate.call(this,args);};
G__45901.cljs$lang$maxFixedArity = 0;
G__45901.cljs$lang$applyTo = (function (arglist__45903){
var args = cljs.core.seq(arglist__45903);
return G__45901__delegate(args);
});
G__45901.cljs$core$IFn$_invoke$arity$variadic = G__45901__delegate;
return G__45901;
})()
;

return null;
});
