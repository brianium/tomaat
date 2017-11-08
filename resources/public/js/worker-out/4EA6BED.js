goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__53077__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__53077 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__53078__i = 0, G__53078__a = new Array(arguments.length -  0);
while (G__53078__i < G__53078__a.length) {G__53078__a[G__53078__i] = arguments[G__53078__i + 0]; ++G__53078__i;}
  args = new cljs.core.IndexedSeq(G__53078__a,0,null);
} 
return G__53077__delegate.call(this,args);};
G__53077.cljs$lang$maxFixedArity = 0;
G__53077.cljs$lang$applyTo = (function (arglist__53079){
var args = cljs.core.seq(arglist__53079);
return G__53077__delegate(args);
});
G__53077.cljs$core$IFn$_invoke$arity$variadic = G__53077__delegate;
return G__53077;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__53080__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__53080 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__53081__i = 0, G__53081__a = new Array(arguments.length -  0);
while (G__53081__i < G__53081__a.length) {G__53081__a[G__53081__i] = arguments[G__53081__i + 0]; ++G__53081__i;}
  args = new cljs.core.IndexedSeq(G__53081__a,0,null);
} 
return G__53080__delegate.call(this,args);};
G__53080.cljs$lang$maxFixedArity = 0;
G__53080.cljs$lang$applyTo = (function (arglist__53082){
var args = cljs.core.seq(arglist__53082);
return G__53080__delegate(args);
});
G__53080.cljs$core$IFn$_invoke$arity$variadic = G__53080__delegate;
return G__53080;
})()
;

return null;
});
