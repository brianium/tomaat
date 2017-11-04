goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__45576__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__45576 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45577__i = 0, G__45577__a = new Array(arguments.length -  0);
while (G__45577__i < G__45577__a.length) {G__45577__a[G__45577__i] = arguments[G__45577__i + 0]; ++G__45577__i;}
  args = new cljs.core.IndexedSeq(G__45577__a,0,null);
} 
return G__45576__delegate.call(this,args);};
G__45576.cljs$lang$maxFixedArity = 0;
G__45576.cljs$lang$applyTo = (function (arglist__45578){
var args = cljs.core.seq(arglist__45578);
return G__45576__delegate(args);
});
G__45576.cljs$core$IFn$_invoke$arity$variadic = G__45576__delegate;
return G__45576;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__45579__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__45579 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45580__i = 0, G__45580__a = new Array(arguments.length -  0);
while (G__45580__i < G__45580__a.length) {G__45580__a[G__45580__i] = arguments[G__45580__i + 0]; ++G__45580__i;}
  args = new cljs.core.IndexedSeq(G__45580__a,0,null);
} 
return G__45579__delegate.call(this,args);};
G__45579.cljs$lang$maxFixedArity = 0;
G__45579.cljs$lang$applyTo = (function (arglist__45581){
var args = cljs.core.seq(arglist__45581);
return G__45579__delegate(args);
});
G__45579.cljs$core$IFn$_invoke$arity$variadic = G__45579__delegate;
return G__45579;
})()
;

return null;
});
