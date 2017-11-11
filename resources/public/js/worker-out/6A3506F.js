goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__46810__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__46810 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46811__i = 0, G__46811__a = new Array(arguments.length -  0);
while (G__46811__i < G__46811__a.length) {G__46811__a[G__46811__i] = arguments[G__46811__i + 0]; ++G__46811__i;}
  args = new cljs.core.IndexedSeq(G__46811__a,0,null);
} 
return G__46810__delegate.call(this,args);};
G__46810.cljs$lang$maxFixedArity = 0;
G__46810.cljs$lang$applyTo = (function (arglist__46812){
var args = cljs.core.seq(arglist__46812);
return G__46810__delegate(args);
});
G__46810.cljs$core$IFn$_invoke$arity$variadic = G__46810__delegate;
return G__46810;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__46813__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__46813 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46814__i = 0, G__46814__a = new Array(arguments.length -  0);
while (G__46814__i < G__46814__a.length) {G__46814__a[G__46814__i] = arguments[G__46814__i + 0]; ++G__46814__i;}
  args = new cljs.core.IndexedSeq(G__46814__a,0,null);
} 
return G__46813__delegate.call(this,args);};
G__46813.cljs$lang$maxFixedArity = 0;
G__46813.cljs$lang$applyTo = (function (arglist__46815){
var args = cljs.core.seq(arglist__46815);
return G__46813__delegate(args);
});
G__46813.cljs$core$IFn$_invoke$arity$variadic = G__46813__delegate;
return G__46813;
})()
;

return null;
});
