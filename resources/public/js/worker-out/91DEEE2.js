goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__18284__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__18284 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18285__i = 0, G__18285__a = new Array(arguments.length -  0);
while (G__18285__i < G__18285__a.length) {G__18285__a[G__18285__i] = arguments[G__18285__i + 0]; ++G__18285__i;}
  args = new cljs.core.IndexedSeq(G__18285__a,0,null);
} 
return G__18284__delegate.call(this,args);};
G__18284.cljs$lang$maxFixedArity = 0;
G__18284.cljs$lang$applyTo = (function (arglist__18286){
var args = cljs.core.seq(arglist__18286);
return G__18284__delegate(args);
});
G__18284.cljs$core$IFn$_invoke$arity$variadic = G__18284__delegate;
return G__18284;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__18287__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__18287 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18288__i = 0, G__18288__a = new Array(arguments.length -  0);
while (G__18288__i < G__18288__a.length) {G__18288__a[G__18288__i] = arguments[G__18288__i + 0]; ++G__18288__i;}
  args = new cljs.core.IndexedSeq(G__18288__a,0,null);
} 
return G__18287__delegate.call(this,args);};
G__18287.cljs$lang$maxFixedArity = 0;
G__18287.cljs$lang$applyTo = (function (arglist__18289){
var args = cljs.core.seq(arglist__18289);
return G__18287__delegate(args);
});
G__18287.cljs$core$IFn$_invoke$arity$variadic = G__18287__delegate;
return G__18287;
})()
;

return null;
});
