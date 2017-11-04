goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__46105__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__46105 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46106__i = 0, G__46106__a = new Array(arguments.length -  0);
while (G__46106__i < G__46106__a.length) {G__46106__a[G__46106__i] = arguments[G__46106__i + 0]; ++G__46106__i;}
  args = new cljs.core.IndexedSeq(G__46106__a,0,null);
} 
return G__46105__delegate.call(this,args);};
G__46105.cljs$lang$maxFixedArity = 0;
G__46105.cljs$lang$applyTo = (function (arglist__46107){
var args = cljs.core.seq(arglist__46107);
return G__46105__delegate(args);
});
G__46105.cljs$core$IFn$_invoke$arity$variadic = G__46105__delegate;
return G__46105;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__46108__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__46108 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46109__i = 0, G__46109__a = new Array(arguments.length -  0);
while (G__46109__i < G__46109__a.length) {G__46109__a[G__46109__i] = arguments[G__46109__i + 0]; ++G__46109__i;}
  args = new cljs.core.IndexedSeq(G__46109__a,0,null);
} 
return G__46108__delegate.call(this,args);};
G__46108.cljs$lang$maxFixedArity = 0;
G__46108.cljs$lang$applyTo = (function (arglist__46110){
var args = cljs.core.seq(arglist__46110);
return G__46108__delegate(args);
});
G__46108.cljs$core$IFn$_invoke$arity$variadic = G__46108__delegate;
return G__46108;
})()
;

return null;
});
