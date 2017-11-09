goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__57956__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__57956 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__57957__i = 0, G__57957__a = new Array(arguments.length -  0);
while (G__57957__i < G__57957__a.length) {G__57957__a[G__57957__i] = arguments[G__57957__i + 0]; ++G__57957__i;}
  args = new cljs.core.IndexedSeq(G__57957__a,0,null);
} 
return G__57956__delegate.call(this,args);};
G__57956.cljs$lang$maxFixedArity = 0;
G__57956.cljs$lang$applyTo = (function (arglist__57958){
var args = cljs.core.seq(arglist__57958);
return G__57956__delegate(args);
});
G__57956.cljs$core$IFn$_invoke$arity$variadic = G__57956__delegate;
return G__57956;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__57959__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__57959 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__57960__i = 0, G__57960__a = new Array(arguments.length -  0);
while (G__57960__i < G__57960__a.length) {G__57960__a[G__57960__i] = arguments[G__57960__i + 0]; ++G__57960__i;}
  args = new cljs.core.IndexedSeq(G__57960__a,0,null);
} 
return G__57959__delegate.call(this,args);};
G__57959.cljs$lang$maxFixedArity = 0;
G__57959.cljs$lang$applyTo = (function (arglist__57961){
var args = cljs.core.seq(arglist__57961);
return G__57959__delegate(args);
});
G__57959.cljs$core$IFn$_invoke$arity$variadic = G__57959__delegate;
return G__57959;
})()
;

return null;
});
