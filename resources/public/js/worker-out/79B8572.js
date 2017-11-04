goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__44972__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__44972 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44973__i = 0, G__44973__a = new Array(arguments.length -  0);
while (G__44973__i < G__44973__a.length) {G__44973__a[G__44973__i] = arguments[G__44973__i + 0]; ++G__44973__i;}
  args = new cljs.core.IndexedSeq(G__44973__a,0,null);
} 
return G__44972__delegate.call(this,args);};
G__44972.cljs$lang$maxFixedArity = 0;
G__44972.cljs$lang$applyTo = (function (arglist__44974){
var args = cljs.core.seq(arglist__44974);
return G__44972__delegate(args);
});
G__44972.cljs$core$IFn$_invoke$arity$variadic = G__44972__delegate;
return G__44972;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__44975__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__44975 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44976__i = 0, G__44976__a = new Array(arguments.length -  0);
while (G__44976__i < G__44976__a.length) {G__44976__a[G__44976__i] = arguments[G__44976__i + 0]; ++G__44976__i;}
  args = new cljs.core.IndexedSeq(G__44976__a,0,null);
} 
return G__44975__delegate.call(this,args);};
G__44975.cljs$lang$maxFixedArity = 0;
G__44975.cljs$lang$applyTo = (function (arglist__44977){
var args = cljs.core.seq(arglist__44977);
return G__44975__delegate(args);
});
G__44975.cljs$core$IFn$_invoke$arity$variadic = G__44975__delegate;
return G__44975;
})()
;

return null;
});
