goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__54600__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__54600 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__54601__i = 0, G__54601__a = new Array(arguments.length -  0);
while (G__54601__i < G__54601__a.length) {G__54601__a[G__54601__i] = arguments[G__54601__i + 0]; ++G__54601__i;}
  args = new cljs.core.IndexedSeq(G__54601__a,0,null);
} 
return G__54600__delegate.call(this,args);};
G__54600.cljs$lang$maxFixedArity = 0;
G__54600.cljs$lang$applyTo = (function (arglist__54602){
var args = cljs.core.seq(arglist__54602);
return G__54600__delegate(args);
});
G__54600.cljs$core$IFn$_invoke$arity$variadic = G__54600__delegate;
return G__54600;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__54603__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__54603 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__54604__i = 0, G__54604__a = new Array(arguments.length -  0);
while (G__54604__i < G__54604__a.length) {G__54604__a[G__54604__i] = arguments[G__54604__i + 0]; ++G__54604__i;}
  args = new cljs.core.IndexedSeq(G__54604__a,0,null);
} 
return G__54603__delegate.call(this,args);};
G__54603.cljs$lang$maxFixedArity = 0;
G__54603.cljs$lang$applyTo = (function (arglist__54605){
var args = cljs.core.seq(arglist__54605);
return G__54603__delegate(args);
});
G__54603.cljs$core$IFn$_invoke$arity$variadic = G__54603__delegate;
return G__54603;
})()
;

return null;
});
