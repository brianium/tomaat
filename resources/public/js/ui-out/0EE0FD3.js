goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__45155__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__45155 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45156__i = 0, G__45156__a = new Array(arguments.length -  0);
while (G__45156__i < G__45156__a.length) {G__45156__a[G__45156__i] = arguments[G__45156__i + 0]; ++G__45156__i;}
  args = new cljs.core.IndexedSeq(G__45156__a,0,null);
} 
return G__45155__delegate.call(this,args);};
G__45155.cljs$lang$maxFixedArity = 0;
G__45155.cljs$lang$applyTo = (function (arglist__45157){
var args = cljs.core.seq(arglist__45157);
return G__45155__delegate(args);
});
G__45155.cljs$core$IFn$_invoke$arity$variadic = G__45155__delegate;
return G__45155;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__45158__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__45158 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45159__i = 0, G__45159__a = new Array(arguments.length -  0);
while (G__45159__i < G__45159__a.length) {G__45159__a[G__45159__i] = arguments[G__45159__i + 0]; ++G__45159__i;}
  args = new cljs.core.IndexedSeq(G__45159__a,0,null);
} 
return G__45158__delegate.call(this,args);};
G__45158.cljs$lang$maxFixedArity = 0;
G__45158.cljs$lang$applyTo = (function (arglist__45160){
var args = cljs.core.seq(arglist__45160);
return G__45158__delegate(args);
});
G__45158.cljs$core$IFn$_invoke$arity$variadic = G__45158__delegate;
return G__45158;
})()
;

return null;
});
