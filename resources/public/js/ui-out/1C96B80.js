goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__45964__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__45964 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45965__i = 0, G__45965__a = new Array(arguments.length -  0);
while (G__45965__i < G__45965__a.length) {G__45965__a[G__45965__i] = arguments[G__45965__i + 0]; ++G__45965__i;}
  args = new cljs.core.IndexedSeq(G__45965__a,0,null);
} 
return G__45964__delegate.call(this,args);};
G__45964.cljs$lang$maxFixedArity = 0;
G__45964.cljs$lang$applyTo = (function (arglist__45966){
var args = cljs.core.seq(arglist__45966);
return G__45964__delegate(args);
});
G__45964.cljs$core$IFn$_invoke$arity$variadic = G__45964__delegate;
return G__45964;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__45967__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__45967 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45968__i = 0, G__45968__a = new Array(arguments.length -  0);
while (G__45968__i < G__45968__a.length) {G__45968__a[G__45968__i] = arguments[G__45968__i + 0]; ++G__45968__i;}
  args = new cljs.core.IndexedSeq(G__45968__a,0,null);
} 
return G__45967__delegate.call(this,args);};
G__45967.cljs$lang$maxFixedArity = 0;
G__45967.cljs$lang$applyTo = (function (arglist__45969){
var args = cljs.core.seq(arglist__45969);
return G__45967__delegate(args);
});
G__45967.cljs$core$IFn$_invoke$arity$variadic = G__45967__delegate;
return G__45967;
})()
;

return null;
});
