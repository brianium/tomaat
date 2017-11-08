goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__52105__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__52105 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52106__i = 0, G__52106__a = new Array(arguments.length -  0);
while (G__52106__i < G__52106__a.length) {G__52106__a[G__52106__i] = arguments[G__52106__i + 0]; ++G__52106__i;}
  args = new cljs.core.IndexedSeq(G__52106__a,0,null);
} 
return G__52105__delegate.call(this,args);};
G__52105.cljs$lang$maxFixedArity = 0;
G__52105.cljs$lang$applyTo = (function (arglist__52107){
var args = cljs.core.seq(arglist__52107);
return G__52105__delegate(args);
});
G__52105.cljs$core$IFn$_invoke$arity$variadic = G__52105__delegate;
return G__52105;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__52108__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__52108 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52109__i = 0, G__52109__a = new Array(arguments.length -  0);
while (G__52109__i < G__52109__a.length) {G__52109__a[G__52109__i] = arguments[G__52109__i + 0]; ++G__52109__i;}
  args = new cljs.core.IndexedSeq(G__52109__a,0,null);
} 
return G__52108__delegate.call(this,args);};
G__52108.cljs$lang$maxFixedArity = 0;
G__52108.cljs$lang$applyTo = (function (arglist__52110){
var args = cljs.core.seq(arglist__52110);
return G__52108__delegate(args);
});
G__52108.cljs$core$IFn$_invoke$arity$variadic = G__52108__delegate;
return G__52108;
})()
;

return null;
});
