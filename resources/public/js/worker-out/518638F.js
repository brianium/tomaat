goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__45741__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__45741 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45742__i = 0, G__45742__a = new Array(arguments.length -  0);
while (G__45742__i < G__45742__a.length) {G__45742__a[G__45742__i] = arguments[G__45742__i + 0]; ++G__45742__i;}
  args = new cljs.core.IndexedSeq(G__45742__a,0,null);
} 
return G__45741__delegate.call(this,args);};
G__45741.cljs$lang$maxFixedArity = 0;
G__45741.cljs$lang$applyTo = (function (arglist__45743){
var args = cljs.core.seq(arglist__45743);
return G__45741__delegate(args);
});
G__45741.cljs$core$IFn$_invoke$arity$variadic = G__45741__delegate;
return G__45741;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__45744__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__45744 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45745__i = 0, G__45745__a = new Array(arguments.length -  0);
while (G__45745__i < G__45745__a.length) {G__45745__a[G__45745__i] = arguments[G__45745__i + 0]; ++G__45745__i;}
  args = new cljs.core.IndexedSeq(G__45745__a,0,null);
} 
return G__45744__delegate.call(this,args);};
G__45744.cljs$lang$maxFixedArity = 0;
G__45744.cljs$lang$applyTo = (function (arglist__45746){
var args = cljs.core.seq(arglist__45746);
return G__45744__delegate(args);
});
G__45744.cljs$core$IFn$_invoke$arity$variadic = G__45744__delegate;
return G__45744;
})()
;

return null;
});
