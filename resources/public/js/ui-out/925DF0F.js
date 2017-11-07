goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__46043__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__46043 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46044__i = 0, G__46044__a = new Array(arguments.length -  0);
while (G__46044__i < G__46044__a.length) {G__46044__a[G__46044__i] = arguments[G__46044__i + 0]; ++G__46044__i;}
  args = new cljs.core.IndexedSeq(G__46044__a,0,null);
} 
return G__46043__delegate.call(this,args);};
G__46043.cljs$lang$maxFixedArity = 0;
G__46043.cljs$lang$applyTo = (function (arglist__46045){
var args = cljs.core.seq(arglist__46045);
return G__46043__delegate(args);
});
G__46043.cljs$core$IFn$_invoke$arity$variadic = G__46043__delegate;
return G__46043;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__46046__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__46046 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46047__i = 0, G__46047__a = new Array(arguments.length -  0);
while (G__46047__i < G__46047__a.length) {G__46047__a[G__46047__i] = arguments[G__46047__i + 0]; ++G__46047__i;}
  args = new cljs.core.IndexedSeq(G__46047__a,0,null);
} 
return G__46046__delegate.call(this,args);};
G__46046.cljs$lang$maxFixedArity = 0;
G__46046.cljs$lang$applyTo = (function (arglist__46048){
var args = cljs.core.seq(arglist__46048);
return G__46046__delegate(args);
});
G__46046.cljs$core$IFn$_invoke$arity$variadic = G__46046__delegate;
return G__46046;
})()
;

return null;
});
