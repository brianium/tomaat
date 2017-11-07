goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__45920__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__45920 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45921__i = 0, G__45921__a = new Array(arguments.length -  0);
while (G__45921__i < G__45921__a.length) {G__45921__a[G__45921__i] = arguments[G__45921__i + 0]; ++G__45921__i;}
  args = new cljs.core.IndexedSeq(G__45921__a,0,null);
} 
return G__45920__delegate.call(this,args);};
G__45920.cljs$lang$maxFixedArity = 0;
G__45920.cljs$lang$applyTo = (function (arglist__45922){
var args = cljs.core.seq(arglist__45922);
return G__45920__delegate(args);
});
G__45920.cljs$core$IFn$_invoke$arity$variadic = G__45920__delegate;
return G__45920;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__45923__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__45923 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45924__i = 0, G__45924__a = new Array(arguments.length -  0);
while (G__45924__i < G__45924__a.length) {G__45924__a[G__45924__i] = arguments[G__45924__i + 0]; ++G__45924__i;}
  args = new cljs.core.IndexedSeq(G__45924__a,0,null);
} 
return G__45923__delegate.call(this,args);};
G__45923.cljs$lang$maxFixedArity = 0;
G__45923.cljs$lang$applyTo = (function (arglist__45925){
var args = cljs.core.seq(arglist__45925);
return G__45923__delegate(args);
});
G__45923.cljs$core$IFn$_invoke$arity$variadic = G__45923__delegate;
return G__45923;
})()
;

return null;
});
