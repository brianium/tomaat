goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__13999__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__13999 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14000__i = 0, G__14000__a = new Array(arguments.length -  0);
while (G__14000__i < G__14000__a.length) {G__14000__a[G__14000__i] = arguments[G__14000__i + 0]; ++G__14000__i;}
  args = new cljs.core.IndexedSeq(G__14000__a,0,null);
} 
return G__13999__delegate.call(this,args);};
G__13999.cljs$lang$maxFixedArity = 0;
G__13999.cljs$lang$applyTo = (function (arglist__14001){
var args = cljs.core.seq(arglist__14001);
return G__13999__delegate(args);
});
G__13999.cljs$core$IFn$_invoke$arity$variadic = G__13999__delegate;
return G__13999;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__14002__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__14002 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14003__i = 0, G__14003__a = new Array(arguments.length -  0);
while (G__14003__i < G__14003__a.length) {G__14003__a[G__14003__i] = arguments[G__14003__i + 0]; ++G__14003__i;}
  args = new cljs.core.IndexedSeq(G__14003__a,0,null);
} 
return G__14002__delegate.call(this,args);};
G__14002.cljs$lang$maxFixedArity = 0;
G__14002.cljs$lang$applyTo = (function (arglist__14004){
var args = cljs.core.seq(arglist__14004);
return G__14002__delegate(args);
});
G__14002.cljs$core$IFn$_invoke$arity$variadic = G__14002__delegate;
return G__14002;
})()
;

return null;
});
