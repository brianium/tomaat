goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__58451__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__58451 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__58452__i = 0, G__58452__a = new Array(arguments.length -  0);
while (G__58452__i < G__58452__a.length) {G__58452__a[G__58452__i] = arguments[G__58452__i + 0]; ++G__58452__i;}
  args = new cljs.core.IndexedSeq(G__58452__a,0,null);
} 
return G__58451__delegate.call(this,args);};
G__58451.cljs$lang$maxFixedArity = 0;
G__58451.cljs$lang$applyTo = (function (arglist__58453){
var args = cljs.core.seq(arglist__58453);
return G__58451__delegate(args);
});
G__58451.cljs$core$IFn$_invoke$arity$variadic = G__58451__delegate;
return G__58451;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__58454__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__58454 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__58455__i = 0, G__58455__a = new Array(arguments.length -  0);
while (G__58455__i < G__58455__a.length) {G__58455__a[G__58455__i] = arguments[G__58455__i + 0]; ++G__58455__i;}
  args = new cljs.core.IndexedSeq(G__58455__a,0,null);
} 
return G__58454__delegate.call(this,args);};
G__58454.cljs$lang$maxFixedArity = 0;
G__58454.cljs$lang$applyTo = (function (arglist__58456){
var args = cljs.core.seq(arglist__58456);
return G__58454__delegate(args);
});
G__58454.cljs$core$IFn$_invoke$arity$variadic = G__58454__delegate;
return G__58454;
})()
;

return null;
});
