goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__39555__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__39555 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39556__i = 0, G__39556__a = new Array(arguments.length -  0);
while (G__39556__i < G__39556__a.length) {G__39556__a[G__39556__i] = arguments[G__39556__i + 0]; ++G__39556__i;}
  args = new cljs.core.IndexedSeq(G__39556__a,0,null);
} 
return G__39555__delegate.call(this,args);};
G__39555.cljs$lang$maxFixedArity = 0;
G__39555.cljs$lang$applyTo = (function (arglist__39557){
var args = cljs.core.seq(arglist__39557);
return G__39555__delegate(args);
});
G__39555.cljs$core$IFn$_invoke$arity$variadic = G__39555__delegate;
return G__39555;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__39558__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__39558 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39559__i = 0, G__39559__a = new Array(arguments.length -  0);
while (G__39559__i < G__39559__a.length) {G__39559__a[G__39559__i] = arguments[G__39559__i + 0]; ++G__39559__i;}
  args = new cljs.core.IndexedSeq(G__39559__a,0,null);
} 
return G__39558__delegate.call(this,args);};
G__39558.cljs$lang$maxFixedArity = 0;
G__39558.cljs$lang$applyTo = (function (arglist__39560){
var args = cljs.core.seq(arglist__39560);
return G__39558__delegate(args);
});
G__39558.cljs$core$IFn$_invoke$arity$variadic = G__39558__delegate;
return G__39558;
})()
;

return null;
});
