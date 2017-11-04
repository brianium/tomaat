goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__44992__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__44992 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44993__i = 0, G__44993__a = new Array(arguments.length -  0);
while (G__44993__i < G__44993__a.length) {G__44993__a[G__44993__i] = arguments[G__44993__i + 0]; ++G__44993__i;}
  args = new cljs.core.IndexedSeq(G__44993__a,0,null);
} 
return G__44992__delegate.call(this,args);};
G__44992.cljs$lang$maxFixedArity = 0;
G__44992.cljs$lang$applyTo = (function (arglist__44994){
var args = cljs.core.seq(arglist__44994);
return G__44992__delegate(args);
});
G__44992.cljs$core$IFn$_invoke$arity$variadic = G__44992__delegate;
return G__44992;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__44995__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__44995 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44996__i = 0, G__44996__a = new Array(arguments.length -  0);
while (G__44996__i < G__44996__a.length) {G__44996__a[G__44996__i] = arguments[G__44996__i + 0]; ++G__44996__i;}
  args = new cljs.core.IndexedSeq(G__44996__a,0,null);
} 
return G__44995__delegate.call(this,args);};
G__44995.cljs$lang$maxFixedArity = 0;
G__44995.cljs$lang$applyTo = (function (arglist__44997){
var args = cljs.core.seq(arglist__44997);
return G__44995__delegate(args);
});
G__44995.cljs$core$IFn$_invoke$arity$variadic = G__44995__delegate;
return G__44995;
})()
;

return null;
});
