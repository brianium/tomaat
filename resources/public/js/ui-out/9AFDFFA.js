goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__59792__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__59792 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__59793__i = 0, G__59793__a = new Array(arguments.length -  0);
while (G__59793__i < G__59793__a.length) {G__59793__a[G__59793__i] = arguments[G__59793__i + 0]; ++G__59793__i;}
  args = new cljs.core.IndexedSeq(G__59793__a,0,null);
} 
return G__59792__delegate.call(this,args);};
G__59792.cljs$lang$maxFixedArity = 0;
G__59792.cljs$lang$applyTo = (function (arglist__59794){
var args = cljs.core.seq(arglist__59794);
return G__59792__delegate(args);
});
G__59792.cljs$core$IFn$_invoke$arity$variadic = G__59792__delegate;
return G__59792;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__59795__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__59795 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__59796__i = 0, G__59796__a = new Array(arguments.length -  0);
while (G__59796__i < G__59796__a.length) {G__59796__a[G__59796__i] = arguments[G__59796__i + 0]; ++G__59796__i;}
  args = new cljs.core.IndexedSeq(G__59796__a,0,null);
} 
return G__59795__delegate.call(this,args);};
G__59795.cljs$lang$maxFixedArity = 0;
G__59795.cljs$lang$applyTo = (function (arglist__59797){
var args = cljs.core.seq(arglist__59797);
return G__59795__delegate(args);
});
G__59795.cljs$core$IFn$_invoke$arity$variadic = G__59795__delegate;
return G__59795;
})()
;

return null;
});
