goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__46161__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__46161 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46162__i = 0, G__46162__a = new Array(arguments.length -  0);
while (G__46162__i < G__46162__a.length) {G__46162__a[G__46162__i] = arguments[G__46162__i + 0]; ++G__46162__i;}
  args = new cljs.core.IndexedSeq(G__46162__a,0,null);
} 
return G__46161__delegate.call(this,args);};
G__46161.cljs$lang$maxFixedArity = 0;
G__46161.cljs$lang$applyTo = (function (arglist__46163){
var args = cljs.core.seq(arglist__46163);
return G__46161__delegate(args);
});
G__46161.cljs$core$IFn$_invoke$arity$variadic = G__46161__delegate;
return G__46161;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__46164__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__46164 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46165__i = 0, G__46165__a = new Array(arguments.length -  0);
while (G__46165__i < G__46165__a.length) {G__46165__a[G__46165__i] = arguments[G__46165__i + 0]; ++G__46165__i;}
  args = new cljs.core.IndexedSeq(G__46165__a,0,null);
} 
return G__46164__delegate.call(this,args);};
G__46164.cljs$lang$maxFixedArity = 0;
G__46164.cljs$lang$applyTo = (function (arglist__46166){
var args = cljs.core.seq(arglist__46166);
return G__46164__delegate(args);
});
G__46164.cljs$core$IFn$_invoke$arity$variadic = G__46164__delegate;
return G__46164;
})()
;

return null;
});
