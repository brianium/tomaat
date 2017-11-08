goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__52912__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__52912 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52913__i = 0, G__52913__a = new Array(arguments.length -  0);
while (G__52913__i < G__52913__a.length) {G__52913__a[G__52913__i] = arguments[G__52913__i + 0]; ++G__52913__i;}
  args = new cljs.core.IndexedSeq(G__52913__a,0,null);
} 
return G__52912__delegate.call(this,args);};
G__52912.cljs$lang$maxFixedArity = 0;
G__52912.cljs$lang$applyTo = (function (arglist__52914){
var args = cljs.core.seq(arglist__52914);
return G__52912__delegate(args);
});
G__52912.cljs$core$IFn$_invoke$arity$variadic = G__52912__delegate;
return G__52912;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__52915__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__52915 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52916__i = 0, G__52916__a = new Array(arguments.length -  0);
while (G__52916__i < G__52916__a.length) {G__52916__a[G__52916__i] = arguments[G__52916__i + 0]; ++G__52916__i;}
  args = new cljs.core.IndexedSeq(G__52916__a,0,null);
} 
return G__52915__delegate.call(this,args);};
G__52915.cljs$lang$maxFixedArity = 0;
G__52915.cljs$lang$applyTo = (function (arglist__52917){
var args = cljs.core.seq(arglist__52917);
return G__52915__delegate(args);
});
G__52915.cljs$core$IFn$_invoke$arity$variadic = G__52915__delegate;
return G__52915;
})()
;

return null;
});
