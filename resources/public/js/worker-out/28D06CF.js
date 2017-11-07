goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__14049__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__14049 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14050__i = 0, G__14050__a = new Array(arguments.length -  0);
while (G__14050__i < G__14050__a.length) {G__14050__a[G__14050__i] = arguments[G__14050__i + 0]; ++G__14050__i;}
  args = new cljs.core.IndexedSeq(G__14050__a,0,null);
} 
return G__14049__delegate.call(this,args);};
G__14049.cljs$lang$maxFixedArity = 0;
G__14049.cljs$lang$applyTo = (function (arglist__14051){
var args = cljs.core.seq(arglist__14051);
return G__14049__delegate(args);
});
G__14049.cljs$core$IFn$_invoke$arity$variadic = G__14049__delegate;
return G__14049;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__14052__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__14052 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14053__i = 0, G__14053__a = new Array(arguments.length -  0);
while (G__14053__i < G__14053__a.length) {G__14053__a[G__14053__i] = arguments[G__14053__i + 0]; ++G__14053__i;}
  args = new cljs.core.IndexedSeq(G__14053__a,0,null);
} 
return G__14052__delegate.call(this,args);};
G__14052.cljs$lang$maxFixedArity = 0;
G__14052.cljs$lang$applyTo = (function (arglist__14054){
var args = cljs.core.seq(arglist__14054);
return G__14052__delegate(args);
});
G__14052.cljs$core$IFn$_invoke$arity$variadic = G__14052__delegate;
return G__14052;
})()
;

return null;
});
