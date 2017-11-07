goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15394__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15394 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15395__i = 0, G__15395__a = new Array(arguments.length -  0);
while (G__15395__i < G__15395__a.length) {G__15395__a[G__15395__i] = arguments[G__15395__i + 0]; ++G__15395__i;}
  args = new cljs.core.IndexedSeq(G__15395__a,0,null);
} 
return G__15394__delegate.call(this,args);};
G__15394.cljs$lang$maxFixedArity = 0;
G__15394.cljs$lang$applyTo = (function (arglist__15396){
var args = cljs.core.seq(arglist__15396);
return G__15394__delegate(args);
});
G__15394.cljs$core$IFn$_invoke$arity$variadic = G__15394__delegate;
return G__15394;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15397__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15397 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15398__i = 0, G__15398__a = new Array(arguments.length -  0);
while (G__15398__i < G__15398__a.length) {G__15398__a[G__15398__i] = arguments[G__15398__i + 0]; ++G__15398__i;}
  args = new cljs.core.IndexedSeq(G__15398__a,0,null);
} 
return G__15397__delegate.call(this,args);};
G__15397.cljs$lang$maxFixedArity = 0;
G__15397.cljs$lang$applyTo = (function (arglist__15399){
var args = cljs.core.seq(arglist__15399);
return G__15397__delegate(args);
});
G__15397.cljs$core$IFn$_invoke$arity$variadic = G__15397__delegate;
return G__15397;
})()
;

return null;
});
