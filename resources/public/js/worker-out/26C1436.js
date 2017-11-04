goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__45459__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__45459 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45460__i = 0, G__45460__a = new Array(arguments.length -  0);
while (G__45460__i < G__45460__a.length) {G__45460__a[G__45460__i] = arguments[G__45460__i + 0]; ++G__45460__i;}
  args = new cljs.core.IndexedSeq(G__45460__a,0,null);
} 
return G__45459__delegate.call(this,args);};
G__45459.cljs$lang$maxFixedArity = 0;
G__45459.cljs$lang$applyTo = (function (arglist__45461){
var args = cljs.core.seq(arglist__45461);
return G__45459__delegate(args);
});
G__45459.cljs$core$IFn$_invoke$arity$variadic = G__45459__delegate;
return G__45459;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__45462__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__45462 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45463__i = 0, G__45463__a = new Array(arguments.length -  0);
while (G__45463__i < G__45463__a.length) {G__45463__a[G__45463__i] = arguments[G__45463__i + 0]; ++G__45463__i;}
  args = new cljs.core.IndexedSeq(G__45463__a,0,null);
} 
return G__45462__delegate.call(this,args);};
G__45462.cljs$lang$maxFixedArity = 0;
G__45462.cljs$lang$applyTo = (function (arglist__45464){
var args = cljs.core.seq(arglist__45464);
return G__45462__delegate(args);
});
G__45462.cljs$core$IFn$_invoke$arity$variadic = G__45462__delegate;
return G__45462;
})()
;

return null;
});
