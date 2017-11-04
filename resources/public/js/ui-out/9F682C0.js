goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__45832__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__45832 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45833__i = 0, G__45833__a = new Array(arguments.length -  0);
while (G__45833__i < G__45833__a.length) {G__45833__a[G__45833__i] = arguments[G__45833__i + 0]; ++G__45833__i;}
  args = new cljs.core.IndexedSeq(G__45833__a,0,null);
} 
return G__45832__delegate.call(this,args);};
G__45832.cljs$lang$maxFixedArity = 0;
G__45832.cljs$lang$applyTo = (function (arglist__45834){
var args = cljs.core.seq(arglist__45834);
return G__45832__delegate(args);
});
G__45832.cljs$core$IFn$_invoke$arity$variadic = G__45832__delegate;
return G__45832;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__45835__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__45835 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45836__i = 0, G__45836__a = new Array(arguments.length -  0);
while (G__45836__i < G__45836__a.length) {G__45836__a[G__45836__i] = arguments[G__45836__i + 0]; ++G__45836__i;}
  args = new cljs.core.IndexedSeq(G__45836__a,0,null);
} 
return G__45835__delegate.call(this,args);};
G__45835.cljs$lang$maxFixedArity = 0;
G__45835.cljs$lang$applyTo = (function (arglist__45837){
var args = cljs.core.seq(arglist__45837);
return G__45835__delegate(args);
});
G__45835.cljs$core$IFn$_invoke$arity$variadic = G__45835__delegate;
return G__45835;
})()
;

return null;
});
