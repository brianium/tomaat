goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__58230__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__58230 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__58231__i = 0, G__58231__a = new Array(arguments.length -  0);
while (G__58231__i < G__58231__a.length) {G__58231__a[G__58231__i] = arguments[G__58231__i + 0]; ++G__58231__i;}
  args = new cljs.core.IndexedSeq(G__58231__a,0,null);
} 
return G__58230__delegate.call(this,args);};
G__58230.cljs$lang$maxFixedArity = 0;
G__58230.cljs$lang$applyTo = (function (arglist__58232){
var args = cljs.core.seq(arglist__58232);
return G__58230__delegate(args);
});
G__58230.cljs$core$IFn$_invoke$arity$variadic = G__58230__delegate;
return G__58230;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__58233__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__58233 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__58234__i = 0, G__58234__a = new Array(arguments.length -  0);
while (G__58234__i < G__58234__a.length) {G__58234__a[G__58234__i] = arguments[G__58234__i + 0]; ++G__58234__i;}
  args = new cljs.core.IndexedSeq(G__58234__a,0,null);
} 
return G__58233__delegate.call(this,args);};
G__58233.cljs$lang$maxFixedArity = 0;
G__58233.cljs$lang$applyTo = (function (arglist__58235){
var args = cljs.core.seq(arglist__58235);
return G__58233__delegate(args);
});
G__58233.cljs$core$IFn$_invoke$arity$variadic = G__58233__delegate;
return G__58233;
})()
;

return null;
});
