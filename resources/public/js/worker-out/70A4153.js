goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__52952__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__52952 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52953__i = 0, G__52953__a = new Array(arguments.length -  0);
while (G__52953__i < G__52953__a.length) {G__52953__a[G__52953__i] = arguments[G__52953__i + 0]; ++G__52953__i;}
  args = new cljs.core.IndexedSeq(G__52953__a,0,null);
} 
return G__52952__delegate.call(this,args);};
G__52952.cljs$lang$maxFixedArity = 0;
G__52952.cljs$lang$applyTo = (function (arglist__52954){
var args = cljs.core.seq(arglist__52954);
return G__52952__delegate(args);
});
G__52952.cljs$core$IFn$_invoke$arity$variadic = G__52952__delegate;
return G__52952;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__52955__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__52955 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52956__i = 0, G__52956__a = new Array(arguments.length -  0);
while (G__52956__i < G__52956__a.length) {G__52956__a[G__52956__i] = arguments[G__52956__i + 0]; ++G__52956__i;}
  args = new cljs.core.IndexedSeq(G__52956__a,0,null);
} 
return G__52955__delegate.call(this,args);};
G__52955.cljs$lang$maxFixedArity = 0;
G__52955.cljs$lang$applyTo = (function (arglist__52957){
var args = cljs.core.seq(arglist__52957);
return G__52955__delegate(args);
});
G__52955.cljs$core$IFn$_invoke$arity$variadic = G__52955__delegate;
return G__52955;
})()
;

return null;
});
