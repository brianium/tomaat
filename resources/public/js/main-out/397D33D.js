goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__58058__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__58058 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__58059__i = 0, G__58059__a = new Array(arguments.length -  0);
while (G__58059__i < G__58059__a.length) {G__58059__a[G__58059__i] = arguments[G__58059__i + 0]; ++G__58059__i;}
  args = new cljs.core.IndexedSeq(G__58059__a,0,null);
} 
return G__58058__delegate.call(this,args);};
G__58058.cljs$lang$maxFixedArity = 0;
G__58058.cljs$lang$applyTo = (function (arglist__58060){
var args = cljs.core.seq(arglist__58060);
return G__58058__delegate(args);
});
G__58058.cljs$core$IFn$_invoke$arity$variadic = G__58058__delegate;
return G__58058;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__58061__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__58061 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__58062__i = 0, G__58062__a = new Array(arguments.length -  0);
while (G__58062__i < G__58062__a.length) {G__58062__a[G__58062__i] = arguments[G__58062__i + 0]; ++G__58062__i;}
  args = new cljs.core.IndexedSeq(G__58062__a,0,null);
} 
return G__58061__delegate.call(this,args);};
G__58061.cljs$lang$maxFixedArity = 0;
G__58061.cljs$lang$applyTo = (function (arglist__58063){
var args = cljs.core.seq(arglist__58063);
return G__58061__delegate(args);
});
G__58061.cljs$core$IFn$_invoke$arity$variadic = G__58061__delegate;
return G__58061;
})()
;

return null;
});
