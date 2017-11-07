goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__18360__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__18360 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18361__i = 0, G__18361__a = new Array(arguments.length -  0);
while (G__18361__i < G__18361__a.length) {G__18361__a[G__18361__i] = arguments[G__18361__i + 0]; ++G__18361__i;}
  args = new cljs.core.IndexedSeq(G__18361__a,0,null);
} 
return G__18360__delegate.call(this,args);};
G__18360.cljs$lang$maxFixedArity = 0;
G__18360.cljs$lang$applyTo = (function (arglist__18362){
var args = cljs.core.seq(arglist__18362);
return G__18360__delegate(args);
});
G__18360.cljs$core$IFn$_invoke$arity$variadic = G__18360__delegate;
return G__18360;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__18363__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__18363 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18364__i = 0, G__18364__a = new Array(arguments.length -  0);
while (G__18364__i < G__18364__a.length) {G__18364__a[G__18364__i] = arguments[G__18364__i + 0]; ++G__18364__i;}
  args = new cljs.core.IndexedSeq(G__18364__a,0,null);
} 
return G__18363__delegate.call(this,args);};
G__18363.cljs$lang$maxFixedArity = 0;
G__18363.cljs$lang$applyTo = (function (arglist__18365){
var args = cljs.core.seq(arglist__18365);
return G__18363__delegate(args);
});
G__18363.cljs$core$IFn$_invoke$arity$variadic = G__18363__delegate;
return G__18363;
})()
;

return null;
});
