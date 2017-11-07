goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__13985__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__13985 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13986__i = 0, G__13986__a = new Array(arguments.length -  0);
while (G__13986__i < G__13986__a.length) {G__13986__a[G__13986__i] = arguments[G__13986__i + 0]; ++G__13986__i;}
  args = new cljs.core.IndexedSeq(G__13986__a,0,null);
} 
return G__13985__delegate.call(this,args);};
G__13985.cljs$lang$maxFixedArity = 0;
G__13985.cljs$lang$applyTo = (function (arglist__13987){
var args = cljs.core.seq(arglist__13987);
return G__13985__delegate(args);
});
G__13985.cljs$core$IFn$_invoke$arity$variadic = G__13985__delegate;
return G__13985;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__13988__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__13988 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13989__i = 0, G__13989__a = new Array(arguments.length -  0);
while (G__13989__i < G__13989__a.length) {G__13989__a[G__13989__i] = arguments[G__13989__i + 0]; ++G__13989__i;}
  args = new cljs.core.IndexedSeq(G__13989__a,0,null);
} 
return G__13988__delegate.call(this,args);};
G__13988.cljs$lang$maxFixedArity = 0;
G__13988.cljs$lang$applyTo = (function (arglist__13990){
var args = cljs.core.seq(arglist__13990);
return G__13988__delegate(args);
});
G__13988.cljs$core$IFn$_invoke$arity$variadic = G__13988__delegate;
return G__13988;
})()
;

return null;
});
