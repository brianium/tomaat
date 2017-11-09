goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__58572__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__58572 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__58573__i = 0, G__58573__a = new Array(arguments.length -  0);
while (G__58573__i < G__58573__a.length) {G__58573__a[G__58573__i] = arguments[G__58573__i + 0]; ++G__58573__i;}
  args = new cljs.core.IndexedSeq(G__58573__a,0,null);
} 
return G__58572__delegate.call(this,args);};
G__58572.cljs$lang$maxFixedArity = 0;
G__58572.cljs$lang$applyTo = (function (arglist__58574){
var args = cljs.core.seq(arglist__58574);
return G__58572__delegate(args);
});
G__58572.cljs$core$IFn$_invoke$arity$variadic = G__58572__delegate;
return G__58572;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__58575__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__58575 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__58576__i = 0, G__58576__a = new Array(arguments.length -  0);
while (G__58576__i < G__58576__a.length) {G__58576__a[G__58576__i] = arguments[G__58576__i + 0]; ++G__58576__i;}
  args = new cljs.core.IndexedSeq(G__58576__a,0,null);
} 
return G__58575__delegate.call(this,args);};
G__58575.cljs$lang$maxFixedArity = 0;
G__58575.cljs$lang$applyTo = (function (arglist__58577){
var args = cljs.core.seq(arglist__58577);
return G__58575__delegate(args);
});
G__58575.cljs$core$IFn$_invoke$arity$variadic = G__58575__delegate;
return G__58575;
})()
;

return null;
});
