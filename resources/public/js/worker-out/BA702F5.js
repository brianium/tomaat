goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__53818__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__53818 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__53819__i = 0, G__53819__a = new Array(arguments.length -  0);
while (G__53819__i < G__53819__a.length) {G__53819__a[G__53819__i] = arguments[G__53819__i + 0]; ++G__53819__i;}
  args = new cljs.core.IndexedSeq(G__53819__a,0,null);
} 
return G__53818__delegate.call(this,args);};
G__53818.cljs$lang$maxFixedArity = 0;
G__53818.cljs$lang$applyTo = (function (arglist__53820){
var args = cljs.core.seq(arglist__53820);
return G__53818__delegate(args);
});
G__53818.cljs$core$IFn$_invoke$arity$variadic = G__53818__delegate;
return G__53818;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__53821__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__53821 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__53822__i = 0, G__53822__a = new Array(arguments.length -  0);
while (G__53822__i < G__53822__a.length) {G__53822__a[G__53822__i] = arguments[G__53822__i + 0]; ++G__53822__i;}
  args = new cljs.core.IndexedSeq(G__53822__a,0,null);
} 
return G__53821__delegate.call(this,args);};
G__53821.cljs$lang$maxFixedArity = 0;
G__53821.cljs$lang$applyTo = (function (arglist__53823){
var args = cljs.core.seq(arglist__53823);
return G__53821__delegate(args);
});
G__53821.cljs$core$IFn$_invoke$arity$variadic = G__53821__delegate;
return G__53821;
})()
;

return null;
});
