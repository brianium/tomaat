goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__18427__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__18427 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18428__i = 0, G__18428__a = new Array(arguments.length -  0);
while (G__18428__i < G__18428__a.length) {G__18428__a[G__18428__i] = arguments[G__18428__i + 0]; ++G__18428__i;}
  args = new cljs.core.IndexedSeq(G__18428__a,0,null);
} 
return G__18427__delegate.call(this,args);};
G__18427.cljs$lang$maxFixedArity = 0;
G__18427.cljs$lang$applyTo = (function (arglist__18429){
var args = cljs.core.seq(arglist__18429);
return G__18427__delegate(args);
});
G__18427.cljs$core$IFn$_invoke$arity$variadic = G__18427__delegate;
return G__18427;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__18430__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__18430 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18431__i = 0, G__18431__a = new Array(arguments.length -  0);
while (G__18431__i < G__18431__a.length) {G__18431__a[G__18431__i] = arguments[G__18431__i + 0]; ++G__18431__i;}
  args = new cljs.core.IndexedSeq(G__18431__a,0,null);
} 
return G__18430__delegate.call(this,args);};
G__18430.cljs$lang$maxFixedArity = 0;
G__18430.cljs$lang$applyTo = (function (arglist__18432){
var args = cljs.core.seq(arglist__18432);
return G__18430__delegate(args);
});
G__18430.cljs$core$IFn$_invoke$arity$variadic = G__18430__delegate;
return G__18430;
})()
;

return null;
});
