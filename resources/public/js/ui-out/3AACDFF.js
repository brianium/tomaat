goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__46019__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__46019 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46020__i = 0, G__46020__a = new Array(arguments.length -  0);
while (G__46020__i < G__46020__a.length) {G__46020__a[G__46020__i] = arguments[G__46020__i + 0]; ++G__46020__i;}
  args = new cljs.core.IndexedSeq(G__46020__a,0,null);
} 
return G__46019__delegate.call(this,args);};
G__46019.cljs$lang$maxFixedArity = 0;
G__46019.cljs$lang$applyTo = (function (arglist__46021){
var args = cljs.core.seq(arglist__46021);
return G__46019__delegate(args);
});
G__46019.cljs$core$IFn$_invoke$arity$variadic = G__46019__delegate;
return G__46019;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__46022__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__46022 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46023__i = 0, G__46023__a = new Array(arguments.length -  0);
while (G__46023__i < G__46023__a.length) {G__46023__a[G__46023__i] = arguments[G__46023__i + 0]; ++G__46023__i;}
  args = new cljs.core.IndexedSeq(G__46023__a,0,null);
} 
return G__46022__delegate.call(this,args);};
G__46022.cljs$lang$maxFixedArity = 0;
G__46022.cljs$lang$applyTo = (function (arglist__46024){
var args = cljs.core.seq(arglist__46024);
return G__46022__delegate(args);
});
G__46022.cljs$core$IFn$_invoke$arity$variadic = G__46022__delegate;
return G__46022;
})()
;

return null;
});
