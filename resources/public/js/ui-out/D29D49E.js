goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__58126__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__58126 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__58127__i = 0, G__58127__a = new Array(arguments.length -  0);
while (G__58127__i < G__58127__a.length) {G__58127__a[G__58127__i] = arguments[G__58127__i + 0]; ++G__58127__i;}
  args = new cljs.core.IndexedSeq(G__58127__a,0,null);
} 
return G__58126__delegate.call(this,args);};
G__58126.cljs$lang$maxFixedArity = 0;
G__58126.cljs$lang$applyTo = (function (arglist__58128){
var args = cljs.core.seq(arglist__58128);
return G__58126__delegate(args);
});
G__58126.cljs$core$IFn$_invoke$arity$variadic = G__58126__delegate;
return G__58126;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__58129__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__58129 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__58130__i = 0, G__58130__a = new Array(arguments.length -  0);
while (G__58130__i < G__58130__a.length) {G__58130__a[G__58130__i] = arguments[G__58130__i + 0]; ++G__58130__i;}
  args = new cljs.core.IndexedSeq(G__58130__a,0,null);
} 
return G__58129__delegate.call(this,args);};
G__58129.cljs$lang$maxFixedArity = 0;
G__58129.cljs$lang$applyTo = (function (arglist__58131){
var args = cljs.core.seq(arglist__58131);
return G__58129__delegate(args);
});
G__58129.cljs$core$IFn$_invoke$arity$variadic = G__58129__delegate;
return G__58129;
})()
;

return null;
});
