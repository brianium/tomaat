goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__40176__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__40176 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40177__i = 0, G__40177__a = new Array(arguments.length -  0);
while (G__40177__i < G__40177__a.length) {G__40177__a[G__40177__i] = arguments[G__40177__i + 0]; ++G__40177__i;}
  args = new cljs.core.IndexedSeq(G__40177__a,0,null);
} 
return G__40176__delegate.call(this,args);};
G__40176.cljs$lang$maxFixedArity = 0;
G__40176.cljs$lang$applyTo = (function (arglist__40178){
var args = cljs.core.seq(arglist__40178);
return G__40176__delegate(args);
});
G__40176.cljs$core$IFn$_invoke$arity$variadic = G__40176__delegate;
return G__40176;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__40179__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__40179 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40180__i = 0, G__40180__a = new Array(arguments.length -  0);
while (G__40180__i < G__40180__a.length) {G__40180__a[G__40180__i] = arguments[G__40180__i + 0]; ++G__40180__i;}
  args = new cljs.core.IndexedSeq(G__40180__a,0,null);
} 
return G__40179__delegate.call(this,args);};
G__40179.cljs$lang$maxFixedArity = 0;
G__40179.cljs$lang$applyTo = (function (arglist__40181){
var args = cljs.core.seq(arglist__40181);
return G__40179__delegate(args);
});
G__40179.cljs$core$IFn$_invoke$arity$variadic = G__40179__delegate;
return G__40179;
})()
;

return null;
});
