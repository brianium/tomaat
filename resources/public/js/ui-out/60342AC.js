goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__45676__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__45676 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45677__i = 0, G__45677__a = new Array(arguments.length -  0);
while (G__45677__i < G__45677__a.length) {G__45677__a[G__45677__i] = arguments[G__45677__i + 0]; ++G__45677__i;}
  args = new cljs.core.IndexedSeq(G__45677__a,0,null);
} 
return G__45676__delegate.call(this,args);};
G__45676.cljs$lang$maxFixedArity = 0;
G__45676.cljs$lang$applyTo = (function (arglist__45678){
var args = cljs.core.seq(arglist__45678);
return G__45676__delegate(args);
});
G__45676.cljs$core$IFn$_invoke$arity$variadic = G__45676__delegate;
return G__45676;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__45679__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__45679 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45680__i = 0, G__45680__a = new Array(arguments.length -  0);
while (G__45680__i < G__45680__a.length) {G__45680__a[G__45680__i] = arguments[G__45680__i + 0]; ++G__45680__i;}
  args = new cljs.core.IndexedSeq(G__45680__a,0,null);
} 
return G__45679__delegate.call(this,args);};
G__45679.cljs$lang$maxFixedArity = 0;
G__45679.cljs$lang$applyTo = (function (arglist__45681){
var args = cljs.core.seq(arglist__45681);
return G__45679__delegate(args);
});
G__45679.cljs$core$IFn$_invoke$arity$variadic = G__45679__delegate;
return G__45679;
})()
;

return null;
});
