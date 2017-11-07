goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__18303__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__18303 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18304__i = 0, G__18304__a = new Array(arguments.length -  0);
while (G__18304__i < G__18304__a.length) {G__18304__a[G__18304__i] = arguments[G__18304__i + 0]; ++G__18304__i;}
  args = new cljs.core.IndexedSeq(G__18304__a,0,null);
} 
return G__18303__delegate.call(this,args);};
G__18303.cljs$lang$maxFixedArity = 0;
G__18303.cljs$lang$applyTo = (function (arglist__18305){
var args = cljs.core.seq(arglist__18305);
return G__18303__delegate(args);
});
G__18303.cljs$core$IFn$_invoke$arity$variadic = G__18303__delegate;
return G__18303;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__18306__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__18306 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18307__i = 0, G__18307__a = new Array(arguments.length -  0);
while (G__18307__i < G__18307__a.length) {G__18307__a[G__18307__i] = arguments[G__18307__i + 0]; ++G__18307__i;}
  args = new cljs.core.IndexedSeq(G__18307__a,0,null);
} 
return G__18306__delegate.call(this,args);};
G__18306.cljs$lang$maxFixedArity = 0;
G__18306.cljs$lang$applyTo = (function (arglist__18308){
var args = cljs.core.seq(arglist__18308);
return G__18306__delegate(args);
});
G__18306.cljs$core$IFn$_invoke$arity$variadic = G__18306__delegate;
return G__18306;
})()
;

return null;
});
