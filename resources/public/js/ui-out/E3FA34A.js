goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__45539__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__45539 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45540__i = 0, G__45540__a = new Array(arguments.length -  0);
while (G__45540__i < G__45540__a.length) {G__45540__a[G__45540__i] = arguments[G__45540__i + 0]; ++G__45540__i;}
  args = new cljs.core.IndexedSeq(G__45540__a,0,null);
} 
return G__45539__delegate.call(this,args);};
G__45539.cljs$lang$maxFixedArity = 0;
G__45539.cljs$lang$applyTo = (function (arglist__45541){
var args = cljs.core.seq(arglist__45541);
return G__45539__delegate(args);
});
G__45539.cljs$core$IFn$_invoke$arity$variadic = G__45539__delegate;
return G__45539;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__45542__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__45542 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45543__i = 0, G__45543__a = new Array(arguments.length -  0);
while (G__45543__i < G__45543__a.length) {G__45543__a[G__45543__i] = arguments[G__45543__i + 0]; ++G__45543__i;}
  args = new cljs.core.IndexedSeq(G__45543__a,0,null);
} 
return G__45542__delegate.call(this,args);};
G__45542.cljs$lang$maxFixedArity = 0;
G__45542.cljs$lang$applyTo = (function (arglist__45544){
var args = cljs.core.seq(arglist__45544);
return G__45542__delegate(args);
});
G__45542.cljs$core$IFn$_invoke$arity$variadic = G__45542__delegate;
return G__45542;
})()
;

return null;
});
