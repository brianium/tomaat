goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__58396__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__58396 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__58397__i = 0, G__58397__a = new Array(arguments.length -  0);
while (G__58397__i < G__58397__a.length) {G__58397__a[G__58397__i] = arguments[G__58397__i + 0]; ++G__58397__i;}
  args = new cljs.core.IndexedSeq(G__58397__a,0,null);
} 
return G__58396__delegate.call(this,args);};
G__58396.cljs$lang$maxFixedArity = 0;
G__58396.cljs$lang$applyTo = (function (arglist__58398){
var args = cljs.core.seq(arglist__58398);
return G__58396__delegate(args);
});
G__58396.cljs$core$IFn$_invoke$arity$variadic = G__58396__delegate;
return G__58396;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__58399__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__58399 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__58400__i = 0, G__58400__a = new Array(arguments.length -  0);
while (G__58400__i < G__58400__a.length) {G__58400__a[G__58400__i] = arguments[G__58400__i + 0]; ++G__58400__i;}
  args = new cljs.core.IndexedSeq(G__58400__a,0,null);
} 
return G__58399__delegate.call(this,args);};
G__58399.cljs$lang$maxFixedArity = 0;
G__58399.cljs$lang$applyTo = (function (arglist__58401){
var args = cljs.core.seq(arglist__58401);
return G__58399__delegate(args);
});
G__58399.cljs$core$IFn$_invoke$arity$variadic = G__58399__delegate;
return G__58399;
})()
;

return null;
});
