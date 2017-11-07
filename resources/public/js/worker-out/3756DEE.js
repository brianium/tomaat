goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__18341__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__18341 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18342__i = 0, G__18342__a = new Array(arguments.length -  0);
while (G__18342__i < G__18342__a.length) {G__18342__a[G__18342__i] = arguments[G__18342__i + 0]; ++G__18342__i;}
  args = new cljs.core.IndexedSeq(G__18342__a,0,null);
} 
return G__18341__delegate.call(this,args);};
G__18341.cljs$lang$maxFixedArity = 0;
G__18341.cljs$lang$applyTo = (function (arglist__18343){
var args = cljs.core.seq(arglist__18343);
return G__18341__delegate(args);
});
G__18341.cljs$core$IFn$_invoke$arity$variadic = G__18341__delegate;
return G__18341;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__18344__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__18344 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18345__i = 0, G__18345__a = new Array(arguments.length -  0);
while (G__18345__i < G__18345__a.length) {G__18345__a[G__18345__i] = arguments[G__18345__i + 0]; ++G__18345__i;}
  args = new cljs.core.IndexedSeq(G__18345__a,0,null);
} 
return G__18344__delegate.call(this,args);};
G__18344.cljs$lang$maxFixedArity = 0;
G__18344.cljs$lang$applyTo = (function (arglist__18346){
var args = cljs.core.seq(arglist__18346);
return G__18344__delegate(args);
});
G__18344.cljs$core$IFn$_invoke$arity$variadic = G__18344__delegate;
return G__18344;
})()
;

return null;
});
