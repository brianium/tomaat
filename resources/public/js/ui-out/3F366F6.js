goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__46049__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__46049 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46050__i = 0, G__46050__a = new Array(arguments.length -  0);
while (G__46050__i < G__46050__a.length) {G__46050__a[G__46050__i] = arguments[G__46050__i + 0]; ++G__46050__i;}
  args = new cljs.core.IndexedSeq(G__46050__a,0,null);
} 
return G__46049__delegate.call(this,args);};
G__46049.cljs$lang$maxFixedArity = 0;
G__46049.cljs$lang$applyTo = (function (arglist__46051){
var args = cljs.core.seq(arglist__46051);
return G__46049__delegate(args);
});
G__46049.cljs$core$IFn$_invoke$arity$variadic = G__46049__delegate;
return G__46049;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__46052__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__46052 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46053__i = 0, G__46053__a = new Array(arguments.length -  0);
while (G__46053__i < G__46053__a.length) {G__46053__a[G__46053__i] = arguments[G__46053__i + 0]; ++G__46053__i;}
  args = new cljs.core.IndexedSeq(G__46053__a,0,null);
} 
return G__46052__delegate.call(this,args);};
G__46052.cljs$lang$maxFixedArity = 0;
G__46052.cljs$lang$applyTo = (function (arglist__46054){
var args = cljs.core.seq(arglist__46054);
return G__46052__delegate(args);
});
G__46052.cljs$core$IFn$_invoke$arity$variadic = G__46052__delegate;
return G__46052;
})()
;

return null;
});
