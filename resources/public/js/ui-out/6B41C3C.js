goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__41330__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__41330 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41331__i = 0, G__41331__a = new Array(arguments.length -  0);
while (G__41331__i < G__41331__a.length) {G__41331__a[G__41331__i] = arguments[G__41331__i + 0]; ++G__41331__i;}
  args = new cljs.core.IndexedSeq(G__41331__a,0,null);
} 
return G__41330__delegate.call(this,args);};
G__41330.cljs$lang$maxFixedArity = 0;
G__41330.cljs$lang$applyTo = (function (arglist__41332){
var args = cljs.core.seq(arglist__41332);
return G__41330__delegate(args);
});
G__41330.cljs$core$IFn$_invoke$arity$variadic = G__41330__delegate;
return G__41330;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__41333__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__41333 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41334__i = 0, G__41334__a = new Array(arguments.length -  0);
while (G__41334__i < G__41334__a.length) {G__41334__a[G__41334__i] = arguments[G__41334__i + 0]; ++G__41334__i;}
  args = new cljs.core.IndexedSeq(G__41334__a,0,null);
} 
return G__41333__delegate.call(this,args);};
G__41333.cljs$lang$maxFixedArity = 0;
G__41333.cljs$lang$applyTo = (function (arglist__41335){
var args = cljs.core.seq(arglist__41335);
return G__41333__delegate(args);
});
G__41333.cljs$core$IFn$_invoke$arity$variadic = G__41333__delegate;
return G__41333;
})()
;

return null;
});
