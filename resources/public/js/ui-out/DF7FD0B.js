goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__58175__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__58175 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__58176__i = 0, G__58176__a = new Array(arguments.length -  0);
while (G__58176__i < G__58176__a.length) {G__58176__a[G__58176__i] = arguments[G__58176__i + 0]; ++G__58176__i;}
  args = new cljs.core.IndexedSeq(G__58176__a,0,null);
} 
return G__58175__delegate.call(this,args);};
G__58175.cljs$lang$maxFixedArity = 0;
G__58175.cljs$lang$applyTo = (function (arglist__58177){
var args = cljs.core.seq(arglist__58177);
return G__58175__delegate(args);
});
G__58175.cljs$core$IFn$_invoke$arity$variadic = G__58175__delegate;
return G__58175;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__58178__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__58178 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__58179__i = 0, G__58179__a = new Array(arguments.length -  0);
while (G__58179__i < G__58179__a.length) {G__58179__a[G__58179__i] = arguments[G__58179__i + 0]; ++G__58179__i;}
  args = new cljs.core.IndexedSeq(G__58179__a,0,null);
} 
return G__58178__delegate.call(this,args);};
G__58178.cljs$lang$maxFixedArity = 0;
G__58178.cljs$lang$applyTo = (function (arglist__58180){
var args = cljs.core.seq(arglist__58180);
return G__58178__delegate(args);
});
G__58178.cljs$core$IFn$_invoke$arity$variadic = G__58178__delegate;
return G__58178;
})()
;

return null;
});
