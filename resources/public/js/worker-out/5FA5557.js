goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__59824__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__59824 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__59825__i = 0, G__59825__a = new Array(arguments.length -  0);
while (G__59825__i < G__59825__a.length) {G__59825__a[G__59825__i] = arguments[G__59825__i + 0]; ++G__59825__i;}
  args = new cljs.core.IndexedSeq(G__59825__a,0,null);
} 
return G__59824__delegate.call(this,args);};
G__59824.cljs$lang$maxFixedArity = 0;
G__59824.cljs$lang$applyTo = (function (arglist__59826){
var args = cljs.core.seq(arglist__59826);
return G__59824__delegate(args);
});
G__59824.cljs$core$IFn$_invoke$arity$variadic = G__59824__delegate;
return G__59824;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__59827__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__59827 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__59828__i = 0, G__59828__a = new Array(arguments.length -  0);
while (G__59828__i < G__59828__a.length) {G__59828__a[G__59828__i] = arguments[G__59828__i + 0]; ++G__59828__i;}
  args = new cljs.core.IndexedSeq(G__59828__a,0,null);
} 
return G__59827__delegate.call(this,args);};
G__59827.cljs$lang$maxFixedArity = 0;
G__59827.cljs$lang$applyTo = (function (arglist__59829){
var args = cljs.core.seq(arglist__59829);
return G__59827__delegate(args);
});
G__59827.cljs$core$IFn$_invoke$arity$variadic = G__59827__delegate;
return G__59827;
})()
;

return null;
});
