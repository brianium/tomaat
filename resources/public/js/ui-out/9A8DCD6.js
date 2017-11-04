goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__45707__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__45707 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45708__i = 0, G__45708__a = new Array(arguments.length -  0);
while (G__45708__i < G__45708__a.length) {G__45708__a[G__45708__i] = arguments[G__45708__i + 0]; ++G__45708__i;}
  args = new cljs.core.IndexedSeq(G__45708__a,0,null);
} 
return G__45707__delegate.call(this,args);};
G__45707.cljs$lang$maxFixedArity = 0;
G__45707.cljs$lang$applyTo = (function (arglist__45709){
var args = cljs.core.seq(arglist__45709);
return G__45707__delegate(args);
});
G__45707.cljs$core$IFn$_invoke$arity$variadic = G__45707__delegate;
return G__45707;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__45710__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__45710 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45711__i = 0, G__45711__a = new Array(arguments.length -  0);
while (G__45711__i < G__45711__a.length) {G__45711__a[G__45711__i] = arguments[G__45711__i + 0]; ++G__45711__i;}
  args = new cljs.core.IndexedSeq(G__45711__a,0,null);
} 
return G__45710__delegate.call(this,args);};
G__45710.cljs$lang$maxFixedArity = 0;
G__45710.cljs$lang$applyTo = (function (arglist__45712){
var args = cljs.core.seq(arglist__45712);
return G__45710__delegate(args);
});
G__45710.cljs$core$IFn$_invoke$arity$variadic = G__45710__delegate;
return G__45710;
})()
;

return null;
});
