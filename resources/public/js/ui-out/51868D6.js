goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__45692__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__45692 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45693__i = 0, G__45693__a = new Array(arguments.length -  0);
while (G__45693__i < G__45693__a.length) {G__45693__a[G__45693__i] = arguments[G__45693__i + 0]; ++G__45693__i;}
  args = new cljs.core.IndexedSeq(G__45693__a,0,null);
} 
return G__45692__delegate.call(this,args);};
G__45692.cljs$lang$maxFixedArity = 0;
G__45692.cljs$lang$applyTo = (function (arglist__45694){
var args = cljs.core.seq(arglist__45694);
return G__45692__delegate(args);
});
G__45692.cljs$core$IFn$_invoke$arity$variadic = G__45692__delegate;
return G__45692;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__45695__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__45695 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45696__i = 0, G__45696__a = new Array(arguments.length -  0);
while (G__45696__i < G__45696__a.length) {G__45696__a[G__45696__i] = arguments[G__45696__i + 0]; ++G__45696__i;}
  args = new cljs.core.IndexedSeq(G__45696__a,0,null);
} 
return G__45695__delegate.call(this,args);};
G__45695.cljs$lang$maxFixedArity = 0;
G__45695.cljs$lang$applyTo = (function (arglist__45697){
var args = cljs.core.seq(arglist__45697);
return G__45695__delegate(args);
});
G__45695.cljs$core$IFn$_invoke$arity$variadic = G__45695__delegate;
return G__45695;
})()
;

return null;
});
