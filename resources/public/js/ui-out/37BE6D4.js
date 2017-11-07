goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__40111__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__40111 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40112__i = 0, G__40112__a = new Array(arguments.length -  0);
while (G__40112__i < G__40112__a.length) {G__40112__a[G__40112__i] = arguments[G__40112__i + 0]; ++G__40112__i;}
  args = new cljs.core.IndexedSeq(G__40112__a,0,null);
} 
return G__40111__delegate.call(this,args);};
G__40111.cljs$lang$maxFixedArity = 0;
G__40111.cljs$lang$applyTo = (function (arglist__40113){
var args = cljs.core.seq(arglist__40113);
return G__40111__delegate(args);
});
G__40111.cljs$core$IFn$_invoke$arity$variadic = G__40111__delegate;
return G__40111;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__40114__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__40114 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40115__i = 0, G__40115__a = new Array(arguments.length -  0);
while (G__40115__i < G__40115__a.length) {G__40115__a[G__40115__i] = arguments[G__40115__i + 0]; ++G__40115__i;}
  args = new cljs.core.IndexedSeq(G__40115__a,0,null);
} 
return G__40114__delegate.call(this,args);};
G__40114.cljs$lang$maxFixedArity = 0;
G__40114.cljs$lang$applyTo = (function (arglist__40116){
var args = cljs.core.seq(arglist__40116);
return G__40114__delegate(args);
});
G__40114.cljs$core$IFn$_invoke$arity$variadic = G__40114__delegate;
return G__40114;
})()
;

return null;
});
