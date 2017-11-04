goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__46283__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__46283 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46284__i = 0, G__46284__a = new Array(arguments.length -  0);
while (G__46284__i < G__46284__a.length) {G__46284__a[G__46284__i] = arguments[G__46284__i + 0]; ++G__46284__i;}
  args = new cljs.core.IndexedSeq(G__46284__a,0,null);
} 
return G__46283__delegate.call(this,args);};
G__46283.cljs$lang$maxFixedArity = 0;
G__46283.cljs$lang$applyTo = (function (arglist__46285){
var args = cljs.core.seq(arglist__46285);
return G__46283__delegate(args);
});
G__46283.cljs$core$IFn$_invoke$arity$variadic = G__46283__delegate;
return G__46283;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__46286__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__46286 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46287__i = 0, G__46287__a = new Array(arguments.length -  0);
while (G__46287__i < G__46287__a.length) {G__46287__a[G__46287__i] = arguments[G__46287__i + 0]; ++G__46287__i;}
  args = new cljs.core.IndexedSeq(G__46287__a,0,null);
} 
return G__46286__delegate.call(this,args);};
G__46286.cljs$lang$maxFixedArity = 0;
G__46286.cljs$lang$applyTo = (function (arglist__46288){
var args = cljs.core.seq(arglist__46288);
return G__46286__delegate(args);
});
G__46286.cljs$core$IFn$_invoke$arity$variadic = G__46286__delegate;
return G__46286;
})()
;

return null;
});
