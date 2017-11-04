goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__44944__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__44944 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44945__i = 0, G__44945__a = new Array(arguments.length -  0);
while (G__44945__i < G__44945__a.length) {G__44945__a[G__44945__i] = arguments[G__44945__i + 0]; ++G__44945__i;}
  args = new cljs.core.IndexedSeq(G__44945__a,0,null);
} 
return G__44944__delegate.call(this,args);};
G__44944.cljs$lang$maxFixedArity = 0;
G__44944.cljs$lang$applyTo = (function (arglist__44946){
var args = cljs.core.seq(arglist__44946);
return G__44944__delegate(args);
});
G__44944.cljs$core$IFn$_invoke$arity$variadic = G__44944__delegate;
return G__44944;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__44947__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__44947 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44948__i = 0, G__44948__a = new Array(arguments.length -  0);
while (G__44948__i < G__44948__a.length) {G__44948__a[G__44948__i] = arguments[G__44948__i + 0]; ++G__44948__i;}
  args = new cljs.core.IndexedSeq(G__44948__a,0,null);
} 
return G__44947__delegate.call(this,args);};
G__44947.cljs$lang$maxFixedArity = 0;
G__44947.cljs$lang$applyTo = (function (arglist__44949){
var args = cljs.core.seq(arglist__44949);
return G__44947__delegate(args);
});
G__44947.cljs$core$IFn$_invoke$arity$variadic = G__44947__delegate;
return G__44947;
})()
;

return null;
});
