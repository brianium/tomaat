goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__45441__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__45441 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45442__i = 0, G__45442__a = new Array(arguments.length -  0);
while (G__45442__i < G__45442__a.length) {G__45442__a[G__45442__i] = arguments[G__45442__i + 0]; ++G__45442__i;}
  args = new cljs.core.IndexedSeq(G__45442__a,0,null);
} 
return G__45441__delegate.call(this,args);};
G__45441.cljs$lang$maxFixedArity = 0;
G__45441.cljs$lang$applyTo = (function (arglist__45443){
var args = cljs.core.seq(arglist__45443);
return G__45441__delegate(args);
});
G__45441.cljs$core$IFn$_invoke$arity$variadic = G__45441__delegate;
return G__45441;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__45444__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__45444 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45445__i = 0, G__45445__a = new Array(arguments.length -  0);
while (G__45445__i < G__45445__a.length) {G__45445__a[G__45445__i] = arguments[G__45445__i + 0]; ++G__45445__i;}
  args = new cljs.core.IndexedSeq(G__45445__a,0,null);
} 
return G__45444__delegate.call(this,args);};
G__45444.cljs$lang$maxFixedArity = 0;
G__45444.cljs$lang$applyTo = (function (arglist__45446){
var args = cljs.core.seq(arglist__45446);
return G__45444__delegate(args);
});
G__45444.cljs$core$IFn$_invoke$arity$variadic = G__45444__delegate;
return G__45444;
})()
;

return null;
});
