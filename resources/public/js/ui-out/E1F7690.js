goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__46002__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__46002 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46003__i = 0, G__46003__a = new Array(arguments.length -  0);
while (G__46003__i < G__46003__a.length) {G__46003__a[G__46003__i] = arguments[G__46003__i + 0]; ++G__46003__i;}
  args = new cljs.core.IndexedSeq(G__46003__a,0,null);
} 
return G__46002__delegate.call(this,args);};
G__46002.cljs$lang$maxFixedArity = 0;
G__46002.cljs$lang$applyTo = (function (arglist__46004){
var args = cljs.core.seq(arglist__46004);
return G__46002__delegate(args);
});
G__46002.cljs$core$IFn$_invoke$arity$variadic = G__46002__delegate;
return G__46002;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__46005__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__46005 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46006__i = 0, G__46006__a = new Array(arguments.length -  0);
while (G__46006__i < G__46006__a.length) {G__46006__a[G__46006__i] = arguments[G__46006__i + 0]; ++G__46006__i;}
  args = new cljs.core.IndexedSeq(G__46006__a,0,null);
} 
return G__46005__delegate.call(this,args);};
G__46005.cljs$lang$maxFixedArity = 0;
G__46005.cljs$lang$applyTo = (function (arglist__46007){
var args = cljs.core.seq(arglist__46007);
return G__46005__delegate(args);
});
G__46005.cljs$core$IFn$_invoke$arity$variadic = G__46005__delegate;
return G__46005;
})()
;

return null;
});
