goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__58016__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__58016 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__58017__i = 0, G__58017__a = new Array(arguments.length -  0);
while (G__58017__i < G__58017__a.length) {G__58017__a[G__58017__i] = arguments[G__58017__i + 0]; ++G__58017__i;}
  args = new cljs.core.IndexedSeq(G__58017__a,0,null);
} 
return G__58016__delegate.call(this,args);};
G__58016.cljs$lang$maxFixedArity = 0;
G__58016.cljs$lang$applyTo = (function (arglist__58018){
var args = cljs.core.seq(arglist__58018);
return G__58016__delegate(args);
});
G__58016.cljs$core$IFn$_invoke$arity$variadic = G__58016__delegate;
return G__58016;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__58019__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__58019 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__58020__i = 0, G__58020__a = new Array(arguments.length -  0);
while (G__58020__i < G__58020__a.length) {G__58020__a[G__58020__i] = arguments[G__58020__i + 0]; ++G__58020__i;}
  args = new cljs.core.IndexedSeq(G__58020__a,0,null);
} 
return G__58019__delegate.call(this,args);};
G__58019.cljs$lang$maxFixedArity = 0;
G__58019.cljs$lang$applyTo = (function (arglist__58021){
var args = cljs.core.seq(arglist__58021);
return G__58019__delegate(args);
});
G__58019.cljs$core$IFn$_invoke$arity$variadic = G__58019__delegate;
return G__58019;
})()
;

return null;
});
