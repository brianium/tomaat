goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__53693__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__53693 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__53694__i = 0, G__53694__a = new Array(arguments.length -  0);
while (G__53694__i < G__53694__a.length) {G__53694__a[G__53694__i] = arguments[G__53694__i + 0]; ++G__53694__i;}
  args = new cljs.core.IndexedSeq(G__53694__a,0,null);
} 
return G__53693__delegate.call(this,args);};
G__53693.cljs$lang$maxFixedArity = 0;
G__53693.cljs$lang$applyTo = (function (arglist__53695){
var args = cljs.core.seq(arglist__53695);
return G__53693__delegate(args);
});
G__53693.cljs$core$IFn$_invoke$arity$variadic = G__53693__delegate;
return G__53693;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__53696__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__53696 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__53697__i = 0, G__53697__a = new Array(arguments.length -  0);
while (G__53697__i < G__53697__a.length) {G__53697__a[G__53697__i] = arguments[G__53697__i + 0]; ++G__53697__i;}
  args = new cljs.core.IndexedSeq(G__53697__a,0,null);
} 
return G__53696__delegate.call(this,args);};
G__53696.cljs$lang$maxFixedArity = 0;
G__53696.cljs$lang$applyTo = (function (arglist__53698){
var args = cljs.core.seq(arglist__53698);
return G__53696__delegate(args);
});
G__53696.cljs$core$IFn$_invoke$arity$variadic = G__53696__delegate;
return G__53696;
})()
;

return null;
});
