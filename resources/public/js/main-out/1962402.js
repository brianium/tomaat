goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__16129__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__16129 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16130__i = 0, G__16130__a = new Array(arguments.length -  0);
while (G__16130__i < G__16130__a.length) {G__16130__a[G__16130__i] = arguments[G__16130__i + 0]; ++G__16130__i;}
  args = new cljs.core.IndexedSeq(G__16130__a,0,null);
} 
return G__16129__delegate.call(this,args);};
G__16129.cljs$lang$maxFixedArity = 0;
G__16129.cljs$lang$applyTo = (function (arglist__16131){
var args = cljs.core.seq(arglist__16131);
return G__16129__delegate(args);
});
G__16129.cljs$core$IFn$_invoke$arity$variadic = G__16129__delegate;
return G__16129;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__16132__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__16132 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16133__i = 0, G__16133__a = new Array(arguments.length -  0);
while (G__16133__i < G__16133__a.length) {G__16133__a[G__16133__i] = arguments[G__16133__i + 0]; ++G__16133__i;}
  args = new cljs.core.IndexedSeq(G__16133__a,0,null);
} 
return G__16132__delegate.call(this,args);};
G__16132.cljs$lang$maxFixedArity = 0;
G__16132.cljs$lang$applyTo = (function (arglist__16134){
var args = cljs.core.seq(arglist__16134);
return G__16132__delegate(args);
});
G__16132.cljs$core$IFn$_invoke$arity$variadic = G__16132__delegate;
return G__16132;
})()
;

return null;
});
