goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__16127__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__16127 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16128__i = 0, G__16128__a = new Array(arguments.length -  0);
while (G__16128__i < G__16128__a.length) {G__16128__a[G__16128__i] = arguments[G__16128__i + 0]; ++G__16128__i;}
  args = new cljs.core.IndexedSeq(G__16128__a,0,null);
} 
return G__16127__delegate.call(this,args);};
G__16127.cljs$lang$maxFixedArity = 0;
G__16127.cljs$lang$applyTo = (function (arglist__16129){
var args = cljs.core.seq(arglist__16129);
return G__16127__delegate(args);
});
G__16127.cljs$core$IFn$_invoke$arity$variadic = G__16127__delegate;
return G__16127;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__16130__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__16130 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16131__i = 0, G__16131__a = new Array(arguments.length -  0);
while (G__16131__i < G__16131__a.length) {G__16131__a[G__16131__i] = arguments[G__16131__i + 0]; ++G__16131__i;}
  args = new cljs.core.IndexedSeq(G__16131__a,0,null);
} 
return G__16130__delegate.call(this,args);};
G__16130.cljs$lang$maxFixedArity = 0;
G__16130.cljs$lang$applyTo = (function (arglist__16132){
var args = cljs.core.seq(arglist__16132);
return G__16130__delegate(args);
});
G__16130.cljs$core$IFn$_invoke$arity$variadic = G__16130__delegate;
return G__16130;
})()
;

return null;
});
