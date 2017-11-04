goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__45028__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__45028 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45029__i = 0, G__45029__a = new Array(arguments.length -  0);
while (G__45029__i < G__45029__a.length) {G__45029__a[G__45029__i] = arguments[G__45029__i + 0]; ++G__45029__i;}
  args = new cljs.core.IndexedSeq(G__45029__a,0,null);
} 
return G__45028__delegate.call(this,args);};
G__45028.cljs$lang$maxFixedArity = 0;
G__45028.cljs$lang$applyTo = (function (arglist__45030){
var args = cljs.core.seq(arglist__45030);
return G__45028__delegate(args);
});
G__45028.cljs$core$IFn$_invoke$arity$variadic = G__45028__delegate;
return G__45028;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__45031__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__45031 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45032__i = 0, G__45032__a = new Array(arguments.length -  0);
while (G__45032__i < G__45032__a.length) {G__45032__a[G__45032__i] = arguments[G__45032__i + 0]; ++G__45032__i;}
  args = new cljs.core.IndexedSeq(G__45032__a,0,null);
} 
return G__45031__delegate.call(this,args);};
G__45031.cljs$lang$maxFixedArity = 0;
G__45031.cljs$lang$applyTo = (function (arglist__45033){
var args = cljs.core.seq(arglist__45033);
return G__45031__delegate(args);
});
G__45031.cljs$core$IFn$_invoke$arity$variadic = G__45031__delegate;
return G__45031;
})()
;

return null;
});
