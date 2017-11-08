goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__54358__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__54358 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__54359__i = 0, G__54359__a = new Array(arguments.length -  0);
while (G__54359__i < G__54359__a.length) {G__54359__a[G__54359__i] = arguments[G__54359__i + 0]; ++G__54359__i;}
  args = new cljs.core.IndexedSeq(G__54359__a,0,null);
} 
return G__54358__delegate.call(this,args);};
G__54358.cljs$lang$maxFixedArity = 0;
G__54358.cljs$lang$applyTo = (function (arglist__54360){
var args = cljs.core.seq(arglist__54360);
return G__54358__delegate(args);
});
G__54358.cljs$core$IFn$_invoke$arity$variadic = G__54358__delegate;
return G__54358;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__54361__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__54361 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__54362__i = 0, G__54362__a = new Array(arguments.length -  0);
while (G__54362__i < G__54362__a.length) {G__54362__a[G__54362__i] = arguments[G__54362__i + 0]; ++G__54362__i;}
  args = new cljs.core.IndexedSeq(G__54362__a,0,null);
} 
return G__54361__delegate.call(this,args);};
G__54361.cljs$lang$maxFixedArity = 0;
G__54361.cljs$lang$applyTo = (function (arglist__54363){
var args = cljs.core.seq(arglist__54363);
return G__54361__delegate(args);
});
G__54361.cljs$core$IFn$_invoke$arity$variadic = G__54361__delegate;
return G__54361;
})()
;

return null;
});
