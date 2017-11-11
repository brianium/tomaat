goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__59843__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__59843 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__59844__i = 0, G__59844__a = new Array(arguments.length -  0);
while (G__59844__i < G__59844__a.length) {G__59844__a[G__59844__i] = arguments[G__59844__i + 0]; ++G__59844__i;}
  args = new cljs.core.IndexedSeq(G__59844__a,0,null);
} 
return G__59843__delegate.call(this,args);};
G__59843.cljs$lang$maxFixedArity = 0;
G__59843.cljs$lang$applyTo = (function (arglist__59845){
var args = cljs.core.seq(arglist__59845);
return G__59843__delegate(args);
});
G__59843.cljs$core$IFn$_invoke$arity$variadic = G__59843__delegate;
return G__59843;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__59846__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__59846 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__59847__i = 0, G__59847__a = new Array(arguments.length -  0);
while (G__59847__i < G__59847__a.length) {G__59847__a[G__59847__i] = arguments[G__59847__i + 0]; ++G__59847__i;}
  args = new cljs.core.IndexedSeq(G__59847__a,0,null);
} 
return G__59846__delegate.call(this,args);};
G__59846.cljs$lang$maxFixedArity = 0;
G__59846.cljs$lang$applyTo = (function (arglist__59848){
var args = cljs.core.seq(arglist__59848);
return G__59846__delegate(args);
});
G__59846.cljs$core$IFn$_invoke$arity$variadic = G__59846__delegate;
return G__59846;
})()
;

return null;
});
