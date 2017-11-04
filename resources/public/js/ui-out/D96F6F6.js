goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__45864__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__45864 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45865__i = 0, G__45865__a = new Array(arguments.length -  0);
while (G__45865__i < G__45865__a.length) {G__45865__a[G__45865__i] = arguments[G__45865__i + 0]; ++G__45865__i;}
  args = new cljs.core.IndexedSeq(G__45865__a,0,null);
} 
return G__45864__delegate.call(this,args);};
G__45864.cljs$lang$maxFixedArity = 0;
G__45864.cljs$lang$applyTo = (function (arglist__45866){
var args = cljs.core.seq(arglist__45866);
return G__45864__delegate(args);
});
G__45864.cljs$core$IFn$_invoke$arity$variadic = G__45864__delegate;
return G__45864;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__45867__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__45867 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45868__i = 0, G__45868__a = new Array(arguments.length -  0);
while (G__45868__i < G__45868__a.length) {G__45868__a[G__45868__i] = arguments[G__45868__i + 0]; ++G__45868__i;}
  args = new cljs.core.IndexedSeq(G__45868__a,0,null);
} 
return G__45867__delegate.call(this,args);};
G__45867.cljs$lang$maxFixedArity = 0;
G__45867.cljs$lang$applyTo = (function (arglist__45869){
var args = cljs.core.seq(arglist__45869);
return G__45867__delegate(args);
});
G__45867.cljs$core$IFn$_invoke$arity$variadic = G__45867__delegate;
return G__45867;
})()
;

return null;
});
