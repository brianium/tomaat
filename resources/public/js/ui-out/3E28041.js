goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__40460__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__40460 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40461__i = 0, G__40461__a = new Array(arguments.length -  0);
while (G__40461__i < G__40461__a.length) {G__40461__a[G__40461__i] = arguments[G__40461__i + 0]; ++G__40461__i;}
  args = new cljs.core.IndexedSeq(G__40461__a,0,null);
} 
return G__40460__delegate.call(this,args);};
G__40460.cljs$lang$maxFixedArity = 0;
G__40460.cljs$lang$applyTo = (function (arglist__40462){
var args = cljs.core.seq(arglist__40462);
return G__40460__delegate(args);
});
G__40460.cljs$core$IFn$_invoke$arity$variadic = G__40460__delegate;
return G__40460;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__40463__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__40463 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40464__i = 0, G__40464__a = new Array(arguments.length -  0);
while (G__40464__i < G__40464__a.length) {G__40464__a[G__40464__i] = arguments[G__40464__i + 0]; ++G__40464__i;}
  args = new cljs.core.IndexedSeq(G__40464__a,0,null);
} 
return G__40463__delegate.call(this,args);};
G__40463.cljs$lang$maxFixedArity = 0;
G__40463.cljs$lang$applyTo = (function (arglist__40465){
var args = cljs.core.seq(arglist__40465);
return G__40463__delegate(args);
});
G__40463.cljs$core$IFn$_invoke$arity$variadic = G__40463__delegate;
return G__40463;
})()
;

return null;
});
