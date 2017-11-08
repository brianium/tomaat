goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__54481__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__54481 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__54482__i = 0, G__54482__a = new Array(arguments.length -  0);
while (G__54482__i < G__54482__a.length) {G__54482__a[G__54482__i] = arguments[G__54482__i + 0]; ++G__54482__i;}
  args = new cljs.core.IndexedSeq(G__54482__a,0,null);
} 
return G__54481__delegate.call(this,args);};
G__54481.cljs$lang$maxFixedArity = 0;
G__54481.cljs$lang$applyTo = (function (arglist__54483){
var args = cljs.core.seq(arglist__54483);
return G__54481__delegate(args);
});
G__54481.cljs$core$IFn$_invoke$arity$variadic = G__54481__delegate;
return G__54481;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__54484__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__54484 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__54485__i = 0, G__54485__a = new Array(arguments.length -  0);
while (G__54485__i < G__54485__a.length) {G__54485__a[G__54485__i] = arguments[G__54485__i + 0]; ++G__54485__i;}
  args = new cljs.core.IndexedSeq(G__54485__a,0,null);
} 
return G__54484__delegate.call(this,args);};
G__54484.cljs$lang$maxFixedArity = 0;
G__54484.cljs$lang$applyTo = (function (arglist__54486){
var args = cljs.core.seq(arglist__54486);
return G__54484__delegate(args);
});
G__54484.cljs$core$IFn$_invoke$arity$variadic = G__54484__delegate;
return G__54484;
})()
;

return null;
});
