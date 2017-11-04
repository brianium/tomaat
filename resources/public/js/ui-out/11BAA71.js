goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__45413__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__45413 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45414__i = 0, G__45414__a = new Array(arguments.length -  0);
while (G__45414__i < G__45414__a.length) {G__45414__a[G__45414__i] = arguments[G__45414__i + 0]; ++G__45414__i;}
  args = new cljs.core.IndexedSeq(G__45414__a,0,null);
} 
return G__45413__delegate.call(this,args);};
G__45413.cljs$lang$maxFixedArity = 0;
G__45413.cljs$lang$applyTo = (function (arglist__45415){
var args = cljs.core.seq(arglist__45415);
return G__45413__delegate(args);
});
G__45413.cljs$core$IFn$_invoke$arity$variadic = G__45413__delegate;
return G__45413;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__45416__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__45416 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45417__i = 0, G__45417__a = new Array(arguments.length -  0);
while (G__45417__i < G__45417__a.length) {G__45417__a[G__45417__i] = arguments[G__45417__i + 0]; ++G__45417__i;}
  args = new cljs.core.IndexedSeq(G__45417__a,0,null);
} 
return G__45416__delegate.call(this,args);};
G__45416.cljs$lang$maxFixedArity = 0;
G__45416.cljs$lang$applyTo = (function (arglist__45418){
var args = cljs.core.seq(arglist__45418);
return G__45416__delegate(args);
});
G__45416.cljs$core$IFn$_invoke$arity$variadic = G__45416__delegate;
return G__45416;
})()
;

return null;
});
