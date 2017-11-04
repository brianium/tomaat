goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__45123__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__45123 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45124__i = 0, G__45124__a = new Array(arguments.length -  0);
while (G__45124__i < G__45124__a.length) {G__45124__a[G__45124__i] = arguments[G__45124__i + 0]; ++G__45124__i;}
  args = new cljs.core.IndexedSeq(G__45124__a,0,null);
} 
return G__45123__delegate.call(this,args);};
G__45123.cljs$lang$maxFixedArity = 0;
G__45123.cljs$lang$applyTo = (function (arglist__45125){
var args = cljs.core.seq(arglist__45125);
return G__45123__delegate(args);
});
G__45123.cljs$core$IFn$_invoke$arity$variadic = G__45123__delegate;
return G__45123;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__45126__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__45126 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45127__i = 0, G__45127__a = new Array(arguments.length -  0);
while (G__45127__i < G__45127__a.length) {G__45127__a[G__45127__i] = arguments[G__45127__i + 0]; ++G__45127__i;}
  args = new cljs.core.IndexedSeq(G__45127__a,0,null);
} 
return G__45126__delegate.call(this,args);};
G__45126.cljs$lang$maxFixedArity = 0;
G__45126.cljs$lang$applyTo = (function (arglist__45128){
var args = cljs.core.seq(arglist__45128);
return G__45126__delegate(args);
});
G__45126.cljs$core$IFn$_invoke$arity$variadic = G__45126__delegate;
return G__45126;
})()
;

return null;
});
