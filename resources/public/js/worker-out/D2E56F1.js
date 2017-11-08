goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__54146__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__54146 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__54147__i = 0, G__54147__a = new Array(arguments.length -  0);
while (G__54147__i < G__54147__a.length) {G__54147__a[G__54147__i] = arguments[G__54147__i + 0]; ++G__54147__i;}
  args = new cljs.core.IndexedSeq(G__54147__a,0,null);
} 
return G__54146__delegate.call(this,args);};
G__54146.cljs$lang$maxFixedArity = 0;
G__54146.cljs$lang$applyTo = (function (arglist__54148){
var args = cljs.core.seq(arglist__54148);
return G__54146__delegate(args);
});
G__54146.cljs$core$IFn$_invoke$arity$variadic = G__54146__delegate;
return G__54146;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__54149__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__54149 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__54150__i = 0, G__54150__a = new Array(arguments.length -  0);
while (G__54150__i < G__54150__a.length) {G__54150__a[G__54150__i] = arguments[G__54150__i + 0]; ++G__54150__i;}
  args = new cljs.core.IndexedSeq(G__54150__a,0,null);
} 
return G__54149__delegate.call(this,args);};
G__54149.cljs$lang$maxFixedArity = 0;
G__54149.cljs$lang$applyTo = (function (arglist__54151){
var args = cljs.core.seq(arglist__54151);
return G__54149__delegate(args);
});
G__54149.cljs$core$IFn$_invoke$arity$variadic = G__54149__delegate;
return G__54149;
})()
;

return null;
});
