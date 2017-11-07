goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__14019__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__14019 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14020__i = 0, G__14020__a = new Array(arguments.length -  0);
while (G__14020__i < G__14020__a.length) {G__14020__a[G__14020__i] = arguments[G__14020__i + 0]; ++G__14020__i;}
  args = new cljs.core.IndexedSeq(G__14020__a,0,null);
} 
return G__14019__delegate.call(this,args);};
G__14019.cljs$lang$maxFixedArity = 0;
G__14019.cljs$lang$applyTo = (function (arglist__14021){
var args = cljs.core.seq(arglist__14021);
return G__14019__delegate(args);
});
G__14019.cljs$core$IFn$_invoke$arity$variadic = G__14019__delegate;
return G__14019;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__14022__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__14022 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14023__i = 0, G__14023__a = new Array(arguments.length -  0);
while (G__14023__i < G__14023__a.length) {G__14023__a[G__14023__i] = arguments[G__14023__i + 0]; ++G__14023__i;}
  args = new cljs.core.IndexedSeq(G__14023__a,0,null);
} 
return G__14022__delegate.call(this,args);};
G__14022.cljs$lang$maxFixedArity = 0;
G__14022.cljs$lang$applyTo = (function (arglist__14024){
var args = cljs.core.seq(arglist__14024);
return G__14022__delegate(args);
});
G__14022.cljs$core$IFn$_invoke$arity$variadic = G__14022__delegate;
return G__14022;
})()
;

return null;
});
