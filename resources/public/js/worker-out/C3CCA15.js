goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__45169__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__45169 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45170__i = 0, G__45170__a = new Array(arguments.length -  0);
while (G__45170__i < G__45170__a.length) {G__45170__a[G__45170__i] = arguments[G__45170__i + 0]; ++G__45170__i;}
  args = new cljs.core.IndexedSeq(G__45170__a,0,null);
} 
return G__45169__delegate.call(this,args);};
G__45169.cljs$lang$maxFixedArity = 0;
G__45169.cljs$lang$applyTo = (function (arglist__45171){
var args = cljs.core.seq(arglist__45171);
return G__45169__delegate(args);
});
G__45169.cljs$core$IFn$_invoke$arity$variadic = G__45169__delegate;
return G__45169;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__45172__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__45172 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45173__i = 0, G__45173__a = new Array(arguments.length -  0);
while (G__45173__i < G__45173__a.length) {G__45173__a[G__45173__i] = arguments[G__45173__i + 0]; ++G__45173__i;}
  args = new cljs.core.IndexedSeq(G__45173__a,0,null);
} 
return G__45172__delegate.call(this,args);};
G__45172.cljs$lang$maxFixedArity = 0;
G__45172.cljs$lang$applyTo = (function (arglist__45174){
var args = cljs.core.seq(arglist__45174);
return G__45172__delegate(args);
});
G__45172.cljs$core$IFn$_invoke$arity$variadic = G__45172__delegate;
return G__45172;
})()
;

return null;
});
