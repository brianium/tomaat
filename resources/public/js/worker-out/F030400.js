goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__53880__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__53880 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__53881__i = 0, G__53881__a = new Array(arguments.length -  0);
while (G__53881__i < G__53881__a.length) {G__53881__a[G__53881__i] = arguments[G__53881__i + 0]; ++G__53881__i;}
  args = new cljs.core.IndexedSeq(G__53881__a,0,null);
} 
return G__53880__delegate.call(this,args);};
G__53880.cljs$lang$maxFixedArity = 0;
G__53880.cljs$lang$applyTo = (function (arglist__53882){
var args = cljs.core.seq(arglist__53882);
return G__53880__delegate(args);
});
G__53880.cljs$core$IFn$_invoke$arity$variadic = G__53880__delegate;
return G__53880;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__53883__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__53883 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__53884__i = 0, G__53884__a = new Array(arguments.length -  0);
while (G__53884__i < G__53884__a.length) {G__53884__a[G__53884__i] = arguments[G__53884__i + 0]; ++G__53884__i;}
  args = new cljs.core.IndexedSeq(G__53884__a,0,null);
} 
return G__53883__delegate.call(this,args);};
G__53883.cljs$lang$maxFixedArity = 0;
G__53883.cljs$lang$applyTo = (function (arglist__53885){
var args = cljs.core.seq(arglist__53885);
return G__53883__delegate(args);
});
G__53883.cljs$core$IFn$_invoke$arity$variadic = G__53883__delegate;
return G__53883;
})()
;

return null;
});
