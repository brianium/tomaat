goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__45255__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__45255 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45256__i = 0, G__45256__a = new Array(arguments.length -  0);
while (G__45256__i < G__45256__a.length) {G__45256__a[G__45256__i] = arguments[G__45256__i + 0]; ++G__45256__i;}
  args = new cljs.core.IndexedSeq(G__45256__a,0,null);
} 
return G__45255__delegate.call(this,args);};
G__45255.cljs$lang$maxFixedArity = 0;
G__45255.cljs$lang$applyTo = (function (arglist__45257){
var args = cljs.core.seq(arglist__45257);
return G__45255__delegate(args);
});
G__45255.cljs$core$IFn$_invoke$arity$variadic = G__45255__delegate;
return G__45255;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__45258__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__45258 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45259__i = 0, G__45259__a = new Array(arguments.length -  0);
while (G__45259__i < G__45259__a.length) {G__45259__a[G__45259__i] = arguments[G__45259__i + 0]; ++G__45259__i;}
  args = new cljs.core.IndexedSeq(G__45259__a,0,null);
} 
return G__45258__delegate.call(this,args);};
G__45258.cljs$lang$maxFixedArity = 0;
G__45258.cljs$lang$applyTo = (function (arglist__45260){
var args = cljs.core.seq(arglist__45260);
return G__45258__delegate(args);
});
G__45258.cljs$core$IFn$_invoke$arity$variadic = G__45258__delegate;
return G__45258;
})()
;

return null;
});
