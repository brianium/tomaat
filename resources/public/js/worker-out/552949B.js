goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__59859__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__59859 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__59860__i = 0, G__59860__a = new Array(arguments.length -  0);
while (G__59860__i < G__59860__a.length) {G__59860__a[G__59860__i] = arguments[G__59860__i + 0]; ++G__59860__i;}
  args = new cljs.core.IndexedSeq(G__59860__a,0,null);
} 
return G__59859__delegate.call(this,args);};
G__59859.cljs$lang$maxFixedArity = 0;
G__59859.cljs$lang$applyTo = (function (arglist__59861){
var args = cljs.core.seq(arglist__59861);
return G__59859__delegate(args);
});
G__59859.cljs$core$IFn$_invoke$arity$variadic = G__59859__delegate;
return G__59859;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__59862__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__59862 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__59863__i = 0, G__59863__a = new Array(arguments.length -  0);
while (G__59863__i < G__59863__a.length) {G__59863__a[G__59863__i] = arguments[G__59863__i + 0]; ++G__59863__i;}
  args = new cljs.core.IndexedSeq(G__59863__a,0,null);
} 
return G__59862__delegate.call(this,args);};
G__59862.cljs$lang$maxFixedArity = 0;
G__59862.cljs$lang$applyTo = (function (arglist__59864){
var args = cljs.core.seq(arglist__59864);
return G__59862__delegate(args);
});
G__59862.cljs$core$IFn$_invoke$arity$variadic = G__59862__delegate;
return G__59862;
})()
;

return null;
});
