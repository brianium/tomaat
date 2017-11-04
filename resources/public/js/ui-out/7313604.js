goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__46067__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__46067 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46068__i = 0, G__46068__a = new Array(arguments.length -  0);
while (G__46068__i < G__46068__a.length) {G__46068__a[G__46068__i] = arguments[G__46068__i + 0]; ++G__46068__i;}
  args = new cljs.core.IndexedSeq(G__46068__a,0,null);
} 
return G__46067__delegate.call(this,args);};
G__46067.cljs$lang$maxFixedArity = 0;
G__46067.cljs$lang$applyTo = (function (arglist__46069){
var args = cljs.core.seq(arglist__46069);
return G__46067__delegate(args);
});
G__46067.cljs$core$IFn$_invoke$arity$variadic = G__46067__delegate;
return G__46067;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__46070__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__46070 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46071__i = 0, G__46071__a = new Array(arguments.length -  0);
while (G__46071__i < G__46071__a.length) {G__46071__a[G__46071__i] = arguments[G__46071__i + 0]; ++G__46071__i;}
  args = new cljs.core.IndexedSeq(G__46071__a,0,null);
} 
return G__46070__delegate.call(this,args);};
G__46070.cljs$lang$maxFixedArity = 0;
G__46070.cljs$lang$applyTo = (function (arglist__46072){
var args = cljs.core.seq(arglist__46072);
return G__46070__delegate(args);
});
G__46070.cljs$core$IFn$_invoke$arity$variadic = G__46070__delegate;
return G__46070;
})()
;

return null;
});
