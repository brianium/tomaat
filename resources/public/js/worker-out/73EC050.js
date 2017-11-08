goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__53200__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__53200 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__53201__i = 0, G__53201__a = new Array(arguments.length -  0);
while (G__53201__i < G__53201__a.length) {G__53201__a[G__53201__i] = arguments[G__53201__i + 0]; ++G__53201__i;}
  args = new cljs.core.IndexedSeq(G__53201__a,0,null);
} 
return G__53200__delegate.call(this,args);};
G__53200.cljs$lang$maxFixedArity = 0;
G__53200.cljs$lang$applyTo = (function (arglist__53202){
var args = cljs.core.seq(arglist__53202);
return G__53200__delegate(args);
});
G__53200.cljs$core$IFn$_invoke$arity$variadic = G__53200__delegate;
return G__53200;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__53203__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__53203 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__53204__i = 0, G__53204__a = new Array(arguments.length -  0);
while (G__53204__i < G__53204__a.length) {G__53204__a[G__53204__i] = arguments[G__53204__i + 0]; ++G__53204__i;}
  args = new cljs.core.IndexedSeq(G__53204__a,0,null);
} 
return G__53203__delegate.call(this,args);};
G__53203.cljs$lang$maxFixedArity = 0;
G__53203.cljs$lang$applyTo = (function (arglist__53205){
var args = cljs.core.seq(arglist__53205);
return G__53203__delegate(args);
});
G__53203.cljs$core$IFn$_invoke$arity$variadic = G__53203__delegate;
return G__53203;
})()
;

return null;
});
