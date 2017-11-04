goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__46385__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__46385 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46386__i = 0, G__46386__a = new Array(arguments.length -  0);
while (G__46386__i < G__46386__a.length) {G__46386__a[G__46386__i] = arguments[G__46386__i + 0]; ++G__46386__i;}
  args = new cljs.core.IndexedSeq(G__46386__a,0,null);
} 
return G__46385__delegate.call(this,args);};
G__46385.cljs$lang$maxFixedArity = 0;
G__46385.cljs$lang$applyTo = (function (arglist__46387){
var args = cljs.core.seq(arglist__46387);
return G__46385__delegate(args);
});
G__46385.cljs$core$IFn$_invoke$arity$variadic = G__46385__delegate;
return G__46385;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__46388__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__46388 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46389__i = 0, G__46389__a = new Array(arguments.length -  0);
while (G__46389__i < G__46389__a.length) {G__46389__a[G__46389__i] = arguments[G__46389__i + 0]; ++G__46389__i;}
  args = new cljs.core.IndexedSeq(G__46389__a,0,null);
} 
return G__46388__delegate.call(this,args);};
G__46388.cljs$lang$maxFixedArity = 0;
G__46388.cljs$lang$applyTo = (function (arglist__46390){
var args = cljs.core.seq(arglist__46390);
return G__46388__delegate(args);
});
G__46388.cljs$core$IFn$_invoke$arity$variadic = G__46388__delegate;
return G__46388;
})()
;

return null;
});
