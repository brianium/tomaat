goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__18265__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__18265 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18266__i = 0, G__18266__a = new Array(arguments.length -  0);
while (G__18266__i < G__18266__a.length) {G__18266__a[G__18266__i] = arguments[G__18266__i + 0]; ++G__18266__i;}
  args = new cljs.core.IndexedSeq(G__18266__a,0,null);
} 
return G__18265__delegate.call(this,args);};
G__18265.cljs$lang$maxFixedArity = 0;
G__18265.cljs$lang$applyTo = (function (arglist__18267){
var args = cljs.core.seq(arglist__18267);
return G__18265__delegate(args);
});
G__18265.cljs$core$IFn$_invoke$arity$variadic = G__18265__delegate;
return G__18265;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__18268__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__18268 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18269__i = 0, G__18269__a = new Array(arguments.length -  0);
while (G__18269__i < G__18269__a.length) {G__18269__a[G__18269__i] = arguments[G__18269__i + 0]; ++G__18269__i;}
  args = new cljs.core.IndexedSeq(G__18269__a,0,null);
} 
return G__18268__delegate.call(this,args);};
G__18268.cljs$lang$maxFixedArity = 0;
G__18268.cljs$lang$applyTo = (function (arglist__18270){
var args = cljs.core.seq(arglist__18270);
return G__18268__delegate(args);
});
G__18268.cljs$core$IFn$_invoke$arity$variadic = G__18268__delegate;
return G__18268;
})()
;

return null;
});
