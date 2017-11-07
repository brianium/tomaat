goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15432__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15432 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15433__i = 0, G__15433__a = new Array(arguments.length -  0);
while (G__15433__i < G__15433__a.length) {G__15433__a[G__15433__i] = arguments[G__15433__i + 0]; ++G__15433__i;}
  args = new cljs.core.IndexedSeq(G__15433__a,0,null);
} 
return G__15432__delegate.call(this,args);};
G__15432.cljs$lang$maxFixedArity = 0;
G__15432.cljs$lang$applyTo = (function (arglist__15434){
var args = cljs.core.seq(arglist__15434);
return G__15432__delegate(args);
});
G__15432.cljs$core$IFn$_invoke$arity$variadic = G__15432__delegate;
return G__15432;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15435__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15435 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15436__i = 0, G__15436__a = new Array(arguments.length -  0);
while (G__15436__i < G__15436__a.length) {G__15436__a[G__15436__i] = arguments[G__15436__i + 0]; ++G__15436__i;}
  args = new cljs.core.IndexedSeq(G__15436__a,0,null);
} 
return G__15435__delegate.call(this,args);};
G__15435.cljs$lang$maxFixedArity = 0;
G__15435.cljs$lang$applyTo = (function (arglist__15437){
var args = cljs.core.seq(arglist__15437);
return G__15435__delegate(args);
});
G__15435.cljs$core$IFn$_invoke$arity$variadic = G__15435__delegate;
return G__15435;
})()
;

return null;
});
