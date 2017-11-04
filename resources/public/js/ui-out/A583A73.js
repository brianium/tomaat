goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__45553__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__45553 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45554__i = 0, G__45554__a = new Array(arguments.length -  0);
while (G__45554__i < G__45554__a.length) {G__45554__a[G__45554__i] = arguments[G__45554__i + 0]; ++G__45554__i;}
  args = new cljs.core.IndexedSeq(G__45554__a,0,null);
} 
return G__45553__delegate.call(this,args);};
G__45553.cljs$lang$maxFixedArity = 0;
G__45553.cljs$lang$applyTo = (function (arglist__45555){
var args = cljs.core.seq(arglist__45555);
return G__45553__delegate(args);
});
G__45553.cljs$core$IFn$_invoke$arity$variadic = G__45553__delegate;
return G__45553;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__45556__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__45556 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45557__i = 0, G__45557__a = new Array(arguments.length -  0);
while (G__45557__i < G__45557__a.length) {G__45557__a[G__45557__i] = arguments[G__45557__i + 0]; ++G__45557__i;}
  args = new cljs.core.IndexedSeq(G__45557__a,0,null);
} 
return G__45556__delegate.call(this,args);};
G__45556.cljs$lang$maxFixedArity = 0;
G__45556.cljs$lang$applyTo = (function (arglist__45558){
var args = cljs.core.seq(arglist__45558);
return G__45556__delegate(args);
});
G__45556.cljs$core$IFn$_invoke$arity$variadic = G__45556__delegate;
return G__45556;
})()
;

return null;
});
